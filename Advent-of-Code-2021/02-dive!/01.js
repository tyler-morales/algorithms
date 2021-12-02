/*
forward X increases the horizontal position by X units.
down X increases the depth by X units.
up X decreases the depth by X units.

After following these instructions, you would have a horizontal position of 15 and a depth of 10. 
*/

const solution = function (s) {
  let arr = s.split('\n')
  const directions = arr.map((item) => {
    let direction = item.split(' ')[0]
    let measurement = item.split(' ')[1]
    return [direction, measurement]
  })

  let position = {
    horizontal: 0,
    depth: 0,
  }

  directions.map((item) => {
    switch (item[0]) {
      case 'forward':
        position.horizontal += +item[1]
        break
      case 'down':
        position.depth += +item[1]
        break
      case 'up':
        position.depth -= +item[1]
        break

      default:
        console.log('Current mesurement is unmeasurable')
        break
    }
  })

  const result = position.horizontal * position.depth

  return result
}

console.log(
  solution(
`
forward 5
down 5
forward 8
up 3
down 8
forward 2
`
  )
)
