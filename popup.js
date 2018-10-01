chrome.tabs.getSelected(null, (tab) => {
    var tabId = tab.id;
    var sendUserNamePassword = (fun) => chrome.tabs.executeScript(tabId, fun);

    // 抓取 popup.html的Dom 加入 click listener ，执行 `chrome.tabs.executeScript(tabId, fun)` fun是当前打开页面的js
    // 下面是设定 账号 密码 验证码 然后点击btn，有汇入jquery所以可以直接用jquery抓取元素
    document.getElementById('myPay').addEventListener('click', () => {
        "use strict";
        sendUserNamePassword({
            code: 'document.getElementById("name").value = "zonpay";document.getElementById("pwd").value = "0221mypay@zonvan";document.getElementById("code").value = "c";document.getElementById("AccountDoLoginBtn").click(); '
        })
    });
    document.getElementById('rd').addEventListener('click', () => {
        "use strict";
        sendUserNamePassword({
            code: 'document.getElementById("name").value = "mypay";document.getElementById("pwd").value = "mypay@zonvan";document.getElementById("AccountDoLoginBtn").click(); '
        })
    });
    document.getElementById('myPayTest').addEventListener('click', () => {
        "use strict";
        sendUserNamePassword({
            code: 'document.getElementById("name").value = "zonvan";document.getElementById("pwd").value = "Zonvan123";document.getElementById("code").value = "c";document.getElementById("AccountDoLoginBtn").click(); '
        })
    });
    document.getElementById('myPayCenterTest').addEventListener('click', () => {
        "use strict";
        sendUserNamePassword({
            code: 'document.getElementById("name").value = "zonvan";document.getElementById("pwd").value = "Zonvan123";document.getElementById("AccountDoLoginBtn").click(); '
        })
    });


    // 使用jquery
    $("#myCenterTest").on('click', function () {
        chrome.tabs.executeScript(tabId, {
            code: 'document.getElementById("name").value = "mycenter";document.getElementById("pwd").value = "Mycenter123";document.getElementById("code").value = "c";document.getElementById("AccountDoLoginBtn").click(); '
        });

    })
});