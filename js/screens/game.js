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
            renderQuestionPhase();
            break;
    }
}

function renderStoryPhase() {
    // Textos según el nivel
    const storyTexts = {
        1: `La eterna lucha entre la luz y el caos ha llegado a un punto crítico.
            Ra, dios del sol y guardián del equilibrio, se enfrenta una vez más a Apofis, la serpiente del abismo. Pero esta vez, algo ha salido mal: durante el combate, Ra ha perdido gran parte de su poder y la noche se niega a retirarse.

            El destino de Egipto ahora depende de ti.
            Con cada pregunta respondida correctamente, ayudarás a Ra a recuperar su fuerza y avanzar en la batalla. Cada acierto acerca el amanecer; cada error fortalece a la oscuridad.

            La luz aún puede vencer.
            La batalla comienza ahora.`,
        2: "¡Has recuperado un fragmento de luz! Pero Apofis envía a sus demonios más fuertes.",
        3: "El horizonte empieza a clarear, pero la oscuridad se resiste. ¡No te rindas ahora!",
        4: "¡Es la batalla final! Ra necesita toda tu sabiduría para vencer a Apofis definitivamente."
    };

    const currentText = storyTexts[gameState.level] || "Sigue luchando...";

    app.innerHTML = `
        <div class="screen game-screen story-bg level-${gameState.level}">
            <div class="card story-card">
                <h2>Nivel ${gameState.level}</h2>
                <p>${currentText}</p>
                <button id="startLevelBtn" class="btn-primary">
                    ${gameState.level === 1 ? "Ayuda a Ra" : "Continuar"}
                </button>
            </div>
        </div>
    `;

    document.getElementById("startLevelBtn").addEventListener("click", () => {
        gameState.phase = "question";
        saveGameState(gameState);
        render();
    });
}




function renderQuestionPhase() {
    const question = gameState.activeQuestions[gameState.currentQuestionIndex];
    let isCorrect = gameState.lastAnswerCorrect;
    const message = isCorrect ? "¡Sabiduría Egipcia!" : "JAjajajajaja...";
    const subMessage = isCorrect ? "Muy bien, sigue así." : "La oscuridad avanza.";
    const feedbackClass = isCorrect ? "feedback-correct" : "feedback-wrong";

    if (!question) {
        console.error("Error: No hay pregunta activa");
        return;
    }

    app.innerHTML = `
        <div class="screen game-screen level-${gameState.level}">
            
            <div class="question-container">
                <div class="bubble">
                    <p>${question.text}</p>
                </div>
            </div>

            <div class="helpers-container">
                <button id="helper5050" class="btn-helper" ${gameState.helpers.fiftyFiftyUsed ? "disabled" : ""}>
                    50/50
                </button>
                <button id="helper7525" class="btn-helper" ${gameState.helpers.seventyFiveUsed ? "disabled" : ""}>
                    75/25
                </button>

                
            </div>

            

            <div class="answers-container">
                ${question.options.map((option, index) => {
                    if (question.hiddenOptions && question.hiddenOptions.includes(index)) {
                        return `<button class="btn-answer hidden" disabled></button>`;
                    }
                    return `
                        <button class="btn-answer" data-index="${index}">
                            ${option}
                        </button>
                    `;
                }).join("")}
            </div>

            <div class="hud">
                <span>Nivel: ${gameState.level}</span>
                <span>Pregunta: ${gameState.currentQuestionIndex + 1} / ${gameState.activeQuestions.length}</span>
            </div>

            <div class="bottom-container">
            <button class="volver-btn">
                REINICIAR
            </button>
            </div>

            <div class="ra-symbol">
                <img src="../../assets/img/raalone.png" alt="Símbolo de Ra" />
            </div>

            ${isCorrect === true ? `<div class="ra-effect">
                    <h2>${message}</h2>
                    <p>${subMessage}</p>
                </div>` : 
                `<div class="ra-effect hidden"></div>`}

            <div class="apofis-symbol">
                <img src="../../assets/img/apofisalone.png" alt="Símbolo de Apofis" />
            </div>

            ${isCorrect === false ? `<div class="apofis-effect">
                    <h2>${message}</h2>
                    <p>${subMessage}</p>
                    </div>` : 
                    `<div class="apofis-effect hidden"></div>`}
        </div>
    `;

    // Listeners
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

    document.querySelectorAll(".btn-answer").forEach(btn => {
        if (!btn.classList.contains("hidden")) {
            btn.addEventListener("click", () => {
                handleAnswer(Number(btn.dataset.index));
                saveGameState(gameState);
                continueAfterFeedback();
                saveGameState(gameState);
                render();
            });
        }
    });


    document.querySelector(".volver-btn").addEventListener("click", () => {
    gameState.screen = "start";
    gameState.phase = "story"; 
    gameState.level = 1;
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswersThisLevel = 0;
    gameState.helpers.fiftyFiftyUsed = false;
    gameState.helpers.seventyFiveUsed = false;
    const apofisEffect = document.querySelector(".apofis-effect");
    const raEffect = document.querySelector(".ra-effect");
    apofisEffect.classList.add("hidden");
    raEffect.classList.add("hidden");
    saveGameState(gameState);
    render();
    });
}



/*function renderFeedbackPhase() {
    const isCorrect = gameState.lastAnswerCorrect;
    const message = isCorrect ? "¡Sabiduría Pura!" : "Apofis se burla...";
    const subMessage = isCorrect ? "Ra recupera fuerza." : "La oscuridad avanza.";
    const feedbackClass = isCorrect ? "feedback-correct" : "feedback-wrong";

    app.innerHTML = `
        <div class="screen game-screen ${feedbackClass}">
            <div class="card feedback-card">
                <h2>${message}</h2>
                <p>${subMessage}</p>
                <button id="continueBtn" class="btn-primary">Continuar</button>
            </div>
        </div>
    `;

    document.getElementById("continueBtn").addEventListener("click", () => {
        continueAfterFeedback();
        saveGameState(gameState);
        render();
    });
}*/