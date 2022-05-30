import { Counter } from "./HTMLTipe.js";
import { contador } from "./memoriContador.js";
export function FReset() {
    contador.numero = 0;
    Counter.style.color = 'black';
    Counter.innerHTML = String(contador.numero);
}
