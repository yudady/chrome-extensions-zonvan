chrome.tabs.getSelected(null, (tab) => {
    var tabId = tab.id;
    var sendUserNamePassword = (fun) => chrome.tabs.executeScript(tabId, fun);

    // 
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
    document.getElementById('myCenterTest').addEventListener('click', () => {
        "use strict";
        sendUserNamePassword({
            code: 'document.getElementById("name").value = "mycenter";document.getElementById("pwd").value = "Mycenter123";document.getElementById("code").value = "c";document.getElementById("AccountDoLoginBtn").click(); '
        })
    });
});