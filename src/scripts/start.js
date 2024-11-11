import { checkUserNameExists, updatedRaking} from "./dataBase.js";

const ranking = document.getElementById("ranking");

document.querySelector(".play-button").addEventListener('click', startGame);

function startGame() {
    localStorage.clear();
    let playerName = document.getElementById('playerName').value;

    // Verificar se o jogador digitou um nome
    if (playerName.trim() === "") {
        alert("Por favor, digite o seu nome antes de jogar.");
    } else {
        checkUserNameExists(playerName).then(result => {
            if (result) {
                alert("Esse nome já foi usado")
                document.getElementById('playerName').value = "";
            } else {
                localStorage.setItem('playerName', playerName);
                window.location.href = '../game.html';
            }
        })
    }
}

async function printRanking() {
    const playersList =  await updatedRaking();
    ranking.innerHTML = "";
    playersList.forEach(doc => {
        ranking.innerHTML += `<li><span><span>${playersList.indexOf(doc) + 1}º</span>${doc.nome}</span> <span>${doc.pontos}</span></li>`
    });
}

// Adicionar evento de escuta para a tecla "Enter"
document.getElementById('playerName').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        startGame();
    }
});

setTimeout(() => {
    printRanking();
}, 1500);