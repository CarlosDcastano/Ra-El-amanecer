// js/storage/storage.js

const STORAGE_KEY = "ra_game_state";

export function saveGameState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadGameState() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}

export function clearGameState() {
    localStorage.removeItem(STORAGE_KEY);
}
