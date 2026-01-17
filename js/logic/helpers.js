import { gameState } from "../state.js";

// Utilidad para mezclar dentro de helpers
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function use5050() {
    if (gameState.helpers.fiftyFiftyUsed) return;

    // Usamos activeQuestions
    const question = gameState.activeQuestions[gameState.currentQuestionIndex];
    if (!question) return;

    const correctIndex = question.correctIndex;
    
    // Buscar índices incorrectos
    const wrongIndexes = question.options
        .map((_, index) => index)
        .filter(index => index !== correctIndex);

    shuffleArray(wrongIndexes);
    
    // Ocultar 2
    question.hiddenOptions = wrongIndexes.slice(0, 2);
    gameState.helpers.fiftyFiftyUsed = true;
}

export function use7525() {
    if (gameState.helpers.seventyFiveUsed) return;

    const question = gameState.activeQuestions[gameState.currentQuestionIndex];
    if (!question) return;

    const correctIndex = question.correctIndex;
    
    const wrongIndexes = question.options
        .map((_, index) => index)
        .filter(index => index !== correctIndex);

    shuffleArray(wrongIndexes);
    
    // Ocultar 3
    question.hiddenOptions = wrongIndexes.slice(0, 3);
    gameState.helpers.seventyFiveUsed = true;
}