// icons
var icons = document.getElementsByClassName("icon");

for (var a = 0; a < icons.length; a++) {
    icons[a].onmouseover = function () {
        this.style["filter"] = "opacity(0.5) drop-shadow(0 0 0 white) brightness(250%)";
    }
}

for (var a = 0; a < icons.length; a++) {
    icons[a].onmouseout = function () {
        this.style["filter"] = "opacity(0.5) drop-shadow(0 0 0 white)";
    }
}