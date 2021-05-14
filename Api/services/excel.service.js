//llamamos al modulo de exceljs y lo conectamos a la app
const excelJS = require("exceljs");

const configExcel = async (headers,rows,nameSheet) => {
    const workBook = new excelJS.workBook();
    const sheet = workBook.addWorkSheet(nameSheet);
    sheet.columns = headers;
    sheet.addRows(rows);
    return await workBook.xlsx.writeBuffer();
};

module.exports = {configExcel};