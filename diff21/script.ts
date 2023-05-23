function diff21(n: number){
    let x: number = 21
    let theAnswer = x - n
    if (x < n) {
      theAnswer = (n - x) * 2
    }
    return theAnswer
  }