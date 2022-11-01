const gridValArr = [
    { column: 1, row: 'A', value: 'O', name: 'A1' },
    { column: 1, row: 'B', value: 'O', name: 'B1' },
    { column: 1, row: 'C', value: 'O', name: 'C1' },
    { column: 1, row: 'D', value: 'O', name: 'D1' },
    { column: 1, row: 'E', value: 'O', name: 'E1' },
    { column: 1, row: 'F', value: 'O', name: 'F1' },
    { column: 1, row: 'G', value: 'O', name: 'G1' },
    { column: 1, row: 'H', value: 'O', name: 'H1' },
    { column: 1, row: 'I', value: 'O', name: 'I1' },
    { column: 1, row: 'J', value: 'O', name: 'J1' },
    { column: 2, row: 'A', value: 'O', name: 'A2' },
    { column: 2, row: 'B', value: 'O', name: 'B2' },
    { column: 2, row: 'C', value: 'O', name: 'C2' },
    { column: 2, row: 'D', value: 'O', name: 'D2' },
    { column: 2, row: 'E', value: 'O', name: 'E2' },
    { column: 2, row: 'F', value: 'O', name: 'F2' },
    { column: 2, row: 'G', value: 'O', name: 'G2' },
    { column: 2, row: 'H', value: 'O', name: 'H2' },
    { column: 2, row: 'I', value: 'O', name: 'I2' },
    { column: 2, row: 'J', value: 'O', name: 'J2' },
    { column: 3, row: 'A', value: 'O', name: 'A3' },
    { column: 3, row: 'B', value: 'O', name: 'B3' },
    { column: 3, row: 'C', value: 'O', name: 'C3' },
    { column: 3, row: 'F', value: 'O', name: 'F3' },
    { column: 3, row: 'D', value: 'O', name: 'D3' },
    { column: 3, row: 'G', value: 'O', name: 'G3' },
    { column: 3, row: 'H', value: 'O', name: 'H3' },
    { column: 3, row: 'I', value: 'O', name: 'I3' },
    { column: 3, row: 'J', value: 'O', name: 'J3' },
    { column: 4, row: 'A', value: 'O', name: 'A4' },
    { column: 4, row: 'B', value: 'O', name: 'B4' },
    { column: 4, row: 'C', value: 'O', name: 'C4' },
    { column: 4, row: 'D', value: 'O', name: 'D4' },
    { column: 4, row: 'E', value: 'O', name: 'E4' },
    { column: 4, row: 'F', value: 'O', name: 'F4' },
    { column: 4, row: 'G', value: 'O', name: 'G4' },
    { column: 4, row: 'H', value: 'O', name: 'H4' },
    { column: 3, row: 'E', value: 'O', name: 'E3' },
    { column: 4, row: 'I', value: 'O', name: 'I4' },
    { column: 4, row: 'J', value: 'O', name: 'J4' },
    { column: 5, row: 'A', value: 'O', name: 'A5' },
    { column: 5, row: 'B', value: 'O', name: 'B5' },
    { column: 5, row: 'C', value: 'O', name: 'C5' },
    { column: 5, row: 'D', value: 'O', name: 'D5' },
    { column: 5, row: 'E', value: 'O', name: 'E5' },
    { column: 5, row: 'F', value: 'O', name: 'F5' },
    { column: 5, row: 'G', value: 'O', name: 'G5' },
    { column: 5, row: 'H', value: 'O', name: 'H5' },
    { column: 5, row: 'I', value: 'O', name: 'I5' },
    { column: 5, row: 'J', value: 'O', name: 'J5' },
    { column: 6, row: 'A', value: 'O', name: 'A6' },
    { column: 6, row: 'B', value: 'O', name: 'B6' },
    { column: 6, row: 'C', value: 'O', name: 'C6' },
    { column: 6, row: 'D', value: 'O', name: 'D6' },
    { column: 6, row: 'E', value: 'O', name: 'E6' },
    { column: 6, row: 'F', value: 'O', name: 'F6' },
    { column: 6, row: 'G', value: 'O', name: 'G6' },
    { column: 6, row: 'H', value: 'O', name: 'H6' },
    { column: 6, row: 'I', value: 'O', name: 'I6' },
    { column: 6, row: 'J', value: 'O', name: 'J6' },
    { column: 7, row: 'A', value: 'O', name: 'A7' },
    { column: 7, row: 'B', value: 'O', name: 'B7' },
    { column: 7, row: 'C', value: 'O', name: 'C7' },
    { column: 7, row: 'D', value: 'O', name: 'D7' },
    { column: 7, row: 'E', value: 'O', name: 'E7' },
    { column: 7, row: 'F', value: 'O', name: 'F7' },
    { column: 7, row: 'G', value: 'O', name: 'G7' },
    { column: 7, row: 'H', value: 'O', name: 'H7' },
    { column: 7, row: 'I', value: 'O', name: 'I7' },
    { column: 7, row: 'J', value: 'O', name: 'J7' },
    { column: 8, row: 'A', value: 'O', name: 'A8' },
    { column: 8, row: 'B', value: 'O', name: 'B8' },
    { column: 8, row: 'C', value: 'O', name: 'C8' },
    { column: 8, row: 'D', value: 'O', name: 'D8' },
    { column: 8, row: 'E', value: 'O', name: 'E8' },
    { column: 8, row: 'F', value: 'O', name: 'F8' },
    { column: 8, row: 'G', value: 'O', name: 'G8' },
    { column: 8, row: 'H', value: 'O', name: 'H8' },
    { column: 8, row: 'I', value: 'O', name: 'I8' },
    { column: 8, row: 'J', value: 'O', name: 'J8' },
    { column: 9, row: 'A', value: 'O', name: 'A9' },
    { column: 9, row: 'B', value: 'O', name: 'B9' },
    { column: 9, row: 'C', value: 'O', name: 'C9' },
    { column: 9, row: 'D', value: 'O', name: 'D9' },
    { column: 9, row: 'E', value: 'O', name: 'E9' },
    { column: 9, row: 'F', value: 'O', name: 'F9' },
    { column: 9, row: 'G', value: 'O', name: 'G9' },
    { column: 9, row: 'H', value: 'O', name: 'H9' },
    { column: 9, row: 'I', value: 'O', name: 'I9' },
    { column: 9, row: 'J', value: 'O', name: 'J9' },
    { column: 10, row: 'A', value: 'O', name: 'A10' },
    { column: 10, row: 'B', value: 'O', name: 'B10' },
    { column: 10, row: 'C', value: 'O', name: 'C10' },
    { column: 10, row: 'D', value: 'O', name: 'D10' },
    { column: 10, row: 'E', value: 'O', name: 'E10' },
    { column: 10, row: 'F', value: 'O', name: 'F10' },
    { column: 10, row: 'G', value: 'O', name: 'G10' },
    { column: 10, row: 'H', value: 'O', name: 'H10' },
    { column: 10, row: 'I', value: 'O', name: 'I10' },
    { column: 10, row: 'J', value: 'O', name: 'J10' }
  ]
