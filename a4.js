'use strict';

let main = document.querySelectorAll(".rightMain");
let out = document.querySelectorAll(".bottomOutValue");

main.forEach(value => {
  value.textContent = bookWidth['A4'];
});

out.forEach(value => {
  value.textContent = bookHeight['A4'];
});

