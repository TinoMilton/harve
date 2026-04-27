import axios from 'axios';

const response = await axios.post('http://localhost:3000/login', 
    {"user": "Alice", "password": "alice123"});

if (response.status >= 200 && response.status < 400) {
    console.log(response.data);
} else {
    console.log(response.statusText);
}
