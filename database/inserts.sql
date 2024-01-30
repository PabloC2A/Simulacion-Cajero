-- Poblar Cliente
INSERT INTO cliente (nombre, apellido, fechaNacimiento, direccionDomicilio, celular) VALUES ('Augusto Valentino', 'Davila Robles', '2005-01-04', 'Mirador', '0985372278');
INSERT INTO cliente (nombre, apellido, fechaNacimiento, direccionDomicilio, celular) VALUES ('Pablo Andres', 'Criollo Alvarez', '2004-12-07', 'San Jose', '0980520307');

-- Poblar Cuenta
INSERT INTO cuenta (idCliente, numeroCuenta, saldoCuenta) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Pablo Andres' AND apellido = 'Criollo Alvarez'),'2583641579',1500.00);
INSERT INTO cuenta (idCliente, numeroCuenta, saldoCuenta) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Augusto Valentino' AND apellido = 'Davila Robles'),'2583641579',854.28);

-- Poblar Tarjeta
INSERT INTO tarjeta (idTarjeta, idCliente, marcaTarjeta, numeroTarjeta, fechaEmision, fechaExpiracion, codigoCVV, pin) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Pablo Andres' AND apellido = 'Criollo Alvarez'),'VISA', '4567891238456159', '2022-08-17', '2027-08-17', '752', '7193');
INSERT INTO tarjeta (idTarjeta, idCliente, marcaTarjeta, numeroTarjeta, fechaEmision, fechaExpiracion, codigoCVV, pin) VALUES ((SELECT idCliente FROM cliente WHERE nombre = 'Augusto Valentino' AND apellido = 'Davila Robles'),'VISA', '36975348619742659', '2021-06-21', '2028-06-21', '964', '4613');