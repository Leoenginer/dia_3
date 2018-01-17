let numero = 100;

function formatarEmReais(umNumero){
	let numeroFormatado = umNumero.toFixed(2);
	numeroFormatado = numeroFormatado.replace('.', '.');
	numeroFormatado = `R$ ${numeroFormatado}`;

	return numeroFormatado;
}
console.log(formatarEmReais(200000));
console.log(formatarEmReais(250000));
