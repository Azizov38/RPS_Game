const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const youScoreArea = document.querySelector('.you');
const compScoreArea = document.querySelector('.computer');
let youScore = 0;
let compScore = 0;
const result = document.querySelector('.result-for-txt');


const getCompChoise = () =>{
    const choise = ['Rock','Scissors','Paper'];
    const random = Math.floor((Math.random()*3));
    return choise[random];
}


const lose = (userChoise,compChoise) =>{
    compScore++;
    compScoreArea.innerHTML = compScore;
    result.innerHTML = '<div class="result-for-txt"><span class="text user">'+userChoise+'</span><span class="small">user</span><span class="text result-you"> loses to </span><span class="comp-choise">'+compChoise+'</span><span class="small">comp</span><span class="result-game">.You Lose😣</span></div>'
    
}


const win = (userChoise,compChoise) =>{
    youScore++;
    youScoreArea.innerHTML = youScore;
    result.innerHTML = '<div class="result-for-txt"><span class="text user">'+userChoise+'</span><span class="small">user</span><span class="text result-you"> Beats to </span><span class="comp-choise">'+compChoise+'</span><span class="small">comp</span><span class="result-game">.You Win✨</span></div>'
}

const equals = (userChoise,compChoise) =>{
    result.innerHTML = '<div class="result-for-txt"><span class="text user">'+userChoise+'</span><span class="small">user</span><span class="text result-you"> equal </span><span class="comp-choise">'+compChoise+'</span><span class="small">comp</span></div>'

}

const gameRSP = (userChoise) =>{
    const compChoise = getCompChoise();
    console.log(userChoise+compChoise)
    switch(userChoise+compChoise){
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            win(userChoise,compChoise);
            break;

        case 'RockPaper':
        case 'ScissorsRock':
        case 'PaperScissors':
            lose(userChoise,compChoise);
            break;
 
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            equals(userChoise,compChoise);
            break;
    }

}

paper.addEventListener('click',()=>{
    gameRSP('Paper');
})

scissor.addEventListener('click',()=>{
    gameRSP('Scissors');
})

rock.addEventListener('click',()=>{
    gameRSP('Rock');
})
