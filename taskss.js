function deleteFirstElement(arr) {
    // Use the shift() method to remove the first element of the array
    arr.shift();
    return arr;
  }
  
  const array = [1, 2, 3, 4, 5];
  const newArray = deleteFirstElement(array);
  console.log(newArray); // Output: [2, 3, 4, 5]
  