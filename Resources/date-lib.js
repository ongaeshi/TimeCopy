//
// @brief
// @author ongaeshi
// @date   2012/02/08

function formatNum(keta, num) {
  var src = new String(num);
  var cnt = keta - src.length;
  if (cnt <= 0) return src;
  while (cnt-- > 0) src = "0" + src; return src;
}

exports.year = function (date) { return date.getFullYear(); }
exports.heisei = function (date) { return exports.year(date) - 1988; }
exports.month = function (date) { return date.getMonth() + 1; }
exports.day = function (date) { return date.getDate(); }
exports.hour = function (date) { return date.getHours(); }
exports.min = function (date) { return date.getMinutes(); }
exports.sec = function (date) { return date.getSeconds(); }

exports.Month =  function (date) { return formatNum(2, exports.month(date)) }
exports.Day   =  function (date) { return formatNum(2, exports.day(date)) }
exports.Hour  =  function (date) { return formatNum(2, exports.hour(date)) }
exports.Min   =  function (date) { return formatNum(2, exports.min(date)) }
exports.Sec   =  function (date) { return formatNum(2, exports.sec(date)) }

exports.format = function(date, format) {
  var r = format;
  r = r.replace("%YW", exports.heisei(date), "g");
  r = r.replace("%Y", exports.year(date), "g");
  r = r.replace("%m1", exports.month(date), "g");
  r = r.replace("%m", exports.Month(date), "g");
  r = r.replace("%d1", exports.day(date), "g");
  r = r.replace("%d", exports.Day(date), "g");
  r = r.replace("%H1", exports.hour(date), "g");
  r = r.replace("%H", exports.Hour(date), "g");
  r = r.replace("%M1", exports.min(date), "g");
  r = r.replace("%M", exports.Min(date), "g");
  r = r.replace("%S", exports.Sec(date), "g");
  return r;
}



