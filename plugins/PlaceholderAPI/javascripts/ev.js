var permission = "%player_has_permission_askyblock.island.maxhomes.2%";
var permission2 = "%player_has_permission_askyblock.island.maxhomes.4%";
var permission3 = "%player_has_permission_askyblock.island.maxhomes.6%";

function anything() {
  if (permission3 === "yes") {
    return "&a\u25A0\u25A0\u25A0";
  } else if (permission2 === "yes") {
    return "&a\u25A0\u25A0&c\u25A0";
  } else if (permission === "yes") {
    return "&a\u25A0&c\u25A0\u25A0";
  } else {
    return "&c\u25A0\u25A0\u25A0";
  }
}
anything()