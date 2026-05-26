// Variável para armazenar os pontos do usuário
let totalScore = 0;
let jaRespondeu = false; // Impede que o usuário ganhe pontos infinitos clicando na certa várias vezes

/**
 * Valida a resposta do quiz e atualiza o placar
 * @param {boolean} isCorrect
 */
function checkAnswer(isCorrect) {
    const feedbackDiv = document.getElementById('feedback');
    const scoreSpan = document.getElementById('score');
    
    if (isCorrect) {
        feedbackDiv.innerHTML = "🎉 Incrível! A Inteligência Artificial e a automação urbana geram economia real de recursos naturais no campo.";
        feedbackDiv.className = "correct";
        
        // Se ainda não tinha pontuado, ganha 10 pontos
        if (!jaRespondeu) {
            totalScore += 10;
            scoreSpan.innerText = totalScore;
            jaRespondeu = true;
        }
    } else {
        feedbackDiv.innerHTML = "❌ Quase lá! Essa alternativa não ajuda a preservar a natureza. Pense em automação inteligente.";
        feedbackDiv.className = "wrong";
    }
}
