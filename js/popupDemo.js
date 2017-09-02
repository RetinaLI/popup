/**
 * Created by liwenming3 on 2017/8/25.
 */

(function(window,document){
    var popup = function(){};
    popup.prototype= {
        open: function (options) {
            this.opt = options;
            this.opt.title = (options.title == "" || options.title == undefined )?"默认title": options.title;
            this.opt.width = (options.width < 400)? 400:options.width;
            this.popHtml();
            this.popStyle();
            this.closeCallBack();
            this.customDefine();
        },
        popHtml:function(){
            var str="";
            str += "<div class='box'><h1>"+this.opt.title+"</h1><strong class='close'>x</strong><div class='contain'></div></div>"
            if(this.opt.model == true){
                str += ' <div class="mask"></div> '
            };

            this.divObj=document.createElement("div");
            this.divObj.innerHTML = str;
            this.divObj.id='wrap';
            document.body.appendChild(this.divObj);

        },

        popStyle:function(){
            var popUp=this.divObj.getElementsByClassName("box")[0];
            var w=(this.opt.width !="" && this.opt.width != undefined) ? this.opt.width+"px":400+"px";
            var h=(this.opt.height !="" && this.opt.height != undefined) ? this.opt.height+"px":200+"px";
            popUp.style.cssText = "width:"+w+";height:"+h+";";
        },
        closeCallBack:function(){

            var closeBtn = this.divObj.getElementsByClassName("close")[0];

            closeBtn.addEventListener("click", this.closeDiv);
        },
        //删除弹出层和遮罩层
        closeDiv:function(){
            // var wrap = document.getElementById('wrap');
            this.parentNode.parentNode.style.display = "none";
            // wrap.style.display = "none";
        },
        customDefine:function ( ){
            if(this.opt.content){
                this.divObj.getElementsByClassName("contain")[0].innerHTML = (this.opt.content)
            }
        }
    }

    window.popup=popup;

})(window,document)
var popup=new popup();


































