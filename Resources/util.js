//
// @brief
// @author ongaeshi
// @date   2012/02/07

var dateLib = require('date-lib');

var alert = Titanium.UI.createAlertDialog({
  title: 'Copy to clipboard',
  buttonNames: null
});

function getText(title, value) {
  if (value == "")
    return title;
  else
    return title + " " + value;
}

exports.createButton = function (format, top, date, textField) {
  var button = Titanium.UI.createButton({
    title: dateLib.format(date, format),
    height: 50,
    width: 250,
    top: top,
    font: {fontSize:18, fontWeight:'bold'}
  });

  button.addEventListener('click', function () {
    var text = getText(button.title, textField.value);
    
    // クリップボードにコピー
    Ti.UI.Clipboard.setText(text);

    // アラート
    alert.message = text;
    alert.show();
  });

  setInterval(function () {
    button.title = dateLib.format(new Date(), format);
  }, 1000);

  return button;
}

exports.createSpacer = function() {
  return Titanium.UI.createButton({
    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
  });
}

exports.createSelector = function () {
  return Titanium.UI.createButtonBar({
    labels:['年', '月', '日', '時', '分', '秒'],
    backgroundColor:'#336699'
  });
}

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



