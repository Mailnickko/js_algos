// BubbleSort

const bubbleSort = (arr) => {
  let sorted = true;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      sorted = false;
    }
  }
  return sorted ? arr : bubbleSort(arr);
}

// selectionSort

const selectionSort = (arr) => {
  let min;
  let temp;
  for (let i = 0; i < arr.length-1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// insertionSort

const insertionSort = (arr) => {
  let min;
  for (var i = 1; i < arr.length; i++) {
    min = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > min; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j+1] = min;
  }
  return arr;
}

// radixSort

const getLongestLength = (arr) => {
  let currLength;
  return arr.reduce((accum, curr) => {
    currLength = curr.toString().length;
    accum = currLength > accum ? currLength : accum;
    return accum;
  }, 0);
}

const radixSort = (arr) => {
  let longest = getLongestLength(arr);
  let multiplier = 1;
  let buckets = [[],[], [], [], [], [], [], [], [], []];
  let currPlace;

  while (longest) {
    for (let i = 0; i < arr.length; i++) {
      currPlace = Math.floor((arr[i] / multiplier) % 10);
      buckets[currPlace].push(arr[i]);
    }
    arr.length = 0;
    multiplier *= 10;
    buckets.forEach(bucket => {
      arr = arr.concat(bucket);
    });
    buckets = [[],[], [], [], [], [], [], [], [], []];
    longest--;
  }

  return arr;
}

// Merge Sort

const merge = (left, right) => {
  const result = [];
  let leftInd = 0;
  let rightInd = 0;

  while (leftInd + rightInd < left.length + right.length) {
    if (left[leftInd] > right[rightInd] || left[leftInd] === undefined) {
      result.push(right[rightInd]);
      rightInd++;
    } else {
      result.push(left[leftInd]);
      leftInd++;
    }
  }
  return result;
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}


// quickSort

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let partInd = start;

  for (let i = start; i < end; i ++) {
    if (arr[i] <= pivot) {
      swap(arr, i, partInd);
      partInd++;
    }
  }
  swap(arr, partInd, end);
  return partInd;
}

const quickSort = (arr, start=0, end=arr.length-1) => {
  let partInd;

  if (start < end) {
    partInd = partition(arr, start, end);
    quickSort(arr, start, partInd - 1);
    quickSort(arr, partInd + 1, end);
  }
  return arr;
}


module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  radixSort,
  mergeSort,
  quickSort
};
