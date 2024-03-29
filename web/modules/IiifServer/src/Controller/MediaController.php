<?php declare(strict_types=1);

/*
 * Copyright 2015-2021 Daniel Berthereau
 * Copyright 2016-2017 BibLibre
 *
 * This software is governed by the CeCILL license under French law and abiding
 * by the rules of distribution of free software. You can use, modify and/or
 * redistribute the software under the terms of the CeCILL license as circulated
 * by CEA, CNRS and INRIA at the following URL "http://www.cecill.info".
 *
 * As a counterpart to the access to the source code and rights to copy, modify
 * and redistribute granted by the license, users are provided only with a
 * limited warranty and the software’s author, the holder of the economic
 * rights, and the successive licensors have only limited liability.
 *
 * In this respect, the user’s attention is drawn to the risks associated with
 * loading, using, modifying and/or developing or reproducing the software by
 * the user in light of its specific status of free software, that may mean that
 * it is complicated to manipulate, and that also therefore means that it is
 * reserved for developers and experienced professionals having in-depth
 * computer knowledge. Users are therefore encouraged to load and test the
 * software’s suitability as regards their requirements in conditions enabling
 * the security of their systems and/or data to be ensured and, more generally,
 * to use and operate it in the same conditions as regards security.
 *
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 */

namespace IiifServer\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Omeka\File\Store\StoreInterface;
use Omeka\Stdlib\Message;

/**
 * The Media controller class.
 *
 * @package ImageServer
 */
class MediaController extends AbstractActionController
{
    use IiifServerControllerTrait;

    protected $routeInfo = 'mediaserver/info';

    /**
     * @var StoreInterface
     */
    protected $store;

    public function __construct($store, $basePath)
    {
        $this->store = $store;
        $this->basePath = $basePath;
    }

    /**
     * Returns the current file.
     */
    public function fetchAction()
    {
        $media = $this->fetchResource('media');
        if (!$media) {
            return $this->viewError(new Message(
                'Media "%s" not found.', // @translate
                $this->params('id')
            ), \Laminas\Http\Response::STATUS_CODE_404);
        }

        $response = $this->getResponse();

        // Because there is no conversion currently, the format should be
        // checked.
        $format = strtolower((string) $this->params('format'));
        if (pathinfo($media->filename(), PATHINFO_EXTENSION) != $format) {
            return $this->viewError(new Message(
                'The IXIF server encountered an unexpected error that prevented it from fulfilling the request: the requested format is not supported.' // @translate
            ), \Laminas\Http\Response::STATUS_CODE_500);
        }

        // A check is added if the file is local: the source can be a local file
        // or an external one (Amazon S3…).
        switch (get_class($this->store)) {
            case \Omeka\File\Store\Local::class:
                $filepath = $this->basePath
                    . DIRECTORY_SEPARATOR . $this->getStoragePath('original', $media->filename());
                if (!file_exists($filepath) || filesize($filepath) == 0) {
                    return $this->viewError(new Message(
                        'The IXIF server encountered an unexpected error that prevented it from fulfilling the request: the resulting file is not found.' // @translate
                    ), \Laminas\Http\Response::STATUS_CODE_500);
                }
                break;
        }
        // TODO Check if the external url is not empty.

        // Header for CORS, required for access of IXIF.
        $response->getHeaders()
            ->addHeaderLine('access-control-allow-origin', '*')
            ->addHeaderLine('Content-Type', $media->mediaType());

        // TODO This is a local file (normal server): use 200.

        // Redirect (302/307) to the url of the file.
        $fileUrl = $media->originalUrl();
        return $this->redirect()->toUrl($fileUrl);
    }
}
