
function battleShip(){

 /////////////////GLOBAL VARIABLES/////////////////////////////
var readlineSync = require('readline-sync');
const rows = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J']
const gridSize = readlineSync.question("How large should the grid be?",
                 {limit: [1,2,3,4,5,6,7,8,9,10],  limitMessage:"Select a number between 1-10"});

const gridValArr = [];
let priorGuesses = []
let shipsSunk = 0
const shipsInGame = 5;
let shipsLocations = []
let arrOfShips=[]

////////////////////////////////////////////////////

/////////////////CREATE GRID VALUES/////////////////////////////
function GridObj (column, row, value) {
    this.column = column;
    this.row = row;
    this.value = value; 
    this.name = `${row}${column}`
};

function createGridValues (gridSize, rows, gridValArr){
    count = 0;
    for(let i = 0; i < gridSize; i++){
        for(let j = 1; j <= gridSize; j++){
            gridValArr[count] = new GridObj(j, rows[i], " ");
            count++
        }
    }
}

createGridValues(gridSize, rows, gridValArr);
const allPoints = gridValArr.map(point => point.name)
const allPointsLength = allPoints.length
////////////////////////////////////////////////////

/////////////////PRINT TABLE/////////////////////////////
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
        let rowOutput = `${rows[i]} |`;
        let dashes = `   `
            for(let item of gridValArr){
                if(item.name.includes(rows[i])){
                    rowOutput +=` ${item.value} |`;
                    dashes += `----`
                }
            }
        console.log(rowOutput)
        console.log(dashes)
    } return "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
}

console.log(printTable (gridValArr, rows, gridSize))
////////////////////////////////////////////////////

/////////////////CREATE SHIPS/////////////////////////////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class MyShips{
    constructor (size, shipNumber) {
    this.size = size;
    this.shipNumber = shipNumber;
    this.shipName = `Battleship:${this.shipNumber}`
    this.hitCount = 0}
    hit () {
        this.hitCount += 1;
        if(this.hitCount === this.size){
            shipsSunk += 1;
            console.log(`${this.shipName} destroyed!`)
        }
        else{console.log(`${this.shipName} hit!`)}
        }
    } 


let ship1 = new MyShips(2, 1);
let ship2 = new MyShips(3, 2);
let ship3 = new MyShips(3, 3);
let ship4 = new MyShips(4, 4);
let ship5 = new MyShips(5, 5);

arrOfShips.push(ship1)
arrOfShips.push(ship2)
arrOfShips.push(ship3)
arrOfShips.push(ship4)
arrOfShips.push(ship5)

////////////////////////////////////////////////////

