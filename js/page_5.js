

let theButton = document.querySelector('.my-first-button');
if (theButton) {
    theButton.addEventListener('click', function() {
        const yourName = prompt('Wat is je naam?', '');
        console.log(`De gekozen naam is: ${yourName} `);
    })
}