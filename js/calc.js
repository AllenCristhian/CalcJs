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

const visor = document.getElementById('visor')

let numI;
let ope;
let numF

btnCalc.addEventListener('click', function () {
  calculator()
})

btnClear.addEventListener('click', function () {
  clearScreen()
})



btnNum1.addEventListener('click', function (e) {
  incrementVlr(this.value)
})

btnNum2.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum3.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum4.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum5.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum6.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum7.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum8.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum9.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnNum0.addEventListener('click', function () {
  incrementVlr(this.value)
})

btnAcaoSoma.addEventListener('click', function () {
  operator(this.value)
})

btnAcaoSub.addEventListener('click', function () {
  operator(this.value)
})

btnAcaoMult.addEventListener('click', function () {
  operator(this.value)
})

btnAcaoDiv.addEventListener('click', function () {
  operator(this.value)
})

btnAcaoExpo.addEventListener('click', function () {
  operator(this.value)
})

function incrementVlr (vl) {
  visor.value += vl
}

function clearScreen () {
  visor.value = ''
}

function calculator () {

  numF = visor.value;

  if (ope == '+') {
    let res = Number(numI) + Number(numF)

    visor.value = res

  } else
  if (ope == '-') {
    let res = Number(numI) - Number(numF)

    visor.value = res

  } else 
  if (ope == '*') {
    let res = Number(numI) * Number(numF)

    visor.value = res

  } else 
  if (ope == '÷') {
    let res = Number(numI) / Number(numF)

    visor.value = res

  } else 
  if (ope == '^') {
    let res;

    for (let i = 0; i < numF; i++) {
      res = (Number(numI) * Number(numI)) * i;
    }

    visor.value = res

  }

}

function operator (op) {
  ope = op
  numI = visor.value

  clearScreen ()

}
