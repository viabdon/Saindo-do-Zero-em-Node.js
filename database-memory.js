import { randomUUID } from 'node:crypto';
//import para gerar IDs aleatórios e criptografados

export class DatabaseMemory {
	//#videos = [];

	#videos = new Map();

	// Set -> Não aceita valores duplicados
	// Map -> Funciona como um objeto

	list(search) {
		return Array.from(this.#videos.entries())
			.map((videoArr) => {
				const id = videoArr[0];
				const data = videoArr[1];

				return {
					id,
					...data,
				};
			})
			.filter((video) => {
				if (search) {
					return video.title.includes(search);
				}

				return true;
			});
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
