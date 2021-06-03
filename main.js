let player1 = {
  name: "Scorpion",
  hp: 94,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["hand"],
  attack: function () {
    console.log(player1.name + " fight");
  },
};

let player2 = {
  name: "Kitana",
  hp: 95,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["foot"],
  attack: function () {
    console.log(player2.name + " fight");
  },
};

function createPlayer(player, character) {
  const $progressbar = document.createElement("div");
  const $player1 = document.createElement("div");
  const $character = document.createElement("div");
  const $life = document.createElement("div");
  const $name = document.createElement("div");
  const $img = document.createElement("img");
  const $arenas = document.querySelector(".arenas");

  $player1.classList.add(player);
  $life.classList.add("life");
  $name.classList.add("name");
  $progressbar.classList.add("progressbar");
  $character.classList.add("character");

  $img.src = character.img;
  $name.innerText = character.name;
  $life.style.width = character.hp + "%";

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $arenas.appendChild($player1);
}

createPlayer("player1", player1);
