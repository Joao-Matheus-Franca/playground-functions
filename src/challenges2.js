// Desafio 11
function generatePhoneNumber(parametro) {

  let erro1 = "Array com tamanho incorreto.";
  let erro2 = "não é possível gerar um número de telefone com esses valores"
  let contador = 0;
  let numero = parametro.join("");
  let numeroDDD = '('+numero[0]+numero[1]+')'
  let numeroRestante = numero[2]+numero[3]+numero[4]+numero[5]+numero[6]+"-"+numero[7]+numero[8]+numero[9]+numero[10];

if (parametro.length != 11) {
   return erro1;
}
  for (let i in parametro) {
    contador = 0;
    if (parametro[i] > 9 || parametro[i] < 0) {
      return erro2;
    }
    for (let id in parametro) {
        if (parametro[i] === parametro[id]) {
        contador += 1;
        if (contador >= 3) {
          return erro2;}
      }}}
  return numeroDDD+' '+numeroRestante;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let cond1 = false;
  let cond2 = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB){
    cond1 = true;
  }
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    cond2 = true;
  }
  if (cond1 === true && cond2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 13
function hydrate(parametro) {
  let numeros = /\d+/g;
  let resultado = parametro.match(numeros)
  let contador = 0;
  let frase;
  for (let i in resultado) {
    contador += Number(resultado[i]);
  }
  if (contador === 1) {
    frase = contador + ' copo de água';}
  else if (contador > 1){
    frase = contador + ' copos de água';}
  return frase;
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
