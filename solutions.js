"use strict";


 // * Write your solutions here.
 // *
 // * **Note**: While normally it is good practice to wrap your javascript in an
 // * immediately invoked function expression (iife), you should _not_ do that
 // * here. If you do, the automated tests will not be able to see your functions.
 // *
 // * isGreaterThan
 // * isLessThan
 // * isEqualNumber
 // * isEqual
 // * isNot
 // * calcAbs
 // * calcCube
 // * isTypeMatch
 // * findLongestString
 // * isFactor


// * isGreaterThan

function isGreaterThan(num1, num2) {
    if (num1 > num2) {
        return true;
    } else {
        return false;
    }
}

// * isLessThan

function isLessThan(num1, num2) {
    if (num1 <+ num2) {
        return true;
    } else {
        return false;
    }
}

// * isEqualNumber

function isEqualNumber(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

// * isEqual

function isEqual(num1, num2) {
    if (num1 == num2) {
        return true;
    } else {
        return false;
    }
}

// * isNot

function isNot(num1, num2) {
    if (!num1 && !num2 ) {
        return true;
    } else {
        return false;
    }
}

// * calcAbs

function calcAbs(num1) {
    if (num1 === num1 && null){
        return true;
    }
}


// * calcCube

function calcCube(num1) {
    if (num1 === null || NaN) {
        return 0;
    }
}

// * isTypeMatch

function isMatchType(num1, num2) {
    if (num1 === num2) {
        return true;
    } else if (num1 === !num2) {
        return null;
    }
}



