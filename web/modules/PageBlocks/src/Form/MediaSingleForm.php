<?php
namespace PageBlocks\Form;

use Laminas\Form\Element;
use Laminas\Form\Form;

class MediaSingleForm extends Form
{
    public function init()
    {
        $this->add([
            'name' => 'o:block[__blockIndex__][o:data][html]',
            'type' => Element\Textarea::class,
            'attributes' => [
                'class' => 'block-html full wysiwyg'
            ]
        ]);
    }
}
?>