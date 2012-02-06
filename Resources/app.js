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

win.add(util.createButton('2012年2月7日(水) 00:07:00', 10));
win.add(util.createButton('2012年2月7日(水) 00:07'   , 70));
win.add(util.createButton('平成24年2月7日(水) 00:07' , 130));
win.add(util.createButton('2012/02/07 01:11'         , 190));
win.add(util.createButton('2月7日(水) 00:07'         , 250));

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
  top:330,
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

