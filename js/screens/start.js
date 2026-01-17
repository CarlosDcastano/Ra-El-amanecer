import { gameState } from "../state.js";
import { render } from "../main.js";
import { saveGameState } from "../storage/storage.js";
import { prepareLevelQuestions } from "../logic/rules.js"; // Importamos esto
import { questions } from "../logic/question.js"; // Importamos la DB

export function renderStartScreen() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="screen start-screen">
            <div class="card start-card">
                <input
                    type="text"
                    id="playerNameInput"
                    placeholder="Ingresa tu nombre"
                    maxlength="20"
                />
                <button id="startGameBtn" class="btn-primary">
                    Comenzar Aventura
                </button>
            </div>
        </div>
    `;

    const startButton = document.getElementById("startGameBtn");
    const nameInput = document.getElementById("playerNameInput");

    startButton.addEventListener("click", () => {
        const name = nameInput.value.trim();

        if (name === "") {
            nameInput.style.border = "2px solid red";
            return;
        }

        // 1. Inicializar Datos
        gameState.playerName = name;
        gameState.questionsPool = questions; // Cargamos la DB en el estado
        
        // 2. Preparar el Nivel 1
        prepareLevelQuestions();

        // 3. Cambiar Pantalla
        gameState.screen = "game";
        gameState.phase = "story";

        saveGameState(gameState);
        render();
    });
}