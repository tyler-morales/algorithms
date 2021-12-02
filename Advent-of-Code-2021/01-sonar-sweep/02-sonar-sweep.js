/*
Start by comparing the first and second three-measurement windows. The measurements in the first window are marked A (199, 200, 208); their sum is 199 + 200 + 208 = 607. The second window is marked B (200, 208, 210); its sum is 618. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.
*/

/**
 * @param {string} s
 * @return {number}
 */

const solution = function (s) {
  // Transform string into array
  let depths = s.replaceAll('\n', ',').split(',')

  let numberOfIncrements = 0

  // Group items in 3-pair increases & sum them
  const windows = depths.map((depth, i, arr) => {
    return [depth, arr[i + 1], arr[i + 2]].reduce((a, b) => +a + +b)
  })

  // Loop over the array and count the number of times the second number is greater than the previous
  for (let i = 0; i < windows.length; i++) {
    if (windows[i + 1] > windows[i]) {
      numberOfIncrements++
    }
  }

  return numberOfIncrements
}

//  !NOTE 1218 (Too High)
console.log(
  solution(``)
)
