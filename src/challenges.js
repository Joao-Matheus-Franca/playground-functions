// Desafio 1
function compareTrue(parametro01, parametro02) {
  if (parametro01 === true && parametro02 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura)/2;
  return area;
}

// Desafio 3
function splitSentence(parametro) {
  let frase = parametro.split(" ");
  return frase;
}

// Desafio 4
function concatName(parametro) {
  let frase = parametro[parametro.length - 1] + ', ' + parametro[0];
  return frase; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosV = wins * 3;
  let pontosT = ties * 1;
  let totalDePontos = pontosV + pontosT;
  return totalDePontos;
}

// Desafio 6
function highestCount(parametro) {
  let maiorNumero = parametro[0];
  let arrayM = [];
  for (let i in parametro) {
    if (maiorNumero < parametro[i]){
      maiorNumero = parametro[i];
    }
  } 
  for (let idx in parametro) {
    if (maiorNumero === parametro[idx]){
      arrayM.push(parametro[idx])
    }
  }
  return arrayM.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let dist01 = 0;
 let dist02 = 0;
 let gato01 = 'cat1';
 let gato02 = 'cat2';
 let empate = 'os gatos trombam e o rato foge'
if (mouse > cat1 && mouse > cat2){
   dist01 = mouse - cat1;
   dist02 = mouse - cat2;
}
else if (mouse > cat1 && mouse < cat2) {
  dist01 = mouse - cat1;
  dist02 = cat2 - mouse;
}
else if (mouse < cat1 && mouse > cat2){
  dist01 = cat1 - mouse; 
  dist02 = mouse - cat2; 
}
else if (mouse < cat1 && mouse < cat2) {
  dist01 = cat1 - mouse;
  dist02 = cat2 - mouse
} 
if (dist01 > dist02) {
  return gato02
}
else if (dist01 < dist02) {
  return gato01
}
else if (dist01 === dist02) {
  return empate;
}
}

// Desafio 8
function fizzBuzz(parametro) { 
  let total = [];
  for (let i in parametro) {
    if (parametro[i] % 3 === 0 && parametro[i] % 5 === 0) {
      total.push('fizzBuzz')}
    else if (parametro[i] % 5 === 0) {
      total.push('buzz');
    }
    else if (parametro[i] % 3 === 0) {
      total.push('fizz');
  }
    else if (parametro[i] % 3 > 0 && parametro[i] % 5 > 0) {
      total.push('bug!')
    }
}
return total;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
