// Only change code above this line
const product = (...arguments) => {
    let args = [];
	for (let i of arguments) {
		args.push(i);
	}
	return args.reduce((a,b) => a * b,1)
}


// Only change code above this line

console.log(product(1,2));
console.log(product(4,3,10,2));
console.log(product(7));
console.log(product());
module.exports = product;