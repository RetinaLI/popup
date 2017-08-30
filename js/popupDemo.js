/**
 * Created by liwenming3 on 2017/8/25.
 */

(function(window,undefined){
    var popup = function(){};
    popup.prototype= {
        open: function (options) {
            this.opt = options;
            this.popHtml();
            this.popStyle();
            this.closeCallBack();
            this.customDefine();
        },
        popHtml:function(){
            var str="";

            str += "<div id='box'><h1>"+this.opt.title+"</h1><strong id='close'>x</strong><div id='contain'></div></div>"
            if(this.opt.model == true){
                str += ' <div id="mask"></div> '
            }

            var divObj=document.createElement("div");
            divObj.innerHTML = str;
            var first=document.body.firstChild;//得到页面的第一个元素
            document.body.insertBefore(divObj,first);
        },

        popStyle:function(){
            var popUp=document.getElementById("box");
            var w=(this.opt.width !="" || this.opt.width != undefined) ? this.opt.width+"px":400+"px";
            var h=(this.opt.height !="" || this.opt.height != undefined) ? this.opt.height+"px":200+"px";
            popUp.style.cssText = "width:"+w+";height:"+h+";";
        },
        closeCallBack:function(){
            var closeBtn=document.getElementById("close");
            closeBtn.addEventListener("click", this.closeDiv);

        },
        //删除弹出层和遮罩层
        closeDiv:function(){

            var box=document.getElementById("box");
            var mask=document.getElementById("mask");
            if(mask){
                mask.style.display = "none";
            }
            box.style.display = "none";

        },
        customDefine:function ( ){
            if(this.opt.content){
                document.getElementById("contain").innerHTML = (this.opt.content)
            }
        }
    }

    window.popup=popup;

})(window,undefined)

var popup = new popup();
































