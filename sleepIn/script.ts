function sleepIn(weekday: boolean, vacation: boolean){
    let theAnswer = weekday && vacation
    if (theAnswer === true) {
        return theAnswer
    } else if (weekday === true && vacation === false) {
        return false
    } else if (theAnswer === false) {
        return true
    } else {
        return theAnswer
    }
}