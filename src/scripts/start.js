import { checkUserNameExists } from "./dataBase.js";


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

// Adicionar evento de escuta para a tecla "Enter"
document.getElementById('playerName').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        startGame();
    }
});
