/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    let element = str1[i];

    if (element !== undefined) {
      element = element.toLowerCase();
    }

    if (obj1[element]) {
      obj1[element] += 1;
    } else {
      obj1[element] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let element = str2[i];

    if (element !== undefined) {
      element = element.toLowerCase();
    }

    if (obj2[element]) {
      obj2[element] += 1;
    } else {
      obj2[element] = 1;
    }
  }

  console.log(obj1);
  console.log(obj2);

  let n = 0;
  if (str1.length > str2.length) {
    n = str1.length;
  } else {
    n = str2.length;
  }

  for (let i = 0; i < n; i++) {
    let element = str1[i];
    if (element !== undefined) {
      element = element.toLowerCase();
    }
    if (obj2[element]) {
      if (obj1[element] != obj2[element]) {
        console.log("element: ", element);
        return false;
      }
    } else {
      console.log("element: ", element);
      return false;
    }
  }
  return true;
}



module.exports = isAnagram;