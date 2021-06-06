const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  playerNum: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["hand"],
  attack: function () {
    console.log(player1.name + " Fight...");
  },
};

const player2 = {
  playerNum: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["foot"],
  attack: function () {
    console.log(player2.name + " Fight...");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement("div", "player" + playerObj.playerNum);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

function changeHP(player_1, player_2) {
  const $player1Life = document.querySelector(
    ".player" + player_1.playerNum + " .life"
  );
  const $player2Life = document.querySelector(
    ".player" + player_2.playerNum + " .life"
  );

  player_1.hp -= Math.ceil(Math.random() * 20);
  player_2.hp -= Math.ceil(Math.random() * 20);

  if (player_1.hp <= 0 || player_2.hp <= 0) {
    if (player_1.hp <= 0 && player_2.hp <= 0) {
      $arenas.appendChild(playerWin("draw"));
    } else if (player_1.hp > player_2.hp) {
      $arenas.appendChild(playerWin(player_1.name));
    } else {
      $arenas.appendChild(playerWin(player_2.name));
    }
    player_1.hp <= 0 ? (player_1.hp = 0) : (player_2.hp = 0);
    player_2.hp <= 0 ? (player_2.hp = 0) : (player_1.hp = 0);

    $randomButton.disabled = true;
  }
  console.log(player_1.hp);
  console.log(player_2.hp);

  $player1Life.style.width = player_1.hp + "%";
  $player2Life.style.width = player_2.hp + "%";
}

function playerWin(name) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = name + " win";

  return $winTitle;
}

$randomButton.addEventListener("click", function () {
  changeHP(player1, player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
