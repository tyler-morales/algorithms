/**
NOTE: 009-Palindrome-Number
LINK: https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example: 
Input: x = 121
Output: true

Input: x = -121
Output: false

Input: x = 10
Output: false

*/

/*
@param {number} x
@return {boolean}
*/

var isPalindrome = function (x) {
  if (x < 0) return false

  let intArr = Array.from(String(x))

  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] == intArr.at(-1 - i)) {
      continue
    } else return false
  }

  return true
}

console.log(isPalindrome(11311))
console.log(isPalindrome(10))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(121))

/*
Thoughts:
- Compate the first and last digits
  if the number is less than 0, it's negative and therefore can't be a palindrome
  transform the number into an array to iterate over
    while the first and last items equal other, the number is a palindrome
      as soon as the first and last items are not equal, there is no more palindrome



if (intArr[i] == intArr[intArr.length - i - 1]) {

*/
