<?php declare(strict_types=1);
namespace Verovio\Media\FileRenderer;

use Laminas\View\Renderer\PhpRenderer;
use Omeka\Api\Representation\MediaRepresentation;
use Omeka\Media\FileRenderer\RendererInterface;

class Verovio implements RendererInterface
{
    /**
     * The default partial view script.
     */
    const PARTIAL_NAME = 'common/verovio';

    /**
     * @var array
     */
    protected $defaultOptions = [
        'attributes' => 'allowfullscreen="allowfullscreen" style="height: 600px; height: 70vh; border: 1px solid lightgray;"',
        'template' => self::PARTIAL_NAME,
    ];

    /**
     * Render a xml-mei file via verovio library.
     *
     * @todo Factorize with the view helper.
     *
     * @param PhpRenderer $view,
     * @param MediaRepresentation $media
     * @param array $options These options are managed for sites:
     *   - template: the partial to use
     *   - attributes: set the attributes to add
     * @return string
     */
    public function render(PhpRenderer $view, MediaRepresentation $media, array $options = [])
    {
        $status = $view->status();
        if ($status->isSiteRequest()) {
            $siteSetting = $view->plugin('siteSetting');
            $template = $options['template'] ?? $siteSetting('verovio_template', $this->defaultOptions['template']);
            $options['attributes'] = $options['attributes'] ?? $this->defaultOptions['attributes'];
        } else {
            $template = $this->defaultOptions['template'];
            $options['attributes'] = $this->defaultOptions['attributes'];
        }

        unset($options['template']);
        return $view->partial($template, [
            'resource' => $media,
            'options' => $options,
        ]);
    }
}
