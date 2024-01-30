import { pool } from "../../database/config.js";

export const historialTransacciones = async (idTarjeta) => {
  try {
    const [rows] = await pool.query(
      "SELECT tr.operacion, tr.fecha,tr.saldoAnterior, tr.saldoActual FROM transaccion tr WHERE tr.idTarjeta = ?;",[idTarjeta]);

    if (rows.length > 0) {
      rows.forEach((row) => {
        const fecha = new Date(row.fecha);
        const anio = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, "0");
        const dia = String(fecha.getDate()).padStart(2, "0");

        const fechaFormateada = `${anio}-${mes}-${dia}`;

        console.log(
          `|${row.operacion} | ${fechaFormateada} | ${row.saldoAnterior} | ${row.saldoActual}|`
        );
      });
    } else {
      console.log(
        "No se encontraron transacciones para la tarjeta con ID:",
        idTarjeta
      );
    }
  } catch (err) {
    console.error("Error durante la autenticación:");
    console.error("Detalle: ", err);
  }
};
