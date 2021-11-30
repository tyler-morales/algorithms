/**
NOTE: 014-Longest-Common-Prefix
LINK: https://leetcode.com/problems/roman-to-integer/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example: 
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

**/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++)
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix.length == 0) return ''
    }

  return prefix
}

// console.log(longestCommonPrefix(['', ''])) // 'fl'
// console.log(longestCommonPrefix(['a'])) // 'fl'
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''

/*
Thoughts
Compare each letter in each array item
*/
