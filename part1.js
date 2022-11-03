 
  function battleShip () {
      const rows = ['A', 'B', 'C']
      const columns = [1, 2, 3]
      const allPoints = rows.map(x => columns.map(i => {return x+i})).flat(1)
      const allPointsLength = allPoints.length
      const shipsInGame = 2;
      function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
    var readlineSync = require('readline-sync');
    readlineSync.keyInPause('Press any key to start the game.');
    let s1P = getRandomInt(allPointsLength-1);
    function secondRand (){
        let rand = getRandomInt(allPointsLength-1) 
        while (rand === s1P){
            rand = getRandomInt(allPointsLength-1)
            }
        return rand;
        };   
    let s2P = secondRand()    
    let priorGuesses = []
    let shipsSunk = 0

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
            if(shipsSunk === 0){
                shipsSunk += 1;
                console.log("Hit. You have sunk a battleship. 1 ship remaining.")
            } else if(shipsSunk=1){ 
                shipsSunk += 1;
                if (readlineSync.keyInYNStrict('You have destroyed all battleships. Would you like to play again? Y/N') === false) {
                    process.exit();} else {battleShip()};            
                }
            }
        
        else if (playerInput === allPoints[s2P]){
            if(shipsSunk === 0){
                shipsSunk += 1;
                console.log("Hit. You have sunk a battleship. 1 ship remaining.")
            } else if(shipsSunk=1){ 
                shipsSunk += 1;
                if (readlineSync.keyInYNStrict('You have destroyed all battleships. Would you like to play again? Y/N') === false) {
                    process.exit();} else {battleShip()};            
                }
        }

        else{console.log("You have missed!")}
    }


}


 battleShip()
