import mysql from 'mysql2';
import express from 'express';
import yup from 'yup'

const app = express()
app.use(express.json())
const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "root123",
    database: "coding_dojo"
})

conexao.connect((err) => {
    if(err){
        console.log("Erro ao conectar ao banco de dados");
        return;
    }
    console.log("Conectou bacana")
})

app.get("/", (req, res) => {
    conexao.query("Select * From carros", (err, result) => {
        if (err) {
            console.log(`Error, error description: ${err}`)
            res.status(404).send(`Error, error description: ${err}`)
        }
        res.send(result);
    });
});

app.post("/adicionar", (req, res) => {
    const schema = yup.object().shape({
        marca: yup.string("Digite uma marca valida!!").required("É um campo obrigatório"),
        ano: yup.number().integer().min(4, "Tem que ter no mínimo 4 caracteres").required("É um campo obrigatório"),
        modelo: yup.string().strict().required("É um campo obrigatório")
    })

    schema.validate(req.body)
    .then(() => {
        const {marca, ano, modelo} = req.body
        conexao.query('INSERT INTO carros (marca, ano, modelo) VALUES (?, ?, ?)', [marca, ano, modelo], (err, result) =>{
        if (err) {
            console.log('Erro ao inserir os dados.')
            res.status(404).send("Erro ao inserir os dados.", err);
        }
        res.send('Dados do veículo adicionado com sucesso');
    })
    })
    .catch((err) => {
        console.log(err)
        res.status(404).send(err.errors[0]);
    })
    
})

app.post("/venda", (req, res) => {
    const {id_carro, nome} = req.body;
    conexao.query("SELECT * from carros WHERE id = ?", [id_carro], (err, result) => {
        const carro = result[0]

        if (!carro) {
            res.status(404).send("Carro nao existe na base de dados")
        }
        
        if (carro.vendido == 1) {
            res.status(403).send('Carro já foi vendido!')
        }
        const insert_query = "INSERT INTO vendas (nome, id_carro) VALUES (?, ?);"
        const values = [nome, id_carro];
        console.log(values)
        conexao.query(insert_query, values, (err, result) => {
            
            if (err){
                console.log("Erro ao inserir registro de venda no banco");
                res.status(404).send("Erro ao inserir registro de venda no banco")
            }
            conexao.query("UPDATE carros SET vendido = 1 WHERE id = ?", [id_carro], (err, result) => {
                if (err){
                    res.status(404).send("Erro ao alterar o status vendido do carro");
                }
                res.status(201).send("O prisma voou com sucesso! -75k da sua conta haha");
                
            })
        })
    });
});

app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000")
})