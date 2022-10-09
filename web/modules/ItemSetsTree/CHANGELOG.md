# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2021-04-14

### Added

- Added missing functions in view helper (getRootItemSets, getChildren,
  getDescendants)
- Added ability to display the tree only up to a fixed depth
- Added a page block layout
- Added parameter maxDepth to view helper itemSetsTreeSelect

### Fixed

- Do not retrieve item sets that user has no permission to see
- Hide navigation entry to unauthorized users

## [0.3.0] - 2020-10-14

**BREAKING CHANGE** This module is no longer compatible with Omeka S 2.x

### Added

- Added compatibility with Omeka S 3.x

## [0.2.0] - 2020-07-15

### Added

- Integration with Solr module
- Add ability to display items of descendant item sets
- Show parent item set in admin item set sidebar

### Changed

- Item sets are now ordered by title in the tree view

## [0.1.0] - 2020-04-07

Initial release

[0.4.0]: https://github.com/biblibre/omeka-s-module-ItemSetsTree/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/biblibre/omeka-s-module-ItemSetsTree/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/biblibre/omeka-s-module-ItemSetsTree/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/biblibre/omeka-s-module-ItemSetsTree/releases/tag/v0.1.0
