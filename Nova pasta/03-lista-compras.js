/**
  1- Criar um programa que soma o valor da lista de compras, considerando o
    valor de cada item e sua quantidade.

    No final, o programa deve imprimir uma mensagem no console:

      O valor total da lista de compras é R$ 100.

  2- Somar também a quantidade de itens da lista e alterar a mensagem
    a ser impressa:

      O valor total da lista de compras é R$ 100 e a quantidade de itens é 23.
*/

let itens = [
  {
    nome: "Banana",
    valor: 2.1,
    quantidade: 1
  },
  {
    nome: "Sabonete",
    valor: 1.3,
    quantidade: 3
  },
  {
    nome: "Doritos",
    valor: 4.7,
    quantidade: 2
  },
  {
    nome: "Pão",
    valor: 0.38,
    quantidade: 10
  },
  {
    nome: "Leite",
    valor: 2.34,
    quantidade: 3
  },
  {
    nome: "Ovos",
    valor: 0.42,
    quantidade: 12
  }
];

let compras = 0;
let quantitens = 0;

for(let umItem of itens){
  compras = compras + (umItem.quantidade * umItem.valor);
}

// length vai informar quantos vetores tem

console.log(`O valor total da lista de compras é R$ ${compras}`);

for(let umItem of itens){
  quantitens = quantitens + umItem.quantidade;
}

console.log(`O valor total da lista de compras é R$ ${compras} e a quantidade de ${quantitens}`);
