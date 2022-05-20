/这段js要放在页面最下方  
var h = window.innerHeight,w=window.innerWidth;  
//禁用右键 （防止右键查看源代码）  
window.oncontextmenu=function(){return false;}  
//在本网页的任何键盘敲击事件都是无效操作 （防止F12和shift+ctrl+i调起开发者工具）  
window.onkeydown = window.onkeyup = window.onkeypress = function () {  
    window.event.returnValue = false;  
    return false;  
}  
//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面  
window.onresize = function () {  
    if (h != window.innerHeight||w!=window.innerWidth){  
        window.close();  
        window.location = "about:blank";  
    }  
}  
/*好吧，你的开发者工具是单独的窗口显示，不会改变原来网页的高度和宽度， 
但是你只要修改页面元素我就重新加载一次数据,让你无法修改页面元素（不支持IE9以下浏览器） 
if(window.addEventListener){  
window.addEventListener("DOMCharacterDataModified", function(){window.location.reload();}, true);  
window.addEventListener("DOMAttributeNameChanged", function(){window.location.reload();}, true);  
window.addEventListener("DOMCharacterDataModified", function(){window.location.reload();}, true);  
window.addEventListener("DOMElementNameChanged", function(){window.location.reload();}, true);  
window.addEventListener("DOMNodeInserted", function(){window.location.reload();}, true);  
window.addEventListener("DOMNodeInsertedIntoDocument", function(){window.location.reload();}, true);  
window.addEventListener("DOMNodeRemoved", function(){window.location.reload();}, true);  
window.addEventListener("DOMNodeRemovedFromDocument", function(){window.location.reload();}, true);  
window.addEventListener("DOMSubtreeModified", function(){window.location.reload();}, true);  
}  
*/