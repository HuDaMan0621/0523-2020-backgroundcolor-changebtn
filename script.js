const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', ' #3b5998'];

colorBtn.addEventListener('click',changeColor); 

function changeColor(){
    // bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length) //creates a random number and in between 0 and 3
    bodyBcg.style.backgroundColor = colors[random];
}