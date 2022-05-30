import { ColorIncrease } from "./ColorCounter.js";
import { Counter } from "./HTMLTipe.js";
import { contador } from "./memoriContador.js";

export function FIncrease():void{
    contador.numero++;

    ColorIncrease(contador.numero);
    
    Counter.innerHTML = String(contador.numero);
}