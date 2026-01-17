
import { gameState } from "../state.js";
import { render } from "../main.js";
import { saveGameState } from "../storage/storage.js";

export function renderStartScreen() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="start-screen">
            <div class="start-card">
                <input
                    type="text"
                    id="playerNameInput"
                    placeholder="Ingresa tu nombre"
                    maxlength="20"
                />

                <button id="startGameBtn">
                    Comenzar
                </button>
            </div>
        </div>
    `;

    const startButton = document.getElementById("startGameBtn");
    const nameInput = document.getElementById("playerNameInput");

    startButton.addEventListener("click", () => {
        const name = nameInput.value.trim();

        if (name === "") {
            nameInput.classList.add("input-error");
            return;
        }

        gameState.playerName = name;
        gameState.screen = "game";
        gameState.phase = "story";

        saveGameState(gameState);
        render();
    });
}
