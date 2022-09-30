import { characterData } from "./Data.js";
import { Character } from "./character.js";

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack() {
  wizard.getDiceHtml();
  monster.getDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || monster.dead) {
    endGame();
    F;
  }
}

function endGame() {
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "Both Creatures Dies. No one is victorious"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The monster Wins";
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  document.body.innerHTML = `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`;
}

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
