var permission = "%askyblock_has_island%";
var permission2 = parseInt("%askyblock_team_size%");

function anything() {
    if (permission == "yes" || permission2 >= 2) { return "yes"; }
    else { return; }
}
anything();