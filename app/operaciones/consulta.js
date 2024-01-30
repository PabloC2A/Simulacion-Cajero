import { pool } from "../../database/config.js";

export const consultaSaldo = async (idTarjeta) => {
    try {
        const [dataCliente] = await pool.query("SELECT CONCAT(c.nombre, ' ' , c.apellido) AS nombreCompleto FROM cliente c WHERE c.idCliente = (SELECT t.idCliente FROM tarjeta t WHERE t.idTarjeta = ?);", [idTarjeta]);
        const [dataCuenta] = await pool.query("SELECT c.numeroCuenta, c.saldoCuenta FROM cuenta c WHERE c.idCliente = (SELECT t.idCliente FROM tarjeta t WHERE t.idTarjeta = ?)", [idTarjeta]);

        if ((dataCliente.length > 0) && (dataCuenta.length > 0)) {
            return {
                nombreCliente: dataCliente[0].nombreCompleto,
                cuenta: dataCuenta[0].numeroCuenta,
                saldo: dataCuenta[0].saldoCuenta,
            };

        } else {
            console.log(
                `
                                    ╔═════════════════════════╗
                                    ║           ⚠️             ║
                                    ║                         ║
                                    ║    Error de Consulta     ║
                                    ╚═════════════════════════╝
                `
            );
            return null;
        }
    } catch (err) {
        console.error("Error Desconocido en consultaSaldo()");
        console.error("Detalle: ", err);
    }
};

consultaSaldo(1);
