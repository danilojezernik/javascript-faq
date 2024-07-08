/**
 * 1. Write a function that reverses a string.
 * */

const string = 'Dani'

reverseString = (string) => {
    // Split string into an array, reverse the array, and join the array back into a string
    return string.split('').reverse().join('')
}

console.log(reverseString(string))

