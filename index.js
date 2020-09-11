const arrOfNums = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];

let max = 0;
let sum = 0;
let min = 0;

// for (let i = 0; i < arrOfNums.length; i++) {
// 	const number = arrOfNums[i];
// 	// console.log('i - ', i);
// 	// console.log('number by index - ', arrOfNums[i]);
// 	if (arrOfNums[i] > max) {
// 		max = arrOfNums[i]
//   	}
//   	if (min > arrOfNums[i]) {
// 	    min = arrOfNums[i]
// 	}
// 	sum = sum + arrOfNums[i]
// }



function findValues(arr) {

}

findValues(arrOfNums);

let i = 0;

do {
	
	if (arrOfNums[i] > max) {
		max = arrOfNums[i]
	}
	if (min > arrOfNums[i]) {
		min = arrOfNums[i]
	} 
	sum = sum + arrOfNums[i]
	i+= 1;		
} while (i < arrOfNums.length)
		
console.log('max: ', max);
console.log('min: ', min);
console.log('sum: ', sum);





 