CREATE DATABASE uniqueStyle;
USE uniqueStyle;

CREATE TABLE Post (
	idPost INT PRIMARY KEY AUTO_INCREMENT
);

INSERT INTO Post VALUES (1),
						(2),
						(3),
						(4),
						(5),
						(6),
						(7),
						(8),
						(9);
                        
CREATE TABLE Usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkPostVotado INT,
    FOREIGN KEY (fkPostVotado) REFERENCES Post(idPost)
);

SELECT * FROM Usuario;
SELECT COUNT(fkPostVotado) FROM Usuario group BY fkPostVotado;


CREATE TABLE Simulador (
	idSimulador INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(60),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (id)
);
SELECT (SELECT Count(*) FROM Usuario where fkPostVotado = 1) voto1,
(SELECT Count(*) FROM Usuario where fkPostVotado = 2) voto2,
(SELECT Count(*) FROM Usuario where fkPostVotado = 3) voto3,
(SELECT Count(*) FROM Usuario where fkPostVotado = 4) voto4,
(SELECT Count(*) FROM Usuario where fkPostVotado = 5) voto5,
(SELECT Count(*) FROM Usuario where fkPostVotado = 6) voto6,
(SELECT Count(*) FROM Usuario where fkPostVotado = 7) voto7,
(SELECT Count(*) FROM Usuario where fkPostVotado = 8) voto8,
(SELECT Count(*) FROM Usuario where fkPostVotado = 9) voto9;


SELECT texto, id, nome FROM Simulador JOIN Usuario ON fkUsuario = id;
SELECT LENGTH(texto) 'Caracteres do texto', texto, id, nome FROM Simulador JOIN Usuario ON fkUsuario = id;