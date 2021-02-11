/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let array = [];
  let set = new Set();
	
  if(arr === undefined) {
    return array;
  }

	for(let item of arr) {
		set.add(item);
	}
  
  array = Array.from(set);
  return array;
}
