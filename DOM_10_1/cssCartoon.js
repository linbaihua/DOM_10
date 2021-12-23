
// 函数实现动画效果
// 需要提前设置好 canon得left和通篇否则取不到值
function cssCartoon(){
    if(!document.getElementById) return false;
    if(!document.getElementById("canon")) return false;

    var elem=document.getElementById("canon");
    var xleft=parseInt(elem.style.left);
    var ytop=parseInt(elem.style.top);
    if (xleft==500 && ytop==500) {
        return true;
    }
    if (xleft<500) {
        xleft++;
    }
    if (xleft>500) {
        xleft--;
    }
    if (ytop<500) {
        ytop++;
    }
    if (ytop>500) {
        ytop--;
    }

    elem.style.left=xleft+"px";
    elem.style.top=ytop+"px";

    // 变量声明不加var 就是全局变量
    // 调用 setTimeout函数
    movement=setTimeout("cssCartoon()",10);
}

addLoadEvent(cssCartoon);