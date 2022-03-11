'use strict';

// console.log(document.querySelector('.message').
// textContent
// );

// // manipulated content (change content in message)
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// // set value
// document.querySelector('.guess').value = 23;
// // get value from input 
// console.log(document.querySelector('.guess').value);

//////////////////////////////////////////////////////

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; // initial score

// display the number
document.querySelector('.number').textContent = secretNumber;

// event listener
document.querySelector('.check').addEventListener('click', function () {  
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess); // check if guess is a number or not

    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No Number!'
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!'

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '💥 You Lost the Game!'
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low!'
            score--;
            document.querySelector('.score').textContent = score; 
        } else{
            document.querySelector('.message').textContent = '💥 You Lost the Game!'
        }
    }
});