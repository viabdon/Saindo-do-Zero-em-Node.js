import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

// MÉTODOS HTTP
// GET -> Busca uma informação
// POST -> Cria um registro
// PUT -> Edição/Alteração de tudo
// DELETE -> Deleta
// PATCH -> Edita parcialmente

// Route Parameter
// /videos/:id -> torna necessário um id para acessar o método

server.post('/videos', () => {
    return 'Hello World!'
})

server.get('/videos', () => {
    return 'Olá!'
})

server.put('/videos/:id', () => {
    return 'Hello Node.js!'
})

server.delete('/videos/:id', () => {
    return 'Hello Node.js!'
})

server.listen({
	port: 3333,
});
