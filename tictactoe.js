function assignSpace(space, owner) {
  const image = document.createElement('img');
  image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
  space.appendChild(image);

  const index = parseInt(space.dataset.index);
  takenBoxes[index] = owner;
  const indexToRemove = freeBoxes.indexOf(space);
  freeBoxes.splice(indexToRemove, 1);
  space.removeEventListener('click', changeToX);
}

function changeToX(event) {
  assignSpace(event.currentTarget, 'x');

  if (isGameOver()) {
    displayWinner();
  } else {
    computerChooseO();
  }
}

function computerChooseO() {

const allBoxes  = document.querySelectorAll('#grid div');

//The key to an unbeatable computer lies in not only blocking the human player,
//but in how the first 4 turns play out. This covers the first turn, and makes sure
//the computer either gets a corner or the middle.
  if(freeBoxes.length == 8){
    if(takenBoxes[0] !== undefined ||
      takenBoxes[2] !== undefined) {
        const freeSpace = freeBoxes[3];
        assignSpace(freeSpace, 'o');
      }
    else if(takenBoxes[6] !== undefined ||
            takenBoxes[8] !== undefined) {
            const freeSpace = freeBoxes[4];
            assignSpace(freeSpace, 'o');
      }
      else
      {
        const freeSpace = freeBoxes[0];
        assignSpace(freeSpace, 'o');
      }
    }

//I had to go back and set up this turn afterwards, when the blocking turned out 
//to not be enough. There's one tricky move the human player can do, which is to 
//choose a corner, then an opposite middle. If not blocked properly, they will win.
//This checks for the attempt, and blocks them effecitvely.
  else if(freeBoxes.length == 6){
    if (takenBoxes[0] === takenBoxes[8] &&
    takenBoxes[0] !== undefined){
    const freeSpace = allBoxes[1];
    assignSpace(freeSpace, 'o');
      }

  else if(
    takenBoxes[2] === takenBoxes[6] &&
    takenBoxes[2] !== undefined){
    const freeSpace = allBoxes[7];
    assignSpace(freeSpace, 'o');
          }

  else if(
    takenBoxes[0] === takenBoxes[5]  &&
    takenBoxes[0] !== undefined){
    const freeSpace = allBoxes[2];
    assignSpace(freeSpace, 'o');
          }

  else if(
    takenBoxes[0] === takenBoxes[7]  &&
    takenBoxes[0] !== undefined){
    const freeSpace = allBoxes[6];
    assignSpace(freeSpace, 'o');
          }

  else if(
    takenBoxes[2] === takenBoxes[3]  &&
    takenBoxes[2] !== undefined){
    const freeSpace = allBoxes[0];
    assignSpace(freeSpace, 'o');
          }
  else if(
    takenBoxes[2] === takenBoxes[7]  &&
    takenBoxes[2] !== undefined){
    const freeSpace = allBoxes[8];
    assignSpace(freeSpace, 'o');
          }
  else if(
    takenBoxes[6] === takenBoxes[1]  &&
    takenBoxes[6] !== undefined){
    const freeSpace = allBoxes[0];
    assignSpace(freeSpace, 'o');
          }
  else if(
    takenBoxes[6] === takenBoxes[5]  &&
    takenBoxes[6] !== undefined){
    const freeSpace = allBoxes[8];
    assignSpace(freeSpace, 'o');
          } 
  else if(
    takenBoxes[8] === takenBoxes[1]  &&
    takenBoxes[8] !== undefined){
    const freeSpace = allBoxes[2];
    assignSpace(freeSpace, 'o');
          }
  else if(
    takenBoxes[8] === takenBoxes[3]  &&
    takenBoxes[8] !== undefined){
    const freeSpace = allBoxes[6];
    assignSpace(freeSpace, 'o');
          } 
          else {
            if(takenBoxes[0] === takenBoxes[2] && 
                takenBoxes[1] === undefined && 
                takenBoxes[0] !== undefined) {
                const freeSpace = allBoxes[1];
                assignSpace(freeSpace, 'o');
              }
            else if(takenBoxes[0] === takenBoxes[1] &&
                takenBoxes [2] === undefined && 
                takenBoxes[0] !== undefined) {
                const freeSpace = allBoxes[2];
                assignSpace(freeSpace, 'o');
              }
            else if(takenBoxes[0] === takenBoxes[8] &&
                takenBoxes [4] === undefined && 
                takenBoxes[0] !== undefined) {
                const freeSpace = allBoxes[4];
                assignSpace(freeSpace, 'o');
              }
            else if(takenBoxes[0] === takenBoxes[4] &&
              takenBoxes [8] === undefined && 
              takenBoxes[0] !== undefined) {
              const freeSpace = allBoxes[8];
              assignSpace(freeSpace, 'o');
              }
            else if(takenBoxes[0] === takenBoxes[6] &&
              takenBoxes [3] === undefined && 
              takenBoxes[0] !== undefined) {
              const freeSpace = allBoxes[3];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[0] === takenBoxes[3] &&
              takenBoxes [6] === undefined && 
              takenBoxes[0] !== undefined) {
              const freeSpace = allBoxes[6];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[1] === takenBoxes[7] &&
              takenBoxes [4] === undefined && 
              takenBoxes[1] !== undefined) {
              const freeSpace = allBoxes[4];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[1] === takenBoxes[4] &&
              takenBoxes [7] === undefined && 
              takenBoxes[1] !== undefined) {
              const freeSpace = allBoxes[7];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[2] === takenBoxes[1] &&
              takenBoxes [0] === undefined && 
              takenBoxes[2] !== undefined) {
              const freeSpace = allBoxes[0];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[2] === takenBoxes[4] &&
              takenBoxes [6] === undefined && 
              takenBoxes[2] !== undefined) {
              const freeSpace = allBoxes[6];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[2] === takenBoxes[6] &&
              takenBoxes [4] === undefined && 
              takenBoxes[2] !== undefined) {
              const freeSpace = allBoxes[4];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[2] === takenBoxes[5] &&
              takenBoxes [8] === undefined && 
              takenBoxes[2] !== undefined) {
              const freeSpace = allBoxes[8];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[2] === takenBoxes[8] &&
              takenBoxes [5] === undefined && 
              takenBoxes[2] !== undefined) {
              const freeSpace = allBoxes[5];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[3] === takenBoxes[4] &&
              takenBoxes [5] === undefined && 
              takenBoxes[3] !== undefined) {
              const freeSpace = allBoxes[5];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[3] === takenBoxes[5] &&
              takenBoxes [4] === undefined && 
              takenBoxes[3] !== undefined) {
              const freeSpace = allBoxes[4];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[5] === takenBoxes[4] &&
              takenBoxes [3] === undefined && 
              takenBoxes[5] !== undefined) {
              const freeSpace = allBoxes[3];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[6] === takenBoxes[3] &&
              takenBoxes [0] === undefined && 
              takenBoxes[6] !== undefined) {
              const freeSpace = allBoxes[0];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[6] === takenBoxes[4] &&
              takenBoxes [2] === undefined && 
              takenBoxes[6] !== undefined) {
              const freeSpace = allBoxes[2];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[6] === takenBoxes[7] &&
              takenBoxes [8] === undefined && 
              takenBoxes[6] !== undefined) {
              const freeSpace = allBoxes[8];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[6] === takenBoxes[8] &&
              takenBoxes [7] === undefined && 
              takenBoxes[6] !== undefined) {
              const freeSpace = allBoxes[7];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[7] === takenBoxes[4] &&
              takenBoxes [1] === undefined && 
              takenBoxes[7] !== undefined) {
              const freeSpace = allBoxes[1];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[8] === takenBoxes[7] &&
              takenBoxes [6] === undefined && 
              takenBoxes[8] !== undefined) {
              const freeSpace = allBoxes[6];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[8] === takenBoxes[4] &&
              takenBoxes [0] === undefined && 
              takenBoxes[8] !== undefined) {
              const freeSpace = allBoxes[0];
              assignSpace(freeSpace, 'o');
            }
            else if(takenBoxes[8] === takenBoxes[5] &&
              takenBoxes [2] === undefined && 
              takenBoxes[8] !== undefined) {
              const freeSpace = allBoxes[2];
              assignSpace(freeSpace, 'o');
            }
           else //This means that worst case, It defaults to the first open box
              {
                const freeSpace = freeBoxes[0];
                assignSpace(freeSpace, 'o');
              }
        
            }
                

  }

//Finally we have the meat of the code. It's not elegant, but it works exactly how it should.
//We always check for two in a row/column/diagonal and if there are two we put in the third.
//If it's two 'x', then we block, if it's two 'o' then we've won. 
   else {
    if(takenBoxes[0] === takenBoxes[2] && 
        takenBoxes[1] === undefined && 
        takenBoxes[0] !== undefined) {
        const freeSpace = allBoxes[1];
        assignSpace(freeSpace, 'o');
      }
    else if(takenBoxes[0] === takenBoxes[1] &&
        takenBoxes [2] === undefined && 
        takenBoxes[0] !== undefined) {
        const freeSpace = allBoxes[2];
        assignSpace(freeSpace, 'o');
      }
    else if(takenBoxes[0] === takenBoxes[8] &&
        takenBoxes [4] === undefined && 
        takenBoxes[0] !== undefined) {
        const freeSpace = allBoxes[4];
        assignSpace(freeSpace, 'o');
      }
    else if(takenBoxes[0] === takenBoxes[4] &&
      takenBoxes [8] === undefined && 
      takenBoxes[0] !== undefined) {
      const freeSpace = allBoxes[8];
      assignSpace(freeSpace, 'o');
      }
    else if(takenBoxes[0] === takenBoxes[6] &&
      takenBoxes [3] === undefined && 
      takenBoxes[0] !== undefined) {
      const freeSpace = allBoxes[3];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[0] === takenBoxes[3] &&
      takenBoxes [6] === undefined && 
      takenBoxes[0] !== undefined) {
      const freeSpace = allBoxes[6];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[1] === takenBoxes[7] &&
      takenBoxes [4] === undefined && 
      takenBoxes[1] !== undefined) {
      const freeSpace = allBoxes[4];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[1] === takenBoxes[4] &&
      takenBoxes [7] === undefined && 
      takenBoxes[1] !== undefined) {
      const freeSpace = allBoxes[7];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[2] === takenBoxes[1] &&
      takenBoxes [0] === undefined && 
      takenBoxes[2] !== undefined) {
      const freeSpace = allBoxes[0];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[2] === takenBoxes[4] &&
      takenBoxes [6] === undefined && 
      takenBoxes[2] !== undefined) {
      const freeSpace = allBoxes[6];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[2] === takenBoxes[6] &&
      takenBoxes [4] === undefined && 
      takenBoxes[2] !== undefined) {
      const freeSpace = allBoxes[4];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[2] === takenBoxes[5] &&
      takenBoxes [8] === undefined && 
      takenBoxes[2] !== undefined) {
      const freeSpace = allBoxes[8];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[2] === takenBoxes[8] &&
      takenBoxes [5] === undefined && 
      takenBoxes[2] !== undefined) {
      const freeSpace = allBoxes[5];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[3] === takenBoxes[4] &&
      takenBoxes [5] === undefined && 
      takenBoxes[3] !== undefined) {
      const freeSpace = allBoxes[5];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[3] === takenBoxes[5] &&
      takenBoxes [4] === undefined && 
      takenBoxes[3] !== undefined) {
      const freeSpace = allBoxes[4];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[5] === takenBoxes[4] &&
      takenBoxes [3] === undefined && 
      takenBoxes[5] !== undefined) {
      const freeSpace = allBoxes[3];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[6] === takenBoxes[3] &&
      takenBoxes [0] === undefined && 
      takenBoxes[6] !== undefined) {
      const freeSpace = allBoxes[0];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[6] === takenBoxes[4] &&
      takenBoxes [2] === undefined && 
      takenBoxes[6] !== undefined) {
      const freeSpace = allBoxes[2];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[6] === takenBoxes[7] &&
      takenBoxes [8] === undefined && 
      takenBoxes[6] !== undefined) {
      const freeSpace = allBoxes[8];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[6] === takenBoxes[8] &&
      takenBoxes [7] === undefined && 
      takenBoxes[6] !== undefined) {
      const freeSpace = allBoxes[7];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[7] === takenBoxes[4] &&
      takenBoxes [1] === undefined && 
      takenBoxes[7] !== undefined) {
      const freeSpace = allBoxes[1];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[8] === takenBoxes[7] &&
      takenBoxes [6] === undefined && 
      takenBoxes[8] !== undefined) {
      const freeSpace = allBoxes[6];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[8] === takenBoxes[4] &&
      takenBoxes [0] === undefined && 
      takenBoxes[8] !== undefined) {
      const freeSpace = allBoxes[0];
      assignSpace(freeSpace, 'o');
    }
    else if(takenBoxes[8] === takenBoxes[5] &&
      takenBoxes [2] === undefined && 
      takenBoxes[8] !== undefined) {
      const freeSpace = allBoxes[2];
      assignSpace(freeSpace, 'o');
    }
   else //This means that worst case, It defaults to the first open box
      {
        const freeSpace = freeBoxes[0];
        assignSpace(freeSpace, 'o');
      }

    }


  if (isGameOver()) {
    displayWinner();
  }
}

