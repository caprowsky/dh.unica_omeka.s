Simple ISO 3166-1
=================

[Simple ISO 3166-1] is a small library to convert country codes ISO 3166-1
(two and three letters country codes) and native, English and French names. It
is built from the official standard lists [ISO 3166-1].

This library is used in the module [Bulk Import] for [Omeka S] and some
other places.

The list of codes may be updated by ISO, so some codes may be removed and some
other ones may be added regularly.


Installation
------------

This module is a composer library available on [packagist]:

```sh
composer require daniel-km/simple-iso-3166-1
```


Usage
-----

Once included in your code via composer or with `require_once 'path/to/vendor/daniel-km/simple-iso-3166-1/src/Iso3166p1.php;'`,
you can use it like that:

```php
$countries = [
    'fr',
    'fra',
    'France',
    'Germany',
    'Deutschland',
    'fxxx',
];
$result = [];
foreach ($countries as $country) {
    $result[$country] = [
        'country'               => $country,
        'code'                  => \Iso3166p1\Iso3166p1::code($country),
        'short'                 => \Iso3166p1\Iso3166p1::code2letters($country),
        'numeric'               => \Iso3166p1\Iso3166p1::numerical($country),
        'all'                   => \Iso3166p1\Iso3166p1::codes($country),
        'native'                => \Iso3166p1\Iso3166p1::name($country),
        'English name'          => \Iso3166p1\Iso3166p1::englishName($country),
        'French name'           => \Iso3166p1\Iso3166p1::frenchName($country),
    ];
}
print_r($result);
```

Result:

| country     | code | short | numeric | all          | native      | English name | French name |
|-------------|------|-------|------------------------|-------------|--------------|-------------|
| fr          | FRA  | FR    | 250     | FR, FRA, 250 | France      | France       | France      |
| fra         | FRA  | FR    | 250     | FR, FRA, 250 | France      | France       | France      |
| France      | FRA  | FR    | 250     | FR, FRA, 250 | France      | France       | France      |
| Germany     | DEU  | DE    | 276     | DE, DEU, 276 | Deutschland | Germany      | Allemagne   |
| Deutschland | DEU  | DE    | 276     | DE, DEU, 276 | Deutschland | Germany      | Allemagne   |
| fxxx        |      |       |         |              |             |              |             |


Development
-----------

The lists are automatically generated from this command:

```sh
php -f scripts/generate.php
```


Warning
-------

Use it at your own risk.

It’s always recommended to backup your files and your databases and to check
your archives regularly so you can roll back if needed.


Troubleshooting
---------------

See online [issues] page on GitLab.


License
-------

### Module

This module is published under the [CeCILL v2.1] license, compatible with
[GNU/GPL] and approved by [FSF] and [OSI].

This software is governed by the CeCILL license under French law and abiding by
the rules of distribution of free software. You can use, modify and/ or
redistribute the software under the terms of the CeCILL license as circulated by
CEA, CNRS and INRIA at the following URL "http://www.cecill.info".

As a counterpart to the access to the source code and rights to copy, modify and
redistribute granted by the license, users are provided only with a limited
warranty and the software’s author, the holder of the economic rights, and the
successive licensors have only limited liability.

In this respect, the user’s attention is drawn to the risks associated with
loading, using, modifying and/or developing or reproducing the software by the
user in light of its specific status of free software, that may mean that it is
complicated to manipulate, and that also therefore means that it is reserved for
developers and experienced professionals having in-depth computer knowledge.
Users are therefore encouraged to load and test the software’s suitability as
regards their requirements in conditions enabling the security of their systems
and/or data to be ensured and, more generally, to use and operate it in the same
conditions as regards security.

The fact that you are presently reading this means that you have had knowledge
of the CeCILL license and that you accept its terms.


Copyright
---------

* Copyright https://www.iso.org (country codes)
* Copyright Daniel Berthereau, 2023 (see [Daniel-KM] on GitLab)


[Simple ISO 3166-1]: https://gitlab.com/Daniel-KM/Simple-ISO-3166-1
[ISO 3166-1]: https://www.iso.org/iso-3166-country-codes.html
[Bulk Import]: https://gitlab.com/Daniel-KM/Omeka-S-module-BulkImport
[Omeka S]: https://omeka.org/s
[issues]: https://gitlab.com/Daniel-KM/Simple-ISO-3166-1/-/issues
[CeCILL v2.1]: https://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html
[GNU/GPL]: https://www.gnu.org/licenses/gpl-3.0.html
[FSF]: https://www.fsf.org
[OSI]: http://opensource.org
[GitLab]: https://gitlab.com/Daniel-KM
[Daniel-KM]: https://gitlab.com/Daniel-KM "Daniel Berthereau"
