import express, { json } from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.get('/localzinho', async (req, res) => {

    const response = await axios.post('http://localhost:3000/login', {"user": "Alice", "password": "alice123"});

        if (response.status >= 200 && response.status < 400) {
            console.log(response.data);
        } else {
            console.log(response.statusText);
        }

    res.status(200).send(response.data)
})

app.listen(8000, () => {
    console.log("rodando o segundo servidor como cliente na porta 8000");
})