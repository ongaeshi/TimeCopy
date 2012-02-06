//
// @brief
// @author ongaeshi
// @date   2012/02/07

var alert = Titanium.UI.createAlertDialog({
  title:'Copy to clipboard'
});

exports.createButton = function (title, top) {
  var button = Titanium.UI.createButton({
    title: title,
    height: 50,
    width: 250,
    top: top
  });

  button.addEventListener('click', function () {
    alert.buttonNames = null;
    alert.message = button.title;
    alert.show();
  });

  return button;
}


