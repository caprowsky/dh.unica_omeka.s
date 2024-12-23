<?php
namespace PageBlocks\Form;

use Laminas\Form\Element;
use Laminas\Form\Form;
use Omeka\Form\Element\PropertySelect;

class MediaDetailsForm extends Form
{
    public function init()
    {
        $this->add([
            'name' => 'o:block[__blockIndex__][o:data][show_heading]',
            'type' => Element\Checkbox::class,
            'options' => [
                'label' => 'Show item heading', // @translate
            ]
        ]);
        
        $this->add([
            'name' => 'o:block[__blockIndex__][o:data][properties]',
            'type' => PropertySelect::class,
            'attributes' => [
                'class' => 'chosen-select media-details-property',
                'aria-label' => 'Property', // @translate
                'data-placeholder' => 'Select a property', // @translate
                'multiple' => true
            ],
            'options' => [
                'label' => 'Additional metadata', // @translate
                'term_as_value' => true
            ]
        ]);
    }
}
?>