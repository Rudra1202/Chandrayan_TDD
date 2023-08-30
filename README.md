# Chandrayan_TDD
Test-Driven Development (TDD) is a software development methodology that emphasizes writing tests before writing the actual implementation code. The core idea behind TDD is to write a failing test case first, then implement the minimum amount of code required to make that test pass, and finally refactor the code if necessary while ensuring that the tests continue to pass. TDD follows a cycle often referred to as the "Red-Green-Refactor" cycle:

Red: Write a failing test case that describes the desired behavior of a specific piece of code. This test should fail because the code has not been implemented yet.

Green: Write the implementation code to make the failing test pass. The goal here is not to write perfect code but to make the test pass.

Refactor: Once the test passes, you can refactor the code to improve its design, readability, and efficiency while still ensuring that the tests continue to pass.


# Question 
This repository is private; it will become public after assement time is up

Chandrayaan 3: Lunar Craft: Galactic Space Craft Control

Description

As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3, your task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).

Requirements

You will be given the initial starting point (x, y, z) of the spacecraft and the direction it is facing (N, S, E, W, Up, Down). The spacecraft receives a character array of commands, and you are required to implement the following functionalities:
1. Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.
2. Turn the spacecraft left/right (I, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
3. Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.
   
Note:
The spacecraft's initial direction (N, S, E, W, Up, Down) represents the reference frame for movement and rotation.
The spacecraft cannot move or rotate diagonally; it can only move in the direction it is currently facing.
Assume that the spacecraft's movements and rotations are rigid and that it cannot move beyond the galactic boundaries.

# How to Run Code
Jest is a popular JavaScript testing framework that is well-suited for Test-Driven Development (TDD) practices.

I use Jest's in-build Function --WatchAll to continuously process code and show the test cases are RGR.

So follow the below-given steps, respectively.

```bash
npm init -y
npm i
npm run test
