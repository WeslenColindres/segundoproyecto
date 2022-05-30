import { Counter } from "./HTMLTipe.js";
export function ColorDecrease(Cont) {
    if (Cont < 0) {
        Counter.style.color = 'red';
    }
    Counter.innerHTML = String(Cont);
}
export function ColorIncrease(Cont) {
    if (Cont > 0) {
        Counter.style.color = 'green';
    }
}
