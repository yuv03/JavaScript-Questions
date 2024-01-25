/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if(numbers.length===0) return undefined;

    let biggestElement = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element> biggestElement) biggestElement = element;
    }
    return biggestElement;
    
}

module.exports = findLargestElement;