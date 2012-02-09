//
// @brief
// @author ongaeshi
// @date   2012/02/07

var dateLib = require('date-lib');

exports.flags = {
  YEAR: 0x8, 
  DATE: 0x4,
  TIME: 0x2,
  SEC:  0x1
}

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

function calcFormat(src, flag) {
  var result = ["", ""];

  if (flag & exports.flags.YEAR)
    result[0] += src[0];

  if (flag & exports.flags.DATE)
    result[0] += src[1];

  if (flag & exports.flags.TIME)
    result[1] += src[2];

  if (flag & exports.flags.SEC)
    result[1] += src[3];

  return result.join(" ");
}

exports.createButton = function (src, top, date, textField) {
  var button = Titanium.UI.createButton({
    title: dateLib.format(date, calcFormat(src, 0xf)),
    height: 50,
    width: 280,
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

  return {
    button: button,
    update: function(date, flag) {  button.title = dateLib.format(date, calcFormat(src, flag)); }
  };
}

exports.createSpacer = function() {
  return Titanium.UI.createButton({
    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
  });
}

exports.createSelector = function () {
  return Titanium.UI.createButtonBar({
    labels:['    日付    ', '時刻'],
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



