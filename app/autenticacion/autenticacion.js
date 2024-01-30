import { pool } from "../../database/config.js";

export const autenticacionPin = async (idTarjeta, pin) => {
  try {
    const [rows] = await pool.query(
      "SELECT t.pin FROM tarjeta t WHERE idTarjeta = ?;",
      [idTarjeta]
    );

    if (rows.length > 0) {
      const pinDB = rows[0].pin;

      if (pinDB === pin) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("No se encontró la tarjeta");
      return false;
    }
  } catch (err) {
    console.error("Error durante la autenticación:");
    console.error("Detalle: ", err);
    return false;
  }
};
