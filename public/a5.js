'use strict';

main.forEach(value => {
  value.textContent = bookWidth['A5'];
});

out.forEach(value => {
  value.textContent = bookHeight['A5'];
});

const tgtA5DropdownMenu = document.querySelector("#paperSizeA5");

tgtA5DropdownMenu.addEventListener('change',(e) => {
let value = tgtA5DropdownMenu.value;

  if(value === "paperSizeNone"){
    outerCut[0].textContent = "";
    outerCut[1].textContent = "";
    innerCut[0].textContent = "";
    innerCut[1].textContent = "";
    shortOut.textContent = "";
  }else if(value === "kHalf"){
    outerCut[0].textContent = kHalfLongA5;
    outerCut[1].textContent = kHalfLongA5;
    innerCut[0].textContent = kHalfLongA5;
    innerCut[1].textContent = kHalfLongA5;
    shortOut.textContent = kHalfShortA5;
  }else if(value === "aHalf"){
    outerCut[0].textContent = aHalfLongA5;
    outerCut[1].textContent = aHalfLongA5;
    innerCut[0].textContent = aHalfLongA5;
    innerCut[1].textContent = aHalfLongA5;
    shortOut.textContent = aHalfShortA5;
  }
});