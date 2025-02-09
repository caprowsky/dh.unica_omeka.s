<?php declare(strict_types=1);

/**
 * Prepare lists of countries from standard sources.
 *
 * Some native names and other codes can be added via the file "extra codes".
 * Only the main native is managed.
 *
 * Adapted from daniel-km/simple-iso-639-3
 *
 * @link https://www.iso.org/obp/ui (extracted from response)
 * @link https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 */

echo 'Preparation of the countries' . "\n";

$codes = list_codes();
if (empty($codes)) {
    echo 'Unable to create the list. Check your internet connection.' . "\n";
    exit;
}

$destination = dirname(__DIR__) . '/src/Country.php';
$result = file_put_contents($destination, '');
if ($result === false) {
    echo 'Unable to create the file. Check your file system rights.' . "\n";
    exit;
}

// Convert into a short array.
$codes = short_array_string($codes);

$codesNum = list_codes_num();
$codesNum = short_array_string($codesNum);

$names = list_names();
$names = short_array_string($names);

$englishNames = list_english_names();
$englishNames = short_array_string($englishNames);

$frenchNames = list_french_names();
$frenchNames = short_array_string($frenchNames);

$replace = [
    '__CODES__' => $codes,
    '__CODES_NUM__' => $codesNum,
    '__NAMES__' => $names,
    '__ENGLISH_NAMES__' => $englishNames,
    '__FRENCH_NAMES__' => $frenchNames,
];

$content = file_get_contents(__DIR__ . '/templates/Country.php');
$content = str_replace(array_keys($replace), array_values($replace), $content);
file_put_contents($destination, $content);

echo 'Preparation of the countries file done.';
echo "\n";
exit;

function list_codes()
{
    $data = fetch_iso_3166_1();

    $result = array_column($data, 'alpha-3', 'alpha-2');
    unset($result['']);
    ksort($result);

    $r3 = array_column($data, 'alpha-3', 'alpha-3');
    unset($r3['']);
    ksort($r3);

    $extra = require __DIR__ . '/extra_codes.php';
    $result += $r3 + $extra['CODES'];

    // Don't sort keys.

    return $result;
}

function list_codes_num()
{
    $data = fetch_iso_3166_1();

    $result = array_column($data, 'numeric', 'alpha-3');
    unset($result['']);
    ksort($result);

    $extra = require __DIR__ . '/extra_codes.php';
    $result += $extra['CODES_NUM'];

    // Don't sort keys.

    return $result;
}

function list_names()
{
    $data = fetch_iso_3166_1();

    $result = array_column($data, 'native', 'alpha-3');
    // Remove articles from country names.
    $replace = [
        '*' => '',
        '(a)' => '',
        '(die)' => '',
        '(el)' => '',
        '(l\')' => '',
        '(la)' => '',
        '(o)' => '',
        '(the)' => '',
        '(Bolivarian Republic of)' => '',
        '(Federated States of)' => '',
        '(French part)' => '(partie française)',
        // '(Dutch part)' => '',
        '(Islamic Republic of)' => '',
        '(Keeling)' => '',
        '(Kingdom of the)' => '',
        '[Malvinas]' => '',
        'Nihon/Nippon' => 'Nihon',
        '(Plurinational State of)' => '',
        'Sathalanalat Paxathipatai Paxaxôn Lao' => 'Lao',
        '(the Democratic Republic of the)' => '(RDC)',
        '(the Democratic People\'s Republic of)' => '',
        '(the Republic of)' => '',
        '  ' => ' ',
    ];
    foreach ($result as $code => $country) {
        $result[$code] = trim(str_replace(array_keys($replace), array_values($replace), $country));
    }

    $extra = require __DIR__ . '/extra_codes.php';
    $result += $extra['NAMES'];
    ksort($result);

    return $result;
}

function list_english_names()
{
    $data = fetch_iso_3166_1();

    $result = array_column($data, 'english', 'alpha-3');
    unset($result['']);

    // Remove articles from English country names.
    $replace = [
        '*' => '',
        '(a)' => '',
        '(el)' => '',
        '(l\')' => '',
        '(la)' => '',
        '(the)' => '',
        '(Bolivarian Republic of)' => '',
        '(Federated States of)' => '',
        '(Islamic Republic of)' => '',
        '(Keeling)' => '',
        '(Kingdom of the)' => '',
        'Korea (the Democratic People\'s Republic of)' => 'North Korea',
        'Korea (the Republic of)' => 'South Korea',
        'Lao People\'s Democratic Republic' => 'Lao',
        '[Malvinas]' => '',
        '(Plurinational State of)' => '',
        '(Province of China)' => '',
        '(the Democratic Republic of the)' => '(RDC)',
        '(the Republic of)' => '',
        '  ' => ' ',
    ];
    foreach ($result as $code => $country) {
        $result[$code] = trim(str_replace(array_keys($replace), array_values($replace), $country));
    }

    ksort($result);

    $extra = require __DIR__ . '/extra_codes.php';
    $result += $extra['ENGLISH_NAMES'];
    ksort($result);

    return $result;
}

