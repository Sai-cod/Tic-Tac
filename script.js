console.log('Welcome to Tic Tac Toe');

let counter = 0;

let valuestore = [0,0,0,0,0,0,0,0,0];

document.getElementById('play').addEventListener('click',()=>{
    counter = 0;
    for(let i=0;i<9;i++) {
        valuestore[i] = 0;
    }
    document.getElementById('tp').style.opacity = '1';
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

let index;

let str = 'X';

let checkwin = (arr)=>{
    let flag = 0;
    for(let i=0;i<3;i++) {
        if(arr[i]!=1) 
        {
            flag = 1;
            break;
        }
    }
    if(flag == 0) {
        document.getElementsByClassName('win-turn').innerHTML = 'X';
        document.getElementsByClassName('win-para').style.opacity = '1';
    }
}

Array.from(document.getElementsByClassName('value')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(counter%2==0) {
            str = 'X';
            index = e.target.id;
            if(valuestore[index]==0) {
                console.log("hi");
                valuestore[index] = 1;
                document.getElementsByTagName('p')[index].innerHTML = str;
                document.getElementsByClassName('playturn').innerHTML = "X's";
                checkwin(valuestore);
                counter++;
            }
            else {
                alert('the place is already filled!');
            }
            
        }
        else {
            str = 'O';
            index = e.target.id;
            if(valuestore[index]==0) {
                console.log("hi");
                valuestore[index] = 2;
                document.getElementsByTagName('p')[index].innerHTML = str;
                document.getElementsByClassName('playturn').innerHTML = "O's";
                counter++;
            }
            else {
                alert('the place is already filled!');
            }
        }
        
    })
})


