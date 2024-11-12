import { randomUUID } from 'node:crypto';
//import para gerar IDs aleatórios e criptografados

export class DatabaseMemory {
	//#videos = [];

	#videos = new Map();

	// Set -> Não aceita valores duplicados
	// Map -> Funciona como um objeto


    list() {
        this.#videos.values();
    }

	create(video) {
		// UUID = Universal Unique ID -> Garante que os IDs serão únicos
		const videoId = randomUUID();

		this.#videos.set(videoId, video);
	}

	update(id, video) {
		this.#videos.set(id, video);
	}

	delete(id) {
		this.#videos.delete(id);
	}
}
