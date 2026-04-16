import http from 'http';

const categorias = [
  { id: 1, nome: 'Tecnologia' },
  { id: 2, nome: 'Saúde' },
  { id: 3, nome: 'Educação' },
  { id: 4, nome: 'Esportes' },
  { id: 5, nome: 'Entretenimento' }
];

const server = http.createServer((req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  const url = req.url.split('?')[0];

  if (req.method === 'GET' && url === '/categorias') {

    // Get the query string (e.g., "?id=123&user=jsmith")
    const meuId = req.url.split('?')[1] || '';
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(categorias.
        filter(categoria => String(categoria.id) === meuId.split("=")[1])));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});