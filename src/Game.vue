<script setup lang="ts">
import { onUnmounted } from "vue";
import { getWordOfTheDay, allWords, getNumberOfWordle } from "./words";
import Keyboard from "./Keyboard.vue";
import { LetterState } from "./types";

// Get word of the day
const answer = getWordOfTheDay();

// Board state. Each tile is represented as { letter, state }
const board = $ref(
  Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: "",
      state: LetterState.INITIAL,
    }))
  )
);

// Current active row.
let currentRowIndex = $ref(0);
const currentRow = $computed(() => board[currentRowIndex]);
const isRandom = $computed(() => {
  const queries = new URLSearchParams(location.search);
  return !!queries.get("random");
});

// Feedback state: message and shake
let message = $ref("");
let grid = $ref("");
let shakeRowIndex = $ref(-1);
let success = $ref(false);

// Keep track of revealed letters for the virtual keyboard
const letterStates: Record<string, LetterState> = $ref({});

// Handle keyboard input.
let allowInput = true;

const onKeyup = (e: KeyboardEvent) => onKey(e.key);

window.addEventListener("keyup", onKeyup);

onUnmounted(() => {
  window.removeEventListener("keyup", onKeyup);
});

function onKey(key: string) {
  if (!allowInput) return;

  if (/^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF-\s]*$/.test(key)) {
    fillTile(key);
  } else if (key === "Backspace") {
    clearTile();
  } else if (key === "Enter") {
    completeRow();
  }
}

function fillTile(letter: string) {
  for (const tile of currentRow) {
    if (!tile.letter) {
      tile.letter = letter;
      break;
    }
  }
}

function clearTile() {
  for (const tile of [...currentRow].reverse()) {
    if (tile.letter) {
      tile.letter = "";
      break;
    }
  }
}

function completeRow() {
  if (currentRow.every((tile) => tile.letter)) {
    const guess = currentRow.map((tile) => tile.letter).join("");
    if (!allWords.includes(guess) && guess !== answer) {
      shake();
      showMessage(`این کلمه در لیست کلمات وجود ندارد.`);
      return;
    }

    const answerLetters: (string | null)[] = answer.split("");
    // first pass: mark correct ones
    currentRow.forEach((tile, i) => {
      if (answerLetters[i] === tile.letter) {
        tile.state = letterStates[tile.letter] = LetterState.CORRECT;
        answerLetters[i] = null;
      }
    });
    // second pass: mark the present
    currentRow.forEach((tile) => {
      if (!tile.state && answerLetters.includes(tile.letter)) {
        tile.state = LetterState.PRESENT;
        answerLetters[answerLetters.indexOf(tile.letter)] = null;
        if (!letterStates[tile.letter]) {
          letterStates[tile.letter] = LetterState.PRESENT;
        }
      }
    });
    // 3rd pass: mark absent
    currentRow.forEach((tile) => {
      if (!tile.state) {
        tile.state = LetterState.ABSENT;
        if (!letterStates[tile.letter]) {
          letterStates[tile.letter] = LetterState.ABSENT;
        }
      }
    });

    allowInput = false;
    if (currentRow.every((tile) => tile.state === LetterState.CORRECT)) {
      // yay!
      setTimeout(() => {
        grid = genResultGrid();
        showMessage(
          ["تو نابغه ای", "بی نظیر", "با شکوه", "آفرین", "موفق", "نزدیک بود"][
            currentRowIndex
          ],
          -1
        );
        success = true;
      }, 1600);
    } else if (currentRowIndex < board.length - 1) {
      // go the next row
      currentRowIndex++;
      setTimeout(() => {
        allowInput = true;
      }, 1600);
    } else {
      // game over :(
      setTimeout(() => {
        showMessage(answer, -1);
      }, 1600);
    }
  } else {
    shake();
    showMessage("تعداد حروف کافی نیست!");
  }
}

function showMessage(msg: string, time = 1000) {
  message = msg;
  if (time > 0) {
    setTimeout(() => {
      message = "";
    }, time);
  }
}

function shake() {
  shakeRowIndex = currentRowIndex;
  setTimeout(() => {
    shakeRowIndex = -1;
  }, 1000);
}

const icons = {
  [LetterState.CORRECT]: "🟩",
  [LetterState.PRESENT]: "🟨",
  [LetterState.ABSENT]: "⬛",
  [LetterState.INITIAL]: null,
};

