import fs from "fs/promises";
import fs_extra from "fs-extra";


export const leerTarjeta = async (ubicacion) => {
    try {
        const existe = fs_extra.pathExists(ubicacion);

        if (!existe) {
            console.log(
                `
                ╔═════════════════════════╗
                ║     ⚠ ¡Peligro! ⚠       ║
                ║                         ║
                ║  Archivo No Encontrado  ║
                ╚═════════════════════════╝
                `
            );
        }

        const data = await fs.readFile(ubicacion, 'utf-8');

        if (data.length === 0) {
            console.log(
                `
                ╔═════════════════════════╗
                ║     ⚠ ¡Peligro! ⚠       ║
                ║                         ║
                ║      Archivo Vacio      ║
                ╚═════════════════════════╝
                `
            );
        }


        const [idTarjeta,pinTarjeta] = data.split(',').map(valor => valor.trim());

        return {idTarjeta,pinTarjeta};

    } catch (err) {
        console.error('Error Desconocido en leerTarjeta()');
        console.error('Detalle: ', err);
    }
}
