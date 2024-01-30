import { pool } from "../../database/config.js"

export const crearTransaccion = async (idTarjeta,idCuenta,operacion, fecha, saldoAnterior, saldoActual) => {
    try {
        const [rows] = await pool
        .query("INSERT INTO transaccion (idTarjeta, idCuenta, operacion, fecha, saldoAnterior, saldoActual) VALUES (?,?,?,?,?,?);", 
        [idTarjeta,idCuenta,operacion,fecha,saldoAnterior,saldoActual]);

    } catch (err) {
        console.error("Error durante la autenticación:");
        console.error("Detalle: ", err);
    }
}