const posgres = require("../services/services.postgres");

//lista con ciudades
var ciudades = [Medellin, Sabaneta, Itagui, Estrella, Envigado];
//generacion de numero aleatorio
function numeroRandom(minimo, maximo){
    return Math.floor(Math.random() *(max-min))+min;
}

//generacion de usuario aleatorio
const estudianteRandom= async(res,res)=>{
    var id_estudiante=numeroRandom(100000,999999);
    var edad = numeroRandom(14,30);
    var ciudad = ciudades[numeroRandom(0,4)];
    var puntaje = numeroRandom(100,1000);

    //agregar usuario generado a la base de datos
    try{
        var estudianteGenerado = req.body;
        var sql = "INSERT INTO public.estudiante(id_estudiante,edad,ciudad,puntaje) VALUES ('${id_estudiante}', '${edad}','${ciudad}, '${puntaje}')"
        await posgres.execute(sql);
        return res.send({
            ok: true,
            message: "Estudiante Creado",
            info: estudianteGenerado,
        });
    }catch(error){
        return res.send({
            ok:false,
            message: "no se pudo guardar",
            info: error,
        });
    }
}

module.exports = {estudianteRandom};