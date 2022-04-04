function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (val === arr[mid]) {
            return mid
        } else if (arr[mid] > val) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return -1
  }

  console.log(binarySearch([1,2,3,4,5], 2)); // 1
  console.log(binarySearch([1,2,3,4,5], 3)); // 2