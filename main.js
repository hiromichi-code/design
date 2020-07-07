'use strict';

// const tgtDropdownMenu = document.querySelector("#direction");

// tgtDropdownMenu.addEventListener('change', (e)　=> {
//   let value = tgtDropdownMenu.value;
//   if(value === "left") {
//     // let myStyle = {
//     //   transform: 'rotate(90deg)',
//     //   display: 'inline-block',
//     // }
//     let a = document.getElementById('mainText1');
//     a.style.transform = 'rotate(90deg)';
//     // a.style.display = 'inline-block';
    
//     // document.getElementById('mainText2').style.transform = 'rotate(45deg)';
//     // document.getElementById('mainText3').style;
//     // document.getElementById('mainText4').style;
//   }
// });

// tgtDropdownMenu.addEventListener('change', (e)　=> {
//   let value = tgtDropdownMenu.value;
//   if(value === "right"){
    
//   }
// });

const tgtDropdownMenu = document.querySelector("#book-size");

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "A4"){
    document.getElementById('main1').textContent ="210";
    document.getElementById('main2').textContent ="210";
    document.getElementById('main3').textContent ="210";
    document.getElementById('main4').textContent ="210";
    document.getElementById('bottom-out1').textContent ="297";
    document.getElementById('bottom-out2').textContent ="297";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "A5"){
    document.getElementById('main1').textContent ="148";
    document.getElementById('main2').textContent ="148";
    document.getElementById('main3').textContent ="148";
    document.getElementById('main4').textContent ="148";
    document.getElementById('bottom-out1').textContent ="210";
    document.getElementById('bottom-out2').textContent ="210";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "B5"){
    document.getElementById('main1').textContent ="182";
    document.getElementById('main2').textContent ="182";
    document.getElementById('main3').textContent ="182";
    document.getElementById('main4').textContent ="182";
    document.getElementById('bottom-out1').textContent ="257";
    document.getElementById('bottom-out2').textContent ="257";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "B6"){
    document.getElementById('main1').textContent ="128";
    document.getElementById('main2').textContent ="128";
    document.getElementById('main3').textContent ="128";
    document.getElementById('main4').textContent ="128";
    document.getElementById('bottom-out1').textContent ="182";
    document.getElementById('bottom-out2').textContent ="182";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "四六判"){
    document.getElementById('main1').textContent ="128";
    document.getElementById('main2').textContent ="128";
    document.getElementById('main3').textContent ="128";
    document.getElementById('main4').textContent ="128";
    document.getElementById('bottom-out1').textContent ="188";
    document.getElementById('bottom-out2').textContent ="188";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "A6"){
    document.getElementById('main1').textContent ="105";
    document.getElementById('main2').textContent ="105";
    document.getElementById('main3').textContent ="105";
    document.getElementById('main4').textContent ="105";
    document.getElementById('bottom-out1').textContent ="148";
    document.getElementById('bottom-out2').textContent ="148";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "B4"){
    document.getElementById('main1').textContent ="384";
    document.getElementById('main2').textContent ="384";
    document.getElementById('main3').textContent ="384";
    document.getElementById('main4').textContent ="384";
    document.getElementById('bottom-out1').textContent ="257";
    document.getElementById('bottom-out2').textContent ="257";
  }
});

tgtDropdownMenu.addEventListener('change', (e)　=> {
  let value = tgtDropdownMenu.value;
  if(value === "A3"){
    document.getElementById('main1').textContent ="420";
    document.getElementById('main2').textContent ="420";
    document.getElementById('main3').textContent ="420";
    document.getElementById('main4').textContent ="420";
    document.getElementById('bottom-out1').textContent ="297";
    document.getElementById('bottom-out2').textContent ="297";
  }
});