const arrOfShips = [
    { size: 2, shipNumber: 1, shipName: 'Ship:1.Size:1' },
    { size: 3, shipNumber: 2, shipName: 'Ship:2.Size:1' },
    { size: 3, shipNumber: 3, shipName: 'Ship:3.Size:3' },
    { size: 3, shipNumber: 4, shipName: 'Ship:4.Size:3' },
    { size: 4, shipNumber: 5, shipName: 'Ship:5.Size:4' },
    { size: 5, shipNumber: 6, shipName: 'Ship:6.Size:5' }
  ]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let gridSize = 10
const allPoints = gridValArr.map(point => point.name)
const allPointsLength = allPoints.length
let priorGuesses = []
let shipsSunk = 0

const shipsLocations = function setShipsLocations(arrOfShips){
    let shipsLocations = []
    for(const ship of arrOfShips){
        let curShipLoc = []
        let directionAllowed;
        for(let i = 0 ; i < ship.size; i++){
            let startPoint = getRandomInt(allPointsLength-1);
            let secondPoint = getRandomInt(allPointsLength-1); 
            if(i === 0){
                ship.placement1 = startPoint;
                while (shipsLocations.includes(startPoint) && curShipLoc.includes(startPoint)){
                    startPoint = getRandomInt(allPointsLength-1)
                    ship.placement1 = startPoint;
                    }
                curShipLoc[0]=ship.placement1;
                    
                if(ship.placement1%10>=ship.size && 10-(ship.placement1%10)+1>=ship.size){
                    directionAllowed = "all" 
                }
                else if(ship.placement1%10<=ship.size && 10-(ship.placement1%10)+1>=ship.size){
                    directionAllowed = "forward"
                }
                else if(ship.placement1%10>=ship.size && 10-(ship.placement1%10)+1<=ship.size){
                    directionAllowed = "backward"
                }      
                console.log(directionAllowed) 
                console.log(i)
                console.log(curShipLoc)  
            }
            else if(i === 1){
                ship.placement2 = secondPoint;
                console.log(`wheni=1DA: ${directionAllowed}`)
                console.log(`wheni=1SPA: ${secondPoint}`) 

                if(directionAllowed === "all"){
                    console.log("all loop")
                    while (shipsLocations.includes(secondPoint) ||
                        curShipLoc.includes(secondPoint)    
                        ||
                        (Math.abs(ship.placement2-ship.placement1) !== 1 &&
                        Math.abs(ship.placement2-ship.placement1) !== gridSize &&
                        Math.abs(ship.placement2-ship.placement1) !== (gridSize+1) 
                        )
                    ){secondPoint = getRandomInt(allPointsLength-1)
                      ship.placement2 = secondPoint;
                        }
                    }
                else if(directionAllowed === "forward"){
                    console.log("forward loop")
                    while (shipsLocations.includes(secondPoint) ||
                        curShipLoc.includes(secondPoint) ||
                        (ship.placement2-ship.placement1 !== 1 &&
                        ship.placement2-ship.placement1 !== gridSize &&
                        ship.placement2-ship.placement1 !== (gridSize+1) 
                        )
                    ){secondPoint = getRandomInt(allPointsLength-1)
                        ship.placement2 = secondPoint;
                        }
                    }
                else if(directionAllowed === "backward"){
                    console.log("backward loop")
                    while (shipsLocations.includes(secondPoint) ||
                         curShipLoc.includes(secondPoint) ||
                        (ship.placement2-ship.placement1 !== -1 &&
                        ship.placement2-ship.placement1 !== -gridSize &&
                        ship.placement2-ship.placement1 !== -(gridSize+1) 
                        )
                    ){secondPoint = getRandomInt(allPointsLength-1)
                        ship.placement2 = secondPoint;
                        }
                    }
                curShipLoc[1]=ship.placement2; 
                console.log(i)
                console.log(curShipLoc)  
            }
            else if(i === 2){
                ship.placement3 =  ship.placement2+(ship.placement2-ship.placement1)
                curShipLoc[2]=ship.placement3;    
                if(ship.placement3 > allPointsLength || ship.placement3 < 0){
                    i = -1;
                    curShipLoc = [];
                }
                console.log(i)
                console.log(curShipLoc)  
            }
            else if(i === 3){
                ship.placement4 =  ship.placement3+(ship.placement2-ship.placement1)
                curShipLoc[3]=ship.placement4;   
                if(ship.placement4 > allPointsLength || ship.placement4 < 0){
                    i = -1;
                    curShipLoc = [];
                }
                console.log(i)
                console.log(curShipLoc)  
            }
            else if(i === 4){
                ship.placement5 =  ship.placement4+(ship.placement2-ship.placement1) 
                curShipLoc[4]=ship.placement5;   
                if(ship.placement5 > allPointsLength || ship.placement5 < 0){
                    i = -1;
                    curShipLoc = [];
                }
                console.log(i)
                console.log(curShipLoc)  
            }
            else if(i === 5){
                ship.placement6 =  ship.placement5+(ship.placement2-ship.placement1)
                curShipLoc[5]=ship.placement5;    
                if(ship.placement6 > allPointsLength || ship.placement6 < 0){
                    i = -1;
                    curShipLoc = [];
                }
                console.log(i)
                console.log(curShipLoc)  
            }
        }
        shipsLocations = shipsLocations.concat(curShipLoc)
    }

    return shipsLocations
}


