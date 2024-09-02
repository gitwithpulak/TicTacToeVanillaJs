let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let winPlyerModal = document.querySelector("#winPlyerModal");

let player = "x";

// Set Evenlistner at all box using forEach loop
boxes.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    //  Set player on clicked box innerHTML
    e.target.innerHTML = player;

    // Calculate current player is present how many boxes
    let blankArr = [];
    boxes.forEach((elem) => {
      if (elem.innerHTML == player) {
        blankArr.push(elem.id);
      }
    });

    // call 'playerWon' function for take result
    let result = playerWon(blankArr, player);
    if (result) {
      // if result true
      let wonBoxArr = result[1];
      boxes.forEach((elem) => {
        if (wonBoxArr.includes(elem.id)) {
          elem.style.backgroundColor = "lightGreen";
        }
      });
      winPlyerModal.innerHTML = `Player <span style="color:red;font-size:1.2em" >${player.toUpperCase()}</span> won the game`;
    }
    player == "x" ? (player = "o") : (player = "x");
  });
});

// This function check if current player won or not
const playerWon = (arr, plyr) => {
  if (arr.includes("1") && arr.includes("2") && arr.includes("3")) {
    return [plyr, ["1", "2", "3"]];
  } else if (arr.includes("4") && arr.includes("5") && arr.includes("6")) {
    return [plyr, ["4", "5", "6"]];
  } else if (arr.includes("7") && arr.includes("8") && arr.includes("9")) {
    return [plyr, ["7", "8", "9"]];
  } else if (arr.includes("1") && arr.includes("5") && arr.includes("9")) {
    return [plyr, ["1", "5", "9"]];
  } else if (arr.includes("3") && arr.includes("5") && arr.includes("7")) {
    return [plyr, ["3", "5", "7"]];
  } else if (arr.includes("3") && arr.includes("6") && arr.includes("9")) {
    return [plyr, ["3", "6", "9"]];
  } else if (arr.includes("2") && arr.includes("5") && arr.includes("8")) {
    return [plyr, ["2", "5", "8"]];
  } else if (arr.includes("1") && arr.includes("4") && arr.includes("7")) {
    return [plyr, ["1", "4", "7"]];
  } else {
    return null;
  }
};

// Reset button
reset_btn.addEventListener("click", () => {
  boxes.forEach((elem) => {
    elem.innerHTML = "";
  });
  boxes.forEach((elem) => {
    elem.style.backgroundColor = "";
  });
  winPlyerModal.innerHTML = "";
  player = "x";
});
