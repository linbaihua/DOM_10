
function test(){
    var canon=document.createElement("p");
    var b=document.createTextNode("佳能");
    canon.appendChild(b);

    var list=document.getElementById("linklist");
    list.insertBefore(canon,list);
}

addLoadEvent(test);