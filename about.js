'use strict';


// 紙のサイズ：長辺
const paperLong = {
  菊全: 939,
  菊半: 636,
  菊四: 469,
  A全: 880,
  A半: 625,
  A四: 440,
  四六全: 1091,
  四六半: 788,
  四六四: 545,
  B全: 1085,
  B半: 765,
  B四: 542
};

// 紙のサイズ：短辺
const paperShort = {
  菊全: 636,
  菊半: 469,
  菊四: 318,
  A全: 625,
  A半: 440,
  A四: 312,
  四六全: 788,
  四六半: 545,
  四六四: 394,
  B全: 765,
  B半: 542,
  B四: 382
};

// 本の小口サイズ
const bookWidth = {
    A4: 210,
    B5: 182,
    A5: 148,
    B6: 128,
    四六判: 128,
    A6: 105,
};

// 本の天地サイズ
const bookHeight = {
    A4: 297,
    B5: 257,
    A5: 210,
    B6: 182,
    四六判: 188,
    A6: 148,
};

const PANEL_COUNT_width = 4;
const PANEL_COUNT_height = 2;
const CUT_COUNT = 4;
const cutNone = 0;
const shavingApply = 3;
const outWrap = 5;
let outerCut = document.querySelectorAll(".outerCut");
let innerCut = document.querySelectorAll(".innerCut");
let shortOut = document.querySelector(".shortOut");
const gripper = document.querySelector(".shortOutOne");
const UpDown = document.querySelectorAll(".shortIn");

let kAllLongA4 = (paperLong['菊全']-(bookWidth['A4']*PANEL_COUNT_width))/CUT_COUNT;
let kAllShortA4 = (paperShort['菊全']-(bookHeight['A4']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let aAllLongA4 = (paperLong['A全']-(bookWidth['A4']*PANEL_COUNT_width))/CUT_COUNT;
let aAllShortA4 = (paperShort['A全']-(bookHeight['A4']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let fourSixHalfLongB5 = (paperLong['四六半']-(bookWidth['B5']*PANEL_COUNT_width))/CUT_COUNT;
let fourSixHalfShortB5 = (paperShort['四六半']-(bookHeight['B5']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let bHalfLongB5 = (paperLong['B半']-(bookWidth['B5']*PANEL_COUNT_width))/CUT_COUNT;
let bHalfShortB5 = (paperShort['B半']-(bookHeight['B5']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let kHalfLongB5 = (paperLong['菊半']-(bookWidth['A5']*PANEL_COUNT_width))/CUT_COUNT;
let kHalfShortB5 = (paperShort['菊半']-(bookHeight['A5']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let aHalfLongB5 = (paperLong['A半']-(bookWidth['A5']*PANEL_COUNT_width))/CUT_COUNT;
let aHalfShortB5 = (paperShort['A半']-(bookHeight['A5']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let fourSixHalfHalfLongFourSix = (paperLong['四六四']-(bookWidth['四六判']*PANEL_COUNT_width))/CUT_COUNT;
let fourSixHalfHalfShortFourSix = (paperShort['四六四']-(bookHeight['四六判']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let bHalfHalfLongFourSix = (paperLong['B四']-(bookWidth['四六判']*PANEL_COUNT_width))/CUT_COUNT;
let bHalfHalfShortFourSix = (paperShort['B四']-(bookHeight['四六判']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let fourSixHalfHalfLongB6 = (paperLong['四六四']-(bookWidth['B6']*PANEL_COUNT_width))/CUT_COUNT;
let fourSixHalfHalfShortB6 = (paperShort['四六四']-(bookHeight['B6']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let bHalfHalfLongB6 = (paperLong['B四']-(bookWidth['B6']*PANEL_COUNT_width))/CUT_COUNT;
let bHalfHalfShortB6 = (paperShort['B四']-(bookHeight['B6']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let kHalfHalfLongA6 = (paperLong['菊四']-(bookWidth['A6']*PANEL_COUNT_width))/CUT_COUNT;
let kHalfHalfShortA6 = (paperShort['菊四']-(bookHeight['A6']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));

let aHalfHalfLongA6 = (paperLong['A四']-(bookWidth['A6']*PANEL_COUNT_width))/CUT_COUNT;
let aHalfHalfShortA6 = (paperShort['A四']-(bookHeight['A6']*PANEL_COUNT_height))-((Number(gripper.textContent)+Number(UpDown[0].textContent)+Number(UpDown[1].textContent)));


const tgtOneDropdownMenu = document.querySelector("#bookSize");
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let valueOne = tgtOneDropdownMenu.value;
    let main = document.querySelectorAll(".rightMain");
    let out = document.querySelectorAll(".bottomOutValue");

    if(valueOne === "bookSizeNone"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = "";
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = "";
      }
    } else if(valueOne === "A4"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = bookWidth["A4"];
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = bookHeight["A4"];
      }
    } else if(valueOne === "B5"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = bookWidth["B5"];
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = bookHeight["B5"];
      }
    } else if(valueOne === "A5"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = bookWidth["A5"];
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = bookHeight["A5"];
      }
    } else if(valueOne === "46"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = bookWidth["四六判"];
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = bookHeight["四六判"];
      }
    } else if(valueOne === "B6"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = bookWidth["B6"];
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = bookHeight["B6"];
      }
    } else if(valueOne === "A6"){
      for(let i = 0; i < main.length; i++){
        main[i].textContent = bookWidth["A6"];
      }
      for(let i = 0; i < out.length; i++){
        out[i].textContent = bookHeight["A6"];
      }
    }
  });

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
  if(value === "methodNone") {
    outerCutSize[0].textContent = "";
    innerCutSize[0].textContent = "";
    innerCutSize[1].textContent = "";
    outerCutSize[1].textContent = "";
    shaving[0].textContent = "";
    shaving[1].textContent = "";
    shaving[2].textContent = "";
    shaving[3].textContent = "";
  } 
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
  let value = tgtFourDropdownMenu.value;

  if(value === "perfect"){
    outerCutSize[0].textContent = outerCutSize[0].textContent-shavingApply;
    innerCutSize[0].textContent = innerCutSize[0].textContent-shavingApply;
    innerCutSize[1].textContent = innerCutSize[1].textContent-shavingApply;
    outerCutSize[1].textContent = outerCutSize[1].textContent-shavingApply;
    shaving[0].textContent = shavingApply;
    shaving[1].textContent = shavingApply;
    shaving[2].textContent = shavingApply;
    shaving[3].textContent = shavingApply;
  }
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
let value = tgtFourDropdownMenu.value;

  if(value === "binding") {
    outerCutSize[0].textContent = kAllLongA4;
    innerCutSize[0].textContent = kAllLongA4;
    innerCutSize[1].textContent = kAllLongA4;
    outerCutSize[1].textContent = kAllLongA4;
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
let value = tgtFourDropdownMenu.value;

  if(value === "sewing") {
    outerCutSize[0].textContent = kAllLongA4-outWrap;
    innerCutSize[0].textContent = kAllLongA4+outWrap;
    innerCutSize[1].textContent = kAllLongA4+outWrap
    outerCutSize[1].textContent = kAllLongA4-outWrap;
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
let value = tgtFourDropdownMenu.value;
  if(value === "thread") {
    outerCutSize[0].textContent = kAllLongA4+outWrap;
    innerCutSize[0].textContent = kAllLongA4-outWrap;
    innerCutSize[1].textContent = kAllLongA4-outWrap
    outerCutSize[1].textContent = kAllLongA4+outWrap;
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }
  console.log(e);
});