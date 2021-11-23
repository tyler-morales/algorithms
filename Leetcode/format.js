/**
NOTE: Transform the name of the algorithm to snakecase wiwth leading 0s

Example: 

Input: 1. Two Sum
Output: 001-two-sum

*/

export const format = (str) => {

    // destructure the number and title items
    let [number, title] = [str.split('.')[0], str.split('.')[1]]

    // format the number with a padding of 0's if necessary
    number = number.padStart(3,'0')

    // format the title into snake casing
    title = title.replaceAll(' ', '-').split('.').join('')

    return number + title
}