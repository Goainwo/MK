let player1 = {
  // объект
  name: "John",
  hp: 100,
  img: "",
  weapon: "hand",
};

let player2 = {
  // объект
  name: "Dow",
  hp: 95,
  img: "",
  weapon: "foot",
};

player1.attack = function () {
  console.log(player1.name + " fight");
};

player2.attack = function () {
  console.log(player2.name + " fight");
};

function createPlayer(player, name, hp) {
  let $newDiv = document.createElement("div");
  $newDiv.classList = "player1";
}
