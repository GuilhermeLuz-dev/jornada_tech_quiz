import { updatedRaking, storePlayData, resetScore } from "./dataBase.js";

const ranking = document.querySelector("#ranking");

const playerName = localStorage.getItem('playerName');
const playerScore = localStorage.getItem('playerScore');


// Atualizar os elementos HTML com os dados do jogador
document.getElementById('playerName').textContent = playerName;
document.getElementById('playerScore').textContent = playerScore;

document.getElementById('restart').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = './index.html'
})

document.getElementById('tryAgain').addEventListener('click', () => {
    resetScore(playerName);
    window.location.href = './game.html'
})


async function printRanking() {
    const playersList = await updatedRaking();
    playersList.forEach(doc => {
        ranking.innerHTML += `<li>${doc.nome} ${doc.pontos}</li>`
    });
}

storePlayData(playerName, playerScore);

setTimeout(() => {
    printRanking()
}, 1500);

