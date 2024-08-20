## Bubble Sort Algorithm Explained

Bubble Sort is a simple sorting algorithm used to sort a list of elements (like numbers) in ascending order. The algorithm repeatedly goes through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is completely sorted. Bubble Sort is named for the way smaller elements "bubble" to the top of the list (or larger elements sink to the bottom) with each pass through the list.

Here's a step-by-step breakdown of how the Bubble Sort algorithm works:

1. **Initialize the process**: Start with an array of unsorted elements. 
2. **Outer Loop**: Iterate over the array `n` times, where `n` is the length of the array. 
3. **Inner Loop**: For each element in the array, compare it with the next element. 
4. **Compare and Swap**: If the current element is greater than the next element, swap them. 
5. **Repeat**: Continue the process for the next elements until the end of the array is reached. With each iteration of the outer loop, the largest unsorted element is placed in its correct position. 
6. **End of Process**: When the array is completely sorted, the process stops.

### Bubble Sort Implementation in JavaScript
```javascript
function bubbleSort(arr) {
  // Get the length of the array
  let n = arr.length;

  // Outer loop: iterate over the entire array
  for (let i = 0; i < n; i++) {
    // Inner loop: iterate up to the last unsorted element
    for (let j = 0; j < n - i - 1; j++) {
      // Compare the current element with the next element
      if (arr[j] > arr[j + 1]) {
        // If the current element is greater than the next element, swap them
        // Use a temporary variable temp to store the value of the current element
        const temp = arr[j];
        // Set the value of the next element to the position of the current element
        arr[j] = arr[j + 1];
        // Set the value from temp (the original value of the current element) to the position of the next element
        arr[j + 1] = temp;

      }
    }
    // After each iteration of the outer loop, the largest element is placed in its correct position
    // This reduces the number of elements to be compared in the next iteration
  }
  // Return the sorted array
  return arr;
}

// Example usage of the bubbleSort function
let arr = [ 64, 34, 25, 12, 22, 11, 90 ]; // Create an unsorted array
let sortedArr = bubbleSort(arr); // Use the function to sort the array
console.log("Sorted array:", sortedArr); // Print the sorted array

```

### Detailed Explanation

- **Initialization**: The function `bubbleSort` takes an array `arr` as input and determines its length `n`. 
- **Outer Loop (i)**: Runs `n` times, ensuring every element has been checked and placed in its correct position. 
- **Inner Loop (j)**: Runs from the start of the array up to the last unsorted element (which reduces with each iteration of the outer loop). 
  - **Comparison**: For each pair of adjacent elements, check if the current element (`arr[j]`) is greater than the next element (`arr[j + 1]`).
  - **Swap**: If the current element is greater, swap the two elements using array destructuring assignment.
- **Return**: After all iterations, the array is sorted, and the function returns the sorted array.

### Usage

Bubble Sort is often used in educational settings to teach the concept of sorting algorithms due to its simplicity. However, it is not the most efficient algorithm for large datasets. Here are some real-world situations where Bubble Sort might be used:

1. **Educational Purposes**: Teaching the basics of sorting algorithms and algorithmic thinking. 
2. **Small Data Sets**: Sorting small arrays or lists where the simplicity of implementation is more important than efficiency. 
3. **Initial Pass in More Complex Algorithms**: As a preliminary step in more complex sorting or data manipulation algorithms where small segments of data need to be sorted.

### Conclusion
Bubble Sort is a straightforward and intuitive algorithm, ideal for understanding the basic principles of sorting. While it may not be suitable for large datasets due to its inefficiency, it provides a solid foundation for learning more advanced sorting techniques.