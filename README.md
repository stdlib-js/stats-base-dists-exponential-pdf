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

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Exponential][exponential-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_pdf" align="center" raw="f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}" alt="Probability density function (PDF) for a Exponential distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} &amp; x \ge 0 \\ 0 &amp; x &lt; 0 \end{cases}" data-equation="eq:exponential_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/pdf/docs/img/equation_exponential_pdf.svg" alt="Probability density function (PDF) for a Exponential distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-pdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-pdf@deno/mod.js';
```

#### pdf( x, lambda )

Evaluates the [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = pdf( 2.0, 0.3 );
// returns ~0.165

y = pdf( 2.0, 1.0 );
// returns ~0.135
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0 );
// returns NaN
```

#### pdf.factory( lambda )

Partially apply `lambda` to create a reusable `function` for evaluating the [PDF][pdf].

```javascript
var mypdf = pdf.factory( 0.1 );

var y = mypdf( 8.0 );
// returns ~0.045

y = mypdf( 5.0 );
// returns ~0.06
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-pdf@deno/mod.js';

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = pdf( x, lambda );
    console.log( 'x: %d, λ: %d, f(x;λ): %d', x, lambda, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential-pdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-exponential-pdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->
