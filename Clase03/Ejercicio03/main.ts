import { Empleado } from "./Empleado";
import { Persona } from "./Persona";

let e1 = new Empleado("Juan","Perez",37212345,"Masculino",1234,15000);
let e2 = new Empleado("Esteban","Rodriguez",24670421,"Masculino",4321,23000);
console.log(e1.ToString());
console.log("---------------------");
console.log("Sueldo: " + e1.GetSueldo() + " - Legajo: " + e1.GetLegajo() + "\n" + e1.Hablar("Ingles"));
console.log("---------------------");
console.log(e2.ToString());
