// Hero Section
let hero = {
  id: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: "70",
  diceRoll: [5, 1, 3],
  diceCount: 3,
};

let monster = {
  id: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: "40",
  diceRoll: [4],
  diceCount: 1,
};

function renderCharacter(data) {
  const { id, name, avatar, health, diceRoll, diceCount } = data;

  let diceHtml = "";
  for (let i = 0; i < diceCount; i++) {
    diceHtml += `<div class="dice">${diceRoll[i]}</div>`;
  }

  document.getElementById(id).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceHtml}</div>
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
