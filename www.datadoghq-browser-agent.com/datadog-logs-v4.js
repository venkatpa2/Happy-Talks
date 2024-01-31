! function() {
    "use strict";
    var e = {
            log: "log",
            debug: "debug",
            info: "info",
            warn: "warn",
            error: "error"
        },
        t = console,
        n = {};
    Object.keys(e).forEach((function(e) {
        n[e] = t[e]
    }));
    var r = "Datadog Browser SDK:",
        o = {
            debug: n.debug.bind(t, r),
            log: n.log.bind(t, r),
            info: n.info.bind(t, r),
            warn: n.warn.bind(t, r),
            error: n.error.bind(t, r)
        };

    function i(e, t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            try {
                return e.apply(void 0, n)
            } catch (e) {
                o.error(t, e)
            }
        }
    }
    var a, s = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        },
        u = !1;

    function c(e) {
        u = e
    }

    function f(e, t, n) {
        var r = n.value;
        n.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return (a ? l(r) : r).apply(this, e)
        }
    }

    function l(e) {
        return function() {
            return d(e, this, arguments)
        }
    }

    function d(e, t, n) {
        try {
            return e.apply(t, n)
        } catch (e) {
            if (v(e), a) try {
                a(e)
            } catch (e) {
                v(e)
            }
        }
    }

    function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        u && o.error.apply(o, s(["[MONITOR]"], e, !1))
    }

    function p(e, t) {
        return -1 !== e.indexOf(t)
    }

    function g(e) {
        if (Array.from) return Array.from(e);
        var t = [];
        if (e instanceof Set) e.forEach((function(e) {
            return t.push(e)
        }));
        else
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        return t
    }

    function h(e) {
        return Object.keys(e).map((function(t) {
            return e[t]
        }))
    }

    function y(e, t) {
        return e.slice(0, t.length) === t
    }

    function m(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.forEach((function(t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })), e
    }

    function b() {
        if ("object" == typeof globalThis) return globalThis;
        Object.defineProperty(Object.prototype, "_dd_temp_", {
            get: function() {
                return this
            },
            configurable: !0
        });
        var e = _dd_temp_;
        return delete Object.prototype._dd_temp_, "object" != typeof e && (e = "object" == typeof self ? self : "object" == typeof window ? window : {}), e
    }
    var w = 1024,
        S = 1024 * w,
        E = /[^\u0000-\u007F]/;

    function x(e) {
        return E.test(e) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(e).length : new Blob([e]).size : e.length
    }

    function C(e, t) {
        var n, r = b();
        return r.Zone && "function" == typeof r.Zone.__symbol__ && (n = e[r.Zone.__symbol__(t)]), n || (n = e[t]), n
    }

    function _(e, t) {
        return C(b(), "setTimeout")(l(e), t)
    }

    function k(e) {
        C(b(), "clearTimeout")(e)
    }

    function O(e, t) {
        return C(b(), "setInterval")(l(e), t)
    }

    function R(e) {
        C(b(), "clearInterval")(e)
    }

    function T(e, t, n) {
        var r, o, i = !n || void 0 === n.leading || n.leading,
            a = !n || void 0 === n.trailing || n.trailing,
            s = !1;
        return {
            throttled: function() {
                for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
                s ? r = n : (i ? e.apply(void 0, n) : r = n, s = !0, o = _((function() {
                    a && r && e.apply(void 0, r), s = !1, r = void 0
                }), t))
            },
            cancel: function() {
                k(o), s = !1, r = void 0
            }
        }
    }

    function L() {}

    function A(e) {
        return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
    }

    function I(e, t, n) {
        if (void 0 === n && (n = function() {
                if ("undefined" != typeof WeakSet) {
                    var e = new WeakSet;
                    return {
                        hasAlreadyBeenSeen: function(t) {
                            var n = e.has(t);
                            return n || e.add(t), n
                        }
                    }
                }
                var t = [];
                return {
                    hasAlreadyBeenSeen: function(e) {
                        var n = t.indexOf(e) >= 0;
                        return n || t.push(e), n
                    }
                }
            }()), void 0 === t) return e;
        if ("object" != typeof t || null === t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp) {
            var r = t.flags || [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
            return new RegExp(t.source, r)
        }
        if (!n.hasAlreadyBeenSeen(t)) {
            if (Array.isArray(t)) {
                for (var o = Array.isArray(e) ? e : [], i = 0; i < t.length; ++i) o[i] = I(o[i], t[i], n);
                return o
            }
            var a = "object" === A(e) ? e : {};
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = I(a[s], t[s], n));
            return a
        }
    }

    function P(e) {
        return I(void 0, e)
    }

    function B() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        for (var r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            null != i && (e = I(e, i))
        }
        return e
    }

    function N(e, t, n) {
        if ("object" != typeof e || null === e) return JSON.stringify(e);
        var r = M(Object.prototype),
            o = M(Array.prototype),
            i = M(Object.getPrototypeOf(e)),
            a = M(e);
        try {
            return JSON.stringify(e, t, n)
        } catch (e) {
            return "<error: unable to serialize object>"
        } finally {
            r(), o(), i(), a()
        }
    }

    function M(e) {
        var t = e,
            n = t.toJSON;
        return n ? (delete t.toJSON, function() {
            t.toJSON = n
        }) : L
    }
    var U = 220 * w,
        q = "$",
        j = 3;

    function D(e, t) {
        var n;
        void 0 === t && (t = U);
        var r = M(Object.prototype),
            o = M(Array.prototype),
            i = [],
            a = new WeakMap,
            s = G(e, q, void 0, i, a),
            u = (null === (n = JSON.stringify(s)) || void 0 === n ? void 0 : n.length) || 0;
        if (!(u > t)) {
            for (; i.length > 0 && u < t;) {
                var c = i.shift(),
                    f = 0;
                if (Array.isArray(c.source))
                    for (var l = 0; l < c.source.length; l++) {
                        if (u += void 0 !== (d = G(c.source[l], c.path, l, i, a)) ? JSON.stringify(d).length : 4, u += f, f = 1, u > t) {
                            F(t, "truncated", e);
                            break
                        }
                        c.target[l] = d
                    } else
                        for (var l in c.source)
                            if (Object.prototype.hasOwnProperty.call(c.source, l)) {
                                var d;
                                if (void 0 !== (d = G(c.source[l], c.path, l, i, a)) && (u += JSON.stringify(d).length + f + l.length + j, f = 1), u > t) {
                                    F(t, "truncated", e);
                                    break
                                }
                                c.target[l] = d
                            }
            }
            return r(), o(), s
        }
        F(t, "discarded", e)
    }

    function G(e, t, n, r, o) {
        var i = function(e) {
            var t = e;
            if (t && "function" == typeof t.toJSON) try {
                return t.toJSON()
            } catch (e) {}
            return e
        }(e);
        if (!i || "object" != typeof i) return function(e) {
            if ("bigint" == typeof e) return "[BigInt] ".concat(e.toString());
            if ("function" == typeof e) return "[Function] ".concat(e.name || "unknown");
            if ("symbol" == typeof e) return "[Symbol] ".concat(e.description || e.toString());
            return e
        }(i);
        var a = function(e) {
            try {
                if (e instanceof Event) return {
                    isTrusted: e.isTrusted
                };
                var t = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
                if (t && t[1]) return "[".concat(t[1], "]")
            } catch (e) {}
            return "[Unserializable]"
        }(i);
        if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
        var s = e;
        if (o.has(s)) return "[Reference seen at ".concat(o.get(s), "]");
        var u = void 0 !== n ? "".concat(t, ".").concat(n) : t,
            c = Array.isArray(i) ? [] : {};
        return o.set(s, u), r.push({
            source: i,
            target: c,
            path: u
        }), c
    }

    function F(e, t, n) {
        o.warn("The data provided has been ".concat(t, " as it is over the limit of ").concat(e, " characters:"), n)
    }
    var H, z = function() {
        function e(e) {
            this.onFirstSubscribe = e, this.observers = []
        }
        return e.prototype.subscribe = function(e) {
            var t = this;
            return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0), this.observers.push(e), {
                unsubscribe: function() {
                    t.observers = t.observers.filter((function(t) {
                        return e !== t
                    })), !t.observers.length && t.onLastUnsubscribe && t.onLastUnsubscribe()
                }
            }
        }, e.prototype.notify = function(e) {
            this.observers.forEach((function(t) {
                return t(e)
            }))
        }, e
    }();

    function J() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = new z((function() {
            var t = e.map((function(e) {
                return e.subscribe((function(e) {
                    return n.notify(e)
                }))
            }));
            return function() {
                return t.forEach((function(e) {
                    return e.unsubscribe()
                }))
            }
        }));
        return n
    }
    var V = 3 * w,
        W = ((H = {})[0] = "feature flag evaluation", H[1] = "user", H[2] = "global context", H[3] = "logger context", H);
    var $ = 200;

    function X(e, t) {
        void 0 === t && (t = x);
        var n, r = {},
            i = !1,
            a = new z,
            s = T((function(r) {
                n = t(N(r)), i || (i = function(e, t) {
                    return e > V && (o.warn("The ".concat(W[t], " data exceeds the recommended ").concat(V / w, "KiB threshold. More details: https://docs.datadoghq.com/real_user_monitoring/browser/troubleshooting/#customer-data-exceeds-the-recommended-3kib-warning")), !0)
                }(n, e))
            }), $).throttled,
            u = {
                getBytesCount: function() {
                    return n
                },
                get: function() {
                    return r
                },
                add: function(e, t) {
                    r[e] = t, s(r), a.notify()
                },
                remove: function(e) {
                    delete r[e], s(r), a.notify()
                },
                set: function(e) {
                    s(r = e), a.notify()
                },
                getContext: function() {
                    return P(r)
                },
                setContext: function(e) {
                    "object" === A(e) ? (r = D(e), s(r)) : u.clearContext(), a.notify()
                },
                setContextProperty: function(e, t) {
                    r[e] = D(t), s(r), a.notify()
                },
                removeContextProperty: function(e) {
                    delete r[e], s(r), a.notify()
                },
                clearContext: function() {
                    r = {}, n = 0, a.notify()
                },
                changeObservable: a
            };
        return u
    }
    var K, Z = function() {
            function e() {
                this.buffer = []
            }
            return e.prototype.add = function(e) {
                this.buffer.push(e) > 500 && this.buffer.splice(0, 1)
            }, e.prototype.drain = function() {
                this.buffer.forEach((function(e) {
                    return e()
                })), this.buffer.length = 0
            }, e
        }(),
        Y = 1e3,
        Q = 60 * Y,
        ee = 60 * Q;

    function te() {
        return (new Date).getTime()
    }

    function ne() {
        return te()
    }

    function re() {
        return performance.now()
    }

    function oe() {
        return {
            relative: re(),
            timeStamp: ne()
        }
    }

    function ie(e, t) {
        return e + t
    }

    function ae() {
        return void 0 === K && (K = performance.timing.navigationStart), K
    }

    function se() {
        var e = b().DatadogEventBridge;
        if (e) return {
            getAllowedWebViewHosts: function() {
                return JSON.parse(e.getAllowedWebViewHosts())
            },
            send: function(t, n) {
                e.send(JSON.stringify({
                    eventType: t,
                    event: n
                }))
            }
        }
    }

    function ue(e) {
        var t;
        void 0 === e && (e = null === (t = b().location) || void 0 === t ? void 0 : t.hostname);
        var n = se();
        return !!n && n.getAllowedWebViewHosts().some((function(t) {
            return e === t || (n = e, r = ".".concat(t), n.slice(-r.length) === r);
            var n, r
        }))
    }

    function ce(e, t, n, r, o) {
        return fe(e, t, [n], r, o)
    }

    function fe(e, t, n, r, o) {
        var i = void 0 === o ? {} : o,
            a = i.once,
            s = i.capture,
            u = i.passive,
            c = l(a ? function(e) {
                v(), r(e)
            } : r),
            f = u ? {
                capture: s,
                passive: u
            } : s,
            d = C(t, "addEventListener");

        function v() {
            var e = C(t, "removeEventListener");
            n.forEach((function(n) {
                return e.call(t, n, c, f)
            }))
        }
        return n.forEach((function(e) {
            return d.call(t, e, c, f)
        })), {
            stop: v
        }
    }
    var le, de = "_dd_c",
        ve = [];

    function pe(e, t, n, r) {
        void 0 === r && (r = x);
        var o = function(e, t) {
                return "".concat(de, "_").concat(e, "_").concat(t)
            }(t, n),
            i = X(n, r);
        return a(), ve.push(ce(e, window, "storage", (function(e) {
            var t = e.key;
            o === t && a()
        }))), i.changeObservable.subscribe((function() {
            localStorage.setItem(o, JSON.stringify(i.getContext()))
        })), i;

        function a() {
            var e = localStorage.getItem(o),
                t = null !== e ? JSON.parse(e) : {};
            i.setContext(t)
        }
    }

    function ge(e) {
        var t = m({}, e);
        return ["id", "name", "email"].forEach((function(e) {
            e in t && (t[e] = String(t[e]))
        })), t
    }! function(e) {
        e.PAGEHIDE = "pagehide", e.FEATURE_FLAGS = "feature_flags", e.RESOURCE_PAGE_STATES = "resource_page_states", e.PAGE_STATES = "page_states", e.COLLECT_FLUSH_REASON = "collect_flush_reason", e.NO_RESOURCE_DURATION_FROZEN_STATE = "no_resource_duration_frozen_state", e.SCROLLMAP = "scrollmap", e.INTERACTION_TO_NEXT_PAINT = "interaction_to_next_paint", e.WEB_VITALS_ATTRIBUTION = "web_vitals_attribution", e.DISABLE_REPLAY_INLINE_CSS = "disable_replay_inline_css"
    }(le || (le = {}));
    var he = new Set;

    function ye(e) {
        return he.has(e)
    }

    function me() {
        return he
    }

    function be(e) {
        return 0 !== e && 100 * Math.random() <= e
    }

    function we(e) {
        return function(e) {
            return "number" == typeof e
        }(e) && e >= 0 && e <= 100
    }

    function Se(e) {
        return 0 === Object.keys(e).length
    }

    function Ee(e) {
        return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, Ee)
    }

    function xe(e, t, n) {
        void 0 === n && (n = "");
        var r = e.charCodeAt(t - 1),
            o = r >= 55296 && r <= 56319 ? t + 1 : t;
        return e.length <= o ? e : "".concat(e.slice(0, o)).concat(n)
    }
    var Ce, _e, ke = 4 * ee,
        Oe = 15 * Q;

    function Re(e, t, n, r) {
        var o = new Date;
        o.setTime(o.getTime() + n);
        var i = "expires=".concat(o.toUTCString()),
            a = r && r.crossSite ? "none" : "strict",
            s = r && r.domain ? ";domain=".concat(r.domain) : "",
            u = r && r.secure ? ";secure" : "";
        document.cookie = "".concat(e, "=").concat(t, ";").concat(i, ";path=/;samesite=").concat(a).concat(s).concat(u)
    }

    function Te(e) {
        return function(e, t) {
            var n = new RegExp("(?:^|;)\\s*".concat(t, "\\s*=\\s*([^;]+)")).exec(e);
            return n ? n[1] : void 0
        }(document.cookie, e)
    }

    function Le(e, t) {
        Re(e, "", 0, t)
    }
    var Ae = "_dd_s",
        Ie = /^([a-z]+)=([a-z0-9-]+)$/,
        Pe = "&";

    function Be(e) {
        return Se(e)
    }

    function Ne(e) {
        e.expire = String(te() + Oe)
    }

    function Me(e) {
        return (t = e, Object.keys(t).map((function(e) {
            return [e, t[e]]
        }))).map((function(e) {
            var t = e[0],
                n = e[1];
            return "".concat(t, "=").concat(n)
        })).join(Pe);
        var t
    }

    function Ue(e) {
        var t = {};
        return function(e) {
            return !!e && (-1 !== e.indexOf(Pe) || Ie.test(e))
        }(e) && e.split(Pe).forEach((function(e) {
            var n = Ie.exec(e);
            if (null !== n) {
                var r = n[1],
                    o = n[2];
                t[r] = o
            }
        })), t
    }
    var qe = "_dd",
        je = "_dd_r",
        De = "_dd_l",
        Ge = "rum",
        Fe = "logs";

    function He(e) {
        var t = function(e) {
            var t = {};
            t.secure = !!e.useSecureSessionCookie || !!e.useCrossSiteSessionCookie, t.crossSite = !!e.useCrossSiteSessionCookie, e.trackSessionAcrossSubdomains && (t.domain = function() {
                if (void 0 === _e) {
                    for (var e = "dd_site_test_".concat(Ee()), t = window.location.hostname.split("."), n = t.pop(); t.length && !Te(e);) n = "".concat(t.pop(), ".").concat(n), Re(e, "test", Y, {
                        domain: n
                    });
                    Le(e, {
                        domain: n
                    }), _e = n
                }
                return _e
            }());
            return t
        }(e);
        return function(e) {
            if (void 0 === document.cookie || null === document.cookie) return !1;
            try {
                var t = "dd_cookie_test_".concat(Ee()),
                    n = "test";
                Re(t, n, Q, e);
                var r = Te(t) === n;
                return Le(t, e), r
            } catch (e) {
                return o.error(e), !1
            }
        }(t) ? {
            type: "Cookie",
            cookieOptions: t
        } : void 0
    }

    function ze(e) {
        var t, n = {
            isLockEnabled: null != Ce ? Ce : Ce = !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent),
            persistSession: (t = e, function(e) {
                Re(Ae, Me(e), Oe, t)
            }),
            retrieveSession: Je,
            clearSession: Ve(e)
        };
        return function(e) {
            if (!Te(Ae)) {
                var t = Te(qe),
                    n = Te(je),
                    r = Te(De),
                    o = {};
                t && (o.id = t), r && /^[01]$/.test(r) && (o[Fe] = r), n && /^[012]$/.test(n) && (o[Ge] = n), Be(o) || (Ne(o), e.persistSession(o))
            }
        }(n), n
    }

    function Je() {
        return Ue(Te(Ae))
    }

    function Ve(e) {
        return function() {
            Le(Ae, e)
        }
    }
    var We = "_dd_test_";

    function $e(e) {
        localStorage.setItem(Ae, Me(e))
    }

    function Xe() {
        return Ue(localStorage.getItem(Ae))
    }

    function Ke() {
        localStorage.removeItem(Ae)
    }
    var Ze, Ye = 10,
        Qe = 100,
        et = [];

    function tt(e, t, n) {
        var r;
        void 0 === n && (n = 0);
        var o = t.isLockEnabled,
            i = t.retrieveSession,
            a = t.persistSession,
            s = t.clearSession;
        if (Ze || (Ze = e), e === Ze)
            if (o && n >= Qe) rt(t);
            else {
                var u, c = i();
                if (o) {
                    if (c.lock) return void nt(e, t, n);
                    if (u = Ee(), c.lock = u, a(c), (c = i()).lock !== u) return void nt(e, t, n)
                }
                var f = e.process(c);
                if (o && (c = i()).lock !== u) nt(e, t, n);
                else {
                    if (f && (Be(f) ? s() : (Ne(f), a(f))), o && (!f || !Be(f))) {
                        if ((c = i()).lock !== u) return void nt(e, t, n);
                        delete c.lock, a(c), f = c
                    }
                    null === (r = e.after) || void 0 === r || r.call(e, f || c), rt(t)
                }
            }
        else et.push(e)
    }

    function nt(e, t, n) {
        _((function() {
            tt(e, t, n + 1)
        }), Ye)
    }

    function rt(e) {
        Ze = void 0;
        var t = et.shift();
        t && tt(t, e)
    }
    var ot = Y;

    function it(e) {
        var t = He(e);
        return !t && e.allowFallbackToLocalStorage && (t = function() {
            try {
                var e = Ee(),
                    t = "".concat(We).concat(e);
                localStorage.setItem(t, e);
                var n = localStorage.getItem(t);
                return localStorage.removeItem(t), e === n ? {
                    type: "LocalStorage"
                } : void 0
            } catch (e) {
                return
            }
        }()), t
    }

    function at(e, t, n) {
        var r = new z,
            o = new z,
            i = "Cookie" === e.type ? ze(e.cookieOptions) : {
                isLockEnabled: !1,
                persistSession: $e,
                retrieveSession: Xe,
                clearSession: Ke
            },
            a = i.clearSession,
            s = i.retrieveSession,
            u = O((function() {
                tt({
                    process: function(e) {
                        return d(e) ? void 0 : {}
                    },
                    after: f
                }, i)
            }), ot),
            c = function() {
                var e = s();
                if (d(e)) return e;
                return {}
            }();

        function f(e) {
            return d(e) || (e = {}), l() && (! function(e) {
                return c.id !== e.id || c[t] !== e[t]
            }(e) ? c = e : (c = {}, o.notify())), e
        }

        function l() {
            return void 0 !== c[t]
        }

        function d(e) {
            return (void 0 === e.created || te() - Number(e.created) < ke) && (void 0 === e.expire || te() < Number(e.expire))
        }
        return {
            expandOrRenewSession: T((function() {
                var e;
                tt({
                    process: function(r) {
                        var o = f(r);
                        return e = function(e) {
                            var r = n(e[t]),
                                o = r.trackingType,
                                i = r.isTracked;
                            e[t] = o, i && !e.id && (e.id = Ee(), e.created = String(te()));
                            return i
                        }(o), o
                    },
                    after: function(t) {
                        e && !l() && function(e) {
                            c = e, r.notify()
                        }(t), c = t
                    }
                }, i)
            }), ot).throttled,
            expandSession: function() {
                tt({
                    process: function(e) {
                        return l() ? f(e) : void 0
                    }
                }, i)
            },
            getSession: function() {
                return c
            },
            renewObservable: r,
            expireObservable: o,
            expire: function() {
                a(), f({})
            },
            stop: function() {
                R(u)
            }
        }
    }

    function st(e) {
        return ut(e, lt(window.location)).href
    }

    function ut(e, t) {
        var n = function() {
            if (void 0 === ct) try {
                var e = new ft("http://test/path");
                ct = "http://test/path" === e.href
            } catch (e) {
                ct = !1
            }
            return ct ? ft : void 0
        }();
        if (n) try {
            return void 0 !== t ? new n(e, t) : new n(e)
        } catch (n) {
            throw new Error("Failed to construct URL: ".concat(String(n), " ").concat(N({
                url: e,
                base: t
            })))
        }
        if (void 0 === t && !/:/.test(e)) throw new Error("Invalid URL: '".concat(e, "'"));
        var r = document,
            o = r.createElement("a");
        if (void 0 !== t) {
            var i = (r = document.implementation.createHTMLDocument("")).createElement("base");
            i.href = t, r.head.appendChild(i), r.body.appendChild(o)
        }
        return o.href = e, o
    }
    var ct, ft = URL;

    function lt(e) {
        if (e.origin && "null" !== e.origin) return e.origin;
        var t = e.host.replace(/(:80|:443)$/, "");
        return "".concat(e.protocol, "//").concat(t)
    }
    var dt = "datad0g.com",
        vt = "datadoghq.com",
        pt = "ap1.datadoghq.com",
        gt = {
            logs: "logs",
            rum: "rum",
            sessionReplay: "session-replay"
        },
        ht = {
            logs: "logs",
            rum: "rum",
            sessionReplay: "replay"
        };

    function yt(e, t, n) {
        var r = function(e, t) {
            var n = "/api/v2/".concat(ht[t]),
                r = e.proxy,
                o = e.proxyUrl;
            if (r) {
                var i = st(r);
                return function(e) {
                    return "".concat(i, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(e)))
                }
            }
            var a = function(e, t) {
                var n = e.site,
                    r = void 0 === n ? vt : n,
                    o = e.internalAnalyticsSubdomain;
                if (o && r === vt) return "".concat(o, ".").concat(vt);
                var i = r.split("."),
                    a = i.pop(),
                    s = r !== pt ? "".concat(gt[t], ".") : "";
                return "".concat(s, "browser-intake-").concat(i.join("-"), ".").concat(a)
            }(e, t);
            if (void 0 === r && o) {
                var s = st(o);
                return function(e) {
                    return "".concat(s, "?ddforward=").concat(encodeURIComponent("https://".concat(a).concat(n, "?").concat(e)))
                }
            }
            return function(e) {
                return "https://".concat(a).concat(n, "?").concat(e)
            }
        }(e, t);
        return {
            build: function(o, i) {
                var a = function(e, t, n, r, o) {
                    var i = e.clientToken,
                        a = e.internalAnalyticsSubdomain,
                        s = o.retry,
                        u = o.flushReason,
                        c = o.encoding,
                        f = ["sdk_version:".concat("4.50.1"), "api:".concat(r)].concat(n);
                    u && ye(le.COLLECT_FLUSH_REASON) && f.push("flush_reason:".concat(u));
                    s && f.push("retry_count:".concat(s.count), "retry_after:".concat(s.lastFailureStatus));
                    var l = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(f.join(","))), "dd-api-key=".concat(i), "dd-evp-origin-version=".concat(encodeURIComponent("4.50.1")), "dd-evp-origin=browser", "dd-request-id=".concat(Ee())];
                    c && l.push("dd-evp-encoding=".concat(c));
                    "rum" === t && l.push("batch_time=".concat(ne()));
                    a && l.reverse();
                    return l.join("&")
                }(e, t, n, o, i);
                return r(a)
            },
            urlPrefix: r(""),
            endpointType: t
        }
    }
    var mt = 200;
    var bt = /[^a-z0-9_:./-]/;

    function wt(e, t) {
        var n = mt - e.length - 1;
        (t.length > n || bt.test(t)) && o.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized"));
        var r = t.replace(/,/g, "_");
        return "".concat(e, ":").concat(r)
    }

    function St(e) {
        var t = function(e) {
                var t = e.env,
                    n = e.service,
                    r = e.version,
                    o = e.datacenter,
                    i = [];
                return t && i.push(wt("env", t)), n && i.push(wt("service", n)), r && i.push(wt("version", r)), o && i.push(wt("datacenter", o)), i
            }(e),
            n = function(e, t) {
                return {
                    logsEndpointBuilder: yt(e, "logs", t),
                    rumEndpointBuilder: yt(e, "rum", t),
                    sessionReplayEndpointBuilder: yt(e, "sessionReplay", t)
                }
            }(e, t),
            r = h(n).map((function(e) {
                return e.urlPrefix
            })),
            o = function(e, t, n) {
                if (!e.replica) return;
                var r = m({}, e, {
                        site: vt,
                        clientToken: e.replica.clientToken
                    }),
                    o = {
                        logsEndpointBuilder: yt(r, "logs", n),
                        rumEndpointBuilder: yt(r, "rum", n)
                    };
                return t.push.apply(t, h(o).map((function(e) {
                    return e.urlPrefix
                }))), m({
                    applicationId: e.replica.applicationId
                }, o)
            }(e, r, t);
        return m({
            isIntakeUrl: function(e) {
                return r.some((function(t) {
                    return 0 === e.indexOf(t)
                }))
            },
            replica: o,
            site: e.site || vt
        }, n)
    }

    function Et(e) {
        var t, n, r;
        if (e && e.clientToken) {
            var a = null !== (t = e.sessionSampleRate) && void 0 !== t ? t : e.sampleRate;
            if (void 0 === a || we(a))
                if (void 0 === e.telemetrySampleRate || we(e.telemetrySampleRate)) {
                    if (void 0 === e.telemetryConfigurationSampleRate || we(e.telemetryConfigurationSampleRate)) return Array.isArray(e.enableExperimentalFeatures) && e.enableExperimentalFeatures.filter((function(e) {
                        return t = le, n = e, Object.keys(t).some((function(e) {
                            return t[e] === n
                        }));
                        var t, n
                    })).forEach((function(e) {
                        he.add(e)
                    })), m({
                        beforeSend: e.beforeSend && i(e.beforeSend, "beforeSend threw an error:"),
                        sessionStoreStrategyType: it(e),
                        sessionSampleRate: null != a ? a : 100,
                        telemetrySampleRate: null !== (n = e.telemetrySampleRate) && void 0 !== n ? n : 20,
                        telemetryConfigurationSampleRate: null !== (r = e.telemetryConfigurationSampleRate) && void 0 !== r ? r : 5,
                        service: e.service,
                        silentMultipleInit: !!e.silentMultipleInit,
                        batchBytesLimit: 16 * w,
                        eventRateLimiterThreshold: 3e3,
                        maxTelemetryEventsPerPage: 15,
                        flushTimeout: 30 * Y,
                        batchMessagesLimit: 50,
                        messageBytesLimit: 256 * w
                    }, St(e));
                    o.error("Telemetry Configuration Sample Rate should be a number between 0 and 100")
                } else o.error("Telemetry Sample Rate should be a number between 0 and 100");
            else o.error("Session Sample Rate should be a number between 0 and 100")
        } else o.error("Client Token is not configured, we will not send any data.")
    }
    var xt = "?";

    function Ct(e) {
        var t = [],
            n = Pt(e, "stack"),
            r = String(e);
        return n && y(n, r) && (n = n.slice(r.length)), n && n.split("\n").forEach((function(e) {
            var n = function(e) {
                var t = Ot.exec(e);
                if (!t) return;
                var n = t[2] && 0 === t[2].indexOf("native"),
                    r = t[2] && 0 === t[2].indexOf("eval"),
                    o = Rt.exec(t[2]);
                r && o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]);
                return {
                    args: n ? [t[2]] : [],
                    column: t[4] ? +t[4] : void 0,
                    func: t[1] || xt,
                    line: t[3] ? +t[3] : void 0,
                    url: n ? void 0 : t[2]
                }
            }(e) || function(e) {
                var t = Tt.exec(e);
                if (!t) return;
                return {
                    args: [],
                    column: t[3] ? +t[3] : void 0,
                    func: xt,
                    line: t[2] ? +t[2] : void 0,
                    url: t[1]
                }
            }(e) || function(e) {
                var t = Lt.exec(e);
                if (!t) return;
                return {
                    args: [],
                    column: t[4] ? +t[4] : void 0,
                    func: t[1] || xt,
                    line: +t[3],
                    url: t[2]
                }
            }(e) || function(e) {
                var t = At.exec(e);
                if (!t) return;
                var n = t[3] && t[3].indexOf(" > eval") > -1,
                    r = It.exec(t[3]);
                n && r && (t[3] = r[1], t[4] = r[2], t[5] = void 0);
                return {
                    args: t[2] ? t[2].split(",") : [],
                    column: t[5] ? +t[5] : void 0,
                    func: t[1] || xt,
                    line: t[4] ? +t[4] : void 0,
                    url: t[3]
                }
            }(e);
            n && (!n.func && n.line && (n.func = xt), t.push(n))
        })), {
            message: Pt(e, "message"),
            name: Pt(e, "name"),
            stack: t
        }
    }
    var _t = "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
        kt = "(?::(\\d+))",
        Ot = new RegExp("^\\s*at (.*?) ?\\(".concat(_t).concat(kt, "?").concat(kt, "?\\)?\\s*$"), "i"),
        Rt = new RegExp("\\((\\S*)".concat(kt).concat(kt, "\\)"));
    var Tt = new RegExp("^\\s*at ?".concat(_t).concat(kt, "?").concat(kt, "??\\s*$"), "i");
    var Lt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    var At = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
        It = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

    function Pt(e, t) {
        if ("object" == typeof e && e && t in e) {
            var n = e[t];
            return "string" == typeof n ? n : void 0
        }
    }
    var Bt = "No stack, consider using an instance of Error";

    function Nt(e) {
        var t = e.stackTrace,
            n = e.originalError,
            r = e.handlingStack,
            o = e.startClocks,
            i = e.nonErrorPrefix,
            a = e.source,
            s = e.handling,
            u = n instanceof Error,
            c = function(e, t, n, r) {
                return (null == e ? void 0 : e.message) && (null == e ? void 0 : e.name) ? e.message : t ? "Empty message" : "".concat(n, " ").concat(N(D(r)))
            }(t, u, i, n),
            f = function(e, t) {
                if (void 0 === t) return !1;
                if (e) return !0;
                return t.stack.length > 0 && (t.stack.length > 1 || void 0 !== t.stack[0].url)
            }(u, t) ? Ut(t) : Bt,
            l = u ? function(e, t) {
                var n = e,
                    r = [];
                for (;
                    (null == n ? void 0 : n.cause) instanceof Error && r.length < 10;) {
                    var o = Ct(n.cause);
                    r.push({
                        message: n.cause.message,
                        source: t,
                        type: null == o ? void 0 : o.name,
                        stack: o && Ut(o)
                    }), n = n.cause
                }
                return r.length ? r : void 0
            }(n, a) : void 0;
        return {
            startClocks: o,
            source: a,
            handling: s,
            handlingStack: r,
            originalError: n,
            type: null == t ? void 0 : t.name,
            message: c,
            stack: f,
            causes: l,
            fingerprint: Mt(n)
        }
    }

    function Mt(e) {
        return e instanceof Error && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0
    }

    function Ut(e) {
        var t = qt(e);
        return e.stack.forEach((function(e) {
            var n = "?" === e.func ? "<anonymous>" : e.func,
                r = e.args && e.args.length > 0 ? "(".concat(e.args.join(", "), ")") : "",
                o = e.line ? ":".concat(e.line) : "",
                i = e.line && e.column ? ":".concat(e.column) : "";
            t += "\n  at ".concat(n).concat(r, " @ ").concat(e.url).concat(o).concat(i)
        })), t
    }

    function qt(e) {
        return "".concat(e.name || "Error", ": ").concat(e.message)
    }
    var jt = {
        intervention: "intervention",
        deprecation: "deprecation",
        cspViolation: "csp_violation"
    };

    function Dt(e, t) {
        var n = [];
        p(t, jt.cspViolation) && n.push(function(e) {
            var t = new z((function() {
                return ce(e, document, "securitypolicyviolation", (function(e) {
                    t.notify(function(e) {
                        var t = jt.cspViolation,
                            n = "'".concat(e.blockedURI, "' blocked by '").concat(e.effectiveDirective, "' directive");
                        return {
                            type: jt.cspViolation,
                            subtype: e.effectiveDirective,
                            message: "".concat(t, ": ").concat(n),
                            stack: Gt(e.effectiveDirective, e.originalPolicy ? "".concat(n, ' of the policy "').concat(xe(e.originalPolicy, 100, "..."), '"') : "no policy", e.sourceFile, e.lineNumber, e.columnNumber)
                        }
                    }(e))
                })).stop
            }));
            return t
        }(e));
        var r = t.filter((function(e) {
            return e !== jt.cspViolation
        }));
        return r.length && n.push(function(e) {
            var t = new z((function() {
                if (window.ReportingObserver) {
                    var n = l((function(e, n) {
                            return e.forEach((function(e) {
                                t.notify(function(e) {
                                    var t = e.type,
                                        n = e.body;
                                    return {
                                        type: t,
                                        subtype: n.id,
                                        message: "".concat(t, ": ").concat(n.message),
                                        stack: Gt(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                    }
                                }(e))
                            }))
                        })),
                        r = new window.ReportingObserver(n, {
                            types: e,
                            buffered: !0
                        });
                    return r.observe(),
                        function() {
                            r.disconnect()
                        }
                }
            }));
            return t
        }(r)), J.apply(void 0, n)
    }

    function Gt(e, t, n, r, o) {
        return n ? Ut({
            name: e,
            message: t,
            stack: [{
                func: "?",
                url: n,
                line: null != r ? r : void 0,
                column: null != o ? o : void 0
            }]
        }) : void 0
    }
    var Ft = 32 * w;

    function Ht(e, t, n) {
        return void 0 === e ? [] : "all" === e || Array.isArray(e) && e.every((function(e) {
            return p(t, e)
        })) ? "all" === e ? t : (r = e, i = new Set, r.forEach((function(e) {
            return i.add(e)
        })), g(i)) : void o.error("".concat(n, ' should be "all" or an array with allowed values "').concat(t.join('", "'), '"'));
        var r, i
    }
    var zt = {
            AGENT: "agent",
            CONSOLE: "console",
            CUSTOM: "custom",
            LOGGER: "logger",
            NETWORK: "network",
            SOURCE: "source",
            REPORT: "report"
        },
        Jt = function(e, t, n, r) {
            var o, i = arguments.length,
                a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a
        },
        Vt = {
            debug: "debug",
            error: "error",
            info: "info",
            warn: "warn"
        },
        Wt = {
            console: "console",
            http: "http",
            silent: "silent"
        },
        $t = Object.keys(Vt),
        Xt = function() {
            function e(e, t, n, r, o) {
                void 0 === n && (n = Wt.http), void 0 === r && (r = Vt.debug), void 0 === o && (o = {}), this.handleLogStrategy = e, this.handlerType = n, this.level = r, this.contextManager = X(3), this.contextManager.set(m({}, o, t ? {
                    logger: {
                        name: t
                    }
                } : void 0))
            }
            return e.prototype.log = function(e, t, n, r) {
                var o;
                if (void 0 === n && (n = Vt.info), n === Vt.error && (o = {
                        origin: zt.LOGGER
                    }), null != r) {
                    var i = Nt({
                        stackTrace: r instanceof Error ? Ct(r) : void 0,
                        originalError: r,
                        nonErrorPrefix: "Provided",
                        source: zt.LOGGER,
                        handling: "handled",
                        startClocks: oe()
                    });
                    o = {
                        origin: zt.LOGGER,
                        stack: i.stack,
                        kind: i.type,
                        message: i.message
                    }
                }
                var a = D(t),
                    s = o ? B({
                        error: o
                    }, a) : a;
                this.handleLogStrategy({
                    message: D(e),
                    context: s,
                    status: n
                }, this)
            }, e.prototype.debug = function(e, t, n) {
                this.log(e, t, Vt.debug, n)
            }, e.prototype.info = function(e, t, n) {
                this.log(e, t, Vt.info, n)
            }, e.prototype.warn = function(e, t, n) {
                this.log(e, t, Vt.warn, n)
            }, e.prototype.error = function(e, t, n) {
                this.log(e, t, Vt.error, n)
            }, e.prototype.setContext = function(e) {
                this.contextManager.set(e)
            }, e.prototype.getContext = function() {
                return this.contextManager.get()
            }, e.prototype.addContext = function(e, t) {
                this.contextManager.add(e, t)
            }, e.prototype.removeContext = function(e) {
                this.contextManager.remove(e)
            }, e.prototype.setHandler = function(e) {
                this.handlerType = e
            }, e.prototype.getHandler = function() {
                return this.handlerType
            }, e.prototype.setLevel = function(e) {
                this.level = e
            }, e.prototype.getLevel = function() {
                return this.level
            }, Jt([f], e.prototype, "log", null), e
        }(),
        Kt = "logs";

    function Zt(e, t) {
        var n = window.__ddBrowserSdkExtensionCallback;
        n && n({
            type: e,
            payload: t
        })
    }
    var Yt, Qt = {
            log: "log",
            configuration: "configuration"
        },
        en = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
        tn = ["ddog-gov.com"],
        nn = {
            maxEventsPerPage: 0,
            sentEventCount: 0,
            telemetryEnabled: !1,
            telemetryConfigurationEnabled: !1
        };

    function rn(e, t) {
        var n, r = new z;
        nn.telemetryEnabled = !p(tn, t.site) && be(t.telemetrySampleRate), nn.telemetryConfigurationEnabled = nn.telemetryEnabled && be(t.telemetryConfigurationSampleRate);
        var o = {
            is_local_file: "file:" === window.location.protocol,
            is_worker: "WorkerGlobalScope" in self
        };
        return Yt = function(t) {
            if (nn.telemetryEnabled) {
                var i = function(e, t, r) {
                    return B({
                        type: "telemetry",
                        date: ne(),
                        service: e,
                        version: "4.50.1",
                        source: "browser",
                        _dd: {
                            format_version: 2
                        },
                        telemetry: B(t, {
                            runtime_env: r
                        }),
                        experimental_features: g(me())
                    }, void 0 !== n ? n() : {})
                }(e, t, o);
                r.notify(i), Zt("telemetry", i)
            }
        }, a = an, m(nn, {
            maxEventsPerPage: t.maxTelemetryEventsPerPage,
            sentEventCount: 0
        }), {
            setContextProvider: function(e) {
                n = e
            },
            observable: r,
            enabled: nn.telemetryEnabled
        }
    }

    function on(t, n) {
        v(e.debug, t, n), sn(m({
            type: Qt.log,
            message: t,
            status: "debug"
        }, n))
    }

    function an(e, t) {
        sn(m({
            type: Qt.log,
            status: "error"
        }, function(e) {
            if (e instanceof Error) {
                var t = Ct(e);
                return {
                    error: {
                        kind: t.name,
                        stack: Ut(un(t))
                    },
                    message: t.message
                }
            }
            return {
                error: {
                    stack: Bt
                },
                message: "".concat("Uncaught", " ").concat(N(e))
            }
        }(e), t))
    }

    function sn(e) {
        Yt && nn.sentEventCount < nn.maxEventsPerPage && (nn.sentEventCount += 1, Yt(e))
    }

    function un(e) {
        return e.stack = e.stack.filter((function(e) {
            return !e.url || en.some((function(t) {
                return y(e.url, t)
            }))
        })), e
    }
    var cn = {
        HIDDEN: "visibility_hidden",
        UNLOADING: "before_unload",
        PAGEHIDE: "page_hide",
        FROZEN: "page_frozen"
    };
    var fn = "datadog-synthetics-public-id",
        ln = "datadog-synthetics-result-id",
        dn = "datadog-synthetics-injects-rum";

    function vn() {
        return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || Te(dn))
    }

    function pn() {
        var e = window._DATADOG_SYNTHETICS_RESULT_ID || Te(ln);
        return "string" == typeof e ? e : void 0
    }
    var gn = function() {
        function e(e, t, n) {
            var r = this;
            this.request = e, this.flushController = t, this.messageBytesLimit = n, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.flushSubscription = this.flushController.flushObservable.subscribe((function(e) {
                return r.flush(e)
            }))
        }
        return e.prototype.add = function(e) {
            this.addOrUpdate(e)
        }, e.prototype.upsert = function(e, t) {
            this.addOrUpdate(e, t)
        }, e.prototype.stop = function() {
            this.flushSubscription.unsubscribe()
        }, e.prototype.flush = function(e) {
            var t = this.pushOnlyBuffer.concat(h(this.upsertBuffer));
            this.pushOnlyBuffer = [], this.upsertBuffer = {};
            var n, r = {
                data: t.join("\n"),
                bytesCount: e.bytesCount,
                flushReason: e.reason
            };
            n = e.reason, p(h(cn), n) ? this.request.sendOnExit(r) : this.request.send(r)
        }, e.prototype.addOrUpdate = function(e, t) {
            var n = this.process(e),
                r = n.processedMessage,
                i = n.messageBytesCount;
            i >= this.messageBytesLimit ? o.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(t) && this.remove(t), this.push(r, i, t))
        }, e.prototype.process = function(e) {
            var t = N(e);
            return {
                processedMessage: t,
                messageBytesCount: x(t)
            }
        }, e.prototype.push = function(e, t, n) {
            var r = this.flushController.messagesCount > 0 ? 1 : 0;
            this.flushController.notifyBeforeAddMessage(t + r), void 0 !== n ? this.upsertBuffer[n] = e : this.pushOnlyBuffer.push(e), this.flushController.notifyAfterAddMessage()
        }, e.prototype.remove = function(e) {
            var t = this.upsertBuffer[e];
            delete this.upsertBuffer[e];
            var n = x(t),
                r = this.flushController.messagesCount > 1 ? 1 : 0;
            this.flushController.notifyAfterRemoveMessage(n + r)
        }, e.prototype.hasMessageFor = function(e) {
            return void 0 !== e && void 0 !== this.upsertBuffer[e]
        }, e
    }();

    function hn(e) {
        return e >= 500
    }
    var yn = 80 * w,
        mn = 32,
        bn = 3 * S,
        wn = Q,
        Sn = Y;

    function En(e, t, n, r, o) {
        0 === t.transportStatus && 0 === t.queuedPayloads.size() && t.bandwidthMonitor.canHandle(e) ? Cn(e, t, n, {
            onSuccess: function() {
                return _n(0, t, n, r, o)
            },
            onFailure: function() {
                t.queuedPayloads.enqueue(e), xn(t, n, r, o)
            }
        }) : t.queuedPayloads.enqueue(e)
    }

    function xn(e, t, n, r) {
        2 === e.transportStatus && _((function() {
            Cn(e.queuedPayloads.first(), e, t, {
                onSuccess: function() {
                    e.queuedPayloads.dequeue(), e.currentBackoffTime = Sn, _n(1, e, t, n, r)
                },
                onFailure: function() {
                    e.currentBackoffTime = Math.min(wn, 2 * e.currentBackoffTime), xn(e, t, n, r)
                }
            })
        }), e.currentBackoffTime)
    }

    function Cn(e, t, n, r) {
        var o = r.onSuccess,
            i = r.onFailure;
        t.bandwidthMonitor.add(e), n(e, (function(n) {
            t.bandwidthMonitor.remove(e), ! function(e) {
                return "opaque" !== e.type && (0 === e.status && !navigator.onLine || 408 === e.status || 429 === e.status || hn(e.status))
            }(n) ? (t.transportStatus = 0, o()) : (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
                count: e.retry ? e.retry.count + 1 : 1,
                lastFailureStatus: n.status
            }, i())
        }))
    }

    function _n(e, t, n, r, o) {
        0 === e && t.queuedPayloads.isFull() && !t.queueFullReported && (o({
            message: "Reached max ".concat(r, " events size queued for upload: ").concat(bn / S, "MiB"),
            source: zt.AGENT,
            startClocks: oe()
        }), t.queueFullReported = !0);
        var i = t.queuedPayloads;
        for (t.queuedPayloads = kn(); i.size() > 0;) En(i.dequeue(), t, n, r, o)
    }

    function kn() {
        var e = [];
        return {
            bytesCount: 0,
            enqueue: function(t) {
                this.isFull() || (e.push(t), this.bytesCount += t.bytesCount)
            },
            first: function() {
                return e[0]
            },
            dequeue: function() {
                var t = e.shift();
                return t && (this.bytesCount -= t.bytesCount), t
            },
            size: function() {
                return e.length
            },
            isFull: function() {
                return this.bytesCount >= bn
            }
        }
    }

    function On(e, t, n, r) {
        var o = {
                transportStatus: 0,
                currentBackoffTime: Sn,
                bandwidthMonitor: {
                    ongoingRequestCount: 0,
                    ongoingByteCount: 0,
                    canHandle: function(e) {
                        return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= yn && this.ongoingRequestCount < mn
                    },
                    add: function(e) {
                        this.ongoingRequestCount += 1, this.ongoingByteCount += e.bytesCount
                    },
                    remove: function(e) {
                        this.ongoingRequestCount -= 1, this.ongoingByteCount -= e.bytesCount
                    }
                },
                queuedPayloads: kn(),
                queueFullReported: !1
            },
            i = function(r, o) {
                return function(e, t, n, r, o) {
                    var i = function() {
                        try {
                            return window.Request && "keepalive" in new Request("http://a")
                        } catch (e) {
                            return !1
                        }
                    }() && r.bytesCount < n;
                    if (i) {
                        var a = t.build("fetch", r);
                        fetch(a, {
                            method: "POST",
                            body: r.data,
                            keepalive: !0,
                            mode: "cors"
                        }).then(l((function(e) {
                            return null == o ? void 0 : o({
                                status: e.status,
                                type: e.type
                            })
                        })), l((function() {
                            var n = t.build("xhr", r);
                            Tn(e, n, r.data, o)
                        })))
                    } else {
                        var s = t.build("xhr", r);
                        Tn(e, s, r.data, o)
                    }
                }(e, t, n, r, o)
            };
        return {
            send: function(e) {
                En(e, o, i, t.endpointType, r)
            },
            sendOnExit: function(r) {
                ! function(e, t, n, r) {
                    var o = !!navigator.sendBeacon && r.bytesCount < n;
                    if (o) try {
                        var i = t.build("beacon", r);
                        if (navigator.sendBeacon(i, r.data)) return
                    } catch (e) {
                        ! function(e) {
                            Rn || (Rn = !0, an(e))
                        }(e)
                    }
                    var a = t.build("xhr", r);
                    Tn(e, a, r.data)
                }(e, t, n, r)
            }
        }
    }
    var Rn = !1;

    function Tn(e, t, n, r) {
        var o = new XMLHttpRequest;
        o.open("POST", t, !0), ce(e, o, "loadend", (function() {
            null == r || r({
                status: o.status
            })
        }), {
            once: !0
        }), o.send(n)
    }

    function Ln(e) {
        var t, n = e.messagesLimit,
            r = e.bytesLimit,
            o = e.durationLimit,
            i = e.pageExitObservable,
            a = e.sessionExpireObservable,
            s = i.subscribe((function(e) {
                return d(e.reason)
            })),
            u = a.subscribe((function() {
                return d("session_expire")
            })),
            c = new z((function() {
                return function() {
                    s.unsubscribe(), u.unsubscribe()
                }
            })),
            f = 0,
            l = 0;

        function d(e) {
            if (0 !== l) {
                var t = l,
                    n = f;
                l = 0, f = 0, v(), c.notify({
                    reason: e,
                    messagesCount: t,
                    bytesCount: n
                })
            }
        }

        function v() {
            k(t), t = void 0
        }
        return {
            flushObservable: c,
            get messagesCount() {
                return l
            },
            notifyBeforeAddMessage: function(e) {
                f + e >= r && d("bytes_limit"), l += 1, f += e, void 0 === t && (t = _((function() {
                    d("duration_limit")
                }), o))
            },
            notifyAfterAddMessage: function() {
                l >= n ? d("messages_limit") : f >= r && d("bytes_limit")
            },
            notifyAfterRemoveMessage: function(e) {
                f -= e, 0 === (l -= 1) && v()
            }
        }
    }

    function An(e, t, n, r, o, i) {
        var a = u(e, t.endpoint),
            s = n && u(e, n.endpoint);

        function u(e, t) {
            return new gn(On(e, t, e.batchBytesLimit, r), Ln({
                messagesLimit: e.batchMessagesLimit,
                bytesLimit: e.batchBytesLimit,
                durationLimit: e.flushTimeout,
                pageExitObservable: o,
                sessionExpireObservable: i
            }), e.messageBytesLimit)
        }
        return {
            flushObservable: a.flushController.flushObservable,
            add: function(e, t) {
                void 0 === t && (t = !0), a.add(e), s && t && s.add(n.transformMessage ? n.transformMessage(e) : e)
            },
            upsert: function(e, t) {
                a.upsert(e, t), s && s.upsert(n.transformMessage ? n.transformMessage(e) : e, t)
            },
            stop: function() {
                a.stop(), null == s || s.stop()
            }
        }
    }
    var In = 1 / 0,
        Pn = Q,
        Bn = function() {
            function e(e, t) {
                var n = this;
                this.expireDelay = e, this.maxEntries = t, this.entries = [], this.clearOldValuesInterval = O((function() {
                    return n.clearOldValues()
                }), Pn)
            }
            return e.prototype.add = function(e, t) {
                var n = this,
                    r = {
                        value: e,
                        startTime: t,
                        endTime: In,
                        remove: function() {
                            var e = n.entries.indexOf(r);
                            e >= 0 && n.entries.splice(e, 1)
                        },
                        close: function(e) {
                            r.endTime = e
                        }
                    };
                return this.maxEntries && this.entries.length >= this.maxEntries && this.entries.pop(), this.entries.unshift(r), r
            }, e.prototype.find = function(e) {
                void 0 === e && (e = In);
                for (var t = 0, n = this.entries; t < n.length; t++) {
                    var r = n[t];
                    if (r.startTime <= e) {
                        if (e <= r.endTime) return r.value;
                        break
                    }
                }
            }, e.prototype.closeActive = function(e) {
                var t = this.entries[0];
                t && t.endTime === In && t.close(e)
            }, e.prototype.findAll = function(e, t) {
                void 0 === e && (e = In), void 0 === t && (t = 0);
                var n = ie(e, t);
                return this.entries.filter((function(t) {
                    return t.startTime <= n && e <= t.endTime
                })).map((function(e) {
                    return e.value
                }))
            }, e.prototype.reset = function() {
                this.entries = []
            }, e.prototype.stop = function() {
                R(this.clearOldValuesInterval)
            }, e.prototype.clearOldValues = function() {
                for (var e = re() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < e;) this.entries.pop()
            }, e
        }(),
        Nn = Q,
        Mn = ke,
        Un = [];

    function qn(e, t, n) {
        var r = at(e.sessionStoreStrategyType, t, n);
        Un.push((function() {
            return r.stop()
        }));
        var o, i = new Bn(Mn);

        function a() {
            return {
                id: r.getSession().id,
                trackingType: r.getSession()[t]
            }
        }
        return Un.push((function() {
                return i.stop()
            })), r.renewObservable.subscribe((function() {
                i.add(a(), re())
            })), r.expireObservable.subscribe((function() {
                i.closeActive(re())
            })), r.expandOrRenewSession(), i.add(a(), [0, ae()][0]), o = fe(0, window, ["click", "touchstart", "keydown", "scroll"], (function() {
                return r.expandOrRenewSession()
            }), {
                capture: !0,
                passive: !0
            }).stop, Un.push(o),
            function(e, t) {
                var n = function() {
                        "visible" === document.visibilityState && t()
                    },
                    r = ce(e, document, "visibilitychange", n).stop;
                Un.push(r);
                var o = O(n, Nn);
                Un.push((function() {
                    R(o)
                }))
            }(e, (function() {
                return r.expandSession()
            })), {
                findActiveSession: function(e) {
                    return i.find(e)
                },
                renewObservable: r.renewObservable,
                expireObservable: r.expireObservable,
                expire: r.expire
            }
    }
    var jn, Dn = "logs";

    function Gn(e) {
        var t = qn(e, Dn, (function(t) {
            return function(e, t) {
                var n = function(e) {
                    return "0" === e || "1" === e
                }(t) ? t : Fn(e);
                return {
                    trackingType: n,
                    isTracked: "1" === n
                }
            }(e, t)
        }));
        return {
            findTrackedSession: function(e) {
                var n = t.findActiveSession(e);
                return n && "1" === n.trackingType ? {
                    id: n.id
                } : void 0
            },
            expireObservable: t.expireObservable
        }
    }

    function Fn(e) {
        return be(e.sessionSampleRate) ? "1" : "0"
    }
    var Hn = ((jn = {})[Vt.debug] = 0, jn[Vt.info] = 1, jn[Vt.warn] = 2, jn[Vt.error] = 3, jn);

    function zn(e) {
        return {
            handleLog: function(r, o, i, a) {
                var s = r.context;
                Jn(r.status, Wt.console, o) && function(e, r) {
                    n[e.status].call(t, e.message, r)
                }(r, B(o.getContext(), s)), e.notify(0, {
                    rawLogsEvent: {
                        date: a || ne(),
                        message: r.message,
                        status: r.status,
                        origin: zt.LOGGER
                    },
                    messageContext: s,
                    savedCommonContext: i,
                    logger: o
                })
            }
        }
    }

    function Jn(e, t, n) {
        var r = n.getHandler(),
            o = Array.isArray(r) ? r : [r];
        return Hn[e] >= Hn[n.getLevel()] && p(o, t)
    }

    function Vn(e, t, n, r, o, i) {
        var a = $t.concat(["custom"]),
            s = {};
        a.forEach((function(e) {
            var n, r, o, a, u;
            s[e] = (n = e, r = t.eventRateLimiterThreshold, o = i, a = 0, u = !1, {
                isLimitReached: function() {
                    if (0 === a && _((function() {
                            a = 0
                        }), Q), (a += 1) <= r || u) return u = !1, !1;
                    if (a === r + 1) {
                        u = !0;
                        try {
                            o({
                                message: "Reached max number of ".concat(n, "s by minute: ").concat(r),
                                source: zt.AGENT,
                                startClocks: oe()
                            })
                        } finally {
                            u = !1
                        }
                    }
                    return !0
                }
            })
        })), n.subscribe(0, (function(i) {
            var a, u, c, f = i.rawLogsEvent,
                l = i.messageContext,
                d = void 0 === l ? void 0 : l,
                v = i.savedCommonContext,
                p = void 0 === v ? void 0 : v,
                g = i.logger,
                h = void 0 === g ? o : g,
                y = f.date - ae(),
                m = e.findTrackedSession(y);
            if (m) {
                var b = p || r(),
                    w = B({
                        service: t.service,
                        session_id: m.id,
                        usr: Se(b.user) ? void 0 : b.user,
                        view: b.view
                    }, b.context, $n(y), f, h.getContext(), d);
                !Jn(f.status, Wt.http, h) || !1 === (null === (a = t.beforeSend) || void 0 === a ? void 0 : a.call(t, w)) || (null === (u = w.error) || void 0 === u ? void 0 : u.origin) !== zt.AGENT && (null !== (c = s[w.status]) && void 0 !== c ? c : s.custom).isLimitReached() || n.notify(1, w)
            }
        }))
    }
    var Wn = !1;

    function $n(e) {
        var t, n = window;
        if (vn()) {
            var r = o(n.DD_RUM_SYNTHETICS);
            return r || Wn || (Wn = !0, on("Logs sent before RUM is injected by the synthetics worker", {
                testId: (t = window._DATADOG_SYNTHETICS_PUBLIC_ID || Te(fn), "string" == typeof t ? t : void 0),
                resultId: pn()
            })), r
        }
        return o(n.DD_RUM);

        function o(t) {
            if (t && t.getInternalContext) return t.getInternalContext(e)
        }
    }
    var Xn, Kn = {};

    function Zn(n) {
        var r = n.map((function(n) {
            return Kn[n] || (Kn[n] = function(n) {
                var r = new z((function() {
                    var o = t[n];
                    return t[n] = function() {
                            for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                            o.apply(console, t);
                            var a = function() {
                                var e, t = new Error;
                                if (!t.stack) try {
                                    throw t
                                } catch (e) {}
                                return d((function() {
                                    var n = Ct(t);
                                    n.stack = n.stack.slice(2), e = Ut(n)
                                })), e
                            }();
                            d((function() {
                                r.notify(function(t, n, r) {
                                    var o, i, a = t.map((function(e) {
                                        return function(e) {
                                            if ("string" == typeof e) return D(e);
                                            if (e instanceof Error) return qt(Ct(e));
                                            return N(D(e), void 0, 2)
                                        }(e)
                                    })).join(" ");
                                    if (n === e.error) {
                                        var s = function(e, t) {
                                            for (var n = 0; n < e.length; n += 1) {
                                                var r = e[n];
                                                if (t(r, n)) return r
                                            }
                                        }(t, (function(e) {
                                            return e instanceof Error
                                        }));
                                        o = s ? Ut(Ct(s)) : void 0, i = Mt(s), a = "console error: ".concat(a)
                                    }
                                    return {
                                        api: n,
                                        message: a,
                                        stack: o,
                                        handlingStack: r,
                                        fingerprint: i
                                    }
                                }(t, n, a))
                            }))
                        },
                        function() {
                            t[n] = o
                        }
                }));
                return r
            }(n)), Kn[n]
        }));
        return J.apply(void 0, r)
    }
    var Yn, Qn = ((Xn = {})[e.log] = Vt.info, Xn[e.debug] = Vt.debug, Xn[e.info] = Vt.info, Xn[e.warn] = Vt.warn, Xn[e.error] = Vt.error, Xn);
    var er, tr = ((Yn = {})[jt.cspViolation] = Vt.error, Yn[jt.intervention] = Vt.error, Yn[jt.deprecation] = Vt.warn, Yn);

    function nr(e, t, n) {
        var r = e[t],
            o = n(r),
            i = function() {
                if ("function" == typeof o) return o.apply(this, arguments)
            };
        return e[t] = i, {
            stop: function() {
                e[t] === i ? e[t] = r : o = r
            }
        }
    }

    function rr(e, t, n) {
        var r = n.before,
            o = n.after;
        return nr(e, t, (function(e) {
            return function() {
                var t, n = arguments;
                return r && d(r, this, n), "function" == typeof e && (t = e.apply(this, n)), o && d(o, this, n), t
            }
        }))
    }
    var or, ir = new WeakMap;

    function ar(e) {
        return er || (er = function(e) {
            var t = new z((function() {
                var n = rr(XMLHttpRequest.prototype, "open", {
                        before: sr
                    }).stop,
                    r = rr(XMLHttpRequest.prototype, "send", {
                        before: function() {
                            ur.call(this, e, t)
                        }
                    }).stop,
                    o = rr(XMLHttpRequest.prototype, "abort", {
                        before: cr
                    }).stop;
                return function() {
                    n(), r(), o()
                }
            }));
            return t
        }(e)), er
    }

    function sr(e, t) {
        ir.set(this, {
            state: "open",
            method: e,
            url: st(String(t))
        })
    }

    function ur(e, t) {
        var n = this,
            r = ir.get(this);
        if (r) {
            var o = r;
            o.state = "start", o.startTime = re(), o.startClocks = oe(), o.isAborted = !1, o.xhr = this;
            var i = !1,
                a = rr(this, "onreadystatechange", {
                    before: function() {
                        this.readyState === XMLHttpRequest.DONE && s()
                    }
                }).stop,
                s = function() {
                    if (u(), a(), !i) {
                        i = !0;
                        var e, s = r;
                        s.state = "complete", s.duration = (e = o.startClocks.timeStamp, ne() - e), s.status = n.status, t.notify(m({}, s))
                    }
                },
                u = ce(e, this, "loadend", s).stop;
            t.notify(o)
        }
    }

    function cr() {
        var e = ir.get(this);
        e && (e.isAborted = !0)
    }

    function fr() {
        var e;
        return or || (e = new z((function() {
            if (window.fetch) return nr(window, "fetch", (function(t) {
                return function(n, r) {
                    var o, i = d(lr, null, [e, n, r]);
                    return i ? (o = t.call(this, i.input, i.init), d(dr, null, [e, o, i])) : o = t.call(this, n, r), o
                }
            })).stop
        })), or = e), or
    }

    function lr(e, t, n) {
        var r = n && n.method || t instanceof Request && t.method || "GET",
            o = t instanceof Request ? t.url : st(String(t)),
            i = {
                state: "start",
                init: n,
                input: t,
                method: r,
                startClocks: oe(),
                url: o
            };
        return e.notify(i), i
    }

    function dr(e, t, n) {
        var r = function(t) {
            var r = n;
            r.state = "resolve", "stack" in t || t instanceof Error ? (r.status = 0, r.isAborted = t instanceof DOMException && t.code === DOMException.ABORT_ERR, r.error = t) : "status" in t && (r.response = t, r.responseType = t.type, r.status = t.status, r.isAborted = !1), e.notify(r)
        };
        t.then(l(r), l(r))
    }

    function vr(e, t) {
        if (!e.forwardErrorsToLogs) return {
            stop: L
        };
        var n = ar(e).subscribe((function(e) {
                "complete" === e.state && o("xhr", e)
            })),
            r = fr().subscribe((function(e) {
                "resolve" === e.state && o("fetch", e)
            }));

        function o(n, r) {
            function o(e) {
                t.notify(0, {
                    rawLogsEvent: {
                        message: "".concat(gr(n), " error ").concat(r.method, " ").concat(r.url),
                        date: r.startClocks.timeStamp,
                        error: {
                            origin: zt.NETWORK,
                            stack: e || "Failed to load"
                        },
                        http: {
                            method: r.method,
                            status_code: r.status,
                            url: r.url
                        },
                        status: Vt.error,
                        origin: zt.NETWORK
                    }
                })
            }
            e.isIntakeUrl(r.url) || ! function(e) {
                return 0 === e.status && "opaque" !== e.responseType
            }(r) && !hn(r.status) || ("xhr" in r ? function(e, t, n) {
                "string" == typeof e.response ? n(pr(e.response, t)) : n(e.response)
            }(r.xhr, e, o) : r.response ? function(e, t, n) {
                var r = function(e) {
                    try {
                        return e.clone()
                    } catch (e) {
                        return
                    }
                }(e);
                r && r.body ? window.TextDecoder ? function(e, t, n) {
                    ! function(e, t, n) {
                        var r = e.getReader(),
                            o = [],
                            i = 0;

                        function a() {
                            var e, a;
                            if (r.cancel().catch(L), n.collectStreamBody) {
                                var s;
                                if (1 === o.length) s = o[0];
                                else {
                                    s = new Uint8Array(i);
                                    var u = 0;
                                    o.forEach((function(e) {
                                        s.set(e, u), u += e.length
                                    }))
                                }
                                e = s.slice(0, n.bytesLimit), a = s.length > n.bytesLimit
                            }
                            t(void 0, e, a)
                        }! function e() {
                            r.read().then(l((function(t) {
                                t.done ? a() : (n.collectStreamBody && o.push(t.value), (i += t.value.length) > n.bytesLimit ? a() : e())
                            })), l((function(e) {
                                return t(e)
                            })))
                        }()
                    }(e, (function(e, t, r) {
                        if (e) n(e);
                        else {
                            var o = (new TextDecoder).decode(t);
                            r && (o += "..."), n(void 0, o)
                        }
                    }), {
                        bytesLimit: t,
                        collectStreamBody: !0
                    })
                }(r.body, t.requestErrorResponseLengthLimit, (function(e, t) {
                    n(e ? "Unable to retrieve response: ".concat(e) : t)
                })) : r.text().then(l((function(e) {
                    return n(pr(e, t))
                })), l((function(e) {
                    return n("Unable to retrieve response: ".concat(e))
                }))) : n()
            }(r.response, e, o) : r.error && function(e, t, n) {
                n(pr(Ut(Ct(e)), t))
            }(r.error, e, o))
        }
        return {
            stop: function() {
                n.unsubscribe(), r.unsubscribe()
            }
        }
    }

    function pr(e, t) {
        return e.length > t.requestErrorResponseLengthLimit ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...") : e
    }

    function gr(e) {
        return "xhr" === e ? "XHR" : "Fetch"
    }
    var hr = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;

    function yr(e) {
        var t = function(e) {
                return rr(window, "onerror", {
                    before: function(t, n, r, o, i) {
                        var a;
                        if (i instanceof Error) a = Ct(i);
                        else {
                            var s = [{
                                    url: n,
                                    column: o,
                                    line: r
                                }],
                                u = function(e) {
                                    var t, n, r;
                                    "[object String]" === {}.toString.call(e) && (n = (t = hr.exec(e))[1], r = t[2]);
                                    return {
                                        name: n,
                                        message: r
                                    }
                                }(t);
                            a = {
                                name: u.name,
                                message: u.message,
                                stack: s
                            }
                        }
                        e(a, null != i ? i : t)
                    }
                })
            }(e).stop,
            n = function(e) {
                return rr(window, "onunhandledrejection", {
                    before: function(t) {
                        var n = t.reason || "Empty reason",
                            r = Ct(n);
                        e(r, n)
                    }
                })
            }(e).stop;
        return {
            stop: function() {
                t(), n()
            }
        }
    }

    function mr(e, t) {
        if (!e.forwardErrorsToLogs) return {
            stop: L
        };
        var n, r = new z,
            o = (n = r, yr((function(e, t) {
                n.notify(Nt({
                    stackTrace: e,
                    originalError: t,
                    startClocks: oe(),
                    nonErrorPrefix: "Uncaught",
                    source: zt.SOURCE,
                    handling: "unhandled"
                }))
            }))).stop,
            i = r.subscribe((function(e) {
                t.notify(0, {
                    rawLogsEvent: {
                        message: e.message,
                        date: e.startClocks.timeStamp,
                        error: {
                            kind: e.type,
                            origin: zt.SOURCE,
                            stack: e.stack
                        },
                        origin: zt.SOURCE,
                        status: Vt.error
                    }
                })
            }));
        return {
            stop: function() {
                o(), i.unsubscribe()
            }
        }
    }
    var br = function() {
        function e() {
            this.callbacks = {}
        }
        return e.prototype.notify = function(e, t) {
            var n = this.callbacks[e];
            n && n.forEach((function(e) {
                return e(t)
            }))
        }, e.prototype.subscribe = function(e, t) {
            var n = this;
            return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), {
                unsubscribe: function() {
                    n.callbacks[e] = n.callbacks[e].filter((function(e) {
                        return t !== e
                    }))
                }
            }
        }, e
    }();
    var wr, Sr, Er, xr, Cr = function(t) {
        var n, r, i = !1,
            a = X(2),
            s = X(1),
            u = {},
            f = function() {},
            d = new Z,
            v = function(e, t, n, r) {
                void 0 === n && (n = P(b())), void 0 === r && (r = ne()), d.add((function() {
                    return v(e, t, n, r)
                }))
            },
            g = function() {},
            y = new Xt((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return v.apply(void 0, e)
            }));

        function b() {
            return {
                view: {
                    referrer: document.referrer,
                    url: window.location.href
                },
                context: a.getContext(),
                user: s.getContext()
            }
        }
        return n = {
            logger: y,
            init: l((function(n) {
                var r;
                if (n) {
                    if (g = function() {
                            return P(n)
                        }, ue() && (n = function(e) {
                            return m({}, e, {
                                clientToken: "empty"
                            })
                        }(n)), function(e) {
                            return !i || (e.silentMultipleInit || o.error("DD_LOGS is already initialized."), !1)
                        }(n)) {
                        var u = function(t) {
                            var n = Et(t),
                                r = Ht(t.forwardConsoleLogs, h(e), "Forward Console Logs"),
                                o = Ht(t.forwardReports, h(jt), "Forward Reports");
                            if (n && r && o) return t.forwardErrorsToLogs && !p(r, e.error) && r.push(e.error), m({
                                forwardErrorsToLogs: !1 !== t.forwardErrorsToLogs,
                                forwardConsoleLogs: r,
                                forwardReports: o,
                                requestErrorResponseLengthLimit: Ft
                            }, n)
                        }(n);
                        if (u) {
                            if (n.storeContextsAcrossPages) {
                                var c = a.getContext();
                                (a = pe(u, Kt, 2)).setContext(B(a.getContext(), c));
                                var l = s.getContext();
                                (s = pe(u, Kt, 1)).setContext(B(s.getContext(), l))
                            }
                            r = t(n, u, b, y), v = r.handleLog, f = r.getInternalContext, d.drain(), i = !0
                        }
                    }
                } else o.error("Missing configuration")
            })),
            getLoggerGlobalContext: l((function() {
                return a.get()
            })),
            getGlobalContext: l((function() {
                return a.getContext()
            })),
            setLoggerGlobalContext: l((function(e) {
                return a.set(e)
            })),
            setGlobalContext: l((function(e) {
                return a.setContext(e)
            })),
            addLoggerGlobalContext: l((function(e, t) {
                return a.add(e, t)
            })),
            setGlobalContextProperty: l((function(e, t) {
                return a.setContextProperty(e, t)
            })),
            removeLoggerGlobalContext: l((function(e) {
                return a.remove(e)
            })),
            removeGlobalContextProperty: l((function(e) {
                return a.removeContextProperty(e)
            })),
            clearGlobalContext: l((function() {
                return a.clearContext()
            })),
            createLogger: l((function(e, t) {
                return void 0 === t && (t = {}), u[e] = new Xt((function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return v.apply(void 0, e)
                }), D(e), t.handler, t.level, D(t.context)), u[e]
            })),
            getLogger: l((function(e) {
                return u[e]
            })),
            getInitConfiguration: l((function() {
                return g()
            })),
            getInternalContext: l((function(e) {
                return f(e)
            })),
            setUser: l((function(e) {
                (function(e) {
                    var t = "object" === A(e);
                    return t || o.error("Unsupported user:", e), t
                })(e) && s.setContext(ge(e))
            })),
            getUser: l((function() {
                return s.getContext()
            })),
            setUserProperty: l((function(e, t) {
                var n, r = ge((n = {}, n[e] = t, n))[e];
                s.setContextProperty(e, r)
            })),
            removeUserProperty: l((function(e) {
                return s.removeContextProperty(e)
            })),
            clearUser: l((function() {
                return s.clearContext()
            }))
        }, r = m({
            version: "4.50.1",
            onReady: function(e) {
                e()
            }
        }, n), Object.defineProperty(r, "_setDebug", {
            get: function() {
                return c
            },
            enumerable: !1
        }), r
    }((function(t, n, r, o) {
        var i = new br,
            a = [];
        i.subscribe(1, (function(e) {
            return Zt("logs", e)
        }));
        var s = function(e) {
                i.notify(0, {
                    rawLogsEvent: {
                        message: e.message,
                        date: e.startClocks.timeStamp,
                        error: {
                            origin: zt.AGENT
                        },
                        origin: zt.AGENT,
                        status: Vt.error
                    }
                }), on("Error reported to customer", {
                    "error.message": e.message
                })
            },
            u = function(e) {
                var t = new z((function() {
                    var n = ye(le.PAGEHIDE),
                        r = fe(0, window, ["visibilitychange", "freeze", "pagehide"], (function(e) {
                            "pagehide" === e.type && n ? t.notify({
                                reason: cn.PAGEHIDE
                            }) : "visibilitychange" === e.type && "hidden" === document.visibilityState ? t.notify({
                                reason: cn.HIDDEN
                            }) : "freeze" === e.type && t.notify({
                                reason: cn.FROZEN
                            })
                        }), {
                            capture: !0
                        }).stop,
                        o = L;
                    return n || (o = ce(e, window, "beforeunload", (function() {
                            t.notify({
                                reason: cn.UNLOADING
                            })
                        })).stop),
                        function() {
                            r(), o()
                        }
                }));
                return t
            }(n),
            c = !n.sessionStoreStrategyType || ue() || vn() ? function(e) {
                var t = "1" === Fn(e) ? {} : void 0;
                return {
                    findTrackedSession: function() {
                        return t
                    },
                    expireObservable: new z
                }
            }(n) : Gn(n),
            f = function(e, t, n, r) {
                var o = rn("browser-logs-sdk", e),
                    i = [];
                if (ue()) {
                    var a = se(),
                        s = o.observable.subscribe((function(e) {
                            return a.send("internal_telemetry", e)
                        }));
                    i.push((function() {
                        return s.unsubscribe()
                    }))
                } else {
                    var u = An(e, {
                        endpoint: e.rumEndpointBuilder
                    }, e.replica && {
                        endpoint: e.replica.rumEndpointBuilder
                    }, t, n, r);
                    i.push((function() {
                        return u.stop()
                    }));
                    var c = o.observable.subscribe((function(t) {
                        return u.add(t, function(e) {
                            return e.site === dt
                        }(e))
                    }));
                    i.push((function() {
                        return c.unsubscribe()
                    }))
                }
                return {
                    telemetry: o,
                    stop: function() {
                        i.forEach((function(e) {
                            return e()
                        }))
                    }
                }
            }(n, s, u, c.expireObservable),
            l = f.telemetry,
            d = f.stop;
        a.push((function() {
                return d()
            })), l.setContextProvider((function() {
                var e, t, n, r, o, i;
                return {
                    application: {
                        id: null === (e = $n()) || void 0 === e ? void 0 : e.application_id
                    },
                    session: {
                        id: null === (t = c.findTrackedSession()) || void 0 === t ? void 0 : t.id
                    },
                    view: {
                        id: null === (r = null === (n = $n()) || void 0 === n ? void 0 : n.view) || void 0 === r ? void 0 : r.id
                    },
                    action: {
                        id: null === (i = null === (o = $n()) || void 0 === o ? void 0 : o.user_action) || void 0 === i ? void 0 : i.id
                    }
                }
            })), vr(n, i), mr(n, i),
            function(t, n) {
                var r = Zn(t.forwardConsoleLogs).subscribe((function(t) {
                    n.notify(0, {
                        rawLogsEvent: {
                            date: ne(),
                            message: t.message,
                            origin: zt.CONSOLE,
                            error: t.api === e.error ? {
                                origin: zt.CONSOLE,
                                stack: t.stack,
                                fingerprint: t.fingerprint
                            } : void 0,
                            status: Qn[t.api]
                        }
                    })
                }))
            }(n, i),
            function(e, t) {
                var n = Dt(e, e.forwardReports).subscribe((function(e) {
                    var n, r = e.message,
                        o = tr[e.type];
                    o === Vt.error ? n = {
                        kind: e.subtype,
                        origin: zt.REPORT,
                        stack: e.stack
                    } : e.stack && (r += " Found in ".concat(function(e) {
                        var t;
                        return null === (t = /@ (.+)/.exec(e)) || void 0 === t ? void 0 : t[1]
                    }(e.stack))), t.notify(0, {
                        rawLogsEvent: {
                            date: ne(),
                            message: r,
                            origin: zt.REPORT,
                            error: n,
                            status: o
                        }
                    })
                }))
            }(n, i);
        var v, p = zn(i).handleLog;
        if (Vn(c, n, i, r, o, s), ue()) ! function(e) {
            var t = se();
            e.subscribe(1, (function(e) {
                t.send("log", e)
            }))
        }(i);
        else {
            var g = function(e, t, n, r, o) {
                var i = An(e, {
                    endpoint: e.logsEndpointBuilder
                }, e.replica && {
                    endpoint: e.replica.logsEndpointBuilder
                }, n, r, o);
                return t.subscribe(1, (function(e) {
                    i.add(e)
                })), i
            }(n, i, s, u, c.expireObservable).stop;
            a.push((function() {
                return g()
            }))
        }
        return function(e) {
            nn.telemetryConfigurationEnabled && sn({
                type: Qt.configuration,
                configuration: e
            })
        }(function(e) {
            var t = function(e) {
                var t, n, r = null !== (t = e.proxy) && void 0 !== t ? t : e.proxyUrl;
                return {
                    session_sample_rate: null !== (n = e.sessionSampleRate) && void 0 !== n ? n : e.sampleRate,
                    telemetry_sample_rate: e.telemetrySampleRate,
                    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                    use_before_send: !!e.beforeSend,
                    use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                    use_secure_session_cookie: e.useSecureSessionCookie,
                    use_proxy: void 0 !== r ? !!r : void 0,
                    silent_multiple_init: e.silentMultipleInit,
                    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                    track_resources: e.trackResources,
                    track_long_task: e.trackLongTasks,
                    allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
                    store_contexts_across_pages: !!e.storeContextsAcrossPages
                }
            }(e);
            return m({
                forward_errors_to_logs: e.forwardErrorsToLogs,
                forward_console_logs: e.forwardConsoleLogs,
                forward_reports: e.forwardReports
            }, t)
        }(t)), {
            handleLog: p,
            getInternalContext: (v = c, {
                get: function(e) {
                    var t = v.findTrackedSession(e);
                    if (t) return {
                        session_id: t.id
                    }
                }
            }).get,
            stop: function() {
                a.forEach((function(e) {
                    return e()
                }))
            }
        }
    }));
    wr = b(), Er = Cr, xr = wr[Sr = "DD_LOGS"], wr[Sr] = Er, xr && xr.q && xr.q.forEach((function(e) {
        return i(e, "onReady callback threw an error:")()
    }))
}();