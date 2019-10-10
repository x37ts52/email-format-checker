const emailFormatChecker = require('./email-format-checker')

// use the object to interact with the module
const options = {
  email: 'maxmustermann@beispiel.de',
  emailRepeat: 'maxmustermann@beispiel.de'
}

// fire the object to the function
const validEmailAddress = emailFormatChecker(options)

// console output for testing: boolean
console.log(validEmailAddress)