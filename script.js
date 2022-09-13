// Hero Section

// Monster Section
document.getElementById("monster").innerHTML = `
    <div class="character-card">
        <h4 class="name">Orc</h4>
        <img class="avatar" src="images/orc.png" />
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container">
            <div class="dice">4</div>
        </div>
    </div>
`;

const heroId = "hero";
const heroName = "Wizard";
const heroImage = "images/wizard.png";
const heroHealth = "6";
const heroDiceRoll = 4;

const monsterId = "monster";
const monsterName = "Orc";
const monsterImage = "images/orc.png";
const monsterHealth = "10";
const monsterDiceRoll = 2;

function renderCharacter(elementId, name, avatar, health, diceRoll) {
  document.getElementById(elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
        <div class="dice"> ${diceRoll} </div>
        </div>
    </div>
`;
}

renderCharacter(heroId, heroName, heroImage, heroHealth, heroDiceRoll);
renderCharacter(monsterId, monsterName, monsterImage, monsterHealth, monsterDiceRoll);
