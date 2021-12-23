
/* 函数作用，传入元素id，元素的最终位置，设置移动间隔数
就可以不断移动元素实现动画效果 */
function moveFunc(elementID,final_x,final_y,internal){
    // 平稳退化
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    // 获取元素id
    var elem=document.getElementById(elementID);
    // 防止动画停滞
    if(elem.movement){
        clearTimeout(repeat,internal);
    }
    // 检查style是否存在,不存在就赋值
    if(!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
        elem.style.top="0px";
    }
    // parseInt函数获取元素位置的 整数类型用于下面的if语句判断
    var xleft=parseInt(elem.style.left);
    var ytop=parseInt(elem.style.top);
    var dist=0;
    // 判断元素是否移动到最终位置
    if(xleft==final_x && ytop==final_y){
        return true;
    }
    if (xleft<final_x) {
        dist=Math.ceil((final_x-xleft)/10);
        xleft+=dist;
    }else{
        dist=Math.ceil((xleft-final_x)/10);
        xleft-=dist;
    }

    if (ytop<final_y) {
        dist=Math.ceil((final_y-ytop)/10);
        ytop+=dist;
    }else{
        dist=Math.ceil((ytop-final_y)/10);
        ytop-=dist;
    }
    // 每次移动后的元素位置
    elem.style.left=xleft+"px";
    elem.style.top=ytop+"px";
    // setTimeout函数递归此函数不断移动元素位置
    var repeat="moveFunc('"+elementID+"',"+final_x+","+final_y+","+internal+")";
    elem.movement=setTimeout(repeat,internal);

}