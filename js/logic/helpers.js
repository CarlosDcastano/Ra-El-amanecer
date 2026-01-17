
import { gameState } from "../state.js";

/**
 * Ayuda 50 / 50
 * Elimina 2 opciones incorrectas
 */
export function use5050() {
    if (gameState.helpers.fiftyFiftyUsed) {
        return;
    }

    const question = gameState.questionsPool[gameState.currentQuestionIndex];

    if (!question) {
        console.error("No hay pregunta activa para usar 50/50");
        return;
    }

    const correctIndex = question.correctIndex;

    // Índices incorrectos
    const wrongIndexes = question.options
        .map((_, index) => index)
        .filter(index => index !== correctIndex);

    // Seleccionar 2 incorrectas aleatorias
    shuffleArray(wrongIndexes);
    const toRemove = wrongIndexes.slice(0, 2);

    // Marcar opciones eliminadas
    question.hiddenOptions = toRemove;

    gameState.helpers.fiftyFiftyUsed = true;
}

/**
 * Ayuda 75 / 25
 * Elimina 3 opciones incorrectas (deja la correcta y 1 incorrecta)
 */
export function use7525() {
    if (gameState.helpers.seventyFiveUsed) {
        return;
    }

    const question = gameState.questionsPool[gameState.currentQuestionIndex];

    if (!question) {
        console.error("No hay pregunta activa para usar 75/25");
        return;
    }

    const correctIndex = question.correctIndex;

    const wrongIndexes = question.options
        .map((_, index) => index)
        .filter(index => index !== correctIndex);

    shuffleArray(wrongIndexes);
    const toRemove = wrongIndexes.slice(0, 3);

    question.hiddenOptions = toRemove;

    gameState.helpers.seventyFiveUsed = true;
}

/**
 * Mezcla un array (Fisher-Yates)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
