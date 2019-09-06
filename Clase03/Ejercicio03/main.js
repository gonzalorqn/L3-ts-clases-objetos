"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empleado_1 = require("./Empleado");
var e1 = new Empleado_1.Empleado("Juan", "Perez", 37212345, "Masculino", 1234, 15000);
var e2 = new Empleado_1.Empleado("Esteban", "Rodriguez", 24670421, "Masculino", 4321, 23000);
console.log(e1.ToString());
console.log("---------------------");
console.log("Sueldo: " + e1.GetSueldo() + " - Legajo: " + e1.GetLegajo() + "\n" + e1.Hablar("Ingles"));
console.log("---------------------");
console.log(e2.ToString());
//# sourceMappingURL=main.js.map