# JavaScript Basics Assessment

## Core competencies assessed

- Reading and following directions
- Producing solutions that match the problem specification
- Using Git and working with GitHub
    - Cloning a git repository from GitHub
    - Creating your own branch
    - Committing and pushing work to a new branch on GitHub

- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using assignment and comparision operators
    - Working with JS internal functions to make decisions and perform actions.
    - Using conditional logic to make decisions inside functions
    - Writing functions that take in inputs, process, and return outputs.
    

## Instructions

0. *Carefully* read all the instructions and problems before beginning your work.

1. Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo. The clone address of the repo is found by clicking the green "Clone or download" button on the repo's page.

1. Create a branch named `firstName-lastLastname` where `firstName` is your first name and `lastName` is your last name. In IntelliJ, go to VCS, then Git, then Branches, and click "+ New Branch" and name it accordingly.
     
1. Write your solutions to the problems presented below inside `solutions.js`.

1. Read the Testing instructions below.

1. Add, commit, and push to your `firstName-lastName` branch to GitHub.

## Problems

1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
        
        isBoolean(true)             // true
        isBoolean(false)            // true
        isBoolean(0)                // false
        isBoolean(null)             // false
        isBoolean("")               // false
        isBoolean("Bob")            // false
        isBoolean([1, 2])           // false

2. Define a function named `isNumeric` that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
        
        isNumeric(23)               // true
        isNumeric("42")             // true
        isNumeric(3.141)            // true
        isNumeric("")               // false
        isNumeric(true)             // false
        isNumeric("Bob")            // false
        isNumeric([1,2,3])          // false

3. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
        
        isString("Hello")           // true
        isString("Codeup")          // true
        isString("123")             // true
        isString(4)                 // false
        isString(true)              // false
        isString([1, 2, 3])         // false
        isString()                  // false
        isString(null)              // false
       
4. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
        
        isArray([])                 // true
        isArray([1, 2, 3])          // true
        isArray(['a', 'b'])         // true
        isArray(false)              // false
        isArray(12)                 // false
        isArray("Bob")              // false
        isArray({'some': 'object'}) // false
        isArray(true)               // false
        isArray()                   // false

5. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
        
        isNegative(-1)              // true
        isNegative(-5)              // true
        isNegative("-3")            // true
        isNegative(0)               // false
        isNegative(6)               // false
        isNegative("10")            // false
        isNegative(true)            // false
        isNegative(false)           // false
        isNegative("Bob")           // false
        isNegative([-1, 2, 3])      // false
        isNegative(null)            // false

6. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.

        isPositive(1)               // true
        isPositive("6")             // true
        isPositive(3.141)           // true
        isPositive(-1)              // false
        isPositive(-5)              // false
        isPositive("-4")            // false
        isPositive(0)               // false
        isPositive("Bob")           // false
        isPositive(true)            // false

7. Define a function named `increment` that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
        
        increment(0)                // 1
        increment("10")             // 11
        increment(-5)               // -4
        increment("Bob")            // false
        increment([1, 2, 3])        // false
        increment(true)             // false
        increment(null)             // false

8. Define a function named `decrement`. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, `decrement` should return false.
        
        decrement(19)               // 18
        decrement(0)                // -1
        decrement("4")              // 3
        decrement("Bob")            // false
        decrement([1, 2, 3])        // false
        decrement(false)            // false
        decrement(null)             // false

9. Define a function named `square`. If the provided input is numeric, `square` should return the number multiplied by itself. If the input is not numeric, `square`, should return false.

        square(2)                   // 4
        square(3)                   // 9
        square(-4)                  // 16
        square("5")                 // 25
        square(0.5)                 // .25
        square("Bob")               // false
        square(true)                // false
        square(false)               // false
        square(null)                // false
        square([1, 2, 3])           // false
        square()                    // false

10. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`. If the input is a non-numeric string, then return it with all the letters capitalized. 
        
        upperCase("Codeup")         // "CODEUP"
        upperCase("javascript")     // "JAVASCRIPT"
        uppercase("45")             // false
        upperCase(23)               // false
        upperCase(null)             // false
        upperCase([1, 2, 3])        // false
        upperCase(true)             // false
        upperCase()                 // false


11. Write a function named `isPalindrome` that takes in a single input. If the input is a numeric string, then return `false`. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
        
        isPalindrome("Bob")         // true
        isPalindrome("radar")       // true
        isPalindrome("ufotofu")     // true
        isPalindrome("Monday")      // false
        isPalindrome(232)           // false
        isPalindrome(null)          // false


12. Write a function named `getHighestNumber` that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return `false`.

        getHighestNumber(1, 3, 2)           // 3
        getHighestNumber(0, 1, "2")         // 2
        getHighestNumber(9, 3, -20)         // 9
        getHighestNumber(2, 2, 2)           // 2
        getHighestNumber(2, 5, 5)           // 5
        getHighestNumber(1, 2, 'x')         // false
        getHighestNumber("a", "b")          // false
        getHighestNumber()                  // false
        

13. Write a function named `containsVowel` that takes in a single input as its argument. If the argument is not a string, then return `false`. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return `false`. 
    
        containsVowel("Index")      // true
        containsVowel("Codeup")     // true
        containsVowel("Jane")       // true
        containsVowel("bb8")        // false
        containsVowel("")           // false
        containsVowel(34)           // false
        containsVowel([1, 2, 3])    // false

14. Write a function named `add` that takes in two inputs. If both inputs provided are numeric, `add` will return the sum of both inputs. If one or both inputs is not numeric, `add` should return false.
        
        add(1, 2)                   // 3
        add(0, 0)                   // 0
        add(-5, 10)                 // 5
        add("2", 4)                 // 6
        add(5, true)                // false
        add(true, false)            // false
        add("Monday", "Tuesday")    // false
        add(null)                   // false


15. Write a function named `multiply` that takes in two inputs. If both inputs provided are numeric, `multiply` returns the product of the first input multiplied by the second. If either or both inputs are not numeric, `multiply` should return false.
    
        multiply(4, 2)              // 8
        multiply(0, 44)             // 0
        multiply(-5, 10)            // -50
        multiply(5, true)           // false
        multiply(true, false)       // false
        multiply("Monday")          // false

16. Write a function named `sumOfSquares` that takes in two inputs. If both inputs are numeric, `sumOfSquares` should square each input and return the sum of them added together. For example, if we pass `a` and `b` then we should square `a` and add it to the square of `b`. If either or both inputs are not numeric, `sumOfSquares` should return false.

        sumOfSquares(2, 3)          // 13
        sumOfSquares(1, 0)          // 1
        sumOfSquares("4", 5)        // 41
        sumOfSquares(2, false)      // false
        sumOfSquares(null)          // false
        sumOfSquares()              // false

## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code inside `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.

- If all the specs for `isNegative` function are green, then the provided solution is correct.

- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Your grade is entirely dependent on the results of the automated tests. No credit will be given for partial or incorrect solutions. Accuracy and precision matter.

- There are multiple assertions for each question. Each solution will be provided a number of known inputs and expected ouputs. This is to make sure that the solution will operate accurately under different conditions. 

- You will be graded as a percentage of the number of spec tests you turn green. For example, if there are 189 specs and you have only 3 failing specs, then your grade will be (189 - 3) / 189 resulting a grade of 98%.

## Hints

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```


