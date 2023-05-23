function posNeg(a: number, b: number, negative: boolean){
  if (negative === true) {
    (a > 0 && b < 0 || a < 0 && b > 0)
    if (a < 0 && b < 0) {
      if (a > 0 && b > 0) {
        return false
      }
      return true
    }
    return false
  }
  if (negative === false) {
    (a > 0 && b < 0 || a < 0 && b > 0)
    if (a > 0 && b > 0 || a < 0 && b < 0) {
      return false
    }
    return true
  }
}