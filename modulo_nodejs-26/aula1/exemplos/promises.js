// Lidando com Promises - then/catch e async/await

// Funcao que retorna uma Promise
function buscarDados(sucesso) {
  return new Promise((resolve, reject) => {
    console.log("Buscando dados...");
    setTimeout(() => {
      if (sucesso) {
        resolve({ id: 1, nome: "Mario", email: "mario@email.com" });
      } else {
        reject(new Error("Falha ao buscar dados do servidor"));
      }
    }, 2000);
  });
}

// --- Exemplo 1: usando .then() e .catch() ---
console.log("=== Exemplo com .then() e .catch() ===\n");

// Caso de sucesso
buscarDados(true)
  .then((dados) => {
    console.log("Sucesso:", dados);
  })
  .catch((erro) => {
    console.log("Erro:", erro.message);
  })
  .then(() => {
    // Caso de erro
    return buscarDados(false)
      .then((dados) => {
        console.log("Sucesso:", dados);
      })
      .catch((erro) => {
        console.log("Erro:", erro.message);
      });
  })
  .then(() => {
    // --- Exemplo 2: reescrevendo com async/await ---
    exemploAsyncAwait();
  });

async function exemploAsyncAwait() {
  console.log("\n=== Exemplo com async/await ===\n");

  // Caso de sucesso
  try {
    const dados = await buscarDados(true);
    console.log("Sucesso:", dados);
  } catch (erro) {
    console.log("Erro:", erro.message);
  }

  // Caso de erro
  try {
    const dados = await buscarDados(false);
    console.log("Sucesso:", dados);
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}
