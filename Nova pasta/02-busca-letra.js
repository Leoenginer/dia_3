/**
  Crie um programa que busque uma letra dentro de uma frase e imprima a
  quantidade de ocorrências dela, da seguinte forma:

  Foram encontradas 4 ocorrências da letra "a" na frase "Colocar dois pratos de trigo para dois tigres".

  Não foram encontradas ocorrências da letra "a" na frase "Colocar dois pratos de trigo para dois tigres".

  Dica: Em javascript, os caracteres de uma string podem ser acessados usando a notação de vetor.
  Por exemplo: considerando que variável palavra contém a string "Xablau", o valor de palavra[2] é "b" 
*/
let frase = "Colocar dois pratos de trigo para dois tigres";
let letraProcurada = 'i';
let contador = 0;

for(let letra of frase){
	// ele fala que tem que fazer alguma coisa dentro da frase
	if(letraProcurada == letra){
		//ele fala que pra cada letraProcurada tiver igual na frase é pra contar mais 1
		contador += 1;
	}
	
}

console.log(contador);