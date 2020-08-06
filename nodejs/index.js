const axios = require('axios');

axios({
    method: 'GET',
    url: 'marketstat/json',
    baseURL: 'https://api.evemarketer.com/ec',
    params: {
        typeid: 1405,
        usesystem: 30000142
    }
})
    .then(function (response) {
        console.log(response.data);
    });