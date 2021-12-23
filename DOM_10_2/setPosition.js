
/* 函数作用：设置一个元素的初始位置，调用另一个函数实现动画效果 */
function setPosition(){
    //平稳退化
    if(!document.getElementById) return false;
    if(!document.getElementById("canon")) return false;
    // 获取元素id
    var elem=document.getElementById("canon");
    // 设置初始元素位置，调用 moveFunc 需要一个初始参数位置
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    // 调用动画效果函数
    // 参数分别是：元素id，元素最终位置两个，元素移动间隔时间
    moveFunc("canon",500,500,20);
}
// 加载函数
addLoadEvent(setPosition);