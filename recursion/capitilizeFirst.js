function capitalizeFirst(arr) {
    let result = [];
  
    function capitalizeWords(arr) {
      // base case
      if (!arr.length) return;
  
      result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
      return capitalizeWords(arr.slice(1));
    }
  
    capitalizeWords(arr);
  
    return result;
  }
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

