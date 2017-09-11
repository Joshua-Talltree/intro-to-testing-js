"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

const isNegative = function(input) {
    return input < 0;
};

const isPositive = function(input) {
    return input > 0;
};

const isBoolean = function(input) {
    return typeof input == 'boolean';
};

const isNumeric = function(input) {
    return !isNaN(parseFloat(input));
};

const isString = function(input) {
    return typeof input == 'string';
};