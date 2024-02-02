var day = " &agün&a";
var hour = " &asaat&a";
var minute = " &adakika&a";
var second = " &asaniye&a";

function countdown() {
  return "%server_countdown_dd.MM.yyyy_30.07.2020%".replace(/([0-9])s/g, "$1" + second).replace(/([0-9])d/g, "$1" + day).replace(/([0-9])h/g, "$1" + hour).replace(/([0-9])m/g, "$1" + minute);
}
countdown();
