const excel = require("../services/excel.service");
const fs = require("fs");
const postgres = require("../services/services.postgres");
const quickSort = require("../services/quickSort.services");


const getReporteEstudiante = async(req, res)=> {
    try{
        var sql="SELECT * FROM estudiante WHERE edad < 20";
        var responseDB = await postgres.execute(sql);
        var rows = responseDB.rows;

        rows=quickSort.quickSort(rows);

        var headers=[
            {header: "id_estudiante", key:"id_estudiante"},
            {header: "edad", key:"edad"},
            {header: "ciudad", key:"ciudad"},
            {header: "puntaje", key:"puntaje"}
        ];
        var buffer = await excel(headers,rows,"estudiante");
        fs.writeFileSync("./temp/reporteEstudiante.xlsx", buffer);
        return res.download("./temp/reporteEstudiante.xlsx", "reporteEstudiante.xlsx");
        
    }catch(eror){
        console.error(error);
        return res.send(error);
    }
}

const getReporteEstudianteMedellin = async(req, res)=> {
    try{
        var sql="SELECT * FROM estudiante WHERE ciudad ='Medellin'";
        var responseDB = await postgres.execute(sql);
        var rows = responseDB.rows;

        var headers=[
            {header: "id_estudiante", key:"id_estudiante"},
            {header: "edad", key:"edad"},
            {header: "ciudad", key:"ciudad"},
            {header: "puntaje", key:"puntaje"}
        ];
        var buffer = await excel(headers,rows,"estudianteMedellin");
        fs.writeFileSync("./temp/reporteEstudianteMedellin.xlsx", buffer);
        return res.download("./temp/reporteEstudianteMedellin.xlsx", "reporteEstudianteMedellin.xlsx");
        
    }catch(eror){
        console.error(error);
        return res.send(error);
    }
}



module.exports = {getReporteEstudiante, getReporteEstudianteMedellin};