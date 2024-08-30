DROP DATABASE IF EXISTS dbNUTI;
CREATE DATABASE dbNUTI;
USE dbNUTI;

CREATE TABLE Contrato(
    idContrato int not null primary key auto_increment,
    dataVigenciaInicio date not null,
    dataVigenciaFinal date not null,
    razaoSocialForncedor varchar(100) not null,
    objeto varchar(100) not null,
    valorInicial double not null
);

DELIMITER $$
CREATE PROCEDURE InserirContrato(
    IN p_dataVigenciaInicio date,
    IN p_dataVigenciaFinal date,
    IN p_razaoSocialForncedor varchar(100),
    IN p_objeto varchar(100),
    IN p_valorInicial double)
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM Contrato
        WHERE dataVigenciaInicio = p_dataVigenciaInicio
          AND dataVigenciaFinal = p_dataVigenciaFinal
          AND razaoSocialForncedor = p_razaoSocialForncedor
    ) THEN
        INSERT INTO Contrato (dataVigenciaInicio, dataVigenciaFinal, razaoSocialForncedor, objeto, valorInicial)
        VALUES (p_dataVigenciaInicio, p_dataVigenciaFinal, p_razaoSocialForncedor, p_objeto, p_valorInicial);
    END IF;
END
$$
DELIMITER ;