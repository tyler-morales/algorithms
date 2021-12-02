/**
NOTE: Transform the name of the algorithm to snakecase wiwth leading 0s

Example: 

Input: --- Day 1: Sonar Sweep ---
Output: 001-sonar-sweep

*/

export const format = (str) => {
  str = str.replaceAll('-', '').split('Day ')[1]
  let [number, title] = [str.split(':')[0], str.split(':')[1]]
  number = number.padStart(2, '0')
  title = title.toLowerCase().replaceAll(' ', '-').slice(0, -1)
  return number + title
}
