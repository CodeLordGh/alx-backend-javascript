/**
 Create a new file named 1-calcul.js:

Upgrade the function you created in the previous task (0-calcul.js)
Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error
Test cases

Create a file 1-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Usage of describe will help you to organize your test cases
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 1-calcul.test.js
Every test should pass without any warning
Expected output

> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
 */
const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("Calculate Number", function() {
    it("should return the sum of two numbers when type is SUM", function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5)
        , 5.9);
    });
    it("should return the difference of two numbers when type is SUBTRACT", function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4,
        4.5), -3.1);
    });
    it("should return the division of two numbers when type is DIVIDE", function(){
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.3);
    });
    it("should return an error when the second number is zero and type is DIVIDE", function() {
        assert.equal(calculateNumber('DIVIDE', 1.4,
        0), 'Error');
    });
});
    
