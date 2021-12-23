
/* 函数作用，传入元素id，元素的最终位置，设置移动间隔数
就可以不断移动元素实现动画效果 */
function moveFunc(elementID,final_x,final_y,internal){
    // 平稳退化
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    // 获取元素id
    var elem=document.getElementById(elementID);
    var xleft=parseInt(elem.style.left);
    var ytop=parseInt(elem.style.top);
    // 判断元素是否移动到最终位置
    if(xleft==final_x && ytop==final_y){
        return true;
    }
    if (xleft<final_x) {
        xleft++;
    }else{
        xleft--;
    }

    if (ytop<final_y) {
        ytop++;
    }else{
        ytop--;
    }
    // 每次移动后的元素位置
    elem.style.left=xleft+"px";
    elem.style.top=ytop+"px";
    // setTimeout函数递归此函数不断移动元素位置
    var repeat="moveFunc('"+elementID+"',"+final_x+","+final_y+","+internal+")";
    movement=setTimeout(repeat,internal);

}