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
function encode(codigo) {
let array = [];
for (let i in codigo) {
   array.push(codigo[i]);}
for (let id in array) {
  if (array[id] === 'a') {
    array[id] = 1;
  }
  else if (array[id] === 'e') {
    array[id] = 2;
  }
  else if (array[id] === 'i') {
    array[id] = 3;
  }
  else if (array[id] === 'o') {
    array[id] = 4;
  }
  else if (array[id] === 'u') {
    array[id] = 5;
  }
}
return array.join("");
}
  
function decode(codigo) {
  let array = [];
for (let i in codigo) {
   array.push(codigo[i]);}
for (let id in array) {
  if (array[id] === '1') {
    array[id] = 'a';
  }
  else if (array[id] === '2') {
    array[id] = 'e';
  }
  else if (array[id] === '3') {
    array[id] = 'i';
  }
  else if (array[id] === '4') {
    array[id] = 'o';
  }
  else if (array[id] === '5') {
    array[id] = 'u';
  }
}
return array.join("");
}

// Desafio 10
function techList(parametro01, parametro02) {
  let lista = [];
  let ordenado = parametro01.sort();
  let erro = 'Vazio!'
  if (parametro01.length > 0){
  for (let i in ordenado) {
    lista.push({tech: ordenado[i],name:'Lucas'});
}
  return lista;
}
  else if (parametro01.length === 0)
  {
    return erro; 
  }
}


let array = [];
array.push({nome:'joao'});
console.log(array);
 

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
