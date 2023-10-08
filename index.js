function hasTargetSum(array, target) {
  // Write your algorithm here
  const sumsArray = [];
    // check each element
    for (let a = 0; a < array.length; a++)
    {
      for (let b = a + 1; b < array.length; b++)
      {
        //checks if it sums up to the target
        if (array[a] + array[b]===target)
        return true;
          
        } 
        
      } 
          //sums.push([array[i], array[j]]);
       return false; 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
  The function should return true if any pair of numbers in the array adds up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
