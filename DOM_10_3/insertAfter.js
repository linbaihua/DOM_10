
// 将new节点插入到target节点后面
function insertAfter(newElement,targetElement){
    // 得到target节点得父节点值
    var parent=targetElement.parentNode;
    // 如果parent得最后一个节点是target，那么new插入到parent中
    // 这时候new就成了parent得最后一个节点在target得后面
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        // 如果不是，就插入到target后面一个节点得前面
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}