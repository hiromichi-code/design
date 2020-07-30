'use strict';

// const tgtOneDropdownMenu = document.querySelector("#bookSize");
  
//   tgtOneDropdownMenu.addEventListener('change', (e)　=> {
//     let valueOne = tgtOneDropdownMenu.value;
//     let main = document.querySelectorAll(".rightMain");
//     let out = document.querySelectorAll(".bottomOutValue");

//     if(valueOne === ""){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = "";
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = "";
//       }
//     } else if(valueOne === "A4"){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = bookWidth["A4"];
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = bookHeight["A4"];
//       }
//     } else if(valueOne === "B5"){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = bookWidth["B5"];
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = bookHeight["B5"];
//       }
//     } else if(valueOne === "A5"){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = bookWidth["A5"];
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = bookHeight["A5"];
//       }
//     } else if(valueOne === "46"){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = bookWidth["四六判"];
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = bookHeight["四六判"];
//       }
//     } else if(valueOne === "B6"){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = bookWidth["B6"];
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = bookHeight["B6"];
//       }
//     } else if(valueOne === "A6"){
//       for(let i = 0; i < main.length; i++){
//         main[i].textContent = bookWidth["A6"];
//       }
//       for(let i = 0; i < out.length; i++){
//         out[i].textContent = bookHeight["A6"];
//       }
//     }
    
//   });

