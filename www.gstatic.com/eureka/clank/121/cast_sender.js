(function() {
    'use strict';
    var f, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        g = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ba = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ca = ba(this),
        da = function(a, b) {
            if (b) a: {
                var c = ca;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && g(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    da("Symbol", function(a) {
        if (a) return a;
        var b = function(h, k) {
            this.g = h;
            g(this, "description", {
                configurable: !0,
                writable: !0,
                value: k
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(h) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (h || "") + "_" + d++, h)
            };
        return e
    });
    da("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ca[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && g(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        m;
    if ("function" == typeof Object.setPrototypeOf) m = Object.setPrototypeOf;
    else {
        var n;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                n = ja.a;
                break a
            } catch (a) {}
            n = !1
        }
        m = n ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = m,
        p = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.mc = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var q = this || self,
        la = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        t = function(a) {
            var b = la(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ma = 0,
        na = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        oa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b,
                        e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        w = function(a, b, c) {
            w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
            return w.apply(null, arguments)
        },
        x = function(a, b) {
            a = a.split(".");
            var c = q;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        pa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.mc = b.prototype;
            a.prototype =
                new c;
            a.prototype.constructor = a;
            a.pc = function(d, e, h) {
                for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
                return b.prototype[e].apply(d, k)
            }
        },
        y = function(a) {
            return a
        };
    var chrome = chrome || window.chrome || {};
    chrome.cast = chrome.cast || {};
    chrome.cast.media = chrome.cast.media || {};
    chrome.cast.ReceiverActionListener = {};
    chrome.cast.VERSION = [1, 2];
    x("chrome.cast.VERSION", chrome.cast.VERSION);
    chrome.cast.oc = !0;
    x("chrome.cast.usingPresentationApi", chrome.cast.oc);
    chrome.cast.Na = function(a, b) {
        this.credentials = a;
        this.credentialsType = void 0 === b ? "web" : b
    };
    x("chrome.cast.CredentialsData", chrome.cast.Na);
    chrome.cast.Error = function(a, b, c) {
        this.code = a;
        this.description = b || null;
        this.details = c || null
    };
    x("chrome.cast.Error", chrome.cast.Error);
    chrome.cast.mb = function(a) {
        this.platform = a;
        this.packageId = this.url = null
    };
    x("chrome.cast.SenderApplication", chrome.cast.mb);
    chrome.cast.Image = function(a) {
        this.url = a;
        this.width = this.height = null
    };
    x("chrome.cast.Image", chrome.cast.Image);
    chrome.cast.Volume = function(a, b) {
        this.level = void 0 === a ? null : a;
        this.muted = void 0 === b ? null : b
    };
    x("chrome.cast.Volume", chrome.cast.Volume);
    chrome.cast.ga = {
        CUSTOM_CONTROLLER_SCOPED: "custom_controller_scoped",
        TAB_AND_ORIGIN_SCOPED: "tab_and_origin_scoped",
        ORIGIN_SCOPED: "origin_scoped",
        PAGE_SCOPED: "page_scoped"
    };
    x("chrome.cast.AutoJoinPolicy", chrome.cast.ga);
    chrome.cast.ia = {
        CREATE_SESSION: "create_session",
        CAST_THIS_TAB: "cast_this_tab"
    };
    x("chrome.cast.DefaultActionPolicy", chrome.cast.ia);
    chrome.cast.Ma = {
        VIDEO_OUT: "video_out",
        AUDIO_OUT: "audio_out",
        VIDEO_IN: "video_in",
        AUDIO_IN: "audio_in",
        MULTIZONE_GROUP: "multizone_group"
    };
    x("chrome.cast.Capability", chrome.cast.Ma);
    chrome.cast.v = {
        CANCEL: "cancel",
        TIMEOUT: "timeout",
        API_NOT_INITIALIZED: "api_not_initialized",
        INVALID_PARAMETER: "invalid_parameter",
        EXTENSION_NOT_COMPATIBLE: "extension_not_compatible",
        EXTENSION_MISSING: "extension_missing",
        RECEIVER_UNAVAILABLE: "receiver_unavailable",
        SESSION_ERROR: "session_error",
        CHANNEL_ERROR: "channel_error",
        LOAD_MEDIA_FAILED: "load_media_failed"
    };
    x("chrome.cast.ErrorCode", chrome.cast.v);
    chrome.cast.M = {
        AVAILABLE: "available",
        UNAVAILABLE: "unavailable"
    };
    x("chrome.cast.ReceiverAvailability", chrome.cast.M);
    chrome.cast.nb = {
        CHROME: "chrome",
        IOS: "ios",
        ANDROID: "android"
    };
    x("chrome.cast.SenderPlatform", chrome.cast.nb);
    chrome.cast.wa = {
        CAST: "cast",
        DIAL: "dial",
        HANGOUT: "hangout",
        CUSTOM: "custom"
    };
    x("chrome.cast.ReceiverType", chrome.cast.wa);
    chrome.cast.Pa = {
        RUNNING: "running",
        STOPPED: "stopped",
        ERROR: "error"
    };
    x("chrome.cast.DialAppState", chrome.cast.Pa);
    chrome.cast.ib = {
        CAST: "cast",
        STOP: "stop"
    };
    x("chrome.cast.ReceiverAction", chrome.cast.ib);
    chrome.cast.J = {
        CONNECTED: "connected",
        DISCONNECTED: "disconnected",
        STOPPED: "stopped"
    };
    x("chrome.cast.SessionStatus", chrome.cast.J);
    chrome.cast.Bb = {
        ATTENUATION: "attenuation",
        FIXED: "fixed",
        MASTER: "master"
    };
    x("chrome.cast.VolumeControlType", chrome.cast.Bb);

    function z(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, z);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    pa(z, Error);
    z.prototype.name = "CustomError";

    function qa(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        z.call(this, c + a[d])
    }
    pa(qa, z);
    qa.prototype.name = "AssertionError";
    var ra = function(a, b) {
        throw new qa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var sa = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function ta(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    };
    var A;
    var ua = /&/g,
        va = /</g,
        wa = />/g,
        xa = /"/g,
        ya = /'/g,
        za = /\x00/g,
        Aa = /[\x00&<>"']/;
    var Ca = function(a) {
        if (Ba !== Ba) throw Error("SafeUrl is not meant to be built directly");
        this.g = a
    };
    Ca.prototype.toString = function() {
        return this.g.toString()
    };
    var Ba = {};
    new Ca("about:invalid#zClosurez");
    new Ca("about:blank");
    var Da = {},
        Ea = function() {
            if (Da !== Da) throw Error("SafeStyle is not meant to be built directly");
        };
    Ea.prototype.toString = function() {
        return "".toString()
    };
    new Ea;
    var Fa = {},
        Ga = function() {
            if (Fa !== Fa) throw Error("SafeStyleSheet is not meant to be built directly");
        };
    Ga.prototype.toString = function() {
        return "".toString()
    };
    new Ga;
    var Ha, B;
    a: {
        for (var Ia = ["CLOSURE_FLAGS"], C = q, Ja = 0; Ja < Ia.length; Ja++)
            if (C = C[Ia[Ja]], null == C) {
                B = null;
                break a
            }
        B = C
    }
    var Ka = B && B[610401301];
    Ha = null != Ka ? Ka : !1;

    function La() {
        var a = q.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var D, Ma = q.navigator;
    D = Ma ? Ma.userAgentData || null : null;

    function Na(a) {
        return Ha ? D ? D.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function E(a) {
        return -1 != La().indexOf(a)
    };

    function F() {
        return Ha ? !!D && 0 < D.brands.length : !1
    }

    function Oa() {
        return F() ? Na("Chromium") : (E("Chrome") || E("CriOS")) && !(F() ? 0 : E("Edge")) || E("Silk")
    };
    var Pa = {},
        G = function(a, b) {
            if (b !== Pa) throw Error("SafeHtml is not meant to be built directly");
            this.g = a
        };
    G.prototype.toString = function() {
        return this.g.toString()
    };
    var Qa = function(a) {
            if (a instanceof G && a.constructor === G) return a.g;
            ra("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
            return "type_error:SafeHtml"
        },
        Ra = new G(q.trustedTypes && q.trustedTypes.emptyHTML || "", Pa);
    var Sa = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Ta = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = Qa(Ra);
            return !b.parentElement
        });
    var Va = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = q.document.createElement("div");
            return a.replace(Ua, function(d, e) {
                var h = b[d];
                if (h) return h;
                "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (h = String.fromCharCode(e)));
                if (!h) {
                    h = d + " ";
                    if (void 0 === A) {
                        e = null;
                        var k = q.trustedTypes;
                        if (k && k.createPolicy) {
                            try {
                                e = k.createPolicy("goog#html", {
                                    createHTML: y,
                                    createScript: y,
                                    createScriptURL: y
                                })
                            } catch (l) {
                                q.console && q.console.error(l.message)
                            }
                            A = e
                        } else A = e
                    }
                    h = (e = A) ? e.createHTML(h) : h;
                    h = new G(h, Pa);
                    if (c.tagName && Sa[c.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + c.tagName + ".");
                    if (Ta())
                        for (; c.lastChild;) c.removeChild(c.lastChild);
                    c.innerHTML = Qa(h);
                    h = c.firstChild.nodeValue.slice(0, -1)
                }
                return b[d] = h
            })
        },
        Wa = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        },
        Ua = /&([^;\s<&]+);?/g;
    chrome.cast.Ha = function(a, b, c, d, e) {
        this.sessionRequest = a;
        this.sessionListener = b;
        this.receiverListener = c;
        this.autoJoinPolicy = d || chrome.cast.ga.TAB_AND_ORIGIN_SCOPED;
        this.defaultActionPolicy = e || chrome.cast.ia.CREATE_SESSION;
        this.customDialLaunchCallback = null;
        this.invisibleSender = !1;
        this.additionalSessionRequests = []
    };
    x("chrome.cast.ApiConfig", chrome.cast.Ha);
    chrome.cast.Sa = function(a, b) {
        this.appName = a;
        this.launchParameter = b || null
    };
    x("chrome.cast.DialRequest", chrome.cast.Sa);
    chrome.cast.Qa = function(a, b, c) {
        this.receiver = a;
        this.appState = b;
        this.extraData = c || null
    };
    x("chrome.cast.DialLaunchData", chrome.cast.Qa);
    chrome.cast.Ra = function(a, b) {
        this.doLaunch = a;
        this.launchParameter = b || null
    };
    x("chrome.cast.DialLaunchResponse", chrome.cast.Ra);
    chrome.cast.ob = function(a, b, c, d, e) {
        c = void 0 === c ? chrome.cast.timeout.requestSession : c;
        this.appId = a;
        this.capabilities = Array.isArray(b) ? b : [];
        this.requestSessionTimeout = c;
        this.dialRequest = this.language = null;
        this.androidReceiverCompatible = void 0 === d ? !1 : d;
        this.credentialsData = void 0 === e ? null : e
    };
    x("chrome.cast.SessionRequest", chrome.cast.ob);
    chrome.cast.hb = function(a, b, c, d) {
        this.label = a;
        a = b;
        Aa.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ua, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(va, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(ya, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;")));
        this.friendlyName = a;
        this.capabilities = c || [];
        this.volume = d || null;
        this.receiverType = chrome.cast.wa.CAST;
        this.displayStatus = this.isActiveInput = null
    };
    x("chrome.cast.Receiver", chrome.cast.hb);
    chrome.cast.jb = function(a, b) {
        this.statusText = a;
        this.appImages = b;
        this.showStop = null
    };
    x("chrome.cast.ReceiverDisplayStatus", chrome.cast.jb);
    chrome.cast.za = function() {
        this.requestSession = 6E4;
        this.getDialAppInfo = this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3E3
    };
    x("chrome.cast.Timeout", chrome.cast.za);
    chrome.cast.timeout = new chrome.cast.za;
    x("chrome.cast.timeout", chrome.cast.timeout);
    chrome.cast.Ga = "auto-join";
    chrome.cast.bb = "cast-session_";
    chrome.cast.media.Ua = {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    };
    x("chrome.cast.media.HdrType", chrome.cast.media.Ua);
    chrome.cast.media.Va = {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    };
    x("chrome.cast.media.HlsSegmentFormat", chrome.cast.media.Va);
    chrome.cast.media.Wa = {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    };
    x("chrome.cast.media.HlsVideoSegmentFormat", chrome.cast.media.Wa);
    chrome.cast.media.Za = {
        PAUSE: "pause",
        SEEK: "seek",
        STREAM_VOLUME: "stream_volume",
        STREAM_MUTE: "stream_mute"
    };
    x("chrome.cast.media.MediaCommand", chrome.cast.media.Za);
    chrome.cast.media.fb = {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    };
    x("chrome.cast.media.QueueType", chrome.cast.media.fb);
    chrome.cast.media.T = {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    };
    x("chrome.cast.media.ContainerType", chrome.cast.media.T);
    chrome.cast.media.D = {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    };
    x("chrome.cast.media.MetadataType", chrome.cast.media.D);
    chrome.cast.media.A = {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    };
    x("chrome.cast.media.PlayerState", chrome.cast.media.A);
    chrome.cast.media.U = {
        OFF: "REPEAT_OFF",
        ALL: "REPEAT_ALL",
        SINGLE: "REPEAT_SINGLE",
        ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    };
    x("chrome.cast.media.RepeatMode", chrome.cast.media.U);
    chrome.cast.media.kb = {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    };
    x("chrome.cast.media.ResumeState", chrome.cast.media.kb);
    chrome.cast.media.ya = {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        OTHER: "OTHER"
    };
    x("chrome.cast.media.StreamType", chrome.cast.media.ya);
    chrome.cast.media.Xa = {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    };
    x("chrome.cast.media.IdleReason", chrome.cast.media.Xa);
    chrome.cast.media.wb = {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    };
    x("chrome.cast.media.TrackType", chrome.cast.media.wb);
    chrome.cast.media.tb = {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    };
    x("chrome.cast.media.TextTrackType", chrome.cast.media.tb);
    chrome.cast.media.pb = {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    };
    x("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.pb);
    chrome.cast.media.ub = {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    };
    x("chrome.cast.media.TextTrackWindowType", chrome.cast.media.ub);
    chrome.cast.media.qb = {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    };
    x("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.qb);
    chrome.cast.media.rb = {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    };
    x("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.rb);
    chrome.cast.media.xb = {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW"
    };
    x("chrome.cast.media.UserAction", chrome.cast.media.xb);
    chrome.cast.media.ka = function() {
        this.customData = null
    };
    x("chrome.cast.media.GetStatusRequest", chrome.cast.media.ka);
    chrome.cast.media.oa = function() {
        this.customData = null
    };
    x("chrome.cast.media.PauseRequest", chrome.cast.media.oa);
    chrome.cast.media.qa = function() {
        this.customData = null
    };
    x("chrome.cast.media.PlayRequest", chrome.cast.media.qa);
    chrome.cast.media.lb = function() {
        this.customData = this.resumeState = this.currentTime = null
    };
    x("chrome.cast.media.SeekRequest", chrome.cast.media.lb);
    chrome.cast.media.xa = function() {
        this.customData = null
    };
    x("chrome.cast.media.StopRequest", chrome.cast.media.xa);
    chrome.cast.media.Cb = function(a) {
        this.volume = a;
        this.customData = null
    };
    x("chrome.cast.media.VolumeRequest", chrome.cast.media.Cb);
    chrome.cast.media.Ya = function(a) {
        this.type = "LOAD";
        this.requestId = 0;
        this.sessionId = null;
        this.media = a;
        this.activeTrackIds = null;
        this.autoplay = !0;
        this.atvCredentialsType = this.atvCredentials = this.credentialsType = this.credentials = void 0;
        this.customData = this.currentTime = null;
        this.queueData = this.playbackRate = void 0
    };
    x("chrome.cast.media.LoadRequest", chrome.cast.media.Ya);
    chrome.cast.media.Ta = function(a, b) {
        this.requestId = 0;
        this.activeTrackIds = a || null;
        this.textTrackStyle = b || null
    };
    x("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Ta);
    chrome.cast.media.S = function(a) {
        this.containerType = a = void 0 === a ? chrome.cast.media.T.GENERIC_CONTAINER : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    x("chrome.cast.media.ContainerMetadata", chrome.cast.media.S);
    chrome.cast.media.MediaMetadata = function(a) {
        this.metadataType = this.type = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = void 0
    };
    x("chrome.cast.media.MediaMetadata", chrome.cast.media.MediaMetadata);
    chrome.cast.media.ja = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.GENERIC);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = void 0
    };
    p(chrome.cast.media.ja, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.ja);
    chrome.cast.media.ma = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.MOVIE);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = void 0
    };
    p(chrome.cast.media.ma, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.ma);
    chrome.cast.media.Aa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.TV_SHOW);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = void 0
    };
    p(chrome.cast.media.Aa, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Aa);
    chrome.cast.media.na = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.MUSIC_TRACK);
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = void 0
    };
    p(chrome.cast.media.na, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.na);
    chrome.cast.media.pa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.PHOTO);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = void 0
    };
    p(chrome.cast.media.pa, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.pa);
    chrome.cast.media.fa = function() {
        chrome.cast.media.S.call(this, chrome.cast.media.T.AUDIOBOOK_CONTAINER);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    p(chrome.cast.media.fa, chrome.cast.media.S);
    x("chrome.cast.media.AudiobookContainerMetadata", chrome.cast.media.fa);
    chrome.cast.media.ea = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.AUDIOBOOK_CHAPTER);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.title = this.chapterTitle = void 0
    };
    p(chrome.cast.media.ea, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.AudiobookChapterMediaMetadata", chrome.cast.media.ea);
    chrome.cast.media.ab = function(a, b) {
        this.contentId = a;
        this.contentUrl = void 0;
        this.streamType = chrome.cast.media.ya.BUFFERED;
        this.contentType = void 0 === b ? "" : b;
        this.metadata = null;
        this.atvEntity = this.entity = void 0;
        this.duration = null;
        this.startAbsoluteTime = void 0;
        this.customData = this.textTrackStyle = this.tracks = null;
        this.userActionStates = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.vmapAdsRequest = this.breakClips = this.breaks = void 0
    };
    x("chrome.cast.media.MediaInfo", chrome.cast.media.ab);
    chrome.cast.media.sa = function(a) {
        this.itemId = null;
        this.media = a;
        this.autoplay = !0;
        this.startTime = 0;
        this.playbackDuration = null;
        this.preloadTime = 0;
        this.customData = this.activeTrackIds = null
    };
    x("chrome.cast.media.QueueItem", chrome.cast.media.sa);
    chrome.cast.media.Oa = "CC1AD845";
    x("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Oa);
    chrome.cast.media.timeout = {};
    chrome.cast.media.timeout.load = 0;
    x("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
    chrome.cast.media.timeout.O = 0;
    x("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.O);
    chrome.cast.media.timeout.play = 0;
    x("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
    chrome.cast.media.timeout.pause = 0;
    x("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
    chrome.cast.media.timeout.seek = 0;
    x("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
    chrome.cast.media.timeout.stop = 0;
    x("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
    chrome.cast.media.timeout.P = 0;
    x("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.P);
    chrome.cast.media.timeout.N = 0;
    x("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.N);
    chrome.cast.media.timeout.u = 0;
    x("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.u);
    chrome.cast.media.vb = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = null;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = null
    };
    x("chrome.cast.media.Track", chrome.cast.media.vb);
    chrome.cast.media.sb = function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null
    };
    x("chrome.cast.media.TextTrackStyle", chrome.cast.media.sb);
    chrome.cast.media.eb = function(a) {
        this.type = "QUEUE_LOAD";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.startIndex = 0;
        this.repeatMode = chrome.cast.media.U.OFF;
        this.customData = null
    };
    x("chrome.cast.media.QueueLoadRequest", chrome.cast.media.eb);
    chrome.cast.media.ra = function(a) {
        this.type = "QUEUE_INSERT";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = this.insertBefore = null
    };
    x("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.ra);
    chrome.cast.media.gb = function(a) {
        this.type = "QUEUE_UPDATE";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = null
    };
    x("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.gb);
    chrome.cast.media.L = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null
    };
    x("chrome.cast.media.QueueJumpRequest", chrome.cast.media.L);
    chrome.cast.media.va = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.repeatMode = this.sessionId = this.requestId = null
    };
    x("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.va);
    chrome.cast.media.ta = function(a) {
        this.type = "QUEUE_REMOVE";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = null
    };
    x("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.ta);
    chrome.cast.media.ua = function(a) {
        this.type = "QUEUE_REORDER";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = this.insertBefore = null
    };
    x("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.ua);
    chrome.cast.media.Ia = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.isEmbedded = void 0
    };
    x("chrome.cast.media.Break", chrome.cast.media.Ia);
    chrome.cast.media.Ja = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    x("chrome.cast.media.BreakClip", chrome.cast.media.Ja);
    chrome.cast.media.zb = function() {
        this.adsResponse = this.adTagUrl = void 0
    };
    x("chrome.cast.media.VastAdsRequest", chrome.cast.media.zb);
    chrome.cast.media.Ka = function() {
        this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0
    };
    x("chrome.cast.media.BreakStatus", chrome.cast.media.Ka);
    chrome.cast.media.la = function(a, b, c, d) {
        this.start = a;
        this.end = b;
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    x("chrome.cast.media.LiveSeekableRange", chrome.cast.media.la);
    chrome.cast.media.cb = function(a, b, c, d, e, h, k) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = h;
        this.startTime = k;
        this.containerMetadata = void 0
    };
    x("chrome.cast.media.QueueData", chrome.cast.media.cb);
    chrome.cast.media.yb = function(a) {
        this.userAction = a;
        this.customData = void 0
    };
    x("chrome.cast.media.UserActionState", chrome.cast.media.yb);
    chrome.cast.media.Ab = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    x("chrome.cast.media.VideoInformation", chrome.cast.media.Ab);
    var H = null;
    chrome.cast.media.h = function(a, b) {
        this.sessionId = a;
        this.mediaSessionId = b;
        this.media = null;
        this.videoInfo = this.queueData = void 0;
        this.playbackRate = 1;
        this.playerState = chrome.cast.media.A.IDLE;
        this.currentTime = 0;
        this.g = -1;
        this.supportedMediaCommands = [];
        this.volume = new chrome.cast.Volume;
        this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
        this.repeatMode = chrome.cast.media.U.OFF;
        this.breakStatus = void 0;
        this.l = !1;
        this.i = [];
        this.liveSeekableRange =
            void 0
    };
    f = chrome.cast.media.h.prototype;
    f.O = function(a, b, c) {
        a || (a = new chrome.cast.media.ka);
        H.m(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.O)
    };
    f.play = function(a, b, c) {
        var d = H;
        a || (a = new chrome.cast.media.qa);
        d.m(this, "PLAY", a, b, c, chrome.cast.media.timeout.play)
    };
    f.pause = function(a, b, c) {
        var d = H;
        a || (a = new chrome.cast.media.oa);
        d.m(this, "PAUSE", a, b, c, chrome.cast.media.timeout.pause)
    };
    f.seek = function(a, b, c) {
        H.m(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek)
    };
    f.stop = function(a, b, c) {
        a || (a = new chrome.cast.media.xa);
        H.m(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop)
    };
    f.P = function(a, b, c) {
        H.m(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.P)
    };
    f.N = function(a, b, c) {
        H.m(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.N)
    };
    f.Rb = function(a, b, c) {
        H.m(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Qb = function(a, b, c) {
        H.m(this, "QUEUE_INSERT", new chrome.cast.media.ra([a]), b, c, chrome.cast.media.timeout.u)
    };
    f.bc = function(a, b, c) {
        H.m(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Wb = function(a, b) {
        var c = new chrome.cast.media.L;
        c.jump = -1;
        H.m(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.u)
    };
    f.Vb = function(a, b) {
        var c = new chrome.cast.media.L;
        c.jump = 1;
        H.m(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.u)
    };
    f.Sb = function(a, b, c) {
        if (!(0 > Xa(this, a))) {
            var d = new chrome.cast.media.L;
            d.currentItemId = a;
            H.m(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.u)
        }
    };
    f.ac = function(a, b, c) {
        var d = new chrome.cast.media.va;
        d.repeatMode = a;
        H.m(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.u)
    };
    f.Yb = function(a, b, c) {
        H.m(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Xb = function(a, b, c) {
        0 > Xa(this, a) || H.m(this, "QUEUE_REMOVE", new chrome.cast.media.ta([a]), b, c, chrome.cast.media.timeout.u)
    };
    f.Zb = function(a, b, c) {
        H.m(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Ub = function(a, b, c, d) {
        var e = Xa(this, a);
        if (!(0 > e))
            if (0 > b) d && d(new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER));
            else if (e == b) c && c();
        else {
            var h = null;
            b = b > e ? b + 1 : b;
            b < this.items.length && (h = this.items[b]);
            a = new chrome.cast.media.ua([a]);
            a.insertBefore = h ? h.itemId : null;
            H.m(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.u)
        }
    };
    f.nc = function(a) {
        return -1 < this.supportedMediaCommands.indexOf(a)
    };
    f.Lb = function() {
        if (this.playerState == chrome.cast.media.A.PLAYING && 0 <= this.g) {
            var a = this.currentTime + (Date.now() - this.g) / 1E3 * this.playbackRate;
            this.media && null != this.media.duration && a > this.media.duration && -1 != this.media.duration && (a = this.media.duration);
            0 > a && (a = 0);
            return a
        }
        return this.currentTime
    };
    f.Jb = function() {
        if (this.breakStatus && void 0 !== this.breakStatus.currentBreakTime) return this.playerState == chrome.cast.media.A.PLAYING && 0 <= this.g ? this.breakStatus.currentBreakTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakTime
    };
    f.Ib = function() {
        if (this.breakStatus && void 0 !== this.breakStatus.currentBreakClipTime) return this.playerState == chrome.cast.media.A.PLAYING && 0 <= this.g ? this.breakStatus.currentBreakClipTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakClipTime
    };
    f.Kb = function() {
        if (this.liveSeekableRange && void 0 !== this.liveSeekableRange.start && void 0 !== this.liveSeekableRange.end) {
            if (this.playerState == chrome.cast.media.A.PLAYING && 0 <= this.g) {
                var a = (Date.now() - this.g) / 1E3,
                    b = new chrome.cast.media.la;
                b.isMovingWindow = this.liveSeekableRange.isMovingWindow;
                b.isLiveDone = this.liveSeekableRange.isLiveDone;
                b.start = b.isMovingWindow ? this.liveSeekableRange.start + a : this.liveSeekableRange.start;
                b.end = b.isLiveDone ? this.liveSeekableRange.end : this.liveSeekableRange.end + a;
                return b
            }
            return this.liveSeekableRange
        }
    };
    f.X = function(a) {
        H.Eb(this, a)
    };
    f.aa = function(a) {
        H.dc(this, a)
    };
    var Xa = function(a, b) {
        return ta(a.items, function(c) {
            return c.itemId == b
        })
    };
    x("chrome.cast.media.Media", chrome.cast.media.h);
    chrome.cast.media.h.prototype.removeUpdateListener = chrome.cast.media.h.prototype.aa;
    chrome.cast.media.h.prototype.addUpdateListener = chrome.cast.media.h.prototype.X;
    chrome.cast.media.h.prototype.getEstimatedLiveSeekableRange = chrome.cast.media.h.prototype.Kb;
    chrome.cast.media.h.prototype.getEstimatedBreakClipTime = chrome.cast.media.h.prototype.Ib;
    chrome.cast.media.h.prototype.getEstimatedBreakTime = chrome.cast.media.h.prototype.Jb;
    chrome.cast.media.h.prototype.getEstimatedTime = chrome.cast.media.h.prototype.Lb;
    chrome.cast.media.h.prototype.supportsCommand = chrome.cast.media.h.prototype.nc;
    chrome.cast.media.h.prototype.queueMoveItemToNewIndex = chrome.cast.media.h.prototype.Ub;
    chrome.cast.media.h.prototype.queueReorderItems = chrome.cast.media.h.prototype.Zb;
    chrome.cast.media.h.prototype.queueRemoveItem = chrome.cast.media.h.prototype.Xb;
    chrome.cast.media.h.prototype.queueRemoveItems = chrome.cast.media.h.prototype.Yb;
    chrome.cast.media.h.prototype.queueSetRepeatMode = chrome.cast.media.h.prototype.ac;
    chrome.cast.media.h.prototype.queueJumpToItem = chrome.cast.media.h.prototype.Sb;
    chrome.cast.media.h.prototype.queueNext = chrome.cast.media.h.prototype.Vb;
    chrome.cast.media.h.prototype.queuePrev = chrome.cast.media.h.prototype.Wb;
    chrome.cast.media.h.prototype.queueUpdateItems = chrome.cast.media.h.prototype.bc;
    chrome.cast.media.h.prototype.queueAppendItem = chrome.cast.media.h.prototype.Qb;
    chrome.cast.media.h.prototype.queueInsertItems = chrome.cast.media.h.prototype.Rb;
    chrome.cast.media.h.prototype.editTracksInfo = chrome.cast.media.h.prototype.N;
    chrome.cast.media.h.prototype.setVolume = chrome.cast.media.h.prototype.P;
    chrome.cast.media.h.prototype.stop = chrome.cast.media.h.prototype.stop;
    chrome.cast.media.h.prototype.seek = chrome.cast.media.h.prototype.seek;
    chrome.cast.media.h.prototype.pause = chrome.cast.media.h.prototype.pause;
    chrome.cast.media.h.prototype.play = chrome.cast.media.h.prototype.play;
    chrome.cast.media.h.prototype.getStatus = chrome.cast.media.h.prototype.O;
    var Ya = function(a, b, c) {
        this.sessionId = a;
        this.namespaceName = b;
        this.message = c
    };
    var Za = function(a, b) {
        this.type = "SET_VOLUME";
        this.requestId = 0;
        this.volume = a;
        this.expectedVolume = b || null
    };
    var $a = function(a) {
        this.type = "STOP";
        this.requestId = 0;
        this.sessionId = a || null
    };
    chrome.cast.j = function(a, b, c, d, e) {
        this.sessionId = a;
        this.appId = b;
        this.displayName = c;
        this.statusText = null;
        this.appImages = d;
        this.receiver = e;
        this.senderApps = [];
        this.namespaces = [];
        this.media = [];
        this.status = chrome.cast.J.CONNECTED;
        this.transportId = ""
    };
    f = chrome.cast.j.prototype;
    f.lc = function(a, b, c) {
        var d = H;
        a = new Za(new chrome.cast.Volume(a, null), this.receiver.volume);
        d.setReceiverVolume(this.sessionId, a, b, c)
    };
    f.kc = function(a, b, c) {
        a = new Za(new chrome.cast.Volume(null, a), this.receiver.volume);
        H.setReceiverVolume(this.sessionId, a, b, c)
    };
    f.getDialAppInfo = function(a, b) {
        H.getDialAppInfo(a, b)
    };
    f.Mb = function(a, b) {
        H.leaveSession(this.sessionId, a, b)
    };
    f.stop = function(a, b) {
        H.Ca(new $a(this.sessionId), a, b, chrome.cast.timeout.stopSession)
    };
    f.sendMessage = function(a, b, c, d) {
        H.hc(new Ya(this.sessionId, a, b), c, d)
    };
    f.X = function(a) {
        H.Gb(this.sessionId, a)
    };
    f.aa = function(a) {
        H.fc(this.sessionId, a)
    };
    f.Fb = function(a, b) {
        H.Db(this.sessionId, a, b)
    };
    f.V = function(a) {
        H.V(this.sessionId, a)
    };
    f.Y = function(a) {
        H.Y(this.sessionId, a)
    };
    f.ec = function(a, b) {
        H.cc(this.sessionId, a, b)
    };
    f.Nb = function(a, b, c) {
        a.sessionId = this.sessionId;
        H.Da(a, "LOAD", b, c)
    };
    f.Tb = function(a, b, c) {
        a.sessionId = this.sessionId;
        H.Da(a, "QUEUE_LOAD", b, c)
    };
    x("chrome.cast.Session", chrome.cast.j);
    chrome.cast.j.prototype.queueLoad = chrome.cast.j.prototype.Tb;
    chrome.cast.j.prototype.loadMedia = chrome.cast.j.prototype.Nb;
    chrome.cast.j.prototype.removeMessageListener = chrome.cast.j.prototype.ec;
    chrome.cast.j.prototype.removeMediaListener = chrome.cast.j.prototype.Y;
    chrome.cast.j.prototype.addMediaListener = chrome.cast.j.prototype.V;
    chrome.cast.j.prototype.addMessageListener = chrome.cast.j.prototype.Fb;
    chrome.cast.j.prototype.removeUpdateListener = chrome.cast.j.prototype.aa;
    chrome.cast.j.prototype.addUpdateListener = chrome.cast.j.prototype.X;
    chrome.cast.j.prototype.sendMessage = chrome.cast.j.prototype.sendMessage;
    chrome.cast.j.prototype.stop = chrome.cast.j.prototype.stop;
    chrome.cast.j.prototype.leave = chrome.cast.j.prototype.Mb;
    chrome.cast.j.prototype.getDialAppInfo = chrome.cast.j.prototype.getDialAppInfo;
    chrome.cast.j.prototype.setReceiverMuted = chrome.cast.j.prototype.kc;
    chrome.cast.j.prototype.setReceiverVolumeLevel = chrome.cast.j.prototype.lc;
    var ab = function(a, b) {
        this.g = a[q.Symbol.iterator]();
        this.i = b
    };
    ab.prototype[Symbol.iterator] = function() {
        return this
    };
    ab.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.i.call(void 0, a.value),
            done: a.done
        }
    };
    var bb = function(a, b) {
        return new ab(a, b)
    };
    var cb = Object.freeze || function(a) {
        return a
    };
    var I = function() {};
    I.prototype.next = function() {
        return db
    };
    var db = cb({
        done: !0,
        value: void 0
    });
    I.prototype.o = function() {
        return this
    };
    var eb = function(a) {
            if (a instanceof I) return a;
            if ("function" == typeof a.o) return a.o(!1);
            if (t(a)) {
                var b = 0,
                    c = new I;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return db;
                        if (b in a) return {
                            value: a[b++],
                            done: !1
                        };
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        J = function(a, b) {
            if (t(a)) sa(a, b);
            else
                for (a = eb(a);;) {
                    var c = a.next();
                    if (c.done) break;
                    b.call(void 0, c.value, void 0, a)
                }
        };
    var fb = function(a) {
            if (a instanceof K || a instanceof L || a instanceof M) return a;
            if ("function" == typeof a.next) return new K(function() {
                return a
            });
            if ("function" == typeof a[Symbol.iterator]) return new K(function() {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.o) return new K(function() {
                return a.o()
            });
            throw Error("Not an iterator or iterable.");
        },
        K = function(a) {
            this.g = a
        };
    K.prototype.o = function() {
        return new L(this.g())
    };
    K.prototype[Symbol.iterator] = function() {
        return new M(this.g())
    };
    K.prototype.i = function() {
        return new M(this.g())
    };
    var L = function(a) {
        this.g = a
    };
    p(L, I);
    L.prototype.next = function() {
        return this.g.next()
    };
    L.prototype[Symbol.iterator] = function() {
        return new M(this.g)
    };
    L.prototype.i = function() {
        return new M(this.g)
    };
    var M = function(a) {
        K.call(this, function() {
            return a
        });
        this.l = a
    };
    p(M, K);
    M.prototype.next = function() {
        return this.l.next()
    };
    var N = function(a, b) {
        this.i = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof N)
                for (c = gb(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    N.prototype.K = function() {
        O(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
        return a
    };
    var gb = function(a) {
        O(a);
        return a.g.concat()
    };
    N.prototype.has = function(a) {
        return P(this.i, a)
    };
    N.prototype.clear = function() {
        this.i = {};
        this.l = this.size = this.g.length = 0
    };
    N.prototype.remove = function(a) {
        return this.delete(a)
    };
    N.prototype.delete = function(a) {
        return P(this.i, a) ? (delete this.i[a], --this.size, this.l++, this.g.length > 2 * this.size && O(this), !0) : !1
    };
    var O = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                P(a.i, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], P(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    f = N.prototype;
    f.get = function(a, b) {
        return P(this.i, a) ? this.i[a] : b
    };
    f.set = function(a, b) {
        P(this.i, a) || (this.size += 1, this.g.push(a), this.l++);
        this.i[a] = b
    };
    f.forEach = function(a, b) {
        for (var c = gb(this), d = 0; d < c.length; d++) {
            var e = c[d],
                h = this.get(e);
            a.call(b, h, e, this)
        }
    };
    f.keys = function() {
        return fb(this.o(!0)).i()
    };
    f.values = function() {
        return fb(this.o(!1)).i()
    };
    f.entries = function() {
        var a = this;
        return bb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    f.o = function(a) {
        O(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new I;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return db;
            var h = d.g[b++];
            return {
                value: a ? h : d.i[h],
                done: !1
            }
        };
        return e
    };
    var P = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var hb = function(a, b) {
        this.requestId = a;
        this.s = b;
        this.Fa = null
    };
    hb.prototype.i = function() {};
    var ib = function() {
            this.g = new N
        },
        jb = function(a, b) {
            a.g.set(b.requestId, b);
            b.Fa = setTimeout(function() {
                a.g.delete(b.requestId);
                b.i()
            }, b.s)
        },
        kb = function(a, b) {
            var c = a.g.get(b);
            if (!c) return null;
            clearTimeout(c.Fa);
            a.g.delete(b);
            return c
        };
    var Q = function(a, b, c, d) {
        hb.call(this, a, d || 6E5);
        this.l = b;
        this.g = c
    };
    p(Q, hb);
    Q.prototype.i = function() {
        this.g(new chrome.cast.Error(chrome.cast.v.TIMEOUT))
    };
    var R = function(a, b, c, d) {
        this.type = a;
        this.message = b;
        this.sequenceNumber = void 0 !== c ? c : -1;
        this.timeoutMillis = d || 0;
        this.clientId = ""
    };
    var S = function(a) {
            this.l = a;
            this.i = String(Date.now()) + String(Math.floor(1E5 * Math.random()));
            this.g = null
        },
        lb = function(a, b) {
            if (!a.g) return "No active session";
            b.clientId = a.i;
            b = JSON.stringify(b);
            if (32768 < b.length) return "Message length over limit";
            a.g.send(b);
            return null
        };
    S.prototype.connect = function(a) {
        this.g = a;
        this.g.onmessage = w(this.s, this);
        lb(this, new R("client_connect", this.i))
    };
    S.prototype.disconnect = function() {
        this.g.close();
        this.g = null
    };
    S.prototype.s = function(a) {
        a = JSON.parse(a.data);
        if (a.clientId == this.i) this.l.onMessage(a)
    };
    var mb = function(a, b, c) {
            this.l = a;
            this.i = b;
            this.g = c
        },
        nb = function(a) {
            var b = "cast-dial:" + a.l,
                c = new URLSearchParams;
            a.i && c.set("dialPostData", a.i);
            a.g && c.set("clientId", a.g);
            (a = c.toString()) && (b += "?" + a);
            return b
        };
    var ob = function(a, b, c, d, e, h, k, l, r, v) {
            this.G = a;
            this.g = b || null;
            this.l = c || null;
            this.B = d || null;
            this.C = void 0 !== e ? e : null;
            this.i = h || null;
            this.F = k || null;
            this.H = l || !1;
            this.I = r ? ["WEB", "ANDROID_TV"] : ["WEB"];
            this.s = v || null
        },
        pb = function(a) {
            var b = a.G.map(function(c) {
                var d = "cast:" + c.appId,
                    e = new URLSearchParams;
                c.capabilities && 0 < c.capabilities.length && e.set("capabilities", c.capabilities.join(","));
                a.g && e.set("clientId", a.g);
                a.l && e.set("autoJoinPolicy", a.l);
                a.B && e.set("defaultActionPolicy", a.B);
                null != a.C && e.set("launchTimeout",
                    String(a.C));
                a.H && e.set("invisibleSender", "true");
                e.set("supportedAppTypes", a.I.join(","));
                c = e.set;
                var h = JSON,
                    k = h.stringify,
                    l = {
                        launchCheckerParams: {}
                    };
                a.s && (l.launchCheckerParams.credentialsData = a.s);
                c.call(e, "appParams", k.call(h, l));
                return d + "?" + e.toString()
            });
            a.i && b.push(nb(new mb(a.i, a.F, a.g)));
            return b
        };
    var qb = function() {
            this.g = {};
            this.i = {}
        },
        rb = function(a, b, c) {
            var d = a.g[b];
            return d ? (d.status = c, d.media.forEach(function(e) {
                delete a.i[e.sessionId + "#" + e.mediaSessionId]
            }), delete a.g[b], !0) : !1
        },
        tb = function(a, b) {
            var c = a.g[b.sessionId];
            if (c) return c.statusText = b.statusText, c.namespaces = b.namespaces || [], c.receiver.volume = b.receiver.volume, c;
            c = new chrome.cast.j(b.sessionId, b.appId, b.displayName, b.appImages, b.receiver);
            for (var d in b) "media" == d ? c.media = b.media.map(function(e) {
                    e = sb(a, e);
                    e.s = !1;
                    e.l = !0;
                    return e
                }) :
                b.hasOwnProperty(d) && (c[d] = b[d]);
            return a.g[b.sessionId] = c
        },
        sb = function(a, b) {
            var c = b.sessionId + "#" + b.mediaSessionId,
                d = a.i[c];
            d || (d = new chrome.cast.media.h(b.sessionId, b.mediaSessionId), a.i[c] = d, (a = a.g[b.sessionId]) && a.media.push(d));
            a = d;
            a.currentItemId = null;
            a.loadingItemId = null;
            a.preloadedItemId = null;
            for (var e in b) "items" != e && b.hasOwnProperty(e) && ("volume" == e ? (a.volume.level = b.volume.level, a.volume.muted = b.volume.muted) : a[e] = b[e]);
            e = fa(["idleReason", "extendedStatus", "breakStatus"]);
            for (c = e.next(); !c.done; c =
                e.next()) c = c.value, b.hasOwnProperty(c) || (a[c] = null);
            "currentTime" in b && (a.g = Date.now());
            if (a.playerState == chrome.cast.media.A.IDLE && null == a.loadingItemId) a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null;
            else if (b.hasOwnProperty("items") && b.items) {
                e = [];
                var h = a.items;
                c = {};
                if (h)
                    for (var k = 0; k < h.length; k++) c[h[k].itemId] = k;
                b = fa(b.items);
                for (h = b.next(); !h.done; h = b.next()) {
                    h = h.value;
                    if (!h.media) {
                        k = h.itemId;
                        var l = a.items ? a.items[c[k]] : null;
                        l && l.media ? h.media = l.media : k == a.currentItemId &&
                            a.media && (h.media = a.media)
                    }
                    k = e;
                    l = k.push;
                    var r = void 0,
                        v = new chrome.cast.media.sa(h.media);
                    for (r in h) h.hasOwnProperty(r) && (v[r] = h[r]);
                    l.call(k, v)
                }
                a.items = e
            }
            return d
        },
        ub = function(a, b) {
            delete a.i[b.sessionId + "#" + b.mediaSessionId];
            if (a = a.g[b.sessionId]) b = a.media.indexOf(b), -1 != b && a.media.splice(b, 1)
        };
    var vb = E("Gecko") && !(-1 != La().toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        wb = -1 != La().toLowerCase().indexOf("webkit") && !E("Edge");
    !E("Android") || Oa();
    Oa();
    E("Safari") && (Oa() || (F() ? 0 : E("Coast")) || (F() ? 0 : E("Opera")) || (F() ? 0 : E("Edge")) || (F() ? Na("Microsoft Edge") : E("Edg/")) || F() && Na("Opera"));
    var xb = {},
        T = null,
        yb = vb || wb || "function" == typeof q.btoa,
        zb = function(a) {
            if (yb) var b = q.btoa(a);
            else {
                b = [];
                for (var c = 0, d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    if (255 < e) throw Error("go/unicode-to-byte-error");
                    b[c++] = e
                }
                a = void 0;
                void 0 === a && (a = 0);
                if (!T)
                    for (T = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        var h = c.concat(d[e].split(""));
                        xb[e] = h;
                        for (var k = 0; k < h.length; k++) {
                            var l = h[k];
                            void 0 === T[l] && (T[l] = k)
                        }
                    }
                a = xb[a];
                c = Array(Math.floor(b.length /
                    3));
                d = a[64] || "";
                for (e = h = 0; h < b.length - 2; h += 3) {
                    var r = b[h],
                        v = b[h + 1];
                    l = b[h + 2];
                    k = a[r >> 2];
                    r = a[(r & 3) << 4 | v >> 4];
                    v = a[(v & 15) << 2 | l >> 6];
                    l = a[l & 63];
                    c[e++] = "" + k + r + v + l
                }
                k = 0;
                l = d;
                switch (b.length - h) {
                    case 2:
                        k = b[h + 1], l = a[(k & 15) << 2] || d;
                    case 1:
                        b = b[h], c[e] = "" + a[b >> 2] + a[(b & 3) << 4 | k >> 4] + l + d
                }
                b = c.join("")
            }
            return b
        };
    var Ab = function(a) {
        if (a.K && "function" == typeof a.K) return a.K();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
        if ("string" === typeof a) return a.split("");
        if (t(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    };
    var U = function() {
            this.g = new N;
            this.size = 0
        },
        V = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (Object.prototype.hasOwnProperty.call(a, u) && a[u] || (a[u] = ++ma)) : b.slice(0, 1) + a
        };
    f = U.prototype;
    f.add = function(a) {
        this.g.set(V(a), a);
        this.size = this.g.size
    };
    f.removeAll = function(a) {
        a = Ab(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
        this.size = this.g.size
    };
    f.delete = function(a) {
        a = this.g.remove(V(a));
        this.size = this.g.size;
        return a
    };
    f.remove = function(a) {
        return this.delete(a)
    };
    f.clear = function() {
        this.g.clear();
        this.size = 0
    };
    f.has = function(a) {
        a = V(a);
        return this.g.has(a)
    };
    f.contains = function(a) {
        a = V(a);
        return this.g.has(a)
    };
    f.K = function() {
        return this.g.K()
    };
    f.values = function() {
        return this.g.values()
    };
    f.o = function() {
        return this.g.o(!1)
    };
    U.prototype[Symbol.iterator] = function() {
        return this.values()
    };
    var W = function() {
            this.B = new S(this);
            this.g = null;
            this.I = new qb;
            this.i = 0;
            this.R = new ib;
            this.C = new N;
            this.s = new N;
            this.G = new N;
            this.H = [];
            this.La = this.Hb.bind(this);
            this.ha = this.F = this.l = null
        },
        Bb = function(a) {
            var b = new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER, "Already requesting session");
            a && a(b)
        },
        X = function(a, b, c, d) {
            c && jb(a.R, c);
            void 0 !== d ? b.sequenceNumber = d : (b.sequenceNumber = a.i, a.i = (a.i + 1) % 9007199254740992);
            d = lb(a.B, b);
            c && d && (a = kb(a.R, b.sequenceNumber)) && (b = new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER,
                d), (a = a.g) && a(b))
        };
    W.prototype.initialize = function(a, b) {
        var c = this;
        H = this;
        this.g = a;
        a.invisibleSender || (a = new PresentationRequest(Cb(this)), a.getAvailability().then(function(d) {
            d.onchange = function() {
                c.g.receiverListener(d.value ? chrome.cast.M.AVAILABLE : chrome.cast.M.UNAVAILABLE)
            };
            d.onchange()
        }, function() {
            c.g.receiverListener(chrome.cast.M.AVAILABLE)
        }), a.onconnectionavailable = function(d) {
            Y(c, d.connection)
        }, this.ha = (q.navigator || null).presentation.defaultRequest = a, a.reconnect(chrome.cast.Ga).then(function(d) {
            Y(c, d)
        }, function() {}));
        b && b(void 0)
    };
    W.prototype.ca = function(a) {
        a.navigator.presentation.defaultRequest = this.ha
    };
    var Y = function(a, b, c) {
        c = void 0 === c ? null : c;
        b.onclose = function(d) {
            a.l = null;
            switch (d.reason) {
                case "closed":
                    Db(a, chrome.cast.J.DISCONNECTED);
                    break;
                case "error":
                    c && (d = new chrome.cast.Error(chrome.cast.v.SESSION_ERROR), c && c(d))
            }
        };
        b.onterminate = function() {
            Db(a, chrome.cast.J.STOPPED)
        };
        "connected" == b.state ? a.B.connect(b) : b.onconnect = function() {
            a.B.connect(b)
        }
    };
    W.prototype.requestSession = function(a, b, c) {
        var d = this;
        this.l ? Bb(b) : (c = Cb(this, c), this.l = a, (new PresentationRequest(c)).start().then(function(e) {
            Y(d, e, b)
        }).catch(function(e) {
            d.l = null;
            e = new chrome.cast.Error("AbortError" == e.name || "NotAllowedError" == e.name ? chrome.cast.v.CANCEL : chrome.cast.v.SESSION_ERROR);
            b && b(e)
        }))
    };
    var Cb = function(a, b) {
        var c = null,
            d = null;
        b = b || a.g.sessionRequest;
        var e = b.dialRequest;
        e && (c = e.appName, (d = e.launchParameter) && !d.match(Eb) && (d = zb(d)));
        var h = [];
        h.push({
            appId: b.appId,
            capabilities: b.capabilities
        });
        b || sa(a.g.additionalSessionRequests, function(k) {
            h.push({
                appId: k.appId,
                capabilities: k.capabilities
            })
        });
        return pb(new ob(h, a.B.i, a.g.autoJoinPolicy, a.g.defaultActionPolicy, b.requestSessionTimeout, c, d, a.g.invisibleSender, b.androidReceiverCompatible, b.credentialsData))
    };
    W.prototype.Da = function(a, b, c, d) {
        Fb(this, null, b, a, function(e) {
            e.l = !0;
            c && c(e)
        }, function(e) {
            d(e)
        }, chrome.cast.media.timeout.load)
    };
    W.prototype.m = function(a, b, c, d, e, h) {
        var k = this;
        Fb(this, a, b, c, function(l) {
            k.Ba(l);
            d && d(void 0)
        }, e, h)
    };
    var Fb = function(a, b, c, d, e, h, k) {
        d.type = c;
        null != b && (d.mediaSessionId = b.mediaSessionId, d.sessionId = b.sessionId);
        a.Ca(d, function(l) {
            l.status && 1 == l.status.length ? e && e(l.status[0]) : (l = new chrome.cast.Error(chrome.cast.v.SESSION_ERROR), h && h(l))
        }, h, k)
    };
    f = W.prototype;
    f.setReceiverVolume = function(a, b, c, d) {
        b.sessionId = a;
        X(this, new R("v2_message", b, void 0, chrome.cast.timeout.setReceiverVolume), new Q(this.i, c, d, chrome.cast.timeout.sendCustomMessage))
    };
    f.getDialAppInfo = function(a, b) {
        X(this, new R("dial_app_info", void 0, void 0, chrome.cast.timeout.getDialAppInfo), new Q(this.i, a, b, chrome.cast.timeout.sendCustomMessage))
    };
    f.ba = function(a) {
        var b = this;
        (new PresentationRequest(Cb(this))).reconnect(chrome.cast.bb + a).then(function(c) {
            Y(b, c)
        }, function() {})
    };
    f.leaveSession = function(a, b, c) {
        X(this, new R("leave_session", a, void 0, chrome.cast.timeout.leaveSession), new Q(this.i, b, c, chrome.cast.timeout.leaveSession))
    };
    f.hc = function(a, b, c) {
        X(this, new R("app_message", a, void 0, chrome.cast.timeout.sendCustomMessage), new Q(this.i, b, c, chrome.cast.timeout.sendCustomMessage))
    };
    f.Ca = function(a, b, c, d) {
        X(this, new R("v2_message", a, void 0, d), new Q(this.i, b, c, d))
    };
    var Gb = function(a, b, c) {
        var d = a.get(b);
        d || (d = new U, a.set(b, d));
        d.add(c)
    };
    f = W.prototype;
    f.Gb = function(a, b) {
        Gb(this.C, a, b)
    };
    f.fc = function(a, b) {
        (a = this.C.get(a)) && a.remove(b)
    };
    f.W = function(a) {
        this.H.push(a)
    };
    f.Z = function(a) {
        a = this.H.indexOf(a);
        0 <= a && this.H.splice(a, 1)
    };
    f.Db = function(a, b, c) {
        var d = this.s.get(a);
        d || (d = new N, this.s.set(a, d));
        a = d.get(b);
        a || (a = new U, d.set(b, a));
        a.add(c)
    };
    f.cc = function(a, b, c) {
        (a = this.s.get(a)) && (b = a.get(b)) && b.remove(c)
    };
    f.V = function(a, b) {
        Gb(this.G, a, b)
    };
    f.Y = function(a, b) {
        (a = this.G.get(a)) && a.remove(b)
    };
    f.Eb = function(a, b) {
        -1 == a.i.indexOf(b) && a.i.push(b)
    };
    f.dc = function(a, b) {
        b = a.i.indexOf(b); - 1 != b && a.i.splice(b, 1)
    };
    f.Ba = function(a) {
        if (a.l) {
            var b = a.playerState != chrome.cast.media.A.IDLE || null != a.loadingItemId;
            a.i.forEach(function(d) {
                d(b)
            });
            b || ub(this.I, a)
        } else {
            a.l = !0;
            var c = this.G.get(a.sessionId);
            c && J(c.o(), function(d) {
                d(a)
            })
        }
    };
    f.Hb = function(a) {
        return sb(this.I, a)
    };
    var Db = function(a, b) {
        if (a.F) {
            var c = a.F;
            a.F = null;
            a.B.disconnect();
            var d = b != chrome.cast.J.STOPPED;
            rb(a.I, c, b) && (a.s.delete(c), a.G.delete(c), b = a.C.get(c)) && (a.C.delete(c), J(b.o(), function(e) {
                e(d)
            }))
        }
    };
    W.prototype.onMessage = function(a) {
        switch (a.type) {
            case "new_session":
            case "update_session":
                a.message = tb(this.I, a.message);
                break;
            case "v2_message":
                var b = a.message;
                b && "MEDIA_STATUS" == b.type && b.status && (b.status = b.status.map(this.La))
        }
        if (b = kb(this.R, a.sequenceNumber)) "error" == a.type ? (b = b.g) && b(a.message) : (b = b.l) && b(a.message);
        if (b = a.message) switch (a.type) {
            case "receiver_action":
                Hb(this, b);
                break;
            case "new_session":
                this.F = b.sessionId;
                this.l ? (this.l(b), this.l = null) : this.g && this.g.sessionListener(b);
                break;
            case "update_session":
                Ib(this, b);
                break;
            case "app_message":
                Jb(this, b);
                break;
            case "v2_message":
                "MEDIA_STATUS" == b.type && b.status.forEach(this.Ba.bind(this));
                break;
            case "custom_dial_launch":
                Kb(this, a.sequenceNumber, b)
        }
    };
    var Ib = function(a, b) {
            (a = a.C.get(b.sessionId)) && J(a.o(), function(c) {
                c(!0)
            })
        },
        Hb = function(a, b) {
            a.H.forEach(function(c) {
                c(b.receiver, b.action)
            })
        },
        Jb = function(a, b) {
            (a = a.s.get(b.sessionId)) && (a = a.get(b.namespaceName)) && J(a.o(), function(c) {
                c(b.namespaceName, b.message)
            })
        },
        Lb = function(a, b, c) {
            X(a, new R("custom_dial_launch", c, void 0, chrome.cast.timeout.sendCustomMessage), null, b)
        },
        Kb = function(a, b, c) {
            a.g.customDialLaunchCallback ? a.g.customDialLaunchCallback(c).then(function(d) {
                    Lb(a, b, d)
                }, function() {
                    Lb(a, b)
                }) :
                Lb(a, b)
        },
        Eb = RegExp("^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$"),
        Z = new W;
    chrome.cast.initialize = function(a, b, c) {
        Z.initialize(a, b, c)
    };
    x("chrome.cast.initialize", chrome.cast.initialize);
    chrome.cast.ca = function(a) {
        Z.ca(a)
    };
    x("chrome.cast.setPageContext", chrome.cast.ca);
    chrome.cast.requestSession = function(a, b, c) {
        Z.requestSession(a, b, c)
    };
    x("chrome.cast.requestSession", chrome.cast.requestSession);
    chrome.cast.Pb = function() {};
    x("chrome.cast.precache", chrome.cast.Pb);
    chrome.cast.ba = function(a) {
        Z.ba(a)
    };
    x("chrome.cast.requestSessionById", chrome.cast.ba);
    chrome.cast.W = function(a) {
        Z.W(a)
    };
    x("chrome.cast.addReceiverActionListener", chrome.cast.W);
    chrome.cast.Z = function(a) {
        Z.Z(a)
    };
    x("chrome.cast.removeReceiverActionListener", chrome.cast.Z);
    chrome.cast.Ob = function() {};
    x("chrome.cast.logMessage", chrome.cast.Ob);
    chrome.cast.ic = function(a, b) {
        b()
    };
    x("chrome.cast.setCustomReceivers", chrome.cast.ic);
    chrome.cast.jc = function(a, b) {
        b()
    };
    x("chrome.cast.setReceiverDisplayStatus", chrome.cast.jc);
    chrome.cast.unescape = function(a) {
        return -1 != a.indexOf("&") ? "document" in q ? Va(a) : Wa(a) : a
    };
    x("chrome.cast.unescape", chrome.cast.unescape);
    chrome.cast.isAvailable = !1;
    x("chrome.cast.isAvailable", chrome.cast.isAvailable);
    chrome.cast.Ea = !1;
    chrome.cast.da = function() {
        if (!chrome.cast.Ea) {
            chrome.cast.Ea = !0;
            chrome.cast.isAvailable = !0;
            var a = window.__onGCastApiAvailable;
            a && "function" == typeof a && a(!0)
        }
    };
    "complete" == document.readyState ? chrome.cast.da() : (window.addEventListener("load", chrome.cast.da, !1), window.addEventListener("DOMContentLoaded", chrome.cast.da, !1));
}).call(this);