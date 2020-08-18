'use strict';

main.forEach(value => {
  value.textContent = bookWidth['A4'];
});

out.forEach(value => {
  value.textContent = bookHeight['A4'];
});

const tgtA4DropdownMenu = document.querySelector("#paperSizeA4");

tgtA4DropdownMenu.addEventListener('change',(e) => {
let value = tgtA4DropdownMenu.value;

  if(value === "paperSizeNone"){
    outerCut[0].textContent = "";
    outerCut[1].textContent = "";
    innerCut[0].textContent = "";
    innerCut[1].textContent = "";
    shortOut.textContent = "";
  }else if(value === "kAll"){
    outerCut[0].textContent = kAllLongA4;
    outerCut[1].textContent = kAllLongA4;
    innerCut[0].textContent = kAllLongA4;
    innerCut[1].textContent = kAllLongA4;
    shortOut.textContent = kAllShortA4;
  }else if(value === "aAll"){
    outerCut[0].textContent = aAllLongA4;
    outerCut[1].textContent = aAllLongA4;
    innerCut[0].textContent = aAllLongA4;
    innerCut[1].textContent = aAllLongA4;
    shortOut.textContent = aAllShortA4;
  }
});

