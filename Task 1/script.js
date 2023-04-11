/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const forma = document.querySelector('form');
const output = document.querySelector('#output');

forma.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const kg = document.querySelector('#search').value;

  if (isNaN(kg)) {
    output.innerHTML = 'Įvestis nėra numeris'; 
    return;
  }

  const lb = kg * 2.2046;
  const g = kg / 0.0010000;
  const oz = kg * 35.274;

  const atsakymas = `
    <p>${kg} kg yra lygu to:</p>
    <p>${lb.toFixed(2)} (svarai)</p>
    <p>${g.toFixed(2)} (gramai)<p>
    <p>${oz.toFixed(2)} (uncijos)<p>
  `;
  output.innerHTML = atsakymas;
});






