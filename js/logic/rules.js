

import { gameState } from "../state.js";

/**
 * Maneja la respuesta del jugador
 * @param {number} selectedIndex - índice de la opción seleccionada
 */
export function handleAnswer(selectedIndex) {
    const question = gameState.questionsPool[gameState.currentQuestionIndex];

    // Validación defensiva
    if (!question) {
        console.error("No hay pregunta actual");
        return;
    }

    const isCorrect = selectedIndex === question.correctIndex;

    // Guardamos resultado
    gameState.lastAnswerCorrect = isCorrect;

    if (isCorrect) {
        gameState.correctAnswersThisLevel++;
    }

    // Pasamos a feedback
    gameState.phase = "feedback";
}

/**
 * Avanza el juego después del feedback
 * Decide si sigue el nivel, sube de nivel o termina el juego
 */
export function continueAfterFeedback() {
    gameState.currentQuestionIndex++;

    const questionsForLevel = gameState.questionsPerLevel[gameState.level];

    // ¿Se terminaron las preguntas del nivel?
    if (gameState.currentQuestionIndex >= questionsForLevel) {
        evaluateLevelResult();
    } else {
        gameState.phase = "question";
    }
}

/**
 * Evalúa si el jugador supera el nivel actual
 */
function evaluateLevelResult() {
    const required = gameState.requiredCorrect[gameState.level];

    if (gameState.correctAnswersThisLevel >= required) {
        goToNextLevel();
    } else {
        endGame(false);
    }
}

/**
 * Avanza al siguiente nivel o termina el juego si ya era el último
 */
function goToNextLevel() {
    if (gameState.level >= gameState.maxLevel) {
        endGame(true);
        return;
    }

    gameState.level++;

    // Reinicio de estado del nivel
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswersThisLevel = 0;

    // Reinicio de ayudas por nivel (si decides que sean por nivel)
    gameState.helpers.fiftyFiftyUsed = false;
    gameState.helpers.seventyFiveUsed = false;

    gameState.phase = "story";
}

/**
 * Finaliza el juego
 * @param {boolean} victory
 */
function endGame(victory) {
    gameState.victory = victory;
    gameState.screen = "result";
}
