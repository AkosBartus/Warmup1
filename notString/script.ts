function notString(str: string): string {
    let result = '';
  
    if (str.length >= 3 && str[0] === 'n' && str[1] === 'o' && str[2] === 't') {
      return str;
    } else {
      result = 'not ';

      for (let i = 0; i < str.length; i++) {
        result += str[i];
      }
    }
    return result;
  }