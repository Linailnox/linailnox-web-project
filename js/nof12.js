/*//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面  
var h = window.innerHeight,w=window.innerWidth; */
//禁用键盘
document.onkeydown = function(){
    if(window.event && window.event.keyCode == 16) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 17) {
        event.keyCode=0;
        event.returnValue=false;
    }

    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n请使用Del键进行字符的删除操作！");
        window.event.returnValue=false;
    }
    //F1~F24    
    if(window.event && window.event.keyCode == 112) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 113) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 114) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 115) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 116) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 117) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 118) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 119) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 120) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 121) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 122) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 123) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 124) {
        event.keyCode=0;
        event.returnValue=false;
    }
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 133) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 134) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 135) {
        event.keyCode=0;
        event.returnValue=false;
    }
    //0~9
    if(window.event && window.event.keyCode == 48) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 49) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 50) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 51) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 52) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 53) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 54) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 55) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 56) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 57) {
        event.keyCode=0;
        event.returnValue=false;
    }
    /*//A~Z
    if(window.event && window.event.keyCode == 65) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 66) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 67) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 68) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 69) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 70) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 71) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 72) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 73) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 74) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 75) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 76) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 77) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 78) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 79) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 80) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 81) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 82) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 83) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 84) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 85) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 86) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 87) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 88) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 89) {
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 90) {
        event.keyCode=0;
        event.returnValue=false;
    }*/
//禁用右键 （防止右键查看源代码）
document.oncontextmenu = function (event){
if(window.event){
event = window.event;
}try{
var the = event.srcElement;
if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
return false;
}
return true;
}catch (e){
return false;
}
}
window.oncontextmenu=function(){return false;}    
window.onkeydown = window.onkeyup = window.onkeypress = function () {  
    window.event.returnValue = false;  
    return false;  
} 
//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
/*
window.onresize = function () {  
    if (h != window.innerHeight||w!=window.innerWidth){  
        window.close();  
        window.location = "about:blank";  
    }  
} */ 
setTimeout(ABC,2000)
function ABC(){
//好吧，你的开发者工具是单独的窗口显示，不会改变原来网页的高度和宽度， 
//但是你只要修改页面元素我就重新加载一次数据,让你无法修改页面元素
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
}

