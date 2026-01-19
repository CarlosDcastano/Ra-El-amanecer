import { gameState } from "../state.js";
import { saveGameState } from "../storage/storage.js";

// --- UTILIDAD (Shuffle) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Prepara las preguntas para el nivel actual.
 * Filtra por nivel, mezcla y corta la cantidad necesaria.
 */
export function prepareLevelQuestions() {
    
    // 1. Filtrar preguntas del nivel actual
    const levelQuestions = gameState.questionsPool.filter(q => q.level === gameState.level);
    // 2. Mezclar
    shuffleArray(levelQuestions);
    
    // 3. Seleccionar la cantidad necesaria
    const count = gameState.questionsPerLevel[gameState.level];
    gameState.activeQuestions = levelQuestions.slice(0, count);

    // 4. Limpiar "hiddenOptions" de rondas anteriores
    gameState.activeQuestions.forEach(q => q.hiddenOptions = []);
}

/**
 * Maneja la respuesta del jugador
 */
export function handleAnswer(selectedIndex) {

    const question = gameState.activeQuestions[gameState.currentQuestionIndex];

    if (!question) return;

    const isCorrect = selectedIndex === question.correctIndex;

    gameState.lastAnswerCorrect = isCorrect;

    if (isCorrect) {
        gameState.correctAnswersThisLevel++;
    }

    gameState.phase = "feedback";
}

/**
 * Avanza después del feedback
 */
export function continueAfterFeedback() {
    gameState.currentQuestionIndex++;

    const totalQuestions = gameState.activeQuestions.length;

    // ¿Se terminaron las preguntas de esta ronda?
    if (gameState.currentQuestionIndex >= totalQuestions) {
        evaluateLevelResult();
    } else {
        gameState.phase = "question";
    }
}

/**
 * Evalúa Victoria de Nivel vs Derrota/Retroceso
 */
function evaluateLevelResult() {
    const required = gameState.requiredCorrect[gameState.level];

    if (gameState.correctAnswersThisLevel >= required) {
        // ¡Pasó el nivel!
        goToNextLevel();
    } else {
        // ¡Falló el nivel!
        handleLevelDefeat();
    }
}

function handleLevelDefeat() {
    if (gameState.level === 1) {
        // Regla: Nivel 1 fallo = Game Over
        endGame(false);
    } else {
        // Regla: Nivel > 1 = Retrocede
        gameState.level--;
        resetLevelState();
        
        // Volvemos a preparar preguntas para el nivel anterior
        prepareLevelQuestions();
        
        // Vamos a la historia para avisar al jugador
        gameState.phase = "story";
        saveGameState(gameState);
    }
}

function goToNextLevel() {
    if (gameState.level >= gameState.maxLevel) {
        endGame(true);
        return;
    }

    gameState.level++;
    resetLevelState();
    prepareLevelQuestions();
    
    gameState.phase = "story";
    saveGameState(gameState);
}

function resetLevelState() {
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswersThisLevel = 0;
    
    // gameState.helpers.fiftyFiftyUsed = false;
    // gameState.helpers.seventyFiveUsed = false;
}

function endGame(victory) {
    gameState.victory = victory;
    gameState.screen = "result";
    saveGameState(gameState);
}