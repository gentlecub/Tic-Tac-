const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCell = [
  "", "", "", "", "", "", "", "", "",
];
let go = "circle";
infoDisplay.textContent = "Circule goes first"
function createBoard() {
  startCell.forEach((cell, index) => {
    const cellEmlement = document.createElement("div")
    cellEmlement.classList.add("square");
    cellEmlement.id = index
    cellEmlement.addEventListener("click", addGo)
    gameboard.append(cellEmlement);
  })
}
createBoard()

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "it is now " + go + "s go.";
  e.target.removeEventListener("click", addGo);
  
  checkScore()
}
function checkScore() {
 const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  winningCombos.forEach(array => {
    const circleWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains("circle"));
    
    if (circleWins) {
      infoDisplay.textContent = "Circle Win";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    } 
    
  })

  winningCombos.forEach(array => {
    const croosWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains("cross"));
    
    if (croosWins) {
      infoDisplay.textContent = "Croos Win";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    } 
    
  })



}