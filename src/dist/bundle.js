/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/fp-ts/lib/Array.js":
/*!******************************************!*\
  !*** ../node_modules/fp-ts/lib/Array.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __webpack_require__(/*! ./function */ "../node_modules/fp-ts/lib/function.js");
var Option_1 = __webpack_require__(/*! ./Option */ "../node_modules/fp-ts/lib/Option.js");
var Ord_1 = __webpack_require__(/*! ./Ord */ "../node_modules/fp-ts/lib/Ord.js");
var Setoid_1 = __webpack_require__(/*! ./Setoid */ "../node_modules/fp-ts/lib/Setoid.js");
exports.URI = 'Array';
/**
 *
 * @example
 * import { getMonoid } from 'fp-ts/lib/Array'
 *
 * const M = getMonoid<number>()
 * assert.deepEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @function
 * @since 1.0.0
 */
exports.getMonoid = function () {
    return {
        concat: function_1.concat,
        empty: exports.empty
    };
};
/**
 * Derives a Setoid over the Array of a given element type from the Setoid of that type. The derived setoid defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given setoid `S`. In case of
 * arrays of different lengths, the result is non equality.
 *
 *
 * @example
 * import { ordString } from 'fp-ts/lib/Ord'
 *
 * const O = getArraySetoid(ordString)
 * assert.strictEqual(O.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(O.equals(['a'], []), false)
 *
 * @constant
 * @since 1.0.0
 */
exports.getSetoid = Setoid_1.getArraySetoid;
/**
 * Derives an `Ord` over the Array of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 *
 * @example
 * import { getOrd } from 'fp-ts/lib/Array'
 * import { ordString } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordString)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 * @function
 * @since 1.2.0
 */
exports.getOrd = function (O) { return (__assign({}, exports.getSetoid(O), { compare: function (a, b) {
        var aLen = a.length;
        var bLen = b.length;
        var len = Math.min(aLen, bLen);
        for (var i = 0; i < len; i++) {
            var order = O.compare(a[i], b[i]);
            if (order !== 0) {
                return order;
            }
        }
        return Ord_1.ordNumber.compare(aLen, bLen);
    } })); };
var map = function (fa, f) {
    var l = fa.length;
    var r = new Array(l);
    for (var i = 0; i < l; i++) {
        r[i] = f(fa[i]);
    }
    return r;
};
var of = function (a) {
    return [a];
};
var ap = function (fab, fa) {
    return exports.flatten(map(fab, function (f) { return map(fa, f); }));
};
var chain = function (fa, f) {
    var resLen = 0;
    var l = fa.length;
    var temp = new Array(l);
    for (var i = 0; i < l; i++) {
        var e = fa[i];
        var arr = f(e);
        resLen += arr.length;
        temp[i] = arr;
    }
    var r = Array(resLen);
    var start = 0;
    for (var i = 0; i < l; i++) {
        var arr = temp[i];
        var l_1 = arr.length;
        for (var j = 0; j < l_1; j++) {
            r[j + start] = arr[j];
        }
        start += l_1;
    }
    return r;
};
var reduce = function (fa, b, f) {
    var l = fa.length;
    var r = b;
    for (var i = 0; i < l; i++) {
        r = f(r, fa[i]);
    }
    return r;
};
var foldMap = function (M) { return function (fa, f) {
    return fa.reduce(function (b, a) { return M.concat(b, f(a)); }, M.empty);
}; };
var reduceRight = function (fa, b, f) {
    return fa.reduceRight(function (b, a) { return f(a, b); }, b);
};
function traverse(F) {
    return function (ta, f) {
        return reduce(ta, F.of(zero()), function (fbs, a) { return F.ap(F.map(fbs, function (bs) { return function (b) { return exports.snoc(bs, b); }; }), f(a)); });
    };
}
exports.traverse = traverse;
var sequence = function (F) { return function (ta) {
    return reduce(ta, F.of(zero()), function (fas, fa) { return F.ap(F.map(fas, function (as) { return function (a) { return exports.snoc(as, a); }; }), fa); });
}; };
/**
 * An empty array
 *
 * @constant
 * @since 1.9.0
 */
exports.empty = [];
var zero = function () { return exports.empty; };
var alt = function_1.concat;
var unfoldr = function (b, f) {
    var ret = [];
    var bb = b;
    while (true) {
        var mt = f(bb);
        if (mt.isSome()) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            ret.push(a);
            bb = b_1;
        }
        else {
            break;
        }
    }
    return ret;
};
/**
 * Return a list of length `n` with element `i` initialized with `f(i)`
 *
 * @example
 * import { makeBy } from 'fp-ts/lib/Array'
 *
 * const double = (n: number): number => n * 2
 * assert.deepEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @function
 * @since 1.10.0
 */
exports.makeBy = function (n, f) {
    var r = [];
    for (var i = 0; i < n; i++) {
        r.push(f(i));
    }
    return r;
};
/**
 * Create an array containing a range of integers, including both endpoints
 *
 * @example
 * import { range } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @function
 * @since 1.10.0
 */
exports.range = function (start, end) {
    return exports.makeBy(end - start + 1, function (i) { return start + i; });
};
/**
 * Create an array containing a value repeated the specified number of times
 *
 * @example
 * import { replicate } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @function
 * @since 1.10.0
 */
exports.replicate = function (n, a) {
    return exports.makeBy(n, function () { return a; });
};
var extend = function (fa, f) {
    return fa.map(function (_, i, as) { return f(as.slice(i)); });
};
/**
 * Removes one level of nesting
 *
 * @example
 * import { flatten } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(flatten([[1], [2], [3]]), [1, 2, 3])
 *
 * @function
 * @since 1.0.0
 */
exports.flatten = function (ffa) {
    var rLen = 0;
    var len = ffa.length;
    for (var i = 0; i < len; i++) {
        rLen += ffa[i].length;
    }
    var r = Array(rLen);
    var start = 0;
    for (var i = 0; i < len; i++) {
        var arr = ffa[i];
        var l = arr.length;
        for (var j = 0; j < l; j++) {
            r[j + start] = arr[j];
        }
        start += l;
    }
    return r;
};
/**
 * Break an array into its first element and remaining elements
 *
 * @example
 * import { fold } from 'fp-ts/lib/Array'
 *
 * const len = <A>(as: Array<A>): number => fold(as, 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @function
 * @since 1.0.0
 */
exports.fold = function (as, b, cons) {
    return exports.isEmpty(as) ? b : cons(as[0], as.slice(1));
};
/**
 * Lazy version of {@link fold}
 * @function
 * @since 1.0.0
 */
exports.foldL = function (as, nil, cons) {
    return exports.isEmpty(as) ? nil() : cons(as[0], as.slice(1));
};
/**
 * Break an array into its initial elements and the last element
 * @function
 * @since 1.7.0
 * @param as
 * @param b
 * @param cons
 */
exports.foldr = function (as, b, cons) {
    return exports.isEmpty(as) ? b : cons(as.slice(0, as.length - 1), as[as.length - 1]);
};
/**
 * Lazy version of {@link foldr}
 * @function
 * @since 1.7.0
 * @param as
 * @param nil
 * @param cons
 */
exports.foldrL = function (as, nil, cons) {
    return exports.isEmpty(as) ? nil() : cons(as.slice(0, as.length - 1), as[as.length - 1]);
};
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * ```ts
 * import { scanLeft } from 'fp-ts/lib/Array'
 *
 * scanLeft([1, 2, 3], 10, (b, a) => b - a) // [ 10, 9, 7, 4 ]
 * ```
 *
 * @function
 * @since 1.1.0
 */
exports.scanLeft = function (as, b, f) {
    var l = as.length;
    var r = new Array(l + 1);
    r[0] = b;
    for (var i = 0; i < l; i++) {
        r[i + 1] = f(r[i], as[i]);
    }
    return r;
};
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(scanRight([1, 2, 3], 10, (a, b) => b - a), [ 4, 5, 7, 10 ])
 *
 * @function
 * @since 1.1.0
 */
exports.scanRight = function (as, b, f) {
    var l = as.length;
    var r = new Array(l + 1);
    r[l] = b;
    for (var i = l - 1; i >= 0; i--) {
        r[i] = f(as[i], r[i + 1]);
    }
    return r;
};
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/lib/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @function
 * @since 1.0.0
 */
exports.isEmpty = function (as) {
    return as.length === 0;
};
/**
 * Test whether an array contains a particular index
 * @function
 * @since 1.0.0
 */
exports.isOutOfBound = function (i, as) {
    return i < 0 || i >= as.length;
};
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { index } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(index(1, [1, 2, 3]), some(2))
 * assert.deepEqual(index(3, [1, 2, 3]), none)
 *
 * @function
 * @since 1.0.0
 */
exports.index = function (i, as) {
    return exports.isOutOfBound(i, as) ? Option_1.none : Option_1.some(as[i]);
};
/**
 * Attaches an element to the front of an array, creating a new array
 *
 * @example
 * import { cons } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(cons(0, [1, 2, 3]), [0, 1, 2, 3])
 *
 * @function
 * @since 1.0.0
 */
exports.cons = function (a, as) {
    var len = as.length;
    var r = Array(len + 1);
    for (var i = 0; i < len; i++) {
        r[i + 1] = as[i];
    }
    r[0] = a;
    return r;
};
/**
 * Append an element to the end of an array, creating a new array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @function
 * @since 1.0.0
 */
exports.snoc = function (as, a) {
    var len = as.length;
    var r = Array(len + 1);
    for (var i = 0; i < len; i++) {
        r[i] = as[i];
    }
    r[len] = a;
    return r;
};
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(head([1, 2, 3]), some(1))
 * assert.deepEqual(head([]), none)
 *
 * @function
 * @since 1.0.0
 */
exports.head = function (as) {
    return exports.isEmpty(as) ? Option_1.none : Option_1.some(as[0]);
};
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(last([1, 2, 3]), some(3))
 * assert.deepEqual(last([]), none)
 *
 * @function
 * @since 1.0.0
 */
exports.last = function (as) {
    return exports.index(as.length - 1, as);
};
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepEqual(tail([]), none)
 *
 * @function
 * @since 1.0.0
 */
exports.tail = function (as) {
    return exports.isEmpty(as) ? Option_1.none : Option_1.some(as.slice(1));
};
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepEqual(init([]), none)
 *
 * @function
 * @since 1.0.0
 */
exports.init = function (as) {
    var len = as.length;
    return len === 0 ? Option_1.none : Option_1.some(as.slice(0, len - 1));
};
/**
 * Keep only a number of elements from the start of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { take } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(take(2, [1, 2, 3]), [1, 2])
 *
 * @function
 * @since 1.0.0
 */
exports.take = function (n, as) {
    return as.slice(0, n);
};
/**
 * Keep only a number of elements from the end of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeEnd } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(takeEnd(2, [1, 2, 3, 4, 5]), [4, 5])
 *
 * @function
 * @since 1.10.0
 */
