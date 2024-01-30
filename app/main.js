import { autenticacionPin } from "./autenticacion/autenticacion.js";
import { deposito } from "./operaciones/deposito.js";
import { retiro } from "./operaciones/retirar.js";
import { leerTarjeta } from "./tarjeta/leerTarjeta.js";
import { consultaSaldo } from "./operaciones/consulta.js"
import { cambiarPin } from "./operaciones/cambiarPin.js";
import { historialTransacciones } from "./operaciones/historial.js"
import rl from "readline-sync";


console.log(
    `  
        ██████╗░░█████╗░███╗░░██╗░█████╗░░█████╗░   ██████╗░██████╗░░█████╗░
        ██╔══██╗██╔══██╗████╗░██║██╔══██╗██╔══██╗   ██╔══██╗██╔══██╗██╔══██╗
        ██████╦╝███████║██╔██╗██║██║░░╚═╝██║░░██║   ██████╔╝██║░░██║███████║
        ██╔══██╗██╔══██║██║╚████║██║░░██╗██║░░██║   ██╔═══╝░██║░░██║██╔══██║
        ██████╦╝██║░░██║██║░╚███║╚█████╔╝╚█████╔╝   ██║░░░░░██████╔╝██║░░██║
        ╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚════╝░   ╚═╝░░░░░╚═════╝░╚═╝░░╚═╝

                            ¡Bienvenido al Banco PDA!
`
);

console.log(
    "══════════════════════════════════════════════════════════════════════════════════════"
);

const ubicacion = rl.questionPath("- Ingrese su tarjeta: ");

const tarjetaUsuario = await leerTarjeta(ubicacion);

console.log(
    `
                        ╔═════════════════════════════╗
                        ║   ✅ Lectura Exitosa! ✅    ║
                        ╚═════════════════════════════╝
 `
);

console.log(
    "══════════════════════════════════════════════════════════════════════════════════════"
);

console.log(
    `                                             
                   ╔══════════════════════════════════════════╗                     
                   ║                                          ║
                   ║        Ａｕｔｅｎｔｉｃａｃｉｏｎ        ║   
                   ║                                          ║   
                   ║                    🛡                     ║   
                   ╚══════════════════════════════════════════╝   
`
);

const pinUsuario = rl.question("- Ingrese su PIN: ", { hideEchoBack: true });

const autenticacion = await autenticacionPin(tarjetaUsuario.idTarjeta,pinUsuario);

if (autenticacion) {
    console.log(
        "══════════════════════════════════════════════════════════════════════════════════════"
    );

    console.log(
        `
      ╔═══════════════════════════════════════════════════════════╗
      ║                          ＭＥＮＵ                         ║
      ║   ╔══════════════════╗         ╔═══════════════════════╗  ║
      ║   ║  💸 1. Depositar ║         ║ 💰 3. Consultar Saldo ║  ║ 
      ║   ╚══════════════════╝         ╚═══════════════════════╝  ║ 
      ║                                                           ║ 
      ║   ╔═══════════════════╗        ╔═══════════════════════╗  ║ 
      ║   ║ 🔍 2. Retiro      ║        ║ 🔄 4. Transacciones   ║  ║ 
      ║   ╚═══════════════════╝        ╚═══════════════════════╝  ║ 
      ║                                                           ║
      ║                ╔════════════════════╗                     ║
      ║                ║  🔄 5.Cambiar Pin  ║                     ║
      ║                ╚════════════════════╝                     ║
      ║                                                           ║
      ╚═══════════════════════════════════════════════════════════╝
      `
    );

    const opcionOperacion = rl.questionInt("-Escoja una opcion: ");

    switch (opcionOperacion) {
        case 1:
            console.log(
                `
                ╔═════════════════════════════════════════╗
                ║                Ｍｏｎｔｏ               ║ 
                ╚═════════════════════════════════════════╝                          
                ║   ╔═══════════╗         ╔═══════════╗   ║
                ║   ║  💸 20    ║         ║ 💸 80     ║   ║ 
                ║   ╚═══════════╝         ╚═══════════╝   ║ 
                ║                                         ║ 
                ║   ╔═══════════╗         ╔═══════════╗   ║ 
                ║   ║ 💸 40     ║         ║💸 100     ║   ║ 
                ║   ╚═══════════╝         ╚═══════════╝   ║ 
                ║                                         ║
                ╚═════════════════════════════════════════╝
          `
            );

            const montoDeposito = rl.questionInt('-Ingrese un monto: ');

            deposito(montoDeposito, tarjetaUsuario.idTarjeta);

            break;

        case 2:
            console.log(
                `
          ╔═════════════════════════════════════════╗
          ║                Ｍｏｎｔｏ               ║ 
          ╚═════════════════════════════════════════╝                          
          ║   ╔═══════════╗         ╔═══════════╗   ║
          ║   ║  💸 20    ║         ║ 💸 80     ║   ║ 
          ║   ╚═══════════╝         ╚═══════════╝   ║ 
          ║                                         ║ 
          ║   ╔═══════════╗         ╔═══════════╗   ║ 
          ║   ║ 💸 40     ║         ║💸 100     ║   ║ 
          ║   ╚═══════════╝         ╚═══════════╝   ║ 
          ║                                         ║
          ╚═════════════════════════════════════════╝
          `
            );

            const montoRetiro = rl.questionInt('-Ingrese un monto: ');

            retiro(montoRetiro,tarjetaUsuario.idTarjeta);

            break;

        case 3:
            console.log(
                `
          ╔═══════════════════════════════════╗
          ║    Ｃｏｎｓｕｌｔａ  Ｓａｌｄｏ   ║
          ║                                   ║
          ║               🔍                  ║
          ╚═══════════════════════════════════╝
          `
            );

            const consulta = await consultaSaldo(tarjetaUsuario.idTarjeta);

            console.log(
              `
            Usuario: ${consulta.nombreCliente}
            Cuenta:  ${consulta.cuenta}
            Saldo:   ${consulta.saldo}
            `
            );

            break;

        case 4:
            console.log(
                `
          ╔═══════════════════════════════════════════╗
          ║    Ｃｏｎｓｕｌｔａ Ｈｉｓｔｏｒｉａｌ    ║
          ║                                           ║
          ║                   🕒                      ║
          ╚═══════════════════════════════════════════╝
          `
            );

            await historialTransacciones(tarjetaUsuario.idTarjeta);
            console.log('');

            break;

        case 5:
            console.log(
                `
          ╔═══════════════════════════════════════════╗
          ║         Ｃａｍｂｉａｒ Ｐｉｎ           ║
          ║                                           ║
          ║                   🔄                      ║
          ╚═══════════════════════════════════════════╝
                  `
            );


            const nuevoPin = rl.question('-Ingrese su nuevo pin: ')

            cambiarPin(tarjetaUsuario.idTarjeta, nuevoPin,)
            break;

        default:
            break;
    }
} else {
    console.log(
    `
                        ╔═════════════════════════╗
                        ║           ⚠️             ║
                        ║                         ║
                        ║      PIN Incorrecto     ║
                        ╚═════════════════════════╝
    `
    );
    process.exit(1);
}

process.exit(1);
