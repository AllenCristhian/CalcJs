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
let btnAcaoDelet = document.getElementById('btnDelet');
let btnAcaoVirg = document.getElementById('btnVirg');
let btnAcaoPerc = document.getElementById('btnPerc');



btnCalc.addEventListener('click', function () {
  calculator()
})

btnClear.addEventListener('click', function () {
  clearScreen()
})



btnNum1.addEventListener('click', function () {
  console.log(btnNum1.value)
  incrementVlr(this.value)
})

btnNum2.addEventListener('click', function () {
  console.log(btnNum2.value)
  incrementVlr(this.value)
})

btnNum3.addEventListener('click', function () {
  console.log(btnNum3.value)
  incrementVlr(this.value)
})

btnNum4.addEventListener('click', function () {
  console.log(btnNum4.value)
  incrementVlr(this.value)
})

btnNum5.addEventListener('click', function () {
  console.log(btnNum5.value)
  incrementVlr(this.value)
})

btnNum6.addEventListener('click', function () {
  console.log(btnNum6.value)
  incrementVlr(this.value)
})

btnNum7.addEventListener('click', function () {
  console.log(btnNum7.value)
  incrementVlr(this.value)
})

btnNum8.addEventListener('click', function () {
  console.log(btnNum8.value)
  incrementVlr(this.value)
})

btnNum9.addEventListener('click', function () {
  console.log(btnNum9.value)
  incrementVlr(this.value)
})

btnNum0.addEventListener('click', function () {
  console.log(btnNum0.value)
  incrementVlr(this.value)
})

btnAcaoSoma.addEventListener('click', function () {
  console.log(btnAcaoSoma.value)
  incrementVlr(this.value)
})

btnAcaoSub.addEventListener('click', function () {
  console.log(btnAcaoSub.value)
  incrementVlr(this.value)
})

btnAcaoMult.addEventListener('click', function () {
  console.log(btnAcaoMult.value)
  incrementVlr(this.value)
})

btnAcaoDiv.addEventListener('click', function () {
  console.log(btnAcaoDiv.value)
  incrementVlr(this.value)
})

btnAcaoExpo.addEventListener('click', function () {
  console.log(btnAcaoExpo.value)
  incrementVlr(this.value)
})

btnAcaoDelet.addEventListener('click', function () {
  deletVlr()
})

btnAcaoVirg.addEventListener('click', function () {
  console.log(btnAcaoVirg.value)
  incrementVlr(this.value)
})

btnAcaoPerc.addEventListener('click', function () {
  console.log(btnAcaoPerc.value)
  incrementVlr(this.value)
})

function incrementVlr (vl) {
  let returnScreen = document.getElementById('visor');

  let vlr = document.getElementById(vl);

  console.log(vlr)

  returnScreen.setAttribute('value' , vlr + vlr);

}

function clearScreen () {
  let returnScreen = document.getElementById('visor');

  returnScreen.removeAttribute('value');
}

function calculator () {}

function deletVlr () {
  console.log('Estou aqui!')
}
