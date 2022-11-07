import './css/index.css'

function createGame(player1, hour, player2) {
  return `
  <li>
        <img src="./src/img/icon-${player1}.svg" alt="Bandeira do Brasil" />
        <strong>${hour}</strong>
        <img src="./src/img/icon-${player2}.svg" alt="bandeira da serbia" />
      </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}
document.querySelector('#cards').innerHTML =

  createCard('24/11', 'quinta',
  createGame('switzerland', '07:00', 'cameroon') + 
  createGame('portugal', '13:00', 'ghana') + 
  createGame('brazil', '16:00', 'serbia')) +

  createCard('28/11', 'segunda', 
  createGame('cameroon', '07:00', 'serbia') + 
  createGame('brazil', '13:00', 'switzerland') + 
  createGame('portugal', '16:00', 'uruguay')) +

  createCard('02/12', 'sexta',
  createGame('southKorea', '12:00', 'portugal') + 
  createGame('cameroon', '16:00', 'brazil') + 
  createGame('serbia', '16:00', 'switzerland'))