const onChangeBookSize = (e)　=> {
  const valueOne = e.target.value;
  const main = document.querySelectorAll(".rightMain");
  const out = document.querySelectorAll(".bottomOutValue");
  const paperSizeSelectorList = document.querySelectorAll('.paper-size-selector');
  paperSizeSelectorList.forEach((item) => {
    if (!item.classList.contains('is-hidden')) {
      item.classList.add('is-hidden');
    }
  });
  const paperSize = document.querySelector("#paperSize" + valueOne);
  if (paperSize) {
    paperSize.classList.remove('is-hidden');
  }
​
  if(valueOne){
    for(let i = 0; i < main.length; i++){
      main[i].textContent = bookWidth[valueOne];
    }
    for(let i = 0; i < out.length; i++){
      out[i].textContent = bookHeight[valueOne];
    }
  } else {
    for(let i = 0; i < main.length; i++){
      main[i].textContent = "";
    }
    for(let i = 0; i < out.length; i++){
      out[i].textContent = "";
    }
  }
};

  const tgtDropdownMenu = document.querySelector("#direction");

  tgtDropdownMenu.addEventListener('change', (e) => {
    let value = tgtDropdownMenu.value;
    if(value === "directionNone") {
      let myStyle = {
        fontSize: '0px'
      }
      let a = document.getElementById('mainText1').style;
      let b = document.getElementById('mainText2').style;
      let c = document.getElementById('mainText3').style;
      let d = document.getElementById('mainText4').style;
      let e = document.getElementById('mainText5').style;
      let f = document.getElementById('mainText6').style;
      let g = document.getElementById('mainText7').style;
      let h = document.getElementById('mainText8').style;
      let i = document.getElementById('mainText9').style;
      let j = document.getElementById('mainText10').style;
      let k = document.getElementById('mainText11').style;
      let l = document.getElementById('mainText12').style;
      let m = document.getElementById('mainText13').style;
      let n = document.getElementById('mainText14').style;
      let o = document.getElementById('mainText15').style;
      let p = document.getElementById('mainText16').style;
      for(let prop in myStyle){
        a[prop] = myStyle[prop];
        b[prop] = myStyle[prop];
        c[prop] = myStyle[prop];
        d[prop] = myStyle[prop];
        e[prop] = myStyle[prop];
        f[prop] = myStyle[prop];
        g[prop] = myStyle[prop];
        h[prop] = myStyle[prop];
        i[prop] = myStyle[prop];
        j[prop] = myStyle[prop];
        k[prop] = myStyle[prop];
        l[prop] = myStyle[prop];
        m[prop] = myStyle[prop];
        n[prop] = myStyle[prop];
        o[prop] = myStyle[prop];
        p[prop] = myStyle[prop];
      }
    } else {
      let myStyle = {
        fontSize: '48px'
      }
      let a = document.getElementById('mainText1').style;
      let b = document.getElementById('mainText2').style;
      let c = document.getElementById('mainText3').style;
      let d = document.getElementById('mainText4').style;
      let e = document.getElementById('mainText5').style;
      let f = document.getElementById('mainText6').style;
      let g = document.getElementById('mainText7').style;
      let h = document.getElementById('mainText8').style;
      let i = document.getElementById('mainText9').style;
      let j = document.getElementById('mainText10').style;
      let k = document.getElementById('mainText11').style;
      let l = document.getElementById('mainText12').style;
      let m = document.getElementById('mainText13').style;
      let n = document.getElementById('mainText14').style;
      let o = document.getElementById('mainText15').style;
      let p = document.getElementById('mainText16').style;
      for(let prop in myStyle){
        a[prop] = myStyle[prop];
        b[prop] = myStyle[prop];
        c[prop] = myStyle[prop];
        d[prop] = myStyle[prop];
        e[prop] = myStyle[prop];
        f[prop] = myStyle[prop];
        g[prop] = myStyle[prop];
        h[prop] = myStyle[prop];
        i[prop] = myStyle[prop];
        j[prop] = myStyle[prop];
        k[prop] = myStyle[prop];
        l[prop] = myStyle[prop];
        m[prop] = myStyle[prop];
        n[prop] = myStyle[prop];
        o[prop] = myStyle[prop];
        p[prop] = myStyle[prop];
      }
    }
  });
  
  tgtDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtDropdownMenu.value;
    if(value === "left") {
      document.getElementById('mainText1').textContent = "六";
      document.getElementById('mainText2').textContent = "11";
      document.getElementById('mainText3').textContent = "10";
      document.getElementById('mainText4').textContent = "7";
      document.getElementById('mainText9').textContent = "八";
      document.getElementById('mainText10').textContent = "九";
      document.getElementById('mainText11').textContent = "12";
      document.getElementById('mainText12').textContent = "5";
      let myStyle = {
        transform: 'rotate(90deg)'
      }
      let a = document.getElementById('mainText1').style;
      let b = document.getElementById('mainText2').style;
      let c = document.getElementById('mainText3').style;
      let d = document.getElementById('mainText4').style;
      let i = document.getElementById('mainText9').style;
      let j = document.getElementById('mainText10').style;
      let k = document.getElementById('mainText11').style;
      let l = document.getElementById('mainText12').style;
      for(let prop in myStyle){
        a[prop] = myStyle[prop];
        b[prop] = myStyle[prop];
        c[prop] = myStyle[prop];
        d[prop] = myStyle[prop];
        i[prop] = myStyle[prop];
        j[prop] = myStyle[prop];
        k[prop] = myStyle[prop];
        l[prop] = myStyle[prop];
      }
    }
  });
  
  tgtDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtDropdownMenu.value;
    if(value === "left"){
      document.getElementById('mainText5').textContent = "3";
      document.getElementById('mainText6').textContent = "14";
      document.getElementById('mainText7').textContent = "15";
      document.getElementById('mainText8').textContent = "2";
      document.getElementById('mainText13').textContent = "1";
      document.getElementById('mainText14').textContent = "16";
      document.getElementById('mainText15').textContent = "13";
      document.getElementById('mainText16').textContent = "4";
      let myStyle = {
        transform: 'rotate(-90deg)'
      }
      let e = document.getElementById('mainText5').style;
      let f = document.getElementById('mainText6').style;
      let g = document.getElementById('mainText7').style;
      let h = document.getElementById('mainText8').style;
      let m = document.getElementById('mainText13').style;
      let n = document.getElementById('mainText14').style;
      let o = document.getElementById('mainText15').style;
      let p = document.getElementById('mainText16').style;
      for(let prop in myStyle){
        e[prop] = myStyle[prop];
        f[prop] = myStyle[prop];
        g[prop] = myStyle[prop];
        h[prop] = myStyle[prop];
        m[prop] = myStyle[prop];
        n[prop] = myStyle[prop];
        o[prop] = myStyle[prop];
        p[prop] = myStyle[prop];
      }
    }
  });
