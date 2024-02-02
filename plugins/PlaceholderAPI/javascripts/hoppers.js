var permission = "%player_has_permission_hoppers.vip%";
var permission2 = "%player_has_permission_hoppers.vip+%";
var permission3 = "%player_has_permission_hoppers.vip++%";
var permission4 = "%player_has_permission_hoppers.vip+++%";
var permission5 = "%player_has_permission_hoppers.vip++++%";

function anything() {
  if (permission5 === "yes") {
    return "&a\u25A0\u25A0\u25A0\u25A0\u25A0";
  } else if (permission4 === "yes") {
    return "&a\u25A0\u25A0\u25A0\u25A0&c\u25A0";
  } else if (permission3 === "yes") {
    return "&a\u25A0\u25A0\u25A0&c\u25A0\u25A0";
  } else if (permission2 === "yes") {
    return "&a\u25A0\u25A0&c\u25A0\u25A0\u25A0";
  } else if (permission === "yes") {
    return "&a\u25A0&c\u25A0\u25A0\u25A0\u25A0";
  } else {
    return "&c\u25A0\u25A0\u25A0\u25A0\u25A0";
  }
}
anything()