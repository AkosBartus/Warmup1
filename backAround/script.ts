function backAround(str: string){
    let lastChar = str[str.length - 1]
    let newString = lastChar

    for (let i = 0; i < str.length; i++) {
        newString += str[i]
    }
    newString += lastChar
    
    return newString
}