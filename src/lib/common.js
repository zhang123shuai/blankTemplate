export default {
    // 时间戳转换日期格式
    formatDate(date) {
        var date = new Date(date);
        var YY = date.getFullYear() + '-';
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return YY + MM + DD + " " + hh + mm + ss;
    },
    // blob流文件下载
    downloadFile(blob) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e) => {
            const a = document.createElement('a');
            // a.download = `驾驶员.xlsx`;
            a.href = e.target.result;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };
    },
    // WebSocket
    initWebSocket(path, fn) {
        let open = () => {
            console.log("socket连接成功");
        };
        let error = () => {
            console.log("连接错误");
        };
        let getMessage = fn;
        let close = () => {
            console.log("socket已经关闭");
        };
        if (typeof WebSocket === "undefined") {
            alert("您的浏览器不支持socket");
        } else {
            let socket = "";
            // 实例化socket
            socket = new WebSocket(path);
            // 监听socket连接
            socket.onopen = open;
            // 监听socket错误信息
            socket.onerror = error;
            // 监听socket消息
            socket.onmessage = getMessage;
            socket.onclose = close;
            return socket;
        }
    },
    // 全局灰色
    grayscale(times = [], ie = true, webTime) {
        const startTime = new Date(times[0]);
        const endTime = new Date(times[1]);
        if (!times[0] || !times[1] || String(startTime) === 'Invalid Date' || String(endTime) === 'Invalid Date') {
            return false;
        }
        const nowTime = !!webTime && String(new Date(webTime)) !== 'Invalid Date' ? new Date(webTime) : new Date();
        const htmlEle = document.getElementsByTagName('html')[0];
        const userAgent = navigator.userAgent;
        if (nowTime >= startTime && nowTime <= endTime) {
            if (ie &&
                (userAgent.indexOf('compatible') > -1 &&
                    userAgent.indexOf('MSIE') > -1) ||
                userAgent.indexOf('Trident') > -1
            ) {
                document.body.insertAdjacentHTML('afterbegin', '<div style="position:fixed;z-index:999;width:100vw; height:100vh; left:-100vw; outline: 101vw solid rgba(100,100,100,.6);"></div>');
            } else {
                htmlEle.style['-webkit-filter'] = 'grayscale(100%)';
                htmlEle.style['-moz-filter'] = 'grayscale(100%)';
                htmlEle.style['-ms-filter'] = 'grayscale(100%)';
                htmlEle.style['-o-filter'] = 'grayscale(100%)';
                htmlEle.style.filter = 'grayscale(100%)';
            }
        } else {
            htmlEle.style['-webkit-filter'] = '';
            htmlEle.style['-moz-filter'] = '';
            htmlEle.style['-ms-filter'] = '';
            htmlEle.style['-o-filter'] = '';
            htmlEle.style.filter = '';
        }
    },
};