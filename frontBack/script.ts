function frontBack(str: string): string {
    if (str.length <= 1) {
      return str;
    }
  
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
  
    let middleChars = str;
  
    middleChars = middleChars.replace(firstChar, '');
    middleChars = middleChars.replace(lastChar, '');
  
    return lastChar + middleChars + firstChar;
  }