var card;

function openpopup(id) { // Get the modal


    var modal = document.getElementById("modaldelete");

    modal.style.display = "block";

    card = id;
    console.log(card);
}

function removecard() {
    console.log("in remove card method" +
        card)
    id = card;
    document.getElementById("modaldelete").style.display = "none";
    if (id == "first") {
        document.getElementById("card1").style.display = "none";
    } else if (id == "second") {
        document.getElementById("card2").style.display = "none";
    } else if (id == "third") {
        document.getElementById("card3").style.display = "none";
    } else if (id == "fourth") {
        document.getElementById("card4").style.display = "none";
    } else if (id == "fifth") {
        document.getElementById("card5").style.display = "none";
    }
    return false;
}

function closemodal() {
    var modal = document.getElementById("modaldelete");
    modal.style.display = "none";
}
