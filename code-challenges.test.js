// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// -------------------------------- plug and play test below
// describe("aFunction", () => {
//     it("description of what aFunction outputs with a given input", () => {
//       expect(aFunction()).toEqual("expected outcome")
//     })
//   })
// --------------------------------


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisBy3", () => {
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
      expect(divisBy3(object1)).toEqual("15 is divisible by three")
      expect(divisBy3(object2)).toEqual("0 is divisible by three")
      expect(divisBy3(object3)).toEqual("-7 is not divisible by three")
      expect(divisBy3("hello")).toEqual("error")
      expect(divisBy3({number: "hello"})).toEqual("error")
    })
})

//  ReferenceError: divisBy3 is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
//   create a function called divisBy3
//      takes in an object as an argument
//          iterates the objects number through a conditional statement that checks if the remainder of the object divided by three equals 0
//              if the data type of the argument is not an object OR the datatype of the object.number is not a number ---- return 'error'
//              else if the remainder of object.number divided by 3 is 0 ---- return `${object.number} is divisible by three`
//              else return `${object.number} is not divisible by three`

const divisBy3 = (object) => {
    if (typeof object != "object" || typeof object.number != "number"){
        return "error"
    } else if (object.number % 3 === 0){
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayCapitalizer", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    it("takes in an array of words and returns an array with all the words capitalized", () => {
      expect(arrayCapitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(arrayCapitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
      expect(arrayCapitalizer(["hello", "i", "am", "the", "wizard"])).toEqual(["Hello", "I", "Am", "The", "Wizard"]) //this one is just for fun, inside joke in our breakout room, im not the wizard lol
    })
})

// ReferenceError: arrayCapitalizer is not defined

// b) Create the function that makes the test pass.

// Pseudocode: (this pseudo is pretty bloated, but I want to share that I know whats going on in my code. If you would rather I not do this in the future please let me know)

//  create a function named arrayCapitalizer
    // take in an array of words as an argument
        // return an array of the same size, with each word in the argument capitalized using .map()
            // within our .map() we want to return the first letter of each value in each index capitalized. 
            // To access the first letter of each value in each index we need to use the .charAt(0) built in method, and to capitalize that letter we need to use .toUpperCase(). 
            // However, if we leave this as is we will return only that first character capitalized and not the rest of the string. 
            // Following our value.charAt(0).toUpperCase() we will need to add (+) another built in method to combine our uppercase letter to the rest of its original string using .slice(1).
            // The signifigance of the 1 in our .slice(1) is that we are extracting everything from the 1 index of our string to the end of the string
            // should look like this value.charAt(0).toUpperCase() + value.slice(1)

const arrayCapitalizer = (array) => {
    return array.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowelFinder", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
        it("takes in a string and logs the index of the first vowel", () => {
          expect(firstVowelFinder(vowelTester1)).toEqual(1)
          expect(firstVowelFinder(vowelTester2)).toEqual(0)
          expect(firstVowelFinder(vowelTester3)).toEqual(2)
          expect(firstVowelFinder("hhhhhhhhhhhhi")).toEqual(12)
        })
      })

//    ReferenceError: firstVowelFinder is not defined

// b) Create the function that makes the test pass.

// pseudo:
// create a function called firstVowelFinder
    //   the function takes in a string as an argument
        // define a variable named 'vowels' that is an array containing ["a", "e", "i", "o", "u", "y"]
        // convert the string provided in the argument to an array using .split("") --- (string.split(""))
        // use the findIndex() higher order function to iterate through our original string turned array --- (string.split("")).findIndex()
        // within our findIndex() set value as the parameter, and iterate through our array, comparing each value to vowels using .includes() --- (string.split("").findIndex((value) => vowels.includes(value))
    //  return that index as the output of firstVowelFinder


    // notes--- findIndex() is a higher order function that returns the index of the first value in an array that satisfies the function within findIndex. .includes() is a built in method that determines if an array contains a value amongst a given argument. With those powers combined, I have my solution to this problem. This is not the only code I attempted to solve this problem with, I also tried to use map, filter, forEach, and any combination of those three to force the correct index out. I have that code saved, but I dont have it included here because it's mostly garbage. When I realized I didn't need to return an array, just an index, life got a whole lot easier. This was a fun challenge, and I spent way to long on it.


const firstVowelFinder = (string) => {
    let vowels = ["a", "e", "i", "o", "u", "y"]
    return string.split("").findIndex((value) => vowels.includes(value))
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


