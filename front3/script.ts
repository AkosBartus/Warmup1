function front3(str: string){
    let newString: string = ''
  
    for (let i = 0; i < 3; i++) {
        if (str.length > i) {
            newString += str[i]
        }
    }
    return newString + newString + newString
}