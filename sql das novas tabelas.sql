USE testeastrus;

CREATE TABLE categorias (
	id BIGINT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	descricao TEXT,
	CONSTRAINT PK_CATEGORIA_ID PRIMARY KEY(id)
);

CREATE TABLE filmes (
	id BIGINT NOT NULL AUTO_INCREMENT,
	titulo VARCHAR(255) NOT NULL,
	sinopse TEXT,
	ano INT NOT NULL,
	duracao BIGINT NOT NULL,
	idioma VARCHAR(100) NOT NULL,
	id_categoria BIGINT,
	CONSTRAINT PK_FILME_ID PRIMARY KEY(id),
	CONSTRAINT FK_FILME_CATEGORIA FOREIGN KEY(id_categoria) REFERENCES categorias(id) ON DELETE SET NULL
);

ALTER TABLE categorias
ADD
`created_at` timestamp NULL DEFAULT NULL,
ADD `updated_at` timestamp NULL DEFAULT NULL;

ALTER TABLE filmes
ADD
`created_at` timestamp NULL DEFAULT NULL,
ADD `updated_at` timestamp NULL DEFAULT NULL;

CREATE VIEW lista_filmes AS
SELECT filmes.id, filmes.titulo, filmes.sinopse, filmes.ano, filmes.duracao, filmes.idioma, categorias.nome FROM filmes
INNER JOIN categorias
ON filmes.id_categoria = categorias.id;

