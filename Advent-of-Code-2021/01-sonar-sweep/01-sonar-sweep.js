/*
The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.)
*/

/**
 * @param {string} s
 * @return {number}
 */

const solution = function (s) {
  // Transform string into array
  let depths = s.replaceAll('\n', ',').split(',')

  let numberOfIncrements = 0
  // Loop over the array and count the number of times the second number is greater than the previous
  for (let i = 0; i < depths.length; i++) {
    if (depths[i + 1] > depths[i]) {
      numberOfIncrements++
    }
  }
  return numberOfIncrements
}
console.log(
  solution(`$199
200
208
210
200
207
240
269
260
263`)
)
