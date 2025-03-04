/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isInteger = require( '@stdlib/math-base-assert-is-integer' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the nth non-Fibonacci number.
*
* ## References
*
* -   Gould, H.W. 1965. "Non-Fibonacci Numbers." _Fibonacci Quarterly_, no. 3: 177–83. <http://www.fq.math.ca/Scanned/3-3/gould.pdf>.
* -   Farhi, Bakir. 2011. "An explicit formula generating the non-Fibonacci numbers." _arXiv_ abs/1105.1127 \[Math.NT\] (May): 1–5. <https://arxiv.org/abs/1105.1127>.
*
* @private
* @param {NonNegativeInteger} n - the non-Fibonacci number to compute
* @returns {NonNegativeInteger} non-Fibonacci number
*
* @example
* var v = nonfibonacci( 1 );
* // returns 4
*
* @example
* var v = nonfibonacci( 2 );
* // returns 6
*
* @example
* var v = nonfibonacci( 3 );
* // returns 7
*
* @example
* var v = nonfibonacci( NaN );
* // returns NaN
*
* @example
* var v = nonfibonacci( 3.14 );
* // returns NaN
*
* @example
* var v = nonfibonacci( -1 );
* // returns NaN
*/
function nonfibonacci( n ) {
	if ( isInteger( n ) === false ) {
		return NaN;
	}
	return addon( n );
}


// EXPORTS //

module.exports = nonfibonacci;
