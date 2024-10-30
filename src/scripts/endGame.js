import { updatedRaking, storePlayData, resetScore } from "./dataBase.js";

const ranking = document.querySelector("#ranking");

const playerName = localStorage.getItem('playerName');
const playerScore = localStorage.getItem('playerScore');
let playersList = await updatedRaking();


// Atualizar os elementos HTML com os dados do jogador
document.getElementById('playerName').textContent = playerName;
document.getElementById('playerScore').textContent = playerScore;

const congratulationsContainer = document.querySelector(".congratulations");
const resultContainer = document.querySelector(".result");
const positionRanking = document.querySelector(".result-ranking");

document.getElementById('restart').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = './index.html'
})

document.getElementById('tryAgain').addEventListener('click', async () => {
    resetScore(playerName);
    playersList = await updatedRaking();
    window.location.href = './game.html'
})


async function printRanking() {
    playersList =  await updatedRaking();
    ranking.innerHTML = "";
    playersList.forEach(doc => {
        ranking.innerHTML += `<li><span><span>${playersList.indexOf(doc) + 1}º</span>${doc.nome}</span> <span>${doc.pontos}</span></li>`
    });
}

async function printResult() {

    playersList = await updatedRaking();
    playersList.forEach(player => {

        if (player.nome == playerName) {
            console.log(player.nome);
            console.log(playerName);
            console.log(playersList.indexOf(player) + 1);
            switch (playersList.indexOf(player) + 1) {
                case 1:
                    congratulationsContainer.innerHTML = "Primeiro lugar, Parabéns " + playerName;
                    resultContainer.style.background = "#0BB029";
                    resultContainer.innerHTML = "Novo Record";
                    positionRanking.innerHTML = playersList.indexOf(player) + 1;
                    break;
                case 2:
                    congratulationsContainer.innerHTML = "Segundo lugar, Parabéns " + playerName;
                    resultContainer.style.background = "#CDDB11";
                    resultContainer.innerHTML = "Esta no Pódio";
                    positionRanking.innerHTML = playersList.indexOf(player) + 1;
                    break;
                case 3:
                    congratulationsContainer.innerHTML = "Terceiro lugar, Parabéns " + playerName;
                    resultContainer.style.background = "#DB9411";
                    resultContainer.innerHTML = "Esta no Pódio";
                    positionRanking.innerHTML = playersList.indexOf(player) + 1;
                    break;

                default:
                    console.log("teste")
                    congratulationsContainer.innerHTML = "Boa, continue tentando para subir no pódio " + playerName;
                    resultContainer.style.background = "#3961B7";
                    resultContainer.innerHTML = "Da para melhorar";
                    positionRanking.innerHTML = playersList.indexOf(player) + 1;

                    break;
            }
        }

    })



}

storePlayData(playerName, playerScore);

setTimeout(() => {
    printResult();
    printRanking();
}, 1500);

