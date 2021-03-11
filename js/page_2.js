// main.js - het Javascript bestand voor Sprint 2

//Op de HTML pagina vind je een section met een ID genaamd start. Deze kan je als variabele gebruiken.
console.log(start);

//Omdat het een  NODE is op je pagina kan je er ook doorheen lopen.
console.log("1 start start id");
let i = 0;
while (i < start.childNodes.length) {
    console.log(start.childNodes[i]);
    i++;
} 

console.log("1 start between id");
i = 0;
while (i < between.childNodes.length) {
    console.log(between.childNodes[i]);
    i++;
} 

console.log("1 start final id");
i = 0;
while (i < final.childNodes.length) {
    console.log(final.childNodes[i]);
    i++;
} 

console.log("2 start HEAD elemend id");
i = 0;
while (i < document.head.childNodes.length) {
    console.log(final.childNodes[i]);
    i++;
} 

console.log("2 start BODY elemend id");
i = 0;
while (i < document.body.childNodes.length) {
    console.log(final.childNodes[i]);
    i++;
} 

console.log("1A if statement");
for (let k = 0; k < start.childNodes.length; k++) {
    console.log(start.childNodes[k]);
} 




