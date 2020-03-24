"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isBoolean( param ){
    return typeof param === 'boolean';
}

function isString( param ){
    return typeof param === 'string';
}

function isNotString( param ){
    return !isString(param);
}
function isEmptyString( param ){
    return param != null && param.length === 0;
}
function isNotANumber( param ){
    return typeof param !== 'number';
}
function isNegative( param ){
    return param < 0;
}
function isPositive( param ){
    return param > 0;
}
function isZero( param ){
    return param == 0;
}
function isArray( param ){
    return Array.isArray(param);
}

function upperCase( param ){
    return isString(param) && param.toUpperCase();
}