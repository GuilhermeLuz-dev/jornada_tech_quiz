document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".play-button").addEventListener('click', startGame);

    function startGame() {
        let playerName = document.getElementById('playerName').value;
        console.log(playerName);

        // Verificar se o jogador digitou um nome
        if (playerName.trim() === "") {
            alert("Por favor, digite o seu nome antes de jogar.");
        } else {
            localStorage.setItem('playerName', playerName);
            window.location.href = '../game.html';
        }
    }

    // Adicionar evento de escuta para a tecla "Enter"
    document.getElementById('playerName').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            console.log("teste")
            startGame();
        }
    });
})