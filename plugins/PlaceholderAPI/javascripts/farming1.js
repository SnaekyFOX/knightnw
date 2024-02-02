var permission = "%player_has_permission_farming.potato%";
var permission2 = "%player_has_permission_farming.carrot%";
var permission3 = "%player_has_permission_farming.sugarcane%";
var permission4 = "%player_has_permission_farming.melons%";
var permission5 = "%player_has_permission_farming.pumpkins%";
var permission6 = "%player_has_permission_farming.netherwarts%";

function anything() {
  if (permission6 === "yes") {
    return "&b&l6";
  } else if (permission5 === "yes") {
    return "&b&l5";
  } else if (permission4 === "yes") {
    return "&b&l4";
  } else if (permission3 === "yes") {
    return "&b&l3";
  } else if (permission2 === "yes") {
    return "&b&l2";
  } else if (permission === "yes") {
    return "&b&l1";
  } else {
    return "&b&l0";
  }
}
anything()