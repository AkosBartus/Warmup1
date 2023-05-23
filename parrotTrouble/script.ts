function parrotTrouble(talking: boolean, hour: number){
    if (talking === true) {
        hour >= 20 && hour <= 7
        if (hour === 7 || hour === 20) {
            return false
        }
        return true
    } else if (talking === false) {
        return false
    }
}