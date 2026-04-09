import comentarios from './comentarios.json' with { type: 'json' };

console.log(comentarios);

comentarios.items.forEach(element => {
    console.log("Nome: " + element.nome);
    console.log("Quantidade: " + element.qtde);
    console.log("Valor: " + element.valor);
});