import {createPool} from "mysql2";

export const conection = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456789',
    database: 'cajero'
})