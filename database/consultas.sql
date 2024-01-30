-- Consultar PIN de una tarjeta mediante el ID de la tarjeta
SELECT t.pin FROM tarjeta t WHERE idTarjeta = ?;

-- Consultar el ID de un cliente segun el ID de la tarjeta
SELECT t.idCliente FROM tarjeta t WHERE t.idTarjeta = ?;

--Consultar el ID CUENTA segun el ID CLIENTE
SELECT c.idCuenta FROM cuenta c WHERE c.idCliente = ?;

--Actualizar SALDO de CUENTA segun el ID CLIENTE
UPDATE cuenta c SET c.saldoCuenta = 1600 WHERE c.idCliente = ?;
