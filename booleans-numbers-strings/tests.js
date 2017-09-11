"use strict";

// - isBoolean
// - isNumeric (string number or number)
// - isNegative
// - isPositive
// - isString
// - isArray
// - isEven
// - isOdd


const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton'];
const exampleString = "David Bowie";

describe("isBoolean", function() {
    it('should be a defined function', function() {
        expect(typeof isBoolean).toBe('function');
    });
    it('should return a boolean value', function() {
       expect(typeof isBoolean(true)).toBe('boolean');
       expect(typeof isBoolean(false)).toBe('boolean');
       expect(typeof isBoolean("Bob")).toBe('boolean');
    });
    it('should return true when passed the boolean true, because true is a boolean value.', function() {
        expect(isBoolean(true)).toBe(true);
    });
    it('should return true when passed the boolean false, because false is a boolean value.', function() {
        expect(isBoolean(false)).toBe(true)
    });
    it('should return false when passed no inputs (undefined) ', function() {
        expect(isBoolean()).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(isBoolean(null)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isBoolean(exampleArray)).toBe(false);
    });
    it('should return false when passed a string', function() {
        expect(isBoolean(exampleString)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(isBoolean(exampleObject)).toBe(false);
    });
});

describe('isNumeric', function() {
    it('should be a defined function', function() {
        expect(typeof isNumeric).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isNumeric(4)).toBe('boolean');
        expect(typeof isNumeric("Bob")).toBe('boolean');
    });
    it('should return true when passed 0 as input', function() {
        expect(isNumeric(0)).toBe(true);
    });
    it('should return true when passed -5 as input', function() {
        expect(isNumeric(-5)).toBe(true);
    });
    it('should return true when passed ' + randomNegativeNumber, function() {
        expect(isNumeric(randomNegativeNumber)).toBe(true);
    });
    it('should return true when passed ' + randomPositiveNumber, function() {
        expect(isNumeric(randomPositiveNumber)).toBe(true);
    });
    it('should return true when passed a numeric string like "123" as input', function() {
        expect(isNumeric("123")).toBe(true);
    });
    it('should return false when passed the non-numeric string "Grace Hopper', function() {
        expect(isNumeric("Grace Hopper")).toBe(false);
    });
    it('should return false when passed no input as an argument', function() {
        expect(isNumeric()).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isNumeric(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(isNumeric(exampleObject)).toBe(false);
    });
    it('should return false when no input is passed in as an argument', function() {
        expect(isNumeric()).toBe(false);
    });
});

describe('isNegative', function() {
    it('should be a defined function', function() {
        expect(typeof isNegative).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isNegative(-12)).toBe('boolean');
        expect(typeof isNegative(12)).toBe('boolean');
    });
    it('return false for 0', function() {
        expect(isNegative(0)).toBe(false);
    });
    it('returns true for -1', function() {
        expect(isNegative(-1)).toBe(true);
    });
    it('returns false for 6', function() {
        expect(isNegative(6)).toBe(false);
    });
    it('returns false for 123.456', function() {
        expect(isNegative(123.456)).toBe(false);
    });
    it('returns true for -3.14159', function() {
        expect(isNegative(-3.14159)).toBe(true);
    });
    it('returns true for ' + randomNegativeNumber, function() {
        expect(isNegative(randomNegativeNumber)).toBe(true);
    });
    it('returns false for ' + randomPositiveNumber , function() {
        expect(isNegative(randomPositiveNumber)).toBe(false);
    });

    it('returns true for the string number "-4".', function() {
        expect(isNegative("-4")).toBe(true);
    });
    it('returns false for the string number "23".', function() {
        expect(isNegative(23)).toBe(false);
    });
    it('returns false for non-number strings such as "Grace Hopper"', function() {
        expect(isNegative("Grace Hopper")).toBe(false);
    });
    it('returns false when no argument is provided as input to the function', function() {
        expect(isNegative()).toBe(false);
    });
});

describe('isPositive', function() {
    it('should be a defined function', function(){
        expect(typeof isPositive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isPositive(randomPositiveNumber)).toBe('boolean');
        expect(typeof isPositive(randomNegativeNumber)).toBe('boolean');
    });
    it('should return true for 1', function() {
        expect(isPositive(1)).toBe(true);
    });
    it('should return true for ' + randomPositiveNumber, function() {
        expect(isPositive(randomPositiveNumber)).toBe(true);
    });
    it('should return false for 0', function() {
       expect(isPositive(0)).toBe(false);
    });
    it('should return false for ' + randomNegativeNumber, function() {
       expect(isPositive(randomNegativeNumber)).ToBe(false);
    });
    it('returns false for non-number strings such as "Grace Hopper"', function() {
        expect(isPositive("Grace Hopper")).toBe(false);
    });
    it('returns false when no argument is provided as input to the function', function() {
        expect(isPositive()).toBe(false);
    });
    it('returns false when passed an array', function() {
        expect(isPositive(exampleArray)).toBe(false);
    });
    it('returns false when passed an object', function() {
        expect(isPositive(exampleObject)).toBe(false);
    });
    it('returns false when passed null', function() {
        expect(isPositive(null)).toBe(false);
    });
});

describe('isString', function() {
    it('should be a defined function', function() {
        expect(typeof isString).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isString("Banana")).toBe('boolean');
        expect(typeof isString(45)).toBe('boolean');
    });
    it('should return true when the input passed is the string ' + exampleString, function() {
        expect(isString(exampleString)).toBe(true);
    });
    it('should return true when the input passed is the numeric string "123".', function() {
        expect(isString("123")).toBe(true);
    });
    it('should return false when passed no input', function() {
        expect(isString()).toBe(false);
    });
    it('should return false when passed boolean inputs', function() {
        expect(isString(true)).toBe(false);
        expect(isString(false)).toBe(false);
    });
    it('should return false when passed a number', function() {
        expect(isString(randomPositiveNumber)).toBe(false);
        expect(isString(randomNegativeNumber)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isString(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(isString(exampleObject)).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(isString(null)).toBe(false);
    });
});

