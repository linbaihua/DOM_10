
function test(){
    var li3=document.createElement("li");
    var li3text=document.createTextNode("5d3");
    li3.appendChild(li3text);
    var li2parent=document.getElementById("li2").parentNode;
    var li2=document.getElementById("li2");
    li2parent.insertBefore(li3,li2);

    var p2=document.createElement("p");
    var p2text=document.createTextNode("babababa");
    p2.appendChild(p2text);
    var p1parent=document.getElementById("p1").parentNode;
    var p1=document.getElementById("p1");
    p1parent.insertBefore(p2,p1);
}
addLoadEvent(test);