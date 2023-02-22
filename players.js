exports.calculatePlayer = (player1Age, player1Pos, player2Age, player2Pos) => {
    let olderPlayer1 = (player1Age > player2Age) ? true: false;
    let add = true;
    if(player1Pos > player2Pos) {
        add = false;
    }
    let indexStart = player2Pos;
    let indexEnd = player1Pos; 
    if(olderPlayer1){
        indexStart = player1Pos;
        indexEnd = player2Pos;
    }
    while((add && indexStart <= indexEnd) || (indexStart >= indexEnd)) { 
       if(olderPlayer1) {
            if(add) {
                if(indexStart + 2 !== indexEnd && indexStart + 2 < indexEnd) {
                    indexStart = indexStart+2;        
                } else if(indexStart + 1 !== indexEnd){
                    indexStart = indexStart + 1;
                } else {
                    break;
                } 
            } else {
                if(indexStart - 2 !== indexEnd && indexStart - 2 > indexEnd) {
                    indexStart = indexStart-2;        
                } else if(indexStart - 1 !== indexEnd){
                    indexStart = indexStart - 1;
                } else { 
                    break;
                } 
            }
             
       } else {
            if(add) {
                if(indexEnd - 2 !== indexStart && indexEnd - 2 > indexStart) {
                    indexEnd = indexEnd-2;        
                } else if(indexEnd - 1 !== indexStart) {
                    indexEnd = indexEnd - 1;
                } else {
                    break;
                }
            } else {
                if(indexEnd + 2 !== indexStart && indexEnd + 2 < indexStart) {
                    indexEnd = indexEnd+2;        
                } else if(indexEnd + 1 !== indexStart) {
                    indexEnd = indexEnd + 1;
                } else {
                    break;
                }
            }
       }
       olderPlayer1 = !olderPlayer1;
    }
    if(olderPlayer1) {
        return 0;
    } else {
        return 1;
    }   
}

