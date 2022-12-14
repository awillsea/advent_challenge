import * as fs from 'fs';
const adventdata : string = 'adventdata.text';
let fileContent = fs.readFileSync(adventdata,'utf8');





//X = rock = 1 point
//Y = paper = 2 points
//Z = scissors = 3 points
//A = rock
//B = paper
//C = scissors

// xyz are for Myscore- ABC opponent
// 6 points for a win
//3 points for a tie
//0 for a loss
let strategy:string = fileContent;
let myScore:number = 0;


// let newstring:string = strategy.slice(0,3)
let strategyArr:string [] = strategy.split("\r\n")
// console.log(newstring)
//console.log(strategyArr)

function promblemOne(){


    let OpponentsPlay:string = '';
    let UsersPlay:string ='';
    let userRound:number =0;
    let userplayPoints =0;
    let totalPoints:number =0;
    let GameTotal:number =0;
    strategyArr.forEach(string => {
        
        OpponentsPlay = string[0];
        UsersPlay = string[2];
  
// this is rock for opponent
        if(OpponentsPlay.toLowerCase() === 'a' ){
                if(UsersPlay.toLowerCase() === 'x'){
            // console.log('User played rock against rock')

                    userRound = 3
                    userplayPoints = 1
                    totalPoints = totalPoints + userRound + userplayPoints
                }
                else if(UsersPlay.toLowerCase() === 'y')
                {
            // console.log('User played paper against rock')

                    userRound = 6
                    userplayPoints = 2
                    totalPoints = totalPoints + userRound + userplayPoints
                   
                    
                }
                else{
                    // console.log('User played scissors against rock')

                    userRound = 0
                    userplayPoints = 3
                    totalPoints = totalPoints + userRound + userplayPoints
                }
                
        }
        //this is paper
        else if(OpponentsPlay.toLowerCase() === 'b'){
            // console.log('opponent played B')

            if(UsersPlay.toLowerCase() === 'x'){
            // console.log('User played Rock against paper')

                userRound = 0
                userplayPoints = 1
                totalPoints = totalPoints + userRound + userplayPoints
              
            }
            else if(UsersPlay.toLowerCase() === 'y')
            {
            // console.log('User played Y against b')

                userRound = 3
                userplayPoints = 2
                totalPoints = totalPoints + userRound + userplayPoints
            }
            else{
            // console.log('User played Z against b')

                userRound = 6
                userplayPoints = 3
                totalPoints = totalPoints + userRound + userplayPoints
            }
            
        }
        //this is scissors
        else{
            // console.log('opponent played C')

            if(UsersPlay.toLowerCase() === 'x'){
            // console.log('User played X against c')
            
                userRound = 6
                userplayPoints = 1
                totalPoints = totalPoints + userRound + userplayPoints
            }
            else if(UsersPlay.toLowerCase() === 'y')
            {
            // console.log('User played Y against c')

                userRound = 0
                userplayPoints = 2
                totalPoints = totalPoints + userRound + userplayPoints
            }
            else{
            // console.log('User played Z against c')

                userRound = 3
                userplayPoints = 3
                totalPoints = totalPoints + userRound + userplayPoints
               
            }
        }
        GameTotal = GameTotal + totalPoints;
        console.log('total points for round'+ totalPoints)
        totalPoints =0;
        userRound = 0;
        userplayPoints = 0;
    });
console.log(GameTotal)
     }
// promblemOne()
//x = lose
//y = draw
//z = win
function problem2(){
    let ShouldPlay:string = '';
    let OpponentsPlay:string = '';
    let Expectedresult:string ='';
    let userRound:number =0;
    let userplayPoints =0;
    let totalPoints:number =0;
    let GameTotal:number =0;
    strategyArr.forEach(string => {
        
        OpponentsPlay = string[0];
        Expectedresult = string[2];
  
// this is rock for opponent
        if(OpponentsPlay.toLowerCase() === 'a' ){
                if(Expectedresult.toLowerCase() === 'x'){
            // elf played rock the reselt we want is a loss
            // rock > scissors

                    userRound = 0
                    userplayPoints = 3
                    totalPoints = totalPoints + userRound + userplayPoints
                }
                else if(Expectedresult.toLowerCase() === 'y')
                {
            // elf played rock the reselt we want is a Draw
            // rock > rock

                    userRound = 3
                    userplayPoints = 1
                    totalPoints = totalPoints + userRound + userplayPoints
                   
                    
                }
                else{
                     // elf played rock the reselt we want is a Win
                    // rock < paper
                    userRound = 6
                    userplayPoints = 2
                    totalPoints = totalPoints + userRound + userplayPoints
                }
                
        }
        //this is paper
        else if(OpponentsPlay.toLowerCase() === 'b'){
           
            if(Expectedresult.toLowerCase() === 'x'){
                 // elf played paper the reselt we want is a loss
                    // paper > Rock
                userRound = 0
                userplayPoints = 1
                totalPoints = totalPoints + userRound + userplayPoints
              
            }
            else if(Expectedresult.toLowerCase() === 'y')
            {
                // elf played paper the reselt we want is a Draw
                    // paper = paper
            

                userRound = 3
                userplayPoints = 2
                totalPoints = totalPoints + userRound + userplayPoints
            }
            else{
            // elf played paper the reselt we want is a Win
                    // paper < scissors

                userRound = 6
                userplayPoints = 3
                totalPoints = totalPoints + userRound + userplayPoints
            }
            
        }
        //this is scissors
        else{
            

            if(Expectedresult.toLowerCase() === 'x'){
            // elf played scissors the reselt we want is a loss
                    // scissors > paper
            
                userRound = 0
                userplayPoints = 2
                totalPoints = totalPoints + userRound + userplayPoints
            }
            else if(Expectedresult.toLowerCase() === 'y')
            {
            // elf played scissors the reselt we want is a Draw
                    // scissors > scissors

                userRound = 3
                userplayPoints = 3
                totalPoints = totalPoints + userRound + userplayPoints
            }
            else{
            // elf played scissors the reselt we want is a Win
                    // scissors < Rock

                userRound = 6
                userplayPoints = 1
                totalPoints = totalPoints + userRound + userplayPoints
               
            }
        }
        GameTotal = GameTotal + totalPoints;
        console.log('total points for round'+ totalPoints)
        totalPoints =0;
        userRound = 0;
        userplayPoints = 0;
    });
console.log(GameTotal)

}
problem2();