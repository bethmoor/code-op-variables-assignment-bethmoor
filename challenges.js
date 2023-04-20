/*
1)
Using console.log will print anything
between the parantheses into your console.

Change the phrase being printed below, 
save, and then view your changes 
in the browser.

After confirming that it works, comment it out.
*/

// console.log("Hello, world.");

/*
2)
Using both the (+) and the (*) operators,
multiply and add any combination of numbers
together so that you get the number 10.
*/

// console.log((4+1) * 2)

/*
3)
console.log is often used to debug
issues. You can actually add multiple
arguments inside of console.log (which are
separated by a comma). Add everything
below into console.log!

3 + 4, " should equal 7"
*/

// console.log(3 + 4, " should equal 7")

/*
4)
Add two strings together so that you
are printing your full name!
*/

// console.log("Bethani " + "Moorhouse.")

/*
5)
Using modulo to get the remainder of
a number divided by 2 will tell you whether a 
number is even or odd. Try it below!
*/

// console.log(20 % 2)

/*
6)
Change Mia's location by reassigning the location
variable to a new string! To do this, you will have 
to add a new line of code (do not delete any currently
written code). Note: you will also have to un-comment
the console.log to print the location.
*/

const name = "Mia";
let currentLocation = "school";
currentLocation = "home";

// console.log(name, " is currently at ", currentLocation);

/*
7)
Create variables so that the message is printed
to the screen!
*/

let person = "Beth";
let place = "Restaurant";
let food = "Pasta";

// console.log(person, " went to the ", place, " to eat ", food, ".");

/*
8)
Now, reassign all the previous variables so that
a new message is printed to the screen!
*/

person = "Greg";
place = "Diner";
food = "Waffles";

// console.log(person, " went to the ", place, " to eat ", food, ".");

/*
9)
There are three ways to increase the
number stored in the variable "count".
However, there is a problem with how 
the variable has been declared. Debug it!
*/

let count = 0;
count = count + 1;
count += 1;
count ++ ;

// console.log(count, " should be 3");

/*
10)
Swap time! In the code below, we want to swap
the values being stored in both "a" and "b".

This code written below does not work. To accomplish
this task, you will need to create an additional
variable (you can name it "temp") to store either
"a" or "b" while you are swapping. Draw it out if
you are unsure!
*/

let a = 1;
let b = 2;
let temp = a;

// console.log("BEFORE > a is: ", a, " - and b is: ", b);

a = b;
b = a;

// console.log("AFTER < a is: ", a, " - and b is: ", b);

/*
11)
Make the statement below evaluate
to true!
*/

// console.log(3 < 4);

/*
12)
Make the statement below evaluate
to false.
*/

let x = 10;
let y = x++;

// console.log(x <= y);

/*
13)
Fix the comparison operator so that
the statement evaluates to false.
*/

// console.log(3 != "3");

/*
14)
Change something in the expression below
so that it does not evaluate to false.
*/

const sunny = true;
const warm = true;

// console.log(sunny == warm);

/*
15)
Practice with everything you've learned!

Come up with 10 expressions that use what
you've learned so far.
  - Use the data types: string, number, boolean, undefined, null.
  - Use the following operators: (+) (-) (*) (/) (%).
  - Use the keywords: var, const, let.
  - Use the operators: (=) (+=) (-=) (*=)(++) (--).
  - Use the operators: (>) (<) (>=) (<=) (== vs ===) (!=).
*/


const myName = "Beth";
let myAge = 22;

// console.log(`My name is ${myName} and I am ${myAge} years old.`)

const rainy = true;
const windy = false;

// console.log(rainy !== windy);

let g = 4;
let l = 7;
l *= 6;

// console.log((g - 3) * 4 >= l);

console.log(4 / 5);

console.log(46 % 2);

console.log(12 === "12");

console.log(12 == 12);

console.log(4 > 5);

console.log(10 < 6);

console.log(3 + 7);





