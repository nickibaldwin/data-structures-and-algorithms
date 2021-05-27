# Code Challenge Class 28 - Quick Sort Blog Post

### [PR in Github](https://github.com/nickibaldwin/data-structures-and-algorithms/pull/35)

### Quick Sort:

Uses a partition function to split the array elements. Given an array, this function should designate an element as the partition(pivot). This happens in place, meaning does not create a new array.

This should rearrange the array so all values less than the pivot are moved to the left of the pivot and all values greater are moved to the right. Then this should return the index of the pivot. Continue to loop through until the entire array is sorted.

### Pseudocode:

    ALGORITHM QuickSort(arr, left, right)
        if left < right
            // Partition the array by setting the position of the pivot value 
            DEFINE position <-- Partition(arr, left, right)
            // Sort the left
            QuickSort(arr, left, position - 1)
            // Sort the right
            QuickSort(arr, position + 1, right)

    ALGORITHM Partition(arr, left, right)
        // set a pivot value as a point of reference
        DEFINE pivot <-- arr[right]
        // create a variable to track the largest index of numbers lower than the defined pivot
        DEFINE low <-- left - 1
        for i <- left to right do
            if arr[i] <= pivot
                low++
                Swap(arr, i, low)

         // place the value of the pivot location in the middle.
         // all numbers smaller than the pivot are on the left, larger on the right. 
         Swap(arr, right, low + 1)
        // return the pivot index point
         return low + 1

    ALGORITHM Swap(arr, i, low)
        DEFINE temp;
        temp <-- arr[i]
        arr[i] <-- arr[low]
        arr[low] <-- temp


### How To:

1. First start with a partition (aka pivot) function that accepts three arguments - array, start idx (0), and end idx (arr.length-1).

2. Pick the pivot from the start of the array.

3. Store the current pivot index in a variable, this tracks where the pivot will go next.

4. Loop through the array from start to finish - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.

5. Swap the pivot element with the pivot index and return the pivot index.

### Code: 

```javascript
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = arr[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
        swapIdx++;
        swap(arr, swapIdx, i)
      }
    }
    swap(arr, start, swapIdx);
    console.log(arr);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
 if(left < right){
  let pivotIndex = pivot(arr, left, right)
  quickSort(arr, left, pivotIndex-1);
  quickSort(arr, pivotIndex+1, right);
 }
 return arr;
}

quickSort([8, 4, 23, 42, 16, 15]);

```

### Efficency:

- Space: O(log(n))

- Time: O(n log(n))

### Resources:

- [Udemy Master Class - Javascript Algorithms and Data Structures](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

- [VisuAlgo](https://visualgo.net/en/sorting)
