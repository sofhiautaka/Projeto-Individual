CREATE DATABASE uniqueStyle;
USE uniqueStyle;

CREATE TABLE Usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

SELECT * FROM Usuario;

CREATE TABLE Post (
	idPost INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE Curtida (
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(id),
    fkPost INT,
    FOREIGN KEY (fkPost) REFERENCES Post(idPost),
    PRIMARY KEY (fkUsuario, fkPost)
);

CREATE TABLE Simulador (
	idSimulador INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(60),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (id)
);

SELECT texto, id, nome FROM Simulador JOIN Usuario ON fkUsuario = id;
SELECT LENGTH(texto) 'Caracteres do texto', texto, id, nome FROM Simulador JOIN Usuario ON fkUsuario = id;
SELECT COUNT(id) AS 'Qtd de vezes que usou o simulador', nome FROM Simulador JOIN Usuario ON fkUsuario = id AND nome = 'Maria';