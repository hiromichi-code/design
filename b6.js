'use strict';

main.forEach(value => {
  value.textContent = bookWidth['B6'];
});

out.forEach(value => {
  value.textContent = bookHeight['B6'];
});

const tgtB6DropdownMenu = document.querySelector("#paperSizeB6");

tgtB6DropdownMenu.addEventListener('change',(e) => {
let value = tgtB6DropdownMenu.value;

  if(value === "paperSizeNone"){
    outerCut[0].textContent = "";
    outerCut[1].textContent = "";
    innerCut[0].textContent = "";
    innerCut[1].textContent = "";
    shortOut.textContent = "";
  }else if(value === "fourSixHalfHalf"){
    outerCut[0].textContent = fourSixHalfHalfLongB6;
    outerCut[1].textContent = fourSixHalfHalfLongB6;
    innerCut[0].textContent = fourSixHalfHalfLongB6;
    innerCut[1].textContent = fourSixHalfHalfLongB6;
    shortOut.textContent = fourSixHalfHalfShortB6;
  }else if(value === "bHalfHalf"){
    outerCut[0].textContent = bHalfHalfLongB6;
    outerCut[1].textContent = bHalfHalfLongB6;
    innerCut[0].textContent = bHalfHalfLongB6;
    innerCut[1].textContent = bHalfHalfLongB6;
    shortOut.textContent = bHalfHalfShortB6;
  }
});