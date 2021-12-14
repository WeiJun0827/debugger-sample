function combineAddress(suite, street, city) {
  const fullAddress = suite + ', ' + street + ', ' + city;
  return fullAddress;
}

module.exports = {
  combineAddress
}