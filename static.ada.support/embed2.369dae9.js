/*! For license information please see embed2.369dae9.js.LICENSE.txt */ ! function() {
    var t = {
            2740: function(t, e) {
                "use strict";
                var n = this && this.__assign || function() {
                    return n = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, n.apply(this, arguments)
                };
                e.__esModule = !0, e.createStorage = void 0;
                var r = "Cannot access Web Storage API";
                e.createStorage = function(t) {
                    var e;
                    try {
                        e = "local" === t ? localStorage : sessionStorage
                    } catch (t) {
                        console.warn(r)
                    }
                    var o = {
                        setItem: function(t, n) {
                            try {
                                e.setItem(t, JSON.stringify(n))
                            } catch (t) {
                                console.warn(r)
                            }
                        },
                        getItem: function(t) {
                            try {
                                var n = e.getItem(t);
                                return n && JSON.parse(n)
                            } catch (t) {
                                return console.warn(r), null
                            }
                        },
                        removeItem: function(t) {
                            try {
                                e.removeItem(t)
                            } catch (t) {
                                console.warn(r)
                            }
                        },
                        clear: function() {
                            try {
                                e.clear()
                            } catch (t) {
                                console.warn(r)
                            }
                        },
                        setFnItem: function(t, e) {
                            var r, i = o.getItem("ada-functional-storage") || {},
                                s = n(n({}, i), ((r = {})[t] = e, r));
                            o.setItem("ada-functional-storage", s)
                        },
                        getFnItem: function(t) {
                            var e = o.getItem("ada-functional-storage");
                            return e && e[t] || null
                        }
                    };
                    return o
                }
            },
            1110: function(t, e, n) {
                "use strict";
                e.Dp = e.wG = void 0;
                var r = n(2740);
                e.wG = (0, r.createStorage)("local"), e.Dp = (0, r.createStorage)("session")
            },
            5683: function(t, e, n) {
                t.exports = n(9447)
            },
            2088: function(t, e, n) {
                t.exports = n(269)
            },
            4341: function(t, e, n) {
                t.exports = n(3685)
            },
            3263: function(t, e, n) {
                t.exports = n(4710)
            },
            9356: function(t, e, n) {
                t.exports = n(3799)
            },
            8518: function(t, e, n) {
                "use strict";

                function r() {
                    return "undefined" != typeof __SENTRY_NO_DEBUG__ && !__SENTRY_BROWSER_BUNDLE__
                }

                function o() {
                    return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
                }
                n.d(e, {
                    c: function() {
                        return r
                    },
                    n: function() {
                        return o
                    }
                })
            },
            2991: function(t, e, n) {
                "use strict";
                n.d(e, {
                    R: function() {
                        return i
                    }
                });
                var r = n(1422),
                    o = {};

                function i() {
                    return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o
                }
            },
            1422: function(t, e, n) {
                "use strict";
                n.d(e, {
                    KV: function() {
                        return o
                    },
                    l$: function() {
                        return i
                    }
                });
                var r = n(8518);

                function o() {
                    return !(0, r.n)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
                }

                function i(t, e) {
                    return t.require(e)
                }
                t = n.hmd(t)
            },
            1170: function(t, e, n) {
                "use strict";
                n.d(e, {
                    ph: function() {
                        return u
                    },
                    yW: function() {
                        return c
                    }
                });
                var r = n(2991),
                    o = n(1422);
                t = n.hmd(t);
                var i = {
                        nowSeconds: function() {
                            return Date.now() / 1e3
                        }
                    },
                    s = (0, o.KV)() ? function() {
                        try {
                            return (0, o.l$)(t, "perf_hooks").performance
                        } catch (t) {
                            return
                        }
                    }() : function() {
                        var t = (0, r.R)().performance;
                        if (t && t.now) return {
                            now: function() {
                                return t.now()
                            },
                            timeOrigin: Date.now() - t.now()
                        }
                    }(),
                    a = void 0 === s ? i : {
                        nowSeconds: function() {
                            return (s.timeOrigin + s.now()) / 1e3
                        }
                    },
                    c = i.nowSeconds.bind(i),
                    u = a.nowSeconds.bind(a);
                ! function() {
                    var t = (0, r.R)().performance;
                    if (t && t.now) {
                        var e = 36e5,
                            n = t.now(),
                            o = Date.now(),
                            i = t.timeOrigin ? Math.abs(t.timeOrigin + n - o) : e,
                            s = i < e,
                            a = t.timing && t.timing.navigationStart,
                            c = "number" == typeof a ? Math.abs(a + n - o) : e;
                        (s || c < e) && (i <= c && t.timeOrigin)
                    }
                }()
            },
            5684: function(t, e, n) {
                var r = n(9373);
                t.exports = r
            },
            5362: function(t, e, n) {
                var r = n(3383);
                t.exports = r
            },
            3536: function(t, e, n) {
                var r = n(1910);
                t.exports = r
            },
            3151: function(t, e, n) {
                var r = n(9534);
                t.exports = r
            },
            5012: function(t, e, n) {
                var r = n(3059);
                t.exports = r
            },
            8700: function(t, e, n) {
                n(9076);
                var r = n(5703);
                t.exports = r("Array").indexOf
            },
            4570: function(t, e, n) {
                var r = n(7046),
                    o = n(8700),
                    i = Array.prototype;
                t.exports = function(t) {
                    var e = t.indexOf;
                    return t === i || r(i, t) && e === i.indexOf ? o : e
                }
            },
            5999: function(t, e, n) {
                n(9221);
                var r = n(4058);
                t.exports = r.Object.assign
            },
            8171: function(t, e, n) {
                n(6450);
                var r = n(4058).Object,
                    o = t.exports = function(t, e, n) {
                        return r.defineProperty(t, e, n)
                    };
                r.defineProperty.sham && (o.sham = !0)
            },
            498: function(t, e, n) {
                n(5824);
                var r = n(4058);
                t.exports = r.Object.getOwnPropertySymbols
            },
            8494: function(t, e, n) {
                n(1724);
                var r = n(4058);
                t.exports = r.Object.keys
            },
            9447: function(t, e, n) {
                var r = n(5684);
                t.exports = r
            },
            269: function(t, e, n) {
                var r = n(5362);
                t.exports = r
            },
            3685: function(t, e, n) {
                var r = n(3536);
                t.exports = r
            },
            4710: function(t, e, n) {
                var r = n(3151);
                t.exports = r
            },
            3799: function(t, e, n) {
                var r = n(5012);
                t.exports = r
            },
            4883: function(t, e, n) {
                var r = n(1899),
                    o = n(7475),
                    i = n(9826),
                    s = r.TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw s(i(t) + " is not a function")
                }
            },
            6059: function(t, e, n) {
                var r = n(1899),
                    o = n(941),
                    i = r.String,
                    s = r.TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw s(i(t) + " is not an object")
                }
            },
            1692: function(t, e, n) {
                var r = n(4529),
                    o = n(9413),
                    i = n(623),
                    s = function(t) {
                        return function(e, n, s) {
                            var a, c = r(e),
                                u = i(c),
                                l = o(s, u);
                            if (t && n != n) {
                                for (; u > l;)
                                    if ((a = c[l++]) != a) return !0
                            } else
                                for (; u > l; l++)
                                    if ((t || l in c) && c[l] === n) return t || l || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            3610: function(t, e, n) {
                var r = n(6843),
                    o = n(5329),
                    i = n(7026),
                    s = n(9678),
                    a = n(623),
                    c = n(4692),
                    u = o([].push),
                    l = function(t) {
                        var e = 1 == t,
                            n = 2 == t,
                            o = 3 == t,
                            l = 4 == t,
                            p = 6 == t,
                            f = 7 == t,
                            d = 5 == t || p;
                        return function(h, v, g, y) {
                            for (var m, _, b = s(h), w = i(b), S = r(v, g), E = a(w), O = 0, x = y || c, T = e ? x(h, E) : n || f ? x(h, 0) : void 0; E > O; O++)
                                if ((d || O in w) && (_ = S(m = w[O], O, b), t))
                                    if (e) T[O] = _;
                                    else if (_) switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return m;
                                case 6:
                                    return O;
                                case 2:
                                    u(T, m)
                            } else switch (t) {
                                case 4:
                                    return !1;
                                case 7:
                                    u(T, m)
                            }
                            return p ? -1 : o || l ? l : T
                        }
                    };
                t.exports = {
                    forEach: l(0),
                    map: l(1),
                    filter: l(2),
                    some: l(3),
                    every: l(4),
                    find: l(5),
                    findIndex: l(6),
                    filterReject: l(7)
                }
            },
            4194: function(t, e, n) {
                "use strict";
                var r = n(5981);
                t.exports = function(t, e) {
                    var n = [][t];
                    return !!n && r((function() {
                        n.call(null, e || function() {
                            throw 1
                        }, 1)
                    }))
                }
            },
            5790: function(t, e, n) {
                var r = n(1899),
                    o = n(9413),
                    i = n(623),
                    s = n(5449),
                    a = r.Array,
                    c = Math.max;
                t.exports = function(t, e, n) {
                    for (var r = i(t), u = o(e, r), l = o(void 0 === n ? r : n, r), p = a(c(l - u, 0)), f = 0; u < l; u++, f++) s(p, f, t[u]);
                    return p.length = f, p
                }
            },
            3765: function(t, e, n) {
                var r = n(5329);
                t.exports = r([].slice)
            },
            5693: function(t, e, n) {
                var r = n(1899),
                    o = n(1052),
                    i = n(4284),
                    s = n(941),
                    a = n(9813)("species"),
                    c = r.Array;
                t.exports = function(t) {
                    var e;
                    return o(t) && (e = t.constructor, (i(e) && (e === c || o(e.prototype)) || s(e) && null === (e = e[a])) && (e = void 0)), void 0 === e ? c : e
                }
            },
            4692: function(t, e, n) {
                var r = n(5693);
                t.exports = function(t, e) {
                    return new(r(t))(0 === e ? 0 : e)
                }
            },
            2532: function(t, e, n) {
                var r = n(5329),
                    o = r({}.toString),
                    i = r("".slice);
                t.exports = function(t) {
                    return i(o(t), 8, -1)
                }
            },
            9697: function(t, e, n) {
                var r = n(1899),
                    o = n(2885),
                    i = n(7475),
                    s = n(2532),
                    a = n(9813)("toStringTag"),
                    c = r.Object,
                    u = "Arguments" == s(function() {
                        return arguments
                    }());
                t.exports = o ? s : function(t) {
                    var e, n, r;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = c(t), a)) ? n : u ? s(e) : "Object" == (r = s(e)) && i(e.callee) ? "Arguments" : r
                }
            },
            2029: function(t, e, n) {
                var r = n(5746),
                    o = n(5988),
                    i = n(1887);
                t.exports = r ? function(t, e, n) {
                    return o.f(t, e, i(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                }
            },
            1887: function(t) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            5449: function(t, e, n) {
                "use strict";
                var r = n(3894),
                    o = n(5988),
                    i = n(1887);
                t.exports = function(t, e, n) {
                    var s = r(e);
                    s in t ? o.f(t, s, i(0, n)) : t[s] = n
                }
            },
            6349: function(t, e, n) {
                var r = n(4058),
                    o = n(953),
                    i = n(1477),
                    s = n(5988).f;
                t.exports = function(t) {
                    var e = r.Symbol || (r.Symbol = {});
                    o(e, t) || s(e, t, {
                        value: i.f(t)
                    })
                }
            },
            5746: function(t, e, n) {
                var r = n(5981);
                t.exports = !r((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            1333: function(t, e, n) {
                var r = n(1899),
                    o = n(941),
                    i = r.document,
                    s = o(i) && o(i.createElement);
                t.exports = function(t) {
                    return s ? i.createElement(t) : {}
                }
            },
            2861: function(t, e, n) {
                var r = n(626);
                t.exports = r("navigator", "userAgent") || ""
            },
            3385: function(t, e, n) {
                var r, o, i = n(1899),
                    s = n(2861),
                    a = i.process,
                    c = i.Deno,
                    u = a && a.versions || c && c.version,
                    l = u && u.v8;
                l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o
            },
            5703: function(t, e, n) {
                var r = n(4058);
                t.exports = function(t) {
                    return r[t + "Prototype"]
                }
            },
            6759: function(t) {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            6887: function(t, e, n) {
                "use strict";
                var r = n(1899),
                    o = n(9730),
                    i = n(5329),
                    s = n(7475),
                    a = n(9677).f,
                    c = n(7252),
                    u = n(4058),
                    l = n(6843),
                    p = n(2029),
                    f = n(953),
                    d = function(t) {
                        var e = function(n, r, i) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(n);
                                    case 2:
                                        return new t(n, r)
                                }
                                return new t(n, r, i)
                            }
                            return o(t, this, arguments)
                        };
                        return e.prototype = t.prototype, e
                    };
                t.exports = function(t, e) {
                    var n, o, h, v, g, y, m, _, b = t.target,
                        w = t.global,
                        S = t.stat,
                        E = t.proto,
                        O = w ? r : S ? r[b] : (r[b] || {}).prototype,
                        x = w ? u : u[b] || p(u, b, {})[b],
                        T = x.prototype;
                    for (h in e) n = !c(w ? h : b + (S ? "." : "#") + h, t.forced) && O && f(O, h), g = x[h], n && (y = t.noTargetGet ? (_ = a(O, h)) && _.value : O[h]), v = n && y ? y : e[h], n && typeof g == typeof v || (m = t.bind && n ? l(v, r) : t.wrap && n ? d(v) : E && s(v) ? i(v) : v, (t.sham || v && v.sham || g && g.sham) && p(m, "sham", !0), p(x, h, m), E && (f(u, o = b + "Prototype") || p(u, o, {}), p(u[o], h, v), t.real && T && !T[h] && p(T, h, v)))
                }
            },
            5981: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            9730: function(t, e, n) {
                var r = n(8285),
                    o = Function.prototype,
                    i = o.apply,
                    s = o.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(i) : function() {
                    return s.apply(i, arguments)
                })
            },
            6843: function(t, e, n) {
                var r = n(5329),
                    o = n(4883),
                    i = n(8285),
                    s = r(r.bind);
                t.exports = function(t, e) {
                    return o(t), void 0 === e ? t : i ? s(t, e) : function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            8285: function(t, e, n) {
                var r = n(5981);
                t.exports = !r((function() {
                    var t = function() {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                }))
            },
            8834: function(t, e, n) {
                var r = n(8285),
                    o = Function.prototype.call;
                t.exports = r ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            5329: function(t, e, n) {
                var r = n(8285),
                    o = Function.prototype,
                    i = o.bind,
                    s = o.call,
                    a = r && i.bind(s, s);
                t.exports = r ? function(t) {
                    return t && a(t)
                } : function(t) {
                    return t && function() {
                        return s.apply(t, arguments)
                    }
                }
            },
            626: function(t, e, n) {
                var r = n(4058),
                    o = n(1899),
                    i = n(7475),
                    s = function(t) {
                        return i(t) ? t : void 0
                    };
                t.exports = function(t, e) {
                    return arguments.length < 2 ? s(r[t]) || s(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
                }
            },
            4229: function(t, e, n) {
                var r = n(4883);
                t.exports = function(t, e) {
                    var n = t[e];
                    return null == n ? void 0 : r(n)
                }
            },
            1899: function(t, e, n) {
                var r = function(t) {
                    return t && t.Math == Math && t
                };
                t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                    return this
                }() || Function("return this")()
            },
            953: function(t, e, n) {
                var r = n(5329),
                    o = n(9678),
                    i = r({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, e) {
                    return i(o(t), e)
                }
            },
            7748: function(t) {
                t.exports = {}
            },
            5463: function(t, e, n) {
                var r = n(626);
                t.exports = r("document", "documentElement")
            },
            2840: function(t, e, n) {
                var r = n(5746),
                    o = n(5981),
                    i = n(1333);
                t.exports = !r && !o((function() {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            7026: function(t, e, n) {
                var r = n(1899),
                    o = n(5329),
                    i = n(5981),
                    s = n(2532),
                    a = r.Object,
                    c = o("".split);
                t.exports = i((function() {
                    return !a("z").propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" == s(t) ? c(t, "") : a(t)
                } : a
            },
            1302: function(t, e, n) {
                var r = n(5329),
                    o = n(7475),
                    i = n(3030),
                    s = r(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(t) {
                    return s(t)
                }), t.exports = i.inspectSource
            },
            5402: function(t, e, n) {
                var r, o, i, s = n(8019),
                    a = n(1899),
                    c = n(5329),
                    u = n(941),
                    l = n(2029),
                    p = n(953),
                    f = n(3030),
                    d = n(4262),
                    h = n(7748),
                    v = "Object already initialized",
                    g = a.TypeError,
                    y = a.WeakMap;
                if (s || f.state) {
                    var m = f.state || (f.state = new y),
                        _ = c(m.get),
                        b = c(m.has),
                        w = c(m.set);
                    r = function(t, e) {
                        if (b(m, t)) throw new g(v);
                        return e.facade = t, w(m, t, e), e
                    }, o = function(t) {
                        return _(m, t) || {}
                    }, i = function(t) {
                        return b(m, t)
                    }
                } else {
                    var S = d("state");
                    h[S] = !0, r = function(t, e) {
                        if (p(t, S)) throw new g(v);
                        return e.facade = t, l(t, S, e), e
                    }, o = function(t) {
                        return p(t, S) ? t[S] : {}
                    }, i = function(t) {
                        return p(t, S)
                    }
                }
                t.exports = {
                    set: r,
                    get: o,
                    has: i,
                    enforce: function(t) {
                        return i(t) ? o(t) : r(t, {})
                    },
                    getterFor: function(t) {
                        return function(e) {
                            var n;
                            if (!u(e) || (n = o(e)).type !== t) throw g("Incompatible receiver, " + t + " required");
                            return n
                        }
                    }
                }
            },
            1052: function(t, e, n) {
                var r = n(2532);
                t.exports = Array.isArray || function(t) {
                    return "Array" == r(t)
                }
            },
            7475: function(t) {
                t.exports = function(t) {
                    return "function" == typeof t
                }
            },
            4284: function(t, e, n) {
                var r = n(5329),
                    o = n(5981),
                    i = n(7475),
                    s = n(9697),
                    a = n(626),
                    c = n(1302),
                    u = function() {},
                    l = [],
                    p = a("Reflect", "construct"),
                    f = /^\s*(?:class|function)\b/,
                    d = r(f.exec),
                    h = !f.exec(u),
                    v = function(t) {
                        if (!i(t)) return !1;
                        try {
                            return p(u, l, t), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    g = function(t) {
                        if (!i(t)) return !1;
                        switch (s(t)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                                return !1
                        }
                        try {
                            return h || !!d(f, c(t))
                        } catch (t) {
                            return !0
                        }
                    };
                g.sham = !0, t.exports = !p || o((function() {
                    var t;
                    return v(v.call) || !v(Object) || !v((function() {
                        t = !0
                    })) || t
                })) ? g : v
            },
            7252: function(t, e, n) {
                var r = n(5981),
                    o = n(7475),
                    i = /#|\.prototype\./,
                    s = function(t, e) {
                        var n = c[a(t)];
                        return n == l || n != u && (o(e) ? r(e) : !!e)
                    },
                    a = s.normalize = function(t) {
                        return String(t).replace(i, ".").toLowerCase()
                    },
                    c = s.data = {},
                    u = s.NATIVE = "N",
                    l = s.POLYFILL = "P";
                t.exports = s
            },
            941: function(t, e, n) {
                var r = n(7475);
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : r(t)
                }
            },
            2529: function(t) {
                t.exports = !0
            },
            6664: function(t, e, n) {
                var r = n(1899),
                    o = n(626),
                    i = n(7475),
                    s = n(7046),
                    a = n(2302),
                    c = r.Object;
                t.exports = a ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = o("Symbol");
                    return i(e) && s(e.prototype, c(t))
                }
            },
            623: function(t, e, n) {
                var r = n(3057);
                t.exports = function(t) {
                    return r(t.length)
                }
            },
            2497: function(t, e, n) {
                var r = n(3385),
                    o = n(5981);
                t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var t = Symbol();
                    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
                }))
            },
            8019: function(t, e, n) {
                var r = n(1899),
                    o = n(7475),
                    i = n(1302),
                    s = r.WeakMap;
                t.exports = o(s) && /native code/.test(i(s))
            },
            4420: function(t, e, n) {
                "use strict";
                var r = n(5746),
                    o = n(5329),
                    i = n(8834),
                    s = n(5981),
                    a = n(4771),
                    c = n(7857),
                    u = n(6760),
                    l = n(9678),
                    p = n(7026),
                    f = Object.assign,
                    d = Object.defineProperty,
                    h = o([].concat);
                t.exports = !f || s((function() {
                    if (r && 1 !== f({
                            b: 1
                        }, f(d({}, "a", {
                            enumerable: !0,
                            get: function() {
                                d(this, "b", {
                                    value: 3,
                                    enumerable: !1
                                })
                            }
                        }), {
                            b: 2
                        })).b) return !0;
                    var t = {},
                        e = {},
                        n = Symbol(),
                        o = "abcdefghijklmnopqrst";
                    return t[n] = 7, o.split("").forEach((function(t) {
                        e[t] = t
                    })), 7 != f({}, t)[n] || a(f({}, e)).join("") != o
                })) ? function(t, e) {
                    for (var n = l(t), o = arguments.length, s = 1, f = c.f, d = u.f; o > s;)
                        for (var v, g = p(arguments[s++]), y = f ? h(a(g), f(g)) : a(g), m = y.length, _ = 0; m > _;) v = y[_++], r && !i(d, g, v) || (n[v] = g[v]);
                    return n
                } : f
            },
            9290: function(t, e, n) {
                var r, o = n(6059),
                    i = n(9938),
                    s = n(6759),
                    a = n(7748),
                    c = n(5463),
                    u = n(1333),
                    l = n(4262)("IE_PROTO"),
                    p = function() {},
                    f = function(t) {
                        return "<script>" + t + "<\/script>"
                    },
                    d = function(t) {
                        t.write(f("")), t.close();
                        var e = t.parentWindow.Object;
                        return t = null, e
                    },
                    h = function() {
                        try {
                            r = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, e;
                        h = "undefined" != typeof document ? document.domain && r ? d(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F) : d(r);
                        for (var n = s.length; n--;) delete h.prototype[s[n]];
                        return h()
                    };
                a[l] = !0, t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (p.prototype = o(t), n = new p, p.prototype = null, n[l] = t) : n = h(), void 0 === e ? n : i.f(n, e)
                }
            },
            9938: function(t, e, n) {
                var r = n(5746),
                    o = n(3937),
                    i = n(5988),
                    s = n(6059),
                    a = n(4529),
                    c = n(4771);
                e.f = r && !o ? Object.defineProperties : function(t, e) {
                    s(t);
                    for (var n, r = a(e), o = c(e), u = o.length, l = 0; u > l;) i.f(t, n = o[l++], r[n]);
                    return t
                }
            },
            5988: function(t, e, n) {
                var r = n(1899),
                    o = n(5746),
                    i = n(2840),
                    s = n(3937),
                    a = n(6059),
                    c = n(3894),
                    u = r.TypeError,
                    l = Object.defineProperty,
                    p = Object.getOwnPropertyDescriptor;
                e.f = o ? s ? function(t, e, n) {
                    if (a(t), e = c(e), a(n), "function" == typeof t && "prototype" === e && "value" in n && "writable" in n && !n.writable) {
                        var r = p(t, e);
                        r && r.writable && (t[e] = n.value, n = {
                            configurable: "configurable" in n ? n.configurable : r.configurable,
                            enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                            writable: !1
                        })
                    }
                    return l(t, e, n)
                } : l : function(t, e, n) {
                    if (a(t), e = c(e), a(n), i) try {
                        return l(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw u("Accessors not supported");
                    return "value" in n && (t[e] = n.value), t
                }
            },
            9677: function(t, e, n) {
                var r = n(5746),
                    o = n(8834),
                    i = n(6760),
                    s = n(1887),
                    a = n(4529),
                    c = n(3894),
                    u = n(953),
                    l = n(2840),
                    p = Object.getOwnPropertyDescriptor;
                e.f = r ? p : function(t, e) {
                    if (t = a(t), e = c(e), l) try {
                        return p(t, e)
                    } catch (t) {}
                    if (u(t, e)) return s(!o(i.f, t, e), t[e])
                }
            },
            684: function(t, e, n) {
                var r = n(2532),
                    o = n(4529),
                    i = n(946).f,
                    s = n(5790),
                    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                t.exports.f = function(t) {
                    return a && "Window" == r(t) ? function(t) {
                        try {
                            return i(t)
                        } catch (t) {
                            return s(a)
                        }
                    }(t) : i(o(t))
                }
            },
            946: function(t, e, n) {
                var r = n(5629),
                    o = n(6759).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return r(t, o)
                }
            },
            7857: function(t, e) {
                e.f = Object.getOwnPropertySymbols
            },
            7046: function(t, e, n) {
                var r = n(5329);
                t.exports = r({}.isPrototypeOf)
            },
            5629: function(t, e, n) {
                var r = n(5329),
                    o = n(953),
                    i = n(4529),
                    s = n(1692).indexOf,
                    a = n(7748),
                    c = r([].push);
                t.exports = function(t, e) {
                    var n, r = i(t),
                        u = 0,
                        l = [];
                    for (n in r) !o(a, n) && o(r, n) && c(l, n);
                    for (; e.length > u;) o(r, n = e[u++]) && (~s(l, n) || c(l, n));
                    return l
                }
            },
            4771: function(t, e, n) {
                var r = n(5629),
                    o = n(6759);
                t.exports = Object.keys || function(t) {
                    return r(t, o)
                }
            },
            6760: function(t, e) {
                "use strict";
                var n = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    o = r && !n.call({
                        1: 2
                    }, 1);
                e.f = o ? function(t) {
                    var e = r(this, t);
                    return !!e && e.enumerable
                } : n
            },
            5623: function(t, e, n) {
                "use strict";
                var r = n(2885),
                    o = n(9697);
                t.exports = r ? {}.toString : function() {
                    return "[object " + o(this) + "]"
                }
            },
            9811: function(t, e, n) {
                var r = n(1899),
                    o = n(8834),
                    i = n(7475),
                    s = n(941),
                    a = r.TypeError;
                t.exports = function(t, e) {
                    var n, r;
                    if ("string" === e && i(n = t.toString) && !s(r = o(n, t))) return r;
                    if (i(n = t.valueOf) && !s(r = o(n, t))) return r;
                    if ("string" !== e && i(n = t.toString) && !s(r = o(n, t))) return r;
                    throw a("Can't convert object to primitive value")
                }
            },
            4058: function(t) {
                t.exports = {}
            },
            9754: function(t, e, n) {
                var r = n(2029);
                t.exports = function(t, e, n, o) {
                    o && o.enumerable ? t[e] = n : r(t, e, n)
                }
            },
            8219: function(t, e, n) {
                var r = n(1899).TypeError;
                t.exports = function(t) {
                    if (null == t) throw r("Can't call method on " + t);
                    return t
                }
            },
            4911: function(t, e, n) {
                var r = n(1899),
                    o = Object.defineProperty;
                t.exports = function(t, e) {
                    try {
                        o(r, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (n) {
                        r[t] = e
                    }
                    return e
                }
            },
            904: function(t, e, n) {
                var r = n(2885),
                    o = n(5988).f,
                    i = n(2029),
                    s = n(953),
                    a = n(5623),
                    c = n(9813)("toStringTag");
                t.exports = function(t, e, n, u) {
                    if (t) {
                        var l = n ? t : t.prototype;
                        s(l, c) || o(l, c, {
                            configurable: !0,
                            value: e
                        }), u && !r && i(l, "toString", a)
                    }
                }
            },
            4262: function(t, e, n) {
                var r = n(8726),
                    o = n(9418),
                    i = r("keys");
                t.exports = function(t) {
                    return i[t] || (i[t] = o(t))
                }
            },
            3030: function(t, e, n) {
                var r = n(1899),
                    o = n(4911),
                    i = "__core-js_shared__",
                    s = r[i] || o(i, {});
                t.exports = s
            },
            8726: function(t, e, n) {
                var r = n(2529),
                    o = n(3030);
                (t.exports = function(t, e) {
                    return o[t] || (o[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: "3.21.0",
                    mode: r ? "pure" : "global",
                    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            9413: function(t, e, n) {
                var r = n(2435),
                    o = Math.max,
                    i = Math.min;
                t.exports = function(t, e) {
                    var n = r(t);
                    return n < 0 ? o(n + e, 0) : i(n, e)
                }
            },
            4529: function(t, e, n) {
                var r = n(7026),
                    o = n(8219);
                t.exports = function(t) {
                    return r(o(t))
                }
            },
            2435: function(t) {
                var e = Math.ceil,
                    n = Math.floor;
                t.exports = function(t) {
                    var r = +t;
                    return r != r || 0 === r ? 0 : (r > 0 ? n : e)(r)
                }
            },
            3057: function(t, e, n) {
                var r = n(2435),
                    o = Math.min;
                t.exports = function(t) {
                    return t > 0 ? o(r(t), 9007199254740991) : 0
                }
            },
            9678: function(t, e, n) {
                var r = n(1899),
                    o = n(8219),
                    i = r.Object;
                t.exports = function(t) {
                    return i(o(t))
                }
            },
            6935: function(t, e, n) {
                var r = n(1899),
                    o = n(8834),
                    i = n(941),
                    s = n(6664),
                    a = n(4229),
                    c = n(9811),
                    u = n(9813),
                    l = r.TypeError,
                    p = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!i(t) || s(t)) return t;
                    var n, r = a(t, p);
                    if (r) {
                        if (void 0 === e && (e = "default"), n = o(r, t, e), !i(n) || s(n)) return n;
                        throw l("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), c(t, e)
                }
            },
            3894: function(t, e, n) {
                var r = n(6935),
                    o = n(6664);
                t.exports = function(t) {
                    var e = r(t, "string");
                    return o(e) ? e : e + ""
                }
            },
            2885: function(t, e, n) {
                var r = {};
                r[n(9813)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
            },
            5803: function(t, e, n) {
                var r = n(1899),
                    o = n(9697),
                    i = r.String;
                t.exports = function(t) {
                    if ("Symbol" === o(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return i(t)
                }
            },
            9826: function(t, e, n) {
                var r = n(1899).String;
                t.exports = function(t) {
                    try {
                        return r(t)
                    } catch (t) {
                        return "Object"
                    }
                }
            },
            9418: function(t, e, n) {
                var r = n(5329),
                    o = 0,
                    i = Math.random(),
                    s = r(1..toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++o + i, 36)
                }
            },
            2302: function(t, e, n) {
                var r = n(2497);
                t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            3937: function(t, e, n) {
                var r = n(5746),
                    o = n(5981);
                t.exports = r && o((function() {
                    return 42 != Object.defineProperty((function() {}), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }))
            },
            1477: function(t, e, n) {
                var r = n(9813);
                e.f = r
            },
            9813: function(t, e, n) {
                var r = n(1899),
                    o = n(8726),
                    i = n(953),
                    s = n(9418),
                    a = n(2497),
                    c = n(2302),
                    u = o("wks"),
                    l = r.Symbol,
                    p = l && l.for,
                    f = c ? l : l && l.withoutSetter || s;
                t.exports = function(t) {
                    if (!i(u, t) || !a && "string" != typeof u[t]) {
                        var e = "Symbol." + t;
                        a && i(l, t) ? u[t] = l[t] : u[t] = c && p ? p(e) : f(e)
                    }
                    return u[t]
                }
            },
            9076: function(t, e, n) {
                "use strict";
                var r = n(6887),
                    o = n(5329),
                    i = n(1692).indexOf,
                    s = n(4194),
                    a = o([].indexOf),
                    c = !!a && 1 / a([1], 1, -0) < 0,
                    u = s("indexOf");
                r({
                    target: "Array",
                    proto: !0,
                    forced: c || !u
                }, {
                    indexOf: function(t) {
                        var e = arguments.length > 1 ? arguments[1] : void 0;
                        return c ? a(this, t, e) || 0 : i(this, t, e)
                    }
                })
            },
            9221: function(t, e, n) {
                var r = n(6887),
                    o = n(4420);
                r({
                    target: "Object",
                    stat: !0,
                    forced: Object.assign !== o
                }, {
                    assign: o
                })
            },
            6450: function(t, e, n) {
                var r = n(6887),
                    o = n(5746),
                    i = n(5988).f;
                r({
                    target: "Object",
                    stat: !0,
                    forced: Object.defineProperty !== i,
                    sham: !o
                }, {
                    defineProperty: i
                })
            },
            1724: function(t, e, n) {
                var r = n(6887),
                    o = n(9678),
                    i = n(4771);
                r({
                    target: "Object",
                    stat: !0,
                    forced: n(5981)((function() {
                        i(1)
                    }))
                }, {
                    keys: function(t) {
                        return i(o(t))
                    }
                })
            },
            5824: function(t, e, n) {
                "use strict";
                var r = n(6887),
                    o = n(1899),
                    i = n(626),
                    s = n(9730),
                    a = n(8834),
                    c = n(5329),
                    u = n(2529),
                    l = n(5746),
                    p = n(2497),
                    f = n(5981),
                    d = n(953),
                    h = n(1052),
                    v = n(7475),
                    g = n(941),
                    y = n(7046),
                    m = n(6664),
                    _ = n(6059),
                    b = n(9678),
                    w = n(4529),
                    S = n(3894),
                    E = n(5803),
                    O = n(1887),
                    x = n(9290),
                    T = n(4771),
                    k = n(946),
                    C = n(684),
                    j = n(7857),
                    P = n(9677),
                    I = n(5988),
                    R = n(9938),
                    N = n(6760),
                    D = n(3765),
                    A = n(9754),
                    L = n(8726),
                    M = n(4262),
                    F = n(7748),
                    B = n(9418),
                    U = n(9813),
                    $ = n(1477),
                    H = n(6349),
                    G = n(904),
                    q = n(5402),
                    W = n(3610).forEach,
                    z = M("hidden"),
                    K = "Symbol",
                    V = U("toPrimitive"),
                    Y = q.set,
                    J = q.getterFor(K),
                    X = Object.prototype,
                    Q = o.Symbol,
                    Z = Q && Q.prototype,
                    tt = o.TypeError,
                    et = o.QObject,
                    nt = i("JSON", "stringify"),
                    rt = P.f,
                    ot = I.f,
                    it = C.f,
                    st = N.f,
                    at = c([].push),
                    ct = L("symbols"),
                    ut = L("op-symbols"),
                    lt = L("string-to-symbol-registry"),
                    pt = L("symbol-to-string-registry"),
                    ft = L("wks"),
                    dt = !et || !et.prototype || !et.prototype.findChild,
                    ht = l && f((function() {
                        return 7 != x(ot({}, "a", {
                            get: function() {
                                return ot(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                    })) ? function(t, e, n) {
                        var r = rt(X, e);
                        r && delete X[e], ot(t, e, n), r && t !== X && ot(X, e, r)
                    } : ot,
                    vt = function(t, e) {
                        var n = ct[t] = x(Z);
                        return Y(n, {
                            type: K,
                            tag: t,
                            description: e
                        }), l || (n.description = e), n
                    },
                    gt = function(t, e, n) {
                        t === X && gt(ut, e, n), _(t);
                        var r = S(e);
                        return _(n), d(ct, r) ? (n.enumerable ? (d(t, z) && t[z][r] && (t[z][r] = !1), n = x(n, {
                            enumerable: O(0, !1)
                        })) : (d(t, z) || ot(t, z, O(1, {})), t[z][r] = !0), ht(t, r, n)) : ot(t, r, n)
                    },
                    yt = function(t, e) {
                        _(t);
                        var n = w(e),
                            r = T(n).concat(wt(n));
                        return W(r, (function(e) {
                            l && !a(mt, n, e) || gt(t, e, n[e])
                        })), t
                    },
                    mt = function(t) {
                        var e = S(t),
                            n = a(st, this, e);
                        return !(this === X && d(ct, e) && !d(ut, e)) && (!(n || !d(this, e) || !d(ct, e) || d(this, z) && this[z][e]) || n)
                    },
                    _t = function(t, e) {
                        var n = w(t),
                            r = S(e);
                        if (n !== X || !d(ct, r) || d(ut, r)) {
                            var o = rt(n, r);
                            return !o || !d(ct, r) || d(n, z) && n[z][r] || (o.enumerable = !0), o
                        }
                    },
                    bt = function(t) {
                        var e = it(w(t)),
                            n = [];
                        return W(e, (function(t) {
                            d(ct, t) || d(F, t) || at(n, t)
                        })), n
                    },
                    wt = function(t) {
                        var e = t === X,
                            n = it(e ? ut : w(t)),
                            r = [];
                        return W(n, (function(t) {
                            !d(ct, t) || e && !d(X, t) || at(r, ct[t])
                        })), r
                    };
                if (p || (Q = function() {
                        if (y(Z, this)) throw tt("Symbol is not a constructor");
                        var t = arguments.length && void 0 !== arguments[0] ? E(arguments[0]) : void 0,
                            e = B(t),
                            n = function(t) {
                                this === X && a(n, ut, t), d(this, z) && d(this[z], e) && (this[z][e] = !1), ht(this, e, O(1, t))
                            };
                        return l && dt && ht(X, e, {
                            configurable: !0,
                            set: n
                        }), vt(e, t)
                    }, A(Z = Q.prototype, "toString", (function() {
                        return J(this).tag
                    })), A(Q, "withoutSetter", (function(t) {
                        return vt(B(t), t)
                    })), N.f = mt, I.f = gt, R.f = yt, P.f = _t, k.f = C.f = bt, j.f = wt, $.f = function(t) {
                        return vt(U(t), t)
                    }, l && (ot(Z, "description", {
                        configurable: !0,
                        get: function() {
                            return J(this).description
                        }
                    }), u || A(X, "propertyIsEnumerable", mt, {
                        unsafe: !0
                    }))), r({
                        global: !0,
                        wrap: !0,
                        forced: !p,
                        sham: !p
                    }, {
                        Symbol: Q
                    }), W(T(ft), (function(t) {
                        H(t)
                    })), r({
                        target: K,
                        stat: !0,
                        forced: !p
                    }, {
                        for: function(t) {
                            var e = E(t);
                            if (d(lt, e)) return lt[e];
                            var n = Q(e);
                            return lt[e] = n, pt[n] = e, n
                        },
                        keyFor: function(t) {
                            if (!m(t)) throw tt(t + " is not a symbol");
                            if (d(pt, t)) return pt[t]
                        },
                        useSetter: function() {
                            dt = !0
                        },
                        useSimple: function() {
                            dt = !1
                        }
                    }), r({
                        target: "Object",
                        stat: !0,
                        forced: !p,
                        sham: !l
                    }, {
                        create: function(t, e) {
                            return void 0 === e ? x(t) : yt(x(t), e)
                        },
                        defineProperty: gt,
                        defineProperties: yt,
                        getOwnPropertyDescriptor: _t
                    }), r({
                        target: "Object",
                        stat: !0,
                        forced: !p
                    }, {
                        getOwnPropertyNames: bt,
                        getOwnPropertySymbols: wt
                    }), r({
                        target: "Object",
                        stat: !0,
                        forced: f((function() {
                            j.f(1)
                        }))
                    }, {
                        getOwnPropertySymbols: function(t) {
                            return j.f(b(t))
                        }
                    }), nt && r({
                        target: "JSON",
                        stat: !0,
                        forced: !p || f((function() {
                            var t = Q();
                            return "[null]" != nt([t]) || "{}" != nt({
                                a: t
                            }) || "{}" != nt(Object(t))
                        }))
                    }, {
                        stringify: function(t, e, n) {
                            var r = D(arguments),
                                o = e;
                            if ((g(e) || void 0 !== t) && !m(t)) return h(e) || (e = function(t, e) {
                                if (v(o) && (e = a(o, this, t, e)), !m(e)) return e
                            }), r[1] = e, s(nt, null, r)
                        }
                    }), !Z[V]) {
                    var St = Z.valueOf;
                    A(Z, V, (function(t) {
                        return a(St, this)
                    }))
                }
                G(Q, K), F[z] = !0
            },
            9373: function(t, e, n) {
                var r = n(4570);
                t.exports = r
            },
            3383: function(t, e, n) {
                var r = n(5999);
                t.exports = r
            },
            1910: function(t, e, n) {
                var r = n(8171);
                t.exports = r
            },
            9534: function(t, e, n) {
                var r = n(498);
                t.exports = r
            },
            3059: function(t, e, n) {
                var r = n(8494);
                t.exports = r
            },
            7266: function(t, e, n) {
                var r = "undefined" != typeof JSON ? JSON : n(8418);
                t.exports = function(t, e) {
                    e || (e = {}), "function" == typeof e && (e = {
                        cmp: e
                    });
                    var n = e.space || "";
                    "number" == typeof n && (n = Array(n + 1).join(" "));
                    var s, a = "boolean" == typeof e.cycles && e.cycles,
                        c = e.replacer || function(t, e) {
                            return e
                        },
                        u = e.cmp && (s = e.cmp, function(t) {
                            return function(e, n) {
                                var r = {
                                        key: e,
                                        value: t[e]
                                    },
                                    o = {
                                        key: n,
                                        value: t[n]
                                    };
                                return s(r, o)
                            }
                        }),
                        l = [];
                    return function t(e, s, p, f) {
                        var d = n ? "\n" + new Array(f + 1).join(n) : "",
                            h = n ? ": " : ":";
                        if (p && p.toJSON && "function" == typeof p.toJSON && (p = p.toJSON()), void 0 !== (p = c.call(e, s, p))) {
                            if ("object" != typeof p || null === p) return r.stringify(p);
                            if (o(p)) {
                                for (var v = [], g = 0; g < p.length; g++) {
                                    var y = t(p, g, p[g], f + 1) || r.stringify(null);
                                    v.push(d + n + y)
                                }
                                return "[" + v.join(",") + d + "]"
                            }
                            if (-1 !== l.indexOf(p)) {
                                if (a) return r.stringify("__cycle__");
                                throw new TypeError("Converting circular structure to JSON")
                            }
                            l.push(p);
                            var m = i(p).sort(u && u(p));
                            for (v = [], g = 0; g < m.length; g++) {
                                var _ = t(p, s = m[g], p[s], f + 1);
                                if (_) {
                                    var b = r.stringify(s) + h + _;
                                    v.push(d + n + b)
                                }
                            }
                            return l.splice(l.indexOf(p), 1), "{" + v.join(",") + d + "}"
                        }
                    }({
                        "": t
                    }, "", t, 0)
                };
                var o = Array.isArray || function(t) {
                        return "[object Array]" === {}.toString.call(t)
                    },
                    i = Object.keys || function(t) {
                        var e = Object.prototype.hasOwnProperty || function() {
                                return !0
                            },
                            n = [];
                        for (var r in t) e.call(t, r) && n.push(r);
                        return n
                    }
            },
            8418: function(t, e, n) {
                e.parse = n(1396), e.stringify = n(6177)
            },
            1396: function(t) {
                var e, n, r, o, i = {
                        '"': '"',
                        "\\": "\\",
                        "/": "/",
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t"
                    },
                    s = function(t) {
                        throw {
                            name: "SyntaxError",
                            message: t,
                            at: e,
                            text: r
                        }
                    },
                    a = function(t) {
                        return t && t !== n && s("Expected '" + t + "' instead of '" + n + "'"), n = r.charAt(e), e += 1, n
                    },
                    c = function() {
                        var t, e = "";
                        for ("-" === n && (e = "-", a("-")); n >= "0" && n <= "9";) e += n, a();
                        if ("." === n)
                            for (e += "."; a() && n >= "0" && n <= "9";) e += n;
                        if ("e" === n || "E" === n)
                            for (e += n, a(), "-" !== n && "+" !== n || (e += n, a()); n >= "0" && n <= "9";) e += n, a();
                        if (t = +e, isFinite(t)) return t;
                        s("Bad number")
                    },
                    u = function() {
                        var t, e, r, o = "";
                        if ('"' === n)
                            for (; a();) {
                                if ('"' === n) return a(), o;
                                if ("\\" === n)
                                    if (a(), "u" === n) {
                                        for (r = 0, e = 0; e < 4 && (t = parseInt(a(), 16), isFinite(t)); e += 1) r = 16 * r + t;
                                        o += String.fromCharCode(r)
                                    } else {
                                        if ("string" != typeof i[n]) break;
                                        o += i[n]
                                    }
                                else o += n
                            }
                        s("Bad string")
                    },
                    l = function() {
                        for (; n && n <= " ";) a()
                    };
                o = function() {
                    switch (l(), n) {
                        case "{":
                            return function() {
                                var t, e = {};
                                if ("{" === n) {
                                    if (a("{"), l(), "}" === n) return a("}"), e;
                                    for (; n;) {
                                        if (t = u(), l(), a(":"), Object.hasOwnProperty.call(e, t) && s('Duplicate key "' + t + '"'), e[t] = o(), l(), "}" === n) return a("}"), e;
                                        a(","), l()
                                    }
                                }
                                s("Bad object")
                            }();
                        case "[":
                            return function() {
                                var t = [];
                                if ("[" === n) {
                                    if (a("["), l(), "]" === n) return a("]"), t;
                                    for (; n;) {
                                        if (t.push(o()), l(), "]" === n) return a("]"), t;
                                        a(","), l()
                                    }
                                }
                                s("Bad array")
                            }();
                        case '"':
                            return u();
                        case "-":
                            return c();
                        default:
                            return n >= "0" && n <= "9" ? c() : function() {
                                switch (n) {
                                    case "t":
                                        return a("t"), a("r"), a("u"), a("e"), !0;
                                    case "f":
                                        return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                                    case "n":
                                        return a("n"), a("u"), a("l"), a("l"), null
                                }
                                s("Unexpected '" + n + "'")
                            }()
                    }
                }, t.exports = function(t, i) {
                    var a;
                    return r = t, e = 0, n = " ", a = o(), l(), n && s("Syntax error"), "function" == typeof i ? function t(e, n) {
                        var r, o, s = e[n];
                        if (s && "object" == typeof s)
                            for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (void 0 !== (o = t(s, r)) ? s[r] = o : delete s[r]);
                        return i.call(e, n, s)
                    }({
                        "": a
                    }, "") : a
                }
            },
            6177: function(t) {
                var e, n, r, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    i = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };

                function s(t) {
                    return o.lastIndex = 0, o.test(t) ? '"' + t.replace(o, (function(t) {
                        var e = i[t];
                        return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })) + '"' : '"' + t + '"'
                }

                function a(t, o) {
                    var i, c, u, l, p, f = e,
                        d = o[t];
                    switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(t)), "function" == typeof r && (d = r.call(o, t, d)), typeof d) {
                        case "string":
                            return s(d);
                        case "number":
                            return isFinite(d) ? String(d) : "null";
                        case "boolean":
                        case "null":
                            return String(d);
                        case "object":
                            if (!d) return "null";
                            if (e += n, p = [], "[object Array]" === Object.prototype.toString.apply(d)) {
                                for (l = d.length, i = 0; i < l; i += 1) p[i] = a(i, d) || "null";
                                return u = 0 === p.length ? "[]" : e ? "[\n" + e + p.join(",\n" + e) + "\n" + f + "]" : "[" + p.join(",") + "]", e = f, u
                            }
                            if (r && "object" == typeof r)
                                for (l = r.length, i = 0; i < l; i += 1) "string" == typeof(c = r[i]) && (u = a(c, d)) && p.push(s(c) + (e ? ": " : ":") + u);
                            else
                                for (c in d) Object.prototype.hasOwnProperty.call(d, c) && (u = a(c, d)) && p.push(s(c) + (e ? ": " : ":") + u);
                            return u = 0 === p.length ? "{}" : e ? "{\n" + e + p.join(",\n" + e) + "\n" + f + "}" : "{" + p.join(",") + "}", e = f, u
                    }
                }
                t.exports = function(t, o, i) {
                    var s;
                    if (e = "", n = "", "number" == typeof i)
                        for (s = 0; s < i; s += 1) n += " ";
                    else "string" == typeof i && (n = i);
                    if (r = o, o && "function" != typeof o && ("object" != typeof o || "number" != typeof o.length)) throw new Error("JSON.stringify");
                    return a("", {
                        "": t
                    })
                }
            },
            1296: function(t, e, n) {
                var r = /^\s+|\s+$/g,
                    o = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    s = /^0o[0-7]+$/i,
                    a = parseInt,
                    c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                    u = "object" == typeof self && self && self.Object === Object && self,
                    l = c || u || Function("return this")(),
                    p = Object.prototype.toString,
                    f = Math.max,
                    d = Math.min,
                    h = function() {
                        return l.Date.now()
                    };

                function v(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function g(t) {
                    if ("number" == typeof t) return t;
                    if (function(t) {
                            return "symbol" == typeof t || function(t) {
                                return !!t && "object" == typeof t
                            }(t) && "[object Symbol]" == p.call(t)
                        }(t)) return NaN;
                    if (v(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = v(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(r, "");
                    var n = i.test(t);
                    return n || s.test(t) ? a(t.slice(2), n ? 2 : 8) : o.test(t) ? NaN : +t
                }
                t.exports = function(t, e, n) {
                    var r, o, i, s, a, c, u = 0,
                        l = !1,
                        p = !1,
                        y = !0;
                    if ("function" != typeof t) throw new TypeError("Expected a function");

                    function m(e) {
                        var n = r,
                            i = o;
                        return r = o = void 0, u = e, s = t.apply(i, n)
                    }

                    function _(t) {
                        return u = t, a = setTimeout(w, e), l ? m(t) : s
                    }

                    function b(t) {
                        var n = t - c;
                        return void 0 === c || n >= e || n < 0 || p && t - u >= i
                    }

                    function w() {
                        var t = h();
                        if (b(t)) return S(t);
                        a = setTimeout(w, function(t) {
                            var n = e - (t - c);
                            return p ? d(n, i - (t - u)) : n
                        }(t))
                    }

                    function S(t) {
                        return a = void 0, y && r ? m(t) : (r = o = void 0, s)
                    }

                    function E() {
                        var t = h(),
                            n = b(t);
                        if (r = arguments, o = this, c = t, n) {
                            if (void 0 === a) return _(c);
                            if (p) return a = setTimeout(w, e), m(c)
                        }
                        return void 0 === a && (a = setTimeout(w, e)), s
                    }
                    return e = g(e) || 0, v(n) && (l = !!n.leading, i = (p = "maxWait" in n) ? f(g(n.maxWait) || 0, e) : i, y = "trailing" in n ? !!n.trailing : y), E.cancel = function() {
                        void 0 !== a && clearTimeout(a), u = 0, r = c = o = a = void 0
                    }, E.flush = function() {
                        return void 0 === a ? s : S(h())
                    }, E
                }
            },
            773: function(t, e, n) {
                var r, o = "__lodash_hash_undefined__",
                    i = /^\[object .+?Constructor\]$/,
                    s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                    a = "object" == typeof self && self && self.Object === Object && self,
                    c = s || a || Function("return this")(),
                    u = Array.prototype,
                    l = Function.prototype,
                    p = Object.prototype,
                    f = c["__core-js_shared__"],
                    d = (r = /[^.]+$/.exec(f && f.keys && f.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                    h = l.toString,
                    v = p.hasOwnProperty,
                    g = p.toString,
                    y = RegExp("^" + h.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    m = u.splice,
                    _ = T(c, "Map"),
                    b = T(Object, "create");

                function w(t) {
                    var e = -1,
                        n = t ? t.length : 0;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function S(t) {
                    var e = -1,
                        n = t ? t.length : 0;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function E(t) {
                    var e = -1,
                        n = t ? t.length : 0;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function O(t, e) {
                    for (var n, r, o = t.length; o--;)
                        if ((n = t[o][0]) === (r = e) || n != n && r != r) return o;
                    return -1
                }

                function x(t, e) {
                    var n, r, o = t.__data__;
                    return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map
                }

                function T(t, e) {
                    var n = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return function(t) {
                        if (!C(t) || d && d in t) return !1;
                        var e = function(t) {
                            var e = C(t) ? g.call(t) : "";
                            return "[object Function]" == e || "[object GeneratorFunction]" == e
                        }(t) || function(t) {
                            var e = !1;
                            if (null != t && "function" != typeof t.toString) try {
                                e = !!(t + "")
                            } catch (t) {}
                            return e
                        }(t) ? y : i;
                        return e.test(function(t) {
                            if (null != t) {
                                try {
                                    return h.call(t)
                                } catch (t) {}
                                try {
                                    return t + ""
                                } catch (t) {}
                            }
                            return ""
                        }(t))
                    }(n) ? n : void 0
                }

                function k(t, e) {
                    if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
                    var n = function() {
                        var r = arguments,
                            o = e ? e.apply(this, r) : r[0],
                            i = n.cache;
                        if (i.has(o)) return i.get(o);
                        var s = t.apply(this, r);
                        return n.cache = i.set(o, s), s
                    };
                    return n.cache = new(k.Cache || E), n
                }

                function C(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }
                w.prototype.clear = function() {
                    this.__data__ = b ? b(null) : {}
                }, w.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t]
                }, w.prototype.get = function(t) {
                    var e = this.__data__;
                    if (b) {
                        var n = e[t];
                        return n === o ? void 0 : n
                    }
                    return v.call(e, t) ? e[t] : void 0
                }, w.prototype.has = function(t) {
                    var e = this.__data__;
                    return b ? void 0 !== e[t] : v.call(e, t)
                }, w.prototype.set = function(t, e) {
                    return this.__data__[t] = b && void 0 === e ? o : e, this
                }, S.prototype.clear = function() {
                    this.__data__ = []
                }, S.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = O(e, t);
                    return !(n < 0 || (n == e.length - 1 ? e.pop() : m.call(e, n, 1), 0))
                }, S.prototype.get = function(t) {
                    var e = this.__data__,
                        n = O(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }, S.prototype.has = function(t) {
                    return O(this.__data__, t) > -1
                }, S.prototype.set = function(t, e) {
                    var n = this.__data__,
                        r = O(n, t);
                    return r < 0 ? n.push([t, e]) : n[r][1] = e, this
                }, E.prototype.clear = function() {
                    this.__data__ = {
                        hash: new w,
                        map: new(_ || S),
                        string: new w
                    }
                }, E.prototype.delete = function(t) {
                    return x(this, t).delete(t)
                }, E.prototype.get = function(t) {
                    return x(this, t).get(t)
                }, E.prototype.has = function(t) {
                    return x(this, t).has(t)
                }, E.prototype.set = function(t, e) {
                    return x(this, t).set(t, e), this
                }, k.Cache = E, t.exports = k
            },
            6104: function(t) {
                var e = "undefined" != typeof process && process.pid ? process.pid.toString(36) : "";

                function n() {
                    var t = Date.now(),
                        e = n.last || t;
                    return n.last = t > e ? t : e + 1
                }
                t.exports = t.exports.default = function(t, r) {
                    return (t || "") + "" + e + n().toString(36) + (r || "")
                }, t.exports.process = function(t, r) {
                    return (t || "") + e + n().toString(36) + (r || "")
                }, t.exports.time = function(t, e) {
                    return (t || "") + n().toString(36) + (e || "")
                }
            }
        },
        e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, {
                a: e
            }), e
        }, n.d = function(t, e) {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), n.hmd = function(t) {
            return (t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
                enumerable: !0,
                set: function() {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
                }
            }), t
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var t = {};
            n.r(t), n.d(t, {
                FunctionToString: function() {
                    return hr
                },
                InboundFilters: function() {
                    return dr
                }
            });
            var e = {};
            n.r(e), n.d(e, {
                Breadcrumbs: function() {
                    return ir
                },
                Dedupe: function() {
                    return jr
                },
                GlobalHandlers: function() {
                    return wr
                },
                LinkedErrors: function() {
                    return kr
                },
                TryCatch: function() {
                    return gr
                },
                UserAgent: function() {
                    return Ar
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                BaseTransport: function() {
                    return Ln
                },
                FetchTransport: function() {
                    return Mn
                },
                XHRTransport: function() {
                    return Fn
                }
            });
            var o = {};
            n.r(o), n.d(o, {
                BrowserClient: function() {
                    return pr
                },
                Hub: function() {
                    return me
                },
                Integrations: function() {
                    return Yr
                },
                SDK_NAME: function() {
                    return zr
                },
                SDK_VERSION: function() {
                    return Be
                },
                Scope: function() {
                    return It
                },
                Severity: function() {
                    return it
                },
                Transports: function() {
                    return r
                },
                addBreadcrumb: function() {
                    return Pe
                },
                addGlobalEventProcessor: function() {
                    return Nt
                },
                captureEvent: function() {
                    return Ce
                },
                captureException: function() {
                    return Te
                },
                captureMessage: function() {
                    return ke
                },
                close: function() {
                    return Gr
                },
                configureScope: function() {
                    return je
                },
                defaultIntegrations: function() {
                    return Lr
                },
                eventFromException: function() {
                    return bn
                },
                eventFromMessage: function() {
                    return wn
                },
                flush: function() {
                    return Hr
                },
                forceLoad: function() {
                    return Ur
                },
                getCurrentHub: function() {
                    return we
                },
                getHubFromCarrier: function() {
                    return Ee
                },
                init: function() {
                    return Mr
                },
                injectReportDialog: function() {
                    return Wn
                },
                lastEventId: function() {
                    return Br
                },
                makeMain: function() {
                    return be
                },
                onLoad: function() {
                    return $r
                },
                setContext: function() {
                    return Ie
                },
                setExtra: function() {
                    return De
                },
                setExtras: function() {
                    return Re
                },
                setTag: function() {
                    return Ae
                },
                setTags: function() {
                    return Ne
                },
                setUser: function() {
                    return Le
                },
                showReportDialog: function() {
                    return Fr
                },
                startTransaction: function() {
                    return Fe
                },
                withScope: function() {
                    return Me
                },
                wrap: function() {
                    return qr
                }
            });
            class i extends Error {
                constructor(t) {
                    super(t), this.name = "AdaEmbedError"
                }
            }

            function s(t) {
                if (!t) return;
                let e = t.charAt(0).toUpperCase() + t.slice(1);
                const n = e.charAt(e.length - 1);
                [".", "?", "!"].includes(n) || (e = `${e}.`), console.warn(`Ada Embed - ${e}`)
            }
            var a = n(4341);

            function c(t, e, n) {
                return e in t ? a(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var u = n(773);

            function l(t) {
                return new Promise(((e, n) => {
                    const r = t.method || "GET",
                        {
                            headers: o
                        } = t,
                        i = new XMLHttpRequest,
                        s = new URL(t.url);
                    s.searchParams.set("ada_request_origin", "embed"), "withCredentials" in i && (i.open(r, s.href, !0), o && Object.keys(o).forEach((t => {
                        i.setRequestHeader(t, o[t])
                    })), i.onload = () => {
                        if (i.status >= 200 && i.status < 300) {
                            let t;
                            try {
                                t = JSON.parse(i.response), e(t)
                            } catch (t) {
                                n(new Error(`JSON Parse Error in XHR Request: ${t}`))
                            }
                        } else n(new Error(`XHR Error: ${i.statusText}`))
                    }, i.onerror = () => n(new Error(`XHR Error: ${i.statusText}`)), i.send(t.body))
                }))
            }

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            const d = n.n(u)()((t => 0 !== t && Math.random() < (t || .01)));
            async function h(t, e, n) {
                d(null == n ? void 0 : n.sampleRate) && await l({
                    url: "https://browser-http-intake.logs.datadoghq.com/v1/input/pubfe23baedd2ea322bebb5ed2020fa2fa1?ddsource=browser&ddtags=version:1.5.0,env:production",
                    method: "POST",
                    body: JSON.stringify(f(f({
                        message: t
                    }, e), {}, {
                        sampleRate: (null == n ? void 0 : n.sampleRate) || .01,
                        service: "embed",
                        env: "production",
                        embedVersion: 2,
                        version: "1.7.2",
                        isNpm: !1,
                        commitHash: "369dae9"
                    }))
                })
            }
            const v = () => {};

            function g(t) {
                return "object" == typeof t && null !== t && "string" == typeof t.handle
            }

            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(t) {
                const e = document.getElementById("__ada");
                let n, r;
                if (e) {
                    /embed\.js/.test(e.src) && s("`embed.js` script is no longer supported. Please update Ada Embed code to use `embed2.js` instead.");
                    const t = e.getAttribute("data-lazy");
                    if (r = Boolean(t || "" === t), r) return;
                    n = function(t) {
                        const e = t.getAttribute("data-handle") || void 0,
                            n = t.getAttribute("data-domain") || void 0,
                            r = e || g(window.adaSettings) && window.adaSettings.handle || null;
                        if (!r) throw new i("Either `data-handle` or `window.adaSettings.handle` must be defined");
                        return function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? y(Object(n), !0).forEach((function(e) {
                                    c(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            handle: r,
                            domain: n
                        }, window.adaSettings)
                    }(e)
                } else {
                    if (h('Missing "__ada" script tag', {
                            handle: g(window.adaSettings) ? window.adaSettings.handle : null
                        }), !g(window.adaSettings)) throw new i("`window.adaSettings` object must be defined");
                    n = window.adaSettings, r = n.lazy || !1
                }
                var o;
                r || (o = () => {
                    t.start(n)
                }, /comp|inter|loaded/.test(document.readyState) ? o() : document.addEventListener("DOMContentLoaded", (() => {
                    o()
                })))
            }
            var _, b, w, S, E, O, x = n(1296),
                T = n.n(x),
                k = {},
                C = [],
                j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function P(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function I(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }

            function R(t, e, n) {
                var r, o = arguments,
                    i = {};
                for (r in e) "key" !== r && "ref" !== r && (i[r] = e[r]);
                if (arguments.length > 3)
                    for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
                if (null != n && (i.children = n), "function" == typeof t && null != t.defaultProps)
                    for (r in t.defaultProps) void 0 === i[r] && (i[r] = t.defaultProps[r]);
                return N(t, i, e && e.key, e && e.ref, null)
            }

            function N(t, e, n, r, o) {
                var i = {
                    type: t,
                    props: e,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: o
                };
                return null == o && (i.__v = i), _.vnode && _.vnode(i), i
            }

            function D(t) {
                return t.children
            }

            function A(t, e) {
                this.props = t, this.context = e
            }

            function L(t, e) {
                if (null == e) return t.__ ? L(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? L(t) : null
            }

            function M(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return M(t)
                }
            }

            function F(t) {
                (!t.__d && (t.__d = !0) && b.push(t) && !B.__r++ || S !== _.debounceRendering) && ((S = _.debounceRendering) || w)(B)
            }

            function B() {
                for (var t; B.__r = b.length;) t = b.sort((function(t, e) {
                    return t.__v.__b - e.__v.__b
                })), b = [], t.some((function(t) {
                    var e, n, r, o, i, s, a;
                    t.__d && (s = (i = (e = t).__v).__e, (a = e.__P) && (n = [], (r = P({}, i)).__v = r, o = z(a, i, r, e.__n, void 0 !== a.ownerSVGElement, null, n, null == s ? L(i) : s), K(n, i), o != s && M(i)))
                }))
            }

            function U(t, e, n, r, o, i, s, a, c, u) {
                var l, p, f, d, h, v, g, y = r && r.__k || C,
                    m = y.length;
                for (c == k && (c = null != s ? s[0] : m ? L(r, 0) : null), n.__k = [], l = 0; l < e.length; l++)
                    if (null != (d = n.__k[l] = null == (d = e[l]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d ? N(null, d, null, null, d) : Array.isArray(d) ? N(D, {
                            children: d
                        }, null, null, null) : null != d.__e || null != d.__c ? N(d.type, d.props, d.key, null, d.__v) : d)) {
                        if (d.__ = n, d.__b = n.__b + 1, null === (f = y[l]) || f && d.key == f.key && d.type === f.type) y[l] = void 0;
                        else
                            for (p = 0; p < m; p++) {
                                if ((f = y[p]) && d.key == f.key && d.type === f.type) {
                                    y[p] = void 0;
                                    break
                                }
                                f = null
                            }
                        h = z(t, d, f = f || k, o, i, s, a, c, u), (p = d.ref) && f.ref != p && (g || (g = []), f.ref && g.push(f.ref, null, d), g.push(p, d.__c || h, d)), null != h ? (null == v && (v = h), c = $(t, d, f, y, s, h, c), "option" == n.type ? t.value = "" : "function" == typeof n.type && (n.__d = c)) : c && f.__e == c && c.parentNode != t && (c = L(f))
                    }
                if (n.__e = v, null != s && "function" != typeof n.type)
                    for (l = s.length; l--;) null != s[l] && I(s[l]);
                for (l = m; l--;) null != y[l] && J(y[l], y[l]);
                if (g)
                    for (l = 0; l < g.length; l++) Y(g[l], g[++l], g[++l])
            }

            function $(t, e, n, r, o, i, s) {
                var a, c, u;
                if (void 0 !== e.__d) a = e.__d, e.__d = void 0;
                else if (o == n || i != s || null == i.parentNode) t: if (null == s || s.parentNode !== t) t.appendChild(i), a = null;
                    else {
                        for (c = s, u = 0;
                            (c = c.nextSibling) && u < r.length; u += 2)
                            if (c == i) break t;
                        t.insertBefore(i, s), a = s
                    }
                return void 0 !== a ? a : i.nextSibling
            }

            function H(t, e, n) {
                "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === j.test(e) ? n + "px" : null == n ? "" : n
            }

            function G(t, e, n, r, o) {
                var i, s, a, c, u;
                if (o ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e)
                    if (i = t.style, "string" == typeof n) i.cssText = n;
                    else {
                        if ("string" == typeof r && (i.cssText = "", r = null), r)
                            for (c in r) n && c in n || H(i, c, "");
                        if (n)
                            for (u in n) r && n[u] === r[u] || H(i, u, n[u])
                    }
                else "o" === e[0] && "n" === e[1] ? (s = e !== (e = e.replace(/Capture$/, "")), a = e.toLowerCase(), e = (a in t ? a : e).slice(2), n ? (r || t.addEventListener(e, q, s), (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, q, s)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !o && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n))
            }

            function q(t) {
                this.l[t.type](_.event ? _.event(t) : t)
            }

            function W(t, e, n) {
                var r, o;
                for (r = 0; r < t.__k.length; r++)(o = t.__k[r]) && (o.__ = t, o.__e && ("function" == typeof o.type && o.__k.length > 1 && W(o, e, n), e = $(n, o, o, t.__k, null, o.__e, e), "function" == typeof t.type && (t.__d = e)))
            }

            function z(t, e, n, r, o, i, s, a, c) {
                var u, l, p, f, d, h, v, g, y, m, b, w = e.type;
                if (void 0 !== e.constructor) return null;
                (u = _.__b) && u(e);
                try {
                    t: if ("function" == typeof w) {
                        if (g = e.props, y = (u = w.contextType) && r[u.__c], m = u ? y ? y.props.value : u.__ : r, n.__c ? v = (l = e.__c = n.__c).__ = l.__E : ("prototype" in w && w.prototype.render ? e.__c = l = new w(g, m) : (e.__c = l = new A(g, m), l.constructor = w, l.render = X), y && y.sub(l), l.props = g, l.state || (l.state = {}), l.context = m, l.__n = r, p = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != w.getDerivedStateFromProps && (l.__s == l.state && (l.__s = P({}, l.__s)), P(l.__s, w.getDerivedStateFromProps(g, l.__s))), f = l.props, d = l.state, p) null == w.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
                        else {
                            if (null == w.getDerivedStateFromProps && g !== f && null != l.componentWillReceiveProps && l.componentWillReceiveProps(g, m), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(g, l.__s, m) || e.__v === n.__v) {
                                l.props = g, l.state = l.__s, e.__v !== n.__v && (l.__d = !1), l.__v = e, e.__e = n.__e, e.__k = n.__k, l.__h.length && s.push(l), W(e, a, t);
                                break t
                            }
                            null != l.componentWillUpdate && l.componentWillUpdate(g, l.__s, m), null != l.componentDidUpdate && l.__h.push((function() {
                                l.componentDidUpdate(f, d, h)
                            }))
                        }
                        l.context = m, l.props = g, l.state = l.__s, (u = _.__r) && u(e), l.__d = !1, l.__v = e, l.__P = t, u = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = P(P({}, r), l.getChildContext())), p || null == l.getSnapshotBeforeUpdate || (h = l.getSnapshotBeforeUpdate(f, d)), b = null != u && u.type == D && null == u.key ? u.props.children : u, U(t, Array.isArray(b) ? b : [b], e, n, r, o, i, s, a, c), l.base = e.__e, l.__h.length && s.push(l), v && (l.__E = l.__ = null), l.__e = !1
                    } else null == i && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = V(n.__e, e, n, r, o, i, s, c);
                    (u = _.diffed) && u(e)
                }
                catch (t) {
                    e.__v = null, _.__e(t, e, n)
                }
                return e.__e
            }

            function K(t, e) {
                _.__c && _.__c(e, t), t.some((function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some((function(t) {
                            t.call(e)
                        }))
                    } catch (t) {
                        _.__e(t, e.__v)
                    }
                }))
            }

            function V(t, e, n, r, o, i, s, a) {
                var c, u, l, p, f, d = n.props,
                    h = e.props;
                if (o = "svg" === e.type || o, null != i)
                    for (c = 0; c < i.length; c++)
                        if (null != (u = i[c]) && ((null === e.type ? 3 === u.nodeType : u.localName === e.type) || t == u)) {
                            t = u, i[c] = null;
                            break
                        }
                if (null == t) {
                    if (null === e.type) return document.createTextNode(h);
                    t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, h.is && {
                        is: h.is
                    }), i = null, a = !1
                }
                if (null === e.type) d !== h && t.data != h && (t.data = h);
                else {
                    if (null != i && (i = C.slice.call(t.childNodes)), l = (d = n.props || k).dangerouslySetInnerHTML, p = h.dangerouslySetInnerHTML, !a) {
                        if (null != i)
                            for (d = {}, f = 0; f < t.attributes.length; f++) d[t.attributes[f].name] = t.attributes[f].value;
                        (p || l) && (p && l && p.__html == l.__html || (t.innerHTML = p && p.__html || ""))
                    }(function(t, e, n, r, o) {
                        var i;
                        for (i in n) "children" === i || "key" === i || i in e || G(t, i, null, n[i], r);
                        for (i in e) o && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || G(t, i, e[i], n[i], r)
                    })(t, h, d, o, a), p ? e.__k = [] : (c = e.props.children, U(t, Array.isArray(c) ? c : [c], e, n, r, "foreignObject" !== e.type && o, i, s, k, a)), a || ("value" in h && void 0 !== (c = h.value) && c !== t.value && G(t, "value", c, d.value, !1), "checked" in h && void 0 !== (c = h.checked) && c !== t.checked && G(t, "checked", c, d.checked, !1))
                }
                return t
            }

            function Y(t, e, n) {
                try {
                    "function" == typeof t ? t(e) : t.current = e
                } catch (t) {
                    _.__e(t, n)
                }
            }

            function J(t, e, n) {
                var r, o, i;
                if (_.unmount && _.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Y(r, null, e)), n || "function" == typeof t.type || (n = null != (o = t.__e)), t.__e = t.__d = void 0, null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        _.__e(t, e)
                    }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (i = 0; i < r.length; i++) r[i] && J(r[i], e, n);
                null != o && I(o)
            }

            function X(t, e, n) {
                return this.constructor(t, n)
            }

            function Q(t) {
                var e = {},
                    n = {
                        __c: "__cC" + O++,
                        __: t,
                        Consumer: function(t, e) {
                            return t.children(e)
                        },
                        Provider: function(t) {
                            var r, o = this;
                            return this.getChildContext || (r = [], this.getChildContext = function() {
                                return e[n.__c] = o, e
                            }, this.shouldComponentUpdate = function(t) {
                                o.props.value !== t.value && r.some((function(e) {
                                    e.context = t.value, F(e)
                                }))
                            }, this.sub = function(t) {
                                r.push(t);
                                var e = t.componentWillUnmount;
                                t.componentWillUnmount = function() {
                                    r.splice(r.indexOf(t), 1), e && e.call(t)
                                }
                            }), t.children
                        }
                    };
                return n.Consumer.contextType = n, n.Provider.__ = n, n
            }
            _ = {
                __e: function(t, e) {
                    for (var n, r; e = e.__;)
                        if ((n = e.__c) && !n.__) try {
                            if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(t))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(t)), r) return F(n.__E = n)
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, A.prototype.setState = function(t, e) {
                var n;
                n = this.__s !== this.state ? this.__s : this.__s = P({}, this.state), "function" == typeof t && (t = t(n, this.props)), t && P(n, t), null != t && this.__v && (e && this.__h.push(e), F(this))
            }, A.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), F(this))
            }, A.prototype.render = D, b = [], w = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, B.__r = 0, E = k, O = 0;
            const Z = Q(null),
                tt = Q(null);
            var et = n(6104),
                nt = n.n(et),
                rt = function(t, e) {
                    return rt = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    }, rt(t, e)
                };

            function ot(t, e) {
                function n() {
                    this.constructor = t
                }
                rt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var it, st = function() {
                return st = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, st.apply(this, arguments)
            };

            function at(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function ct(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function ut() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ct(arguments[e]));
                return t
            }! function(t) {
                t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
            }(it || (it = {}));
            var lt = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
                pt = function() {
                    return pt = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, pt.apply(this, arguments)
                };

            function ft(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function dt() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ft(arguments[e]));
                return t
            }
            var ht = Object.prototype.toString;

            function vt(t) {
                switch (ht.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return xt(t, Error)
                }
            }

            function gt(t, e) {
                return ht.call(t) === "[object " + e + "]"
            }

            function yt(t) {
                return gt(t, "ErrorEvent")
            }

            function mt(t) {
                return gt(t, "DOMError")
            }

            function _t(t) {
                return gt(t, "String")
            }

            function bt(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }

            function wt(t) {
                return gt(t, "Object")
            }

            function St(t) {
                return "undefined" != typeof Event && xt(t, Event)
            }

            function Et(t) {
                return "undefined" != typeof Element && xt(t, Element)
            }

            function Ot(t) {
                return Boolean(t && t.then && "function" == typeof t.then)
            }

            function xt(t, e) {
                try {
                    return t instanceof e
                } catch (t) {
                    return !1
                }
            }
            var Tt = n(1170);

            function kt(t) {
                return new jt((function(e) {
                    e(t)
                }))
            }

            function Ct(t) {
                return new jt((function(e, n) {
                    n(t)
                }))
            }
            var jt = function() {
                    function t(t) {
                        var e = this;
                        this._state = 0, this._handlers = [], this._resolve = function(t) {
                            e._setResult(1, t)
                        }, this._reject = function(t) {
                            e._setResult(2, t)
                        }, this._setResult = function(t, n) {
                            0 === e._state && (Ot(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                        }, this._executeHandlers = function() {
                            if (0 !== e._state) {
                                var t = e._handlers.slice();
                                e._handlers = [], t.forEach((function(t) {
                                    t[0] || (1 === e._state && t[1](e._value), 2 === e._state && t[2](e._value), t[0] = !0)
                                }))
                            }
                        };
                        try {
                            t(this._resolve, this._reject)
                        } catch (t) {
                            this._reject(t)
                        }
                    }
                    return t.prototype.then = function(e, n) {
                        var r = this;
                        return new t((function(t, o) {
                            r._handlers.push([!1, function(n) {
                                if (e) try {
                                    t(e(n))
                                } catch (t) {
                                    o(t)
                                } else t(n)
                            }, function(e) {
                                if (n) try {
                                    t(n(e))
                                } catch (t) {
                                    o(t)
                                } else o(e)
                            }]), r._executeHandlers()
                        }))
                    }, t.prototype.catch = function(t) {
                        return this.then((function(t) {
                            return t
                        }), t)
                    }, t.prototype.finally = function(e) {
                        var n = this;
                        return new t((function(t, r) {
                            var o, i;
                            return n.then((function(t) {
                                i = !1, o = t, e && e()
                            }), (function(t) {
                                i = !0, o = t, e && e()
                            })).then((function() {
                                i ? r(o) : t(o)
                            }))
                        }))
                    }, t
                }(),
                Pt = n(2991),
                It = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                    }
                    return t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = dt(e._breadcrumbs), n._tags = pt({}, e._tags), n._extra = pt({}, e._extra), n._contexts = pt({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = dt(e._eventProcessors), n._requestSession = e._requestSession), n
                    }, t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._session && this._session.update({
                            user: t
                        }), this._notifyScopeListeners(), this
                    }, t.prototype.getUser = function() {
                        return this._user
                    }, t.prototype.getRequestSession = function() {
                        return this._requestSession
                    }, t.prototype.setRequestSession = function(t) {
                        return this._requestSession = t, this
                    }, t.prototype.setTags = function(t) {
                        return this._tags = pt(pt({}, this._tags), t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = pt(pt({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = pt(pt({}, this._extra), t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = pt(pt({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransactionName = function(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this.setTransactionName(t)
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return null === e ? delete this._contexts[t] : this._contexts = pt(pt({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.prototype.getTransaction = function() {
                        var t = this.getSpan();
                        return t && t.transaction
                    }, t.prototype.setSession = function(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }, t.prototype.getSession = function() {
                        return this._session
                    }, t.prototype.update = function(e) {
                        if (!e) return this;
                        if ("function" == typeof e) {
                            var n = e(this);
                            return n instanceof t ? n : this
                        }
                        return e instanceof t ? (this._tags = pt(pt({}, this._tags), e._tags), this._extra = pt(pt({}, this._extra), e._extra), this._contexts = pt(pt({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : wt(e) && (this._tags = pt(pt({}, this._tags), e.tags), this._extra = pt(pt({}, this._extra), e.extra), this._contexts = pt(pt({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = "number" == typeof e ? Math.min(e, 100) : 100;
                        if (n <= 0) return this;
                        var r = pt({
                            timestamp: (0, Tt.yW)()
                        }, t);
                        return this._breadcrumbs = dt(this._breadcrumbs, [r]).slice(-n), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype.applyToEvent = function(t, e) {
                        if (this._extra && Object.keys(this._extra).length && (t.extra = pt(pt({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = pt(pt({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = pt(pt({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = pt(pt({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = pt({
                                trace: this._span.getTraceContext()
                            }, t.contexts);
                            var n = this._span.transaction && this._span.transaction.name;
                            n && (t.tags = pt({
                                transaction: n
                            }, t.tags))
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = dt(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(dt(Rt(), this._eventProcessors), t, e)
                    }, t.prototype.setSDKProcessingMetadata = function(t) {
                        return this._sdkProcessingMetadata = pt(pt({}, this._sdkProcessingMetadata), t), this
                    }, t.prototype._notifyEventProcessors = function(t, e, n, r) {
                        var o = this;
                        return void 0 === r && (r = 0), new jt((function(i, s) {
                            var a = t[r];
                            if (null === e || "function" != typeof a) i(e);
                            else {
                                var c = a(pt({}, e), n);
                                Ot(c) ? c.then((function(e) {
                                    return o._notifyEventProcessors(t, e, n, r + 1).then(i)
                                })).then(null, s) : o._notifyEventProcessors(t, c, n, r + 1).then(i).then(null, s)
                            }
                        }))
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                            e(t)
                        })), this._notifyingListeners = !1)
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t
                }();

            function Rt() {
                var t = (0, Pt.R)();
                return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
            }

            function Nt(t) {
                Rt().push(t)
            }
            var Dt = function() {
                return Dt = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, Dt.apply(this, arguments)
            };

            function At(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function Lt() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(At(arguments[e]));
                return t
            }
            var Mt = function(t, e) {
                    return Mt = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    }, Mt(t, e)
                },
                Ft = function() {
                    return Ft = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, Ft.apply(this, arguments)
                };

            function Bt(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Ut(t, e) {
                try {
                    for (var n = t, r = [], o = 0, i = 0, s = " > ".length, a = void 0; n && o++ < 5 && !("html" === (a = $t(n, e)) || o > 1 && i + r.length * s + a.length >= 80);) r.push(a), i += a.length, n = n.parentNode;
                    return r.reverse().join(" > ")
                } catch (t) {
                    return "<unknown>"
                }
            }

            function $t(t, e) {
                var n, r, o, i, s, a = t,
                    c = [];
                if (!a || !a.tagName) return "";
                c.push(a.tagName.toLowerCase());
                var u = e && e.length ? e.filter((function(t) {
                    return a.getAttribute(t)
                })).map((function(t) {
                    return [t, a.getAttribute(t)]
                })) : null;
                if (u && u.length) u.forEach((function(t) {
                    c.push("[" + t[0] + '="' + t[1] + '"]')
                }));
                else if (a.id && c.push("#" + a.id), (n = a.className) && _t(n))
                    for (r = n.split(/\s+/), s = 0; s < r.length; s++) c.push("." + r[s]);
                var l = ["type", "name", "title", "alt"];
                for (s = 0; s < l.length; s++) o = l[s], (i = a.getAttribute(o)) && c.push("[" + o + '="' + i + '"]');
                return c.join("")
            }
            var Ht = "<anonymous>";

            function Gt(t) {
                try {
                    return t && "function" == typeof t && t.name || Ht
                } catch (t) {
                    return Ht
                }
            }

            function qt(t, e) {
                return void 0 === e && (e = 0), "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
            }

            function Wt(t, e) {
                if (!Array.isArray(t)) return "";
                for (var n = [], r = 0; r < t.length; r++) {
                    var o = t[r];
                    try {
                        n.push(String(o))
                    } catch (t) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }

            function zt(t, e) {
                return !!_t(t) && (gt(e, "RegExp") ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
            }

            function Kt(t, e, n) {
                if (e in t) {
                    var r = t[e],
                        o = n(r);
                    if ("function" == typeof o) try {
                        Yt(o, r)
                    } catch (t) {}
                    t[e] = o
                }
            }

            function Vt(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n
                })
            }

            function Yt(t, e) {
                var n = e.prototype || {};
                t.prototype = e.prototype = n, Vt(t, "__sentry_original__", e)
            }

            function Jt(t) {
                return t.__sentry_original__
            }

            function Xt(t) {
                if (vt(t)) {
                    var e = t,
                        n = {
                            message: e.message,
                            name: e.name,
                            stack: e.stack
                        };
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }
                if (St(t)) {
                    var o = t,
                        i = {};
                    i.type = o.type;
                    try {
                        i.target = Et(o.target) ? Ut(o.target) : Object.prototype.toString.call(o.target)
                    } catch (t) {
                        i.target = "<unknown>"
                    }
                    try {
                        i.currentTarget = Et(o.currentTarget) ? Ut(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
                    } catch (t) {
                        i.currentTarget = "<unknown>"
                    }
                    for (var s in "undefined" != typeof CustomEvent && xt(t, CustomEvent) && (i.detail = o.detail), o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
                    return i
                }
                return t
            }

            function Qt(t, e, n) {
                void 0 === e && (e = 3), void 0 === n && (n = 102400);
                var r, o = ee(t, e);
                return r = o,
                    function(t) {
                        return ~-encodeURI(t).split(/%..|./).length
                    }(JSON.stringify(r)) > n ? Qt(t, e - 1, n) : o
            }

            function Zt(t, e) {
                return "domain" === e && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : void 0 !== n.g && t === n.g ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : wt(r = t) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + Gt(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : t;
                var r
            }

            function te(t, e, n, r) {
                var o, i;
                if (void 0 === n && (n = 1 / 0), void 0 === r && (o = "function" == typeof WeakSet, i = o ? new WeakSet : [], r = [function(t) {
                        if (o) return !!i.has(t) || (i.add(t), !1);
                        for (var e = 0; e < i.length; e++)
                            if (i[e] === t) return !0;
                        return i.push(t), !1
                    }, function(t) {
                        if (o) i.delete(t);
                        else
                            for (var e = 0; e < i.length; e++)
                                if (i[e] === t) {
                                    i.splice(e, 1);
                                    break
                                }
                    }]), 0 === n) return function(t) {
                    if ("string" == typeof t) return t;
                    var e = Object.prototype.toString.call(t);
                    if ("[object Object]" === e) return "[Object]";
                    if ("[object Array]" === e) return "[Array]";
                    var n = Zt(t);
                    return bt(n) ? n : e
                }(e);
                if (null != e && "function" == typeof e.toJSON) return e.toJSON();
                var s = Zt(e, t);
                if (bt(s)) return s;
                var a = Xt(e),
                    c = Array.isArray(e) ? [] : {};
                if (r[0](e)) return "[Circular ~]";
                for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (c[u] = te(u, a[u], n - 1, r));
                return r[1](e), c
            }

            function ee(t, e) {
                try {
                    return JSON.parse(JSON.stringify(t, (function(t, n) {
                        return te(t, n, e)
                    })))
                } catch (t) {
                    return "**non-serializable**"
                }
            }

            function ne(t, e) {
                void 0 === e && (e = 40);
                var n = Object.keys(Xt(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return qt(n[0], e);
                for (var r = n.length; r > 0; r--) {
                    var o = n.slice(0, r).join(", ");
                    if (!(o.length > e)) return r === n.length ? o : qt(o, e)
                }
                return ""
            }

            function re(t) {
                var e, n;
                if (wt(t)) {
                    var r = t,
                        o = {};
                    try {
                        for (var i = Bt(Object.keys(r)), s = i.next(); !s.done; s = i.next()) {
                            var a = s.value;
                            void 0 !== r[a] && (o[a] = re(r[a]))
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (n = i.return) && n.call(i)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return o
                }
                return Array.isArray(t) ? t.map(re) : t
            }

            function oe() {
                var t = (0, Pt.R)(),
                    e = t.crypto || t.msCrypto;
                if (void 0 !== e && e.getRandomValues) {
                    var n = new Uint16Array(8);
                    e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                    var r = function(t) {
                        for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                        return e
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                }))
            }

            function ie(t) {
                if (!t) return {};
                var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                var n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    relative: e[5] + n + r
                }
            }

            function se(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }

            function ae(t) {
                var e = t.message,
                    n = t.event_id;
                if (e) return e;
                var r = se(t);
                return r ? r.type && r.value ? r.type + ": " + r.value : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }

            function ce(t, e, n) {
                var r = t.exception = t.exception || {},
                    o = r.values = r.values || [],
                    i = o[0] = o[0] || {};
                i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
            }

            function ue(t, e) {
                var n = se(t);
                if (n) {
                    var r = n.mechanism;
                    if (n.mechanism = Ft(Ft(Ft({}, {
                            type: "generic",
                            handled: !0
                        }), r), e), e && "data" in e) {
                        var o = Ft(Ft({}, r && r.data), e.data);
                        n.mechanism.data = o
                    }
                }
            }

            function le(t) {
                if (t && t.__sentry_captured__) return !0;
                try {
                    Vt(t, "__sentry_captured__", !0)
                } catch (t) {}
                return !1
            }
            var pe = (0, Pt.R)(),
                fe = "Sentry Logger ";

            function de(t) {
                var e = (0, Pt.R)();
                if (!("console" in e)) return t();
                var n = e.console,
                    r = {};
                ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                    t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
                }));
                var o = t();
                return Object.keys(r).forEach((function(t) {
                    n[t] = r[t]
                })), o
            }
            var he = function() {
                function t() {
                    this._enabled = !1
                }
                return t.prototype.disable = function() {
                    this._enabled = !1
                }, t.prototype.enable = function() {
                    this._enabled = !0
                }, t.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._enabled && de((function() {
                        pe.console.log(fe + "[Log]: " + t.join(" "))
                    }))
                }, t.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._enabled && de((function() {
                        pe.console.warn(fe + "[Warn]: " + t.join(" "))
                    }))
                }, t.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._enabled && de((function() {
                        pe.console.error(fe + "[Error]: " + t.join(" "))
                    }))
                }, t
            }();
            pe.__SENTRY__ = pe.__SENTRY__ || {};
            var ve = pe.__SENTRY__.logger || (pe.__SENTRY__.logger = new he),
                ge = n(1422),
                ye = function() {
                    function t(t) {
                        this.errors = 0, this.sid = oe(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                        var e = (0, Tt.ph)();
                        this.timestamp = e, this.started = e, t && this.update(t)
                    }
                    return t.prototype.update = function(t) {
                        if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || (0, Tt.ph)(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), t.sid && (this.sid = 32 === t.sid.length ? t.sid : oe()), void 0 !== t.init && (this.init = t.init), !this.did && t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), this.ignoreDuration) this.duration = void 0;
                        else if ("number" == typeof t.duration) this.duration = t.duration;
                        else {
                            var e = this.timestamp - this.started;
                            this.duration = e >= 0 ? e : 0
                        }
                        t.release && (this.release = t.release), t.environment && (this.environment = t.environment), !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent && t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                    }, t.prototype.close = function(t) {
                        t ? this.update({
                            status: t
                        }) : "ok" === this.status ? this.update({
                            status: "exited"
                        }) : this.update()
                    }, t.prototype.toJSON = function() {
                        return re({
                            sid: "" + this.sid,
                            init: this.init,
                            started: new Date(1e3 * this.started).toISOString(),
                            timestamp: new Date(1e3 * this.timestamp).toISOString(),
                            status: this.status,
                            errors: this.errors,
                            did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                            duration: this.duration,
                            attrs: {
                                release: this.release,
                                environment: this.environment,
                                ip_address: this.ipAddress,
                                user_agent: this.userAgent
                            }
                        })
                    }, t
                }(),
                me = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = new It), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = e, t && this.bindClient(t)
                    }
                    return t.prototype.isOlderThan = function(t) {
                        return this._version < t
                    }, t.prototype.bindClient = function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }, t.prototype.pushScope = function() {
                        var t = It.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }, t.prototype.popScope = function() {
                        return !(this.getStack().length <= 1 || !this.getStack().pop())
                    }, t.prototype.withScope = function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }, t.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, t.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, t.prototype.getStack = function() {
                        return this._stack
                    }, t.prototype.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, t.prototype.captureException = function(t, e) {
                        var n = this._lastEventId = oe(),
                            r = e;
                        if (!e) {
                            var o = void 0;
                            try {
                                throw new Error("Sentry syntheticException")
                            } catch (t) {
                                o = t
                            }
                            r = {
                                originalException: t,
                                syntheticException: o
                            }
                        }
                        return this._invokeClient("captureException", t, pt(pt({}, r), {
                            event_id: n
                        })), n
                    }, t.prototype.captureMessage = function(t, e, n) {
                        var r = this._lastEventId = oe(),
                            o = n;
                        if (!n) {
                            var i = void 0;
                            try {
                                throw new Error(t)
                            } catch (t) {
                                i = t
                            }
                            o = {
                                originalException: t,
                                syntheticException: i
                            }
                        }
                        return this._invokeClient("captureMessage", t, e, pt(pt({}, o), {
                            event_id: r
                        })), r
                    }, t.prototype.captureEvent = function(t, e) {
                        var n = oe();
                        return "transaction" !== t.type && (this._lastEventId = n), this._invokeClient("captureEvent", t, pt(pt({}, e), {
                            event_id: n
                        })), n
                    }, t.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = this.getStackTop(),
                            r = n.scope,
                            o = n.client;
                        if (r && o) {
                            var i = o.getOptions && o.getOptions() || {},
                                s = i.beforeBreadcrumb,
                                a = void 0 === s ? null : s,
                                c = i.maxBreadcrumbs,
                                u = void 0 === c ? 100 : c;
                            if (!(u <= 0)) {
                                var l = (0, Tt.yW)(),
                                    p = pt({
                                        timestamp: l
                                    }, t),
                                    f = a ? de((function() {
                                        return a(p, e)
                                    })) : p;
                                null !== f && r.addBreadcrumb(f, u)
                            }
                        }
                    }, t.prototype.setUser = function(t) {
                        var e = this.getScope();
                        e && e.setUser(t)
                    }, t.prototype.setTags = function(t) {
                        var e = this.getScope();
                        e && e.setTags(t)
                    }, t.prototype.setExtras = function(t) {
                        var e = this.getScope();
                        e && e.setExtras(t)
                    }, t.prototype.setTag = function(t, e) {
                        var n = this.getScope();
                        n && n.setTag(t, e)
                    }, t.prototype.setExtra = function(t, e) {
                        var n = this.getScope();
                        n && n.setExtra(t, e)
                    }, t.prototype.setContext = function(t, e) {
                        var n = this.getScope();
                        n && n.setContext(t, e)
                    }, t.prototype.configureScope = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client;
                        n && r && t(n)
                    }, t.prototype.run = function(t) {
                        var e = be(this);
                        try {
                            t(this)
                        } finally {
                            be(e)
                        }
                    }, t.prototype.getIntegration = function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (e) {
                            return ve.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, t.prototype.startSpan = function(t) {
                        return this._callExtensionMethod("startSpan", t)
                    }, t.prototype.startTransaction = function(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }, t.prototype.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, t.prototype.captureSession = function(t) {
                        if (void 0 === t && (t = !1), t) return this.endSession();
                        this._sendSessionUpdate()
                    }, t.prototype.endSession = function() {
                        var t = this.getStackTop(),
                            e = t && t.scope,
                            n = e && e.getSession();
                        n && n.close(), this._sendSessionUpdate(), e && e.setSession()
                    }, t.prototype.startSession = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client,
                            o = r && r.getOptions() || {},
                            i = o.release,
                            s = o.environment,
                            a = ((0, Pt.R)().navigator || {}).userAgent,
                            c = new ye(pt(pt(pt({
                                release: i,
                                environment: s
                            }, n && {
                                user: n.getUser()
                            }), a && {
                                userAgent: a
                            }), t));
                        if (n) {
                            var u = n.getSession && n.getSession();
                            u && "ok" === u.status && u.update({
                                status: "exited"
                            }), this.endSession(), n.setSession(c)
                        }
                        return c
                    }, t.prototype._sendSessionUpdate = function() {
                        var t = this.getStackTop(),
                            e = t.scope,
                            n = t.client;
                        if (e) {
                            var r = e.getSession && e.getSession();
                            r && n && n.captureSession && n.captureSession(r)
                        }
                    }, t.prototype._invokeClient = function(t) {
                        for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.getStackTop(),
                            i = o.scope,
                            s = o.client;
                        s && s[t] && (e = s)[t].apply(e, dt(n, [i]))
                    }, t.prototype._callExtensionMethod = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = _e(),
                            o = r.__SENTRY__;
                        if (o && o.extensions && "function" == typeof o.extensions[t]) return o.extensions[t].apply(this, e);
                        ve.warn("Extension method " + t + " couldn't be found, doing nothing.")
                    }, t
                }();

            function _e() {
                var t = (0, Pt.R)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function be(t) {
                var e = _e(),
                    n = Ee(e);
                return Oe(e, t), n
            }

            function we() {
                var t = _e();
                return Se(t) && !Ee(t).isOlderThan(4) || Oe(t, new me), (0, ge.KV)() ? function(t) {
                    try {
                        var e = _e().__SENTRY__,
                            n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                        if (!n) return Ee(t);
                        if (!Se(n) || Ee(n).isOlderThan(4)) {
                            var r = Ee(t).getStackTop();
                            Oe(n, new me(r.client, It.clone(r.scope)))
                        }
                        return Ee(n)
                    } catch (e) {
                        return Ee(t)
                    }
                }(t) : Ee(t)
            }

            function Se(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function Ee(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new me), t.__SENTRY__.hub
            }

            function Oe(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
            }

            function xe(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = we();
                if (r && r[t]) return r[t].apply(r, Lt(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
            }

            function Te(t, e) {
                var n;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    n = t
                }
                return xe("captureException", t, {
                    captureContext: e,
                    originalException: t,
                    syntheticException: n
                })
            }

            function ke(t, e) {
                var n;
                try {
                    throw new Error(t)
                } catch (t) {
                    n = t
                }
                return xe("captureMessage", t, "string" == typeof e ? e : void 0, Dt({
                    originalException: t,
                    syntheticException: n
                }, "string" != typeof e ? {
                    captureContext: e
                } : void 0))
            }

            function Ce(t) {
                return xe("captureEvent", t)
            }

            function je(t) {
                xe("configureScope", t)
            }

            function Pe(t) {
                xe("addBreadcrumb", t)
            }

            function Ie(t, e) {
                xe("setContext", t, e)
            }

            function Re(t) {
                xe("setExtras", t)
            }

            function Ne(t) {
                xe("setTags", t)
            }

            function De(t, e) {
                xe("setExtra", t, e)
            }

            function Ae(t, e) {
                xe("setTag", t, e)
            }

            function Le(t) {
                xe("setUser", t)
            }

            function Me(t) {
                xe("withScope", t)
            }

            function Fe(t, e) {
                return xe("startTransaction", Dt({}, t), e)
            }
            var Be = "6.17.1",
                Ue = function() {
                    return Ue = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, Ue.apply(this, arguments)
                };

            function $e(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function He() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat($e(arguments[e]));
                return t
            }
            var Ge = n(8518),
                qe = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array ? function(t, e) {
                        return t.__proto__ = e, t
                    } : function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
                        return t
                    }),
                We = function(t) {
                    function e(e) {
                        var n = this.constructor,
                            r = t.call(this, e) || this;
                        return r.message = e, r.name = n.prototype.constructor.name, qe(r, n.prototype), r
                    }
                    return function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        Mt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }(e, t), e
                }(Error),
                ze = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function Ke(t, e) {
                void 0 === e && (e = !1);
                var n = t.host,
                    r = t.path,
                    o = t.pass,
                    i = t.port,
                    s = t.projectId;
                return t.protocol + "://" + t.publicKey + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + s
            }

            function Ve(t) {
                return "user" in t && !("publicKey" in t) && (t.publicKey = t.user), {
                    user: t.publicKey || "",
                    protocol: t.protocol,
                    publicKey: t.publicKey || "",
                    pass: t.pass || "",
                    host: t.host,
                    port: t.port || "",
                    path: t.path || "",
                    projectId: t.projectId
                }
            }

            function Ye(t) {
                var e = "string" == typeof t ? function(t) {
                    var e = ze.exec(t);
                    if (!e) throw new We("Invalid Sentry Dsn: " + t);
                    var n = function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var r, o, i = n.call(t),
                                s = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                            } catch (t) {
                                o = {
                                    error: t
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return s
                        }(e.slice(1), 6),
                        r = n[0],
                        o = n[1],
                        i = n[2],
                        s = void 0 === i ? "" : i,
                        a = n[3],
                        c = n[4],
                        u = void 0 === c ? "" : c,
                        l = "",
                        p = n[5],
                        f = p.split("/");
                    if (f.length > 1 && (l = f.slice(0, -1).join("/"), p = f.pop()), p) {
                        var d = p.match(/^\d+/);
                        d && (p = d[0])
                    }
                    return Ve({
                        host: a,
                        pass: s,
                        path: l,
                        projectId: p,
                        port: u,
                        protocol: r,
                        publicKey: o
                    })
                }(t) : Ve(t);
                return function(t) {
                    if ((0, Ge.c)()) {
                        var e = t.port,
                            n = t.projectId,
                            r = t.protocol;
                        if (["protocol", "publicKey", "host", "projectId"].forEach((function(e) {
                                if (!t[e]) throw new We("Invalid Sentry Dsn: " + e + " missing")
                            })), !n.match(/^\d+$/)) throw new We("Invalid Sentry Dsn: Invalid projectId " + n);
                        if (! function(t) {
                                return "http" === t || "https" === t
                            }(r)) throw new We("Invalid Sentry Dsn: Invalid protocol " + r);
                        if (e && isNaN(parseInt(e, 10))) throw new We("Invalid Sentry Dsn: Invalid port " + e)
                    }
                }(e), e
            }
            var Je = [];

            function Xe(t) {
                return t.reduce((function(t, e) {
                    return t.every((function(t) {
                        return e.name !== t.name
                    })) && t.push(e), t
                }), [])
            }
            var Qe = "Not capturing exception because it's already been captured.",
                Ze = function() {
                    function t(t, e) {
                        this._integrations = {}, this._numProcessing = 0, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = Ye(e.dsn))
                    }
                    return t.prototype.captureException = function(t, e, n) {
                        var r = this;
                        if (!le(t)) {
                            var o = e && e.event_id;
                            return this._process(this._getBackend().eventFromException(t, e).then((function(t) {
                                return r._captureEvent(t, e, n)
                            })).then((function(t) {
                                o = t
                            }))), o
                        }
                        ve.log(Qe)
                    }, t.prototype.captureMessage = function(t, e, n, r) {
                        var o = this,
                            i = n && n.event_id,
                            s = bt(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
                        return this._process(s.then((function(t) {
                            return o._captureEvent(t, n, r)
                        })).then((function(t) {
                            i = t
                        }))), i
                    }, t.prototype.captureEvent = function(t, e, n) {
                        if (!(e && e.originalException && le(e.originalException))) {
                            var r = e && e.event_id;
                            return this._process(this._captureEvent(t, e, n).then((function(t) {
                                r = t
                            }))), r
                        }
                        ve.log(Qe)
                    }, t.prototype.captureSession = function(t) {
                        this._isEnabled() ? "string" != typeof t.release ? (0, Ge.c)() && ve.warn("Discarded session because of missing or non-string release") : (this._sendSession(t), t.update({
                            init: !1
                        })) : (0, Ge.c)() && ve.warn("SDK not enabled, will not capture session.")
                    }, t.prototype.getDsn = function() {
                        return this._dsn
                    }, t.prototype.getOptions = function() {
                        return this._options
                    }, t.prototype.getTransport = function() {
                        return this._getBackend().getTransport()
                    }, t.prototype.flush = function(t) {
                        var e = this;
                        return this._isClientDoneProcessing(t).then((function(n) {
                            return e.getTransport().close(t).then((function(t) {
                                return n && t
                            }))
                        }))
                    }, t.prototype.close = function(t) {
                        var e = this;
                        return this.flush(t).then((function(t) {
                            return e.getOptions().enabled = !1, t
                        }))
                    }, t.prototype.setupIntegrations = function() {
                        var t, e;
                        this._isEnabled() && !this._integrations.initialized && (this._integrations = (t = this._options, e = {}, function(t) {
                            var e = t.defaultIntegrations && He(t.defaultIntegrations) || [],
                                n = t.integrations,
                                r = He(Xe(e));
                            Array.isArray(n) ? r = He(r.filter((function(t) {
                                return n.every((function(e) {
                                    return e.name !== t.name
                                }))
                            })), Xe(n)) : "function" == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
                            var o = r.map((function(t) {
                                    return t.name
                                })),
                                i = "Debug";
                            return -1 !== o.indexOf(i) && r.push.apply(r, He(r.splice(o.indexOf(i), 1))), r
                        }(t).forEach((function(t) {
                            e[t.name] = t,
                                function(t) {
                                    -1 === Je.indexOf(t.name) && (t.setupOnce(Nt, we), Je.push(t.name), ve.log("Integration installed: " + t.name))
                                }(t)
                        })), Vt(e, "initialized", !0), e))
                    }, t.prototype.getIntegration = function(t) {
                        try {
                            return this._integrations[t.id] || null
                        } catch (e) {
                            return ve.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                        }
                    }, t.prototype._updateSessionFromEvent = function(t, e) {
                        var n, r, o = !1,
                            i = !1,
                            s = e.exception && e.exception.values;
                        if (s) {
                            i = !0;
                            try {
                                for (var a = function(t) {
                                        var e = "function" == typeof Symbol && Symbol.iterator,
                                            n = e && t[e],
                                            r = 0;
                                        if (n) return n.call(t);
                                        if (t && "number" == typeof t.length) return {
                                            next: function() {
                                                return t && r >= t.length && (t = void 0), {
                                                    value: t && t[r++],
                                                    done: !t
                                                }
                                            }
                                        };
                                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                                    }(s), c = a.next(); !c.done; c = a.next()) {
                                    var u = c.value.mechanism;
                                    if (u && !1 === u.handled) {
                                        o = !0;
                                        break
                                    }
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    c && !c.done && (r = a.return) && r.call(a)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        var l = "ok" === t.status;
                        (l && 0 === t.errors || l && o) && (t.update(Ue(Ue({}, o && {
                            status: "crashed"
                        }), {
                            errors: t.errors || Number(i || o)
                        })), this.captureSession(t))
                    }, t.prototype._sendSession = function(t) {
                        this._getBackend().sendSession(t)
                    }, t.prototype._isClientDoneProcessing = function(t) {
                        var e = this;
                        return new jt((function(n) {
                            var r = 0,
                                o = setInterval((function() {
                                    0 == e._numProcessing ? (clearInterval(o), n(!0)) : (r += 1, t && r >= t && (clearInterval(o), n(!1)))
                                }), 1)
                        }))
                    }, t.prototype._getBackend = function() {
                        return this._backend
                    }, t.prototype._isEnabled = function() {
                        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                    }, t.prototype._prepareEvent = function(t, e, n) {
                        var r = this,
                            o = this.getOptions().normalizeDepth,
                            i = void 0 === o ? 3 : o,
                            s = Ue(Ue({}, t), {
                                event_id: t.event_id || (n && n.event_id ? n.event_id : oe()),
                                timestamp: t.timestamp || (0, Tt.yW)()
                            });
                        this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
                        var a = e;
                        n && n.captureContext && (a = It.clone(a).update(n.captureContext));
                        var c = kt(s);
                        return a && (c = a.applyToEvent(s, n)), c.then((function(t) {
                            return "number" == typeof i && i > 0 ? r._normalizeEvent(t, i) : t
                        }))
                    }, t.prototype._normalizeEvent = function(t, e) {
                        if (!t) return null;
                        var n = Ue(Ue(Ue(Ue(Ue({}, t), t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map((function(t) {
                                return Ue(Ue({}, t), t.data && {
                                    data: ee(t.data, e)
                                })
                            }))
                        }), t.user && {
                            user: ee(t.user, e)
                        }), t.contexts && {
                            contexts: ee(t.contexts, e)
                        }), t.extra && {
                            extra: ee(t.extra, e)
                        });
                        return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), t.sdkProcessingMetadata = Ue(Ue({}, t.sdkProcessingMetadata), {
                            baseClientNormalized: !0
                        }), n
                    }, t.prototype._applyClientOptions = function(t) {
                        var e = this.getOptions(),
                            n = e.environment,
                            r = e.release,
                            o = e.dist,
                            i = e.maxValueLength,
                            s = void 0 === i ? 250 : i;
                        "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = qt(t.message, s));
                        var a = t.exception && t.exception.values && t.exception.values[0];
                        a && a.value && (a.value = qt(a.value, s));
                        var c = t.request;
                        c && c.url && (c.url = qt(c.url, s))
                    }, t.prototype._applyIntegrationsMetadata = function(t) {
                        var e = Object.keys(this._integrations);
                        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = He(t.sdk.integrations || [], e))
                    }, t.prototype._sendEvent = function(t) {
                        this._getBackend().sendEvent(t)
                    }, t.prototype._captureEvent = function(t, e, n) {
                        return this._processEvent(t, e, n).then((function(t) {
                            return t.event_id
                        }), (function(t) {
                            ve.error(t)
                        }))
                    }, t.prototype._processEvent = function(t, e, n) {
                        var r = this,
                            o = this.getOptions(),
                            i = o.beforeSend,
                            s = o.sampleRate,
                            a = this.getTransport();

                        function c(t, e) {
                            a.recordLostEvent && a.recordLostEvent(t, e)
                        }
                        if (!this._isEnabled()) return Ct(new We("SDK not enabled, will not capture event."));
                        var u = "transaction" === t.type;
                        return !u && "number" == typeof s && Math.random() > s ? (c("sample_rate", "event"), Ct(new We("Discarding event because it's not included in the random sample (sampling rate = " + s + ")"))) : this._prepareEvent(t, n, e).then((function(n) {
                            if (null === n) throw c("event_processor", t.type || "event"), new We("An event processor returned null, will not send event.");
                            return e && e.data && !0 === e.data.__sentry__ || u || !i ? n : function(t) {
                                var e = "`beforeSend` method has to return `null` or a valid event.";
                                if (Ot(t)) return t.then((function(t) {
                                    if (!wt(t) && null !== t) throw new We(e);
                                    return t
                                }), (function(t) {
                                    throw new We("beforeSend rejected with " + t)
                                }));
                                if (!wt(t) && null !== t) throw new We(e);
                                return t
                            }(i(n, e))
                        })).then((function(e) {
                            if (null === e) throw c("before_send", t.type || "event"), new We("`beforeSend` returned `null`, will not send event.");
                            var o = n && n.getSession && n.getSession();
                            return !u && o && r._updateSessionFromEvent(o, e), r._sendEvent(e), e
                        })).then(null, (function(t) {
                            if (t instanceof We) throw t;
                            throw r.captureException(t, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: t
                            }), new We("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                        }))
                    }, t.prototype._process = function(t) {
                        var e = this;
                        this._numProcessing += 1, t.then((function(t) {
                            return e._numProcessing -= 1, t
                        }), (function(t) {
                            return e._numProcessing -= 1, t
                        }))
                    }, t
                }(),
                tn = function() {
                    function t() {}
                    return t.prototype.sendEvent = function(t) {
                        return kt({
                            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                            status: "skipped"
                        })
                    }, t.prototype.close = function(t) {
                        return kt(!0)
                    }, t
                }(),
                en = function() {
                    function t(t) {
                        this._options = t, this._options.dsn || ve.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                    }
                    return t.prototype.eventFromException = function(t, e) {
                        throw new We("Backend has to implement `eventFromException` method")
                    }, t.prototype.eventFromMessage = function(t, e, n) {
                        throw new We("Backend has to implement `eventFromMessage` method")
                    }, t.prototype.sendEvent = function(t) {
                        this._transport.sendEvent(t).then(null, (function(t) {
                            (0, Ge.c)() && ve.error("Error while sending event: " + t)
                        }))
                    }, t.prototype.sendSession = function(t) {
                        this._transport.sendSession ? this._transport.sendSession(t).then(null, (function(t) {
                            (0, Ge.c)() && ve.error("Error while sending session: " + t)
                        })) : (0, Ge.c)() && ve.warn("Dropping session because custom transport doesn't implement sendSession")
                    }, t.prototype.getTransport = function() {
                        return this._transport
                    }, t.prototype._setupTransport = function() {
                        return new tn
                    }, t
                }();

            function nn() {
                if (!("fetch" in (0, Pt.R)())) return !1;
                try {
                    return new Headers, new Request(""), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function rn(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function on() {
                if (!nn()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (t) {
                    return !1
                }
            }
            var sn = "?",
                an = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                cn = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                un = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                ln = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                pn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                fn = /Minified React error #\d+;/i;

            function dn(t) {
                var e = null,
                    n = 0;
                t && ("number" == typeof t.framesToPop ? n = t.framesToPop : fn.test(t.message) && (n = 1));
                try {
                    if (e = function(t) {
                            if (!t || !t.stacktrace) return null;
                            for (var e, n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = t.stacktrace.split("\n"), i = [], s = 0; s < o.length; s += 2) {
                                var a = null;
                                (e = n.exec(o[s])) ? a = {
                                    url: e[2],
                                    func: e[3],
                                    args: [],
                                    line: +e[1],
                                    column: null
                                }: (e = r.exec(o[s])) && (a = {
                                    url: e[6],
                                    func: e[3] || e[4],
                                    args: e[5] ? e[5].split(",") : [],
                                    line: +e[1],
                                    column: +e[2]
                                }), a && (!a.func && a.line && (a.func = sn), i.push(a))
                            }
                            return i.length ? {
                                message: gn(t),
                                name: t.name,
                                stack: i
                            } : null
                        }(t), e) return vn(e, n)
                } catch (t) {}
                try {
                    if (e = function(t) {
                            var e, n;
                            if (!t || !t.stack) return null;
                            for (var r, o, i, s = [], a = t.stack.split("\n"), c = 0; c < a.length; ++c) {
                                if (o = an.exec(a[c])) {
                                    var u = o[2] && 0 === o[2].indexOf("native");
                                    o[2] && 0 === o[2].indexOf("eval") && (r = pn.exec(o[2])) && (o[2] = r[1], o[3] = r[2], o[4] = r[3]);
                                    var l = o[2] && 0 === o[2].indexOf("address at ") ? o[2].substr("address at ".length) : o[2],
                                        p = o[1] || sn;
                                    p = (e = ct(hn(p, l), 2))[0], i = {
                                        url: l = e[1],
                                        func: p,
                                        args: u ? [o[2]] : [],
                                        line: o[3] ? +o[3] : null,
                                        column: o[4] ? +o[4] : null
                                    }
                                } else if (o = un.exec(a[c])) i = {
                                    url: o[2],
                                    func: o[1] || sn,
                                    args: [],
                                    line: +o[3],
                                    column: o[4] ? +o[4] : null
                                };
                                else {
                                    if (!(o = cn.exec(a[c]))) continue;
                                    o[3] && o[3].indexOf(" > eval") > -1 && (r = ln.exec(o[3])) ? (o[1] = o[1] || "eval", o[3] = r[1], o[4] = r[2], o[5] = "") : 0 !== c || o[5] || void 0 === t.columnNumber || (s[0].column = t.columnNumber + 1), l = o[3], p = o[1] || sn, p = (n = ct(hn(p, l), 2))[0], i = {
                                        url: l = n[1],
                                        func: p,
                                        args: o[2] ? o[2].split(",") : [],
                                        line: o[4] ? +o[4] : null,
                                        column: o[5] ? +o[5] : null
                                    }
                                }!i.func && i.line && (i.func = sn), s.push(i)
                            }
                            return s.length ? {
                                message: gn(t),
                                name: t.name,
                                stack: s
                            } : null
                        }(t), e) return vn(e, n)
                } catch (t) {}
                return {
                    message: gn(t),
                    name: t && t.name,
                    stack: [],
                    failed: !0
                }
            }
            var hn = function(t, e) {
                var n = -1 !== t.indexOf("safari-extension"),
                    r = -1 !== t.indexOf("safari-web-extension");
                return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : sn, n ? "safari-extension:" + e : "safari-web-extension:" + e] : [t, e]
            };

            function vn(t, e) {
                try {
                    return st(st({}, t), {
                        stack: t.stack.slice(e)
                    })
                } catch (e) {
                    return t
                }
            }

            function gn(t) {
                var e = t && t.message;
                return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
            }

            function yn(t) {
                var e = _n(t.stack),
                    n = {
                        type: t.name,
                        value: t.message
                    };
                return e && e.length && (n.stacktrace = {
                    frames: e
                }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
            }

            function mn(t) {
                return {
                    exception: {
                        values: [yn(t)]
                    }
                }
            }

            function _n(t) {
                if (!t || !t.length) return [];
                var e = t,
                    n = e[0].func || "",
                    r = e[e.length - 1].func || "";
                return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, 50).map((function(t) {
                    return {
                        colno: null === t.column ? void 0 : t.column,
                        filename: t.url || e[0].url,
                        function: t.func || "?",
                        in_app: !0,
                        lineno: null === t.line ? void 0 : t.line
                    }
                })).reverse()
            }

            function bn(t, e, n) {
                var r = Sn(e, n && n.syntheticException || void 0, {
                    attachStacktrace: t.attachStacktrace
                });
                return ue(r), r.level = it.Error, n && n.event_id && (r.event_id = n.event_id), kt(r)
            }

            function wn(t, e, n, r) {
                void 0 === n && (n = it.Info);
                var o = En(e, r && r.syntheticException || void 0, {
                    attachStacktrace: t.attachStacktrace
                });
                return o.level = n, r && r.event_id && (o.event_id = r.event_id), kt(o)
            }

            function Sn(t, e, n) {
                var r;
                if (void 0 === n && (n = {}), yt(t) && t.error) return mn(dn(t = t.error));
                if (mt(t) || gt(t, "DOMException")) {
                    var o = t;
                    if ("stack" in t) r = mn(dn(t));
                    else {
                        var i = o.name || (mt(o) ? "DOMError" : "DOMException"),
                            s = o.message ? i + ": " + o.message : i;
                        ce(r = En(s, e, n), s)
                    }
                    return "code" in o && (r.tags = st(st({}, r.tags), {
                        "DOMException.code": "" + o.code
                    })), r
                }
                return vt(t) ? r = mn(dn(t)) : wt(t) || St(t) ? (r = function(t, e, n) {
                    var r = {
                        exception: {
                            values: [{
                                type: St(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                                value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + ne(t)
                            }]
                        },
                        extra: {
                            __serialized__: Qt(t)
                        }
                    };
                    if (e) {
                        var o = _n(dn(e).stack);
                        r.stacktrace = {
                            frames: o
                        }
                    }
                    return r
                }(t, e, n.isRejection), ue(r, {
                    synthetic: !0
                }), r) : (ce(r = En(t, e, n), "" + t, void 0), ue(r, {
                    synthetic: !0
                }), r)
            }

            function En(t, e, n) {
                void 0 === n && (n = {});
                var r = {
                    message: t
                };
                if (n.attachStacktrace && e) {
                    var o = _n(dn(e).stack);
                    r.stacktrace = {
                        frames: o
                    }
                }
                return r
            }

            function On(t) {
                var e = t.protocol ? t.protocol + ":" : "",
                    n = t.port ? ":" + t.port : "";
                return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
            }

            function xn(t, e) {
                return "" + On(t) + t.projectId + "/" + e + "/"
            }

            function Tn(t) {
                return e = {
                    sentry_key: t.publicKey,
                    sentry_version: "7"
                }, Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                })).join("&");
                var e
            }

            function kn(t) {
                return xn(t, "store")
            }

            function Cn(t) {
                return kn(t) + "?" + Tn(t)
            }

            function jn(t, e) {
                return e || function(t) {
                    return xn(t, "envelope")
                }(t) + "?" + Tn(t)
            }

            function Pn(t) {
                if (t.metadata && t.metadata.sdk) {
                    var e = t.metadata.sdk;
                    return {
                        name: e.name,
                        version: e.version
                    }
                }
            }! function() {
                function t(t, e, n) {
                    void 0 === e && (e = {}), this.dsn = t, this._dsnObject = Ye(t), this.metadata = e, this._tunnel = n
                }
                t.prototype.getDsn = function() {
                    return this._dsnObject
                }, t.prototype.forceEnvelope = function() {
                    return !!this._tunnel
                }, t.prototype.getBaseApiEndpoint = function() {
                    return On(this._dsnObject)
                }, t.prototype.getStoreEndpoint = function() {
                    return kn(this._dsnObject)
                }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                    return Cn(this._dsnObject)
                }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                    return jn(this._dsnObject, this._tunnel)
                }
            }();
            var In, Rn = (0, Pt.R)();

            function Nn() {
                if (In) return In;
                if (rn(Rn.fetch)) return In = Rn.fetch.bind(Rn);
                var t = Rn.document,
                    e = Rn.fetch;
                if (t && "function" == typeof t.createElement) try {
                    var n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    var r = n.contentWindow;
                    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
                } catch (t) {
                    (0, Ge.c)() && ve.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return In = e.bind(Rn)
            }

            function Dn(t) {
                return "event" === t ? "error" : t
            }
            var An = (0, Pt.R)(),
                Ln = function() {
                    function t(t) {
                        var e, n, r, o = this;
                        this.options = t, this._buffer = function(t) {
                            var e = [];

                            function n(t) {
                                return e.splice(e.indexOf(t), 1)[0]
                            }
                            return {
                                $: e,
                                add: function(r) {
                                    if (!(void 0 === t || e.length < t)) return Ct(new We("Not adding Promise due to buffer limit reached."));
                                    var o = r();
                                    return -1 === e.indexOf(o) && e.push(o), o.then((function() {
                                        return n(o)
                                    })).then(null, (function() {
                                        return n(o).then(null, (function() {}))
                                    })), o
                                },
                                drain: function(t) {
                                    return new jt((function(n, r) {
                                        var o = e.length;
                                        if (!o) return n(!0);
                                        var i = setTimeout((function() {
                                            t && t > 0 && n(!1)
                                        }), t);
                                        e.forEach((function(t) {
                                            kt(t).then((function() {
                                                --o || (clearTimeout(i), n(!0))
                                            }), r)
                                        }))
                                    }))
                                }
                            }
                        }(30), this._rateLimits = {}, this._outcomes = {}, this._api = (e = t.dsn, n = t._metadata, r = t.tunnel, {
                            initDsn: e,
                            metadata: n || {},
                            dsn: Ye(e),
                            tunnel: r
                        }), this.url = Cn(this._api.dsn), this.options.sendClientReports && An.document && An.document.addEventListener("visibilitychange", (function() {
                            "hidden" === An.document.visibilityState && o._flushOutcomes()
                        }))
                    }
                    return t.prototype.sendEvent = function(t) {
                        return this._sendRequest(function(t, e) {
                            var n, r = Pn(e),
                                o = t.type || "event",
                                i = "transaction" === o || !!e.tunnel,
                                s = (t.sdkProcessingMetadata || {}).transactionSampling || {},
                                a = s.method,
                                c = s.rate;
                            ! function(t, e) {
                                e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = He(t.sdk.integrations || [], e.integrations || []), t.sdk.packages = He(t.sdk.packages || [], e.packages || []))
                            }(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0), delete t.sdkProcessingMetadata;
                            try {
                                n = JSON.stringify(t)
                            } catch (e) {
                                t.tags.JSONStringifyError = !0, t.extra.JSONStringifyError = e;
                                try {
                                    n = JSON.stringify(ee(t))
                                } catch (t) {
                                    var u = t;
                                    n = JSON.stringify({
                                        message: "JSON.stringify error after renormalization",
                                        extra: {
                                            message: u.message,
                                            stack: u.stack
                                        }
                                    })
                                }
                            }
                            var l = {
                                body: n,
                                type: o,
                                url: i ? jn(e.dsn, e.tunnel) : Cn(e.dsn)
                            };
                            if (i) {
                                var p = JSON.stringify(Ue(Ue({
                                    event_id: t.event_id,
                                    sent_at: (new Date).toISOString()
                                }, r && {
                                    sdk: r
                                }), !!e.tunnel && {
                                    dsn: Ke(e.dsn)
                                })) + "\n" + JSON.stringify({
                                    type: o,
                                    sample_rates: [{
                                        id: a,
                                        rate: c
                                    }]
                                }) + "\n" + l.body;
                                l.body = p
                            }
                            return l
                        }(t, this._api), t)
                    }, t.prototype.sendSession = function(t) {
                        return this._sendRequest(function(t, e) {
                            var n = Pn(e),
                                r = "aggregates" in t ? "sessions" : "session";
                            return {
                                body: JSON.stringify(Ue(Ue({
                                    sent_at: (new Date).toISOString()
                                }, n && {
                                    sdk: n
                                }), !!e.tunnel && {
                                    dsn: Ke(e.dsn)
                                })) + "\n" + JSON.stringify({
                                    type: r
                                }) + "\n" + JSON.stringify(t),
                                type: r,
                                url: jn(e.dsn, e.tunnel)
                            }
                        }(t, this._api), t)
                    }, t.prototype.close = function(t) {
                        return this._buffer.drain(t)
                    }, t.prototype.recordLostEvent = function(t, e) {
                        var n;
                        if (this.options.sendClientReports) {
                            var r = Dn(e) + ":" + t;
                            ve.log("Adding outcome: " + r), this._outcomes[r] = (null != (n = this._outcomes[r]) ? n : 0) + 1
                        }
                    }, t.prototype._flushOutcomes = function() {
                        if (this.options.sendClientReports) {
                            var t = this._outcomes;
                            if (this._outcomes = {}, Object.keys(t).length) {
                                ve.log("Flushing outcomes:\n" + JSON.stringify(t, null, 2));
                                var e = jn(this._api.dsn, this._api.tunnel),
                                    n = JSON.stringify(st({}, this._api.tunnel && {
                                        dsn: Ke(this._api.dsn)
                                    })) + "\n" + JSON.stringify({
                                        type: "client_report"
                                    }) + "\n" + JSON.stringify({
                                        timestamp: (0, Tt.yW)(),
                                        discarded_events: Object.keys(t).map((function(e) {
                                            var n = ct(e.split(":"), 2),
                                                r = n[0];
                                            return {
                                                reason: n[1],
                                                category: r,
                                                quantity: t[e]
                                            }
                                        }))
                                    });
                                try {
                                    ! function(t, e) {
                                        if ("[object Navigator]" === Object.prototype.toString.call(Rn && Rn.navigator) && "function" == typeof Rn.navigator.sendBeacon) return Rn.navigator.sendBeacon.bind(Rn.navigator)(t, e);
                                        nn() && Nn()(t, {
                                            body: e,
                                            method: "POST",
                                            credentials: "omit",
                                            keepalive: !0
                                        }).then(null, (function(t) {
                                            console.error(t)
                                        }))
                                    }(e, n)
                                } catch (t) {
                                    ve.error(t)
                                }
                            } else ve.log("No outcomes to flush")
                        }
                    }, t.prototype._handleResponse = function(t) {
                        var e, n = t.requestType,
                            r = t.response,
                            o = t.headers,
                            i = t.resolve,
                            s = t.reject,
                            a = (e = r.status) >= 200 && e < 300 ? "success" : 429 === e ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown";
                        this._handleRateLimit(o) && (0, Ge.c)() && ve.warn("Too many " + n + " requests, backing off until: " + this._disabledUntil(n)), "success" !== a ? s(r) : i({
                            status: a
                        })
                    }, t.prototype._disabledUntil = function(t) {
                        var e = Dn(t);
                        return this._rateLimits[e] || this._rateLimits.all
                    }, t.prototype._isRateLimited = function(t) {
                        return this._disabledUntil(t) > new Date(Date.now())
                    }, t.prototype._handleRateLimit = function(t) {
                        var e, n, r, o, i = Date.now(),
                            s = t["x-sentry-rate-limits"],
                            a = t["retry-after"];
                        if (s) {
                            try {
                                for (var c = at(s.trim().split(",")), u = c.next(); !u.done; u = c.next()) {
                                    var l = u.value.split(":", 2),
                                        p = parseInt(l[0], 10),
                                        f = 1e3 * (isNaN(p) ? 60 : p);
                                    try {
                                        for (var d = (r = void 0, at(l[1].split(";"))), h = d.next(); !h.done; h = d.next()) {
                                            var v = h.value;
                                            this._rateLimits[v || "all"] = new Date(i + f)
                                        }
                                    } catch (t) {
                                        r = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            h && !h.done && (o = d.return) && o.call(d)
                                        } finally {
                                            if (r) throw r.error
                                        }
                                    }
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    u && !u.done && (n = c.return) && n.call(c)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return !0
                        }
                        return !!a && (this._rateLimits.all = new Date(i + function(t, e) {
                            if (!e) return 6e4;
                            var n = parseInt("" + e, 10);
                            if (!isNaN(n)) return 1e3 * n;
                            var r = Date.parse("" + e);
                            return isNaN(r) ? 6e4 : r - t
                        }(i, a)), !0)
                    }, t
                }(),
                Mn = function(t) {
                    function e(e, n) {
                        void 0 === n && (n = Nn());
                        var r = t.call(this, e) || this;
                        return r._fetch = n, r
                    }
                    return ot(e, t), e.prototype._sendRequest = function(t, e) {
                        var n = this;
                        if (this._isRateLimited(t.type)) return this.recordLostEvent("ratelimit_backoff", t.type), Promise.reject({
                            event: e,
                            type: t.type,
                            reason: "Transport for " + t.type + " requests locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                            status: 429
                        });
                        var r = {
                            body: t.body,
                            method: "POST",
                            referrerPolicy: on() ? "origin" : ""
                        };
                        return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function() {
                            return new jt((function(e, o) {
                                n._fetch(t.url, r).then((function(r) {
                                    var i = {
                                        "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                        "retry-after": r.headers.get("Retry-After")
                                    };
                                    n._handleResponse({
                                        requestType: t.type,
                                        response: r,
                                        headers: i,
                                        resolve: e,
                                        reject: o
                                    })
                                })).catch(o)
                            }))
                        })).then(void 0, (function(e) {
                            throw e instanceof We ? n.recordLostEvent("queue_overflow", t.type) : n.recordLostEvent("network_error", t.type), e
                        }))
                    }, e
                }(Ln),
                Fn = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return ot(e, t), e.prototype._sendRequest = function(t, e) {
                        var n = this;
                        return this._isRateLimited(t.type) ? (this.recordLostEvent("ratelimit_backoff", t.type), Promise.reject({
                            event: e,
                            type: t.type,
                            reason: "Transport for " + t.type + " requests locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                            status: 429
                        })) : this._buffer.add((function() {
                            return new jt((function(e, r) {
                                var o = new XMLHttpRequest;
                                for (var i in o.onreadystatechange = function() {
                                        if (4 === o.readyState) {
                                            var i = {
                                                "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                                "retry-after": o.getResponseHeader("Retry-After")
                                            };
                                            n._handleResponse({
                                                requestType: t.type,
                                                response: o,
                                                headers: i,
                                                resolve: e,
                                                reject: r
                                            })
                                        }
                                    }, o.open("POST", t.url), n.options.headers) Object.prototype.hasOwnProperty.call(n.options.headers, i) && o.setRequestHeader(i, n.options.headers[i]);
                                o.send(t.body)
                            }))
                        })).then(void 0, (function(e) {
                            throw e instanceof We ? n.recordLostEvent("queue_overflow", t.type) : n.recordLostEvent("network_error", t.type), e
                        }))
                    }, e
                }(Ln),
                Bn = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return ot(e, t), e.prototype.eventFromException = function(t, e) {
                        return bn(this._options, t, e)
                    }, e.prototype.eventFromMessage = function(t, e, n) {
                        return void 0 === e && (e = it.Info), wn(this._options, t, e, n)
                    }, e.prototype._setupTransport = function() {
                        if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                        var e = st(st({}, this._options.transportOptions), {
                            dsn: this._options.dsn,
                            tunnel: this._options.tunnel,
                            sendClientReports: this._options.sendClientReports,
                            _metadata: this._options._metadata
                        });
                        return this._options.transport ? new this._options.transport(e) : nn() ? new Mn(e) : new Fn(e)
                    }, e
                }(en),
                Un = (0, Pt.R)(),
                $n = 0;

            function Hn() {
                return $n > 0
            }

            function Gn() {
                $n += 1, setTimeout((function() {
                    $n -= 1
                }))
            }

            function qn(t, e, n) {
                if (void 0 === e && (e = {}), "function" != typeof t) return t;
                try {
                    var r = t.__sentry_wrapped__;
                    if (r) return r;
                    if (Jt(t)) return t
                } catch (e) {
                    return t
                }
                var o = function() {
                    var r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" == typeof n && n.apply(this, arguments);
                        var o = r.map((function(t) {
                            return qn(t, e)
                        }));
                        return t.apply(this, o)
                    } catch (t) {
                        throw Gn(), Me((function(n) {
                            n.addEventProcessor((function(t) {
                                return e.mechanism && (ce(t, void 0, void 0), ue(t, e.mechanism)), t.extra = st(st({}, t.extra), {
                                    arguments: r
                                }), t
                            })), Te(t)
                        })), t
                    }
                };
                try {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i])
                } catch (t) {}
                Yt(o, t), Vt(t, "__sentry_wrapped__", o);
                try {
                    Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
                        get: function() {
                            return t.name
                        }
                    })
                } catch (t) {}
                return o
            }

            function Wn(t) {
                if (void 0 === t && (t = {}), Un.document)
                    if (t.eventId)
                        if (t.dsn) {
                            var e = Un.document.createElement("script");
                            e.async = !0, e.src = function(t, e) {
                                var n = Ye(t),
                                    r = On(n) + "embed/error-page/",
                                    o = "dsn=" + Ke(n);
                                for (var i in e)
                                    if ("dsn" !== i)
                                        if ("user" === i) {
                                            if (!e.user) continue;
                                            e.user.name && (o += "&name=" + encodeURIComponent(e.user.name)), e.user.email && (o += "&email=" + encodeURIComponent(e.user.email))
                                        } else o += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(e[i]);
                                return r + "?" + o
                            }(t.dsn, t), t.onLoad && (e.onload = t.onLoad);
                            var n = Un.document.head || Un.document.body;
                            n && n.appendChild(e)
                        } else(0, Ge.c)() && ve.error("Missing dsn option in showReportDialog call");
                else(0, Ge.c)() && ve.error("Missing eventId option in showReportDialog call")
            }
            var zn, Kn, Vn, Yn = (0, Pt.R)(),
                Jn = {},
                Xn = {};

            function Qn(t, e) {
                Jn[t] = Jn[t] || [], Jn[t].push(e),
                    function(t) {
                        if (!Xn[t]) switch (Xn[t] = !0, t) {
                            case "console":
                                "console" in Yn && ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                                    t in Yn.console && Kt(Yn.console, t, (function(e) {
                                        return function() {
                                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                            Zn("console", {
                                                args: n,
                                                level: t
                                            }), e && Function.prototype.apply.call(e, Yn.console, n)
                                        }
                                    }))
                                }));
                                break;
                            case "dom":
                                ! function() {
                                    if ("document" in Yn) {
                                        var t = Zn.bind(null, "dom"),
                                            e = nr(t, !0);
                                        Yn.document.addEventListener("click", e, !1), Yn.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((function(e) {
                                            var n = Yn[e] && Yn[e].prototype;
                                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Kt(n, "addEventListener", (function(e) {
                                                return function(n, r, o) {
                                                    if ("click" === n || "keypress" == n) try {
                                                        var i = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                            s = i[n] = i[n] || {
                                                                refCount: 0
                                                            };
                                                        if (!s.handler) {
                                                            var a = nr(t);
                                                            s.handler = a, e.call(this, n, a, o)
                                                        }
                                                        s.refCount += 1
                                                    } catch (t) {}
                                                    return e.call(this, n, r, o)
                                                }
                                            })), Kt(n, "removeEventListener", (function(t) {
                                                return function(e, n, r) {
                                                    if ("click" === e || "keypress" == e) try {
                                                        var o = this.__sentry_instrumentation_handlers__ || {},
                                                            i = o[e];
                                                        i && (i.refCount -= 1, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete o[e]), 0 === Object.keys(o).length && delete this.__sentry_instrumentation_handlers__)
                                                    } catch (t) {}
                                                    return t.call(this, e, n, r)
                                                }
                                            })))
                                        }))
                                    }
                                }();
                                break;
                            case "xhr":
                                ! function() {
                                    if ("XMLHttpRequest" in Yn) {
                                        var t = XMLHttpRequest.prototype;
                                        Kt(t, "open", (function(t) {
                                            return function() {
                                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                var r = this,
                                                    o = e[1],
                                                    i = r.__sentry_xhr__ = {
                                                        method: _t(e[0]) ? e[0].toUpperCase() : e[0],
                                                        url: e[1]
                                                    };
                                                _t(o) && "POST" === i.method && o.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                                                var s = function() {
                                                    if (4 === r.readyState) {
                                                        try {
                                                            i.status_code = r.status
                                                        } catch (t) {}
                                                        Zn("xhr", {
                                                            args: e,
                                                            endTimestamp: Date.now(),
                                                            startTimestamp: Date.now(),
                                                            xhr: r
                                                        })
                                                    }
                                                };
                                                return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? Kt(r, "onreadystatechange", (function(t) {
                                                    return function() {
                                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                        return s(), t.apply(r, e)
                                                    }
                                                })) : r.addEventListener("readystatechange", s), t.apply(r, e)
                                            }
                                        })), Kt(t, "send", (function(t) {
                                            return function() {
                                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]), Zn("xhr", {
                                                    args: e,
                                                    startTimestamp: Date.now(),
                                                    xhr: this
                                                }), t.apply(this, e)
                                            }
                                        }))
                                    }
                                }();
                                break;
                            case "fetch":
                                (function() {
                                    if (!nn()) return !1;
                                    var t = (0, Pt.R)();
                                    if (rn(t.fetch)) return !0;
                                    var e = !1,
                                        n = t.document;
                                    if (n && "function" == typeof n.createElement) try {
                                        var r = n.createElement("iframe");
                                        r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = rn(r.contentWindow.fetch)), n.head.removeChild(r)
                                    } catch (t) {
                                        (0, Ge.c)() && ve.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                                    }
                                    return e
                                })() && Kt(Yn, "fetch", (function(t) {
                                    return function() {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        var r = {
                                            args: e,
                                            fetchData: {
                                                method: tr(e),
                                                url: er(e)
                                            },
                                            startTimestamp: Date.now()
                                        };
                                        return Zn("fetch", Ft({}, r)), t.apply(Yn, e).then((function(t) {
                                            return Zn("fetch", Ft(Ft({}, r), {
                                                endTimestamp: Date.now(),
                                                response: t
                                            })), t
                                        }), (function(t) {
                                            throw Zn("fetch", Ft(Ft({}, r), {
                                                endTimestamp: Date.now(),
                                                error: t
                                            })), t
                                        }))
                                    }
                                }));
                                break;
                            case "history":
                                ! function() {
                                    if (function() {
                                            var t = (0, Pt.R)(),
                                                e = t.chrome,
                                                n = e && e.app && e.app.runtime,
                                                r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                                            return !n && r
                                        }()) {
                                        var t = Yn.onpopstate;
                                        Yn.onpopstate = function() {
                                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                            var r = Yn.location.href,
                                                o = zn;
                                            if (zn = r, Zn("history", {
                                                    from: o,
                                                    to: r
                                                }), t) try {
                                                return t.apply(this, e)
                                            } catch (t) {}
                                        }, Kt(Yn.history, "pushState", e), Kt(Yn.history, "replaceState", e)
                                    }

                                    function e(t) {
                                        return function() {
                                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                            var r = e.length > 2 ? e[2] : void 0;
                                            if (r) {
                                                var o = zn,
                                                    i = String(r);
                                                zn = i, Zn("history", {
                                                    from: o,
                                                    to: i
                                                })
                                            }
                                            return t.apply(this, e)
                                        }
                                    }
                                }();
                                break;
                            case "error":
                                rr = Yn.onerror, Yn.onerror = function(t, e, n, r, o) {
                                    return Zn("error", {
                                        column: r,
                                        error: o,
                                        line: n,
                                        msg: t,
                                        url: e
                                    }), !!rr && rr.apply(this, arguments)
                                };
                                break;
                            case "unhandledrejection":
                                or = Yn.onunhandledrejection, Yn.onunhandledrejection = function(t) {
                                    return Zn("unhandledrejection", t), !or || or.apply(this, arguments)
                                };
                                break;
                            default:
                                ve.warn("unknown instrumentation type:", t)
                        }
                    }(t)
            }

            function Zn(t, e) {
                var n, r;
                if (t && Jn[t]) try {
                    for (var o = Bt(Jn[t] || []), i = o.next(); !i.done; i = o.next()) {
                        var s = i.value;
                        try {
                            s(e)
                        } catch (e) {
                            (0, Ge.c)() && ve.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Gt(s) + "\nError: " + e)
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }

            function tr(t) {
                return void 0 === t && (t = []), "Request" in Yn && xt(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
            }

            function er(t) {
                return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in Yn && xt(t[0], Request) ? t[0].url : String(t[0])
            }

            function nr(t, e) {
                return void 0 === e && (e = !1),
                    function(n) {
                        if (n && Vn !== n && ! function(t) {
                                if ("keypress" !== t.type) return !1;
                                try {
                                    var e = t.target;
                                    if (!e || !e.tagName) return !0;
                                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                                } catch (t) {}
                                return !0
                            }(n)) {
                            var r = "keypress" === n.type ? "input" : n.type;
                            (void 0 === Kn || function(t, e) {
                                if (!t) return !0;
                                if (t.type !== e.type) return !0;
                                try {
                                    if (t.target !== e.target) return !0
                                } catch (t) {}
                                return !1
                            }(Vn, n)) && (t({
                                event: n,
                                name: r,
                                global: e
                            }), Vn = n), clearTimeout(Kn), Kn = Yn.setTimeout((function() {
                                Kn = void 0
                            }), 1e3)
                        }
                    }
            }
            var rr = null,
                or = null;
            var ir = function() {
                function t(e) {
                    this.name = t.id, this._options = st({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, e)
                }
                return t.prototype.addSentryBreadcrumb = function(t) {
                    this._options.sentry && we().addBreadcrumb({
                        category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: ae(t)
                    }, {
                        event: t
                    })
                }, t.prototype.setupOnce = function() {
                    var t;
                    this._options.console && Qn("console", sr), this._options.dom && Qn("dom", (t = this._options.dom, function(e) {
                        var n, r = "object" == typeof t ? t.serializeAttribute : void 0;
                        "string" == typeof r && (r = [r]);
                        try {
                            n = e.event.target ? Ut(e.event.target, r) : Ut(e.event, r)
                        } catch (t) {
                            n = "<unknown>"
                        }
                        0 !== n.length && we().addBreadcrumb({
                            category: "ui." + e.name,
                            message: n
                        }, {
                            event: e.event,
                            name: e.name,
                            global: e.global
                        })
                    })), this._options.xhr && Qn("xhr", ar), this._options.fetch && Qn("fetch", cr), this._options.history && Qn("history", ur)
                }, t.id = "Breadcrumbs", t
            }();

            function sr(t) {
                var e, n = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: (e = t.level, "warn" === e ? it.Warning : function(t) {
                        return -1 !== lt.indexOf(t)
                    }(e) ? e : it.Log),
                    message: Wt(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    n.message = "Assertion failed: " + (Wt(t.args.slice(1), " ") || "console.assert"), n.data.arguments = t.args.slice(1)
                }
                we().addBreadcrumb(n, {
                    input: t.args,
                    level: t.level
                })
            }

            function ar(t) {
                if (t.endTimestamp) {
                    if (t.xhr.__sentry_own_request__) return;
                    var e = t.xhr.__sentry_xhr__ || {},
                        n = e.method,
                        r = e.url,
                        o = e.status_code,
                        i = e.body;
                    we().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: n,
                            url: r,
                            status_code: o
                        },
                        type: "http"
                    }, {
                        xhr: t.xhr,
                        input: i
                    })
                }
            }

            function cr(t) {
                t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? we().addBreadcrumb({
                    category: "fetch",
                    data: t.fetchData,
                    level: it.Error,
                    type: "http"
                }, {
                    data: t.error,
                    input: t.args
                }) : we().addBreadcrumb({
                    category: "fetch",
                    data: st(st({}, t.fetchData), {
                        status_code: t.response.status
                    }),
                    type: "http"
                }, {
                    input: t.args,
                    response: t.response
                })))
            }

            function ur(t) {
                var e = (0, Pt.R)(),
                    n = t.from,
                    r = t.to,
                    o = ie(e.location.href),
                    i = ie(n),
                    s = ie(r);
                i.path || (i = o), o.protocol === s.protocol && o.host === s.host && (r = s.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), we().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            }
            var lr, pr = function(t) {
                    function e(e) {
                        return void 0 === e && (e = {}), e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                            name: "sentry.javascript.browser",
                            packages: [{
                                name: "npm:@sentry/browser",
                                version: Be
                            }],
                            version: Be
                        }, t.call(this, Bn, e) || this
                    }
                    return ot(e, t), e.prototype.showReportDialog = function(t) {
                        void 0 === t && (t = {}), (0, Pt.R)().document && (this._isEnabled() ? Wn(st(st({}, t), {
                            dsn: t.dsn || this.getDsn()
                        })) : ve.error("Trying to call showReportDialog with Sentry Client disabled"))
                    }, e.prototype._prepareEvent = function(e, n, r) {
                        return e.platform = e.platform || "javascript", t.prototype._prepareEvent.call(this, e, n, r)
                    }, e.prototype._sendEvent = function(e) {
                        var n = this.getIntegration(ir);
                        n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e)
                    }, e
                }(Ze),
                fr = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                dr = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        Nt((function(e) {
                            var n = we();
                            if (!n) return e;
                            var r = n.getIntegration(t);
                            if (r) {
                                var o = n.getClient(),
                                    i = o ? o.getOptions() : {},
                                    s = "function" == typeof r._mergeOptions ? r._mergeOptions(i) : {};
                                return "function" != typeof r._shouldDropEvent ? e : r._shouldDropEvent(e, s) ? null : e
                            }
                            return e
                        }))
                    }, t.prototype._shouldDropEvent = function(t, e) {
                        return this._isSentryError(t, e) ? ((0, Ge.c)() && ve.warn("Event dropped due to being internal Sentry Error.\nEvent: " + ae(t)), !0) : this._isIgnoredError(t, e) ? ((0, Ge.c)() && ve.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + ae(t)), !0) : this._isDeniedUrl(t, e) ? ((0, Ge.c)() && ve.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + ae(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0) : !this._isAllowedUrl(t, e) && ((0, Ge.c)() && ve.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + ae(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0)
                    }, t.prototype._isSentryError = function(t, e) {
                        if (!e.ignoreInternal) return !1;
                        try {
                            return "SentryError" === t.exception.values[0].type
                        } catch (t) {}
                        return !1
                    }, t.prototype._isIgnoredError = function(t, e) {
                        return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function(t) {
                            return e.ignoreErrors.some((function(e) {
                                return zt(t, e)
                            }))
                        }))
                    }, t.prototype._isDeniedUrl = function(t, e) {
                        if (!e.denyUrls || !e.denyUrls.length) return !1;
                        var n = this._getEventFilterUrl(t);
                        return !!n && e.denyUrls.some((function(t) {
                            return zt(n, t)
                        }))
                    }, t.prototype._isAllowedUrl = function(t, e) {
                        if (!e.allowUrls || !e.allowUrls.length) return !0;
                        var n = this._getEventFilterUrl(t);
                        return !n || e.allowUrls.some((function(t) {
                            return zt(n, t)
                        }))
                    }, t.prototype._mergeOptions = function(t) {
                        return void 0 === t && (t = {}), {
                            allowUrls: He(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                            denyUrls: He(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                            ignoreErrors: He(this._options.ignoreErrors || [], t.ignoreErrors || [], fr),
                            ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
                        }
                    }, t.prototype._getPossibleEventMessages = function(t) {
                        if (t.message) return [t.message];
                        if (t.exception) try {
                            var e = t.exception.values && t.exception.values[0] || {},
                                n = e.type,
                                r = void 0 === n ? "" : n,
                                o = e.value,
                                i = void 0 === o ? "" : o;
                            return ["" + i, r + ": " + i]
                        } catch (e) {
                            return (0, Ge.c)() && ve.error("Cannot extract message for event " + ae(t)), []
                        }
                        return []
                    }, t.prototype._getLastValidUrl = function(t) {
                        void 0 === t && (t = []);
                        for (var e = t.length - 1; e >= 0; e--) {
                            var n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }, t.prototype._getEventFilterUrl = function(t) {
                        try {
                            if (t.stacktrace) return this._getLastValidUrl(t.stacktrace.frames);
                            var e;
                            try {
                                e = t.exception.values[0].stacktrace.frames
                            } catch (t) {}
                            return e ? this._getLastValidUrl(e) : null
                        } catch (e) {
                            return (0, Ge.c)() && ve.error("Cannot extract url for event " + ae(t)), null
                        }
                    }, t.id = "InboundFilters", t
                }(),
                hr = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        lr = Function.prototype.toString, Function.prototype.toString = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = Jt(this) || this;
                            return lr.apply(n, t)
                        }
                    }, t.id = "FunctionToString", t
                }(),
                vr = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                gr = function() {
                    function t(e) {
                        this.name = t.id, this._options = st({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                    }
                    return t.prototype.setupOnce = function() {
                        var t = (0, Pt.R)();
                        this._options.setTimeout && Kt(t, "setTimeout", yr), this._options.setInterval && Kt(t, "setInterval", yr), this._options.requestAnimationFrame && Kt(t, "requestAnimationFrame", mr), this._options.XMLHttpRequest && "XMLHttpRequest" in t && Kt(XMLHttpRequest.prototype, "send", _r);
                        var e = this._options.eventTarget;
                        e && (Array.isArray(e) ? e : vr).forEach(br)
                    }, t.id = "TryCatch", t
                }();

            function yr(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = e[0];
                    return e[0] = qn(r, {
                        mechanism: {
                            data: {
                                function: Gt(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }

            function mr(t) {
                return function(e) {
                    return t.call(this, qn(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: Gt(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }

            function _r(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = this,
                        o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return o.forEach((function(t) {
                        t in r && "function" == typeof r[t] && Kt(r, t, (function(e) {
                            var n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: Gt(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                r = Jt(e);
                            return r && (n.mechanism.data.handler = Gt(r)), qn(e, n)
                        }))
                    })), t.apply(this, e)
                }
            }

            function br(t) {
                var e = (0, Pt.R)(),
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Kt(n, "addEventListener", (function(e) {
                    return function(n, r, o) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = qn(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: Gt(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.call(this, n, qn(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: Gt(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), o)
                    }
                })), Kt(n, "removeEventListener", (function(t) {
                    return function(e, n, r) {
                        var o = n;
                        try {
                            var i = o && o.__sentry_wrapped__;
                            i && t.call(this, e, i, r)
                        } catch (t) {}
                        return t.call(this, e, o, r)
                    }
                })))
            }
            var wr = function() {
                function t(e) {
                    this.name = t.id, this._installFunc = {
                        onerror: Sr,
                        onunhandledrejection: Er
                    }, this._options = st({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, e)
                }
                return t.prototype.setupOnce = function() {
                    Error.stackTraceLimit = 50;
                    var t, e = this._options;
                    for (var n in e) {
                        var r = this._installFunc[n];
                        r && e[n] && (t = n, (0, Ge.c)() && ve.log("Global Handler attached: " + t), r(), this._installFunc[n] = void 0)
                    }
                }, t.id = "GlobalHandlers", t
            }();

            function Sr() {
                Qn("error", (function(t) {
                    var e = ct(Tr(), 2),
                        n = e[0],
                        r = e[1];
                    if (n.getIntegration(wr)) {
                        var o = t.msg,
                            i = t.url,
                            s = t.line,
                            a = t.column,
                            c = t.error;
                        Hn() || c && c.__sentry_own_request__ || xr(n, c, void 0 === c && _t(o) ? function(t, e, n, r) {
                            var o = yt(t) ? t.message : t,
                                i = "Error",
                                s = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            return s && (i = s[1], o = s[2]), Or({
                                exception: {
                                    values: [{
                                        type: i,
                                        value: o
                                    }]
                                }
                            }, e, n, r)
                        }(o, i, s, a) : Or(Sn(c || o, void 0, {
                            attachStacktrace: r,
                            isRejection: !1
                        }), i, s, a), "onerror")
                    }
                }))
            }

            function Er() {
                Qn("unhandledrejection", (function(t) {
                    var e = ct(Tr(), 2),
                        n = e[0],
                        r = e[1];
                    if (n.getIntegration(wr)) {
                        var o = t;
                        try {
                            "reason" in t ? o = t.reason : "detail" in t && "reason" in t.detail && (o = t.detail.reason)
                        } catch (t) {}
                        if (Hn() || o && o.__sentry_own_request__) return !0;
                        var i = bt(o) ? {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + String(o)
                                }]
                            }
                        } : Sn(o, void 0, {
                            attachStacktrace: r,
                            isRejection: !0
                        });
                        i.level = it.Error, xr(n, o, i, "onunhandledrejection")
                    }
                }))
            }

            function Or(t, e, n, r) {
                var o = t.exception = t.exception || {},
                    i = o.values = o.values || [],
                    s = i[0] = i[0] || {},
                    a = s.stacktrace = s.stacktrace || {},
                    c = a.frames = a.frames || [],
                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                    l = isNaN(parseInt(n, 10)) ? void 0 : n,
                    p = _t(e) && e.length > 0 ? e : function() {
                        var t = (0, Pt.R)();
                        try {
                            return t.document.location.href
                        } catch (t) {
                            return ""
                        }
                    }();
                return 0 === c.length && c.push({
                    colno: u,
                    filename: p,
                    function: "?",
                    in_app: !0,
                    lineno: l
                }), t
            }

            function xr(t, e, n, r) {
                ue(n, {
                    handled: !1,
                    type: r
                }), t.captureEvent(n, {
                    originalException: e
                })
            }

            function Tr() {
                var t = we(),
                    e = t.getClient();
                return [t, e && e.getOptions().attachStacktrace]
            }
            var kr = function() {
                function t(e) {
                    void 0 === e && (e = {}), this.name = t.id, this._key = e.key || "cause", this._limit = e.limit || 5
                }
                return t.prototype.setupOnce = function() {
                    Nt((function(e, n) {
                        var r = we().getIntegration(t);
                        return r ? function(t, e, n, r) {
                            if (!(n.exception && n.exception.values && r && xt(r.originalException, Error))) return n;
                            var o = Cr(e, r.originalException, t);
                            return n.exception.values = ut(o, n.exception.values), n
                        }(r._key, r._limit, e, n) : e
                    }))
                }, t.id = "LinkedErrors", t
            }();

            function Cr(t, e, n, r) {
                if (void 0 === r && (r = []), !xt(e[n], Error) || r.length + 1 >= t) return r;
                var o = yn(dn(e[n]));
                return Cr(t, e[n], n, ut([o], r))
            }
            var jr = function() {
                function t() {
                    this.name = t.id
                }
                return t.prototype.setupOnce = function(e, n) {
                    e((function(e) {
                        var r = n().getIntegration(t);
                        if (r) {
                            try {
                                if (function(t, e) {
                                        return !!e && (!! function(t, e) {
                                            var n = t.message,
                                                r = e.message;
                                            return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!Ir(t, e) && !!Pr(t, e))))
                                        }(t, e) || !! function(t, e) {
                                            var n = Rr(e),
                                                r = Rr(t);
                                            return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!Ir(t, e) && !!Pr(t, e)))
                                        }(t, e))
                                    }(e, r._previousEvent)) return ve.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (t) {
                                return r._previousEvent = e
                            }
                            return r._previousEvent = e
                        }
                        return e
                    }))
                }, t.id = "Dedupe", t
            }();

            function Pr(t, e) {
                var n = Nr(t),
                    r = Nr(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (r.length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o],
                        s = n[o];
                    if (i.filename !== s.filename || i.lineno !== s.lineno || i.colno !== s.colno || i.function !== s.function) return !1
                }
                return !0
            }

            function Ir(t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }

            function Rr(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function Nr(t) {
                var e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                } else if (t.stacktrace) return t.stacktrace.frames
            }
            var Dr = (0, Pt.R)(),
                Ar = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        Nt((function(e) {
                            if (we().getIntegration(t)) {
                                if (!Dr.navigator && !Dr.location && !Dr.document) return e;
                                var n = e.request && e.request.url || Dr.location && Dr.location.href,
                                    r = (Dr.document || {}).referrer,
                                    o = (Dr.navigator || {}).userAgent,
                                    i = st(st(st({}, e.request && e.request.headers), r && {
                                        Referer: r
                                    }), o && {
                                        "User-Agent": o
                                    }),
                                    s = st(st({}, n && {
                                        url: n
                                    }), {
                                        headers: i
                                    });
                                return st(st({}, e), {
                                    request: s
                                })
                            }
                            return e
                        }))
                    }, t.id = "UserAgent", t
                }(),
                Lr = [new dr, new hr, new gr, new ir, new wr, new kr, new jr, new Ar];

            function Mr(t) {
                if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = Lr), void 0 === t.release) {
                    var e = (0, Pt.R)();
                    e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
                }
                void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0),
                    function(t, e) {
                        !0 === e.debug && ve.enable();
                        var n = we(),
                            r = n.getScope();
                        r && r.update(e.initialScope);
                        var o = new t(e);
                        n.bindClient(o)
                    }(pr, t), t.autoSessionTracking && function() {
                        if (void 0 !== (0, Pt.R)().document) {
                            var t = we();
                            t.captureSession && (Wr(t), Qn("history", (function(t) {
                                var e = t.from,
                                    n = t.to;
                                void 0 !== e && e !== n && Wr(we())
                            })))
                        } else(0, Ge.c)() && ve.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
                    }()
            }

            function Fr(t) {
                void 0 === t && (t = {});
                var e = we(),
                    n = e.getScope();
                n && (t.user = st(st({}, n.getUser()), t.user)), t.eventId || (t.eventId = e.lastEventId());
                var r = e.getClient();
                r && r.showReportDialog(t)
            }

            function Br() {
                return we().lastEventId()
            }

            function Ur() {}

            function $r(t) {
                t()
            }

            function Hr(t) {
                var e = we().getClient();
                return e ? e.flush(t) : ((0, Ge.c)() && ve.warn("Cannot flush events. No client defined."), kt(!1))
            }

            function Gr(t) {
                var e = we().getClient();
                return e ? e.close(t) : ((0, Ge.c)() && ve.warn("Cannot flush events and disable SDK. No client defined."), kt(!1))
            }

            function qr(t) {
                return qn(t)()
            }

            function Wr(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }
            var zr = "sentry.javascript.browser",
                Kr = {},
                Vr = (0, Pt.R)();
            Vr.Sentry && Vr.Sentry.Integrations && (Kr = Vr.Sentry.Integrations);
            var Yr = st(st(st({}, Kr), t), e);
            const {
                BrowserClient: Jr
            } = o, Xr = {}, Qr = ["XHR Error: "], Zr = new Jr({
                dsn: null,
                beforeSend: t => "Could not connect frame channel." === t.message ? null : t,
                environment: "production",
                release: "1.7.2-369dae9",
                sampleRate: .25,
                autoSessionTracking: !1,
                integrations: [new Yr.InboundFilters, new Yr.UserAgent, new Yr.Breadcrumbs]
            }), to = {
                setTag(t, e) {
                    Xr[t] = e
                },
                async trackException(t) {
                    if (s(t.message), Qr.includes(t.message)) return;
                    const e = await bn({}, t);
                    e.tags = Xr, Zr.captureEvent(e)
                }
            };
            to.setTag("url", window.location.href);
            var eo = to;
            const no = "DELETE_HISTORY",
                ro = "JWT_AUTH_RESPONSE",
                oo = "DISPATCH",
                io = "DISPATCH_RESPONSE",
                so = "STATE_CHANGE",
                ao = "GET_RESPONSE",
                co = "GET_STATE",
                uo = "GET_STATE_RESPONSE";
            let lo = function(t) {
                return t.Done = "DONE", t.Loading = "LOADING", t.Failure = "FAILURE", t.Uninitiated = "UNINITIATED", t
            }({});
            const po = "GET_INFO",
                fo = "GET_INFO_RESPONSE",
                ho = "SET_META_FIELDS",
                vo = "SET_META_FIELDS_RESPONSE",
                go = "STOP",
                yo = "STOP_RESPONSE",
                mo = "DELETE_HISTORY",
                _o = "DELETE_HISTORY_RESPONSE",
                bo = "RESET",
                wo = "RESET_RESPONSE",
                So = "CREATE_PROACTIVE",
                Eo = "CREATE_PROACTIVE_RESPONSE",
                Oo = "TRACK_EVENT",
                xo = "TRACK_EVENT_RESPONSE",
                To = "TRIGGER_CAMPAIGN",
                ko = "TRIGGER_CAMPAIGN_RESPONSE",
                Co = "EVAL_CAMPAIGN_CONDITIONS",
                jo = "EVAL_CAMPAIGN_CONDITIONS_RESPONSE",
                Po = "CLOSE_CAMPAIGN",
                Io = "CLOSE_CAMPAIGN_RESPONSE",
                Ro = "SET_DEVICE_TOKEN",
                No = "SET_DEVICE_TOKEN_RESPONSE",
                Do = "SEND_GREETING";
            let Ao = function(t) {
                return t.Success = "SUCCESS", t.Failure = "FAILURE", t
            }({});
            class Lo {
                constructor() {
                    c(this, "trackedListeners", void 0), c(this, "trackedTimeouts", void 0), c(this, "eventType", void 0), c(this, "isConnected", void 0)
                }
                removeEventListener(t) {
                    window.removeEventListener(this.eventType, t), this.trackedListeners.delete(t)
                }
                clearTrackedTimeout(t) {
                    clearTimeout(t), this.trackedTimeouts.delete(t)
                }
                clearTimeoutsAndListeners() {
                    this.removeAllEventListeners(), this.clearAllTrackedTimeouts()
                }
                fetch(t, e, n) {
                    var r = this;
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6e4;
                    const s = nt()();
                    return new Promise(((a, c) => {
                        let u, l;
                        u = window.setTimeout((() => {
                            this.removeEventListener(l), c(new i("Could not connect frame channel."))
                        }), o), this.addTrackedTimeout(u), l = this.addEventListener((function(t, n, o) {
                            let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ao.Success;
                            t === e && s === o && (r.removeEventListener(l), clearTimeout(u), p === Ao.Success ? a(n) : c(new i(`Fetch event error: ${n}`)))
                        })), this.postMessage(t, n, s)
                    })).catch((e => {
                        if ("GET_STATE" === t) throw new i(`Failed to respond to "GET_STATE" request. Reason: "${e.message}".`);
                        "Could not connect frame channel." !== e.message && eo.trackException(e)
                    }))
                }
                addTrackedListener(t) {
                    window.addEventListener(this.eventType, t), this.trackedListeners.add(t)
                }
                addTrackedTimeout(t) {
                    this.trackedTimeouts.add(t)
                }
                removeAllEventListeners() {
                    this.trackedListeners.forEach((t => {
                        this.removeEventListener(t)
                    }))
                }
                clearAllTrackedTimeouts() {
                    this.trackedTimeouts.forEach((t => {
                        this.clearTrackedTimeout(t)
                    }))
                }
            }
            class Mo extends Lo {
                constructor(t, e, n) {
                    super(), c(this, "trackedListeners", new Set), c(this, "trackedTimeouts", new Set), c(this, "eventType", "message"), c(this, "name", void 0), c(this, "targetWindow", void 0), c(this, "targetOrigin", void 0), c(this, "isConnected", !1), this.name = t, this.targetWindow = e, this.targetOrigin = n || "*"
                }
                static isMessageEvent(t) {
                    return "data" in t && void 0 !== t.data
                }
                postMessage(t, e, n, r) {
                    this.targetWindow.postMessage(this.constructObjectToSend(t, e, n, r), this.targetOrigin)
                }
                isValidMessageEvent(t) {
                    return "*" === this.targetOrigin || "origin" in t && t.origin === this.targetOrigin
                }
                addEventListener(t) {
                    const e = e => {
                        let n;
                        if (!this.isValidMessageEvent(e)) return;
                        try {
                            Mo.isMessageEvent(e) && (n = JSON.parse(e.data))
                        } catch {
                            return
                        }
                        const {
                            name: r,
                            type: o,
                            payload: i,
                            id: s,
                            status: a
                        } = n;
                        r === this.name && t(o, i, s, a)
                    };
                    return this.addTrackedListener(e), e
                }
                constructObjectToSend() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    try {
                        return JSON.stringify({
                            name: this.name,
                            type: t,
                            payload: e,
                            id: n,
                            status: r
                        })
                    } catch (n) {
                        const r = n instanceof Error ? n.message : "unknown",
                            o = e && "object" == typeof e ? Object.keys(e) : [];
                        if ("DISPATCH" === t && e && "object" == typeof e) {
                            const t = e,
                                n = t.payload && "object" == typeof t.payload ? Object.keys(t.payload) : [];
                            throw new i(`Failed to stringify payload for "DISPATCH" event. Reason: "${r}". Action: "${t.actionKey}". Payload keys: ${n.join(", ")}.`)
                        }
                        throw new i(`Failed to stringify object. Reason: "${r}". Event: "${t}". Payload keys: ${o.join(", ")}.`)
                    }
                }
            }
            class Fo extends Lo {
                constructor() {
                    super(...arguments), c(this, "trackedListeners", new Set), c(this, "trackedTimeouts", new Set), c(this, "eventType", "ada-custom-message"), c(this, "isConnected", !0)
                }
                postMessage(t, e, n, r) {
                    const o = function(t, e) {
                        let n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return "function" == typeof CustomEvent ? n = new CustomEvent(t, {
                            bubbles: r,
                            cancelable: o,
                            detail: e
                        }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, r, o, e)), n
                    }(this.eventType, this.constructObjectToSend(t, e, n, r));
                    window.dispatchEvent(o)
                }
                addEventListener(t) {
                    const e = e => {
                        if (!e.detail) throw new Error("handleEvent.detail is undefined");
                        const {
                            detail: {
                                type: n,
                                payload: r,
                                id: o,
                                status: i
                            }
                        } = e;
                        return t(n, r, o, i)
                    };
                    return this.addTrackedListener(e), e
                }
                constructObjectToSend(t, e, n, r) {
                    return {
                        type: t,
                        payload: e,
                        id: n,
                        status: r
                    }
                }
            }
            class Bo {
                constructor() {
                    c(this, "channels", {
                        local: new Fo
                    })
                }
                registerFrameChannel(t, e, n) {
                    const r = new Mo(t, e, n);
                    return this.channels[t] = r, r
                }
                unregisterChannel(t) {
                    const e = this.channels[t];
                    if (!e) throw new i(`Channel "${t} not registered."`);
                    e.clearTimeoutsAndListeners(), delete this.channels[t]
                }
                getChannel(t) {
                    return this.channels[t]
                }
                getAllChannels() {
                    return Object.values(this.channels)
                }
            }
            var Uo = n(7266),
                $o = n.n(Uo);
            let Ho = function(t) {
                    return t.SET_STATE_ACTION = "setState", t.TOGGLE_CHAT_ACTION = "toggleChat", t.SET_CONNECTION_STATE = "setConnectionState", t.SEND_UNREAD_MESSAGES_ACTION = "sendUnreadMessages", t
                }({}),
                Go = function(t) {
                    return t.SET_STATE_TYPE = "SET_STATE", t.TOGGLE_CHAT_TYPE = "TOGGLE_CHAT", t.SET_META_FIELDS_TYPE = "SET_META_FIELDS", t.SET_CONNECTION_STATE_TYPE = "SET_CONNECTION_STATE", t.INCREMENT_MESSAGE_COUNT_TYPE = "INCREMENT_MESSAGE_COUNT", t
                }({}),
                qo = [];
            const Wo = (() => {
                let t = 0;
                return () => (t += 1, t)
            })();

            function zo(t, e) {
                qo.forEach((n => {
                    if (t.startsWith(n.eventKey)) try {
                        n.callback(e, {
                            eventKey: t
                        })
                    } catch {}
                }))
            }

            function Ko(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vo(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ko(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ko(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            const Yo = "ada";

            function Jo(t, e, n) {
                return `https://rollout${e?`.${e}`:""}.${n||Yo}.support/${t}/client.json`
            }

            function Xo(t) {
                return Object.keys(t).map((e => {
                    const n = t[e];
                    return null == n ? null : `${e}=${window.encodeURIComponent(n)}`
                })).filter((t => null !== t)).join("&")
            }

            function Qo(t) {
                let {
                    name: e,
                    handle: n,
                    cluster: r,
                    domain: o,
                    route: i,
                    qp: s = {}
                } = t;
                const a = Xo(s),
                    c = a.length ? "?" : "";
                return `https://${n}${r?`.${r}`:""}.${o||Yo}.support/${e}/${i?`${i}/`:""}${c}${a}`
            }
            const Zo = {
                setState: t => {
                    let {
                        payload: e = {}
                    } = t;
                    return {
                        type: Go.SET_STATE_TYPE,
                        payload: e
                    }
                },
                toggleChat: t => {
                    let {
                        currentState: e
                    } = t;
                    if (e.chatterToken) {
                        if (!e.handle) throw new i("`currentState.handle` is undefined");
                        l({
                            url: Qo({
                                name: "api",
                                handle: e.handle,
                                cluster: e.cluster,
                                domain: e.domain,
                                route: `chatters/${e.chatterToken}/live_chat_unread_amount`
                            }),
                            method: "DELETE"
                        }).catch((t => {
                            console.error(t)
                        }))
                    }
                    const {
                        hasChatOpenedAfterProactiveMessagesShown: n,
                        wasCampaignShownButNowClosed: r,
                        proactiveCampaignHadMessages: o
                    } = e;
                    if (!e.isDrawerOpen && !n && !r && o && e.latestCampaignKey) {
                        if (!e.handle) throw new i("`currentState.handle` is undefined");
                        l({
                            url: `${Qo({name:"api",handle:e.handle,cluster:e.cluster,domain:e.domain})}business_events/track`,
                            method: "POST",
                            headers: {
                                "Session-Auth": e.sessionToken || "",
                                "Chatter-Token": e.chatterToken || ""
                            },
                            body: JSON.stringify({
                                event_key: `ada:message_opened:${e.latestCampaignKey}`,
                                value: 0,
                                meta: {
                                    campaign_key: e.latestCampaignKey
                                },
                                customer_query: {
                                    token: e.chatterToken
                                }
                            })
                        }), zo("ada:campaigns:opened", {
                            campaignKey: e.latestCampaignKey
                        })
                    }
                    return {
                        type: Go.TOGGLE_CHAT_TYPE
                    }
                },
                sendUnreadMessages: t => {
                    let {
                        payload: e
                    } = t;
                    return {
                        type: Go.INCREMENT_MESSAGE_COUNT_TYPE,
                        payload: e
                    }
                },
                setConnectionState: t => {
                    let {
                        payload: e
                    } = t;
                    return {
                        type: Go.SET_CONNECTION_STATE_TYPE,
                        payload: e
                    }
                }
            };
            var ti = n(1110);

            function ei(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ni(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ei(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ri(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ri(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ri(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            class ii {
                constructor(t, e) {
                    c(this, "state", void 0), c(this, "defaultState", void 0), c(this, "messageService", void 0), this.defaultState = t, this.state = t, this.messageService = e
                }
                addChannelListener(t) {
                    const e = this.messageService.channels[t];
                    e ? e.addEventListener(((t, n, r) => {
                        this.handleEvents(e, t, n, r)
                    })) : s(`The ${t} channel should be registered first.`)
                }
                handleEvents(t, e, n, r) {
                    if ("GET" === e) {
                        const {
                            key: e
                        } = n;
                        this.getEventHandler(t, e, r)
                    }
                    e === co && this.getStateEventHandler(t, r), e === oo && this.dispatchEventHandler(t, n, r)
                }
                getEventHandler(t, e, n) {
                    const r = this.state[e];
                    t.postMessage(ao, r, n)
                }
                getStateEventHandler(t, e) {
                    t.postMessage(uo, this.state, e)
                }
                dispatchEventHandler(t, e, n) {
                    const {
                        actionKey: r,
                        payload: o
                    } = e;
                    if (i = r, !Object.values(Ho).includes(i)) return void console.error(`Action "${r} doesn't exist.`);
                    var i;
                    const s = Zo[r]({
                            currentState: this.state,
                            payload: o,
                            dispatch: (e, n) => {
                                this.dispatchEventHandler(t, {
                                    actionKey: e,
                                    payload: n
                                })
                            }
                        }),
                        a = ((t, e) => {
                            switch (e.type) {
                                case Go.TOGGLE_CHAT_TYPE:
                                    {
                                        let {
                                            hasChatOpenedAfterProactiveMessagesShown: e
                                        } = t;
                                        const {
                                            wasCampaignShownButNowClosed: n
                                        } = t;
                                        return t.isDrawerOpen || !t.latestCampaignKey || e || n || (e = !0),
                                        ti.wG.setItem("ada-embed_is-drawer-open", !t.isDrawerOpen),
                                        ni(ni({}, t), {}, {
                                            isDrawerOpen: !t.isDrawerOpen,
                                            isIntroShown: !1,
                                            drawerHasBeenOpened: !0,
                                            unreadMessageCount: 0,
                                            hasChatOpenedAfterProactiveMessagesShown: e
                                        })
                                    }
                                case Go.SET_STATE_TYPE:
                                    return ni(ni({}, t), e.payload);
                                case Go.INCREMENT_MESSAGE_COUNT_TYPE:
                                    {
                                        const {
                                            messages: n
                                        } = e.payload,
                                        r = n.filter((t => !t.campaign_key));
                                        return ni(ni({}, t), {}, {
                                            unreadMessageCount: r.length
                                        })
                                    }
                                case Go.SET_CONNECTION_STATE_TYPE:
                                    {
                                        const n = ni(ni({}, t.connections), e.payload),
                                            r = Object.values(n);
                                        let o;
                                        const i = r.every((t => t === lo.Done)),
                                            s = r.some((t => t === lo.Done)),
                                            a = r.some((t => t === lo.Failure));
                                        return o = i ? lo.Done : a ? lo.Failure : s ? lo.Loading : lo.Uninitiated,
                                        ni(ni({}, t), {}, {
                                            connections: n,
                                            appConnectionState: o
                                        })
                                    }
                                default:
                                    return t
                            }
                        })(this.state, s);
                    this.commitStateChanges(t, a, n)
                }
                commitStateChanges(t, e, n) {
                    const r = this.messageService.getAllChannels();
                    t.postMessage(io, e, n), $o()(this.state) !== $o()(e) && (this.state = oi(oi({}, this.state), e), r.forEach((t => {
                        t.isConnected && t.postMessage(so, this.state)
                    })))
                }
            }
            class si {
                constructor(t, e) {
                    c(this, "localChannel", void 0), c(this, "store", void 0), c(this, "registeredCallbacks", []), c(this, "get", (t => this.localChannel.fetch("GET", ao, {
                        key: t
                    }))), c(this, "getState", (() => this.localChannel.fetch(co, uo))), c(this, "dispatch", ((t, e) => this.localChannel.fetch(oo, io, {
                        actionKey: t,
                        payload: e
                    }))), c(this, "subscribe", (t => {
                        this.registeredCallbacks.push(t)
                    })), c(this, "addChannelListener", (t => this.store.addChannelListener(t))), this.localChannel = e.channels.local, this.store = new ii(t, e), this.store.addChannelListener("local"), this.localChannel.addEventListener(((t, e) => {
                        t === so && this.registeredCallbacks.forEach((t => {
                            t(e)
                        }))
                    }))
                }
            }
            const ai = "Notification" in window;
            const ci = "chatter",
                ui = "ada-embed_chatter-created",
                li = "ada-embed_session-token",
                pi = "inLiveChat",
                fi = "ada-embed_zd-session-id",
                di = "ada-embed_zd-previous-tags",
                hi = "ada-embed_zd-messaging-external-user-id",
                vi = "ada-embed_zd-messaging-chatter-created";

            function gi(t) {
                return ti.wG.getItem(t) || ti.Dp.getItem(t)
            }

            function yi(t) {
                return t.trim().replace(/^http(s)?:\/\/(www.)?/, "")
            }
            const mi = t => {
                switch (t.type) {
                    case "url-match":
                        return ((t, e) => {
                            const n = e.split("?")[0];
                            return t.conditions_any.some((t => {
                                switch (t.type) {
                                    case "ends-with":
                                        return n.endsWith(t.value) || (t => t.endsWith("/") ? t.slice(0, -1) : t)(n).endsWith(t.value);
                                    case "contains":
                                        return e.includes(t.value);
                                    case "equals":
                                        return function(t, e) {
                                            const n = yi(t),
                                                r = function(t) {
                                                    const e = t.split("?");
                                                    if (e.length > 1) {
                                                        const t = encodeURI(e[1]);
                                                        return new RegExp(`^${e[0]}\\?${t}$`)
                                                    }
                                                    const n = t.replace("*", ".*");
                                                    return new RegExp(`^${n}$`)
                                                }(yi(e));
                                            return null !== r.exec(n)
                                        }(n, t.value);
                                    case "regex":
                                        {
                                            const n = new RegExp(t.value);
                                            return Boolean(n.exec(e))
                                        }
                                    default:
                                        return !1
                                }
                            }))
                        })(t, window.location.href);
                    case "datetime":
                        return ((t, e) => {
                            const n = new Date(t.condition.datetime);
                            switch (t.condition.operator) {
                                case "before-exclusive":
                                    return e < n;
                                case "after-inclusive":
                                    return e >= n;
                                default:
                                    return !0
                            }
                        })(t, new Date);
                    default:
                        return !0
                }
            };

            function _i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function bi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _i(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _i(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            const wi = [...Object.values({
                en: "en",
                be: "be",
                da: "da",
                de: "de",
                es: "es",
                fi: "fi",
                fr: "fr",
                hi: "hi",
                ht: "ht",
                id: "id",
                it: "it",
                ja: "ja",
                km: "km",
                ko: "ko",
                ms: "ms",
                my: "my",
                no: "no",
                nl: "nl",
                pa: "pa",
                pt: "pt",
                ru: "ru",
                sv: "sv",
                ta: "ta",
                th: "th",
                tl: "tl",
                tr: "tr",
                uk: "uk",
                vi: "vi",
                zh: "zh",
                "zh-tw": "zh-tw",
                bg: "bg",
                ro: "ro",
                el: "el",
                hu: "hu",
                pl: "pl",
                cs: "cs",
                et: "et",
                hr: "hr",
                lt: "lt",
                lv: "lv",
                sl: "sl",
                sk: "sk",
                is: "is",
                ar: "ar",
                he: "he"
            })];

            function Si(t) {
                return wi.includes(t)
            }
            var Ei = () => {
                const t = (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "en").toLowerCase();
                if (Si(t)) return t;
                if (t.includes("-")) {
                    const e = t.split("-")[0];
                    if (Si(e)) return e
                }
                return t
            };

            function Oi(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function xi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Oi(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Oi(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ti(t, e) {
                switch (t.message_frequency) {
                    case "every-time":
                    default:
                        return !1;
                    case "once-per-session":
                        {
                            const n = ti.Dp.getFnItem("marketing_campaigns_shown");
                            return (n ? (n[e] || "").split(",") : []).includes(t.campaign_key)
                        }
                    case "once-per-user":
                        {
                            const n = ti.wG.getFnItem("marketing_campaigns_shown");
                            return (n ? (n[e] || "").split(",") : []).includes(t.campaign_key)
                        }
                }
            }

            function ki(t, e) {
                return t ? `${t},${e}` : e
            }
            async function Ci(t, e, n, r) {
                try {
                    const r = await l({
                        url: Jo(t, e, n)
                    });
                    if (function(t) {
                            return ["handle", "rollout", "chat", "features"].every((e => void 0 !== t[e]))
                        }(r)) return {
                        client: r
                    }
                } catch (t) {
                    t instanceof Error && eo.trackException(t)
                }
                try {
                    return await l({
                        url: Qo({
                            name: "api",
                            handle: t,
                            cluster: e,
                            domain: n,
                            qp: {
                                url: window.location.href,
                                language: r
                            }
                        })
                    })
                } catch (t) {
                    s("Failed to fetch client from API.")
                }
                return null
            }
            var ji = n(3263),
                Pi = n(5683),
                Ii = n(9356);
            const Ri = ["chat", "chat_button", "features", "handle", "language", "persistence", "privacy", "rollout", "alternative_bot", "tint", "translated_languages"];
            class Ni {
                constructor(t) {
                    c(this, "tint", void 0), c(this, "chat", void 0), c(this, "intro", void 0), c(this, "handle", void 0), c(this, "rollout", void 0), c(this, "alternative_bot", void 0), c(this, "language", void 0), c(this, "privacy", void 0), c(this, "features", void 0), c(this, "persistence", void 0), c(this, "chat_button", void 0), c(this, "business_events", void 0), c(this, "marketing_campaigns_order", void 0), c(this, "marketing_campaigns", void 0), c(this, "ui_settings", void 0), c(this, "translated_languages", void 0);
                    const {
                        chat: e,
                        chat_button: n,
                        features: r,
                        handle: o,
                        language: i,
                        persistence: s,
                        privacy: a,
                        rollout: u,
                        alternative_bot: l,
                        tint: p,
                        translated_languages: f
                    } = t, d = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Ii(t);
                            for (r = 0; r < i.length; r++) n = i[r], Pi(e).call(e, n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (ji) {
                            var i = ji(t);
                            for (r = 0; r < i.length; r++) n = i[r], Pi(e).call(e, n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, Ri);
                    this.chat = e, this.chat_button = n, this.features = r, this.handle = o, this.language = i, this.persistence = s, this.privacy = a, this.rollout = u, this.tint = p, this.translated_languages = f, this.alternative_bot = l, Object.assign(this, d)
                }
            }

            function Di(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ai(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Di(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Di(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            const Li = "primary",
                Mi = "alternative",
                Fi = "botAssignment";
            async function Bi(t, e, n, r) {
                const {
                    cluster: o,
                    domain: i,
                    language: s
                } = r;
                if (t === Li) return e;
                if (t === Mi) {
                    const t = await Ci(n, o, i, s || Ei());
                    return t ? new Ni(t.client) : null
                }
                return null
            }

            function Ui() {
                return new URL(window.location.href).searchParams.get("adaBotHandleOverride")
            }

            function $i(t) {
                const e = function(t) {
                    let e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return "function" == typeof Event ? e = new Event(t, {
                        bubbles: n,
                        cancelable: r
                    }) : (e = document.createEvent("Event"), e.initEvent(t, n, r)), e
                }(t);
                window.dispatchEvent(e)
            }
            const Hi = $i.bind(void 0, "locationchange");

            function Gi(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Gi(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Wi(t, e, n) {
                ti.wG.setFnItem("rolloutGroup", qi(qi({}, ti.wG.getFnItem("rolloutGroup")), {}, {
                    [t]: e
                })), ti.wG.setFnItem("rolloutLastValue", qi(qi({}, ti.wG.getFnItem("rolloutLastValue")), {}, {
                    [t]: n
                }))
            }
            let zi = function(t) {
                return t.NOTIFICATION_CLICK = "ada:web_notification:click", t
            }({});
            var Ki = n(2088);

            function Vi() {
                return Vi = Ki || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, Vi.apply(this, arguments)
            }

            function Yi(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            class Ji extends A {
                constructor() {
                    super(...arguments), c(this, "state", {
                        initialized: !1,
                        propsFromState: {},
                        propsFromDispatch: {}
                    })
                }
                componentDidMount() {
                    const {
                        store: t
                    } = this.props;
                    t.subscribe((t => {
                        this.setState(this.mapStateAndDispatch(t))
                    })), t.getState().then((t => {
                        this.setState(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Yi(Object(n), !0).forEach((function(e) {
                                    c(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Yi(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            initialized: !0
                        }, this.mapStateAndDispatch(t)))
                    }))
                }
                mapStateAndDispatch(t) {
                    const {
                        mapStateToProps: e,
                        mapDispatchToProps: n,
                        store: r
                    } = this.props;
                    return {
                        propsFromState: e ? e(t) : {},
                        propsFromDispatch: n ? n(r.dispatch) : {}
                    }
                }
                render() {
                    const {
                        WrappedComponent: t
                    } = this.props, {
                        propsFromState: e,
                        propsFromDispatch: n,
                        initialized: r
                    } = this.state;
                    return r ? R(t, Vi({}, this.props, e, n)) : null
                }
            }

            function Xi(t, e) {
                return function(n) {
                    return r => R(Z.Consumer, null, (o => R(Ji, Vi({
                        store: o
                    }, r, {
                        WrappedComponent: n,
                        mapStateToProps: t,
                        mapDispatchToProps: e
                    }))))
                }
            }

            function Qi(t, e) {
                return n => e(t, n)
            }
            const Zi = ["ar", "he"];

            function ts(t) {
                const {
                    language: e,
                    align: n
                } = t;
                return "auto" === n ? (t => Boolean(t && Zi.includes(t)) || !1)(e) ? "left" : "right" : n || "right"
            }
            const es = "chat",
                ns = "x-storage",
                rs = "normal",
                os = "session";

            function is(t, e, n) {
                n === rs && ti.wG.setItem(t, e), n === os && ti.Dp.setItem(t, e)
            }
            const ss = "The format of manifest file is incorrect",
                as = async t => {
                    if (window.__AdaChatVersion) return window.__AdaChatVersion;
                    const {
                        cluster: e,
                        domain: n
                    } = t;
                    if ("att" === e || null != n && n.match(/ada-(dev|dev2|stage)/)) return;
                    const r = await (async () => {
                        try {
                            return (await fetch("https://static.ada.support/chat-manifest.json")).json()
                        } catch (t) {
                            return void h("Failed to load chat manifest", {
                                hostPage: window.location.href
                            })
                        }
                    })();
                    return r ? (t => {
                        if (!(t => {
                                if ("object" != typeof t) throw new i(ss);
                                if (null === t) throw new i(ss);
                                const e = t;
                                if (!Array.isArray(e.versions)) throw new i(ss);
                                if (!e.versions.length) throw new i(ss);
                                if ("string" != typeof e.versions[0].hash) throw new i(ss);
                                if (!e.versions[0].hash) throw new i(ss);
                                if ("number" != typeof e.versions[0].weight) throw new i(ss);
                                if (1 !== e.versions.reduce(((t, e) => t + e.weight), 0)) throw new i('The sum of version weights must be "1"');
                                return !0
                            })(t)) throw new i(ss);
                        const e = JSON.stringify(t);
                        if (e === ti.wG.getItem("ada-embed_chat-manifest-cache")) {
                            const t = ti.wG.getItem("ada-embed_chat-assigned-version");
                            if (t) return t
                        }
                        const n = Math.random(),
                            {
                                versions: r
                            } = t,
                            o = r.map((t => ({
                                value: t,
                                sort: Math.random()
                            }))).sort(((t, e) => t.sort - e.sort)).map((t => {
                                let {
                                    value: e
                                } = t;
                                return e
                            }));
                        let {
                            hash: s
                        } = o[o.length - 1];
                        for (let t = 0; t < o.length; t += 1) {
                            const e = o[t];
                            if (n <= e.weight) {
                                s = e.hash;
                                break
                            }
                        }
                        return ti.wG.setItem("ada-embed_chat-assigned-version", s), ti.wG.setItem("ada-embed_chat-manifest-cache", e), s
                    })(r) : void 0
                };
            var cs = Xi((function(t) {
                    const {
                        handle: e,
                        domain: n,
                        cluster: r,
                        appConnectionState: o
                    } = t;
                    return {
                        handle: e,
                        domain: n,
                        cluster: r,
                        appConnectionState: o
                    }
                }), (function(t) {
                    return {
                        setGlobalState: Qi(Ho.SET_STATE_ACTION, t),
                        setConnectionState: Qi(Ho.SET_CONNECTION_STATE, t)
                    }
                }))(class extends A {
                    constructor() {
                        super(...arguments), c(this, "iframeRef", {
                            current: null
                        }), c(this, "channel", void 0)
                    }
                    getChannel() {
                        const {
                            name: t,
                            store: e,
                            messageService: n
                        } = this.props;
                        if (this.channel) return this.channel;
                        const r = new URL(this.iframeRef.current.src).origin,
                            o = n.registerFrameChannel(t, this.iframeRef.current.contentWindow, r);
                        return e.addChannelListener(t), o
                    }
                    componentDidMount() {
                        this.connectFrame()
                    }
                    componentDidUpdate() {
                        const {
                            appConnectionState: t
                        } = this.props;
                        t === lo.Done && this.getChannel().postMessage("ALL_FRAMES_LOADED")
                    }
                    componentWillUnmount() {
                        const {
                            messageService: t,
                            name: e
                        } = this.props;
                        t.unregisterChannel(e)
                    }
                    get url() {
                        const {
                            name: t,
                            handle: e,
                            domain: n,
                            cluster: r
                        } = this.props;
                        return function(t) {
                            let e, {
                                frameName: n,
                                handle: r,
                                cluster: o,
                                domain: i
                            } = t;
                            return e = `https://${r}${o?`.${o}`:""}.${i||Yo}.support`, `${e}/embed/${n}/369dae9/index.html`
                        }({
                            frameName: t,
                            handle: e,
                            domain: n,
                            cluster: r
                        })
                    }
                    async connectFrame() {
                        const {
                            name: t,
                            setGlobalState: e,
                            setConnectionState: n
                        } = this.props;
                        let r, o;
                        this.channel = this.getChannel(), await n({
                            [t]: lo.Loading
                        }), r = window.setTimeout((() => {
                            this.getChannel().removeEventListener(o), n({
                                [t]: lo.Failure
                            })
                        }), 6e4), o = this.channel.addEventListener(((i, s) => {
                            (async () => {
                                i === `${t}_INIT` && (this.getChannel().removeEventListener(o), this.getChannel().clearTrackedTimeout(r), this.getChannel().isConnected = !0, s && await e(s), await n({
                                    [t]: lo.Done
                                }))
                            })()
                        }))
                    }
                    render() {
                        const {
                            name: t,
                            roleDescription: e,
                            onTransitionEnd: n,
                            styles: r,
                            title: o
                        } = this.props, i = `ada-${t}-frame`;
                        return R("iframe", {
                            src: this.url,
                            scrolling: "no",
                            style: r,
                            frameBorder: "0",
                            ref: this.iframeRef,
                            id: i,
                            name: i,
                            title: o || i,
                            className: i,
                            onTransitionEnd: n,
                            "aria-roledescription": e,
                            role: "application"
                        })
                    }
                }),
                us = Xi((function(t) {
                    const {
                        client: e,
                        isDrawerOpen: n
                    } = t;
                    return {
                        client: e,
                        isDrawerOpen: n
                    }
                }))(class extends A {
                    constructor() {
                        super(...arguments), c(this, "state", {
                            delayedIsShown: this.isShown
                        }), c(this, "handleOnTransitionEndBound", this.handleOnTransitionEnd.bind(this))
                    }
                    get isShown() {
                        const {
                            isDrawerOpen: t
                        } = this.props;
                        return !t
                    }
                    get styles() {
                        var t, e;
                        const {
                            client: n,
                            frameWidth: r,
                            adaSettings: o
                        } = this.props;
                        if (!n) return "";
                        const i = n.chat_button.size,
                            s = null === (t = n.ui_settings) || void 0 === t || null === (e = t.embed) || void 0 === e ? void 0 : e.style,
                            {
                                delayedIsShown: a
                            } = this.state,
                            c = i + 48,
                            u = i + 48;
                        let l = `\n      position: fixed;\n      bottom: 0px;\n      ${ts(o)}: 0px;\n      z-index: 10000;\n      height: ${c}px;\n      width: ${c}px;\n      overflow: hidden;\n      visibility: ${this.isShown?"visible":"hidden"};\n      opacity: ${this.isShown?"1":"0"};\n      transition: visibility 200ms ease, opacity 200ms ease;\n      transform: translate(0, 10%);\n      transition: visibility 250ms ease, opacity 250ms ease, transform 250ms ease;\n      ${ts(o)}: 0;\n      bottom: 0;\n\n      ${this.isShown?"transform: translate(0, 0);":""}\n    `;
                        return l += "text" === s ? `\n        width: ${r}px;\n        height: 92px;\n    ` : `\n        width: ${u}px;\n        height: ${u}px;\n      `, this.isShown || a ? l : l + "\n      top: -9999px !important;\n      left: -9999px !important;\n    "
                    }
                    handleOnTransitionEnd() {
                        this.setState({
                            delayedIsShown: this.isShown
                        })
                    }
                    render() {
                        const {
                            client: t
                        } = this.props;
                        return R(Z.Consumer, null, (e => R(tt.Consumer, null, (n => R(cs, {
                            title: null != t && t.handle ? `${t.handle.charAt(0).toUpperCase()+t.handle.slice(1)} Chat Button Frame` : "Chat Button Frame",
                            styles: this.styles,
                            name: "button",
                            store: e,
                            messageService: n,
                            onTransitionEnd: this.handleOnTransitionEndBound
                        })))))
                    }
                });
            const ls = null !== /(iPhone)|(iPod)|(android)|(webOS)/i.exec(navigator.userAgent);
            class ps extends A {
                constructor() {
                    super(...arguments), c(this, "iframeRef", {
                        current: null
                    }), c(this, "pageScrollLocked", !1), c(this, "documentBodyOverflow", ""), c(this, "channel", void 0), c(this, "chatRenderTimeout", void 0), c(this, "url", this.getIframeSrc()), c(this, "state", {
                        isMounted: !1,
                        closeTransitionTime: 200
                    })
                }
                componentDidMount() {
                    const {
                        adaSettings: t,
                        handle: e,
                        setChatHasBeenRendered: n,
                        messageService: r,
                        store: o
                    } = this.props;
                    this.rememberInitialPageStyle(), n();
                    const i = new URL(this.iframeRef.current.src).origin;
                    this.channel = r.registerFrameChannel("chat", this.iframeRef.current.contentWindow, i), o.addChannelListener("chat"), this.bindChatEventHandlers(), this.handleScrollLock(), h("Chat frame mount", {
                        handle: e,
                        embedSettings: t
                    }), setTimeout((() => {
                        this.setState({
                            isMounted: !0
                        })
                    }), 50)
                }
                componentDidUpdate(t) {
                    const {
                        isDrawerOpen: e
                    } = this.props;
                    e !== t.isDrawerOpen && this.handleScrollLock()
                }
                componentWillUnmount() {
                    const {
                        messageService: t
                    } = this.props;
                    t.unregisterChannel("chat")
                }
                get darkMode() {
                    var t, e;
                    const {
                        client: n
                    } = this.props;
                    if (null == n || null === (t = n.ui_settings) || void 0 === t || null === (e = t.chat) || void 0 === e || !e.theme) return !1;
                    const {
                        theme: r
                    } = n.ui_settings.chat, o = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    return "dark" === r || "auto" === r && o
                }
                getIframeSrc() {
                    const {
                        handle: t,
                        domain: e,
                        cluster: n,
                        greeting: r,
                        language: o,
                        skipGreeting: i,
                        wasIntroShown: s,
                        privateMode: a,
                        testMode: c,
                        adaSettings: u,
                        chatVersion: l
                    } = this.props, p = new URL(window.location.href).searchParams.get("adaSMSToken"), f = {
                        embedVersion: "369dae9".slice(0, 7),
                        greeting: r,
                        language: o,
                        skipGreeting: i,
                        introShown: s,
                        embed2: 1,
                        private: a ? 1 : null,
                        test_user: c ? 1 : null,
                        align: ts(u)
                    };
                    return p && (f.adaSMSToken = p),
                        function(t) {
                            let {
                                handle: e,
                                version: n,
                                cluster: r,
                                domain: o,
                                qp: i
                            } = t;
                            const s = Xo(Vo(Vo({}, i), {}, {
                                    version: n
                                })),
                                a = s.length ? "?" : "";
                            return `https://${e}${r?`.${r}`:""}.${o||Yo}.support/chat/${a}${s}`
                        }({
                            version: l,
                            handle: t,
                            cluster: n,
                            domain: e,
                            qp: f
                        })
                }
                get styles() {
                    var t, e;
                    const {
                        isDrawerOpen: n,
                        client: r,
                        testMode: o,
                        adaSettings: i
                    } = this.props;
                    if (!r) return "";
                    const {
                        isMounted: s,
                        closeTransitionTime: a
                    } = this.state, c = n && s, u = this.darkMode ? "#121212" : "#fff", l = "rectangular" === (null === (t = r.ui_settings) || void 0 === t || null === (e = t.chat) || void 0 === e ? void 0 : e.style) ? "8px" : "16px", p = o ? "773px" : "725px";
                    return `\n        position: fixed;\n\n        ${ls?`\n          ${ts(i)}: 0;\n          bottom: 0;\n          height: 100%;\n        `:`\n          height: 90%;\n          ${ts(i)}: 24px;\n          bottom: 24px;\n          max-width: 375px;\n          max-height: ${p};\n          border-radius: ${l};\n        `}\n\n        width: 100%;\n        ${this.hasVisibleProactiveMessages||c?"pointer-events: auto":"pointer-events: none"};\n        opacity: 0;\n        transform: translate(0, 100px);\n        transition: transform ${a}ms ease, opacity ${a}ms ease, visibility 0ms linear ${a}ms;\n        box-shadow: 0px 12px 48px 4px rgba(0, 0, 0, 0.12);\n        background-color: ${u};\n        visibility: hidden;\n        z-index: 10010;\n\n        ${c&&"\n          opacity: 1;\n          transform: translate(0, 0);\n          transition: transform 300ms ease, opacity 300ms ease;\n          visibility: visible;\n        "}\n      `
                }
                get hasVisibleProactiveMessages() {
                    const {
                        chatDimensions: t
                    } = this.props;
                    return Boolean(null == t ? void 0 : t.height)
                }
                get visibleProactiveStyles() {
                    var t, e;
                    const {
                        chatDimensions: n,
                        client: r,
                        adaSettings: o
                    } = this.props;
                    if (!r) return "";
                    const i = "text" === (null === (t = r.ui_settings) || void 0 === t || null === (e = t.embed) || void 0 === e ? void 0 : e.style) ? 41 : r.chat_button.size - 3;
                    return `\n      box-shadow: none;\n      background: none;\n      height: ${null==n?void 0:n.height}px !important;\n      width: ${null==n?void 0:n.width}px !important;\n      ${ts(o)}: 0;\n      bottom: ${i}px;\n      z-index: 9999;\n    `
                }
                static get parentElementStyles() {
                    return "\n      height: 100%;\n      width: 100%;\n    "
                }
                get chooseStyles() {
                    const {
                        parentElement: t,
                        client: e,
                        isDrawerOpen: n,
                        drawerHasBeenOpened: r
                    } = this.props;
                    if (t) return ps.parentElementStyles;
                    if (!e) throw new i("`client` is not defined");
                    return e.features.afm_proactive_messaging && !n ? this.hasVisibleProactiveMessages ? `\n        ${this.styles};\n        opacity: 1;\n        transform: translate(0, 0);\n        visibility: visible;\n        height: 0 !important;\n        transition: none;\n        ${this.visibleProactiveStyles};\n      ` : `\n          ${this.styles};\n          opacity: 0;\n          transform: translate(375px, 0);\n          visibility: hidden;\n          transform: translate(0, 100px);\n\n          ${ls?"\n            height: 0;\n          ":"\n            height: 90%;\n          "}\n          ${!r&&"\n            transition: none;\n          "}\n        ` : this.styles
                }
                handleScrollLock() {
                    const {
                        isDrawerOpen: t,
                        parentElement: e
                    } = this.props, {
                        closeTransitionTime: n
                    } = this.state;
                    ls && (e || (t ? this.lockDocumentBodyFromScrolling() : (this.pageScrollLocked && this.unlockDocumentBodyFromScrolling(), this.iframeRef.current.ontransitionend = () => {
                        this.iframeRef.current.ontransitionend = null, setTimeout((() => {
                            this.collapseIframe()
                        }), n)
                    })))
                }
                collapseIframe() {
                    const {
                        isDrawerOpen: t
                    } = this.props;
                    t || (this.iframeRef.current.style.width = 0, this.iframeRef.current.style.height = 0)
                }
                rememberInitialPageStyle() {
                    this.documentBodyOverflow = window.document.body.style.overflow
                }
                lockDocumentBodyFromScrolling() {
                    this.pageScrollLocked = !0, this.documentBodyOverflow = window.document.body.style.overflow, window.document.body.style.overflow = "hidden"
                }
                unlockDocumentBodyFromScrolling() {
                    window.document.body.style.overflow = this.documentBodyOverflow, this.pageScrollLocked = !1
                }
                notificationOnClickHandler(t) {
                    const {
                        toggleChat: e
                    } = this.props;
                    window.focus(), t || e()
                }
                handleNotifications(t) {
                    const {
                        title: e,
                        body: n,
                        icon: r
                    } = t, {
                        isDrawerOpen: o,
                        parentElement: i
                    } = this.props, s = o || Boolean(i);
                    ! function(t, e, n, r) {
                        if (!ai || "granted" !== Notification.permission || !document.hidden && e) return null;
                        const o = new Notification(t, r);
                        o.onclick = () => {
                            n && n(), o.close()
                        }
                    }(e, s, this.notificationOnClickHandler.bind(this, s), {
                        body: n,
                        icon: r
                    })
                }
                async handleChatEvent(t, e, n) {
                    const {
                        adaSettings: r,
                        setGlobalState: o,
                        setConnectionState: s
                    } = this.props;
                    switch (t) {
                        case "GET_WINDOW_ORIGIN":
                            if (!this.channel) throw new i("`this.channel` is not defined");
                            this.channel.postMessage("SET_WINDOW_ORIGIN", window.location, n);
                            break;
                        case "CHAT_STARTED":
                            if (!this.channel) throw new i("`this.channel` is not defined");
                            clearTimeout(this.chatRenderTimeout), this.channel.isConnected = !0, s({
                                chat: lo.Done
                            });
                            break;
                        case "CHAT_WEBSOCKET_CONNECTED":
                            o({
                                isChatWebsocketConnected: !0
                            });
                            break;
                        case "PUBLISH_EVENT":
                            {
                                const {
                                    eventKey: t,
                                    data: n
                                } = e;zo(t, n);
                                break
                            }
                        case "ANALYTICS":
                            {
                                const {
                                    analytics: t
                                } = e,
                                {
                                    analyticsCallback: n
                                } = r;n && n(t);
                                break
                            }
                        case "CHATTER":
                            {
                                const {
                                    client: t
                                } = this.props,
                                {
                                    chatter: n,
                                    created: s,
                                    sessionToken: a
                                } = e,
                                {
                                    chatterTokenCallback: c
                                } = r;
                                if (!t) throw new i("`client` is undefined");! function(t, e) {
                                    const {
                                        persistence: n
                                    } = t, {
                                        chatter: r,
                                        created: o,
                                        sessionToken: i
                                    } = e;
                                    is(ci, r, n), is(ui, o, n), i && is(li, i, n)
                                }(t, e),
                                c && c(n),
                                await o({
                                    chatterToken: n,
                                    chatterCreated: s,
                                    sessionToken: a
                                });
                                break
                            }
                        case "ZD_SESSION":
                            {
                                const {
                                    client: t
                                } = this.props,
                                {
                                    zdSessionId: n,
                                    zdPreviousTags: r
                                } = e;
                                if (!t) throw new i("`client` is undefined");await o({
                                    zdSessionId: n
                                });
                                const s = t.persistence === rs ? ti.wG : t.persistence === os ? ti.Dp : null;s && (null === n ? s.removeItem(fi) : s.setItem(fi, n), null === r ? s.removeItem(di) : s.setItem(di, r));
                                break
                            }
                        case "ZD_MESSAGING_HANDOFF":
                            {
                                const {
                                    client: t
                                } = this.props,
                                {
                                    zdMessagingExternalUserId: n,
                                    zdMessagingChatterCreated: r
                                } = e;
                                if (!t) throw new i("`client` is undefined");await o({
                                    zdMessagingExternalUserId: n,
                                    zdMessagingChatterCreated: r
                                }),
                                null === n ? ti.wG.removeItem(hi) : ti.wG.setItem(hi, n),
                                null === r ? ti.wG.removeItem(vi) : ti.wG.setItem(vi, r);
                                break
                            }
                        case "LIVE_CHAT_UPDATE":
                            {
                                const {
                                    client: t
                                } = this.props,
                                {
                                    inLiveChat: n
                                } = e;
                                if (await o({
                                        chatterInLiveChat: n
                                    }), !t) throw new i("`client` is not defined");t.persistence === rs ? ti.wG.setItem(pi, n) : t.persistence === os && ti.Dp.setItem(pi, n);
                                break
                            }
                        case "CUSTOM_JAVASCRIPT":
                            {
                                const {
                                    eventCallbacks: t
                                } = r;
                                if (!t) break;
                                const n = e.event_data,
                                    o = t[n.event_name],
                                    i = t["*"];o && o(n),
                                i && i(n);
                                break
                            }
                        case "RESET_FROM_CHAT":
                            {
                                const {
                                    resetChat: t
                                } = this.props;t();
                                break
                            }
                        case "JWT_AUTH":
                            {
                                const {
                                    zdChatterAuthCallback: t
                                } = r;
                                if (t) try {
                                    t((t => {
                                        if (!this.channel) throw new i("`this.channel` is not defined");
                                        this.channel.postMessage(ro, {
                                            token: t
                                        }, n)
                                    }))
                                } catch (t) {
                                    if (console.warn("Function for zdChatterAuthCallback produced an error - please ensure the callback is functioning normally"), !this.channel) throw new i("`this.channel` is not defined");
                                    this.channel.postMessage(ro, {}, n)
                                } else {
                                    if (!this.channel) throw new i("`this.channel` is not defined");
                                    this.channel.postMessage(ro, {}, n)
                                }
                                break
                            }
                        case "CREATE_NOTIFICATION":
                            this.handleNotifications(e);
                            break;
                        case "BROWSER_HAS_NOTIFICATIONS":
                            if (!this.channel) throw new i("`this.channel` is not defined");
                            this.channel.postMessage("BROWSER_HAS_NOTIFICATIONS_RESPONSE", {
                                browserHasNotificationSupport: ai
                            });
                            break;
                        case "REQUEST_NOTIFICATIONS":
                            ai && Notification.requestPermission();
                            break;
                        case "END_CONVERSATION":
                            {
                                const {
                                    conversationEndCallback: t
                                } = r;t && t(e);
                                break
                            }
                    }
                }
                bindChatEventHandlers() {
                    const {
                        messageService: t
                    } = this.props, e = t.getChannel("chat");
                    if (!e) throw new i("`channel` is not defined");
                    e.addEventListener(((t, e, n) => {
                        this.handleChatEvent(t, e, n)
                    }))
                }
                frameLoaded() {
                    const {
                        handle: t,
                        adaSettings: e
                    } = this.props, {
                        chatFrameTimeoutCallback: n
                    } = e;
                    this.chatRenderTimeout = window.setTimeout((() => {
                        var r;
                        h("Chat frame took over 5 seconds to respond", {
                            handle: t,
                            embedSettings: e
                        }), null !== (r = this.channel) && void 0 !== r && r.isConnected || (n && n(), zo("ada:chat_frame_timeout", void 0))
                    }), 5e3)
                }
                render() {
                    const {
                        client: t,
                        isDrawerOpen: e
                    } = this.props, n = "ada-chat-frame";
                    return R("iframe", {
                        src: this.url,
                        scrolling: "no",
                        style: this.chooseStyles,
                        frameBorder: "0",
                        ref: this.iframeRef,
                        id: n,
                        name: n,
                        title: n,
                        className: n,
                        "aria-expanded": e,
                        "aria-modal": e,
                        "aria-roledescription": null != t && t.handle ? `${t.handle.charAt(0).toUpperCase()+t.handle.slice(1)} Chat Window` : "Chat Window",
                        allowTransparency: !0,
                        allowFullScreen: !0,
                        onLoad: this.frameLoaded.bind(this)
                    })
                }
            }
            var fs = Xi((function(t) {
                    const {
                        handle: e,
                        domain: n,
                        cluster: r,
                        greeting: o,
                        language: i,
                        wasIntroShown: s,
                        isDrawerOpen: a,
                        parentElement: c,
                        privateMode: u,
                        testMode: l,
                        client: p,
                        chatDimensions: f,
                        drawerHasBeenOpened: d
                    } = t;
                    return {
                        handle: e,
                        domain: n,
                        cluster: r,
                        greeting: o,
                        language: i,
                        wasIntroShown: s,
                        isDrawerOpen: a,
                        parentElement: c,
                        privateMode: u,
                        testMode: l,
                        client: p,
                        chatDimensions: f,
                        drawerHasBeenOpened: d
                    }
                }), (function(t) {
                    return {
                        setConnectionState: Qi(Ho.SET_CONNECTION_STATE, t),
                        setGlobalState: Qi(Ho.SET_STATE_ACTION, t),
                        toggleChat: Qi(Ho.TOGGLE_CHAT_ACTION, t)
                    }
                }))(ps),
                ds = Xi((function(t) {
                    const {
                        client: e,
                        introDimensions: n,
                        isIntroShown: r,
                        isDrawerOpen: o,
                        adaSettings: i
                    } = t;
                    return {
                        client: e,
                        introDimensions: n,
                        isIntroShown: r,
                        isDrawerOpen: o,
                        adaSettings: i
                    }
                }))(class extends A {
                    get isShown() {
                        const {
                            isIntroShown: t,
                            isDrawerOpen: e
                        } = this.props;
                        return t && !e
                    }
                    get styles() {
                        const {
                            client: t,
                            introDimensions: e,
                            adaSettings: n
                        } = this.props;
                        if (!t) return "display: none";
                        const r = t.chat_button.size,
                            o = 16 + r,
                            i = `\n      position: fixed;\n      ${ts(n)}: ${o}px;\n      bottom: 8px;\n      z-index: 10000;\n      max-height: 300px;\n      max-width: 250px;\n      opacity: ${this.isShown?"1":"0"};\n      height: ${e.height}px;\n      width: ${e.width}px;\n      max-height: auto;\n      max-width: 350px;\n      z-index: 9999;\n      ${ts(n)}: 0;\n      bottom: ${r-20}px;\n    `;
                        return this.isShown ? i : i + '\n      visibility: "hidden";\n      top: -9999px !important;\n      left: -9999px !important;\n    '
                    }
                    render() {
                        return R(Z.Consumer, null, (t => R(tt.Consumer, null, (e => R(cs, {
                            styles: this.styles,
                            name: "intro",
                            store: t,
                            messageService: e
                        })))))
                    }
                }),
                hs = Xi((function(t) {
                    const {
                        isDrawerOpen: e
                    } = t;
                    return {
                        isDrawerOpen: e
                    }
                }))(class extends A {
                    constructor() {
                        super(...arguments), c(this, "state", {
                            delayedIsShown: this.isShown
                        }), c(this, "handleOnTransitionEndBound", this.handleOnTransitionEnd.bind(this))
                    }
                    get isShown() {
                        const {
                            isDrawerOpen: t
                        } = this.props;
                        return t
                    }
                    get styles() {
                        const {
                            delayedIsShown: t
                        } = this.state, e = `\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 9998;\n      visibility: ${this.isShown?"visible":"hidden"};\n      opacity: ${this.isShown?"1":"0"};\n      transition: visibility 200ms ease, opacity 200ms ease;\n    `;
                        return this.isShown || t ? e : e + "\n      top: -9999px !important;\n      left: -9999px !important;\n    "
                    }
                    handleOnTransitionEnd() {
                        this.setState({
                            delayedIsShown: this.isShown
                        })
                    }
                    render() {
                        return R(Z.Consumer, null, (t => R(tt.Consumer, null, (e => R(cs, {
                            styles: this.styles,
                            name: "drawer-mask",
                            store: t,
                            messageService: e,
                            onTransitionEnd: this.handleOnTransitionEndBound
                        })))))
                    }
                });
            class vs extends A {
                static get styles() {
                    return "\n      position: absolute;\n      top: -9999px;\n      left: -9999px;\n      visibility: hidden;\n      height: 0;\n      width: 0;\n    "
                }
                render() {
                    return R(Z.Consumer, null, (t => R(tt.Consumer, null, (e => R(cs, {
                        styles: vs.styles,
                        name: ns,
                        store: t,
                        messageService: e
                    })))))
                }
            }
            var gs = Xi()(vs);

            function ys(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ms(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ys(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ys(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            const _s = Xi((function(t) {
                const {
                    client: e,
                    hideMask: n,
                    metaFields: r,
                    sensitiveMetaFields: o,
                    isChatWebsocketConnected: i,
                    isDrawerOpen: s,
                    chatterToken: a,
                    sessionToken: c,
                    appConnectionState: u,
                    drawerHasBeenOpened: l,
                    chatterInLiveChat: p,
                    chatDimensions: f,
                    isIntroShown: d,
                    language: h,
                    wasCampaignShownButNowClosed: v
                } = t;
                return {
                    client: e,
                    hideMask: n,
                    metaFields: r,
                    sensitiveMetaFields: o,
                    isChatWebsocketConnected: i,
                    isDrawerOpen: s,
                    chatterToken: a,
                    sessionToken: c,
                    appConnectionState: u,
                    drawerHasBeenOpened: l,
                    chatterInLiveChat: p,
                    chatDimensions: f,
                    isIntroShown: d,
                    language: h,
                    wasCampaignShownButNowClosed: v
                }
            }), (function(t) {
                return {
                    setGlobalState: Qi(Ho.SET_STATE_ACTION, t)
                }
            }))(class extends A {
                constructor() {
                    super(...arguments), c(this, "state", {
                        campaignToTrigger: null,
                        campaignTriggerOptions: {
                            ignoreFrequency: !1,
                            ignoreStatus: !1
                        },
                        chatHasBeenRendered: !1,
                        hideChatOverride: !1,
                        hideIntroOverride: !1,
                        followUpResponseId: null,
                        chatVersion: void 0,
                        readyToRenderChatFrame: !1
                    }), c(this, "resetChatBound", this.resetChat.bind(this)), c(this, "locationChangeHandlerBound", this.locationChangeHandler.bind(this)), c(this, "setChatHasBeenRenderedBound", this.setChatHasBeenRendered.bind(this)), c(this, "frameWidth", 0), c(this, "bindEmbedActionEventHandlerOnce", (() => {
                        let t = !1;
                        return () => {
                            t || (this.bindEmbedActionEventHandler(), t = !0)
                        }
                    })())
                }
                async componentDidMount() {
                    const {
                        adaSettings: t,
                        setGlobalState: e
                    } = this.props, {
                        onAdaEmbedLoaded: n
                    } = t;
                    e({
                        adaSettings: t
                    }), n && n(), this.initialize(), this.notificationPermHandler(), window.history.pushState = (t => function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        const o = t.apply(window.history, n);
                        return $i("pushstate"), $i("locationchange"), o
                    })(window.history.pushState), window.history.replaceState = (t => function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        const o = t.apply(window.history, n);
                        return $i("replacestate"), $i("locationchange"), o
                    })(window.history.replaceState), window.addEventListener("popstate", Hi), "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", (t => {
                        const {
                            data: e
                        } = t;
                        ! function(t) {
                            t.type === zi.NOTIFICATION_CLICK && setTimeout((() => {
                                var t;
                                return null === (t = window.adaEmbed) || void 0 === t ? void 0 : t.handleNotification()
                            }), 0)
                        }(e)
                    })), window.addEventListener("locationchange", this.locationChangeHandlerBound);
                    const r = await as(t);
                    this.setState({
                        chatVersion: r,
                        readyToRenderChatFrame: !0
                    })
                }
                onAppConnectionStateChange() {
                    const {
                        appConnectionState: t,
                        initializationReject: e,
                        initializationResolve: n,
                        adaSettings: r
                    } = this.props;
                    switch (t) {
                        case lo.Done:
                            if (!n) throw new i("`initializationResolve` is undefined");
                            n(), this.bindEmbedActionEventHandlerOnce(), r.adaReadyCallback && r.adaReadyCallback({
                                isRolledOut: !0
                            });
                            break;
                        case lo.Failure:
                            if (!e) throw new i("`initializationReject` is undefined");
                            e(new i("Embed startup failed. This is likely because one or all frame components failed to connect. Please check your internet connection.")), this.unmount()
                    }
                }
                componentDidUpdate(t) {
                    var e, n;
                    const {
                        isDrawerOpen: r,
                        appConnectionState: o,
                        chatterToken: i,
                        client: a,
                        isChatWebsocketConnected: c,
                        adaSettings: u,
                        chatterInLiveChat: p,
                        messageService: f,
                        wasCampaignShownButNowClosed: d
                    } = this.props, {
                        toggleCallback: h
                    } = u;
                    "text" === (null == a || null === (e = a.ui_settings) || void 0 === e || null === (n = e.embed) || void 0 === n ? void 0 : n.style) && this.computeButtonFrameWidth(), t.appConnectionState !== o && this.onAppConnectionStateChange();
                    const {
                        campaignToTrigger: g,
                        campaignTriggerOptions: y,
                        followUpResponseId: m
                    } = this.state;
                    if (!g || !g.message_text && !i || !g.message_text && !c || !g.response_id && o !== lo.Done || r || p || function(t) {
                            let {
                                adaSettings: e,
                                chatterToken: n,
                                campaign: r,
                                ignoreStatus: o,
                                ignoreFrequency: i,
                                clearCampaignToTrigger: a,
                                messageService: c
                            } = t;
                            const {
                                handle: u,
                                cluster: p,
                                domain: f
                            } = e;
                            if (a(), i || !Ti(r, u))
                                if ("active" === r.status || o)
                                    if (function(t, e, n) {
                                            switch (e) {
                                                case "every-time":
                                                default:
                                                    break;
                                                case "once-per-session":
                                                    {
                                                        const e = ti.Dp.getFnItem("marketing_campaigns_shown"),
                                                            r = ki(e && e[n] || "", t);ti.Dp.setFnItem("marketing_campaigns_shown", xi(xi({}, e), {}, {
                                                            [n]: r
                                                        }));
                                                        break
                                                    }
                                                case "once-per-user":
                                                    {
                                                        const e = ti.wG.getFnItem("marketing_campaigns_shown"),
                                                            r = ki(e && e[n] || "", t);ti.wG.setFnItem("marketing_campaigns_shown", xi(xi({}, e), {}, {
                                                            [n]: r
                                                        }));
                                                        break
                                                    }
                                            }
                                        }(r.campaign_key, r.message_frequency, u), r.message_text) {
                                        const t = c.getChannel("local"),
                                            n = e.language || Ei(),
                                            o = r.message_text[n],
                                            i = r.message_duration,
                                            a = r.follow_up_response_id;
                                        o ? t.postMessage(So, {
                                            body: o,
                                            duration: i,
                                            responseId: a
                                        }) : s(`No translation for this campaign (campaign_key: ${r.campaign_key}) is defined for the language: ${n}`)
                                    } else l({
                                        url: Qo({
                                            name: "api",
                                            route: `campaigns/trigger/${r.campaign_key}`,
                                            handle: u,
                                            cluster: p,
                                            domain: f
                                        }),
                                        method: "POST",
                                        body: JSON.stringify({
                                            customer_query: {
                                                token: n
                                            },
                                            ignore_status: o
                                        })
                                    }).catch(v);
                            else s(`Campaign with key ${r.campaign_key} is not active. If you still want to trigger it, use the ignoreStatus option.`)
                        }({
                            adaSettings: u,
                            chatterToken: i,
                            campaign: g,
                            ignoreStatus: Boolean(y.ignoreStatus),
                            ignoreFrequency: Boolean(y.ignoreFrequency),
                            clearCampaignToTrigger: () => this.setState({
                                campaignToTrigger: null
                            }),
                            messageService: f
                        }), c && r && m) {
                        const t = f.getChannel(es);
                        t && (d ? t.postMessage(Do, void 0) : t.postMessage(Do, {
                            responseId: m
                        }), this.setState({
                            followUpResponseId: null
                        }))
                    }
                    t.isDrawerOpen !== r && h && h(r), a && !t.client && this.evaluateCampaignConditions({}, !0), i && t.chatterToken !== i && null != a && a.business_events && a.features.afm_business_events && this.evaluateBusinessEventConditions()
                }
                get shouldRenderChatFrame() {
                    const {
                        isDrawerOpen: t,
                        adaSettings: e,
                        chatterInLiveChat: n
                    } = this.props, {
                        parentElement: r,
                        preload: o
                    } = e, {
                        chatHasBeenRendered: i,
                        hideChatOverride: s,
                        readyToRenderChatFrame: a
                    } = this.state;
                    return !(!a || s || !o && !n && !r && !t && !i)
                }
                setChatHasBeenRendered() {
                    this.setState({
                        chatHasBeenRendered: !0
                    })
                }
                computeButtonFrameWidth() {
                    const {
                        entryContainer: t,
                        client: e
                    } = this.props, n = function(t) {
                        var e, n;
                        const r = null == t || null === (e = t.ui_settings) || void 0 === e || null === (n = e.embed) || void 0 === n ? void 0 : n.button_text,
                            o = Ei();
                        return r && r[o] ? r[o] : "Chat"
                    }(e), r = document.createElement("span");
                    r.innerText = n || "", t.appendChild(r);
                    const o = r.getBoundingClientRect().width;
                    this.frameWidth = Math.ceil(o + 26 + 30 + 48 + 24), t.removeChild(r)
                }
                unmount() {
                    var t;
                    const {
                        entryContainer: e,
                        messageService: n
                    } = this.props;
                    null === (t = e.parentNode) || void 0 === t || t.removeChild(e), n.getAllChannels().forEach((t => {
                        t.clearTimeoutsAndListeners()
                    })), window.removeEventListener("popstate", Hi), window.removeEventListener("locationchange", this.locationChangeHandlerBound)
                }
                trackEvent(t) {
                    const {
                        adaSettings: e,
                        chatterToken: n,
                        sessionToken: r
                    } = this.props;
                    ! function(t, e, n, r) {
                        const {
                            handle: o,
                            cluster: i,
                            domain: s
                        } = t, a = Qo({
                            name: "api",
                            handle: o,
                            cluster: i,
                            domain: s
                        });
                        if (!e || !n) return;
                        const {
                            eventKey: c,
                            value: u,
                            meta: p
                        } = r;
                        l({
                            url: `${a}business_events/track`,
                            method: "POST",
                            headers: {
                                "Session-Auth": n,
                                "Chatter-Token": e
                            },
                            body: JSON.stringify({
                                event_key: c,
                                value: u,
                                meta: bi(bi({}, p), {}, {
                                    _ada_url: window.location.href.split("?")[0]
                                }),
                                customer_query: {
                                    token: e
                                }
                            })
                        })
                    }(e, n, r, t)
                }
                evaluateBusinessEventConditions() {
                    const {
                        client: t
                    } = this.props;
                    null != t && t.features.afm_business_events && t.business_events && t.business_events.filter((t => t.trigger_conditions.some((t => mi(t))))).forEach((t => {
                        this.trackEvent({
                            eventKey: t.event_key,
                            value: t.value
                        })
                    }))
                }
                triggerCampaign(t) {
                    var e;
                    const {
                        client: n,
                        isDrawerOpen: r,
                        setGlobalState: o
                    } = this.props, {
                        chatHasBeenRendered: s
                    } = this.state, {
                        campaignKey: a,
                        ignoreStatus: c,
                        ignoreFrequency: u
                    } = t;
                    if (r) return;
                    const l = null == n || null === (e = n.marketing_campaigns) || void 0 === e ? void 0 : e.find((t => t.campaign_key === a));
                    if (!l) throw new i(`Could not find campaign with key: ${a}`);
                    const p = l.follow_up_response_id ? l.follow_up_response_id : l.response_id;
                    o({
                        latestCampaignKey: a,
                        hasChatOpenedAfterProactiveMessagesShown: !1,
                        wasCampaignShownButNowClosed: !1,
                        proactiveCampaignHadMessages: !1
                    }), this.setState({
                        chatHasBeenRendered: s || !l.message_text,
                        campaignToTrigger: l,
                        followUpResponseId: p,
                        campaignTriggerOptions: {
                            ignoreFrequency: u,
                            ignoreStatus: c
                        }
                    })
                }
                evaluateCampaignConditions(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const {
                        adaSettings: n,
                        client: r
                    } = this.props;
                    if (!r) throw new i("`client` is not defined");
                    const o = ((t, e, n, r) => {
                        const {
                            ignoreStatus: o = !1,
                            ignoreFrequency: i = !1
                        } = n, {
                            handle: s
                        } = t;
                        return null == e ? void 0 : e.find((t => {
                            if ("active" !== t.status && !o) return !1;
                            if (r && !t.message_text) return !1;
                            if (!t.trigger_conditions || 0 === t.trigger_conditions.length) return !1;
                            const e = t.trigger_conditions.every((t => mi(t))),
                                n = i || !Ti(t, s);
                            return e && n
                        }))
                    })(n, r.marketing_campaigns, t, !r.features.afm_proactive_messaging);
                    o && (e ? setTimeout((() => {
                        const {
                            trigger_conditions: t = []
                        } = o;
                        for (let e = 0; e < t.length; e += 1)
                            if (!mi(t[e])) return;
                        this.triggerCampaign({
                            campaignKey: o.campaign_key
                        })
                    }), 1e3 * o.message_delay) : this.triggerCampaign({
                        campaignKey: o.campaign_key
                    }))
                }
                async handleSettingDeviceToken(t, e, n) {
                    const {
                        setGlobalState: r,
                        sensitiveMetaFields: o,
                        metaFields: i
                    } = this.props, s = (null == i ? void 0 : i.sdkType) || "WEB", a = "REACTNATIVE" === s ? "ANDROID" : s, {
                        token: c
                    } = e;
                    await r({
                        deviceToken: c,
                        sensitiveMetaFields: ms(ms({}, o), {}, {
                            device_token: c,
                            device_os: a
                        })
                    }), t.postMessage(No, null, n)
                }
                async handleEmbedAction(t, e, n) {
                    const {
                        client: r,
                        messageService: o,
                        adaSettings: s
                    } = this.props, {
                        parentElement: a
                    } = s, c = o.getChannel("local"), u = o.getChannel(ns);
                    switch (t) {
                        case Oo:
                            if (!r) throw new i("`client` is not defined");
                            r.features.afm_business_events ? this.trackEvent(e) : console.error("Ada Embed - business events not available in your feature set."), c.postMessage(xo, null, n);
                            break;
                        case To:
                            if (!r) throw new i("`client` is not defined");
                            r.features.afm_proactive_messaging ? this.triggerCampaign(e) : console.error("Ada Embed - proactive campaigns not available in your feature set."), c.postMessage(ko, null, n);
                            break;
                        case Co:
                            if (!r) throw new i("`client` is not defined");
                            r.features.afm_proactive_messaging ? this.evaluateCampaignConditions(e) : console.error("Ada Embed - proactive campaigns not available in your feature set."), c.postMessage(jo, null, n);
                            break;
                        case po:
                            {
                                const {
                                    isDrawerOpen: t,
                                    drawerHasBeenOpened: e,
                                    chatterToken: r
                                } = this.props,
                                o = {
                                    isDrawerOpen: t,
                                    isChatOpen: t || Boolean(a),
                                    hasActiveChatter: Boolean(r),
                                    hasClosedChat: e && !t
                                };c.postMessage(fo, o, n);
                                break
                            }
                        case ho:
                            {
                                const {
                                    metaFields: t,
                                    setGlobalState: r
                                } = this.props,
                                o = e,
                                i = ms(ms({}, t), o);await r({
                                    metaFields: i
                                }),
                                c.postMessage(vo, null, n);
                                break
                            }
                        case "SET_SENSITIVE_META_FIELDS":
                            {
                                const {
                                    sensitiveMetaFields: t,
                                    setGlobalState: r
                                } = this.props;await r({
                                    sensitiveMetaFields: ms(ms({}, t), e)
                                }),
                                c.postMessage("SET_SENSITIVE_META_FIELDS_RESPONSE", null, n);
                                break
                            }
                        case go:
                            c.postMessage(yo, null, n), this.unmount();
                            break;
                        case bo:
                            {
                                const {
                                    greeting: t,
                                    language: r,
                                    metaFields: o,
                                    sensitiveMetaFields: a,
                                    resetChatHistory: l = !0,
                                    activeModality: p
                                } = e,
                                {
                                    setGlobalState: f
                                } = this.props,
                                {
                                    handle: d
                                } = s;h("Reset method triggered", {
                                    handle: d,
                                    greeting: t,
                                    resetChatHistory: l,
                                    language: r,
                                    metaFields: o,
                                    sensitiveMetaFields: a
                                });
                                const {
                                    chatHasBeenRendered: v
                                } = this.state;
                                let g = {
                                    greeting: t,
                                    language: r,
                                    metaFields: o,
                                    sensitiveMetaFields: a,
                                    chatDimensions: void 0,
                                    activeModality: p
                                };
                                if (l) {
                                    if (!u) throw new i("`xStorageChannel` is null");
                                    u.postMessage(no, void 0), ti.wG.removeItem(ci), ti.Dp.removeItem(ci), ti.wG.removeItem(ui), ti.Dp.removeItem(ui), g = ms(ms({}, g), {}, {
                                        chatterToken: void 0,
                                        chatterCreated: void 0
                                    })
                                }
                                await f(g),
                                v && this.setState({
                                    hideChatOverride: !0
                                }, (() => {
                                    this.setState({
                                        hideChatOverride: !1
                                    })
                                })),
                                c.postMessage(wo, null, n);
                                break
                            }
                        case mo:
                            {
                                const {
                                    setGlobalState: t
                                } = this.props;
                                if (!u) throw new i("`xStorageChannel` is null");ti.wG.removeItem(ci),
                                ti.Dp.removeItem(ci),
                                ti.wG.removeItem(ui),
                                ti.Dp.removeItem(ui),
                                await t({
                                    chatterToken: void 0,
                                    chatterCreated: void 0
                                }),
                                u.postMessage(no, void 0),
                                c.postMessage(_o, null, n);
                                break
                            }
                        case So:
                            {
                                if (!r) throw new i("`client` is not defined");
                                const {
                                    body: t,
                                    duration: o
                                } = e,
                                s = 1e3;this.setState({
                                    hideIntroOverride: !0
                                }, (async () => {
                                    const {
                                        setGlobalState: e
                                    } = this.props, n = new Ni(ms(ms({}, r), {}, {
                                        intro: {
                                            body: t,
                                            delay: 0,
                                            duration: o || 0 === o ? o : null,
                                            style: "Text",
                                            response_id: ""
                                        }
                                    }));
                                    await e({
                                        client: n,
                                        isIntroShown: !1
                                    }), this.setState({
                                        hideIntroOverride: !1
                                    })
                                })),
                                await (l = 1e3 * (o || 0) + s, new Promise((t => {
                                    setTimeout(t, l)
                                }))),
                                c.postMessage(Eo, null, n);
                                break
                            }
                        case Po:
                            {
                                const t = o.getChannel(es);t && t.postMessage(Po, void 0),
                                c.postMessage(Io, null, n);
                                break
                            }
                        case Ro:
                            this.handleSettingDeviceToken(c, e, n)
                    }
                    var l
                }
                bindEmbedActionEventHandler() {
                    const {
                        messageService: t
                    } = this.props;
                    return t.getChannel("local").addEventListener(((t, e, n) => {
                        this.handleEmbedAction(t, e, n)
                    }))
                }
                locationChangeHandler() {
                    this.setState({
                        hideIntroOverride: !0
                    }, (() => {
                        this.initialize().then((() => {
                            this.setState({
                                hideIntroOverride: !1
                            }), this.evaluateCampaignConditions({}, !0), this.evaluateBusinessEventConditions()
                        }))
                    }))
                }
                async initialize() {
                    const {
                        adaSettings: t,
                        setGlobalState: e
                    } = this.props, {
                        handle: n,
                        cluster: r,
                        domain: o,
                        rolloutOverride: i,
                        adaReadyCallback: a,
                        privateMode: c
                    } = t, u = t.language || Ei(), p = Object.keys(t).reduce(((e, n) => "function" != typeof t[n] ? ms(ms({}, e), {}, {
                        [n]: t[n]
                    }) : e), {}), f = await Ci(n, r, o, u);
                    if (!f) return void this.unmount();
                    const d = new Ni(f.client);
                    if (! function(t, e) {
                            if (t >= 0 && t <= 1) {
                                const n = function(t) {
                                        const e = {
                                            group: null,
                                            lastProb: null
                                        };
                                        return e.group = (ti.wG.getFnItem("rolloutGroup") || {})[t] || null, e.lastProb = (ti.wG.getFnItem("rolloutLastValue") || {})[t] || null, e
                                    }(e),
                                    r = Math.random();
                                if (null === n.group || 0 === n.lastProb) {
                                    const n = r <= t;
                                    return Wi(e, n ? "B" : "A", t), n
                                }
                                if ("A" === n.group || "B" === n.group) {
                                    if (null === n.lastProb || n.lastProb === t) return "B" === n.group;
                                    if (0 === t) return Wi(e, "A", 0), !1;
                                    if (1 === t) return Wi(e, "B", 1), !0;
                                    if (t < n.lastProb) {
                                        if ("B" === n.group) {
                                            const o = r <= 1 - t / n.lastProb;
                                            return Wi(e, o ? "B" : "A", t), o
                                        }
                                    } else if (t > n.lastProb && "A" === n.group) {
                                        const o = r <= 1 - n.lastProb / t;
                                        return Wi(e, o ? "B" : "A", t), o
                                    }
                                }
                            }
                            return !0
                        }(i || d.rollout, d.handle) && !Ui()) return s("User is in the wrong rollout group."), a && a({
                        isRolledOut: !1
                    }), void this.unmount();
                    const v = d.alternative_bot,
                        g = await async function(t, e, n) {
                            const r = Ui(),
                                {
                                    domain: o,
                                    cluster: i,
                                    language: s
                                } = n;
                            if (r) {
                                const t = await Ci(r, i, o, s || Ei());
                                return t ? new Ni(t.client) : null
                            }
                            if (e) {
                                const {
                                    handle: r,
                                    rollout: o
                                } = e;
                                return 0 === o ? Bi(Li, t, r, n) : 1 === o ? Bi(Mi, t, r, n) : async function(t, e, n, r) {
                                    const o = function(t) {
                                        const e = ti.wG.getFnItem(Fi);
                                        return e ? e[t] === Mi ? Mi : e[t] === Li ? Li : null : null
                                    }(t.handle);
                                    if (o) return Bi(o, t, e, r);
                                    const i = (s = n, parseFloat(Math.random().toFixed(2)) <= s ? Mi : Li);
                                    var s;
                                    return function(t, e) {
                                        const n = ti.wG.getFnItem(Fi) || {};
                                        ti.wG.setFnItem(Fi, Ai(Ai({}, n), {}, {
                                            [e]: t
                                        }))
                                    }(i, t.handle), i === Mi && h("Alternative Bot Rollout", {
                                        primaryBot: t.handle,
                                        alternativeBotRollout: n,
                                        alternativeBot: e
                                    }, {
                                        sampleRate: 1
                                    }), Bi(i, t, e, r)
                                }(t, r, o, n)
                            }
                            return t
                        }(d, v, t);
                    if (!g) return void this.unmount();
                    const y = Qo({
                        name: "api",
                        handle: g.handle,
                        cluster: r,
                        domain: o
                    });
                    if (g.features.afm_business_events && !g.business_events) try {
                        const t = await l({
                            url: `${y}business_events/`
                        });
                        g.business_events = t.business_events
                    } catch (t) {
                        g.business_events = [], s("Failed to fetch events from API.")
                    }
                    if (!g.marketing_campaigns) try {
                        const t = await l({
                            url: `${y}campaigns/`
                        });
                        g.marketing_campaigns = t.campaigns
                    } catch (t) {
                        g.marketing_campaigns = [], g.marketing_campaigns_order = [], s("Failed to fetch campaigns from API.")
                    }
                    g.marketing_campaigns_order && (g.marketing_campaigns = g.marketing_campaigns_order.map((t => {
                        var e;
                        return null === (e = g.marketing_campaigns) || void 0 === e ? void 0 : e.find((e => e._id === t))
                    })).filter((t => Boolean(t))));
                    const {
                        chat: m
                    } = g;
                    if (!m) return s("Sorry, please turn on the web chat integration in your bot's settings."), void this.unmount();
                    const _ = function(t, e, n) {
                        const {
                            persistence: r
                        } = e;
                        return n ? null : r === rs ? ti.wG.getItem(t) : r === os ? ti.Dp.getItem(t) : null
                    }(pi, g, c);
                    try {
                        await e(ms(ms({
                            client: g,
                            enabledLanguages: g.features.translations ? ["en"].concat(g.translated_languages) : ["en"],
                            initialURL: window.location.href,
                            isIntroShown: !1
                        }, p), {}, {
                            handle: g.handle,
                            adaSettings: ms(ms({}, t), {}, {
                                handle: g.handle
                            }),
                            chatterInLiveChat: _
                        }))
                    } catch (t) {
                        t instanceof Error && eo.trackException(t), this.unmount()
                    }
                }
                resetChat() {
                    const {
                        messageService: t
                    } = this.props, {
                        chatHasBeenRendered: e
                    } = this.state, n = t.getChannel(ns);
                    if (!n) throw new i("`xStorageChannel` is null");
                    n.postMessage(no, void 0), e && this.setState({
                        hideChatOverride: !0
                    }, (() => {
                        this.setState({
                            hideChatOverride: !1
                        })
                    }))
                }
                notificationPermHandler() {
                    const {
                        setGlobalState: t
                    } = this.props;
                    var e;
                    e = e => {
                        t({
                            notificationsPermission: e
                        })
                    }, "permissions" in navigator && navigator.permissions.query({
                        name: "notifications"
                    }).then((t => {
                        t.onchange = () => {
                            var n;
                            e("granted" === (n = t.state) || "denied" === n ? n : "default")
                        }
                    })).catch((() => {}))
                }
                renderChatFrame() {
                    const {
                        messageService: t,
                        store: e,
                        adaSettings: n
                    } = this.props, {
                        campaignToTrigger: r,
                        followUpResponseId: o,
                        chatVersion: i
                    } = this.state;
                    return this.shouldRenderChatFrame ? R(fs, {
                        chatVersion: i,
                        setChatHasBeenRendered: this.setChatHasBeenRenderedBound,
                        adaSettings: n,
                        store: e,
                        messageService: t,
                        resetChat: this.resetChatBound,
                        skipGreeting: Boolean(r || o)
                    }) : null
                }
                renderIntroFrame() {
                    var t;
                    const {
                        adaSettings: e,
                        client: n
                    } = this.props, {
                        parentElement: r
                    } = e, {
                        hideIntroOverride: o
                    } = this.state;
                    return r || "text" !== (null == n || null === (t = n.intro) || void 0 === t ? void 0 : t.style.toLocaleLowerCase()) || o || this.shouldRenderChatFrame ? null : R(ds, null)
                }
                renderMaskFrame() {
                    const {
                        adaSettings: t,
                        hideMask: e
                    } = this.props, {
                        parentElement: n
                    } = t;
                    return n || e ? null : R(hs, null)
                }
                renderBackdrop() {
                    const {
                        adaSettings: t,
                        chatDimensions: e,
                        isDrawerOpen: n,
                        isIntroShown: r
                    } = this.props, {
                        parentElement: o
                    } = t;
                    if (o) return null;
                    const i = Boolean(null == e ? void 0 : e.height),
                        s = n || i || r;
                    return R("div", {
                        style: ms(ms({
                            position: "fixed",
                            width: "635px",
                            height: "785px",
                            [ts(t)]: 0
                        }, "left" === ts(t) ? {
                            background: "linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 40.92%)"
                        } : {
                            background: "linear-gradient(315.92deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 40.92%)"
                        }), {}, {
                            bottom: 0,
                            pointerEvents: "none",
                            zIndex: 9999,
                            transition: "500ms linear",
                            opacity: s ? 1 : 0
                        })
                    })
                }
                renderXStorageFrame() {
                    return R(gs, null)
                }
                renderButtonFrame() {
                    const {
                        adaSettings: t
                    } = this.props, {
                        parentElement: e
                    } = t;
                    if (e) return null;
                    const {
                        frameWidth: n
                    } = this;
                    return R(us, {
                        frameWidth: n,
                        adaSettings: t
                    })
                }
                render() {
                    const {
                        client: t
                    } = this.props;
                    return t ? R(D, null, this.renderBackdrop(), this.renderXStorageFrame(), this.renderButtonFrame(), this.renderChatFrame(), this.renderIntroFrame(), this.renderMaskFrame()) : null
                }
            });

            function bs(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ws(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? bs(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bs(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ss(t) {
                let e, {
                    adaSettings: n,
                    initializationResolve: r,
                    initializationReject: o,
                    messageService: s,
                    store: a
                } = t;
                const c = document.createElement("div");
                if (c.id = "ada-entry", n.parentElement ? (e = function(t) {
                        let {
                            adaSettings: e
                        } = t;
                        const {
                            parentElement: n
                        } = e;
                        let r = null;
                        if (!n) return null;
                        if ("string" == typeof n ? r = document.getElementById(n) : n instanceof HTMLElement && (r = n), !r) throw new i("parentElement requires a string or HTMLElement.");
                        return r
                    }({
                        adaSettings: n
                    }), c.style.height = "100%") : e = document.body, !e) throw new i("`parentContainer` is null");
                e.appendChild(c),
                    function(t, e, n) {
                        var r, o, i;
                        _.__ && _.__(t, e), o = (r = n === E) ? null : n && n.__k || e.__k, t = R(D, null, [t]), i = [], z(e, (r ? e : n || e).__k = t, o || k, k, void 0 !== e.ownerSVGElement, n && !r ? [n] : o ? null : e.childNodes.length ? C.slice.call(e.childNodes) : null, i, n || k, r), K(i, t)
                    }(R(Z.Provider, {
                        value: a
                    }, R(tt.Provider, {
                        value: s
                    }, R(_s, {
                        store: a,
                        messageService: s,
                        adaSettings: n,
                        entryContainer: c,
                        initializationReject: o,
                        initializationResolve: r
                    }))), c)
            }
            const Es = new i("Actions cannot be called until Embed has been instantiated. Try running `adaEmbed.start({...})`.");

            function Os() {
                let t = null;
                const e = async () => {
                    if (!t) throw Es;
                    if (t.adaSettings.parentElement) throw new i("Cannot toggle when using parentElement.");
                    await t.initialized, await t.store.dispatch(Ho.TOGGLE_CHAT_ACTION)
                };
                return Object.freeze({
                    start: async e => {
                        if (!g(e)) throw new i("`start` method requires `StartOptions` argument");
                        if (t) throw new i("Ada Embed has already been started.");
                        var n;
                        return t = function(t) {
                            const e = new Bo,
                                n = e.channels.local,
                                r = (t => ({
                                    adaSettings: t,
                                    handle: t.handle,
                                    styles: void 0,
                                    domain: void 0,
                                    cluster: void 0,
                                    language: void 0,
                                    greeting: void 0,
                                    crossWindowPersistence: !0,
                                    hideMask: !0,
                                    metaFields: {},
                                    sensitiveMetaFields: {},
                                    parentElement: void 0,
                                    isDrawerOpen: !1,
                                    drawerHasBeenOpened: !1,
                                    enabledLanguages: ["en"],
                                    client: void 0,
                                    isIntroShown: !1,
                                    wasIntroShown: !1,
                                    isButtonShown: !1,
                                    introDimensions: {},
                                    unreadMessageCount: 0,
                                    initialURL: void 0,
                                    privateMode: !1,
                                    rolloutOverride: void 0,
                                    chatterToken: gi(ci) || void 0,
                                    chatterCreated: gi(ui) || void 0,
                                    sessionToken: gi(li) || void 0,
                                    zdSessionId: gi(fi) || void 0,
                                    zdPreviousTags: gi(di) || void 0,
                                    zdMessagingExternalUserId: gi(hi) || null,
                                    zdMessagingChatterCreated: gi(vi) || null,
                                    connections: {},
                                    appConnectionState: lo.Uninitiated,
                                    testMode: !1,
                                    embedStyles: void 0,
                                    notificationsPermission: ai ? Notification.permission : void 0,
                                    browserHasNotificationSupport: ai,
                                    preload: !1,
                                    chatDimensions: void 0,
                                    isChatWebsocketConnected: !1,
                                    latestCampaignKey: void 0,
                                    hasChatOpenedAfterProactiveMessagesShown: !1,
                                    chatterInLiveChat: !1,
                                    wasCampaignShownButNowClosed: !1,
                                    proactiveCampaignHadMessages: !1,
                                    deviceToken: null
                                }))(t),
                                o = new si(r, e),
                                s = new Promise(((n, r) => {
                                    Ss({
                                        adaSettings: t,
                                        messageService: e,
                                        store: o,
                                        initializationResolve: n,
                                        initializationReject: r
                                    })
                                })),
                                a = T()((async function(t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    await s, await n.fetch(To, ko, ws({
                                        campaignKey: t
                                    }, e))
                                }), 1e3, {
                                    leading: !0
                                });
                            return {
                                initialized: s,
                                messageService: e,
                                store: o,
                                adaSettings: t,
                                getInfo: async () => (await s, await n.fetch(po, fo)),
                                async setMetaFields(t) {
                                    await s, await n.fetch(ho, vo, t)
                                },
                                async setSensitiveMetaFields(t) {
                                    await s, await n.fetch("SET_SENSITIVE_META_FIELDS", "SET_SENSITIVE_META_FIELDS_RESPONSE", t)
                                },
                                async stop() {
                                    await s, await n.fetch(go, yo)
                                },
                                async deleteHistory() {
                                    await s, await n.fetch(mo, _o)
                                },
                                async reset() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    await s, await n.fetch(bo, wo, t)
                                },
                                async trackEvent(t, e) {
                                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    await s, await n.fetch(Oo, xo, {
                                        eventKey: t,
                                        value: e,
                                        meta: r
                                    })
                                },
                                async triggerCampaign(t) {
                                    a(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                                },
                                async evaluateCampaignConditions(t) {
                                    await s, await n.fetch(Co, jo, t)
                                },
                                async createProactive(e, r, o) {
                                    if (t.parentElement) throw new i("Cannot call createProactive when using parentElement.");
                                    await s;
                                    try {
                                        await n.fetch(So, Eo, {
                                            body: e,
                                            duration: r,
                                            responseId: o
                                        }, 1e3 * r + 2e3)
                                    } catch (t) {
                                        throw new i(`${t}`)
                                    }
                                },
                                async closeCampaign() {
                                    await s, await n.fetch(Po, Io)
                                },
                                async setDeviceToken(t) {
                                    await s, await n.fetch(Ro, No, {
                                        token: t
                                    })
                                }
                            }
                        }(e), window.adaEmbedLoadedCallback && window.adaEmbedLoadedCallback(), h("Embed start", {
                            handle: e.handle,
                            embedSettings: e,
                            hostPage: window.location.href,
                            adaScriptURL: (n = document.getElementById("__ada"), n ? n.src : null)
                        }), t.initialized
                    },
                    stop: async () => {
                        if (!t) throw Es;
                        const e = t.stop();
                        return t = null, e
                    },
                    toggle: e,
                    deleteHistory: async () => {
                        if (!t) throw Es;
                        return t.deleteHistory()
                    },
                    setMetaFields: async e => {
                        if (!t) throw Es;
                        return t.setMetaFields(e)
                    },
                    setSensitiveMetaFields: async e => {
                        if (!t) throw Es;
                        return t.setSensitiveMetaFields(e)
                    },
                    getInfo: async () => {
                        if (!t) throw Es;
                        return t.getInfo()
                    },
                    reset: async e => {
                        if (!t) throw Es;
                        return h("Embed reset", {
                            initialURL: window.location.href,
                            resetChatHistory: null == e ? void 0 : e.resetChatHistory,
                            greeting: null == e ? void 0 : e.greeting
                        }), t.reset(e)
                    },
                    trackEvent: async (e, n, r) => {
                        if (!t) throw Es;
                        return t.trackEvent(e, n, r)
                    },
                    createProactive: async function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                            r = arguments.length > 2 ? arguments[2] : void 0;
                        if (!e) throw new i("Cannot call createProactive without body set.");
                        if (!t) throw Es;
                        return t.createProactive(e, n, r)
                    },
                    triggerCampaign: async (e, n) => {
                        if (!t) throw Es;
                        return t.triggerCampaign(e, n)
                    },
                    evaluateCampaignConditions: async e => {
                        if (!t) throw Es;
                        return t.evaluateCampaignConditions(e)
                    },
                    subscribeEvent: async (t, e) => function(t, e) {
                        const n = Wo();
                        return qo.push({
                            eventKey: t,
                            callback: e,
                            id: n
                        }), n
                    }(t, e),
                    unsubscribeEvent: async t => function(t) {
                        qo = qo.filter((e => e.id !== t))
                    }(t),
                    closeCampaign: async () => {
                        if (!t) throw Es;
                        return t.closeCampaign()
                    },
                    setDeviceToken: async e => {
                        if (!t) throw Es;
                        return t.setDeviceToken(e)
                    },
                    setLanguage: e => {
                        if (!t) throw Es;
                        const n = t.messageService.getChannel("chat");
                        if (!n) throw new i("Chat is not ready yet to have language changed.");
                        n.postMessage("SET_LANGUAGE", {
                            language: e
                        })
                    },
                    handleNotification: async () => {
                        if (!t) throw Es;
                        (await t.getInfo()).isChatOpen || await e()
                    },
                    triggerAnswer: e => {
                        if (!t) throw Es;
                        const n = t.messageService.getChannel("chat");
                        if (!n) throw new i("Chat is not ready yet to have answer triggered.");
                        n.postMessage("TRIGGER_ANSWER", {
                            answerId: e
                        })
                    }
                })
            }! function() {
                if (window.__AdaEmbedLoaded) return void s("Embed script has already been initialized. Skipping.");
                window.__AdaEmbedLoaded = !0;
                const t = Os();
                window.adaEmbed = t, m(t), (t => {
                    const e = window.__AdaEmbedLoaderInitialActionQueue;
                    null != e && e.length && (h("Call to dispatchEmbedLoaderInitialActionQueue", {
                        hostPage: window.location.href
                    }), e.forEach((e => {
                        (0, t[e.method])(...e.arguments).then((t => {
                            window.dispatchEvent(new CustomEvent(`__ada-embed-action-resolve-${e.method}`, {
                                detail: t
                            }))
                        }))
                    })))
                })(t)
            }()
        }()
}();