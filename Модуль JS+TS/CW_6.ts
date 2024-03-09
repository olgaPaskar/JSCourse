// Протипизируйте массивы как в предыдущем примере
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];

// Укажите значения, чтобы не было ошибок компиляции
const a1: number = 5;
const a2: boolean = true;
const a3: string = 'fgfhg'
const a4: number[] = [1, 2, 3]
const a5: Array<string> = ["1", "2", "3"]
const a6: [string, string] = ["dsf", 'cldgjd']
const a7: [boolean, number] = [false, 25]
const a8: [number[], Array<string>] = [[25], ['gyig']]


//Укажите типы, чтобы не было ошибок компиляции

const b1:  number = 70;
const b2:  boolean = false;
const b3:  string = "lalaka";
const b4: [boolean, boolean] = [true, false];
const b6: [number, string] = [10, "10"];
const b7: boolean[] = [...[true]];
