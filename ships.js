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
    
    createGridValues(gridSize, rows, gridValArr);

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

function MyShips(size, shipNumber) {
    this.size = size;
    this.shipNumber = shipNumber;
    this.shipName = `Ship:${shipNumber}.Size:${size}`
    this.placement1;
    this.placement2;
    this.placement3;
    this.placement4;
    this.placement5;
} 

let ship1 = new MyShips(1, 1);
let ship2 = new MyShips(1, 2);
let ship3 = new MyShips(3, 3);
let ship4 = new MyShips(3, 4);
let ship5 = new MyShips(4, 5);
let ship6 = new MyShips(5, 6);

const shipList=[]
shipList.push(ship1)
shipList.push(ship2)
shipList.push(ship3)
shipList.push(ship4)
shipList.push(ship5)
shipList.push(ship6)
console.log(shipList)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
const shipsLocations = []

function setShipsLocations(arrOfShips){
    for(const ship of shipList){
        let startPoint = getRandomInt(allPointsLength-1); 
        let secondPoint = getRandomInt(allPointsLength-1); 
        for(let i = 0 ; i <= ship.size; i++){
            if(i === 0){
                ship.placement1 = startPoint;
                while (shipsLocations.includes(startPoint)){
                    startPoint = getRandomInt(allPointsLength-1)
                    ship.placement1 = startPoint;
                    }
                    break
                }
        
            else if(i === 1){
                while (shipsLocations.includes(secondPoint) || 
                    Math.abs(startPoint - secondPoint) !== 1 ||
                    Math.abs(startPoint - secondPoint) !== gridSize ||
                    Math.abs(startPoint - secondPoint) !== gridSize + 1               
                    ){
                    secondPoint = getRandomInt(allPointsLength-1)
                    }
                    ship.placement2 = secondPoint;}
                    
                    else if(i === 2){
                        ship.placement3 = ship.placement2 + secondPoint;
                    }
                    else if(i === 3){
                        ship.placement4 = ship.placement3 + secondPoint;
            }
            else if(i === 4){
                ship.placement5 = ship.placement4 + secondPoint;
            }
            else if(i === 5){
                ship.placement6 = ship.placement5 + secondPoint;
            }
        }
    }
}

setShipsLocations(shipList)
console.log(ship1)
console.log(ship2)
console.log(ship3)
console.log(ship4)
console.log(ship5)
console.log(ship6)



}

battleShip()
