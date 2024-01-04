// Rewrite the Problem in Your Own Words
  // create a function called hasTargetSum
  // the function should accept two arguments:
  // an array of integers(+numbers), and a target integer(+number)
  // the function should return true if any two numbers in the array add up to the target number
  // inputs: multiple integers(+numbers)
  // outputs: true or false

// Write Your Own Test Cases
  // input ([5, 11, 2, 8, 0](10)) target: 10
  // output true -- because 8 and 2 add up to 10

  // input ([6, 6, 8, 4, 5](12)) target: 12
  // output: true -- because 6 and 6, and 8 and 4 add up to 12
  
  // input: ([8, 1, 6, 10(5)]) target: 5
  // output: false -- because none of the numbers added equal to 5

// Pseudocode
//create an array called hasTargetSum. give it two arguments (array, target)
// function hasTargetSum([array](target))
    // iterate over each "first" number in the array -- num1.
    // iterate over each "second" number in the array -- num2. 
    // Take your target and subtract num2 from it. It should equal your num1 value
    // num1 = target - num2
      // repeat this process through the entire array
      // if num2 minus target equal num1, return true.
      // if i reach the end of the array and I haven't added to my target, return false

// Code

// Make It Clean and Readable

// Optimize
// to make it a little quicker, 
// you could do an object instead of an array so we could access the values in an object

// optimized solution:

// function hasTargetSum([array](target))
// create an object to keep track of numbers we have already seen 
    // iterate over each "first" number in the array -- num1.
    // iterate over each "second" number in the array -- num2. 
    // Take your target and subtract num2 from it. It should equal your num1 value
    // num1 = target - num2
      // check if any key in the object matches num1
      // if num2 minus target equal num1, return true.
      // if i reach the end of the array and I haven't added to my target, return false

// function hasTargetSum(array, target)
function hasTargetSum(array, target) {
  // create an object to keep track of numbers we have already seen 
  const seenNumbers = {};  
  // iterate over each "first" number in the array -- num1.
  for (const num2 of array) {
    // Take your target and subtract num2 from it. It should equal your num1 value
    // num1 = target - num2
    const num1 = target - num2;
    // console.log(target - number[i])
      // check if any key in the object matches num1
      // if num2 minus target equal num1, return true.
      if (seenNumbers[num1]) return true;
      seenNumbers[num2] = true; 
    }
    // otherwise add the number to the object
    return false;
}

// SOLUTION 1 BEFORE OPTIMIZED:
// function hasTargetSum(array, target){
//     // iterate over each "first" number in the array -- num1.
//     for (let i = 0; i < array.length; i++) {
//       // Take your target and subtract num2 from it. It should equal your num1 value
//       // num1 = target - num2
//       const num1 = target - array[i];
//       // iterate over each "second" number in the array -- num2.
//       for (let j = i + 1; j < array.length; j++) {
//         // if num2 minus target equal num1, return true.
//         if (array[j] === num1) { 
//         return true;
//         }
//       }
//     }
//     // if i reach the end of the array and I haven't added to my target, return false
//     return false;
//   }



  // Write your algorithm here

/* 

  Write the Big O time complexity of your function here
// things to consider: as the array gets more numbers,
// it will take more time to run the function
// because we are running a loop within a loop, 
// we are going to end up with a 0(n^2) -- not ideal
// space -- as the array grows, we will need more space 0(n) -- good


// SOLUTION 2 BIG O: 
// runtime: O(n) -- good, previous solution O(n^2)


*/

/* 
  Add your pseudocode here


*/

/*
  Add written explanation of your solution here
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
