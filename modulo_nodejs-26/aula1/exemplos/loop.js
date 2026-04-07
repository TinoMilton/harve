// Laco infinito com callback a cada 5 segundos
// Demonstra como o event loop gerencia timers e execucao continua

function AbreConecaoComBanco(callback) {
  // chama o driver do mysql
  // connecta com o mysql
  // faz a busca na tabela usuarios


  callback(outrafuncao)
  // setInterval(callback, 5000);
}

function imprime() {
  console.log("callback");
}

// Inicia o timer com callback a cada 5s
timer(imprime);
