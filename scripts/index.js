
//get modal1,modal2, modal3 
var modal1 = document.getElementById("modalsignup");
var modal2 = document.getElementById("modalsignin");
var modal3 = document.getElementById("modalcreatepost");

var btnsignup = document.getElementById("btnopensignupmodal");
var btnsignin = document.getElementById("btnopensigninmodal");
var btncreatepost = document.getElementById("btncreatepost");

var span1 = document.getElementById("btnclose1");
var span2 = document.getElementById("btnclose2");
var span3 = document.getElementById("btnclose3"); 

btnsignup.onclick = function() {
    modal1.style.display = "block";
}
btnsignin.onclick = function() {
    modal2.style.display = "block";
}
btncreatepost.onclick = function() {
    modal3.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
lnksignup.onclick = function() {
    document.getElementById('modalsignup').style.display = 'block';
    document.getElementById('modalsignin').style.display = 'none';
}