/////////////////PLACE SHIPS/////////////////////////////
function setShipsLocations(arrOfShips){
    for(const ship of arrOfShips){
        let curShipLoc = []
        for(let i = 0 ; i < ship.size; i++){
            if(i === 0){
                ship.placement1 = getRandomInt(allPointsLength-1);
                while (shipsLocations.includes(ship.placement1) || curShipLoc.includes(ship.placement1)){
                       ship.placement1 = getRandomInt(allPointsLength-1);
                    }
                curShipLoc[0]=ship.placement1; 
            }
            else if(i === 1){
                let nw = ship.placement1-gridSize-1
                let n = ship.placement1- +gridSize
                let ne = ship.placement1- +gridSize + 1
                let w = ship.placement1-1
                let e = ship.placement1+1
                let sw = ship.placement1+ +gridSize - 1
                let s = +ship.placement1+ +gridSize
                let se = +ship.placement1+ +gridSize + 1
                let fDirArr = []
                let up = Math.floor(ship.placement1/gridSize)+1 >= ship.size
                let down = gridSize - Math.floor(ship.placement1/gridSize) >= ship.size
                let left = ship.placement1%gridSize >= ship.size
                let right = gridSize - ship.placement1%gridSize + 1 > ship.size
                if(up && left){fDirArr.push(nw)}
                if(up){fDirArr.push(n)}
                if(up && right){fDirArr.push(ne)}
                if(left){fDirArr.push(w)}
                if(right){fDirArr.push(e)}
                if(left && down){fDirArr.push(sw)}
                if(down){fDirArr.push(s)}
                if(down && right){fDirArr.push(se)}
                ship.placement2 = fDirArr[getRandomInt(fDirArr.length-1)];

                while (shipsLocations.includes(ship.placement2) ||
                        curShipLoc.includes(ship.placement2)                         
                        ){
                        fDirArr.splice(fDirArr.indexOf(ship.placement2),1)
                        ship.placement2 = fDirArr[getRandomInt(fDirArr.length-1)];
                      if(fDirArr.length === 0){
                            i = -1;
                            curShipLoc = [];
                        }    
                    }
                curShipLoc[1]=ship.placement2;                                 
            }
            else if(i === 2){
                ship.placement3 =  ship.placement2+(ship.placement2-ship.placement1)
                if( curShipLoc.includes(ship.placement3) ||
                    shipsLocations.includes(ship.placement3) 
                    ){ 
                        i = -1;
                        curShipLoc = [];
                    }
                else{curShipLoc[2]=ship.placement3;}
            }
            else if(i === 3){
                ship.placement4 =  ship.placement3+(ship.placement2-ship.placement1)
                if( curShipLoc.includes(ship.placement4) ||
                    shipsLocations.includes(ship.placement4)
                    ){
                        i = -1;
                        curShipLoc = [];
                    }
                else{curShipLoc[3]=ship.placement4;}
            }
            else if(i === 4){
                ship.placement5 =  ship.placement4+(ship.placement2-ship.placement1) 
                if( curShipLoc.includes(ship.placement5) ||
                    shipsLocations.includes(ship.placement5)
                    ){
                        i = -1;
                        curShipLoc = [];
                    }
                else{curShipLoc[4]=ship.placement5;}
            }            
        }
        shipsLocations = shipsLocations.concat(curShipLoc)
    }

    return shipsLocations
}
setShipsLocations(arrOfShips)
////////////////////////////////////////////////////

/////////////////GAME INTERFACE/////////////////////////////
function handleUserHit(userEntry){
    arrOfShips.forEach(a => {if(userEntry === a.placement1 || userEntry === a.placement2
        || userEntry === a.placement3|| userEntry === a.placement4|| userEntry === a.placement5)
        {a.hit()}})
}

readlineSync.setDefaultOptions({limit: allPoints});
  while(shipsSunk < shipsInGame){
      console.log(`Sunken ships: ${shipsSunk}`)
      console.log(arrOfShips.forEach(e=> console.log(`${e.shipName}: ${e.hitCount}/${e.size}`)))
      let playerInput = readlineSync.question("Enter a location to strike ie 'A2'", {limitMessage:"INVALID ENTRY. You have entered a value outside the table range."})
      if(priorGuesses.includes(playerInput)){
          console.log("You have already picked this location. Miss!")
          continue
      }
      if(allPoints.indexOf(playerInput) === -1){
        console.log("INVALID ENTRY. You have entered a value outside the table range.")
        continue}
      priorGuesses.push(playerInput);
      if(shipsLocations.includes(allPoints.indexOf(playerInput))){
          gridValArr[allPoints.indexOf(playerInput)].value = "X"
          handleUserHit(allPoints.indexOf(playerInput))
          console.log(printTable (gridValArr, rows, gridSize))
          } 
      else{
        gridValArr[allPoints.indexOf(playerInput)].value = "O"
        console.log(`
You have missed!
        `)
        console.log(printTable (gridValArr, rows, gridSize))
    }
    if(shipsSunk === shipsInGame){
        if (readlineSync.keyInYNStrict(`
    You have destroyed all battleships. Would you like to play again? Y/N
                    `) === false) {
        process.exit();} 
        else {battleShip()};            
    }
  }

}
battleShip()