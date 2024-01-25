/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i=0;
  let j = str.length-1;

  if(str.length===0) return true;

  while(i<=j){
    if(str[i]!==str[j]){
      if((str[i]>='a' && str[i]<='z') && (str[j]>='a' && str[j]<='z')) return false;
      else if(str[i]>='a' && str[i]<='z'){
        j--;
      }
      else if(str[j]>='a' && str[j]<='z'){
        i++;
      }
      else{
        i++;
        j--;
      }
    }
    else{
      i++;
      j--;
    }
    
  }
  return true;
}

module.exports = isPalindrome;
