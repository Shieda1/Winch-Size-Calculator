// https://www.omnicalculator.com/everyday-life/winch-size

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pullRadio = document.getElementById('pullRadio');
const centreofgravityRadio = document.getElementById('centreofgravityRadio');
const heightRadio = document.getElementById('heightRadio');

let pull;
let centreofgravity = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

pullRadio.addEventListener('click', function() {
  variable1.textContent = 'Centre of gravity';
  variable2.textContent = 'Height';
  centreofgravity = v1;
  height = v2;
  result.textContent = '';
});

centreofgravityRadio.addEventListener('click', function() {
  variable1.textContent = 'Pull';
  variable2.textContent = 'Height';
  pull = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Pull';
  variable2.textContent = 'Centre of gravity';
  pull = v1;
  centreofgravity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pullRadio.checked)
    result.textContent = `Pull = ${computepull().toFixed(2)}`;

  else if(centreofgravityRadio.checked)
    result.textContent = `Centre of gravity = ${computecentreofgravity().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

function computepull() {
  return (Number(centreofgravity.value) / Number(height.value)) * 1000;
}

function computecentreofgravity() {
  return (Number(pull.value) / 1000) * Number(height.value);
}

function computeheight() {
  return Number(centreofgravity.value) / (Number(pull.value) / 1000);
}