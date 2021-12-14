const axios = require('axios');

const { combineAddress } = require('./util')

// something wrong in this function
function handleUserData(data) {
  const addressMap = new Map();
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const fullName = user.names;
    const address = user.address;
    const { street, suit, city } = address;
    const fullAddress = combineAddress(street, suit, city);
    addressMap.set(fullName, fullAddress);
  }
  return addressMap;
}

async function getDataFromUrl() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = res.data;
  console.log(data);
}

getDataFromUrl();

// find Leanne Graham's address