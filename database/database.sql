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


-- Poblar Cliente
INSERT INTO cliente (nombre, apellido, fechaNacimiento, direccionDomicilio, celular) VALUES ('Pablo Andres', 'Criollo Alvarez', '2004-12-07', 'San Jose', '0980520307');
INSERT INTO cliente (nombre, apellido, fechaNacimiento, direccionDomicilio, celular) VALUES ('Augusto Valentino', 'Davila Robles', '2005-01-04', 'Mirador', '0985372278');
INSERT INTO cliente (nombre, apellido, fechaNacimiento, direccionDomicilio, celular) VALUES ('Denis Leandro', 'Ruiz Lopez', '2004-03-16', 'Obrapia', '0984330337');

-- Poblar Cuenta
INSERT INTO cuenta (idCliente, numeroCuenta, saldoCuenta) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Pablo Andres' AND apellido = 'Criollo Alvarez'),'2583641579',1500.00);
INSERT INTO cuenta (idCliente, numeroCuenta, saldoCuenta) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Augusto Valentino' AND apellido = 'Davila Robles'),'2583641579',854.28);
INSERT INTO cuenta (idCliente, numeroCuenta, saldoCuenta) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Denis Leandro' AND apellido = 'Ruiz Lopez'),'2583641579',2000.00);


-- Poblar Tarjeta
INSERT INTO tarjeta (idCliente, marcaTarjeta, numeroTarjeta, fechaEmision, fechaExpiracion, codigoCVV, pin) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Pablo Andres' AND apellido = 'Criollo Alvarez'),'VISA', '4567891238456159', '2022-08-17', '2027-08-17', '752', '7193');
INSERT INTO tarjeta (idCliente, marcaTarjeta, numeroTarjeta, fechaEmision, fechaExpiracion, codigoCVV, pin) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Augusto Valentino' AND apellido = 'Davila Robles'),'VISA', '3697534861974265', '2021-06-21', '2028-06-21', '964', '4613');
INSERT INTO tarjeta (idCliente, marcaTarjeta, numeroTarjeta, fechaEmision, fechaExpiracion, codigoCVV, pin) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Denis Leandro' AND apellido = 'Ruiz Lopez'),'VISA', '875434861945265', '2020-06-21', '2028-05-10', '814', '1921');