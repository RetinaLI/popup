/**
 * Created by liwenming3 on 2017/8/25.
 */

window.onload = function () {
    window.onresize = function () {
        var sHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var sWidth = document.body.scrollWidth || document.documentElement.scrollWidth;
        console.log("窗口高度：" + sHeight + "; 窗口宽度：" + sWidth);

        function Model(bool, boxHeight, boxWidth) {

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
            oLogin.innerHTML = "<h1>弹出框</h1><span id='close'>点击关闭</span>";
            document.body.appendChild(oLogin);

            //点击关闭按钮关闭登陆框
            var oClose = document.getElementById("close");
            oClose.onclick = function () {
                if(bool == true){
                    document.body.removeChild(oMask);
                }
                document.body.removeChild(oLogin);
            };


        }

        document.querySelector("#btn1").onclick = function () {
            Model(true, 200, 200);
        }
        document.querySelector("#btn2").onclick = function () {
            Model(false, 200, 200);
        }

    };

}






















