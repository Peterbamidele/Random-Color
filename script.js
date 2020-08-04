const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const color = ['purple','green','yellow','black','red','indigo','blue','violet'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodyBcg.style.backgroundColor = 'blue';
    // bodyBcg.style.backgroundColor = color[4];
    let random = Math.floor(Math.random()*color.length)
    bodyBcg.style.backgroundColor = color[random];
}