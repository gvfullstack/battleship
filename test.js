
function battleShip(){
var readlineSync = require('readline-sync');
const rows = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J']
const gridSize = readlineSync.question("How large should the grid be?",
                 {limit: [1,2,3,4,5,6,7,8,9,10],  limitMessage:"Select a number between 1-10"});

const gridValArr = [];

function GridObj (column, row, value) {
    this.column = column;
    this.row = row;
    this.value = value; 
    this.name = `${row}${column}`
};

function createGridValues (gridSize, rows, gridValArr){
    count = 0;
    for(let i = 1; i <= gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            gridValArr[count] = new GridObj(i, rows[j], "O");
            count++
        }
    }
}

const gridValues = createGridValues(gridSize, rows, gridValArr);

function printTable (gridValArr, rows, gridSize){
    let heading = `BATTLEFIELD`
    for(let i = 0; i < gridSize; i ++){
        if(i === 4 || i === 6 || i === 8){
        heading = `   ${heading}`;
        }
        else{heading = ` ${heading}`;}
        
    }
    console.log(heading)
    
    let colName = "   "
    let colDashes =  `   `
    for(let i = 0; i < gridSize; i ++){
        colName += ` ${i+1}  `;
        colDashes +=  `----`;
    }
    console.log(colName)
    console.log(colDashes)

    for(let i = 0; i < gridSize; i ++){
        let rowLabel = `${rows[i]} |`;
        let dashes = `   `
            for(let item of gridValArr){
                // console.log(item.name)
                if(item.name.includes(rows[i])){
                    rowLabel +=` ${item.value} |`;
                    dashes += `----`
                }
            }
        console.log(rowLabel)
        console.log(dashes)
    } 
}

console.log(printTable (gridValArr, rows, gridSize))

const allPoints = gridValArr.map(point => point.name)
const allPointsLength = allPoints.length
let priorGuesses = []
let shipsSunk = 0
const shipsInGame = 6;
const shipsLocations = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function generateRand (){
    let rand = getRandomInt(allPointsLength-1) 
    while (shipsLocations.includes(rand)){
        rand = getRandomInt(allPointsLength-1)
        }
        shipsLocations.push(rand);
        return rand;
    };   

let s1P = generateRand();
let s2P = generateRand()  
console.log("answers: ", allPoints[s1P], allPoints[s2P])

readlineSync.setDefaultOptions({limit: allPoints});
  while(shipsSunk < shipsInGame){
      console.log(`Prior guesses: ${priorGuesses}`)
      console.log(`Sunken ships: ${shipsSunk}`)
      let playerInput = readlineSync.question("Enter a location to strike ie 'A2'", "Enter in range:" )
      if(priorGuesses.includes(playerInput)){
          console.log("You have already picked this location. Miss!")
          continue
      }
      priorGuesses.push(playerInput);
      if(playerInput === allPoints[s1P]){
          gridValArr[allPoints.indexOf(playerInput)].value = "X"
          if(shipsSunk === 0){
                shipsSunk += 1;
                console.log(`
                Hit. You have sunk a battleship. 1 ship remaining.
                `)
                console.log(printTable (gridValArr, rows, gridSize))
          } else if(shipsSunk=1){ 
              shipsSunk += 1;
              console.log(printTable (gridValArr, rows, gridSize))
              if (readlineSync.keyInYNStrict('You have destroyed all battleships. Would you like to play again? Y/N') === false) {
                  process.exit();} else {battleShip()};            
              }
          }
      
      else if (playerInput === allPoints[s2P]){
            gridValArr[allPoints.indexOf(playerInput)].value = "X"
            if(shipsSunk === 0){
                shipsSunk += 1;
                console.log(`
Hit. You have sunk a battleship. 1 ship remaining.
              `)
                console.log(printTable (gridValArr, rows, gridSize))

          } else if(shipsSunk=1){ 
                shipsSunk += 1;
                console.log(printTable (gridValArr, rows, gridSize))
                if (readlineSync.keyInYNStrict(`
You have destroyed all battleships. Would you like to play again? Y/N
                `) === false) {
                  process.exit();} else {battleShip()};            
              }
      }

      else{
        console.log(`
You have missed!
        `)
        console.log(printTable (gridValArr, rows, gridSize))
    }
  }

}

battleShip()