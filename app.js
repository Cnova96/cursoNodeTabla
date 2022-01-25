const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
/* const base = 4; */
console.clear();

console.log(argv);


/* const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
 */
crearArchivo(argv.b, argv.l, argv.lim)
    .then(response => console.log(response.green, "creado".green))
    .catch(err => console.log(err));  