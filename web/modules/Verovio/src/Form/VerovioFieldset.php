<?php declare(strict_types=1);
namespace Verovio\Form;

use Laminas\Form\Element;
use Laminas\Form\Fieldset;

class VerovioFieldset extends Fieldset
{
    public function init(): void
    {
        $this
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][heading]',
                'type' => Element\Text::class,
                'options' => [
                    'label' => 'Block title', // @translate
                    'info' => 'Heading for the block, if any.', // @translate
                ],
                'attributes' => [
                    'id' => 'verovio-heading',
                    'required' => false,
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][source]',
                'type' => Element\Url::class,
                'options' => [
                    'label' => 'Source', // @translate
                    'info' => 'The url to display. Note: media attached to items are automatically rendered via common blocks, in particular "Media".', // @translate
                ],
                'attributes' => [
                    'id' => 'verovio-source',
                    'required' => true,
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][template]',
                'type' => Element\Select::class,
                'options' => [
                    'label' => 'Template to display', // @translate
                    'empty_option' => '',
                    'value_options' => [
                        // Same options than the site settings.
                        'common/verovio' => 'App (simple viewer)', // @translate
                        'common/verovio-mei-viewer' => 'Official (Bootstrap 3)', // @translate
                        'common/verovio-viewer' => 'Web (Bootstrap 4)', // @translate
                        'common/verovio-toolkit' => 'Custom (via theme)', // @translate
                    ],
                ],
                'attributes' => [
                    'id' => 'verovio-template',
                    'class' => 'chosen-select',
                    'data-placeholder' => 'Select a template…', // @translate
                ],
            ])
        ;
    }
}
