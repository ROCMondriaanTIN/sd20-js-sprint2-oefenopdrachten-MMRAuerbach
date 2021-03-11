// main.js - het Javascript bestand voor Sprint 2
let firstSection = document.querySelector('.first-section');
if (firstSection) {
    firstSection.classList.add('bg-green');
}

let normalParagraphs = document.querySelectorAll('.normal-text');
let i = 0;
while (i < normalParagraphs.length) {
    normalParagraphs[i].classList.add('color-yellow');
    i++;
}