var innertext;
var innertextcontent;
var count = 0;

function makeeditable() {
    innertext = document.getElementById("titletext").innerText;
    innertextcontent = document.getElementById("txtcontent").innerText;
    document.getElementById("titletextbox").children[0].value = innertext;
    document.getElementById("txtareacontent").value = innertextcontent;
    document.getElementById("titletext").style.display = "none";
    document.getElementById("titletextbox").style.display = "block";
    document.getElementById("txtcontent").style.display = "none";
    document.getElementById("txtareacontent").style.display = "block";
    document.getElementById("btnedit").style.display = "none";
    document.getElementById("btnsave").style.display = "block";

}

function save() {
    innertext = document.getElementById("titletextbox").children[0].value;
    innertextcontent = document.getElementById("txtareacontent").value;
    document.getElementById("titletext").innerText = innertext;
    document.getElementById("txtcontent").innerText = innertextcontent;
    document.getElementById("titletext").style.display = "block";
    document.getElementById("txtcontent").style.display = "block";
    document.getElementById("titletextbox").style.display = "none";
    document.getElementById("txtareacontent").style.display = "none";
    document.getElementById("btnedit").style.display = "block";
    document.getElementById("btnsave").style.display = "none";
}

function like() {
    console.log(count)
    count = count + 1;
    if (count <= 1) {
        document.getElementById("btnlike").innerHTML = "Liked <i class='fa fa-thumbs-up'>";
        document.getElementById("count").innerHTML = count + " person likes this!"
    } else {
        document.getElementById("count").innerHTML = count + " person likes this!"
    }
}

function comment() {
    var comment = document.getElementById("txtcomment").value;
    var tag = document.createElement("p");
    tag.setAttribute("class", "commentcard");

    var text = document.createTextNode(comment);
    tag.appendChild(text);
    var element = document.getElementById("commentcard");
    element.prepend(tag);
    document.getElementById("txtcomment").value = "";
}
