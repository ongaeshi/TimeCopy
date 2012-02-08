//
// @brief
// @author ongaeshi
// @date   2012/02/07

var dateLib = require('date-lib');

var alert = Titanium.UI.createAlertDialog({
  title:'Copy to clipboard'
});

exports.createButton = function (date, format, top) {
  var button = Titanium.UI.createButton({
    title: dateLib.format(date, format),
    height: 50,
    width: 250,
    top: top,
    font: {fontSize:18, fontWeight:'bold'}
  });

  button.addEventListener('click', function () {
    // クリップボードにコピー
    Ti.UI.Clipboard.setText(button.title);

    // アラート
    alert.buttonNames = null;
    alert.message = button.title;
    alert.show();
  });

  setInterval(function () {
    button.title = dateLib.format(new Date(), format);
  }, 1000);

  return button;
}


