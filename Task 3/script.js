/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', (e) => {

  document.querySelector('#message').classList.add('hidden');
  document.querySelector('#btn').classList.add('hidden');

  fetch(ENDPOINT)
    .then(res => res.json())
    .then(users => {
      const output = document.querySelector('#output');

      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('userCard');

        card.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login}">
          <h3>${user.login}</h3>
        `;
        output.appendChild(card);
      });
    });    
})


