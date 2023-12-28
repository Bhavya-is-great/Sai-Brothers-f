// import axios from "axios";
const axios = require('axios');

function getfruits() {
    axios.post('https://sai-brothersbackend.onrender.com/getfruits')
      .then(res => {
        console.log(res.data);
        return res.data
      }).catch(err => console.log(err));
}

console.log(getfruits());