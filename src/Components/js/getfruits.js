// import axios from "axios";
const axios = require('axios');

function getfruits() {
    axios.post('${process.env.REACT_APP_BASE_URL}/getfruits')
      .then(res => {
        console.log(res.data);
        return res.data
      }).catch(err => console.log(err));
}

console.log(getfruits());