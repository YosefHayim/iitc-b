let numbers = [1, 2, 3, 4, 5];
function removeLastElement(arr) {
  // Your code here
  console.log(`${arr}`);
  arr.pop()
  console.log(arr);
  return arr
}

let colors = ['red', 'green', 'blue', 'yellow'];
function getElementAtIndex(arr, index) {
  // Your code here
  let string = console.log(arr[index]);
  if (string < colors.length) {
    return string
  } else {console.log(`Invalid input`);}
  
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function concatenateArrays(arr1, arr2) {
  // Your code here
  let array3 = arr1.concat(arr2)
  return array3
}

let items = ['apple', 'banana', 'orange'];

function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log(`${value} is found at index ${i}`);
      return true;
    }
  }
  console.log(`${value} is not found`);
  return false; 
}

numbers = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  // Your code here
  arr.reverse()
  console.log(arr);
  return arr
}

let unsortedNumbers = [5, 300, 8, 10, 2];
let i;
function sortArray(arr) {
  // Your code here
  console.log(arr);

}
sortArray(unsortedNumbers)