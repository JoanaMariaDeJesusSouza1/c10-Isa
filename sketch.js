// array e matrizes é uma variiavel que permite armazenar varios valores
//  array       [0]       [1]      [2]      [3]          [4]               
var comida=["sorvete","macarrão","pizza","hamburger","estrogonofe"]
console.log(comida);
console.log(comida[0]);
//para inserir um novo valor no array usamos push.
comida.push("pastel");
comida.push("batata frita");
comida.push("melancia");
console.log(comida);
//para remover o ultimo valor no array usamos o pop.
comida.pop();
console.log(comida);
// para remover, deletar um valor especifico.
//remove mas mantem o espaço no array
delete comida[2];
console.log(comida);
//remove do array
comida.splice(6,1);
console.log(comida);
//acrescenta um elemento espesifico ou troca ele dentro do arraycelular[1]="som";
comida[2]="maça";
console.log(comida);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}