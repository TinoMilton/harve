import express, { json } from 'express';
import mysql from 'mysql2';
import yup from 'yup';

const app = express();
app.use(express.json()); // middleware json

app.post('/insert', (req, res) => {
 
    const schema = yup.object().shape({
        user: yup.string().required("O campo user é obrigatório").min(5, "O nome de usuário deve ter pelo menos 5 caracteres"),
        password: yup.string().required("O campo password é obrigatório").min(6, "A senha deve ter pelo menos 6 caracteres")
    });

    schema.validate(req.body)
    .then(() => {

        const username = req.body.user;
        const password = req.body.password;

        const connection = createConnection();
        connectOnDB(connection);
        
        const sqlInsert = "INSERT INTO users (name, password) VALUES (?, ?);"
        const values = [username, password];

        connection.query(sqlInsert, values, (err, result) => {

            if(err) {
                console.error("Erro ao inserir registro", err);
                res.status(400).send("Erro ao inserir o registro no banco");
                return;
            }

            console.log("Inseriu bonitão");
            console.log(result);
            res.send("Inseriu com sucesso!");
        });
    })
    .catch((err) => {
        console.error("Erro de validação", err);
        res.status(404).send(err.errors[0]);
    });
});

app.post('/login', (req, res) => {

    if (req.body == undefined || (req.body.user === undefined || 
        req.body.password === undefined)) {
        res.status(404).send('Erro ao realizar login');
        return; 
    }

    const username = req.body.user;
    const password = req.body.password;

    const connection = createConnection();
    connectOnDB(connection);

    const sql = 'SELECT name, password FROM users where name = ? and password = ?';
    const values = [username, password];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error("Erro ao realizar consulta no banco de dados", err);
            return;
        }

        console.log(results);
        res.status(200).send(JSON.stringify(results));
    });
    
});

function connectOnDB(connection) {
    connection.connect((err) => {
        if (err) {
            console.error("Erro ao conectar no banco de dados", err);
            return;
        }
        console.log("Conectou bonitão!");
    });
}

function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'aula5harve'
    });
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});