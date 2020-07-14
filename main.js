'use strict';
// // くわえ幅取得
// let paperMargin = document.querySelector(".paperMargin").value;
// // 天地合わせ幅取得
// let cutMargin = document.querySelectorAll(".cutMargin").value;

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


// 綴じ方向の選択処理 tgtDropdownMenu

// 左綴じの場合の処理 

// （jiroさんレクチャーによる最終形態）

// const rotate = (deg) => { // 90（左綴じ） or -90（右綴じ）
//   const eles = document.querySelectorAll('.main-text') // 要素を全て取得
//   eles.forEach((ele, index) => {
//      console.log(ele.innerText, Math.round(index / 4) % 2)
//      const colNum = Math.floor(index / 4) // 列の数
//      if (colNum % 2 === 0 ) {  // 列の数が偶数？
//         // 右に傾ける
//         ele.style.transform = `rotate(${deg}deg)`
//      } else {
//         // 左に傾ける
//         ele.style.transform = `rotate(${-deg}deg)`
//      }
//   })
// }

  const tgtDropdownMenu = document.querySelector("#direction");

  tgtDropdownMenu.addEventListener('change', (e) => {
    let value = tgtDropdownMenu.value;
    if(value === "initial") {
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

// 本のサイズ選択処理 tgtOneDropdownMenu
  const tgtOneDropdownMenu = document.querySelector("#bookSize");
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let valueOne = tgtOneDropdownMenu.value;

    if(valueOne === "bookSizeZero"){
      document.getElementById('main1').textContent = "";
      document.getElementById('main2').textContent = "";
      document.getElementById('main3').textContent = "";
      document.getElementById('main4').textContent = "";
      document.getElementById('bottomOut1').textContent = "";
      document.getElementById('bottomOut2').textContent = "";
    } else if(valueOne === "A4"){
      document.getElementById('main1').textContent ="210";
      document.getElementById('main2').textContent ="210";
      document.getElementById('main3').textContent ="210";
      document.getElementById('main4').textContent ="210";
      // document.querySelectorAll('.bottomOutSize').textContent = bookWidth['A4'];
      document.getElementById('bottomOut1').textContent ="297";
      document.getElementById('bottomOut2').textContent ="297";
    } else if(valueOne === "A5"){
      document.getElementById('main1').textContent ="148";
      document.getElementById('main2').textContent ="148";
      document.getElementById('main3').textContent ="148";
      document.getElementById('main4').textContent ="148";
      document.getElementById('bottomOut1').textContent ="210";
      document.getElementById('bottomOut2').textContent ="210";
    } else if(valueOne === "B5"){
      document.getElementById('main1').textContent ="182";
      document.getElementById('main2').textContent ="182";
      document.getElementById('main3').textContent ="182";
      document.getElementById('main4').textContent ="182";
      document.getElementById('bottomOut1').textContent ="257";
      document.getElementById('bottomOut2').textContent ="257";
    } else if(valueOne === "B6"){
      document.getElementById('main1').textContent ="128";
      document.getElementById('main2').textContent ="128";
      document.getElementById('main3').textContent ="128";
      document.getElementById('main4').textContent ="128";
      document.getElementById('bottomOut1').textContent ="182";
      document.getElementById('bottomOut2').textContent ="182";
    } else if(valueOne === "四六判"){
      document.getElementById('main1').textContent ="128";
      document.getElementById('main2').textContent ="128";
      document.getElementById('main3').textContent ="128";
      document.getElementById('main4').textContent ="128";
      document.getElementById('bottomOut1').textContent ="188";
      document.getElementById('bottomOut2').textContent ="188";
    }　else if(valueOne === "A6"){
      document.getElementById('main1').textContent ="105";
      document.getElementById('main2').textContent ="105";
      document.getElementById('main3').textContent ="105";
      document.getElementById('main4').textContent ="105";
      document.getElementById('bottomOut1').textContent ="148";
      document.getElementById('bottomOut2').textContent ="148";
    // } else if(valueOne === "B4"){
    //   document.getElementById('main1').textContent ="384";
    //   document.getElementById('main2').textContent ="384";
    //   document.getElementById('main3').textContent ="384";
    //   document.getElementById('main4').textContent ="384";
    //   document.getElementById('bottomOut1').textContent ="257";
    //   document.getElementById('bottomOut2').textContent ="257";
    // } else if(valueOne === "A3"){
    //   document.getElementById('main1').textContent ="420";
    //   document.getElementById('main2').textContent ="420";
    //   document.getElementById('main3').textContent ="420";
    //   document.getElementById('main4').textContent ="420";
    //   document.getElementById('bottomOut1').textContent ="297";
    //   document.getElementById('bottomOut2').textContent ="297";
    }
  });

// 用紙サイズ選択処理

const tgtThreeDropdownMenu = document.querySelector("#paperSize");

tgtThreeDropdownMenu.addEventListener('change',(e) => {
  let valueOne = tgtOneDropdownMenu.value;
  let valueTwo = tgtThreeDropdownMenu.value;

  if(valueTwo === "sizeZero"){
    document.getElementById("cut1").textContent = "";
    document.getElementById("cut2").textContent = "";
    document.getElementById("cut3").textContent = "";
    document.getElementById("cut4").textContent = "";
    document.getElementById("shortOut2").textContent = "";
  }else if(valueTwo === "kAll"){
    if(valueOne === "A4"){
      document.getElementById("cut1").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
      document.getElementById("cut2").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
      document.getElementById("cut3").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
      document.getElementById("cut4").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
      document.getElementById("shortOut2").textContent = (paperShort['菊全']-(bookHeight['A4']*2))-21;
    }else if(valueOne === "B5"){
      document.getElementById("cut1").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
      document.getElementById("cut2").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
      document.getElementById("cut3").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
      document.getElementById("cut4").textContent = (paperLong['四六半']-(bookWidth['B5']*4))/4;
      document.getElementById("shortOut2").textContent = (paperShort['四六半']-(bookHeight['B5']*2))-21;
    }
  }
});

// 製本方法選択処理

const tgtFourDropdownMenu = document.querySelector("#method");

tgtFourDropdownMenu.addEventListener('change', (e) => {
  let value = tgtFourDropdownMenu.value;
  let cutSizeA4 = document.querySelectorAll("l-front>l-right>right>.cut");
  cutSizeA4 = (paperLong['菊全']-(bookWidth['A4']*4))/4;
  // let cutOne = document.getElementById("cut1").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
  // let cutTwo = document.getElementById("cut2").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
  // let cutThree = document.getElementById("cut3").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
  // let cutFour = document.getElementById("cut4").textContent = (paperLong['菊全']-(bookWidth['A4']*4))/4;
  if(value === "methodZero") {
    document.getElementById("shaving1").textContent = "";
    document.getElementById("shaving2").textContent = "";
    document.getElementById("shaving3").textContent = "";
    document.getElementById("shaving4").textContent = "";
  } else if(value === "perfect") {
    document.getElementById("shaving1").textContent = "3";
    document.getElementById("shaving2").textContent = "3";
    document.getElementById("shaving3").textContent = "3";
    document.getElementById("shaving4").textContent = "3";
    document.getElementById("cut1").textContent = cutSizeA4 -3;
    document.getElementById("cut2").textContent = cutSizeA4 -3;
    document.getElementById("cut3").textContent = cutSizeA4 -3;
    document.getElementById("cut4").textContent = cutSizeA4 -3;
  }　else if(value === "binding") {
    document.getElementById("shaving1").textContent = "0";
    document.getElementById("shaving2").textContent = "0";
    document.getElementById("shaving3").textContent = "0";
    document.getElementById("shaving4").textContent = "0";
    document.getElementById("cut1").textContent = cutSizeA4 -3;
    document.getElementById("cut2").textContent = cutSizeA4 -3;
    document.getElementById("cut3").textContent = cutSizeA4 -3;
    document.getElementById("cut4").textContent = cutSizeA4 -3;
  } else if(value === "thread") {
    document.getElementById("shaving1").textContent = "0";
    document.getElementById("shaving2").textContent = "0";
    document.getElementById("shaving3").textContent = "0";
    document.getElementById("shaving4").textContent = "0";
    document.getElementById("cut1").textContent = cutSizeA4 +5;
    document.getElementById("cut2").textContent = cutSizeA4 -5;
    document.getElementById("cut3").textContent = cutSizeA4 -5;
    document.getElementById("cut4").textContent = cutSizeA4 +5;
  }
});