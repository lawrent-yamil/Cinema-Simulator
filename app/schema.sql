-- hacer la base de datos bd_cinema
CREATE DATABASE IF NOT EXISTS db_cinema;

-- usar
USE db_cinema;

-- hacer la tabla de usuarios nom_usuario y contraseña
CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nombre_usuario VARCHAR(45) NOT NULL,
  contrasena VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_usuario)
);

-- limpiar la tabla
TRUNCATE TABLE usuarios;