function genResultGrid() {
  return board
    .slice(0, currentRowIndex + 1)
    .map((row) => {
      // Reverse the answer grid since Persian is RTL
      return row
        .map((tile) => icons[tile.state])
        .reverse()
        .join("");
    })
    .join("\n");
}

function copyResult() {
  if ("clipboard" in navigator) {
    let text = `Persian wordle ${getNumberOfWordle()} `; // Eg. Persian wordle 52
    text += `${currentRowIndex + 1} / ${board.length}`; // Eg. Persian wordle 52 3 / 6
    text += `\n`; // A line break
    text += `${grid}`; // The answer grid

    navigator.clipboard.writeText(text);
    showMessage("کپی شد.", -1);
  }
}
</script>

<template>
  <!-- Message -->
  <Transition>
    <div class="message" v-if="message">
      <span dir="rtl">{{ message }}</span>
      <pre v-if="grid">{{ grid }}</pre>
      <button
        v-if="grid"
        @click="copyResult()"
        class="copy-btn"
        type="button"
        accesskey=""
      >
        کپی جواب
      </button>
    </div>
  </Transition>
  <!-- End of Message -->

  <!-- Header -->
  <header>
    <a href="?random=1" v-if="!isRandom"> Random </a>
    <a href="/" v-if="isRandom"> Daily </a>

    <h1>Persian Wordle</h1>

    <a href="https://github.com/mostafa7904/Persian-wordle" target="_blank">
      Source
    </a>
  </header>
  <!-- End of Header -->

  <!-- The board -->
  <div id="board">
    <div
      v-for="(row, index) in board"
      :key="index"
      :class="[
        'row',
        shakeRowIndex === index && 'shake',
        success && currentRowIndex === index && 'jump',
      ]"
    >
      <div
        :key="index"
        v-for="(tile, index) in row"
        :class="['tile', tile.letter && 'filled', tile.state && 'revealed']"
      >
        <div class="front" :style="{ transitionDelay: `${index * 300}ms` }">
          {{ tile.letter }}
        </div>
        <div
          :class="['back', tile.state]"
          :style="{
            transitionDelay: `${index * 300}ms`,
            animationDelay: `${index * 100}ms`,
          }"
        >
          {{ tile.letter }}
        </div>
      </div>
    </div>
  </div>
  <!-- End of The board -->

  <!-- End of Keyboard -->
  <Keyboard @key="onKey" :letter-states="letterStates" />
  <!-- End OF Keyboard -->
</template>

<style scoped>
#board {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  --height: min(420px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) / 6 * 5));
  margin: 0px auto;
}
.copy-btn {
  font-size: 0.8rem;
  font-weight: 600;
  font-family: inherit;
  border-radius: 5px;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
}
.message {
  position: absolute;
  left: 50%;
  top: 80px;
  background-color: #ffff;
  color: #121213;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  z-index: 2;
  border-radius: 4px;
  transform: translateX(-50%);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.message.v-leave-to {
  opacity: 0;
}
.row {
  display: grid;
  direction: rtl;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.tile {
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  text-transform: uppercase;
  user-select: none;
  position: relative;
}
.tile.filled {
  animation: zoom 0.2s;
}
.tile .front,
.tile .back {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.tile .front {
  border: 2px solid var(--tile-border);
}
.tile.filled .front {
  border-color: var(--tile-border);
}
.tile .back {
  transform: rotateX(180deg);
}
.tile.revealed .front {
  transform: rotateX(180deg);
}
.tile.revealed .back {
  transform: rotateX(0deg);
}

@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px);
  }
  10% {
    transform: translate(-2px);
  }
  20% {
    transform: translate(2px);
  }
  30% {
    transform: translate(-2px);
  }
  40% {
    transform: translate(2px);
  }
  50% {
    transform: translate(-2px);
  }
  60% {
    transform: translate(2px);
  }
  70% {
    transform: translate(-2px);
  }
  80% {
    transform: translate(2px);
  }
  90% {
    transform: translate(-2px);
  }
  100% {
    transform: translate(1px);
  }
}

.jump .tile .back {
  animation: jump 0.5s;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(-25px);
  }
  90% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-height: 680px) {
  .tile {
    font-size: 3vh;
  }
}
</style>
