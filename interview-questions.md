# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a placeholder of data that you can pass an argument through, it allows you to reference the argument as many times throughout a function as needed without hard coding your function to interact with only one piece of data. An argument is the actual data you are wanting to run through your function. In this example:

const greeter = (name) => {
  return `Hello, ${name}!`
}

'name' is a parameter. We see it first in the () following the assignment operator (=) and again within the code block of the function within the string interpolation. If we log our function, we have to include data in the argument or else we will get a return of 'Hello, undefined!' which is more than likely isn't what we want. A function will operate without an argument, you just won't return a desirable result. A function will not work however, without a parameter to pass data through.

Researched answer: Parameters are the names listed in the function definition, they do not have a specific data type, and they do not perform type or number checking on arguments passed through them. Arguments are the actual value of data being passed through to be manipulated throughout the function. A parameter is tied to a specific function, and cannot be called upon outside of that functions scope. Whereas an argument can exist outside of a function, and if its value is changed by the function, its original value through the parameter isnt changed. So effectively, a parameter is a 'passthrough', a 'placeholder' or 'snapshot' of an argument after it is called upon with a function. In my above example, I discussed that 'name' is our parameter for the function 'greeter'. So let's give it an argument.

const greeter = (name) => {
  return `Hello, ${name}!`
}

const myName = "CJ"

Above, I have a new variable called myName that holds the string "CJ". When I call on the greeter function, I can add myName as the argument to have our function return 'Hello, CJ!'

console.log(greeter(myName))
output: 'Hello, CJ!

