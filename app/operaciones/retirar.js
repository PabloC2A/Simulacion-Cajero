import { pool } from "../../database/config.js";
import { crearTransaccion } from "./transaccion.js";

function obtenerFecha() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaActual.getDate().toString().padStart(2, '0');
  
    return `${año}-${mes}-${dia}`;
}

export const retiro = async (monto, idTarjeta) => {
    try {
        if ((monto === 20) | (monto === 40) | (monto === 80) | (monto === 100)) {

            const [dataCuenta] = await pool.query(
                "SELECT c.idCuenta, c.saldoCuenta FROM cuenta c WHERE c.idCliente = (SELECT t.idCliente FROM tarjeta t WHERE t.idTarjeta = ?);",
                [idTarjeta]
            );

            const idCuenta = dataCuenta[0].idCuenta;
            const saldoAnterior = dataCuenta[0].saldoCuenta;

            if (saldoAnterior >= monto ) {
                const saldoActual = parseFloat(saldoAnterior) - monto;
                const [result] = await pool.query("UPDATE cuenta c SET c.saldoCuenta = ? WHERE c.idCuenta = ?;", [saldoActual, idCuenta]);

                console.log(result)

                await crearTransaccion(idTarjeta, idCuenta, 'Retiro', obtenerFecha(), saldoAnterior, saldoActual);
            } else {
                console.log(
                    `
                                    ╔═════════════════════════╗
                                    ║           ⚠️             ║
                                    ║                         ║
                                    ║    Saldo Insuficiente     ║
                                    ╚═════════════════════════╝
                    `
                    );
            }
        } else {
            console.log(
                `
                                    ╔═════════════════════════╗
                                    ║           ⚠️             ║
                                    ║                         ║
                                    ║     Monto Incorrecto      ║
                                    ╚═════════════════════════╝
                `
                );
        }
    } catch (err) {
        console.error("Error Desconocido en retiro()");
        console.error("Detalle: ", err);
    }
};
