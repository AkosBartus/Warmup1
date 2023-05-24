function missingChar(str: string, n: number): string {
    let newString = '';
  
    for (let i = 0; i < str.length; i++) {
      if (i !== n) {
        newString += str[i];
      }
    }
    return newString;
  }