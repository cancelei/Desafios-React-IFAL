// Inicialização de Sequencia de Exercícios

listaProdutos = [ "Computador", "Telefone", "Mouse", "Teclado" ];

// Início exercício 1

listaProdutos.forEach(element => {
  console.log(element);
});

// Fim exercício 1
// Início exercício 2

console.log("Nesta lista tem:", listaProdutos.length, "Produtos.")

// Fim exercício 2
// Início exercício 3

let indexRemove = listaProdutos.indexOf("Mouse");

if (indexRemove !== -1) {
  listaProdutos.splice(indexRemove, 1);
} else {
  console.log("Item não encontrado.")
}

console.log("Esta é a lista de produtos restantes:", listaProdutos);

// Fim exercício 3
// Início exercício 4

let indexLocalizar = listaProdutos.indexOf("Computador");

if (indexLocalizar !== -1) {
  console.log("Localizando 01:", listaProdutos[indexLocalizar]);
} else {
  console.log("Item não encontrado nesta lista");
}

// Fim exercício 4
// Início exercício 5

let indexRemover = 2

if (indexRemover !== -1) {
  console.log("Item de index", indexRemover, "Correspondente ao item de nome:", listaProdutos[indexRemover], "Finalizando a remoção da Lista")
  listaProdutos.splice(indexRemover, 1);
} else {
  console.log("Item não encontrado, o index de remoção foi: ", indexRemover, ". Correspondente ao item de nome:", listaProdutos[indexRemover]);
}