function list_french_names()
{
    $data = fetch_iso_3166_1();

    $result = array_column($data, 'french', 'alpha-3');
    unset($result['']);

    // Remove articles from French country names.
    // Remove articles from English country names.
    $replace = [
        '*' => '',
        '(l\')' => '',
        '(la)' => '',
        '(la )' => '',
        '(le)' => '',
        '(les)' => '',
        '(l\'Île)' => '',
        '(les Îles)' => '',
        '(les Îles)' => '',
        '(L\')' => '',
        '(La)' => '',
        '(Le)' => '',
        '(Les)' => '',
        '(L\'Île)' => '',
        '(Les Îles)' => '',
        '(Les Îles)' => '',
        'Congo (la République démocratique du)' => 'Congo (RDC)',
        'Corée (la République de)' => 'Corée du Sud',
        'Corée (la République populaire démocratique de)' => 'Corée du Nord',
        'dominicaine (la République)' => 'République dominicaine',
        '(États fédérés de)' => '',
        '(État plurinational de)' => '',
        'Falkland (les Îles)/Malouines (les Îles)' => 'Malouines',
        '(la Fédération de)' => '',
        'Indien (le Territoire britannique de l\'océan)' => 'Territoire britannique de l\'océan Indien',
        '(Province de Chine)' => '',
        '(la République de)' => '',
        '(la République démocratique populaire)' => '',
        '(République Islamique d\')' => '',
        '(Royaume des)' => '',
        '(la République-Unie de)' => '',
        '(République bolivarienne du)' => '',
        // Îles.
        'Åland' => 'Îles Åland',
        'Bouvet' => 'Île Bouvet',
        'Caïmans' => 'Îles Caïmans',
        'Christmas' => 'Îles Chrismas',
        'Cocos (les Îles)/ Keeling (les Îles)' => 'Îles Cocos',
        'Cocos (les Îles)/ Keeling (les Îles)' => 'Îles Cocos',
        'Cocos / Keeling' => 'Îles Cocos',
        'Cook' => 'Île Cook',
        'Féroé' => 'Îles Féroé',
        'Heard-et-Îles MacDonald' => 'Île Heard-et-Îles MacDonald',
        'Mariannes du Nord' => 'Îles Mariannes du Nord ',
        'Marshall' => 'Îles Marshall',
        'Norfolk' => 'Île Norfolk',
        'Salomon' => 'Îles Salomon',
        'Turks-et-Caïcos' => 'Îles Turks-et-Caïcos',
        'Vierges britanniques' => 'Îles Vierges britanniques',
        'Vierges des États-Unis' => 'Îles Vierges des États-Unis',
        '  ' => ' ',
    ];
    foreach ($result as $code => $country) {
        $result[$code] = trim(str_replace(array_keys($replace), array_values($replace), $country));
    }

    ksort($result);

    $extra = require __DIR__ . '/extra_codes.php';
    $result += $extra['FRENCH_NAMES'];
    ksort($result);

    return $result;
}

/**
 * Extracted from the post response to https://www.iso.org/obp/ui/UIDL/?v-uiId=0
 *
 * The table is the key $list[0]['rpc'][0][4][1] / ['d'].
 */
function fetch_iso_3166_1()
{
    static $list;

    if (is_array($list)) {
        return $list;
    }

    $list = file_get_contents(__DIR__ . '/iso-3166-1.json');
    $list = json_decode($list, true);
    $result = [];
    // foreach ($list[0]['rpc'][0][4][1] as $k => $v) {
    foreach ($list as $k => $v) {
        $english = $v[299] ?: '';
        $french = $v[311] ?: '';
        $all = $v[309] ?: '[]';
        $all = array_map('trim', explode(',', substr($all, 1, -1)));

        // Native seems to be the first other one.^
        $filtered = array_diff($all, [$english, $french]);
        $native = $filtered
            ? reset($filtered)
            : reset($all);

        // Fix some countries.
        if ($french === 'iraq') {
            $french = 'irak';
            $all[] = 'irak';
        } elseif ($p = array_search('Shqipëria; Shqipëri', $all)) {
            unset($all[$p]);
            $native = 'Shqipëria';
            $all = [$english, $french, 'Shqipëria', 'Shqipëri'];
        }

        $result[$v[299]] = [
            'alpha-2' => $v[301] ?: '',
            'alpha-3' => $v[317] ?: '',
            'numeric' => $v[313] ?: '',
            'english' => $english,
            'french' => $french,
            'native' => $native,
            'all' => $all,
        ];
    }

    $list = $result;
    return $list;
}

/**
 * Use a short array for output.
 *
 * @param array $array
 * @return string
 */
function short_array_string($array)
{
    $arrayString = var_export($array, true);
    $replace = [
        'array (' => '[',
        ' => ' => '=>',
    ];
    $arrayString = trim(str_replace(array_keys($replace), array_values($replace), $arrayString));
    $arrayString = mb_substr($arrayString, 0, -1) . ']';
    return preg_replace("~^\s*('.*)$~m", '$1', $arrayString);
}
