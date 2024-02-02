var permission = "%player_has_permission_askyblock.team.maxsize.4%";
var permission2 = "%player_has_permission_askyblock.team.maxsize.6%";
var permission3 = "%player_has_permission_askyblock.team.maxsize.8%";
var permission4 = "%player_has_permission_askyblock.team.maxsize.10%";
var permission5 = "%player_has_permission_askyblock.team.maxsize.12%";

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