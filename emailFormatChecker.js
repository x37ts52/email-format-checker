const emailFormatChecker = (options) => {
  if (options.email != '') {
    // console.log('Email is not empty')
    return true
  } else {
    // console.error('Email is empty!')
    return false
  }
}

module.exports = emailFormatChecker 