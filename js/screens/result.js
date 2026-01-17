import { gameState } from "../state.js";
import { clearGameState } from "../storage/storage.js";

export function renderResultScreen() {
    const app = document.getElementById("app");
    
    const isVictory = gameState.victory;
    const title = isVictory ? "¡RA HA RENACIDO!" : "LA OSCURIDAD ETERNA";
    
    // Mensaje personalizado
    let message = "";
    if (isVictory) {
        message = `Gracias, <b>${gameState.playerName}</b>. Gracias a tu conocimiento, el sol vuelve a brillar sobre Egipto.`;
    } else {
        message = `Lo sentimos, <b>${gameState.playerName}</b>. Apofis ha devorado el sol. El mundo se queda en tinieblas.`;
    }
    
    const bgClass = isVictory ? "result-victory" : "result-defeat";

    app.innerHTML = `
        <div class="screen result-screen ${bgClass}">
            <div class="card result-card">
                <h1>${title}</h1>
                <p>${message}</p>
                
                <div class="result-stats">
                    <p>Nivel alcanzado: ${gameState.level}</p>
                </div>

                <button id="restartBtn" class="btn-primary">Volver al Inicio</button>
            </div>
        </div>
    `;

    document.getElementById("restartBtn").addEventListener("click", () => {
        clearGameState();
        window.location.reload(); // Recarga limpia para reiniciar todo
    });
}