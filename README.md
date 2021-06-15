<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Non-Fibonacci

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the nth [non-Fibonacci number][fibonacci-number].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The nth [non-Fibonacci number][fibonacci-number] is given by

<!-- <equation class="equation" label="eq:nonfibonacci_number" align="center" raw="f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor" alt="Formula to compute the nth non-Fibonacci number."> -->

<div class="equation" align="center" data-raw-text="f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor" data-equation="eq:nonfibonacci_number">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/nonfibonacci/docs/img/equation_nonfibonacci_number.svg" alt="Formula to compute the nth non-Fibonacci number.">
    <br>
</div>

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-nonfibonacci
```

</section>

<section class="usage">

## Usage

```javascript
var nonfibonacci = require( '@stdlib/math-base-special-nonfibonacci' );
```

#### nonfibonacci( n )

Computes the nth [non-Fibonacci number][fibonacci-number].

```javascript
var v = nonfibonacci( 1 );
// returns 4

v = nonfibonacci( 2 );
// returns 6

v = nonfibonacci( 3 );
// returns 7
```

If provided either a non-integer or `n < 1`, the function returns `NaN`. 

```javascript
var v = nonfibonacci( -1 );
// returns NaN

v = nonfibonacci( 3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = nonfibonacci( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var nonfibonacci = require( '@stdlib/math-base-special-nonfibonacci' );

var v;
var i;

for ( i = 1; i < 100; i++ ) {
    v = nonfibonacci( i );
    console.log( 'nonfibonacci(%d) = %d', i, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="references">

## References

-   Gould, H.W. 1965. "Non-Fibonacci Numbers." _Fibonacci Quarterly_, no. 3: 177–83. [&lt;http://www.fq.math.ca/Scanned/3-3/gould.pdf>][@gould:1965a].
-   Farhi, Bakir. 2011. "An explicit formula generating the non-Fibonacci numbers." _arXiv_ abs/1105.1127 \[Math.NT] (May): 1–5. [&lt;https://arxiv.org/abs/1105.1127>][@farhi:2011a].

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-nonfibonacci.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-nonfibonacci

[test-image]: https://github.com/stdlib-js/math-base-special-nonfibonacci/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-nonfibonacci/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-nonfibonacci/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-nonfibonacci?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-nonfibonacci
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-nonfibonacci/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-nonfibonacci/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

[@gould:1965a]: http://www.fq.math.ca/Scanned/3-3/gould.pdf

[@farhi:2011a]: https://arxiv.org/abs/1105.1127

</section>

<!-- /.links -->
