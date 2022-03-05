const firstRandomNum=
Math.floor(Math.random()*6)+1//generate a random number from 1 to 6

const firstDiceImage='img/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage)

//user 2
const secondRandomNum=
Math.floor(Math.random()*6)+1//generate a random number from 1 to 6

const secondDiceImage='img/dice'+secondRandomNum+'.png';


document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage)

//logic for winner

if(firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = 'this winner is User 1';}

    else if (firstRandomNum < secondRandomNum){
        document.querySelector('h1').innerHTML = 'this winner is User 2';
    }
    else{
        document.querySelector('h1').innerHTML = 'It is a Draw!';
    }

