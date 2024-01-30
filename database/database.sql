CREATE DATABASE cajero;
USE cajero;

CREATE TABLE cliente (
  idCliente INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(30) NOT NULL,
  apellido VARCHAR(30) NOT NULL,
  fechaNacimiento DATE NOT NULL,
  direccionDomicilio VARCHAR(255) NOT NULL,
  celular VARCHAR(20) NOT NULL,
  PRIMARY KEY (idCliente)
);

CREATE TABLE cuenta (
  idCuenta INT NOT NULL AUTO_INCREMENT,
  idCliente INT NOT NULL,
  numeroCuenta VARCHAR(10) NOT NULL,
  saldoCuenta DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (idCuenta),
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente)
);

CREATE TABLE tarjeta (
  idTarjeta INT NOT NULL AUTO_INCREMENT,
  idCliente INT NOT NULL,
  marcaTarjeta VARCHAR(15) NOT NULL,
  numeroTarjeta VARCHAR(16) NOT NULL,
  fechaEmision DATE NOT NULL,
  fechaExpiracion DATE NOT NULL,
  codigoCVV VARCHAR(3) NOT NULL,
  pin VARCHAR(4) NOT NULL,
  PRIMARY KEY (idTarjeta),
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente)
);

CREATE TABLE transaccion (
  idTransaccion INT NOT NULL AUTO_INCREMENT,
  idTarjeta INT NOT NULL,
  idCuenta INT NOT NULL,
  operacion VARCHAR(20) NOT NULL,
  fecha DATE NOT NULL,
  saldoAnterior DECIMAL(10,2) NOT NULL,
  saldoActual DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (idTransaccion),
  FOREIGN KEY (idTarjeta) REFERENCES tarjeta(idTarjeta),
  FOREIGN KEY (idCuenta) REFERENCES cuenta(idCuenta)
);
