<?php
namespace Hierarchy\Api\Adapter;

use Omeka\Api\Adapter\AbstractEntityAdapter;
use Omeka\Api\Request;
use Omeka\Entity\EntityInterface;
use Omeka\Stdlib\ErrorStore;

class HierarchyAdapter extends AbstractEntityAdapter
{
    protected $sortFields = [
        'position' => 'position',
    ];

    public function getEntityClass()
    {
        return 'Hierarchy\Entity\Hierarchy';
    }

    public function getResourceName()
    {
        return 'hierarchy';
    }

    public function getRepresentationClass()
    {
        return 'Hierarchy\Api\Representation\HierarchyRepresentation';
    }

    public function hydrate(Request $request, EntityInterface $entity,
        ErrorStore $errorStore
    ) {
        if ($this->shouldHydrate($request, 'label')) {
            $entity->setLabel($request->getValue('label'));
        }
        // (Re-)order blocks by their order in the input
        static $position = 1;
        if ($this->shouldHydrate($request, 'position')) {
            $entity->setPosition($position++);
        }
    }
}
