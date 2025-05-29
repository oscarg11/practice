/*
    1.) Minimun
        Chapter 2 introduced the standard function Math.min, which returns its
        smallest argument (see "Return Values" on page 27). We can build something
        like that now. Write a function min that takes two arguments and returns 
        their minimuns.
 */
console.log("1.) Minimum")

function min(a, b){
    return Math.min(a, b);
}

console.log(min(100,6));

console.log("--------------")

/*
    2.) Recursion
        We've seen that % (the remainder operator) can be used to test whether
        a number is even or odd by using % 2 to see whether its divisible by 2
        Heres another way to define whether a positive whole number is even
        or odd.

        * Zero is even
        * One is odd
        * For any other number N, its evennes is the same as N - 2
        
        Define a recursive function isEven corresponding to this description.
        The function should accept a single parameter (a positive whole number)
        and return a boolean

        Test it on 50 and 75. See how it behaves on -1. Why? can you think of a way
        to fix this?
 */
console.log("2). Recursion")

function isEven(n){
    if(n < 0){ // check for negative num
        return isEven(-n) //convert to positive num
    }else if(n == 0){
        return true;
    }else if(n == 1){
        return false;
    }else{
        return isEven(n-2);
    }
}
console.log(isEven(-50))

console.log("--------------")

/*
    3.) Bean Counting
    You can get the Nth character, or letter, from a string by writing "string"[N]
    The returned value will be a string containing only one character (for example, "b").
    The first character has position 0, which causes the last one to be found at position
    string.length - 1.

    In other words, a two-character string has length 2 and its characters have position 
    0 and 1.

    Write a function countBs that takes a string as its only argument and 
    returns a number that indicates how many uppercase "B" characters there 
    are in the string.

    Next, write a function called countChar that behaves like countBs, except
    it takes two arguments that indicates the character that is to be counted
    (rather than counting only uppercase "B" characters)

    Rewrite countBs to make use of this new function.
 */
console.log("3.) Bean counting")

function countBs(word){
    //use countChar function to count Bs
    return countChar(word, "B")
}
countBs("BBBBnbb");

function countChar(word, char){
    let numOfChars = [];
    for(let i = 0; i < word.length; i++){
        if(word.charAt(i)==char){
            numOfChars += 1;
        }
    }
    console.log("Number of given character: ",numOfChars.length);
}
countChar("banana", "a")