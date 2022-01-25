const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: false,
        default: false,
        describe: "Muestra la tabla en consola"

    })
    .option("lim", {
        alias: "limite",
        type: "number",
        demandOption: true,
        default: 10,
        describe: "Factor por el cual se mutiplica la base "

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero";
        }
        return true;
    })
    .argv;

module.exports = argv;