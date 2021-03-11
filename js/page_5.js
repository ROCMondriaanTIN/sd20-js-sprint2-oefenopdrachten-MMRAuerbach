

const theButton = document.querySelector('.my-first-button');
const studentNumber = 54321; 
const myCity = 'Den Haag'; 

if (theButton) {
    theButton.addEventListener('click', function() {
        const yourName = prompt('Wat is je naam?', "");
        console.log('De gekozen naam is: ' + yourName + ' en je studenten nummer is ' + studentNumber + ' en je stad is .... ' + myCity);
        console.log(`De gekozen naam is: ${yourName} en je studenten nummer is ${studentNumber} en je stad is .... ${myCity}`);
    });
}
