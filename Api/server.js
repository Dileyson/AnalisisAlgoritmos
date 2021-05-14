//llamamos al módulo express y lo asignamos a la app

const express = require("express");
const app = express();

app.use(express.json());


app.listen(3000, () =>{
    console.log("API iniciada en el puerto 3000");
});

