# email-format-checker

## What is this?

The emailFormatChecker will check email addresses for these to have a valid format

## Install

```
npm i email-format-checker
```

## How to use it?

```
const emailFormatChecker = require('email-format-checker')

// use the object to interact with the module
const options = {
  email: 'maxmustermann@beispiel.de',
  emailRepeat: 'maxmustermann@beispiel.de'
}

// fire the object with the function
const validEmailAddress = emailFormatChecker(options)

// console output for testing: boolean
console.log(validEmailAddress)
```

## Options (input / output)

**Input**

| Parameter   | Type   | Description                                             |
| ----------- | ------ | ------------------------------------------------------- |
| email       | string | The email address wich will be checked                  |
| emailRepeat | string | The repeating email address to check for spell mistakes |

**Output**

| Type    | Description            |
| ------- | ---------------------- |
| boolean | Return a true or false |

## What will be checked?

1. Email address can not be empty
2. It compares whether email and email are alike
3. Email adress will be checked if there is an at-sign and a dot
