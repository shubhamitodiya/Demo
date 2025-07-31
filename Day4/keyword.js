a=true; //hoisting==declare variables on top then use them
console.log(a);
a=22;
console.log(a);

//var is global scope
connsole.log(b);
var b='college';
//modern developers dont use var the use const .
//var can be redelaredd 

//let is lexical or function scoped and we cannot redeclare it with let keyword
let course ="Full Stack";
console.log(course)