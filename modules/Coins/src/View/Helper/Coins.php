<?php

namespace Coins\View\Helper;

use Laminas\View\Helper\AbstractHelper;
use Omeka\Api\Representation\ItemRepresentation;

/**
 * COinS
 *
 * @copyright Copyright 2007-2012 Roy Rosenzweig Center for History and New Media
 * @license http://www.gnu.org/licenses/gpl-3.0.txt GNU GPLv3
 */

/**
 * @package Coins\View\Helper
 */
class Coins extends AbstractHelper
{
    /**
     * Return a COinS span tag for every passed item.
     *
     * @param array|Item An array of item records or one item record.
     * @return string
     */
    public function __invoke($items)
    {
        if (!is_array($items)) {
            return $this->_getCoins($items);
        }

        $coins = '';
        foreach ($items as $item) {
            $coins .= $this->_getCoins($item);
        }
        return $coins;
    }

    /**
     * Build and return the COinS span tag for the specified item.
     *
     * @param Item $item
     * @return string
     */
    protected function _getCoins(ItemRepresentation $item)
    {
        $coins = [];

        $coins['ctx_ver'] = 'Z39.88-2004';
        $coins['rft_val_fmt'] = 'info:ofi/fmt:kev:mtx:dc';
        $coins['rfr_id'] = 'info:sid/omeka.org:generator';

        // Set the Dublin Core elements that don't need special processing.
        $properties = ['creator', 'subject', 'publisher', 'contributor', 'date', 'format', 'source', 'language', 'coverage', 'rights', 'relation', 'description'];
        foreach ($properties as $property) {
            $value = $item->value("dcterms:$property", ['type' => 'literal']);
            if ($value !== null) {
                $coins["rft.$property"] = $value->value();
            }
        }

        // Set the title key from Dublin Core:title.
        $title = $item->value('dcterms:title', ['type' => 'literal']);
        if ($title !== null) {
            $coins['rft.title'] = $title->value();
        } else {
            $coins['rft.title'] = '[unknown title]';
        }

        // Set the type key from item type, map to Zotero item types.
        $resourceClass = $item->resourceClass();
        if ($resourceClass) {
            switch ($resourceClass->localName()) {
                case 'Interview':
                    $type = 'interview';
                    break;
                case 'MovingImage':
                    $type = 'videoRecording';
                    break;
                case 'Sound':
                    $type = 'audioRecording';
                    break;
                case 'Email':
                    $type = 'email';
                    break;
                case 'Website':
                    $type = 'webpage';
                    break;
                case 'Text':
                case 'Document':
                    $type = 'document';
                    break;
                default:
                    $type = $resourceClass->localName();
            }
        } else {
            $typeValue = $item->value('dcterms:type', ['type' => 'literal']);
            if ($typeValue !== null) {
                $type = $typeValue->value();
            }
        }

        if (isset($type)) {
            $coins['rft.type'] = $type;
        }

        // Set the identifier key as the absolute URL of the current page.
        $coins['rft.identifier'] = $item->url();

        // Build and return the COinS span tag.
        $coinsSpan = sprintf('<span class="Z3988" title="%s"></span>', htmlspecialchars_decode(http_build_query($coins)));

        return $coinsSpan;
    }
}
