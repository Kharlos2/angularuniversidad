import { Acudiente } from "./Acudiente";

export interface Estudiante{
    id:number,
    nombre:string,
    documento:string,
    correo:string,
    acudiente: Acudiente
}