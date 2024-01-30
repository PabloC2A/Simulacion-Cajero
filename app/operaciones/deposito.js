import { conection } from "../../database/config";

export const deposito = (monto, idTarjeta) => {
  try {
    const [rows, fields] = conection.promise().query('', []) 

  } catch (err) {
    console.error("Error Desconocido en autenticacionPin()");
    console.error("Detalle: ", err);
    throw err; // Puedes propagar el error o manejarlo según tu lógica de aplicación
  }
};
