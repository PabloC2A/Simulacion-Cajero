import { pool } from "../../database/config.js";

export const cambiarPin = async (idTarjeta, nuevoPin) => {
  try {
    const [results] = await pool.query("UPDATE tarjeta SET pin = ? WHERE idTarjeta = ?;",[nuevoPin, idTarjeta]);

    if (results.affectedRows > 0) {
      console.log(
        `
                                ╔═════════════════════════════╗
                                ║    ✅ Pin Cambiado  ✅     ║
                                ╚═════════════════════════════╝
         `
      );
    } else {
      console.log(
        `
                                ╔═════════════════════════╗
                                ║           ⚠️             ║
                                ║                         ║
                                ║  Tarjeta No Encontrada  ║
                                ╚═════════════════════════╝
            `
      );
    }
  } catch (err) {
    console.error("Error Desconocido en cambiarPin()");
    console.error("Detalle: ", err);
  }
};
