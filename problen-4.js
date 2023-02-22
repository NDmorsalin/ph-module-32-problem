/*Practice Problem: Access Object values*/

//Console the value of age
const student = {
  name: 'jluas',
  age: 44
}
console.log(student.age)


const data = {
  location: [{
    altitude: '25116',
    longitude: '8916',
    city: 'hydrabad',
    county: 'India',
  }]
}

console.log(data.location[0].city)


const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
/*
Challenging

● Console the value of email
*/
const email = user['email']
console.log(email)
/*
● Console the value of address*/
const address = user['address']
console.log(address)

/*
● Console the value of city*/
const city = user['address']['city']
console.log(city)
/*
● Console the value of lat*/



/*
● Console the value of company
name*/