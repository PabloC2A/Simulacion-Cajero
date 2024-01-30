import { conection } from "../../database/config.js";

export const autenticacionPin = async (idTarjeta, pin) => {
  try {
    const [rows, fields] = await conection
      .promise()
      .query("SELECT t.pin FROM tarjeta t WHERE idTarjeta = ?;", [idTarjeta]);

    if (rows.length < 0) {
      throw new Error('');
    }
  } catch (err) {
    console.error("Error Desconocido en autenticacionPin()");
    console.error("Detalle: ", err);
  }
};


autenticacionPin(1,71937);

