import { characterData } from "./Data.js";
import { Character } from "./character.js";


function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml();
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
