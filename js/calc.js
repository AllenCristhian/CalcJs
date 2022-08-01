//Apresentar alert com data e hora

onload = hourMsg();
function hourMsg () {
  let dthr = new Date;
  let hr = dthr.getHours();

  let returnPage = document.getElementById('dtHs');

  returnPage.innerHTML = dthr.getDate() + '/' + (dthr.getMonth() + 1) + '/' + dthr.getFullYear() + ' - ' + dthr.getHours() + ':' + dthr.getMinutes()

  const interval = setInterval(() => {
    hourMsg()
  }, 1000)
}

let btnCalc = document.getElementById('calc');
let btnClear = document.getElementById('clearScreen');

let btnNum1 = document.getElementById('num1');
let btnNum2 = document.getElementById('num2');
let btnNum3 = document.getElementById('num3');
let btnNum4 = document.getElementById('num4');
let btnNum5 = document.getElementById('num5');
let btnNum6 = document.getElementById('num6');
let btnNum7 = document.getElementById('num7');
let btnNum8 = document.getElementById('num8');
let btnNum9 = document.getElementById('num9');
let btnNum0 = document.getElementById('num0');
let btnAcaoSoma = document.getElementById('btnSoma');
let btnAcaoSub = document.getElementById('btnSub');
let btnAcaoMult = document.getElementById('btnMult');
let btnAcaoDiv = document.getElementById('btnDiv');
let btnAcaoExpo = document.getElementById('btnExpo');
let btnAcaoPoint = document.getElementById('btnPoint');
let btnAcaoVirg = document.getElementById('btnVirg');
let btnAcaoPerc = document.getElementById('btnPerc');



btnCalc.addEventListener('click', function () {
  console.log('Botão de Igual para fazer o calculo da equação')
})

btnClear.addEventListener('click', function () {
  console.log('Botão para Limpeza de Tela')
})



btnNum1.addEventListener('click', function () {
  console.log(btnNum1.value)
  incrementVlr(1)
})

btnNum2.addEventListener('click', function () {
  console.log(btnNum2.value)
  incrementVlr(2)
})

btnNum3.addEventListener('click', function () {
  console.log(btnNum3.value)
  incrementVlr(3)
})

btnNum4.addEventListener('click', function () {
  console.log(btnNum4.value)
  incrementVlr(4)
})

btnNum5.addEventListener('click', function () {
  console.log(btnNum5.value)
  incrementVlr(5)
})

btnNum6.addEventListener('click', function () {
  console.log(btnNum6.value)
  incrementVlr(6)
})

btnNum7.addEventListener('click', function () {
  console.log(btnNum7.value)
  incrementVlr(7)
})

btnNum8.addEventListener('click', function () {
  console.log(btnNum8.value)
  incrementVlr(8)
})

btnNum9.addEventListener('click', function () {
  console.log(btnNum9.value)
  incrementVlr(9)
})

btnNum0.addEventListener('click', function () {
  console.log(btnNum0.value)
  incrementVlr(0)
})

btnAcaoSoma.addEventListener('click', function () {
  console.log(btnAcaoSoma.value)
  incrementVlr('+')
})

btnAcaoSub.addEventListener('click', function () {
  console.log(btnAcaoSub.value)
  incrementVlr('-')
})

btnAcaoMult.addEventListener('click', function () {
  console.log(btnAcaoMult.value)
  incrementVlr('*')
})

btnAcaoDiv.addEventListener('click', function () {
  console.log(btnAcaoDiv.value)
  incrementVlr('÷')
})

btnAcaoExpo.addEventListener('click', function () {
  console.log(btnAcaoExpo.value)
  incrementVlr('^')
})

btnAcaoPoint.addEventListener('click', function () {
  console.log(btnAcaoPoint.value)
  incrementVlr('.')
})

btnAcaoVirg.addEventListener('click', function () {
  console.log(btnAcaoVirg.value)
  incrementVlr(',')
})

btnAcaoPerc.addEventListener('click', function () {
  console.log(btnAcaoPerc.value)
  incrementVlr('%')
})

function incrementVlr (vl) {
  const returnScreen = document.getElementById('visor');

  let vlr = document.getElementById(vl);

  console.log(vlr, typeof vlr)

  returnScreen = returnScreen + vlr;

}

function clearScreen () {}

function calculator () {}
