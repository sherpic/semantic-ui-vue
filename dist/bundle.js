/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var _stringify=__webpack_require__(6);var _stringify2=_interopRequireDefault(_stringify);var _typeof2=__webpack_require__(9);var _typeof3=_interopRequireDefault(_typeof2);var _keys=__webpack_require__(40);var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
	 * # Semantic UI - 2.2.6
	 * https://github.com/Semantic-Org/Semantic-UI
	 * http://www.semantic-ui.com/
	 *
	 * Copyright 2014 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */!function(e,t,n,i){e.site=e.fn.site=function(o){var a,r,s=new Date().getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=e.isPlainObject(o)?e.extend(!0,{},e.site.settings,o):e.extend({},e.site.settings),m=f.namespace,g=f.error,p="module-"+m,h=e(n),v=h,b=this,y=v.data(p);return a={initialize:function initialize(){a.instantiate();},instantiate:function instantiate(){a.verbose("Storing instance of site",a),y=a,v.data(p,a);},normalize:function normalize(){a.fix.console(),a.fix.requestAnimationFrame();},fix:{console:function(_console){function console(){return _console.apply(this,arguments);}console.toString=function(){return _console.toString();};return console;}(function(){a.debug("Normalizing window.console"),console!==i&&console.log!==i||(a.verbose("Console not available, normalizing events"),a.disable.console()),"undefined"!=typeof console.group&&"undefined"!=typeof console.groupEnd&&"undefined"!=typeof console.groupCollapsed||(a.verbose("Console group not available, normalizing events"),t.console.group=function(){},t.console.groupEnd=function(){},t.console.groupCollapsed=function(){}),"undefined"==typeof console.markTimeline&&(a.verbose("Mark timeline not available, normalizing events"),t.console.markTimeline=function(){});}),consoleClear:function consoleClear(){a.debug("Disabling programmatic console clearing"),t.console.clear=function(){};},requestAnimationFrame:function requestAnimationFrame(){a.debug("Normalizing requestAnimationFrame"),t.requestAnimationFrame===i&&(a.debug("RequestAnimationFrame not available, normalizing event"),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);});}},moduleExists:function moduleExists(t){return e.fn[t]!==i&&e.fn[t].settings!==i;},enabled:{modules:function modules(t){var n=[];return t=t||f.modules,e.each(t,function(e,t){a.moduleExists(t)&&n.push(t);}),n;}},disabled:{modules:function modules(t){var n=[];return t=t||f.modules,e.each(t,function(e,t){a.moduleExists(t)||n.push(t);}),n;}},change:{setting:function setting(t,n,o,r){o="string"==typeof o?"all"===o?f.modules:[o]:o||f.modules,r=r===i||r,e.each(o,function(i,o){var s,l=!a.moduleExists(o)||e.fn[o].settings.namespace||!1;a.moduleExists(o)&&(a.verbose("Changing default setting",t,n,o),e.fn[o].settings[t]=n,r&&l&&(s=e(":data(module-"+l+")"),s.length>0&&(a.verbose("Modifying existing settings",s),s[o]("setting",t,n))));});},settings:function settings(t,n,o){n="string"==typeof n?[n]:n||f.modules,o=o===i||o,e.each(n,function(n,i){var r;a.moduleExists(i)&&(a.verbose("Changing default setting",t,i),e.extend(!0,e.fn[i].settings,t),o&&m&&(r=e(":data(module-"+m+")"),r.length>0&&(a.verbose("Modifying existing settings",r),r[i]("setting",t))));});}},enable:{console:function console(){a.console(!0);},debug:function debug(e,t){e=e||f.modules,a.debug("Enabling debug for modules",e),a.change.setting("debug",!0,e,t);},verbose:function verbose(e,t){e=e||f.modules,a.debug("Enabling verbose debug for modules",e),a.change.setting("verbose",!0,e,t);}},disable:{console:function console(){a.console(!1);},debug:function debug(e,t){e=e||f.modules,a.debug("Disabling debug for modules",e),a.change.setting("debug",!1,e,t);},verbose:function verbose(e,t){e=e||f.modules,a.debug("Disabling verbose debug for modules",e),a.change.setting("verbose",!1,e,t);}},console:function console(e){if(e){if(y.cache.console===i)return void a.error(g.console);a.debug("Restoring console function"),t.console=y.cache.console;}else a.debug("Disabling console function"),y.cache.console=t.console,t.console={clear:function clear(){},error:function error(){},group:function group(){},groupCollapsed:function groupCollapsed(){},groupEnd:function groupEnd(){},info:function info(){},log:function log(){},markTimeline:function markTimeline(){},warn:function warn(){}};},destroy:function destroy(){a.verbose("Destroying previous site for",v),v.removeData(p);},cache:{},setting:function setting(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,a,t);else{if(n===i)return a[t];a[t]=n;}},debug:function debug(){f.debug&&(f.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,f.name+":"),a.debug.apply(console,arguments)));},verbose:function verbose(){f.verbose&&f.debug&&(f.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),a.verbose.apply(console,arguments)));},error:function error(){a.error=Function.prototype.bind.call(console.error,console,f.name+":"),a.error.apply(console,arguments);},performance:{log:function log(e){var t,n,i;f.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Element:b,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500);},display:function display(){var t=f.name+":",n=0;s=!1,clearTimeout(a.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,o){var s,l,c,u=y;return n=n||d,o=b||o,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var r=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[r])&&n!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[o])||n==s)return u[o]!==i?(l=u[o],!1):(a.error(g.method,t),!1);u=u[o];}})),e.isFunction(l)?c=l.apply(o,n):l!==i&&(c=l),e.isArray(r)?r.push(c):r!==i?r=[r,c]:c!==i&&(r=c),l;}},u?(y===i&&a.initialize(),a.invoke(c)):(y!==i&&a.destroy(),a.initialize()),r!==i?r:this;},e.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t);};}):function(t,n,i){return!!e.data(t,i[3]);}});}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var o,a=e(this),r=a.selector||"",s=new Date().getTime(),l=[],c=arguments[0],u=arguments[1],d="string"==typeof c,f=[].slice.call(arguments,1);return a.each(function(){var m,g,p,h,v,b,y,x,C,w,k,S,T,A,R,E,P,F,O=e(this),D=this,q=[],j=!1;F={initialize:function initialize(){F.get.settings(),d?(P===i&&F.instantiate(),F.invoke(c)):(P!==i&&P.invoke("destroy"),F.verbose("Initializing form validation",O,x),F.bindEvents(),F.set.defaults(),F.instantiate());},instantiate:function instantiate(){F.verbose("Storing instance of module",F),P=F,O.data(R,F);},destroy:function destroy(){F.verbose("Destroying previous module",P),F.removeEvents(),O.removeData(R);},refresh:function refresh(){F.verbose("Refreshing selector cache"),m=O.find(k.field),g=O.find(k.group),p=O.find(k.message),h=O.find(k.prompt),v=O.find(k.submit),b=O.find(k.clear),y=O.find(k.reset);},submit:function submit(){F.verbose("Submitting form",O),O.submit();},attachEvents:function attachEvents(t,n){n=n||"submit",e(t).on("click"+E,function(e){F[n](),e.preventDefault();});},bindEvents:function bindEvents(){F.verbose("Attaching form events"),O.on("submit"+E,F.validate.form).on("blur"+E,k.field,F.event.field.blur).on("click"+E,k.submit,F.submit).on("click"+E,k.reset,F.reset).on("click"+E,k.clear,F.clear),x.keyboardShortcuts&&O.on("keydown"+E,k.field,F.event.field.keydown),m.each(function(){var t=e(this),n=t.prop("type"),i=F.get.changeEvent(n,t);e(this).on(i+E,F.event.field.change);});},clear:function clear(){m.each(function(){var t=e(this),n=t.parent(),i=t.closest(g),o=i.find(k.prompt),a=t.data(w.defaultValue)||"",r=n.is(k.uiCheckbox),s=n.is(k.uiDropdown),l=i.hasClass(S.error);l&&(F.verbose("Resetting error on field",i),i.removeClass(S.error),o.remove()),s?(F.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):r?t.prop("checked",!1):(F.verbose("Resetting field value",t,a),t.val(""));});},reset:function reset(){m.each(function(){var t=e(this),n=t.parent(),o=t.closest(g),a=o.find(k.prompt),r=t.data(w.defaultValue),s=n.is(k.uiCheckbox),l=n.is(k.uiDropdown),c=o.hasClass(S.error);r!==i&&(c&&(F.verbose("Resetting error on field",o),o.removeClass(S.error),a.remove()),l?(F.verbose("Resetting dropdown value",n,r),n.dropdown("restore defaults")):s?(F.verbose("Resetting checkbox value",n,r),t.prop("checked",r)):(F.verbose("Resetting field value",t,r),t.val(r)));});},is:{bracketedRule:function bracketedRule(e){return e.type&&e.type.match(x.regExp.bracket);},empty:function empty(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):F.is.blank(e));},blank:function blank(t){return""===e.trim(t.val());},valid:function valid(){var t=!0;return F.verbose("Checking if form is valid"),e.each(C,function(e,n){F.validate.field(n,e)||(t=!1);}),t;}},removeEvents:function removeEvents(){O.off(E),m.off(E),v.off(E),m.off(E);},event:{field:{keydown:function keydown(t){var n=e(this),i=t.which,o=n.is(k.input),a=n.is(k.checkbox),r=n.closest(k.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(F.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!o||r||a||(j||(n.one("keyup"+E,F.event.field.keyup),F.submit(),F.debug("Enter pressed on input submitting form")),j=!0);},keyup:function keyup(){j=!1;},blur:function blur(t){var n=e(this),i=n.closest(g),o=F.get.validation(n);i.hasClass(S.error)?(F.debug("Revalidating field",n,o),o&&F.validate.field(o)):"blur"!=x.on&&"change"!=x.on||o&&F.validate.field(o);},change:function change(t){var n=e(this),i=n.closest(g),o=F.get.validation(n);("change"==x.on||i.hasClass(S.error)&&x.revalidate)&&(clearTimeout(F.timer),F.timer=setTimeout(function(){F.debug("Revalidating field",n,F.get.validation(n)),F.validate.field(o);},x.delay));}}},get:{ancillaryValue:function ancillaryValue(e){return!(!e.type||!e.value&&!F.is.bracketedRule(e))&&(e.value!==i?e.value:e.type.match(x.regExp.bracket)[1]+"");},ruleName:function ruleName(e){return F.is.bracketedRule(e)?e.type.replace(e.type.match(x.regExp.bracket)[0],""):e.type;},changeEvent:function changeEvent(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":F.get.inputEvent();},inputEvent:function inputEvent(){return n.createElement("input").oninput!==i?"input":n.createElement("input").onpropertychange!==i?"propertychange":"keyup";},prompt:function prompt(e,t){var n,i,o,a=F.get.ruleName(e),r=F.get.ancillaryValue(e),s=e.prompt||x.prompt[a]||x.text.unspecifiedRule,l=s.search("{value}")!==-1,c=s.search("{name}")!==-1;return(c||l)&&(i=F.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),c&&(n=i.closest(k.group).find("label").eq(0),o=1==n.length?n.text():i.prop("placeholder")||x.text.unspecifiedField,s=s.replace("{name}",o)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",r),e.prompt||F.verbose("Using default validation prompt for type",s,a),s;},settings:function settings(){if(e.isPlainObject(t)){var n,o=(0,_keys2.default)(t),a=o.length>0&&t[o[0]].identifier!==i&&t[o[0]].rules!==i;a?(x=e.extend(!0,{},e.fn.form.settings,u),C=e.extend({},e.fn.form.settings.defaults,t),F.error(x.error.oldSyntax,D),F.verbose("Extending settings from legacy parameters",C,x)):(t.fields&&(n=(0,_keys2.default)(t.fields),("string"==typeof t.fields[n[0]]||e.isArray(t.fields[n[0]]))&&e.each(t.fields,function(n,i){"string"==typeof i&&(i=[i]),t.fields[n]={rules:[]},e.each(i,function(e,i){t.fields[n].rules.push({type:i});});})),x=e.extend(!0,{},e.fn.form.settings,t),C=e.extend({},e.fn.form.settings.defaults,x.fields),F.verbose("Extending settings",C,x));}else x=e.fn.form.settings,C=e.fn.form.settings.defaults,F.verbose("Using default form validation",C,x);A=x.namespace,w=x.metadata,k=x.selector,S=x.className,T=x.error,R="module-"+A,E="."+A,P=O.data(R),F.refresh();},field:function field(t){return F.verbose("Finding field with identifier",t),m.filter("#"+t).length>0?m.filter("#"+t):m.filter('[name="'+t+'"]').length>0?m.filter('[name="'+t+'"]'):m.filter('[name="'+t+'[]"]').length>0?m.filter('[name="'+t+'[]"]'):m.filter("[data-"+w.validate+'="'+t+'"]').length>0?m.filter("[data-"+w.validate+'="'+t+'"]'):e("<input/>");},fields:function fields(t){var n=e();return e.each(t,function(e,t){n=n.add(F.get.field(t));}),n;},validation:function validation(t){var n,i;return!!C&&(e.each(C,function(e,o){i=o.identifier||e,F.get.field(i)[0]==t[0]&&(o.identifier=i,n=o);}),n||!1);},value:function value(e){var t,n=[];return n.push(e),t=F.get.values.call(D,n),t[e];},values:function values(t){var n=e.isArray(t)?F.get.fields(t):m,i={};return n.each(function(t,n){var o=e(n),a=(o.prop("type"),o.prop("name")),r=o.val(),s=o.is(k.checkbox),l=o.is(k.radio),c=a.indexOf("[]")!==-1,u=!!s&&o.is(":checked");a&&(c?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?u?i[a].push(r||!0):i[a].push(!1):i[a].push(r)):l?u&&(i[a]=r):s?u?i[a]=r||!0:i[a]=!1:i[a]=r);}),i;}},has:{field:function field(e){return F.verbose("Checking for existence of a field with identifier",e),"string"!=typeof e&&F.error(T.identifier,e),m.filter("#"+e).length>0||m.filter('[name="'+e+'"]').length>0||m.filter("[data-"+w.validate+'="'+e+'"]').length>0;}},add:{prompt:function prompt(t,n){var o=F.get.field(t),a=o.closest(g),r=a.children(k.prompt),s=0!==r.length;n="string"==typeof n?[n]:n,F.verbose("Adding field error state",t),a.addClass(S.error),x.inline&&(s||(r=x.templates.prompt(n),r.appendTo(a)),r.html(n[0]),s?F.verbose("Inline errors are disabled, no inline error added",t):x.transition&&e.fn.transition!==i&&O.transition("is supported")?(F.verbose("Displaying error with css transition",x.transition),r.transition(x.transition+" in",x.duration)):(F.verbose("Displaying error with fallback javascript animation"),r.fadeIn(x.duration)));},errors:function errors(e){F.debug("Adding form error messages",e),F.set.error(),p.html(x.templates.error(e));}},remove:{prompt:function prompt(t){var n=F.get.field(t),o=n.closest(g),a=o.children(k.prompt);o.removeClass(S.error),x.inline&&a.is(":visible")&&(F.verbose("Removing prompt for field",t),x.transition&&e.fn.transition!==i&&O.transition("is supported")?a.transition(x.transition+" out",x.duration,function(){a.remove();}):a.fadeOut(x.duration,function(){a.remove();}));}},set:{success:function success(){O.removeClass(S.error).addClass(S.success);},defaults:function defaults(){m.each(function(){var t=e(this),n=t.filter(k.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(w.defaultValue,i);});},error:function error(){O.removeClass(S.success).addClass(S.error);},value:function value(e,t){var n={};return n[e]=t,F.set.values.call(D,n);},values:function values(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,o=F.get.field(t),a=o.parent(),r=e.isArray(n),s=a.is(k.uiCheckbox),l=a.is(k.uiDropdown),c=o.is(k.radio)&&s,u=o.length>0;u&&(r&&s?(F.verbose("Selecting multiple",n,o),a.checkbox("uncheck"),e.each(n,function(e,t){i=o.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check");})):c?(F.verbose("Selecting radio value",n,o),o.filter('[value="'+n+'"]').parent(k.uiCheckbox).checkbox("check")):s?(F.verbose("Setting checkbox value",n,a),n===!0?a.checkbox("check"):a.checkbox("uncheck")):l?(F.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(F.verbose("Setting field value",n,o),o.val(n)));});}},validate:{form:function form(e,t){var n=F.get.values();if(j)return!1;if(q=[],F.is.valid()){if(F.debug("Form has no validation errors, submitting"),F.set.success(),t!==!0)return x.onSuccess.call(D,e,n);}else if(F.debug("Form has errors"),F.set.error(),x.inline||F.add.errors(q),O.data("moduleApi")!==i&&e.stopImmediatePropagation(),t!==!0)return x.onFailure.call(D,q,n);},field:function field(t,n){var o=t.identifier||n,a=F.get.field(o),r=!!t.depends&&F.get.field(t.depends),s=!0,l=[];return t.identifier||(F.debug("Using field name as identifier",o),t.identifier=o),a.prop("disabled")?(F.debug("Field is disabled. Skipping",o),s=!0):t.optional&&F.is.blank(a)?(F.debug("Field is optional and blank. Skipping",o),s=!0):t.depends&&F.is.empty(r)?(F.debug("Field depends on another value that is not present or empty. Skipping",r),s=!0):t.rules!==i&&e.each(t.rules,function(e,n){F.has.field(o)&&!F.validate.rule(t,n)&&(F.debug("Field is invalid",o,n.type),l.push(F.get.prompt(n,t)),s=!1);}),s?(F.remove.prompt(o,l),x.onValid.call(a),!0):(q=q.concat(l),F.add.prompt(o,l),x.onInvalid.call(a,l),!1);},rule:function rule(t,n){var o=F.get.field(t.identifier),a=(n.type,o.val()),r=F.get.ancillaryValue(n),s=F.get.ruleName(n),l=x.rules[s];return e.isFunction(l)?(a=a===i||""===a||null===a?"":e.trim(a+""),l.call(o,a,r)):void F.error(T.noRule,s);}},setting:function setting(t,n){if(e.isPlainObject(t))e.extend(!0,x,t);else{if(n===i)return x[t];x[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,F,t);else{if(n===i)return F[t];F[t]=n;}},debug:function debug(){!x.silent&&x.debug&&(x.performance?F.performance.log(arguments):(F.debug=Function.prototype.bind.call(console.info,console,x.name+":"),F.debug.apply(console,arguments)));},verbose:function verbose(){!x.silent&&x.verbose&&x.debug&&(x.performance?F.performance.log(arguments):(F.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),F.verbose.apply(console,arguments)));},error:function error(){x.silent||(F.error=Function.prototype.bind.call(console.error,console,x.name+":"),F.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;x.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:D,"Execution Time":n})),clearTimeout(F.performance.timer),F.performance.timer=setTimeout(F.performance.display,500);},display:function display(){var t=x.name+":",n=0;s=!1,clearTimeout(F.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,a){var r,s,l,c=P;return n=n||f,a=D||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s;}},F.initialize();}),o!==i?o:this;},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function onValid(){},onInvalid:function onInvalid(){},onSuccess:function onSuccess(){return!0;},onFailure:function onFailure(){return!1;},metadata:{defaultValue:"default",validate:"validate"},regExp:{bracket:/\[(.*)\]/i,decimal:/^\d*(\.)\d+/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function error(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>";}),n+="</ul>",e(n);},prompt:function prompt(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0]);}},rules:{empty:function empty(t){return!(t===i||""===t||e.isArray(t)&&0===t.length);},checked:function checked(){return e(this).filter(":checked").length>0;},email:function email(t){return e.fn.form.settings.regExp.email.test(t);},url:function url(t){return e.fn.form.settings.regExp.url.test(t);},regExp:function regExp(t,n){if(n instanceof RegExp)return t.match(n);var i,o=n.match(e.fn.form.settings.regExp.flags);return o&&(n=o.length>=2?o[1]:n,i=o.length>=3?o[2]:""),t.match(new RegExp(n,i));},integer:function integer(t,n){var o,a,r,s=e.fn.form.settings.regExp.integer;return n&&["",".."].indexOf(n)===-1&&(n.indexOf("..")==-1?s.test(n)&&(o=a=n-0):(r=n.split("..",2),s.test(r[0])&&(o=r[0]-0),s.test(r[1])&&(a=r[1]-0))),s.test(t)&&(o===i||t>=o)&&(a===i||t<=a);},decimal:function decimal(t){return e.fn.form.settings.regExp.decimal.test(t);},number:function number(t){return e.fn.form.settings.regExp.number.test(t);},is:function is(e,t){return t="string"==typeof t?t.toLowerCase():t,e="string"==typeof e?e.toLowerCase():e,e==t;},isExactly:function isExactly(e,t){return e==t;},not:function not(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t;},notExactly:function notExactly(e,t){return e!=t;},contains:function contains(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n,"i"))!==-1;},containsExactly:function containsExactly(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n))!==-1;},doesntContain:function doesntContain(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n,"i"))===-1;},doesntContainExactly:function doesntContainExactly(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n))===-1;},minLength:function minLength(e,t){return e!==i&&e.length>=t;},length:function length(e,t){return e!==i&&e.length>=t;},exactLength:function exactLength(e,t){return e!==i&&e.length==t;},maxLength:function maxLength(e,t){return e!==i&&e.length<=t;},match:function match(t,n){var o;e(this);return e('[data-validate="'+n+'"]').length>0?o=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?o=e("#"+n).val():e('[name="'+n+'"]').length>0?o=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(o=e('[name="'+n+'[]"]')),o!==i&&t.toString()==o.toString();},different:function different(t,n){var o;e(this);return e('[data-validate="'+n+'"]').length>0?o=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?o=e("#"+n).val():e('[name="'+n+'"]').length>0?o=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(o=e('[name="'+n+'[]"]')),o!==i&&t.toString()!==o.toString();},creditCard:function creditCard(t,n){var i,o,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},r={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(l&&(e.each(l,function(n,i){o=a[i],o&&(r={length:e.inArray(t.length,o.length)!==-1,pattern:t.search(o.pattern)!==-1},r.length&&r.pattern&&(s=!0));}),!s))return!1;if(i={number:e.inArray(t.length,a.unionPay.length)!==-1,pattern:t.search(a.unionPay.pattern)!==-1},i.number&&i.pattern)return!0;for(var c=t.length,u=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;c--;){f+=d[u][parseInt(t.charAt(c),10)],u^=1;}return f%10===0&&f>0;}},minCount:function minCount(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t);},exactCount:function exactCount(e,t){return 0==t?""===e:1==t?""!==e&&e.search(",")===-1:e.split(",").length==t;},maxCount:function maxCount(e,t){return 0!=t&&(1==t?e.search(",")===-1:e.split(",").length<=t);}}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.accordion=function(n){var o,a=e(this),r=new Date().getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);};return a.each(function(){var d,f,m=e.isPlainObject(n)?e.extend(!0,{},e.fn.accordion.settings,n):e.extend({},e.fn.accordion.settings),g=m.className,p=m.namespace,h=m.selector,v=m.error,b="."+p,y="module-"+p,x=a.selector||"",C=e(this),w=C.find(h.title),k=C.find(h.content),S=this,T=C.data(y);f={initialize:function initialize(){f.debug("Initializing",C),f.bind.events(),m.observeChanges&&f.observeChanges(),f.instantiate();},instantiate:function instantiate(){T=f,C.data(y,f);},destroy:function destroy(){f.debug("Destroying previous instance",C),C.off(b).removeData(y);},refresh:function refresh(){w=C.find(h.title),k=C.find(h.content);},observeChanges:function observeChanges(){"MutationObserver"in t&&(d=new MutationObserver(function(e){f.debug("DOM tree modified, updating selector cache"),f.refresh();}),d.observe(S,{childList:!0,subtree:!0}),f.debug("Setting up mutation observer",d));},bind:{events:function events(){f.debug("Binding delegated events"),C.on(m.on+b,h.trigger,f.event.click);}},event:{click:function click(){f.toggle.call(this);}},toggle:function toggle(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=r&&!a,l=!r&&a;f.debug("Toggling visibility of content",n),s||l?m.collapsible?f.close.call(n):f.debug("Cannot close accordion content collapsing is disabled"):f.open.call(n);},open:function open(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=r||a;return s?void f.debug("Accordion already open, skipping",o):(f.debug("Opening accordion content",n),m.onOpening.call(o),m.exclusive&&f.closeOthers.call(n),n.addClass(g.active),o.stop(!0,!0).addClass(g.animating),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?o.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):o.children().stop(!0,!0).animate({opacity:1},m.duration,f.resetOpacity)),void o.slideDown(m.duration,m.easing,function(){o.removeClass(g.animating).addClass(g.active),f.reset.display.call(this),m.onOpen.call(this),m.onChange.call(this);}));},close:function close(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=!r&&a,l=r&&a;!r&&!s||l||(f.debug("Closing accordion content",o),m.onClosing.call(o),n.removeClass(g.active),o.stop(!0,!0).addClass(g.animating),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?o.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):o.children().stop(!0,!0).animate({opacity:0},m.duration,f.resetOpacity)),o.slideUp(m.duration,m.easing,function(){o.removeClass(g.animating).removeClass(g.active),f.reset.display.call(this),m.onClose.call(this),m.onChange.call(this);}));},closeOthers:function closeOthers(t){var n,o,a,r=t!==i?w.eq(t):e(this).closest(h.title),s=r.parents(h.content).prev(h.title),l=r.closest(h.accordion),c=h.title+"."+g.active+":visible",u=h.content+"."+g.active+":visible";m.closeNested?(n=l.find(c).not(s),a=n.next(k)):(n=l.find(c).not(s),o=l.find(u).find(c).not(s),n=n.not(o),a=n.next(k)),n.length>0&&(f.debug("Exclusive enabled, closing other content",n),n.removeClass(g.active),a.removeClass(g.animating).stop(!0,!0),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?a.children().transition({animation:"fade out",useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):a.children().stop(!0,!0).animate({opacity:0},m.duration,f.resetOpacity)),a.slideUp(m.duration,m.easing,function(){e(this).removeClass(g.active),f.reset.display.call(this);}));},reset:{display:function display(){f.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style");},opacity:function opacity(){f.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style");}},setting:function setting(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n;}},internal:function internal(t,n){return f.debug("Changing internal",t,n),n===i?f[t]:void(e.isPlainObject(t)?e.extend(!0,f,t):f[t]=n);},debug:function debug(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)));},verbose:function verbose(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)));},error:function error(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;m.performance&&(t=new Date().getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500);},display:function display(){var t=m.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",x&&(t+=" '"+x+"'"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),s=[];}},invoke:function invoke(t,n,a){var r,s,l,c=T;return n=n||u,a=S||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(v.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s;}},c?(T===i&&f.initialize(),f.invoke(l)):(T!==i&&T.invoke("destroy"),f.initialize());}),o!==i?o:this;},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function onOpening(){},onOpen:function onOpen(){},onClosing:function onClosing(){},onClose:function onClose(){},onChange:function onChange(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function easeOutQuad(e,t,n,i,o){return-i*(t/=o)*(t-2)+n;}});}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.checkbox=function(o){var a,r=e(this),s=r.selector||"",l=new Date().getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return r.each(function(){var r,m,g=e.extend(!0,{},e.fn.checkbox.settings,o),p=g.className,h=g.namespace,v=g.selector,b=g.error,y="."+h,x="module-"+h,C=e(this),w=e(this).children(v.label),k=e(this).children(v.input),S=k[0],T=!1,A=!1,R=C.data(x),E=this;m={initialize:function initialize(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup();},instantiate:function instantiate(){m.verbose("Storing instance of module",m),R=m,C.data(x,m);},destroy:function destroy(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),C.removeData(x);},fix:{reference:function reference(){C.is(v.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),C=C.closest(v.checkbox),m.refresh());}},setup:function setup(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad();},refresh:function refresh(){w=C.children(v.label),k=C.children(v.input),S=k[0];},hide:{input:function input(){m.verbose("Modifying <input> z-index to be unselectable"),k.addClass(p.hidden);}},show:{input:function input(){m.verbose("Modifying <input> z-index to be selectable"),k.removeClass(p.hidden);}},observeChanges:function observeChanges(){"MutationObserver"in t&&(r=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh();}),r.observe(E,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",r));},attachEvents:function attachEvents(t,n){var i=e(t);n=e.isFunction(m[n])?m[n]:m.toggle,i.length>0?(m.debug("Attaching checkbox events to element",t,n),i.on("click"+y,n)):m.error(b.notFound);},event:{click:function click(t){var n=e(t.target);return n.is(v.input)?void m.verbose("Using default check action on initialized checkbox"):n.is(v.link)?void m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),k.focus(),void t.preventDefault());},keydown:function keydown(e){var t=e.which,n={enter:13,space:32,escape:27};t==n.escape?(m.verbose("Escape key pressed blurring field"),k.blur(),A=!0):e.ctrlKey||t!=n.space&&t!=n.enter?A=!1:(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),A=!0);},keyup:function keyup(e){A&&e.preventDefault();}},check:function check(){m.should.allowCheck()&&(m.debug("Checking checkbox",k),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(S),g.onChange.call(S)));},uncheck:function uncheck(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(S),g.onChange.call(S)));},indeterminate:function indeterminate(){return m.should.allowIndeterminate()?void m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),void(m.should.ignoreCallbacks()||(g.onIndeterminate.call(S),g.onChange.call(S))));},determinate:function determinate(){return m.should.allowDeterminate()?void m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),void(m.should.ignoreCallbacks()||(g.onDeterminate.call(S),g.onChange.call(S))));},enable:function enable(){return m.is.enabled()?void m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),g.onEnable.call(S),void g.onEnabled.call(S));},disable:function disable(){return m.is.disabled()?void m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),g.onDisable.call(S),void g.onDisabled.call(S));},get:{radios:function radios(){var t=m.get.name();return e('input[name="'+t+'"]').closest(v.checkbox);},otherRadios:function otherRadios(){return m.get.radios().not(C);},name:function name(){return k.attr("name");}},is:{initialLoad:function initialLoad(){return T;},radio:function radio(){return k.hasClass(p.radio)||"radio"==k.attr("type");},indeterminate:function indeterminate(){return k.prop("indeterminate")!==i&&k.prop("indeterminate");},checked:function checked(){return k.prop("checked")!==i&&k.prop("checked");},disabled:function disabled(){return k.prop("disabled")!==i&&k.prop("disabled");},enabled:function enabled(){return!m.is.disabled();},determinate:function determinate(){return!m.is.indeterminate();},unchecked:function unchecked(){return!m.is.checked();}},should:{allowCheck:function allowCheck(){return m.is.determinate()&&m.is.checked()&&!m.should.forceCallbacks()?(m.debug("Should not allow check, checkbox is already checked"),!1):g.beforeChecked.apply(S)!==!1||(m.debug("Should not allow check, beforeChecked cancelled"),!1);},allowUncheck:function allowUncheck(){return m.is.determinate()&&m.is.unchecked()&&!m.should.forceCallbacks()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):g.beforeUnchecked.apply(S)!==!1||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1);},allowIndeterminate:function allowIndeterminate(){return m.is.indeterminate()&&!m.should.forceCallbacks()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):g.beforeIndeterminate.apply(S)!==!1||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1);},allowDeterminate:function allowDeterminate(){return m.is.determinate()&&!m.should.forceCallbacks()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):g.beforeDeterminate.apply(S)!==!1||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1);},forceCallbacks:function forceCallbacks(){return m.is.initialLoad()&&g.fireOnInit;},ignoreCallbacks:function ignoreCallbacks(){return T&&!g.fireOnInit;}},can:{change:function change(){return!(C.hasClass(p.disabled)||C.hasClass(p.readOnly)||k.prop("disabled")||k.prop("readonly"));},uncheck:function uncheck(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio();}},set:{initialLoad:function initialLoad(){T=!0;},checked:function checked(){return m.verbose("Setting class to checked"),C.removeClass(p.indeterminate).addClass(p.checked),m.is.radio()&&m.uncheckOthers(),!m.is.indeterminate()&&m.is.checked()?void m.debug("Input is already checked, skipping input property change"):(m.verbose("Setting state to checked",S),k.prop("indeterminate",!1).prop("checked",!0),void m.trigger.change());},unchecked:function unchecked(){return m.verbose("Removing checked class"),C.removeClass(p.indeterminate).removeClass(p.checked),!m.is.indeterminate()&&m.is.unchecked()?void m.debug("Input is already unchecked"):(m.debug("Setting state to unchecked"),k.prop("indeterminate",!1).prop("checked",!1),void m.trigger.change());},indeterminate:function indeterminate(){return m.verbose("Setting class to indeterminate"),C.addClass(p.indeterminate),m.is.indeterminate()?void m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),k.prop("indeterminate",!0),void m.trigger.change());},determinate:function determinate(){return m.verbose("Removing indeterminate class"),C.removeClass(p.indeterminate),m.is.determinate()?void m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),void k.prop("indeterminate",!1));},disabled:function disabled(){return m.verbose("Setting class to disabled"),C.addClass(p.disabled),m.is.disabled()?void m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),k.prop("disabled","disabled"),void m.trigger.change());},enabled:function enabled(){return m.verbose("Removing disabled class"),C.removeClass(p.disabled),m.is.enabled()?void m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),k.prop("disabled",!1),void m.trigger.change());},tabbable:function tabbable(){m.verbose("Adding tabindex to checkbox"),k.attr("tabindex")===i&&k.attr("tabindex",0);}},remove:{initialLoad:function initialLoad(){T=!1;}},trigger:{change:function change(){var e=n.createEvent("HTMLEvents"),t=k[0];t&&(m.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e));}},create:{label:function label(){k.prevAll(v.label).length>0?(k.prev(v.label).detach().insertAfter(k),m.debug("Moving existing label",w)):m.has.label()||(w=e("<label>").insertAfter(k),m.debug("Creating label",w));}},has:{label:function label(){return w.length>0;}},bind:{events:function events(){m.verbose("Attaching checkbox events"),C.on("click"+y,m.event.click).on("keydown"+y,v.input,m.event.keydown).on("keyup"+y,v.input,m.event.keyup);}},unbind:{events:function events(){m.debug("Removing events"),C.off(y);}},uncheckOthers:function uncheckOthers(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(p.checked);},toggle:function toggle(){return m.can.change()?void(m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck())):void(m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle"));},setting:function setting(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];e.isPlainObject(g[t])?e.extend(!0,g[t],n):g[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n;}},debug:function debug(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)));},verbose:function verbose(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)));},error:function error(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;g.performance&&(t=new Date().getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500);},display:function display(){var t=g.name+":",n=0;l=!1,clearTimeout(m.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),c=[];}},invoke:function invoke(t,n,o){var r,s,l,c=R;return n=n||f,o=E||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(m.error(b.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},d?(R===i&&m.initialize(),m.invoke(u)):(R!==i&&R.invoke("destroy"),m.initialize());}),a!==i?a:this;},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function onChange(){},beforeChecked:function beforeChecked(){},beforeUnchecked:function beforeUnchecked(){},beforeDeterminate:function beforeDeterminate(){},beforeIndeterminate:function beforeIndeterminate(){},onChecked:function onChecked(){},onUnchecked:function onUnchecked(){},onDeterminate:function onDeterminate(){},onIndeterminate:function onIndeterminate(){},onEnable:function onEnable(){},onDisable:function onDisable(){},onEnabled:function onEnabled(){},onDisabled:function onDisabled(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dimmer=function(t){var o,a=e(this),r=new Date().getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return a.each(function(){var d,f,m,g=e.isPlainObject(t)?e.extend(!0,{},e.fn.dimmer.settings,t):e.extend({},e.fn.dimmer.settings),p=g.selector,h=g.namespace,v=g.className,b=g.error,y="."+h,x="module-"+h,C=a.selector||"",w="ontouchstart"in n.documentElement?"touchstart":"click",k=e(this),S=this,T=k.data(x);m={preinitialize:function preinitialize(){m.is.dimmer()?(f=k.parent(),d=k):(f=k,d=m.has.dimmer()?g.dimmerName?f.find(p.dimmer).filter("."+g.dimmerName):f.find(p.dimmer):m.create(),m.set.variation());},initialize:function initialize(){m.debug("Initializing dimmer",g),m.bind.events(),m.set.dimmable(),m.instantiate();},instantiate:function instantiate(){m.verbose("Storing instance of module",m),T=m,k.data(x,T);},destroy:function destroy(){m.verbose("Destroying previous module",d),m.unbind.events(),m.remove.variation(),f.off(y);},bind:{events:function events(){"hover"==g.on?f.on("mouseenter"+y,m.show).on("mouseleave"+y,m.hide):"click"==g.on&&f.on(w+y,m.toggle),m.is.page()&&(m.debug("Setting as a page dimmer",f),m.set.pageDimmer()),m.is.closable()&&(m.verbose("Adding dimmer close event",d),f.on(w+y,p.dimmer,m.event.click));}},unbind:{events:function events(){k.removeData(x),f.off(y);}},event:{click:function click(t){m.verbose("Determining if event occured on dimmer",t),(0===d.find(t.target).length||e(t.target).is(p.content))&&(m.hide(),t.stopImmediatePropagation());}},addContent:function addContent(t){var n=e(t);m.debug("Add content to dimmer",n),n.parent()[0]!==d[0]&&n.detach().appendTo(d);},create:function create(){var t=e(g.template.dimmer());return g.dimmerName&&(m.debug("Creating named dimmer",g.dimmerName),t.addClass(g.dimmerName)),t.appendTo(f),t;},show:function show(t){t=e.isFunction(t)?t:function(){},m.debug("Showing dimmer",d,g),m.is.dimmed()&&!m.is.animating()||!m.is.enabled()?m.debug("Dimmer is already shown or disabled"):(m.animate.show(t),g.onShow.call(S),g.onChange.call(S));},hide:function hide(t){t=e.isFunction(t)?t:function(){},m.is.dimmed()||m.is.animating()?(m.debug("Hiding dimmer",d),m.animate.hide(t),g.onHide.call(S),g.onChange.call(S)):m.debug("Dimmer is not visible");},toggle:function toggle(){m.verbose("Toggling dimmer visibility",d),m.is.dimmed()?m.hide():m.show();},animate:{show:function show(t){t=e.isFunction(t)?t:function(){},g.useCSS&&e.fn.transition!==i&&d.transition("is supported")?("auto"!==g.opacity&&m.set.opacity(),d.transition({animation:g.transition+" in",queue:!1,duration:m.get.duration(),useFailSafe:!0,onStart:function onStart(){m.set.dimmed();},onComplete:function onComplete(){m.set.active(),t();}})):(m.verbose("Showing dimmer animation with javascript"),m.set.dimmed(),"auto"==g.opacity&&(g.opacity=.8),d.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(m.get.duration(),g.opacity,function(){d.removeAttr("style"),m.set.active(),t();}));},hide:function hide(t){t=e.isFunction(t)?t:function(){},g.useCSS&&e.fn.transition!==i&&d.transition("is supported")?(m.verbose("Hiding dimmer with css"),d.transition({animation:g.transition+" out",queue:!1,duration:m.get.duration(),useFailSafe:!0,onStart:function onStart(){m.remove.dimmed();},onComplete:function onComplete(){m.remove.active(),t();}})):(m.verbose("Hiding dimmer with javascript"),m.remove.dimmed(),d.stop().fadeOut(m.get.duration(),function(){m.remove.active(),d.removeAttr("style"),t();}));}},get:{dimmer:function dimmer(){return d;},duration:function duration(){return"object"==(0,_typeof3.default)(g.duration)?m.is.active()?g.duration.hide:g.duration.show:g.duration;}},has:{dimmer:function dimmer(){return g.dimmerName?k.find(p.dimmer).filter("."+g.dimmerName).length>0:k.find(p.dimmer).length>0;}},is:{active:function active(){return d.hasClass(v.active);},animating:function animating(){return d.is(":animated")||d.hasClass(v.animating);},closable:function closable(){return"auto"==g.closable?"hover"!=g.on:g.closable;},dimmer:function dimmer(){return k.hasClass(v.dimmer);},dimmable:function dimmable(){return k.hasClass(v.dimmable);},dimmed:function dimmed(){return f.hasClass(v.dimmed);},disabled:function disabled(){return f.hasClass(v.disabled);},enabled:function enabled(){return!m.is.disabled();},page:function page(){return f.is("body");},pageDimmer:function pageDimmer(){return d.hasClass(v.pageDimmer);}},can:{show:function show(){return!d.hasClass(v.disabled);}},set:{opacity:function opacity(e){var t=d.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===g.opacity?0:g.opacity||e,i||o?(n[3]=e+")",t=n.join(",")):t="rgba(0, 0, 0, "+e+")",m.debug("Setting opacity to",e),d.css("background-color",t);},active:function active(){d.addClass(v.active);},dimmable:function dimmable(){f.addClass(v.dimmable);},dimmed:function dimmed(){f.addClass(v.dimmed);},pageDimmer:function pageDimmer(){d.addClass(v.pageDimmer);},disabled:function disabled(){d.addClass(v.disabled);},variation:function variation(e){e=e||g.variation,e&&d.addClass(e);}},remove:{active:function active(){d.removeClass(v.active);},dimmed:function dimmed(){f.removeClass(v.dimmed);},disabled:function disabled(){d.removeClass(v.disabled);},variation:function variation(e){e=e||g.variation,e&&d.removeClass(e);}},setting:function setting(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];e.isPlainObject(g[t])?e.extend(!0,g[t],n):g[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n;}},debug:function debug(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)));},verbose:function verbose(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)));},error:function error(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;g.performance&&(t=new Date().getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500);},display:function display(){var t=g.name+":",n=0;r=!1,clearTimeout(m.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",C&&(t+=" '"+C+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),s=[];}},invoke:function invoke(t,n,a){var r,s,l,c=T;return n=n||u,a=S||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(m.error(b.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s;}},m.preinitialize(),c?(T===i&&m.initialize(),m.invoke(l)):(T!==i&&T.invoke("destroy"),m.initialize());}),o!==i?o:this;},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function onChange(){},onShow:function onShow(){},onHide:function onHide(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function dimmer(){return e("<div />").attr("class","ui dimmer");}}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(o){var a,r=e(this),s=e(n),l=r.selector||"",c="ontouchstart"in n.documentElement,u=new Date().getTime(),d=[],f=arguments[0],m="string"==typeof f,g=[].slice.call(arguments,1);return r.each(function(p){var h,v,b,y,x,C,w,k,S=e.isPlainObject(o)?e.extend(!0,{},e.fn.dropdown.settings,o):e.extend({},e.fn.dropdown.settings),T=S.className,A=S.message,R=S.fields,E=S.keys,P=S.metadata,F=S.namespace,O=S.regExp,D=S.selector,q=S.error,j=S.templates,z="."+F,M="module-"+F,I=e(this),L=e(S.context),N=I.find(D.text),V=I.find(D.search),H=I.find(D.sizer),U=I.find(D.input),W=I.find(D.icon),B=I.prev().find(D.text).length>0?I.prev().find(D.text):I.prev(),Q=I.children(D.menu),X=Q.find(D.item),$=!1,Y=!1,K=!1,Z=this,J=I.data(M);k={initialize:function initialize(){k.debug("Initializing dropdown",S),k.is.alreadySetup()?k.setup.reference():(k.setup.layout(),k.refreshData(),k.save.defaults(),k.restore.selected(),k.create.id(),k.bind.events(),k.observeChanges(),k.instantiate());},instantiate:function instantiate(){k.verbose("Storing instance of dropdown",k),J=k,I.data(M,k);},destroy:function destroy(){k.verbose("Destroying previous dropdown",I),k.remove.tabbable(),I.off(z).removeData(M),Q.off(z),s.off(y),k.disconnect.menuObserver(),k.disconnect.selectObserver();},observeChanges:function observeChanges(){"MutationObserver"in t&&(C=new MutationObserver(k.event.select.mutation),w=new MutationObserver(k.event.menu.mutation),k.debug("Setting up mutation observer",C,w),k.observe.select(),k.observe.menu());},disconnect:{menuObserver:function menuObserver(){w&&w.disconnect();},selectObserver:function selectObserver(){C&&C.disconnect();}},observe:{select:function select(){k.has.input()&&C.observe(U[0],{childList:!0,subtree:!0});},menu:function menu(){k.has.menu()&&w.observe(Q[0],{childList:!0,subtree:!0});}},create:{id:function id(){x=(Math.random().toString(16)+"000000000").substr(2,8),y="."+x,k.verbose("Creating unique id for element",x);},userChoice:function userChoice(t){var n,o,a;return!!(t=t||k.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,r){k.get.item(r)===!1&&(a=S.templates.addition(k.add.variables(A.addResult,r)),o=e("<div />").html(a).attr("data-"+P.value,r).attr("data-"+P.text,r).addClass(T.addition).addClass(T.item),S.hideAdditions&&o.addClass(T.hidden),n=n===i?o:n.add(o),k.verbose("Creating user choices for value",r,o));}),n);},userLabels:function userLabels(t){var n=k.get.userValues();n&&(k.debug("Adding user labels",n),e.each(n,function(e,t){k.verbose("Adding custom user value"),k.add.label(t,t);}));},menu:function menu(){Q=e("<div />").addClass(T.menu).appendTo(I);},sizer:function sizer(){H=e("<span />").addClass(T.sizer).insertAfter(V);}},search:function search(e){e=e!==i?e:k.get.query(),k.verbose("Searching for query",e),k.has.minCharacters(e)?k.filter(e):k.hide();},select:{firstUnfiltered:function firstUnfiltered(){k.verbose("Selecting first non-filtered element"),k.remove.selectedItem(),X.not(D.unselectable).not(D.addition+D.hidden).eq(0).addClass(T.selected);},nextAvailable:function nextAvailable(e){e=e.eq(0);var t=e.nextAll(D.item).not(D.unselectable).eq(0),n=e.prevAll(D.item).not(D.unselectable).eq(0),i=t.length>0;i?(k.verbose("Moving selection to",t),t.addClass(T.selected)):(k.verbose("Moving selection to",n),n.addClass(T.selected));}},setup:{api:function api(){var e={debug:S.debug,urlData:{value:k.get.value(),query:k.get.query()},on:!1};k.verbose("First request, initializing API"),I.api(e);},layout:function layout(){I.is("select")&&(k.setup.select(),k.setup.returnedObject()),k.has.menu()||k.create.menu(),k.is.search()&&!k.has.search()&&(k.verbose("Adding search input"),V=e("<input />").addClass(T.search).prop("autocomplete","off").insertBefore(N)),k.is.multiple()&&k.is.searchSelection()&&!k.has.sizer()&&k.create.sizer(),S.allowTab&&k.set.tabbable();},select:function select(){var t=k.get.selectValues();k.debug("Dropdown initialized on a select",t),I.is("select")&&(U=I),U.parent(D.dropdown).length>0?(k.debug("UI dropdown already exists. Creating dropdown menu only"),I=U.closest(D.dropdown),k.has.menu()||k.create.menu(),Q=I.children(D.menu),k.setup.menu(t)):(k.debug("Creating entire dropdown from select"),I=e("<div />").attr("class",U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(U),U.hasClass(T.multiple)&&U.prop("multiple")===!1&&(k.error(q.missingMultiple),U.prop("multiple",!0)),U.is("[multiple]")&&k.set.multiple(),U.prop("disabled")&&(k.debug("Disabling dropdown"),I.addClass(T.disabled)),U.removeAttr("class").detach().prependTo(I)),k.refresh();},menu:function menu(e){Q.html(j.menu(e,R)),X=Q.find(D.item);},reference:function reference(){k.debug("Dropdown behavior was called on select, replacing with closest dropdown"),I=I.parent(D.dropdown),k.refresh(),k.setup.returnedObject(),m&&(J=k,k.invoke(f));},returnedObject:function returnedObject(){var e=r.slice(0,p),t=r.slice(p+1);r=e.add(I).add(t);}},refresh:function refresh(){k.refreshSelectors(),k.refreshData();},refreshItems:function refreshItems(){X=Q.find(D.item);},refreshSelectors:function refreshSelectors(){k.verbose("Refreshing selector cache"),N=I.find(D.text),V=I.find(D.search),U=I.find(D.input),W=I.find(D.icon),B=I.prev().find(D.text).length>0?I.prev().find(D.text):I.prev(),Q=I.children(D.menu),X=Q.find(D.item);},refreshData:function refreshData(){k.verbose("Refreshing cached metadata"),X.removeData(P.text).removeData(P.value);},clearData:function clearData(){k.verbose("Clearing metadata"),X.removeData(P.text).removeData(P.value),I.removeData(P.defaultText).removeData(P.defaultValue).removeData(P.placeholderText);},toggle:function toggle(){k.verbose("Toggling menu visibility"),k.is.active()?k.hide():k.show();},show:function show(t){if(t=e.isFunction(t)?t:function(){},k.can.show()&&!k.is.active()){if(k.debug("Showing dropdown"),!k.has.message()||k.has.maxSelections()||k.has.allResultsFiltered()||k.remove.message(),k.is.allFiltered())return!0;S.onShow.call(Z)!==!1&&k.animate.show(function(){k.can.click()&&k.bind.intent(),k.has.menuSearch()&&k.focusSearch(),k.set.visible(),t.call(Z);});}},hide:function hide(t){t=e.isFunction(t)?t:function(){},k.is.active()&&(k.debug("Hiding dropdown"),S.onHide.call(Z)!==!1&&k.animate.hide(function(){k.remove.visible(),t.call(Z);}));},hideOthers:function hideOthers(){k.verbose("Finding other dropdowns to hide"),r.not(I).has(D.menu+"."+T.visible).dropdown("hide");},hideMenu:function hideMenu(){k.verbose("Hiding menu  instantaneously"),k.remove.active(),k.remove.visible(),Q.transition("hide");},hideSubMenus:function hideSubMenus(){var e=Q.children(D.item).find(D.menu);k.verbose("Hiding sub menus",e),e.transition("hide");},bind:{events:function events(){c&&k.bind.touchEvents(),k.bind.keyboardEvents(),k.bind.inputEvents(),k.bind.mouseEvents();},touchEvents:function touchEvents(){k.debug("Touch device detected binding additional touch events"),k.is.searchSelection()||k.is.single()&&I.on("touchstart"+z,k.event.test.toggle),Q.on("touchstart"+z,D.item,k.event.item.mouseenter);},keyboardEvents:function keyboardEvents(){k.verbose("Binding keyboard events"),I.on("keydown"+z,k.event.keydown),k.has.search()&&I.on(k.get.inputEvent()+z,D.search,k.event.input),k.is.multiple()&&s.on("keydown"+y,k.event.document.keydown);},inputEvents:function inputEvents(){k.verbose("Binding input change events"),I.on("change"+z,D.input,k.event.change);},mouseEvents:function mouseEvents(){k.verbose("Binding mouse events"),k.is.multiple()&&I.on("click"+z,D.label,k.event.label.click).on("click"+z,D.remove,k.event.remove.click),k.is.searchSelection()?(I.on("mousedown"+z,k.event.mousedown).on("mouseup"+z,k.event.mouseup).on("mousedown"+z,D.menu,k.event.menu.mousedown).on("mouseup"+z,D.menu,k.event.menu.mouseup).on("click"+z,D.icon,k.event.icon.click).on("focus"+z,D.search,k.event.search.focus).on("click"+z,D.search,k.event.search.focus).on("blur"+z,D.search,k.event.search.blur).on("click"+z,D.text,k.event.text.focus),k.is.multiple()&&I.on("click"+z,k.event.click)):("click"==S.on?I.on("click"+z,D.icon,k.event.icon.click).on("click"+z,k.event.test.toggle):"hover"==S.on?I.on("mouseenter"+z,k.delay.show).on("mouseleave"+z,k.delay.hide):I.on(S.on+z,k.toggle),I.on("mousedown"+z,k.event.mousedown).on("mouseup"+z,k.event.mouseup).on("focus"+z,k.event.focus).on("blur"+z,k.event.blur)),Q.on("mouseenter"+z,D.item,k.event.item.mouseenter).on("mouseleave"+z,D.item,k.event.item.mouseleave).on("click"+z,D.item,k.event.item.click);},intent:function intent(){k.verbose("Binding hide intent event to document"),c&&s.on("touchstart"+y,k.event.test.touch).on("touchmove"+y,k.event.test.touch),s.on("click"+y,k.event.test.hide);}},unbind:{intent:function intent(){k.verbose("Removing hide intent event from document"),c&&s.off("touchstart"+y).off("touchmove"+y),s.off("click"+y);}},filter:function filter(e){var t=e!==i?e:k.get.query(),n=function n(){k.is.multiple()&&k.filterActive(),k.select.firstUnfiltered(),k.has.allResultsFiltered()?S.onNoResults.call(Z,t)?S.allowAdditions?S.hideAdditions&&(k.verbose("User addition with no menu, setting empty style"),k.set.empty(),k.hideMenu()):(k.verbose("All items filtered, showing message",t),k.add.message(A.noResults)):(k.verbose("All items filtered, hiding dropdown",t),k.hideMenu()):(k.remove.empty(),k.remove.message()),S.allowAdditions&&k.add.userSuggestion(e),k.is.searchSelection()&&k.can.show()&&k.is.focusedOnSearch()&&k.show();};S.useLabels&&k.has.maxSelections()||(S.apiSettings?k.can.useAPI()?k.queryRemote(t,function(){n();}):k.error(q.noAPI):(k.filterItems(t),n()));},queryRemote:function queryRemote(t,n){var i={errorDuration:!1,cache:"local",throttle:S.throttle,urlData:{query:t},onError:function onError(){k.add.message(A.serverError),n();},onFailure:function onFailure(){k.add.message(A.serverError),n();},onSuccess:function onSuccess(e){k.remove.message(),k.setup.menu({values:e[R.remoteValues]}),n();}};I.api("get request")||k.setup.api(),i=e.extend(!0,{},i,S.apiSettings),I.api("setting",i).api("query");},filterItems:function filterItems(t){var n=t!==i?t:k.get.query(),o=null,a=k.escape.regExp(n),r=new RegExp("^"+a,"igm");k.has.query()&&(o=[],k.verbose("Searching for matching values",n),X.each(function(){var t,i,a=e(this);if("both"==S.match||"text"==S.match){if(t=String(k.get.choiceText(a,!1)),t.search(r)!==-1)return o.push(this),!0;if("exact"===S.fullTextSearch&&k.exactSearch(n,t))return o.push(this),!0;if(S.fullTextSearch===!0&&k.fuzzySearch(n,t))return o.push(this),!0;}if("both"==S.match||"value"==S.match){if(i=String(k.get.choiceValue(a,t)),i.search(r)!==-1)return o.push(this),!0;if(S.fullTextSearch&&k.fuzzySearch(n,i))return o.push(this),!0;}})),k.debug("Showing only matched items",n),k.remove.filteredItem(),o&&X.not(o).addClass(T.filtered);},fuzzySearch:function fuzzySearch(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;){if(t.charCodeAt(a++)===r)continue e;}return!1;}return!0;},exactSearch:function exactSearch(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1;},filterActive:function filterActive(){S.useLabels&&X.filter("."+T.active).addClass(T.filtered);},focusSearch:function focusSearch(e){k.has.search()&&!k.is.focusedOnSearch()&&(e?(I.off("focus"+z,D.search),V.focus(),I.on("focus"+z,D.search,k.event.search.focus)):V.focus());},forceSelection:function forceSelection(){var e=X.not(T.filtered).filter("."+T.selected).eq(0),t=X.not(T.filtered).filter("."+T.active).eq(0),n=e.length>0?e:t,i=n.length>0;return i?(k.debug("Forcing partial selection to selected item",n),void k.event.item.click.call(n,{},!0)):void(S.allowAdditions?(k.set.selected(k.get.query()),k.remove.searchTerm()):k.remove.searchTerm());},event:{change:function change(){K||(k.debug("Input changed, updating selection"),k.set.selected());},focus:function focus(){S.showOnFocus&&!$&&k.is.hidden()&&!v&&k.show();},blur:function blur(e){v=n.activeElement===this,$||v||(k.remove.activeLabel(),k.hide());},mousedown:function mousedown(){k.is.searchSelection()?b=!0:$=!0;},mouseup:function mouseup(){k.is.searchSelection()?b=!1:$=!1;},click:function click(t){var n=e(t.target);n.is(I)&&(k.is.focusedOnSearch()?k.show():k.focusSearch());},search:{focus:function focus(){$=!0,k.is.multiple()&&k.remove.activeLabel(),S.showOnFocus&&k.search();},blur:function blur(e){v=n.activeElement===this,b||Y||v||(S.forceSelection&&k.forceSelection(),k.hide()),b=!1;}},icon:{click:function click(e){k.toggle();}},text:{focus:function focus(e){$=!0,k.focusSearch();}},input:function input(e){(k.is.multiple()||k.is.searchSelection())&&k.set.filtered(),clearTimeout(k.timer),k.timer=setTimeout(k.search,S.delay.search);},label:{click:function click(t){var n=e(this),i=I.find(D.label),o=i.filter("."+T.active),a=n.nextAll("."+T.active),r=n.prevAll("."+T.active),s=a.length>0?n.nextUntil(a).add(o).add(n):n.prevUntil(r).add(o).add(n);t.shiftKey?(o.removeClass(T.active),s.addClass(T.active)):t.ctrlKey?n.toggleClass(T.active):(o.removeClass(T.active),n.addClass(T.active)),S.onLabelSelect.apply(this,i.filter("."+T.active));}},remove:{click:function click(){var t=e(this).parent();t.hasClass(T.active)?k.remove.activeLabels():k.remove.activeLabels(t);}},test:{toggle:function toggle(e){var t=k.is.multiple()?k.show:k.toggle;k.is.bubbledLabelClick(e)||k.is.bubbledIconClick(e)||k.determine.eventOnElement(e,t)&&e.preventDefault();},touch:function touch(e){k.determine.eventOnElement(e,function(){"touchstart"==e.type?k.timer=setTimeout(function(){k.hide();},S.delay.touch):"touchmove"==e.type&&clearTimeout(k.timer);}),e.stopPropagation();},hide:function hide(e){k.determine.eventInModule(e,k.hide);}},select:{mutation:function mutation(e){k.debug("<select> modified, recreating menu"),k.setup.select();}},menu:{mutation:function mutation(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),o=e(n.removedNodes?n.removedNodes[0]:!1),a=i.add(o),r=a.is(D.addition)||a.closest(D.addition).length>0,s=a.is(D.message)||a.closest(D.message).length>0;r||s?(k.debug("Updating item selector cache"),k.refreshItems()):(k.debug("Menu modified, updating selector cache"),k.refresh());},mousedown:function mousedown(){Y=!0;},mouseup:function mouseup(){Y=!1;}},item:{mouseenter:function mouseenter(t){var n=e(t.target),i=e(this),o=i.children(D.menu),a=i.siblings(D.item).children(D.menu),r=o.length>0,s=o.find(n).length>0;!s&&r&&(clearTimeout(k.itemTimer),k.itemTimer=setTimeout(function(){k.verbose("Showing sub-menu",o),e.each(a,function(){k.animate.hide(!1,e(this));}),k.animate.show(!1,o);},S.delay.show),t.preventDefault());},mouseleave:function mouseleave(t){var n=e(this).children(D.menu);n.length>0&&(clearTimeout(k.itemTimer),k.itemTimer=setTimeout(function(){k.verbose("Hiding sub-menu",n),k.animate.hide(!1,n);},S.delay.hide));},click:function click(t,n){var i=e(this),o=e(t?t.target:""),a=i.find(D.menu),r=k.get.choiceText(i),s=k.get.choiceValue(i,r),l=a.length>0,c=a.find(o).length>0;c||l&&!S.allowCategorySelection||(k.is.searchSelection()&&(S.allowAdditions&&k.remove.userAddition(),k.remove.searchTerm(),k.is.focusedOnSearch()||1==n||k.focusSearch(!0)),S.useLabels||(k.remove.filteredItem(),k.set.scrollPosition(i)),k.determine.selectAction.call(this,r,s));}},document:{keydown:function keydown(e){var t=e.which,n=k.is.inObject(t,E);if(n){var i=I.find(D.label),o=i.filter("."+T.active),a=(o.data(P.value),i.index(o)),r=i.length,s=o.length>0,l=o.length>1,c=0===a,u=a+1==r,d=k.is.searchSelection(),f=k.is.focusedOnSearch(),m=k.is.focused(),g=f&&0===k.get.caretPosition();if(d&&!s&&!f)return;t==E.leftArrow?!m&&!g||s?s&&(e.shiftKey?k.verbose("Adding previous label to selection"):(k.verbose("Selecting previous label"),i.removeClass(T.active)),c&&!l?o.addClass(T.active):o.prev(D.siblingLabel).addClass(T.active).end(),e.preventDefault()):(k.verbose("Selecting previous label"),i.last().addClass(T.active)):t==E.rightArrow?(m&&!s&&i.first().addClass(T.active),s&&(e.shiftKey?k.verbose("Adding next label to selection"):(k.verbose("Selecting next label"),i.removeClass(T.active)),u?d?f?i.removeClass(T.active):k.focusSearch():l?o.next(D.siblingLabel).addClass(T.active):o.addClass(T.active):o.next(D.siblingLabel).addClass(T.active),e.preventDefault())):t==E.deleteKey||t==E.backspace?s?(k.verbose("Removing active labels"),u&&d&&!f&&k.focusSearch(),o.last().next(D.siblingLabel).addClass(T.active),k.remove.activeLabels(o),e.preventDefault()):g&&!s&&t==E.backspace&&(k.verbose("Removing last label on input backspace"),o=i.last().addClass(T.active),k.remove.activeLabels(o)):o.removeClass(T.active);}}},keydown:function keydown(e){var t=e.which,n=k.is.inObject(t,E);if(n){var i,o,a=X.not(D.unselectable).filter("."+T.selected).eq(0),r=Q.children("."+T.active).eq(0),s=a.length>0?a:r,l=s.length>0?s.siblings(":not(."+T.filtered+")").addBack():Q.children(":not(."+T.filtered+")"),c=s.children(D.menu),u=s.closest(D.menu),d=u.hasClass(T.visible)||u.hasClass(T.animating)||u.parent(D.menu).length>0,f=c.length>0,m=s.length>0,g=s.not(D.unselectable).length>0,p=t==E.delimiter&&S.allowAdditions&&k.is.multiple(),h=S.allowAdditions&&S.hideAdditions&&(t==E.enter||p)&&g;if(h&&(k.verbose("Selecting item from keyboard shortcut",s),k.event.item.click.call(s,e),k.is.searchSelection()&&k.remove.searchTerm()),k.is.visible()){if((t==E.enter||p)&&(t==E.enter&&m&&f&&!S.allowCategorySelection?(k.verbose("Pressed enter on unselectable category, opening sub menu"),t=E.rightArrow):g&&(k.verbose("Selecting item from keyboard shortcut",s),k.event.item.click.call(s,e),k.is.searchSelection()&&k.remove.searchTerm()),e.preventDefault()),m&&(t==E.leftArrow&&(o=u[0]!==Q[0],o&&(k.verbose("Left key pressed, closing sub-menu"),k.animate.hide(!1,u),s.removeClass(T.selected),u.closest(D.item).addClass(T.selected),e.preventDefault())),t==E.rightArrow&&f&&(k.verbose("Right key pressed, opening sub-menu"),k.animate.show(!1,c),s.removeClass(T.selected),c.find(D.item).eq(0).addClass(T.selected),e.preventDefault())),t==E.upArrow){if(i=m&&d?s.prevAll(D.item+":not("+D.unselectable+")").eq(0):X.eq(0),l.index(i)<0)return k.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();k.verbose("Up key pressed, changing active item"),s.removeClass(T.selected),i.addClass(T.selected),k.set.scrollPosition(i),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),e.preventDefault();}if(t==E.downArrow){if(i=m&&d?i=s.nextAll(D.item+":not("+D.unselectable+")").eq(0):X.eq(0),0===i.length)return k.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();k.verbose("Down key pressed, changing active item"),X.removeClass(T.selected),i.addClass(T.selected),k.set.scrollPosition(i),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),e.preventDefault();}t==E.pageUp&&(k.scrollPage("up"),e.preventDefault()),t==E.pageDown&&(k.scrollPage("down"),e.preventDefault()),t==E.escape&&(k.verbose("Escape key pressed, closing dropdown"),k.hide());}else p&&e.preventDefault(),t!=E.downArrow||k.is.visible()||(k.verbose("Down key pressed, showing dropdown"),k.select.firstUnfiltered(),k.show(),e.preventDefault());}else k.has.search()||k.set.selectedLetter(String.fromCharCode(t));}},trigger:{change:function change(){var e=n.createEvent("HTMLEvents"),t=U[0];t&&(k.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e));}},determine:{selectAction:function selectAction(t,n){k.verbose("Determining action",S.action),e.isFunction(k.action[S.action])?(k.verbose("Triggering preset action",S.action,t,n),k.action[S.action].call(Z,t,n,this)):e.isFunction(S.action)?(k.verbose("Triggering user action",S.action,t,n),S.action.call(Z,t,n,this)):k.error(q.action,S.action);},eventInModule:function eventInModule(t,i){var o=e(t.target),a=o.closest(n.documentElement).length>0,r=o.closest(I).length>0;return i=e.isFunction(i)?i:function(){},a&&!r?(k.verbose("Triggering event",i),i(),!0):(k.verbose("Event occurred in dropdown, canceling callback"),!1);},eventOnElement:function eventOnElement(t,i){var o=e(t.target),a=o.closest(D.siblingLabel),r=n.body.contains(t.target),s=0===I.find(a).length,l=0===o.closest(Q).length;return i=e.isFunction(i)?i:function(){},r&&s&&l?(k.verbose("Triggering event",i),i(),!0):(k.verbose("Event occurred in dropdown menu, canceling callback"),!1);}},action:{nothing:function nothing(){},activate:function activate(t,n,o){if(n=n!==i?n:t,k.can.activate(e(o))){if(k.set.selected(n,e(o)),k.is.multiple()&&!k.is.allFiltered())return;k.hideAndClear();}},select:function select(t,n,o){if(n=n!==i?n:t,k.can.activate(e(o))){if(k.set.value(n,e(o)),k.is.multiple()&&!k.is.allFiltered())return;k.hideAndClear();}},combo:function combo(t,n,o){n=n!==i?n:t,k.set.selected(n,e(o)),k.hideAndClear();},hide:function hide(e,t,n){k.set.value(t,e),k.hideAndClear();}},get:{id:function id(){return x;},defaultText:function defaultText(){return I.data(P.defaultText);},defaultValue:function defaultValue(){return I.data(P.defaultValue);},placeholderText:function placeholderText(){return I.data(P.placeholderText)||"";},text:function text(){return N.text();},query:function query(){return e.trim(V.val());},searchWidth:function searchWidth(e){return e=e!==i?e:V.val(),H.text(e),Math.ceil(H.width()+1);},selectionCount:function selectionCount(){var t,n=k.get.values();return t=k.is.multiple()?e.isArray(n)?n.length:0:""!==k.get.value()?1:0;},transition:function transition(e){return"auto"==S.transition?k.is.upward(e)?"slide up":"slide down":S.transition;},userValues:function userValues(){var t=k.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return k.get.item(e)===!1;}));},uniqueArray:function uniqueArray(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i;});},caretPosition:function caretPosition(){var e,t,i=V.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0;},value:function value(){var t=U.length>0?U.val():I.data(P.value),n=e.isArray(t)&&1===t.length&&""===t[0];return t===i||n?"":t;},values:function values(){var e=k.get.value();return""===e?"":!k.has.selectInput()&&k.is.multiple()?"string"==typeof e?e.split(S.delimiter):"":e;},remoteValues:function remoteValues(){var t=k.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=k.read.remoteData(t);k.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i);})),n;},choiceText:function choiceText(t,n){if(n=n!==i?n:S.preserveHTML,t)return t.find(D.menu).length>0&&(k.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(D.menu).remove(),t.find(D.menuIcon).remove()),t.data(P.text)!==i?t.data(P.text):n?e.trim(t.html()):e.trim(t.text());},choiceValue:function choiceValue(t,n){return n=n||k.get.choiceText(t),!!t&&(t.data(P.value)!==i?String(t.data(P.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n));},inputEvent:function inputEvent(){var e=V[0];return!!e&&(e.oninput!==i?"input":e.onpropertychange!==i?"propertychange":"keyup");},selectValues:function selectValues(){var t={};return t.values=[],I.find("option").each(function(){var n=e(this),o=n.html(),a=n.attr("disabled"),r=n.attr("value")!==i?n.attr("value"):o;"auto"===S.placeholder&&""===r?t.placeholder=o:t.values.push({name:o,value:r,disabled:a});}),S.placeholder&&"auto"!==S.placeholder&&(k.debug("Setting placeholder value to",S.placeholder),t.placeholder=S.placeholder),S.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1;}),k.debug("Retrieved and sorted values from select",t)):k.debug("Retrieved values from select",t),t;},activeItem:function activeItem(){return X.filter("."+T.active);},selectedItem:function selectedItem(){var e=X.not(D.unselectable).filter("."+T.selected);return e.length>0?e:X.eq(0);},itemWithAdditions:function itemWithAdditions(e){var t=k.get.item(e),n=k.create.userChoice(e),i=n&&n.length>0;return i&&(t=t.length>0?t.add(n):n),t;},item:function item(t,n){var o,a,r=!1;return t=t!==i?t:k.get.values()!==i?k.get.values():k.get.text(),o=a?t.length>0:t!==i&&null!==t,a=k.is.multiple()&&e.isArray(t),n=""===t||0===t||n||!1,o&&X.each(function(){var o=e(this),s=k.get.choiceText(o),l=k.get.choiceValue(o,s);if(null!==l&&l!==i)if(a)e.inArray(String(l),t)===-1&&e.inArray(s,t)===-1||(r=r?r.add(o):o);else if(n){if(k.verbose("Ambiguous dropdown value using strict type check",o,t),l===t||s===t)return r=o,!0;}else if(String(l)==String(t)||s==t)return k.verbose("Found select item by value",l,t),r=o,!0;}),r;}},check:{maxSelections:function maxSelections(e){return!S.maxSelections||(e=e!==i?e:k.get.selectionCount(),e>=S.maxSelections?(k.debug("Maximum selection count reached"),S.useLabels&&(X.addClass(T.filtered),k.add.message(A.maxSelections)),!0):(k.verbose("No longer at maximum selection count"),k.remove.message(),k.remove.filteredItem(),k.is.searchSelection()&&k.filterItems(),!1));}},restore:{defaults:function defaults(){k.clear(),k.restore.defaultText(),k.restore.defaultValue();},defaultText:function defaultText(){var e=k.get.defaultText(),t=k.get.placeholderText;e===t?(k.debug("Restoring default placeholder text",e),k.set.placeholderText(e)):(k.debug("Restoring default text",e),k.set.text(e));},placeholderText:function placeholderText(){k.set.placeholderText();},defaultValue:function defaultValue(){var e=k.get.defaultValue();e!==i&&(k.debug("Restoring default value",e),""!==e?(k.set.value(e),k.set.selected()):(k.remove.activeItem(),k.remove.selectedItem()));},labels:function labels(){S.allowAdditions&&(S.useLabels||(k.error(q.labels),S.useLabels=!0),k.debug("Restoring selected values"),k.create.userLabels()),k.check.maxSelections();},selected:function selected(){k.restore.values(),k.is.multiple()?(k.debug("Restoring previously selected values and labels"),k.restore.labels()):k.debug("Restoring previously selected values");},values:function values(){k.set.initialLoad(),S.apiSettings&&S.saveRemoteData&&k.get.remoteValues()?k.restore.remoteValues():k.set.selected(),k.remove.initialLoad();},remoteValues:function remoteValues(){var t=k.get.remoteValues();k.debug("Recreating selected from session data",t),t&&(k.is.single()?e.each(t,function(e,t){k.set.text(t);}):e.each(t,function(e,t){k.add.label(e,t);}));}},read:{remoteData:function remoteData(e){var n;return t.Storage===i?void k.error(q.noStorage):(n=sessionStorage.getItem(e),n!==i&&n);}},save:{defaults:function defaults(){k.save.defaultText(),k.save.placeholderText(),k.save.defaultValue();},defaultValue:function defaultValue(){var e=k.get.value();k.verbose("Saving default value as",e),I.data(P.defaultValue,e);},defaultText:function defaultText(){var e=k.get.text();k.verbose("Saving default text as",e),I.data(P.defaultText,e);},placeholderText:function placeholderText(){var e;S.placeholder!==!1&&N.hasClass(T.placeholder)&&(e=k.get.text(),k.verbose("Saving placeholder text as",e),I.data(P.placeholderText,e));},remoteData:function remoteData(e,n){return t.Storage===i?void k.error(q.noStorage):(k.verbose("Saving remote data to session storage",n,e),void sessionStorage.setItem(n,e));}},clear:function clear(){k.is.multiple()&&S.useLabels?k.remove.labels():(k.remove.activeItem(),k.remove.selectedItem()),k.set.placeholderText(),k.clearValue();},clearValue:function clearValue(){k.set.value("");},scrollPage:function scrollPage(e,t){var n,i,o,a=t||k.get.selectedItem(),r=a.closest(D.menu),s=r.outerHeight(),l=r.scrollTop(),c=X.eq(0).outerHeight(),u=Math.floor(s/c),d=(r.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),f=X.not(D.unselectable);o="up"==e?f.index(a)-u:f.index(a)+u,n="up"==e?o>=0:o<f.length,i=n?f.eq(o):"up"==e?f.first():f.last(),i.length>0&&(k.debug("Scrolling page",e,i),a.removeClass(T.selected),i.addClass(T.selected),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),r.scrollTop(d));},set:{filtered:function filtered(){var e=k.is.multiple(),t=k.is.searchSelection(),n=e&&t,i=t?k.get.query():"",o="string"==typeof i&&i.length>0,a=k.get.searchWidth(),r=""!==i;e&&o&&(k.verbose("Adjusting input width",a,S.glyphWidth),V.css("width",a)),o||n&&r?(k.verbose("Hiding placeholder text"),N.addClass(T.filtered)):(!e||n&&!r)&&(k.verbose("Showing placeholder text"),N.removeClass(T.filtered));},empty:function empty(){I.addClass(T.empty);},loading:function loading(){I.addClass(T.loading);},placeholderText:function placeholderText(e){e=e||k.get.placeholderText(),k.debug("Setting placeholder text",e),k.set.text(e),N.addClass(T.placeholder);},tabbable:function tabbable(){k.has.search()?(k.debug("Added tabindex to searchable dropdown"),V.val("").attr("tabindex",0),Q.attr("tabindex",-1)):(k.debug("Added tabindex to dropdown"),I.attr("tabindex")===i&&(I.attr("tabindex",0),Q.attr("tabindex",-1)));},initialLoad:function initialLoad(){k.verbose("Setting initial load"),h=!0;},activeItem:function activeItem(e){S.allowAdditions&&e.filter(D.addition).length>0?e.addClass(T.filtered):e.addClass(T.active);},partialSearch:function partialSearch(e){var t=k.get.query().length;V.val(e.substr(0,t));},scrollPosition:function scrollPosition(e,t){var n,o,a,r,s,l,c,u,d,f=5;e=e||k.get.selectedItem(),n=e.closest(D.menu),o=e&&e.length>0,t=t!==i&&t,e&&n.length>0&&o&&(r=e.position().top,n.addClass(T.loading),l=n.scrollTop(),s=n.offset().top,r=e.offset().top,a=l-s+r,t||(c=n.height(),d=l+c<a+f,u=a-f<l),k.debug("Scrolling to active item",a),(t||u||d)&&n.scrollTop(a),n.removeClass(T.loading));},text:function text(e){"select"!==S.action&&("combo"==S.action?(k.debug("Changing combo button text",e,B),S.preserveHTML?B.html(e):B.text(e)):(e!==k.get.placeholderText()&&N.removeClass(T.placeholder),k.debug("Changing text",e,N),N.removeClass(T.filtered),S.preserveHTML?N.html(e):N.text(e)));},selectedItem:function selectedItem(e){var t=k.get.choiceValue(e),n=k.get.choiceText(e,!1);k.debug("Setting user selection to item",e),k.remove.activeItem(),k.set.partialSearch(n),k.set.activeItem(e),k.set.selected(t,e),k.set.text(n);},selectedLetter:function selectedLetter(t){var n,i=X.filter("."+T.selected),o=i.length>0&&k.has.firstLetter(i,t),a=!1;o&&(n=i.nextAll(X).eq(0),k.has.firstLetter(n,t)&&(a=n)),a||X.each(function(){if(k.has.firstLetter(e(this),t))return a=e(this),!1;}),a&&(k.verbose("Scrolling to next value with letter",t),k.set.scrollPosition(a),i.removeClass(T.selected),a.addClass(T.selected),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(a));},direction:function direction(e){"auto"==S.direction?k.is.onScreen(e)?k.remove.upward(e):k.set.upward(e):"upward"==S.direction&&k.set.upward(e);},upward:function upward(e){var t=e||I;t.addClass(T.upward);},value:function value(e,t,n){var o=k.escape.value(e),a=U.length>0,r=(!k.has.value(e),k.get.values()),s=e!==i?String(e):e;if(a){if(!S.allowReselection&&s==r&&(k.verbose("Skipping value update already same value",e,r),!k.is.initialLoad()))return;k.is.single()&&k.has.selectInput()&&k.can.extendSelect()&&(k.debug("Adding user option",e),k.add.optionValue(e)),k.debug("Updating input value",o,r),K=!0,U.val(o),S.fireOnInit===!1&&k.is.initialLoad()?k.debug("Input native change event ignored on initial load"):k.trigger.change(),K=!1;}else k.verbose("Storing value in metadata",o,U),o!==r&&I.data(P.value,s);S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("No callback on initial load",S.onChange):S.onChange.call(Z,e,t,n);},active:function active(){I.addClass(T.active);},multiple:function multiple(){I.addClass(T.multiple);},visible:function visible(){I.addClass(T.visible);},exactly:function exactly(e,t){k.debug("Setting selected to exact values"),k.clear(),k.set.selected(e,t);},selected:function selected(t,n){var i=k.is.multiple();n=S.allowAdditions?n||k.get.itemWithAdditions(t):n||k.get.item(t),n&&(k.debug("Setting selected menu item to",n),k.is.multiple()&&k.remove.searchWidth(),k.is.single()?(k.remove.activeItem(),k.remove.selectedItem()):S.useLabels&&k.remove.selectedItem(),n.each(function(){var t=e(this),o=k.get.choiceText(t),a=k.get.choiceValue(t,o),r=t.hasClass(T.filtered),s=t.hasClass(T.active),l=t.hasClass(T.addition),c=i&&1==n.length;i?!s||l?(S.apiSettings&&S.saveRemoteData&&k.save.remoteData(o,a),S.useLabels?(k.add.value(a,o,t),k.add.label(a,o,c),k.set.activeItem(t),k.filterActive(),k.select.nextAvailable(n)):(k.add.value(a,o,t),k.set.text(k.add.variables(A.count)),k.set.activeItem(t))):r||(k.debug("Selected active value, removing label"),k.remove.selected(a)):(S.apiSettings&&S.saveRemoteData&&k.save.remoteData(o,a),k.set.text(o),k.set.value(a,o,t),t.addClass(T.active).addClass(T.selected));}));}},add:{label:function label(t,n,i){var o,a=k.is.searchSelection()?V:N,r=k.escape.value(t);return o=e("<a />").addClass(T.label).attr("data-value",r).html(j.label(r,n)),o=S.onLabelCreate.call(o,r,n),k.has.label(t)?void k.debug("Label already exists, skipping",r):(S.label.variation&&o.addClass(S.label.variation),void(i===!0?(k.debug("Animating in label",o),o.addClass(T.hidden).insertBefore(a).transition(S.label.transition,S.label.duration)):(k.debug("Adding selection label",o),o.insertBefore(a))));},message:function message(t){var n=Q.children(D.message),i=S.templates.message(k.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(T.message).appendTo(Q);},optionValue:function optionValue(t){var n=k.escape.value(t),i=U.find('option[value="'+n+'"]'),o=i.length>0;o||(k.disconnect.selectObserver(),k.is.single()&&(k.verbose("Removing previous user addition"),U.find("option."+T.addition).remove()),e("<option/>").prop("value",n).addClass(T.addition).html(t).appendTo(U),k.verbose("Adding user addition as an <option>",t),k.observe.select());},userSuggestion:function userSuggestion(e){var t,n=Q.children(D.addition),i=k.get.item(e),o=i&&i.not(D.addition).length,a=n.length>0;if(!S.useLabels||!k.has.maxSelections()){if(""===e||o)return void n.remove();a?(n.data(P.value,e).data(P.text,e).attr("data-"+P.value,e).attr("data-"+P.text,e).removeClass(T.filtered),S.hideAdditions||(t=S.templates.addition(k.add.variables(A.addResult,e)),n.html(t)),k.verbose("Replacing user suggestion with new value",n)):(n=k.create.userChoice(e),n.prependTo(Q),k.verbose("Adding item choice to menu corresponding with user choice addition",n)),S.hideAdditions&&!k.is.allFiltered()||n.addClass(T.selected).siblings().removeClass(T.selected),k.refreshItems();}},variables:function variables(e,t){var n,i,o=e.search("{count}")!==-1,a=e.search("{maxCount}")!==-1,r=e.search("{term}")!==-1;return k.verbose("Adding templated variables to message",e),o&&(n=k.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=k.get.selectionCount(),e=e.replace("{maxCount}",S.maxSelections)),r&&(i=t||k.get.query(),e=e.replace("{term}",i)),e;},value:function value(t,n,i){var o,a=k.get.values();return""===t?void k.debug("Cannot select blank values from multiselect"):(e.isArray(a)?(o=a.concat([t]),o=k.get.uniqueArray(o)):o=[t],k.has.selectInput()?k.can.extendSelect()&&(k.debug("Adding value to select",t,o,U),k.add.optionValue(t)):(o=o.join(S.delimiter),k.debug("Setting hidden input to delimited value",o,U)),S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("Skipping onadd callback on initial load",S.onAdd):S.onAdd.call(Z,t,n,i),k.set.value(o,t,n,i),void k.check.maxSelections());}},remove:{active:function active(){I.removeClass(T.active);},activeLabel:function activeLabel(){I.find(D.label).removeClass(T.active);},empty:function empty(){I.removeClass(T.empty);},loading:function loading(){I.removeClass(T.loading);},initialLoad:function initialLoad(){h=!1;},upward:function upward(e){var t=e||I;t.removeClass(T.upward);},visible:function visible(){I.removeClass(T.visible);},activeItem:function activeItem(){X.removeClass(T.active);},filteredItem:function filteredItem(){S.useLabels&&k.has.maxSelections()||(S.useLabels&&k.is.multiple()?X.not("."+T.active).removeClass(T.filtered):X.removeClass(T.filtered),k.remove.empty());},optionValue:function optionValue(e){var t=k.escape.value(e),n=U.find('option[value="'+t+'"]'),i=n.length>0;i&&n.hasClass(T.addition)&&(C&&(C.disconnect(),k.verbose("Temporarily disconnecting mutation observer")),n.remove(),k.verbose("Removing user addition as an <option>",t),C&&C.observe(U[0],{childList:!0,subtree:!0}));},message:function message(){Q.children(D.message).remove();},searchWidth:function searchWidth(){V.css("width","");},searchTerm:function searchTerm(){k.verbose("Cleared search term"),V.val(""),k.set.filtered();},userAddition:function userAddition(){X.filter(D.addition).remove();},selected:function selected(t,n){return!!(n=S.allowAdditions?n||k.get.itemWithAdditions(t):n||k.get.item(t))&&void n.each(function(){var t=e(this),n=k.get.choiceText(t),i=k.get.choiceValue(t,n);k.is.multiple()?S.useLabels?(k.remove.value(i,n,t),k.remove.label(i)):(k.remove.value(i,n,t),0===k.get.selectionCount()?k.set.placeholderText():k.set.text(k.add.variables(A.count))):k.remove.value(i,n,t),t.removeClass(T.filtered).removeClass(T.active),S.useLabels&&t.removeClass(T.selected);});},selectedItem:function selectedItem(){X.removeClass(T.selected);},value:function value(e,t,n){var i,o=k.get.values();k.has.selectInput()?(k.verbose("Input is <select> removing selected option",e),i=k.remove.arrayValue(e,o),k.remove.optionValue(e)):(k.verbose("Removing from delimited values",e),i=k.remove.arrayValue(e,o),i=i.join(S.delimiter)),S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("No callback on initial load",S.onRemove):S.onRemove.call(Z,e,t,n),k.set.value(i,t,n),k.check.maxSelections();},arrayValue:function arrayValue(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e;}),k.verbose("Removed value from delimited string",t,n),n;},label:function label(e,t){var n=I.find(D.label),i=n.filter('[data-value="'+e+'"]');k.verbose("Removing label",i),i.remove();},activeLabels:function activeLabels(e){e=e||I.find(D.label).filter("."+T.active),k.verbose("Removing active label selections",e),k.remove.labels(e);},labels:function labels(t){t=t||I.find(D.label),k.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(P.value),o=n!==i?String(n):n,a=k.is.userValue(o);return S.onLabelRemove.call(t,n)===!1?void k.debug("Label remove callback cancelled removal"):(k.remove.message(),void(a?(k.remove.value(o),k.remove.label(o)):k.remove.selected(o)));});},tabbable:function tabbable(){k.has.search()?(k.debug("Searchable dropdown initialized"),V.removeAttr("tabindex"),Q.removeAttr("tabindex")):(k.debug("Simple selection dropdown initialized"),I.removeAttr("tabindex"),Q.removeAttr("tabindex"));}},has:{menuSearch:function menuSearch(){return k.has.search()&&V.closest(Q).length>0;},search:function search(){return V.length>0;},sizer:function sizer(){return H.length>0;},selectInput:function selectInput(){return U.is("select");},minCharacters:function minCharacters(e){return!S.minCharacters||(e=e!==i?String(e):String(k.get.query()),e.length>=S.minCharacters);},firstLetter:function firstLetter(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=k.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i);},input:function input(){return U.length>0;},items:function items(){return X.length>0;},menu:function menu(){return Q.length>0;},message:function message(){return 0!==Q.children(D.message).length;},label:function label(e){var t=k.escape.value(e),n=I.find(D.label);return n.filter('[data-value="'+t+'"]').length>0;},maxSelections:function maxSelections(){return S.maxSelections&&k.get.selectionCount()>=S.maxSelections;},allResultsFiltered:function allResultsFiltered(){var e=X.not(D.addition);return e.filter(D.unselectable).length===e.length;},userSuggestion:function userSuggestion(){return Q.children(D.addition).length>0;},query:function query(){return""!==k.get.query();},value:function value(t){var n=k.get.values(),i=e.isArray(n)?n&&e.inArray(t,n)!==-1:n==t;return!!i;}},is:{active:function active(){return I.hasClass(T.active);},bubbledLabelClick:function bubbledLabelClick(t){return e(t.target).is("select, input")&&I.closest("label").length>0;},bubbledIconClick:function bubbledIconClick(t){return e(t.target).closest(W).length>0;},alreadySetup:function alreadySetup(){return I.is("select")&&I.parent(D.dropdown).length>0&&0===I.prev().length;},animating:function animating(e){return e?e.transition&&e.transition("is animating"):Q.transition&&Q.transition("is animating");},disabled:function disabled(){return I.hasClass(T.disabled);},focused:function focused(){return n.activeElement===I[0];},focusedOnSearch:function focusedOnSearch(){return n.activeElement===V[0];},allFiltered:function allFiltered(){return(k.is.multiple()||k.has.search())&&!(0==S.hideAdditions&&k.has.userSuggestion())&&!k.has.message()&&k.has.allResultsFiltered();},hidden:function hidden(e){return!k.is.visible(e);},initialLoad:function initialLoad(){return h;},onScreen:function onScreen(e){var t,n=e||Q,i=!0,o={};return n.addClass(T.loading),t={context:{scrollTop:L.scrollTop(),height:L.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},o={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},o.below?(k.verbose("Dropdown can fit in context downward",o),i=!0):o.below||o.above?(k.verbose("Dropdown cannot fit below, opening upward",o),i=!1):(k.verbose("Dropdown cannot fit in either direction, favoring downward",o),i=!0),n.removeClass(T.loading),i;},inObject:function inObject(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0;}),i;},multiple:function multiple(){return I.hasClass(T.multiple);},single:function single(){return!k.is.multiple();},selectMutation:function selectMutation(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0;}),n;},search:function search(){return I.hasClass(T.search);},searchSelection:function searchSelection(){return k.has.search()&&1===V.parent(D.dropdown).length;},selection:function selection(){return I.hasClass(T.selection);},userValue:function userValue(t){return e.inArray(t,k.get.userValues())!==-1;},upward:function upward(e){var t=e||I;return t.hasClass(T.upward);},visible:function visible(e){return e?e.hasClass(T.visible):Q.hasClass(T.visible);}},can:{activate:function activate(e){return!!S.useLabels||!k.has.maxSelections()||!(!k.has.maxSelections()||!e.hasClass(T.active));},click:function click(){return c||"click"==S.on;},extendSelect:function extendSelect(){return S.allowAdditions||S.apiSettings;},show:function show(){return!k.is.disabled()&&(k.has.items()||k.has.message());},useAPI:function useAPI(){return e.fn.api!==i;}},animate:{show:function show(t,n){var o,a=n||Q,r=n?function(){}:function(){k.hideSubMenus(),k.hideOthers(),k.set.active();};t=e.isFunction(t)?t:function(){},k.verbose("Doing menu show animation",a),k.set.direction(n),o=k.get.transition(n),k.is.selection()&&k.set.scrollPosition(k.get.selectedItem(),!0),(k.is.hidden(a)||k.is.animating(a))&&("none"==o?(r(),a.transition("show"),t.call(Z)):e.fn.transition!==i&&I.transition("is supported")?a.transition({animation:o+" in",debug:S.debug,verbose:S.verbose,duration:S.duration,queue:!0,onStart:r,onComplete:function onComplete(){t.call(Z);}}):k.error(q.noTransition,o));},hide:function hide(t,n){var o=n||Q,a=(n?.9*S.duration:S.duration,n?function(){}:function(){k.can.click()&&k.unbind.intent(),k.remove.active();}),r=k.get.transition(n);t=e.isFunction(t)?t:function(){},(k.is.visible(o)||k.is.animating(o))&&(k.verbose("Doing menu hide animation",o),"none"==r?(a(),o.transition("hide"),t.call(Z)):e.fn.transition!==i&&I.transition("is supported")?o.transition({animation:r+" out",duration:S.duration,debug:S.debug,verbose:S.verbose,queue:!0,onStart:a,onComplete:function onComplete(){"auto"==S.direction&&k.remove.upward(n),t.call(Z);}}):k.error(q.transition));}},hideAndClear:function hideAndClear(){k.remove.searchTerm(),k.has.maxSelections()||(k.has.search()?k.hide(function(){k.remove.filteredItem();}):k.hide());},delay:{show:function show(){k.verbose("Delaying show event to ensure user intent"),clearTimeout(k.timer),k.timer=setTimeout(k.show,S.delay.show);},hide:function hide(){k.verbose("Delaying hide event to ensure user intent"),clearTimeout(k.timer),k.timer=setTimeout(k.hide,S.delay.hide);}},escape:{value:function value(t){var n=e.isArray(t),i="string"==typeof t,o=!i&&!n,a=i&&t.search(O.quote)!==-1,r=[];return k.has.selectInput()&&!o&&a?(k.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){r.push(t.replace(O.quote,"&quot;"));}),r):t.replace(O.quote,"&quot;")):t;},regExp:function regExp(e){return e=String(e),e.replace(O.escape,"\\$&");}},setting:function setting(t,n){if(k.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,S,t);else{if(n===i)return S[t];e.isPlainObject(S[t])?e.extend(!0,S[t],n):S[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,k,t);else{if(n===i)return k[t];k[t]=n;}},debug:function debug(){!S.silent&&S.debug&&(S.performance?k.performance.log(arguments):(k.debug=Function.prototype.bind.call(console.info,console,S.name+":"),k.debug.apply(console,arguments)));},verbose:function verbose(){!S.silent&&S.verbose&&S.debug&&(S.performance?k.performance.log(arguments):(k.verbose=Function.prototype.bind.call(console.info,console,S.name+":"),k.verbose.apply(console,arguments)));},error:function error(){S.silent||(k.error=Function.prototype.bind.call(console.error,console,S.name+":"),k.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;S.performance&&(t=new Date().getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:Z,"Execution Time":n})),clearTimeout(k.performance.timer),k.performance.timer=setTimeout(k.performance.display,500);},display:function display(){var t=S.name+":",n=0;u=!1,clearTimeout(k.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),d=[];}},invoke:function invoke(t,n,o){var r,s,l,c=J;return n=n||g,o=Z||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(k.error(q.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},m?(J===i&&k.initialize(),k.invoke(f)):(J!==i&&J.invoke("destroy"),k.initialize());}),a!==i?a:r;},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function onChange(e,t,n){},onAdd:function onAdd(e,t,n){},onRemove:function onRemove(e,t,n){},onLabelSelect:function onLabelSelect(e){},onLabelCreate:function onLabelCreate(t,n){return e(this);},onLabelRemove:function onLabelRemove(e){return!0;},onNoResults:function onNoResults(e){return!0;},onShow:function onShow(){},onHide:function onHide(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function dropdown(t){var n=t.placeholder||!1,i=(t.values||{},"");return i+='<i class="dropdown icon"></i>',i+=t.placeholder?'<div class="default text">'+n+"</div>":'<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>";}),i+="</div>";},menu:function menu(t,n){var i=t[n.values]||{},o="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",a=t[n.disabled]?"disabled ":"";o+='<div class="'+a+'item" data-value="'+t[n.value]+'"'+i+">",o+=t[n.name],o+="</div>";}),o;},label:function label(e,t){return t+'<i class="delete icon"></i>';},message:function message(e){return e;},addition:function addition(e){return e;}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.embed=function(n){var o,a=e(this),r=a.selector||"",s=new Date().getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var f,m=e.isPlainObject(n)?e.extend(!0,{},e.fn.embed.settings,n):e.extend({},e.fn.embed.settings),g=m.selector,p=m.className,h=m.sources,v=m.error,b=m.metadata,y=m.namespace,x=m.templates,C="."+y,w="module-"+y,k=(e(t),e(this)),S=k.find(g.placeholder),T=k.find(g.icon),A=k.find(g.embed),R=this,E=k.data(w);f={initialize:function initialize(){f.debug("Initializing embed"),f.determine.autoplay(),f.create(),f.bind.events(),f.instantiate();},instantiate:function instantiate(){f.verbose("Storing instance of module",f),E=f,k.data(w,f);},destroy:function destroy(){f.verbose("Destroying previous instance of embed"),f.reset(),k.removeData(w).off(C);},refresh:function refresh(){f.verbose("Refreshing selector cache"),S=k.find(g.placeholder),T=k.find(g.icon),A=k.find(g.embed);},bind:{events:function events(){f.has.placeholder()&&(f.debug("Adding placeholder events"),k.on("click"+C,g.placeholder,f.createAndShow).on("click"+C,g.icon,f.createAndShow));}},create:function create(){var e=f.get.placeholder();e?f.createPlaceholder():f.createAndShow();},createPlaceholder:function createPlaceholder(e){var t=f.get.icon(),n=f.get.url();f.generate.embed(n);e=e||f.get.placeholder(),k.html(x.placeholder(e,t)),f.debug("Creating placeholder for embed",e,t);},createEmbed:function createEmbed(t){f.refresh(),t=t||f.get.url(),A=e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(k),m.onCreate.call(R,t),f.debug("Creating embed object",A);},changeEmbed:function changeEmbed(e){A.html(f.generate.embed(e));},createAndShow:function createAndShow(){f.createEmbed(),f.show();},change:function change(e,t,n){f.debug("Changing video to ",e,t,n),k.data(b.source,e).data(b.id,t),n?k.data(b.url,n):k.removeData(b.url),f.has.embed()?f.changeEmbed():f.create();},reset:function reset(){f.debug("Clearing embed and showing placeholder"),f.remove.active(),f.remove.embed(),f.showPlaceholder(),m.onReset.call(R);},show:function show(){f.debug("Showing embed"),f.set.active(),m.onDisplay.call(R);},hide:function hide(){f.debug("Hiding embed"),f.showPlaceholder();},showPlaceholder:function showPlaceholder(){f.debug("Showing placeholder image"),f.remove.active(),m.onPlaceholderDisplay.call(R);},get:{id:function id(){return m.id||k.data(b.id);},placeholder:function placeholder(){return m.placeholder||k.data(b.placeholder);},icon:function icon(){return m.icon?m.icon:k.data(b.icon)!==i?k.data(b.icon):f.determine.icon();},source:function source(e){return m.source?m.source:k.data(b.source)!==i?k.data(b.source):f.determine.source();},type:function type(){var e=f.get.source();return h[e]!==i&&h[e].type;},url:function url(){return m.url?m.url:k.data(b.url)!==i?k.data(b.url):f.determine.url();}},determine:{autoplay:function autoplay(){f.should.autoplay()&&(m.autoplay=!0);},source:function source(t){var n=!1;return t=t||f.get.url(),t&&e.each(h,function(e,i){if(t.search(i.domain)!==-1)return n=e,!1;}),n;},icon:function icon(){var e=f.get.source();return h[e]!==i&&h[e].icon;},url:function url(){var e,t=m.id||k.data(b.id),n=m.source||k.data(b.source);return e=h[n]!==i&&h[n].url.replace("{id}",t),e&&k.data(b.url,e),e;}},set:{active:function active(){k.addClass(p.active);}},remove:{active:function active(){k.removeClass(p.active);},embed:function embed(){A.empty();}},encode:{parameters:function parameters(e){var t,n=[];for(t in e){n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));}return n.join("&amp;");}},generate:{embed:function embed(e){f.debug("Generating embed html");var t,n,i=f.get.source();return e=f.get.url(e),e?(n=f.generate.parameters(i),t=x.iframe(e,n)):f.error(v.noURL,k),t;},parameters:function parameters(t,n){var o=h[t]&&h[t].parameters!==i?h[t].parameters(m):{};return n=n||m.parameters,n&&(o=e.extend({},o,n)),o=m.onEmbed(o),f.encode.parameters(o);}},has:{embed:function embed(){return A.length>0;},placeholder:function placeholder(){return m.placeholder||k.data(b.placeholder);}},should:{autoplay:function autoplay(){return"auto"===m.autoplay?m.placeholder||k.data(b.placeholder)!==i:m.autoplay;}},is:{video:function video(){return"video"==f.get.type();}},setting:function setting(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n;}},debug:function debug(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)));},verbose:function verbose(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)));},error:function error(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;m.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500);},display:function display(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,a){var r,s,l,c=E;return n=n||d,a=R||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(v.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s;}},u?(E===i&&f.initialize(),f.invoke(c)):(E!==i&&E.invoke("destroy"),f.initialize());}),o!==i?o:this;},e.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function onDisplay(){},onPlaceholderDisplay:function onPlaceholderDisplay(){},onReset:function onReset(){},onCreate:function onCreate(e){},onEmbed:function onEmbed(e){return e;},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function parameters(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||i,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI};}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function parameters(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||i,portrait:e.brandedUI,title:e.brandedUI};}}},templates:{iframe:function iframe(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';},placeholder:function placeholder(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n;}},api:!1,onPause:function onPause(){},onPlay:function onPlay(){},onStop:function onStop(){}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.modal=function(o){var a,r=e(this),s=e(t),l=e(n),c=e("body"),u=r.selector||"",d=new Date().getTime(),f=[],m=arguments[0],g="string"==typeof m,p=[].slice.call(arguments,1),h=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);};return r.each(function(){var r,v,b,y,x,C,w,k,S,T=e.isPlainObject(o)?e.extend(!0,{},e.fn.modal.settings,o):e.extend({},e.fn.modal.settings),A=T.selector,R=T.className,E=T.namespace,P=T.error,F="."+E,O="module-"+E,D=e(this),q=e(T.context),j=D.find(A.close),z=this,M=D.data(O);S={initialize:function initialize(){S.verbose("Initializing dimmer",q),S.create.id(),S.create.dimmer(),S.refreshModals(),S.bind.events(),T.observeChanges&&S.observeChanges(),S.instantiate();},instantiate:function instantiate(){S.verbose("Storing instance of modal"),M=S,D.data(O,M);},create:{dimmer:function dimmer(){var t={debug:T.debug,dimmerName:"modals",duration:{show:T.duration,hide:T.duration}},n=e.extend(!0,t,T.dimmerSettings);return T.inverted&&(n.variation=n.variation!==i?n.variation+" inverted":"inverted"),e.fn.dimmer===i?void S.error(P.dimmer):(S.debug("Creating dimmer with settings",n),y=q.dimmer(n),T.detachable?(S.verbose("Modal is detachable, moving content into dimmer"),y.dimmer("add content",D)):S.set.undetached(),T.blurring&&y.addClass(R.blurring),void(x=y.dimmer("get dimmer")));},id:function id(){w=(Math.random().toString(16)+"000000000").substr(2,8),C="."+w,S.verbose("Creating unique id for element",w);}},destroy:function destroy(){S.verbose("Destroying previous modal"),D.removeData(O).off(F),s.off(C),x.off(C),j.off(F),q.dimmer("destroy");},observeChanges:function observeChanges(){"MutationObserver"in t&&(k=new MutationObserver(function(e){S.debug("DOM tree modified, refreshing"),S.refresh();}),k.observe(z,{childList:!0,subtree:!0}),S.debug("Setting up mutation observer",k));},refresh:function refresh(){S.remove.scrolling(),S.cacheSizes(),S.set.screenHeight(),S.set.type(),S.set.position();},refreshModals:function refreshModals(){v=D.siblings(A.modal),r=v.add(D);},attachEvents:function attachEvents(t,n){var i=e(t);n=e.isFunction(S[n])?S[n]:S.toggle,i.length>0?(S.debug("Attaching modal events to element",t,n),i.off(F).on("click"+F,n)):S.error(P.notFound,t);},bind:{events:function events(){S.verbose("Attaching events"),D.on("click"+F,A.close,S.event.close).on("click"+F,A.approve,S.event.approve).on("click"+F,A.deny,S.event.deny),s.on("resize"+C,S.event.resize);}},get:{id:function id(){return(Math.random().toString(16)+"000000000").substr(2,8);}},event:{approve:function approve(){return T.onApprove.call(z,e(this))===!1?void S.verbose("Approve callback returned false cancelling hide"):void S.hide();},deny:function deny(){return T.onDeny.call(z,e(this))===!1?void S.verbose("Deny callback returned false cancelling hide"):void S.hide();},close:function close(){S.hide();},click:function click(t){var i=e(t.target),o=i.closest(A.modal).length>0,a=e.contains(n.documentElement,t.target);!o&&a&&(S.debug("Dimmer clicked, hiding all modals"),S.is.active()&&(S.remove.clickaway(),T.allowMultiple?S.hide():S.hideAll()));},debounce:function debounce(e,t){clearTimeout(S.timer),S.timer=setTimeout(e,t);},keyboard:function keyboard(e){var t=e.which,n=27;t==n&&(T.closable?(S.debug("Escape key pressed hiding modal"),S.hide()):S.debug("Escape key pressed, but closable is set to false"),e.preventDefault());},resize:function resize(){y.dimmer("is active")&&h(S.refresh);}},toggle:function toggle(){S.is.active()||S.is.animating()?S.hide():S.show();},show:function show(t){t=e.isFunction(t)?t:function(){},S.refreshModals(),S.showModal(t);},hide:function hide(t){t=e.isFunction(t)?t:function(){},S.refreshModals(),S.hideModal(t);},showModal:function showModal(t){t=e.isFunction(t)?t:function(){},S.is.animating()||!S.is.active()?(S.showDimmer(),S.cacheSizes(),S.set.position(),S.set.screenHeight(),S.set.type(),S.set.clickaway(),!T.allowMultiple&&S.others.active()?S.hideOthers(S.showModal):(T.onShow.call(z),T.transition&&e.fn.transition!==i&&D.transition("is supported")?(S.debug("Showing modal with css animations"),D.transition({debug:T.debug,animation:T.transition+" in",queue:T.queue,duration:T.duration,useFailSafe:!0,onComplete:function onComplete(){T.onVisible.apply(z),T.keyboardShortcuts&&S.add.keyboardShortcuts(),S.save.focus(),S.set.active(),T.autofocus&&S.set.autofocus(),t();}})):S.error(P.noTransition))):S.debug("Modal is already visible");},hideModal:function hideModal(t,n){return t=e.isFunction(t)?t:function(){},S.debug("Hiding modal"),T.onHide.call(z,e(this))===!1?void S.verbose("Hide callback returned false cancelling hide"):void((S.is.animating()||S.is.active())&&(T.transition&&e.fn.transition!==i&&D.transition("is supported")?(S.remove.active(),D.transition({debug:T.debug,animation:T.transition+" out",queue:T.queue,duration:T.duration,useFailSafe:!0,onStart:function onStart(){S.others.active()||n||S.hideDimmer(),T.keyboardShortcuts&&S.remove.keyboardShortcuts();},onComplete:function onComplete(){T.onHidden.call(z),S.restore.focus(),t();}})):S.error(P.noTransition)));},showDimmer:function showDimmer(){y.dimmer("is animating")||!y.dimmer("is active")?(S.debug("Showing dimmer"),y.dimmer("show")):S.debug("Dimmer already visible");},hideDimmer:function hideDimmer(){return y.dimmer("is animating")||y.dimmer("is active")?void y.dimmer("hide",function(){S.remove.clickaway(),S.remove.screenHeight();}):void S.debug("Dimmer is not visible cannot hide");},hideAll:function hideAll(t){var n=r.filter("."+R.active+", ."+R.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(S.debug("Hiding all visible modals"),S.hideDimmer(),n.modal("hide modal",t));},hideOthers:function hideOthers(t){var n=v.filter("."+R.active+", ."+R.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(S.debug("Hiding other modals",v),n.modal("hide modal",t,!0));},others:{active:function active(){return v.filter("."+R.active).length>0;},animating:function animating(){return v.filter("."+R.animating).length>0;}},add:{keyboardShortcuts:function keyboardShortcuts(){S.verbose("Adding keyboard shortcuts"),l.on("keyup"+F,S.event.keyboard);}},save:{focus:function focus(){b=e(n.activeElement).blur();}},restore:{focus:function focus(){b&&b.length>0&&b.focus();}},remove:{active:function active(){D.removeClass(R.active);},clickaway:function clickaway(){T.closable&&x.off("click"+C);},bodyStyle:function bodyStyle(){""===c.attr("style")&&(S.verbose("Removing style attribute"),c.removeAttr("style"));},screenHeight:function screenHeight(){S.debug("Removing page height"),c.css("height","");},keyboardShortcuts:function keyboardShortcuts(){S.verbose("Removing keyboard shortcuts"),l.off("keyup"+F);},scrolling:function scrolling(){y.removeClass(R.scrolling),D.removeClass(R.scrolling);}},cacheSizes:function cacheSizes(){var o=D.outerHeight();S.cache!==i&&0===o||(S.cache={pageHeight:e(n).outerHeight(),height:o+T.offset,contextHeight:"body"==T.context?e(t).height():y.height()}),S.debug("Caching modal and container sizes",S.cache);},can:{fit:function fit(){return S.cache.height+2*T.padding<S.cache.contextHeight;}},is:{active:function active(){return D.hasClass(R.active);},animating:function animating(){return D.transition("is supported")?D.transition("is animating"):D.is(":visible");},scrolling:function scrolling(){return y.hasClass(R.scrolling);},modernBrowser:function modernBrowser(){return!(t.ActiveXObject||"ActiveXObject"in t);}},set:{autofocus:function autofocus(){var e=D.find("[tabindex], :input").filter(":visible"),t=e.filter("[autofocus]"),n=t.length>0?t.first():e.first();n.length>0&&n.focus();},clickaway:function clickaway(){T.closable&&x.on("click"+C,S.event.click);},screenHeight:function screenHeight(){S.can.fit()?c.css("height",""):(S.debug("Modal is taller than page content, resizing page height"),c.css("height",S.cache.height+2*T.padding));},active:function active(){D.addClass(R.active);},scrolling:function scrolling(){y.addClass(R.scrolling),D.addClass(R.scrolling);},type:function type(){S.can.fit()?(S.verbose("Modal fits on screen"),S.others.active()||S.others.animating()||S.remove.scrolling()):(S.verbose("Modal cannot fit on screen setting to scrolling"),S.set.scrolling());},position:function position(){S.verbose("Centering modal on page",S.cache),S.can.fit()?D.css({top:"",marginTop:-(S.cache.height/2)}):D.css({marginTop:"",top:l.scrollTop()});},undetached:function undetached(){y.addClass(R.undetached);}},setting:function setting(t,n){if(S.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,T,t);else{if(n===i)return T[t];e.isPlainObject(T[t])?e.extend(!0,T[t],n):T[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,S,t);else{if(n===i)return S[t];S[t]=n;}},debug:function debug(){!T.silent&&T.debug&&(T.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,T.name+":"),S.debug.apply(console,arguments)));},verbose:function verbose(){!T.silent&&T.verbose&&T.debug&&(T.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,T.name+":"),S.verbose.apply(console,arguments)));},error:function error(){T.silent||(S.error=Function.prototype.bind.call(console.error,console,T.name+":"),S.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;T.performance&&(t=new Date().getTime(),i=d||t,n=t-i,d=t,f.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,500);},display:function display(){var t=T.name+":",n=0;d=!1,clearTimeout(S.performance.timer),e.each(f,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(console.group!==i||console.table!==i)&&f.length>0&&(console.groupCollapsed(t),console.table?console.table(f):e.each(f,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),f=[];}},invoke:function invoke(t,n,o){var r,s,l,c=M;return n=n||p,o=z||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},g?(M===i&&S.initialize(),S.invoke(m)):(M!==i&&M.invoke("destroy"),S.initialize());}),a!==i?a:this;},e.fn.modal.settings={name:"Modal",namespace:"modal",silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function onShow(){},onVisible:function onVisible(){},onHide:function onHide(){return!0;},onHidden:function onHidden(){},onApprove:function onApprove(){return!0;},onDeny:function onDeny(){return!0;},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",scrolling:"scrolling",undetached:"undetached"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.nag=function(n){var o,a=e(this),r=a.selector||"",s=new Date().getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f=e.isPlainObject(n)?e.extend(!0,{},e.fn.nag.settings,n):e.extend({},e.fn.nag.settings),m=(f.className,f.selector),g=f.error,p=f.namespace,h="."+p,v=p+"-module",b=e(this),y=(b.find(m.close),e(f.context?f.context:"body")),x=this,C=b.data(v);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);};a={initialize:function initialize(){a.verbose("Initializing element"),b.on("click"+h,m.close,a.dismiss).data(v,a),f.detachable&&b.parent()[0]!==y[0]&&b.detach().prependTo(y),f.displayTime>0&&setTimeout(a.hide,f.displayTime),a.show();},destroy:function destroy(){a.verbose("Destroying instance"),b.removeData(v).off(h);},show:function show(){a.should.show()&&!b.is(":visible")&&(a.debug("Showing nag",f.animation.show),"fade"==f.animation.show?b.fadeIn(f.duration,f.easing):b.slideDown(f.duration,f.easing));},hide:function hide(){a.debug("Showing nag",f.animation.hide),"fade"==f.animation.show?b.fadeIn(f.duration,f.easing):b.slideUp(f.duration,f.easing);},onHide:function onHide(){a.debug("Removing nag",f.animation.hide),b.remove(),f.onHide&&f.onHide();},dismiss:function dismiss(e){f.storageMethod&&a.storage.set(f.key,f.value),a.hide(),e.stopImmediatePropagation(),e.preventDefault();},should:{show:function show(){return f.persist?(a.debug("Persistent nag is set, can show nag"),!0):a.storage.get(f.key)!=f.value.toString()?(a.debug("Stored value is not set, can show nag",a.storage.get(f.key)),!0):(a.debug("Stored value is set, cannot show nag",a.storage.get(f.key)),!1);}},get:{storageOptions:function storageOptions(){var e={};return f.expires&&(e.expires=f.expires),f.domain&&(e.domain=f.domain),f.path&&(e.path=f.path),e;}},clear:function clear(){a.storage.remove(f.key);},storage:{set:function set(n,o){var r=a.get.storageOptions();if("localstorage"==f.storageMethod&&t.localStorage!==i)t.localStorage.setItem(n,o),a.debug("Value stored using local storage",n,o);else if("sessionstorage"==f.storageMethod&&t.sessionStorage!==i)t.sessionStorage.setItem(n,o),a.debug("Value stored using session storage",n,o);else{if(e.cookie===i)return void a.error(g.noCookieStorage);e.cookie(n,o,r),a.debug("Value stored using cookie",n,o,r);}},get:function get(n,o){var r;return"localstorage"==f.storageMethod&&t.localStorage!==i?r=t.localStorage.getItem(n):"sessionstorage"==f.storageMethod&&t.sessionStorage!==i?r=t.sessionStorage.getItem(n):e.cookie!==i?r=e.cookie(n):a.error(g.noCookieStorage),"undefined"!=r&&"null"!=r&&r!==i&&null!==r||(r=i),r;},remove:function remove(n){var o=a.get.storageOptions();"localstorage"==f.storageMethod&&t.localStorage!==i?t.localStorage.removeItem(n):"sessionstorage"==f.storageMethod&&t.sessionStorage!==i?t.sessionStorage.removeItem(n):e.cookie!==i?e.removeCookie(n,o):a.error(g.noStorage);}},setting:function setting(t,n){if(a.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,a,t);else{if(n===i)return a[t];a[t]=n;}},debug:function debug(){!f.silent&&f.debug&&(f.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,f.name+":"),a.debug.apply(console,arguments)));},verbose:function verbose(){!f.silent&&f.verbose&&f.debug&&(f.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),a.verbose.apply(console,arguments)));},error:function error(){f.silent||(a.error=Function.prototype.bind.call(console.error,console,f.name+":"),a.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;f.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:x,"Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500);},display:function display(){var t=f.name+":",n=0;s=!1,clearTimeout(a.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,r){var s,l,c,u=C;return n=n||d,r=x||r,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var r=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[r])&&n!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[o])||n==s)return u[o]!==i?(l=u[o],!1):(a.error(g.method,t),!1);u=u[o];}})),e.isFunction(l)?c=l.apply(r,n):l!==i&&(c=l),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),l;}},u?(C===i&&a.initialize(),a.invoke(c)):(C!==i&&C.invoke("destroy"),a.initialize());}),o!==i?o:this;},e.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function onHide(){}},e.extend(e.easing,{easeOutQuad:function easeOutQuad(e,t,n,i,o){return-i*(t/=o)*(t-2)+n;}});}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.popup=function(o){var a,r=e(this),s=e(n),l=e(t),c=e("body"),u=r.selector||"",d=!0,f=new Date().getTime(),m=[],g=arguments[0],p="string"==typeof g,h=[].slice.call(arguments,1);return r.each(function(){var r,v,b,y,x,C,w=e.isPlainObject(o)?e.extend(!0,{},e.fn.popup.settings,o):e.extend({},e.fn.popup.settings),k=w.selector,S=w.className,T=w.error,A=w.metadata,R=w.namespace,E="."+w.namespace,P="module-"+R,F=e(this),O=e(w.context),D=e(w.scrollContext),q=e(w.boundary),j=w.target?e(w.target):F,z=0,M=!1,I=!1,L=this,N=F.data(P);C={initialize:function initialize(){C.debug("Initializing",F),C.createID(),C.bind.events(),!C.exists()&&w.preserve&&C.create(),w.observeChanges&&C.observeChanges(),C.instantiate();},instantiate:function instantiate(){C.verbose("Storing instance",C),N=C,F.data(P,N);},observeChanges:function observeChanges(){"MutationObserver"in t&&(b=new MutationObserver(C.event.documentChanged),b.observe(n,{childList:!0,subtree:!0}),C.debug("Setting up mutation observer",b));},refresh:function refresh(){w.popup?r=e(w.popup).eq(0):w.inline&&(r=j.nextAll(k.popup).eq(0),w.popup=r),w.popup?(r.addClass(S.loading),v=C.get.offsetParent(),r.removeClass(S.loading),w.movePopup&&C.has.popup()&&C.get.offsetParent(r)[0]!==v[0]&&(C.debug("Moving popup to the same offset parent as activating element"),r.detach().appendTo(v))):v=w.inline?C.get.offsetParent(j):C.has.popup()?C.get.offsetParent(r):c,v.is("html")&&v[0]!==c[0]&&(C.debug("Setting page as offset parent"),v=c),C.get.variation()&&C.set.variation();},reposition:function reposition(){C.refresh(),C.set.position();},destroy:function destroy(){C.debug("Destroying previous module"),b&&b.disconnect(),r&&!w.preserve&&C.removePopup(),clearTimeout(C.hideTimer),clearTimeout(C.showTimer),C.unbind.close(),C.unbind.events(),F.removeData(P);},event:{start:function start(t){var n=e.isPlainObject(w.delay)?w.delay.show:w.delay;clearTimeout(C.hideTimer),I||(C.showTimer=setTimeout(C.show,n));},end:function end(){var t=e.isPlainObject(w.delay)?w.delay.hide:w.delay;clearTimeout(C.showTimer),C.hideTimer=setTimeout(C.hide,t);},touchstart:function touchstart(e){I=!0,C.show();},resize:function resize(){C.is.visible()&&C.set.position();},documentChanged:function documentChanged(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==L||e(t).find(L).length>0)&&(C.debug("Element removed from DOM, tearing down events"),C.destroy());});});},hideGracefully:function hideGracefully(t){var i=e(t.target),o=e.contains(n.documentElement,t.target),a=i.closest(k.popup).length>0;t&&!a&&o?(C.debug("Click occurred outside popup hiding popup"),C.hide()):C.debug("Click was inside popup, keeping popup open");}},create:function create(){var t=C.get.html(),n=C.get.title(),i=C.get.content();t||i||n?(C.debug("Creating pop-up html"),t||(t=w.templates.popup({title:n,content:i})),r=e("<div/>").addClass(S.popup).data(A.activator,F).html(t),w.inline?(C.verbose("Inserting popup element inline",r),r.insertAfter(F)):(C.verbose("Appending popup element to body",r),r.appendTo(O)),C.refresh(),C.set.variation(),w.hoverable&&C.bind.popup(),w.onCreate.call(r,L)):0!==j.next(k.popup).length?(C.verbose("Pre-existing popup found"),w.inline=!0,w.popup=j.next(k.popup).data(A.activator,F),C.refresh(),w.hoverable&&C.bind.popup()):w.popup?(e(w.popup).data(A.activator,F),C.verbose("Used popup specified in settings"),C.refresh(),w.hoverable&&C.bind.popup()):C.debug("No content specified skipping display",L);},createID:function createID(){x=(Math.random().toString(16)+"000000000").substr(2,8),y="."+x,C.verbose("Creating unique id for element",x);},toggle:function toggle(){C.debug("Toggling pop-up"),C.is.hidden()?(C.debug("Popup is hidden, showing pop-up"),C.unbind.close(),C.show()):(C.debug("Popup is visible, hiding pop-up"),C.hide());},show:function show(e){if(e=e||function(){},C.debug("Showing pop-up",w.transition),C.is.hidden()&&(!C.is.active()||!C.is.dropdown())){if(C.exists()||C.create(),w.onShow.call(r,L)===!1)return void C.debug("onShow callback returned false, cancelling popup animation");w.preserve||w.popup||C.refresh(),r&&C.set.position()&&(C.save.conditions(),w.exclusive&&C.hideAll(),C.animate.show(e));}},hide:function hide(e){if(e=e||function(){},C.is.visible()||C.is.animating()){if(w.onHide.call(r,L)===!1)return void C.debug("onHide callback returned false, cancelling popup animation");C.remove.visible(),C.unbind.close(),C.restore.conditions(),C.animate.hide(e);}},hideAll:function hideAll(){e(k.popup).filter("."+S.visible).each(function(){e(this).data(A.activator).popup("hide");});},exists:function exists(){return!!r&&(w.inline||w.popup?C.has.popup():r.closest(O).length>=1);},removePopup:function removePopup(){C.has.popup()&&!w.popup&&(C.debug("Removing popup",r),r.remove(),r=i,w.onRemove.call(r,L));},save:{conditions:function conditions(){C.cache={title:F.attr("title")},C.cache.title&&F.removeAttr("title"),C.verbose("Saving original attributes",C.cache.title);}},restore:{conditions:function conditions(){return C.cache&&C.cache.title&&(F.attr("title",C.cache.title),C.verbose("Restoring original attributes",C.cache.title)),!0;}},supports:{svg:function svg(){return(typeof SVGGraphicsElement==="undefined"?"undefined":(0,_typeof3.default)(SVGGraphicsElement))===i;}},animate:{show:function show(t){t=e.isFunction(t)?t:function(){},w.transition&&e.fn.transition!==i&&F.transition("is supported")?(C.set.visible(),r.transition({animation:w.transition+" in",queue:!1,debug:w.debug,verbose:w.verbose,duration:w.duration,onComplete:function onComplete(){C.bind.close(),t.call(r,L),w.onVisible.call(r,L);}})):C.error(T.noTransition);},hide:function hide(t){return t=e.isFunction(t)?t:function(){},C.debug("Hiding pop-up"),w.onHide.call(r,L)===!1?void C.debug("onHide callback returned false, cancelling popup animation"):void(w.transition&&e.fn.transition!==i&&F.transition("is supported")?r.transition({animation:w.transition+" out",queue:!1,duration:w.duration,debug:w.debug,verbose:w.verbose,onComplete:function onComplete(){C.reset(),t.call(r,L),w.onHidden.call(r,L);}}):C.error(T.noTransition));}},change:{content:function content(e){r.html(e);}},get:{html:function html(){return F.removeData(A.html),F.data(A.html)||w.html;},title:function title(){return F.removeData(A.title),F.data(A.title)||w.title;},content:function content(){return F.removeData(A.content),F.data(A.content)||F.attr("title")||w.content;},variation:function variation(){return F.removeData(A.variation),F.data(A.variation)||w.variation;},popup:function popup(){return r;},popupOffset:function popupOffset(){return r.offset();},calculations:function calculations(){var e,n=j[0],i=q[0]==t,o=w.inline||w.popup&&w.movePopup?j.position():j.offset(),a=i?{top:0,left:0}:q.offset(),s={},c=i?{top:l.scrollTop(),left:l.scrollLeft()}:{top:0,left:0};return s={target:{element:j[0],width:j.outerWidth(),height:j.outerHeight(),top:o.top,left:o.left,margin:{}},popup:{width:r.outerWidth(),height:r.outerHeight()},parent:{width:v.outerWidth(),height:v.outerHeight()},screen:{top:a.top,left:a.left,scroll:{top:c.top,left:c.left},width:q.width(),height:q.height()}},w.setFluidWidth&&C.is.fluid()&&(s.container={width:r.parent().outerWidth()},s.popup.width=s.container.width),s.target.margin.top=w.inline?parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"),10):0,s.target.margin.left=w.inline?C.is.rtl()?parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=s.screen,s.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},s;},id:function id(){return x;},startEvent:function startEvent(){return"hover"==w.on?"mouseenter":"focus"==w.on&&"focus";},scrollEvent:function scrollEvent(){return"scroll";},endEvent:function endEvent(){return"hover"==w.on?"mouseleave":"focus"==w.on&&"blur";},distanceFromBoundary:function distanceFromBoundary(e,t){var n,i,o={};return t=t||C.get.calculations(),n=t.popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},C.verbose("Distance from boundaries determined",e,o)),o;},offsetParent:function offsetParent(t){var n=t!==i?t[0]:F[0],o=n.parentNode,a=e(o);if(o)for(var r="none"===a.css("transform"),s="static"===a.css("position"),l=a.is("html");o&&!l&&s&&r;){o=o.parentNode,a=e(o),r="none"===a.css("transform"),s="static"===a.css("position"),l=a.is("html");}return a&&a.length>0?a:e();},positions:function positions(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1};},nextPosition:function nextPosition(e){var t=e.split(" "),n=t[0],i=t[1],o={top:"bottom",bottom:"top",left:"right",right:"left"},a={left:"center",center:"right",right:"left"},r={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"},s="top"==n||"bottom"==n,l=!1,c=!1,u=!1;return M||(C.verbose("All available positions available"),M=C.get.positions()),C.debug("Recording last position tried",e),M[e]=!0,"opposite"===w.prefer&&(u=[o[n],i],u=u.join(" "),l=M[u]===!0,C.debug("Trying opposite strategy",u)),"adjacent"===w.prefer&&s&&(u=[n,a[i]],u=u.join(" "),c=M[u]===!0,C.debug("Trying adjacent strategy",u)),(c||l)&&(C.debug("Using backup position",u),u=r[e]),u;}},set:{position:function position(e,t){if(0===j.length||0===r.length)return void C.error(T.notFound);var n,o,a,s,l,c,u,d;if(t=t||C.get.calculations(),e=e||F.data(A.position)||w.position,n=F.data(A.offset)||w.offset,o=w.distanceAway,a=t.target,s=t.popup,l=t.parent,0===a.width&&0===a.height&&!C.is.svg(a.element))return C.debug("Popup target is hidden, no action taken"),!1;switch(w.inline&&(C.debug("Adding margin to calculation",a.margin),"left center"==e||"right center"==e?(n+=a.margin.top,o+=-a.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=a.margin.left,o-=a.margin.top):(n+=a.margin.left,o+=a.margin.top)),C.debug("Determining popup position from calculations",e,t),C.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left";}),C.debug("RTL: Popup position updated",e)),z==w.maxSearchDepth&&"string"==typeof w.lastResort&&(e=w.lastResort),e){case"top left":c={top:"auto",bottom:l.height-a.top+o,left:a.left+n,right:"auto"};break;case"top center":c={bottom:l.height-a.top+o,left:a.left+a.width/2-s.width/2+n,top:"auto",right:"auto"};break;case"top right":c={bottom:l.height-a.top+o,right:l.width-a.left-a.width-n,top:"auto",left:"auto"};break;case"left center":c={top:a.top+a.height/2-s.height/2+n,right:l.width-a.left+o,left:"auto",bottom:"auto"};break;case"right center":c={top:a.top+a.height/2-s.height/2+n,left:a.left+a.width+o,bottom:"auto",right:"auto"};break;case"bottom left":c={top:a.top+a.height+o,left:a.left+n,bottom:"auto",right:"auto"};break;case"bottom center":c={top:a.top+a.height+o,left:a.left+a.width/2-s.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":c={top:a.top+a.height+o,right:l.width-a.left-a.width-n,left:"auto",bottom:"auto"};}if(c===i&&C.error(T.invalidPosition,e),C.debug("Calculated popup positioning values",c),r.css(c).removeClass(S.position).addClass(e).addClass(S.loading),u=C.get.popupOffset(),d=C.get.distanceFromBoundary(u,t),C.is.offstage(d,e)){if(C.debug("Position is outside viewport",e),z<w.maxSearchDepth)return z++,e=C.get.nextPosition(e),C.debug("Trying new position",e),!!r&&C.set.position(e,t);if(!w.lastResort)return C.debug("Popup could not find a position to display",r),C.error(T.cannotPlace,L),C.remove.attempts(),C.remove.loading(),C.reset(),w.onUnplaceable.call(r,L),!1;C.debug("No position found, showing with last position");}return C.debug("Position is on stage",e),C.remove.attempts(),C.remove.loading(),w.setFluidWidth&&C.is.fluid()&&C.set.fluidWidth(t),!0;},fluidWidth:function fluidWidth(e){e=e||C.get.calculations(),C.debug("Automatically setting element width to parent width",e.parent.width),r.css("width",e.container.width);},variation:function variation(e){e=e||C.get.variation(),e&&C.has.popup()&&(C.verbose("Adding variation to popup",e),r.addClass(e));},visible:function visible(){F.addClass(S.visible);}},remove:{loading:function loading(){r.removeClass(S.loading);},variation:function variation(e){e=e||C.get.variation(),e&&(C.verbose("Removing variation",e),r.removeClass(e));},visible:function visible(){F.removeClass(S.visible);},attempts:function attempts(){C.verbose("Resetting all searched positions"),z=0,M=!1;}},bind:{events:function events(){C.debug("Binding popup events to module"),"click"==w.on&&F.on("click"+E,C.toggle),"hover"==w.on&&d&&F.on("touchstart"+E,C.event.touchstart),C.get.startEvent()&&F.on(C.get.startEvent()+E,C.event.start).on(C.get.endEvent()+E,C.event.end),w.target&&C.debug("Target set to element",j),l.on("resize"+y,C.event.resize);},popup:function popup(){C.verbose("Allowing hover events on popup to prevent closing"),r&&C.has.popup()&&r.on("mouseenter"+E,C.event.start).on("mouseleave"+E,C.event.end);},close:function close(){(w.hideOnScroll===!0||"auto"==w.hideOnScroll&&"click"!=w.on)&&D.one(C.get.scrollEvent()+y,C.event.hideGracefully),"hover"==w.on&&I&&(C.verbose("Binding popup close event to document"),s.on("touchstart"+y,function(e){C.verbose("Touched away from popup"),C.event.hideGracefully.call(L,e);})),"click"==w.on&&w.closable&&(C.verbose("Binding popup close event to document"),s.on("click"+y,function(e){C.verbose("Clicked away from popup"),C.event.hideGracefully.call(L,e);}));}},unbind:{events:function events(){l.off(y),F.off(E);},close:function close(){s.off(y),D.off(y);}},has:{popup:function popup(){return r&&r.length>0;}},is:{offstage:function offstage(t,n){var i=[];return e.each(t,function(e,t){t<-w.jitter&&(C.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e));}),i.length>0;},svg:function svg(e){return C.supports.svg()&&e instanceof SVGGraphicsElement;},active:function active(){return F.hasClass(S.active);},animating:function animating(){return r!==i&&r.hasClass(S.animating);},fluid:function fluid(){return r!==i&&r.hasClass(S.fluid);},visible:function visible(){return r!==i&&r.hasClass(S.visible);},dropdown:function dropdown(){return F.hasClass(S.dropdown);},hidden:function hidden(){return!C.is.visible();},rtl:function rtl(){return"rtl"==F.css("direction");}},reset:function reset(){C.remove.visible(),w.preserve?e.fn.transition!==i&&r.transition("remove transition"):C.removePopup();},setting:function setting(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(n===i)return w[t];w[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(n===i)return C[t];C[t]=n;}},debug:function debug(){!w.silent&&w.debug&&(w.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,w.name+":"),C.debug.apply(console,arguments)));},verbose:function verbose(){!w.silent&&w.verbose&&w.debug&&(w.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,w.name+":"),C.verbose.apply(console,arguments)));},error:function error(){w.silent||(C.error=Function.prototype.bind.call(console.error,console,w.name+":"),C.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;w.performance&&(t=new Date().getTime(),i=f||t,n=t-i,f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:L,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500);},display:function display(){var t=w.name+":",n=0;f=!1,clearTimeout(C.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),m=[];}},invoke:function invoke(t,n,o){var r,s,l,c=N;return n=n||h,o=L||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},p?(N===i&&C.initialize(),C.invoke(g)):(N!==i&&N.invoke("destroy"),C.initialize());}),a!==i?a:this;},e.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function onCreate(){},onRemove:function onRemove(){},onShow:function onShow(){},onVisible:function onVisible(){},onHide:function onHide(){},onUnplaceable:function onUnplaceable(){},onHidden:function onHidden(){},on:"hover",boundary:t,addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:t,prefer:"opposite",lastResort:!1,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function escape(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function o(e){return i[e];};return n.test(e)?e.replace(t,o):e;},popup:function popup(t){var n="",o=e.fn.popup.settings.templates.escape;return(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))!==i&&((0,_typeof3.default)(t.title)!==i&&t.title&&(t.title=o(t.title),n+='<div class="header">'+t.title+"</div>"),(0,_typeof3.default)(t.content)!==i&&t.content&&(t.content=o(t.content),n+='<div class="content">'+t.content+"</div>")),n;}}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.fn.progress=function(t){var o,a=e(this),r=a.selector||"",s=new Date().getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.progress.settings,t):e.extend({},e.fn.progress.settings),g=m.className,p=m.metadata,h=m.namespace,v=m.selector,b=m.error,y="."+h,x="module-"+h,C=e(this),w=e(this).find(v.bar),k=e(this).find(v.progress),S=e(this).find(v.label),T=this,A=C.data(x),R=!1;f={initialize:function initialize(){f.debug("Initializing progress bar",m),f.set.duration(),f.set.transitionEvent(),f.read.metadata(),f.read.settings(),f.instantiate();},instantiate:function instantiate(){f.verbose("Storing instance of progress",f),A=f,C.data(x,f);},destroy:function destroy(){f.verbose("Destroying previous progress for",C),clearInterval(A.interval),f.remove.state(),C.removeData(x),A=i;},reset:function reset(){f.remove.nextValue(),f.update.progress(0);},complete:function complete(){(f.percent===i||f.percent<100)&&(f.remove.progressPoll(),f.set.percent(100));},read:{metadata:function metadata(){var e={percent:C.data(p.percent),total:C.data(p.total),value:C.data(p.value)};e.percent&&(f.debug("Current percent value set from metadata",e.percent),f.set.percent(e.percent)),e.total&&(f.debug("Total value set from metadata",e.total),f.set.total(e.total)),e.value&&(f.debug("Current value set from metadata",e.value),f.set.value(e.value),f.set.progress(e.value));},settings:function settings(){m.total!==!1&&(f.debug("Current total set in settings",m.total),f.set.total(m.total)),m.value!==!1&&(f.debug("Current value set in settings",m.value),f.set.value(m.value),f.set.progress(f.value)),m.percent!==!1&&(f.debug("Current percent set in settings",m.percent),f.set.percent(m.percent));}},bind:{transitionEnd:function transitionEnd(e){var t=f.get.transitionEnd();w.one(t+y,function(t){clearTimeout(f.failSafeTimer),e.call(this,t);}),f.failSafeTimer=setTimeout(function(){w.triggerHandler(t);},m.duration+m.failSafeDelay),f.verbose("Adding fail safe timer",f.timer);}},increment:function increment(e){var t,n,i;f.has.total()?(n=f.get.value(),e=e||1,i=n+e):(n=f.get.percent(),e=e||f.get.randomValue(),i=n+e,t=100,f.debug("Incrementing percentage by",n,i)),i=f.get.normalizedValue(i),f.set.progress(i);},decrement:function decrement(e){var t,n,i=f.get.total();i?(t=f.get.value(),e=e||1,n=t-e,f.debug("Decrementing value by",e,t)):(t=f.get.percent(),e=e||f.get.randomValue(),n=t-e,f.debug("Decrementing percentage by",e,t)),n=f.get.normalizedValue(n),f.set.progress(n);},has:{progressPoll:function progressPoll(){return f.progressPoll;},total:function total(){return f.get.total()!==!1;}},get:{text:function text(e){var t=f.value||0,n=f.total||0,i=R?f.get.displayPercent():f.percent||0,o=f.total>0?n-t:100-i;return e=e||"",e=e.replace("{value}",t).replace("{total}",n).replace("{left}",o).replace("{percent}",i),f.verbose("Adding variables to progress bar text",e),e;},normalizedValue:function normalizedValue(e){if(e<0)return f.debug("Value cannot decrement below 0"),0;if(f.has.total()){if(e>f.total)return f.debug("Value cannot increment above total",f.total),f.total;}else if(e>100)return f.debug("Value cannot increment above 100 percent"),100;return e;},updateInterval:function updateInterval(){return"auto"==m.updateInterval?m.duration:m.updateInterval;},randomValue:function randomValue(){return f.debug("Generating random increment percentage"),Math.floor(Math.random()*m.random.max+m.random.min);},numericValue:function numericValue(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e;},transitionEnd:function transitionEnd(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o){if(t.style[e]!==i)return o[e];}},displayPercent:function displayPercent(){var e=w.width(),t=C.width(),n=parseInt(w.css("min-width"),10),i=e>n?e/t*100:f.percent;return m.precision>0?Math.round(i*(10*m.precision))/(10*m.precision):Math.round(i);},percent:function percent(){return f.percent||0;},value:function value(){return f.nextValue||f.value||0;},total:function total(){return f.total||!1;}},create:{progressPoll:function progressPoll(){f.progressPoll=setTimeout(function(){f.update.toNextValue(),f.remove.progressPoll();},f.get.updateInterval());}},is:{complete:function complete(){return f.is.success()||f.is.warning()||f.is.error();},success:function success(){return C.hasClass(g.success);},warning:function warning(){return C.hasClass(g.warning);},error:function error(){return C.hasClass(g.error);},active:function active(){return C.hasClass(g.active);},visible:function visible(){return C.is(":visible");}},remove:{progressPoll:function progressPoll(){f.verbose("Removing progress poll timer"),f.progressPoll&&(clearTimeout(f.progressPoll),delete f.progressPoll);},nextValue:function nextValue(){f.verbose("Removing progress value stored for next update"),delete f.nextValue;},state:function state(){f.verbose("Removing stored state"),delete f.total,delete f.percent,delete f.value;},active:function active(){f.verbose("Removing active state"),C.removeClass(g.active);},success:function success(){f.verbose("Removing success state"),C.removeClass(g.success);},warning:function warning(){f.verbose("Removing warning state"),C.removeClass(g.warning);},error:function error(){f.verbose("Removing error state"),C.removeClass(g.error);}},set:{barWidth:function barWidth(e){e>100?f.error(b.tooHigh,e):e<0?f.error(b.tooLow,e):(w.css("width",e+"%"),C.attr("data-percent",parseInt(e,10)));},duration:function duration(e){e=e||m.duration,e="number"==typeof e?e+"ms":e,f.verbose("Setting progress bar transition duration",e),w.css({"transition-duration":e});},percent:function percent(e){e="string"==typeof e?+e.replace("%",""):e,e=m.precision>0?Math.round(e*(10*m.precision))/(10*m.precision):Math.round(e),f.percent=e,f.has.total()||(f.value=m.precision>0?Math.round(e/100*f.total*(10*m.precision))/(10*m.precision):Math.round(e/100*f.total*10)/10,m.limitValues&&(f.value=f.value>100?100:f.value<0?0:f.value)),f.set.barWidth(e),f.set.labelInterval(),f.set.labels(),m.onChange.call(T,e,f.value,f.total);},labelInterval:function labelInterval(){var t=function t(){f.verbose("Bar finished animating, removing continuous label updates"),clearInterval(f.interval),R=!1,f.set.labels();};clearInterval(f.interval),f.bind.transitionEnd(t),R=!0,f.interval=setInterval(function(){var t=e.contains(n.documentElement,T);t||(clearInterval(f.interval),R=!1),f.set.labels();},m.framerate);},labels:function labels(){f.verbose("Setting both bar progress and outer label text"),f.set.barLabel(),f.set.state();},label:function label(e){e=e||"",e&&(e=f.get.text(e),f.verbose("Setting label to text",e),S.text(e));},state:function state(e){e=e!==i?e:f.percent,100===e?m.autoSuccess&&!(f.is.warning()||f.is.error()||f.is.success())?(f.set.success(),f.debug("Automatically triggering success at 100%")):(f.verbose("Reached 100% removing active state"),f.remove.active(),f.remove.progressPoll()):e>0?(f.verbose("Adjusting active progress bar label",e),f.set.active()):(f.remove.active(),f.set.label(m.text.active));},barLabel:function barLabel(e){e!==i?k.text(f.get.text(e)):"ratio"==m.label&&f.total?(f.verbose("Adding ratio to bar label"),k.text(f.get.text(m.text.ratio))):"percent"==m.label&&(f.verbose("Adding percentage to bar label"),k.text(f.get.text(m.text.percent)));},active:function active(e){e=e||m.text.active,f.debug("Setting active state"),m.showActivity&&!f.is.active()&&C.addClass(g.active),f.remove.warning(),f.remove.error(),f.remove.success(),e=m.onLabelUpdate("active",e,f.value,f.total),e&&f.set.label(e),f.bind.transitionEnd(function(){m.onActive.call(T,f.value,f.total);});},success:function success(e){e=e||m.text.success||m.text.active,f.debug("Setting success state"),C.addClass(g.success),f.remove.active(),f.remove.warning(),f.remove.error(),f.complete(),m.text.success?(e=m.onLabelUpdate("success",e,f.value,f.total),f.set.label(e)):(e=m.onLabelUpdate("active",e,f.value,f.total),f.set.label(e)),f.bind.transitionEnd(function(){m.onSuccess.call(T,f.total);});},warning:function warning(e){e=e||m.text.warning,f.debug("Setting warning state"),C.addClass(g.warning),f.remove.active(),f.remove.success(),f.remove.error(),f.complete(),e=m.onLabelUpdate("warning",e,f.value,f.total),e&&f.set.label(e),f.bind.transitionEnd(function(){m.onWarning.call(T,f.value,f.total);});},error:function error(e){e=e||m.text.error,f.debug("Setting error state"),C.addClass(g.error),f.remove.active(),f.remove.success(),f.remove.warning(),f.complete(),e=m.onLabelUpdate("error",e,f.value,f.total),e&&f.set.label(e),f.bind.transitionEnd(function(){m.onError.call(T,f.value,f.total);});},transitionEvent:function transitionEvent(){a=f.get.transitionEnd();},total:function total(e){f.total=e;},value:function value(e){f.value=e;},progress:function progress(e){f.has.progressPoll()?(f.debug("Updated within interval, setting next update to use new value",e),f.set.nextValue(e)):(f.debug("First update in progress update interval, immediately updating",e),f.update.progress(e),f.create.progressPoll());},nextValue:function nextValue(e){f.nextValue=e;}},update:{toNextValue:function toNextValue(){var e=f.nextValue;e&&(f.debug("Update interval complete using last updated value",e),f.update.progress(e),f.remove.nextValue());},progress:function progress(e){var t;e=f.get.numericValue(e),e===!1&&f.error(b.nonNumeric,e),e=f.get.normalizedValue(e),f.has.total()?(f.set.value(e),t=e/f.total*100,f.debug("Calculating percent complete from total",t),f.set.percent(t)):(t=e,f.debug("Setting value to exact percentage value",t),f.set.percent(t));}},setting:function setting(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n;}},debug:function debug(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)));},verbose:function verbose(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)));},error:function error(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;m.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500);},display:function display(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,a){var r,s,l,c=A;return n=n||d,a=T||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(b.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s;}},u?(A===i&&f.initialize(),f.invoke(c)):(A!==i&&A.invoke("destroy"),f.initialize());}),o!==i?o:this;},e.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function onLabelUpdate(e,t,n,i){return t;},onChange:function onChange(e,t,n){},onSuccess:function onSuccess(e){},onActive:function onActive(e,t){},onError:function onError(e,t){},onWarning:function onWarning(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}"},className:{active:"active",error:"error",success:"success",warning:"warning"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.rating=function(t){var n,o=e(this),a=o.selector||"",r=new Date().getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var d,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.rating.settings,t):e.extend({},e.fn.rating.settings),g=m.namespace,p=m.className,h=m.metadata,v=m.selector,b=(m.error,"."+g),y="module-"+g,x=this,C=e(this).data(y),w=e(this),k=w.find(v.icon);f={initialize:function initialize(){f.verbose("Initializing rating module",m),0===k.length&&f.setup.layout(),m.interactive?f.enable():f.disable(),f.set.initialLoad(),f.set.rating(f.get.initialRating()),f.remove.initialLoad(),f.instantiate();},instantiate:function instantiate(){f.verbose("Instantiating module",m),C=f,w.data(y,f);},destroy:function destroy(){f.verbose("Destroying previous instance",C),f.remove.events(),w.removeData(y);},refresh:function refresh(){k=w.find(v.icon);},setup:{layout:function layout(){var t=f.get.maxRating(),n=e.fn.rating.settings.templates.icon(t);f.debug("Generating icon html dynamically"),w.html(n),f.refresh();}},event:{mouseenter:function mouseenter(){var t=e(this);t.nextAll().removeClass(p.selected),w.addClass(p.selected),t.addClass(p.selected).prevAll().addClass(p.selected);},mouseleave:function mouseleave(){w.removeClass(p.selected),k.removeClass(p.selected);},click:function click(){var t=e(this),n=f.get.rating(),i=k.index(t)+1,o="auto"==m.clearable?1===k.length:m.clearable;o&&n==i?f.clearRating():f.set.rating(i);}},clearRating:function clearRating(){f.debug("Clearing current rating"),f.set.rating(0);},bind:{events:function events(){f.verbose("Binding events"),w.on("mouseenter"+b,v.icon,f.event.mouseenter).on("mouseleave"+b,v.icon,f.event.mouseleave).on("click"+b,v.icon,f.event.click);}},remove:{events:function events(){f.verbose("Removing events"),w.off(b);},initialLoad:function initialLoad(){d=!1;}},enable:function enable(){f.debug("Setting rating to interactive mode"),f.bind.events(),w.removeClass(p.disabled);},disable:function disable(){f.debug("Setting rating to read-only mode"),f.remove.events(),w.addClass(p.disabled);},is:{initialLoad:function initialLoad(){return d;}},get:{initialRating:function initialRating(){return w.data(h.rating)!==i?(w.removeData(h.rating),w.data(h.rating)):m.initialRating;},maxRating:function maxRating(){return w.data(h.maxRating)!==i?(w.removeData(h.maxRating),w.data(h.maxRating)):m.maxRating;},rating:function rating(){var e=k.filter("."+p.active).length;return f.verbose("Current rating retrieved",e),e;}},set:{rating:function rating(e){var t=e-1>=0?e-1:0,n=k.eq(t);w.removeClass(p.selected),k.removeClass(p.selected).removeClass(p.active),e>0&&(f.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(p.active)),f.is.initialLoad()||m.onRate.call(x,e);},initialLoad:function initialLoad(){d=!0;}},setting:function setting(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n;}},debug:function debug(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)));},verbose:function verbose(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)));},error:function error(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;m.performance&&(t=new Date().getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:x,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500);},display:function display(){var t=m.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),o.length>1&&(t+=" ("+o.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),s=[];}},invoke:function invoke(t,o,a){var r,s,l,c=C;return o=o||u,a=x||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,o):s!==i&&(l=s),e.isArray(n)?n.push(l):n!==i?n=[n,l]:l!==i&&(n=l),s;}},c?(C===i&&f.initialize(),f.invoke(l)):(C!==i&&C.invoke("destroy"),f.initialize());}),n!==i?n:this;},e.fn.rating.settings={name:"Rating",namespace:"rating",slent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function onRate(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function icon(e){for(var t=1,n="";t<=e;){n+='<i class="icon"></i>',t++;}return n;}}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.search=function(o){var a,r=e(this),s=r.selector||"",l=new Date().getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return e(this).each(function(){var m,g=e.isPlainObject(o)?e.extend(!0,{},e.fn.search.settings,o):e.extend({},e.fn.search.settings),p=g.className,h=g.metadata,v=g.regExp,b=g.fields,y=g.selector,x=g.error,C=g.namespace,w="."+C,k=C+"-module",S=e(this),T=S.find(y.prompt),A=S.find(y.searchButton),R=S.find(y.results),E=S.find(y.result),P=S.find(y.category),F=this,O=S.data(k),D=!1;m={initialize:function initialize(){m.verbose("Initializing module"),m.determine.searchFields(),m.bind.events(),m.set.type(),m.create.results(),m.instantiate();},instantiate:function instantiate(){m.verbose("Storing instance of module",m),O=m,S.data(k,m);},destroy:function destroy(){m.verbose("Destroying instance"),S.off(w).removeData(k);},refresh:function refresh(){m.debug("Refreshing selector cache"),T=S.find(y.prompt),A=S.find(y.searchButton),P=S.find(y.category),R=S.find(y.results),E=S.find(y.result);},refreshResults:function refreshResults(){R=S.find(y.results),E=S.find(y.result);},bind:{events:function events(){m.verbose("Binding events to search"),g.automatic&&(S.on(m.get.inputEvent()+w,y.prompt,m.event.input),T.attr("autocomplete","off")),S.on("focus"+w,y.prompt,m.event.focus).on("blur"+w,y.prompt,m.event.blur).on("keydown"+w,y.prompt,m.handleKeyboard).on("click"+w,y.searchButton,m.query).on("mousedown"+w,y.results,m.event.result.mousedown).on("mouseup"+w,y.results,m.event.result.mouseup).on("click"+w,y.result,m.event.result.click);}},determine:{searchFields:function searchFields(){o&&o.searchFields!==i&&(g.searchFields=o.searchFields);}},event:{input:function input(){clearTimeout(m.timer),m.timer=setTimeout(m.query,g.searchDelay);},focus:function focus(){m.set.focus(),m.has.minimumCharacters()&&(m.query(),m.can.show()&&m.showResults());},blur:function blur(e){var t=n.activeElement===this,i=function i(){m.cancel.query(),m.remove.focus(),m.timer=setTimeout(m.hideResults,g.hideDelay);};t||(m.resultsClicked?(m.debug("Determining if user action caused search to close"),S.one("click.close"+w,y.results,function(e){return m.is.inMessage(e)||D?void T.focus():(D=!1,void(m.is.animating()||m.is.hidden()||i()));})):(m.debug("Input blurred without user action, closing results"),i()));},result:{mousedown:function mousedown(){m.resultsClicked=!0;},mouseup:function mouseup(){m.resultsClicked=!1;},click:function click(n){m.debug("Search result selected");var i=e(this),o=i.find(y.title).eq(0),a=i.is("a[href]")?i:i.find("a[href]").eq(0),r=a.attr("href")||!1,s=a.attr("target")||!1,l=(o.html(),o.length>0&&o.text()),c=m.get.results(),u=i.data(h.result)||m.get.result(l,c);return e.isFunction(g.onSelect)&&g.onSelect.call(F,u,c)===!1?(m.debug("Custom onSelect callback cancelled default select action"),void(D=!0)):(m.hideResults(),l&&m.set.value(l),void(r&&(m.verbose("Opening search link found in result",a),"_blank"==s||n.ctrlKey?t.open(r):t.location.href=r)));}}},handleKeyboard:function handleKeyboard(e){var t,n=S.find(y.result),i=S.find(y.category),o=n.filter("."+p.active),a=n.index(o),r=n.length,s=o.length>0,l=e.which,c={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(l==c.escape&&(m.verbose("Escape key pressed, blurring search field"),m.trigger.blur()),m.is.visible()){if(l==c.enter){if(m.verbose("Enter key pressed, selecting active result"),n.filter("."+p.active).length>0)return m.event.result.click.call(n.filter("."+p.active),e),e.preventDefault(),!1;}else l==c.upArrow&&s?(m.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(p.active),n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active),e.preventDefault()):l==c.downArrow&&(m.verbose("Down key pressed, changing active result"),t=a+1>=r?a:a+1,i.removeClass(p.active),n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active),e.preventDefault());}else l==c.enter&&(m.verbose("Enter key pressed, executing query"),m.query(),m.set.buttonPressed(),T.one("keyup",m.remove.buttonFocus));},setup:{api:function api(t){var n={debug:g.debug,on:!1,cache:!0,action:"search",urlData:{query:t},onSuccess:function onSuccess(e){m.parse.response.call(F,e,t);},onAbort:function onAbort(e){},onFailure:function onFailure(){m.displayMessage(x.serverError);},onError:m.error};e.extend(!0,n,g.apiSettings),m.verbose("Setting up API request",n),S.api(n);}},can:{useAPI:function useAPI(){return e.fn.api!==i;},show:function show(){return m.is.focused()&&!m.is.visible()&&!m.is.empty();},transition:function transition(){return g.transition&&e.fn.transition!==i&&S.transition("is supported");}},is:{animating:function animating(){return R.hasClass(p.animating);},hidden:function hidden(){return R.hasClass(p.hidden);},inMessage:function inMessage(t){if(t.target){var i=e(t.target),o=e.contains(n.documentElement,t.target);return o&&i.closest(y.message).length>0;}},empty:function empty(){return""===R.html();},visible:function visible(){return R.filter(":visible").length>0;},focused:function focused(){return T.filter(":focus").length>0;}},trigger:{blur:function blur(){var e=n.createEvent("HTMLEvents"),t=T[0];t&&(m.verbose("Triggering native blur event"),e.initEvent("blur",!1,!1),t.dispatchEvent(e));}},get:{inputEvent:function inputEvent(){var e=T[0],t=e!==i&&e.oninput!==i?"input":e!==i&&e.onpropertychange!==i?"propertychange":"keyup";return t;},value:function value(){return T.val();},results:function results(){var e=S.data(h.results);return e;},result:function result(t,n){var o=["title","id"],a=!1;return t=t!==i?t:m.get.value(),n=n!==i?n:m.get.results(),"category"===g.type?(m.debug("Finding result that matches",t),e.each(n,function(n,i){if(e.isArray(i.results)&&(a=m.search.object(t,i.results,o)[0]))return!1;})):(m.debug("Finding result in results object",t),a=m.search.object(t,n,o)[0]),a||!1;}},select:{firstResult:function firstResult(){m.verbose("Selecting first result"),E.first().addClass(p.active);}},set:{focus:function focus(){S.addClass(p.focus);},loading:function loading(){S.addClass(p.loading);},value:function value(e){m.verbose("Setting search input value",e),T.val(e);},type:function type(e){e=e||g.type,"category"==g.type&&S.addClass(g.type);},buttonPressed:function buttonPressed(){A.addClass(p.pressed);}},remove:{loading:function loading(){S.removeClass(p.loading);},focus:function focus(){S.removeClass(p.focus);},buttonPressed:function buttonPressed(){A.removeClass(p.pressed);}},query:function query(){var t=m.get.value(),n=m.read.cache(t);m.has.minimumCharacters()?(n?(m.debug("Reading result from cache",t),m.save.results(n.results),m.addResults(n.html),m.inject.id(n.results)):(m.debug("Querying for",t),e.isPlainObject(g.source)||e.isArray(g.source)?m.search.local(t):m.can.useAPI()?m.search.remote(t):m.error(x.source)),g.onSearchQuery.call(F,t)):m.hideResults();},search:{local:function local(e){var t,n=m.search.object(e,g.content);m.set.loading(),m.save.results(n),m.debug("Returned local search results",n),t=m.generateResults({results:n}),m.remove.loading(),m.addResults(t),m.inject.id(n),m.write.cache(e,{html:t,results:n});},remote:function remote(e){S.api("is loading")&&S.api("abort"),m.setup.api(e),S.api("query");},object:function object(t,n,o){var a=[],r=[],s=t.toString().replace(v.escape,"\\$&"),l=new RegExp(v.beginsWith+s,"i"),c=function c(t,n){var i=e.inArray(n,a)==-1,o=e.inArray(n,r)==-1;i&&o&&t.push(n);};return n=n||g.source,o=o!==i?o:g.searchFields,e.isArray(o)||(o=[o]),n===i||n===!1?(m.error(x.source),[]):(e.each(o,function(i,o){e.each(n,function(e,n){var i="string"==typeof n[o];i&&(n[o].search(l)!==-1?c(a,n):g.searchFullText&&m.fuzzySearch(t,n[o])&&c(r,n));});}),e.merge(a,r));}},fuzzySearch:function fuzzySearch(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;){if(t.charCodeAt(a++)===r)continue e;}return!1;}return!0;},parse:{response:function response(e,t){var n=m.generateResults(e);m.verbose("Parsing server response",e),e!==i&&t!==i&&e[b.results]!==i&&(m.addResults(n),m.inject.id(e[b.results]),m.write.cache(t,{html:n,results:e[b.results]}),m.save.results(e[b.results]));}},cancel:{query:function query(){m.can.useAPI()&&S.api("abort");}},has:{minimumCharacters:function minimumCharacters(){var e=m.get.value(),t=e.length;return t>=g.minCharacters;}},clear:{cache:function cache(e){var t=S.data(h.cache);e?e&&t&&t[e]&&(m.debug("Removing value from cache",e),delete t[e],S.data(h.cache,t)):(m.debug("Clearing cache",e),S.removeData(h.cache));}},read:{cache:function cache(e){var t=S.data(h.cache);return!!g.cache&&(m.verbose("Checking cache for generated html for query",e),"object"==(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))&&t[e]!==i&&t[e]);}},create:{id:function id(e,t){var n,o,a=e+1;return t!==i?(n=String.fromCharCode(97+t),o=n+a,m.verbose("Creating category result id",o)):(o=a,m.verbose("Creating result id",o)),o;},results:function results(){0===R.length&&(R=e("<div />").addClass(p.results).appendTo(S));}},inject:{result:function result(e,t,n){m.verbose("Injecting result into results");var o=n!==i?R.children().eq(n).children(y.result).eq(t):R.children(y.result).eq(t);m.verbose("Injecting results metadata",o),o.data(h.result,e);},id:function id(t){m.debug("Injecting unique ids into results");var n=0,o=0;return"category"===g.type?e.each(t,function(t,a){o=0,e.each(a.results,function(e,t){var r=a.results[e];r.id===i&&(r.id=m.create.id(o,n)),m.inject.result(r,o,n),o++;}),n++;}):e.each(t,function(e,n){var a=t[e];a.id===i&&(a.id=m.create.id(o)),m.inject.result(a,o),o++;}),t;}},save:{results:function results(e){m.verbose("Saving current search results to metadata",e),S.data(h.results,e);}},write:{cache:function cache(e,t){var n=S.data(h.cache)!==i?S.data(h.cache):{};g.cache&&(m.verbose("Writing generated html to cache",e,t),n[e]=t,S.data(h.cache,n));}},addResults:function addResults(t){return e.isFunction(g.onResultsAdd)&&g.onResultsAdd.call(R,t)===!1?(m.debug("onResultsAdd callback cancelled default action"),!1):void(t?(R.html(t),m.refreshResults(),g.selectFirstResult&&m.select.firstResult(),m.showResults()):m.hideResults());},showResults:function showResults(){m.is.visible()||(m.can.transition()?(m.debug("Showing results with css animations"),R.transition({animation:g.transition+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0})):(m.debug("Showing results with javascript"),R.stop().fadeIn(g.duration,g.easing)),g.onResultsOpen.call(R));},hideResults:function hideResults(){m.is.visible()&&(m.can.transition()?(m.debug("Hiding results with css animations"),R.transition({animation:g.transition+" out",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0})):(m.debug("Hiding results with javascript"),R.stop().fadeOut(g.duration,g.easing)),g.onResultsClose.call(R));},generateResults:function generateResults(t){m.debug("Generating html from response",t);var n=g.templates[g.type],i=e.isPlainObject(t[b.results])&&!e.isEmptyObject(t[b.results]),o=e.isArray(t[b.results])&&t[b.results].length>0,a="";return i||o?(g.maxResults>0&&(i?"standard"==g.type&&m.error(x.maxResults):t[b.results]=t[b.results].slice(0,g.maxResults)),e.isFunction(n)?a=n(t,b):m.error(x.noTemplate,!1)):g.showNoResults&&(a=m.displayMessage(x.noResults,"empty")),g.onResults.call(F,t),a;},displayMessage:function displayMessage(e,t){return t=t||"standard",m.debug("Displaying message",e,t),m.addResults(g.templates.message(e,t)),g.templates.message(e,t);},setting:function setting(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n;}},debug:function debug(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)));},verbose:function verbose(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)));},error:function error(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;g.performance&&(t=new Date().getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500);},display:function display(){var t=g.name+":",n=0;l=!1,clearTimeout(m.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),c=[];}},invoke:function invoke(t,n,o){var r,s,l,c=O;return n=n||f,o=F||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},d?(O===i&&m.initialize(),m.invoke(u)):(O!==i&&O.invoke("destroy"),m.initialize());}),a!==i?a:this;},e.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function onSearchQuery(e){},onResults:function onResults(e){},onResultsOpen:function onResultsOpen(){},onResultsClose:function onResultsClose(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function escape(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function o(e){return i[e];};return n.test(e)?e.replace(t,o):e;},message:function message(e,t){var n="";return e!==i&&t!==i&&(n+='<div class="message '+t+'">',n+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",n+="</div>"),n;},category:function category(t,n){var o="";e.fn.search.settings.templates.escape;return t[n.categoryResults]!==i&&(e.each(t[n.categoryResults],function(t,a){a[n.results]!==i&&a.results.length>0&&(o+='<div class="category">',a[n.categoryName]!==i&&(o+='<div class="name">'+a[n.categoryName]+"</div>"),e.each(a.results,function(e,t){o+=t[n.url]?'<a class="result" href="'+t[n.url]+'">':'<a class="result">',t[n.image]!==i&&(o+='<div class="image"> <img src="'+t[n.image]+'"></div>'),o+='<div class="content">',t[n.price]!==i&&(o+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==i&&(o+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==i&&(o+='<div class="description">'+t[n.description]+"</div>"),o+="</div>",o+="</a>";}),o+="</div>");}),t[n.action]&&(o+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),o);},standard:function standard(t,n){var o="";return t[n.results]!==i&&(e.each(t[n.results],function(e,t){o+=t[n.url]?'<a class="result" href="'+t[n.url]+'">':'<a class="result">',t[n.image]!==i&&(o+='<div class="image"> <img src="'+t[n.image]+'"></div>'),o+='<div class="content">',t[n.price]!==i&&(o+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==i&&(o+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==i&&(o+='<div class="description">'+t[n.description]+"</div>"),o+="</div>",o+="</a>";}),t[n.action]&&(o+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),o);}}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.shape=function(o){var a,r=e(this),s=(e("body"),new Date().getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);};return r.each(function(){var t,m,g,p=r.selector||"",h=e.isPlainObject(o)?e.extend(!0,{},e.fn.shape.settings,o):e.extend({},e.fn.shape.settings),v=h.namespace,b=h.selector,y=h.error,x=h.className,C="."+v,w="module-"+v,k=e(this),S=k.find(b.sides),T=k.find(b.side),A=!1,R=this,E=k.data(w);g={initialize:function initialize(){g.verbose("Initializing module for",R),g.set.defaultSide(),g.instantiate();},instantiate:function instantiate(){g.verbose("Storing instance of module",g),E=g,k.data(w,E);},destroy:function destroy(){g.verbose("Destroying previous module for",R),k.removeData(w).off(C);},refresh:function refresh(){g.verbose("Refreshing selector cache for",R),k=e(R),S=e(this).find(b.shape),T=e(this).find(b.side);},repaint:function repaint(){g.verbose("Forcing repaint event");var e=S[0]||n.createElement("div");e.offsetWidth;},animate:function animate(e,n){g.verbose("Animating box with properties",e),n=n||function(e){g.verbose("Executing animation callback"),e!==i&&e.stopPropagation(),g.reset(),g.set.active();},h.beforeChange.call(m[0]),g.get.transitionEvent()?(g.verbose("Starting CSS animation"),k.addClass(x.animating),S.css(e).one(g.get.transitionEvent(),n),g.set.duration(h.duration),f(function(){k.addClass(x.animating),t.addClass(x.hidden);})):n();},queue:function queue(e){g.debug("Queueing animation of",e),S.one(g.get.transitionEvent(),function(){g.debug("Executing queued animation"),setTimeout(function(){k.shape(e);},0);});},reset:function reset(){g.verbose("Animating states reset"),k.removeClass(x.animating).attr("style","").removeAttr("style"),S.attr("style","").removeAttr("style"),T.attr("style","").removeAttr("style").removeClass(x.hidden),m.removeClass(x.animating).attr("style","").removeAttr("style");},is:{complete:function complete(){return T.filter("."+x.active)[0]==m[0];},animating:function animating(){return k.hasClass(x.animating);}},set:{defaultSide:function defaultSide(){t=k.find("."+h.className.active),m=t.next(b.side).length>0?t.next(b.side):k.find(b.side).first(),A=!1,g.verbose("Active side set to",t),g.verbose("Next side set to",m);},duration:function duration(e){e=e||h.duration,e="number"==typeof e?e+"ms":e,g.verbose("Setting animation duration",e),(h.duration||0===h.duration)&&S.add(T).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e});},currentStageSize:function currentStageSize(){var e=k.find("."+h.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);k.css({width:t,height:n});},stageSize:function stageSize(){var e=k.clone().addClass(x.loading),t=e.find("."+h.className.active),n=A?e.find(b.side).eq(A):t.next(b.side).length>0?t.next(b.side):e.find(b.side).first(),i="next"==h.width?n.outerWidth(!0):"initial"==h.width?k.width():h.width,o="next"==h.height?n.outerHeight(!0):"initial"==h.height?k.height():h.height;t.removeClass(x.active),n.addClass(x.active),e.insertAfter(k),e.remove(),"auto"!=h.width&&(k.css("width",i+h.jitter),g.verbose("Specifying width during animation",i)),"auto"!=h.height&&(k.css("height",o+h.jitter),g.verbose("Specifying height during animation",o));},nextSide:function nextSide(e){A=e,m=T.filter(e),A=T.index(m),0===m.length&&(g.set.defaultSide(),g.error(y.side)),g.verbose("Next side manually set to",m);},active:function active(){g.verbose("Setting new side to active",m),T.removeClass(x.active),m.addClass(x.active),h.onChange.call(m[0]),g.set.defaultSide();}},flip:{up:function up(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip up");else{g.debug("Flipping up",m);var e=g.get.transform.up();g.set.stageSize(),g.stage.above(),g.animate(e);}},down:function down(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip down");else{g.debug("Flipping down",m);var e=g.get.transform.down();g.set.stageSize(),g.stage.below(),g.animate(e);}},left:function left(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip left");else{g.debug("Flipping left",m);var e=g.get.transform.left();g.set.stageSize(),g.stage.left(),g.animate(e);}},right:function right(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip right");else{g.debug("Flipping right",m);var e=g.get.transform.right();g.set.stageSize(),g.stage.right(),g.animate(e);}},over:function over(){return!g.is.complete()||g.is.animating()||h.allowRepeats?void(g.is.animating()?g.queue("flip over"):(g.debug("Flipping over",m),g.set.stageSize(),g.stage.behind(),g.animate(g.get.transform.over()))):void g.debug("Side already visible",m);},back:function back(){return!g.is.complete()||g.is.animating()||h.allowRepeats?void(g.is.animating()?g.queue("flip back"):(g.debug("Flipping back",m),g.set.stageSize(),g.stage.behind(),g.animate(g.get.transform.back()))):void g.debug("Side already visible",m);}},get:{transform:{up:function up(){var e={y:-((t.outerHeight(!0)-m.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"};},down:function down(){var e={y:-((t.outerHeight(!0)-m.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"};},left:function left(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"};},right:function right(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"};},over:function over(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(180deg)"};},back:function back(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(-180deg)"};}},transitionEvent:function transitionEvent(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o){if(t.style[e]!==i)return o[e];}},nextSide:function nextSide(){return t.next(b.side).length>0?t.next(b.side):k.find(b.side).first();}},stage:{above:function above(){var e={origin:(t.outerHeight(!0)-m.outerHeight(!0))/2,depth:{active:m.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};g.verbose("Setting the initial animation position as above",m,e),S.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),m.addClass(x.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"});},below:function below(){var e={origin:(t.outerHeight(!0)-m.outerHeight(!0))/2,depth:{active:m.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};g.verbose("Setting the initial animation position as below",m,e),S.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),m.addClass(x.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"});},left:function left(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as left",m,n),S.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px)"});},right:function right(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as left",m,n),S.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px)"});},behind:function behind(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as behind",m,n),t.css({transform:"rotateY(0deg)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"});}},setting:function setting(t,n){if(g.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];e.isPlainObject(h[t])?e.extend(!0,h[t],n):h[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n;}},debug:function debug(){!h.silent&&h.debug&&(h.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,h.name+":"),g.debug.apply(console,arguments)));},verbose:function verbose(){!h.silent&&h.verbose&&h.debug&&(h.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),g.verbose.apply(console,arguments)));},error:function error(){h.silent||(g.error=Function.prototype.bind.call(console.error,console,h.name+":"),g.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;h.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500);},display:function display(){var t=h.name+":",n=0;s=!1,clearTimeout(g.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",p&&(t+=" '"+p+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,o){var r,s,l,c=E;return n=n||d,o=R||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},u?(E===i&&g.initialize(),g.invoke(c)):(E!==i&&E.invoke("destroy"),g.initialize());}),a!==i?a:this;},e.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function beforeChange(){},onChange:function onChange(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sidebar=function(o){var a,r=e(this),s=e(t),l=e(n),c=e("html"),u=e("head"),d=r.selector||"",f=new Date().getTime(),m=[],g=arguments[0],p="string"==typeof g,h=[].slice.call(arguments,1),v=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);};return r.each(function(){var r,b,y,x,C,w,k=e.isPlainObject(o)?e.extend(!0,{},e.fn.sidebar.settings,o):e.extend({},e.fn.sidebar.settings),S=k.selector,T=k.className,A=k.namespace,R=k.regExp,E=k.error,P="."+A,F="module-"+A,O=e(this),D=e(k.context),q=O.children(S.sidebar),j=D.children(S.fixed),z=D.children(S.pusher),M=this,I=O.data(F);w={initialize:function initialize(){w.debug("Initializing sidebar",o),w.create.id(),C=w.get.transitionEvent(),w.is.ios()&&w.set.ios(),k.delaySetup?v(w.setup.layout):w.setup.layout(),v(function(){w.setup.cache();}),w.instantiate();},instantiate:function instantiate(){w.verbose("Storing instance of module",w),I=w,O.data(F,w);},create:{id:function id(){y=(Math.random().toString(16)+"000000000").substr(2,8),b="."+y,w.verbose("Creating unique id for element",y);}},destroy:function destroy(){w.verbose("Destroying previous module for",O),O.off(P).removeData(F),w.is.ios()&&w.remove.ios(),D.off(b),s.off(b),l.off(b);},event:{clickaway:function clickaway(e){var t=z.find(e.target).length>0||z.is(e.target),n=D.is(e.target);t&&(w.verbose("User clicked on dimmed page"),w.hide()),n&&(w.verbose("User clicked on dimmable context (scaled out page)"),w.hide());},touch:function touch(e){},containScroll:function containScroll(e){M.scrollTop<=0&&(M.scrollTop=1),M.scrollTop+M.offsetHeight>=M.scrollHeight&&(M.scrollTop=M.scrollHeight-M.offsetHeight-1);},scroll:function scroll(t){0===e(t.target).closest(S.sidebar).length&&t.preventDefault();}},bind:{clickaway:function clickaway(){w.verbose("Adding clickaway events to context",D),k.closable&&D.on("click"+b,w.event.clickaway).on("touchend"+b,w.event.clickaway);},scrollLock:function scrollLock(){k.scrollLock&&(w.debug("Disabling page scroll"),s.on("DOMMouseScroll"+b,w.event.scroll)),w.verbose("Adding events to contain sidebar scroll"),l.on("touchmove"+b,w.event.touch),O.on("scroll"+P,w.event.containScroll);}},unbind:{clickaway:function clickaway(){w.verbose("Removing clickaway events from context",D),D.off(b);},scrollLock:function scrollLock(){w.verbose("Removing scroll lock from page"),l.off(b),s.off(b),O.off("scroll"+P);}},add:{inlineCSS:function inlineCSS(){var t,n=w.cache.width||O.outerWidth(),i=w.cache.height||O.outerHeight(),o=w.is.rtl(),a=w.get.direction(),s={left:n,right:-n,top:i,bottom:-i};o&&(w.verbose("RTL detected, flipping widths"),s.left=-n,s.right=n),t="<style>","left"===a||"right"===a?(w.debug("Adding CSS rules for animation distance",n),t+=" .ui.visible."+a+".sidebar ~ .fixed, .ui.visible."+a+".sidebar ~ .pusher {   -webkit-transform: translate3d("+s[a]+"px, 0, 0);           transform: translate3d("+s[a]+"px, 0, 0); }"):"top"!==a&&"bottom"!=a||(t+=" .ui.visible."+a+".sidebar ~ .fixed, .ui.visible."+a+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+s[a]+"px, 0);           transform: translate3d(0, "+s[a]+"px, 0); }"),w.is.ie()&&("left"===a||"right"===a?(w.debug("Adding CSS rules for animation distance",n),t+=" body.pushable > .ui.visible."+a+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+s[a]+"px, 0, 0);           transform: translate3d("+s[a]+"px, 0, 0); }"):"top"!==a&&"bottom"!=a||(t+=" body.pushable > .ui.visible."+a+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+s[a]+"px, 0);           transform: translate3d(0, "+s[a]+"px, 0); }"),t+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),t+="</style>",r=e(t).appendTo(u),w.debug("Adding sizing css to head",r);}},refresh:function refresh(){w.verbose("Refreshing selector cache"),D=e(k.context),q=D.children(S.sidebar),z=D.children(S.pusher),j=D.children(S.fixed),w.clear.cache();},refreshSidebars:function refreshSidebars(){w.verbose("Refreshing other sidebars"),q=D.children(S.sidebar);},repaint:function repaint(){w.verbose("Forcing repaint event"),M.style.display="none";M.offsetHeight;M.scrollTop=M.scrollTop,M.style.display="";},setup:{cache:function cache(){w.cache={width:O.outerWidth(),height:O.outerHeight(),rtl:"rtl"==O.css("direction")};},layout:function layout(){0===D.children(S.pusher).length&&(w.debug("Adding wrapper element for sidebar"),w.error(E.pusher),z=e('<div class="pusher" />'),D.children().not(S.omitted).not(q).wrapAll(z),w.refresh()),0!==O.nextAll(S.pusher).length&&O.nextAll(S.pusher)[0]===z[0]||(w.debug("Moved sidebar to correct parent element"),w.error(E.movedSidebar,M),O.detach().prependTo(D),w.refresh()),w.clear.cache(),w.set.pushable(),w.set.direction();}},attachEvents:function attachEvents(t,n){var i=e(t);n=e.isFunction(w[n])?w[n]:w.toggle,i.length>0?(w.debug("Attaching sidebar events to element",t,n),i.on("click"+P,n)):w.error(E.notFound,t);},show:function show(t){if(t=e.isFunction(t)?t:function(){},w.is.hidden()){if(w.refreshSidebars(),k.overlay&&(w.error(E.overlay),k.transition="overlay"),w.refresh(),w.othersActive())if(w.debug("Other sidebars currently visible"),k.exclusive){if("overlay"!=k.transition)return void w.hideOthers(w.show);w.hideOthers();}else k.transition="overlay";w.pushPage(function(){t.call(M),k.onShow.call(M);}),k.onChange.call(M),k.onVisible.call(M);}else w.debug("Sidebar is already visible");},hide:function hide(t){t=e.isFunction(t)?t:function(){},(w.is.visible()||w.is.animating())&&(w.debug("Hiding sidebar",t),w.refreshSidebars(),w.pullPage(function(){t.call(M),k.onHidden.call(M);}),k.onChange.call(M),k.onHide.call(M));},othersAnimating:function othersAnimating(){return q.not(O).filter("."+T.animating).length>0;},othersVisible:function othersVisible(){return q.not(O).filter("."+T.visible).length>0;},othersActive:function othersActive(){return w.othersVisible()||w.othersAnimating();},hideOthers:function hideOthers(e){var t=q.not(O).filter("."+T.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){i++,i==n&&e();});},toggle:function toggle(){w.verbose("Determining toggled direction"),w.is.hidden()?w.show():w.hide();},pushPage:function pushPage(t){var n,i,_o,a=w.get.transition(),r="overlay"===a||w.othersActive()?O:z;t=e.isFunction(t)?t:function(){},"scale down"==k.transition&&w.scrollToTop(),w.set.transition(a),w.repaint(),n=function n(){w.bind.clickaway(),w.add.inlineCSS(),w.set.animating(),w.set.visible();},i=function i(){w.set.dimmed();},_o=function o(e){e.target==r[0]&&(r.off(C+b,_o),w.remove.animating(),w.bind.scrollLock(),t.call(M));},r.off(C+b),r.on(C+b,_o),v(n),k.dimPage&&!w.othersVisible()&&v(i);},pullPage:function pullPage(t){var n,_i,o=w.get.transition(),a="overlay"==o||w.othersActive()?O:z;t=e.isFunction(t)?t:function(){},w.verbose("Removing context push state",w.get.direction()),w.unbind.clickaway(),w.unbind.scrollLock(),n=function n(){w.set.transition(o),w.set.animating(),w.remove.visible(),k.dimPage&&!w.othersVisible()&&z.removeClass(T.dimmed);},_i=function i(e){e.target==a[0]&&(a.off(C+b,_i),w.remove.animating(),w.remove.transition(),w.remove.inlineCSS(),("scale down"==o||k.returnScroll&&w.is.mobile())&&w.scrollBack(),t.call(M));},a.off(C+b),a.on(C+b,_i),v(n);},scrollToTop:function scrollToTop(){w.verbose("Scrolling to top of page to avoid animation issues"),x=e(t).scrollTop(),O.scrollTop(0),t.scrollTo(0,0);},scrollBack:function scrollBack(){w.verbose("Scrolling back to original page position"),t.scrollTo(0,x);},clear:{cache:function cache(){w.verbose("Clearing cached dimensions"),w.cache={};}},set:{ios:function ios(){c.addClass(T.ios);},pushed:function pushed(){D.addClass(T.pushed);},pushable:function pushable(){D.addClass(T.pushable);},dimmed:function dimmed(){z.addClass(T.dimmed);},active:function active(){O.addClass(T.active);},animating:function animating(){O.addClass(T.animating);},transition:function transition(e){e=e||w.get.transition(),O.addClass(e);},direction:function direction(e){e=e||w.get.direction(),O.addClass(T[e]);},visible:function visible(){O.addClass(T.visible);},overlay:function overlay(){O.addClass(T.overlay);}},remove:{inlineCSS:function inlineCSS(){w.debug("Removing inline css styles",r),r&&r.length>0&&r.remove();},ios:function ios(){c.removeClass(T.ios);},pushed:function pushed(){D.removeClass(T.pushed);},pushable:function pushable(){D.removeClass(T.pushable);},active:function active(){O.removeClass(T.active);},animating:function animating(){O.removeClass(T.animating);},transition:function transition(e){e=e||w.get.transition(),O.removeClass(e);},direction:function direction(e){e=e||w.get.direction(),O.removeClass(T[e]);},visible:function visible(){O.removeClass(T.visible);},overlay:function overlay(){O.removeClass(T.overlay);}},get:{direction:function direction(){return O.hasClass(T.top)?T.top:O.hasClass(T.right)?T.right:O.hasClass(T.bottom)?T.bottom:T.left;},transition:function transition(){var e,t=w.get.direction();return e=w.is.mobile()?"auto"==k.mobileTransition?k.defaultTransition.mobile[t]:k.mobileTransition:"auto"==k.transition?k.defaultTransition.computer[t]:k.transition,w.verbose("Determined transition",e),e;},transitionEvent:function transitionEvent(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o){if(t.style[e]!==i)return o[e];}}},is:{ie:function ie(){var e=!t.ActiveXObject&&"ActiveXObject"in t,n="ActiveXObject"in t;return e||n;},ios:function ios(){var e=navigator.userAgent,t=e.match(R.ios),n=e.match(R.mobileChrome);return!(!t||n)&&(w.verbose("Browser was found to be iOS",e),!0);},mobile:function mobile(){var e=navigator.userAgent,t=e.match(R.mobile);return t?(w.verbose("Browser was found to be mobile",e),!0):(w.verbose("Browser is not mobile, using regular transition",e),!1);},hidden:function hidden(){return!w.is.visible();},visible:function visible(){return O.hasClass(T.visible);},open:function open(){return w.is.visible();},closed:function closed(){return w.is.hidden();},vertical:function vertical(){return O.hasClass(T.top);},animating:function animating(){return D.hasClass(T.animating);},rtl:function rtl(){return w.cache.rtl===i&&(w.cache.rtl="rtl"==O.css("direction")),w.cache.rtl;}},setting:function setting(t,n){if(w.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,k,t);else{if(n===i)return k[t];e.isPlainObject(k[t])?e.extend(!0,k[t],n):k[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(n===i)return w[t];w[t]=n;}},debug:function debug(){!k.silent&&k.debug&&(k.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,k.name+":"),w.debug.apply(console,arguments)));},verbose:function verbose(){!k.silent&&k.verbose&&k.debug&&(k.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,k.name+":"),w.verbose.apply(console,arguments)));},error:function error(){k.silent||(w.error=Function.prototype.bind.call(console.error,console,k.name+":"),w.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;k.performance&&(t=new Date().getTime(),i=f||t,n=t-i,f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:M,"Execution Time":n})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500);},display:function display(){var t=k.name+":",n=0;f=!1,clearTimeout(w.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",d&&(t+=" '"+d+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),m=[];}},invoke:function invoke(t,n,o){var r,s,l,c=I;return n=n||h,o=M||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(w.error(E.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},p?(I===i&&w.initialize(),w.invoke(g)):(I!==i&&w.invoke("destroy"),w.initialize());}),a!==i?a:this;},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function onChange(){},onShow:function onShow(){},onHide:function onHide(){},onHidden:function onHidden(){},onVisible:function onVisible(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sticky=function(o){var a,r=e(this),s=r.selector||"",l=new Date().getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return r.each(function(){var r,m,g,p,h,v=e.isPlainObject(o)?e.extend(!0,{},e.fn.sticky.settings,o):e.extend({},e.fn.sticky.settings),b=v.className,y=v.namespace,x=v.error,C="."+y,w="module-"+y,k=e(this),S=e(t),T=e(v.scrollContext),A=(k.selector||"",k.data(w)),R=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);},E=this;h={initialize:function initialize(){h.determineContainer(),h.determineContext(),h.verbose("Initializing sticky",v,r),h.save.positions(),h.checkErrors(),h.bind.events(),v.observeChanges&&h.observeChanges(),h.instantiate();},instantiate:function instantiate(){h.verbose("Storing instance of module",h),A=h,k.data(w,h);},destroy:function destroy(){h.verbose("Destroying previous instance"),h.reset(),g&&g.disconnect(),p&&p.disconnect(),S.off("load"+C,h.event.load).off("resize"+C,h.event.resize),T.off("scrollchange"+C,h.event.scrollchange),k.removeData(w);},observeChanges:function observeChanges(){"MutationObserver"in t&&(g=new MutationObserver(h.event.documentChanged),p=new MutationObserver(h.event.changed),g.observe(n,{childList:!0,subtree:!0}),p.observe(E,{childList:!0,subtree:!0}),p.observe(m[0],{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",p));},determineContainer:function determineContainer(){r=v.container?e(v.container):k.offsetParent();},determineContext:function determineContext(){if(m=v.context?e(v.context):r,0===m.length)return void h.error(x.invalidContext,v.context,k);},checkErrors:function checkErrors(){if(h.is.hidden()&&h.error(x.visible,k),h.cache.element.height>h.cache.context.height)return h.reset(),void h.error(x.elementSize,k);},bind:{events:function events(){S.on("load"+C,h.event.load).on("resize"+C,h.event.resize),T.off("scroll"+C).on("scroll"+C,h.event.scroll).on("scrollchange"+C,h.event.scrollchange);}},event:{changed:function changed(e){clearTimeout(h.timer),h.timer=setTimeout(function(){h.verbose("DOM tree modified, updating sticky menu",e),h.refresh();},100);},documentChanged:function documentChanged(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==E||e(t).find(E).length>0)&&(h.debug("Element removed from DOM, tearing down events"),h.destroy());});});},load:function load(){h.verbose("Page contents finished loading"),R(h.refresh);},resize:function resize(){h.verbose("Window resized"),R(h.refresh);},scroll:function scroll(){R(function(){T.triggerHandler("scrollchange"+C,T.scrollTop());});},scrollchange:function scrollchange(e,t){h.stick(t),v.onScroll.call(E);}},refresh:function refresh(e){h.reset(),v.context||h.determineContext(),e&&h.determineContainer(),h.save.positions(),h.stick(),v.onReposition.call(E);},supports:{sticky:function sticky(){var t=e("<div/>");t[0];return t.addClass(b.supported),t.css("position").match("sticky");}},save:{lastScroll:function lastScroll(e){h.lastScroll=e;},elementScroll:function elementScroll(e){h.elementScroll=e;},positions:function positions(){var e={height:T.height()},t={margin:{top:parseInt(k.css("margin-top"),10),bottom:parseInt(k.css("margin-bottom"),10)},offset:k.offset(),width:k.outerWidth(),height:k.outerHeight()},n={offset:m.offset(),height:m.outerHeight()};({height:r.outerHeight()});h.is.standardScroll()||(h.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=T.scrollTop(),e.left=T.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),h.cache={fits:t.height<e.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},h.set.containerSize(),h.set.size(),h.stick(),h.debug("Caching element positions",h.cache);}},get:{direction:function direction(e){var t="down";return e=e||T.scrollTop(),h.lastScroll!==i&&(h.lastScroll<e?t="down":h.lastScroll>e&&(t="up")),t;},scrollChange:function scrollChange(e){return e=e||T.scrollTop(),h.lastScroll?e-h.lastScroll:0;},currentElementScroll:function currentElementScroll(){return h.elementScroll?h.elementScroll:h.is.top()?Math.abs(parseInt(k.css("top"),10))||0:Math.abs(parseInt(k.css("bottom"),10))||0;},elementScroll:function elementScroll(e){e=e||T.scrollTop();var t=h.cache.element,n=h.cache.scrollContext,i=h.get.scrollChange(e),o=t.height-n.height+v.offset,a=h.get.currentElementScroll(),r=a+i;return a=h.cache.fits||r<0?0:r>o?o:r;}},remove:{lastScroll:function lastScroll(){delete h.lastScroll;},elementScroll:function elementScroll(e){delete h.elementScroll;},offset:function offset(){k.css("margin-top","");}},set:{offset:function offset(){h.verbose("Setting offset on element",v.offset),k.css("margin-top",v.offset);},containerSize:function containerSize(){var e=r.get(0).tagName;"HTML"===e||"body"==e?h.determineContainer():Math.abs(r.outerHeight()-h.cache.context.height)>v.jitter&&(h.debug("Context has padding, specifying exact height for container",h.cache.context.height),r.css({height:h.cache.context.height}));},minimumSize:function minimumSize(){var e=h.cache.element;r.css("min-height",e.height);},scroll:function scroll(e){h.debug("Setting scroll on element",e),h.elementScroll!=e&&(h.is.top()&&k.css("bottom","").css("top",-e),h.is.bottom()&&k.css("top","").css("bottom",e));},size:function size(){0!==h.cache.element.height&&0!==h.cache.element.width&&(E.style.setProperty("width",h.cache.element.width+"px","important"),E.style.setProperty("height",h.cache.element.height+"px","important"));}},is:{standardScroll:function standardScroll(){return T[0]==t;},top:function top(){return k.hasClass(b.top);},bottom:function bottom(){return k.hasClass(b.bottom);},initialPosition:function initialPosition(){return!h.is.fixed()&&!h.is.bound();},hidden:function hidden(){return!k.is(":visible");},bound:function bound(){return k.hasClass(b.bound);},fixed:function fixed(){return k.hasClass(b.fixed);}},stick:function stick(e){var t=e||T.scrollTop(),n=h.cache,i=n.fits,o=n.element,a=n.scrollContext,r=n.context,s=h.is.bottom()&&v.pushing?v.bottomOffset:v.offset,e={top:t+s,bottom:t+s+a.height},l=(h.get.direction(e.top),i?0:h.get.elementScroll(e.top)),c=!i,u=0!==o.height;u&&(h.is.initialPosition()?e.top>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):e.top>o.top&&(o.height+e.top-l>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):(h.debug("Initial element position is fixed"),h.fixTop())):h.is.fixed()?h.is.top()?e.top<=o.top?(h.debug("Fixed element reached top of container"),h.setInitialPosition()):o.height+e.top-l>=r.bottom?(h.debug("Fixed element reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(l),h.save.lastScroll(e.top),h.save.elementScroll(l)):h.is.bottom()&&(e.bottom-o.height<=o.top?(h.debug("Bottom fixed rail has reached top of container"),h.setInitialPosition()):e.bottom>=r.bottom?(h.debug("Bottom fixed rail has reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(l),h.save.lastScroll(e.top),h.save.elementScroll(l))):h.is.bottom()&&(e.top<=o.top?(h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),h.setInitialPosition()):v.pushing?h.is.bound()&&e.bottom<=r.bottom&&(h.debug("Fixing bottom attached element to bottom of browser."),h.fixBottom()):h.is.bound()&&e.top<=r.bottom-o.height&&(h.debug("Fixing bottom attached element to top of browser."),h.fixTop())));},bindTop:function bindTop(){h.debug("Binding element to top of parent container"),h.remove.offset(),k.css({left:"",top:"",marginBottom:""}).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top),v.onTop.call(E),v.onUnstick.call(E);},bindBottom:function bindBottom(){h.debug("Binding element to bottom of parent container"),h.remove.offset(),k.css({left:"",top:""}).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom),v.onBottom.call(E),v.onUnstick.call(E);},setInitialPosition:function setInitialPosition(){h.debug("Returning to initial position"),h.unfix(),h.unbind();},fixTop:function fixTop(){h.debug("Fixing element to top of page"),h.set.minimumSize(),h.set.offset(),k.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top),v.onStick.call(E);},fixBottom:function fixBottom(){h.debug("Sticking element to bottom of page"),h.set.minimumSize(),h.set.offset(),k.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom),v.onStick.call(E);},unbind:function unbind(){h.is.bound()&&(h.debug("Removing container bound position on element"),h.remove.offset(),k.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom));},unfix:function unfix(){h.is.fixed()&&(h.debug("Removing fixed position on element"),h.remove.offset(),k.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom),v.onUnstick.call(E));},reset:function reset(){h.debug("Resetting elements position"),h.unbind(),h.unfix(),h.resetCSS(),h.remove.offset(),h.remove.lastScroll();},resetCSS:function resetCSS(){k.css({width:"",height:""}),r.css({height:""});},setting:function setting(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];v[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n;}},debug:function debug(){!v.silent&&v.debug&&(v.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,v.name+":"),h.debug.apply(console,arguments)));},verbose:function verbose(){!v.silent&&v.verbose&&v.debug&&(v.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),h.verbose.apply(console,arguments)));},error:function error(){v.silent||(h.error=Function.prototype.bind.call(console.error,console,v.name+":"),h.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;v.performance&&(t=new Date().getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,0);},display:function display(){var t=v.name+":",n=0;l=!1,clearTimeout(h.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),c=[];}},invoke:function invoke(t,n,o){var r,s,l,c=A;return n=n||f,o=E||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},d?(A===i&&h.initialize(),h.invoke(u)):(A!==i&&A.invoke("destroy"),h.initialize());}),a!==i?a:this;},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,observeChanges:!1,onReposition:function onReposition(){},onScroll:function onScroll(){},onStick:function onStick(){},onUnstick:function onUnstick(){},onTop:function onTop(){},onBottom:function onBottom(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.tab=function(o){var a,r=e(e.isFunction(this)?t:this),s=r.selector||"",l=new Date().getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1),m=!1;return r.each(function(){var g,p,h,v,b,y,x=e.isPlainObject(o)?e.extend(!0,{},e.fn.tab.settings,o):e.extend({},e.fn.tab.settings),C=x.className,w=x.metadata,k=x.selector,S=x.error,T="."+x.namespace,A="module-"+x.namespace,R=e(this),E={},P=!0,F=0,O=this,D=R.data(A);b={initialize:function initialize(){b.debug("Initializing tab menu item",R),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,p),x.auto&&b.set.auto(),b.bind.events(),x.history&&!m&&(b.initializeHistory(),m=!0),b.instantiate();},instantiate:function instantiate(){b.verbose("Storing instance of module",b),D=b,R.data(A,b);},destroy:function destroy(){b.debug("Destroying tabs",R),R.removeData(A).off(T);},bind:{events:function events(){e.isWindow(O)||(b.debug("Attaching tab activation events to element",R),R.on("click"+T,b.event.click));}},determineTabs:function determineTabs(){var t;"parent"===x.context?(R.closest(k.ui).length>0?(t=R.closest(k.ui),b.verbose("Using closest UI element as parent",t)):t=R,g=t.parent(),b.verbose("Determined parent element for creating context",g)):x.context?(g=e(x.context),b.verbose("Using selector for tab context",x.context,g)):g=e("body"),x.childrenOnly?(p=g.children(k.tabs),b.debug("Searching tab context children for tabs",g,p)):(p=g.find(k.tabs),b.debug("Searching tab context for tabs",g,p));},fix:{callbacks:function callbacks(){e.isPlainObject(o)&&(o.onTabLoad||o.onTabInit)&&(o.onTabLoad&&(o.onLoad=o.onTabLoad,delete o.onTabLoad,b.error(S.legacyLoad,o.onLoad)),o.onTabInit&&(o.onFirstLoad=o.onTabInit,delete o.onTabInit,b.error(S.legacyInit,o.onFirstLoad)),x=e.extend(!0,{},e.fn.tab.settings,o));}},initializeHistory:function initializeHistory(){if(b.debug("Initializing page state"),e.address===i)return b.error(S.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),x.path===!1)return b.error(S.path),!1;e.address.history(!0).state(x.path);}e.address.bind("change",b.event.history.change);},event:{click:function click(t){var n=e(this).data(w.tab);n!==i?(x.history?(b.verbose("Updating page state",t),e.address.value(n)):(b.verbose("Changing tab",t),b.changeTab(n)),t.preventDefault()):b.debug("No tab specified");},history:{change:function change(t){var n=t.pathNames.join("/")||b.get.initialPath(),o=x.templates.determineTitle(n)||!1;b.performance.display(),b.debug("History change event",n,t),y=t,n!==i&&b.changeTab(n),o&&e.address.title(o);}}},refresh:function refresh(){h&&(b.debug("Refreshing tab",h),b.changeTab(h));},cache:{read:function read(e){return e!==i&&E[e];},add:function add(e,t){e=e||h,b.debug("Adding cached content for",e),E[e]=t;},remove:function remove(e){e=e||h,b.debug("Removing cached content for",e),delete E[e];}},set:{auto:function auto(){var t="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(x.apiSettings)?x.apiSettings.url=t:x.apiSettings={url:t};},loading:function loading(e){var t=b.get.tabElement(e),n=t.hasClass(C.loading);n||(b.verbose("Setting loading state for",t),t.addClass(C.loading).siblings(p).removeClass(C.active+" "+C.loading),t.length>0&&x.onRequest.call(t[0],e));},state:function state(t){e.address.value(t);}},changeTab:function changeTab(n){var i=t.history&&t.history.pushState,o=i&&x.ignoreFirstLoad&&P,a=x.auto||e.isPlainObject(x.apiSettings),r=a&&!o?b.utilities.pathToArray(n):b.get.defaultPathArray(n);n=b.utilities.arrayToPath(r),e.each(r,function(t,i){var s,l,c,u,d=r.slice(0,t+1),f=b.utilities.arrayToPath(d),m=b.is.tab(f),p=t+1==r.length,k=b.get.tabElement(f);if(b.verbose("Looking for tab",i),m){if(b.verbose("Tab was found",i),h=f,v=b.utilities.filterArray(r,d),p?u=!0:(l=r.slice(0,t+2),c=b.utilities.arrayToPath(l),u=!b.is.tab(c),u&&b.verbose("Tab parameters found",l)),u&&a)return o?(b.debug("Ignoring remote content on first tab load",f),P=!1,b.cache.add(n,k.html()),b.activate.all(f),x.onFirstLoad.call(k[0],f,v,y),x.onLoad.call(k[0],f,v,y)):(b.activate.navigation(f),b.fetch.content(f,n)),!1;b.debug("Opened local tab",f),b.activate.all(f),b.cache.read(f)||(b.cache.add(f,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(k[0],f,v,y)),x.onLoad.call(k[0],f,v,y);}else{if(n.search("/")!=-1||""===n)return b.error(S.missingTab,R,g,f),!1;if(s=e("#"+n+', a[name="'+n+'"]'),f=s.closest("[data-tab]").data(w.tab),k=b.get.tabElement(f),s&&s.length>0&&f)return b.debug("Anchor link used, opening parent tab",k,s),k.hasClass(C.active)||setTimeout(function(){b.scrollTo(s);},0),b.activate.all(f),b.cache.read(f)||(b.cache.add(f,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(k[0],f,v,y)),x.onLoad.call(k[0],f,v,y),!1;}});},scrollTo:function scrollTo(t){var i=!!(t&&t.length>0)&&t.offset().top;i!==!1&&(b.debug("Forcing scroll to an in-page link in a hidden tab",i,t),e(n).scrollTop(i));},update:{content:function content(t,n,o){var a=b.get.tabElement(t),r=a[0];o=o!==i?o:x.evaluateScripts,"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&"string"!=typeof n?a.empty().append(e(n).clone(!0)):o?(b.debug("Updating HTML and evaluating inline scripts",t,n),a.html(n)):(b.debug("Updating HTML",t,n),r.innerHTML=n);}},fetch:{content:function content(t,n){var o,a,r=b.get.tabElement(t),s={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function onSuccess(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(r[0],t,v,y),x.onLoad.call(r[0],t,v,y),"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&r.children().length>0?setTimeout(function(){var e=r.children().clone(!0);e=e.not("script"),b.cache.add(n,e);},0):b.cache.add(n,r.html());},urlData:{tab:n}},l=r.api("get request")||!1,c=l&&"pending"===l.state();n=n||t,a=b.cache.read(n),x.cache&&a?(b.activate.tab(t),b.debug("Adding cached content",n),"once"==x.evaluateScripts?b.update.content(t,a,!1):b.update.content(t,a),x.onLoad.call(r[0],t,v,y)):c?(b.set.loading(t),b.debug("Content is already loading",n)):e.api!==i?(o=e.extend(!0,{},x.apiSettings,s),b.debug("Retrieving remote content",n,o),b.set.loading(t),r.api(o)):b.error(S.api);}},activate:{all:function all(e){b.activate.tab(e),b.activate.navigation(e);},tab:function tab(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(p):p.not(t),i=t.hasClass(C.active);b.verbose("Showing tab content for",t),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading),t.length>0&&x.onVisible.call(t[0],e));},navigation:function navigation(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(r):r.not(t),i=t.hasClass(C.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading));}},deactivate:{all:function all(){b.deactivate.navigation(),b.deactivate.tabs();},navigation:function navigation(){r.removeClass(C.active);},tabs:function tabs(){p.removeClass(C.active+" "+C.loading);}},is:{tab:function tab(e){return e!==i&&b.get.tabElement(e).length>0;}},get:{initialPath:function initialPath(){return r.eq(0).data(w.tab)||p.eq(0).data(w.tab);},path:function path(){return e.address.value();},defaultPathArray:function defaultPathArray(e){return b.utilities.pathToArray(b.get.defaultPath(e));},defaultPath:function defaultPath(e){var t=r.filter("[data-"+w.tab+'^="'+e+'/"]').eq(0),n=t.data(w.tab)||!1;if(n){if(b.debug("Found default tab",n),F<x.maxDepth)return F++,b.get.defaultPath(n);b.error(S.recursion);}else b.debug("No default tabs found for",e,p);return F=0,e;},navElement:function navElement(e){return e=e||h,r.filter("[data-"+w.tab+'="'+e+'"]');},tabElement:function tabElement(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=p.filter("[data-"+w.tab+'="'+e+'"]'),n=p.filter("[data-"+w.tab+'="'+o+'"]'),t.length>0?t:n;},tab:function tab(){return h;}},utilities:{filterArray:function filterArray(t,n){return e.grep(t,function(t){return e.inArray(t,n)==-1;});},last:function last(t){return!!e.isArray(t)&&t[t.length-1];},pathToArray:function pathToArray(e){return e===i&&(e=h),"string"==typeof e?e.split("/"):[e];},arrayToPath:function arrayToPath(t){return!!e.isArray(t)&&t.join("/");}},setting:function setting(t,n){if(b.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,x,t);else{if(n===i)return x[t];e.isPlainObject(x[t])?e.extend(!0,x[t],n):x[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(n===i)return b[t];b[t]=n;}},debug:function debug(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)));},verbose:function verbose(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)));},error:function error(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;x.performance&&(t=new Date().getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500);},display:function display(){var t=x.name+":",n=0;l=!1,clearTimeout(b.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),c=[];}},invoke:function invoke(t,n,o){var r,s,l,c=D;return n=n||f,o=O||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(b.error(S.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},d?(D===i&&b.initialize(),b.invoke(u)):(D!==i&&D.invoke("destroy"),b.initialize());}),a!==i?a:this;},e.tab=function(){e(t).tab.apply(this,arguments);},e.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function onFirstLoad(e,t,n){},onLoad:function onLoad(e,t,n){},onVisible:function onVisible(e,t,n){},onRequest:function onRequest(e,t,n){},templates:{determineTitle:function determineTitle(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.transition=function(){var o,a=e(this),r=a.selector||"",s=new Date().getTime(),l=[],c=arguments,u=c[0],d=[].slice.call(arguments,1),f="string"==typeof u;t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);};return a.each(function(t){var m,g,p,h,v,b,y,x,C,w=e(this),k=this;C={initialize:function initialize(){m=C.get.settings.apply(k,c),h=m.className,p=m.error,v=m.metadata,x="."+m.namespace,y="module-"+m.namespace,g=w.data(y)||C,b=C.get.animationEndEvent(),f&&(f=C.invoke(u)),f===!1&&(C.verbose("Converted arguments into settings object",m),m.interval?C.delay(m.animate):C.animate(),C.instantiate());},instantiate:function instantiate(){C.verbose("Storing instance of module",C),g=C,w.data(y,g);},destroy:function destroy(){C.verbose("Destroying previous module for",k),w.removeData(y);},refresh:function refresh(){C.verbose("Refreshing display type on next animation"),delete C.displayType;},forceRepaint:function forceRepaint(){C.verbose("Forcing element repaint");var e=w.parent(),t=w.next();0===t.length?w.detach().appendTo(e):w.detach().insertBefore(t);},repaint:function repaint(){C.verbose("Repainting element");k.offsetWidth;},delay:function delay(e){var n,o,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),e=e!==i?e:m.interval,n="auto"==m.reverse&&r==h.outward,o=n||1==m.reverse?(a.length-t)*m.interval:t*m.interval,C.debug("Delaying animation by",o),setTimeout(C.animate,o);},animate:function animate(e){if(m=e||m,!C.is.supported())return C.error(p.support),!1;if(C.debug("Preparing animation",m.animation),C.is.animating()){if(m.queue)return!m.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",m.animation):C.queue(m.animation),!1;if(!m.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",m.animation),!1;C.debug("New animation started, completing previous early",m.animation),g.complete();}C.can.animate()?C.set.animating(m.animation):C.error(p.noAnimation,m.animation,k);},reset:function reset(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating();},queue:function queue(e){C.debug("Queueing animation of",e),C.queuing=!0,w.one(b+".queue"+x,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,m);});},complete:function complete(e){C.debug("Animation complete",m.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),m.onComplete.call(k)));},force:{visible:function visible(){var e=w.attr("style"),t=C.get.userStyle(),n=C.get.displayType(),o=t+"display: "+n+" !important;",a=w.css("display"),r=e===i||""===e;a!==n?(C.verbose("Overriding default display to show element",n),w.attr("style",o)):r&&w.removeAttr("style");},hidden:function hidden(){var e=w.attr("style"),t=w.css("display"),n=e===i||""===e;"none"===t||C.is.hidden()?n&&w.removeAttr("style"):(C.verbose("Overriding default display to hide element"),w.css("display","none"));}},has:{direction:function direction(t){var n=!1;return t=t||m.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t!==h.inward&&t!==h.outward||(n=!0);})),n;},inlineDisplay:function inlineDisplay(){var t=w.attr("style")||"";return e.isArray(t.match(/display.*?;/,""));}},set:{animating:function animating(e){var t;C.remove.completeCallback(),e=e||m.animation,t=C.get.animationClass(e),C.save.animation(t),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(t);},duration:function duration(e,t){t=t||m.duration,t="number"==typeof t?t+"ms":t,(t||0===t)&&(C.verbose("Setting animation duration",t),w.css({"animation-duration":t}));},direction:function direction(e){e=e||C.get.direction(),e==h.inward?C.set.inward():C.set.outward();},looping:function looping(){C.debug("Transition set to loop"),w.addClass(h.looping);},hidden:function hidden(){w.addClass(h.transition).addClass(h.hidden);},inward:function inward(){C.debug("Setting direction to inward"),w.removeClass(h.outward).addClass(h.inward);},outward:function outward(){C.debug("Setting direction to outward"),w.removeClass(h.inward).addClass(h.outward);},visible:function visible(){w.addClass(h.transition).addClass(h.visible);}},start:{animation:function animation(e){e=e||C.get.animationClass(),C.debug("Starting tween",e),w.addClass(e).one(b+".complete"+x,C.complete),m.useFailSafe&&C.add.failSafe(),C.set.duration(m.duration),m.onStart.call(k);}},save:{animation:function animation(e){C.cache||(C.cache={}),C.cache.animation=e;},displayType:function displayType(e){"none"!==e&&w.data(v.displayType,e);},transitionExists:function transitionExists(t,n){e.fn.transition.exists[t]=n,C.verbose("Saving existence of transition",t,n);}},restore:{conditions:function conditions(){var e=C.get.currentAnimation();e&&(w.removeClass(e),C.verbose("Removing animation class",C.cache)),C.remove.duration();}},add:{failSafe:function failSafe(){var e=C.get.duration();C.timer=setTimeout(function(){w.triggerHandler(b);},e+m.failSafeDelay),C.verbose("Adding fail safe timer",C.timer);}},remove:{animating:function animating(){w.removeClass(h.animating);},animationCallbacks:function animationCallbacks(){C.remove.queueCallback(),C.remove.completeCallback();},queueCallback:function queueCallback(){w.off(".queue"+x);},completeCallback:function completeCallback(){w.off(".complete"+x);},display:function display(){w.css("display","");},direction:function direction(){w.removeClass(h.inward).removeClass(h.outward);},duration:function duration(){w.css("animation-duration","");},failSafe:function failSafe(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer);},hidden:function hidden(){w.removeClass(h.hidden);},visible:function visible(){w.removeClass(h.visible);},looping:function looping(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),w.removeClass(h.looping));},transition:function transition(){w.removeClass(h.visible).removeClass(h.hidden);}},get:{settings:function settings(t,n,i){return"object"==(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))?e.extend(!0,{},e.fn.transition.settings,t):"function"==typeof i?e.extend({},e.fn.transition.settings,{animation:t,onComplete:i,duration:n}):"string"==typeof n||"number"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,duration:n}):"object"==(typeof n==="undefined"?"undefined":(0,_typeof3.default)(n))?e.extend({},e.fn.transition.settings,n,{animation:t}):"function"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,onComplete:n}):e.extend({},e.fn.transition.settings,{animation:t});},animationClass:function animationClass(e){var t=e||m.animation,n=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return h.animating+" "+h.transition+" "+n+t;},currentAnimation:function currentAnimation(){return!(!C.cache||C.cache.animation===i)&&C.cache.animation;},currentDirection:function currentDirection(){return C.is.inward()?h.inward:h.outward;},direction:function direction(){return C.is.hidden()||!C.is.visible()?h.inward:h.outward;},animationDirection:function animationDirection(t){var n;return t=t||m.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t===h.inward?n=h.inward:t===h.outward&&(n=h.outward);})),!!n&&n;},duration:function duration(e){return e=e||m.duration,e===!1&&(e=w.css("animation-duration")||0),"string"==typeof e?e.indexOf("ms")>-1?parseFloat(e):1e3*parseFloat(e):e;},displayType:function displayType(e){return e=e===i||e,m.displayType?m.displayType:(e&&w.data(v.displayType)===i&&C.can.transition(!0),w.data(v.displayType));},userStyle:function userStyle(e){return e=e||w.attr("style")||"",e.replace(/display.*?;/,"");},transitionExists:function transitionExists(t){return e.fn.transition.exists[t];},animationStartEvent:function animationStartEvent(){var e,t=n.createElement("div"),o={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in o){if(t.style[e]!==i)return o[e];}return!1;},animationEndEvent:function animationEndEvent(){var e,t=n.createElement("div"),o={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in o){if(t.style[e]!==i)return o[e];}return!1;}},can:{transition:function transition(t){var n,o,a,r,s,l,c=m.animation,u=C.get.transitionExists(c),d=C.get.displayType(!1);if(u===i||t){if(C.verbose("Determining whether animation exists"),n=w.attr("class"),o=w.prop("tagName"),a=e("<"+o+" />").addClass(n).insertAfter(w),r=a.addClass(c).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"),s=a.addClass(h.inward).css("animationName"),d||(d=a.attr("class",n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"),C.verbose("Determining final display state",d),C.save.displayType(d)),a.remove(),r!=s)C.debug("Direction exists for animation",c),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",c);C.debug("Static animation found",c,d),l=!1;}C.save.transitionExists(c,l);}return u!==i?u:l;},animate:function animate(){return C.can.transition()!==i;}},is:{animating:function animating(){return w.hasClass(h.animating);},inward:function inward(){return w.hasClass(h.inward);},outward:function outward(){return w.hasClass(h.outward);},looping:function looping(){return w.hasClass(h.looping);},occurring:function occurring(e){return e=e||m.animation,e="."+e.replace(" ","."),w.filter(e).length>0;},visible:function visible(){return w.is(":visible");},hidden:function hidden(){return"hidden"===w.css("visibility");},supported:function supported(){return b!==!1;}},hide:function hide(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),k.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),m.onHide.call(k),m.onComplete.call(k);},show:function show(e){C.verbose("Showing element",e),C.remove.hidden(),C.set.visible(),C.force.visible(),m.onShow.call(k),m.onComplete.call(k);},toggle:function toggle(){C.is.visible()?C.hide():C.show();},stop:function stop(){C.debug("Stopping current animation"),w.triggerHandler(b);},stopAll:function stopAll(){C.debug("Stopping all animation"),C.remove.queueCallback(),w.triggerHandler(b);},clear:{queue:function queue(){C.debug("Clearing animation queue"),C.remove.queueCallback();}},enable:function enable(){C.verbose("Starting animation"),w.removeClass(h.disabled);},disable:function disable(){C.debug("Stopping animation"),w.addClass(h.disabled);},setting:function setting(t,n){if(C.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(n===i)return C[t];C[t]=n;}},debug:function debug(){!m.silent&&m.debug&&(m.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,m.name+":"),C.debug.apply(console,arguments)));},verbose:function verbose(){!m.silent&&m.verbose&&m.debug&&(m.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),C.verbose.apply(console,arguments)));},error:function error(){m.silent||(C.error=Function.prototype.bind.call(console.error,console,m.name+":"),C.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;m.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:k,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500);},display:function display(){var t=m.name+":",n=0;s=!1,clearTimeout(C.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,a){var r,s,l,c=g;return n=n||d,a=k||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s!==i&&s;}},C.initialize();}),o!==i?o:this;},e.fn.transition.exists={},e.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function onStart(){},onComplete:function onComplete(){},onShow:function onShow(){},onHide:function onHide(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}};}(jQuery,window,document),function(e,t,n,i){"use strict";var t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.api=e.fn.api=function(n){var o,a=e(e.isFunction(this)?t:this),r=a.selector||"",s=new Date().getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m,g,p,h,v=e.isPlainObject(n)?e.extend(!0,{},e.fn.api.settings,n):e.extend({},e.fn.api.settings),b=v.namespace,y=v.metadata,x=v.selector,C=v.error,w=v.className,k="."+b,S="module-"+b,T=e(this),A=T.closest(x.form),R=v.stateContext?e(v.stateContext):T,E=this,P=R[0],F=T.data(S);h={initialize:function initialize(){u||h.bind.events(),h.instantiate();},instantiate:function instantiate(){h.verbose("Storing instance of module",h),F=h,T.data(S,F);},destroy:function destroy(){h.verbose("Destroying previous module for",E),T.removeData(S).off(k);},bind:{events:function events(){var e=h.get.event();e?(h.verbose("Attaching API events to element",e),T.on(e+k,h.event.trigger)):"now"==v.on&&(h.debug("Querying API endpoint immediately"),h.query());}},decode:{json:function json(e){if(e!==i&&"string"==typeof e)try{e=JSON.parse(e);}catch(t){}return e;}},read:{cachedResponse:function cachedResponse(e){var n;return t.Storage===i?void h.error(C.noStorage):(n=sessionStorage.getItem(e),h.debug("Using cached response",e,n),n=h.decode.json(n));}},write:{cachedResponse:function cachedResponse(n,o){return o&&""===o?void h.debug("Response empty, not caching",o):t.Storage===i?void h.error(C.noStorage):(e.isPlainObject(o)&&(o=(0,_stringify2.default)(o)),sessionStorage.setItem(n,o),void h.verbose("Storing cached response for url",n,o));}},query:function query(){if(h.is.disabled())return void h.debug("Element is disabled API request aborted");if(h.is.loading()){if(!v.interruptRequests)return void h.debug("Cancelling request, previous request is still pending");h.debug("Interrupting previous request"),h.abort();}return v.defaultData&&e.extend(!0,v.urlData,h.get.defaultData()),v.serializeForm&&(v.data=h.add.formData(v.data)),f=h.get.settings(),f===!1?(h.cancelled=!0,void h.error(C.beforeSend)):(h.cancelled=!1,m=h.get.templatedURL(),m||h.is.mocked()?(m=h.add.urlData(m),m||h.is.mocked()?(f.url=v.base+m,a=e.extend(!0,{},v,{type:v.method||v.type,data:g,url:v.base+m,beforeSend:v.beforeXHR,success:function success(){},failure:function failure(){},complete:function complete(){}}),h.debug("Querying URL",a.url),h.verbose("Using AJAX settings",a),"local"===v.cache&&h.read.cachedResponse(m)?(h.debug("Response returned from local cache"),h.request=h.create.request(),void h.request.resolveWith(P,[h.read.cachedResponse(m)])):void(v.throttle?v.throttleFirstRequest||h.timer?(h.debug("Throttling request",v.throttle),clearTimeout(h.timer),h.timer=setTimeout(function(){h.timer&&delete h.timer,h.debug("Sending throttled request",g,a.method),h.send.request();},v.throttle)):(h.debug("Sending request",g,a.method),h.send.request(),h.timer=setTimeout(function(){},v.throttle)):(h.debug("Sending request",g,a.method),h.send.request()))):void 0):void h.error(C.missingURL));},should:{removeError:function removeError(){return v.hideError===!0||"auto"===v.hideError&&!h.is.form();}},is:{disabled:function disabled(){return T.filter(x.disabled).length>0;},expectingJSON:function expectingJSON(){return"json"===v.dataType||"jsonp"===v.dataType;},form:function form(){return T.is("form")||R.is("form");},mocked:function mocked(){return v.mockResponse||v.mockResponseAsync||v.response||v.responseAsync;},input:function input(){return T.is("input");},loading:function loading(){return!!h.request&&"pending"==h.request.state();},abortedRequest:function abortedRequest(e){return e&&e.readyState!==i&&0===e.readyState?(h.verbose("XHR request determined to be aborted"),!0):(h.verbose("XHR request was not aborted"),!1);},validResponse:function validResponse(t){return h.is.expectingJSON()&&e.isFunction(v.successTest)?(h.debug("Checking JSON returned success",v.successTest,t),v.successTest(t)?(h.debug("Response passed success test",t),!0):(h.debug("Response failed success test",t),!1)):(h.verbose("Response is not JSON, skipping validation",v.successTest,t),!0);}},was:{cancelled:function cancelled(){return h.cancelled||!1;},succesful:function succesful(){return h.request&&"resolved"==h.request.state();},failure:function failure(){return h.request&&"rejected"==h.request.state();},complete:function complete(){return h.request&&("resolved"==h.request.state()||"rejected"==h.request.state());}},add:{urlData:function urlData(t,n){var o,a;return t&&(o=t.match(v.regExp.required),a=t.match(v.regExp.optional),n=n||v.urlData,o&&(h.debug("Looking for required URL variables",o),e.each(o,function(o,a){var r=a.indexOf("$")!==-1?a.substr(2,a.length-3):a.substr(1,a.length-2),s=e.isPlainObject(n)&&n[r]!==i?n[r]:T.data(r)!==i?T.data(r):R.data(r)!==i?R.data(r):n[r];return s===i?(h.error(C.requiredParameter,r,t),t=!1,!1):(h.verbose("Found required variable",r,s),s=v.encodeParameters?h.get.urlEncodedValue(s):s,t=t.replace(a,s),void 0);})),a&&(h.debug("Looking for optional URL variables",o),e.each(a,function(o,a){var r=a.indexOf("$")!==-1?a.substr(3,a.length-4):a.substr(2,a.length-3),s=e.isPlainObject(n)&&n[r]!==i?n[r]:T.data(r)!==i?T.data(r):R.data(r)!==i?R.data(r):n[r];s!==i?(h.verbose("Optional variable Found",r,s),t=t.replace(a,s)):(h.verbose("Optional variable not found",r),t=t.indexOf("/"+a)!==-1?t.replace("/"+a,""):t.replace(a,""));}))),t;},formData:function formData(t){var n,o=e.fn.serializeObject!==i,a=o?A.serializeObject():A.serialize();return t=t||v.data,n=e.isPlainObject(t),n?o?(h.debug("Extending existing data with form data",t,a),t=e.extend(!0,{},t,a)):(h.error(C.missingSerialize),h.debug("Cant extend data. Replacing data with form data",t,a),t=a):(h.debug("Adding form data",a),t=a),t;}},send:{request:function request(){h.set.loading(),h.request=h.create.request(),h.is.mocked()?h.mockedXHR=h.create.mockedXHR():h.xhr=h.create.xhr(),v.onRequest.call(P,h.request,h.xhr);}},event:{trigger:function trigger(e){h.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault();},xhr:{always:function always(){},done:function done(t,n,i){var o=this,a=new Date().getTime()-p,r=v.loadingDuration-a,s=!!e.isFunction(v.onResponse)&&(h.is.expectingJSON()?v.onResponse.call(o,e.extend(!0,{},t)):v.onResponse.call(o,t));r=r>0?r:0,s&&(h.debug("Modified API response in onResponse callback",v.onResponse,s,t),t=s),r>0&&h.debug("Response completed early delaying state change by",r),setTimeout(function(){h.is.validResponse(t)?h.request.resolveWith(o,[t,i]):h.request.rejectWith(o,[i,"invalid"]);},r);},fail:function fail(e,t,n){var i=this,o=new Date().getTime()-p,a=v.loadingDuration-o;a=a>0?a:0,a>0&&h.debug("Response completed early delaying state change by",a),setTimeout(function(){h.is.abortedRequest(e)?h.request.rejectWith(i,[e,"aborted",n]):h.request.rejectWith(i,[e,"error",t,n]);},a);}},request:{done:function done(e,t){h.debug("Successful API Response",e),"local"===v.cache&&m&&(h.write.cachedResponse(m,e),h.debug("Saving server response locally",h.cache)),v.onSuccess.call(P,e,T,t);},complete:function complete(e,t){var n,i;h.was.succesful()?(i=e,n=t):(n=e,i=h.get.responseFromXHR(n)),h.remove.loading(),v.onComplete.call(P,i,T,n);},fail:function fail(e,t,n){var o=h.get.responseFromXHR(e),r=h.get.errorFromRequest(o,t,n);return"aborted"==t?(h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),v.onAbort.call(P,t,T,e),!0):("invalid"==t?h.debug("JSON did not pass success test. A server-side error has most likely occurred",o):"error"==t&&e!==i&&(h.debug("XHR produced a server error",t,n),200!=e.status&&n!==i&&""!==n&&h.error(C.statusMessage+n,a.url),v.onError.call(P,r,T,e)),v.errorDuration&&"aborted"!==t&&(h.debug("Adding error state"),h.set.error(),h.should.removeError()&&setTimeout(h.remove.error,v.errorDuration)),h.debug("API Request failed",r,e),void v.onFailure.call(P,o,T,e));}}},create:{request:function request(){return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail);},mockedXHR:function mockedXHR(){var t,n,i,o=!1,a=!1,r=!1,s=v.mockResponse||v.response,l=v.mockResponseAsync||v.responseAsync;return i=e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail),s?(e.isFunction(s)?(h.debug("Using specified synchronous callback",s),n=s.call(P,f)):(h.debug("Using settings specified response",s),n=s),i.resolveWith(P,[n,o,{responseText:n}])):e.isFunction(l)&&(t=function t(e){h.debug("Async callback returned response",e),e?i.resolveWith(P,[e,o,{responseText:e}]):i.rejectWith(P,[{responseText:e},a,r]);},h.debug("Using specified async response callback",l),l.call(P,f,t)),i;},xhr:function xhr(){var t;return t=e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail),h.verbose("Created server request",t,a),t;}},set:{error:function error(){h.verbose("Adding error state to element",R),R.addClass(w.error);},loading:function loading(){h.verbose("Adding loading state to element",R),R.addClass(w.loading),p=new Date().getTime();}},remove:{error:function error(){h.verbose("Removing error state from element",R),R.removeClass(w.error);},loading:function loading(){h.verbose("Removing loading state from element",R),R.removeClass(w.loading);}},get:{responseFromXHR:function responseFromXHR(t){return!!e.isPlainObject(t)&&(h.is.expectingJSON()?h.decode.json(t.responseText):t.responseText);},errorFromRequest:function errorFromRequest(t,n,o){return e.isPlainObject(t)&&t.error!==i?t.error:v.error[n]!==i?v.error[n]:o;},request:function request(){return h.request||!1;},xhr:function xhr(){return h.xhr||!1;},settings:function settings(){var t;return t=v.beforeSend.call(P,v),t&&(t.success!==i&&(h.debug("Legacy success callback detected",t),h.error(C.legacyParameters,t.success),t.onSuccess=t.success),t.failure!==i&&(h.debug("Legacy failure callback detected",t),h.error(C.legacyParameters,t.failure),t.onFailure=t.failure),t.complete!==i&&(h.debug("Legacy complete callback detected",t),h.error(C.legacyParameters,t.complete),t.onComplete=t.complete)),t===i&&h.error(C.noReturnedValue),t===!1?t:t!==i?e.extend(!0,{},t):e.extend(!0,{},v);},urlEncodedValue:function urlEncodedValue(e){var n=t.decodeURIComponent(e),i=t.encodeURIComponent(e),o=n!==e;return o?(h.debug("URL value is already encoded, avoiding double encoding",e),e):(h.verbose("Encoding value using encodeURIComponent",e,i),i);},defaultData:function defaultData(){var t={};return e.isWindow(E)||(h.is.input()?t.value=T.val():h.is.form()||(t.text=T.text())),t;},event:function event(){return e.isWindow(E)||"now"==v.on?(h.debug("API called without element, no events attached"),!1):"auto"==v.on?T.is("input")?E.oninput!==i?"input":E.onpropertychange!==i?"propertychange":"keyup":T.is("form")?"submit":"click":v.on;},templatedURL:function templatedURL(e){if(e=e||T.data(y.action)||v.action||!1,m=T.data(y.url)||v.url||!1)return h.debug("Using specified url",m),m;if(e){if(h.debug("Looking up url for action",e,v.api),v.api[e]===i&&!h.is.mocked())return void h.error(C.missingAction,v.action,v.api);m=v.api[e];}else h.is.form()&&(m=T.attr("action")||R.attr("action")||!1,h.debug("No url or action specified, defaulting to form action",m));return m;}},abort:function abort(){var e=h.get.xhr();e&&"resolved"!==e.state()&&(h.debug("Cancelling API request"),e.abort());},reset:function reset(){h.remove.error(),h.remove.loading();},setting:function setting(t,n){if(h.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];e.isPlainObject(v[t])?e.extend(!0,v[t],n):v[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n;}},debug:function debug(){!v.silent&&v.debug&&(v.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,v.name+":"),h.debug.apply(console,arguments)));},verbose:function verbose(){!v.silent&&v.verbose&&v.debug&&(v.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),h.verbose.apply(console,arguments)));},error:function error(){v.silent||(h.error=Function.prototype.bind.call(console.error,console,v.name+":"),h.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;v.performance&&(t=new Date().getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500);},display:function display(){var t=v.name+":",n=0;s=!1,clearTimeout(h.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,n,a){var r,s,l,c=F;return n=n||d,a=E||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(h.error(C.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s;}},u?(F===i&&h.initialize(),h.invoke(c)):(F!==i&&F.invoke("destroy"),h.initialize());}),o!==i?o:this;},e.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,beforeSend:function beforeSend(e){return e;},beforeXHR:function beforeXHR(e){},onRequest:function onRequest(e,t){},onResponse:!1,onSuccess:function onSuccess(e,t){},onComplete:function onComplete(e,t){},onFailure:function onFailure(e,t){},onError:function onError(e,t){},onAbort:function onAbort(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.state=function(t){var o,a=e(this),r=a.selector||"",s=("ontouchstart"in n.documentElement,new Date().getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var n,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.state.settings,t):e.extend({},e.fn.state.settings),m=f.error,g=f.metadata,p=f.className,h=f.namespace,v=f.states,b=f.text,y="."+h,x=h+"-module",C=e(this),w=this,k=C.data(x);n={initialize:function initialize(){n.verbose("Initializing module"),f.automatic&&n.add.defaults(),f.context&&""!==r?e(f.context).on(r,"mouseenter"+y,n.change.text).on(r,"mouseleave"+y,n.reset.text).on(r,"click"+y,n.toggle.state):C.on("mouseenter"+y,n.change.text).on("mouseleave"+y,n.reset.text).on("click"+y,n.toggle.state),n.instantiate();},instantiate:function instantiate(){n.verbose("Storing instance of module",n),k=n,C.data(x,n);},destroy:function destroy(){n.verbose("Destroying previous module",k),C.off(y).removeData(x);},refresh:function refresh(){n.verbose("Refreshing selector cache"),C=e(w);},add:{defaults:function defaults(){var o=t&&e.isPlainObject(t.states)?t.states:{};e.each(f.defaults,function(t,a){n.is[t]!==i&&n.is[t]()&&(n.verbose("Adding default states",t,w),e.extend(f.states,a,o));});}},is:{active:function active(){return C.hasClass(p.active);},loading:function loading(){return C.hasClass(p.loading);},inactive:function inactive(){return!C.hasClass(p.active);},state:function state(e){return p[e]!==i&&C.hasClass(p[e]);},enabled:function enabled(){return!C.is(f.filter.active);},disabled:function disabled(){return C.is(f.filter.active);},textEnabled:function textEnabled(){return!C.is(f.filter.text);},button:function button(){return C.is(".button:not(a, .submit)");},input:function input(){return C.is("input");},progress:function progress(){return C.is(".ui.progress");}},allow:function allow(e){n.debug("Now allowing state",e),v[e]=!0;},disallow:function disallow(e){n.debug("No longer allowing",e),v[e]=!1;},allows:function allows(e){return v[e]||!1;},enable:function enable(){C.removeClass(p.disabled);},disable:function disable(){C.addClass(p.disabled);},setState:function setState(e){n.allows(e)&&C.addClass(p[e]);},removeState:function removeState(e){n.allows(e)&&C.removeClass(p[e]);},toggle:{state:function state(){var t,o;if(n.allows("active")&&n.is.enabled()){if(n.refresh(),e.fn.api!==i)if(t=C.api("get request"),o=C.api("was cancelled"))n.debug("API Request cancelled by beforesend"),f.activateTest=function(){return!1;},f.deactivateTest=function(){return!1;};else if(t)return void n.listenTo(t);n.change.state();}}},listenTo:function listenTo(t){n.debug("API request detected, waiting for state signal",t),t&&(b.loading&&n.update.text(b.loading),e.when(t).then(function(){"resolved"==t.state()?(n.debug("API request succeeded"),f.activateTest=function(){return!0;},f.deactivateTest=function(){return!0;}):(n.debug("API request failed"),f.activateTest=function(){return!1;},f.deactivateTest=function(){return!1;}),n.change.state();}));},change:{state:function state(){n.debug("Determining state change direction"),n.is.inactive()?n.activate():n.deactivate(),f.sync&&n.sync(),f.onChange.call(w);},text:function text(){n.is.textEnabled()&&(n.is.disabled()?(n.verbose("Changing text to disabled text",b.hover),n.update.text(b.disabled)):n.is.active()?b.hover?(n.verbose("Changing text to hover text",b.hover),n.update.text(b.hover)):b.deactivate&&(n.verbose("Changing text to deactivating text",b.deactivate),n.update.text(b.deactivate)):b.hover?(n.verbose("Changing text to hover text",b.hover),n.update.text(b.hover)):b.activate&&(n.verbose("Changing text to activating text",b.activate),n.update.text(b.activate)));}},activate:function activate(){f.activateTest.call(w)&&(n.debug("Setting state to active"),C.addClass(p.active),n.update.text(b.active),f.onActivate.call(w));},deactivate:function deactivate(){f.deactivateTest.call(w)&&(n.debug("Setting state to inactive"),C.removeClass(p.active),n.update.text(b.inactive),f.onDeactivate.call(w));},sync:function sync(){n.verbose("Syncing other buttons to current state"),n.is.active()?a.not(C).state("activate"):a.not(C).state("deactivate");},get:{text:function text(){return f.selector.text?C.find(f.selector.text).text():C.html();},textFor:function textFor(e){return b[e]||!1;}},flash:{text:function text(e,t,i){var o=n.get.text();n.debug("Flashing text message",e,t),e=e||f.text.flash,t=t||f.flashDuration,i=i||function(){},n.update.text(e),setTimeout(function(){n.update.text(o),i.call(w);},t);}},reset:{text:function text(){var e=b.active||C.data(g.storedText),t=b.inactive||C.data(g.storedText);n.is.textEnabled()&&(n.is.active()&&e?(n.verbose("Resetting active text",e),n.update.text(e)):t&&(n.verbose("Resetting inactive text",e),n.update.text(t)));}},update:{text:function text(e){var t=n.get.text();e&&e!==t?(n.debug("Updating text",e),f.selector.text?C.data(g.storedText,e).find(f.selector.text).text(e):C.data(g.storedText,e).html(e)):n.debug("Text is already set, ignoring update",e);}},setting:function setting(t,o){if(n.debug("Changing setting",t,o),e.isPlainObject(t))e.extend(!0,f,t);else{if(o===i)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],o):f[t]=o;}},internal:function internal(t,o){if(e.isPlainObject(t))e.extend(!0,n,t);else{if(o===i)return n[t];n[t]=o;}},debug:function debug(){!f.silent&&f.debug&&(f.performance?n.performance.log(arguments):(n.debug=Function.prototype.bind.call(console.info,console,f.name+":"),n.debug.apply(console,arguments)));},verbose:function verbose(){!f.silent&&f.verbose&&f.debug&&(f.performance?n.performance.log(arguments):(n.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),n.verbose.apply(console,arguments)));},error:function error(){f.silent||(n.error=Function.prototype.bind.call(console.error,console,f.name+":"),n.error.apply(console,arguments));},performance:{log:function log(e){var t,i,o;f.performance&&(t=new Date().getTime(),o=s||t,i=t-o,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":i})),clearTimeout(n.performance.timer),n.performance.timer=setTimeout(n.performance.display,500);},display:function display(){var t=f.name+":",o=0;s=!1,clearTimeout(n.performance.timer),e.each(l,function(e,t){o+=t["Execution Time"];}),t+=" "+o+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),l=[];}},invoke:function invoke(t,a,r){var s,l,c,u=k;return a=a||d,r=w||r,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(o,a){var r=o!=s?a+t[o+1].charAt(0).toUpperCase()+t[o+1].slice(1):t;if(e.isPlainObject(u[r])&&o!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[a])||o==s)return u[a]!==i?(l=u[a],!1):(n.error(m.method,t),!1);u=u[a];}})),e.isFunction(l)?c=l.apply(r,a):l!==i&&(c=l),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),l;}},u?(k===i&&n.initialize(),n.invoke(c)):(k!==i&&k.invoke("destroy"),n.initialize());}),o!==i?o:this;},e.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function onActivate(){},onDeactivate:function onDeactivate(){},onChange:function onChange(){},activateTest:function activateTest(){return!0;},deactivateTest:function deactivateTest(){return!0;},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}};}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.visibility=function(o){var a,r=e(this),s=r.selector||"",l=new Date().getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1),m=r.length,g=0;return r.each(function(){var r,p,h,v,b=e.isPlainObject(o)?e.extend(!0,{},e.fn.visibility.settings,o):e.extend({},e.fn.visibility.settings),y=b.className,x=b.namespace,C=b.error,w=b.metadata,k="."+x,S="module-"+x,T=e(t),A=e(this),R=e(b.context),E=(A.selector||"",A.data(S)),P=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0);},F=this,O=!1;v={initialize:function initialize(){v.debug("Initializing",b),v.setup.cache(),v.should.trackChanges()&&("image"==b.type&&v.setup.image(),"fixed"==b.type&&v.setup.fixed(),b.observeChanges&&v.observeChanges(),v.bind.events()),v.save.position(),v.is.visible()||v.error(C.visible,A),b.initialCheck&&v.checkVisibility(),v.instantiate();},instantiate:function instantiate(){v.debug("Storing instance",v),A.data(S,v),E=v;},destroy:function destroy(){v.verbose("Destroying previous module"),h&&h.disconnect(),p&&p.disconnect(),T.off("load"+k,v.event.load).off("resize"+k,v.event.resize),R.off("scroll"+k,v.event.scroll).off("scrollchange"+k,v.event.scrollchange),"fixed"==b.type&&(v.resetFixed(),v.remove.placeholder()),A.off(k).removeData(S);},observeChanges:function observeChanges(){"MutationObserver"in t&&(p=new MutationObserver(v.event.contextChanged),h=new MutationObserver(v.event.changed),p.observe(n,{childList:!0,subtree:!0}),h.observe(F,{childList:!0,subtree:!0}),v.debug("Setting up mutation observer",h));},bind:{events:function events(){v.verbose("Binding visibility events to scroll and resize"),b.refreshOnLoad&&T.on("load"+k,v.event.load),T.on("resize"+k,v.event.resize),R.off("scroll"+k).on("scroll"+k,v.event.scroll).on("scrollchange"+k,v.event.scrollchange);}},event:{changed:function changed(e){v.verbose("DOM tree modified, updating visibility calculations"),v.timer=setTimeout(function(){v.verbose("DOM tree modified, updating sticky menu"),v.refresh();},100);},contextChanged:function contextChanged(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==F||e(t).find(F).length>0)&&(v.debug("Element removed from DOM, tearing down events"),v.destroy());});});},resize:function resize(){v.debug("Window resized"),b.refreshOnResize&&P(v.refresh);},load:function load(){v.debug("Page finished loading"),P(v.refresh);},scroll:function scroll(){b.throttle?(clearTimeout(v.timer),v.timer=setTimeout(function(){R.triggerHandler("scrollchange"+k,[R.scrollTop()]);},b.throttle)):P(function(){R.triggerHandler("scrollchange"+k,[R.scrollTop()]);});},scrollchange:function scrollchange(e,t){v.checkVisibility(t);}},precache:function precache(t,i){t instanceof Array||(t=[t]);for(var o=t.length,a=0,r=[],s=n.createElement("img"),l=function l(){a++,a>=t.length&&e.isFunction(i)&&i();};o--;){s=n.createElement("img"),s.onload=l,s.onerror=l,s.src=t[o],r.push(s);}},enableCallbacks:function enableCallbacks(){v.debug("Allowing callbacks to occur"),O=!1;},disableCallbacks:function disableCallbacks(){v.debug("Disabling all callbacks temporarily"),O=!0;},should:{trackChanges:function trackChanges(){return d?(v.debug("One time query, no need to bind events"),!1):(v.debug("Callbacks being attached"),!0);}},setup:{cache:function cache(){v.cache={occurred:{},screen:{},element:{}};},image:function image(){var e=A.data(w.src);e&&(v.verbose("Lazy loading image",e),b.once=!0,b.observeChanges=!1,b.onOnScreen=function(){v.debug("Image on screen",F),v.precache(e,function(){v.set.image(e,function(){g++,g==m&&b.onAllLoaded.call(this),b.onLoad.call(this);});});});},fixed:function fixed(){v.debug("Setting up fixed"),b.once=!1,b.observeChanges=!1,b.initialCheck=!0,b.refreshOnLoad=!0,o.transition||(b.transition=!1),v.create.placeholder(),v.debug("Added placeholder",r),b.onTopPassed=function(){v.debug("Element passed, adding fixed position",A),v.show.placeholder(),v.set.fixed(),b.transition&&e.fn.transition!==i&&A.transition(b.transition,b.duration);},b.onTopPassedReverse=function(){v.debug("Element returned to position, removing fixed",A),v.hide.placeholder(),v.remove.fixed();};}},create:{placeholder:function placeholder(){v.verbose("Creating fixed position placeholder"),r=A.clone(!1).css("display","none").addClass(y.placeholder).insertAfter(A);}},show:{placeholder:function placeholder(){v.verbose("Showing placeholder"),r.css("display","block").css("visibility","hidden");}},hide:{placeholder:function placeholder(){v.verbose("Hiding placeholder"),r.css("display","none").css("visibility","");}},set:{fixed:function fixed(){v.verbose("Setting element to fixed position"),A.addClass(y.fixed).css({position:"fixed",top:b.offset+"px",left:"auto",zIndex:b.zIndex}),b.onFixed.call(F);},image:function image(t,n){A.attr("src",t),b.transition?e.fn.transition!==i?A.transition(b.transition,b.duration,n):A.fadeIn(b.duration,n):A.show();}},is:{onScreen:function onScreen(){var e=v.get.elementCalculations();return e.onScreen;},offScreen:function offScreen(){var e=v.get.elementCalculations();return e.offScreen;},visible:function visible(){return!(!v.cache||!v.cache.element)&&!(0===v.cache.element.width&&0===v.cache.element.offset.top);}},refresh:function refresh(){v.debug("Refreshing constants (width/height)"),"fixed"==b.type&&v.resetFixed(),v.reset(),v.save.position(),b.checkOnRefresh&&v.checkVisibility(),b.onRefresh.call(F);},resetFixed:function resetFixed(){v.remove.fixed(),v.remove.occurred();},reset:function reset(){v.verbose("Resetting all cached values"),e.isPlainObject(v.cache)&&(v.cache.screen={},v.cache.element={});},checkVisibility:function checkVisibility(e){v.verbose("Checking visibility of element",v.cache.element),!O&&v.is.visible()&&(v.save.scroll(e),v.save.calculations(),v.passed(),v.passingReverse(),v.topVisibleReverse(),v.bottomVisibleReverse(),v.topPassedReverse(),v.bottomPassedReverse(),v.onScreen(),v.offScreen(),v.passing(),v.topVisible(),v.bottomVisible(),v.topPassed(),v.bottomPassed(),b.onUpdate&&b.onUpdate.call(F,v.get.elementCalculations()));},passed:function passed(t,n){var o=v.get.elementCalculations();if(t&&n)b.onPassed[t]=n;else{if(t!==i)return v.get.pixelsPassed(t)>o.pixelsPassed;o.passing&&e.each(b.onPassed,function(e,t){o.bottomVisible||o.pixelsPassed>v.get.pixelsPassed(e)?v.execute(t,e):b.once||v.remove.occurred(t);});}},onScreen:function onScreen(e){var t=v.get.elementCalculations(),n=e||b.onOnScreen,o="onScreen";if(e&&(v.debug("Adding callback for onScreen",e),b.onOnScreen=e),t.onScreen?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.onOnScreen;},offScreen:function offScreen(e){var t=v.get.elementCalculations(),n=e||b.onOffScreen,o="offScreen";if(e&&(v.debug("Adding callback for offScreen",e),b.onOffScreen=e),t.offScreen?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.onOffScreen;},passing:function passing(e){var t=v.get.elementCalculations(),n=e||b.onPassing,o="passing";if(e&&(v.debug("Adding callback for passing",e),b.onPassing=e),t.passing?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.passing;},topVisible:function topVisible(e){var t=v.get.elementCalculations(),n=e||b.onTopVisible,o="topVisible";if(e&&(v.debug("Adding callback for top visible",e),b.onTopVisible=e),t.topVisible?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.topVisible;},bottomVisible:function bottomVisible(e){var t=v.get.elementCalculations(),n=e||b.onBottomVisible,o="bottomVisible";if(e&&(v.debug("Adding callback for bottom visible",e),b.onBottomVisible=e),t.bottomVisible?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.bottomVisible;},topPassed:function topPassed(e){var t=v.get.elementCalculations(),n=e||b.onTopPassed,o="topPassed";if(e&&(v.debug("Adding callback for top passed",e),b.onTopPassed=e),t.topPassed?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.topPassed;},bottomPassed:function bottomPassed(e){var t=v.get.elementCalculations(),n=e||b.onBottomPassed,o="bottomPassed";if(e&&(v.debug("Adding callback for bottom passed",e),b.onBottomPassed=e),t.bottomPassed?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.bottomPassed;},passingReverse:function passingReverse(e){var t=v.get.elementCalculations(),n=e||b.onPassingReverse,o="passingReverse";if(e&&(v.debug("Adding callback for passing reverse",e),b.onPassingReverse=e),t.passing?b.once||v.remove.occurred(o):v.get.occurred("passing")&&v.execute(n,o),e!==i)return!t.passing;},topVisibleReverse:function topVisibleReverse(e){var t=v.get.elementCalculations(),n=e||b.onTopVisibleReverse,o="topVisibleReverse";if(e&&(v.debug("Adding callback for top visible reverse",e),b.onTopVisibleReverse=e),t.topVisible?b.once||v.remove.occurred(o):v.get.occurred("topVisible")&&v.execute(n,o),e===i)return!t.topVisible;},bottomVisibleReverse:function bottomVisibleReverse(e){var t=v.get.elementCalculations(),n=e||b.onBottomVisibleReverse,o="bottomVisibleReverse";if(e&&(v.debug("Adding callback for bottom visible reverse",e),b.onBottomVisibleReverse=e),t.bottomVisible?b.once||v.remove.occurred(o):v.get.occurred("bottomVisible")&&v.execute(n,o),e===i)return!t.bottomVisible;},topPassedReverse:function topPassedReverse(e){var t=v.get.elementCalculations(),n=e||b.onTopPassedReverse,o="topPassedReverse";if(e&&(v.debug("Adding callback for top passed reverse",e),b.onTopPassedReverse=e),t.topPassed?b.once||v.remove.occurred(o):v.get.occurred("topPassed")&&v.execute(n,o),e===i)return!t.onTopPassed;},bottomPassedReverse:function bottomPassedReverse(e){var t=v.get.elementCalculations(),n=e||b.onBottomPassedReverse,o="bottomPassedReverse";if(e&&(v.debug("Adding callback for bottom passed reverse",e),b.onBottomPassedReverse=e),t.bottomPassed?b.once||v.remove.occurred(o):v.get.occurred("bottomPassed")&&v.execute(n,o),e===i)return!t.bottomPassed;},execute:function execute(e,t){var n=v.get.elementCalculations(),i=v.get.screenCalculations();e=e||!1,e&&(b.continuous?(v.debug("Callback being called continuously",t,n),e.call(F,n,i)):v.get.occurred(t)||(v.debug("Conditions met",t,n),e.call(F,n,i))),v.save.occurred(t);},remove:{fixed:function fixed(){v.debug("Removing fixed position"),A.removeClass(y.fixed).css({position:"",top:"",left:"",zIndex:""}),b.onUnfixed.call(F);},placeholder:function placeholder(){v.debug("Removing placeholder content"),r&&r.remove();},occurred:function occurred(e){if(e){var t=v.cache.occurred;t[e]!==i&&t[e]===!0&&(v.debug("Callback can now be called again",e),v.cache.occurred[e]=!1);}else v.cache.occurred={};}},save:{calculations:function calculations(){v.verbose("Saving all calculations necessary to determine positioning"),v.save.direction(),v.save.screenCalculations(),v.save.elementCalculations();},occurred:function occurred(e){e&&(v.cache.occurred[e]!==i&&v.cache.occurred[e]===!0||(v.verbose("Saving callback occurred",e),v.cache.occurred[e]=!0));},scroll:function scroll(e){e=e+b.offset||R.scrollTop()+b.offset,v.cache.scroll=e;},direction:function direction(){var e,t=v.get.scroll(),n=v.get.lastScroll();return e=t>n&&n?"down":t<n&&n?"up":"static",v.cache.direction=e,v.cache.direction;},elementPosition:function elementPosition(){var e=v.cache.element,t=v.get.screenSize();return v.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=A.offset(),e.width=A.outerWidth(),e.height=A.outerHeight(),v.cache.element=e,e;},elementCalculations:function elementCalculations(){var e=v.get.screenCalculations(),t=v.get.elementPosition();return b.includeMargin?(t.margin={},t.margin.top=parseInt(A.css("margin-top"),10),t.margin.bottom=parseInt(A.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topVisible=e.bottom>=t.top,t.topPassed=e.top>=t.top,t.bottomVisible=e.bottom>=t.bottom,t.bottomPassed=e.top>=t.bottom,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=t.topVisible&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),v.cache.element=t,v.verbose("Updated element calculations",t),t;},screenCalculations:function screenCalculations(){var e=v.get.scroll();return v.save.direction(),v.cache.screen.top=e,v.cache.screen.bottom=e+v.cache.screen.height,v.cache.screen;},screenSize:function screenSize(){v.verbose("Saving window position"),v.cache.screen={height:R.height()};},position:function position(){v.save.screenSize(),v.save.elementPosition();}},get:{pixelsPassed:function pixelsPassed(e){var t=v.get.elementCalculations();return e.search("%")>-1?t.height*(parseInt(e,10)/100):parseInt(e,10);},occurred:function occurred(e){return v.cache.occurred!==i&&(v.cache.occurred[e]||!1);},direction:function direction(){return v.cache.direction===i&&v.save.direction(),v.cache.direction;},elementPosition:function elementPosition(){return v.cache.element===i&&v.save.elementPosition(),v.cache.element;},elementCalculations:function elementCalculations(){return v.cache.element===i&&v.save.elementCalculations(),v.cache.element;},screenCalculations:function screenCalculations(){return v.cache.screen===i&&v.save.screenCalculations(),v.cache.screen;},screenSize:function screenSize(){return v.cache.screen===i&&v.save.screenSize(),v.cache.screen;},scroll:function scroll(){return v.cache.scroll===i&&v.save.scroll(),v.cache.scroll;},lastScroll:function lastScroll(){return v.cache.screen===i?(v.debug("First scroll event, no last scroll could be found"),!1):v.cache.screen.top;}},setting:function setting(t,n){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(n===i)return b[t];b[t]=n;}},internal:function internal(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];v[t]=n;}},debug:function debug(){!b.silent&&b.debug&&(b.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,b.name+":"),v.debug.apply(console,arguments)));},verbose:function verbose(){!b.silent&&b.verbose&&b.debug&&(b.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,b.name+":"),v.verbose.apply(console,arguments)));},error:function error(){b.silent||(v.error=Function.prototype.bind.call(console.error,console,b.name+":"),v.error.apply(console,arguments));},performance:{log:function log(e){var t,n,i;b.performance&&(t=new Date().getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500);},display:function display(){var t=b.name+":",n=0;l=!1,clearTimeout(v.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"];}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms");}),console.groupEnd()),c=[];}},invoke:function invoke(t,n,o){var r,s,l,c=E;return n=n||f,o=F||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(v.error(C.method,t),!1);c=c[o];}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s;}},d?(E===i&&v.initialize(),E.save.scroll(),E.save.calculations(),v.invoke(u)):(E!==i&&E.invoke("destroy"),v.initialize());}),a!==i?a:this;},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:t,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function onLoad(){},onAllLoaded:function onAllLoaded(){},onFixed:function onFixed(){},onUnfixed:function onUnfixed(){},onUpdate:!1,onRefresh:function onRefresh(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}};}(jQuery,window,document);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(8);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Symbol = __webpack_require__(10)["default"];

	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};

	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	__webpack_require__(39);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(13)
	  , global         = __webpack_require__(14)
	  , has            = __webpack_require__(15)
	  , DESCRIPTORS    = __webpack_require__(16)
	  , $export        = __webpack_require__(18)
	  , redefine       = __webpack_require__(21)
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(25)
	  , uid            = __webpack_require__(27)
	  , wks            = __webpack_require__(26)
	  , keyOf          = __webpack_require__(28)
	  , $names         = __webpack_require__(33)
	  , enumKeys       = __webpack_require__(34)
	  , isArray        = __webpack_require__(35)
	  , anObject       = __webpack_require__(36)
	  , toIObject      = __webpack_require__(29)
	  , createDesc     = __webpack_require__(23)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(38)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 13 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(13)
	  , createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(16) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(14)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).setDesc
	  , has = __webpack_require__(15)
	  , TAG = __webpack_require__(26)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(24)('wks')
	  , uid    = __webpack_require__(27)
	  , Symbol = __webpack_require__(14).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(13)
	  , toIObject = __webpack_require__(29);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(30)
	  , defined = __webpack_require__(32);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(31);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(29)
	  , getNames  = __webpack_require__(13).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(13);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(31);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 39 */
/***/ function(module, exports) {

	

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(43);

	__webpack_require__(44)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(32);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(18)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }
/******/ ]);