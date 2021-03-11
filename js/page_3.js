// page_3.js - het Javascript bestand voor Sprint 2


console.log("Opdracht 1 - de js file miste");


console.log("Opdracht 2 - second-section element");
let secondSection = document.querySelector('.second-section');
if (secondSection) {
    console.log(secondSection);
}

console.log("Opdracht 3 - toon paragrafen met normal-text class");
console.log("Opdracht 3A - Zie de tweede console.log in onderstaande for-loop");

let normalParagraphs = document.querySelectorAll('.normal-text');
for (let i = 0; i < normalParagraphs.length; i++) {
    console.log(normalParagraphs[i]);
    console.log(normalParagraphs[i].textContent)
}
