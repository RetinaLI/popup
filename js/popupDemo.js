/**
 * Created by liwenming3 on 2017/8/25.
 */

window.onload = function () {
    window.onresize = (function () {
        var sHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var sWidth = document.body.scrollWidth || document.documentElement.scrollWidth;


        function Model(bool, boxHeight, boxWidth,text) {

            if (bool == true) {
                var oMask = document.createElement("div");
                oMask.id = "mask";
                oMask.style.height = sHeight + "px";
                oMask.style.width = sWidth + "px";
                document.body.appendChild(oMask);

            }
            var oLogin = document.createElement("div");
            oLogin.id = 'smallWindow';
            oLogin.style.height = boxHeight + "px";
            oLogin.style.width = boxWidth + "px";
            oLogin.innerHTML = "<h1>弹出框</h1><strong id='close'>x</strong><input type='text' placeholder='请输入'>";
            oLogin.querySelector('h1').innerHTML = text;
            document.body.appendChild(oLogin);

            //获取客户输入内容
            var inp = oLogin.querySelector('input');
            var val = localStorage.getItem('userInput')
            if(val){
                inp.value = val;
            }
            inp.onblur = function () {
                localStorage.setItem('userInput',inp.value);
            }


            //点击关闭按钮关闭登陆框
            var oClose = document.getElementById("close");
            oClose.onclick = function () {
                if(bool == true){
                    document.body.removeChild(oMask);
                }
                document.body.removeChild(oLogin);
                inp.value = localStorage.getItem('userInput');
            };


        }

        document.querySelector("#btn1").onclick = function () {
            Model(true, 200, 400, 'hello');
        }
        document.querySelector("#btn2").onclick = function () {
            Model(false, 200, 400,"随意输入标题");
        }

    })(window);

}






















