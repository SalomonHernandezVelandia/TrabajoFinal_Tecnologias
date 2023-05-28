window.onload=inicio;
function inicio() {
    document.getElementById("selec").onclick = cambio_propiedades;
    document.getElementById("selec1").onclick = cambio_propiedades;
}

function cambio_propiedades() {
    let sel = document.getElementById("selec").style;
    sel.backgroundColor = " rgba(63, 165, 184, 0.4) ";
    sel.height = "50px";

    let im = document.getElementById("img1").style;
    im.width = "50px";
    im.height = "50px";

    let bot = document.getElementById("bot").style;
    bot.fontSize = "35px";

    let btt = document.getElementById("btt2").style;
    btt.backgroundColor = "rgba(63, 165, 184, 0.4)";
}




