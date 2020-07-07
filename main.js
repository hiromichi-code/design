'use strict';

// 綴じ方向の選択処理

// 左綴じの場合の処理
  const tgtDropdownMenu = document.querySelector("#direction");
  
  tgtDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtDropdownMenu.value;
    if(value === "left") {
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

// 本のサイズ選択処理
  const tgtOneDropdownMenu = document.querySelector("#book-size");
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "A4"){
      document.getElementById('main1').textContent = "210";
      document.getElementById('main2').textContent = "210";
      document.getElementById('main3').textContent = "210";
      document.getElementById('main4').textContent = "210";
      document.getElementById('bottom-out1').textContent = "297";
      document.getElementById('bottom-out2').textContent = "297";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "A5"){
      document.getElementById('main1').textContent ="148";
      document.getElementById('main2').textContent ="148";
      document.getElementById('main3').textContent ="148";
      document.getElementById('main4').textContent ="148";
      document.getElementById('bottom-out1').textContent ="210";
      document.getElementById('bottom-out2').textContent ="210";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "B5"){
      document.getElementById('main1').textContent ="182";
      document.getElementById('main2').textContent ="182";
      document.getElementById('main3').textContent ="182";
      document.getElementById('main4').textContent ="182";
      document.getElementById('bottom-out1').textContent ="257";
      document.getElementById('bottom-out2').textContent ="257";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "B6"){
      document.getElementById('main1').textContent ="128";
      document.getElementById('main2').textContent ="128";
      document.getElementById('main3').textContent ="128";
      document.getElementById('main4').textContent ="128";
      document.getElementById('bottom-out1').textContent ="182";
      document.getElementById('bottom-out2').textContent ="182";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "四六判"){
      document.getElementById('main1').textContent ="128";
      document.getElementById('main2').textContent ="128";
      document.getElementById('main3').textContent ="128";
      document.getElementById('main4').textContent ="128";
      document.getElementById('bottom-out1').textContent ="188";
      document.getElementById('bottom-out2').textContent ="188";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "A6"){
      document.getElementById('main1').textContent ="105";
      document.getElementById('main2').textContent ="105";
      document.getElementById('main3').textContent ="105";
      document.getElementById('main4').textContent ="105";
      document.getElementById('bottom-out1').textContent ="148";
      document.getElementById('bottom-out2').textContent ="148";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "B4"){
      document.getElementById('main1').textContent ="384";
      document.getElementById('main2').textContent ="384";
      document.getElementById('main3').textContent ="384";
      document.getElementById('main4').textContent ="384";
      document.getElementById('bottom-out1').textContent ="257";
      document.getElementById('bottom-out2').textContent ="257";
    }
  });
  
  tgtOneDropdownMenu.addEventListener('change', (e)　=> {
    let value = tgtOneDropdownMenu.value;
    if(value === "A3"){
      document.getElementById('main1').textContent ="420";
      document.getElementById('main2').textContent ="420";
      document.getElementById('main3').textContent ="420";
      document.getElementById('main4').textContent ="420";
      document.getElementById('bottom-out1').textContent ="297";
      document.getElementById('bottom-out2').textContent ="297";
    }
  });
