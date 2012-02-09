//
// @brief
// @author ongaeshi
// @date   2012/02/07

var util = require('util');
var dateLib = require('date-lib');

// 背景色
Titanium.UI.setBackgroundColor('#000');

// 共通パラメータ
var gWork = {
  timeFlag: 0xf,
  dateIndex: 0,
  timeIndex: 0,
};

// --------------------------------------------------------------------------------
// メインウィンドウ
// --------------------------------------------------------------------------------
var win = Titanium.UI.createWindow({  
  title:'TimeCopy',
  backgroundColor:'#fff'
});
win.hideTabBar();

// --------------------------------------------------------------------------------
// 後ろに付けるテキスト
// --------------------------------------------------------------------------------
var textField = Titanium.UI.createTextField({
  color:'#336699',
  top:280,
  //left:10,
  width:250,
  height:40,
  font:{fontSize:15},
  hintText:'後ろに付けるテキスト',
  keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
  textAlign:'center'
});
win.add(textField);

// --------------------------------------------------------------------------------
// 時計ボタン
// --------------------------------------------------------------------------------
var date = new Date();

var timeButtons = [];
timeButtons.push(util.createButton(["%Y年", "%m1月%d1日", "%H:%M", ":%S"],       10, date, textField)); // 2012年2月7日(水) 00:07:34
timeButtons.push(util.createButton(["平成%YJ年", "%m1月%d1日", "%H時%M分", "%S秒"],  70, date, textField)); // 平成24年2月7日(水) 00:07:34
timeButtons.push(util.createButton(["%Y/", "%m/%d", "%H:%M", ":%S"],            130, date, textField)); // 2011/02/08 01:34:34
timeButtons.push(util.createButton(["%Y-", "%m-%d", "%H:%M", ":%S"],            190, date, textField)); // 2011-02-08 01:34:34

for (var i = 0; i < timeButtons.length; i++) {
  win.add(timeButtons[i].button);
}

// --------------------------------------------------------------------------------
// 更新処理
// --------------------------------------------------------------------------------
function updateButtons() {
  var date = new Date();
  for (var i = 0; i < timeButtons.length; i++)
    timeButtons[i].update(date, gWork.timeFlag);
}

// 起動時に一回更新
updateButtons();

// 定期的に更新
setInterval(function () {
  updateButtons();
}, 1000);

// --------------------------------------------------------------------------------
// 下部のツールバー
// --------------------------------------------------------------------------------
var spacer = util.createSpacer();
var selector = util.createSelector();

var dateTable = [util.flags.YEAR | util.flags.DATE, util.flags.DATE, 0];
var timeTable = [util.flags.TIME | util.flags.SEC,  util.flags.TIME, 0];

selector.addEventListener('click', function(e) {
  switch (e.index) {
  case 0:
    gWork.dateIndex++;
    if (gWork.dateIndex >= dateTable.length)
      gWork.dateIndex = 0;
    break;
  case 1:
    gWork.timeIndex++;
    if (gWork.timeIndex >= timeTable.length)
      gWork.timeIndex = 0;
    break;
  }

  gWork.timeFlag = dateTable[gWork.dateIndex] | timeTable[gWork.timeIndex];

  updateButtons();
});

// Windowの下部にツールバーを設定
win.setToolbar([spacer, selector, spacer]);

// --------------------------------------------------------------------------------
// タブ設定
// --------------------------------------------------------------------------------
var tabGroup = Titanium.UI.createTabGroup();
tabGroup.addTab(Titanium.UI.createTab({window: win}));

// 表示
tabGroup.open();

