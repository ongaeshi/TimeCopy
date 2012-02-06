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

var label = Titanium.UI.createLabel({
  color:'#999',
  text:'ボタンを押せば現在時刻をクリップボードにコピー',
  font:{fontSize:12},
  textAlign:'center',
  width:'auto',
  top: 310
});

win.add(label);
win.hideTabBar();

// タブ設定
var tab = Titanium.UI.createTab({window: win});
tabGroup.addTab(tab);

// 表示
tabGroup.open();

