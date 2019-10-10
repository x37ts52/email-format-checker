const emailFormatChecker = (options) => {
  if (options.email != '') {
    console.log('true')
  } else {
    console.error('false')
  }
}

module.exports = emailFormatChecker 