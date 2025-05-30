// Chapter 5: Higher-Order Functions

/*
1. Flattening:
Use the reduce method in combination with the concat method to "flatten"
an array of arrays into a single array that contains all the elements of
the original arrays.
*/
console.log("1.) Flattening")
const arrayOfArrays = [
    [1,2,3,4],
    ['a', 'b', 'c', 'd']
]

function flattenArray(arr){
    const newFlattenedArray = arr.reduce((count, current) => {
        return count.concat(current);
    }, []);
    return newFlattenedArray;
}
console.log(flattenArray(arrayOfArrays));

/**
2. Your Own Loop:
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, and update function, and a body function.

Each iteration, it first runs the test the function on the current loop value and stops
if that returns false. Then it calls the body function, giving it the current value.
Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/
console.log("2.) Your Own Loop")
//where to stop the loop
function test(n){
    return n < 10;
} 

//print each iteration
function body(n){
    console.log(n)
}

//modify the value
function update(n){
    return n + 1
}

function customLoop(value, test, update, body){
    let currentValue = value
    
    while(test(currentValue)){
        body(currentValue);
        currentValue = update(currentValue);
    }
    return currentValue;
    
}
console.log(customLoop(0, test, update, body));

/**
3. Everything

Analogous to the some method, arrays also have an every method. This one 
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator, and every is a version of the && operator.

Implement every as a function that takes an array and a predicate function.
 */

console.log("3.) Every")

function isPositive(n){
    return n > 0;
}

function every(arr, isPositive){
    for(let i = 0; i < arr.length; i++){
        if(!isPositive(arr[i])){
            return false;
        }
    }
    return true;
}

console.log(every([1,2,3,4], isPositive));

console.log("using the built in function every():")
//Heres how it would look like using the build in function every()
const numbers = [1,2,3,4];

const allPositiveNumbers = numbers.every(n => n > 0);

console.log(allPositiveNumbers);