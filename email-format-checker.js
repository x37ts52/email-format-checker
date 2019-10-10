const emailFormatChecker = options => {
  const emailCheck = {
    atSign: false,
    dotSign: false
  }

  // check: email and emailRepeat must not be empty
  if (options.email != '' && options.emailRepeat != '') {
    // check: email and emailRepeat must be equal
    if (options.email === options.emailRepeat) {
      // loop: check if at-sign and dot-sign are present
      for (let i = 0; i < options.email.length; i++) {
        // check: is at-sign present?
        if (options.email.charAt(i) === String.fromCharCode(64)) {
          emailCheck.atSign = true
          // check: is dot-sign present?
        } else if (options.email.charAt(i) === String.fromCharCode(46)) {
          emailCheck.dotSign = true
        }
      }

      if (emailCheck.atSign && emailCheck.dotSign) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

module.exports = emailFormatChecker
