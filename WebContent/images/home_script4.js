webpackJsonp([13], {
    128 : function(e, t) {},
    129 : function(e, t) { !
        function(e) {
            function t() {
                s = {}
            }
            function a(e) {
                return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
            }
            function r(e, t) {
                return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
            }
            var i, s = {};
            e(document).ready(function() {
                var n, o;
                "MSGesture" in window && (i = new MSGesture, i.target = document.body),
                e(document).on("touchstart MSPointerDown pointerdown",
                function(t) { (o = r(t, "down")) && !a(t) || (n = o ? t: t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0] : t, t.touches && 1 === t.touches.length && s.x2 && (s.x2 = void 0, s.y2 = void 0), s.el = e("tagName" in n.target ? n.target: n.target.parentNode), s.x1 = n.pageX, s.y1 = n.pageY, i && o && i.addPointer(t.pointerId))
                }).on("touchmove MSPointerMove pointermove",
                function(e) { (o = r(e, "move")) && !a(e) || (n = o ? e: e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e, s.x2 = n.pageX, s.y2 = n.pageY)
                }).on("touchend MSPointerUp pointerup",
                function(i) {
                    if (! (o = r(i, "up")) || a(i)) {
                        var n = e.Event("tap");
                        s.x2 || s.y2 ? Math.abs(s.x2 - s.x1) <= 5 && Math.abs(s.y2 - s.y1) <= 5 ? (n.cancelTouch = t, s.el && s.el.trigger(n)) : s = {}: (n.cancelTouch = t, s.el && s.el.trigger(n))
                    }
                }).on("touchcancel MSPointerCancel pointercancel", t),
                e(window).on("scroll", t)
            }),
            e.fn.tap = function(e) {
                return this.on("tap", e)
            }
        } (jQuery)
    },
    130 : function(e, t) { !
        function(e) {
            function t(e) {
                for (var t = 0; (e = e.previousSibling) && 9 !== e.nodeType;) 3 != e.nodeType && t++;
                return t
            }
            var a, r, i;
            i = function(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            },
            r = function s(e, t) {
                var a;
                for (a in e) if (e.hasOwnProperty(a)) {
                    if (i(e[a]) && i(t[a]) && s(e[a], t[a]), t.hasOwnProperty(a)) continue;
                    t[a] = e[a]
                }
            },
            a = function() {
                var e, t = arguments,
                a = {};
                if (!t.length) return {};
                for (e = t.length - 1; e >= 0; e--) i(t[e]) && r(t[e], a);
                return t[0] = a,
                a
            },
            e.extend = a,
            e.index = t,
            "classList" in document.documentElement || Object.defineProperty(Element.prototype, "classList", {
                get: function() {
                    function e(e) {
                        return function(a) {
                            var r = t.className.split(/\s+/g),
                            i = r.indexOf(a);
                            e(r, i, a),
                            t.className = r.join(" ")
                        }
                    }
                    var t = this;
                    return {
                        add: e(function(e, t, a) {~t || e.push(a)
                        }),
                        remove: e(function(e, t) {~t && e.splice(t, 1)
                        }),
                        toggle: e(function(e, t, a) {~t ? e.splice(t, 1) : e.push(a)
                        }),
                        contains: function(e) {
                            return !! ~t.className.split(/\s+/g).indexOf(e)
                        },
                        item: function(e) {
                            return t.className.split(/\s+/g)[e] || null
                        }
                    }
                }
            }),
            Array.prototype.filter || (Array.prototype.filter = function(e) {
                var t = this.length;
                if ("function" != typeof e) throw new TypeError;
                for (var a = new Array,
                r = arguments[1], i = 0; i < t; i++) i in this && e.call(r, this[i], i, this) && a.push(val);
                return a
            })
        } (window),
        window.toast = function(e) {
            var t = document.createElement("DIV");
            t.setAttribute("class", "global-toast md-effect-1");
            var a = document.createElement("DIV");
            a.setAttribute("class", "toast-content"),
            a.innerHTML = e,
            t.appendChild(a),
            document.body.appendChild(t),
            t.classList.add("global-toast-show");
            var r = document.createElement("DIV");
            r.setAttribute("class", "global-toast-lock"),
            document.body.appendChild(r);
            var i = setTimeout(function() {
                t.classList.remove("global-toast-show"),
                setTimeout(function() {
                    t.parentNode.removeChild(t),
                    r.parentNode.removeChild(r)
                },
                1e3),
                clearTimeout(i)
            },
            2e3)
        },
        window.confirm = function(e, t, a, r) {
            function i() {
                s.classList.remove("global-confirm-show"),
                setTimeout(function() {
                    s.parentNode.removeChild(s)
                },
                500)
            }
            var s = document.createElement("div");
            s.setAttribute("class", "global-confirm ");
            var n = '<div class="comfirm-ctx">            <div class="title"></div>            <div class="btn-group flex">                <a href="javascript:void(0)"' + (r ? 'style="display: none;"': "") + 'class="btn btn-cancel cell">鍙栨秷</a>                <a href="javascript:void(0)" class="btn btn-cfm cell">' + (a || "纭") + "</a>            </div>        </div>";
            s.innerHTML = n,
            document.body.appendChild(s),
            s.querySelector(".title").innerHTML = e || "",
            s.querySelector(".btn-cancel").onclick = function() {
                i()
            };
            var o = s.querySelector(".btn-cfm");
            o.onclick = function() {
                t && t(o),
                i()
            },
            s.classList.add("global-confirm-show")
        }
    },
    131 : function(e, t, a) { (function(e) {
            var a, r; (function() {
                function i(e) {
                    function t(t, a, r, i, s, n) {
                        for (; s >= 0 && s < n; s += e) {
                            var o = i ? i[s] : s;
                            r = a(r, t[o], o, t)
                        }
                        return r
                    }
                    return function(a, r, i, s) {
                        r = T(r, s, 4);
                        var n = !I(a) && S.keys(a),
                        o = (n || a).length,
                        l = e > 0 ? 0 : o - 1;
                        return arguments.length < 3 && (i = a[n ? n[l] : l], l += e),
                        t(a, r, i, n, l, o)
                    }
                }
                function s(e) {
                    return function(t, a, r) {
                        a = C(a, r);
                        for (var i = P(t), s = e > 0 ? 0 : i - 1; s >= 0 && s < i; s += e) if (a(t[s], s, t)) return s;
                        return - 1
                    }
                }
                function n(e, t, a) {
                    return function(r, i, s) {
                        var n = 0,
                        o = P(r);
                        if ("number" == typeof s) e > 0 ? n = s >= 0 ? s: Math.max(s + o, n) : o = s >= 0 ? Math.min(s + 1, o) : s + o + 1;
                        else if (a && s && o) return s = a(r, i),
                        r[s] === i ? s: -1;
                        if (i !== i) return s = t(m.call(r, n, o), S.isNaN),
                        s >= 0 ? s + n: -1;
                        for (s = e > 0 ? n: o - 1; s >= 0 && s < o; s += e) if (r[s] === i) return s;
                        return - 1
                    }
                }
                function o(e, t) {
                    var a = _.length,
                    r = e.constructor,
                    i = S.isFunction(r) && r.prototype || u,
                    s = "constructor";
                    for (S.has(e, s) && !S.contains(t, s) && t.push(s); a--;)(s = _[a]) in e && e[s] !== i[s] && !S.contains(t, s) && t.push(s)
                }
                var l = this,
                p = l._,
                c = Array.prototype,
                u = Object.prototype,
                d = Function.prototype,
                h = c.push,
                m = c.slice,
                f = u.toString,
                g = u.hasOwnProperty,
                v = Array.isArray,
                y = Object.keys,
                w = d.bind,
                x = Object.create,
                b = function() {},
                S = function(e) {
                    return e instanceof S ? e: this instanceof S ? void(this._wrapped = e) : new S(e)
                };
                void 0 !== e && e.exports && (t = e.exports = S),
                t._ = S,
                S.VERSION = "1.8.3";
                var T = function(e, t, a) {
                    if (void 0 === t) return e;
                    switch (null == a ? 3 : a) {
                    case 1:
                        return function(a) {
                            return e.call(t, a)
                        };
                    case 2:
                        return function(a, r) {
                            return e.call(t, a, r)
                        };
                    case 3:
                        return function(a, r, i) {
                            return e.call(t, a, r, i)
                        };
                    case 4:
                        return function(a, r, i, s) {
                            return e.call(t, a, r, i, s)
                        }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                C = function(e, t, a) {
                    return null == e ? S.identity: S.isFunction(e) ? T(e, t, a) : S.isObject(e) ? S.matcher(e) : S.property(e)
                };
                S.iteratee = function(e, t) {
                    return C(e, t, 1 / 0)
                };
                var E = function(e, t) {
                    return function(a) {
                        var r = arguments.length;
                        if (r < 2 || null == a) return a;
                        for (var i = 1; i < r; i++) for (var s = arguments[i], n = e(s), o = n.length, l = 0; l < o; l++) {
                            var p = n[l];
                            t && void 0 !== a[p] || (a[p] = s[p])
                        }
                        return a
                    }
                },
                k = function(e) {
                    if (!S.isObject(e)) return {};
                    if (x) return x(e);
                    b.prototype = e;
                    var t = new b;
                    return b.prototype = null,
                    t
                },
                M = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e]
                    }
                },
                z = Math.pow(2, 53) - 1,
                P = M("length"),
                I = function(e) {
                    var t = P(e);
                    return "number" == typeof t && t >= 0 && t <= z
                };
                S.each = S.forEach = function(e, t, a) {
                    t = T(t, a);
                    var r, i;
                    if (I(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                    else {
                        var s = S.keys(e);
                        for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
                    }
                    return e
                },
                S.map = S.collect = function(e, t, a) {
                    t = C(t, a);
                    for (var r = !I(e) && S.keys(e), i = (r || e).length, s = Array(i), n = 0; n < i; n++) {
                        var o = r ? r[n] : n;
                        s[n] = t(e[o], o, e)
                    }
                    return s
                },
                S.reduce = S.foldl = S.inject = i(1),
                S.reduceRight = S.foldr = i( - 1),
                S.find = S.detect = function(e, t, a) {
                    var r;
                    if (void 0 !== (r = I(e) ? S.findIndex(e, t, a) : S.findKey(e, t, a)) && -1 !== r) return e[r]
                },
                S.filter = S.select = function(e, t, a) {
                    var r = [];
                    return t = C(t, a),
                    S.each(e,
                    function(e, a, i) {
                        t(e, a, i) && r.push(e)
                    }),
                    r
                },
                S.reject = function(e, t, a) {
                    return S.filter(e, S.negate(C(t)), a)
                },
                S.every = S.all = function(e, t, a) {
                    t = C(t, a);
                    for (var r = !I(e) && S.keys(e), i = (r || e).length, s = 0; s < i; s++) {
                        var n = r ? r[s] : s;
                        if (!t(e[n], n, e)) return ! 1
                    }
                    return ! 0
                },
                S.some = S.any = function(e, t, a) {
                    t = C(t, a);
                    for (var r = !I(e) && S.keys(e), i = (r || e).length, s = 0; s < i; s++) {
                        var n = r ? r[s] : s;
                        if (t(e[n], n, e)) return ! 0
                    }
                    return ! 1
                },
                S.contains = S.includes = S.include = function(e, t, a, r) {
                    return I(e) || (e = S.values(e)),
                    ("number" != typeof a || r) && (a = 0),
                    S.indexOf(e, t, a) >= 0
                },
                S.invoke = function(e, t) {
                    var a = m.call(arguments, 2),
                    r = S.isFunction(t);
                    return S.map(e,
                    function(e) {
                        var i = r ? t: e[t];
                        return null == i ? i: i.apply(e, a)
                    })
                },
                S.pluck = function(e, t) {
                    return S.map(e, S.property(t))
                },
                S.where = function(e, t) {
                    return S.filter(e, S.matcher(t))
                },
                S.findWhere = function(e, t) {
                    return S.find(e, S.matcher(t))
                },
                S.max = function(e, t, a) {
                    var r, i, s = -1 / 0,
                    n = -1 / 0;
                    if (null == t && null != e) {
                        e = I(e) ? e: S.values(e);
                        for (var o = 0,
                        l = e.length; o < l; o++)(r = e[o]) > s && (s = r)
                    } else t = C(t, a),
                    S.each(e,
                    function(e, a, r) { ((i = t(e, a, r)) > n || i === -1 / 0 && s === -1 / 0) && (s = e, n = i)
                    });
                    return s
                },
                S.min = function(e, t, a) {
                    var r, i, s = 1 / 0,
                    n = 1 / 0;
                    if (null == t && null != e) {
                        e = I(e) ? e: S.values(e);
                        for (var o = 0,
                        l = e.length; o < l; o++)(r = e[o]) < s && (s = r)
                    } else t = C(t, a),
                    S.each(e,
                    function(e, a, r) { ((i = t(e, a, r)) < n || i === 1 / 0 && s === 1 / 0) && (s = e, n = i)
                    });
                    return s
                },
                S.shuffle = function(e) {
                    for (var t, a = I(e) ? e: S.values(e), r = a.length, i = Array(r), s = 0; s < r; s++) t = S.random(0, s),
                    t !== s && (i[s] = i[t]),
                    i[t] = a[s];
                    return i
                },
                S.sample = function(e, t, a) {
                    return null == t || a ? (I(e) || (e = S.values(e)), e[S.random(e.length - 1)]) : S.shuffle(e).slice(0, Math.max(0, t))
                },
                S.sortBy = function(e, t, a) {
                    return t = C(t, a),
                    S.pluck(S.map(e,
                    function(e, a, r) {
                        return {
                            value: e,
                            index: a,
                            criteria: t(e, a, r)
                        }
                    }).sort(function(e, t) {
                        var a = e.criteria,
                        r = t.criteria;
                        if (a !== r) {
                            if (a > r || void 0 === a) return 1;
                            if (a < r || void 0 === r) return - 1
                        }
                        return e.index - t.index
                    }), "value")
                };
                var L = function(e) {
                    return function(t, a, r) {
                        var i = {};
                        return a = C(a, r),
                        S.each(t,
                        function(r, s) {
                            var n = a(r, s, t);
                            e(i, r, n)
                        }),
                        i
                    }
                };
                S.groupBy = L(function(e, t, a) {
                    S.has(e, a) ? e[a].push(t) : e[a] = [t]
                }),
                S.indexBy = L(function(e, t, a) {
                    e[a] = t
                }),
                S.countBy = L(function(e, t, a) {
                    S.has(e, a) ? e[a]++:e[a] = 1
                }),
                S.toArray = function(e) {
                    return e ? S.isArray(e) ? m.call(e) : I(e) ? S.map(e, S.identity) : S.values(e) : []
                },
                S.size = function(e) {
                    return null == e ? 0 : I(e) ? e.length: S.keys(e).length
                },
                S.partition = function(e, t, a) {
                    t = C(t, a);
                    var r = [],
                    i = [];
                    return S.each(e,
                    function(e, a, s) { (t(e, a, s) ? r: i).push(e)
                    }),
                    [r, i]
                },
                S.first = S.head = S.take = function(e, t, a) {
                    if (null != e) return null == t || a ? e[0] : S.initial(e, e.length - t)
                },
                S.initial = function(e, t, a) {
                    return m.call(e, 0, Math.max(0, e.length - (null == t || a ? 1 : t)))
                },
                S.last = function(e, t, a) {
                    if (null != e) return null == t || a ? e[e.length - 1] : S.rest(e, Math.max(0, e.length - t))
                },
                S.rest = S.tail = S.drop = function(e, t, a) {
                    return m.call(e, null == t || a ? 1 : t)
                },
                S.compact = function(e) {
                    return S.filter(e, S.identity)
                };
                var A = function(e, t, a, r) {
                    for (var i = [], s = 0, n = r || 0, o = P(e); n < o; n++) {
                        var l = e[n];
                        if (I(l) && (S.isArray(l) || S.isArguments(l))) {
                            t || (l = A(l, t, a));
                            var p = 0,
                            c = l.length;
                            for (i.length += c; p < c;) i[s++] = l[p++]
                        } else a || (i[s++] = l)
                    }
                    return i
                };
                S.flatten = function(e, t) {
                    return A(e, t, !1)
                },
                S.without = function(e) {
                    return S.difference(e, m.call(arguments, 1))
                },
                S.uniq = S.unique = function(e, t, a, r) {
                    S.isBoolean(t) || (r = a, a = t, t = !1),
                    null != a && (a = C(a, r));
                    for (var i = [], s = [], n = 0, o = P(e); n < o; n++) {
                        var l = e[n],
                        p = a ? a(l, n, e) : l;
                        t ? (n && s === p || i.push(l), s = p) : a ? S.contains(s, p) || (s.push(p), i.push(l)) : S.contains(i, l) || i.push(l)
                    }
                    return i
                },
                S.union = function() {
                    return S.uniq(A(arguments, !0, !0))
                },
                S.intersection = function(e) {
                    for (var t = [], a = arguments.length, r = 0, i = P(e); r < i; r++) {
                        var s = e[r];
                        if (!S.contains(t, s)) {
                            for (var n = 1; n < a && S.contains(arguments[n], s); n++);
                            n === a && t.push(s)
                        }
                    }
                    return t
                },
                S.difference = function(e) {
                    var t = A(arguments, !0, !0, 1);
                    return S.filter(e,
                    function(e) {
                        return ! S.contains(t, e)
                    })
                },
                S.zip = function() {
                    return S.unzip(arguments)
                },
                S.unzip = function(e) {
                    for (var t = e && S.max(e, P).length || 0, a = Array(t), r = 0; r < t; r++) a[r] = S.pluck(e, r);
                    return a
                },
                S.object = function(e, t) {
                    for (var a = {},
                    r = 0,
                    i = P(e); r < i; r++) t ? a[e[r]] = t[r] : a[e[r][0]] = e[r][1];
                    return a
                },
                S.findIndex = s(1),
                S.findLastIndex = s( - 1),
                S.sortedIndex = function(e, t, a, r) {
                    a = C(a, r, 1);
                    for (var i = a(t), s = 0, n = P(e); s < n;) {
                        var o = Math.floor((s + n) / 2);
                        a(e[o]) < i ? s = o + 1 : n = o
                    }
                    return s
                },
                S.indexOf = n(1, S.findIndex, S.sortedIndex),
                S.lastIndexOf = n( - 1, S.findLastIndex),
                S.range = function(e, t, a) {
                    null == t && (t = e || 0, e = 0),
                    a = a || 1;
                    for (var r = Math.max(Math.ceil((t - e) / a), 0), i = Array(r), s = 0; s < r; s++, e += a) i[s] = e;
                    return i
                };
                var O = function(e, t, a, r, i) {
                    if (! (r instanceof t)) return e.apply(a, i);
                    var s = k(e.prototype),
                    n = e.apply(s, i);
                    return S.isObject(n) ? n: s
                };
                S.bind = function(e, t) {
                    if (w && e.bind === w) return w.apply(e, m.call(arguments, 1));
                    if (!S.isFunction(e)) throw new TypeError("Bind must be called on a function");
                    var a = m.call(arguments, 2),
                    r = function() {
                        return O(e, r, t, this, a.concat(m.call(arguments)))
                    };
                    return r
                },
                S.partial = function(e) {
                    var t = m.call(arguments, 1),
                    a = function() {
                        for (var r = 0,
                        i = t.length,
                        s = Array(i), n = 0; n < i; n++) s[n] = t[n] === S ? arguments[r++] : t[n];
                        for (; r < arguments.length;) s.push(arguments[r++]);
                        return O(e, a, this, this, s)
                    };
                    return a
                },
                S.bindAll = function(e) {
                    var t, a, r = arguments.length;
                    if (r <= 1) throw new Error("bindAll must be passed function names");
                    for (t = 1; t < r; t++) a = arguments[t],
                    e[a] = S.bind(e[a], e);
                    return e
                },
                S.memoize = function(e, t) {
                    var a = function(r) {
                        var i = a.cache,
                        s = "" + (t ? t.apply(this, arguments) : r);
                        return S.has(i, s) || (i[s] = e.apply(this, arguments)),
                        i[s]
                    };
                    return a.cache = {},
                    a
                },
                S.delay = function(e, t) {
                    var a = m.call(arguments, 2);
                    return setTimeout(function() {
                        return e.apply(null, a)
                    },
                    t)
                },
                S.defer = S.partial(S.delay, S, 1),
                S.throttle = function(e, t, a) {
                    var r, i, s, n = null,
                    o = 0;
                    a || (a = {});
                    var l = function() {
                        o = !1 === a.leading ? 0 : S.now(),
                        n = null,
                        s = e.apply(r, i),
                        n || (r = i = null)
                    };
                    return function() {
                        var p = S.now();
                        o || !1 !== a.leading || (o = p);
                        var c = t - (p - o);
                        return r = this,
                        i = arguments,
                        c <= 0 || c > t ? (n && (clearTimeout(n), n = null), o = p, s = e.apply(r, i), n || (r = i = null)) : n || !1 === a.trailing || (n = setTimeout(l, c)),
                        s
                    }
                },
                S.debounce = function(e, t, a) {
                    var r, i, s, n, o, l = function() {
                        var p = S.now() - n;
                        p < t && p >= 0 ? r = setTimeout(l, t - p) : (r = null, a || (o = e.apply(s, i), r || (s = i = null)))
                    };
                    return function() {
                        s = this,
                        i = arguments,
                        n = S.now();
                        var p = a && !r;
                        return r || (r = setTimeout(l, t)),
                        p && (o = e.apply(s, i), s = i = null),
                        o
                    }
                },
                S.wrap = function(e, t) {
                    return S.partial(t, e)
                },
                S.negate = function(e) {
                    return function() {
                        return ! e.apply(this, arguments)
                    }
                },
                S.compose = function() {
                    var e = arguments,
                    t = e.length - 1;
                    return function() {
                        for (var a = t,
                        r = e[t].apply(this, arguments); a--;) r = e[a].call(this, r);
                        return r
                    }
                },
                S.after = function(e, t) {
                    return function() {
                        if (--e < 1) return t.apply(this, arguments)
                    }
                },
                S.before = function(e, t) {
                    var a;
                    return function() {
                        return--e > 0 && (a = t.apply(this, arguments)),
                        e <= 1 && (t = null),
                        a
                    }
                },
                S.once = S.partial(S.before, 2);
                var D = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                _ = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                S.keys = function(e) {
                    if (!S.isObject(e)) return [];
                    if (y) return y(e);
                    var t = [];
                    for (var a in e) S.has(e, a) && t.push(a);
                    return D && o(e, t),
                    t
                },
                S.allKeys = function(e) {
                    if (!S.isObject(e)) return [];
                    var t = [];
                    for (var a in e) t.push(a);
                    return D && o(e, t),
                    t
                },
                S.values = function(e) {
                    for (var t = S.keys(e), a = t.length, r = Array(a), i = 0; i < a; i++) r[i] = e[t[i]];
                    return r
                },
                S.mapObject = function(e, t, a) {
                    t = C(t, a);
                    for (var r, i = S.keys(e), s = i.length, n = {},
                    o = 0; o < s; o++) r = i[o],
                    n[r] = t(e[r], r, e);
                    return n
                },
                S.pairs = function(e) {
                    for (var t = S.keys(e), a = t.length, r = Array(a), i = 0; i < a; i++) r[i] = [t[i], e[t[i]]];
                    return r
                },
                S.invert = function(e) {
                    for (var t = {},
                    a = S.keys(e), r = 0, i = a.length; r < i; r++) t[e[a[r]]] = a[r];
                    return t
                },
                S.functions = S.methods = function(e) {
                    var t = [];
                    for (var a in e) S.isFunction(e[a]) && t.push(a);
                    return t.sort()
                },
                S.extend = E(S.allKeys),
                S.extendOwn = S.assign = E(S.keys),
                S.findKey = function(e, t, a) {
                    t = C(t, a);
                    for (var r, i = S.keys(e), s = 0, n = i.length; s < n; s++) if (r = i[s], t(e[r], r, e)) return r
                },
                S.pick = function(e, t, a) {
                    var r, i, s = {},
                    n = e;
                    if (null == n) return s;
                    S.isFunction(t) ? (i = S.allKeys(n), r = T(t, a)) : (i = A(arguments, !1, !1, 1), r = function(e, t, a) {
                        return t in a
                    },
                    n = Object(n));
                    for (var o = 0,
                    l = i.length; o < l; o++) {
                        var p = i[o],
                        c = n[p];
                        r(c, p, n) && (s[p] = c)
                    }
                    return s
                },
                S.omit = function(e, t, a) {
                    if (S.isFunction(t)) t = S.negate(t);
                    else {
                        var r = S.map(A(arguments, !1, !1, 1), String);
                        t = function(e, t) {
                            return ! S.contains(r, t)
                        }
                    }
                    return S.pick(e, t, a)
                },
                S.defaults = E(S.allKeys, !0),
                S.create = function(e, t) {
                    var a = k(e);
                    return t && S.extendOwn(a, t),
                    a
                },
                S.clone = function(e) {
                    return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({},
                    e) : e
                },
                S.tap = function(e, t) {
                    return t(e),
                    e
                },
                S.isMatch = function(e, t) {
                    var a = S.keys(t),
                    r = a.length;
                    if (null == e) return ! r;
                    for (var i = Object(e), s = 0; s < r; s++) {
                        var n = a[s];
                        if (t[n] !== i[n] || !(n in i)) return ! 1
                    }
                    return ! 0
                };
                var B = function(e, t, a, r) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return e === t;
                    e instanceof S && (e = e._wrapped),
                    t instanceof S && (t = t._wrapped);
                    var i = f.call(e);
                    if (i !== f.call(t)) return ! 1;
                    switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return + e != +e ? +t != +t: 0 == +e ? 1 / +e == 1 / t: +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return + e == +t
                    }
                    var s = "[object Array]" === i;
                    if (!s) {
                        if ("object" != typeof e || "object" != typeof t) return ! 1;
                        var n = e.constructor,
                        o = t.constructor;
                        if (n !== o && !(S.isFunction(n) && n instanceof n && S.isFunction(o) && o instanceof o) && "constructor" in e && "constructor" in t) return ! 1
                    }
                    a = a || [],
                    r = r || [];
                    for (var l = a.length; l--;) if (a[l] === e) return r[l] === t;
                    if (a.push(e), r.push(t), s) {
                        if ((l = e.length) !== t.length) return ! 1;
                        for (; l--;) if (!B(e[l], t[l], a, r)) return ! 1
                    } else {
                        var p, c = S.keys(e);
                        if (l = c.length, S.keys(t).length !== l) return ! 1;
                        for (; l--;) if (p = c[l], !S.has(t, p) || !B(e[p], t[p], a, r)) return ! 1
                    }
                    return a.pop(),
                    r.pop(),
                    !0
                };
                S.isEqual = function(e, t) {
                    return B(e, t)
                },
                S.isEmpty = function(e) {
                    return null == e || (I(e) && (S.isArray(e) || S.isString(e) || S.isArguments(e)) ? 0 === e.length: 0 === S.keys(e).length)
                },
                S.isElement = function(e) {
                    return ! (!e || 1 !== e.nodeType)
                },
                S.isArray = v ||
                function(e) {
                    return "[object Array]" === f.call(e)
                },
                S.isObject = function(e) {
                    var t = typeof e;
                    return "function" === t || "object" === t && !!e
                },
                S.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
                function(e) {
                    S["is" + e] = function(t) {
                        return f.call(t) === "[object " + e + "]"
                    }
                }),
                S.isArguments(arguments) || (S.isArguments = function(e) {
                    return S.has(e, "callee")
                }),
                "function" != typeof / . / &&"object" != typeof Int8Array && (S.isFunction = function(e) {
                    return "function" == typeof e || !1
                }),
                S.isFinite = function(e) {
                    return isFinite(e) && !isNaN(parseFloat(e))
                },
                S.isNaN = function(e) {
                    return S.isNumber(e) && e !== +e
                },
                S.isBoolean = function(e) {
                    return ! 0 === e || !1 === e || "[object Boolean]" === f.call(e)
                },
                S.isNull = function(e) {
                    return null === e
                },
                S.isUndefined = function(e) {
                    return void 0 === e
                },
                S.has = function(e, t) {
                    return null != e && g.call(e, t)
                },
                S.noConflict = function() {
                    return l._ = p,
                    this
                },
                S.identity = function(e) {
                    return e
                },
                S.constant = function(e) {
                    return function() {
                        return e
                    }
                },
                S.noop = function() {},
                S.property = M,
                S.propertyOf = function(e) {
                    return null == e ?
                    function() {}: function(t) {
                        return e[t]
                    }
                },
                S.matcher = S.matches = function(e) {
                    return e = S.extendOwn({},
                    e),
                    function(t) {
                        return S.isMatch(t, e)
                    }
                },
                S.times = function(e, t, a) {
                    var r = Array(Math.max(0, e));
                    t = T(t, a, 1);
                    for (var i = 0; i < e; i++) r[i] = t(i);
                    return r
                },
                S.random = function(e, t) {
                    return null == t && (t = e, e = 0),
                    e + Math.floor(Math.random() * (t - e + 1))
                },
                S.now = Date.now ||
                function() {
                    return (new Date).getTime()
                };
                var N = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                H = S.invert(N),
                G = function(e) {
                    var t = function(t) {
                        return e[t]
                    },
                    a = "(?:" + S.keys(e).join("|") + ")",
                    r = RegExp(a),
                    i = RegExp(a, "g");
                    return function(e) {
                        return e = null == e ? "": "" + e,
                        r.test(e) ? e.replace(i, t) : e
                    }
                };
                S.escape = G(N),
                S.unescape = G(H),
                S.result = function(e, t, a) {
                    var r = null == e ? void 0 : e[t];
                    return void 0 === r && (r = a),
                    S.isFunction(r) ? r.call(e) : r
                };
                var R = 0;
                S.uniqueId = function(e) {
                    var t = ++R + "";
                    return e ? e + t: t
                },
                S.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var $ = /(.)^/,
                X = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Y = /\\|'|\r|\n|\u2028|\u2029/g,
                W = function(e) {
                    return "\\" + X[e]
                };
                S.template = function(e, t, a) { ! t && a && (t = a),
                    t = S.defaults({},
                    t, S.templateSettings);
                    var r = RegExp([(t.escape || $).source, (t.interpolate || $).source, (t.evaluate || $).source].join("|") + "|$", "g"),
                    i = 0,
                    s = "__p+='";
                    e.replace(r,
                    function(t, a, r, n, o) {
                        return s += e.slice(i, o).replace(Y, W),
                        i = o + t.length,
                        a ? s += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'": r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": n && (s += "';\n" + n + "\n__p+='"),
                        t
                    }),
                    s += "';\n",
                    t.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                    s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                        var n = new Function(t.variable || "obj", "_", s)
                    } catch(l) {
                        throw l.source = s,
                        l
                    }
                    var o = function(e) {
                        return n.call(this, e, S)
                    };
                    return o.source = "function(" + (t.variable || "obj") + "){\n" + s + "}",
                    o
                },
                S.chain = function(e) {
                    var t = S(e);
                    return t._chain = !0,
                    t
                };
                var j = function(e, t) {
                    return e._chain ? S(t).chain() : t
                };
                S.mixin = function(e) {
                    S.each(S.functions(e),
                    function(t) {
                        var a = S[t] = e[t];
                        S.prototype[t] = function() {
                            var e = [this._wrapped];
                            return h.apply(e, arguments),
                            j(this, a.apply(S, e))
                        }
                    })
                },
                S.mixin(S),
                S.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
                function(e) {
                    var t = c[e];
                    S.prototype[e] = function() {
                        var a = this._wrapped;
                        return t.apply(a, arguments),
                        "shift" !== e && "splice" !== e || 0 !== a.length || delete a[0],
                        j(this, a)
                    }
                }),
                S.each(["concat", "join", "slice"],
                function(e) {
                    var t = c[e];
                    S.prototype[e] = function() {
                        return j(this, t.apply(this._wrapped, arguments))
                    }
                }),
                S.prototype.value = function() {
                    return this._wrapped
                },
                S.prototype.valueOf = S.prototype.toJSON = S.prototype.value,
                S.prototype.toString = function() {
                    return "" + this._wrapped
                },
                "object" == typeof e && e && "object" == typeof e.exports ? e.exports = S: (a = [], void 0 !== (r = function() {
                    return S
                }.apply(t, a)) && (e.exports = r)),
                "object" == typeof window && "object" == typeof window.document && (window.underscore = window._ = S)
            }).call(this)
        }).call(t, a(241)(e))
    },
    132 : function(e, t) { !
        function(e) {
            "use strict";
            var t = function(e) {
                var t = function(e) {
                    this.asts = e,
                    this.init()
                };
                t.Helper = {},
                t.prototype = {
                    constructor: t
                };
                var a = !{
                    toString: 1
                }.propertyIsEnumerable("toString"),
                r = Object.keys ||
                function(e) {
                    var t, r, i = [];
                    for (t in e) i.push(t);
                    if (a) for (r = enumProperties.length - 1; r >= 0; r--) t = enumProperties[r],
                    e.hasOwnProperty(t) && i.push(t);
                    return i
                },
                i = {
                    forEach: e.each,
                    some: e.some,
                    mixin: e.extend,
                    guid: e.uniqueId,
                    isArray: e.isArray,
                    indexOf: e.indexOf,
                    keys: r,
                    isObject: e.isObject,
                    now: e.now
                };
                return function(e, t) {
                    function a(e) {
                        var i = e.leader,
                        s = void 0 !== e.args;
                        return e.isWraped && (i += "{"),
                        i += s ? r(e) : e.id,
                        t.forEach(e.path,
                        function(e) {
                            if ("method" == e.type) i += "." + r(e);
                            else if ("index" == e.type) {
                                var t = "",
                                s = e.id;
                                if ("integer" === s.type) t = s.value;
                                else if ("string" === s.type) {
                                    var n = s.isEval ? '"': "'";
                                    t = n + s.value + n
                                } else t = a(s);
                                i += "[" + t + "]"
                            } else "property" == e.type && (i += "." + e.id)
                        },
                        this),
                        e.isWraped && (i += "}"),
                        i
                    }
                    function r(e) {
                        var a = [],
                        r = "";
                        return t.forEach(e.args,
                        function(e) {
                            a.push(i(e))
                        }),
                        r += e.id + "(" + a.join(",") + ")"
                    }
                    function i(e) {
                        var r = "";
                        switch (e.type) {
                        case "string":
                            var s = e.isEval ? '"': "'";
                            r = s + e.value + s;
                            break;
                        case "integer":
                        case "bool":
                            r = e.value;
                            break;
                        case "array":
                            r = "[";
                            var n = e.value.length - 1;
                            t.forEach(e.value,
                            function(e, t) {
                                r += i(e),
                                t !== n && (r += ", ")
                            }),
                            r += "]";
                            break;
                        default:
                            r = a(e)
                        }
                        return r
                    }
                    e.getRefText = a
                } (t.Helper, i),
                function(e, t) {
                    t.mixin(e.prototype, {
                        getBlock: function(e) {
                            var t = e[0],
                            a = "";
                            return "if" === t.type ? a = this.getBlockIf(e) : "foreach" === t.type ? a = this.getBlockEach(e) : "macro" === t.type ? this.setBlockMacro(e) : a = "noescape" === t.type ? this._render(e.slice(1)) : this._render(e),
                            a || ""
                        },
                        setBlockMacro: function(e) {
                            var t = e[0],
                            a = e.slice(1);
                            this.macros[t.id] = {
                                asts: a,
                                args: t.args
                            }
                        },
                        getMacro: function(e) {
                            var a = this.macros[e.id],
                            r = "";
                            if (a) {
                                var i = a.asts,
                                s = a.args,
                                n = e.args,
                                o = {},
                                l = t.guid(),
                                p = e.id + ":" + l;
                                t.forEach(s,
                                function(e, t) {
                                    n[t] ? o[e.id] = this.getLiteral(n[t]) : o[e.id] = void 0
                                },
                                this),
                                r = this.eval(i, o, p)
                            } else {
                                a = this.jsmacros[e.id];
                                var c = [];
                                a && a.apply && (t.forEach(e.args,
                                function(e) {
                                    c.push(this.getLiteral(e))
                                },
                                this), r = a.apply(this, c))
                            }
                            return r
                        },
                        eval: function(a, r, i) {
                            if (!r) return t.isArray(a) ? this._render(a) : this.evalStr(a);
                            var s = [],
                            n = e.Parser;
                            if (i = i || "eval:" + t.guid(), t.isArray(a) ? s = a: n && (s = n.parse(a)), s.length) {
                                this.local[i] = r;
                                var o = this._render(s, i);
                                return this.local[i] = {},
                                this.conditions.pop(),
                                this.condition = "",
                                o
                            }
                        },
                        getBlockEach: function(e) {
                            var a = e[0],
                            r = this.getLiteral(a.from),
                            i = e.slice(1),
                            s = a.to,
                            n = {
                                foreach: {
                                    count: 0
                                }
                            },
                            o = "",
                            l = t.guid(),
                            p = "foreach:" + l,
                            c = {}.toString.call(r);
                            if (r && ("[object Array]" === c || "[object Object]" === c)) {
                                var u = t.isArray(r) ? r.length: t.keys(r).length;
                                return t.forEach(r,
                                function(e, t) {
                                    this.setBreak || (n[s] = e, n.foreach.count = t + 1, n.foreach.index = t, n.foreach.hasNext = t + 1 < u, n.velocityCount = parseInt(t, 10) + 1, this.local[p] = n, o += this._render(i, p))
                                },
                                this),
                                this.setBreak = !1,
                                this.local[p] = {},
                                this.conditions.shift(),
                                this.condition = this.conditions[0] || "",
                                o
                            }
                        },
                        getBlockIf: function(e) {
                            var a = !1,
                            r = [];
                            return t.some(e,
                            function(e) {
                                if (e.condition) {
                                    if (a) return ! 0;
                                    a = this.getExpression(e.condition)
                                } else if ("else" === e.type) {
                                    if (a) return ! 0;
                                    a = !0
                                } else a && r.push(e);
                                return ! 1
                            },
                            this),
                            this._render(r)
                        }
                    })
                } (t, i),
                function(e, t) {
                    t.mixin(e.prototype, {
                        init: function() {
                            this.context = {},
                            this.macros = {},
                            this.conditions = [],
                            this.local = {},
                            this.silence = !1,
                            t.forEach(this.asts, this._init, this)
                        },
                        _init: function(e, t) {
                            e.type && "references" === e.type || this._trim(t + 1)
                        },
                        _trim: function(e) {
                            var t = this.asts,
                            a = t[e];
                            "string" == typeof a && "\n" === a.slice(0, 1) && (t[e] = a.slice(1))
                        },
                        render: function(e, a, r) {
                            this.silence = !!r,
                            this.context = e || {},
                            this.jsmacros = a || {};
                            var i = t.now(),
                            s = this._render(),
                            n = t.now(),
                            o = n - i;
                            return this.cost = o,
                            s
                        },
                        _render: function(e, a) {
                            var r = "";
                            return e = e || this.asts,
                            a ? (a !== this.condition && -1 === t.indexOf(a, this.conditions) && this.conditions.unshift(a), this.condition = a) : this.condition = null,
                            t.forEach(e,
                            function(e) {
                                switch (e.type) {
                                case "references":
                                    r += this.getReferences(e, !0);
                                    break;
                                case "set":
                                    this.setValue(e);
                                    break;
                                case "break":
                                    this.setBreak = !0;
                                    break;
                                case "macro_call":
                                    r += this.getMacro(e);
                                    break;
                                case "comment":
                                    break;
                                default:
                                    r += "string" == typeof e ? e: this.getBlock(e)
                                }
                            },
                            this),
                            r
                        }
                    })
                } (t, i),
                function(e, t) {
                    t.mixin(e.prototype, {
                        getExpression: function(e) {
                            var t, a = e.expression;
                            if ("math" === e.type) {
                                switch (e.operator) {
                                case "+":
                                    t = this.getExpression(a[0]) + this.getExpression(a[1]);
                                    break;
                                case "-":
                                    t = this.getExpression(a[0]) - this.getExpression(a[1]);
                                    break;
                                case "/":
                                    t = this.getExpression(a[0]) / this.getExpression(a[1]);
                                    break;
                                case "%":
                                    t = this.getExpression(a[0]) % this.getExpression(a[1]);
                                    break;
                                case "*":
                                    t = this.getExpression(a[0]) * this.getExpression(a[1]);
                                    break;
                                case "||":
                                    t = this.getExpression(a[0]) || this.getExpression(a[1]);
                                    break;
                                case "&&":
                                    t = this.getExpression(a[0]) && this.getExpression(a[1]);
                                    break;
                                case ">":
                                    t = this.getExpression(a[0]) > this.getExpression(a[1]);
                                    break;
                                case "<":
                                    t = this.getExpression(a[0]) < this.getExpression(a[1]);
                                    break;
                                case "==":
                                    t = this.getExpression(a[0]) == this.getExpression(a[1]);
                                    break;
                                case ">=":
                                    t = this.getExpression(a[0]) >= this.getExpression(a[1]);
                                    break;
                                case "<=":
                                    t = this.getExpression(a[0]) <= this.getExpression(a[1]);
                                    break;
                                case "!=":
                                    t = this.getExpression(a[0]) != this.getExpression(a[1]);
                                    break;
                                case "minus":
                                    t = -this.getExpression(a[0]);
                                    break;
                                case "not":
                                    t = !this.getExpression(a[0]);
                                    break;
                                case "parenthesis":
                                    t = this.getExpression(a[0]);
                                    break;
                                default:
                                    return
                                }
                                return t
                            }
                            return this.getLiteral(e)
                        }
                    })
                } (t, i),
                function(e, t) {
                    t.mixin(e.prototype, {
                        getLiteral: function(e) {
                            var a = e.type,
                            r = "";
                            if ("string" == a) r = this.getString(e);
                            else if ("integer" == a) r = parseInt(e.value, 10);
                            else if ("decimal" == a) r = parseFloat(e.value, 10);
                            else if ("array" == a) r = this.getArray(e);
                            else if ("map" == a) {
                                r = {};
                                var i = e.value;
                                t.forEach(i,
                                function(e, t) {
                                    r[t] = this.getLiteral(e)
                                },
                                this)
                            } else {
                                if ("bool" != a) return this.getReferences(e);
                                "null" === e.value ? r = null: "false" === e.value ? r = !1 : "true" === e.value && (r = !0)
                            }
                            return r
                        },
                        getString: function(e) {
                            var t = e.value,
                            a = t;
                            return ! e.isEval || -1 === t.indexOf("#") && -1 === t.indexOf("$") || (a = this.evalStr(t)),
                            a
                        },
                        getArray: function(e) {
                            var a = [];
                            if (e.isRange) {
                                var r = e.value[0];
                                "references" === r.type && (r = this.getReferences(r));
                                var i = e.value[1];
                                "references" === i.type && (i = this.getReferences(i)),
                                i = parseInt(i, 10),
                                r = parseInt(r, 10);
                                var s;
                                if (!isNaN(r) && !isNaN(i)) if (r < i) for (s = r; s <= i; s++) a.push(s);
                                else for (s = r; s >= i; s--) a.push(s)
                            } else t.forEach(e.value,
                            function(e) {
                                a.push(this.getLiteral(e))
                            },
                            this);
                            return a
                        },
                        evalStr: function(t) {
                            if (e.Parser) {
                                var a = e.Parser.parse(t);
                                r = this._render(a)
                            } else {
                                var r = t,
                                i = /\$\{{0,1}([_a-z][a-z_\-0-9.]*)\}{0,1}/gi,
                                s = this;
                                r = r.replace(i,
                                function() {
                                    return s._getFromVarname(arguments[1])
                                })
                            }
                            return r
                        },
                        _getFromVarname: function(e) {
                            for (var t = e.split("."), a = {
                                type: "references",
                                id: t[0],
                                leader: "$"
                            },
                            r = [], i = 1; i < t.length; i++) r.push({
                                type: "property",
                                id: t[i]
                            });
                            return r.length && (a.path = r),
                            this.getReferences(a)
                        }
                    })
                } (t, i),
                function(e, t) {
                    function a(e) {
                        return t.isArray(e) ? e.length: t.isObject(e) ? t.keys(e).length: void 0
                    }
                    t.mixin(e.prototype, {
                        getReferences: function(a, r) {
                            var i = this.silence || "$!" === a.leader,
                            s = void 0 !== a.args,
                            n = this.context,
                            o = n[a.id],
                            l = this.getLocal(a);
                            void 0 !== o && s && (o = this.getPropMethod(a, n)),
                            l.isLocaled && (o = l.value);
                            var p = this.hasSetMethod(a, o);
                            return ! 1 !== p ? (n[a.id] || (n[a.id] = {}), t.mixin(n[a.id], p), "") : (a.path && void 0 !== o && t.some(a.path,
                            function(e, t) {
                                return void 0 === (o = this.getAttributes(e, o))
                            },
                            this), r && void 0 === o && (o = i ? "": e.Helper.getRefText(a)), o)
                        },
                        hasSetMethod: function(e, a) {
                            var r = {
                                control: !0
                            },
                            i = e.path && e.path.length;
                            return ! (!i || r[e.id]) && (0 === ("" + e.path[i - 1].id).indexOf("set") && (a = a || {},
                            t.forEach(e.path,
                            function(e) {
                                "method" === e.type && 0 === e.id.indexOf("set") ? a[e.id.slice(3)] = this.getLiteral(e.args[0]) : a[e.id] = a[e.id] || {}
                            },
                            this), a))
                        },
                        getLocal: function(e) {
                            var a = e.id,
                            r = this.local,
                            i = !1,
                            s = t.some(this.conditions,
                            function(e) {
                                var t = r[e];
                                return a in t && (i = t[a], !0)
                            },
                            this);
                            return {
                                value: i,
                                isLocaled: s
                            }
                        },
                        getAttributes: function(e, t) {
                            var a = e.type,
                            r = e.id;
                            return "method" === a ? this.getPropMethod(e, t) : "property" === a ? t[r] : this.getPropIndex(e, t)
                        },
                        getPropIndex: function(e, t) {
                            var a, r = e.id;
                            return a = "references" === r.type ? this.getReferences(r) : (r.type, r.value),
                            t[a]
                        },
                        getPropMethod: function(e, r) {
                            var i = e.id,
                            s = "",
                            n = i.slice(3);
                            if (! (0 !== i.indexOf("get") || i in r)) return n ? s = r[n] : (n = this.getLiteral(e.args[0]), s = r[n]),
                            s;
                            if (! (0 !== i.indexOf("is") || i in r)) return n = i.slice(2),
                            s = r[n];
                            if ("keySet" === i) return t.keys(r);
                            if ("entrySet" === i) return s = [],
                            t.forEach(r,
                            function(e, t) {
                                s.push({
                                    key: t,
                                    value: e
                                })
                            }),
                            s;
                            if ("size" === i) return a(r);
                            s = r[i];
                            var o = [];
                            if (t.forEach(e.args,
                            function(e) {
                                o.push(this.getLiteral(e))
                            },
                            this), s && s.call) {
                                var l = this;
                                r.eval = function() {
                                    return l.eval.apply(l, arguments)
                                },
                                s = s.apply(r, o)
                            } else s = void 0;
                            return s
                        }
                    })
                } (t, i),
                function(e, t) {
                    t.mixin(e.prototype, {
                        getContext: function() {
                            var e = this.condition,
                            t = this.local;
                            return e ? t[e] : this.context
                        },
                        setValue: function(e) {
                            var a, r = e.equal[0],
                            i = this.context,
                            s = e.equal[1];
                            if (a = "math" === s.type ? this.getExpression(s) : this.getLiteral(e.equal[1]), r.path) {
                                var n = i[r.id];
                                "object" != typeof n && (n = {}),
                                i[r.id] = n;
                                var o = r.path ? r.path.length: 0;
                                t.forEach(r.path,
                                function(e, t) {
                                    var r = o === t + 1,
                                    s = e.id;
                                    "index" === e.type && ("references" === s.type && (s.value = i[s.id]), s = s.value),
                                    n[s] = r ? a: {},
                                    n = n[s]
                                })
                            } else i[r.id] = a
                        }
                    })
                } (t, i),
                t
            } (e),
            a = function(e) {
                function t(e, a) {
                    var r = {
                        if: 1,
                        foreach: 1,
                        macro: 1,
                        noescape: 1,
                        define: 1
                    },
                    i = e.length;
                    a = a || 0;
                    for (var s = [], n = a - 1, o = a; o < i; o++) if (! (o <= n)) {
                        var l = e[o],
                        p = l.type;
                        if (r[p] || "end" === p) {
                            if ("end" === p) return {
                                arr: s,
                                step: o
                            };
                            var c = t(e, o + 1);
                            n = c.step,
                            c.arr.unshift(e[o]),
                            s.push(c.arr)
                        } else s.push(l)
                    }
                    return s
                }
                var a = function() {
                    function e() {
                        this.yy = {}
                    }
                    var t = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            statements: 4,
                            EOF: 5,
                            statement: 6,
                            references: 7,
                            directives: 8,
                            content: 9,
                            COMMENT: 10,
                            set: 11,
                            if: 12,
                            elseif: 13,
                            else: 14,
                            end: 15,
                            foreach: 16,
                            break: 17,
                            define: 18,
                            HASH: 19,
                            NOESCAPE: 20,
                            PARENTHESIS: 21,
                            CLOSE_PARENTHESIS: 22,
                            macro: 23,
                            macro_call: 24,
                            SET: 25,
                            equal: 26,
                            IF: 27,
                            expression: 28,
                            ELSEIF: 29,
                            ELSE: 30,
                            END: 31,
                            FOREACH: 32,
                            DOLLAR: 33,
                            ID: 34,
                            IN: 35,
                            array: 36,
                            BREAK: 37,
                            DEFINE: 38,
                            MACRO: 39,
                            macro_args: 40,
                            macro_call_args_all: 41,
                            macro_call_args: 42,
                            literals: 43,
                            SPACE: 44,
                            COMMA: 45,
                            EQUAL: 46,
                            map: 47,
                            math: 48,
                            "||": 49,
                            "&&": 50,
                            "+": 51,
                            "-": 52,
                            "*": 53,
                            "/": 54,
                            "%": 55,
                            ">": 56,
                            "<": 57,
                            "==": 58,
                            ">=": 59,
                            "<=": 60,
                            "!=": 61,
                            parenthesis: 62,
                            "!": 63,
                            literal: 64,
                            brace_begin: 65,
                            attributes: 66,
                            brace_end: 67,
                            methodbd: 68,
                            VAR_BEGIN: 69,
                            MAP_BEGIN: 70,
                            VAR_END: 71,
                            MAP_END: 72,
                            attribute: 73,
                            method: 74,
                            index: 75,
                            property: 76,
                            DOT: 77,
                            params: 78,
                            CONTENT: 79,
                            BRACKET: 80,
                            CLOSE_BRACKET: 81,
                            string: 82,
                            number: 83,
                            BOOL: 84,
                            integer: 85,
                            INTEGER: 86,
                            DECIMAL_POINT: 87,
                            STRING: 88,
                            EVAL_STRING: 89,
                            range: 90,
                            RANGE: 91,
                            map_item: 92,
                            MAP_SPLIT: 93,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2 : "error",
                            5 : "EOF",
                            10 : "COMMENT",
                            19 : "HASH",
                            20 : "NOESCAPE",
                            21 : "PARENTHESIS",
                            22 : "CLOSE_PARENTHESIS",
                            25 : "SET",
                            27 : "IF",
                            29 : "ELSEIF",
                            30 : "ELSE",
                            31 : "END",
                            32 : "FOREACH",
                            33 : "DOLLAR",
                            34 : "ID",
                            35 : "IN",
                            37 : "BREAK",
                            38 : "DEFINE",
                            39 : "MACRO",
                            44 : "SPACE",
                            45 : "COMMA",
                            46 : "EQUAL",
                            49 : "||",
                            50 : "&&",
                            51 : "+",
                            52 : "-",
                            53 : "*",
                            54 : "/",
                            55 : "%",
                            56 : ">",
                            57 : "<",
                            58 : "==",
                            59 : ">=",
                            60 : "<=",
                            61 : "!=",
                            63 : "!",
                            69 : "VAR_BEGIN",
                            70 : "MAP_BEGIN",
                            71 : "VAR_END",
                            72 : "MAP_END",
                            77 : "DOT",
                            79 : "CONTENT",
                            80 : "BRACKET",
                            81 : "CLOSE_BRACKET",
                            84 : "BOOL",
                            86 : "INTEGER",
                            87 : "DECIMAL_POINT",
                            88 : "STRING",
                            89 : "EVAL_STRING",
                            91 : "RANGE",
                            93 : "MAP_SPLIT"
                        },
                        productions_: [0, [3, 2], [4, 1], [4, 2], [6, 1], [6, 1], [6, 1], [6, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 4], [8, 1], [8, 1], [11, 5], [12, 5], [13, 5], [14, 2], [15, 2], [16, 8], [16, 8], [17, 2], [18, 6], [23, 6], [23, 5], [40, 1], [40, 2], [24, 5], [24, 4], [42, 1], [42, 1], [42, 3], [42, 3], [42, 3], [42, 3], [41, 1], [41, 2], [41, 3], [41, 2], [26, 3], [28, 1], [28, 1], [28, 1], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 3], [48, 1], [48, 2], [48, 2], [48, 1], [48, 1], [62, 3], [7, 5], [7, 3], [7, 5], [7, 3], [7, 2], [7, 4], [7, 2], [7, 4], [65, 1], [65, 1], [67, 1], [67, 1], [66, 1], [66, 2], [73, 1], [73, 1], [73, 1], [74, 2], [68, 4], [68, 3], [78, 1], [78, 1], [78, 3], [78, 3], [76, 2], [76, 2], [75, 3], [75, 3], [75, 3], [75, 2], [75, 2], [64, 1], [64, 1], [64, 1], [83, 1], [83, 3], [83, 4], [85, 1], [85, 2], [82, 1], [82, 1], [43, 1], [43, 1], [43, 1], [36, 3], [36, 1], [36, 2], [90, 5], [90, 5], [90, 5], [90, 5], [47, 3], [47, 2], [92, 3], [92, 3], [92, 2], [92, 5], [92, 5], [9, 1], [9, 1], [9, 2], [9, 3], [9, 3], [9, 2]],
                        performAction: function(e, t, a, r, i, s, n) {
                            var o = s.length - 1;
                            switch (i) {
                            case 1:
                                return s[o - 1];
                            case 2:
                                this.$ = [s[o]];
                                break;
                            case 3:
                                this.$ = [].concat(s[o - 1], s[o]);
                                break;
                            case 4:
                            case 5:
                            case 6:
                                this.$ = s[o];
                                break;
                            case 7:
                                this.$ = {
                                    type: "comment",
                                    value: s[o]
                                };
                                break;
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                                this.$ = s[o];
                                break;
                            case 16:
                                this.$ = {
                                    type: "noescape"
                                };
                                break;
                            case 17:
                            case 18:
                                this.$ = s[o];
                                break;
                            case 19:
                                this.$ = {
                                    type: "set",
                                    equal: s[o - 1]
                                };
                                break;
                            case 20:
                                this.$ = {
                                    type: "if",
                                    condition: s[o - 1]
                                };
                                break;
                            case 21:
                                this.$ = {
                                    type: "elseif",
                                    condition: s[o - 1]
                                };
                                break;
                            case 22:
                                this.$ = {
                                    type: "else"
                                };
                                break;
                            case 23:
                                this.$ = {
                                    type: "end"
                                };
                                break;
                            case 24:
                            case 25:
                                this.$ = {
                                    type: "foreach",
                                    to: s[o - 3],
                                    from: s[o - 1]
                                };
                                break;
                            case 26:
                                this.$ = {
                                    type: s[o]
                                };
                                break;
                            case 27:
                                this.$ = {
                                    type: "define",
                                    id: s[o - 1]
                                };
                                break;
                            case 28:
                                this.$ = {
                                    type: "macro",
                                    id: s[o - 2],
                                    args: s[o - 1]
                                };
                                break;
                            case 29:
                                this.$ = {
                                    type: "macro",
                                    id: s[o - 1]
                                };
                                break;
                            case 30:
                                this.$ = [s[o]];
                                break;
                            case 31:
                                this.$ = [].concat(s[o - 1], s[o]);
                                break;
                            case 32:
                                this.$ = {
                                    type: "macro_call",
                                    id: s[o - 3].replace(/^\s+|\s+$/g, ""),
                                    args: s[o - 1]
                                };
                                break;
                            case 33:
                                this.$ = {
                                    type: "macro_call",
                                    id: s[o - 2].replace(/^\s+|\s+$/g, "")
                                };
                                break;
                            case 34:
                            case 35:
                                this.$ = [s[o]];
                                break;
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                                this.$ = [].concat(s[o - 2], s[o]);
                                break;
                            case 40:
                            case 41:
                                this.$ = s[o];
                                break;
                            case 42:
                            case 43:
                                this.$ = s[o - 1];
                                break;
                            case 44:
                                this.$ = [s[o - 2], s[o]];
                                break;
                            case 45:
                            case 46:
                            case 47:
                                this.$ = s[o];
                                break;
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                            case 58:
                            case 59:
                            case 60:
                                this.$ = {
                                    type: "math",
                                    expression: [s[o - 2], s[o]],
                                    operator: s[o - 1]
                                };
                                break;
                            case 61:
                                this.$ = s[o];
                                break;
                            case 62:
                                this.$ = {
                                    type: "math",
                                    expression: [s[o]],
                                    operator: "minus"
                                };
                                break;
                            case 63:
                                this.$ = {
                                    type: "math",
                                    expression: [s[o]],
                                    operator: "not"
                                };
                                break;
                            case 64:
                            case 65:
                                this.$ = s[o];
                                break;
                            case 66:
                                this.$ = {
                                    type: "math",
                                    expression: [s[o - 1]],
                                    operator: "parenthesis"
                                };
                                break;
                            case 67:
                                this.$ = {
                                    type: "references",
                                    id: s[o - 2],
                                    path: s[o - 1],
                                    isWraped: !0,
                                    leader: s[o - 4]
                                };
                                break;
                            case 68:
                                this.$ = {
                                    type: "references",
                                    id: s[o - 1],
                                    path: s[o],
                                    leader: s[o - 2]
                                };
                                break;
                            case 69:
                                this.$ = {
                                    type: "references",
                                    id: s[o - 2].id,
                                    path: s[o - 1],
                                    isWraped: !0,
                                    leader: s[o - 4],
                                    args: s[o - 2].args
                                };
                                break;
                            case 70:
                                this.$ = {
                                    type: "references",
                                    id: s[o - 1].id,
                                    path: s[o],
                                    leader: s[o - 2],
                                    args: s[o - 1].args
                                };
                                break;
                            case 71:
                                this.$ = {
                                    type: "references",
                                    id: s[o],
                                    leader: s[o - 1]
                                };
                                break;
                            case 72:
                                this.$ = {
                                    type: "references",
                                    id: s[o - 1],
                                    isWraped: !0,
                                    leader: s[o - 3]
                                };
                                break;
                            case 73:
                                this.$ = {
                                    type: "references",
                                    id: s[o].id,
                                    leader: s[o - 1],
                                    args: s[o].args
                                };
                                break;
                            case 74:
                                this.$ = {
                                    type: "references",
                                    id: s[o - 1].id,
                                    isWraped: !0,
                                    args: s[o - 1].args,
                                    leader: s[o - 3]
                                };
                                break;
                            case 75:
                            case 76:
                            case 77:
                            case 78:
                                this.$ = s[o];
                                break;
                            case 79:
                                this.$ = [s[o]];
                                break;
                            case 80:
                                this.$ = [].concat(s[o - 1], s[o]);
                                break;
                            case 81:
                                this.$ = {
                                    type: "method",
                                    id: s[o].id,
                                    args: s[o].args
                                };
                                break;
                            case 82:
                                this.$ = {
                                    type: "index",
                                    id: s[o]
                                };
                                break;
                            case 83:
                                this.$ = {
                                    type: "property",
                                    id: s[o]
                                },
                                "content" === s[o].type && (this.$ = s[o]);
                                break;
                            case 84:
                                this.$ = s[o];
                                break;
                            case 85:
                                this.$ = {
                                    id: s[o - 3],
                                    args: s[o - 1]
                                };
                                break;
                            case 86:
                                this.$ = {
                                    id: s[o - 2],
                                    args: !1
                                };
                                break;
                            case 87:
                            case 88:
                                this.$ = [s[o]];
                                break;
                            case 89:
                            case 90:
                                this.$ = [].concat(s[o - 2], s[o]);
                                break;
                            case 91:
                                this.$ = s[o];
                                break;
                            case 92:
                                this.$ = {
                                    type: "content",
                                    value: s[o - 1] + s[o]
                                };
                                break;
                            case 93:
                            case 94:
                                this.$ = s[o - 1];
                                break;
                            case 95:
                                this.$ = {
                                    type: "content",
                                    value: s[o - 2] + s[o - 1].value + s[o]
                                };
                                break;
                            case 96:
                            case 97:
                                this.$ = {
                                    type: "content",
                                    value: s[o - 1] + s[o]
                                };
                                break;
                            case 98:
                            case 99:
                                this.$ = s[o];
                                break;
                            case 100:
                                this.$ = {
                                    type: "bool",
                                    value: s[o]
                                };
                                break;
                            case 101:
                                this.$ = {
                                    type: "integer",
                                    value: s[o]
                                };
                                break;
                            case 102:
                                this.$ = {
                                    type: "decimal",
                                    value: +(s[o - 2] + "." + s[o])
                                };
                                break;
                            case 103:
                                this.$ = {
                                    type: "decimal",
                                    value: -(s[o - 2] + "." + s[o])
                                };
                                break;
                            case 104:
                                this.$ = s[o];
                                break;
                            case 105:
                                this.$ = -parseInt(s[o], 10);
                                break;
                            case 106:
                                this.$ = {
                                    type: "string",
                                    value: s[o]
                                };
                                break;
                            case 107:
                                this.$ = {
                                    type: "string",
                                    value: s[o],
                                    isEval: !0
                                };
                                break;
                            case 108:
                            case 109:
                            case 110:
                                this.$ = s[o];
                                break;
                            case 111:
                                this.$ = {
                                    type: "array",
                                    value: s[o - 1]
                                };
                                break;
                            case 112:
                                this.$ = s[o];
                                break;
                            case 113:
                                this.$ = {
                                    type: "array",
                                    value: []
                                };
                                break;
                            case 114:
                            case 115:
                            case 116:
                            case 117:
                                this.$ = {
                                    type: "array",
                                    isRange: !0,
                                    value: [s[o - 3], s[o - 1]]
                                };
                                break;
                            case 118:
                                this.$ = {
                                    type: "map",
                                    value: s[o - 1]
                                };
                                break;
                            case 119:
                                this.$ = {
                                    type: "map"
                                };
                                break;
                            case 120:
                            case 121:
                                this.$ = {},
                                this.$[s[o - 2].value] = s[o];
                                break;
                            case 122:
                                this.$ = {},
                                this.$[s[o - 1].value] = s[$01];
                                break;
                            case 123:
                            case 124:
                                this.$ = s[o - 4],
                                this.$[s[o - 2].value] = s[o];
                                break;
                            case 125:
                            case 126:
                                this.$ = s[o];
                                break;
                            case 127:
                                this.$ = s[o - 1] + s[o];
                                break;
                            case 128:
                                this.$ = s[o - 2] + s[o - 1] + s[o];
                                break;
                            case 129:
                                this.$ = s[o - 2] + s[o - 1];
                                break;
                            case 130:
                                this.$ = s[o - 1] + s[o]
                            }
                        },
                        table: [{
                            3 : 1,
                            4 : 2,
                            6 : 3,
                            7 : 4,
                            8 : 5,
                            9 : 6,
                            10 : [1, 7],
                            11 : 9,
                            12 : 10,
                            13 : 11,
                            14 : 12,
                            15 : 13,
                            16 : 14,
                            17 : 15,
                            18 : 16,
                            19 : [1, 17],
                            23 : 18,
                            24 : 19,
                            33 : [1, 8],
                            34 : [1, 21],
                            79 : [1, 20]
                        },
                        {
                            1 : [3]
                        },
                        {
                            5 : [1, 22],
                            6 : 23,
                            7 : 4,
                            8 : 5,
                            9 : 6,
                            10 : [1, 7],
                            11 : 9,
                            12 : 10,
                            13 : 11,
                            14 : 12,
                            15 : 13,
                            16 : 14,
                            17 : 15,
                            18 : 16,
                            19 : [1, 17],
                            23 : 18,
                            24 : 19,
                            33 : [1, 8],
                            34 : [1, 21],
                            79 : [1, 20]
                        },
                        {
                            5 : [2, 2],
                            10 : [2, 2],
                            19 : [2, 2],
                            33 : [2, 2],
                            34 : [2, 2],
                            79 : [2, 2]
                        },
                        {
                            5 : [2, 4],
                            10 : [2, 4],
                            19 : [2, 4],
                            33 : [2, 4],
                            34 : [2, 4],
                            79 : [2, 4]
                        },
                        {
                            5 : [2, 5],
                            10 : [2, 5],
                            19 : [2, 5],
                            33 : [2, 5],
                            34 : [2, 5],
                            79 : [2, 5]
                        },
                        {
                            5 : [2, 6],
                            10 : [2, 6],
                            19 : [2, 6],
                            33 : [2, 6],
                            34 : [2, 6],
                            79 : [2, 6]
                        },
                        {
                            5 : [2, 7],
                            10 : [2, 7],
                            19 : [2, 7],
                            33 : [2, 7],
                            34 : [2, 7],
                            79 : [2, 7]
                        },
                        {
                            34 : [1, 25],
                            65 : 24,
                            67 : 27,
                            68 : 26,
                            69 : [1, 29],
                            70 : [1, 30],
                            71 : [1, 31],
                            72 : [1, 32],
                            79 : [1, 28]
                        },
                        {
                            5 : [2, 8],
                            10 : [2, 8],
                            19 : [2, 8],
                            33 : [2, 8],
                            34 : [2, 8],
                            79 : [2, 8]
                        },
                        {
                            5 : [2, 9],
                            10 : [2, 9],
                            19 : [2, 9],
                            33 : [2, 9],
                            34 : [2, 9],
                            79 : [2, 9]
                        },
                        {
                            5 : [2, 10],
                            10 : [2, 10],
                            19 : [2, 10],
                            33 : [2, 10],
                            34 : [2, 10],
                            79 : [2, 10]
                        },
                        {
                            5 : [2, 11],
                            10 : [2, 11],
                            19 : [2, 11],
                            33 : [2, 11],
                            34 : [2, 11],
                            79 : [2, 11]
                        },
                        {
                            5 : [2, 12],
                            10 : [2, 12],
                            19 : [2, 12],
                            33 : [2, 12],
                            34 : [2, 12],
                            79 : [2, 12]
                        },
                        {
                            5 : [2, 13],
                            10 : [2, 13],
                            19 : [2, 13],
                            33 : [2, 13],
                            34 : [2, 13],
                            79 : [2, 13]
                        },
                        {
                            5 : [2, 14],
                            10 : [2, 14],
                            19 : [2, 14],
                            33 : [2, 14],
                            34 : [2, 14],
                            79 : [2, 14]
                        },
                        {
                            5 : [2, 15],
                            10 : [2, 15],
                            19 : [2, 15],
                            33 : [2, 15],
                            34 : [2, 15],
                            79 : [2, 15]
                        },
                        {
                            20 : [1, 33],
                            25 : [1, 36],
                            27 : [1, 37],
                            29 : [1, 38],
                            30 : [1, 39],
                            31 : [1, 40],
                            32 : [1, 41],
                            34 : [1, 35],
                            37 : [1, 42],
                            38 : [1, 43],
                            39 : [1, 44],
                            79 : [1, 34]
                        },
                        {
                            5 : [2, 17],
                            10 : [2, 17],
                            19 : [2, 17],
                            33 : [2, 17],
                            34 : [2, 17],
                            79 : [2, 17]
                        },
                        {
                            5 : [2, 18],
                            10 : [2, 18],
                            19 : [2, 18],
                            33 : [2, 18],
                            34 : [2, 18],
                            79 : [2, 18]
                        },
                        {
                            5 : [2, 125],
                            10 : [2, 125],
                            19 : [2, 125],
                            33 : [2, 125],
                            34 : [2, 125],
                            79 : [2, 125]
                        },
                        {
                            5 : [2, 126],
                            10 : [2, 126],
                            19 : [2, 126],
                            33 : [2, 126],
                            34 : [2, 126],
                            79 : [2, 126]
                        },
                        {
                            1 : [2, 1]
                        },
                        {
                            5 : [2, 3],
                            10 : [2, 3],
                            19 : [2, 3],
                            33 : [2, 3],
                            34 : [2, 3],
                            79 : [2, 3]
                        },
                        {
                            34 : [1, 45],
                            68 : 46
                        },
                        {
                            5 : [2, 71],
                            10 : [2, 71],
                            19 : [2, 71],
                            21 : [1, 48],
                            22 : [2, 71],
                            33 : [2, 71],
                            34 : [2, 71],
                            44 : [2, 71],
                            45 : [2, 71],
                            46 : [2, 71],
                            49 : [2, 71],
                            50 : [2, 71],
                            51 : [2, 71],
                            52 : [2, 71],
                            53 : [2, 71],
                            54 : [2, 71],
                            55 : [2, 71],
                            56 : [2, 71],
                            57 : [2, 71],
                            58 : [2, 71],
                            59 : [2, 71],
                            60 : [2, 71],
                            61 : [2, 71],
                            66 : 47,
                            72 : [2, 71],
                            73 : 49,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            79 : [2, 71],
                            80 : [1, 54],
                            81 : [2, 71],
                            91 : [2, 71]
                        },
                        {
                            5 : [2, 73],
                            10 : [2, 73],
                            19 : [2, 73],
                            22 : [2, 73],
                            33 : [2, 73],
                            34 : [2, 73],
                            44 : [2, 73],
                            45 : [2, 73],
                            46 : [2, 73],
                            49 : [2, 73],
                            50 : [2, 73],
                            51 : [2, 73],
                            52 : [2, 73],
                            53 : [2, 73],
                            54 : [2, 73],
                            55 : [2, 73],
                            56 : [2, 73],
                            57 : [2, 73],
                            58 : [2, 73],
                            59 : [2, 73],
                            60 : [2, 73],
                            61 : [2, 73],
                            66 : 55,
                            72 : [2, 73],
                            73 : 49,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            79 : [2, 73],
                            80 : [1, 54],
                            81 : [2, 73],
                            91 : [2, 73]
                        },
                        {
                            34 : [1, 57],
                            68 : 56
                        },
                        {
                            5 : [2, 130],
                            10 : [2, 130],
                            19 : [2, 130],
                            33 : [2, 130],
                            34 : [2, 130],
                            79 : [2, 130]
                        },
                        {
                            34 : [2, 75]
                        },
                        {
                            34 : [2, 76]
                        },
                        {
                            5 : [2, 77],
                            10 : [2, 77],
                            19 : [2, 77],
                            22 : [2, 77],
                            33 : [2, 77],
                            34 : [2, 77],
                            44 : [2, 77],
                            45 : [2, 77],
                            46 : [2, 77],
                            49 : [2, 77],
                            50 : [2, 77],
                            51 : [2, 77],
                            52 : [2, 77],
                            53 : [2, 77],
                            54 : [2, 77],
                            55 : [2, 77],
                            56 : [2, 77],
                            57 : [2, 77],
                            58 : [2, 77],
                            59 : [2, 77],
                            60 : [2, 77],
                            61 : [2, 77],
                            72 : [2, 77],
                            79 : [2, 77],
                            81 : [2, 77],
                            91 : [2, 77]
                        },
                        {
                            5 : [2, 78],
                            10 : [2, 78],
                            19 : [2, 78],
                            22 : [2, 78],
                            33 : [2, 78],
                            34 : [2, 78],
                            44 : [2, 78],
                            45 : [2, 78],
                            46 : [2, 78],
                            49 : [2, 78],
                            50 : [2, 78],
                            51 : [2, 78],
                            52 : [2, 78],
                            53 : [2, 78],
                            54 : [2, 78],
                            55 : [2, 78],
                            56 : [2, 78],
                            57 : [2, 78],
                            58 : [2, 78],
                            59 : [2, 78],
                            60 : [2, 78],
                            61 : [2, 78],
                            72 : [2, 78],
                            79 : [2, 78],
                            81 : [2, 78],
                            91 : [2, 78]
                        },
                        {
                            21 : [1, 58]
                        },
                        {
                            5 : [2, 127],
                            10 : [2, 127],
                            19 : [2, 127],
                            33 : [2, 127],
                            34 : [2, 127],
                            79 : [2, 127]
                        },
                        {
                            5 : [1, 60],
                            21 : [1, 61],
                            79 : [1, 59]
                        },
                        {
                            21 : [1, 62]
                        },
                        {
                            21 : [1, 63]
                        },
                        {
                            21 : [1, 64]
                        },
                        {
                            5 : [2, 22],
                            10 : [2, 22],
                            19 : [2, 22],
                            33 : [2, 22],
                            34 : [2, 22],
                            79 : [2, 22]
                        },
                        {
                            5 : [2, 23],
                            10 : [2, 23],
                            19 : [2, 23],
                            33 : [2, 23],
                            34 : [2, 23],
                            79 : [2, 23]
                        },
                        {
                            21 : [1, 65]
                        },
                        {
                            5 : [2, 26],
                            10 : [2, 26],
                            19 : [2, 26],
                            33 : [2, 26],
                            34 : [2, 26],
                            79 : [2, 26]
                        },
                        {
                            21 : [1, 66]
                        },
                        {
                            21 : [1, 67]
                        },
                        {
                            21 : [1, 48],
                            66 : 68,
                            67 : 69,
                            71 : [1, 31],
                            72 : [1, 32],
                            73 : 49,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            80 : [1, 54]
                        },
                        {
                            66 : 70,
                            73 : 49,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            80 : [1, 54]
                        },
                        {
                            5 : [2, 68],
                            10 : [2, 68],
                            19 : [2, 68],
                            22 : [2, 68],
                            33 : [2, 68],
                            34 : [2, 68],
                            44 : [2, 68],
                            45 : [2, 68],
                            46 : [2, 68],
                            49 : [2, 68],
                            50 : [2, 68],
                            51 : [2, 68],
                            52 : [2, 68],
                            53 : [2, 68],
                            54 : [2, 68],
                            55 : [2, 68],
                            56 : [2, 68],
                            57 : [2, 68],
                            58 : [2, 68],
                            59 : [2, 68],
                            60 : [2, 68],
                            61 : [2, 68],
                            72 : [2, 68],
                            73 : 71,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            79 : [2, 68],
                            80 : [1, 54],
                            81 : [2, 68],
                            91 : [2, 68]
                        },
                        {
                            7 : 75,
                            22 : [1, 73],
                            33 : [1, 79],
                            36 : 76,
                            43 : 74,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            78 : 72,
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            5 : [2, 79],
                            10 : [2, 79],
                            19 : [2, 79],
                            22 : [2, 79],
                            33 : [2, 79],
                            34 : [2, 79],
                            44 : [2, 79],
                            45 : [2, 79],
                            46 : [2, 79],
                            49 : [2, 79],
                            50 : [2, 79],
                            51 : [2, 79],
                            52 : [2, 79],
                            53 : [2, 79],
                            54 : [2, 79],
                            55 : [2, 79],
                            56 : [2, 79],
                            57 : [2, 79],
                            58 : [2, 79],
                            59 : [2, 79],
                            60 : [2, 79],
                            61 : [2, 79],
                            71 : [2, 79],
                            72 : [2, 79],
                            77 : [2, 79],
                            79 : [2, 79],
                            80 : [2, 79],
                            81 : [2, 79],
                            91 : [2, 79]
                        },
                        {
                            5 : [2, 81],
                            10 : [2, 81],
                            19 : [2, 81],
                            22 : [2, 81],
                            33 : [2, 81],
                            34 : [2, 81],
                            44 : [2, 81],
                            45 : [2, 81],
                            46 : [2, 81],
                            49 : [2, 81],
                            50 : [2, 81],
                            51 : [2, 81],
                            52 : [2, 81],
                            53 : [2, 81],
                            54 : [2, 81],
                            55 : [2, 81],
                            56 : [2, 81],
                            57 : [2, 81],
                            58 : [2, 81],
                            59 : [2, 81],
                            60 : [2, 81],
                            61 : [2, 81],
                            71 : [2, 81],
                            72 : [2, 81],
                            77 : [2, 81],
                            79 : [2, 81],
                            80 : [2, 81],
                            81 : [2, 81],
                            91 : [2, 81]
                        },
                        {
                            5 : [2, 82],
                            10 : [2, 82],
                            19 : [2, 82],
                            22 : [2, 82],
                            33 : [2, 82],
                            34 : [2, 82],
                            44 : [2, 82],
                            45 : [2, 82],
                            46 : [2, 82],
                            49 : [2, 82],
                            50 : [2, 82],
                            51 : [2, 82],
                            52 : [2, 82],
                            53 : [2, 82],
                            54 : [2, 82],
                            55 : [2, 82],
                            56 : [2, 82],
                            57 : [2, 82],
                            58 : [2, 82],
                            59 : [2, 82],
                            60 : [2, 82],
                            61 : [2, 82],
                            71 : [2, 82],
                            72 : [2, 82],
                            77 : [2, 82],
                            79 : [2, 82],
                            80 : [2, 82],
                            81 : [2, 82],
                            91 : [2, 82]
                        },
                        {
                            5 : [2, 83],
                            10 : [2, 83],
                            19 : [2, 83],
                            22 : [2, 83],
                            33 : [2, 83],
                            34 : [2, 83],
                            44 : [2, 83],
                            45 : [2, 83],
                            46 : [2, 83],
                            49 : [2, 83],
                            50 : [2, 83],
                            51 : [2, 83],
                            52 : [2, 83],
                            53 : [2, 83],
                            54 : [2, 83],
                            55 : [2, 83],
                            56 : [2, 83],
                            57 : [2, 83],
                            58 : [2, 83],
                            59 : [2, 83],
                            60 : [2, 83],
                            61 : [2, 83],
                            71 : [2, 83],
                            72 : [2, 83],
                            77 : [2, 83],
                            79 : [2, 83],
                            80 : [2, 83],
                            81 : [2, 83],
                            91 : [2, 83]
                        },
                        {
                            34 : [1, 92],
                            68 : 91,
                            79 : [1, 93]
                        },
                        {
                            7 : 95,
                            33 : [1, 79],
                            52 : [1, 90],
                            64 : 94,
                            79 : [1, 96],
                            81 : [1, 97],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            5 : [2, 70],
                            10 : [2, 70],
                            19 : [2, 70],
                            22 : [2, 70],
                            33 : [2, 70],
                            34 : [2, 70],
                            44 : [2, 70],
                            45 : [2, 70],
                            46 : [2, 70],
                            49 : [2, 70],
                            50 : [2, 70],
                            51 : [2, 70],
                            52 : [2, 70],
                            53 : [2, 70],
                            54 : [2, 70],
                            55 : [2, 70],
                            56 : [2, 70],
                            57 : [2, 70],
                            58 : [2, 70],
                            59 : [2, 70],
                            60 : [2, 70],
                            61 : [2, 70],
                            72 : [2, 70],
                            73 : 71,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            79 : [2, 70],
                            80 : [1, 54],
                            81 : [2, 70],
                            91 : [2, 70]
                        },
                        {
                            67 : 98,
                            71 : [1, 31],
                            72 : [1, 32]
                        },
                        {
                            21 : [1, 48]
                        },
                        {
                            22 : [1, 99]
                        },
                        {
                            5 : [2, 128],
                            10 : [2, 128],
                            19 : [2, 128],
                            33 : [2, 128],
                            34 : [2, 128],
                            79 : [2, 128]
                        },
                        {
                            5 : [2, 129],
                            10 : [2, 129],
                            19 : [2, 129],
                            33 : [2, 129],
                            34 : [2, 129],
                            79 : [2, 129]
                        },
                        {
                            7 : 105,
                            22 : [1, 101],
                            33 : [1, 79],
                            36 : 76,
                            41 : 100,
                            42 : 102,
                            43 : 104,
                            44 : [1, 103],
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            7 : 107,
                            26 : 106,
                            33 : [1, 79]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            28 : 108,
                            33 : [1, 79],
                            36 : 109,
                            47 : 110,
                            48 : 111,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            28 : 118,
                            33 : [1, 79],
                            36 : 109,
                            47 : 110,
                            48 : 111,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            33 : [1, 119]
                        },
                        {
                            33 : [1, 120]
                        },
                        {
                            34 : [1, 121]
                        },
                        {
                            67 : 122,
                            71 : [1, 31],
                            72 : [1, 32],
                            73 : 71,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            80 : [1, 54]
                        },
                        {
                            5 : [2, 72],
                            10 : [2, 72],
                            19 : [2, 72],
                            22 : [2, 72],
                            33 : [2, 72],
                            34 : [2, 72],
                            44 : [2, 72],
                            45 : [2, 72],
                            46 : [2, 72],
                            49 : [2, 72],
                            50 : [2, 72],
                            51 : [2, 72],
                            52 : [2, 72],
                            53 : [2, 72],
                            54 : [2, 72],
                            55 : [2, 72],
                            56 : [2, 72],
                            57 : [2, 72],
                            58 : [2, 72],
                            59 : [2, 72],
                            60 : [2, 72],
                            61 : [2, 72],
                            72 : [2, 72],
                            79 : [2, 72],
                            81 : [2, 72],
                            91 : [2, 72]
                        },
                        {
                            67 : 123,
                            71 : [1, 31],
                            72 : [1, 32],
                            73 : 71,
                            74 : 50,
                            75 : 51,
                            76 : 52,
                            77 : [1, 53],
                            80 : [1, 54]
                        },
                        {
                            5 : [2, 80],
                            10 : [2, 80],
                            19 : [2, 80],
                            22 : [2, 80],
                            33 : [2, 80],
                            34 : [2, 80],
                            44 : [2, 80],
                            45 : [2, 80],
                            46 : [2, 80],
                            49 : [2, 80],
                            50 : [2, 80],
                            51 : [2, 80],
                            52 : [2, 80],
                            53 : [2, 80],
                            54 : [2, 80],
                            55 : [2, 80],
                            56 : [2, 80],
                            57 : [2, 80],
                            58 : [2, 80],
                            59 : [2, 80],
                            60 : [2, 80],
                            61 : [2, 80],
                            71 : [2, 80],
                            72 : [2, 80],
                            77 : [2, 80],
                            79 : [2, 80],
                            80 : [2, 80],
                            81 : [2, 80],
                            91 : [2, 80]
                        },
                        {
                            22 : [1, 124],
                            45 : [1, 125]
                        },
                        {
                            5 : [2, 86],
                            10 : [2, 86],
                            19 : [2, 86],
                            22 : [2, 86],
                            33 : [2, 86],
                            34 : [2, 86],
                            44 : [2, 86],
                            45 : [2, 86],
                            46 : [2, 86],
                            49 : [2, 86],
                            50 : [2, 86],
                            51 : [2, 86],
                            52 : [2, 86],
                            53 : [2, 86],
                            54 : [2, 86],
                            55 : [2, 86],
                            56 : [2, 86],
                            57 : [2, 86],
                            58 : [2, 86],
                            59 : [2, 86],
                            60 : [2, 86],
                            61 : [2, 86],
                            71 : [2, 86],
                            72 : [2, 86],
                            77 : [2, 86],
                            79 : [2, 86],
                            80 : [2, 86],
                            81 : [2, 86],
                            91 : [2, 86]
                        },
                        {
                            22 : [2, 87],
                            45 : [2, 87],
                            81 : [2, 87]
                        },
                        {
                            22 : [2, 88],
                            45 : [2, 88]
                        },
                        {
                            22 : [2, 108],
                            44 : [2, 108],
                            45 : [2, 108],
                            72 : [2, 108],
                            81 : [2, 108]
                        },
                        {
                            22 : [2, 109],
                            44 : [2, 109],
                            45 : [2, 109],
                            72 : [2, 109],
                            81 : [2, 109]
                        },
                        {
                            22 : [2, 110],
                            44 : [2, 110],
                            45 : [2, 110],
                            72 : [2, 110],
                            81 : [2, 110]
                        },
                        {
                            34 : [1, 25],
                            65 : 24,
                            67 : 27,
                            68 : 26,
                            69 : [1, 29],
                            70 : [1, 30],
                            71 : [1, 31],
                            72 : [1, 32]
                        },
                        {
                            7 : 129,
                            33 : [1, 79],
                            36 : 76,
                            43 : 74,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            78 : 126,
                            80 : [1, 80],
                            81 : [1, 127],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 128,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            22 : [2, 112],
                            44 : [2, 112],
                            45 : [2, 112],
                            72 : [2, 112],
                            81 : [2, 112]
                        },
                        {
                            72 : [1, 131],
                            82 : 132,
                            88 : [1, 86],
                            89 : [1, 87],
                            92 : 130
                        },
                        {
                            22 : [2, 98],
                            44 : [2, 98],
                            45 : [2, 98],
                            49 : [2, 98],
                            50 : [2, 98],
                            51 : [2, 98],
                            52 : [2, 98],
                            53 : [2, 98],
                            54 : [2, 98],
                            55 : [2, 98],
                            56 : [2, 98],
                            57 : [2, 98],
                            58 : [2, 98],
                            59 : [2, 98],
                            60 : [2, 98],
                            61 : [2, 98],
                            72 : [2, 98],
                            79 : [2, 98],
                            81 : [2, 98]
                        },
                        {
                            22 : [2, 99],
                            44 : [2, 99],
                            45 : [2, 99],
                            49 : [2, 99],
                            50 : [2, 99],
                            51 : [2, 99],
                            52 : [2, 99],
                            53 : [2, 99],
                            54 : [2, 99],
                            55 : [2, 99],
                            56 : [2, 99],
                            57 : [2, 99],
                            58 : [2, 99],
                            59 : [2, 99],
                            60 : [2, 99],
                            61 : [2, 99],
                            72 : [2, 99],
                            79 : [2, 99],
                            81 : [2, 99]
                        },
                        {
                            22 : [2, 100],
                            44 : [2, 100],
                            45 : [2, 100],
                            49 : [2, 100],
                            50 : [2, 100],
                            51 : [2, 100],
                            52 : [2, 100],
                            53 : [2, 100],
                            54 : [2, 100],
                            55 : [2, 100],
                            56 : [2, 100],
                            57 : [2, 100],
                            58 : [2, 100],
                            59 : [2, 100],
                            60 : [2, 100],
                            61 : [2, 100],
                            72 : [2, 100],
                            79 : [2, 100],
                            81 : [2, 100]
                        },
                        {
                            22 : [2, 106],
                            44 : [2, 106],
                            45 : [2, 106],
                            49 : [2, 106],
                            50 : [2, 106],
                            51 : [2, 106],
                            52 : [2, 106],
                            53 : [2, 106],
                            54 : [2, 106],
                            55 : [2, 106],
                            56 : [2, 106],
                            57 : [2, 106],
                            58 : [2, 106],
                            59 : [2, 106],
                            60 : [2, 106],
                            61 : [2, 106],
                            72 : [2, 106],
                            79 : [2, 106],
                            81 : [2, 106],
                            93 : [2, 106]
                        },
                        {
                            22 : [2, 107],
                            44 : [2, 107],
                            45 : [2, 107],
                            49 : [2, 107],
                            50 : [2, 107],
                            51 : [2, 107],
                            52 : [2, 107],
                            53 : [2, 107],
                            54 : [2, 107],
                            55 : [2, 107],
                            56 : [2, 107],
                            57 : [2, 107],
                            58 : [2, 107],
                            59 : [2, 107],
                            60 : [2, 107],
                            61 : [2, 107],
                            72 : [2, 107],
                            79 : [2, 107],
                            81 : [2, 107],
                            93 : [2, 107]
                        },
                        {
                            22 : [2, 101],
                            44 : [2, 101],
                            45 : [2, 101],
                            49 : [2, 101],
                            50 : [2, 101],
                            51 : [2, 101],
                            52 : [2, 101],
                            53 : [2, 101],
                            54 : [2, 101],
                            55 : [2, 101],
                            56 : [2, 101],
                            57 : [2, 101],
                            58 : [2, 101],
                            59 : [2, 101],
                            60 : [2, 101],
                            61 : [2, 101],
                            72 : [2, 101],
                            79 : [2, 101],
                            81 : [2, 101]
                        },
                        {
                            22 : [2, 104],
                            44 : [2, 104],
                            45 : [2, 104],
                            49 : [2, 104],
                            50 : [2, 104],
                            51 : [2, 104],
                            52 : [2, 104],
                            53 : [2, 104],
                            54 : [2, 104],
                            55 : [2, 104],
                            56 : [2, 104],
                            57 : [2, 104],
                            58 : [2, 104],
                            59 : [2, 104],
                            60 : [2, 104],
                            61 : [2, 104],
                            72 : [2, 104],
                            79 : [2, 104],
                            81 : [2, 104],
                            87 : [1, 133],
                            91 : [2, 104]
                        },
                        {
                            86 : [1, 134]
                        },
                        {
                            5 : [2, 84],
                            10 : [2, 84],
                            19 : [2, 84],
                            22 : [2, 84],
                            33 : [2, 84],
                            34 : [2, 84],
                            44 : [2, 84],
                            45 : [2, 84],
                            46 : [2, 84],
                            49 : [2, 84],
                            50 : [2, 84],
                            51 : [2, 84],
                            52 : [2, 84],
                            53 : [2, 84],
                            54 : [2, 84],
                            55 : [2, 84],
                            56 : [2, 84],
                            57 : [2, 84],
                            58 : [2, 84],
                            59 : [2, 84],
                            60 : [2, 84],
                            61 : [2, 84],
                            71 : [2, 84],
                            72 : [2, 84],
                            77 : [2, 84],
                            79 : [2, 84],
                            80 : [2, 84],
                            81 : [2, 84],
                            91 : [2, 84]
                        },
                        {
                            5 : [2, 91],
                            10 : [2, 91],
                            19 : [2, 91],
                            21 : [1, 48],
                            22 : [2, 91],
                            33 : [2, 91],
                            34 : [2, 91],
                            44 : [2, 91],
                            45 : [2, 91],
                            46 : [2, 91],
                            49 : [2, 91],
                            50 : [2, 91],
                            51 : [2, 91],
                            52 : [2, 91],
                            53 : [2, 91],
                            54 : [2, 91],
                            55 : [2, 91],
                            56 : [2, 91],
                            57 : [2, 91],
                            58 : [2, 91],
                            59 : [2, 91],
                            60 : [2, 91],
                            61 : [2, 91],
                            71 : [2, 91],
                            72 : [2, 91],
                            77 : [2, 91],
                            79 : [2, 91],
                            80 : [2, 91],
                            81 : [2, 91],
                            91 : [2, 91]
                        },
                        {
                            5 : [2, 92],
                            10 : [2, 92],
                            19 : [2, 92],
                            22 : [2, 92],
                            33 : [2, 92],
                            34 : [2, 92],
                            44 : [2, 92],
                            45 : [2, 92],
                            46 : [2, 92],
                            49 : [2, 92],
                            50 : [2, 92],
                            51 : [2, 92],
                            52 : [2, 92],
                            53 : [2, 92],
                            54 : [2, 92],
                            55 : [2, 92],
                            56 : [2, 92],
                            57 : [2, 92],
                            58 : [2, 92],
                            59 : [2, 92],
                            60 : [2, 92],
                            61 : [2, 92],
                            71 : [2, 92],
                            72 : [2, 92],
                            77 : [2, 92],
                            79 : [2, 92],
                            80 : [2, 92],
                            81 : [2, 92],
                            91 : [2, 92]
                        },
                        {
                            79 : [1, 136],
                            81 : [1, 135]
                        },
                        {
                            81 : [1, 137]
                        },
                        {
                            5 : [2, 96],
                            10 : [2, 96],
                            19 : [2, 96],
                            22 : [2, 96],
                            33 : [2, 96],
                            34 : [2, 96],
                            44 : [2, 96],
                            45 : [2, 96],
                            46 : [2, 96],
                            49 : [2, 96],
                            50 : [2, 96],
                            51 : [2, 96],
                            52 : [2, 96],
                            53 : [2, 96],
                            54 : [2, 96],
                            55 : [2, 96],
                            56 : [2, 96],
                            57 : [2, 96],
                            58 : [2, 96],
                            59 : [2, 96],
                            60 : [2, 96],
                            61 : [2, 96],
                            71 : [2, 96],
                            72 : [2, 96],
                            77 : [2, 96],
                            79 : [2, 96],
                            80 : [2, 96],
                            81 : [2, 96],
                            91 : [2, 96]
                        },
                        {
                            5 : [2, 97],
                            10 : [2, 97],
                            19 : [2, 97],
                            22 : [2, 97],
                            33 : [2, 97],
                            34 : [2, 97],
                            44 : [2, 97],
                            45 : [2, 97],
                            46 : [2, 97],
                            49 : [2, 97],
                            50 : [2, 97],
                            51 : [2, 97],
                            52 : [2, 97],
                            53 : [2, 97],
                            54 : [2, 97],
                            55 : [2, 97],
                            56 : [2, 97],
                            57 : [2, 97],
                            58 : [2, 97],
                            59 : [2, 97],
                            60 : [2, 97],
                            61 : [2, 97],
                            71 : [2, 97],
                            72 : [2, 97],
                            77 : [2, 97],
                            79 : [2, 97],
                            80 : [2, 97],
                            81 : [2, 97],
                            91 : [2, 97]
                        },
                        {
                            5 : [2, 74],
                            10 : [2, 74],
                            19 : [2, 74],
                            22 : [2, 74],
                            33 : [2, 74],
                            34 : [2, 74],
                            44 : [2, 74],
                            45 : [2, 74],
                            46 : [2, 74],
                            49 : [2, 74],
                            50 : [2, 74],
                            51 : [2, 74],
                            52 : [2, 74],
                            53 : [2, 74],
                            54 : [2, 74],
                            55 : [2, 74],
                            56 : [2, 74],
                            57 : [2, 74],
                            58 : [2, 74],
                            59 : [2, 74],
                            60 : [2, 74],
                            61 : [2, 74],
                            72 : [2, 74],
                            79 : [2, 74],
                            81 : [2, 74],
                            91 : [2, 74]
                        },
                        {
                            5 : [2, 16],
                            10 : [2, 16],
                            19 : [2, 16],
                            33 : [2, 16],
                            34 : [2, 16],
                            79 : [2, 16]
                        },
                        {
                            22 : [1, 138]
                        },
                        {
                            5 : [2, 33],
                            10 : [2, 33],
                            19 : [2, 33],
                            33 : [2, 33],
                            34 : [2, 33],
                            79 : [2, 33]
                        },
                        {
                            22 : [2, 40],
                            44 : [1, 139],
                            45 : [1, 140]
                        },
                        {
                            7 : 105,
                            33 : [1, 79],
                            36 : 76,
                            42 : 141,
                            43 : 104,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            22 : [2, 34],
                            44 : [2, 34],
                            45 : [2, 34]
                        },
                        {
                            22 : [2, 35],
                            44 : [2, 35],
                            45 : [2, 35]
                        },
                        {
                            22 : [1, 142]
                        },
                        {
                            46 : [1, 143]
                        },
                        {
                            22 : [1, 144]
                        },
                        {
                            22 : [2, 45]
                        },
                        {
                            22 : [2, 46]
                        },
                        {
                            22 : [2, 47],
                            49 : [1, 145],
                            50 : [1, 146],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [1, 152],
                            57 : [1, 153],
                            58 : [1, 154],
                            59 : [1, 155],
                            60 : [1, 156],
                            61 : [1, 157]
                        },
                        {
                            22 : [2, 61],
                            49 : [2, 61],
                            50 : [2, 61],
                            51 : [2, 61],
                            52 : [2, 61],
                            53 : [2, 61],
                            54 : [2, 61],
                            55 : [2, 61],
                            56 : [2, 61],
                            57 : [2, 61],
                            58 : [2, 61],
                            59 : [2, 61],
                            60 : [2, 61],
                            61 : [2, 61]
                        },
                        {
                            21 : [1, 117],
                            62 : 158,
                            86 : [1, 134]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 159,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            22 : [2, 64],
                            49 : [2, 64],
                            50 : [2, 64],
                            51 : [2, 64],
                            52 : [2, 64],
                            53 : [2, 64],
                            54 : [2, 64],
                            55 : [2, 64],
                            56 : [2, 64],
                            57 : [2, 64],
                            58 : [2, 64],
                            59 : [2, 64],
                            60 : [2, 64],
                            61 : [2, 64]
                        },
                        {
                            22 : [2, 65],
                            49 : [2, 65],
                            50 : [2, 65],
                            51 : [2, 65],
                            52 : [2, 65],
                            53 : [2, 65],
                            54 : [2, 65],
                            55 : [2, 65],
                            56 : [2, 65],
                            57 : [2, 65],
                            58 : [2, 65],
                            59 : [2, 65],
                            60 : [2, 65],
                            61 : [2, 65]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 160,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            22 : [1, 161]
                        },
                        {
                            34 : [1, 162]
                        },
                        {
                            34 : [1, 163]
                        },
                        {
                            7 : 166,
                            22 : [1, 165],
                            33 : [1, 79],
                            40 : 164
                        },
                        {
                            5 : [2, 67],
                            10 : [2, 67],
                            19 : [2, 67],
                            22 : [2, 67],
                            33 : [2, 67],
                            34 : [2, 67],
                            44 : [2, 67],
                            45 : [2, 67],
                            46 : [2, 67],
                            49 : [2, 67],
                            50 : [2, 67],
                            51 : [2, 67],
                            52 : [2, 67],
                            53 : [2, 67],
                            54 : [2, 67],
                            55 : [2, 67],
                            56 : [2, 67],
                            57 : [2, 67],
                            58 : [2, 67],
                            59 : [2, 67],
                            60 : [2, 67],
                            61 : [2, 67],
                            72 : [2, 67],
                            79 : [2, 67],
                            81 : [2, 67],
                            91 : [2, 67]
                        },
                        {
                            5 : [2, 69],
                            10 : [2, 69],
                            19 : [2, 69],
                            22 : [2, 69],
                            33 : [2, 69],
                            34 : [2, 69],
                            44 : [2, 69],
                            45 : [2, 69],
                            46 : [2, 69],
                            49 : [2, 69],
                            50 : [2, 69],
                            51 : [2, 69],
                            52 : [2, 69],
                            53 : [2, 69],
                            54 : [2, 69],
                            55 : [2, 69],
                            56 : [2, 69],
                            57 : [2, 69],
                            58 : [2, 69],
                            59 : [2, 69],
                            60 : [2, 69],
                            61 : [2, 69],
                            72 : [2, 69],
                            79 : [2, 69],
                            81 : [2, 69],
                            91 : [2, 69]
                        },
                        {
                            5 : [2, 85],
                            10 : [2, 85],
                            19 : [2, 85],
                            22 : [2, 85],
                            33 : [2, 85],
                            34 : [2, 85],
                            44 : [2, 85],
                            45 : [2, 85],
                            46 : [2, 85],
                            49 : [2, 85],
                            50 : [2, 85],
                            51 : [2, 85],
                            52 : [2, 85],
                            53 : [2, 85],
                            54 : [2, 85],
                            55 : [2, 85],
                            56 : [2, 85],
                            57 : [2, 85],
                            58 : [2, 85],
                            59 : [2, 85],
                            60 : [2, 85],
                            61 : [2, 85],
                            71 : [2, 85],
                            72 : [2, 85],
                            77 : [2, 85],
                            79 : [2, 85],
                            80 : [2, 85],
                            81 : [2, 85],
                            91 : [2, 85]
                        },
                        {
                            7 : 168,
                            33 : [1, 79],
                            36 : 76,
                            43 : 167,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            45 : [1, 125],
                            81 : [1, 169]
                        },
                        {
                            22 : [2, 113],
                            44 : [2, 113],
                            45 : [2, 113],
                            72 : [2, 113],
                            81 : [2, 113]
                        },
                        {
                            45 : [2, 101],
                            81 : [2, 101],
                            91 : [1, 170]
                        },
                        {
                            45 : [2, 88],
                            81 : [2, 88],
                            91 : [1, 171]
                        },
                        {
                            45 : [1, 173],
                            72 : [1, 172]
                        },
                        {
                            22 : [2, 119],
                            44 : [2, 119],
                            45 : [2, 119],
                            72 : [2, 119],
                            81 : [2, 119]
                        },
                        {
                            93 : [1, 174]
                        },
                        {
                            86 : [1, 175]
                        },
                        {
                            22 : [2, 105],
                            44 : [2, 105],
                            45 : [2, 105],
                            49 : [2, 105],
                            50 : [2, 105],
                            51 : [2, 105],
                            52 : [2, 105],
                            53 : [2, 105],
                            54 : [2, 105],
                            55 : [2, 105],
                            56 : [2, 105],
                            57 : [2, 105],
                            58 : [2, 105],
                            59 : [2, 105],
                            60 : [2, 105],
                            61 : [2, 105],
                            72 : [2, 105],
                            79 : [2, 105],
                            81 : [2, 105],
                            87 : [1, 176],
                            91 : [2, 105]
                        },
                        {
                            5 : [2, 93],
                            10 : [2, 93],
                            19 : [2, 93],
                            22 : [2, 93],
                            33 : [2, 93],
                            34 : [2, 93],
                            44 : [2, 93],
                            45 : [2, 93],
                            46 : [2, 93],
                            49 : [2, 93],
                            50 : [2, 93],
                            51 : [2, 93],
                            52 : [2, 93],
                            53 : [2, 93],
                            54 : [2, 93],
                            55 : [2, 93],
                            56 : [2, 93],
                            57 : [2, 93],
                            58 : [2, 93],
                            59 : [2, 93],
                            60 : [2, 93],
                            61 : [2, 93],
                            71 : [2, 93],
                            72 : [2, 93],
                            77 : [2, 93],
                            79 : [2, 93],
                            80 : [2, 93],
                            81 : [2, 93],
                            91 : [2, 93]
                        },
                        {
                            5 : [2, 95],
                            10 : [2, 95],
                            19 : [2, 95],
                            22 : [2, 95],
                            33 : [2, 95],
                            34 : [2, 95],
                            44 : [2, 95],
                            45 : [2, 95],
                            46 : [2, 95],
                            49 : [2, 95],
                            50 : [2, 95],
                            51 : [2, 95],
                            52 : [2, 95],
                            53 : [2, 95],
                            54 : [2, 95],
                            55 : [2, 95],
                            56 : [2, 95],
                            57 : [2, 95],
                            58 : [2, 95],
                            59 : [2, 95],
                            60 : [2, 95],
                            61 : [2, 95],
                            71 : [2, 95],
                            72 : [2, 95],
                            77 : [2, 95],
                            79 : [2, 95],
                            80 : [2, 95],
                            81 : [2, 95],
                            91 : [2, 95]
                        },
                        {
                            5 : [2, 94],
                            10 : [2, 94],
                            19 : [2, 94],
                            22 : [2, 94],
                            33 : [2, 94],
                            34 : [2, 94],
                            44 : [2, 94],
                            45 : [2, 94],
                            46 : [2, 94],
                            49 : [2, 94],
                            50 : [2, 94],
                            51 : [2, 94],
                            52 : [2, 94],
                            53 : [2, 94],
                            54 : [2, 94],
                            55 : [2, 94],
                            56 : [2, 94],
                            57 : [2, 94],
                            58 : [2, 94],
                            59 : [2, 94],
                            60 : [2, 94],
                            61 : [2, 94],
                            71 : [2, 94],
                            72 : [2, 94],
                            77 : [2, 94],
                            79 : [2, 94],
                            80 : [2, 94],
                            81 : [2, 94],
                            91 : [2, 94]
                        },
                        {
                            5 : [2, 32],
                            10 : [2, 32],
                            19 : [2, 32],
                            33 : [2, 32],
                            34 : [2, 32],
                            79 : [2, 32]
                        },
                        {
                            7 : 178,
                            22 : [2, 43],
                            33 : [1, 79],
                            36 : 76,
                            43 : 177,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            7 : 180,
                            33 : [1, 79],
                            36 : 76,
                            43 : 179,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            22 : [2, 41],
                            44 : [1, 181],
                            45 : [1, 140]
                        },
                        {
                            5 : [2, 19],
                            10 : [2, 19],
                            19 : [2, 19],
                            33 : [2, 19],
                            34 : [2, 19],
                            79 : [2, 19]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            28 : 182,
                            33 : [1, 79],
                            36 : 109,
                            47 : 110,
                            48 : 111,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            5 : [2, 20],
                            10 : [2, 20],
                            19 : [2, 20],
                            33 : [2, 20],
                            34 : [2, 20],
                            79 : [2, 20]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 183,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 184,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 185,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 186,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 187,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 188,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 189,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 190,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 191,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 192,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 193,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 194,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 115,
                            21 : [1, 117],
                            33 : [1, 79],
                            48 : 195,
                            52 : [1, 113],
                            62 : 112,
                            63 : [1, 114],
                            64 : 116,
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            22 : [2, 62],
                            49 : [2, 62],
                            50 : [2, 62],
                            51 : [2, 62],
                            52 : [2, 62],
                            53 : [2, 62],
                            54 : [2, 62],
                            55 : [2, 62],
                            56 : [2, 62],
                            57 : [2, 62],
                            58 : [2, 62],
                            59 : [2, 62],
                            60 : [2, 62],
                            61 : [2, 62]
                        },
                        {
                            22 : [2, 63],
                            49 : [2, 63],
                            50 : [2, 63],
                            51 : [2, 63],
                            52 : [2, 63],
                            53 : [2, 63],
                            54 : [2, 63],
                            55 : [2, 63],
                            56 : [2, 63],
                            57 : [2, 63],
                            58 : [2, 63],
                            59 : [2, 63],
                            60 : [2, 63],
                            61 : [2, 63]
                        },
                        {
                            22 : [1, 196],
                            49 : [1, 145],
                            50 : [1, 146],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [1, 152],
                            57 : [1, 153],
                            58 : [1, 154],
                            59 : [1, 155],
                            60 : [1, 156],
                            61 : [1, 157]
                        },
                        {
                            5 : [2, 21],
                            10 : [2, 21],
                            19 : [2, 21],
                            33 : [2, 21],
                            34 : [2, 21],
                            79 : [2, 21]
                        },
                        {
                            35 : [1, 197]
                        },
                        {
                            22 : [1, 198]
                        },
                        {
                            7 : 200,
                            22 : [1, 199],
                            33 : [1, 79]
                        },
                        {
                            5 : [2, 29],
                            10 : [2, 29],
                            19 : [2, 29],
                            33 : [2, 29],
                            34 : [2, 29],
                            79 : [2, 29]
                        },
                        {
                            22 : [2, 30],
                            33 : [2, 30]
                        },
                        {
                            22 : [2, 89],
                            45 : [2, 89],
                            81 : [2, 89]
                        },
                        {
                            22 : [2, 90],
                            45 : [2, 90],
                            81 : [2, 90]
                        },
                        {
                            22 : [2, 111],
                            44 : [2, 111],
                            45 : [2, 111],
                            72 : [2, 111],
                            81 : [2, 111]
                        },
                        {
                            7 : 202,
                            33 : [1, 79],
                            52 : [1, 204],
                            85 : 201,
                            86 : [1, 203]
                        },
                        {
                            7 : 206,
                            33 : [1, 79],
                            52 : [1, 204],
                            85 : 205,
                            86 : [1, 203]
                        },
                        {
                            22 : [2, 118],
                            44 : [2, 118],
                            45 : [2, 118],
                            72 : [2, 118],
                            81 : [2, 118]
                        },
                        {
                            82 : 207,
                            88 : [1, 86],
                            89 : [1, 87]
                        },
                        {
                            7 : 209,
                            33 : [1, 79],
                            36 : 76,
                            43 : 208,
                            45 : [2, 122],
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            72 : [2, 122],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            22 : [2, 102],
                            44 : [2, 102],
                            45 : [2, 102],
                            49 : [2, 102],
                            50 : [2, 102],
                            51 : [2, 102],
                            52 : [2, 102],
                            53 : [2, 102],
                            54 : [2, 102],
                            55 : [2, 102],
                            56 : [2, 102],
                            57 : [2, 102],
                            58 : [2, 102],
                            59 : [2, 102],
                            60 : [2, 102],
                            61 : [2, 102],
                            72 : [2, 102],
                            79 : [2, 102],
                            81 : [2, 102]
                        },
                        {
                            86 : [1, 210]
                        },
                        {
                            22 : [2, 36],
                            44 : [2, 36],
                            45 : [2, 36]
                        },
                        {
                            22 : [2, 39],
                            44 : [2, 39],
                            45 : [2, 39]
                        },
                        {
                            22 : [2, 37],
                            44 : [2, 37],
                            45 : [2, 37]
                        },
                        {
                            22 : [2, 38],
                            44 : [2, 38],
                            45 : [2, 38]
                        },
                        {
                            7 : 178,
                            22 : [2, 42],
                            33 : [1, 79],
                            36 : 76,
                            43 : 177,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            22 : [2, 44]
                        },
                        {
                            22 : [2, 48],
                            49 : [2, 48],
                            50 : [2, 48],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [1, 152],
                            57 : [1, 153],
                            58 : [1, 154],
                            59 : [1, 155],
                            60 : [1, 156],
                            61 : [1, 157]
                        },
                        {
                            22 : [2, 49],
                            49 : [2, 49],
                            50 : [2, 49],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [1, 152],
                            57 : [1, 153],
                            58 : [1, 154],
                            59 : [1, 155],
                            60 : [1, 156],
                            61 : [1, 157]
                        },
                        {
                            22 : [2, 50],
                            49 : [2, 50],
                            50 : [2, 50],
                            51 : [2, 50],
                            52 : [2, 50],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 50],
                            57 : [2, 50],
                            58 : [2, 50],
                            59 : [2, 50],
                            60 : [2, 50],
                            61 : [2, 50]
                        },
                        {
                            22 : [2, 51],
                            49 : [2, 51],
                            50 : [2, 51],
                            51 : [2, 51],
                            52 : [2, 51],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 51],
                            57 : [2, 51],
                            58 : [2, 51],
                            59 : [2, 51],
                            60 : [2, 51],
                            61 : [2, 51]
                        },
                        {
                            22 : [2, 52],
                            49 : [2, 52],
                            50 : [2, 52],
                            51 : [2, 52],
                            52 : [2, 52],
                            53 : [2, 52],
                            54 : [2, 52],
                            55 : [2, 52],
                            56 : [2, 52],
                            57 : [2, 52],
                            58 : [2, 52],
                            59 : [2, 52],
                            60 : [2, 52],
                            61 : [2, 52]
                        },
                        {
                            22 : [2, 53],
                            49 : [2, 53],
                            50 : [2, 53],
                            51 : [2, 53],
                            52 : [2, 53],
                            53 : [2, 53],
                            54 : [2, 53],
                            55 : [2, 53],
                            56 : [2, 53],
                            57 : [2, 53],
                            58 : [2, 53],
                            59 : [2, 53],
                            60 : [2, 53],
                            61 : [2, 53]
                        },
                        {
                            22 : [2, 54],
                            49 : [2, 54],
                            50 : [2, 54],
                            51 : [2, 54],
                            52 : [2, 54],
                            53 : [2, 54],
                            54 : [2, 54],
                            55 : [2, 54],
                            56 : [2, 54],
                            57 : [2, 54],
                            58 : [2, 54],
                            59 : [2, 54],
                            60 : [2, 54],
                            61 : [2, 54]
                        },
                        {
                            22 : [2, 55],
                            49 : [2, 55],
                            50 : [2, 55],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 55],
                            57 : [2, 55],
                            58 : [2, 55],
                            59 : [2, 55],
                            60 : [2, 55],
                            61 : [2, 55]
                        },
                        {
                            22 : [2, 56],
                            49 : [2, 56],
                            50 : [2, 56],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 56],
                            57 : [2, 56],
                            58 : [2, 56],
                            59 : [2, 56],
                            60 : [2, 56],
                            61 : [2, 56]
                        },
                        {
                            22 : [2, 57],
                            49 : [2, 57],
                            50 : [2, 57],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 57],
                            57 : [2, 57],
                            58 : [2, 57],
                            59 : [2, 57],
                            60 : [2, 57],
                            61 : [2, 57]
                        },
                        {
                            22 : [2, 58],
                            49 : [2, 58],
                            50 : [2, 58],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 58],
                            57 : [2, 58],
                            58 : [2, 58],
                            59 : [2, 58],
                            60 : [2, 58],
                            61 : [2, 58]
                        },
                        {
                            22 : [2, 59],
                            49 : [2, 59],
                            50 : [2, 59],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 59],
                            57 : [2, 59],
                            58 : [2, 59],
                            59 : [2, 59],
                            60 : [2, 59],
                            61 : [2, 59]
                        },
                        {
                            22 : [2, 60],
                            49 : [2, 60],
                            50 : [2, 60],
                            51 : [1, 147],
                            52 : [1, 148],
                            53 : [1, 149],
                            54 : [1, 150],
                            55 : [1, 151],
                            56 : [2, 60],
                            57 : [2, 60],
                            58 : [2, 60],
                            59 : [2, 60],
                            60 : [2, 60],
                            61 : [2, 60]
                        },
                        {
                            22 : [2, 66],
                            49 : [2, 66],
                            50 : [2, 66],
                            51 : [2, 66],
                            52 : [2, 66],
                            53 : [2, 66],
                            54 : [2, 66],
                            55 : [2, 66],
                            56 : [2, 66],
                            57 : [2, 66],
                            58 : [2, 66],
                            59 : [2, 66],
                            60 : [2, 66],
                            61 : [2, 66]
                        },
                        {
                            7 : 211,
                            33 : [1, 79],
                            36 : 212,
                            80 : [1, 80],
                            90 : 81
                        },
                        {
                            5 : [2, 27],
                            10 : [2, 27],
                            19 : [2, 27],
                            33 : [2, 27],
                            34 : [2, 27],
                            79 : [2, 27]
                        },
                        {
                            5 : [2, 28],
                            10 : [2, 28],
                            19 : [2, 28],
                            33 : [2, 28],
                            34 : [2, 28],
                            79 : [2, 28]
                        },
                        {
                            22 : [2, 31],
                            33 : [2, 31]
                        },
                        {
                            81 : [1, 213]
                        },
                        {
                            81 : [1, 214]
                        },
                        {
                            81 : [2, 104]
                        },
                        {
                            86 : [1, 215]
                        },
                        {
                            81 : [1, 216]
                        },
                        {
                            81 : [1, 217]
                        },
                        {
                            93 : [1, 218]
                        },
                        {
                            45 : [2, 120],
                            72 : [2, 120]
                        },
                        {
                            45 : [2, 121],
                            72 : [2, 121]
                        },
                        {
                            22 : [2, 103],
                            44 : [2, 103],
                            45 : [2, 103],
                            49 : [2, 103],
                            50 : [2, 103],
                            51 : [2, 103],
                            52 : [2, 103],
                            53 : [2, 103],
                            54 : [2, 103],
                            55 : [2, 103],
                            56 : [2, 103],
                            57 : [2, 103],
                            58 : [2, 103],
                            59 : [2, 103],
                            60 : [2, 103],
                            61 : [2, 103],
                            72 : [2, 103],
                            79 : [2, 103],
                            81 : [2, 103]
                        },
                        {
                            22 : [1, 219]
                        },
                        {
                            22 : [1, 220]
                        },
                        {
                            22 : [2, 114],
                            44 : [2, 114],
                            45 : [2, 114],
                            72 : [2, 114],
                            81 : [2, 114]
                        },
                        {
                            22 : [2, 116],
                            44 : [2, 116],
                            45 : [2, 116],
                            72 : [2, 116],
                            81 : [2, 116]
                        },
                        {
                            81 : [2, 105]
                        },
                        {
                            22 : [2, 115],
                            44 : [2, 115],
                            45 : [2, 115],
                            72 : [2, 115],
                            81 : [2, 115]
                        },
                        {
                            22 : [2, 117],
                            44 : [2, 117],
                            45 : [2, 117],
                            72 : [2, 117],
                            81 : [2, 117]
                        },
                        {
                            7 : 221,
                            33 : [1, 79],
                            36 : 76,
                            43 : 222,
                            47 : 77,
                            52 : [1, 90],
                            64 : 78,
                            70 : [1, 82],
                            80 : [1, 80],
                            82 : 83,
                            83 : 84,
                            84 : [1, 85],
                            85 : 88,
                            86 : [1, 89],
                            88 : [1, 86],
                            89 : [1, 87],
                            90 : 81
                        },
                        {
                            5 : [2, 24],
                            10 : [2, 24],
                            19 : [2, 24],
                            33 : [2, 24],
                            34 : [2, 24],
                            79 : [2, 24]
                        },
                        {
                            5 : [2, 25],
                            10 : [2, 25],
                            19 : [2, 25],
                            33 : [2, 25],
                            34 : [2, 25],
                            79 : [2, 25]
                        },
                        {
                            45 : [2, 123],
                            72 : [2, 123]
                        },
                        {
                            45 : [2, 124],
                            72 : [2, 124]
                        }],
                        defaultActions: {
                            22 : [2, 1],
                            29 : [2, 75],
                            30 : [2, 76],
                            109 : [2, 45],
                            110 : [2, 46],
                            182 : [2, 44],
                            203 : [2, 104],
                            215 : [2, 105]
                        },
                        parseError: function(e, t) {
                            throw new Error(e)
                        },
                        parse: function(e) {
                            var t = this,
                            a = [0],
                            r = [null],
                            i = [],
                            s = this.table,
                            n = "",
                            o = 0,
                            l = 0,
                            p = 0;
                            this.lexer.setInput(e),
                            this.lexer.yy = this.yy,
                            this.yy.lexer = this.lexer,
                            this.yy.parser = this,
                            void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                            var c = this.lexer.yylloc;
                            i.push(c);
                            var u = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var d, h, m, f, g, v, y, w, x, b = {};;) {
                                if (m = a[a.length - 1], this.defaultActions[m] ? f = this.defaultActions[m] : (null !== d && void 0 !== d || (d = function() {
                                    var e;
                                    return e = t.lexer.lex() || 1,
                                    "number" != typeof e && (e = t.symbols_[e] || e),
                                    e
                                } ()), f = s[m] && s[m][d]), void 0 === f || !f.length || !f[0]) {
                                    var S = "";
                                    if (!p) {
                                        x = [];
                                        for (v in s[m]) this.terminals_[v] && v > 2 && x.push("'" + this.terminals_[v] + "'");
                                        S = this.lexer.showPosition ? "Parse error on line " + (o + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + (this.terminals_[d] || d) + "'": "Parse error on line " + (o + 1) + ": Unexpected " + (1 == d ? "end of input": "'" + (this.terminals_[d] || d) + "'"),
                                        this.parseError(S, {
                                            text: this.lexer.match,
                                            token: this.terminals_[d] || d,
                                            line: this.lexer.yylineno,
                                            loc: c,
                                            expected: x
                                        })
                                    }
                                }
                                if (f[0] instanceof Array && f.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + d);
                                switch (f[0]) {
                                case 1:
                                    a.push(d),
                                    r.push(this.lexer.yytext),
                                    i.push(this.lexer.yylloc),
                                    a.push(f[1]),
                                    d = null,
                                    h ? (d = h, h = null) : (l = this.lexer.yyleng, n = this.lexer.yytext, o = this.lexer.yylineno, c = this.lexer.yylloc, p > 0 && p--);
                                    break;
                                case 2:
                                    if (y = this.productions_[f[1]][1], b.$ = r[r.length - y], b._$ = {
                                        first_line: i[i.length - (y || 1)].first_line,
                                        last_line: i[i.length - 1].last_line,
                                        first_column: i[i.length - (y || 1)].first_column,
                                        last_column: i[i.length - 1].last_column
                                    },
                                    u && (b._$.range = [i[i.length - (y || 1)].range[0], i[i.length - 1].range[1]]), void 0 !== (g = this.performAction.call(b, n, l, o, this.yy, f[1], r, i))) return g;
                                    y && (a = a.slice(0, -1 * y * 2), r = r.slice(0, -1 * y), i = i.slice(0, -1 * y)),
                                    a.push(this.productions_[f[1]][0]),
                                    r.push(b.$),
                                    i.push(b._$),
                                    w = s[a[a.length - 2]][a[a.length - 1]],
                                    a.push(w);
                                    break;
                                case 3:
                                    return ! 0
                                }
                            }
                            return ! 0
                        }
                    },
                    a = function() {
                        var e = {
                            EOF: 1,
                            parseError: function(e, t) {
                                if (!this.yy.parser) throw new Error(e);
                                this.yy.parser.parseError(e, t)
                            },
                            setInput: function(e) {
                                return this._input = e,
                                this._more = this._less = this.done = !1,
                                this.yylineno = this.yyleng = 0,
                                this.yytext = this.matched = this.match = "",
                                this.conditionStack = ["INITIAL"],
                                this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                },
                                this.options.ranges && (this.yylloc.range = [0, 0]),
                                this.offset = 0,
                                this
                            },
                            input: function() {
                                var e = this._input[0];
                                return this.yytext += e,
                                this.yyleng++,
                                this.offset++,
                                this.match += e,
                                this.matched += e,
                                e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
                                this.options.ranges && this.yylloc.range[1]++,
                                this._input = this._input.slice(1),
                                e
                            },
                            unput: function(e) {
                                var t = e.length,
                                a = e.split(/(?:\r\n?|\n)/g);
                                this._input = e + this._input,
                                this.yytext = this.yytext.substr(0, this.yytext.length - t - 1),
                                this.offset -= t;
                                var r = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1),
                                this.matched = this.matched.substr(0, this.matched.length - 1),
                                a.length - 1 && (this.yylineno -= a.length - 1);
                                var i = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: a ? (a.length === r.length ? this.yylloc.first_column: 0) + r[r.length - a.length].length - a[0].length: this.yylloc.first_column - t
                                },
                                this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]),
                                this
                            },
                            more: function() {
                                return this._more = !0,
                                this
                            },
                            less: function(e) {
                                this.unput(this.match.slice(e))
                            },
                            pastInput: function() {
                                var e = this.matched.substr(0, this.matched.length - this.match.length);
                                return (e.length > 20 ? "...": "") + e.substr( - 20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var e = this.match;
                                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)),
                                (e.substr(0, 20) + (e.length > 20 ? "...": "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var e = this.pastInput(),
                                t = new Array(e.length + 1).join("-");
                                return e + this.upcomingInput() + "\n" + t + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var e, t, a, r, i;
                                this._more || (this.yytext = "", this.match = "");
                                for (var s = this._currentRules(), n = 0; n < s.length && (!(a = this._input.match(this.rules[s[n]])) || t && !(a[0].length > t[0].length) || (t = a, r = n, this.options.flex)); n++);
                                return t ? (i = t[0].match(/(?:\r\n?|\n).*/g), i && (this.yylineno += i.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length: this.yylloc.last_column + t[0].length
                                },
                                this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, s[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e || void 0) : "" === this._input ? this.EOF: this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var e = this.next();
                                return void 0 !== e ? e: this.lex()
                            },
                            begin: function(e) {
                                this.conditionStack.push(e)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(e) {
                                this.begin(e)
                            }
                        };
                        return e.options = {},
                        e.performAction = function(e, t, a, r) {
                            switch (a) {
                            case 0:
                                var i = /\\+$/,
                                s = t.yytext.match(i),
                                n = s ? s[0].length: null;
                                if (n && n % 2 ? (t.yytext = t.yytext.replace(/\\$/, ""), this.begin("esc")) : this.begin("mu"), n > 1 && (t.yytext = t.yytext.replace(/(\\\\)+$/, "\\")), t.yytext) return 79;
                                break;
                            case 1:
                                var i = /\\+$/,
                                s = t.yytext.match(i),
                                n = s ? s[0].length: null;
                                if (n && n % 2 ? (t.yytext = t.yytext.replace(/\\$/, ""), this.begin("esc")) : this.begin("h"), n > 1 && (t.yytext = t.yytext.replace(/(\\\\)+$/, "\\")), t.yytext) return 79;
                                break;
                            case 2:
                                return 79;
                            case 3:
                                return this.popState(),
                                10;
                            case 4:
                                return this.popState(),
                                t.yytext = t.yytext.replace(/^#\[\[|\]\]#$/g, ""),
                                79;
                            case 5:
                                return this.popState(),
                                10;
                            case 6:
                                return 19;
                            case 7:
                                return 25;
                            case 8:
                                return 27;
                            case 9:
                                return 29;
                            case 10:
                            case 11:
                                return this.popState(),
                                30;
                            case 12:
                                return this.popState(),
                                31;
                            case 13:
                                return this.popState(),
                                37;
                            case 14:
                                return 32;
                            case 15:
                                return 20;
                            case 16:
                                return 38;
                            case 17:
                                return 39;
                            case 18:
                                return 35;
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                            case 26:
                                return t.yytext;
                            case 27:
                            case 28:
                                return 33;
                            case 29:
                                return t.yytext;
                            case 30:
                                return 46;
                            case 31:
                                var o = this.conditionStack,
                                l = o.length;
                                if (l >= 2 && "c" === o[l - 1] && "run" === o[l - 2]) return 44;
                                break;
                            case 32:
                                break;
                            case 33:
                                return 70;
                            case 34:
                                return 72;
                            case 35:
                                return 93;
                            case 36:
                                return e.begin = !0,
                                69;
                            case 37:
                                return this.popState(),
                                !0 === e.begin ? (e.begin = !1, 71) : "CONTENT";
                            case 38:
                                return this.begin("c"),
                                21;
                            case 39:
                                if ("c" === this.popState()) {
                                    var o = this.conditionStack,
                                    l = o.length;
                                    return "run" === o[l - 1] && (this.popState(), l -= 1),
                                    2 === l && "h" === o[1] ? this.popState() : 3 === l && "mu" === o[1] && "h" === o[2] && (this.popState(), this.popState()),
                                    22
                                }
                                return "CONTENT";
                            case 40:
                                return this.begin("i"),
                                80;
                            case 41:
                                return "i" === this.popState() ? 81 : "CONTENT";
                            case 42:
                                return 91;
                            case 43:
                                return 77;
                            case 44:
                                return 87;
                            case 45:
                                return 45;
                            case 46:
                                return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"'),
                                89;
                            case 47:
                                return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\'/g, "'"),
                                88;
                            case 48:
                            case 49:
                            case 50:
                                return 84;
                            case 51:
                                return 86;
                            case 52:
                                return 34;
                            case 53:
                                return this.begin("run"),
                                34;
                            case 54:
                                return this.begin("h"),
                                19;
                            case 55:
                            case 56:
                            case 57:
                                return this.popState(),
                                79;
                            case 58:
                                return this.popState(),
                                5;
                            case 59:
                                return 5
                            }
                        },
                        e.rules = [/^(?:[^#]*?(?=\$))/, /^(?:[^\$]*?(?=#))/, /^(?:[^\x00]+)/, /^(?:#\*[\s\S]+?\*#)/, /^(?:#\[\[[\s\S]+?\]\]#)/, /^(?:##[^\n]+)/, /^(?:#(?=[a-zA-Z{]))/, /^(?:set[ ]*)/, /^(?:if[ ]*)/, /^(?:elseif[ ]*)/, /^(?:else\b)/, /^(?:\{else\})/, /^(?:end\b)/, /^(?:break\b)/, /^(?:foreach[ ]*)/, /^(?:noescape\b)/, /^(?:define[ ]*)/, /^(?:macro[ ]*)/, /^(?:in\b)/, /^(?:[%\+\-\*\/])/, /^(?:<=)/, /^(?:>=)/, /^(?:[><])/, /^(?:==)/, /^(?:\|\|)/, /^(?:&&)/, /^(?:!=)/, /^(?:\$!(?=[{a-zA-Z_]))/, /^(?:\$(?=[{a-zA-Z_]))/, /^(?:!)/, /^(?:=)/, /^(?:[ ]+(?=[^,]))/, /^(?:\s+)/, /^(?:\{)/, /^(?:\})/, /^(?::)/, /^(?:\{)/, /^(?:\})/, /^(?:\([\s]*(?=[$'"\[\{\-0-9\w()!]))/, /^(?:\))/, /^(?:\[[\s]*(?=[\-$"'0-9{\[\]]+))/, /^(?:\])/, /^(?:\.\.)/, /^(?:\.(?=[a-zA-Z_]))/, /^(?:\.(?=[\d]))/, /^(?:,[ ]*)/, /^(?:"(\\"|[^\"])*")/, /^(?:'(\\'|[^\'])*')/, /^(?:null\b)/, /^(?:false\b)/, /^(?:true\b)/, /^(?:[0-9]+)/, /^(?:[_a-zA-Z][a-zA-Z0-9_\-]*)/, /^(?:[_a-zA-Z][a-zA-Z0-9_\-]*[ ]*(?=\())/, /^(?:#)/, /^(?:.)/, /^(?:\s+)/, /^(?:[\$#])/, /^(?:$)/, /^(?:$)/],
                        e.conditions = {
                            mu: {
                                rules: [5, 27, 28, 36, 37, 38, 39, 40, 41, 43, 52, 54, 55, 56, 58],
                                inclusive: !1
                            },
                            c: {
                                rules: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
                                inclusive: !1
                            },
                            i: {
                                rules: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 33, 34, 34, 35, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
                                inclusive: !1
                            },
                            h: {
                                rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 27, 28, 29, 30, 35, 38, 39, 40, 41, 43, 51, 53, 55, 56, 58],
                                inclusive: !1
                            },
                            esc: {
                                rules: [57],
                                inclusive: !1
                            },
                            run: {
                                rules: [27, 28, 29, 31, 32, 33, 34, 35, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 55, 56, 58],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 2, 59],
                                inclusive: !0
                            }
                        },
                        e
                    } ();
                    return t.lexer = a,
                    e.prototype = t,
                    t.Parser = e,
                    new e
                } ();
                return a._parse = a.parse,
                a.parse = function(e) {
                    return t(a._parse(e))
                },
                a
            } (),
            r = {
                render: function(e, r) {
                    var i = a.parse(e);
                    return new t(i).render(r)
                }
            };
            window.velocityjs = r
        } (window._)
    },
    241 : function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {},
            e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1),
            e
        }
    },
    243 : function(e, t, a) {
        a(129),
        a(131),
        a(132),
        a(128),
        a(88),
        e.exports = a(130)
    },
    88 : function(e, t, a) {
        var r;
        void 0 !== (r = function(e, t, a) {
            var r = window.document; !
            function() {
                "use strict";
                var e, t = function(a, s) {
                    function o(e) {
                        return Math.floor(e)
                    }
                    function l() {
                        var e = T.params.autoplay,
                        t = T.slides.eq(T.activeIndex);
                        t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || T.params.autoplay),
                        T.autoplayTimeoutId = setTimeout(function() {
                            T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? s.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T))
                        },
                        e)
                    }
                    function p(t, a) {
                        var r = e(t.target);
                        if (!r.is(a)) if ("string" == typeof a) r = r.parents(a);
                        else if (a.nodeType) {
                            var i;
                            return r.parents().each(function(e, t) {
                                t === a && (i = a)
                            }),
                            i ? a: void 0
                        }
                        if (0 !== r.length) return r[0]
                    }
                    function c(e, t) {
                        t = t || {};
                        var a = window.MutationObserver || window.WebkitMutationObserver,
                        r = new a(function(e) {
                            e.forEach(function(e) {
                                T.onResize(!0),
                                T.emit("onObserverUpdate", T, e)
                            })
                        });
                        r.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }),
                        T.observers.push(r)
                    }
                    function u(e) {
                        e.originalEvent && (e = e.originalEvent);
                        var t = e.keyCode || e.charCode;
                        if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === t || !T.isHorizontal() && 40 === t)) return ! 1;
                        if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === t || !T.isHorizontal() && 38 === t)) return ! 1;
                        if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
                            if (37 === t || 39 === t || 38 === t || 40 === t) {
                                var a = !1;
                                if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;
                                var i = {
                                    left: window.pageXOffset,
                                    top: window.pageYOffset
                                },
                                s = window.innerWidth,
                                n = window.innerHeight,
                                o = T.container.offset();
                                T.rtl && (o.left = o.left - T.container[0].scrollLeft);
                                for (var l = [[o.left, o.top], [o.left + T.width, o.top], [o.left, o.top + T.height], [o.left + T.width, o.top + T.height]], p = 0; p < l.length; p++) {
                                    var c = l[p];
                                    c[0] >= i.left && c[0] <= i.left + s && c[1] >= i.top && c[1] <= i.top + n && (a = !0)
                                }
                                if (!a) return
                            }
                            T.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !T.rtl || 37 === t && T.rtl) && T.slideNext(), (37 === t && !T.rtl || 39 === t && T.rtl) && T.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && T.slideNext(), 38 === t && T.slidePrev())
                        }
                    }
                    function d(e) {
                        e.originalEvent && (e = e.originalEvent);
                        var t = 0,
                        a = T.rtl ? -1 : 1,
                        r = h(e);
                        if (T.params.mousewheelForceToAxis) if (T.isHorizontal()) {
                            if (! (Math.abs(r.pixelX) > Math.abs(r.pixelY))) return;
                            t = r.pixelX * a
                        } else {
                            if (! (Math.abs(r.pixelY) > Math.abs(r.pixelX))) return;
                            t = r.pixelY
                        } else t = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * a: -r.pixelY;
                        if (0 !== t) {
                            if (T.params.mousewheelInvert && (t = -t), T.params.freeMode) {
                                var i = T.getWrapperTranslate() + t * T.params.mousewheelSensitivity,
                                s = T.isBeginning,
                                n = T.isEnd;
                                if (i >= T.minTranslate() && (i = T.minTranslate()), i <= T.maxTranslate() && (i = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(i), T.updateProgress(), T.updateActiveIndex(), (!s && T.isBeginning || !n && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function() {
                                    T.slideReset()
                                },
                                300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, e), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === i || i === T.maxTranslate()) return
                            } else {
                                if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60) if (t < 0) if (T.isEnd && !T.params.loop || T.animating) {
                                    if (T.params.mousewheelReleaseOnEdges) return ! 0
                                } else T.slideNext(),
                                T.emit("onScroll", T, e);
                                else if (T.isBeginning && !T.params.loop || T.animating) {
                                    if (T.params.mousewheelReleaseOnEdges) return ! 0
                                } else T.slidePrev(),
                                T.emit("onScroll", T, e);
                                T.mousewheel.lastScrollTime = (new window.Date).getTime()
                            }
                            return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                            !1
                        }
                    }
                    function h(e) {
                        var t = 0,
                        a = 0,
                        r = 0,
                        i = 0;
                        return "detail" in e && (a = e.detail),
                        "wheelDelta" in e && (a = -e.wheelDelta / 120),
                        "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                        "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                        "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0),
                        r = 10 * t,
                        i = 10 * a,
                        "deltaY" in e && (i = e.deltaY),
                        "deltaX" in e && (r = e.deltaX),
                        (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)),
                        r && !t && (t = r < 1 ? -1 : 1),
                        i && !a && (a = i < 1 ? -1 : 1),
                        {
                            spinX: t,
                            spinY: a,
                            pixelX: r,
                            pixelY: i
                        }
                    }
                    function m(t, a) {
                        t = e(t);
                        var r, i, s, n = T.rtl ? -1 : 1;
                        r = t.attr("data-swiper-parallax") || "0",
                        i = t.attr("data-swiper-parallax-x"),
                        s = t.attr("data-swiper-parallax-y"),
                        i || s ? (i = i || "0", s = s || "0") : T.isHorizontal() ? (i = r, s = "0") : (s = r, i = "0"),
                        i = i.indexOf("%") >= 0 ? parseInt(i, 10) * a * n + "%": i * a * n + "px",
                        s = s.indexOf("%") >= 0 ? parseInt(s, 10) * a + "%": s * a + "px",
                        t.transform("translate3d(" + i + ", " + s + ",0px)")
                    }
                    function f(e) {
                        return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                        e
                    }
                    if (! (this instanceof t)) return new t(a, s);
                    var g = {
                        direction: "horizontal",
                        touchEventsTarget: "container",
                        initialSlide: 0,
                        speed: 300,
                        autoplay: !1,
                        autoplayDisableOnInteraction: !0,
                        autoplayStopOnLast: !1,
                        iOSEdgeSwipeDetection: !1,
                        iOSEdgeSwipeThreshold: 20,
                        freeMode: !1,
                        freeModeMomentum: !0,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: !0,
                        freeModeMomentumBounceRatio: 1,
                        freeModeMomentumVelocityRatio: 1,
                        freeModeSticky: !1,
                        freeModeMinimumVelocity: .02,
                        autoHeight: !1,
                        setWrapperSize: !1,
                        virtualTranslate: !1,
                        effect: "slide",
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        },
                        flip: {
                            slideShadows: !0,
                            limitRotation: !0
                        },
                        cube: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        },
                        fade: {
                            crossFade: !1
                        },
                        parallax: !1,
                        zoom: !1,
                        zoomMax: 3,
                        zoomMin: 1,
                        zoomToggle: !0,
                        scrollbar: null,
                        scrollbarHide: !0,
                        scrollbarDraggable: !1,
                        scrollbarSnapOnRelease: !1,
                        keyboardControl: !1,
                        mousewheelControl: !1,
                        mousewheelReleaseOnEdges: !1,
                        mousewheelInvert: !1,
                        mousewheelForceToAxis: !1,
                        mousewheelSensitivity: 1,
                        mousewheelEventsTarged: "container",
                        hashnav: !1,
                        hashnavWatchState: !1,
                        history: !1,
                        replaceState: !1,
                        breakpoints: void 0,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: "column",
                        slidesPerGroup: 1,
                        centeredSlides: !1,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        roundLengths: !1,
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: !0,
                        shortSwipes: !0,
                        longSwipes: !0,
                        longSwipesRatio: .5,
                        longSwipesMs: 300,
                        followFinger: !0,
                        onlyExternal: !1,
                        threshold: 0,
                        touchMoveStopPropagation: !0,
                        touchReleaseOnEdges: !1,
                        uniqueNavElements: !0,
                        pagination: null,
                        paginationElement: "span",
                        paginationClickable: !1,
                        paginationHide: !1,
                        paginationBulletRender: null,
                        paginationProgressRender: null,
                        paginationFractionRender: null,
                        paginationCustomRender: null,
                        paginationType: "bullets",
                        resistance: !0,
                        resistanceRatio: .85,
                        nextButton: null,
                        prevButton: null,
                        watchSlidesProgress: !1,
                        watchSlidesVisibility: !1,
                        grabCursor: !1,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        slideToClickedSlide: !1,
                        lazyLoading: !1,
                        lazyLoadingInPrevNext: !1,
                        lazyLoadingInPrevNextAmount: 1,
                        lazyLoadingOnTransitionStart: !1,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        loop: !1,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        control: void 0,
                        controlInverse: !1,
                        controlBy: "slide",
                        normalizeSlideIndex: !0,
                        allowSwipeToPrev: !0,
                        allowSwipeToNext: !0,
                        swipeHandler: null,
                        noSwiping: !0,
                        noSwipingClass: "swiper-no-swiping",
                        passiveListeners: !0,
                        containerModifierClass: "swiper-container-",
                        slideClass: "swiper-slide",
                        slideActiveClass: "swiper-slide-active",
                        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                        slideVisibleClass: "swiper-slide-visible",
                        slideDuplicateClass: "swiper-slide-duplicate",
                        slideNextClass: "swiper-slide-next",
                        slideDuplicateNextClass: "swiper-slide-duplicate-next",
                        slidePrevClass: "swiper-slide-prev",
                        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                        wrapperClass: "swiper-wrapper",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        buttonDisabledClass: "swiper-button-disabled",
                        paginationCurrentClass: "swiper-pagination-current",
                        paginationTotalClass: "swiper-pagination-total",
                        paginationHiddenClass: "swiper-pagination-hidden",
                        paginationProgressbarClass: "swiper-pagination-progressbar",
                        paginationClickableClass: "swiper-pagination-clickable",
                        paginationModifierClass: "swiper-pagination-",
                        lazyLoadingClass: "swiper-lazy",
                        lazyStatusLoadingClass: "swiper-lazy-loading",
                        lazyStatusLoadedClass: "swiper-lazy-loaded",
                        lazyPreloaderClass: "swiper-lazy-preloader",
                        notificationClass: "swiper-notification",
                        preloaderClass: "preloader",
                        zoomContainerClass: "swiper-zoom-container",
                        observer: !1,
                        observeParents: !1,
                        a11y: !1,
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        runCallbacksOnInit: !0
                    },
                    v = s && s.virtualTranslate;
                    s = s || {};
                    var y = {};
                    for (var w in s) if ("object" != typeof s[w] || null === s[w] || (s[w].nodeType || s[w] === window || s[w] === r || void 0 !== i && s[w] instanceof i || "undefined" != typeof jQuery && s[w] instanceof jQuery)) y[w] = s[w];
                    else {
                        y[w] = {};
                        for (var x in s[w]) y[w][x] = s[w][x]
                    }
                    for (var b in g) if (void 0 === s[b]) s[b] = g[b];
                    else if ("object" == typeof s[b]) for (var S in g[b]) void 0 === s[b][S] && (s[b][S] = g[b][S]);
                    var T = this;
                    if (T.params = s, T.originalParams = y, T.classNames = [], void 0 !== e && void 0 !== i && (e = i), (void 0 !== e || (e = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery: i)) && (T.$ = e, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function() {
                        if (!T.params.breakpoints) return ! 1;
                        var e, t = !1,
                        a = [];
                        for (e in T.params.breakpoints) T.params.breakpoints.hasOwnProperty(e) && a.push(e);
                        a.sort(function(e, t) {
                            return parseInt(e, 10) > parseInt(t, 10)
                        });
                        for (var r = 0; r < a.length; r++)(e = a[r]) >= window.innerWidth && !t && (t = e);
                        return t || "max"
                    },
                    T.setBreakpoint = function() {
                        var e = T.getActiveBreakpoint();
                        if (e && T.currentBreakpoint !== e) {
                            var t = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams,
                            a = T.params.loop && t.slidesPerView !== T.params.slidesPerView;
                            for (var r in t) T.params[r] = t[r];
                            T.currentBreakpoint = e,
                            a && T.destroyLoop && T.reLoop(!0)
                        }
                    },
                    T.params.breakpoints && T.setBreakpoint(), T.container = e(a), 0 !== T.container.length)) {
                        if (T.container.length > 1) {
                            var C = [];
                            return T.container.each(function() {
                                C.push(new t(this, s))
                            }),
                            C
                        }
                        T.container[0].swiper = T,
                        T.container.data("swiper", T),
                        T.classNames.push(T.params.containerModifierClass + T.params.direction),
                        T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
                        T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1),
                        T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
                        (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
                        T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
                        ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
                        "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
                        "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0, T.params.setWrapperSize = !1),
                        "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, T.params.setWrapperSize = !1, void 0 === v && (T.params.virtualTranslate = !0)),
                        T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
                        T.wrapper = T.container.children("." + T.params.wrapperClass),
                        T.params.pagination && (T.paginationContainer = e(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
                        (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = e(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
                        T.isHorizontal = function() {
                            return "horizontal" === T.params.direction
                        },
                        T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
                        T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
                        T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
                        T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
                        T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
                        T.container.addClass(T.classNames.join(" ")),
                        T.translate = 0,
                        T.progress = 0,
                        T.velocity = 0,
                        T.lockSwipeToNext = function() {
                            T.params.allowSwipeToNext = !1,
                            !1 === T.params.allowSwipeToPrev && T.params.grabCursor && T.unsetGrabCursor()
                        },
                        T.lockSwipeToPrev = function() {
                            T.params.allowSwipeToPrev = !1,
                            !1 === T.params.allowSwipeToNext && T.params.grabCursor && T.unsetGrabCursor()
                        },
                        T.lockSwipes = function() {
                            T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
                            T.params.grabCursor && T.unsetGrabCursor()
                        },
                        T.unlockSwipeToNext = function() {
                            T.params.allowSwipeToNext = !0,
                            !0 === T.params.allowSwipeToPrev && T.params.grabCursor && T.setGrabCursor()
                        },
                        T.unlockSwipeToPrev = function() {
                            T.params.allowSwipeToPrev = !0,
                            !0 === T.params.allowSwipeToNext && T.params.grabCursor && T.setGrabCursor()
                        },
                        T.unlockSwipes = function() {
                            T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
                            T.params.grabCursor && T.setGrabCursor()
                        },
                        T.setGrabCursor = function(e) {
                            T.container[0].style.cursor = "move",
                            T.container[0].style.cursor = e ? "-webkit-grabbing": "-webkit-grab",
                            T.container[0].style.cursor = e ? "-moz-grabbin": "-moz-grab",
                            T.container[0].style.cursor = e ? "grabbing": "grab"
                        },
                        T.unsetGrabCursor = function() {
                            T.container[0].style.cursor = ""
                        },
                        T.params.grabCursor && T.setGrabCursor(),
                        T.imagesToLoad = [],
                        T.imagesLoaded = 0,
                        T.loadImage = function(e, t, a, r, i, s) {
                            function n() {
                                s && s()
                            }
                            var o;
                            e.complete && i ? n() : t ? (o = new window.Image, o.onload = n, o.onerror = n, r && (o.sizes = r), a && (o.srcset = a), t && (o.src = t)) : n()
                        },
                        T.preloadImages = function() {
                            function e() {
                                void 0 !== T && null !== T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)))
                            }
                            T.imagesToLoad = T.container.find("img");
                            for (var t = 0; t < T.imagesToLoad.length; t++) T.loadImage(T.imagesToLoad[t], T.imagesToLoad[t].currentSrc || T.imagesToLoad[t].getAttribute("src"), T.imagesToLoad[t].srcset || T.imagesToLoad[t].getAttribute("srcset"), T.imagesToLoad[t].sizes || T.imagesToLoad[t].getAttribute("sizes"), !0, e)
                        },
                        T.autoplayTimeoutId = void 0,
                        T.autoplaying = !1,
                        T.autoplayPaused = !1,
                        T.startAutoplay = function() {
                            return void 0 === T.autoplayTimeoutId && ( !! T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void l())))
                        },
                        T.stopAutoplay = function(e) {
                            T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T))
                        },
                        T.pauseAutoplay = function(e) {
                            T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === e ? (T.autoplayPaused = !1, l()) : T.wrapper.transitionEnd(function() {
                                T && (T.autoplayPaused = !1, T.autoplaying ? l() : T.stopAutoplay())
                            }))
                        },
                        T.minTranslate = function() {
                            return - T.snapGrid[0]
                        },
                        T.maxTranslate = function() {
                            return - T.snapGrid[T.snapGrid.length - 1]
                        },
                        T.updateAutoHeight = function() {
                            var e = [],
                            t = 0;
                            if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1) for (n = 0; n < Math.ceil(T.params.slidesPerView); n++) {
                                var a = T.activeIndex + n;
                                if (a > T.slides.length) break;
                                e.push(T.slides.eq(a)[0])
                            } else e.push(T.slides.eq(T.activeIndex)[0]);
                            for (n = 0; n < e.length; n++) if (void 0 !== e[n]) {
                                var r = e[n].offsetHeight;
                                t = r > t ? r: t
                            }
                            t && T.wrapper.css("height", t + "px")
                        },
                        T.updateContainerSize = function() {
                            var e, t;
                            e = void 0 !== T.params.width ? T.params.width: T.container[0].clientWidth,
                            t = void 0 !== T.params.height ? T.params.height: T.container[0].clientHeight,
                            0 === e && T.isHorizontal() || 0 === t && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), t = t - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = e, T.height = t, T.size = T.isHorizontal() ? T.width: T.height)
                        },
                        T.updateSlidesSize = function() {
                            T.slides = T.wrapper.children("." + T.params.slideClass),
                            T.snapGrid = [],
                            T.slidesGrid = [],
                            T.slidesSizesGrid = [];
                            var e, t = T.params.spaceBetween,
                            a = -T.params.slidesOffsetBefore,
                            r = 0,
                            i = 0;
                            if (void 0 !== T.size) {
                                "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * T.size),
                                T.virtualSize = -t,
                                T.rtl ? T.slides.css({
                                    marginLeft: "",
                                    marginTop: ""
                                }) : T.slides.css({
                                    marginRight: "",
                                    marginBottom: ""
                                });
                                var s;
                                T.params.slidesPerColumn > 1 && (s = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length: Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (s = Math.max(s, T.params.slidesPerView * T.params.slidesPerColumn)));
                                var n, l = T.params.slidesPerColumn,
                                p = s / l,
                                c = p - (T.params.slidesPerColumn * p - T.slides.length);
                                for (e = 0; e < T.slides.length; e++) {
                                    n = 0;
                                    var u = T.slides.eq(e);
                                    if (T.params.slidesPerColumn > 1) {
                                        var d, h, m;
                                        "column" === T.params.slidesPerColumnFill ? (h = Math.floor(e / l), m = e - h * l, (h > c || h === c && m === l - 1) && ++m >= l && (m = 0, h++), d = h + m * s / l, u.css({
                                            "-webkit-box-ordinal-group": d,
                                            "-moz-box-ordinal-group": d,
                                            "-ms-flex-order": d,
                                            "-webkit-order": d,
                                            order: d
                                        })) : (m = Math.floor(e / p), h = e - m * p),
                                        u.css("margin-" + (T.isHorizontal() ? "top": "left"), 0 !== m && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", m)
                                    }
                                    "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (n = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), T.params.roundLengths && (n = o(n))) : (n = (T.size - (T.params.slidesPerView - 1) * t) / T.params.slidesPerView, T.params.roundLengths && (n = o(n)), T.isHorizontal() ? T.slides[e].style.width = n + "px": T.slides[e].style.height = n + "px"), T.slides[e].swiperSlideSize = n, T.slidesSizesGrid.push(n), T.params.centeredSlides ? (a = a + n / 2 + r / 2 + t, 0 === e && (a = a - T.size / 2 - t), Math.abs(a) < .001 && (a = 0), i % T.params.slidesPerGroup == 0 && T.snapGrid.push(a), T.slidesGrid.push(a)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(a), T.slidesGrid.push(a), a = a + n + t), T.virtualSize += n + t, r = n, i++)
                                }
                                T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                                var f;
                                if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }) : T.wrapper.css({
                                    height: T.virtualSize + T.params.spaceBetween + "px"
                                })), T.params.slidesPerColumn > 1 && (T.virtualSize = (n + T.params.spaceBetween) * s, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }) : T.wrapper.css({
                                    height: T.virtualSize + T.params.spaceBetween + "px"
                                }), T.params.centeredSlides)) {
                                    for (f = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && f.push(T.snapGrid[e]);
                                    T.snapGrid = f
                                }
                                if (!T.params.centeredSlides) {
                                    for (f = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] <= T.virtualSize - T.size && f.push(T.snapGrid[e]);
                                    T.snapGrid = f,
                                    Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                                }
                                0 === T.snapGrid.length && (T.snapGrid = [0]),
                                0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                                    marginLeft: t + "px"
                                }) : T.slides.css({
                                    marginRight: t + "px"
                                }) : T.slides.css({
                                    marginBottom: t + "px"
                                })),
                                T.params.watchSlidesProgress && T.updateSlidesOffset()
                            }
                        },
                        T.updateSlidesOffset = function() {
                            for (var e = 0; e < T.slides.length; e++) T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft: T.slides[e].offsetTop
                        },
                        T.updateSlidesProgress = function(e) {
                            if (void 0 === e && (e = T.translate || 0), 0 !== T.slides.length) {
                                void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                                var t = -e;
                                T.rtl && (t = e),
                                T.slides.removeClass(T.params.slideVisibleClass);
                                for (var a = 0; a < T.slides.length; a++) {
                                    var r = T.slides[a],
                                    i = (t + (T.params.centeredSlides ? T.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + T.params.spaceBetween);
                                    if (T.params.watchSlidesVisibility) {
                                        var s = -(t - r.swiperSlideOffset),
                                        n = s + T.slidesSizesGrid[a]; (s >= 0 && s < T.size || n > 0 && n <= T.size || s <= 0 && n >= T.size) && T.slides.eq(a).addClass(T.params.slideVisibleClass)
                                    }
                                    r.progress = T.rtl ? -i: i
                                }
                            }
                        },
                        T.updateProgress = function(e) {
                            void 0 === e && (e = T.translate || 0);
                            var t = T.maxTranslate() - T.minTranslate(),
                            a = T.isBeginning,
                            r = T.isEnd;
                            0 === t ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / t, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1),
                            T.isBeginning && !a && T.emit("onReachBeginning", T),
                            T.isEnd && !r && T.emit("onReachEnd", T),
                            T.params.watchSlidesProgress && T.updateSlidesProgress(e),
                            T.emit("onProgress", T, T.progress)
                        },
                        T.updateActiveIndex = function() {
                            var e, t, a, r = T.rtl ? T.translate: -T.translate;
                            for (t = 0; t < T.slidesGrid.length; t++) void 0 !== T.slidesGrid[t + 1] ? r >= T.slidesGrid[t] && r < T.slidesGrid[t + 1] - (T.slidesGrid[t + 1] - T.slidesGrid[t]) / 2 ? e = t: r >= T.slidesGrid[t] && r < T.slidesGrid[t + 1] && (e = t + 1) : r >= T.slidesGrid[t] && (e = t);
                            T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                            a = Math.floor(e / T.params.slidesPerGroup),
                            a >= T.snapGrid.length && (a = T.snapGrid.length - 1),
                            e !== T.activeIndex && (T.snapIndex = a, T.previousIndex = T.activeIndex, T.activeIndex = e, T.updateClasses(), T.updateRealIndex())
                        },
                        T.updateRealIndex = function() {
                            T.realIndex = T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex
                        },
                        T.updateClasses = function() {
                            T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                            var t = T.slides.eq(T.activeIndex);
                            t.addClass(T.params.slideActiveClass),
                            s.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                            var a = t.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                            T.params.loop && 0 === a.length && (a = T.slides.eq(0), a.addClass(T.params.slideNextClass));
                            var r = t.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                            if (T.params.loop && 0 === r.length && (r = T.slides.eq( - 1), r.addClass(T.params.slidePrevClass)), s.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), r.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
                                var i, n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                                if (T.params.loop ? (i = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), i > T.slides.length - 1 - 2 * T.loopedSlides && (i -= T.slides.length - 2 * T.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== T.params.paginationType && (i = n + i)) : i = void 0 !== T.snapIndex ? T.snapIndex: T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function() {
                                    e(this).index() === i && e(this).addClass(T.params.bulletActiveClass)
                                }) : T.bullets.eq(i).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(i + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)), "progress" === T.params.paginationType) {
                                    var o = (i + 1) / n,
                                    l = o,
                                    p = 1;
                                    T.isHorizontal() || (p = o, l = 1),
                                    T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                                }
                                "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, i + 1, n)), T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                            }
                            T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
                        },
                        T.updatePagination = function() {
                            if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                                var e = "";
                                if ("bullets" === T.params.paginationType) {
                                    for (var t = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, a = 0; a < t; a++) T.params.paginationBulletRender ? e += T.params.paginationBulletRender(T, a, T.params.bulletClass) : e += "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                                    T.paginationContainer.html(e),
                                    T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
                                    T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                                }
                                "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(e)),
                                "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(e)),
                                "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                            }
                        },
                        T.update = function(e) {
                            function t() {
                                T.rtl,
                                T.translate;
                                a = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
                                T.setWrapperTranslate(a),
                                T.updateActiveIndex(),
                                T.updateClasses()
                            }
                            if (T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), e) {
                                var a;
                                T.controller && T.controller.spline && (T.controller.spline = void 0),
                                T.params.freeMode ? (t(), T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || t()
                            } else T.params.autoHeight && T.updateAutoHeight()
                        },
                        T.onResize = function(e) {
                            T.params.breakpoints && T.setBreakpoint();
                            var t = T.params.allowSwipeToPrev,
                            a = T.params.allowSwipeToNext;
                            T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
                            T.updateContainerSize(),
                            T.updateSlidesSize(),
                            ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
                            T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                            T.controller && T.controller.spline && (T.controller.spline = void 0);
                            var r = !1;
                            if (T.params.freeMode) {
                                var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                                T.setWrapperTranslate(i),
                                T.updateActiveIndex(),
                                T.updateClasses(),
                                T.params.autoHeight && T.updateAutoHeight()
                            } else T.updateClasses(),
                            r = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                            T.params.lazyLoading && !r && T.lazy && T.lazy.load(),
                            T.params.allowSwipeToPrev = t,
                            T.params.allowSwipeToNext = a
                        },
                        T.touchEventsDesktop = {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        },
                        window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                            start: "pointerdown",
                            move: "pointermove",
                            end: "pointerup"
                        }: window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                            start: "MSPointerDown",
                            move: "MSPointerMove",
                            end: "MSPointerUp"
                        }),
                        T.touchEvents = {
                            start: T.support.touch || !T.params.simulateTouch ? "touchstart": T.touchEventsDesktop.start,
                            move: T.support.touch || !T.params.simulateTouch ? "touchmove": T.touchEventsDesktop.move,
                            end: T.support.touch || !T.params.simulateTouch ? "touchend": T.touchEventsDesktop.end
                        },
                        (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container: T.wrapper).addClass("swiper-wp8-" + T.params.direction),
                        T.initEvents = function(e) {
                            var t = e ? "off": "on",
                            a = e ? "removeEventListener": "addEventListener",
                            i = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
                            n = T.support.touch ? i: r,
                            o = !!T.params.nested;
                            if (T.browser.ie) i[a](T.touchEvents.start, T.onTouchStart, !1),
                            n[a](T.touchEvents.move, T.onTouchMove, o),
                            n[a](T.touchEvents.end, T.onTouchEnd, !1);
                            else {
                                if (T.support.touch) {
                                    var l = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    i[a](T.touchEvents.start, T.onTouchStart, l),
                                    i[a](T.touchEvents.move, T.onTouchMove, o),
                                    i[a](T.touchEvents.end, T.onTouchEnd, l)
                                } (s.simulateTouch && !T.device.ios && !T.device.android || s.simulateTouch && !T.support.touch && T.device.ios) && (i[a]("mousedown", T.onTouchStart, !1), r[a]("mousemove", T.onTouchMove, o), r[a]("mouseup", T.onTouchEnd, !1))
                            }
                            window[a]("resize", T.onResize),
                            T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[t]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[t]("keydown", T.a11y.onEnterKey)),
                            T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[t]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[t]("keydown", T.a11y.onEnterKey)),
                            T.params.pagination && T.params.paginationClickable && (T.paginationContainer[t]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[t]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
                            (T.params.preventClicks || T.params.preventClicksPropagation) && i[a]("click", T.preventClicks, !0)
                        },
                        T.attachEvents = function() {
                            T.initEvents()
                        },
                        T.detachEvents = function() {
                            T.initEvents(!0)
                        },
                        T.allowClick = !0,
                        T.preventClicks = function(e) {
                            T.allowClick || (T.params.preventClicks && e.preventDefault(), T.params.preventClicksPropagation && T.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                        },
                        T.onClickNext = function(e) {
                            e.preventDefault(),
                            T.isEnd && !T.params.loop || T.slideNext()
                        },
                        T.onClickPrev = function(e) {
                            e.preventDefault(),
                            T.isBeginning && !T.params.loop || T.slidePrev()
                        },
                        T.onClickIndex = function(t) {
                            t.preventDefault();
                            var a = e(this).index() * T.params.slidesPerGroup;
                            T.params.loop && (a += T.loopedSlides),
                            T.slideTo(a)
                        },
                        T.updateClickedSlide = function(t) {
                            var a = p(t, "." + T.params.slideClass),
                            r = !1;
                            if (a) for (var i = 0; i < T.slides.length; i++) T.slides[i] === a && (r = !0);
                            if (!a || !r) return T.clickedSlide = void 0,
                            void(T.clickedIndex = void 0);
                            if (T.clickedSlide = a, T.clickedIndex = e(a).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                                var s, n = T.clickedIndex;
                                if (T.params.loop) {
                                    if (T.animating) return;
                                    s = e(T.clickedSlide).attr("data-swiper-slide-index"),
                                    T.params.centeredSlides ? n < T.loopedSlides - T.params.slidesPerView / 2 || n > T.slides.length - T.loopedSlides + T.params.slidesPerView / 2 ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                        T.slideTo(n)
                                    },
                                    0)) : T.slideTo(n) : n > T.slides.length - T.params.slidesPerView ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                        T.slideTo(n)
                                    },
                                    0)) : T.slideTo(n)
                                } else T.slideTo(n)
                            }
                        };
                        var E, k, M, z, P, I, L, A, O, D, _ = "input, select, textarea, button, video",
                        B = Date.now(),
                        N = [];
                        T.animating = !1,
                        T.touches = {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        };
                        var H, G;
                        T.onTouchStart = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), (H = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
                                if (T.params.noSwiping && p(t, "." + T.params.noSwipingClass)) return void(T.allowClick = !0);
                                if (!T.params.swipeHandler || p(t, T.params.swipeHandler)) {
                                    var a = T.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX: t.pageX,
                                    i = T.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY: t.pageY;
                                    if (! (T.device.ios && T.params.iOSEdgeSwipeDetection && a <= T.params.iOSEdgeSwipeThreshold)) {
                                        if (E = !0, k = !1, M = !0, P = void 0, G = void 0, T.touches.startX = a, T.touches.startY = i, z = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (A = !1), "touchstart" !== t.type) {
                                            var s = !0;
                                            e(t.target).is(_) && (s = !1),
                                            r.activeElement && e(r.activeElement).is(_) && r.activeElement.blur(),
                                            s && t.preventDefault()
                                        }
                                        T.emit("onTouchStart", T, t)
                                    }
                                }
                            }
                        },
                        T.onTouchMove = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), !H || "mousemove" !== t.type) {
                                if (t.preventedByNestedSwiper) return T.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX: t.pageX,
                                void(T.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY: t.pageY);
                                if (T.params.onlyExternal) return T.allowClick = !1,
                                void(E && (T.touches.startX = T.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX: t.pageX, T.touches.startY = T.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY: t.pageY, z = Date.now()));
                                if (H && T.params.touchReleaseOnEdges && !T.params.loop) if (T.isHorizontal()) {
                                    if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return
                                } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;
                                if (H && r.activeElement && t.target === r.activeElement && e(t.target).is(_)) return k = !0,
                                void(T.allowClick = !1);
                                if (M && T.emit("onTouchMove", T, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                    if (T.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX: t.pageX, T.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY: t.pageY, void 0 === P) {
                                        var a;
                                        T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX !== T.touches.startX ? P = !1 : (a = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, P = T.isHorizontal() ? a > T.params.touchAngle: 90 - a > T.params.touchAngle)
                                    }
                                    if (P && T.emit("onTouchMoveOpposite", T, t), void 0 === G && T.browser.ieTouch && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (G = !0)), E) {
                                        if (P) return void(E = !1);
                                        if (G || !T.browser.ieTouch) {
                                            T.allowClick = !1,
                                            T.emit("onSliderMove", T, t),
                                            t.preventDefault(),
                                            T.params.touchMoveStopPropagation && !T.params.nested && t.stopPropagation(),
                                            k || (s.loop && T.fixLoop(), L = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), D = !1, !T.params.grabCursor || !0 !== T.params.allowSwipeToNext && !0 !== T.params.allowSwipeToPrev || T.setGrabCursor(!0)),
                                            k = !0;
                                            var i = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX: T.touches.currentY - T.touches.startY;
                                            i *= T.params.touchRatio,
                                            T.rtl && (i = -i),
                                            T.swipeDirection = i > 0 ? "prev": "next",
                                            I = i + L;
                                            var n = !0;
                                            if (i > 0 && I > T.minTranslate() ? (n = !1, T.params.resistance && (I = T.minTranslate() - 1 + Math.pow( - T.minTranslate() + L + i, T.params.resistanceRatio))) : i < 0 && I < T.maxTranslate() && (n = !1, T.params.resistance && (I = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - L - i, T.params.resistanceRatio))), n && (t.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && I < L && (I = L), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && I > L && (I = L), T.params.threshold > 0) {
                                                if (! (Math.abs(i) > T.params.threshold || A)) return void(I = L);
                                                if (!A) return A = !0,
                                                T.touches.startX = T.touches.currentX,
                                                T.touches.startY = T.touches.currentY,
                                                I = L,
                                                void(T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX: T.touches.currentY - T.touches.startY)
                                            }
                                            T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === N.length && N.push({
                                                position: T.touches[T.isHorizontal() ? "startX": "startY"],
                                                time: z
                                            }), N.push({
                                                position: T.touches[T.isHorizontal() ? "currentX": "currentY"],
                                                time: (new window.Date).getTime()
                                            })), T.updateProgress(I), T.setWrapperTranslate(I))
                                        }
                                    }
                                }
                            }
                        },
                        T.onTouchEnd = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), M && T.emit("onTouchEnd", T, t), M = !1, E) {
                                T.params.grabCursor && k && E && (!0 === T.params.allowSwipeToNext || !0 === T.params.allowSwipeToPrev) && T.setGrabCursor(!1);
                                var a = Date.now(),
                                r = a - z;
                                if (T.allowClick && (T.updateClickedSlide(t), T.emit("onTap", T, t), r < 300 && a - B > 300 && (O && clearTimeout(O), O = setTimeout(function() {
                                    T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(t.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, t))
                                },
                                300)), r < 300 && a - B < 300 && (O && clearTimeout(O), T.emit("onDoubleTap", T, t))), B = Date.now(), setTimeout(function() {
                                    T && (T.allowClick = !0)
                                },
                                0), !E || !k || !T.swipeDirection || 0 === T.touches.diff || I === L) return void(E = k = !1);
                                E = k = !1;
                                var i;
                                if (i = T.params.followFinger ? T.rtl ? T.translate: -T.translate: -I, T.params.freeMode) {
                                    if (i < -T.minTranslate()) return void T.slideTo(T.activeIndex);
                                    if (i > -T.maxTranslate()) return void(T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                                    if (T.params.freeModeMomentum) {
                                        if (N.length > 1) {
                                            var s = N.pop(),
                                            n = N.pop(),
                                            o = s.position - n.position,
                                            l = s.time - n.time;
                                            T.velocity = o / l,
                                            T.velocity = T.velocity / 2,
                                            Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
                                            (l > 150 || (new window.Date).getTime() - s.time > 300) && (T.velocity = 0)
                                        } else T.velocity = 0;
                                        T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
                                        N.length = 0;
                                        var p = 1e3 * T.params.freeModeMomentumRatio,
                                        c = T.velocity * p,
                                        u = T.translate + c;
                                        T.rtl && (u = -u);
                                        var d, h = !1,
                                        m = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                                        if (u < T.maxTranslate()) T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -m && (u = T.maxTranslate() - m), d = T.maxTranslate(), h = !0, D = !0) : u = T.maxTranslate();
                                        else if (u > T.minTranslate()) T.params.freeModeMomentumBounce ? (u - T.minTranslate() > m && (u = T.minTranslate() + m), d = T.minTranslate(), h = !0, D = !0) : u = T.minTranslate();
                                        else if (T.params.freeModeSticky) {
                                            var f, g = 0;
                                            for (g = 0; g < T.snapGrid.length; g += 1) if (T.snapGrid[g] > -u) {
                                                f = g;
                                                break
                                            }
                                            u = Math.abs(T.snapGrid[f] - u) < Math.abs(T.snapGrid[f - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[f] : T.snapGrid[f - 1],
                                            T.rtl || (u = -u)
                                        }
                                        if (0 !== T.velocity) p = T.rtl ? Math.abs(( - u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                                        else if (T.params.freeModeSticky) return void T.slideReset();
                                        T.params.freeModeMomentumBounce && h ? (T.updateProgress(d), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function() {
                                            T && D && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(d), T.wrapper.transitionEnd(function() {
                                                T && T.onTransitionEnd()
                                            }))
                                        })) : T.velocity ? (T.updateProgress(u), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
                                            T && T.onTransitionEnd()
                                        }))) : T.updateProgress(u),
                                        T.updateActiveIndex()
                                    }
                                    return void((!T.params.freeModeMomentum || r >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()))
                                }
                                var v, y = 0,
                                w = T.slidesSizesGrid[0];
                                for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup) void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (y = v, w = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (y = v, w = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                                var x = (i - T.slidesGrid[y]) / w;
                                if (r > T.params.longSwipesMs) {
                                    if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);
                                    "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y)),
                                    "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y))
                                } else {
                                    if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);
                                    "next" === T.swipeDirection && T.slideTo(y + T.params.slidesPerGroup),
                                    "prev" === T.swipeDirection && T.slideTo(y)
                                }
                            }
                        },
                        T._slideTo = function(e, t) {
                            return T.slideTo(e, t, !0, !0)
                        },
                        T.slideTo = function(e, t, a, r) {
                            void 0 === a && (a = !0),
                            void 0 === e && (e = 0),
                            e < 0 && (e = 0),
                            T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
                            T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                            var i = -T.snapGrid[T.snapIndex];
                            if (T.params.autoplay && T.autoplaying && (r || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(t) : T.stopAutoplay()), T.updateProgress(i), T.params.normalizeSlideIndex) for (var s = 0; s < T.slidesGrid.length; s++) - Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[s]) && (e = s);
                            return ! (!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e) && (void 0 === t && (t = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = e, T.updateRealIndex(), T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(i), !1) : (T.updateClasses(), T.onTransitionStart(a), 0 === t || T.browser.lteIE9 ? (T.setWrapperTranslate(i), T.setWrapperTransition(0), T.onTransitionEnd(a)) : (T.setWrapperTranslate(i), T.setWrapperTransition(t), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
                                T && T.onTransitionEnd(a)
                            }))), !0)))
                        },
                        T.onTransitionStart = function(e) {
                            void 0 === e && (e = !0),
                            T.params.autoHeight && T.updateAutoHeight(),
                            T.lazy && T.lazy.onTransitionStart(),
                            e && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
                        },
                        T.onTransitionEnd = function(e) {
                            T.animating = !1,
                            T.setWrapperTransition(0),
                            void 0 === e && (e = !0),
                            T.lazy && T.lazy.onTransitionEnd(),
                            e && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
                            T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
                            T.params.hashnav && T.hashnav && T.hashnav.setHash()
                        },
                        T.slideNext = function(e, t, a) {
                            if (T.params.loop) {
                                if (T.animating) return ! 1;
                                T.fixLoop();
                                T.container[0].clientLeft;
                                return T.slideTo(T.activeIndex + T.params.slidesPerGroup, t, e, a)
                            }
                            return T.slideTo(T.activeIndex + T.params.slidesPerGroup, t, e, a)
                        },
                        T._slideNext = function(e) {
                            return T.slideNext(!0, e, !0)
                        },
                        T.slidePrev = function(e, t, a) {
                            if (T.params.loop) {
                                if (T.animating) return ! 1;
                                T.fixLoop();
                                T.container[0].clientLeft;
                                return T.slideTo(T.activeIndex - 1, t, e, a)
                            }
                            return T.slideTo(T.activeIndex - 1, t, e, a)
                        },
                        T._slidePrev = function(e) {
                            return T.slidePrev(!0, e, !0)
                        },
                        T.slideReset = function(e, t, a) {
                            return T.slideTo(T.activeIndex, t, e)
                        },
                        T.disableTouchControl = function() {
                            return T.params.onlyExternal = !0,
                            !0
                        },
                        T.enableTouchControl = function() {
                            return T.params.onlyExternal = !1,
                            !0
                        },
                        T.setWrapperTransition = function(e, t) {
                            T.wrapper.transition(e),
                            "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
                            T.params.parallax && T.parallax && T.parallax.setTransition(e),
                            T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
                            T.params.control && T.controller && T.controller.setTransition(e, t),
                            T.emit("onSetTransition", T, e)
                        },
                        T.setWrapperTranslate = function(e, t, a) {
                            var r = 0,
                            i = 0;
                            T.isHorizontal() ? r = T.rtl ? -e: e: i = e,
                            T.params.roundLengths && (r = o(r), i = o(i)),
                            T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + r + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + r + "px, " + i + "px)")),
                            T.translate = T.isHorizontal() ? r: i;
                            var s, n = T.maxTranslate() - T.minTranslate();
                            s = 0 === n ? 0 : (e - T.minTranslate()) / n,
                            s !== T.progress && T.updateProgress(e),
                            t && T.updateActiveIndex(),
                            "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
                            T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
                            T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
                            T.params.control && T.controller && T.controller.setTranslate(T.translate, a),
                            T.emit("onSetTranslate", T, T.translate)
                        },
                        T.getTranslate = function(e, t) {
                            var a, r, i, s;
                            return void 0 === t && (t = "x"),
                            T.params.virtualTranslate ? T.rtl ? -T.translate: T.translate: (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                                return e.replace(",", ".")
                            }).join(", ")), s = new window.WebKitCSSMatrix("none" === r ? "": r)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = s.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? s.m41: 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (r = window.WebKitCSSMatrix ? s.m42: 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), T.rtl && r && (r = -r), r || 0)
                        },
                        T.getWrapperTranslate = function(e) {
                            return void 0 === e && (e = T.isHorizontal() ? "x": "y"),
                            T.getTranslate(T.wrapper[0], e)
                        },
                        T.observers = [],
                        T.initObservers = function() {
                            if (T.params.observeParents) for (var e = T.container.parents(), t = 0; t < e.length; t++) c(e[t]);
                            c(T.container[0], {
                                childList: !1
                            }),
                            c(T.wrapper[0], {
                                attributes: !1
                            })
                        },
                        T.disconnectObservers = function() {
                            for (var e = 0; e < T.observers.length; e++) T.observers[e].disconnect();
                            T.observers = []
                        },
                        T.createLoop = function() {
                            T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                            var t = T.wrapper.children("." + T.params.slideClass);
                            "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = t.length),
                            T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
                            T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
                            T.loopedSlides > t.length && (T.loopedSlides = t.length);
                            var a, r = [],
                            i = [];
                            for (t.each(function(a, s) {
                                var n = e(this);
                                a < T.loopedSlides && i.push(s),
                                a < t.length && a >= t.length - T.loopedSlides && r.push(s),
                                n.attr("data-swiper-slide-index", a)
                            }), a = 0; a < i.length; a++) T.wrapper.append(e(i[a].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                            for (a = r.length - 1; a >= 0; a--) T.wrapper.prepend(e(r[a].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
                        },
                        T.destroyLoop = function() {
                            T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
                            T.slides.removeAttr("data-swiper-slide-index")
                        },
                        T.reLoop = function(e) {
                            var t = T.activeIndex - T.loopedSlides;
                            T.destroyLoop(),
                            T.createLoop(),
                            T.updateSlidesSize(),
                            e && T.slideTo(t + T.loopedSlides, 0, !1)
                        },
                        T.fixLoop = function() {
                            var e;
                            T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex, e += T.loopedSlides, T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides, e += T.loopedSlides, T.slideTo(e, 0, !1, !0))
                        },
                        T.appendSlide = function(e) {
                            if (T.params.loop && T.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && T.wrapper.append(e[t]);
                            else T.wrapper.append(e);
                            T.params.loop && T.createLoop(),
                            T.params.observer && T.support.observer || T.update(!0)
                        },
                        T.prependSlide = function(e) {
                            T.params.loop && T.destroyLoop();
                            var t = T.activeIndex + 1;
                            if ("object" == typeof e && e.length) {
                                for (var a = 0; a < e.length; a++) e[a] && T.wrapper.prepend(e[a]);
                                t = T.activeIndex + e.length
                            } else T.wrapper.prepend(e);
                            T.params.loop && T.createLoop(),
                            T.params.observer && T.support.observer || T.update(!0),
                            T.slideTo(t, 0, !1)
                        },
                        T.removeSlide = function(e) {
                            T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));
                            var t, a = T.activeIndex;
                            if ("object" == typeof e && e.length) {
                                for (var r = 0; r < e.length; r++) t = e[r],
                                T.slides[t] && T.slides.eq(t).remove(),
                                t < a && a--;
                                a = Math.max(a, 0)
                            } else t = e,
                            T.slides[t] && T.slides.eq(t).remove(),
                            t < a && a--,
                            a = Math.max(a, 0);
                            T.params.loop && T.createLoop(),
                            T.params.observer && T.support.observer || T.update(!0),
                            T.params.loop ? T.slideTo(a + T.loopedSlides, 0, !1) : T.slideTo(a, 0, !1)
                        },
                        T.removeAllSlides = function() {
                            for (var e = [], t = 0; t < T.slides.length; t++) e.push(t);
                            T.removeSlide(e)
                        },
                        T.effects = {
                            fade: {
                                setTranslate: function() {
                                    for (var e = 0; e < T.slides.length; e++) {
                                        var t = T.slides.eq(e),
                                        a = t[0].swiperSlideOffset,
                                        r = -a;
                                        T.params.virtualTranslate || (r -= T.translate);
                                        var i = 0;
                                        T.isHorizontal() || (i = r, r = 0);
                                        var s = T.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                        t.css({
                                            opacity: s
                                        }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                                    }
                                },
                                setTransition: function(e) {
                                    if (T.slides.transition(e), T.params.virtualTranslate && 0 !== e) {
                                        var t = !1;
                                        T.slides.transitionEnd(function() {
                                            if (!t && T) {
                                                t = !0,
                                                T.animating = !1;
                                                for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) T.wrapper.trigger(e[a])
                                            }
                                        })
                                    }
                                }
                            },
                            flip: {
                                setTranslate: function() {
                                    for (var t = 0; t < T.slides.length; t++) {
                                        var a = T.slides.eq(t),
                                        r = a[0].progress;
                                        T.params.flip.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                                        var i = a[0].swiperSlideOffset,
                                        s = -180 * r,
                                        n = s,
                                        o = 0,
                                        l = -i,
                                        p = 0;
                                        if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + T.slides.length, T.params.flip.slideShadows) {
                                            var c = T.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                            u = T.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                            0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left": "top") + '"></div>'), a.append(c)),
                                            0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right": "bottom") + '"></div>'), a.append(u)),
                                            c.length && (c[0].style.opacity = Math.max( - r, 0)),
                                            u.length && (u[0].style.opacity = Math.max(r, 0))
                                        }
                                        a.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                                    }
                                },
                                setTransition: function(t) {
                                    if (T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), T.params.virtualTranslate && 0 !== t) {
                                        var a = !1;
                                        T.slides.eq(T.activeIndex).transitionEnd(function() {
                                            if (!a && T && e(this).hasClass(T.params.slideActiveClass)) {
                                                a = !0,
                                                T.animating = !1;
                                                for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < t.length; r++) T.wrapper.trigger(t[r])
                                            }
                                        })
                                    }
                                }
                            },
                            cube: {
                                setTranslate: function() {
                                    var t, a = 0;
                                    T.params.cube.shadow && (T.isHorizontal() ? (t = T.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(t)), t.css({
                                        height: T.width + "px"
                                    })) : (t = T.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), T.container.append(t))));
                                    for (var r = 0; r < T.slides.length; r++) {
                                        var i = T.slides.eq(r),
                                        s = 90 * r,
                                        n = Math.floor(s / 360);
                                        T.rtl && (s = -s, n = Math.floor( - s / 360));
                                        var o = Math.max(Math.min(i[0].progress, 1), -1),
                                        l = 0,
                                        p = 0,
                                        c = 0;
                                        r % 4 == 0 ? (l = 4 * -n * T.size, c = 0) : (r - 1) % 4 == 0 ? (l = 0, c = 4 * -n * T.size) : (r - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size, c = T.size) : (r - 3) % 4 == 0 && (l = -T.size, c = 3 * T.size + 4 * T.size * n),
                                        T.rtl && (l = -l),
                                        T.isHorizontal() || (p = l, l = 0);
                                        var u = "rotateX(" + (T.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (T.isHorizontal() ? s: 0) + "deg) translate3d(" + l + "px, " + p + "px, " + c + "px)";
                                        if (o <= 1 && o > -1 && (a = 90 * r + 90 * o, T.rtl && (a = 90 * -r - 90 * o)), i.transform(u), T.params.cube.slideShadows) {
                                            var d = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            h = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                            0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left": "top") + '"></div>'), i.append(d)),
                                            0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right": "bottom") + '"></div>'), i.append(h)),
                                            d.length && (d[0].style.opacity = Math.max( - o, 0)),
                                            h.length && (h[0].style.opacity = Math.max(o, 0))
                                        }
                                    }
                                    if (T.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + T.size / 2 + "px"
                                    }), T.params.cube.shadow) if (T.isHorizontal()) t.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                                    else {
                                        var m = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                        f = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
                                        g = T.params.cube.shadowScale,
                                        v = T.params.cube.shadowScale / f,
                                        y = T.params.cube.shadowOffset;
                                        t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + y) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                                    }
                                    var w = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                                    T.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (T.isHorizontal() ? 0 : a) + "deg) rotateY(" + (T.isHorizontal() ? -a: 0) + "deg)")
                                },
                                setTransition: function(e) {
                                    T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                    T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                                }
                            },
                            coverflow: {
                                setTranslate: function() {
                                    for (var t = T.translate,
                                    a = T.isHorizontal() ? -t + T.width / 2 : -t + T.height / 2, r = T.isHorizontal() ? T.params.coverflow.rotate: -T.params.coverflow.rotate, i = T.params.coverflow.depth, s = 0, n = T.slides.length; s < n; s++) {
                                        var o = T.slides.eq(s),
                                        l = T.slidesSizesGrid[s],
                                        p = o[0].swiperSlideOffset,
                                        c = (a - p - l / 2) / l * T.params.coverflow.modifier,
                                        u = T.isHorizontal() ? r * c: 0,
                                        d = T.isHorizontal() ? 0 : r * c,
                                        h = -i * Math.abs(c),
                                        m = T.isHorizontal() ? 0 : T.params.coverflow.stretch * c,
                                        f = T.isHorizontal() ? T.params.coverflow.stretch * c: 0;
                                        Math.abs(f) < .001 && (f = 0),
                                        Math.abs(m) < .001 && (m = 0),
                                        Math.abs(h) < .001 && (h = 0),
                                        Math.abs(u) < .001 && (u = 0),
                                        Math.abs(d) < .001 && (d = 0);
                                        var g = "translate3d(" + f + "px," + m + "px," + h + "px)  rotateX(" + d + "deg) rotateY(" + u + "deg)";
                                        if (o.transform(g), o[0].style.zIndex = 1 - Math.abs(Math.round(c)), T.params.coverflow.slideShadows) {
                                            var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                            y = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                            0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left": "top") + '"></div>'), o.append(v)),
                                            0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right": "bottom") + '"></div>'), o.append(y)),
                                            v.length && (v[0].style.opacity = c > 0 ? c: 0),
                                            y.length && (y[0].style.opacity = -c > 0 ? -c: 0)
                                        }
                                    }
                                    if (T.browser.ie) {
                                        T.wrapper[0].style.perspectiveOrigin = a + "px 50%"
                                    }
                                },
                                setTransition: function(e) {
                                    T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                                }
                            }
                        },
                        T.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function(t, a) {
                                if (void 0 !== t && (void 0 === a && (a = !0), 0 !== T.slides.length)) {
                                    var r = T.slides.eq(t),
                                    i = r.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")"); ! r.hasClass(T.params.lazyLoadingClass) || r.hasClass(T.params.lazyStatusLoadedClass) || r.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(r[0])),
                                    0 !== i.length && i.each(function() {
                                        var t = e(this);
                                        t.addClass(T.params.lazyStatusLoadingClass);
                                        var i = t.attr("data-background"),
                                        s = t.attr("data-src"),
                                        n = t.attr("data-srcset"),
                                        o = t.attr("data-sizes");
                                        T.loadImage(t[0], s || i, n, o, !1,
                                        function() {
                                            if (i ? (t.css("background-image", 'url("' + i + '")'), t.removeAttr("data-background")) : (n && (t.attr("srcset", n), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), r.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && a) {
                                                var e = r.attr("data-swiper-slide-index");
                                                if (r.hasClass(T.params.slideDuplicateClass)) {
                                                    var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                                    T.lazy.loadImageInSlide(l.index(), !1)
                                                } else {
                                                    var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    T.lazy.loadImageInSlide(p.index(), !1)
                                                }
                                            }
                                            T.emit("onLazyImageReady", T, r[0], t[0])
                                        }),
                                        T.emit("onLazyImageLoad", T, r[0], t[0])
                                    })
                                }
                            },
                            load: function() {
                                var t, a = T.params.slidesPerView;
                                if ("auto" === a && (a = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                                    T.lazy.loadImageInSlide(e(this).index())
                                });
                                else if (a > 1) for (t = T.activeIndex; t < T.activeIndex + a; t++) T.slides[t] && T.lazy.loadImageInSlide(t);
                                else T.lazy.loadImageInSlide(T.activeIndex);
                                if (T.params.lazyLoadingInPrevNext) if (a > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                                    var r = T.params.lazyLoadingInPrevNextAmount,
                                    i = a,
                                    s = Math.min(T.activeIndex + i + Math.max(r, i), T.slides.length),
                                    n = Math.max(T.activeIndex - Math.max(i, r), 0);
                                    for (t = T.activeIndex + a; t < s; t++) T.slides[t] && T.lazy.loadImageInSlide(t);
                                    for (t = n; t < T.activeIndex; t++) T.slides[t] && T.lazy.loadImageInSlide(t)
                                } else {
                                    var o = T.wrapper.children("." + T.params.slideNextClass);
                                    o.length > 0 && T.lazy.loadImageInSlide(o.index());
                                    var l = T.wrapper.children("." + T.params.slidePrevClass);
                                    l.length > 0 && T.lazy.loadImageInSlide(l.index())
                                }
                            },
                            onTransitionStart: function() {
                                T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                            },
                            onTransitionEnd: function() {
                                T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                            }
                        },
                        T.scrollbar = {
                            isTouched: !1,
                            setDragPosition: function(e) {
                                var t = T.scrollbar,
                                a = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX || e.clientX: "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY || e.clientY,
                                r = a - t.track.offset()[T.isHorizontal() ? "left": "top"] - t.dragSize / 2,
                                i = -T.minTranslate() * t.moveDivider,
                                s = -T.maxTranslate() * t.moveDivider;
                                r < i ? r = i: r > s && (r = s),
                                r = -r / t.moveDivider,
                                T.updateProgress(r),
                                T.setWrapperTranslate(r, !0)
                            },
                            dragStart: function(e) {
                                var t = T.scrollbar;
                                t.isTouched = !0,
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.setDragPosition(e),
                                clearTimeout(t.dragTimeout),
                                t.track.transition(0),
                                T.params.scrollbarHide && t.track.css("opacity", 1),
                                T.wrapper.transition(100),
                                t.drag.transition(100),
                                T.emit("onScrollbarDragStart", T)
                            },
                            dragMove: function(e) {
                                var t = T.scrollbar;
                                t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), T.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), T.emit("onScrollbarDragMove", T))
                            },
                            dragEnd: function(e) {
                                var t = T.scrollbar;
                                t.isTouched && (t.isTouched = !1, T.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                    t.track.css("opacity", 0),
                                    t.track.transition(400)
                                },
                                1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset())
                            },
                            draggableEvents: function() {
                                return ! 1 !== T.params.simulateTouch || T.support.touch ? T.touchEvents: T.touchEventsDesktop
                            } (),
                            enableDraggable: function() {
                                var t = T.scrollbar,
                                a = T.support.touch ? t.track: r;
                                e(t.track).on(t.draggableEvents.start, t.dragStart),
                                e(a).on(t.draggableEvents.move, t.dragMove),
                                e(a).on(t.draggableEvents.end, t.dragEnd)
                            },
                            disableDraggable: function() {
                                var t = T.scrollbar,
                                a = T.support.touch ? t.track: r;
                                e(t.track).off(T.draggableEvents.start, t.dragStart),
                                e(a).off(T.draggableEvents.move, t.dragMove),
                                e(a).off(T.draggableEvents.end, t.dragEnd)
                            },
                            set: function() {
                                if (T.params.scrollbar) {
                                    var t = T.scrollbar;
                                    t.track = e(T.params.scrollbar),
                                    T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && t.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (t.track = T.container.find(T.params.scrollbar)),
                                    t.drag = t.track.find(".swiper-scrollbar-drag"),
                                    0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)),
                                    t.drag[0].style.width = "",
                                    t.drag[0].style.height = "",
                                    t.trackSize = T.isHorizontal() ? t.track[0].offsetWidth: t.track[0].offsetHeight,
                                    t.divider = T.size / T.virtualSize,
                                    t.moveDivider = t.divider * (t.trackSize / T.size),
                                    t.dragSize = t.trackSize * t.divider,
                                    T.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px": t.drag[0].style.height = t.dragSize + "px",
                                    t.divider >= 1 ? t.track[0].style.display = "none": t.track[0].style.display = "",
                                    T.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                }
                            },
                            setTranslate: function() {
                                if (T.params.scrollbar) {
                                    var e, t = T.scrollbar,
                                    a = (T.translate, t.dragSize);
                                    e = (t.trackSize - t.dragSize) * T.progress,
                                    T.rtl && T.isHorizontal() ? (e = -e, e > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e)) : e < 0 ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e),
                                    T.isHorizontal() ? (T.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (T.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"),
                                    T.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                        t.track[0].style.opacity = 0,
                                        t.track.transition(400)
                                    },
                                    1e3))
                                }
                            },
                            setTransition: function(e) {
                                T.params.scrollbar && T.scrollbar.drag.transition(e)
                            }
                        },
                        T.controller = {
                            LinearSpline: function(e, t) {
                                this.x = e,
                                this.y = t,
                                this.lastIndex = e.length - 1;
                                var a, r;
                                this.x.length;
                                this.interpolate = function(e) {
                                    return e ? (r = i(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                                };
                                var i = function() {
                                    var e, t, a;
                                    return function(r, i) {
                                        for (t = -1, e = r.length; e - t > 1;) r[a = e + t >> 1] <= i ? t = a: e = a;
                                        return e
                                    }
                                } ()
                            },
                            getInterpolateFunction: function(e) {
                                T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid))
                            },
                            setTranslate: function(e, a) {
                                function r(t) {
                                    e = t.rtl && "horizontal" === t.params.direction ? -T.translate: T.translate,
                                    "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(t), s = -T.controller.spline.interpolate( - e)),
                                    s && "container" !== T.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (T.maxTranslate() - T.minTranslate()), s = (e - T.minTranslate()) * i + t.minTranslate()),
                                    T.params.controlInverse && (s = t.maxTranslate() - s),
                                    t.updateProgress(s),
                                    t.setWrapperTranslate(s, !1, T),
                                    t.updateActiveIndex()
                                }
                                var i, s, n = T.params.control;
                                if (T.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && r(n[o]);
                                else n instanceof t && a !== n && r(n)
                            },
                            setTransition: function(e, a) {
                                function r(t) {
                                    t.setWrapperTransition(e, T),
                                    0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                        s && (t.params.loop && "slide" === T.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                                    }))
                                }
                                var i, s = T.params.control;
                                if (T.isArray(s)) for (i = 0; i < s.length; i++) s[i] !== a && s[i] instanceof t && r(s[i]);
                                else s instanceof t && a !== s && r(s)
                            }
                        },
                        T.hashnav = {
                            onHashCange: function(e, t) {
                                var a = r.location.hash.replace("#", "");
                                a !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + a + '"]').index())
                            },
                            attachEvents: function(t) {
                                var a = t ? "off": "on";
                                e(window)[a]("hashchange", T.hashnav.onHashCange)
                            },
                            setHash: function() {
                                if (T.hashnav.initialized && T.params.hashnav) if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                                else {
                                    var e = T.slides.eq(T.activeIndex),
                                    t = e.attr("data-hash") || e.attr("data-history");
                                    r.location.hash = t || ""
                                }
                            },
                            init: function() {
                                if (T.params.hashnav && !T.params.history) {
                                    T.hashnav.initialized = !0;
                                    var e = r.location.hash.replace("#", "");
                                    if (e) {
                                        for (var t = 0,
                                        a = T.slides.length; t < a; t++) {
                                            var i = T.slides.eq(t);
                                            if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(T.params.slideDuplicateClass)) {
                                                var s = i.index();
                                                T.slideTo(s, 0, T.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                        T.params.hashnavWatchState && T.hashnav.attachEvents()
                                    }
                                }
                            },
                            destroy: function() {
                                T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                            }
                        },
                        T.history = {
                            init: function() {
                                if (T.params.history) {
                                    if (!window.history || !window.history.pushState) return T.params.history = !1,
                                    void(T.params.hashnav = !0);
                                    T.history.initialized = !0,
                                    this.paths = this.getPathValues(),
                                    (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                                }
                            },
                            setHistoryPopState: function() {
                                T.history.paths = T.history.getPathValues(),
                                T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                            },
                            getPathValues: function() {
                                var e = window.location.pathname.slice(1).split("/"),
                                t = e.length;
                                return {
                                    key: e[t - 2],
                                    value: e[t - 1]
                                }
                            },
                            setHistory: function(e, t) {
                                if (T.history.initialized && T.params.history) {
                                    var a = T.slides.eq(t),
                                    r = this.slugify(a.attr("data-history"));
                                    window.location.pathname.includes(e) || (r = e + "/" + r),
                                    T.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r)
                                }
                            },
                            slugify: function(e) {
                                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                            },
                            scrollToSlide: function(e, t, a) {
                                if (t) for (var r = 0,
                                i = T.slides.length; r < i; r++) {
                                    var s = T.slides.eq(r),
                                    n = this.slugify(s.attr("data-history"));
                                    if (n === t && !s.hasClass(T.params.slideDuplicateClass)) {
                                        var o = s.index();
                                        T.slideTo(o, e, a)
                                    }
                                } else T.slideTo(0, e, a)
                            }
                        },
                        T.disableKeyboardControl = function() {
                            T.params.keyboardControl = !1,
                            e(r).off("keydown", u)
                        },
                        T.enableKeyboardControl = function() {
                            T.params.keyboardControl = !0,
                            e(r).on("keydown", u)
                        },
                        T.mousewheel = {
                            event: !1,
                            lastScrollTime: (new window.Date).getTime()
                        },
                        T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll": function() {
                            var e = "onwheel" in r;
                            if (!e) {
                                var t = r.createElement("div");
                                t.setAttribute("onwheel", "return;"),
                                e = "function" == typeof t.onwheel
                            }
                            return ! e && r.implementation && r.implementation.hasFeature && !0 !== r.implementation.hasFeature("", "") && (e = r.implementation.hasFeature("Events.wheel", "3.0")),
                            e
                        } () ? "wheel": "mousewheel"),
                        T.disableMousewheelControl = function() {
                            if (!T.mousewheel.event) return ! 1;
                            var t = T.container;
                            return "container" !== T.params.mousewheelEventsTarged && (t = e(T.params.mousewheelEventsTarged)),
                            t.off(T.mousewheel.event, d),
                            !0
                        },
                        T.enableMousewheelControl = function() {
                            if (!T.mousewheel.event) return ! 1;
                            var t = T.container;
                            return "container" !== T.params.mousewheelEventsTarged && (t = e(T.params.mousewheelEventsTarged)),
                            t.on(T.mousewheel.event, d),
                            !0
                        },
                        T.parallax = {
                            setTranslate: function() {
                                T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    m(this, T.progress)
                                }),
                                T.slides.each(function() {
                                    var t = e(this);
                                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                        m(this, Math.min(Math.max(t[0].progress, -1), 1))
                                    })
                                })
                            },
                            setTransition: function(t) {
                                void 0 === t && (t = T.params.speed),
                                T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var a = e(this),
                                    r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                                    0 === t && (r = 0),
                                    a.transition(r)
                                })
                            }
                        },
                        T.zoom = {
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                slide: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                image: void 0,
                                imageWrap: void 0,
                                zoomMax: T.params.zoomMax
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            },
                            getDistanceBetweenTouches: function(e) {
                                if (e.targetTouches.length < 2) return 1;
                                var t = e.targetTouches[0].pageX,
                                a = e.targetTouches[0].pageY,
                                r = e.targetTouches[1].pageX,
                                i = e.targetTouches[1].pageY;
                                return Math.sqrt(Math.pow(r - t, 2) + Math.pow(i - a, 2))
                            },
                            onGestureStart: function(t) {
                                var a = T.zoom;
                                if (!T.support.gestures) {
                                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                                    a.gesture.scaleStart = a.getDistanceBetweenTouches(t)
                                }
                                if (! (a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = e(this), 0 === a.gesture.slide.length && (a.gesture.slide = T.slides.eq(T.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + T.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== a.gesture.imageWrap.length))) return void(a.gesture.image = void 0);
                                a.gesture.image.transition(0),
                                a.isScaling = !0
                            },
                            onGestureChange: function(e) {
                                var t = T.zoom;
                                if (!T.support.gestures) {
                                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                    t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                                }
                                t.gesture.image && 0 !== t.gesture.image.length && (T.support.gestures ? t.scale = e.scale * t.currentScale: t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < T.params.zoomMin && (t.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                            },
                            onGestureEnd: function(e) {
                                var t = T.zoom; (T.support.gestures || "touchend" === e.type) && t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), T.params.zoomMin), t.gesture.image.transition(T.params.speed).transform("scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                            },
                            onTouchStart: function(e, t) {
                                var a = e.zoom;
                                a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === e.device.os && t.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX: t.pageX, a.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY: t.pageY))
                            },
                            onTouchMove: function(e) {
                                var t = T.zoom;
                                if (t.gesture.image && 0 !== t.gesture.image.length && (T.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                                    t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = T.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = T.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0));
                                    var a = t.image.width * t.scale,
                                    r = t.image.height * t.scale;
                                    if (! (a < t.gesture.slideWidth && r < t.gesture.slideHeight)) {
                                        if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - a / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, !t.image.isMoved && !t.isScaling) {
                                            if (T.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                            if (!T.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                        }
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        t.image.isMoved = !0,
                                        t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                                        t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                                        t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                                        t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                                        t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                                        t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                                        t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                        t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                        t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                                        t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                                        t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                                        Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                                        Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                                        t.velocity.prevPositionX = t.image.touchesCurrent.x,
                                        t.velocity.prevPositionY = t.image.touchesCurrent.y,
                                        t.velocity.prevTime = Date.now(),
                                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                    }
                                }
                            },
                            onTouchEnd: function(e, t) {
                                var a = e.zoom;
                                if (a.gesture.image && 0 !== a.gesture.image.length) {
                                    if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1,
                                    void(a.image.isMoved = !1);
                                    a.image.isTouched = !1,
                                    a.image.isMoved = !1;
                                    var r = 300,
                                    i = 300,
                                    s = a.velocity.x * r,
                                    n = a.image.currentX + s,
                                    o = a.velocity.y * i,
                                    l = a.image.currentY + o;
                                    0 !== a.velocity.x && (r = Math.abs((n - a.image.currentX) / a.velocity.x)),
                                    0 !== a.velocity.y && (i = Math.abs((l - a.image.currentY) / a.velocity.y));
                                    var p = Math.max(r, i);
                                    a.image.currentX = n,
                                    a.image.currentY = l;
                                    var c = a.image.width * a.scale,
                                    u = a.image.height * a.scale;
                                    a.image.minX = Math.min(a.gesture.slideWidth / 2 - c / 2, 0),
                                    a.image.maxX = -a.image.minX,
                                    a.image.minY = Math.min(a.gesture.slideHeight / 2 - u / 2, 0),
                                    a.image.maxY = -a.image.minY,
                                    a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX),
                                    a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY),
                                    a.gesture.imageWrap.transition(p).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                                }
                            },
                            onTransitionEnd: function(e) {
                                var t = e.zoom;
                                t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                            },
                            toggleZoom: function(t, a) {
                                var r = t.zoom;
                                if (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.gesture.image = r.gesture.slide.find("img, svg, canvas"), r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)), r.gesture.image && 0 !== r.gesture.image.length) {
                                    var i, s, n, o, l, p, c, u, d, h, m, f, g, v, y, w, x, b;
                                    void 0 === r.image.touchesStart.x && a ? (i = "touchend" === a.type ? a.changedTouches[0].pageX: a.pageX, s = "touchend" === a.type ? a.changedTouches[0].pageY: a.pageY) : (i = r.image.touchesStart.x, s = r.image.touchesStart.y),
                                    r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1, r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, a ? (x = r.gesture.slide[0].offsetWidth, b = r.gesture.slide[0].offsetHeight, n = r.gesture.slide.offset().left, o = r.gesture.slide.offset().top, l = n + x / 2 - i, p = o + b / 2 - s, d = r.gesture.image[0].offsetWidth, h = r.gesture.image[0].offsetHeight, m = d * r.scale, f = h * r.scale, g = Math.min(x / 2 - m / 2, 0), v = Math.min(b / 2 - f / 2, 0), y = -g, w = -v, c = l * r.scale, u = p * r.scale, c < g && (c = g), c > y && (c = y), u < v && (u = v), u > w && (u = w)) : (c = 0, u = 0), r.gesture.imageWrap.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"), r.gesture.image.transition(300).transform("scale(" + r.scale + ")"))
                                }
                            },
                            attachEvents: function(t) {
                                var a = t ? "off": "on";
                                if (T.params.zoom) {
                                    var r = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    });
                                    T.support.gestures ? (T.slides[a]("gesturestart", T.zoom.onGestureStart, r), T.slides[a]("gesturechange", T.zoom.onGestureChange, r), T.slides[a]("gestureend", T.zoom.onGestureEnd, r)) : "touchstart" === T.touchEvents.start && (T.slides[a](T.touchEvents.start, T.zoom.onGestureStart, r), T.slides[a](T.touchEvents.move, T.zoom.onGestureChange, r), T.slides[a](T.touchEvents.end, T.zoom.onGestureEnd, r)),
                                    T[a]("touchStart", T.zoom.onTouchStart),
                                    T.slides.each(function(t, r) {
                                        e(r).find("." + T.params.zoomContainerClass).length > 0 && e(r)[a](T.touchEvents.move, T.zoom.onTouchMove)
                                    }),
                                    T[a]("touchEnd", T.zoom.onTouchEnd),
                                    T[a]("transitionEnd", T.zoom.onTransitionEnd),
                                    T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                                }
                            },
                            init: function() {
                                T.zoom.attachEvents()
                            },
                            destroy: function() {
                                T.zoom.attachEvents(!0)
                            }
                        },
                        T._plugins = [];
                        for (var R in T.plugins) {
                            var $ = T.plugins[R](T, T.params[R]);
                            $ && T._plugins.push($)
                        }
                        return T.callPlugins = function(e) {
                            for (var t = 0; t < T._plugins.length; t++) e in T._plugins[t] && T._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        },
                        T.emitterEventListeners = {},
                        T.emit = function(e) {
                            T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            var t;
                            if (T.emitterEventListeners[e]) for (t = 0; t < T.emitterEventListeners[e].length; t++) T.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        },
                        T.on = function(e, t) {
                            return e = f(e),
                            T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
                            T.emitterEventListeners[e].push(t),
                            T
                        },
                        T.off = function(e, t) {
                            var a;
                            if (e = f(e), void 0 === t) return T.emitterEventListeners[e] = [],
                            T;
                            if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                                for (a = 0; a < T.emitterEventListeners[e].length; a++) T.emitterEventListeners[e][a] === t && T.emitterEventListeners[e].splice(a, 1);
                                return T
                            }
                        },
                        T.once = function(e, t) {
                            e = f(e);
                            var a = function() {
                                t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                                T.off(e, a)
                            };
                            return T.on(e, a),
                            T
                        },
                        T.a11y = {
                            makeFocusable: function(e) {
                                return e.attr("tabIndex", "0"),
                                e
                            },
                            addRole: function(e, t) {
                                return e.attr("role", t),
                                e
                            },
                            addLabel: function(e, t) {
                                return e.attr("aria-label", t),
                                e
                            },
                            disable: function(e) {
                                return e.attr("aria-disabled", !0),
                                e
                            },
                            enable: function(e) {
                                return e.attr("aria-disabled", !1),
                                e
                            },
                            onEnterKey: function(t) {
                                13 === t.keyCode && (e(t.target).is(T.params.nextButton) ? (T.onClickNext(t), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(t.target).is(T.params.prevButton) && (T.onClickPrev(t), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), e(t.target).is("." + T.params.bulletClass) && e(t.target)[0].click())
                            },
                            liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                            notify: function(e) {
                                var t = T.a11y.liveRegion;
                                0 !== t.length && (t.html(""), t.html(e))
                            },
                            init: function() {
                                T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
                                T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
                                e(T.container).append(T.a11y.liveRegion)
                            },
                            initPagination: function() {
                                T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                                    var t = e(this);
                                    T.a11y.makeFocusable(t),
                                    T.a11y.addRole(t, "button"),
                                    T.a11y.addLabel(t, T.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                                })
                            },
                            destroy: function() {
                                T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                            }
                        },
                        T.init = function() {
                            T.params.loop && T.createLoop(),
                            T.updateContainerSize(),
                            T.updateSlidesSize(),
                            T.updatePagination(),
                            T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
                            "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()),
                            T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))),
                            T.attachEvents(),
                            T.params.observer && T.support.observer && T.initObservers(),
                            T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
                            T.params.zoom && T.zoom && T.zoom.init(),
                            T.params.autoplay && T.startAutoplay(),
                            T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
                            T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
                            T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
                            T.params.history && T.history && T.history.init(),
                            T.params.hashnav && T.hashnav && T.hashnav.init(),
                            T.params.a11y && T.a11y && T.a11y.init(),
                            T.emit("onInit", T)
                        },
                        T.cleanupStyles = function() {
                            T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
                            T.wrapper.removeAttr("style"),
                            T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                            T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
                            T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
                            T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
                            T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
                            T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
                        },
                        T.destroy = function(e, t) {
                            T.detachEvents(),
                            T.stopAutoplay(),
                            T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
                            T.params.loop && T.destroyLoop(),
                            t && T.cleanupStyles(),
                            T.disconnectObservers(),
                            T.params.zoom && T.zoom && T.zoom.destroy(),
                            T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
                            T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
                            T.params.a11y && T.a11y && T.a11y.destroy(),
                            T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
                            T.params.hashnav && T.hashnav && T.hashnav.destroy(),
                            T.emit("onDestroy"),
                            !1 !== e && (T = null)
                        },
                        T.init(),
                        T
                    }
                };
                t.prototype = {
                    isSafari: function() {
                        var e = navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    } (),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                    isArray: function(e) {
                        return "[object Array]" === Object.prototype.toString.apply(e)
                    },
                    browser: {
                        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                        ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                        lteIE9: function() {
                            var e = r.createElement("div");
                            return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                            1 === e.getElementsByTagName("i").length
                        } ()
                    },
                    device: function() {
                        var e = navigator.userAgent,
                        t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                        a = e.match(/(iPad).*OS\s([\d_]+)/),
                        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                        i = !a && e.match(/(iPhone\sOS)\s([\d_]+)/);
                        return {
                            ios: a || i || r,
                            android: t
                        }
                    } (),
                    support: {
                        touch: window.Modernizr && !0 === Modernizr.touch ||
                        function() {
                            return !! ("ontouchstart" in window || window.DocumentTouch && r instanceof DocumentTouch)
                        } (),
                        transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d ||
                        function() {
                            var e = r.createElement("div").style;
                            return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                        } (),
                        flexbox: function() {
                            for (var e = r.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++) if (t[a] in e) return ! 0
                        } (),
                        observer: function() {
                            return "MutationObserver" in window || "WebkitMutationObserver" in window
                        } (),
                        passiveListener: function() {
                            var e = !1;
                            try {
                                var t = Object.defineProperty({},
                                "passive", {
                                    get: function() {
                                        e = !0
                                    }
                                });
                                window.addEventListener("testPassiveListener", null, t)
                            } catch(a) {}
                            return e
                        } (),
                        gestures: function() {
                            return "ongesturestart" in window
                        } ()
                    },
                    plugins: {}
                };
                for (var i = (function() {
                    var e = function(e) {
                        var t = this,
                        a = 0;
                        for (a = 0; a < e.length; a++) t[a] = e[a];
                        return t.length = e.length,
                        this
                    },
                    t = function(t, a) {
                        var i = [],
                        s = 0;
                        if (t && !a && t instanceof e) return t;
                        if (t) if ("string" == typeof t) {
                            var n, o, l = t.trim();
                            if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                                var p = "div";
                                for (0 === l.indexOf("<li") && (p = "ul"), 0 === l.indexOf("<tr") && (p = "tbody"), 0 !== l.indexOf("<td") && 0 !== l.indexOf("<th") || (p = "tr"), 0 === l.indexOf("<tbody") && (p = "table"), 0 === l.indexOf("<option") && (p = "select"), o = r.createElement(p), o.innerHTML = t, s = 0; s < o.childNodes.length; s++) i.push(o.childNodes[s])
                            } else for (n = a || "#" !== t[0] || t.match(/[ .<>:~]/) ? (a || r).querySelectorAll(t) : [r.getElementById(t.split("#")[1])], s = 0; s < n.length; s++) n[s] && i.push(n[s])
                        } else if (t.nodeType || t === window || t === r) i.push(t);
                        else if (t.length > 0 && t[0].nodeType) for (s = 0; s < t.length; s++) i.push(t[s]);
                        return new e(i)
                    };
                    return e.prototype = {
                        addClass: function(e) {
                            if (void 0 === e) return this;
                            for (var t = e.split(" "), a = 0; a < t.length; a++) for (var r = 0; r < this.length; r++) this[r].classList.add(t[a]);
                            return this
                        },
                        removeClass: function(e) {
                            for (var t = e.split(" "), a = 0; a < t.length; a++) for (var r = 0; r < this.length; r++) this[r].classList.remove(t[a]);
                            return this
                        },
                        hasClass: function(e) {
                            return !! this[0] && this[0].classList.contains(e)
                        },
                        toggleClass: function(e) {
                            for (var t = e.split(" "), a = 0; a < t.length; a++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[a]);
                            return this
                        },
                        attr: function(e, t) {
                            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                            for (var a = 0; a < this.length; a++) if (2 === arguments.length) this[a].setAttribute(e, t);
                            else for (var r in e) this[a][r] = e[r],
                            this[a].setAttribute(r, e[r]);
                            return this
                        },
                        removeAttr: function(e) {
                            for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                            return this
                        },
                        data: function(e, t) {
                            if (void 0 !== t) {
                                for (var a = 0; a < this.length; a++) {
                                    var r = this[a];
                                    r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                                    r.dom7ElementDataStorage[e] = t
                                }
                                return this
                            }
                            if (this[0]) {
                                var i = this[0].getAttribute("data-" + e);
                                return i || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                            }
                        },
                        transform: function(e) {
                            for (var t = 0; t < this.length; t++) {
                                var a = this[t].style;
                                a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
                            }
                            return this
                        },
                        transition: function(e) {
                            "string" != typeof e && (e += "ms");
                            for (var t = 0; t < this.length; t++) {
                                var a = this[t].style;
                                a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
                            }
                            return this
                        },
                        on: function(e, a, r, i) {
                            function s(e) {
                                var i = e.target;
                                if (t(i).is(a)) r.call(i, e);
                                else for (var s = t(i).parents(), n = 0; n < s.length; n++) t(s[n]).is(a) && r.call(s[n], e)
                            }
                            var n, o, l = e.split(" ");
                            for (n = 0; n < this.length; n++) if ("function" == typeof a || !1 === a) for ("function" == typeof a && (r = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], r, i);
                            else for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                            this[n].dom7LiveListeners.push({
                                listener: r,
                                liveListener: s
                            }),
                            this[n].addEventListener(l[o], s, i);
                            return this
                        },
                        off: function(e, t, a, r) {
                            for (var i = e.split(" "), s = 0; s < i.length; s++) for (var n = 0; n < this.length; n++) if ("function" == typeof t || !1 === t)"function" == typeof t && (a = arguments[1], r = arguments[2] || !1),
                            this[n].removeEventListener(i[s], a, r);
                            else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === a && this[n].removeEventListener(i[s], this[n].dom7LiveListeners[o].liveListener, r);
                            return this
                        },
                        once: function(e, t, a, r) {
                            function i(n) {
                                a(n),
                                s.off(e, t, i, r)
                            }
                            var s = this;
                            "function" == typeof t && (t = !1, a = arguments[1], r = arguments[2]),
                            s.on(e, t, i, r)
                        },
                        trigger: function(e, t) {
                            for (var a = 0; a < this.length; a++) {
                                var i;
                                try {
                                    i = new window.CustomEvent(e, {
                                        detail: t,
                                        bubbles: !0,
                                        cancelable: !0
                                    })
                                } catch(s) {
                                    i = r.createEvent("Event"),
                                    i.initEvent(e, !0, !0),
                                    i.detail = t
                                }
                                this[a].dispatchEvent(i)
                            }
                            return this
                        },
                        transitionEnd: function(e) {
                            function t(s) {
                                if (s.target === this) for (e.call(this, s), a = 0; a < r.length; a++) i.off(r[a], t)
                            }
                            var a, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            i = this;
                            if (e) for (a = 0; a < r.length; a++) i.on(r[a], t);
                            return this
                        },
                        width: function() {
                            return this[0] === window ? window.innerWidth: this.length > 0 ? parseFloat(this.css("width")) : null
                        },
                        outerWidth: function(e) {
                            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
                        },
                        height: function() {
                            return this[0] === window ? window.innerHeight: this.length > 0 ? parseFloat(this.css("height")) : null
                        },
                        outerHeight: function(e) {
                            return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight: null
                        },
                        offset: function() {
                            if (this.length > 0) {
                                var e = this[0],
                                t = e.getBoundingClientRect(),
                                a = r.body,
                                i = e.clientTop || a.clientTop || 0,
                                s = e.clientLeft || a.clientLeft || 0,
                                n = window.pageYOffset || e.scrollTop,
                                o = window.pageXOffset || e.scrollLeft;
                                return {
                                    top: t.top + n - i,
                                    left: t.left + o - s
                                }
                            }
                            return null
                        },
                        css: function(e, t) {
                            var a;
                            if (1 === arguments.length) {
                                if ("string" != typeof e) {
                                    for (a = 0; a < this.length; a++) for (var r in e) this[a].style[r] = e[r];
                                    return this
                                }
                                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                            }
                            if (2 === arguments.length && "string" == typeof e) {
                                for (a = 0; a < this.length; a++) this[a].style[e] = t;
                                return this
                            }
                            return this
                        },
                        each: function(e) {
                            for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                            return this
                        },
                        html: function(e) {
                            if (void 0 === e) return this[0] ? this[0].innerHTML: void 0;
                            for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                            return this
                        },
                        text: function(e) {
                            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                            for (var t = 0; t < this.length; t++) this[t].textContent = e;
                            return this
                        },
                        is: function(a) {
                            if (!this[0]) return ! 1;
                            var i, s;
                            if ("string" == typeof a) {
                                var n = this[0];
                                if (n === r) return a === r;
                                if (n === window) return a === window;
                                if (n.matches) return n.matches(a);
                                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(a);
                                if (n.mozMatchesSelector) return n.mozMatchesSelector(a);
                                if (n.msMatchesSelector) return n.msMatchesSelector(a);
                                for (i = t(a), s = 0; s < i.length; s++) if (i[s] === this[0]) return ! 0;
                                return ! 1
                            }
                            if (a === r) return this[0] === r;
                            if (a === window) return this[0] === window;
                            if (a.nodeType || a instanceof e) {
                                for (i = a.nodeType ? [a] : a, s = 0; s < i.length; s++) if (i[s] === this[0]) return ! 0;
                                return ! 1
                            }
                            return ! 1
                        },
                        index: function() {
                            if (this[0]) {
                                for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                                return t
                            }
                        },
                        eq: function(t) {
                            if (void 0 === t) return this;
                            var a, r = this.length;
                            return t > r - 1 ? new e([]) : t < 0 ? (a = r + t, new e(a < 0 ? [] : [this[a]])) : new e([this[t]])
                        },
                        append: function(t) {
                            var a, i;
                            for (a = 0; a < this.length; a++) if ("string" == typeof t) {
                                var s = r.createElement("div");
                                for (s.innerHTML = t; s.firstChild;) this[a].appendChild(s.firstChild)
                            } else if (t instanceof e) for (i = 0; i < t.length; i++) this[a].appendChild(t[i]);
                            else this[a].appendChild(t);
                            return this
                        },
                        prepend: function(t) {
                            var a, i;
                            for (a = 0; a < this.length; a++) if ("string" == typeof t) {
                                var s = r.createElement("div");
                                for (s.innerHTML = t, i = s.childNodes.length - 1; i >= 0; i--) this[a].insertBefore(s.childNodes[i], this[a].childNodes[0])
                            } else if (t instanceof e) for (i = 0; i < t.length; i++) this[a].insertBefore(t[i], this[a].childNodes[0]);
                            else this[a].insertBefore(t, this[a].childNodes[0]);
                            return this
                        },
                        insertBefore: function(e) {
                            for (var a = t(e), r = 0; r < this.length; r++) if (1 === a.length) a[0].parentNode.insertBefore(this[r], a[0]);
                            else if (a.length > 1) for (var i = 0; i < a.length; i++) a[i].parentNode.insertBefore(this[r].cloneNode(!0), a[i])
                        },
                        insertAfter: function(e) {
                            for (var a = t(e), r = 0; r < this.length; r++) if (1 === a.length) a[0].parentNode.insertBefore(this[r], a[0].nextSibling);
                            else if (a.length > 1) for (var i = 0; i < a.length; i++) a[i].parentNode.insertBefore(this[r].cloneNode(!0), a[i].nextSibling)
                        },
                        next: function(a) {
                            return new e(this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                        },
                        nextAll: function(a) {
                            var r = [],
                            i = this[0];
                            if (!i) return new e([]);
                            for (; i.nextElementSibling;) {
                                var s = i.nextElementSibling;
                                a ? t(s).is(a) && r.push(s) : r.push(s),
                                i = s
                            }
                            return new e(r)
                        },
                        prev: function(a) {
                            return new e(this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                        },
                        prevAll: function(a) {
                            var r = [],
                            i = this[0];
                            if (!i) return new e([]);
                            for (; i.previousElementSibling;) {
                                var s = i.previousElementSibling;
                                a ? t(s).is(a) && r.push(s) : r.push(s),
                                i = s
                            }
                            return new e(r)
                        },
                        parent: function(e) {
                            for (var a = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && a.push(this[r].parentNode) : a.push(this[r].parentNode);
                            return t(t.unique(a))
                        },
                        parents: function(e) {
                            for (var a = [], r = 0; r < this.length; r++) for (var i = this[r].parentNode; i;) e ? t(i).is(e) && a.push(i) : a.push(i),
                            i = i.parentNode;
                            return t(t.unique(a))
                        },
                        find: function(t) {
                            for (var a = [], r = 0; r < this.length; r++) for (var i = this[r].querySelectorAll(t), s = 0; s < i.length; s++) a.push(i[s]);
                            return new e(a)
                        },
                        children: function(a) {
                            for (var r = [], i = 0; i < this.length; i++) for (var s = this[i].childNodes, n = 0; n < s.length; n++) a ? 1 === s[n].nodeType && t(s[n]).is(a) && r.push(s[n]) : 1 === s[n].nodeType && r.push(s[n]);
                            return new e(t.unique(r))
                        },
                        remove: function() {
                            for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                            return this
                        },
                        add: function() {
                            var e, a, r = this;
                            for (e = 0; e < arguments.length; e++) {
                                var i = t(arguments[e]);
                                for (a = 0; a < i.length; a++) r[r.length] = i[a],
                                r.length++
                            }
                            return r
                        }
                    },
                    t.fn = e.prototype,
                    t.unique = function(e) {
                        for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
                        return t
                    },
                    t
                } ()), s = ["jQuery", "Zepto", "Dom7"], n = 0; n < s.length; n++) window[s[n]] &&
                function(e) {
                    e.fn.swiper = function(a) {
                        var r;
                        return e(this).each(function() {
                            var e = new t(this, a);
                            r || (r = e)
                        }),
                        r
                    }
                } (window[s[n]]);
                var o;
                o = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery: i,
                o && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function(e) {
                    function t(s) {
                        if (s.target === this) for (e.call(this, s), a = 0; a < r.length; a++) i.off(r[a], t)
                    }
                    var a, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                    i = this;
                    if (e) for (a = 0; a < r.length; a++) i.on(r[a], t);
                    return this
                }), "transform" in o.fn || (o.fn.transform = function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var a = this[t].style;
                        a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
                    }
                    return this
                }), "transition" in o.fn || (o.fn.transition = function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var a = this[t].style;
                        a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
                    }
                    return this
                }), "outerWidth" in o.fn || (o.fn.outerWidth = function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
                })),
                window.Swiper = t,
                a.exports = t
            } ()
        }.call(t, a, t, e)) && (e.exports = r)
    }
},
[243]);