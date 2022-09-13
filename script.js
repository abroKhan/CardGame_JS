// Hero Section
let hero = {
  id: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: "70",
  diceRoll: 5,
};

let monster = {
  id: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: "40",
  diceRoll: 4,
};

function renderCharacter(data) {
  const { id, name, avatar, health, diceRoll } = data;
  document.getElementById(id).innerHTML = `
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

renderCharacter(hero);
renderCharacter(monster);
// renderCharacter(
//   monsterId,
//   monsterName,
//   monsterImage,
//   monsterHealth,
//   monsterDiceRoll
// );
