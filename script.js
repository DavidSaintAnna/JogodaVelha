let turn = 1;
let win = -1;
let clickCounter = 0;
let matriz = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

function playerAction(elem, row, col) {
    if (elem.innerHTML != "") return;
    if (win != -1) return;

    clickCounter++;
    matriz[row][col] = turn;

    if (turn == 1) {
        elem.innerHTML = "O";
        document.getElementById("messagesection").innerHTML = "Jogador X turno";
        turn = 2;

    } else if (turn == 2) {
        elem.innerHTML = "X";
        document.getElementById("messagesection").innerHTML = "Jogador O turno";
        turn = 1;
    }

    for (let i = 0; i < 3; i++) {
        if (matriz[i][0] == matriz[i][1] && matriz[i][1] == matriz[i][2]) win = matriz[i][0];
        if (matriz[0][i] == matriz[1][i] && matriz[1][i] == matriz[2][i]) win = matriz[0][i];

    }
    if (matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2]) win = matriz[1][1];
    if (matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[2][0]) win = matriz[1][1];

    if (clickCounter >= 4) {
        if (matriz[0][0] == matriz[0][1] && matriz[0][1] == matriz[0][2] && matriz[0][0] == 1) {
            document.getElementById("messagesection").innerHTML = "Jogador " + win + "ganhou o jogo";
            win = 1;
        }
        if (matriz[0][0] == matriz[1][0] && matriz[1][0] == matriz[2][0] && matriz[0][0] == 1) {
            document.getElementById("messagesection").innerHTML = "Jogador " + win + "ganhou o jogo";
            win = 1;
        }
        if (matriz[0][1] == matriz[1][1] && matriz[1][1] == matriz[2][1] && matriz[0][1] == 1) {
            document.getElementById("messagesection").innerHTML = "Jogador " + win + "ganhou o jogo";
            win = 1;
        }
        if (matriz[1][0] == matriz[1][1] && matriz[1][1] == matriz[1][2] && matriz[1][0] == 1) {
            document.getElementById("messagesection").innerHTML = "Jogador " + win + "ganhou o jogo";
            win = 1;
        }
    }
    if (win != -1) {
        document.getElementById("messagesection").innerHTML = "Jogador " + win + "ganhou o jogo";
    }
    if (clickCounter == 9 && win == -1) {
        document.getElementById("messagesection").innerHTML = "O jogo empatou!";
    }
    //console.log(matriz)
    //console.log(win)
    //console.log(clickCounter)
}