function nearHundred(n: number){
  let theAnswer: boolean
  if (n >= 90 && n <= 110 || n >= 190 && n <= 210) {
    theAnswer = true
    return theAnswer
  } else {
    theAnswer = false
    return theAnswer
  }
}