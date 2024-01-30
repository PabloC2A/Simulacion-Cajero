import { conection } from "../../database/config.js";

export const autenticacionPin = async (idTarjeta, pin) => {
  try {
    const [rows, fields] = await conection
      .promise()
      .query("SELECT t.pin FROM tarjeta t WHERE idTarjeta = ?;", [idTarjeta]);

    if (rows.length > 0) {
      // Compara el PIN almacenado en la base de datos con el PIN proporcionado
      const pinDB = rows[0].pin;
      const esPinCorrecto = pinDB === pin;

      return esPinCorrecto;
    } else {
      // No se encontraron resultados para la tarjeta
      return false;
    }
  } catch (err) {
    console.error("Error Desconocido en autenticacionPin()");
    console.error("Detalle: ", err);
    throw err; // Puedes propagar el error o manejarlo según tu lógica de aplicación
  }
};
