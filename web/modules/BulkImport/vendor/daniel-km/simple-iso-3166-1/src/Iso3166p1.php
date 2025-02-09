<?php declare(strict_types=1);

namespace Iso3166p1;

// For direct use.
require_once __DIR__ . '/Country.php';

use Iso3166p1\Country;

/**
 * Automatically generated lists of countries from standard sources.
 *
 * Adapted from daniel-km/simple-iso-639-3
 *
 * @link https://www.iso.org/obp/ui (extracted from response)
 * @link https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 */
class Iso3166p1
{
    /**
     * Get a normalized three letters country code from a two or three letters
     * one, or native country, or from the English normalized name.
     *
     * For performance in case of a full country, it is recommended to respect
     * standard case (lowercase or uppercase first letter) according to the
     * country.
     *
     * @param string $country
     * @return string If country doesn't exist, an empty string is returned.
     */
    public static function code($country)
    {
        $country = (string) $country;

        if (is_numeric($country) && (int) $country < 100) {
            $country = '0' . $country;
        }

        $cntry = function_exists('mb_strtoupper')
            ? mb_strtoupper($country)
            : strtoupper($country);
        if (isset(Country::CODES[$cntry])) {
            return Country::CODES[$cntry];
        }

        if (function_exists('mb_strtoupper')) {
            $upper = mb_strtoupper($country);
            return array_search($country, Country::CODES_NUM)
                ?: (array_search($upper, array_map('mb_strtoupper', Country::NAMES))
                    ?: (array_search($upper, array_map('mb_strtoupper', Country::ENGLISH_NAMES))
                        ?: (array_search($upper, array_map('mb_strtoupper', Country::FRENCH_NAMES))
                            ?: '')));
        }

        $upper = strtoupper($country);
        return array_search($country, Country::CODES_NUM)
            ?: (array_search($upper, array_map('strtoupper', Country::NAMES))
                ?: (array_search($upper, array_map('strtoupper', Country::ENGLISH_NAMES))
                    ?: (array_search($upper, array_map('strtoupper', Country::FRENCH_NAMES))
                        ?: '')));
    }

    /**
     * Alias of code().
     *
     * @see self::code()
     * @param string $country
     * @return string
     */
    public static function code3letters($country)
    {
        return self::code($country);
    }

    /**
     * Get a normalized two letters country code from a two or three-letters
     * one, or country, or from the English or French normalized names.
     *
     * @uses self::code()
     * @param string $country
     * @return string If country doesn't exist, an empty string is returned.
     */
    public static function code2letters($country)
    {
        $code = self::code($country);
        return $code
            // The first code is always the two-letters one, if any.
            ? array_search($code, Country::CODES)
            : '';
    }

    /**
     * Get a normalized three digits country code from a two or three-letters
     * one, or country, or from the English or French normalized names.
     *
     * @uses self::code()
     * @param string $country
     * @return string If country doesn't exist, an empty string is returned.
     */
    public static function numerical($country)
    {
        $code = self::code($country);
        return $code
            ? array_search($code, Country::CODES_NUM)
            : '';
    }

    /**
     * Get all variant codes of a country (two, three letters and numeric).
     *
     * Examples: France => [FR, FRA, 250].
     *
     * @uses self::code()
     * @param string $country
     * @return array
     */
    public static function codes($country)
    {
        $code = self::code($country);
        return $code
            ? [
                array_search($code, Country::CODES),
                $code,
                array_search($code, Country::CODES_NUM),
            ]
            : [];
    }

    /**
     * Get the native country name from a country string, if available.
     *
     * @uses self::code()
     * @param string $country
     * @return string If country doesn't exist, an empty string is returned.
     */
    public static function name($country)
    {
        $cntry = self::code($country);
        return $cntry
            ? Country::NAMES[$cntry]
            : '';
    }

    /**
     * Get the country name in English from a country string.
     *
     * @uses self::code()
     * @param string $country
     * @return string If country doesn't exist, an empty string is returned.
     */
    public static function englishName($country)
    {
        $cntry = self::code($country);
        return $cntry
            ? Country::ENGLISH_NAMES[$cntry]
            : '';
    }

    /**
     * Get the country name in French from a country string.
     *
     * @uses self::code()
     * @param string $country
     * @return string If country doesn't exist, an empty string is returned.
     */
    public static function frenchName($country)
    {
        $cntry = self::code($country);
        return $cntry
            ? Country::FRENCH_NAMES[$cntry]
            : '';
    }
}
