/*
1) Challenging Follow above array of objects. So, you have 3 objects as

array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

*/

const peoples = [{
  name: 'prya',
  age: 20
},
  {
    name: 'rani',
    age: 15
  },
  {
    name: 'payek',
    age: 22
  },
]

const sumOfAge = peoples.reduce((prevPeo, currPeo)=> {
  // console.log(currPeo)
  return prevPeo + currPeo.age
},0)

console.log(sumOfAge)