When I call upon myName with greeter, I am effectively replacing every instance of 'name' within our function with the string 'CJ' on our myName variable for the purpose of our console log. (source - https://www.w3schools.com/js/js_function_parameters.asp)



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() built in method is a higher order function that we can use on an array to iterate through each index in the given array, manipulate the values, and return an array of the same size with the manipulated data. When we call upon a .map() we have 3 predefined parameters; value, index, and array. These predefined parameters operate like a normal function parameter, except that the data being passed through is specifically from the array you are using .map() on. Of our three predefined parameters, value is the only parameter required when using .map(). It's important to note, that the order in which you place your parameters matters when using more than just the value parameter. This can be confusing for the developer if we misname our parameters when creating a .map(). To clarify the order is (value, index, array) specifically.

Researched answer: The .map() is a built in method that is used to iterate through an array, manipulate the data within the array, and return a new array of the same length with the new data. .map() does not change the original array. It also has a list of parameters that can be used within the function to input data from an array as arguments. Those parameters are value, index, array, callbackFn, and thisArg. Value refers to the value of each index in the original array. The index parameter refers to the index of the value being iterated on in the array. The array parameter refers to the entire original array that .map() was called upon. callbackFn and thisArg are used when calling on another function to act on the data within the new array. When using .map() the only required parameter is the 'value' parameter. (source - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

3. What is the difference between map and filter?

Your answer: Map and filter can both be used as higher order functions to iterate through an array, and return a new array. However, how they iterate through and the arrays they return have different uses. .map() iterates through an array using a built in for loop, can manipulate that data, and return an array of the same length with the new data. .filter() has a built in 'if' conditional statement that allows it to iterate through an array, and only return the data that meets the criteria in a new array. Here are some examples:

const exampleArray = [ 5, 8, 10, 15 ]

const mapExample = (array) => array.map((value) => value * 2)
console.log(mapExample(exampleArray)); output : [ 10, 16, 20, 30 ]

With our mapExample function, we take exampleArray as an argument and apply .map() to it. Our .map() function is iterating through each value in exampleArray, multiplying it by 2, and returning the new value into a new array.

const filterExample = (array) => array.filter((value) => value % 2 === 0)
console.log(filterExample(exampleArray)); output: [ 8, 10 ]

Similar to our mapExample function, our function filterExample takes exampleArray as an argument and applies .filter() to it. Our filter iterates through exampleArray, divides each value by 2, and only returns the values that when divided by 2 have a remainder of 0. Which is an annoying way of saying 'returns only the even numbers'.

Researched answer: The map() method creates a new array populated with the output of a provided function on every element in the original array. The filter() method, given an array input, creates a new array from a portion of the original filtered down to only the values that pass the test (conditional) implemented by the function within the filter. Neither method alters the original array input, and neither execute their function for empty values. The map() method iterates through the input array using a for loop, knowing this helps us understand why map() returns a new array that is the same length as the input array. Whereas the filter() method iterates through the input array using an 'if' conditional statement, and only returns the values that satisfy that 'if' statement. (sources - (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)(https://www.w3schools.com/jsref/jsref_map.asp)(https://www.w3schools.com/jsref/jsref_filter.asp)

4. What is iteration?

Your answer: Iteration is moving through a set of data at a defined increment or until a condition is met. A basic example of iteration can be seen in a for loop. Seen below!

const loopExample = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0) {
      newArray.push(array[i])
    }
  }
  return newArray
}

In our function loopExample, we have a for loop, that is designed to iterate through an array taken as an argument, and if that value is an even number, adds it to newArray, a variable of an empty array we defined within our function using the .push() built in method. Our iteration starts at the 0 index (i = 0), ends at the end of the array (i < array.length), and iterates through the array one index at a time (i++). Our function then returns newArray with all of the even numbers in the original arrayThis is a relatively simple way to view iteration, as you can set the start, end, and increment for iteration in our for loop itself. 

Researched answer: The repitition of a process in order to generate an outcome, a sequence of outcomes, or until a condition is met. An example of an iteration in JS is using a while statement, which executes something as long as that condition is true (or even if that condition is false (!)). A simple example of this kind of iteration can be seen below.

let a = 0

while (a < 5) {
    a++
}

Our variable 'a' starts at 0. Our while statement says that as long as a is less than 5, increase 'a's' value by 1. Every instance of 'a' being less than 5, our while statement iterates. 
( source - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

--NOTE-- While I feel like I adequately answered this question, my researched answer does feel sparse. Apologies if that is the case, I'm more than happy to add more examples to my answer (map, filter, etc)


5. What is the difference between a function and a method?

Your answer: Function is almost synonymous with method in my mind. However to differientiate between the two, I think of a function as code that we write that can be very dynamic and independent, and I think of methods as code that exists to perform something very specific within the scope of another function typically. When I think of methods I think of something like .split("") which relies on being attached to a variable name thats a string, otherwise it throws an error. It's a built in method in JS that performs a very specific function of turning a string into an array. It makes sense to me to think of all methods as functions, but not all functions are methods.

Researched answer: A method is a function that is a property of an object. A function is a code snippet that can have a variable name, and be called upon by other code to perform a specific sequence of data. There are a few different types of functions in JS, anonymous (() => {}), named (const assessmentGrader = () => {}), inner/outer function (function inside another function/function conatining another function), recursive function (function that calls itself), and an Immediately Inkvoked Function Expressions (function that is called directly after that function loads into the console or browser). Functions in JS are objects, because they can be used in other functions, be called as a return for functions, and assigned to variables. They can also have properties and methods themselves. Methods can be used in objects and classes, and when used in classes, they are defined on the prototype property, which allows them to be shared by all instances of that class. ( sources - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)

6. STRETCH: What is hoisting in JavaScript?

Your answer: While I am not familiar with this exact term as it is referred to in JS, I would imagine that it has something to do with referencing or pulling data/code up to reference further down in your code. This also makes me think of global and local scope, and how we can define a variable outside of a function, run that variable through a function and alter it's data. Something along those lines makes sense to me.

Researched answer: Well, I was sort of right, I guess; and it's something I've been doing this whole time! Hoisting is the behavior in JS to move all declarations to the top of the current scope, with that scope being global or local/specific to a function. In JS, a variable can be declared after it has been used, meaning we can assign data to a variable, then declare it further down in our code. It's important to not that JS hoists declarations, but not initializations, meaning we cannot call on a variable, and THEN assign or define it later in our code. We are taught to hoist our variable declarations for good habit transfer to avoid potential bugs in our code. ( source -https://www.w3schools.com/js/js_hoisting.asp)

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: Template for creating objects. Classes allow us to assign and define a sort of 'cookie' cutter for multiples of the same objects using the same values, and allows us to manipulate one without manipulating them all. For example, we can create a class that defines what a cat is, its a mammal, it has four legs, a tail, and it meows. We can create multiple cats with those same features, but add more specific data to the individual cat. 

2. Spread operator: (...) lets an array or string be expanded in places where an argument is expected, either for calling with a function, or when iterating over an array. We can use a spead operator to to add the properties (key-value pairs) from one object to another that is being created. It acts almost like a shorthand to add all the elements of one object or array to a new object or array. It can also be used to quickly duplicate arrays. It helps make code more readable.

3. React state: State is a variable in React that stores data that determines how a given component renders and behaves. Components in React can either hold or not hold state. Components that hold state are considered logic components, while those that don't are considered display components. We can fluctuate components as the user interacts with them by changing the state of the component with the useState() method. This method allows us to define state variables with a starting value, and provides it witha method to update that value to change with how the user ineracts with the data. useState is a type of built in method for React called React hooks which allows developers to "hook" into other features built into React.

4. React props: Properties that allow information to be passed from one object to another. Props create a 'one way street' for the flow of data from the parent component to its nested components. These properties cannot be changed due to user interaction. Prop data being transferred is very similar to how functions get passed information with an argument. 

5. DOM events: Document Object Model events are a signal to the user that something has occured. They allow javascript to add event listeners to HTML elements. Like when a user clicks on something specifically on a webpage, or if an element on the page is dragged. It allows us to trigger certain events in JS when a user interacts with the webpage. Holding down left click to drag your cursor over a block of text to select the entire block is a good example of DOM events in effect I think.
