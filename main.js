import users  from "/users.js"

// =====1=====

let nameArray = [];
users.forEach(user => {
    nameArray.push(user.name)
})
console.log(nameArray)

// =====2=====

const getUsersWithEyeColor = (users, color) => {
  return users.filter((users) => users.eyeColor === color)
}  
  console.log(getUsersWithEyeColor(users, "blue"))

// =====3=====

const getUsersWithGender = (users, gender) => {
  return users.filter((users) => users.gender === gender).map(name => name.name)
  }
console.log(getUsersWithGender(users, 'male'))

// =====4=====

const getInactiveUsers = users => {
    return users.filter((users) => users.isActive === false).map(name => name.name)
}
console.log(getInactiveUsers(users))

// =====5=====

const getUserWithEmail = (users, email) => {
  return users.filter((users) => users.email === email)
}

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'))


// =====6=====

const getUsersWithAge = (users, min, max) => {
  return users.filter((users) => min < users.age && users.age < max )
}

console.log(getUsersWithAge(users, 20, 30))































