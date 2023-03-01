// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: We should see our string broken up into an array with each index of the string being the index of the new array: ["A", "l", "p", "h", "a" and so on]

// b) Verify and explain: [ 'A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '3' ] 

// I had the double/single quotes wrong but the console.log() of our string is what I expected. .split("") takes a string and coverts it into an array. This is very useful with what we have been working on, because some built in methods dont work on strings (.findIndex(), HOFs, etc) so we need to be able to convert a string into an array to be able to extract data from the original string. We can convert an array to a string using .join("").

// --------------------2) What will this log?

// const greeter = (name) => {
  // `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: Dang it, you got me! There's no return on line 20 so when we called on our function we got 'undefined'. greeter is still preforming its function, but it isn't returning the output to us when we call on it. If we wanted to fix this, we would simply need to add 'return' on line 20 in front of `Hello, ${name}!`. See below!

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// Alternatively, if we don't want to explicitly code a return, and want to have our function on just one line, we can remove the {} establishing our code block, and instead wrap our entire function after the assignment operator in (). See below!

const greeter = ((name) => `Hello, ${name}!`)
console.log(greeter("LEARN Student"))


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: We should receive an array that is the same length as our original array, except each index in our new array will be the original value multiplied by two.

// b) Verify and explain: output: [ 8, 10, 12, 14, 16 ] 

// Perfect! .map() is a higher order function that we can use within another function to iterate through each value in an array, mutate the data, and then return a new array of the same length with the new values. In our example, our .map() is taking each (number) in our original array and multiplying it by two, then returning a new array with those numbers. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This should log a new array that consists of ONLY the numbers after being divided by two have a remainder other than 0, which indicates an odd number. So, more simply, an array of only odd numbers from out original array. [ 11, 13, 15 ]

// b) Verify and explain: output: [ 11, 13, 15 ]

// Cool! So .filter() is a higher order function that can be used within a function to iterate through an arrays values and output a new array of only values that match what criteria you want to apply. .filter() has a built in 'if' statement that can be used to return true statements. So in our example we are basically saying 'if a number in our array divided by 2 has a remainder of anything less than zero, add that number to a new array' which returns an array of only odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: : output : JavaScript

// Success! myCodingSkills is an object that holds a group of key:value pairs. '.languages' is a key within the myCodingSkills object (which has an array as a 'value' in our example), [0] is referencing the 0 index of the array ('value' in our key:value pair) located in '.languages'. So myCodingSkills.languages[0] is Javascript!

