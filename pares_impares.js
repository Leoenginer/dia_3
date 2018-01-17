let numeros = [10, 15, 1, 3, 36];
let pares = [];
let impares = [];

for(let numero of numeros){
	if(numero % 2 == 0){
		pares.push(numero);
	}else{
		impares.push(numero);
	}
}
console.log(pares);
console.log(impares);