// 右綴じの場合の処理
  tgtDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtDropdownMenu.value;
    if(value === "right") {
      document.getElementById('mainText1').textContent = "六";
      document.getElementById('mainText2').textContent = "11";
      document.getElementById('mainText3').textContent = "10";
      document.getElementById('mainText4').textContent = "7";
      document.getElementById('mainText9').textContent = "八";
      document.getElementById('mainText10').textContent = "九";
      document.getElementById('mainText11').textContent = "12";
      document.getElementById('mainText12').textContent = "5";
      let myStyle = {
        transform: 'rotate(-90deg)'
      }
      let a = document.getElementById('mainText1').style;
      let b = document.getElementById('mainText2').style;
      let c = document.getElementById('mainText3').style;
      let d = document.getElementById('mainText4').style;
      let i = document.getElementById('mainText9').style;
      let j = document.getElementById('mainText10').style;
      let k = document.getElementById('mainText11').style;
      let l = document.getElementById('mainText12').style;
      for(let prop in myStyle){
        a[prop] = myStyle[prop];
        b[prop] = myStyle[prop];
        c[prop] = myStyle[prop];
        d[prop] = myStyle[prop];
        i[prop] = myStyle[prop];
        j[prop] = myStyle[prop];
        k[prop] = myStyle[prop];
        l[prop] = myStyle[prop];
      }
    }
  });

  tgtDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtDropdownMenu.value;
    if(value === "right"){
      document.getElementById('mainText5').textContent = "3";
      document.getElementById('mainText6').textContent = "14";
      document.getElementById('mainText7').textContent = "15";
      document.getElementById('mainText8').textContent = "2";
      document.getElementById('mainText13').textContent = "1";
      document.getElementById('mainText14').textContent = "16";
      document.getElementById('mainText15').textContent = "13";
      document.getElementById('mainText16').textContent = "4";
      let myStyle = {
        transform: 'rotate(90deg)'
      }
      let e = document.getElementById('mainText5').style;
      let f = document.getElementById('mainText6').style;
      let g = document.getElementById('mainText7').style;
      let h = document.getElementById('mainText8').style;
      let m = document.getElementById('mainText13').style;
      let n = document.getElementById('mainText14').style;
      let o = document.getElementById('mainText15').style;
      let p = document.getElementById('mainText16').style;
      for(let prop in myStyle){
        e[prop] = myStyle[prop];
        f[prop] = myStyle[prop];
        g[prop] = myStyle[prop];
        h[prop] = myStyle[prop];
        m[prop] = myStyle[prop];
        n[prop] = myStyle[prop];
        o[prop] = myStyle[prop];
        p[prop] = myStyle[prop];
      }
    }
  });


const tgtA4DropdownMenu = document.querySelector("#paperSizeA4");

tgtA4DropdownMenu.addEventListener('change',(e) => {
let value = tgtA4DropdownMenu.value;

  if(value === "paperSizeNone"){
    outerCut[0].textContent = "";
    outerCut[1].textContent = "";
    innerCut[0].textContent = "";
    innerCut[1].textContent = "";
    shortOut.textContent = kAllShortA4;
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

// 製本方法選択処理

const tgtFourDropdownMenu = document.querySelector("#method");
let outerCutSize = document.querySelectorAll(".l-front>.l-right>.right>.outerCut");
let innerCutSize = document.querySelectorAll(".l-front>.l-right>.right>.innerCut");
let shaving = document.querySelectorAll(".rightShaving");

tgtFourDropdownMenu.addEventListener('change', (e) => {
  let value = tgtFourDropdownMenu.value;
  if(value === "") {
    outerCutSize[0].textContent = "";
    innerCutSize[0].textContent = "";
    innerCutSize[1].textContent = "";
    outerCutSize[1].textContent = "";
    shaving[0].textContent = "";
    shaving[1].textContent = "";
    shaving[2].textContent = "";
    shaving[3].textContent = "";
  } else if (value === "perfect"){
    outerCutSize[0].textContent = outerCutSize[0].textContent-shavingApply;
    innerCutSize[0].textContent = innerCutSize[0].textContent-shavingApply;
    innerCutSize[1].textContent = innerCutSize[1].textContent-shavingApply;
    outerCutSize[1].textContent = outerCutSize[1].textContent-shavingApply;
    shaving[0].textContent = shavingApply;
    shaving[1].textContent = shavingApply;
    shaving[2].textContent = shavingApply;
    shaving[3].textContent = shavingApply;
  }else if(value === "binding") {
    outerCutSize[0].textContent = kAllLongA4;
    innerCutSize[0].textContent = kAllLongA4;
    innerCutSize[1].textContent = kAllLongA4;
    outerCutSize[1].textContent = kAllLongA4;
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }else if(value === "sewing") {
    outerCutSize[0].textContent = kAllLongA4-outWrap;
    innerCutSize[0].textContent = kAllLongA4+outWrap;
    innerCutSize[1].textContent = kAllLongA4+outWrap
    outerCutSize[1].textContent = kAllLongA4-outWrap;
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }else if(value === "thread") {
    outerCutSize[0].textContent = kAllLongA4+outWrap;
    innerCutSize[0].textContent = kAllLongA4-outWrap;
    innerCutSize[1].textContent = kAllLongA4-outWrap
    outerCutSize[1].textContent = kAllLongA4+outWrap;
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }
});