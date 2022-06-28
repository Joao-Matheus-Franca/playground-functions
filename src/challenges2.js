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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
