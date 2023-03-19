/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't 
use any of the following characters: 0123456789*+-/
*/


// Solution

function unusualFive() {
  return 'hello'.length
}

// or

function unusualFive() {
  return Math.hypot(Math.ceil(Math.E), Math.ceil(Math.PI))
}

// or

const unusualFive = () => "How do you do friend?".split(' ').length