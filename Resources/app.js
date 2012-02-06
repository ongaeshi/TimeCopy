//
// @brief
// @author ongaeshi
// @date   2012/02/07

var util = require('util');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'TimeCopy',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

win1.add(util.createButton('2012年2月7日(水) 00:07:00', 10));
win1.add(util.createButton('2012年2月7日(水) 00:07'   , 70));
win1.add(util.createButton('平成24年2月7日(水) 00:07' , 130));
win1.add(util.createButton('2012/02/07 01:11'         , 190));
win1.add(util.createButton('2月7日(水) 00:07'         , 250));

var label1 = Titanium.UI.createLabel({
  color:'#999',
  text:'ボタンを押すと現在時刻を\nクリップボードにコピーします。',
  font:{fontSize:12},
  textAlign:'center',
  width:'auto',
  top: 310
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
