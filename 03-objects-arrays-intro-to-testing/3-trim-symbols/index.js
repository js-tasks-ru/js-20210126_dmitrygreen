/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if(size === 0) {
    return '';
  }

  if(size === undefined) {
    return string;
  }
  
  let repeatCounter = 1;
	let result = string[0];
	
	for(let i = 1; i < string.length; i++) {
		let prevSymbol = string[i-1];
		let currentSymbol = string[i];
	
		if(prevSymbol != currentSymbol) {
			result += currentSymbol;
			repeatCounter = 1;
		}
	
		if(prevSymbol == currentSymbol && repeatCounter != size) {
			result += currentSymbol;
		  ++repeatCounter;
		}
				
		if(prevSymbol != currentSymbol && repeatCounter == size) {
			repeatCounter = 1;
		}
	}

	return result;
}
