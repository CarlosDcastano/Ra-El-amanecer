import { gameState } from "../state.js";
import { saveGameState } from "../storage/storage.js";
import { render } from "../main.js";
import { use5050, use7525 } from "../logic/helpers.js";
import { handleAnswer, continueAfterFeedback } from "../logic/rules.js";


const app = document.getElementById("app");

export function renderGameScreen() {
    app.innerHTML = "";

    switch (gameState.phase) {
        case "story":
            renderStoryPhase();
            break;
        case "question":
            renderQuestionPhase();
            break;
        case "feedback":
            renderFeedbackPhase();
            break;
    }
}

function renderStoryPhase() {
    app.innerHTML = `
        <div class="game story">
            <div class="story-text">
                <p>
                    Una noche eterna cubre Egipto.  
                    Hace 10 días el sol no aparece.  
                    Ra ha perdido sus poderes.
                </p>

                <button id="startGameBtn">
                    Ayuda a Ra a ganar esta batalla
                </button>
            </div>
        </div>
    `;

    document.getElementById("startGameBtn").addEventListener("click", () => {
        gameState.phase = "question";
        saveGameState(gameState);
        render();
    });
}

function renderQuestionPhase() {
    const question = gameState.questionsPool[gameState.currentQuestionIndex];

    if (!question) {
        console.error("Pregunta inexistente");
        return;
    }

    // LIMPIAR opciones ocultas para esta nueva pregunta
    question.hiddenOptions = [];

    app.innerHTML = `
        <div class="game question">

            <div class="ra-message">
                <p>${question.text}</p>
            </div>

            <div class="helpers">
                <button id="helper5050" ${gameState.helpers.fiftyFiftyUsed ? "disabled" : ""}>
                    50 / 50
                </button>
                <button id="helper7525" ${gameState.helpers.seventyFiveUsed ? "disabled" : ""}>
                    75 / 25
                </button>
            </div>

            <div class="answers">
                ${question.options.map((option, index) => {
                    if (question.hiddenOptions.includes(index)) {
                        return "";
                    }

                    return `
                        <button 
                            class="answer-btn" 
                            data-index="${index}">
                            ${option}
                        </button>
                    `;
                }).join("")}
            </div>
        </div>
    `;

    document.getElementById("helper5050")?.addEventListener("click", () => {
        use5050();
        saveGameState(gameState);
        render();
    });

    document.getElementById("helper7525")?.addEventListener("click", () => {
        use7525();
        saveGameState(gameState);
        render();
    });

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            handleAnswer(Number(btn.dataset.index));
        });
    });
}




function renderFeedbackPhase() {
    const message = gameState.lastAnswerCorrect
        ? "¡Correcto!"
        : "Incorrecto... Jajaja";

    app.innerHTML = `
        <div class="game feedback">
            <p>${message}</p>
            <button id="continueBtn">Continuar</button>
        </div>
    `;

    document.getElementById("continueBtn").addEventListener("click", () => {
        continueAfterFeedback();
        saveGameState(gameState);
        render();   
    });
}
