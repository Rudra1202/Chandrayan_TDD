# Chandrayan_TDD
Test-Driven Development (TDD) is a software development methodology that emphasizes writing tests before writing the actual implementation code. The core idea behind TDD is to write a failing test case first, then implement the minimum amount of code required to make that test pass, and finally refactor the code if necessary while ensuring that the tests continue to pass. TDD follows a cycle often referred to as the "Red-Green-Refactor" cycle:

Red: Write a failing test case that describes the desired behavior of a specific piece of code. This test should fail because the code has not been implemented yet.

Green: Write the implementation code to make the failing test pass. The goal here is not to write perfect code but to make the test pass.

Refactor: Once the test passes, you can refactor the code to improve its design, readability, and efficiency while still ensuring that the tests continue to pass.

# How to Run Code
Jest is a popular JavaScript testing framework that is well-suited for Test-Driven Development (TDD) practices.

I use Jest's in-build Function --WatchAll to continuously process code and show the test cases are RGR.

So follow the below-given steps, respectively.

```bash
npm init -y
npm i
npm run test
