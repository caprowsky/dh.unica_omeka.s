<?php declare(strict_types=1);

/*
 * Copyright 2020-2021 Daniel Berthereau
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

namespace IiifServer\Iiif;

trait TraitMedia
{
    /**
     * @var \IiifServer\Mvc\Controller\Plugin\MediaDimension
     */
    protected $mediaDimension;

    /**
     * @var \IiifServer\Mvc\Controller\Plugin\ImageSize
     */
    protected $imageSize;

    /**
     * @var bool
     */
    protected $isMediaIiif;

    protected $formatsToMediaTypes = [
        // @link https://iiif.io/api/image/3.0/#45-format
        'jpg' => 'image/jpeg',
        'tif' => 'image/tiff',
        'png' => 'image/png',
        'gif' => 'image/gif',
        'jp2' => 'image/jp2',
        'pdf' => 'application/pdf',
        'webp' => 'image/webp',
        // There is no specified format for audio/video, so take web list from
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        '3g2' => 'video/3gpp2',
        '3gp' => 'video/3gpp',
        'aac' => 'audio/aac',
        'avi' => 'video/x-msvideo',
        'bmp' => 'image/bmp',
        'gif' => 'image/gif',
        'htm' => 'text/html',
        'html' => 'text/html',
        'ico' => 'image/vnd.microsoft.icon',
        'jpeg' => 'image/jpeg',
        'mid' => 'audio/midi',
        'midi' => 'audio/midi',
        'mp3' => 'audio/mpeg',
        'mp4' => 'video/mpeg',
        'mpeg' => 'video/mpeg',
        'oga' => 'audio/ogg',
        'ogv' => 'video/ogg',
        'ogx' => 'application/ogg',
        'opus' => 'audio/opus',
        'pdf' => 'application/pdf',
        'png' => 'image/png',
        'svg' => 'image/svg+xml',
        'tif' => 'image/tiff',
        'tiff' => 'image/tiff',
        'ts' => 'video/mp2t',
        'txt' => 'text/plain',
        'wav' => 'audio/wav',
        'weba' => 'audio/webm',
        'webm' => 'video/webm',
        'webp' => 'image/webp',
        'xhtml' => 'application/xhtml+xml',
        'xml' => 'text/xml',
        // To support a proprietary format that is not supported by many browsers/os:
        // Add it in config/config.module.php too.
        // 'wmv' => 'video/x-ms-wmv',
    ];

    protected function initMedia(): AbstractType
    {
        $services = $this->resource->getServiceLocator();
        $controllerPlugins = $services->get('ControllerPluginManager');
        $this->mediaDimension = $controllerPlugins->get('mediaDimension');
        $this->imageSize = $controllerPlugins->get('imageSize');
        return $this;
    }

    public function isImage(): bool
    {
        return $this->type === 'Image';
    }

    public function isAudioVideo(): bool
    {
        return $this->type === 'Video'
            || $this->type === 'Sound';
    }

    public function isAudio(): bool
    {
        return $this->type === 'Sound';
    }

    public function isVideo(): bool
    {
        return $this->type === 'Video';
    }

    public function height(): ?int
    {
        return $this->mediaSize()['height'];
    }

    public function width(): ?int
    {
        return $this->mediaSize()['width'];
    }

    /**
     * Duration is a string, because the format is not defined: time, seconds, or float.
     */
    public function duration(): ?string
    {
        return $this->mediaDimension()['duration'];
    }

    /**
     * Get the media type of the resource.
     *
     * @todo Manage the format of non-file resources (iiif, oembed, etc.).
     * @todo Manage the preferred output for the format.
     */
    public function format(): ?string
    {
        if ($this->isMediaIiif()) {
            // @link https://iiif.io/api/image/3.0/compliance/
            // There is no required media type for iiif types except image/jpeg.
            $mediaData = $this->resource->mediaData();
            $format = !empty($mediaData['preferredFormats'])
                ? reset($mediaData['preferredFormats'])
                : (!empty($mediaData['format']) ? $mediaData['format'] : '');
            if ($format) {
                if (isset($this->formatsToMediaTypes[$format])) {
                    return $this->formatsToMediaTypes[$format];
                }
            }

            // Whatever level, image/jpeg is the only required type.
            if ($this->isImage()) {
                return 'image/jpeg';
            }

            // TODO Find the good media type from iiif.
            return 'application/octet-stream';
        }

        $mediaType = $this->resource->mediaType();
        if ($mediaType) {
            if ($mediaType === 'text/plain' || $mediaType === 'application/json') {
                $extension = strtolower(pathinfo((string) $this->resource->source(), PATHINFO_EXTENSION));
                // TODO Convert old "text/plain" into "application/json" or "model/gltf+json".
                if ($extension === 'json') {
                    return 'model/vnd.threejs+json';
                } elseif ($extension === 'gltf') {
                    return 'model/gltf+json';
                }
            }
            if ($mediaType === 'application/octet-stream') {
                $extension = strtolower(pathinfo((string) $this->resource->source(), PATHINFO_EXTENSION));
                if ($extension === 'glb') {
                    return 'model/gltf-binary';
                }
            }
            // TODO Don't use the original format for the image?
            return $this->isImage() ? 'image/jpeg' : $mediaType;
        }

        return null;
    }

    /**
     * Manage iiif media.
     */
    protected function isMediaIiif(): bool
    {
        if (is_null($this->isMediaIiif)) {
            $media = $this->resource->primaryMedia();
            $this->isMediaIiif = $media && $media->ingester() === 'iiif';
        }
        return $this->isMediaIiif;
    }

    protected function mediaSize(): array
    {
        $data = $this->mediaDimension();
        return [
            'width' => $data['width'],
            'height' => $data['height'],
        ];
    }

    protected function mediaDimension(): array
    {
        if (!array_key_exists('media_dimension', $this->_storage)) {
            $this->_storage['media_dimension'] = ['width' => null, 'height' => null, 'duration' => null];
            /** @var ?\Omeka\Api\Representation\MediaRepresentation $media */
            $media = $this->resource->primaryMedia();
            if (!$media) {
                return $this->_storage['media_dimension'];
            }

            // Automatic check via the ingester.
            $ingester = $media->ingester();
            switch ($ingester) {
                case 'iiif':
                    // Currently, Omeka manages only images, but doesn't check.
                    $mediaData = $media->mediaData();
                    if (isset($mediaData['width'])) {
                        $this->_storage['media_dimension']['width'] = (int) $mediaData['width'];
                    }
                    if (isset($mediaData['height'])) {
                        $this->_storage['media_dimension']['height'] = (int) $mediaData['height'];
                    }
                    if (isset($mediaData['duration'])) {
                        $this->_storage['media_dimension']['duration'] = (string) $mediaData['duration'];
                    }
                    return $this->_storage['media_dimension'];
                // TODO Manage other type of media (youtube, etc.).
                default:
                    break;
            }

            // Manual check.
            if ($this->isAudioVideo()) {
                $this->_storage['media_dimension'] = $this->mediaDimension->__invoke($media);
            } elseif ($this->isImage()) {
                $this->_storage['media_dimension'] = $this->imageSize->__invoke($media);
                $this->_storage['media_dimension']['duration'] = null;
            }
            // Data may be stored in a bad format.
            $this->_storage['media_dimension']['width'] = $this->_storage['media_dimension']['width'] ? (int) $this->_storage['media_dimension']['width'] : null;
            $this->_storage['media_dimension']['height'] = $this->_storage['media_dimension']['height'] ? (int) $this->_storage['media_dimension']['height'] : null;
            $this->_storage['media_dimension']['duration'] = $this->_storage['media_dimension']['duration'] ? (string) $this->_storage['media_dimension']['duration'] : null;
        }
        return $this->_storage['media_dimension'];
    }
}
