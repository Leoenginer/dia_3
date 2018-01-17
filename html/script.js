
let caixaTexto = document.querySelector('input');
let lista = document.querySelector('ul');

function adicionarItem(){
	let li = document.createElement('li');
	li.innerText = caixaTexto.value;
	lista.appendChild(li);

	setTimeout(function(){
		li.style.transform = 'translateX(0)';
	}, 10);


	caixaTexto.value = '';
}

