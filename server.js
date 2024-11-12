import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

// MÉTODOS HTTP
// GET -> Busca uma informação
// POST -> Cria um registro
// PUT -> Edição/Alteração de tudo
// DELETE -> Deleta
// PATCH -> Edita parcialmente

// Route Parameter
// /videos/:id -> torna necessário um id para acessar o método

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
	database.create({
		title: 'Video 01',
		description: 'Esse é o vídeo 01', 
		duration: 180,
	});

	console.log(database.list());

    return reply.status(201).send();
    // Retorna um sucesso de que  algo foi CRIADO
});

server.get('/videos', () => {
	return 'Olá!';
});

server.put('/videos/:id', () => {
	return 'Hello Node.js!';
});

server.delete('/videos/:id', () => {
	return 'Hello Node.js!';
}); 

server.listen({
	port: 3333,
});
