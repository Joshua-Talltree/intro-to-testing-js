"use strict";

// - isBoolean
// - isNumeric (string number or number)
// - isNegative
// - isPositive
// - isString
// - isArray
// - isEven
// - isOdd
// - increment(number) should return false if input aint a number
// - decrement(number) should return false if input aint a number
// - square(n)
// - add(a, b)
// - sumOfSquares(a, b)

const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "David Bowie";

describe("isBoolean", function() {
    it('should be a defined function', function() {
        expect(typeof isBoolean).toBe('function');
    });
    it('should return a boolean value', function() {
       expect(typeof isBoolean(true)).toBe('boolean');
       expect(typeof isBoolean("Bob")).toBe('boolean');
    });
    it('should return true when passed the boolean true, because true is a boolean value.', function() {
        expect(isBoolean(true)).toBe(true);
    });
    it('should return true when passed the boolean false, because false is a boolean value.', function() {
        expect(isBoolean(false)).toBe(true)
    });
    it('should return false when passed the number ' + randomPositiveNumber, function() {
       expect(isBoolean(randomPositiveNumber)).toBe(false);
    });
    it('should return false when passed the number 0', function() {
        expect(isBoolean(0)).toBe(false);
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
    it('should return false when passed null as the input', function() {
        expect(isNumeric(null)).toBe(false);
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

describe('isEven', function() {
    it('isEven should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven(3)).toBe('boolean');
        expect(typeof isEven(2)).toBe('boolean');
    });
    it('should return true for 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true for 10', function() {
        expect(isEven(10)).toBe(true);
    });
    it('should return false for 5', function() {
        expect(isEven(5)).toBe(false);
    });
    it('should return false for 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false for an array', function() {
        expect(isEven(exampleArray)).toBe(false);
    });
    it('should return false when provided a non-numeric string', function() {
        expect(isEven(exampleString)).toBe(false);
    });
    it('should return false when the provided input is an object', function() {
        expect(isEven(exampleObject)).toBe(false);
    });
    it('should return false when passed null as the input', function() {
        expect(isEven(null)).toBe(false);
    });
    it('should return false when called without providing an input', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isOdd', function() {
    it('it should be a defined function', function() {
        expect(typeof isOdd).toBe('function');
    });
    it('it should return a boolean value', function() {
        expect(typeof isOdd(2)).toBe('boolean');
    });
    it('it should return true for 3', function() {
        expect(isOdd(3)).toBe(true);
    });
    it('it should return true for 5', function() {
        expect(isOdd(5)).toBe(true);
    });
    it('it should return true when passed "7"', function() {
        expect(isOdd(7)).toBe(true);
    });
    it('it should return false for 2', function() {
        expect(isOdd(2)).toBe(false);
    });
    it('it should return false for 10', function() {
        expect(isOdd(10)).toBe(false);
    });
    it('it should return false for 0', function() {
        expect(isOdd(0)).toBe(false);
    });
    it('it should return false when passed an array', function() {
        expect(isOdd(exampleArray)).toBe(false);
    });
    it('it should return false when passed a non-numeric string', function() {
        expect(isOdd(exampleString)).toBe(false);
    });
    it('it should return false when passed an object', function() {
        expect(isOdd(exampleObject)).toBe(false);
    });
    it('it should return false when passed a boolean', function() {
        expect(isOdd(true)).toBe(false);
    });
    it('it should return false when passed null', function() {
        expect(isOdd(null)).toBe(false);
    });
    it('it should return false when passed no arguments', function() {
        expect(isOdd()).toBe(false);
    });
});

describe('increment', function() {
    it('should be a defined function', function() {
        expect(typeof increment).toBe('function');
    });
    it('should return a number when passed a number', function() {
        expect(typeof increment(2)).toBe('number');
    });
    it('should return 2 when passed 1', function() {
        expect(increment(1)).toBe(2);
    });
    it('should return 1 when passed 0', function() {
        expect(increment(0)).toBe(1);
    });
    it('should return ' + (1 + randomPositiveNumber) + ' when passed ' + randomPositiveNumber, function() {
        expect(increment(randomPositiveNumber)).toBe(randomPositiveNumber + 1);
    });
    it('should return false when passed null', function() {
        expect(increment(null)).toBe(false);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(increment(exampleString)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(increment(false)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(increment(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(increment(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(increment()).toBe(false);
    });
});

describe('decrement', function() {
    it('should be a defined function', function() {
        expect(typeof decrement).toBe('function');
    });
    it('should return a number when passed a number', function() {
        expect(typeof decrement(3)).toBe('number');
    });
    it('should return 3 when passed 4', function() {
        expect(decrement(4)).toBe(3);
    });
    it('should return 0 when passed 1', function() {
        expect(decrement(1)).toBe(0);
    });
    it('should return ' + (randomPositiveNumber - 1) + ' when passed ' + randomPositiveNumber, function() {
        expect(decrement(randomPositiveNumber)).toBe(randomPositiveNumber - 1);
    });
    it('should return false when passed null', function() {
        expect(decrement(null)).toBe(false);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(decrement(exampleString)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(decrement(false)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(decrement(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(decrement(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(decrement()).toBe(false);
    });

});

describe('square', function() {
    it('should be a defined function', function() {
       expect(typeof square).toBe('function');
    });
    it('should return a number when passed a number', function() {
        expect(typeof square(2)).toBe('number');
    });
    it('should return 4 when passed 2', function() {
        expect(square(2)).toBe(4);
    });
    it('should return .5 when passed .25', function() {
        expect(square(.5)).toBe(.25);
    });
    it('should return ' + (randomPositiveNumber * randomPositiveNumber) + ' when passed ' + randomPositiveNumber, function() {
        expect(square(randomPositiveNumber)).toBe(randomPositiveNumber * randomPositiveNumber);
    });
    it('should return 1 when passed 1', function() {
        expect(square(1)).toBe(1);
    });
    it('should return 1 when passed -1', function() {
        expect(square(-1)).toBe(1);
    });
    it('should return 0 when passed 0', function() {
        expect(square(0)).toBe(0);
    });
    it('should return false when passed null', function() {
        expect(square(null)).toBe(false);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(square("Bob")).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(square(true)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(square(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(square(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(square()).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return a number when passed two numbers', function() {
        expect(typeof (add(1, 2))).toBe('number');
    });
    it('should return 4 when passed 1 and 3', function() {
        expect(add(1, 3)).toBe(4);
    });
    it('should return ' + (randomPositiveNumber + 2) + ' when passed ' + randomPositiveNumber + ' and 2', function() {
        expect(add(randomPositiveNumber, 2)).toBe(randomPositiveNumber + 2);
    });
    it('should return 5 when passed the numeric strings "2" and "3".', function() {
        expect(add("2", "3")).toBe(5);
    });
    it('should return false when passed one numeric input and one non-number input', function() {
        expect(add("Bob", 2)).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(add(null)).toBe(false);
    });
    it('should return false when passed non-numeric strings', function() {
        expect(add("Bob", "Jane").toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(add(true)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(add(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(add(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(add()).toBe(false);
    });
});

describe('sumOfSquares', function() {
    it('should return false when passed null', function() {
        expect(typeof sumOfSquares).toBe('function');
    });
    it('should return a number when passed two numbers', function() {
        expect(typeof (sumOfSquares(1, 2))).toBe('number');
    });
    it('should return 8 when passed 2 and 2', function() {
        expect(sumOfSquares(2, 2)).toBe(8);
    });
    it('should return 2 when passed 1 and 1', function() {
        expect(sumOfSquares(1, 1)).toBe(2);
    });
    it('should return 0 when passed 0 and 0', function() {
        expect(sumOfSquares(0,0)).toBe(0);
    });
    it('should return 13 when passed 2 and 3', function() {
        expect(sumOfSquares(2, 3)).toBe(13);
    });
    it('should return ' + (randomPositiveNumber * randomPositiveNumber + randomNegativeNumber * randomNegativeNumber) + ' when passed ' + randomNegativeNumber + ' and ' + randomNegativeNumber, function() {
       expect(sumOfSquares(randomPositiveNumber, randomNegativeNumber)).toBe(randomPositiveNumber*randomPositiveNumber + randomNegativeNumber * randomNegativeNumber);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(sumOfSquares("Bob")).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(sumOfSquares(true)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(sumOfSquares(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(sumOfSquares(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(sumOfSquares()).toBe(false);
    });
});