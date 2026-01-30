# CHANGELOG

> Package changelog.

<section class="release" id="v0.4.0">

## 0.4.0 (2026-01-30)

<section class="bug-fixes">

### Bug Fixes

-   [`8dfe021`](https://github.com/stdlib-js/stdlib/commit/8dfe0212136eb297a3d1842a337d179034bdf743) - clean-up nonfibonacci implementation and remove unused deps

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`63cf5ea`](https://github.com/stdlib-js/stdlib/commit/63cf5eab0c3676f67939173afa3cdcac61163eb8): update signature to accept doubles

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#5359](https://github.com/stdlib-js/stdlib/issues/5359)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`263d50a`](https://github.com/stdlib-js/stdlib/commit/263d50a4cd7ff1b888d3f3de5c3be590dec839ad) - **chore:** add structured package data for `math/base/special/nonfibonacci` [(#8403)](https://github.com/stdlib-js/stdlib/pull/8403) _(by Manvith M)_
-   [`63cf5ea`](https://github.com/stdlib-js/stdlib/commit/63cf5eab0c3676f67939173afa3cdcac61163eb8) - **refactor:** modify C implementation to accept `double` instead of `int32` in `math/base/special/nonfibonacci` [(#7959)](https://github.com/stdlib-js/stdlib/pull/7959) _(by Gunj Joshi)_
-   [`a51fa22`](https://github.com/stdlib-js/stdlib/commit/a51fa22399f36b4d83ba0d189d297af4aa429354) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`dd6d9cf`](https://github.com/stdlib-js/stdlib/commit/dd6d9cff0105270f0664490f3c89b36d4df89032) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`8dfe021`](https://github.com/stdlib-js/stdlib/commit/8dfe0212136eb297a3d1842a337d179034bdf743) - **fix:** clean-up nonfibonacci implementation and remove unused deps _(by Philipp Burckhardt)_
-   [`5f73301`](https://github.com/stdlib-js/stdlib/commit/5f73301a8509cc423a06b02140c4e316fd02ff49) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`e9f9513`](https://github.com/stdlib-js/stdlib/commit/e9f951387dd4387dc0a7b4acfadc59c5b2541736) - **bench:** update random value generation [(#6430)](https://github.com/stdlib-js/stdlib/pull/6430) _(by Harsh Yadav)_
-   [`886e85a`](https://github.com/stdlib-js/stdlib/commit/886e85abd4bd0515526e273919b43e00a93d7264) - **docs:** fix C lint errors [(#5408)](https://github.com/stdlib-js/stdlib/pull/5408) _(by Neeraj Pathak)_
-   [`f13ddb2`](https://github.com/stdlib-js/stdlib/commit/f13ddb2eb01e5520b6fa98634bbf9de76793036f) - **style:** use spaces for alignment in C comments _(by Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`cfc0665`](https://github.com/stdlib-js/stdlib/commit/cfc0665435a1f99158d7fed39b8873dea6aa6209) - **docs:** add missing private tag _(by Philipp Burckhardt)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 7 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Harsh Yadav
-   Karan Anand
-   Manvith M
-   Neeraj Pathak
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-27)

<section class="features">

### Features

-   [`c39cc72`](https://github.com/stdlib-js/stdlib/commit/c39cc7222bf86a5217a4fc5333b007f90f1709cd) - add C implementation for `math/base/special/nonfibonacci`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`a9bf096`](https://github.com/stdlib-js/stdlib/commit/a9bf0960cff2227ff551671eb2de9e00e7c9851c) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`f36cfab`](https://github.com/stdlib-js/stdlib/commit/f36cfab3875404fd9c58b6e2a6fedca5e04cb4d9) - **chore:** update package meta data [(#2014)](https://github.com/stdlib-js/stdlib/pull/2014) _(by stdlib-bot)_
-   [`c39cc72`](https://github.com/stdlib-js/stdlib/commit/c39cc7222bf86a5217a4fc5333b007f90f1709cd) - **feat:** add C implementation for `math/base/special/nonfibonacci` _(by Tirtadwipa Manunggal, stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Philipp Burckhardt
-   Tirtadwipa Manunggal

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`a37ebe2`](https://github.com/stdlib-js/stdlib/commit/a37ebe2b277b2b54f00377b8582d309c65ec33ce) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

