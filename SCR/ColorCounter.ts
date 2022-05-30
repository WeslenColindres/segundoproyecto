import { Counter } from "./HTMLTipe.js";

export function ColorDecrease(Cont:number):void{
    if(Cont < 0){
    Counter.style.color = 'red';
}
Counter.innerHTML = String(Cont);

}

export function ColorIncrease(Cont:number):void{

    if(Cont > 0){
        Counter.style.color = 'green';
    }

}