console.log(shipsLocations(arrOfShips))
console.log(arrOfShips)

// function setShipsLocations(arrOfShips){
//     for(const ship of shipList){
//         let startPoint = getRandomInt(allPointsLength-1); 
//         let secondPoint = getRandomInt(allPointsLength-1); 
//         for(let i = 0 ; i <= ship.size; i++){
//             if(i === 0){
//                 ship.placement1 = startPoint;
//                 while (shipsLocations.includes(startPoint)){
//                     console.log(shipsLocations.includes(startPoint))
//                     startPoint = getRandomInt(allPointsLength-1)
//                     ship.placement1 = startPoint;
//                     }
//                 }
        
//             else if(i === 1){
//                 while (shipsLocations.includes(secondPoint) || 
//                     Math.abs(startPoint - secondPoint) !== 1 ||
//                     Math.abs(startPoint - secondPoint) !== gridSize ||
//                     Math.abs(startPoint - secondPoint) !== gridSize + 1               
//                     ){
//                     secondPoint = getRandomInt(allPointsLength-1)
//                     }
//                     ship.placement2 = secondPoint;}
                    
//                     else if(i === 2){
//                         ship.placement3 = ship.placement2 + secondPoint;
//                     }
//                     else if(i === 3){
//                         ship.placement4 = ship.placement3 + secondPoint;
//             }
//             else if(i === 4){
//                 ship.placement5 = ship.placement4 + secondPoint;
//             }
//             else if(i === 5){
//                 ship.placement6 = ship.placement5 + secondPoint;
//             }
//         }
//     }