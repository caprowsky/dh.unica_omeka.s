<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6b723f7c26d0aa3a7fc336da7641f4b0
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'BulkEdit\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'BulkEdit\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6b723f7c26d0aa3a7fc336da7641f4b0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6b723f7c26d0aa3a7fc336da7641f4b0::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
