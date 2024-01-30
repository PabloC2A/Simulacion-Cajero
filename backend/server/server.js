import express from "express";
import { PORT } from "./config";


const app = express();


app.get('/', (req, res) => {
    res.render()
});

app.listen(PORT);