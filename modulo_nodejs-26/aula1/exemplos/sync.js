// Exemplo SINCRONO - cada operacao bloqueia a proxima
// As tarefas executam uma apos a outra, em ordem

function buscarUsuario(id) {
  console.log(`Buscando usuario ${id}...`);
  const inicio = Date.now();
  while (Date.now() - inicio < 2000) {} // simula 2s de espera bloqueante
  return { id, nome: "Maria" };
}

function buscarPedidos(usuarioId) {
  console.log(`Buscando pedidos do usuario ${usuarioId}...`);
  const inicio = Date.now();
  while (Date.now() - inicio < 1500) {} // simula 1.5s de espera bloqueante
  return [{ pedido: 1, valor: 50 }, { pedido: 2, valor: 30 }];
}

function buscarProduto(pedidoId) {
  console.log(`Buscando produto do pedido ${pedidoId}...`);
  const inicio = Date.now();
  while (Date.now() - inicio < 1000) {} // simula 1s de espera bloqueante
  return { nome: "Camiseta", preco: 50 };
}

console.log("=== INICIO (sincrono) ===\n");
const startTime = Date.now();

const usuario = buscarUsuario(1);
console.log("Usuario:", usuario);

const pedidos = buscarPedidos(usuario.id);
console.log("Pedidos:", pedidos);

const produto = buscarProduto(pedidos[0].pedido);
console.log("Produto:", produto);

const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`\n=== FIM (sincrono) - Tempo total: ${totalTime}s ===`);
// Resultado: ~4.5s (2 + 1.5 + 1) - tudo em sequencia, bloqueando
