const axios = require('axios');

const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    checkValue: (a) => a,
    sayName: () => 'Chinedu Dara',
    fetchName: () => 
        axios.get('https://jsonplaceholder.typicode.com/users/2')
        .then(res => res.data)
        .catch(err => 'Error')
};

// axios.get('https://jsonplaceholder.typicode.com/users/2')
// .then(res => console.log(res.data))
// .catch(err => console.log('Error'));

module.exports = functions;