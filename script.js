console.log('Welcome to Tic Tac Toe');

let counter = 0;

document.getElementById('play').addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('value')).forEach((element)=>{
        element.getElementsByTagName('p')[0].innerHTML = ' ';
    })
    if(counter%2==0) {
        document.getElementsByClassName('playturn').innerHTML = "X's";
    }
    else {
        document.getElementsByClassName('playturn').innerHTML = "O's";
    }
})




