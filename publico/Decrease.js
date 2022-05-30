import { ColorDecrease } from "./ColorCounter.js";
import { Counter } from "./HTMLTipe.js";
import { contador } from "./memoriContador.js";
export function FDecrease() {
    contador.numero--;
    ColorDecrease(contador.numero);
    Counter.innerHTML = String(contador.numero);
}
