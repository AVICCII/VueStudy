(() => { var n = { 648: (n, o) => { o.info = function (n) { document.write(n) } }, 555: (n, o) => { o.add = function (n, o) { return n + o } } }, o = {}; function r(t) { if (o[t]) return o[t].exports; var e = o[t] = { exports: {} }; return n[t](e, e.exports, r), e.exports } (() => { const n = r(648), o = r(555); n.info("hello common" + o.add(1, 2)) })() })();