//1
/*
//Обявите переменные c1-c4, чтобы не было ошибок компиляции
// в этом блоке и блоке с проверками


//Блок проверок
const check_1: number = c1 + 5;
const check_2 = c2.substring(0);
const check_3: boolean = c3[0];
const check_4 = c3[1] + 5;
const check_5 = c4.push("lalaka");
*/
const c1: number = 5;
const c2: string = 'Ola';
const c3: boolean = true;
const c4: string[] = ['ku-ku'];

//Блок проверок
const check_1: number = c1 + 5;
const check_2 = c2.substring(0);
const check_3: boolean = c3[0];
const check_4 = c3[1] + 5;
const check_5 = c4.push("lalaka");

//2
/*
// Задайте типизацию и значения для a, b, c и d, так, чтобы
// не было ошибок компиляции.

const a = false;
const b = false;
const c = false;
const d = false;


const q1 = a;
const q2 = d[0];
const q3 = q2 + q1 + d.length;
const q4 = b.length + b[2].length;
const q5 = b === c[1][0];
const q6 = c[1][0] === c[1][0][0];
const q7 = q6 === q5 === c[1][1];
const q8: null = c[0];
*/

const a: number = 2;
const b: string = 'ku-ku';
const c: [null, [string, boolean]] = [null, [' ', false]];
const d: [number] = [3];


const q1 = a;
const q2 = d[0];
const q3 = q2 + q1 + d.length;
const q4 = b.length + b[2].length;
const q5 = b === c[1][0];
const q6 = c[1][0] === c[1][0][0];
const q7 = q6 === q5 === c[1][1];
const q8: null = c[0];

//3
// Укажите любой тип для переменной e, чтобы болк ниже компилировался

/*
let e: ;

const e1 = e;
e.push("lalaka");
const e2: boolean = e[2];
const e3: [10, 15] = e;
const e4: [string] = e;
const e5: Array<[string | 10]> = [...e[50]];
*/


let e: any;

const e1 = e;
e.push("lalaka");
const e2: boolean = e[2];
const e3: [10, 15] = e;
const e4: [string] = e;
const e5: Array<[string | 10]> = [...e[50]];

//4
/*
//Укажите типы, чтобы не было ошибок компиляции

let b1:  = { f: 15 + 15 };
b1 = { f: "lalaka" + "malaka" };

let b2:  = { f2: { f3: "lalaka" } };
b2 = { f1: [10], f2: { f3: "malaka" } };

let b3:  = { f1: true };
b3 = { f1: false };
// @ts-expect-error
b3.f1 = true;

let b4:  = { a: true, b: false };
b4["c"] = false;
b4["q"] = false;
b4["a" + "b"] = true;
*/

let b1: {f: number | string} = { f: 15 + 15 };
b1 = { f: "lalaka" + "malaka" };

let b2: { f1?: number[] | boolean, f2: {f3: string}} = { f2: { f3: "lalaka" } };
b2 = { f1: [10], f2: { f3: "malaka" } };

let b3: {f1: boolean} = { f1: true };
b3 = { f1: false };
b3.f1 = true;

let b4:{ a: boolean, b: boolean, [key: string]: boolean } = { a: true, b: false };
b4["c"] = false;
b4["q"] = false;
b4["a" + "b"] = true;

//5
/*
//Укажите сигнатуры функций a1-a5, чтобы не было ошибок компиляции

function a1() { }
function a2() { }
function a3() { }
function a4() { }
function a5() { }

a1(10);
a1(5 + 2);
a2(10, true);
a2("lalaka", false);
a3();
a3({});
a3({ f1: "malaka" });
const _a4: number = a4();
const _a5: string = a5(...["lalaka", "malaka"]);
*/

function a1(arg: number): void { }
function a2(arg1: number | string, arg2: boolean): void { }
function a3(arg?: { f1?: string }): void { }
function a4(): number { return 0; }
function a5(...args: string[]): string { return args.join(', '); }

a1(10);
a1(5 + 2);
a2(10, true);
a2("lalaka", false);
a3();
a3({});
a3({ f1: "malaka" });
const _a4: number = a4();
const _a5: string = a5(...["lalaka", "malaka"]);