function isGameOver() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner() {
  const winner = getWinner();

  const resultContainer = document.querySelector('#results');
  const header = document.createElement('img');
  const header1 = document.createElement('h1');
  if (winner === 'x') {
    header.src = 'human.png';
    header1.textContent = 'Wins!';
  } else if (winner === 'o') {
    header.src = 'computer.jpg';
    header1.textContent = 'Wins!';
  } else {
    header.src = 'tie.jpg';
    header.width = 500;
    header1.textContent = "It's a tie!";
  }
  resultContainer.appendChild(header);
  resultContainer.appendChild(header1);

  // Remove remaining event listeners
  for (const box of freeBoxes) {
    box.removeEventListener('click', changeToX);
  }
}

function checkBoxes(one, two, three) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

/*
function checkBoxes2(one, two) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

*/
// Returns 'x', 'o', or null for no winner yet.
// for each row and each column checks see if all 3 boxes are of the same types (meaning all x or all o).
function getWinner() 
{
  for (let col = 0; col < 3; col++) 
  {
    const offset = col * 3;
    // Check rows and columns.
    let result = checkBoxes(offset, 1 + offset, 2 + offset) ||
        checkBoxes(col, 3 + col, 6 + col);
    if (result) {
      return result;
    }
  }

  // Check diagonals
  return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

// ----
// MAIN
// ----

const X_IMAGE_URL = './cross.png';
const O_IMAGE_URL = './circle.png';

const freeBoxes = [];
// Map of box number -> 'x' or 'o'
const takenBoxes = {};

const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) 
{
  box.addEventListener('click', changeToX);
  freeBoxes.push(box);
}
