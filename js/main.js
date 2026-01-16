import { gameState, restoreGameState } from "./state.js";
import { loadGameState } from "./storage/storage.js";

import { renderStartScreen } from "./screens/start.js";
import { renderGameScreen } from "./screens/game.js";
import { renderResultScreen } from "./screens/result.js";

const app = document.getElementById("app");

// Intentar restaurar estado guardado
const savedState = loadGameState();
if (savedState) {
    restoreGameState(savedState);
}

export function render() {
    app.innerHTML = "";

    switch (gameState.screen) {
    case "start":
        renderStartScreen();
        break;

    case "game":
        renderGameScreen();
        break;

    case "result":
        renderResultScreen();
        break;

    default:
        console.error("Pantalla desconocida:", gameState.screen);
    }
}

render();
