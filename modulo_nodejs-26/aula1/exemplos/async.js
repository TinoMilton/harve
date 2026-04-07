// Exemplo ASSINCRONO com Promises - operacoes nao bloqueiam
// As tarefas podem executar em paralelo quando independentes

function buscarUsuario(id) {
  console.log(`Buscando usuario ${id}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Maria" });
    }, 2000); // simula 2s sem bloquear
  });
}

function buscarPedidos(usuarioId) {
  console.log(`Buscando pedidos do usuario ${usuarioId}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ pedido: 1, valor: 50 }, { pedido: 2, valor: 30 }]);
    }, 1500); // simula 1.5s sem bloquear
  });
}

function buscarProduto(pedidoId) {
  console.log(`Buscando produto do pedido ${pedidoId}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: "Camiseta", preco: 50 });
    }, 1000); // simula 1s sem bloquear
  });
}

// --- Exemplo 1: encadeando com .then() ---
console.log("=== INICIO (async com .then) ===\n");
const startTime = Date.now();

buscarUsuario(1)
  .then((usuario) => {
    console.log("Usuario:", usuario);
    return buscarPedidos(usuario.id);
  })
  .then((pedidos) => {
    console.log("Pedidos:", pedidos);
    return buscarProduto(pedidos[0].pedido);
  })
  .then((produto) => {
    console.log("Produto:", produto);
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n=== FIM (.then) - Tempo total: ${totalTime}s ===`);

    // --- Exemplo 2: async/await (mais legivel) ---
    exemploAsyncAwait();
  });

async function exemploAsyncAwait() {
  console.log("\n=== INICIO (async/await) ===\n");
  const start = Date.now();

  const usuario = await buscarUsuario(1);
  console.log("Usuario:", usuario);

  // Pedidos e produto podem rodar em paralelo com Promise.all!
  const [pedidos, produto] = await Promise.all([
    buscarPedidos(usuario.id),
    buscarProduto(1),
  ]);
  console.log("Pedidos:", pedidos);
  console.log("Produto:", produto);

  const totalTime = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n=== FIM (async/await) - Tempo total: ${totalTime}s ===`);
  // Resultado: ~3.5s (2 + max(1.5, 1)) - pedidos e produto em paralelo!
}
