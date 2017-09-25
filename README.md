Write the following functions. 

# JavaScript Assessment

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
    - Writing functions

## Instructions

0. *Carefully* read all the instructions and problems before beginning your work.

1. Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo.

1. Create a branch named `first-last` where `first` is your first name and `last` is your lastname.

1. Write your solutions to the problems presented below inside `solutions.js`.

1. Read the Testing instructions below.

1. Add, commit, and push to your branch

## Problems
- isBoolean
- isNumeric (string number or number)
- isString
- isArray
- isNegative
- isPositive
- increment(number)
- decrement(number)
- square(n)
- add(a, b)
- multiply(a, b)
- sumOfSquares(a, b)

1. Write a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
        isBoolean(true)  // true
        isBoolean(false) // true
        isBoolean(null)  // false
        isBoolean("Bob") // false
        isBoolean(['an', 'array', 'of', 'strings']) // false

2. Write a function named `isNumeric` that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
        isNumeric(23)   // true
        isNumeric("42")  // true
        isNumeric("Bob")  // false
        isNumeric([1,2,3])  // false
        isNumeric({firstName: "Bob", lastName: "Bobberson") //false

3. Write a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not.
        isString("Hello") // true
        isString("123")  // true
        isString(4)     // false
        isString(true) // false
        isString([1, 2, 3]) // false

4. Write a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
        isArray([1, 2, 3])  // true
        isArray(['John Dillinger', 'Bugsy Segal', 'Al Capone'])   // true
        isArray(false)      // false
        isArray(12)         // false
        isArray("Bob")      // false

5. Write a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is negative.
        isNegative(-1) // true
        isNegative(-5) // true
        isNegative(0) // false
        isNegative(6) // false

6. Write a function named `isPositive` that accepts a number and returns `true` or `false` based on whether the input is above zero.

        isPositive(-1) // false
        isPositive(-5) // false
        isPositive(0) // false
        isPositive(6) // true

7. Write a function named `increment` that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
        increment(0)  // 1
        increment(10)  // 11
        increment("-5")  // 4
        increment("Bob") // false
        increment([1, 2, 3]) // false

8. Write a function named `decrement`. If the provided input is numeric, it should subtract 1. If the input is not numeric, `decrement` should return false.
        decrement(19)   // 18
        decrement(0)    // -1
        decrement("4")  // 3
        decrement("Bob")  // false
        decrement([1, 2, 3]) // false 

9. Write a function named `square`. If the provided input is numeric, `square` should return the number multiplied by itself. If the input is not numeric, `square`, should return false.

10. Write a function named `add` that takes in two inputs. If both inputs provided are numeric, `add` with sum both inputs. If the input is not numeric, `add` should return false.

11. Write a function named `multiply` that takes in two inputs. If both inputs provided are numeric, `multiply` returns the product of the first input multiplied by the second. If inputs are not numeric, `multiply` should return false.

12. Write a function named `sumOfSquares` that takes in two inputs. If both inputs are numeric, `sumOfSquares` should square each input and return the result of 


## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code inside `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.

- If all the specs for `isNegative` function are green, then the provided solution is correct.

- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Your grade is entirely dependent on the results of the automated tests. No credit will be given for partial or incorrect solutions. Accuracy and precision matter.

- For a solution to be considered correct, all of the tests under that function's Spec List must be green.

- There are 6 points available on this assessment. Each solution will be awarded 1 point if *all* the specs for that solution are green. 

- If you complete all 6 problems and the tests show 0 failures, you will earn a 100% grade.

- If you write 6 solutions and the Spec List shows that one function has failing tests, you will receive 5 out of 6 points.

- If half of your functions have all green tests, and the only failing tests are for problems you did not attempt, you will earn a 50% grade.

- If all the tests fail for all of your solutions, you will earn a 0% grade.

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

This is incorrect because the function doesn't return the output.

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
```\


