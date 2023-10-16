var http = require('http')
var request = require('request');

// 这里填你的replit应用的url，多个url用逗号隔开
let replit_app_urls = ["https://UptimeKK.shaaunhighmore.repl.co", "https://notseeme.shaaunhighmore.repl.co", "https://jiejiejie.mmoorty.repl.co","https://jiejiejie.mmoorty.repl.co/7a7e10c0-c86b-4453-b753-02a52f583640.html","https://vast-adhesive-cornucopia.glitch.me"]

var port = 4000
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    response.end('proccess to keep replit application alive is running !\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)

function head(url) {
    request({
        url: url,
        method: "HEAD"
    }, function (error, response, body) {
        if (!error) {
            console.log("地址--" + url + "发包成功！")
            //console.log("statusCode: "+response.statusCode)
            //console.log(response.headers)
        } else
            console.log("请求错误: " + error)
    });
}

function keepalive() {
    for (const url of replit_app_urls) {
        head(url)
    }
}

setInterval(keepalive, 60000);

