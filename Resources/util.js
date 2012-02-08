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


