'use strict';

main.forEach(value => {
  value.textContent = bookWidth['B5'];
});

out.forEach(value => {
  value.textContent = bookHeight['B5'];
});

const tgtB5DropdownMenu = document.querySelector("#paperSizeB5");

tgtB5DropdownMenu.addEventListener('change',(e) => {
let value = tgtB5DropdownMenu.value;

  if(value === "paperSizeNone"){
    outerCut[0].textContent = "";
    outerCut[1].textContent = "";
    innerCut[0].textContent = "";
    innerCut[1].textContent = "";
    shortOut.textContent = "";
  }else if(value === "four-Six-half"){
    outerCut[0].textContent = fourSixHalfLongB5;
    outerCut[1].textContent = fourSixHalfLongB5;
    innerCut[0].textContent = fourSixHalfLongB5;
    innerCut[1].textContent = fourSixHalfLongB5;
    shortOut.textContent = fourSixHalfShortB5;
  }else if(value === "bAll-Half"){
    outerCut[0].textContent = bHalfLongB5;
    outerCut[1].textContent = bHalfLongB5;
    innerCut[0].textContent = bHalfLongB5;
    innerCut[1].textContent = bHalfLongB5;
    shortOut.textContent = bHalfShortB5;
  }
});