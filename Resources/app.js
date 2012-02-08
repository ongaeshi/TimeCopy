//
// @brief
// @author ongaeshi
// @date   2012/02/07

var util = require('util');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// タブグループ
var tabGroup = Titanium.UI.createTabGroup();

//
// メインウィンドウ
//
var win = Titanium.UI.createWindow({  
  title:'TimeCopy',
  backgroundColor:'#fff'
});

// 時計ボタンの表示
var date = new Date();
win.add(util.createButton(date, "%Y年%m1月%d1日 %H:%M:%S",  10));   // 2012年2月7日(水) 00:07:34
win.add(util.createButton(date, "%Y年%m1月%d1日 %H:%M",  70));      // 2012年2月7日(水) 00:07
win.add(util.createButton(date, "平成%YJ年%m1月%d1日 %H:%M", 130)); // 平成24年2月7日(水) 00:07
win.add(util.createButton(date, "%Y/%m/%d %H:%M", 190));            // 2011/02/08 01:34
win.add(util.createButton(date, "%m1月%d1日 %H:%M", 250));          // 2012年2月7日(水) 00:07:34

// ラベル (ヘルプ画面に追加するかもしれない)
// var label = Titanium.UI.createLabel({
//   color:'#555',
//   text:'ボタンを押すと現在時刻をクリップボードにコピー',
//   font:{fontSize:12},
//   textAlign:'center',
//   width:'auto',
//   top: 370
// });

//win.add(label);

// テキストフィールド
var textField = Titanium.UI.createTextField({
  color:'#336699',
  top:340,
  //left:10,
  width:210,
  height:25,
  font:{fontSize:12},
  hintText:'時刻の後ろに付けるテキスト',
  keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

win.add(textField);
win.hideTabBar();

// タブ設定
var tab = Titanium.UI.createTab({window: win});
tabGroup.addTab(tab);

// 表示
tabGroup.open();

