# What is this?
It checks if the email address has a valid format

# Installation
`npm i emailFormatChecker`

# How to use it?

```
const emailFormatChecker = require('emailFormatChecker')

const options = {
  email: 'maxmustermann@beispiel.de',
  emailRepeat: 'maxmustermann@beispiel.de'
}

const validEmailAdress = emailFormatchecker(options)
```

## Options

| Parameter   | Type   | Description                                             |
| ------------| -------| --------------------------------------------------------|
| email       | string | The email address wich will be checked                  |
| emailRepeat | string | The repeating email address to check for spell mistakes |

# What checks the emailFormatChecker?

1. If email address is not empty