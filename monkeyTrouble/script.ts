function monkeyTrouble(aSmile: boolean, bSmile: boolean){
    let Smile = aSmile && bSmile
    if (aSmile && bSmile === true) {
      return Smile
    } else if (aSmile === false && bSmile === false) {
      return true
    } else if  (aSmile || bSmile === false && bSmile || aSmile === false){
      return false
    }
  }