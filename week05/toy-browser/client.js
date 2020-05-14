const net = require('net');

class Request {
    constructor(options) {
        this.method = options.method || 'GET';
        this.path = options.path || '/';
        this.host = options.host;
        this.port = options.port || 80;
        this.body = options.body || {};
        this.headers = options.headers || {};
        // 如果没有content type ，则需要自动添加一个默认类型
        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        if (this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body);
        }
        else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            // 需要使用encodeURIComponent 进行转义
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }
        this.headers['Content-Length'] = this.bodyText.length;
    }

    /**
     * 注意在字符串之间不能有空格，这是规定
     * @returns {string}
     */
    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}
\r
${this.bodyText}`;
    }

}

class Response {

}

const client = net.createConnection({
    host: '127.0.0.1',
    port: 8088
}, () => {
    // 'connect' 监听器
    console.log('已连接到服务器');
    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        path: '/',
        port: 8088,
        body: {
            name: 'winter'
        }
    });
    console.log(request.toString());
    client.write(request.toString());
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('已从服务器断开');
});
client.on('error', (err) => {
    console.log(err);
    client.end();
});

