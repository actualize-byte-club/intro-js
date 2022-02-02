// // # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// // def print_numbers_divisible_by_three
// //   index = 1
// //   while index <= 1000
// //     if index % 3 == 0
// //       puts index
// //     end
// //     index += 1
// //   end
// // end
// // print_numbers_divisible_by_three
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// // # Write a method that accepts an array of strings and prints out every other string.
// // def print_every_other_item(strings)
// //   index = 0
// //   strings.each do |string|
// //     if index % 2 == 0
// //       puts string
// //     end
// //     index += 1
// //   end
// // end
// // print_every_other_item(["a", "b", "c", "d", "e"])
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// // # Write a method that accepts an array of numbers and returns the sum.
// // def compute_sum(numbers)
// //   sum = 0
// //   numbers.each({ |number| sum += number })
// //   return sum
// // end
// // puts compute_sum([2, 4, 5])
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // # Start with the hash: city_populations = {chi: 2700000}
// // # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// // city_populations = {chi: 2700000}
// // city_populations[:nyc] = 8400000
// // city_populations[:sf] = 800000
// // p city_populations
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// # Write a method that prints out every number from 1 to 100.

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// 1) Write a function that takes in an array of numbers and returns its sum.

function sumNums(numbers) {
  var sum = 0;
  var index = 0;
  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }
  return sum;
}

console.log(sumNums([2, 4, 6, 10, 2]));

// 2) Write a function that takes in an array of strings and returns the smallest string.

function smallestString(strings) {
  var smallestWord = strings[0];
  strings.forEach((string) => {
    if (smallestWord.length > string.length) {
      smallestWord = string;
    }
  });
  return smallestWord;
}

console.log(smallestString(["apple", "orange", "grapes", "fig"]));

// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reversedNumbers(numbers) {
  var reversedArray = [];
  var index = numbers.length - 1;
  while (index >= 0) {
    reversedArray.push(numbers[index]);
    index--;
  }
  return reversedArray;
}

console.log(reversedNumbers([2, 4, 6, 10, 2]));

// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

function aWords(words) {
  var count = 0;
  words.forEach((word) => {
    if (word.startsWith("a")) {
      count++;
    }
  });
  return count;
}

console.log(aWords(["apple", "orange", "grapes", "fig"]));

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function frankenstring(strings) {
  return strings.join();
}

console.log(frankenstring(["apple", "orange", "grapes", "fig"]));

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

function product(numbers) {
  var result = 1;
  numbers.forEach((num) => {
    result *= num;
  });
  return result;
}

console.log(product([2, 4, 1, 2, 6]));

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

function twoSmallestNumbers(numbers) {
  var smallestIndex = 0;
  var smallestNumber = numbers[0];
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] < smallestNumber) {
      smallestNumber = numbers[index];
      smallestIndex = index;
    }
    index++;
  }
  index = 0;
  var secondSmallestNumber = numbers[smallestIndex - 1];
  if (smallestIndex === 0) {
    secondSmallestNumber = numbers[1];
  }
  while (index < numbers.length) {
    if (numbers[index] < secondSmallestNumber && index !== smallestIndex) {
      secondSmallestNumber = numbers[index];
    }
    index++;
  }
  return [smallestNumber, secondSmallestNumber];
}

console.log(twoSmallestNumbers([1, 4, 3, 8, 6]));

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
