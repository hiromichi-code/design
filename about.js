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
  四六四: 545
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
  四六四: 394
};

// 本の小口サイズ
const bookWidth = {
    A4: 210,
    B5: 182,
    A5: 148,
    B6: 128,
    四六判: 128,
    A6: 105,
    B4: 257,
    A3: 297
};

// 本の天地サイズ
const bookHeight = {
    A4: 297,
    B5: 257,
    A5: 210,
    B6: 182,
    四六判: 188,
    A6: 148,
    B4: 364,
    A3: 420
};

const tgtOneDropdownMenu = document.querySelector("#bookSize");
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let valueOne = tgtOneDropdownMenu.value;
    let main = document.querySelectorAll(".rightMain");
    let out = document.querySelectorAll(".bottomOutValue");

    if(valueOne === "bookSizeNone"){
      main[0].textContent = "";
      main[1].textContent = "";
      main[2].textContent = "";
      main[3].textContent = "";
      out[0].textContent = "";
      out[1].textContent = "";
    } else if(valueOne === "A4"){
      main[0].textContent = "bookWidth[A4]";
      main[1].textContent = "bookWidth[A4]";
      main[2].textContent = "bookWidth[A4]";
      main[3].textContent = "bookWidth[A4]";
      out[0].textContent = "bookHeight[A4]";
      out[1].textContent = "bookHeight[A4]";
    } else if(valueOne === "B5"){
      main[0,1,2,3].textContent = "";
      out[0,1].textContent = "";
    } else if(valueOne === "A5"){
      main[0,1,2,3].textContent = "";
      out[0,1].textContent = "";
    } else if(valueOne === "46"){
      main[0,1,2,3].textContent = "";
      out[0,1].textContent = "";
    } else if(valueOne === "B6"){
      main[0,1,2,3].textContent = "";
      out[0,1].textContent = "";
    } else if(valueOne === "A6"){
      main[0,1,2,3].textContent = "";
      out[0,1].textContent = "";
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


const tgtThreeDropdownMenu = document.querySelector("#paperSize");

tgtThreeDropdownMenu.addEventListener('change',(e) => {
  let value = tgtThreeDropdownMenu.value;

  if(value === "paperSizeNone"){
    document.getElementById("cut1").textContent = "";
    document.getElementById("cut2").textContent = "";
    document.getElementById("cut3").textContent = "";
    document.getElementById("cut4").textContent = "";
    document.getElementById("shortOut2").textContent = "";
  }else if(value === "kAll"){
    document.getElementById("cut1").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['菊全']-(bookHeight['A4']*2))-21;
  }else if(value === "aAll"){
    document.getElementById("cut1").textContent = (paperLong['A全']-(bookWidth['A4']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['A全']-(bookWidth['A4']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['A全']-(bookWidth['A4']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['A全']-(bookWidth['A4']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['A全']-(bookHeight['A4']*2))-21;
  }else if(value === "46Half"){
    document.getElementById("cut1").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['四六半']-(bookHeight['B5']*2))-21;
  }else if(value === "kHalf"){
    document.getElementById("cut1").textContent = (paperLong['菊半']-(bookWidth['A5']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['菊半']-(bookWidth['A5']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['菊半']-(bookWidth['A5']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['菊半']-(bookWidth['A5']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['菊半']-(bookHeight['A4']*2))-21;
  }else if(value === "aHalf"){
    document.getElementById("cut1").textContent = (paperLong['A半']-(bookWidth['A5']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['A半']-(bookWidth['A5']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['A半']-(bookWidth['A5']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['A半']-(bookWidth['A5']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['A半']-(bookHeight['A4']*2))-21;
  }else if(value === "kHalfHalf"){
    document.getElementById("cut1").textContent = (paperLong['菊四']-(bookWidth['A6']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['菊四']-(bookWidth['A6']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['菊四']-(bookWidth['A6']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['菊四']-(bookWidth['A6']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['菊四']-(bookHeight['A6']*2))-21;
  }else if(value === "aHalfHalf"){
    document.getElementById("cut1").textContent = (paperLong['A四']-(bookWidth['A6']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['A四']-(bookWidth['A6']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['A四']-(bookWidth['A6']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['A四']-(bookWidth['A6']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['A四']-(bookHeight['A6']*2))-21;
  }else if(value === "46HalfHalf"){
    document.getElementById("cut1").textContent = (paperLong['四六四']-(bookWidth['B6']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['四六四']-(bookWidth['B6']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['四六四']-(bookWidth['B6']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['四六四']-(bookWidth['B6']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['四六四']-(bookHeight['B6']*2))-21;
  }else if(value === "46HalfHalf"){
    document.getElementById("cut1").textContent = (paperLong['四六四']-(bookWidth['四六判']*4))/4;
    document.getElementById("cut2").textContent = (paperLong['四六四']-(bookWidth['四六判']*4))/4;
    document.getElementById("cut3").textContent = (paperLong['四六四']-(bookWidth['四六判']*4))/4;
    document.getElementById("cut4").textContent = (paperLong['四六四']-(bookWidth['四六判']*4))/4;
    document.getElementById("shortOut2").textContent = (paperShort['四六四']-(bookHeight['四六判']*2))-21;
  }
});

// 製本方法選択処理

const tgtFourDropdownMenu = document.querySelector("#method");
let cutSize = document.querySelectorAll(".l-front>.l-right>.right>.cut");

tgtFourDropdownMenu.addEventListener('change', (e) => {
  let value = tgtFourDropdownMenu.value;
  if(value === "methodNone") {
    document.getElementById("shaving1").textContent = "";
    document.getElementById("shaving2").textContent = "";
    document.getElementById("shaving3").textContent = "";
    document.getElementById("shaving4").textContent = "";
    document.getElementById("cut1").textContent = "";
    document.getElementById("cut2").textContent = "";
    document.getElementById("cut3").textContent = "";
    document.getElementById("cut4").textContent = "";
  } 
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
  let value = tgtFourDropdownMenu.value;

  if(value === "perfect"){
      document.getElementById("shaving1").textContent = "3";
      document.getElementById("shaving2").textContent = "3";
      document.getElementById("shaving3").textContent = "3";
      document.getElementById("shaving4").textContent = "3";
      document.getElementById("cut1").textContent = cutSize[0].textContent-3;
      document.getElementById("cut2").textContent = cutSize[1].textContent-3;
      document.getElementById("cut3").textContent = cutSize[2].textContent-3;
      document.getElementById("cut4").textContent = cutSize[3].textContent-3;
  }
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
let value = tgtFourDropdownMenu.value;

  if(value === "binding") {
    document.getElementById("shaving1").textContent = "0";
    document.getElementById("shaving2").textContent = "0";
    document.getElementById("shaving3").textContent = "0";
    document.getElementById("shaving4").textContent = "0";
    document.getElementById("cut1").textContent = cutSize[0].textContent-3;
    document.getElementById("cut2").textContent = cutSize[1].textContent-3;
    document.getElementById("cut3").textContent = cutSize[2].textContent-3;
    document.getElementById("cut4").textContent = cutSize[3].textContent-3;
  }
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
let value = tgtFourDropdownMenu.value;

  if(value === "sewing") {
    document.getElementById("shaving1").textContent = "3";
    document.getElementById("shaving2").textContent = "3";
    document.getElementById("shaving3").textContent = "3";
    document.getElementById("shaving4").textContent = "3";
    document.getElementById("cut1").textContent = cutSize[0].textContent-10;
    document.getElementById("cut2").textContent = cutSize[1].textContent+10;
    document.getElementById("cut3").textContent = cutSize[2].textContent+10;
    document.getElementById("cut4").textContent = cutSize[3].textContent-10;
  }
});

tgtFourDropdownMenu.addEventListener('change', (e) => {
let value = tgtFourDropdownMenu.value;
  if(value === "thread") {
    document.getElementById("shaving1").textContent = "0";
    document.getElementById("shaving2").textContent = "0";
    document.getElementById("shaving3").textContent = "0";
    document.getElementById("shaving4").textContent = "0";
    document.getElementById("cut1").textContent = cutSize[0].textContent+10;
    document.getElementById("cut2").textContent = cutSize[1].textContent-10;
    document.getElementById("cut3").textContent = cutSize[2].textContent-10;
    document.getElementById("cut4").textContent = cutSize[3].textContent+10;
  }
  console.log(e);
});