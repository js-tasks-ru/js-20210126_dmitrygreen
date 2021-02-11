/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(field) {
	let path = field.split('.');
	
	return obj => {
		if(!Object.keys(obj).length) return;
		
		let result = obj;
		
		path.forEach((item) => {
		  result = result[item];
		});
		
	  return result;
	}
}
