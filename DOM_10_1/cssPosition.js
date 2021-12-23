
function cssPosition(){
    // 平稳退化
    if(!document.getElementById("canon")) return false;
    if(!document.getElementsByTagName) return false;
    
    // js设置CSS样式
    var elem=document.getElementById("canon");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";

    // setTimeout函数可以让另一个函数待会执行
    // var movement=setTimeout("cssPosition1()",3000);
}

// function cssPosition1(){
//     if(!document.getElementById("canon")) return false;

//     var elem1=document.getElementById("canon");
//     elem1.style.position="absolute";
//     elem1.style.left="500px";
//     el .style.top="500px";
// }
addLoadEvent(cssPosition);