/**
NOTE: 013-Roman-to-Integer
LINK: https://leetcode.com/problems/roman-to-integer/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example: 
Input: s = "III"
Output: 3

Input: s = "IV"
Output: 4

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

**/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const DICT = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let reversedArr = s.split('').reverse()

  return reversedArr.reduce((sum, cur, i, arr) => {
    // check if preceeding numeral subtracts
    if (
      cur + arr[i - 1] === 'IV' ||
      cur + arr[i - 1] === 'IX' ||
      cur + arr[i - 1] === 'XL' ||
      cur + arr[i - 1] === 'XC' ||
      cur + arr[i - 1] === 'CD' ||
      (cur + arr[i - 1] === 'CM' && i != 0)
    ) {
      sum -= DICT[cur]
    } else {
      // Set sum as the first
      sum += DICT[cur]
    }
    return sum
  }, 0)
}

// Tests
console.log(romanToInt('MCMXCIV')) //1994
console.log(romanToInt('III'))
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('IV')) // 4
console.log(romanToInt('MMXXI')) // 4
