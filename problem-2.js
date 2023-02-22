/*

1) You have an array [1, 9, 17, 22]. Add the all elements

of this array and give output. Do this using for loop &

array.reduce() method.
*/
const arr = [1, 9, 17, 22]
let sumByfor = 0
for (let num of arr) {
  sumByfor += num
}


//console.log(sumByfor)

const sum = arr.reduce((prevNum, currNum)=> prevNum+currNum)
console.log(sum)