/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector('#output');

fetch(ENDPOINT)
  .then(res => res.json())
  .then(cars => {
    cars.forEach(car => {
      const brandCard = document.createElement('div');
      brandCard.classList.add('brand-card');
      const brandName = document.createElement('h2');
      brandName.textContent = car.brand;
      brandCard.appendChild(brandName);
      const modelList = document.createElement('ul');
      car.models.forEach(model => {
        const modelItem = document.createElement('li');
        modelItem.textContent = model;
        modelList.appendChild(modelItem);
      });
      brandCard.appendChild(modelList);
      output.appendChild(brandCard);
    });
  })
  .catch(error => console.error(error));