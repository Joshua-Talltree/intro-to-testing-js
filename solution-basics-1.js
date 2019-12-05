"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isBoolean(param){
    return typeof param === 'boolean';
}

function isString(param){
    return typeof param === 'string';
}

function isNotString(param){
    return !isString(param);
}

function isEmptyString(param){
    return param !== undefined && param.length === 0;
}

function isNegative(param){
    return param < 0;
}

function isPositive(param){
    return param > 0 && !isBoolean(param);
}

function isArray(param){
    return Array.isArray(param);
}

function isZero(param){
    return param == '0' && !isBoolean(param);
}


function upperCase(param){
    if(isNaN(param) && isString(param)){
        return param.toUpperCase();
    }else if (param === ''){
        return '';
    }else {
        return false;
    }
}

function containsVowel(param){

    if(!isString(param)){
        return false;
    }

    var counter = 0;
    var arrayParam = param.toLowerCase().split('');
    var vowels = ['a','e','i','o','u'];
    arrayParam.forEach( function (char) {
        if(vowels.includes(char)){
            counter++;
        }
    });
    return counter > 0;
}