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

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; // initial score
let highScore = 0;

// // display the secret number
// document.querySelector('.number').textContent = secretNumber;

// event listener
document.querySelector('.check').addEventListener('click', function () {  
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess); // check if guess is a number or not

    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No Number!'
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!'

        // display the secret number
        document.querySelector('.number').textContent = secretNumber;
        
        // manipulating css
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        // set high score
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
    } else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '💥 You Lost the Game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#D9534F';
        }
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low!'
            score--;
            document.querySelector('.score').textContent = score; 
        } else{
            document.querySelector('.message').textContent = '💥 You Lost the Game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#D9534F';
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    // re-assign to initial score, message, secret number, and bg-color
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})