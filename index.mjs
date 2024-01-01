// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function i(t,r){var i;return s(t)||s(r)||r<0||r===e?NaN:t<0?0:n(-t/(i=1/r))/i}function d(t){var i;return s(t)||t<0||t===e?r(NaN):(i=1/t,function(t){if(s(t))return NaN;if(t<0)return 0;return n(-t/i)/i})}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
