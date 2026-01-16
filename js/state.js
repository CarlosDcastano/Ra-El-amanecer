// js/state.js

export const gameState = {
    // Pantalla actual
    screen: "start", // start | game | result

    // Jugador
    playerName: "",

    // Control de niveles
    level: 1,
    maxLevel: 4,

    // Progreso del nivel actual
    questionsPerLevel: {
    1: 4,
    2: 4,
    3: 6,
    4: 6
    },

    requiredCorrect: {
    1: 3,
    2: 3,
    3: 4,
    4: 4
    },

    currentQuestionIndex: 0,
    correctAnswersThisLevel: 0,

    // Preguntas
    questionsPool: [],       // todas las preguntas mezcladas
    usedQuestions: [],       // para evitar repetición
    currentQuestion: null,

    // Fases dentro de la pantalla de juego
    phase: "intro", // intro | question | feedback

    // Feedback
    lastAnswerCorrect: null,
    feedbackMessage: "",

    // Resultado final
    victory: null // true | false | null
};

export function restoreGameState(savedState) {
    Object.assign(gameState, savedState);
}
