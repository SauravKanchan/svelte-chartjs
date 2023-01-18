# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.1.2](https://github.com/SauravKanchan/svelte-chartjs/compare/v3.1.1...v3.1.2) (2023-01-18)


### Bug Fixes

* upgrade chart.js with fixed types ([3bd69dc](https://github.com/SauravKanchan/svelte-chartjs/commit/3bd69dcf297325061401e679ef31b6d3eeaa30a5))

### [3.1.1](https://github.com/SauravKanchan/svelte-chartjs/compare/v3.1.0...v3.1.1) (2023-01-18)


### Bug Fixes

* files list to publish ([f7cb847](https://github.com/SauravKanchan/svelte-chartjs/commit/f7cb847e14e2789c3b5d008a76c6bf7a6aa5352e))

## [3.1.0](https://github.com/SauravKanchan/svelte-chartjs/compare/v3.0.1...v3.1.0) (2022-11-17)


### Features

* add chart.js v4 support ([#86](https://github.com/SauravKanchan/svelte-chartjs/issues/86)) ([cbc497c](https://github.com/SauravKanchan/svelte-chartjs/commit/cbc497c020b3e810acef8d0fb7a6cbe68d77e0f7))


### Bug Fixes

* **deps:** update dependency chart.js to v4 ([#84](https://github.com/SauravKanchan/svelte-chartjs/issues/84)) ([112b2fa](https://github.com/SauravKanchan/svelte-chartjs/commit/112b2faca1e383db4b14ed5c9578a1d1ec0ff538))

### [3.0.1](https://github.com/SauravKanchan/svelte-chartjs/compare/v3.0.0...v3.0.1) (2022-09-20)


### Bug Fixes

* typed components update fix ([#78](https://github.com/SauravKanchan/svelte-chartjs/issues/78)) ([2a34f4f](https://github.com/SauravKanchan/svelte-chartjs/commit/2a34f4f4a23b6b2860bb44d681e0ad7159fe9ae3))

## [3.0.0](https://github.com/SauravKanchan/svelte-chartjs/compare/v2.1.1...v3.0.0) (2022-09-19)


### ⚠ BREAKING CHANGES

* now package is module type, new exports in package.json

### build

* use svelte-package ([#75](https://github.com/SauravKanchan/svelte-chartjs/issues/75)) ([1eb4efe](https://github.com/SauravKanchan/svelte-chartjs/commit/1eb4efefffb367fe0338e37c89d20f89dcdff807))

### [2.1.1](https://github.com/SauravKanchan/svelte-chartjs/compare/v2.1.0...v2.1.1) (2022-08-29)


### Bug Fixes

* chart ref prop type fix ([#70](https://github.com/SauravKanchan/svelte-chartjs/issues/70)) ([893d78c](https://github.com/SauravKanchan/svelte-chartjs/commit/893d78cae03c5ccb43dacabcf1b27bff958b1a5c))

## [2.1.0](https://github.com/SauravKanchan/svelte-chartjs/compare/v2.0.1...v2.1.0) (2022-08-17)


### Features

* events forwarding, getDatasetAtEvent getElementAtEvent getElementsAtEvent events utils ([#63](https://github.com/SauravKanchan/svelte-chartjs/issues/63)) ([e84bd77](https://github.com/SauravKanchan/svelte-chartjs/commit/e84bd7799ea4bd787cc20d2d28701dcca280f1ac))
* new prop types, expose chart instance ([#62](https://github.com/SauravKanchan/svelte-chartjs/issues/62)) ([d59111a](https://github.com/SauravKanchan/svelte-chartjs/commit/d59111a66f923678e85ac79d179285d89270c223))
* update mode prop ([#65](https://github.com/SauravKanchan/svelte-chartjs/issues/65)) ([d6e5506](https://github.com/SauravKanchan/svelte-chartjs/commit/d6e55060cc69b712bffb514205c0f0115dcd204d))


### Bug Fixes

* rename components Base -> Chart, Polar -> PolarArea ([#64](https://github.com/SauravKanchan/svelte-chartjs/issues/64)) ([ec905cc](https://github.com/SauravKanchan/svelte-chartjs/commit/ec905ccfaf51c0374211096e4656d061ab85f6da))

### [2.0.1](https://github.com/SauravKanchan/svelte-chartjs/compare/v2.0.0...v2.0.1) (2022-07-20)


### Bug Fixes

* add path to types ([#56](https://github.com/SauravKanchan/svelte-chartjs/issues/56)) ([a249af6](https://github.com/SauravKanchan/svelte-chartjs/commit/a249af66a58fb5c036430ec75016c7416f1ad6d2))

## 2.0.0 (2022-07-20)


### ⚠ BREAKING CHANGES

* svelte files were removed from the package, now you should use named exports
* add typescript and tree-shaking for chart.js imports

### Features

* add typescript ([#41](https://github.com/SauravKanchan/svelte-chartjs/issues/41)) ([2fe9aba](https://github.com/SauravKanchan/svelte-chartjs/commit/2fe9aba8d38372faee710e68746c5de20b27ba6e))


### Bug Fixes

* **base:** Add chart.destroy() to fix memory leak. Fixes [#25](https://github.com/SauravKanchan/svelte-chartjs/issues/25) ([d49ffa1](https://github.com/SauravKanchan/svelte-chartjs/commit/d49ffa1c015282bb0551e26a94341491a986981c))


* remove svelte files from package ([#54](https://github.com/SauravKanchan/svelte-chartjs/issues/54)) ([82b871b](https://github.com/SauravKanchan/svelte-chartjs/commit/82b871b1b54baa89a28c3e60256f85ed5aff7fed))
