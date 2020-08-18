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
    outerCutSize[0].textContent = Number(outerCutSize[0].textContent)-Number(shavingApply);
    innerCutSize[0].textContent = Number(innerCutSize[0].textContent)-Number(shavingApply);
    innerCutSize[1].textContent = Number(innerCutSize[1].textContent)-Number(shavingApply);
    outerCutSize[1].textContent = Number(outerCutSize[1].textContent)-Number(shavingApply);
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }else if(value === "sewing") {
    outerCutSize[0].textContent = Number(outerCutSize[0].textContent)-Number(outWrap);
    innerCutSize[0].textContent = Number(innerCutSize[0].textContent)+Number(outWrap);
    innerCutSize[1].textContent = Number(innerCutSize[1].textContent)+Number(outWrap);
    outerCutSize[1].textContent = Number(outerCutSize[1].textContent)-Number(outWrap);
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }else if(value === "thread") {
    outerCutSize[0].textContent = Number(outerCutSize[0].textContent)+Number(outWrap);
    innerCutSize[0].textContent = Number(innerCutSize[0].textContent)-Number(outWrap);
    innerCutSize[1].textContent = Number(innerCutSize[1].textContent)-Number(outWrap);
    outerCutSize[1].textContent = Number(outerCutSize[1].textContent)+Number(outWrap);
    shaving[0].textContent = cutNone;
    shaving[1].textContent = cutNone;
    shaving[2].textContent = cutNone;
    shaving[3].textContent = cutNone;
  }
});