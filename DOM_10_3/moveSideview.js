/* 函数作用：为链接添加缩略图动画效果 */
function moveSideview(){
    // 平稳退化
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    // 确保元素存在
    if(!document.getElementById("linklist")) return false;
    // 创建div和img
    var sideshow=document.createElement("div");
    sideshow.setAttribute("id","show");
    var preview=document.createElement("img");
    preview.setAttribute("src","400100.png");  
    preview.setAttribute("id","preview");
    // 将img附加到div中
    sideshow.appendChild(preview);
   /*  // 设置图片样式的初始样式
    var preview=document.getElementById("preview");
    preview.style.position="absolute";
    preview.style.left="0px";
    preview.style.top="0px"; */
    // 取得列表中的所有链接
    var list=document.getElementById("linklist");
    // 将div插入到list后面
    insertAfter(sideshow,list);
    var link=list.getElementsByTagName("a");
    // 为mouseover事件添加动画效果
    link[0].onmousemove=function(){
        moveFunc("preview",-100,0,10);
    }
    link[1].onmousemove=function(){
        moveFunc("preview",-200,0,10);
    }
    link[2].onmousemove=function(){
        moveFunc("preview",-300,0,10);
    }
}

// 加载这个函数
addLoadEvent(moveSideview);