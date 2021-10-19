// import { x as XX, y } from "./App";
import Anim, { x as XX, y } from './App';

const obj = {};

const fn = greet => `Hello ${greet}`;
console.log(fn('Yagnesh'));

const foo = obj.foo ?? 'default';

console.log(foo);

const a = 1;

console.log(a);

const animal = new Anim();

console.log(animal.hasLegs());

console.log(XX);
console.log(y);
