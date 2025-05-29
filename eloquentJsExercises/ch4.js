/*
    1.) The Sum of a Range
The intro of this book alluded to the follwing as a nice way to 
compute the sum of a range  of numbers:

console.log(sum(range(1, 10)));

    Write a range function that takes two arguments, start and end,
    and returns an array containing all the numbers from start up to
    (and including) end.

    Next, write a sum function that takes an array of numbers and returns
    the sum of these numbers. Run the example program and see whether it does 
    indeed return 55.

    As a bonus assignment, modify your range function to take an optional
    third argument that indicates the "step" value used when building the array.
    If no step is given, the elements go up by increments of one, corresponding
    to old behavior. The function call range (1, 10, 2) should return [1, 3, 5, 7, 9]
    Make sure it also works with negative step values so that the range(5, 2, -1) 
    produces [5, 4, 3, 2].
 */
console.log("1.) The Sum of a Range: ")

function range(start, end,step){
    let arr = []
    if(step < 0){
        for(let i = start; i >= end; i += step){
            arr.push(i);
        }
        return arr;
    } else if(step === undefined){
        for(let i = start; i <= end; i++){
            arr.push(i);
        }
        return arr;
        
    }else{
        for(let i = start; i <= end; i += step){
            arr.push(i);
        }
        return arr;
    }
}
console.log(range(10, 0, -2));

function sum(arr){
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return "The sum is: " + sum;
}
console.log(sum([5,5,5]))

console.log("**********************")

/*
    2.) Reversing an Array:

    Arrays have a reverse method that changes the array by inverting the 
    order in which its elements appear. For this exercise, write two functions,
    reverseArray and reverseArrayInPlace.

    The first, reverseArray, takes an array as an argument and produces a new array 
    that has the same elements in the inverse order.

    The second, reverseArrayInPlace, does what the reverse method does:
    it modifies the array given as argument by reversing its elements.

    Niether may use the standard reverse method.

    Thinking back to the notes about side effects and pure functions in "Functions and Side Effects"
    on page 54, which variant do you expect to be useful in more situations? Which runs faster?
 */
console.log("2.) Reversing an Array: ")

function reverseArray(arr){
    let reversed = [];

    for(let i = arr.length -1; i >= 0;i--){
        reversed.push(arr[i]);
    }
    return reversed
}
console.log("Reversed Array: ", reverseArray([1,2,3,4]))

function reverseArrayInPlace(arr){
    let length = arr.length;
    let midPoint = Math.floor(arr.length / 2); //splits array in half to easily swap indexes from front to back
    
    for(let i = 0; i < midPoint; i++){
        let temp = arr[i];
        arr[i] = arr[length - 1 - i]
        arr[length - 1 - i] = temp
    }
    return arr;
}
console.log("Reversed array in Place: ", reverseArrayInPlace([1,2,3,4]))

console.log("**********************")

/*
    3.) A List

    Objects, as generic blobs of values, can be used to build all sorts of data
    structures. A common data structure is the list (not to be confused with array).
    A list is a nested set of objects, with the first object holding a reference to the 
    second, the second to the third and so on..

    Write a function arrayToList that builds up a list structure like the one
    shown when given [1,2,3] as an argument.

    Also write a listToArray function that produces an array from a list. 

    Then add a helper function prepend, that produces an array from a list, and creates a new list
    that adds the element to the front of the input list, and nth, which takes a list and a number
    and returns the element at the given position in the list (with zero reffering to the first element)
    or undefined when there is no such element.

    if you havent already also write a recursive version of nth.
 */
console.log("3.) A List")

function arrayToList(arr){
    if(arr.length === 0) return null; //base case
    return{
        value: arr[0],
        rest: arrayToList(arr.slice(1))// recursive call for the remaining array elements
    };
}
console.log("Array To List: ",arrayToList([1,2,3]))

function listToArray(){
    let arr = [];
    let list = {
        value:1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };

    //loop until the end of the list
    while(list !== null){
        arr.push(list.value); // add current value to the array
        list = list.rest; // move to the next node
    }

    return arr;

}
console.log("List to Array: ",listToArray())