
const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
    try {
        let salida = "";

        for (let index = 1; index <= limite; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        /* fs.writeFileSync(`Tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
        }); */
        if (listar) {
            console.log("==================".underline.red);
            console.log(`Tabla del: ${base}`.blue);
            console.log("==================".underline.red);
            console.log(salida);
            console.log(`Tabla-${base}.txt`);
        }
        return `Tala-${base}.txt`;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}

