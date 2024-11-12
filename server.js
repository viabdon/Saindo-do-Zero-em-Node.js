import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

// MÉTODOS HTTP BÁSICOS
// GET -> Busca uma informação
// POST -> Cria um registro
// PUT -> Edição/Alteração de tudo
// DELETE -> Deleta
// PATCH -> Edita parcialmente

const server = fastify();

const database = new DatabaseMemory();

// Request Body

server.post('/videos', (request, reply) => {
	const { title, description, duration } = request.body;

	database.create({
		title: title,
		description: description,
		duration: duration,
	});

	return reply.status(201).send();
	// Retorna um sucesso de que  algo foi CRIADO
});

server.get('/videos', (request) => {
	const search = request.query.search
	
	const videos = database.list(search);

	return videos;
});



// Route Parameter
// /videos/:id -> torna necessário um id para acessar o método
server.put('/videos/:id', (request, reply) => {
	const { title, description, duration } = request.body;
	const videoId = request.params.id;

	database.update(videoId, {
		title: title,
		description: description,
		duration: duration,
	});

	return reply.status(204).send();
});

server.delete('/videos/:id', (request, reply) => {
	const videoId = request.params.id;
	database.delete(videoId);

	return reply.status(204).send();
});

server.listen({
	port: 3333,
});
