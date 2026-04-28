CREATE TABLE carros (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT NOT NULL
);

INSERT INTO carros (marca, modelo, ano) VALUES ('Toyota', 'Corolla', 2020);
INSERT INTO carros (marca, modelo, ano) VALUES ('Honda', 'Civic', 2019);
INSERT INTO carros (marca, modelo, ano) VALUES ('Ford', 'Mustang', 2021);
INSERT INTO carros (marca, modelo, ano) VALUES ('Chevrolet', 'Camaro', 2020);
INSERT INTO carros (marca, modelo, ano) VALUES ('Volkswagen', 'Gol', 1990);
INSERT INTO carros (marca, modelo, ano) VALUES ('Fiat', 'Marea 24v', 1999);