exports.takeEnd = function (n, as) {
    return n === 0 ? exports.empty : as.slice(-n);
};
function takeWhile(as, predicate) {
    var i = spanIndexUncurry(as, predicate);
    var init = Array(i);
    for (var j = 0; j < i; j++) {
        init[j] = as[j];
    }
    return init;
}
exports.takeWhile = takeWhile;
var spanIndexUncurry = function (as, predicate) {
    var l = as.length;
    var i = 0;
    for (; i < l; i++) {
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function span(as, predicate) {
    var i = spanIndexUncurry(as, predicate);
    var init = Array(i);
    for (var j = 0; j < i; j++) {
        init[j] = as[j];
    }
    var l = as.length;
    var rest = Array(l - i);
    for (var j = i; j < l; j++) {
        rest[j - i] = as[j];
    }
    return { init: init, rest: rest };
}
exports.span = span;
/**
 * Drop a number of elements from the start of an array, creating a new array
 *
 * @example
 * import { drop } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(drop(2, [1, 2, 3]), [3])
 *
 * @function
 * @since 1.0.0
 */
exports.drop = function (n, as) {
    return as.slice(n, as.length);
};
/**
 * Drop a number of elements from the end of an array, creating a new array
 *
 * @example
 * import { dropEnd } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(dropEnd(2, [1, 2, 3, 4, 5]), [1, 2, 3])
 *
 * @function
 * @since 1.10.0
 */
exports.dropEnd = function (n, as) {
    return as.slice(0, as.length - n);
};
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropWhile } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(dropWhile([1, 3, 2, 4, 5], n => n % 2 === 1), [2, 4, 5])
 *
 * @function
 * @since 1.0.0
 */
exports.dropWhile = function (as, predicate) {
    var i = spanIndexUncurry(as, predicate);
    var l = as.length;
    var rest = Array(l - i);
    for (var j = i; j < l; j++) {
        rest[j - i] = as[j];
    }
    return rest;
};
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(findIndex([1, 2, 3], x => x === 2), some(1))
 * assert.deepEqual(findIndex([], x => x === 2), none)
 *
 * @function
 * @since 1.0.0
 */
exports.findIndex = function (as, predicate) {
    var len = as.length;
    for (var i = 0; i < len; i++) {
        if (predicate(as[i])) {
            return Option_1.some(i);
        }
    }
    return Option_1.none;
};
function findFirst(as, predicate) {
    var len = as.length;
    for (var i = 0; i < len; i++) {
        if (predicate(as[i])) {
            return Option_1.some(as[i]);
        }
    }
    return Option_1.none;
}
exports.findFirst = findFirst;
function findLast(as, predicate) {
    var len = as.length;
    for (var i = len - 1; i >= 0; i--) {
        if (predicate(as[i])) {
            return Option_1.some(as[i]);
        }
    }
    return Option_1.none;
}
exports.findLast = findLast;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface X {
 *   a: number
 *   b: number
 * }
 * const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepEqual(findLastIndex(xs, x => x.a === 1), some(1))
 * assert.deepEqual(findLastIndex(xs, x => x.a === 4), none)
 *
 * @function
 * @since 1.10.0
 */
exports.findLastIndex = function (as, predicate) {
    var len = as.length;
    for (var i = len - 1; i >= 0; i--) {
        if (predicate(as[i])) {
            return Option_1.some(i);
        }
    }
    return Option_1.none;
};
/**
 * Use {@link filter} instead
 * @function
 * @since 1.0.0
 * @deprecated
 */
exports.refine = function (as, refinement) {
    return filter(as, refinement);
};
/**
 * @function
 * @since 1.0.0
 */
exports.copy = function (as) {
    var l = as.length;
    var r = Array(l);
    for (var i = 0; i < l; i++) {
        r[i] = as[i];
    }
    return r;
};
/**
 * @function
 * @since 1.0.0
 */
exports.unsafeInsertAt = function (i, a, as) {
    var xs = exports.copy(as);
    xs.splice(i, 0, a);
    return xs;
};
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/lib/Array'
 * import { some } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(insertAt(2, 5, [1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @function
 * @since 1.0.0
 */
exports.insertAt = function (i, a, as) {
    return i < 0 || i > as.length ? Option_1.none : Option_1.some(exports.unsafeInsertAt(i, a, as));
};
/**
 * @function
 * @since 1.0.0
 */
exports.unsafeUpdateAt = function (i, a, as) {
    var xs = exports.copy(as);
    xs[i] = a;
    return xs;
};
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(updateAt(1, 1, [1, 2, 3]), some([1, 1, 3]))
 * assert.deepEqual(updateAt(1, 1, []), none)
 *
 * @function
 * @since 1.0.0
 */
exports.updateAt = function (i, a, as) {
    return exports.isOutOfBound(i, as) ? Option_1.none : Option_1.some(exports.unsafeUpdateAt(i, a, as));
};
/**
 * @function
 * @since 1.0.0
 */
exports.unsafeDeleteAt = function (i, as) {
    var xs = exports.copy(as);
    xs.splice(i, 1);
    return xs;
};
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(deleteAt(0, [1, 2, 3]), some([2, 3]))
 * assert.deepEqual(deleteAt(1, []), none)
 *
 * @function
 * @since 1.0.0
 */
exports.deleteAt = function (i, as) {
    return exports.isOutOfBound(i, as) ? Option_1.none : Option_1.some(exports.unsafeDeleteAt(i, as));
};
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepEqual(modifyAt([1, 2, 3], 1, double), some([1, 4, 3]))
 * assert.deepEqual(modifyAt([], 1, double), none)
 *
 * @function
 * @since 1.0.0
 */
exports.modifyAt = function (as, i, f) {
    return exports.isOutOfBound(i, as) ? Option_1.none : Option_1.some(exports.unsafeUpdateAt(i, f(as[i]), as));
};
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @function
 * @since 1.0.0
 */
exports.reverse = function (as) {
    return exports.copy(as).reverse();
};
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/lib/Array'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @function
 * @since 1.0.0
 */
exports.rights = function (as) {
    var r = [];
    var len = as.length;
    for (var i = 0; i < len; i++) {
        var a = as[i];
        if (a.isRight()) {
            r.push(a.value);
        }
    }
    return r;
};
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/lib/Array'
 * import { left, right } from 'fp-ts/lib/Either'
 *
 * assert.deepEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @function
 * @since 1.0.0
 */
exports.lefts = function (as) {
    var r = [];
    var len = as.length;
    for (var i = 0; i < len; i++) {
        var a = as[i];
        if (a.isLeft()) {
            r.push(a.value);
        }
    }
    return r;
};
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/lib/Array'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepEqual(sort(ordNumber)([3, 2, 1]), [1, 2, 3])
 *
 * @function
 * @since 1.0.0
 */
exports.sort = function (O) { return function (as) {
    return exports.copy(as).sort(O.compare);
}; };
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @function
 * @since 1.0.0
 */
exports.zipWith = function (fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(zip([1, 2, 3], ['a', 'b', 'c', 'd']), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 * @function
 * @since 1.0.0
 */
exports.zip = function (fa, fb) {
    return exports.zipWith(fa, fb, function_1.tuple);
};
/**
 * Rotate an array to the right by `n` steps
 *
 * @example
 * import { rotate } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(rotate(2, [1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @function
 * @since 1.0.0
 */
exports.rotate = function (n, xs) {
    var len = xs.length;
    if (n === 0 || len <= 1 || len === Math.abs(n)) {
        return xs;
    }
    else if (n < 0) {
        return exports.rotate(len + n, xs);
    }
    else {
        return xs.slice(-n).concat(xs.slice(0, len - n));
    }
};
/**
 * Test if a value is a member of an array. Takes a `Setoid<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `Array<A>`.
 *
 * @example
 * import { member } from 'fp-ts/lib/Array'
 * import { setoidString, setoidNumber } from 'fp-ts/lib/Setoid'
 *
 * assert.strictEqual(member(setoidString)(['thing one', 'thing two', 'cat in the hat'], 'thing two'), true)
 * assert.strictEqual(member(setoidNumber)([1, 2, 3], 1), true)
 * assert.strictEqual(member(setoidNumber)([1, 2, 3], 4), false)
 *
 * @function
 * @since 1.3.0
 */
exports.member = function (S) { return function (as, a) {
    var predicate = function (e) { return S.equals(e, a); };
    var i = 0;
    var len = as.length;
    for (; i < len; i++) {
        if (predicate(as[i])) {
            return true;
        }
    }
    return false;
}; };
/**
 * Remove duplicates from an array, keeping the first occurance of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/lib/Array'
 * import { setoidNumber } from 'fp-ts/lib/Setoid'
 *
 * assert.deepEqual(uniq(setoidNumber)([1, 2, 1]), [1, 2])
 *
 * @function
 * @since 1.3.0
 */
exports.uniq = function (S) {
    var memberS = exports.member(S);
    return function (as) {
        var r = [];
        var len = as.length;
        var i = 0;
        for (; i < len; i++) {
            var a = as[i];
            if (!memberS(r, a)) {
                r.push(a);
            }
        }
        return len === r.length ? as : r;
    };
};
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/lib/Array'
 * import { contramap, ordString, ordNumber } from 'fp-ts/lib/Ord'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 * const byName = contramap((p: Person) => p.name, ordString)
 * const byAge = contramap((p: Person) => p.age, ordNumber)
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * if (sortByNameByAge.isSome()) {
 *   const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 *   assert.deepEqual(sortByNameByAge.value(persons), [
 *     { name: 'a', age: 1 },
 *     { name: 'b', age: 2 },
 *     { name: 'b', age: 3 },
 *     { name: 'c', age: 2 }
 *   ])
 * }
 *
 * @function
 * @since 1.3.0
 */
exports.sortBy = function (ords) {
    return exports.fold(ords, Option_1.none, function (head, tail) { return Option_1.some(exports.sortBy1(head, tail)); });
};
/**
 * Non failing version of {@link sortBy}
 * @example
 * import { sortBy1 } from 'fp-ts/lib/Array'
 * import { contramap, ordString, ordNumber } from 'fp-ts/lib/Ord'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 * const byName = contramap((p: Person) => p.name, ordString)
 * const byAge = contramap((p: Person) => p.age, ordNumber)
 *
 * const sortByNameByAge = sortBy1(byName, [byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @function
 * @since 1.3.0
 */
exports.sortBy1 = function (head, tail) {
    return exports.sort(tail.reduce(Ord_1.getSemigroup().concat, head));
};
/**
 * Apply a function to each element in an array, keeping only the results which contain a value, creating a new array.
 *
 * Alias of {@link Filterable}'s `filterMap`
 *
 * @example
 * import { mapOption } from 'fp-ts/lib/Array'
 * import { Option, some, none } from 'fp-ts/lib/Option'
 *
 * const f = (n: number): Option<number> => (n % 2 === 0 ? none : some(n))
 * assert.deepEqual(mapOption([1, 2, 3], f), [1, 3])
 *
 * @function
 * @since 1.0.0
 */
exports.mapOption = function (as, f) {
    var result = [];
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var optionB = f(a);
        if (optionB.isSome()) {
            result.push(optionB.value);
        }
    }
    return result;
};
/**
 * Filter an array of optional values, keeping only the elements which contain a value, creating a new array.
 *
 * Alias of {@link Compactable}'s `compact`
 *
 * @example
 * import { catOptions } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(catOptions([some(1), none, some(3)]), [1, 3])
 *
 * @function
 * @since 1.0.0
 */
exports.catOptions = function (as) {
    return exports.mapOption(as, function_1.identity);
};
/**
 * @example
 * import { array } from 'fp-ts/lib/Array'
 * import { left, right } from 'fp-ts/lib/Either'
 * import { identity } from 'fp-ts/lib/function'
 *
 * assert.deepEqual(array.partitionMap([right(1), left('foo'), right(2)], identity), { left: ['foo'], right: [1, 2] })
 *
 * @function
 * @since 1.0.0
 */
exports.partitionMap = function (fa, f) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var a = fa_1[_i];
        var e = f(a);
        if (e.isLeft()) {
            left.push(e.value);
        }
        else {
            right.push(e.value);
        }
    }
    return {
        left: left,
        right: right
    };
};
function filter(as, predicate) {
    return as.filter(predicate);
}
exports.filter = filter;
var partition = function (fa, p) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_2 = fa; _i < fa_2.length; _i++) {
        var a = fa_2[_i];
        if (p(a)) {
            right.push(a);
        }
        else {
            left.push(a);
        }
    }
    return {
        left: left,
        right: right
    };
};
var compact = exports.catOptions;
var separate = function (fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_3 = fa; _i < fa_3.length; _i++) {
        var e = fa_3[_i];
        if (e.isLeft()) {
            left.push(e.value);
        }
        else {
            right.push(e.value);
        }
    }
    return {
        left: left,
        right: right
    };
};
var filterMap = exports.mapOption;
var wither = function (F) {
    var traverseF = traverse(F);
    return function (wa, f) { return F.map(traverseF(wa, f), compact); };
};
var wilt = function (F) {
    var traverseF = traverse(F);
    return function (wa, f) { return F.map(traverseF(wa, f), separate); };
};
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Setoid, setoidNumber } from 'fp-ts/lib/Setoid'
 * import { chop, span } from 'fp-ts/lib/Array'
 *
 * const group = <A>(S: Setoid<A>) => (as: Array<A>): Array<Array<A>> => {
 *   return chop(as, as => {
 *     const { init, rest } = span(as, a => S.equals(a, as[0]))
 *     return [init, rest]
 *   })
 * }
 * assert.deepEqual(group(setoidNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @function
 * @since 1.10.0
 */
exports.chop = function (as, f) {
    var result = [];
    var cs = as;
    while (cs.length > 0) {
        var _a = f(cs), b = _a[0], c = _a[1];
        result.push(b);
        cs = c;
    }
    return result;
};
/**
 * Splits an array into two pieces, the first piece has `n` elements.
 *
 * @example
 * import { split } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(split(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @function
 * @since 1.10.0
 */
exports.split = function (n, as) {
    return [as.slice(0, n), as.slice(n)];
};
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf([], n)` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(xs, n).concat(chunksOf(ys, n)) == chunksOf(xs.concat(ys)), n)
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/lib/Array'
 *
 * assert.deepEqual(chunksOf([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]])
 *
 * @function
 * @since 1.10.0
 */
exports.chunksOf = function (as, n) {
    return exports.isOutOfBound(n - 1, as) ? [as] : exports.chop(as, function (as) { return exports.split(n, as); });
};
function comprehension(input, f, g) {
    var go = function (scope, input) {
        if (input.length === 0) {
            return f.apply(void 0, scope) ? [g.apply(void 0, scope)] : exports.empty;
        }
        else {
            return chain(input[0], function (x) { return go(exports.snoc(scope, x), input.slice(1)); });
        }
    };
    return go(exports.empty, input);
}
exports.comprehension = comprehension;
/**
 * @instance
 * @since 1.0.0
 */
exports.array = {
    URI: exports.URI,
    map: map,
    compact: compact,
    separate: separate,
    filter: filter,
    filterMap: filterMap,
    partition: partition,
    partitionMap: exports.partitionMap,
    of: of,
    ap: ap,
    chain: chain,
    reduce: reduce,
    foldMap: foldMap,
    foldr: reduceRight,
    unfoldr: unfoldr,
    traverse: traverse,
    sequence: sequence,
    zero: zero,
    alt: alt,
    extend: extend,
    wither: wither,
    wilt: wilt
};


/***/ }),

/***/ "../node_modules/fp-ts/lib/Monoid.js":
/*!*******************************************!*\
  !*** ../node_modules/fp-ts/lib/Monoid.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __webpack_require__(/*! ./function */ "../node_modules/fp-ts/lib/function.js");
var Semigroup_1 = __webpack_require__(/*! ./Semigroup */ "../node_modules/fp-ts/lib/Semigroup.js");
/**
 * @function
 * @since 1.0.0
 */
exports.fold = function (M) {
    return Semigroup_1.fold(M)(M.empty);
};
/**
 * @function
 * @since 1.0.0
 */
exports.getProductMonoid = function (MA, MB) {
    return __assign({}, Semigroup_1.getProductSemigroup(MA, MB), { empty: [MA.empty, MB.empty] });
};
/**
 * @function
 * @since 1.0.0
 */
exports.getDualMonoid = function (M) {
    return __assign({}, Semigroup_1.getDualSemigroup(M), { empty: M.empty });
};
/**
 * Boolean monoid under conjunction
 * @instance
 * @since 1.0.0
 */
exports.monoidAll = __assign({}, Semigroup_1.semigroupAll, { empty: true });
/**
 * Boolean monoid under disjunction
 * @instance
 * @since 1.0.0
 */
exports.monoidAny = __assign({}, Semigroup_1.semigroupAny, { empty: false });
var emptyArray = [];
/**
 * @instance
 * @since 1.0.0
 */
exports.unsafeMonoidArray = __assign({}, Semigroup_1.getArraySemigroup(), { empty: emptyArray });
/**
 * Monoid under array concatenation (`Array<any>`)
 * @function
 * @since 1.0.0
 */
exports.getArrayMonoid = function () {
    return exports.unsafeMonoidArray;
};
var emptyObject = {};
/**
 * Gets {@link Monoid} instance for dictionaries given {@link Semigroup} instance for their values
 *
 * @example
 * import { getDictionaryMonoid, fold } from 'fp-ts/lib/Monoid'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const M = getDictionaryMonoid(semigroupSum)
 * assert.deepEqual(fold(M)([{ foo: 123 }, { foo: 456 }]), { foo: 579 })
 *
 * @function
 * @since 1.4.0
 */
exports.getDictionaryMonoid = function (S) {
    return __assign({}, Semigroup_1.getDictionarySemigroup(S), { empty: emptyObject });
};
/**
 * Number monoid under addition
 * @instance
 * @since 1.0.0
 */
exports.monoidSum = __assign({}, Semigroup_1.semigroupSum, { empty: 0 });
/**
 * Number monoid under multiplication
 * @instance
 * @since 1.0.0
 */
exports.monoidProduct = __assign({}, Semigroup_1.semigroupProduct, { empty: 1 });
/**
 * @instance
 * @since 1.0.0
 */
exports.monoidString = __assign({}, Semigroup_1.semigroupString, { empty: '' });
/**
 * @instance
 * @since 1.0.0
 */
exports.monoidVoid = __assign({}, Semigroup_1.semigroupVoid, { empty: undefined });
/**
 * @function
 * @since 1.0.0
 */
exports.getFunctionMonoid = function (M) { return function () {
    return __assign({}, Semigroup_1.getFunctionSemigroup(M)(), { empty: function () { return M.empty; } });
}; };
/**
 * @function
 * @since 1.0.0
 */
exports.getEndomorphismMonoid = function () {
    return {
        concat: function_1.compose,
        empty: function_1.identity
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getRecordMonoid = function (monoids) {
    var empty = {};
    var keys = Object.keys(monoids);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        empty[key] = monoids[key].empty;
    }
    return __assign({}, Semigroup_1.getRecordSemigroup(monoids), { empty: empty });
};
/**
 * @function
 * @since 1.9.0
 */
exports.getMeetMonoid = function (B) {
    return __assign({}, Semigroup_1.getMeetSemigroup(B), { empty: B.top });
};
/**
 * @function
 * @since 1.9.0
 */
exports.getJoinMonoid = function (B) {
    return __assign({}, Semigroup_1.getJoinSemigroup(B), { empty: B.bottom });
};


/***/ }),

/***/ "../node_modules/fp-ts/lib/Option.js":
/*!*******************************************!*\
  !*** ../node_modules/fp-ts/lib/Option.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __webpack_require__(/*! ./function */ "../node_modules/fp-ts/lib/function.js");
var Monoid_1 = __webpack_require__(/*! ./Monoid */ "../node_modules/fp-ts/lib/Monoid.js");
exports.URI = 'Option';
var None = /** @class */ (function () {
    function None() {
        this._tag = 'None';
    }
    /**
     * Takes a function `f` and an `Option` of `A`. Maps `f` either on `None` or `Some`, Option's data constructors. If it
     * maps on `Some` then it will apply the `f` on `Some`'s value, if it maps on `None` it will return `None`.
     *
     * @example
     * import { some } from 'fp-ts/lib/Option'
     *
     * assert.deepEqual(some(1).map(n => n * 2), some(2))
     */
    None.prototype.map = function (f) {
        return exports.none;
    };
    /**
     * Maps `f` over this `Option`'s value. If the value returned from `f` is null or undefined, returns `None`
     *
     * @example
     * import { none, some } from 'fp-ts/lib/Option'
     *
     * interface Foo {
     *   bar?: {
     *     baz?: string
     *   }
     * }
     *
     * assert.deepEqual(
     *   some<Foo>({ bar: { baz: 'quux' } })
     *     .mapNullable(foo => foo.bar)
     *     .mapNullable(bar => bar.baz),
     *   some('quux')
     * )
     * assert.deepEqual(
     *   some<Foo>({ bar: {} })
     *     .mapNullable(foo => foo.bar)
     *     .mapNullable(bar => bar.baz),
     *   none
     * )
     * assert.deepEqual(
     *   some<Foo>({})
     *     .mapNullable(foo => foo.bar)
     *     .mapNullable(bar => bar.baz),
     *   none
     * )
     */
    None.prototype.mapNullable = function (f) {
        return exports.none;
    };
    /**
     * `ap`, some may also call it "apply". Takes a function `fab` that is in the context of `Option`, and applies that
     * function to this `Option`'s value. If the `Option` calling `ap` is `none` it will return `none`.
     *
     * @example
     * import { some, none } from 'fp-ts/lib/Option'
     *
     * assert.deepEqual(some(2).ap(some((x: number) => x + 1)), some(3))
     * assert.deepEqual(none.ap(some((x: number) => x + 1)), none)
     */
    None.prototype.ap = function (fab) {
        return exports.none;
    };
    /**
     * Flipped version of {@link ap}
     *
     * @example
     * import { some, none } from 'fp-ts/lib/Option'
     *
     * assert.deepEqual(some((x: number) => x + 1).ap_(some(2)), some(3))
     * assert.deepEqual(none.ap_(some(2)), none)
     */
    None.prototype.ap_ = function (fb) {
        return fb.ap(this);
    };
    /**
     * Returns the result of applying f to this `Option`'s value if this `Option` is nonempty. Returns `None` if this
     * `Option` is empty. Slightly different from `map` in that `f` is expected to return an `Option` (which could be
     * `None`)
     */
    None.prototype.chain = function (f) {
        return exports.none;
    };
    None.prototype.reduce = function (b, f) {
        return b;
    };
    /**
     * `alt` short for alternative, takes another `Option`. If this `Option` is a `Some` type then it will be returned, if
     * it is a `None` then it will return the next `Some` if it exist. If both are `None` then it will return `none`.
     *
     * @example
     * import { Option, some, none } from 'fp-ts/lib/Option'
     *
     * assert.deepEqual(some(2).alt(some(4)), some(2))
     * const fa: Option<number> = none
     * assert.deepEqual(fa.alt(some(4)), some(4))
     */
    None.prototype.alt = function (fa) {
        return fa;
    };
    /**
     * Lazy version of {@link alt}
     *
     * @example
     * import { some } from 'fp-ts/lib/Option'
     *
     * assert.deepEqual(some(1).orElse(() => some(2)), some(1))
     *
     * @since 1.6.0
     */
    None.prototype.orElse = function (fa) {
        return fa();
    };
    None.prototype.extend = function (f) {
        return exports.none;
    };
    /**
     * Applies a function to each case in the data structure
     *
     * @example
     * import { none, some } from 'fp-ts/lib/Option'
     *
     * assert.strictEqual(some(1).fold('none', a => `some: ${a}`), 'some: 1')
     * assert.strictEqual(none.fold('none', a => `some: ${a}`), 'none')
     */
    None.prototype.fold = function (b, whenSome) {
        return b;
    };
    /** Lazy version of {@link fold} */
    None.prototype.foldL = function (whenNone, whenSome) {
        return whenNone();
    };
    /**
     * Returns the value from this `Some` or the given argument if this is a `None`
     *
     * @example
     * import { Option, none, some } from 'fp-ts/lib/Option'
     *
     * assert.strictEqual(some(1).getOrElse(0), 1)
     * const fa: Option<number> = none
     * assert.strictEqual(fa.getOrElse(0), 0)
     */
    None.prototype.getOrElse = function (a) {
        return a;
    };
    /** Lazy version of {@link getOrElse} */
    None.prototype.getOrElseL = function (f) {
        return f();
    };
    /** Returns the value from this `Some` or `null` if this is a `None` */
    None.prototype.toNullable = function () {
        return null;
    };
    /** Returns the value from this `Some` or `undefined` if this is a `None` */
    None.prototype.toUndefined = function () {
        return undefined;
    };
    None.prototype.inspect = function () {
        return this.toString();
    };
    None.prototype.toString = function () {
        return 'none';
    };
    /** Returns `true` if the option has an element that is equal (as determined by `S`) to `a`, `false` otherwise */
    None.prototype.contains = function (S, a) {
        return false;
    };
    /** Returns `true` if the option is `None`, `false` otherwise */
    None.prototype.isNone = function () {
        return true;
    };
    /** Returns `true` if the option is an instance of `Some`, `false` otherwise */
    None.prototype.isSome = function () {
        return false;
    };
    /**
     * Returns `true` if this option is non empty and the predicate `p` returns `true` when applied to this Option's value
     */
    None.prototype.exists = function (p) {
        return false;
    };
    None.prototype.filter = function (p) {
        return exports.none;
    };
    /**
     * Use {@link filter} instead.
     * Returns this option refined as `Option<B>` if it is non empty and the `refinement` returns `true` when applied to
     * this Option's value. Otherwise returns `None`
     * @since 1.3.0
     * @deprecated
     */
    None.prototype.refine = function (refinement) {
        return exports.none;
    };
    None.value = new None();
    return None;
}());
exports.None = None;
/**
 * @constant
 * @since 1.0.0
 */
exports.none = None.value;
var Some = /** @class */ (function () {
    function Some(value) {
        this.value = value;
        this._tag = 'Some';
    }
    Some.prototype.map = function (f) {
        return new Some(f(this.value));
    };
    Some.prototype.mapNullable = function (f) {
        return exports.fromNullable(f(this.value));
    };
    Some.prototype.ap = function (fab) {
        return fab.isNone() ? exports.none : new Some(fab.value(this.value));
    };
    Some.prototype.ap_ = function (fb) {
        return fb.ap(this);
    };
    Some.prototype.chain = function (f) {
        return f(this.value);
    };
    Some.prototype.reduce = function (b, f) {
        return f(b, this.value);
    };
    Some.prototype.alt = function (fa) {
        return this;
    };
    Some.prototype.orElse = function (fa) {
        return this;
    };
    Some.prototype.extend = function (f) {
        return new Some(f(this));
    };
    Some.prototype.fold = function (b, whenSome) {
        return whenSome(this.value);
    };
    Some.prototype.foldL = function (whenNone, whenSome) {
        return whenSome(this.value);
    };
    Some.prototype.getOrElse = function (a) {
        return this.value;
    };
    Some.prototype.getOrElseL = function (f) {
        return this.value;
    };
    Some.prototype.toNullable = function () {
        return this.value;
    };
    Some.prototype.toUndefined = function () {
        return this.value;
    };
    Some.prototype.inspect = function () {
        return this.toString();
    };
    Some.prototype.toString = function () {
        return "some(" + function_1.toString(this.value) + ")";
    };
    Some.prototype.contains = function (S, a) {
        return S.equals(this.value, a);
    };
    Some.prototype.isNone = function () {
        return false;
    };
    Some.prototype.isSome = function () {
        return true;
    };
    Some.prototype.exists = function (p) {
        return p(this.value);
    };
    Some.prototype.filter = function (p) {
        return this.exists(p) ? this : exports.none;
    };
    Some.prototype.refine = function (refinement) {
        return this.filter(refinement);
    };
    return Some;
}());
exports.Some = Some;
/**
 *
 * @example
 * import { none, some, getSetoid } from 'fp-ts/lib/Option'
 * import { setoidNumber } from 'fp-ts/lib/Setoid'
 *
 * const S = getSetoid(setoidNumber)
 * assert.strictEqual(S.equals(none, none), true)
 * assert.strictEqual(S.equals(none, some(1)), false)
 * assert.strictEqual(S.equals(some(1), none), false)
 * assert.strictEqual(S.equals(some(1), some(2)), false)
 * assert.strictEqual(S.equals(some(1), some(1)), true)
 *
 * @function
 * @since 1.0.0
 */
exports.getSetoid = function (S) {
    return {
        equals: function (x, y) { return (x.isNone() ? y.isNone() : y.isNone() ? false : S.equals(x.value, y.value)); }
    };
};
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/lib/Option'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordNumber)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @function
 * @since 1.2.0
 */
exports.getOrd = function (O) {
    return __assign({}, exports.getSetoid(O), { compare: function (x, y) { return (x.isSome() ? (y.isSome() ? O.compare(x.value, y.value) : 1) : y.isSome() ? -1 : 0); } });
};
var map = function (fa, f) {
    return fa.map(f);
};
var of = function (a) {
    return new Some(a);
};
var ap = function (fab, fa) {
    return fa.ap(fab);
};
var chain = function (fa, f) {
    return fa.chain(f);
};
var reduce = function (fa, b, f) {
    return fa.reduce(b, f);
};
var foldMap = function (M) { return function (fa, f) {
    return fa.isNone() ? M.empty : f(fa.value);
}; };
var foldr = function (fa, b, f) {
    return fa.isNone() ? b : f(fa.value, b);
};
var traverse = function (F) { return function (ta, f) {
    return ta.isNone() ? F.of(exports.none) : F.map(f(ta.value), exports.some);
}; };
var sequence = function (F) { return function (ta) {
    return ta.isNone() ? F.of(exports.none) : F.map(ta.value, exports.some);
}; };
var alt = function (fx, fy) {
    return fx.alt(fy);
};
var extend = function (ea, f) {
    return ea.extend(f);
};
var zero = function () {
    return exports.none;
};
/**
 * {@link Apply} semigroup
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | none               |
 * | none    | some(a) | none               |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getApplySemigroup, some, none } from 'fp-ts/lib/Option'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getApplySemigroup(semigroupSum)
 * assert.deepEqual(S.concat(none, none), none)
 * assert.deepEqual(S.concat(some(1), none), none)
 * assert.deepEqual(S.concat(none, some(1)), none)
 * assert.deepEqual(S.concat(some(1), some(2)), some(3))
 *
 * @function
 * @since 1.7.0
 */
exports.getApplySemigroup = function (S) {
    return {
        concat: function (x, y) { return (x.isSome() && y.isSome() ? exports.some(S.concat(x.value, y.value)) : exports.none); }
    };
};
/**
 * @function
 * @since 1.7.0
 */
exports.getApplyMonoid = function (M) {
    return __assign({}, exports.getApplySemigroup(M), { empty: exports.some(M.empty) });
};
/**
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/lib/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepEqual(M.concat(none, none), none)
 * assert.deepEqual(M.concat(some(1), none), some(1))
 * assert.deepEqual(M.concat(none, some(1)), some(1))
 * assert.deepEqual(M.concat(some(1), some(2)), some(1))
 *
 * @function
 * @since 1.0.0
 */
exports.getFirstMonoid = function () {
    return {
        concat: alt,
        empty: exports.none
    };
};
/**
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/lib/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepEqual(M.concat(none, none), none)
 * assert.deepEqual(M.concat(some(1), none), some(1))
 * assert.deepEqual(M.concat(none, some(1)), some(1))
 * assert.deepEqual(M.concat(some(1), some(2)), some(2))
 *
 * @function
 * @since 1.0.0
 */
exports.getLastMonoid = function () {
    return Monoid_1.getDualMonoid(exports.getFirstMonoid());
};
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(a) | some(a)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/lib/Option'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const M = getMonoid(semigroupSum)
 * assert.deepEqual(M.concat(none, none), none)
 * assert.deepEqual(M.concat(some(1), none), some(1))
 * assert.deepEqual(M.concat(none, some(1)), some(1))
 * assert.deepEqual(M.concat(some(1), some(2)), some(3))
 *
 * @function
 * @since 1.0.0
 */
exports.getMonoid = function (S) {
    return {
        concat: function (x, y) { return (x.isNone() ? y : y.isNone() ? x : exports.some(S.concat(x.value, y.value))); },
        empty: exports.none
    };
};
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(fromNullable(undefined), none)
 * assert.deepEqual(fromNullable(null), none)
 * assert.deepEqual(fromNullable(1), some(1))
 *
 * @function
 * @since 1.0.0
 */
exports.fromNullable = function (a) {
    return a == null ? exports.none : new Some(a);
};
/**
 * @function
 * @since 1.0.0
 * @alias of
 */
exports.some = of;
function fromPredicate(predicate) {
    return function (a) { return (predicate(a) ? exports.some(a) : exports.none); };
}
exports.fromPredicate = fromPredicate;
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in
 * `Some`
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/lib/Option'
 *
 * assert.deepEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepEqual(tryCatch(() => 1), some(1))
 *
 * @function
 * @since 1.0.0
 */
exports.tryCatch = function (f) {
    try {
        return exports.some(f());
    }
    catch (e) {
        return exports.none;
    }
};
/**
 * Constructs a new `Option` from a `Either`. If the value is a `Left`, returns `None`, otherwise returns the inner
 * value wrapped in a `Some`
 *
 * @example
 * import { none, some, fromEither } from 'fp-ts/lib/Option'
 * import { left, right } from 'fp-ts/lib/Either'
 *
 * assert.deepEqual(fromEither(left(1)), none)
 * assert.deepEqual(fromEither(right(1)), some(1))
 *
 * @function
 * @since 1.0.0
 */
exports.fromEither = function (fa) {
    return fa.isLeft() ? exports.none : exports.some(fa.value);
};
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise
 * @function
 * @since 1.0.0
 */
exports.isSome = function (fa) {
    return fa.isSome();
};
/**
 * Returns `true` if the option is `None`, `false` otherwise
 * @function
 * @since 1.0.0
 */
exports.isNone = function (fa) {
    return fa.isNone();
};
/**
 * Use {@link fromPredicate} instead.
 * Refinement version of {@link fromPredicate}
 * @function
 * @since 1.3.0
 * @deprecated
 */
exports.fromRefinement = function (refinement) { return function (a) {
    return refinement(a) ? exports.some(a) : exports.none;
}; };
/**
 * Returns a refinement from a prism.
 * This function ensures that a custom type guard definition is type-safe.
 *
 * ```ts
 * import { some, none, getRefinement } from 'fp-ts/lib/Option'
 *
 * type A = { type: 'A' }
 * type B = { type: 'B' }
 * type C = A | B
 *
 * const isA = (c: C): c is A => c.type === 'B' // <= typo but typescript doesn't complain
 * const isA = getRefinement<C, A>(c => (c.type === 'B' ? some(c) : none)) // static error: Type '"B"' is not assignable to type '"A"'
 * ```
 *
 * @function
 * @since 1.7.0
 */
exports.getRefinement = function (getOption) {
    return function (a) { return getOption(a).isSome(); };
};
var compact = function (fa) { return fa.chain(function_1.identity); };
var separate = function (fa) {
    if (fa.isNone()) {
        return {
            left: exports.none,
            right: exports.none
        };
    }
    var e = fa.value;
    if (e.isLeft()) {
        return {
            left: exports.some(e.value),
            right: exports.none
        };
    }
    return {
        left: exports.none,
        right: exports.some(e.value)
    };
};
var filter = function (fa, p) { return fa.filter(p); };
var filterMap = chain;
var partitionMap = function (fa, f) {
    return separate(fa.map(f));
};
var partition = function (fa, p) { return ({
    left: fa.filter(function_1.not(p)),
    right: fa.filter(p)
}); };
var wither = function (F) { return function (fa, f) {
    return fa.isNone() ? F.of(fa) : f(fa.value);
}; };
var wilt = function (F) { return function (fa, f) {
    if (fa.isNone()) {
        return F.of({
            left: exports.none,
            right: exports.none
        });
    }
    return F.map(f(fa.value), function (e) {
        if (e.isLeft()) {
            return {
                left: exports.some(e.value),
                right: exports.none
            };
        }
        return {
            left: exports.none,
            right: exports.some(e.value)
        };
    });
}; };
/**
 * @instance
 * @since 1.0.0
 */
exports.option = {
    URI: exports.URI,
    map: map,
    of: of,
    ap: ap,
    chain: chain,
    reduce: reduce,
    foldMap: foldMap,
    foldr: foldr,
    traverse: traverse,
    sequence: sequence,
    zero: zero,
    alt: alt,
    extend: extend,
    compact: compact,
    separate: separate,
    filter: filter,
    filterMap: filterMap,
    partition: partition,
    partitionMap: partitionMap,
    wither: wither,
    wilt: wilt
};


/***/ }),

/***/ "../node_modules/fp-ts/lib/Ord.js":
/*!****************************************!*\
  !*** ../node_modules/fp-ts/lib/Ord.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ordering_1 = __webpack_require__(/*! ./Ordering */ "../node_modules/fp-ts/lib/Ordering.js");
var Setoid_1 = __webpack_require__(/*! ./Setoid */ "../node_modules/fp-ts/lib/Setoid.js");
var function_1 = __webpack_require__(/*! ./function */ "../node_modules/fp-ts/lib/function.js");
/**
 * @function
 * @since 1.0.0
 */
exports.unsafeCompare = function (x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
};
/**
 * @instance
 * @since 1.0.0
 */
exports.ordString = __assign({}, Setoid_1.setoidString, { compare: exports.unsafeCompare });
/**
 * @instance
 * @since 1.0.0
 */
exports.ordNumber = __assign({}, Setoid_1.setoidNumber, { compare: exports.unsafeCompare });
/**
 * @instance
 * @since 1.0.0
 */
exports.ordBoolean = __assign({}, Setoid_1.setoidBoolean, { compare: exports.unsafeCompare });
/**
 * Test whether one value is _strictly less than_ another
 * @function
 * @since 1.0.0
 */
exports.lessThan = function (O) { return function (x, y) {
    return O.compare(x, y) === -1;
}; };
/**
 * Test whether one value is _strictly greater than_ another
 * @function
 * @since 1.0.0
 */
exports.greaterThan = function (O) { return function (x, y) {
    return O.compare(x, y) === 1;
}; };
/**
 * Test whether one value is _non-strictly less than_ another
 * @function
 * @since 1.0.0
 */
exports.lessThanOrEq = function (O) { return function (x, y) {
    return O.compare(x, y) !== 1;
}; };
/**
 * Test whether one value is _non-strictly greater than_ another
 * @function
 * @since 1.0.0
 */
exports.greaterThanOrEq = function (O) { return function (x, y) {
    return O.compare(x, y) !== -1;
}; };
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 * @function
 * @since 1.0.0
 */
exports.min = function (O) { return function (x, y) {
    return O.compare(x, y) === 1 ? y : x;
}; };
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 * @function
 * @since 1.0.0
 */
exports.max = function (O) { return function (x, y) {
    return O.compare(x, y) === -1 ? y : x;
}; };
/**
 * Clamp a value between a minimum and a maximum
 * @function
 * @since 1.0.0
 */
exports.clamp = function (O) {
    var minO = exports.min(O);
    var maxO = exports.max(O);
    return function (low, hi) { return function (x) { return maxO(minO(x, hi), low); }; };
};
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 * @function
 * @since 1.0.0
 */
exports.between = function (O) {
    var lessThanO = exports.lessThan(O);
    var greaterThanO = exports.greaterThan(O);
    return function (low, hi) { return function (x) { return (lessThanO(x, low) || greaterThanO(x, hi) ? false : true); }; };
};
/**
 * @function
 * @since 1.0.0
 */
exports.fromCompare = function (compare) {
    return {
        equals: function (x, y) { return compare(x, y) === 0; },
        compare: compare
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.contramap = function (f, fa) {
    return exports.fromCompare(function_1.on(fa.compare)(f));
};
/**
 * @function
 * @since 1.0.0
 */
exports.getSemigroup = function () {
    return {
        concat: function (x, y) { return exports.fromCompare(function (a, b) { return Ordering_1.semigroupOrdering.concat(x.compare(a, b), y.compare(a, b)); }); }
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getProductOrd = function (OA, OB) {
    var S = Setoid_1.getProductSetoid(OA, OB);
    return __assign({}, S, { compare: function (_a, _b) {
            var xa = _a[0], xb = _a[1];
            var ya = _b[0], yb = _b[1];
            var r = OA.compare(xa, ya);
            return r === 0 ? OB.compare(xb, yb) : r;
        } });
};
/**
 * @function
 * @since 1.3.0
 */
exports.getDualOrd = function (O) {
    return exports.fromCompare(function (x, y) { return O.compare(y, x); });
};
/**
 * @instance
 * @since 1.4.0
 */
exports.ordDate = exports.contramap(function (date) { return date.valueOf(); }, exports.ordNumber);


/***/ }),

/***/ "../node_modules/fp-ts/lib/Ordering.js":
/*!*********************************************!*\
  !*** ../node_modules/fp-ts/lib/Ordering.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @function
 * @since 1.0.0
 */
exports.sign = function (n) {
    return n <= -1 ? -1 : n >= 1 ? 1 : 0;
};
/**
 * @instance
 * @since 1.0.0
 */
exports.setoidOrdering = {
    equals: function (x, y) { return x === y; }
};
/**
 * @instance
 * @since 1.0.0
 */
exports.semigroupOrdering = {
    concat: function (x, y) { return (x !== 0 ? x : y); }
};
/**
 * @function
 * @since 1.0.0
 */
exports.invert = function (O) {
    switch (O) {
        case -1:
            return 1;
        case 1:
            return -1;
        default:
            return 0;
    }
};


/***/ }),

/***/ "../node_modules/fp-ts/lib/Semigroup.js":
/*!**********************************************!*\
  !*** ../node_modules/fp-ts/lib/Semigroup.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ord_1 = __webpack_require__(/*! ./Ord */ "../node_modules/fp-ts/lib/Ord.js");
var function_1 = __webpack_require__(/*! ./function */ "../node_modules/fp-ts/lib/function.js");
/**
 * @function
 * @since 1.0.0
 */
exports.fold = function (S) { return function (a) { return function (as) {
    return as.reduce(S.concat, a);
}; }; };
/**
 * @function
 * @since 1.0.0
 */
exports.getFirstSemigroup = function () {
    return { concat: function_1.identity };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getLastSemigroup = function () {
    return { concat: function (_, y) { return y; } };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getProductSemigroup = function (SA, SB) {
    return {
        concat: function (_a, _b) {
            var xa = _a[0], xb = _a[1];
            var ya = _b[0], yb = _b[1];
            return [SA.concat(xa, ya), SB.concat(xb, yb)];
        }
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getDualSemigroup = function (S) {
    return {
        concat: function (x, y) { return S.concat(y, x); }
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getFunctionSemigroup = function (S) { return function () {
    return {
        concat: function (f, g) { return function (a) { return S.concat(f(a), g(a)); }; }
    };
}; };
/**
 * @function
 * @since 1.0.0
 */
exports.getRecordSemigroup = function (semigroups) {
    return {
        concat: function (x, y) {
            var r = {};
            var keys = Object.keys(semigroups);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                r[key] = semigroups[key].concat(x[key], y[key]);
            }
            return r;
        }
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getMeetSemigroup = function (O) {
    return {
        concat: Ord_1.min(O)
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getJoinSemigroup = function (O) {
    return {
        concat: Ord_1.max(O)
    };
};
/**
 * Boolean semigroup under conjunction
 * @instance
 * @since 1.0.0
 */
exports.semigroupAll = {
    concat: function (x, y) { return x && y; }
};
/**
 * Boolean semigroup under disjunction
 * @instance
 * @since 1.0.0
 */
exports.semigroupAny = {
    concat: function (x, y) { return x || y; }
};
/**
 * Semigroup under array concatenation
 * @function
 * @since 1.0.0
 */
exports.getArraySemigroup = function () {
    return {
        concat: function (x, y) { return function_1.concat(x, y); }
    };
};
/**
 * Gets {@link Semigroup} instance for dictionaries given {@link Semigroup} instance for their values
 *
 * @example
 * import { getDictionarySemigroup, semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getDictionarySemigroup(semigroupSum)
 * assert.deepEqual(S.concat({ foo: 123 }, { foo: 456 }), { foo: 579 })
 *
 * @function
 * @since 1.4.0
 */
exports.getDictionarySemigroup = function (S) {
    return {
        concat: function (x, y) {
            var r = __assign({}, x);
            var keys = Object.keys(y);
            var len = keys.length;
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                r[k] = x.hasOwnProperty(k) ? S.concat(x[k], y[k]) : y[k];
            }
            return r;
        }
    };
};
var semigroupAnyDictionary = exports.getDictionarySemigroup(exports.getLastSemigroup());
/**
 * Gets {@link Semigroup} instance for objects of given type preserving their type
 *
 * @example
 * import { getObjectSemigroup } from 'fp-ts/lib/Semigroup'
 *
 * const S = getObjectSemigroup<{ foo: number }>()
 * assert.deepEqual(S.concat({ foo: 123 }, { foo: 456 }), { foo: 456 })
 *
 * @function
 * @since 1.4.0
 */
exports.getObjectSemigroup = function () {
    return semigroupAnyDictionary;
};
/**
 * Number Semigroup under addition
 * @instance
 * @since 1.0.0
 */
exports.semigroupSum = {
    concat: function (x, y) { return x + y; }
};
/**
 * Number Semigroup under multiplication
 * @instance
 * @since 1.0.0
 */
exports.semigroupProduct = {
    concat: function (x, y) { return x * y; }
};
/**
 * @instance
 * @since 1.0.0
 */
exports.semigroupString = {
    concat: function (x, y) { return x + y; }
};
/**
 * @instance
 * @since 1.0.0
 */
exports.semigroupVoid = {
    concat: function () { return undefined; }
};


/***/ }),

/***/ "../node_modules/fp-ts/lib/Setoid.js":
/*!*******************************************!*\
  !*** ../node_modules/fp-ts/lib/Setoid.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __webpack_require__(/*! ./function */ "../node_modules/fp-ts/lib/function.js");
/**
 * @function
 * @since 1.0.0
 */
exports.strictEqual = function (a, b) {
    return a === b;
};
var setoidStrict = { equals: exports.strictEqual };
/**
 * @instance
 * @since 1.0.0
 */
exports.setoidString = setoidStrict;
/**
 * @instance
 * @since 1.0.0
 */
exports.setoidNumber = setoidStrict;
/**
 * @instance
 * @since 1.0.0
 */
exports.setoidBoolean = setoidStrict;
/**
 * @function
 * @since 1.0.0
 */
exports.getArraySetoid = function (S) {
    return {
        equals: function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return S.equals(x, ys[i]); }); }
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getRecordSetoid = function (setoids) {
    return {
        equals: function (x, y) {
            for (var k in setoids) {
                if (!setoids[k].equals(x[k], y[k])) {
                    return false;
                }
            }
            return true;
        }
    };
};
/**
 * @function
 * @since 1.0.0
 */
exports.getProductSetoid = function (SA, SB) {
    return {
        equals: function (_a, _b) {
            var xa = _a[0], xb = _a[1];
            var ya = _b[0], yb = _b[1];
            return SA.equals(xa, ya) && SB.equals(xb, yb);
        }
    };
};
/**
 * Returns the `Setoid` corresponding to the partitions of `B` induced by `f`
 * @function
 * @since 1.2.0
 */
exports.contramap = function (f, fa) {
    return {
        equals: function_1.on(fa.equals)(f)
    };
};
/**
 * @instance
 * @since 1.4.0
 */
exports.setoidDate = exports.contramap(function (date) { return date.valueOf(); }, exports.setoidNumber);


/***/ }),

/***/ "../node_modules/fp-ts/lib/function.js":
/*!*********************************************!*\
  !*** ../node_modules/fp-ts/lib/function.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @function
 * @since 1.0.0
 */
exports.identity = function (a) {
    return a;
};
/**
 * @constant
 * @since 1.0.0
 */
exports.unsafeCoerce = exports.identity;
/**
 * @function
 * @since 1.0.0
 */
exports.not = function (predicate) {
    return function (a) { return !predicate(a); };
};
function or(p1, p2) {
    return function (a) { return p1(a) || p2(a); };
}
exports.or = or;
/**
 * @function
 * @since 1.0.0
 */
exports.and = function (p1, p2) {
    return function (a) { return p1(a) && p2(a); };
};
/**
 * @function
 * @since 1.0.0
 */
exports.constant = function (a) {
    return function () { return a; };
};
/**
 * A thunk that returns always `true`
 * @function
 * @since 1.0.0
 */
exports.constTrue = function () {
    return true;
};
/**
 * A thunk that returns always `false`
 * @function
 * @since 1.0.0
 */
exports.constFalse = function () {
    return false;
};
/**
 * A thunk that returns always `null`
 * @function
 * @since 1.0.0
 */
exports.constNull = function () {
    return null;
};
/**
 * A thunk that returns always `undefined`
 * @function
 * @since 1.0.0
 */
exports.constUndefined = function () {
    return;
};
/**
 * Flips the order of the arguments to a function of two arguments.
 * @function
 * @since 1.0.0
 */
exports.flip = function (f) {
    return function (b) { return function (a) { return f(a)(b); }; };
};
/**
 * The `on` function is used to change the domain of a binary operator.
 * @function
 * @since 1.0.0
 */
exports.on = function (op) { return function (f) {
    return function (x, y) { return op(f(x), f(y)); };
}; };
function compose() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    var len = fns.length - 1;
    return function (x) {
        var y = x;
        for (var i = len; i > -1; i--) {
            y = fns[i].call(this, y);
        }
        return y;
    };
}
exports.compose = compose;
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    var len = fns.length - 1;
    return function (x) {
        var y = x;
        for (var i = 0; i <= len; i++) {
            y = fns[i].call(this, y);
        }
        return y;
    };
}
exports.pipe = pipe;
/**
 * @function
 * @since 1.0.0
 */
exports.concat = function (x, y) {
    var lenx = x.length;
    var leny = y.length;
    var r = Array(lenx + leny);
    for (var i = 0; i < lenx; i++) {
        r[i] = x[i];
    }
    for (var i = 0; i < leny; i++) {
        r[i + lenx] = y[i];
    }
    return r;
};
function curried(f, n, acc) {
    return function (x) {
        var combined = exports.concat(acc, [x]);
        return n === 0 ? f.apply(this, combined) : curried(f, n - 1, combined);
    };
}
exports.curried = curried;
function curry(f) {
    return curried(f, f.length - 1, []);
}
exports.curry = curry;
/* tslint:disable-next-line */
var getFunctionName = function (f) { return f.displayName || f.name || "<function" + f.length + ">"; };
/**
 * @function
 * @since 1.0.0
 */
exports.toString = function (x) {
    if (typeof x === 'string') {
        return JSON.stringify(x);
    }
    if (x instanceof Date) {
        return "new Date('" + x.toISOString() + "')";
    }
    if (Array.isArray(x)) {
        return "[" + x.map(exports.toString).join(', ') + "]";
    }
    if (typeof x === 'function') {
        return getFunctionName(x);
    }
    if (x == null) {
        return String(x);
    }
    if (typeof x.toString === 'function' && x.toString !== Object.prototype.toString) {
        return x.toString();
    }
    try {
        return JSON.stringify(x, null, 2);
    }
    catch (e) {
        return String(x);
    }
};
/**
 * @function
 * @since 1.0.0
 */
exports.tuple = function (a, b) {
    return [a, b];
};
/**
 * @function
 * @since 1.0.0
 */
exports.tupleCurried = function (a) { return function (b) {
    return [a, b];
}; };
/**
 * Applies a function to an argument ($)
 * @function
 * @since 1.0.0
 */
exports.apply = function (f) { return function (a) {
    return f(a);
}; };
/**
 * Applies an argument to a function (#)
 * @function
 * @since 1.0.0
 */
exports.applyFlipped = function (a) { return function (f) {
    return f(a);
}; };
/** For use with phantom fields */
exports.phantom = undefined;
/**
 * A thunk that returns always the `identity` function.
 * For use with `applySecond` methods.
 * @function
 * @since 1.5.0
 */
exports.constIdentity = function () {
    return exports.identity;
};
/**
 * @function
 * @since 1.9.0
 */
exports.increment = function (n) {
    return n + 1;
};
/**
 * @function
 * @since 1.9.0
 */
exports.decrement = function (n) {
    return n - 1;
};


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Array_1 = __webpack_require__(/*! fp-ts/lib/Array */ "../node_modules/fp-ts/lib/Array.js");
var Option_1 = __webpack_require__(/*! fp-ts/lib/Option */ "../node_modules/fp-ts/lib/Option.js");
var option1 = Option_1.some(13);
var option2 = Option_1.some(2);
var array = [option1, Option_1.none, Option_1.none, option2];
var filteredArray = Array_1.head(Array_1.catOptions(array).map(function (item) { return item + 10; }));
console.log(filteredArray);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9mcC10cy9saWIvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9mcC10cy9saWIvTW9ub2lkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZnAtdHMvbGliL09wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZwLXRzL2xpYi9PcmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9mcC10cy9saWIvT3JkZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9mcC10cy9saWIvU2VtaWdyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZnAtdHMvbGliL1NldG9pZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ZwLXRzL2xpYi9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5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QTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVB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Q0FBQztBQUV4QyxJQUFNLEtBQUssR0FBMEIsQ0FBQyxPQUFPLEVBQUUsYUFBSSxFQUFFLGFBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwRSxJQUFNLGFBQWEsR0FBRyxZQUFJLENBQUMsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLFdBQUksR0FBRyxFQUFFLEVBQVQsQ0FBUyxDQUFDLENBQUMsQ0FBQztBQUVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uXCIpO1xudmFyIE9wdGlvbl8xID0gcmVxdWlyZShcIi4vT3B0aW9uXCIpO1xudmFyIE9yZF8xID0gcmVxdWlyZShcIi4vT3JkXCIpO1xudmFyIFNldG9pZF8xID0gcmVxdWlyZShcIi4vU2V0b2lkXCIpO1xuZXhwb3J0cy5VUkkgPSAnQXJyYXknO1xuLyoqXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldE1vbm9pZCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBjb25zdCBNID0gZ2V0TW9ub2lkPG51bWJlcj4oKVxuICogYXNzZXJ0LmRlZXBFcXVhbChNLmNvbmNhdChbMSwgMl0sIFszLCA0XSksIFsxLCAyLCAzLCA0XSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldE1vbm9pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uXzEuY29uY2F0LFxuICAgICAgICBlbXB0eTogZXhwb3J0cy5lbXB0eVxuICAgIH07XG59O1xuLyoqXG4gKiBEZXJpdmVzIGEgU2V0b2lkIG92ZXIgdGhlIEFycmF5IG9mIGEgZ2l2ZW4gZWxlbWVudCB0eXBlIGZyb20gdGhlIFNldG9pZCBvZiB0aGF0IHR5cGUuIFRoZSBkZXJpdmVkIHNldG9pZCBkZWZpbmVzIHR3b1xuICogYXJyYXlzIGFzIGVxdWFsIGlmIGFsbCBlbGVtZW50cyBvZiBib3RoIGFycmF5cyBhcmUgY29tcGFyZWQgZXF1YWwgcGFpcndpc2Ugd2l0aCB0aGUgZ2l2ZW4gc2V0b2lkIGBTYC4gSW4gY2FzZSBvZlxuICogYXJyYXlzIG9mIGRpZmZlcmVudCBsZW5ndGhzLCB0aGUgcmVzdWx0IGlzIG5vbiBlcXVhbGl0eS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG9yZFN0cmluZyB9IGZyb20gJ2ZwLXRzL2xpYi9PcmQnXG4gKlxuICogY29uc3QgTyA9IGdldEFycmF5U2V0b2lkKG9yZFN0cmluZylcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmVxdWFscyhbJ2EnLCAnYiddLCBbJ2EnLCAnYiddKSwgdHJ1ZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmVxdWFscyhbJ2EnXSwgW10pLCBmYWxzZSlcbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldFNldG9pZCA9IFNldG9pZF8xLmdldEFycmF5U2V0b2lkO1xuLyoqXG4gKiBEZXJpdmVzIGFuIGBPcmRgIG92ZXIgdGhlIEFycmF5IG9mIGEgZ2l2ZW4gZWxlbWVudCB0eXBlIGZyb20gdGhlIGBPcmRgIG9mIHRoYXQgdHlwZS4gVGhlIG9yZGVyaW5nIGJldHdlZW4gdHdvIHN1Y2hcbiAqIGFycmF5cyBpcyBlcXVhbCB0bzogdGhlIGZpcnN0IG5vbiBlcXVhbCBjb21wYXJpc29uIG9mIGVhY2ggYXJyYXlzIGVsZW1lbnRzIHRha2VuIHBhaXJ3aXNlIGluIGluY3JlYXNpbmcgb3JkZXIsIGluXG4gKiBjYXNlIG9mIGVxdWFsaXR5IG92ZXIgYWxsIHRoZSBwYWlyd2lzZSBlbGVtZW50czsgdGhlIGxvbmdlc3QgYXJyYXkgaXMgY29uc2lkZXJlZCB0aGUgZ3JlYXRlc3QsIGlmIGJvdGggYXJyYXlzIGhhdmVcbiAqIHRoZSBzYW1lIGxlbmd0aCwgdGhlIHJlc3VsdCBpcyBlcXVhbGl0eS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldE9yZCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IG9yZFN0cmluZyB9IGZyb20gJ2ZwLXRzL2xpYi9PcmQnXG4gKlxuICogY29uc3QgTyA9IGdldE9yZChvcmRTdHJpbmcpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYiddLCBbJ2EnXSksIDEpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYSddLCBbJ2EnXSksIDApXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYSddLCBbJ2InXSksIC0xKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMi4wXG4gKi9cbmV4cG9ydHMuZ2V0T3JkID0gZnVuY3Rpb24gKE8pIHsgcmV0dXJuIChfX2Fzc2lnbih7fSwgZXhwb3J0cy5nZXRTZXRvaWQoTyksIHsgY29tcGFyZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGFMZW4gPSBhLmxlbmd0aDtcbiAgICAgICAgdmFyIGJMZW4gPSBiLmxlbmd0aDtcbiAgICAgICAgdmFyIGxlbiA9IE1hdGgubWluKGFMZW4sIGJMZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3JkZXIgPSBPLmNvbXBhcmUoYVtpXSwgYltpXSk7XG4gICAgICAgICAgICBpZiAob3JkZXIgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9yZF8xLm9yZE51bWJlci5jb21wYXJlKGFMZW4sIGJMZW4pO1xuICAgIH0gfSkpOyB9O1xudmFyIG1hcCA9IGZ1bmN0aW9uIChmYSwgZikge1xuICAgIHZhciBsID0gZmEubGVuZ3RoO1xuICAgIHZhciByID0gbmV3IEFycmF5KGwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJbaV0gPSBmKGZhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59O1xudmFyIG9mID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gW2FdO1xufTtcbnZhciBhcCA9IGZ1bmN0aW9uIChmYWIsIGZhKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZmxhdHRlbihtYXAoZmFiLCBmdW5jdGlvbiAoZikgeyByZXR1cm4gbWFwKGZhLCBmKTsgfSkpO1xufTtcbnZhciBjaGFpbiA9IGZ1bmN0aW9uIChmYSwgZikge1xuICAgIHZhciByZXNMZW4gPSAwO1xuICAgIHZhciBsID0gZmEubGVuZ3RoO1xuICAgIHZhciB0ZW1wID0gbmV3IEFycmF5KGwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBlID0gZmFbaV07XG4gICAgICAgIHZhciBhcnIgPSBmKGUpO1xuICAgICAgICByZXNMZW4gKz0gYXJyLmxlbmd0aDtcbiAgICAgICAgdGVtcFtpXSA9IGFycjtcbiAgICB9XG4gICAgdmFyIHIgPSBBcnJheShyZXNMZW4pO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGFyciA9IHRlbXBbaV07XG4gICAgICAgIHZhciBsXzEgPSBhcnIubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxfMTsgaisrKSB7XG4gICAgICAgICAgICByW2ogKyBzdGFydF0gPSBhcnJbal07XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnQgKz0gbF8xO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn07XG52YXIgcmVkdWNlID0gZnVuY3Rpb24gKGZhLCBiLCBmKSB7XG4gICAgdmFyIGwgPSBmYS5sZW5ndGg7XG4gICAgdmFyIHIgPSBiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHIgPSBmKHIsIGZhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59O1xudmFyIGZvbGRNYXAgPSBmdW5jdGlvbiAoTSkgeyByZXR1cm4gZnVuY3Rpb24gKGZhLCBmKSB7XG4gICAgcmV0dXJuIGZhLnJlZHVjZShmdW5jdGlvbiAoYiwgYSkgeyByZXR1cm4gTS5jb25jYXQoYiwgZihhKSk7IH0sIE0uZW1wdHkpO1xufTsgfTtcbnZhciByZWR1Y2VSaWdodCA9IGZ1bmN0aW9uIChmYSwgYiwgZikge1xuICAgIHJldHVybiBmYS5yZWR1Y2VSaWdodChmdW5jdGlvbiAoYiwgYSkgeyByZXR1cm4gZihhLCBiKTsgfSwgYik7XG59O1xuZnVuY3Rpb24gdHJhdmVyc2UoRikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGEsIGYpIHtcbiAgICAgICAgcmV0dXJuIHJlZHVjZSh0YSwgRi5vZih6ZXJvKCkpLCBmdW5jdGlvbiAoZmJzLCBhKSB7IHJldHVybiBGLmFwKEYubWFwKGZicywgZnVuY3Rpb24gKGJzKSB7IHJldHVybiBmdW5jdGlvbiAoYikgeyByZXR1cm4gZXhwb3J0cy5zbm9jKGJzLCBiKTsgfTsgfSksIGYoYSkpOyB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy50cmF2ZXJzZSA9IHRyYXZlcnNlO1xudmFyIHNlcXVlbmNlID0gZnVuY3Rpb24gKEYpIHsgcmV0dXJuIGZ1bmN0aW9uICh0YSkge1xuICAgIHJldHVybiByZWR1Y2UodGEsIEYub2YoemVybygpKSwgZnVuY3Rpb24gKGZhcywgZmEpIHsgcmV0dXJuIEYuYXAoRi5tYXAoZmFzLCBmdW5jdGlvbiAoYXMpIHsgcmV0dXJuIGZ1bmN0aW9uIChhKSB7IHJldHVybiBleHBvcnRzLnNub2MoYXMsIGEpOyB9OyB9KSwgZmEpOyB9KTtcbn07IH07XG4vKipcbiAqIEFuIGVtcHR5IGFycmF5XG4gKlxuICogQGNvbnN0YW50XG4gKiBAc2luY2UgMS45LjBcbiAqL1xuZXhwb3J0cy5lbXB0eSA9IFtdO1xudmFyIHplcm8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBleHBvcnRzLmVtcHR5OyB9O1xudmFyIGFsdCA9IGZ1bmN0aW9uXzEuY29uY2F0O1xudmFyIHVuZm9sZHIgPSBmdW5jdGlvbiAoYiwgZikge1xuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgYmIgPSBiO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBtdCA9IGYoYmIpO1xuICAgICAgICBpZiAobXQuaXNTb21lKCkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IG10LnZhbHVlLCBhID0gX2FbMF0sIGJfMSA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0LnB1c2goYSk7XG4gICAgICAgICAgICBiYiA9IGJfMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGxlbmd0aCBgbmAgd2l0aCBlbGVtZW50IGBpYCBpbml0aWFsaXplZCB3aXRoIGBmKGkpYFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYWtlQnkgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKlxuICogY29uc3QgZG91YmxlID0gKG46IG51bWJlcik6IG51bWJlciA9PiBuICogMlxuICogYXNzZXJ0LmRlZXBFcXVhbChtYWtlQnkoNSwgZG91YmxlKSwgWzAsIDIsIDQsIDYsIDhdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMTAuMFxuICovXG5leHBvcnRzLm1ha2VCeSA9IGZ1bmN0aW9uIChuLCBmKSB7XG4gICAgdmFyIHIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICByLnB1c2goZihpKSk7XG4gICAgfVxuICAgIHJldHVybiByO1xufTtcbi8qKlxuICogQ3JlYXRlIGFuIGFycmF5IGNvbnRhaW5pbmcgYSByYW5nZSBvZiBpbnRlZ2VycywgaW5jbHVkaW5nIGJvdGggZW5kcG9pbnRzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJhbmdlIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwocmFuZ2UoMSwgNSksIFsxLCAyLCAzLCA0LCA1XSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjEwLjBcbiAqL1xuZXhwb3J0cy5yYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMubWFrZUJ5KGVuZCAtIHN0YXJ0ICsgMSwgZnVuY3Rpb24gKGkpIHsgcmV0dXJuIHN0YXJ0ICsgaTsgfSk7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW4gYXJyYXkgY29udGFpbmluZyBhIHZhbHVlIHJlcGVhdGVkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJlcGxpY2F0ZSB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKHJlcGxpY2F0ZSgzLCAnYScpLCBbJ2EnLCAnYScsICdhJ10pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4xMC4wXG4gKi9cbmV4cG9ydHMucmVwbGljYXRlID0gZnVuY3Rpb24gKG4sIGEpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5tYWtlQnkobiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gYTsgfSk7XG59O1xudmFyIGV4dGVuZCA9IGZ1bmN0aW9uIChmYSwgZikge1xuICAgIHJldHVybiBmYS5tYXAoZnVuY3Rpb24gKF8sIGksIGFzKSB7IHJldHVybiBmKGFzLnNsaWNlKGkpKTsgfSk7XG59O1xuLyoqXG4gKiBSZW1vdmVzIG9uZSBsZXZlbCBvZiBuZXN0aW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbChmbGF0dGVuKFtbMV0sIFsyXSwgWzNdXSksIFsxLCAyLCAzXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmZsYXR0ZW4gPSBmdW5jdGlvbiAoZmZhKSB7XG4gICAgdmFyIHJMZW4gPSAwO1xuICAgIHZhciBsZW4gPSBmZmEubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgckxlbiArPSBmZmFbaV0ubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgciA9IEFycmF5KHJMZW4pO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYXJyID0gZmZhW2ldO1xuICAgICAgICB2YXIgbCA9IGFyci5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICByW2ogKyBzdGFydF0gPSBhcnJbal07XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnQgKz0gbDtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59O1xuLyoqXG4gKiBCcmVhayBhbiBhcnJheSBpbnRvIGl0cyBmaXJzdCBlbGVtZW50IGFuZCByZW1haW5pbmcgZWxlbWVudHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZm9sZCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBjb25zdCBsZW4gPSA8QT4oYXM6IEFycmF5PEE+KTogbnVtYmVyID0+IGZvbGQoYXMsIDAsIChfLCB0YWlsKSA9PiAxICsgbGVuKHRhaWwpKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGxlbihbMSwgMiwgM10pLCAzKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZm9sZCA9IGZ1bmN0aW9uIChhcywgYiwgY29ucykge1xuICAgIHJldHVybiBleHBvcnRzLmlzRW1wdHkoYXMpID8gYiA6IGNvbnMoYXNbMF0sIGFzLnNsaWNlKDEpKTtcbn07XG4vKipcbiAqIExhenkgdmVyc2lvbiBvZiB7QGxpbmsgZm9sZH1cbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZm9sZEwgPSBmdW5jdGlvbiAoYXMsIG5pbCwgY29ucykge1xuICAgIHJldHVybiBleHBvcnRzLmlzRW1wdHkoYXMpID8gbmlsKCkgOiBjb25zKGFzWzBdLCBhcy5zbGljZSgxKSk7XG59O1xuLyoqXG4gKiBCcmVhayBhbiBhcnJheSBpbnRvIGl0cyBpbml0aWFsIGVsZW1lbnRzIGFuZCB0aGUgbGFzdCBlbGVtZW50XG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjcuMFxuICogQHBhcmFtIGFzXG4gKiBAcGFyYW0gYlxuICogQHBhcmFtIGNvbnNcbiAqL1xuZXhwb3J0cy5mb2xkciA9IGZ1bmN0aW9uIChhcywgYiwgY29ucykge1xuICAgIHJldHVybiBleHBvcnRzLmlzRW1wdHkoYXMpID8gYiA6IGNvbnMoYXMuc2xpY2UoMCwgYXMubGVuZ3RoIC0gMSksIGFzW2FzLmxlbmd0aCAtIDFdKTtcbn07XG4vKipcbiAqIExhenkgdmVyc2lvbiBvZiB7QGxpbmsgZm9sZHJ9XG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjcuMFxuICogQHBhcmFtIGFzXG4gKiBAcGFyYW0gbmlsXG4gKiBAcGFyYW0gY29uc1xuICovXG5leHBvcnRzLmZvbGRyTCA9IGZ1bmN0aW9uIChhcywgbmlsLCBjb25zKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNFbXB0eShhcykgPyBuaWwoKSA6IGNvbnMoYXMuc2xpY2UoMCwgYXMubGVuZ3RoIC0gMSksIGFzW2FzLmxlbmd0aCAtIDFdKTtcbn07XG4vKipcbiAqIFNhbWUgYXMgYHJlZHVjZWAgYnV0IGl0IGNhcnJpZXMgb3ZlciB0aGUgaW50ZXJtZWRpYXRlIHN0ZXBzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHNjYW5MZWZ0IH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIHNjYW5MZWZ0KFsxLCAyLCAzXSwgMTAsIChiLCBhKSA9PiBiIC0gYSkgLy8gWyAxMCwgOSwgNywgNCBdXG4gKiBgYGBcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjEuMFxuICovXG5leHBvcnRzLnNjYW5MZWZ0ID0gZnVuY3Rpb24gKGFzLCBiLCBmKSB7XG4gICAgdmFyIGwgPSBhcy5sZW5ndGg7XG4gICAgdmFyIHIgPSBuZXcgQXJyYXkobCArIDEpO1xuICAgIHJbMF0gPSBiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJbaSArIDFdID0gZihyW2ldLCBhc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByO1xufTtcbi8qKlxuICogRm9sZCBhbiBhcnJheSBmcm9tIHRoZSByaWdodCwga2VlcGluZyBhbGwgaW50ZXJtZWRpYXRlIHJlc3VsdHMgaW5zdGVhZCBvZiBvbmx5IHRoZSBmaW5hbCByZXN1bHRcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2NhblJpZ2h0IH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoc2NhblJpZ2h0KFsxLCAyLCAzXSwgMTAsIChhLCBiKSA9PiBiIC0gYSksIFsgNCwgNSwgNywgMTAgXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjEuMFxuICovXG5leHBvcnRzLnNjYW5SaWdodCA9IGZ1bmN0aW9uIChhcywgYiwgZikge1xuICAgIHZhciBsID0gYXMubGVuZ3RoO1xuICAgIHZhciByID0gbmV3IEFycmF5KGwgKyAxKTtcbiAgICByW2xdID0gYjtcbiAgICBmb3IgKHZhciBpID0gbCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHJbaV0gPSBmKGFzW2ldLCByW2kgKyAxXSk7XG4gICAgfVxuICAgIHJldHVybiByO1xufTtcbi8qKlxuICogVGVzdCB3aGV0aGVyIGFuIGFycmF5IGlzIGVtcHR5XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGlzRW1wdHkoW10pLCB0cnVlKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuaXNFbXB0eSA9IGZ1bmN0aW9uIChhcykge1xuICAgIHJldHVybiBhcy5sZW5ndGggPT09IDA7XG59O1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYW4gYXJyYXkgY29udGFpbnMgYSBwYXJ0aWN1bGFyIGluZGV4XG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmlzT3V0T2ZCb3VuZCA9IGZ1bmN0aW9uIChpLCBhcykge1xuICAgIHJldHVybiBpIDwgMCB8fCBpID49IGFzLmxlbmd0aDtcbn07XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYSBzYWZlIHdheSB0byByZWFkIGEgdmFsdWUgYXQgYSBwYXJ0aWN1bGFyIGluZGV4IGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW5kZXggfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGluZGV4KDEsIFsxLCAyLCAzXSksIHNvbWUoMikpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGluZGV4KDMsIFsxLCAyLCAzXSksIG5vbmUpXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5pbmRleCA9IGZ1bmN0aW9uIChpLCBhcykge1xuICAgIHJldHVybiBleHBvcnRzLmlzT3V0T2ZCb3VuZChpLCBhcykgPyBPcHRpb25fMS5ub25lIDogT3B0aW9uXzEuc29tZShhc1tpXSk7XG59O1xuLyoqXG4gKiBBdHRhY2hlcyBhbiBlbGVtZW50IHRvIHRoZSBmcm9udCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29ucyB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGNvbnMoMCwgWzEsIDIsIDNdKSwgWzAsIDEsIDIsIDNdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuY29ucyA9IGZ1bmN0aW9uIChhLCBhcykge1xuICAgIHZhciBsZW4gPSBhcy5sZW5ndGg7XG4gICAgdmFyIHIgPSBBcnJheShsZW4gKyAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHJbaSArIDFdID0gYXNbaV07XG4gICAgfVxuICAgIHJbMF0gPSBhO1xuICAgIHJldHVybiByO1xufTtcbi8qKlxuICogQXBwZW5kIGFuIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc25vYyB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKHNub2MoWzEsIDIsIDNdLCA0KSwgWzEsIDIsIDMsIDRdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuc25vYyA9IGZ1bmN0aW9uIChhcywgYSkge1xuICAgIHZhciBsZW4gPSBhcy5sZW5ndGg7XG4gICAgdmFyIHIgPSBBcnJheShsZW4gKyAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHJbaV0gPSBhc1tpXTtcbiAgICB9XG4gICAgcltsZW5dID0gYTtcbiAgICByZXR1cm4gcjtcbn07XG4vKipcbiAqIEdldCB0aGUgZmlyc3QgZWxlbWVudCBpbiBhbiBhcnJheSwgb3IgYE5vbmVgIGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBoZWFkIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbChoZWFkKFsxLCAyLCAzXSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGhlYWQoW10pLCBub25lKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuaGVhZCA9IGZ1bmN0aW9uIChhcykge1xuICAgIHJldHVybiBleHBvcnRzLmlzRW1wdHkoYXMpID8gT3B0aW9uXzEubm9uZSA6IE9wdGlvbl8xLnNvbWUoYXNbMF0pO1xufTtcbi8qKlxuICogR2V0IHRoZSBsYXN0IGVsZW1lbnQgaW4gYW4gYXJyYXksIG9yIGBOb25lYCBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbGFzdCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwobGFzdChbMSwgMiwgM10pLCBzb21lKDMpKVxuICogYXNzZXJ0LmRlZXBFcXVhbChsYXN0KFtdKSwgbm9uZSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmxhc3QgPSBmdW5jdGlvbiAoYXMpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5pbmRleChhcy5sZW5ndGggLSAxLCBhcyk7XG59O1xuLyoqXG4gKiBHZXQgYWxsIGJ1dCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIGBOb25lYCBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdGFpbCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwodGFpbChbMSwgMiwgM10pLCBzb21lKFsyLCAzXSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKHRhaWwoW10pLCBub25lKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMudGFpbCA9IGZ1bmN0aW9uIChhcykge1xuICAgIHJldHVybiBleHBvcnRzLmlzRW1wdHkoYXMpID8gT3B0aW9uXzEubm9uZSA6IE9wdGlvbl8xLnNvbWUoYXMuc2xpY2UoMSkpO1xufTtcbi8qKlxuICogR2V0IGFsbCBidXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIGBOb25lYCBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW5pdCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoaW5pdChbMSwgMiwgM10pLCBzb21lKFsxLCAyXSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGluaXQoW10pLCBub25lKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIChhcykge1xuICAgIHZhciBsZW4gPSBhcy5sZW5ndGg7XG4gICAgcmV0dXJuIGxlbiA9PT0gMCA/IE9wdGlvbl8xLm5vbmUgOiBPcHRpb25fMS5zb21lKGFzLnNsaWNlKDAsIGxlbiAtIDEpKTtcbn07XG4vKipcbiAqIEtlZXAgb25seSBhIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXkuXG4gKiBgbmAgbXVzdCBiZSBhIG5hdHVyYWwgbnVtYmVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHRha2UgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbCh0YWtlKDIsIFsxLCAyLCAzXSksIFsxLCAyXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnRha2UgPSBmdW5jdGlvbiAobiwgYXMpIHtcbiAgICByZXR1cm4gYXMuc2xpY2UoMCwgbik7XG59O1xuLyoqXG4gKiBLZWVwIG9ubHkgYSBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgZW5kIG9mIGFuIGFycmF5LCBjcmVhdGluZyBhIG5ldyBhcnJheS5cbiAqIGBuYCBtdXN0IGJlIGEgbmF0dXJhbCBudW1iZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgdGFrZUVuZCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKHRha2VFbmQoMiwgWzEsIDIsIDMsIDQsIDVdKSwgWzQsIDVdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMTAuMFxuICovXG5leHBvcnRzLnRha2VFbmQgPSBmdW5jdGlvbiAobiwgYXMpIHtcbiAgICByZXR1cm4gbiA9PT0gMCA/IGV4cG9ydHMuZW1wdHkgOiBhcy5zbGljZSgtbik7XG59O1xuZnVuY3Rpb24gdGFrZVdoaWxlKGFzLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgaSA9IHNwYW5JbmRleFVuY3VycnkoYXMsIHByZWRpY2F0ZSk7XG4gICAgdmFyIGluaXQgPSBBcnJheShpKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBpbml0W2pdID0gYXNbal07XG4gICAgfVxuICAgIHJldHVybiBpbml0O1xufVxuZXhwb3J0cy50YWtlV2hpbGUgPSB0YWtlV2hpbGU7XG52YXIgc3BhbkluZGV4VW5jdXJyeSA9IGZ1bmN0aW9uIChhcywgcHJlZGljYXRlKSB7XG4gICAgdmFyIGwgPSBhcy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICghcHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG59O1xuZnVuY3Rpb24gc3BhbihhcywgcHJlZGljYXRlKSB7XG4gICAgdmFyIGkgPSBzcGFuSW5kZXhVbmN1cnJ5KGFzLCBwcmVkaWNhdGUpO1xuICAgIHZhciBpbml0ID0gQXJyYXkoaSk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgaW5pdFtqXSA9IGFzW2pdO1xuICAgIH1cbiAgICB2YXIgbCA9IGFzLmxlbmd0aDtcbiAgICB2YXIgcmVzdCA9IEFycmF5KGwgLSBpKTtcbiAgICBmb3IgKHZhciBqID0gaTsgaiA8IGw7IGorKykge1xuICAgICAgICByZXN0W2ogLSBpXSA9IGFzW2pdO1xuICAgIH1cbiAgICByZXR1cm4geyBpbml0OiBpbml0LCByZXN0OiByZXN0IH07XG59XG5leHBvcnRzLnNwYW4gPSBzcGFuO1xuLyoqXG4gKiBEcm9wIGEgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIGFuIGFycmF5LCBjcmVhdGluZyBhIG5ldyBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBkcm9wIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoZHJvcCgyLCBbMSwgMiwgM10pLCBbM10pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5kcm9wID0gZnVuY3Rpb24gKG4sIGFzKSB7XG4gICAgcmV0dXJuIGFzLnNsaWNlKG4sIGFzLmxlbmd0aCk7XG59O1xuLyoqXG4gKiBEcm9wIGEgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIGVuZCBvZiBhbiBhcnJheSwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZHJvcEVuZCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGRyb3BFbmQoMiwgWzEsIDIsIDMsIDQsIDVdKSwgWzEsIDIsIDNdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMTAuMFxuICovXG5leHBvcnRzLmRyb3BFbmQgPSBmdW5jdGlvbiAobiwgYXMpIHtcbiAgICByZXR1cm4gYXMuc2xpY2UoMCwgYXMubGVuZ3RoIC0gbik7XG59O1xuLyoqXG4gKiBSZW1vdmUgdGhlIGxvbmdlc3QgaW5pdGlhbCBzdWJhcnJheSBmb3Igd2hpY2ggYWxsIGVsZW1lbnQgc2F0aXNmeSB0aGUgc3BlY2lmaWVkIHByZWRpY2F0ZSwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZHJvcFdoaWxlIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoZHJvcFdoaWxlKFsxLCAzLCAyLCA0LCA1XSwgbiA9PiBuICUgMiA9PT0gMSksIFsyLCA0LCA1XSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmRyb3BXaGlsZSA9IGZ1bmN0aW9uIChhcywgcHJlZGljYXRlKSB7XG4gICAgdmFyIGkgPSBzcGFuSW5kZXhVbmN1cnJ5KGFzLCBwcmVkaWNhdGUpO1xuICAgIHZhciBsID0gYXMubGVuZ3RoO1xuICAgIHZhciByZXN0ID0gQXJyYXkobCAtIGkpO1xuICAgIGZvciAodmFyIGogPSBpOyBqIDwgbDsgaisrKSB7XG4gICAgICAgIHJlc3RbaiAtIGldID0gYXNbal07XG4gICAgfVxuICAgIHJldHVybiByZXN0O1xufTtcbi8qKlxuICogRmluZCB0aGUgZmlyc3QgaW5kZXggZm9yIHdoaWNoIGEgcHJlZGljYXRlIGhvbGRzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZpbmRJbmRleCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoZmluZEluZGV4KFsxLCAyLCAzXSwgeCA9PiB4ID09PSAyKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoZmluZEluZGV4KFtdLCB4ID0+IHggPT09IDIpLCBub25lKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZmluZEluZGV4ID0gZnVuY3Rpb24gKGFzLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgbGVuID0gYXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhc1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25fMS5zb21lKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPcHRpb25fMS5ub25lO1xufTtcbmZ1bmN0aW9uIGZpbmRGaXJzdChhcywgcHJlZGljYXRlKSB7XG4gICAgdmFyIGxlbiA9IGFzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYXNbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uXzEuc29tZShhc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9wdGlvbl8xLm5vbmU7XG59XG5leHBvcnRzLmZpbmRGaXJzdCA9IGZpbmRGaXJzdDtcbmZ1bmN0aW9uIGZpbmRMYXN0KGFzLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgbGVuID0gYXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbl8xLnNvbWUoYXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPcHRpb25fMS5ub25lO1xufVxuZXhwb3J0cy5maW5kTGFzdCA9IGZpbmRMYXN0O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsaXN0IHdoaWNoIG1hdGNoZXMgdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBmaW5kTGFzdEluZGV4IH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKlxuICogaW50ZXJmYWNlIFgge1xuICogICBhOiBudW1iZXJcbiAqICAgYjogbnVtYmVyXG4gKiB9XG4gKiBjb25zdCB4czogQXJyYXk8WD4gPSBbeyBhOiAxLCBiOiAwIH0sIHsgYTogMSwgYjogMSB9XVxuICogYXNzZXJ0LmRlZXBFcXVhbChmaW5kTGFzdEluZGV4KHhzLCB4ID0+IHguYSA9PT0gMSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGZpbmRMYXN0SW5kZXgoeHMsIHggPT4geC5hID09PSA0KSwgbm9uZSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjEwLjBcbiAqL1xuZXhwb3J0cy5maW5kTGFzdEluZGV4ID0gZnVuY3Rpb24gKGFzLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgbGVuID0gYXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbl8xLnNvbWUoaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9wdGlvbl8xLm5vbmU7XG59O1xuLyoqXG4gKiBVc2Uge0BsaW5rIGZpbHRlcn0gaW5zdGVhZFxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydHMucmVmaW5lID0gZnVuY3Rpb24gKGFzLCByZWZpbmVtZW50KSB7XG4gICAgcmV0dXJuIGZpbHRlcihhcywgcmVmaW5lbWVudCk7XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmNvcHkgPSBmdW5jdGlvbiAoYXMpIHtcbiAgICB2YXIgbCA9IGFzLmxlbmd0aDtcbiAgICB2YXIgciA9IEFycmF5KGwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJbaV0gPSBhc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnVuc2FmZUluc2VydEF0ID0gZnVuY3Rpb24gKGksIGEsIGFzKSB7XG4gICAgdmFyIHhzID0gZXhwb3J0cy5jb3B5KGFzKTtcbiAgICB4cy5zcGxpY2UoaSwgMCwgYSk7XG4gICAgcmV0dXJuIHhzO1xufTtcbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIHJldHVybmluZyBgTm9uZWAgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgaW5zZXJ0QXQgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGluc2VydEF0KDIsIDUsIFsxLCAyLCAzLCA0XSksIHNvbWUoWzEsIDIsIDUsIDMsIDRdKSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmluc2VydEF0ID0gZnVuY3Rpb24gKGksIGEsIGFzKSB7XG4gICAgcmV0dXJuIGkgPCAwIHx8IGkgPiBhcy5sZW5ndGggPyBPcHRpb25fMS5ub25lIDogT3B0aW9uXzEuc29tZShleHBvcnRzLnVuc2FmZUluc2VydEF0KGksIGEsIGFzKSk7XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnVuc2FmZVVwZGF0ZUF0ID0gZnVuY3Rpb24gKGksIGEsIGFzKSB7XG4gICAgdmFyIHhzID0gZXhwb3J0cy5jb3B5KGFzKTtcbiAgICB4c1tpXSA9IGE7XG4gICAgcmV0dXJuIHhzO1xufTtcbi8qKlxuICogQ2hhbmdlIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIGNyZWF0aW5nIGEgbmV3IGFycmF5LCBvciByZXR1cm5pbmcgYE5vbmVgIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVwZGF0ZUF0IH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbCh1cGRhdGVBdCgxLCAxLCBbMSwgMiwgM10pLCBzb21lKFsxLCAxLCAzXSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKHVwZGF0ZUF0KDEsIDEsIFtdKSwgbm9uZSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnVwZGF0ZUF0ID0gZnVuY3Rpb24gKGksIGEsIGFzKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNPdXRPZkJvdW5kKGksIGFzKSA/IE9wdGlvbl8xLm5vbmUgOiBPcHRpb25fMS5zb21lKGV4cG9ydHMudW5zYWZlVXBkYXRlQXQoaSwgYSwgYXMpKTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMudW5zYWZlRGVsZXRlQXQgPSBmdW5jdGlvbiAoaSwgYXMpIHtcbiAgICB2YXIgeHMgPSBleHBvcnRzLmNvcHkoYXMpO1xuICAgIHhzLnNwbGljZShpLCAxKTtcbiAgICByZXR1cm4geHM7XG59O1xuLyoqXG4gKiBEZWxldGUgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgY3JlYXRpbmcgYSBuZXcgYXJyYXksIG9yIHJldHVybmluZyBgTm9uZWAgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZGVsZXRlQXQgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGRlbGV0ZUF0KDAsIFsxLCAyLCAzXSksIHNvbWUoWzIsIDNdKSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoZGVsZXRlQXQoMSwgW10pLCBub25lKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZGVsZXRlQXQgPSBmdW5jdGlvbiAoaSwgYXMpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5pc091dE9mQm91bmQoaSwgYXMpID8gT3B0aW9uXzEubm9uZSA6IE9wdGlvbl8xLnNvbWUoZXhwb3J0cy51bnNhZmVEZWxldGVBdChpLCBhcykpO1xufTtcbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBjcmVhdGluZyBhIG5ldyBhcnJheSwgb3IgcmV0dXJuaW5nIGBOb25lYCBpZiB0aGUgaW5kZXggaXMgb3V0XG4gKiBvZiBib3VuZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbW9kaWZ5QXQgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAqXG4gKiBjb25zdCBkb3VibGUgPSAoeDogbnVtYmVyKTogbnVtYmVyID0+IHggKiAyXG4gKiBhc3NlcnQuZGVlcEVxdWFsKG1vZGlmeUF0KFsxLCAyLCAzXSwgMSwgZG91YmxlKSwgc29tZShbMSwgNCwgM10pKVxuICogYXNzZXJ0LmRlZXBFcXVhbChtb2RpZnlBdChbXSwgMSwgZG91YmxlKSwgbm9uZSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLm1vZGlmeUF0ID0gZnVuY3Rpb24gKGFzLCBpLCBmKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNPdXRPZkJvdW5kKGksIGFzKSA/IE9wdGlvbl8xLm5vbmUgOiBPcHRpb25fMS5zb21lKGV4cG9ydHMudW5zYWZlVXBkYXRlQXQoaSwgZihhc1tpXSksIGFzKSk7XG59O1xuLyoqXG4gKiBSZXZlcnNlIGFuIGFycmF5LCBjcmVhdGluZyBhIG5ldyBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwocmV2ZXJzZShbMSwgMiwgM10pLCBbMywgMiwgMV0pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5yZXZlcnNlID0gZnVuY3Rpb24gKGFzKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29weShhcykucmV2ZXJzZSgpO1xufTtcbi8qKlxuICogRXh0cmFjdHMgZnJvbSBhbiBhcnJheSBvZiBgRWl0aGVyYCBhbGwgdGhlIGBSaWdodGAgZWxlbWVudHMuIEFsbCB0aGUgYFJpZ2h0YCBlbGVtZW50cyBhcmUgZXh0cmFjdGVkIGluIG9yZGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHJpZ2h0cyB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IHJpZ2h0LCBsZWZ0IH0gZnJvbSAnZnAtdHMvbGliL0VpdGhlcidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKHJpZ2h0cyhbcmlnaHQoMSksIGxlZnQoJ2ZvbycpLCByaWdodCgyKV0pLCBbMSwgMl0pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5yaWdodHMgPSBmdW5jdGlvbiAoYXMpIHtcbiAgICB2YXIgciA9IFtdO1xuICAgIHZhciBsZW4gPSBhcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYSA9IGFzW2ldO1xuICAgICAgICBpZiAoYS5pc1JpZ2h0KCkpIHtcbiAgICAgICAgICAgIHIucHVzaChhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbn07XG4vKipcbiAqIEV4dHJhY3RzIGZyb20gYW4gYXJyYXkgb2YgYEVpdGhlcmAgYWxsIHRoZSBgTGVmdGAgZWxlbWVudHMuIEFsbCB0aGUgYExlZnRgIGVsZW1lbnRzIGFyZSBleHRyYWN0ZWQgaW4gb3JkZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbGVmdHMgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBsZWZ0LCByaWdodCB9IGZyb20gJ2ZwLXRzL2xpYi9FaXRoZXInXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbChsZWZ0cyhbcmlnaHQoMSksIGxlZnQoJ2ZvbycpLCByaWdodCgyKV0pLCBbJ2ZvbyddKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubGVmdHMgPSBmdW5jdGlvbiAoYXMpIHtcbiAgICB2YXIgciA9IFtdO1xuICAgIHZhciBsZW4gPSBhcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYSA9IGFzW2ldO1xuICAgICAgICBpZiAoYS5pc0xlZnQoKSkge1xuICAgICAgICAgICAgci5wdXNoKGEudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xufTtcbi8qKlxuICogU29ydCB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkgaW4gaW5jcmVhc2luZyBvcmRlciwgY3JlYXRpbmcgYSBuZXcgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc29ydCB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IG9yZE51bWJlciB9IGZyb20gJ2ZwLXRzL2xpYi9PcmQnXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbChzb3J0KG9yZE51bWJlcikoWzMsIDIsIDFdKSwgWzEsIDIsIDNdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuc29ydCA9IGZ1bmN0aW9uIChPKSB7IHJldHVybiBmdW5jdGlvbiAoYXMpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb3B5KGFzKS5zb3J0KE8uY29tcGFyZSk7XG59OyB9O1xuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIHBhaXJzIG9mIGVsZW1lbnRzIGF0IHRoZSBzYW1lIGluZGV4IGluIHR3byBhcnJheXMsIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW4gYSBuZXcgYXJyYXkuIElmIG9uZVxuICogaW5wdXQgYXJyYXkgaXMgc2hvcnQsIGV4Y2VzcyBlbGVtZW50cyBvZiB0aGUgbG9uZ2VyIGFycmF5IGFyZSBkaXNjYXJkZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHppcFdpdGggfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbCh6aXBXaXRoKFsxLCAyLCAzXSwgWydhJywgJ2InLCAnYycsICdkJ10sIChuLCBzKSA9PiBzICsgbiksIFsnYTEnLCAnYjInLCAnYzMnXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnppcFdpdGggPSBmdW5jdGlvbiAoZmEsIGZiLCBmKSB7XG4gICAgdmFyIGZjID0gW107XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGZhLmxlbmd0aCwgZmIubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGZjW2ldID0gZihmYVtpXSwgZmJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmM7XG59O1xuLyoqXG4gKiBUYWtlcyB0d28gYXJyYXlzIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGNvcnJlc3BvbmRpbmcgcGFpcnMuIElmIG9uZSBpbnB1dCBhcnJheSBpcyBzaG9ydCwgZXhjZXNzIGVsZW1lbnRzIG9mIHRoZVxuICogbG9uZ2VyIGFycmF5IGFyZSBkaXNjYXJkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgemlwIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoemlwKFsxLCAyLCAzXSwgWydhJywgJ2InLCAnYycsICdkJ10pLCBbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV0pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy56aXAgPSBmdW5jdGlvbiAoZmEsIGZiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuemlwV2l0aChmYSwgZmIsIGZ1bmN0aW9uXzEudHVwbGUpO1xufTtcbi8qKlxuICogUm90YXRlIGFuIGFycmF5IHRvIHRoZSByaWdodCBieSBgbmAgc3RlcHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcm90YXRlIH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwocm90YXRlKDIsIFsxLCAyLCAzLCA0LCA1XSksIFs0LCA1LCAxLCAyLCAzXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnJvdGF0ZSA9IGZ1bmN0aW9uIChuLCB4cykge1xuICAgIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gICAgaWYgKG4gPT09IDAgfHwgbGVuIDw9IDEgfHwgbGVuID09PSBNYXRoLmFicyhuKSkge1xuICAgICAgICByZXR1cm4geHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG4gPCAwKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLnJvdGF0ZShsZW4gKyBuLCB4cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geHMuc2xpY2UoLW4pLmNvbmNhdCh4cy5zbGljZSgwLCBsZW4gLSBuKSk7XG4gICAgfVxufTtcbi8qKlxuICogVGVzdCBpZiBhIHZhbHVlIGlzIGEgbWVtYmVyIG9mIGFuIGFycmF5LiBUYWtlcyBhIGBTZXRvaWQ8QT5gIGFzIGEgc2luZ2xlXG4gKiBhcmd1bWVudCB3aGljaCByZXR1cm5zIHRoZSBmdW5jdGlvbiB0byB1c2UgdG8gc2VhcmNoIGZvciBhIHZhbHVlIG9mIHR5cGUgYEFgIGluXG4gKiBhbiBhcnJheSBvZiB0eXBlIGBBcnJheTxBPmAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1lbWJlciB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IHNldG9pZFN0cmluZywgc2V0b2lkTnVtYmVyIH0gZnJvbSAnZnAtdHMvbGliL1NldG9pZCdcbiAqXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwobWVtYmVyKHNldG9pZFN0cmluZykoWyd0aGluZyBvbmUnLCAndGhpbmcgdHdvJywgJ2NhdCBpbiB0aGUgaGF0J10sICd0aGluZyB0d28nKSwgdHJ1ZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChtZW1iZXIoc2V0b2lkTnVtYmVyKShbMSwgMiwgM10sIDEpLCB0cnVlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKG1lbWJlcihzZXRvaWROdW1iZXIpKFsxLCAyLCAzXSwgNCksIGZhbHNlKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMy4wXG4gKi9cbmV4cG9ydHMubWVtYmVyID0gZnVuY3Rpb24gKFMpIHsgcmV0dXJuIGZ1bmN0aW9uIChhcywgYSkge1xuICAgIHZhciBwcmVkaWNhdGUgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gUy5lcXVhbHMoZSwgYSk7IH07XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBhcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTsgfTtcbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSwga2VlcGluZyB0aGUgZmlyc3Qgb2NjdXJhbmNlIG9mIGFuIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHVuaXEgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBzZXRvaWROdW1iZXIgfSBmcm9tICdmcC10cy9saWIvU2V0b2lkJ1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwodW5pcShzZXRvaWROdW1iZXIpKFsxLCAyLCAxXSksIFsxLCAyXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjMuMFxuICovXG5leHBvcnRzLnVuaXEgPSBmdW5jdGlvbiAoUykge1xuICAgIHZhciBtZW1iZXJTID0gZXhwb3J0cy5tZW1iZXIoUyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcykge1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICB2YXIgbGVuID0gYXMubGVuZ3RoO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhID0gYXNbaV07XG4gICAgICAgICAgICBpZiAoIW1lbWJlclMociwgYSkpIHtcbiAgICAgICAgICAgICAgICByLnB1c2goYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlbiA9PT0gci5sZW5ndGggPyBhcyA6IHI7XG4gICAgfTtcbn07XG4vKipcbiAqIFNvcnQgdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IGluIGluY3JlYXNpbmcgb3JkZXIsIHdoZXJlIGVsZW1lbnRzIGFyZSBjb21wYXJlZCB1c2luZyBmaXJzdCBgb3Jkc1swXWAsIHRoZW4gYG9yZHNbMV1gLFxuICogZXRjLi4uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqIGltcG9ydCB7IGNvbnRyYW1hcCwgb3JkU3RyaW5nLCBvcmROdW1iZXIgfSBmcm9tICdmcC10cy9saWIvT3JkJ1xuICpcbiAqIGludGVyZmFjZSBQZXJzb24ge1xuICogICBuYW1lOiBzdHJpbmdcbiAqICAgYWdlOiBudW1iZXJcbiAqIH1cbiAqIGNvbnN0IGJ5TmFtZSA9IGNvbnRyYW1hcCgocDogUGVyc29uKSA9PiBwLm5hbWUsIG9yZFN0cmluZylcbiAqIGNvbnN0IGJ5QWdlID0gY29udHJhbWFwKChwOiBQZXJzb24pID0+IHAuYWdlLCBvcmROdW1iZXIpXG4gKlxuICogY29uc3Qgc29ydEJ5TmFtZUJ5QWdlID0gc29ydEJ5KFtieU5hbWUsIGJ5QWdlXSlcbiAqXG4gKiBpZiAoc29ydEJ5TmFtZUJ5QWdlLmlzU29tZSgpKSB7XG4gKiAgIGNvbnN0IHBlcnNvbnMgPSBbeyBuYW1lOiAnYScsIGFnZTogMSB9LCB7IG5hbWU6ICdiJywgYWdlOiAzIH0sIHsgbmFtZTogJ2MnLCBhZ2U6IDIgfSwgeyBuYW1lOiAnYicsIGFnZTogMiB9XVxuICogICBhc3NlcnQuZGVlcEVxdWFsKHNvcnRCeU5hbWVCeUFnZS52YWx1ZShwZXJzb25zKSwgW1xuICogICAgIHsgbmFtZTogJ2EnLCBhZ2U6IDEgfSxcbiAqICAgICB7IG5hbWU6ICdiJywgYWdlOiAyIH0sXG4gKiAgICAgeyBuYW1lOiAnYicsIGFnZTogMyB9LFxuICogICAgIHsgbmFtZTogJ2MnLCBhZ2U6IDIgfVxuICogICBdKVxuICogfVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMy4wXG4gKi9cbmV4cG9ydHMuc29ydEJ5ID0gZnVuY3Rpb24gKG9yZHMpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5mb2xkKG9yZHMsIE9wdGlvbl8xLm5vbmUsIGZ1bmN0aW9uIChoZWFkLCB0YWlsKSB7IHJldHVybiBPcHRpb25fMS5zb21lKGV4cG9ydHMuc29ydEJ5MShoZWFkLCB0YWlsKSk7IH0pO1xufTtcbi8qKlxuICogTm9uIGZhaWxpbmcgdmVyc2lvbiBvZiB7QGxpbmsgc29ydEJ5fVxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvcnRCeTEgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBjb250cmFtYXAsIG9yZFN0cmluZywgb3JkTnVtYmVyIH0gZnJvbSAnZnAtdHMvbGliL09yZCdcbiAqXG4gKiBpbnRlcmZhY2UgUGVyc29uIHtcbiAqICAgbmFtZTogc3RyaW5nXG4gKiAgIGFnZTogbnVtYmVyXG4gKiB9XG4gKiBjb25zdCBieU5hbWUgPSBjb250cmFtYXAoKHA6IFBlcnNvbikgPT4gcC5uYW1lLCBvcmRTdHJpbmcpXG4gKiBjb25zdCBieUFnZSA9IGNvbnRyYW1hcCgocDogUGVyc29uKSA9PiBwLmFnZSwgb3JkTnVtYmVyKVxuICpcbiAqIGNvbnN0IHNvcnRCeU5hbWVCeUFnZSA9IHNvcnRCeTEoYnlOYW1lLCBbYnlBZ2VdKVxuICpcbiAqIGNvbnN0IHBlcnNvbnMgPSBbeyBuYW1lOiAnYScsIGFnZTogMSB9LCB7IG5hbWU6ICdiJywgYWdlOiAzIH0sIHsgbmFtZTogJ2MnLCBhZ2U6IDIgfSwgeyBuYW1lOiAnYicsIGFnZTogMiB9XVxuICogYXNzZXJ0LmRlZXBFcXVhbChzb3J0QnlOYW1lQnlBZ2UocGVyc29ucyksIFtcbiAqICAgeyBuYW1lOiAnYScsIGFnZTogMSB9LFxuICogICB7IG5hbWU6ICdiJywgYWdlOiAyIH0sXG4gKiAgIHsgbmFtZTogJ2InLCBhZ2U6IDMgfSxcbiAqICAgeyBuYW1lOiAnYycsIGFnZTogMiB9XG4gKiBdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMy4wXG4gKi9cbmV4cG9ydHMuc29ydEJ5MSA9IGZ1bmN0aW9uIChoZWFkLCB0YWlsKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuc29ydCh0YWlsLnJlZHVjZShPcmRfMS5nZXRTZW1pZ3JvdXAoKS5jb25jYXQsIGhlYWQpKTtcbn07XG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IGluIGFuIGFycmF5LCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdHMgd2hpY2ggY29udGFpbiBhIHZhbHVlLCBjcmVhdGluZyBhIG5ldyBhcnJheS5cbiAqXG4gKiBBbGlhcyBvZiB7QGxpbmsgRmlsdGVyYWJsZX0ncyBgZmlsdGVyTWFwYFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXBPcHRpb24gfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBPcHRpb24sIHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICpcbiAqIGNvbnN0IGYgPSAobjogbnVtYmVyKTogT3B0aW9uPG51bWJlcj4gPT4gKG4gJSAyID09PSAwID8gbm9uZSA6IHNvbWUobikpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKG1hcE9wdGlvbihbMSwgMiwgM10sIGYpLCBbMSwgM10pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5tYXBPcHRpb24gPSBmdW5jdGlvbiAoYXMsIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBhc18xID0gYXM7IF9pIDwgYXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGEgPSBhc18xW19pXTtcbiAgICAgICAgdmFyIG9wdGlvbkIgPSBmKGEpO1xuICAgICAgICBpZiAob3B0aW9uQi5pc1NvbWUoKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gob3B0aW9uQi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIEZpbHRlciBhbiBhcnJheSBvZiBvcHRpb25hbCB2YWx1ZXMsIGtlZXBpbmcgb25seSB0aGUgZWxlbWVudHMgd2hpY2ggY29udGFpbiBhIHZhbHVlLCBjcmVhdGluZyBhIG5ldyBhcnJheS5cbiAqXG4gKiBBbGlhcyBvZiB7QGxpbmsgQ29tcGFjdGFibGV9J3MgYGNvbXBhY3RgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNhdE9wdGlvbnMgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGNhdE9wdGlvbnMoW3NvbWUoMSksIG5vbmUsIHNvbWUoMyldKSwgWzEsIDNdKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuY2F0T3B0aW9ucyA9IGZ1bmN0aW9uIChhcykge1xuICAgIHJldHVybiBleHBvcnRzLm1hcE9wdGlvbihhcywgZnVuY3Rpb25fMS5pZGVudGl0eSk7XG59O1xuLyoqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgYXJyYXkgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKiBpbXBvcnQgeyBsZWZ0LCByaWdodCB9IGZyb20gJ2ZwLXRzL2xpYi9FaXRoZXInXG4gKiBpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJ2ZwLXRzL2xpYi9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGFycmF5LnBhcnRpdGlvbk1hcChbcmlnaHQoMSksIGxlZnQoJ2ZvbycpLCByaWdodCgyKV0sIGlkZW50aXR5KSwgeyBsZWZ0OiBbJ2ZvbyddLCByaWdodDogWzEsIDJdIH0pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5wYXJ0aXRpb25NYXAgPSBmdW5jdGlvbiAoZmEsIGYpIHtcbiAgICB2YXIgbGVmdCA9IFtdO1xuICAgIHZhciByaWdodCA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgZmFfMSA9IGZhOyBfaSA8IGZhXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBhID0gZmFfMVtfaV07XG4gICAgICAgIHZhciBlID0gZihhKTtcbiAgICAgICAgaWYgKGUuaXNMZWZ0KCkpIHtcbiAgICAgICAgICAgIGxlZnQucHVzaChlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJpZ2h0LnB1c2goZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgfTtcbn07XG5mdW5jdGlvbiBmaWx0ZXIoYXMsIHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBhcy5maWx0ZXIocHJlZGljYXRlKTtcbn1cbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xudmFyIHBhcnRpdGlvbiA9IGZ1bmN0aW9uIChmYSwgcCkge1xuICAgIHZhciBsZWZ0ID0gW107XG4gICAgdmFyIHJpZ2h0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBmYV8yID0gZmE7IF9pIDwgZmFfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGEgPSBmYV8yW19pXTtcbiAgICAgICAgaWYgKHAoYSkpIHtcbiAgICAgICAgICAgIHJpZ2h0LnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZWZ0LnB1c2goYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgfTtcbn07XG52YXIgY29tcGFjdCA9IGV4cG9ydHMuY2F0T3B0aW9ucztcbnZhciBzZXBhcmF0ZSA9IGZ1bmN0aW9uIChmYSkge1xuICAgIHZhciBsZWZ0ID0gW107XG4gICAgdmFyIHJpZ2h0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBmYV8zID0gZmE7IF9pIDwgZmFfMy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGUgPSBmYV8zW19pXTtcbiAgICAgICAgaWYgKGUuaXNMZWZ0KCkpIHtcbiAgICAgICAgICAgIGxlZnQucHVzaChlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJpZ2h0LnB1c2goZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgfTtcbn07XG52YXIgZmlsdGVyTWFwID0gZXhwb3J0cy5tYXBPcHRpb247XG52YXIgd2l0aGVyID0gZnVuY3Rpb24gKEYpIHtcbiAgICB2YXIgdHJhdmVyc2VGID0gdHJhdmVyc2UoRik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh3YSwgZikgeyByZXR1cm4gRi5tYXAodHJhdmVyc2VGKHdhLCBmKSwgY29tcGFjdCk7IH07XG59O1xudmFyIHdpbHQgPSBmdW5jdGlvbiAoRikge1xuICAgIHZhciB0cmF2ZXJzZUYgPSB0cmF2ZXJzZShGKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHdhLCBmKSB7IHJldHVybiBGLm1hcCh0cmF2ZXJzZUYod2EsIGYpLCBzZXBhcmF0ZSk7IH07XG59O1xuLyoqXG4gKiBBIHVzZWZ1bCByZWN1cnNpb24gcGF0dGVybiBmb3IgcHJvY2Vzc2luZyBhbiBhcnJheSB0byBwcm9kdWNlIGEgbmV3IGFycmF5LCBvZnRlbiB1c2VkIGZvciBcImNob3BwaW5nXCIgdXAgdGhlIGlucHV0XG4gKiBhcnJheS4gVHlwaWNhbGx5IGNob3AgaXMgY2FsbGVkIHdpdGggc29tZSBmdW5jdGlvbiB0aGF0IHdpbGwgY29uc3VtZSBhbiBpbml0aWFsIHByZWZpeCBvZiB0aGUgYXJyYXkgYW5kIHByb2R1Y2UgYVxuICogdmFsdWUgYW5kIHRoZSByZXN0IG9mIHRoZSBhcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgU2V0b2lkLCBzZXRvaWROdW1iZXIgfSBmcm9tICdmcC10cy9saWIvU2V0b2lkJ1xuICogaW1wb3J0IHsgY2hvcCwgc3BhbiB9IGZyb20gJ2ZwLXRzL2xpYi9BcnJheSdcbiAqXG4gKiBjb25zdCBncm91cCA9IDxBPihTOiBTZXRvaWQ8QT4pID0+IChhczogQXJyYXk8QT4pOiBBcnJheTxBcnJheTxBPj4gPT4ge1xuICogICByZXR1cm4gY2hvcChhcywgYXMgPT4ge1xuICogICAgIGNvbnN0IHsgaW5pdCwgcmVzdCB9ID0gc3BhbihhcywgYSA9PiBTLmVxdWFscyhhLCBhc1swXSkpXG4gKiAgICAgcmV0dXJuIFtpbml0LCByZXN0XVxuICogICB9KVxuICogfVxuICogYXNzZXJ0LmRlZXBFcXVhbChncm91cChzZXRvaWROdW1iZXIpKFsxLCAxLCAyLCAzLCAzLCA0XSksIFtbMSwgMV0sIFsyXSwgWzMsIDNdLCBbNF1dKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMTAuMFxuICovXG5leHBvcnRzLmNob3AgPSBmdW5jdGlvbiAoYXMsIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGNzID0gYXM7XG4gICAgd2hpbGUgKGNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIF9hID0gZihjcyksIGIgPSBfYVswXSwgYyA9IF9hWzFdO1xuICAgICAgICByZXN1bHQucHVzaChiKTtcbiAgICAgICAgY3MgPSBjO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogU3BsaXRzIGFuIGFycmF5IGludG8gdHdvIHBpZWNlcywgdGhlIGZpcnN0IHBpZWNlIGhhcyBgbmAgZWxlbWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNwbGl0IH0gZnJvbSAnZnAtdHMvbGliL0FycmF5J1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoc3BsaXQoMiwgWzEsIDIsIDMsIDQsIDVdKSwgW1sxLCAyXSwgWzMsIDQsIDVdXSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjEwLjBcbiAqL1xuZXhwb3J0cy5zcGxpdCA9IGZ1bmN0aW9uIChuLCBhcykge1xuICAgIHJldHVybiBbYXMuc2xpY2UoMCwgbiksIGFzLnNsaWNlKG4pXTtcbn07XG4vKipcbiAqIFNwbGl0cyBhbiBhcnJheSBpbnRvIGxlbmd0aC1gbmAgcGllY2VzLiBUaGUgbGFzdCBwaWVjZSB3aWxsIGJlIHNob3J0ZXIgaWYgYG5gIGRvZXMgbm90IGV2ZW5seSBkaXZpZGUgdGhlIGxlbmd0aCBvZlxuICogdGhlIGFycmF5LiBOb3RlIHRoYXQgYGNodW5rc09mKFtdLCBuKWAgaXMgYFtdYCwgbm90IGBbW11dYC4gVGhpcyBpcyBpbnRlbnRpb25hbCwgYW5kIGlzIGNvbnNpc3RlbnQgd2l0aCBhIHJlY3Vyc2l2ZVxuICogZGVmaW5pdGlvbiBvZiBgY2h1bmtzT2ZgOyBpdCBzYXRpc2ZpZXMgdGhlIHByb3BlcnR5IHRoYXRcbiAqXG4gKiBgYGB0c1xuICogY2h1bmtzT2YoeHMsIG4pLmNvbmNhdChjaHVua3NPZih5cywgbikpID09IGNodW5rc09mKHhzLmNvbmNhdCh5cykpLCBuKVxuICogYGBgXG4gKlxuICogd2hlbmV2ZXIgYG5gIGV2ZW5seSBkaXZpZGVzIHRoZSBsZW5ndGggb2YgYHhzYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY2h1bmtzT2YgfSBmcm9tICdmcC10cy9saWIvQXJyYXknXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbChjaHVua3NPZihbMSwgMiwgMywgNCwgNV0sIDIpLCBbWzEsIDJdLCBbMywgNF0sIFs1XV0pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4xMC4wXG4gKi9cbmV4cG9ydHMuY2h1bmtzT2YgPSBmdW5jdGlvbiAoYXMsIG4pIHtcbiAgICByZXR1cm4gZXhwb3J0cy5pc091dE9mQm91bmQobiAtIDEsIGFzKSA/IFthc10gOiBleHBvcnRzLmNob3AoYXMsIGZ1bmN0aW9uIChhcykgeyByZXR1cm4gZXhwb3J0cy5zcGxpdChuLCBhcyk7IH0pO1xufTtcbmZ1bmN0aW9uIGNvbXByZWhlbnNpb24oaW5wdXQsIGYsIGcpIHtcbiAgICB2YXIgZ28gPSBmdW5jdGlvbiAoc2NvcGUsIGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmLmFwcGx5KHZvaWQgMCwgc2NvcGUpID8gW2cuYXBwbHkodm9pZCAwLCBzY29wZSldIDogZXhwb3J0cy5lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFpbihpbnB1dFswXSwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGdvKGV4cG9ydHMuc25vYyhzY29wZSwgeCksIGlucHV0LnNsaWNlKDEpKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBnbyhleHBvcnRzLmVtcHR5LCBpbnB1dCk7XG59XG5leHBvcnRzLmNvbXByZWhlbnNpb24gPSBjb21wcmVoZW5zaW9uO1xuLyoqXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmFycmF5ID0ge1xuICAgIFVSSTogZXhwb3J0cy5VUkksXG4gICAgbWFwOiBtYXAsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgZmlsdGVyTWFwOiBmaWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBwYXJ0aXRpb24sXG4gICAgcGFydGl0aW9uTWFwOiBleHBvcnRzLnBhcnRpdGlvbk1hcCxcbiAgICBvZjogb2YsXG4gICAgYXA6IGFwLFxuICAgIGNoYWluOiBjaGFpbixcbiAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICBmb2xkTWFwOiBmb2xkTWFwLFxuICAgIGZvbGRyOiByZWR1Y2VSaWdodCxcbiAgICB1bmZvbGRyOiB1bmZvbGRyLFxuICAgIHRyYXZlcnNlOiB0cmF2ZXJzZSxcbiAgICBzZXF1ZW5jZTogc2VxdWVuY2UsXG4gICAgemVybzogemVybyxcbiAgICBhbHQ6IGFsdCxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB3aXRoZXI6IHdpdGhlcixcbiAgICB3aWx0OiB3aWx0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZ1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi9mdW5jdGlvblwiKTtcbnZhciBTZW1pZ3JvdXBfMSA9IHJlcXVpcmUoXCIuL1NlbWlncm91cFwiKTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5mb2xkID0gZnVuY3Rpb24gKE0pIHtcbiAgICByZXR1cm4gU2VtaWdyb3VwXzEuZm9sZChNKShNLmVtcHR5KTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0UHJvZHVjdE1vbm9pZCA9IGZ1bmN0aW9uIChNQSwgTUIpIHtcbiAgICByZXR1cm4gX19hc3NpZ24oe30sIFNlbWlncm91cF8xLmdldFByb2R1Y3RTZW1pZ3JvdXAoTUEsIE1CKSwgeyBlbXB0eTogW01BLmVtcHR5LCBNQi5lbXB0eV0gfSk7XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldER1YWxNb25vaWQgPSBmdW5jdGlvbiAoTSkge1xuICAgIHJldHVybiBfX2Fzc2lnbih7fSwgU2VtaWdyb3VwXzEuZ2V0RHVhbFNlbWlncm91cChNKSwgeyBlbXB0eTogTS5lbXB0eSB9KTtcbn07XG4vKipcbiAqIEJvb2xlYW4gbW9ub2lkIHVuZGVyIGNvbmp1bmN0aW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLm1vbm9pZEFsbCA9IF9fYXNzaWduKHt9LCBTZW1pZ3JvdXBfMS5zZW1pZ3JvdXBBbGwsIHsgZW1wdHk6IHRydWUgfSk7XG4vKipcbiAqIEJvb2xlYW4gbW9ub2lkIHVuZGVyIGRpc2p1bmN0aW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLm1vbm9pZEFueSA9IF9fYXNzaWduKHt9LCBTZW1pZ3JvdXBfMS5zZW1pZ3JvdXBBbnksIHsgZW1wdHk6IGZhbHNlIH0pO1xudmFyIGVtcHR5QXJyYXkgPSBbXTtcbi8qKlxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy51bnNhZmVNb25vaWRBcnJheSA9IF9fYXNzaWduKHt9LCBTZW1pZ3JvdXBfMS5nZXRBcnJheVNlbWlncm91cCgpLCB7IGVtcHR5OiBlbXB0eUFycmF5IH0pO1xuLyoqXG4gKiBNb25vaWQgdW5kZXIgYXJyYXkgY29uY2F0ZW5hdGlvbiAoYEFycmF5PGFueT5gKVxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5nZXRBcnJheU1vbm9pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZXhwb3J0cy51bnNhZmVNb25vaWRBcnJheTtcbn07XG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbi8qKlxuICogR2V0cyB7QGxpbmsgTW9ub2lkfSBpbnN0YW5jZSBmb3IgZGljdGlvbmFyaWVzIGdpdmVuIHtAbGluayBTZW1pZ3JvdXB9IGluc3RhbmNlIGZvciB0aGVpciB2YWx1ZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0RGljdGlvbmFyeU1vbm9pZCwgZm9sZCB9IGZyb20gJ2ZwLXRzL2xpYi9Nb25vaWQnXG4gKiBpbXBvcnQgeyBzZW1pZ3JvdXBTdW0gfSBmcm9tICdmcC10cy9saWIvU2VtaWdyb3VwJ1xuICpcbiAqIGNvbnN0IE0gPSBnZXREaWN0aW9uYXJ5TW9ub2lkKHNlbWlncm91cFN1bSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoZm9sZChNKShbeyBmb286IDEyMyB9LCB7IGZvbzogNDU2IH1dKSwgeyBmb286IDU3OSB9KVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuNC4wXG4gKi9cbmV4cG9ydHMuZ2V0RGljdGlvbmFyeU1vbm9pZCA9IGZ1bmN0aW9uIChTKSB7XG4gICAgcmV0dXJuIF9fYXNzaWduKHt9LCBTZW1pZ3JvdXBfMS5nZXREaWN0aW9uYXJ5U2VtaWdyb3VwKFMpLCB7IGVtcHR5OiBlbXB0eU9iamVjdCB9KTtcbn07XG4vKipcbiAqIE51bWJlciBtb25vaWQgdW5kZXIgYWRkaXRpb25cbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubW9ub2lkU3VtID0gX19hc3NpZ24oe30sIFNlbWlncm91cF8xLnNlbWlncm91cFN1bSwgeyBlbXB0eTogMCB9KTtcbi8qKlxuICogTnVtYmVyIG1vbm9pZCB1bmRlciBtdWx0aXBsaWNhdGlvblxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5tb25vaWRQcm9kdWN0ID0gX19hc3NpZ24oe30sIFNlbWlncm91cF8xLnNlbWlncm91cFByb2R1Y3QsIHsgZW1wdHk6IDEgfSk7XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubW9ub2lkU3RyaW5nID0gX19hc3NpZ24oe30sIFNlbWlncm91cF8xLnNlbWlncm91cFN0cmluZywgeyBlbXB0eTogJycgfSk7XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubW9ub2lkVm9pZCA9IF9fYXNzaWduKHt9LCBTZW1pZ3JvdXBfMS5zZW1pZ3JvdXBWb2lkLCB7IGVtcHR5OiB1bmRlZmluZWQgfSk7XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0RnVuY3Rpb25Nb25vaWQgPSBmdW5jdGlvbiAoTSkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX2Fzc2lnbih7fSwgU2VtaWdyb3VwXzEuZ2V0RnVuY3Rpb25TZW1pZ3JvdXAoTSkoKSwgeyBlbXB0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gTS5lbXB0eTsgfSB9KTtcbn07IH07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0RW5kb21vcnBoaXNtTW9ub2lkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb25fMS5jb21wb3NlLFxuICAgICAgICBlbXB0eTogZnVuY3Rpb25fMS5pZGVudGl0eVxuICAgIH07XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldFJlY29yZE1vbm9pZCA9IGZ1bmN0aW9uIChtb25vaWRzKSB7XG4gICAgdmFyIGVtcHR5ID0ge307XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhtb25vaWRzKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGtleXNfMSA9IGtleXM7IF9pIDwga2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c18xW19pXTtcbiAgICAgICAgZW1wdHlba2V5XSA9IG1vbm9pZHNba2V5XS5lbXB0eTtcbiAgICB9XG4gICAgcmV0dXJuIF9fYXNzaWduKHt9LCBTZW1pZ3JvdXBfMS5nZXRSZWNvcmRTZW1pZ3JvdXAobW9ub2lkcyksIHsgZW1wdHk6IGVtcHR5IH0pO1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS45LjBcbiAqL1xuZXhwb3J0cy5nZXRNZWV0TW9ub2lkID0gZnVuY3Rpb24gKEIpIHtcbiAgICByZXR1cm4gX19hc3NpZ24oe30sIFNlbWlncm91cF8xLmdldE1lZXRTZW1pZ3JvdXAoQiksIHsgZW1wdHk6IEIudG9wIH0pO1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS45LjBcbiAqL1xuZXhwb3J0cy5nZXRKb2luTW9ub2lkID0gZnVuY3Rpb24gKEIpIHtcbiAgICByZXR1cm4gX19hc3NpZ24oe30sIFNlbWlncm91cF8xLmdldEpvaW5TZW1pZ3JvdXAoQiksIHsgZW1wdHk6IEIuYm90dG9tIH0pO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vZnVuY3Rpb25cIik7XG52YXIgTW9ub2lkXzEgPSByZXF1aXJlKFwiLi9Nb25vaWRcIik7XG5leHBvcnRzLlVSSSA9ICdPcHRpb24nO1xudmFyIE5vbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9uZSgpIHtcbiAgICAgICAgdGhpcy5fdGFnID0gJ05vbmUnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIGZ1bmN0aW9uIGBmYCBhbmQgYW4gYE9wdGlvbmAgb2YgYEFgLiBNYXBzIGBmYCBlaXRoZXIgb24gYE5vbmVgIG9yIGBTb21lYCwgT3B0aW9uJ3MgZGF0YSBjb25zdHJ1Y3RvcnMuIElmIGl0XG4gICAgICogbWFwcyBvbiBgU29tZWAgdGhlbiBpdCB3aWxsIGFwcGx5IHRoZSBgZmAgb24gYFNvbWVgJ3MgdmFsdWUsIGlmIGl0IG1hcHMgb24gYE5vbmVgIGl0IHdpbGwgcmV0dXJuIGBOb25lYC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IHsgc29tZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gICAgICpcbiAgICAgKiBhc3NlcnQuZGVlcEVxdWFsKHNvbWUoMSkubWFwKG4gPT4gbiAqIDIpLCBzb21lKDIpKVxuICAgICAqL1xuICAgIE5vbmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLm5vbmU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYXBzIGBmYCBvdmVyIHRoaXMgYE9wdGlvbmAncyB2YWx1ZS4gSWYgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gYGZgIGlzIG51bGwgb3IgdW5kZWZpbmVkLCByZXR1cm5zIGBOb25lYFxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgeyBub25lLCBzb21lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAgICAgKlxuICAgICAqIGludGVyZmFjZSBGb28ge1xuICAgICAqICAgYmFyPzoge1xuICAgICAqICAgICBiYXo/OiBzdHJpbmdcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBhc3NlcnQuZGVlcEVxdWFsKFxuICAgICAqICAgc29tZTxGb28+KHsgYmFyOiB7IGJhejogJ3F1dXgnIH0gfSlcbiAgICAgKiAgICAgLm1hcE51bGxhYmxlKGZvbyA9PiBmb28uYmFyKVxuICAgICAqICAgICAubWFwTnVsbGFibGUoYmFyID0+IGJhci5iYXopLFxuICAgICAqICAgc29tZSgncXV1eCcpXG4gICAgICogKVxuICAgICAqIGFzc2VydC5kZWVwRXF1YWwoXG4gICAgICogICBzb21lPEZvbz4oeyBiYXI6IHt9IH0pXG4gICAgICogICAgIC5tYXBOdWxsYWJsZShmb28gPT4gZm9vLmJhcilcbiAgICAgKiAgICAgLm1hcE51bGxhYmxlKGJhciA9PiBiYXIuYmF6KSxcbiAgICAgKiAgIG5vbmVcbiAgICAgKiApXG4gICAgICogYXNzZXJ0LmRlZXBFcXVhbChcbiAgICAgKiAgIHNvbWU8Rm9vPih7fSlcbiAgICAgKiAgICAgLm1hcE51bGxhYmxlKGZvbyA9PiBmb28uYmFyKVxuICAgICAqICAgICAubWFwTnVsbGFibGUoYmFyID0+IGJhci5iYXopLFxuICAgICAqICAgbm9uZVxuICAgICAqIClcbiAgICAgKi9cbiAgICBOb25lLnByb3RvdHlwZS5tYXBOdWxsYWJsZSA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLm5vbmU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBgYXBgLCBzb21lIG1heSBhbHNvIGNhbGwgaXQgXCJhcHBseVwiLiBUYWtlcyBhIGZ1bmN0aW9uIGBmYWJgIHRoYXQgaXMgaW4gdGhlIGNvbnRleHQgb2YgYE9wdGlvbmAsIGFuZCBhcHBsaWVzIHRoYXRcbiAgICAgKiBmdW5jdGlvbiB0byB0aGlzIGBPcHRpb25gJ3MgdmFsdWUuIElmIHRoZSBgT3B0aW9uYCBjYWxsaW5nIGBhcGAgaXMgYG5vbmVgIGl0IHdpbGwgcmV0dXJuIGBub25lYC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IHsgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gICAgICpcbiAgICAgKiBhc3NlcnQuZGVlcEVxdWFsKHNvbWUoMikuYXAoc29tZSgoeDogbnVtYmVyKSA9PiB4ICsgMSkpLCBzb21lKDMpKVxuICAgICAqIGFzc2VydC5kZWVwRXF1YWwobm9uZS5hcChzb21lKCh4OiBudW1iZXIpID0+IHggKyAxKSksIG5vbmUpXG4gICAgICovXG4gICAgTm9uZS5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAoZmFiKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLm5vbmU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGbGlwcGVkIHZlcnNpb24gb2Yge0BsaW5rIGFwfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgeyBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAgICAgKlxuICAgICAqIGFzc2VydC5kZWVwRXF1YWwoc29tZSgoeDogbnVtYmVyKSA9PiB4ICsgMSkuYXBfKHNvbWUoMikpLCBzb21lKDMpKVxuICAgICAqIGFzc2VydC5kZWVwRXF1YWwobm9uZS5hcF8oc29tZSgyKSksIG5vbmUpXG4gICAgICovXG4gICAgTm9uZS5wcm90b3R5cGUuYXBfID0gZnVuY3Rpb24gKGZiKSB7XG4gICAgICAgIHJldHVybiBmYi5hcCh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiBhcHBseWluZyBmIHRvIHRoaXMgYE9wdGlvbmAncyB2YWx1ZSBpZiB0aGlzIGBPcHRpb25gIGlzIG5vbmVtcHR5LiBSZXR1cm5zIGBOb25lYCBpZiB0aGlzXG4gICAgICogYE9wdGlvbmAgaXMgZW1wdHkuIFNsaWdodGx5IGRpZmZlcmVudCBmcm9tIGBtYXBgIGluIHRoYXQgYGZgIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhbiBgT3B0aW9uYCAod2hpY2ggY291bGQgYmVcbiAgICAgKiBgTm9uZWApXG4gICAgICovXG4gICAgTm9uZS5wcm90b3R5cGUuY2hhaW4gPSBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5ub25lO1xuICAgIH07XG4gICAgTm9uZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGIsIGYpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBgYWx0YCBzaG9ydCBmb3IgYWx0ZXJuYXRpdmUsIHRha2VzIGFub3RoZXIgYE9wdGlvbmAuIElmIHRoaXMgYE9wdGlvbmAgaXMgYSBgU29tZWAgdHlwZSB0aGVuIGl0IHdpbGwgYmUgcmV0dXJuZWQsIGlmXG4gICAgICogaXQgaXMgYSBgTm9uZWAgdGhlbiBpdCB3aWxsIHJldHVybiB0aGUgbmV4dCBgU29tZWAgaWYgaXQgZXhpc3QuIElmIGJvdGggYXJlIGBOb25lYCB0aGVuIGl0IHdpbGwgcmV0dXJuIGBub25lYC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IHsgT3B0aW9uLCBzb21lLCBub25lIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAgICAgKlxuICAgICAqIGFzc2VydC5kZWVwRXF1YWwoc29tZSgyKS5hbHQoc29tZSg0KSksIHNvbWUoMikpXG4gICAgICogY29uc3QgZmE6IE9wdGlvbjxudW1iZXI+ID0gbm9uZVxuICAgICAqIGFzc2VydC5kZWVwRXF1YWwoZmEuYWx0KHNvbWUoNCkpLCBzb21lKDQpKVxuICAgICAqL1xuICAgIE5vbmUucHJvdG90eXBlLmFsdCA9IGZ1bmN0aW9uIChmYSkge1xuICAgICAgICByZXR1cm4gZmE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMYXp5IHZlcnNpb24gb2Yge0BsaW5rIGFsdH1cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IHsgc29tZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gICAgICpcbiAgICAgKiBhc3NlcnQuZGVlcEVxdWFsKHNvbWUoMSkub3JFbHNlKCgpID0+IHNvbWUoMikpLCBzb21lKDEpKVxuICAgICAqXG4gICAgICogQHNpbmNlIDEuNi4wXG4gICAgICovXG4gICAgTm9uZS5wcm90b3R5cGUub3JFbHNlID0gZnVuY3Rpb24gKGZhKSB7XG4gICAgICAgIHJldHVybiBmYSgpO1xuICAgIH07XG4gICAgTm9uZS5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMubm9uZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byBlYWNoIGNhc2UgaW4gdGhlIGRhdGEgc3RydWN0dXJlXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCB7IG5vbmUsIHNvbWUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICAgICAqXG4gICAgICogYXNzZXJ0LnN0cmljdEVxdWFsKHNvbWUoMSkuZm9sZCgnbm9uZScsIGEgPT4gYHNvbWU6ICR7YX1gKSwgJ3NvbWU6IDEnKVxuICAgICAqIGFzc2VydC5zdHJpY3RFcXVhbChub25lLmZvbGQoJ25vbmUnLCBhID0+IGBzb21lOiAke2F9YCksICdub25lJylcbiAgICAgKi9cbiAgICBOb25lLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24gKGIsIHdoZW5Tb21lKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH07XG4gICAgLyoqIExhenkgdmVyc2lvbiBvZiB7QGxpbmsgZm9sZH0gKi9cbiAgICBOb25lLnByb3RvdHlwZS5mb2xkTCA9IGZ1bmN0aW9uICh3aGVuTm9uZSwgd2hlblNvbWUpIHtcbiAgICAgICAgcmV0dXJuIHdoZW5Ob25lKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIHRoaXMgYFNvbWVgIG9yIHRoZSBnaXZlbiBhcmd1bWVudCBpZiB0aGlzIGlzIGEgYE5vbmVgXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCB7IE9wdGlvbiwgbm9uZSwgc29tZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gICAgICpcbiAgICAgKiBhc3NlcnQuc3RyaWN0RXF1YWwoc29tZSgxKS5nZXRPckVsc2UoMCksIDEpXG4gICAgICogY29uc3QgZmE6IE9wdGlvbjxudW1iZXI+ID0gbm9uZVxuICAgICAqIGFzc2VydC5zdHJpY3RFcXVhbChmYS5nZXRPckVsc2UoMCksIDApXG4gICAgICovXG4gICAgTm9uZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfTtcbiAgICAvKiogTGF6eSB2ZXJzaW9uIG9mIHtAbGluayBnZXRPckVsc2V9ICovXG4gICAgTm9uZS5wcm90b3R5cGUuZ2V0T3JFbHNlTCA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmKCk7XG4gICAgfTtcbiAgICAvKiogUmV0dXJucyB0aGUgdmFsdWUgZnJvbSB0aGlzIGBTb21lYCBvciBgbnVsbGAgaWYgdGhpcyBpcyBhIGBOb25lYCAqL1xuICAgIE5vbmUucHJvdG90eXBlLnRvTnVsbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgLyoqIFJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhpcyBgU29tZWAgb3IgYHVuZGVmaW5lZGAgaWYgdGhpcyBpcyBhIGBOb25lYCAqL1xuICAgIE5vbmUucHJvdG90eXBlLnRvVW5kZWZpbmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgTm9uZS5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIE5vbmUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ25vbmUnO1xuICAgIH07XG4gICAgLyoqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcHRpb24gaGFzIGFuIGVsZW1lbnQgdGhhdCBpcyBlcXVhbCAoYXMgZGV0ZXJtaW5lZCBieSBgU2ApIHRvIGBhYCwgYGZhbHNlYCBvdGhlcndpc2UgKi9cbiAgICBOb25lLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChTLCBhKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb3B0aW9uIGlzIGBOb25lYCwgYGZhbHNlYCBvdGhlcndpc2UgKi9cbiAgICBOb25lLnByb3RvdHlwZS5pc05vbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcHRpb24gaXMgYW4gaW5zdGFuY2Ugb2YgYFNvbWVgLCBgZmFsc2VgIG90aGVyd2lzZSAqL1xuICAgIE5vbmUucHJvdG90eXBlLmlzU29tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhpcyBvcHRpb24gaXMgbm9uIGVtcHR5IGFuZCB0aGUgcHJlZGljYXRlIGBwYCByZXR1cm5zIGB0cnVlYCB3aGVuIGFwcGxpZWQgdG8gdGhpcyBPcHRpb24ncyB2YWx1ZVxuICAgICAqL1xuICAgIE5vbmUucHJvdG90eXBlLmV4aXN0cyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE5vbmUucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLm5vbmU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2Uge0BsaW5rIGZpbHRlcn0gaW5zdGVhZC5cbiAgICAgKiBSZXR1cm5zIHRoaXMgb3B0aW9uIHJlZmluZWQgYXMgYE9wdGlvbjxCPmAgaWYgaXQgaXMgbm9uIGVtcHR5IGFuZCB0aGUgYHJlZmluZW1lbnRgIHJldHVybnMgYHRydWVgIHdoZW4gYXBwbGllZCB0b1xuICAgICAqIHRoaXMgT3B0aW9uJ3MgdmFsdWUuIE90aGVyd2lzZSByZXR1cm5zIGBOb25lYFxuICAgICAqIEBzaW5jZSAxLjMuMFxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgTm9uZS5wcm90b3R5cGUucmVmaW5lID0gZnVuY3Rpb24gKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMubm9uZTtcbiAgICB9O1xuICAgIE5vbmUudmFsdWUgPSBuZXcgTm9uZSgpO1xuICAgIHJldHVybiBOb25lO1xufSgpKTtcbmV4cG9ydHMuTm9uZSA9IE5vbmU7XG4vKipcbiAqIEBjb25zdGFudFxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubm9uZSA9IE5vbmUudmFsdWU7XG52YXIgU29tZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb21lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fdGFnID0gJ1NvbWUnO1xuICAgIH1cbiAgICBTb21lLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gbmV3IFNvbWUoZih0aGlzLnZhbHVlKSk7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5tYXBOdWxsYWJsZSA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmZyb21OdWxsYWJsZShmKHRoaXMudmFsdWUpKTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKGZhYikge1xuICAgICAgICByZXR1cm4gZmFiLmlzTm9uZSgpID8gZXhwb3J0cy5ub25lIDogbmV3IFNvbWUoZmFiLnZhbHVlKHRoaXMudmFsdWUpKTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLmFwXyA9IGZ1bmN0aW9uIChmYikge1xuICAgICAgICByZXR1cm4gZmIuYXAodGhpcyk7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5jaGFpbiA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmKHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgU29tZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGIsIGYpIHtcbiAgICAgICAgcmV0dXJuIGYoYiwgdGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5hbHQgPSBmdW5jdGlvbiAoZmEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5vckVsc2UgPSBmdW5jdGlvbiAoZmEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gbmV3IFNvbWUoZih0aGlzKSk7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24gKGIsIHdoZW5Tb21lKSB7XG4gICAgICAgIHJldHVybiB3aGVuU29tZSh0aGlzLnZhbHVlKTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLmZvbGRMID0gZnVuY3Rpb24gKHdoZW5Ob25lLCB3aGVuU29tZSkge1xuICAgICAgICByZXR1cm4gd2hlblNvbWUodGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLmdldE9yRWxzZUwgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLnRvTnVsbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgU29tZS5wcm90b3R5cGUudG9VbmRlZmluZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgU29tZS5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJzb21lKFwiICsgZnVuY3Rpb25fMS50b1N0cmluZyh0aGlzLnZhbHVlKSArIFwiKVwiO1xuICAgIH07XG4gICAgU29tZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoUywgYSkge1xuICAgICAgICByZXR1cm4gUy5lcXVhbHModGhpcy52YWx1ZSwgYSk7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5pc05vbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLmlzU29tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5leGlzdHMgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcCh0aGlzLnZhbHVlKTtcbiAgICB9O1xuICAgIFNvbWUucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4aXN0cyhwKSA/IHRoaXMgOiBleHBvcnRzLm5vbmU7XG4gICAgfTtcbiAgICBTb21lLnByb3RvdHlwZS5yZWZpbmUgPSBmdW5jdGlvbiAocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIocmVmaW5lbWVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gU29tZTtcbn0oKSk7XG5leHBvcnRzLlNvbWUgPSBTb21lO1xuLyoqXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG5vbmUsIHNvbWUsIGdldFNldG9pZCB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKiBpbXBvcnQgeyBzZXRvaWROdW1iZXIgfSBmcm9tICdmcC10cy9saWIvU2V0b2lkJ1xuICpcbiAqIGNvbnN0IFMgPSBnZXRTZXRvaWQoc2V0b2lkTnVtYmVyKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFMuZXF1YWxzKG5vbmUsIG5vbmUpLCB0cnVlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFMuZXF1YWxzKG5vbmUsIHNvbWUoMSkpLCBmYWxzZSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChTLmVxdWFscyhzb21lKDEpLCBub25lKSwgZmFsc2UpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoUy5lcXVhbHMoc29tZSgxKSwgc29tZSgyKSksIGZhbHNlKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKFMuZXF1YWxzKHNvbWUoMSksIHNvbWUoMSkpLCB0cnVlKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0U2V0b2lkID0gZnVuY3Rpb24gKFMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlcXVhbHM6IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiAoeC5pc05vbmUoKSA/IHkuaXNOb25lKCkgOiB5LmlzTm9uZSgpID8gZmFsc2UgOiBTLmVxdWFscyh4LnZhbHVlLCB5LnZhbHVlKSk7IH1cbiAgICB9O1xufTtcbi8qKlxuICogVGhlIGBPcmRgIGluc3RhbmNlIGFsbG93cyBgT3B0aW9uYCB2YWx1ZXMgdG8gYmUgY29tcGFyZWQgd2l0aFxuICogYGNvbXBhcmVgLCB3aGVuZXZlciB0aGVyZSBpcyBhbiBgT3JkYCBpbnN0YW5jZSBmb3JcbiAqIHRoZSB0eXBlIHRoZSBgT3B0aW9uYCBjb250YWlucy5cbiAqXG4gKiBgTm9uZWAgaXMgY29uc2lkZXJlZCB0byBiZSBsZXNzIHRoYW4gYW55IGBTb21lYCB2YWx1ZS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG5vbmUsIHNvbWUsIGdldE9yZCB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKiBpbXBvcnQgeyBvcmROdW1iZXIgfSBmcm9tICdmcC10cy9saWIvT3JkJ1xuICpcbiAqIGNvbnN0IE8gPSBnZXRPcmQob3JkTnVtYmVyKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShub25lLCBub25lKSwgMClcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmNvbXBhcmUobm9uZSwgc29tZSgxKSksIC0xKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShzb21lKDEpLCBub25lKSwgMSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmNvbXBhcmUoc29tZSgxKSwgc29tZSgyKSksIC0xKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShzb21lKDEpLCBzb21lKDEpKSwgMClcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjIuMFxuICovXG5leHBvcnRzLmdldE9yZCA9IGZ1bmN0aW9uIChPKSB7XG4gICAgcmV0dXJuIF9fYXNzaWduKHt9LCBleHBvcnRzLmdldFNldG9pZChPKSwgeyBjb21wYXJlOiBmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4gKHguaXNTb21lKCkgPyAoeS5pc1NvbWUoKSA/IE8uY29tcGFyZSh4LnZhbHVlLCB5LnZhbHVlKSA6IDEpIDogeS5pc1NvbWUoKSA/IC0xIDogMCk7IH0gfSk7XG59O1xudmFyIG1hcCA9IGZ1bmN0aW9uIChmYSwgZikge1xuICAgIHJldHVybiBmYS5tYXAoZik7XG59O1xudmFyIG9mID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gbmV3IFNvbWUoYSk7XG59O1xudmFyIGFwID0gZnVuY3Rpb24gKGZhYiwgZmEpIHtcbiAgICByZXR1cm4gZmEuYXAoZmFiKTtcbn07XG52YXIgY2hhaW4gPSBmdW5jdGlvbiAoZmEsIGYpIHtcbiAgICByZXR1cm4gZmEuY2hhaW4oZik7XG59O1xudmFyIHJlZHVjZSA9IGZ1bmN0aW9uIChmYSwgYiwgZikge1xuICAgIHJldHVybiBmYS5yZWR1Y2UoYiwgZik7XG59O1xudmFyIGZvbGRNYXAgPSBmdW5jdGlvbiAoTSkgeyByZXR1cm4gZnVuY3Rpb24gKGZhLCBmKSB7XG4gICAgcmV0dXJuIGZhLmlzTm9uZSgpID8gTS5lbXB0eSA6IGYoZmEudmFsdWUpO1xufTsgfTtcbnZhciBmb2xkciA9IGZ1bmN0aW9uIChmYSwgYiwgZikge1xuICAgIHJldHVybiBmYS5pc05vbmUoKSA/IGIgOiBmKGZhLnZhbHVlLCBiKTtcbn07XG52YXIgdHJhdmVyc2UgPSBmdW5jdGlvbiAoRikgeyByZXR1cm4gZnVuY3Rpb24gKHRhLCBmKSB7XG4gICAgcmV0dXJuIHRhLmlzTm9uZSgpID8gRi5vZihleHBvcnRzLm5vbmUpIDogRi5tYXAoZih0YS52YWx1ZSksIGV4cG9ydHMuc29tZSk7XG59OyB9O1xudmFyIHNlcXVlbmNlID0gZnVuY3Rpb24gKEYpIHsgcmV0dXJuIGZ1bmN0aW9uICh0YSkge1xuICAgIHJldHVybiB0YS5pc05vbmUoKSA/IEYub2YoZXhwb3J0cy5ub25lKSA6IEYubWFwKHRhLnZhbHVlLCBleHBvcnRzLnNvbWUpO1xufTsgfTtcbnZhciBhbHQgPSBmdW5jdGlvbiAoZngsIGZ5KSB7XG4gICAgcmV0dXJuIGZ4LmFsdChmeSk7XG59O1xudmFyIGV4dGVuZCA9IGZ1bmN0aW9uIChlYSwgZikge1xuICAgIHJldHVybiBlYS5leHRlbmQoZik7XG59O1xudmFyIHplcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMubm9uZTtcbn07XG4vKipcbiAqIHtAbGluayBBcHBseX0gc2VtaWdyb3VwXG4gKlxuICogfCB4ICAgICAgIHwgeSAgICAgICB8IGNvbmNhdCh4LCB5KSAgICAgICB8XG4gKiB8IC0tLS0tLS0gfCAtLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgbm9uZSAgICB8IG5vbmUgICAgfCBub25lICAgICAgICAgICAgICAgfFxuICogfCBzb21lKGEpIHwgbm9uZSAgICB8IG5vbmUgICAgICAgICAgICAgICB8XG4gKiB8IG5vbmUgICAgfCBzb21lKGEpIHwgbm9uZSAgICAgICAgICAgICAgIHxcbiAqIHwgc29tZShhKSB8IHNvbWUoYikgfCBzb21lKGNvbmNhdChhLCBiKSkgfFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRBcHBseVNlbWlncm91cCwgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKiBpbXBvcnQgeyBzZW1pZ3JvdXBTdW0gfSBmcm9tICdmcC10cy9saWIvU2VtaWdyb3VwJ1xuICpcbiAqIGNvbnN0IFMgPSBnZXRBcHBseVNlbWlncm91cChzZW1pZ3JvdXBTdW0pXG4gKiBhc3NlcnQuZGVlcEVxdWFsKFMuY29uY2F0KG5vbmUsIG5vbmUpLCBub25lKVxuICogYXNzZXJ0LmRlZXBFcXVhbChTLmNvbmNhdChzb21lKDEpLCBub25lKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoUy5jb25jYXQobm9uZSwgc29tZSgxKSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKFMuY29uY2F0KHNvbWUoMSksIHNvbWUoMikpLCBzb21lKDMpKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuNy4wXG4gKi9cbmV4cG9ydHMuZ2V0QXBwbHlTZW1pZ3JvdXAgPSBmdW5jdGlvbiAoUykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuICh4LmlzU29tZSgpICYmIHkuaXNTb21lKCkgPyBleHBvcnRzLnNvbWUoUy5jb25jYXQoeC52YWx1ZSwgeS52YWx1ZSkpIDogZXhwb3J0cy5ub25lKTsgfVxuICAgIH07XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjcuMFxuICovXG5leHBvcnRzLmdldEFwcGx5TW9ub2lkID0gZnVuY3Rpb24gKE0pIHtcbiAgICByZXR1cm4gX19hc3NpZ24oe30sIGV4cG9ydHMuZ2V0QXBwbHlTZW1pZ3JvdXAoTSksIHsgZW1wdHk6IGV4cG9ydHMuc29tZShNLmVtcHR5KSB9KTtcbn07XG4vKipcbiAqIE1vbm9pZCByZXR1cm5pbmcgdGhlIGxlZnQtbW9zdCBub24tYE5vbmVgIHZhbHVlXG4gKlxuICogfCB4ICAgICAgIHwgeSAgICAgICB8IGNvbmNhdCh4LCB5KSB8XG4gKiB8IC0tLS0tLS0gfCAtLS0tLS0tIHwgLS0tLS0tLS0tLS0tIHxcbiAqIHwgbm9uZSAgICB8IG5vbmUgICAgfCBub25lICAgICAgICAgfFxuICogfCBzb21lKGEpIHwgbm9uZSAgICB8IHNvbWUoYSkgICAgICB8XG4gKiB8IG5vbmUgICAgfCBzb21lKGEpIHwgc29tZShhKSAgICAgIHxcbiAqIHwgc29tZShhKSB8IHNvbWUoYikgfCBzb21lKGEpICAgICAgfFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRGaXJzdE1vbm9pZCwgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKlxuICogY29uc3QgTSA9IGdldEZpcnN0TW9ub2lkPG51bWJlcj4oKVxuICogYXNzZXJ0LmRlZXBFcXVhbChNLmNvbmNhdChub25lLCBub25lKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoTS5jb25jYXQoc29tZSgxKSwgbm9uZSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKE0uY29uY2F0KG5vbmUsIHNvbWUoMSkpLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBFcXVhbChNLmNvbmNhdChzb21lKDEpLCBzb21lKDIpKSwgc29tZSgxKSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldEZpcnN0TW9ub2lkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogYWx0LFxuICAgICAgICBlbXB0eTogZXhwb3J0cy5ub25lXG4gICAgfTtcbn07XG4vKipcbiAqIE1vbm9pZCByZXR1cm5pbmcgdGhlIHJpZ2h0LW1vc3Qgbm9uLWBOb25lYCB2YWx1ZVxuICpcbiAqIHwgeCAgICAgICB8IHkgICAgICAgfCBjb25jYXQoeCwgeSkgfFxuICogfCAtLS0tLS0tIHwgLS0tLS0tLSB8IC0tLS0tLS0tLS0tLSB8XG4gKiB8IG5vbmUgICAgfCBub25lICAgIHwgbm9uZSAgICAgICAgIHxcbiAqIHwgc29tZShhKSB8IG5vbmUgICAgfCBzb21lKGEpICAgICAgfFxuICogfCBub25lICAgIHwgc29tZShhKSB8IHNvbWUoYSkgICAgICB8XG4gKiB8IHNvbWUoYSkgfCBzb21lKGIpIHwgc29tZShiKSAgICAgIHxcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0TGFzdE1vbm9pZCwgc29tZSwgbm9uZSB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKlxuICogY29uc3QgTSA9IGdldExhc3RNb25vaWQ8bnVtYmVyPigpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKE0uY29uY2F0KG5vbmUsIG5vbmUpLCBub25lKVxuICogYXNzZXJ0LmRlZXBFcXVhbChNLmNvbmNhdChzb21lKDEpLCBub25lKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoTS5jb25jYXQobm9uZSwgc29tZSgxKSksIHNvbWUoMSkpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKE0uY29uY2F0KHNvbWUoMSksIHNvbWUoMikpLCBzb21lKDIpKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0TGFzdE1vbm9pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTW9ub2lkXzEuZ2V0RHVhbE1vbm9pZChleHBvcnRzLmdldEZpcnN0TW9ub2lkKCkpO1xufTtcbi8qKlxuICogTW9ub2lkIHJldHVybmluZyB0aGUgbGVmdC1tb3N0IG5vbi1gTm9uZWAgdmFsdWUuIElmIGJvdGggb3BlcmFuZHMgYXJlIGBTb21lYHMgdGhlbiB0aGUgaW5uZXIgdmFsdWVzIGFyZVxuICogYXBwZW5kZWQgdXNpbmcgdGhlIHByb3ZpZGVkIGBTZW1pZ3JvdXBgXG4gKlxuICogfCB4ICAgICAgIHwgeSAgICAgICB8IGNvbmNhdCh4LCB5KSAgICAgICB8XG4gKiB8IC0tLS0tLS0gfCAtLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgbm9uZSAgICB8IG5vbmUgICAgfCBub25lICAgICAgICAgICAgICAgfFxuICogfCBzb21lKGEpIHwgbm9uZSAgICB8IHNvbWUoYSkgICAgICAgICAgICB8XG4gKiB8IG5vbmUgICAgfCBzb21lKGEpIHwgc29tZShhKSAgICAgICAgICAgIHxcbiAqIHwgc29tZShhKSB8IHNvbWUoYikgfCBzb21lKGNvbmNhdChhLCBiKSkgfFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRNb25vaWQsIHNvbWUsIG5vbmUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICogaW1wb3J0IHsgc2VtaWdyb3VwU3VtIH0gZnJvbSAnZnAtdHMvbGliL1NlbWlncm91cCdcbiAqXG4gKiBjb25zdCBNID0gZ2V0TW9ub2lkKHNlbWlncm91cFN1bSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoTS5jb25jYXQobm9uZSwgbm9uZSksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKE0uY29uY2F0KHNvbWUoMSksIG5vbmUpLCBzb21lKDEpKVxuICogYXNzZXJ0LmRlZXBFcXVhbChNLmNvbmNhdChub25lLCBzb21lKDEpKSwgc29tZSgxKSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoTS5jb25jYXQoc29tZSgxKSwgc29tZSgyKSksIHNvbWUoMykpXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5nZXRNb25vaWQgPSBmdW5jdGlvbiAoUykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuICh4LmlzTm9uZSgpID8geSA6IHkuaXNOb25lKCkgPyB4IDogZXhwb3J0cy5zb21lKFMuY29uY2F0KHgudmFsdWUsIHkudmFsdWUpKSk7IH0sXG4gICAgICAgIGVtcHR5OiBleHBvcnRzLm5vbmVcbiAgICB9O1xufTtcbi8qKlxuICogQ29uc3RydWN0cyBhIG5ldyBgT3B0aW9uYCBmcm9tIGEgbnVsbGFibGUgdHlwZS4gSWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgcmV0dXJucyBgTm9uZWAsIG90aGVyd2lzZVxuICogcmV0dXJucyB0aGUgdmFsdWUgd3JhcHBlZCBpbiBhIGBTb21lYFxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBub25lLCBzb21lLCBmcm9tTnVsbGFibGUgfSBmcm9tICdmcC10cy9saWIvT3B0aW9uJ1xuICpcbiAqIGFzc2VydC5kZWVwRXF1YWwoZnJvbU51bGxhYmxlKHVuZGVmaW5lZCksIG5vbmUpXG4gKiBhc3NlcnQuZGVlcEVxdWFsKGZyb21OdWxsYWJsZShudWxsKSwgbm9uZSlcbiAqIGFzc2VydC5kZWVwRXF1YWwoZnJvbU51bGxhYmxlKDEpLCBzb21lKDEpKVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZnJvbU51bGxhYmxlID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYSA9PSBudWxsID8gZXhwb3J0cy5ub25lIDogbmV3IFNvbWUoYSk7XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICogQGFsaWFzIG9mXG4gKi9cbmV4cG9ydHMuc29tZSA9IG9mO1xuZnVuY3Rpb24gZnJvbVByZWRpY2F0ZShwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChwcmVkaWNhdGUoYSkgPyBleHBvcnRzLnNvbWUoYSkgOiBleHBvcnRzLm5vbmUpOyB9O1xufVxuZXhwb3J0cy5mcm9tUHJlZGljYXRlID0gZnJvbVByZWRpY2F0ZTtcbi8qKlxuICogVHJhbnNmb3JtcyBhbiBleGNlcHRpb24gaW50byBhbiBgT3B0aW9uYC4gSWYgYGZgIHRocm93cywgcmV0dXJucyBgTm9uZWAsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBvdXRwdXQgd3JhcHBlZCBpblxuICogYFNvbWVgXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG5vbmUsIHNvbWUsIHRyeUNhdGNoIH0gZnJvbSAnZnAtdHMvbGliL09wdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcEVxdWFsKFxuICogICB0cnlDYXRjaCgoKSA9PiB7XG4gKiAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAqICAgfSksXG4gKiAgIG5vbmVcbiAqIClcbiAqIGFzc2VydC5kZWVwRXF1YWwodHJ5Q2F0Y2goKCkgPT4gMSksIHNvbWUoMSkpXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy50cnlDYXRjaCA9IGZ1bmN0aW9uIChmKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuc29tZShmKCkpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5ub25lO1xuICAgIH1cbn07XG4vKipcbiAqIENvbnN0cnVjdHMgYSBuZXcgYE9wdGlvbmAgZnJvbSBhIGBFaXRoZXJgLiBJZiB0aGUgdmFsdWUgaXMgYSBgTGVmdGAsIHJldHVybnMgYE5vbmVgLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgaW5uZXJcbiAqIHZhbHVlIHdyYXBwZWQgaW4gYSBgU29tZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbm9uZSwgc29tZSwgZnJvbUVpdGhlciB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKiBpbXBvcnQgeyBsZWZ0LCByaWdodCB9IGZyb20gJ2ZwLXRzL2xpYi9FaXRoZXInXG4gKlxuICogYXNzZXJ0LmRlZXBFcXVhbChmcm9tRWl0aGVyKGxlZnQoMSkpLCBub25lKVxuICogYXNzZXJ0LmRlZXBFcXVhbChmcm9tRWl0aGVyKHJpZ2h0KDEpKSwgc29tZSgxKSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmZyb21FaXRoZXIgPSBmdW5jdGlvbiAoZmEpIHtcbiAgICByZXR1cm4gZmEuaXNMZWZ0KCkgPyBleHBvcnRzLm5vbmUgOiBleHBvcnRzLnNvbWUoZmEudmFsdWUpO1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wdGlvbiBpcyBhbiBpbnN0YW5jZSBvZiBgU29tZWAsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmlzU29tZSA9IGZ1bmN0aW9uIChmYSkge1xuICAgIHJldHVybiBmYS5pc1NvbWUoKTtcbn07XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcHRpb24gaXMgYE5vbmVgLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5pc05vbmUgPSBmdW5jdGlvbiAoZmEpIHtcbiAgICByZXR1cm4gZmEuaXNOb25lKCk7XG59O1xuLyoqXG4gKiBVc2Uge0BsaW5rIGZyb21QcmVkaWNhdGV9IGluc3RlYWQuXG4gKiBSZWZpbmVtZW50IHZlcnNpb24gb2Yge0BsaW5rIGZyb21QcmVkaWNhdGV9XG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjMuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0cy5mcm9tUmVmaW5lbWVudCA9IGZ1bmN0aW9uIChyZWZpbmVtZW50KSB7IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiByZWZpbmVtZW50KGEpID8gZXhwb3J0cy5zb21lKGEpIDogZXhwb3J0cy5ub25lO1xufTsgfTtcbi8qKlxuICogUmV0dXJucyBhIHJlZmluZW1lbnQgZnJvbSBhIHByaXNtLlxuICogVGhpcyBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgYSBjdXN0b20gdHlwZSBndWFyZCBkZWZpbml0aW9uIGlzIHR5cGUtc2FmZS5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgc29tZSwgbm9uZSwgZ2V0UmVmaW5lbWVudCB9IGZyb20gJ2ZwLXRzL2xpYi9PcHRpb24nXG4gKlxuICogdHlwZSBBID0geyB0eXBlOiAnQScgfVxuICogdHlwZSBCID0geyB0eXBlOiAnQicgfVxuICogdHlwZSBDID0gQSB8IEJcbiAqXG4gKiBjb25zdCBpc0EgPSAoYzogQyk6IGMgaXMgQSA9PiBjLnR5cGUgPT09ICdCJyAvLyA8PSB0eXBvIGJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3QgY29tcGxhaW5cbiAqIGNvbnN0IGlzQSA9IGdldFJlZmluZW1lbnQ8QywgQT4oYyA9PiAoYy50eXBlID09PSAnQicgPyBzb21lKGMpIDogbm9uZSkpIC8vIHN0YXRpYyBlcnJvcjogVHlwZSAnXCJCXCInIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ1wiQVwiJ1xuICogYGBgXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS43LjBcbiAqL1xuZXhwb3J0cy5nZXRSZWZpbmVtZW50ID0gZnVuY3Rpb24gKGdldE9wdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gZ2V0T3B0aW9uKGEpLmlzU29tZSgpOyB9O1xufTtcbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gKGZhKSB7IHJldHVybiBmYS5jaGFpbihmdW5jdGlvbl8xLmlkZW50aXR5KTsgfTtcbnZhciBzZXBhcmF0ZSA9IGZ1bmN0aW9uIChmYSkge1xuICAgIGlmIChmYS5pc05vbmUoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogZXhwb3J0cy5ub25lLFxuICAgICAgICAgICAgcmlnaHQ6IGV4cG9ydHMubm9uZVxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgZSA9IGZhLnZhbHVlO1xuICAgIGlmIChlLmlzTGVmdCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBleHBvcnRzLnNvbWUoZS52YWx1ZSksXG4gICAgICAgICAgICByaWdodDogZXhwb3J0cy5ub25lXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGV4cG9ydHMubm9uZSxcbiAgICAgICAgcmlnaHQ6IGV4cG9ydHMuc29tZShlLnZhbHVlKVxuICAgIH07XG59O1xudmFyIGZpbHRlciA9IGZ1bmN0aW9uIChmYSwgcCkgeyByZXR1cm4gZmEuZmlsdGVyKHApOyB9O1xudmFyIGZpbHRlck1hcCA9IGNoYWluO1xudmFyIHBhcnRpdGlvbk1hcCA9IGZ1bmN0aW9uIChmYSwgZikge1xuICAgIHJldHVybiBzZXBhcmF0ZShmYS5tYXAoZikpO1xufTtcbnZhciBwYXJ0aXRpb24gPSBmdW5jdGlvbiAoZmEsIHApIHsgcmV0dXJuICh7XG4gICAgbGVmdDogZmEuZmlsdGVyKGZ1bmN0aW9uXzEubm90KHApKSxcbiAgICByaWdodDogZmEuZmlsdGVyKHApXG59KTsgfTtcbnZhciB3aXRoZXIgPSBmdW5jdGlvbiAoRikgeyByZXR1cm4gZnVuY3Rpb24gKGZhLCBmKSB7XG4gICAgcmV0dXJuIGZhLmlzTm9uZSgpID8gRi5vZihmYSkgOiBmKGZhLnZhbHVlKTtcbn07IH07XG52YXIgd2lsdCA9IGZ1bmN0aW9uIChGKSB7IHJldHVybiBmdW5jdGlvbiAoZmEsIGYpIHtcbiAgICBpZiAoZmEuaXNOb25lKCkpIHtcbiAgICAgICAgcmV0dXJuIEYub2Yoe1xuICAgICAgICAgICAgbGVmdDogZXhwb3J0cy5ub25lLFxuICAgICAgICAgICAgcmlnaHQ6IGV4cG9ydHMubm9uZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIEYubWFwKGYoZmEudmFsdWUpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5pc0xlZnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBleHBvcnRzLnNvbWUoZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGV4cG9ydHMubm9uZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogZXhwb3J0cy5ub25lLFxuICAgICAgICAgICAgcmlnaHQ6IGV4cG9ydHMuc29tZShlLnZhbHVlKVxuICAgICAgICB9O1xuICAgIH0pO1xufTsgfTtcbi8qKlxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5vcHRpb24gPSB7XG4gICAgVVJJOiBleHBvcnRzLlVSSSxcbiAgICBtYXA6IG1hcCxcbiAgICBvZjogb2YsXG4gICAgYXA6IGFwLFxuICAgIGNoYWluOiBjaGFpbixcbiAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICBmb2xkTWFwOiBmb2xkTWFwLFxuICAgIGZvbGRyOiBmb2xkcixcbiAgICB0cmF2ZXJzZTogdHJhdmVyc2UsXG4gICAgc2VxdWVuY2U6IHNlcXVlbmNlLFxuICAgIHplcm86IHplcm8sXG4gICAgYWx0OiBhbHQsXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgZmlsdGVyTWFwOiBmaWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBwYXJ0aXRpb24sXG4gICAgcGFydGl0aW9uTWFwOiBwYXJ0aXRpb25NYXAsXG4gICAgd2l0aGVyOiB3aXRoZXIsXG4gICAgd2lsdDogd2lsdFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPcmRlcmluZ18xID0gcmVxdWlyZShcIi4vT3JkZXJpbmdcIik7XG52YXIgU2V0b2lkXzEgPSByZXF1aXJlKFwiLi9TZXRvaWRcIik7XG52YXIgZnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uXCIpO1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnVuc2FmZUNvbXBhcmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB4IDwgeSA/IC0xIDogeCA+IHkgPyAxIDogMDtcbn07XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMub3JkU3RyaW5nID0gX19hc3NpZ24oe30sIFNldG9pZF8xLnNldG9pZFN0cmluZywgeyBjb21wYXJlOiBleHBvcnRzLnVuc2FmZUNvbXBhcmUgfSk7XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMub3JkTnVtYmVyID0gX19hc3NpZ24oe30sIFNldG9pZF8xLnNldG9pZE51bWJlciwgeyBjb21wYXJlOiBleHBvcnRzLnVuc2FmZUNvbXBhcmUgfSk7XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMub3JkQm9vbGVhbiA9IF9fYXNzaWduKHt9LCBTZXRvaWRfMS5zZXRvaWRCb29sZWFuLCB7IGNvbXBhcmU6IGV4cG9ydHMudW5zYWZlQ29tcGFyZSB9KTtcbi8qKlxuICogVGVzdCB3aGV0aGVyIG9uZSB2YWx1ZSBpcyBfc3RyaWN0bHkgbGVzcyB0aGFuXyBhbm90aGVyXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmxlc3NUaGFuID0gZnVuY3Rpb24gKE8pIHsgcmV0dXJuIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIE8uY29tcGFyZSh4LCB5KSA9PT0gLTE7XG59OyB9O1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb25lIHZhbHVlIGlzIF9zdHJpY3RseSBncmVhdGVyIHRoYW5fIGFub3RoZXJcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ3JlYXRlclRoYW4gPSBmdW5jdGlvbiAoTykgeyByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gTy5jb21wYXJlKHgsIHkpID09PSAxO1xufTsgfTtcbi8qKlxuICogVGVzdCB3aGV0aGVyIG9uZSB2YWx1ZSBpcyBfbm9uLXN0cmljdGx5IGxlc3MgdGhhbl8gYW5vdGhlclxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5sZXNzVGhhbk9yRXEgPSBmdW5jdGlvbiAoTykgeyByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gTy5jb21wYXJlKHgsIHkpICE9PSAxO1xufTsgfTtcbi8qKlxuICogVGVzdCB3aGV0aGVyIG9uZSB2YWx1ZSBpcyBfbm9uLXN0cmljdGx5IGdyZWF0ZXIgdGhhbl8gYW5vdGhlclxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5ncmVhdGVyVGhhbk9yRXEgPSBmdW5jdGlvbiAoTykgeyByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gTy5jb21wYXJlKHgsIHkpICE9PSAtMTtcbn07IH07XG4vKipcbiAqIFRha2UgdGhlIG1pbmltdW0gb2YgdHdvIHZhbHVlcy4gSWYgdGhleSBhcmUgY29uc2lkZXJlZCBlcXVhbCwgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGNob3NlblxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5taW4gPSBmdW5jdGlvbiAoTykgeyByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gTy5jb21wYXJlKHgsIHkpID09PSAxID8geSA6IHg7XG59OyB9O1xuLyoqXG4gKiBUYWtlIHRoZSBtYXhpbXVtIG9mIHR3byB2YWx1ZXMuIElmIHRoZXkgYXJlIGNvbnNpZGVyZWQgZXF1YWwsIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBjaG9zZW5cbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubWF4ID0gZnVuY3Rpb24gKE8pIHsgcmV0dXJuIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIE8uY29tcGFyZSh4LCB5KSA9PT0gLTEgPyB5IDogeDtcbn07IH07XG4vKipcbiAqIENsYW1wIGEgdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bVxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5jbGFtcCA9IGZ1bmN0aW9uIChPKSB7XG4gICAgdmFyIG1pbk8gPSBleHBvcnRzLm1pbihPKTtcbiAgICB2YXIgbWF4TyA9IGV4cG9ydHMubWF4KE8pO1xuICAgIHJldHVybiBmdW5jdGlvbiAobG93LCBoaSkgeyByZXR1cm4gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIG1heE8obWluTyh4LCBoaSksIGxvdyk7IH07IH07XG59O1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSB2YWx1ZSBpcyBiZXR3ZWVuIGEgbWluaW11bSBhbmQgYSBtYXhpbXVtIChpbmNsdXNpdmUpXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmJldHdlZW4gPSBmdW5jdGlvbiAoTykge1xuICAgIHZhciBsZXNzVGhhbk8gPSBleHBvcnRzLmxlc3NUaGFuKE8pO1xuICAgIHZhciBncmVhdGVyVGhhbk8gPSBleHBvcnRzLmdyZWF0ZXJUaGFuKE8pO1xuICAgIHJldHVybiBmdW5jdGlvbiAobG93LCBoaSkgeyByZXR1cm4gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChsZXNzVGhhbk8oeCwgbG93KSB8fCBncmVhdGVyVGhhbk8oeCwgaGkpID8gZmFsc2UgOiB0cnVlKTsgfTsgfTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZnJvbUNvbXBhcmUgPSBmdW5jdGlvbiAoY29tcGFyZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVxdWFsczogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIGNvbXBhcmUoeCwgeSkgPT09IDA7IH0sXG4gICAgICAgIGNvbXBhcmU6IGNvbXBhcmVcbiAgICB9O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5jb250cmFtYXAgPSBmdW5jdGlvbiAoZiwgZmEpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5mcm9tQ29tcGFyZShmdW5jdGlvbl8xLm9uKGZhLmNvbXBhcmUpKGYpKTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0U2VtaWdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIGV4cG9ydHMuZnJvbUNvbXBhcmUoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIE9yZGVyaW5nXzEuc2VtaWdyb3VwT3JkZXJpbmcuY29uY2F0KHguY29tcGFyZShhLCBiKSwgeS5jb21wYXJlKGEsIGIpKTsgfSk7IH1cbiAgICB9O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5nZXRQcm9kdWN0T3JkID0gZnVuY3Rpb24gKE9BLCBPQikge1xuICAgIHZhciBTID0gU2V0b2lkXzEuZ2V0UHJvZHVjdFNldG9pZChPQSwgT0IpO1xuICAgIHJldHVybiBfX2Fzc2lnbih7fSwgUywgeyBjb21wYXJlOiBmdW5jdGlvbiAoX2EsIF9iKSB7XG4gICAgICAgICAgICB2YXIgeGEgPSBfYVswXSwgeGIgPSBfYVsxXTtcbiAgICAgICAgICAgIHZhciB5YSA9IF9iWzBdLCB5YiA9IF9iWzFdO1xuICAgICAgICAgICAgdmFyIHIgPSBPQS5jb21wYXJlKHhhLCB5YSk7XG4gICAgICAgICAgICByZXR1cm4gciA9PT0gMCA/IE9CLmNvbXBhcmUoeGIsIHliKSA6IHI7XG4gICAgICAgIH0gfSk7XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjMuMFxuICovXG5leHBvcnRzLmdldER1YWxPcmQgPSBmdW5jdGlvbiAoTykge1xuICAgIHJldHVybiBleHBvcnRzLmZyb21Db21wYXJlKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBPLmNvbXBhcmUoeSwgeCk7IH0pO1xufTtcbi8qKlxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS40LjBcbiAqL1xuZXhwb3J0cy5vcmREYXRlID0gZXhwb3J0cy5jb250cmFtYXAoZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUudmFsdWVPZigpOyB9LCBleHBvcnRzLm9yZE51bWJlcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA8PSAtMSA/IC0xIDogbiA+PSAxID8gMSA6IDA7XG59O1xuLyoqXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnNldG9pZE9yZGVyaW5nID0ge1xuICAgIGVxdWFsczogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHggPT09IHk7IH1cbn07XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuc2VtaWdyb3VwT3JkZXJpbmcgPSB7XG4gICAgY29uY2F0OiBmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4gKHggIT09IDAgPyB4IDogeSk7IH1cbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuaW52ZXJ0ID0gZnVuY3Rpb24gKE8pIHtcbiAgICBzd2l0Y2ggKE8pIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9yZF8xID0gcmVxdWlyZShcIi4vT3JkXCIpO1xudmFyIGZ1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi9mdW5jdGlvblwiKTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5mb2xkID0gZnVuY3Rpb24gKFMpIHsgcmV0dXJuIGZ1bmN0aW9uIChhKSB7IHJldHVybiBmdW5jdGlvbiAoYXMpIHtcbiAgICByZXR1cm4gYXMucmVkdWNlKFMuY29uY2F0LCBhKTtcbn07IH07IH07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0Rmlyc3RTZW1pZ3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHsgY29uY2F0OiBmdW5jdGlvbl8xLmlkZW50aXR5IH07XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldExhc3RTZW1pZ3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHsgY29uY2F0OiBmdW5jdGlvbiAoXywgeSkgeyByZXR1cm4geTsgfSB9O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5nZXRQcm9kdWN0U2VtaWdyb3VwID0gZnVuY3Rpb24gKFNBLCBTQikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKF9hLCBfYikge1xuICAgICAgICAgICAgdmFyIHhhID0gX2FbMF0sIHhiID0gX2FbMV07XG4gICAgICAgICAgICB2YXIgeWEgPSBfYlswXSwgeWIgPSBfYlsxXTtcbiAgICAgICAgICAgIHJldHVybiBbU0EuY29uY2F0KHhhLCB5YSksIFNCLmNvbmNhdCh4YiwgeWIpXTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldER1YWxTZW1pZ3JvdXAgPSBmdW5jdGlvbiAoUykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIFMuY29uY2F0KHksIHgpOyB9XG4gICAgfTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0RnVuY3Rpb25TZW1pZ3JvdXAgPSBmdW5jdGlvbiAoUykgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKGYsIGcpIHsgcmV0dXJuIGZ1bmN0aW9uIChhKSB7IHJldHVybiBTLmNvbmNhdChmKGEpLCBnKGEpKTsgfTsgfVxuICAgIH07XG59OyB9O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldFJlY29yZFNlbWlncm91cCA9IGZ1bmN0aW9uIChzZW1pZ3JvdXBzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgdmFyIHIgPSB7fTtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc2VtaWdyb3Vwcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGtleXNfMSA9IGtleXM7IF9pIDwga2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzFbX2ldO1xuICAgICAgICAgICAgICAgIHJba2V5XSA9IHNlbWlncm91cHNba2V5XS5jb25jYXQoeFtrZXldLCB5W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5nZXRNZWV0U2VtaWdyb3VwID0gZnVuY3Rpb24gKE8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25jYXQ6IE9yZF8xLm1pbihPKVxuICAgIH07XG59O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldEpvaW5TZW1pZ3JvdXAgPSBmdW5jdGlvbiAoTykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogT3JkXzEubWF4KE8pXG4gICAgfTtcbn07XG4vKipcbiAqIEJvb2xlYW4gc2VtaWdyb3VwIHVuZGVyIGNvbmp1bmN0aW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnNlbWlncm91cEFsbCA9IHtcbiAgICBjb25jYXQ6IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4ICYmIHk7IH1cbn07XG4vKipcbiAqIEJvb2xlYW4gc2VtaWdyb3VwIHVuZGVyIGRpc2p1bmN0aW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnNlbWlncm91cEFueSA9IHtcbiAgICBjb25jYXQ6IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4IHx8IHk7IH1cbn07XG4vKipcbiAqIFNlbWlncm91cCB1bmRlciBhcnJheSBjb25jYXRlbmF0aW9uXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmdldEFycmF5U2VtaWdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIGZ1bmN0aW9uXzEuY29uY2F0KHgsIHkpOyB9XG4gICAgfTtcbn07XG4vKipcbiAqIEdldHMge0BsaW5rIFNlbWlncm91cH0gaW5zdGFuY2UgZm9yIGRpY3Rpb25hcmllcyBnaXZlbiB7QGxpbmsgU2VtaWdyb3VwfSBpbnN0YW5jZSBmb3IgdGhlaXIgdmFsdWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldERpY3Rpb25hcnlTZW1pZ3JvdXAsIHNlbWlncm91cFN1bSB9IGZyb20gJ2ZwLXRzL2xpYi9TZW1pZ3JvdXAnXG4gKlxuICogY29uc3QgUyA9IGdldERpY3Rpb25hcnlTZW1pZ3JvdXAoc2VtaWdyb3VwU3VtKVxuICogYXNzZXJ0LmRlZXBFcXVhbChTLmNvbmNhdCh7IGZvbzogMTIzIH0sIHsgZm9vOiA0NTYgfSksIHsgZm9vOiA1NzkgfSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjQuMFxuICovXG5leHBvcnRzLmdldERpY3Rpb25hcnlTZW1pZ3JvdXAgPSBmdW5jdGlvbiAoUykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHZhciByID0gX19hc3NpZ24oe30sIHgpO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh5KTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgcltrXSA9IHguaGFzT3duUHJvcGVydHkoaykgPyBTLmNvbmNhdCh4W2tdLCB5W2tdKSA6IHlba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfVxuICAgIH07XG59O1xudmFyIHNlbWlncm91cEFueURpY3Rpb25hcnkgPSBleHBvcnRzLmdldERpY3Rpb25hcnlTZW1pZ3JvdXAoZXhwb3J0cy5nZXRMYXN0U2VtaWdyb3VwKCkpO1xuLyoqXG4gKiBHZXRzIHtAbGluayBTZW1pZ3JvdXB9IGluc3RhbmNlIGZvciBvYmplY3RzIG9mIGdpdmVuIHR5cGUgcHJlc2VydmluZyB0aGVpciB0eXBlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGdldE9iamVjdFNlbWlncm91cCB9IGZyb20gJ2ZwLXRzL2xpYi9TZW1pZ3JvdXAnXG4gKlxuICogY29uc3QgUyA9IGdldE9iamVjdFNlbWlncm91cDx7IGZvbzogbnVtYmVyIH0+KClcbiAqIGFzc2VydC5kZWVwRXF1YWwoUy5jb25jYXQoeyBmb286IDEyMyB9LCB7IGZvbzogNDU2IH0pLCB7IGZvbzogNDU2IH0pXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS40LjBcbiAqL1xuZXhwb3J0cy5nZXRPYmplY3RTZW1pZ3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNlbWlncm91cEFueURpY3Rpb25hcnk7XG59O1xuLyoqXG4gKiBOdW1iZXIgU2VtaWdyb3VwIHVuZGVyIGFkZGl0aW9uXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnNlbWlncm91cFN1bSA9IHtcbiAgICBjb25jYXQ6IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4ICsgeTsgfVxufTtcbi8qKlxuICogTnVtYmVyIFNlbWlncm91cCB1bmRlciBtdWx0aXBsaWNhdGlvblxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5zZW1pZ3JvdXBQcm9kdWN0ID0ge1xuICAgIGNvbmNhdDogZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHggKiB5OyB9XG59O1xuLyoqXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnNlbWlncm91cFN0cmluZyA9IHtcbiAgICBjb25jYXQ6IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4ICsgeTsgfVxufTtcbi8qKlxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5zZW1pZ3JvdXBWb2lkID0ge1xuICAgIGNvbmNhdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uXCIpO1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnN0cmljdEVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbn07XG52YXIgc2V0b2lkU3RyaWN0ID0geyBlcXVhbHM6IGV4cG9ydHMuc3RyaWN0RXF1YWwgfTtcbi8qKlxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5zZXRvaWRTdHJpbmcgPSBzZXRvaWRTdHJpY3Q7XG4vKipcbiAqIEBpbnN0YW5jZVxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuc2V0b2lkTnVtYmVyID0gc2V0b2lkU3RyaWN0O1xuLyoqXG4gKiBAaW5zdGFuY2VcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnNldG9pZEJvb2xlYW4gPSBzZXRvaWRTdHJpY3Q7XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0QXJyYXlTZXRvaWQgPSBmdW5jdGlvbiAoUykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVxdWFsczogZnVuY3Rpb24gKHhzLCB5cykgeyByZXR1cm4geHMubGVuZ3RoID09PSB5cy5sZW5ndGggJiYgeHMuZXZlcnkoZnVuY3Rpb24gKHgsIGkpIHsgcmV0dXJuIFMuZXF1YWxzKHgsIHlzW2ldKTsgfSk7IH1cbiAgICB9O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5nZXRSZWNvcmRTZXRvaWQgPSBmdW5jdGlvbiAoc2V0b2lkcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVxdWFsczogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gc2V0b2lkcykge1xuICAgICAgICAgICAgICAgIGlmICghc2V0b2lkc1trXS5lcXVhbHMoeFtrXSwgeVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuZ2V0UHJvZHVjdFNldG9pZCA9IGZ1bmN0aW9uIChTQSwgU0IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlcXVhbHM6IGZ1bmN0aW9uIChfYSwgX2IpIHtcbiAgICAgICAgICAgIHZhciB4YSA9IF9hWzBdLCB4YiA9IF9hWzFdO1xuICAgICAgICAgICAgdmFyIHlhID0gX2JbMF0sIHliID0gX2JbMV07XG4gICAgICAgICAgICByZXR1cm4gU0EuZXF1YWxzKHhhLCB5YSkgJiYgU0IuZXF1YWxzKHhiLCB5Yik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgYFNldG9pZGAgY29ycmVzcG9uZGluZyB0byB0aGUgcGFydGl0aW9ucyBvZiBgQmAgaW5kdWNlZCBieSBgZmBcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMi4wXG4gKi9cbmV4cG9ydHMuY29udHJhbWFwID0gZnVuY3Rpb24gKGYsIGZhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXF1YWxzOiBmdW5jdGlvbl8xLm9uKGZhLmVxdWFscykoZilcbiAgICB9O1xufTtcbi8qKlxuICogQGluc3RhbmNlXG4gKiBAc2luY2UgMS40LjBcbiAqL1xuZXhwb3J0cy5zZXRvaWREYXRlID0gZXhwb3J0cy5jb250cmFtYXAoZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUudmFsdWVPZigpOyB9LCBleHBvcnRzLnNldG9pZE51bWJlcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5pZGVudGl0eSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGE7XG59O1xuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnVuc2FmZUNvZXJjZSA9IGV4cG9ydHMuaWRlbnRpdHk7XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMubm90ID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIXByZWRpY2F0ZShhKTsgfTtcbn07XG5mdW5jdGlvbiBvcihwMSwgcDIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHAxKGEpIHx8IHAyKGEpOyB9O1xufVxuZXhwb3J0cy5vciA9IG9yO1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmFuZCA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHAxKGEpICYmIHAyKGEpOyB9O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5jb25zdGFudCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGE7IH07XG59O1xuLyoqXG4gKiBBIHRodW5rIHRoYXQgcmV0dXJucyBhbHdheXMgYHRydWVgXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmNvbnN0VHJ1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIEEgdGh1bmsgdGhhdCByZXR1cm5zIGFsd2F5cyBgZmFsc2VgXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLmNvbnN0RmFsc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogQSB0aHVuayB0aGF0IHJldHVybnMgYWx3YXlzIGBudWxsYFxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5jb25zdE51bGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuLyoqXG4gKiBBIHRodW5rIHRoYXQgcmV0dXJucyBhbHdheXMgYHVuZGVmaW5lZGBcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuY29uc3RVbmRlZmluZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuO1xufTtcbi8qKlxuICogRmxpcHMgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHMgdG8gYSBmdW5jdGlvbiBvZiB0d28gYXJndW1lbnRzLlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy5mbGlwID0gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGZ1bmN0aW9uIChhKSB7IHJldHVybiBmKGEpKGIpOyB9OyB9O1xufTtcbi8qKlxuICogVGhlIGBvbmAgZnVuY3Rpb24gaXMgdXNlZCB0byBjaGFuZ2UgdGhlIGRvbWFpbiBvZiBhIGJpbmFyeSBvcGVyYXRvci5cbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMub24gPSBmdW5jdGlvbiAob3ApIHsgcmV0dXJuIGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBvcChmKHgpLCBmKHkpKTsgfTtcbn07IH07XG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGxlbiA9IGZucy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICB2YXIgeSA9IHg7XG4gICAgICAgIGZvciAodmFyIGkgPSBsZW47IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICB5ID0gZm5zW2ldLmNhbGwodGhpcywgeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfTtcbn1cbmV4cG9ydHMuY29tcG9zZSA9IGNvbXBvc2U7XG5mdW5jdGlvbiBwaXBlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGxlbiA9IGZucy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICB2YXIgeSA9IHg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB5ID0gZm5zW2ldLmNhbGwodGhpcywgeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfTtcbn1cbmV4cG9ydHMucGlwZSA9IHBpcGU7XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuY29uY2F0ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB2YXIgbGVueCA9IHgubGVuZ3RoO1xuICAgIHZhciBsZW55ID0geS5sZW5ndGg7XG4gICAgdmFyIHIgPSBBcnJheShsZW54ICsgbGVueSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW54OyBpKyspIHtcbiAgICAgICAgcltpXSA9IHhbaV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVueTsgaSsrKSB7XG4gICAgICAgIHJbaSArIGxlbnhdID0geVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59O1xuZnVuY3Rpb24gY3VycmllZChmLCBuLCBhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdmFyIGNvbWJpbmVkID0gZXhwb3J0cy5jb25jYXQoYWNjLCBbeF0pO1xuICAgICAgICByZXR1cm4gbiA9PT0gMCA/IGYuYXBwbHkodGhpcywgY29tYmluZWQpIDogY3VycmllZChmLCBuIC0gMSwgY29tYmluZWQpO1xuICAgIH07XG59XG5leHBvcnRzLmN1cnJpZWQgPSBjdXJyaWVkO1xuZnVuY3Rpb24gY3VycnkoZikge1xuICAgIHJldHVybiBjdXJyaWVkKGYsIGYubGVuZ3RoIC0gMSwgW10pO1xufVxuZXhwb3J0cy5jdXJyeSA9IGN1cnJ5O1xuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG52YXIgZ2V0RnVuY3Rpb25OYW1lID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuZGlzcGxheU5hbWUgfHwgZi5uYW1lIHx8IFwiPGZ1bmN0aW9uXCIgKyBmLmxlbmd0aCArIFwiPlwiOyB9O1xuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh4KTtcbiAgICB9XG4gICAgaWYgKHggaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBcIm5ldyBEYXRlKCdcIiArIHgudG9JU09TdHJpbmcoKSArIFwiJylcIjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgeC5tYXAoZXhwb3J0cy50b1N0cmluZykuam9pbignLCAnKSArIFwiXVwiO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGdldEZ1bmN0aW9uTmFtZSh4KTtcbiAgICB9XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHgudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgJiYgeC50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuICAgICAgICByZXR1cm4geC50b1N0cmluZygpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCwgbnVsbCwgMik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoeCk7XG4gICAgfVxufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0cy50dXBsZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIFthLCBiXTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMudHVwbGVDdXJyaWVkID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIFthLCBiXTtcbn07IH07XG4vKipcbiAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byBhbiBhcmd1bWVudCAoJClcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuYXBwbHkgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gZihhKTtcbn07IH07XG4vKipcbiAqIEFwcGxpZXMgYW4gYXJndW1lbnQgdG8gYSBmdW5jdGlvbiAoIylcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuMC4wXG4gKi9cbmV4cG9ydHMuYXBwbHlGbGlwcGVkID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYoYSk7XG59OyB9O1xuLyoqIEZvciB1c2Ugd2l0aCBwaGFudG9tIGZpZWxkcyAqL1xuZXhwb3J0cy5waGFudG9tID0gdW5kZWZpbmVkO1xuLyoqXG4gKiBBIHRodW5rIHRoYXQgcmV0dXJucyBhbHdheXMgdGhlIGBpZGVudGl0eWAgZnVuY3Rpb24uXG4gKiBGb3IgdXNlIHdpdGggYGFwcGx5U2Vjb25kYCBtZXRob2RzLlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS41LjBcbiAqL1xuZXhwb3J0cy5jb25zdElkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBleHBvcnRzLmlkZW50aXR5O1xufTtcbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgMS45LjBcbiAqL1xuZXhwb3J0cy5pbmNyZW1lbnQgPSBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuICsgMTtcbn07XG4vKipcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIDEuOS4wXG4gKi9cbmV4cG9ydHMuZGVjcmVtZW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiAtIDE7XG59O1xuIiwiaW1wb3J0IHsgY2F0T3B0aW9ucywgaGVhZCB9IGZyb20gXCJmcC10cy9saWIvQXJyYXlcIjtcbmltcG9ydCB7IE9wdGlvbiwgc29tZSwgbm9uZSB9IGZyb20gXCJmcC10cy9saWIvT3B0aW9uXCI7XG5cbmNvbnN0IG9wdGlvbjE6IE9wdGlvbjxudW1iZXI+ID0gc29tZSgxMyk7XG5jb25zdCBvcHRpb24yOiBPcHRpb248bnVtYmVyPiA9IHNvbWUoMik7XG5cbmNvbnN0IGFycmF5OiBBcnJheTxPcHRpb248bnVtYmVyPj4gPSBbb3B0aW9uMSwgbm9uZSwgbm9uZSwgb3B0aW9uMl07XG5jb25zdCBmaWx0ZXJlZEFycmF5ID0gaGVhZChjYXRPcHRpb25zKGFycmF5KS5tYXAoaXRlbSA9PiBpdGVtICsgMTApKTtcblxuY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XG4iXSwic291cmNlUm9vdCI6IiJ9