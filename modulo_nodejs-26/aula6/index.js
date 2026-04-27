import express, { json } from 'express';
import mysql from 'mysql2';

const app = express();
app.use(express.json()); // middleware json

app.get('/users', (req, res) => {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'aula6'
    });
    
    connection.connect((err) => {
        if (err) {
            console.error("Erro ao conectar no banco de dados", err);
            return;
        }
        console.log("Conectou bonitão!");
    });

    const sql = 'SELECT name FROM users';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Erro ao realizar consulta no banco de dados", err);
            return;
        }

        console.log("Consulta realizada com sucesso");
        console.log(results);
        res.send(results);
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});