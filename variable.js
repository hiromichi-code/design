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
