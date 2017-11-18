/*!
* DevExpress ChartJS
* Version: 13.1.5
* Build date: Jul 4, 2013
*
* Copyright (c) 2012 - 2013 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: http://chartjs.devexpress.com/EULA
*/
"use strict";
window.DevExpress || (function (n, t, i) {
    (function (n) {
        if (n = n.split("."), n[0] < 1 || n[0] === 1 && n[1] < 8) throw Error("Your version of jQuery is too old. Please upgrade jQuery to 1.8.0 or later.");
    })(n.fn.jquery);
    var r = function () {
        var i = function (n, t, i) {
            return function () {
                var r = this.callBase;
                this.callBase = n[t];
                try {
                    return i.apply(this, arguments)
                } finally {
                    this.callBase = r
                }
            }
        }, r = function (n) {
            var t = function () {
            };
            return t.prototype = n.prototype, new t
        }, t = function () {
        }, u = function (t) {
            var r = this, u;
            return t ? (u = n.map(t, function (n, t) {
                return t
            }), n.each(["toString", "toLocaleString", "valueOf"], function () {
                t[this] && u.push(this)
            }), n.each(u, function () {
                var u = n.isFunction(r.prototype[this]) && n.isFunction(t[this]);
                r.prototype[this] = u ? i(r.parent.prototype, this, t[this]) : t[this]
            }), r) : r
        }, f = function () {
            var t = this;
            return n.each(arguments, function () {
                this.ctor && t._includedCtors.push(this.ctor);
                for (var n in this) if (n !== "ctor") {
                    if (n in t.prototype) throw Error("Member name collision: " + n);
                    t.prototype[n] = this[n]
                }
            }), t
        }, e = function (n) {
            return this.parent === n ? !0 : !this.parent || !this.parent.subclassOf ? !1 : this.parent.subclassOf(n)
        };
        return t.inherit = function (t) {
            var i = function () {
                if (!this || this.constructor !== i) throw Error("A class must be instantiated using the 'new' keyword");
                var t = this, r = t.ctor;
                r && r.apply(t, arguments), n.each(t.constructor._includedCtors, function () {
                    this.call(t)
                })
            };
            return i.prototype = r(this), i.inherit = this.inherit, i.redefine = u, i.include = f, i.subclassOf = e, i.parent = this, i._includedCtors = this._includedCtors ? this._includedCtors.slice(0) : [], i.prototype.constructor = i, i.redefine(t), i
        }, t
    }(), u = function () {
        var t = [], r = !1, u = function () {
            while (t.length) {
                var e = t.shift(), f = e();
                if (f !== i) {
                    if (f.then) {
                        r = !0, n.when(f).always(u);
                        return
                    }
                    throw Error();
                }
            }
            r = !1
        };
        return function (n) {
            t.push(n), r || u()
        }
    }(), f = function () {
        var t = document.createElement("a"), i = ["protocol", "hostname", "port", "pathname", "search", "hash"],
            r = function (n) {
                return n.charAt(0) !== "/" && (n = "/" + n), n
            };
        return function (u) {
            t.href = u;
            var f = {};
            return n.each(i, function () {
                f[this] = t[this]
            }), f.pathname = r(f.pathname), f
        }
    }();
    t.DevExpress = t.DevExpress || {};
    var e = function (t) {
        var i = n.Deferred();
        return setTimeout(function () {
            i.resolve(t())
        }, 60), i
    }, o = function () {
        var t = [];
        return {
            add: function (n) {
                t.push(n)
            }, remove: function (i) {
                var r = n.inArray(i, t);
                r !== -1 && t.splice(r, 1)
            }, fire: function () {
                var n = t.pop(), i = !!n;
                return i && n(), i
            }
        }
    }(), s = function () {
        var n = null;
        return function (t) {
            return arguments.length && (n = t), n
        }
    }();
    n.extend(t.DevExpress, {
        abstract: function () {
            throw Error("Not implemented");
        }, Class: r, enqueue: u, enqueueAsync: e, parseUrl: f, backButtonCallback: o, overlayTargetContainer: s
    })
}(jQuery, this), function (n, t, i) {
    var e = function (n) {
        return n === i || n === null ? "" : String(n)
    }, r = function (n) {
        return e(n).charAt(0).toUpperCase() + n.substr(1)
    }, u = function (n) {
        return e(n).replace(/([a-z\d])([A-Z])/g, "$1 $2").split(/[\s_-]+/)
    }, f = function (t) {
        return n.map(u(t), function (n) {
            return n.toLowerCase()
        }).join("-")
    }, o = function (n) {
        return f(n).replace(/-/g, "_")
    }, s = function (t, i) {
        return n.map(u(t), function (n, t) {
            return n = n.toLowerCase(), (i || t > 0) && (n = r(n)), n
        }).join("")
    }, h = function (n) {
        return r(f(n).replace(/-/g, " "))
    }, c = function (t) {
        return n.map(u(t), function (n) {
            return r(n.toLowerCase())
        }).join(" ")
    };
    t.inflector = {dasherize: f, camelize: s, humanize: h, titleize: c, underscore: o}
}(jQuery, DevExpress), function (n, t, i) {
    var f = ["", "Webkit", "Moz", "O", "ms"], e = document.createElement("dx").style, o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MsTransitionEnd",
        transition: "transitionend"
    }, u = function (n) {
        var i, u, r;
        for (n = t.inflector.camelize(n, !0), i = 0, u = f.length; i < u; i++) if (r = f[i] + n, r in e) return r
    }, r = function (n) {
        return !!u(n)
    };
    t.support = {
        touch: "ontouchstart" in i,
        transform3d: r("perspective"),
        transition: r("transition"),
        transitionEndEventName: o[u("transition")],
        animation: r("animation"),
        winJS: "WinJS" in i,
        styleProp: u,
        supportProp: r
    }
}(jQuery, DevExpress, this), function (n, t) {
    var f = /(webkit)[ \/]([\w.]+)/, e = /(opera)(?:.*version)?[ \/]([\w.]+)/, o = /(msie) ([\w.]+)/,
        s = /(mozilla)(?:.*? rv:([\w.]+))?/, u = navigator.userAgent.toLowerCase(), h = function () {
            var n = {}, t = f.exec(u) || e.exec(u) || o.exec(u) || u.indexOf("compatible") < 0 && s.exec(u) || [], i = t[1],
                r = t[2];
            return i && (n[i] = !0, n.version = r), n
        }();
    t.browser = h
}(jQuery, DevExpress, this), function (n, t, i) {
    var a = /left|right/, v = /top|bottom/, o = /fit|flip/, f = function (n) {
        switch (typeof n) {
            case"string":
                return n.split(/\s+/, 2);
            case"object":
                return [n.x || n.h, n.y || n.v];
            case"number":
                return [n];
            default:
                return n
        }
    }, s = function (t) {
        var i = {h: "center", v: "center"}, r = f(t);
        return r && n.each(r, function () {
            var n = String(this).toLowerCase();
            a.test(n) ? i.h = n : v.test(n) && (i.v = n)
        }), i
    }, y = function (n) {
        var t = f(n), i = parseInt(t && t[0], 10), r = parseInt(t && t[1], 10);
        return isFinite(i) || (i = 0), isFinite(r) || (r = i), {h: i, v: r}
    }, p = function (n) {
        var t = f(n), i = String(t && t[0]).toLowerCase(), r = String(t && t[1]).toLowerCase();
        return o.test(i) || (i = "none"), o.test(r) || (r = i), {h: i, v: r}
    }, h = function (n) {
        switch (n) {
            case"center":
                return .5;
            case"right":
            case"bottom":
                return 1;
            default:
                return 0
        }
    }, c = function (n) {
        switch (n) {
            case"left":
                return "right";
            case"right":
                return "left";
            case"top":
                return "bottom";
            case"bottom":
                return "top";
            default:
                return n
        }
    }, e = function (n) {
        n.myLocation = n.atLocation + h(n.atAlign) * n.atSize - h(n.myAlign) * n.mySize + n.offset
    }, r = {
        fit: function (n, t) {
            n.myLocation > t.max && (n.myLocation = t.max), n.myLocation < t.min && (n.myLocation = t.min)
        }, flip: function (t, i) {
            if ((t.myAlign !== "center" || t.atAlign !== "center") && (t.myLocation < i.min || t.myLocation > i.max)) {
                var r = n.extend({}, t, {myAlign: c(t.myAlign), atAlign: c(t.atAlign), offset: -t.offset});
                e(r), (r.myLocation >= i.min && r.myLocation <= i.max || r.myLocation > t.myLocation) && (t.myLocation = r.myLocation)
            }
        }
    }, u, w = function (f, o) {
        var v = n(f), w, b;
        if (!o) return v.offset();
        var k = s(o.my), d = s(o.at), h = o.of || window, g = y(o.offset), nt = p(o.collision),
            c = {mySize: v.outerWidth(), myAlign: k.h, atAlign: d.h, offset: g.h, collision: nt.h},
            a = {mySize: v.outerHeight(), myAlign: k.v, atAlign: d.v, offset: g.v, collision: nt.v};
        h.preventDefault ? (c.atLocation = h.pageX, a.atLocation = h.pageY, c.atSize = 0, a.atSize = 0) : (h = n(h), n.isWindow(h[0]) ? (c.atLocation = h.scrollLeft(), a.atLocation = h.scrollTop(), c.atSize = h.width(), a.atSize = h.height()) : h[0].nodeType === 9 ? (c.atLocation = 0, a.atLocation = 0, c.atSize = h.width(), a.atSize = h.height()) : (w = h.offset(), c.atLocation = w.left, a.atLocation = w.top, c.atSize = h.outerWidth(), a.atSize = h.outerHeight())), e(c), e(a), b = function () {
            var r = n(window), f = r.scrollLeft(), e = r.scrollTop();
            u === i && (u = l());
            var o = document.width > document.documentElement.clientWidth,
                s = document.height > document.documentElement.clientHeight,
                h = t.support.touch ? document.documentElement.clientWidth / (s ? window.innerWidth - u : window.innerWidth) : 1,
                v = t.support.touch ? document.documentElement.clientHeight / (o ? window.innerHeight - u : window.innerHeight) : 1;
            return {h: {min: f, max: f + r.width() / h - c.mySize}, v: {min: e, max: e + r.height() / v - a.mySize}}
        }(), r[c.collision] && r[c.collision](c, b.h), r[a.collision] && r[a.collision](a, b.v), v.offset({
            left: Math.round(c.myLocation),
            top: Math.round(a.myLocation)
        })
    }, l;
    t.position = w, l = function () {
        var t = n("<div>").css({
            width: 100,
            height: 100,
            overflow: "scroll",
            position: "absolute",
            top: -9999
        }).appendTo(n("body")), i = t.get(0).offsetWidth - t.get(0).clientWidth;
        return t.remove(), i
    }
}(jQuery, DevExpress), function (n, t) {
    var r = {}, u = function (t, i) {
        if (n.isPlainObject(t)) {
            n.each(t, u);
            return
        }
        r[t] = i
    }, e = function () {
        var i = n.makeArray(arguments);
        n.each(i, function () {
            delete r[this]
        })
    }, f;
    u({
        func: {
            execute: function (t) {
                n.isFunction(t.action) && (t.result = t.action.apply(t.context, t.args), t.handled = !0)
            }
        }, url: {
            execute: function (n) {
                typeof n.action == "string" && n.action.charAt(0) !== "#" && (document.location = n.action)
            }
        }, hash: {
            execute: function (n) {
                typeof n.action == "string" && n.action.charAt(0) === "#" && (document.location.hash = n.action)
            }
        }
    }), f = t.Class.inherit({
        ctor: function (t, i) {
            i = i || {}, this._action = t || n.noop, this._context = i.context || window, this._beforeExecute = i.beforeExecute || n.noop, this._afterExecute = i.afterExecute || n.noop, this._component = i.component, this._allowedForGesture = !!i.allowedForGesture
        }, execute: function () {
            var n = {
                action: this._action,
                args: Array.prototype.slice.call(arguments),
                context: this._context,
                component: this._component,
                canceled: !1,
                handled: !1,
                allowedForGesture: this._allowedForGesture
            }, t;
            if (this._validateAction(n)) return (this._beforeExecute.call(this._context, n), n.canceled) ? void 0 : (t = this._executeAction(n), this._afterExecute.call(this._context, n), t)
        }, _validateAction: function (t) {
            return n.each(r, function (n, i) {
                return i.validate && i.validate(t), t.canceled ? !1 : void 0
            }), !t.canceled
        }, _executeAction: function (t) {
            var i;
            return n.each(r, function (n, r) {
                return r.execute && r.execute(t), t.handled ? (i = t.result, !1) : void 0
            }), i
        }
    }), n.extend(t, {registerActionExecutor: u, unregisterActionExecutor: e, Action: f})
}(jQuery, DevExpress), function (n, t, i) {
    function it() {
    }

    var rt = Math.PI, ut = Math.LN10, ft = Math.cos, et = Math.sin, c = Math.abs, ot = Math.log, st = Math.floor,
        ht = Math.ceil, ct = Math.max, nr = Math.min, l = window.isNaN, p = window.Number, lt = window.NaN,
        f = ["millisecond", "second", "minute", "hour", "day", "week", "month", "quarter", "year"], at = function (n) {
            return n !== null && n !== i
        }, e = function (t) {
            return n.type(t) === "string"
        }, o = function (t) {
            return n.isNumeric(t)
        }, a = function (t) {
            return n.type(t) === "object"
        }, vt = function (t) {
            return n.type(t) === "array"
        }, w = function (t) {
            return n.type(t) === "date"
        }, yt = function (t) {
            return n.type(t) === "function"
        }, r = function (n) {
            switch (n) {
                case"millisecond":
                    return 1;
                case"second":
                    return r("millisecond") * 1e3;
                case"minute":
                    return r("second") * 60;
                case"hour":
                    return r("minute") * 60;
                case"day":
                    return r("hour") * 24;
                case"week":
                    return r("day") * 7;
                case"month":
                    return r("day") * 30;
                case"quarter":
                    return r("month") * 3;
                case"year":
                    return r("day") * 365;
                default:
                    return 0
            }
        }, s = function (n, t) {
            return r(n) * t
        }, pt = function (n) {
            for (var t, i, f = ["millisecond", "second", "minute", "hour", "day", "month", "year"], e = {}, u = f.length - 1; u >= 0; u--) i = f[u], t = Math.floor(n / r(i)), t > 0 && (e[i + "s"] = t, n -= s(i, t));
            return e
        }, wt = function (t) {
            var i = 0;
            return a(t) && n.each(t, function (n, t) {
                i += s(n.substr(0, n.length - 1), t)
            }), e(t) && (i = s(t, 1)), i
        }, bt = function (t, i) {
            var r, u = 0;
            return r = {
                year: t.getFullYear() !== i.getFullYear(),
                month: t.getMonth() !== i.getMonth(),
                day: t.getDate() !== i.getDate(),
                hour: t.getHours() !== i.getHours(),
                minute: t.getMinutes() !== i.getMinutes(),
                second: t.getSeconds() !== i.getSeconds()
            }, n.each(r, function (n, t) {
                t && u++
            }), r.count = u, r
        }, v = function (n) {
            var t, i;
            return o(n) ? (t = n.toFixed(20), i = t.indexOf("."), t.substr(i + 1, t.length - i + 1)) : ""
        }, kt = function (n) {
            var i = v(n), t;
            if (i) for (t = 0; t < i.length; t++) if (i.charAt(t) !== "0") return t + 1;
            return 0
        }, u = function (n, t, i) {
            return n + (i ? -1 : 1) * t
        }, b = function (n) {
            return o(n) && n.toString().indexOf("e") !== -1
        }, dt = function (n, t, i) {
            var r = null, f;
            return w(n) ? (f = e(t) ? g(t.toLowerCase()) : t, r = new Date(n.getTime()), f.years && r.setFullYear(u(r.getFullYear(), f.years, i)), f.quarters && r.setMonth(u(r.getMonth(), 3 * f.quarters, i)), f.months && r.setMonth(u(r.getMonth(), f.months, i)), f.weeks && r.setDate(u(r.getDate(), 7 * f.weeks, i)), f.days && r.setDate(u(r.getDate(), f.days, i)), f.hours && r.setHours(u(r.getHours(), f.hours, i)), f.minutes && r.setMinutes(u(r.getMinutes(), f.minutes, i)), f.seconds && r.setSeconds(u(r.getSeconds(), f.seconds, i)), f.milliseconds && r.setMilliseconds(u(n.getMilliseconds(), f.milliseconds, i))) : r = u(n, t, i), r
        }, k = function (t) {
            var r = -1, i;
            return e(t) ? t : a(t) ? (n.each(t, function (n, t) {
                for (i = 0; i < f.length; i++) t && (n === f[i] + "s" || n === f[i]) && r < i && (r = i)
            }), f[r]) : ""
        }, gt = function (n, i) {
            var r, u, f = k(i);
            switch (f) {
                case"second":
                    n.setMilliseconds(0);
                    break;
                case"minute":
                    n.setSeconds(0, 0);
                    break;
                case"hour":
                    n.setMinutes(0, 0, 0);
                    break;
                case"year":
                    n.setMonth(0);
                case"month":
                    n.setDate(1);
                case"day":
                    n.setHours(0, 0, 0, 0);
                    break;
                case"week":
                    r = n.getDate(), n.getDay() !== 0 && (r += 7 - n.getDay()), n.setDate(r), n.setHours(0, 0, 0, 0);
                    break;
                case"quarter":
                    u = t.formatHelper.getFirstQuarterMonth(n.getMonth()), n.getMonth() !== u && n.setMonth(u), n.setDate(1), n.setHours(0, 0, 0, 0)
            }
        }, y = function (n, t) {
            if (o(n)) return b(n) ? p(n.toExponential(t)) : p(n.toFixed(t))
        }, d = function (n) {
            var t, i = n.toString(), r = i.indexOf(".");
            return r !== -1 ? (t = i.substring(r + 1), t.length) : 0
        }, ni = function (n, t, i) {
            var r = d(n), u = d(t);
            return y(i, r < u ? u : r)
        }, ti = function (n) {
            var i = v(n), r, t;
            if (i) for (t = 1; t <= i.length; t++) if (r = y(n, t), r !== 0 && i[t - 2] && i[t - 1] && i[t - 2] === i[t - 1]) return r;
            return n
        }, g = function (n) {
            var t = {};
            switch (n) {
                case"year":
                    t.years = 1;
                    break;
                case"month":
                    t.months = 1;
                    break;
                case"quarter":
                    t.months = 3;
                    break;
                case"week":
                    t.days = 7;
                    break;
                case"day":
                    t.days = 1;
                    break;
                case"hour":
                    t.hours = 1;
                    break;
                case"minute":
                    t.minutes = 1;
                    break;
                case"second":
                    t.seconds = 1;
                    break;
                case"millisecond":
                    t.milliseconds = 1
            }
            return t
        }, ii = function (n) {
            return (n % 360 + 360) % 360
        }, ri = function (n) {
            return 90 - n
        }, nt = function (n) {
            return rt * n / 180
        }, ui = function (n) {
            var t = nt(n);
            return {cos: ft(t), sin: et(t)}
        }, fi = 1e-14, h = function (n) {
            var t = c(n), i;
            return l(t) ? lt : t > 0 ? (t = ot(t) / ut, i = ht(t), i - t < fi ? i : st(t)) : 0
        }, ei = function (n, t, i) {
            var u = ct(h(n), h(t)), r = -h(c(t - n) / i), f;
            return !l(u) && !l(r) ? (c(u) <= 4 ? (f = "fixedPoint", r < 0 && (r = 0), r > 4 && (r = 4)) : (f = "exponential", r += u - 1, r > 3 && (r = 3)), {
                format: f,
                precision: r
            }) : null
        }, oi = function (t) {
            var i = n(window), r, u = function () {
                var n = i.width(), u = i.height();
                clearTimeout(r), r = setTimeout(function () {
                    i.width() === n && i.height() === u && t()
                }, 100)
            };
            return u.stop = function () {
                return clearTimeout(r), this
            }, u
        }, si = function () {
            var n = function () {
                window.console && arguments[0] && console.info(arguments[0])
            }, t = function () {
                window.console && arguments[0] && console.warn(arguments[0])
            }, i = function () {
                window.console && arguments[0] && console.error(arguments[0])
            };
            return {info: n, warn: t, error: i}
        }(), hi = function () {
            function n(n, t) {
                if (!n) throw new Error(t);
            }

            function t(t, r) {
                n(t !== null && t !== i, r)
            }

            return {assert: n, assertParam: t}
        }(), ci = function () {
            var t, r = n.Callbacks(), i = n(window), u = function () {
                return [i.width(), i.height()].join()
            }, f = function () {
                var n = u();
                n !== t && (t = n, r.fire())
            };
            i.on("resize", f);
            return t = u(), r
        }(), li = function (t) {
            var i = n("<div />");
            return window.WinJS ? WinJS.Utilities.setInnerHTMLUnsafe(i.get(0), t) : i.append(t), i.contents()
        }, ai = 1, vi = 1, yi = function () {
            return "DevExpress_" + ai++
        }, pi = function () {
            return "DevExpressPattern_" + vi++
        }, wi = function (n, i, r) {
            var u, e, h;
            n = n || {};
            var o = {}, s = "data-dx-", f = i.get(0).attributes;
            for (u = 0; u < f.length; u++) e = f[u].name, e.indexOf(s) === 0 && (h = t.inflector.camelize(e.substr(s.length)), o[h] = f[u].value);
            return tt(n, o, r)
        }, tt = function (n, t, i) {
            var r, u;
            n = n || {};
            for (r in t) t.hasOwnProperty(r) && (u = t[r], r in n && !i || (n[r] = u));
            return n
        }, bi = function (t, i, r) {
            var u = window;
            n(document).on(t, r, i)
        }, ki = function (t) {
            var i = window;
            n(document).off(t)
        }, di = function (n) {
            return it.prototype = n, new it
        }, gi = function (t, i) {
            var r = n.Deferred(), u = i || this;
            return setTimeout(function () {
                var i = t.call(u);
                i && i.done && n.isFunction(i.done) ? i.done(function () {
                    r.resolveWith(u)
                }) : r.resolveWith(u)
            }, 0), r.promise()
        };
    t.utils = {
        dateUnitIntervals: f,
        isDefined: at,
        isString: e,
        isNumber: o,
        isObject: a,
        isArray: vt,
        isDate: w,
        isFunction: yt,
        normalizeAngle: ii,
        convertAngleToRendererSpace: ri,
        degreesToRadians: nt,
        getCosAndSin: ui,
        getDecimalOrder: h,
        getAppropriateFormat: ei,
        getFraction: v,
        adjustValue: ti,
        convertMillisecondsToDateUnits: pt,
        convertDateTickIntervalToMilliseconds: wt,
        convertDateUnitToMilliseconds: s,
        getDateUnitInterval: k,
        getDatesDifferences: bt,
        correctDateWithUnitBeginning: gt,
        roundValue: y,
        isExponential: b,
        applyPrecisionByMinDelta: ni,
        getSignificantDigitPosition: kt,
        addInterval: dt,
        getDateIntervalByString: g,
        logger: si,
        debug: hi,
        createResizeHandler: oi,
        windowResizeCallbacks: ci,
        createMarkupFromString: li,
        getNextClipId: yi,
        getNextPatternId: pi,
        extendFromDataAttributes: wi,
        extendFromObject: tt,
        subscribeEventToDocument: bi,
        unsubscribeEventFromDocument: ki,
        clone: di,
        executeAsync: gi
    }
}(jQuery, DevExpress), function (n, t, i) {
    var u = t.support, e = /matrix(3d)?\((.+?)\)/, o = /translate(?:3d)?\((.+?)\)/, s = function (n) {
        var t, i, f;
        return u.transform3d ? (f = r(n), t = {left: f.x, top: f.y}) : (i = n.position(), t = {
            left: i.left,
            top: i.top
        }), t
    }, h = function (n, t) {
        if (!u.transform3d) {
            n.css(t);
            return
        }
        var e = r(n), o = t.left, s = t.top;
        o !== i && (e.x = o), s !== i && (e.y = s), n.css("transform", f(e))
    }, r = function (n) {
        var i = n.css("transform"), t = i.match(e), r = t && t[1];
        return t ? (t = t[2].split(","), r === "3d" ? t = t.slice(12, 15) : (t.push(0), t = t.slice(4, 7))) : t = [0, 0, 0], {
            x: parseFloat(t[0]),
            y: parseFloat(t[1]),
            z: parseFloat(t[2])
        }
    }, c = function (n) {
        var t = n.match(o);
        if (t && t[1]) return t = t[1].split(","), t = {x: parseFloat(t[0]), y: parseFloat(t[1]), z: parseFloat(t[2])}
    }, f = function (n) {
        return "translate3d(" + (n.x || 0) + "px, " + (n.y || 0) + "px, " + (n.z || 0) + "px)"
    };
    t.translator = {move: h, locate: s, parseTranslate: c, getTranslate: r, getTranslateCss: f}
}(jQuery, DevExpress), function (n, t, i) {
    function l(n) {
        if (n = n || window.navigator.userAgent, /iP(hone|od|ad)/.test(n)) {
            var t = n.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)]
        }
    }

    var s = {
            iPhone: "iPhone",
            iPhone5: "iPhone 5",
            iPad: "iPad",
            iPadMini: "iPad Mini",
            androidPhone: "Android Mobile",
            androidTablet: "Android",
            win8: "MSAppHost",
            win8Phone: "Windows Phone 8",
            msSurface: "MSIE ARM Tablet PC",
            desktop: "desktop"
        }, u = {phone: !1, tablet: !1, android: !1, ios: !1, win8: !1}, h = n.extend(u, {platform: "desktop"}),
        f = function (t) {
            var e = /ipad/i.test(t), u = /iphone|ipod/i.test(t), i = /android|silk-accelerated/i.test(t),
                r = /windows phone 8|wpdesktop/i.test(t), o = /msie(.*)arm(.*)tablet\spc/i.test(t),
                f = /msapphost/i.test(t) || r || o;
            if (!e && !u && !i && !f && !r && !o) return n.extend({}, h);
            var s = u || i && /mobile/i.test(t) || r, l = !s && !f && !r, c = i ? "android" : f ? "win8" : "ios";
            return {phone: s, tablet: l, android: i, ios: e || u, win8: c === "win8", platform: c}
        }, e = function (n) {
            var t;
            if (n) {
                if (t = s[n], !t) throw Error("Unknown device");
            } else t = navigator.userAgent;
            return f(t)
        }, c = function (n) {
            n = n || window.navigator.userAgent;
            var t = /Android (\d\.\d(?:\.\d)?)/.exec(n);
            if (t && t.length === 2) return t[1]
        }, r, o = function () {
            return window.sessionStorage && (sessionStorage.getItem("dx-force-device") || sessionStorage.getItem("dx-simulator-device"))
        }, a = function () {
            var n = i;
            return window.top["dx-force-device"] && (n = window.top["dx-force-device"]), n
        }, v = function (t) {
            if (t) r = n.isPlainObject(t) ? n.extend(u, t) : e(t); else {
                if (!r) {
                    var f = i;
                    try {
                        f = a()
                    } catch (s) {
                        f = o()
                    } finally {
                        f || (f = o())
                    }
                    r = e(f)
                }
                return r
            }
        };
    t.devices = {
        androidVersion: c, iosVersion: l, current: v, fromUA: function () {
            return f(navigator.userAgent)
        }
    }
}(jQuery, DevExpress), function (n, t, i) {
    var f = t.translator, e = t.support, o = e.transitionEndEventName + ".dxFX",
        w = /cubic-bezier\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\)/,
        s = "dxSimulatedTransitionTimeoutKey", u = "dxAnimData", r = "transform", l = "backfaceVisibility",
        b = 1e3 / 60, a = {
            animate: function (t, i) {
                var r = n.Deferred(), u = n.Deferred(), e = n.Deferred();
                t.one(o, function () {
                    u.reject()
                });
                return t.data(s, setTimeout(function () {
                    e.reject()
                }, i.duration + i.delay)), n.when(u, e).fail(n.proxy(function () {
                    this._cleanup(t), r.resolveWith(t, [i, t])
                }, this)), f.getTranslate(t), t.css({
                    transitionProperty: "all",
                    transitionDelay: i.delay + "ms",
                    transitionDuration: i.duration + "ms",
                    transitionTimingFunction: i.easing
                }), y(t, i.to), i.duration || t.trigger(o), r.promise()
            }, _cleanup: function (n) {
                n.css("transition", "none").off(o);
                var t = n.data(s);
                clearTimeout(t), n.removeData(s)
            }, stop: function (t, i) {
                var r = t.data(u);
                r && (i ? t.trigger(o) : (n.each(r.to, function (n) {
                    t.css(n, t.css(n))
                }), this._cleanup(t)))
            }
        }, k = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
                window.setTimeout(n, b)
            }
        }(), h = {
            animate: function (t, e) {
                var h = n.Deferred(), s = t.data(u), o = this;
                return s ? (n.each(e.to, function (n) {
                    e.from[n] === i && (e.from[n] = o._normalizeValue(t.css(n)))
                }), e.to[r] && (e.from[r] = o._parseTransform(e.from[r]), e.to[r] = o._parseTransform(e.to[r])), s.frameAnimation = {
                    to: e.to,
                    from: e.from,
                    currentValue: e.from,
                    easing: nt(e.easing),
                    duration: e.duration,
                    startTime: (new Date).valueOf(),
                    finish: function () {
                        this.currentValue = this.to, this.draw(), h.resolve()
                    },
                    draw: function () {
                        var i = n.extend({}, this.currentValue);
                        i[r] && (i[r] = n.map(i[r], function (n, t) {
                            return t === "translate" ? f.getTranslateCss(n) : t === "scale" ? "scale(" + n + ")" : t.substr(0, t.length - 1) === "rotate" ? t + "(" + n + "deg)" : void 0
                        }).join(" ")), t.css(i)
                    }
                }, e.delay ? (s.frameAnimation.startTime += e.delay, s.frameAnimation.delayTimeout = setTimeout(function () {
                    o._animationStep(t)
                }, e.delay)) : o._animationStep(t), h.promise()) : h.reject().promise()
            }, _parseTransform: function (t) {
                var i = {};
                return n.each(t.match(/(\w|\d)+\([^\)]*\)\s*/g), function (n, t) {
                    var e = f.parseTranslate(t), u = t.match(/scale\((.+?)\)/), r = t.match(/(rotate.)\((.+)deg\)/);
                    e && (i.translate = e), u && u[1] && (i.scale = parseFloat(u[1])), r && r[1] && (i[r[1]] = parseFloat(r[2]))
                }), i
            }, stop: function (n, t) {
                var r = n.data(u), i = r && r.frameAnimation;
                i && (clearTimeout(i.delayTimeout), t && i.finish())
            }, _animationStep: function (t) {
                var f = t.data(u), i = f && f.frameAnimation, r;
                if (i) {
                    if (r = (new Date).valueOf(), r >= i.startTime + i.duration) {
                        i.finish();
                        return
                    }
                    i.currentValue = this._calcStepValue(i, r - i.startTime), i.draw(), k(n.proxy(function () {
                        this._animationStep(t)
                    }, this))
                }
            }, _calcStepValue: function (t, i) {
                var r = function (u, f) {
                    var e = n.isArray(f) ? [] : {}, o = function (r) {
                        var e = i / t.duration, o = i, s = 1 * u[r], h = f[r] - u[r], c = t.duration;
                        return n.easing[t.easing](e, o, s, h, c)
                    };
                    return n.each(f, function (n, t) {
                        if (typeof t == "string" && parseFloat(t, 10) === !1) return !0;
                        e[n] = typeof t == "object" ? r(u[n], t) : o(n)
                    }), e
                };
                return r(t.from, t.to)
            }, _normalizeValue: function (n) {
                var t = parseFloat(n, 10);
                return t === !1 ? n : t
            }
        }, d = {transition: e.transition ? a : h, frame: h}, c = function (n) {
            return d[n && n.strategy || "transition"]
        }, g = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
            "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)"
        }, nt = function (t) {
            var i, r, u;
            return (t = g[t] || t, i = t.match(w), !i) ? "linear" : (i = i.slice(1, 5), n.each(i, function (n, t) {
                i[n] = parseFloat(t)
            }), r = "cubicbezier_" + i.join("_").replace(/\./g, "p"), n.isFunction(n.easing[r]) || (u = function (n, t, i, r) {
                var u = 3 * n, f = 3 * (i - n) - u, o = 1 - u - f, e = 3 * t, s = 3 * (r - t) - e, h = 1 - e - s,
                    c = function (n) {
                        return n * (u + n * (f + n * o))
                    }, l = function (n) {
                        return n * (e + n * (s + n * h))
                    }, a = function (n) {
                        for (var t = n, r = 0, i; r < 14;) {
                            if (i = c(t) - n, Math.abs(i) < .001) break;
                            t = t - i / v(t), r++
                        }
                        return t
                    }, v = function (n) {
                        return u + n * (2 * f + n * 3 * o)
                    };
                return function (n) {
                    return l(a(n))
                }
            }, n.easing[r] = function (n, t, r, f, e) {
                return f * u(i[0], i[1], i[2], i[3])(t / e) + r
            }), r)
        }, tt = {
            setup: function () {
            }
        }, it = {
            setup: function (n, t) {
                var i = c(t);
                e.transform3d && (i === a || i === h) && (this._setupConfig(n, t.from), this._setupConfig(n, t.to))
            }, _setupConfig: function (n, t) {
                var u = f.getTranslate(n), e = t.left, o = t.top;
                e !== i && (u.x = e, delete t.left), o !== i && (u.y = o, delete t.top), t[r] = f.getTranslateCss(u)
            }
        }, rt = {
            setup: function (t, i) {
                var r = i.from, u = n.isPlainObject(r) ? t.css("opacity") : String(r), f = String(i.to);
                i.from = {opacity: u}, i.to = {opacity: f}
            }
        }, ut = {
            setup: function (n, t) {
                if (e.transform3d) {
                    var i = t.from, u = t.to, f = "opacity" in i ? i.opacity : n.css("opacity"),
                        o = "opacity" in u ? u.opacity : 1, s = "scale" in i ? i.scale : 0, h = "scale" in u ? u.scale : 1;
                    t.from = {opacity: f}, t.from[r] = this._getCssTransform(s), t.to = {opacity: o}, t.to[r] = this._getCssTransform(h)
                }
            }, _getCssTransform: function (n) {
                return "scale(" + n + ")"
            }
        }, ft = {
            DIRECTIONS: ["left", "right", "top", "bottom"], setup: function (n, t) {
                if (e.transform3d) {
                    var u = t.from, i = t.to, o = this._normalizeDirection(i.direction), f = this._getDirectionFactor(o),
                        s = this._getAxis(o), h = "rotate" in u ? u.rotate : -f * 180,
                        c = "rotate" in i ? i.rotate : f * 180, a = "scale" in u ? u.scale : f === 1 ? 1 : .8,
                        v = "scale" in i ? i.scale : f === 1 ? .8 : 1;
                    t.from[r] = this._getCssTransform(s, h, a), t.from[l] = "hidden", t.to[r] = this._getCssTransform(s, c, v), t.to[l] = "hidden"
                }
            }, _normalizeDirection: function (t) {
                var i = n.inArray(this.DIRECTIONS);
                return i !== -1 ? t : "left"
            }, _getAxis: function (n) {
                return n === "left" || n === "right" ? "Y" : n === "top" || n === "bottom" ? "X" : void 0
            }, _getDirectionFactor: function (n) {
                return n === "left" || n === "top" ? -1 : n === "right" || n === "bottom" ? 1 : void 0
            }, _getCssTransform: function (n, t, i) {
                return "rotate" + n + "(" + t + "deg) scale(" + i + ")"
            }
        }, v = {none: tt, slide: it, fade: rt, pop: ut, flip: ft}, et = function (n) {
            var t = v[n];
            if (!t) throw Error('Unknown animation type "' + n + '"');
            return t
        }, ot = {type: "none", from: {}, to: {}, duration: 400, complete: n.noop, easing: "ease", delay: 0},
        st = function (t, i) {
            var r = n(t);
            return i = n.extend(!0, {}, ot, i), et(i.type).setup(r, i), p(r), y(r, i.from), ht(r, i).done(i.complete)
        }, y = function (t, i) {
            n.each(i, function (n, i) {
                t.css(n, i)
            })
        }, ht = function (i, r) {
            var f = n.Deferred();
            return i.data(u, r), t.fx.off && (r.duration = 0), c(r).animate(i, r).done(function () {
                i.removeData(u), f.resolveWith(this, [i, r])
            }), f.promise()
        }, ct = function (n) {
            return !!n.data(u)
        }, p = function (t, i) {
            var r = n(t);
            c(r.data(u)).stop(r, i), r.removeData(u)
        };
    t.fx = {off: !1, animationTypes: v, animate: st, animating: ct, stop: p}
}(jQuery, DevExpress), function (n, t) {
    function e(n) {
        return /^(localhost$|127\.)/i.test(n)
    }

    var r = window.location, u = "dxproxy.devexpress.com:8000", f = r.protocol === "ms-appx:", o = r.host === u,
        s = e(r.hostname), h = function () {
            return r.pathname.split("/")[1]
        }, c = function (n) {
            var i = t.parseUrl(n);
            return e(i.hostname) ? "http://" + u + "/" + h() + "_" + i.port + i.pathname + i.search : n
        }, l = t.EndpointSelector = function (n) {
            this.config = n
        };
    l.prototype = {
        urlFor: function (n) {
            var t = this.config[n];
            if (!t) throw Error("Unknown endpoint key");
            return o ? c(t.local) : t.production && (f && !Debug.debuggerEnabled || !f && !s) ? t.production : t.local
        }
    }
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.utils, f, u;
    t.NumericFormat = {
        currency: "C",
        fixedpoint: "N",
        exponential: "",
        percent: "P",
        decimal: "D"
    }, t.LargeNumberFormatPostfixes = {
        1: "K",
        2: "M",
        3: "B",
        4: "T"
    }, f = 4, u = 10, t.LargeNumberFormatPowers = {
        largenumber: "auto",
        thousands: 1,
        millions: 2,
        billions: 3,
        trillions: 4
    }, t.DateTimeFormat = {
        longdate: "D",
        longtime: "T",
        monthandday: "M",
        monthandyear: "Y",
        quarterandyear: "qq",
        shortdate: "d",
        shorttime: "t",
        millisecond: "fff",
        second: "T",
        minute: "t",
        hour: "t",
        day: "dd",
        week: "dd",
        month: "MMMM",
        quarter: "qq",
        year: "yyyy",
        longdatelongtime: "D",
        shortdateshorttime: "d"
    }, t.formatHelper = {
        romanDigits: ["I", "II", "III", "IV"], _addFormatSeparator: function (n, t) {
            var i = " ";
            return t ? n + i + t : n
        }, _getDateTimeFormatPattern: function (n) {
            return Globalize.findClosestCulture().calendar.patterns[t.DateTimeFormat[n.toLowerCase()]]
        }, _isDateFormatContains: function (i) {
            var r = !1;
            return n.each(t.DateTimeFormat, function (n) {
                return r = n === i.toLowerCase(), !r
            }), r
        }, getQuarter: function (n) {
            return Math.floor(n / 3)
        }, getQuarterString: function (n, t) {
            var i = "", r = this.getQuarter(n.getMonth());
            switch (t) {
                case"q":
                    i = this.romanDigits[r];
                    break;
                case"qq":
                    i = "Q" + this.romanDigits[r];
                    break;
                case"Q":
                    i = (r + 1).toString();
                    break;
                case"QQ":
                    i = "Q" + (r + 1).toString()
            }
            return i
        }, getFirstQuarterMonth: function (n) {
            return this.getQuarter(n) * 3
        }, _formatCustomString: function (n, t) {
            for (var f = /qq|q|QQ|Q/g, i, u = "", r = 0; r < t.length;) i = f.exec(t), (!i || i.index > r) && (u += Globalize.format(n, t.substring(r, i ? i.index : t.length))), i ? (u += this.getQuarterString(n, i[0]), r = i.index + i[0].length) : r = t.length;
            return u
        }, _parseNumberFormatString: function (i) {
            var u, r = {};
            if (i && typeof i == "string") return u = i.toLowerCase().split(" "), n.each(u, function (n, i) {
                i in t.NumericFormat ? r.formatType = i : i in t.LargeNumberFormatPowers && (r.power = t.LargeNumberFormatPowers[i])
            }), r.power && !r.formatType && (r.formatType = "fixedpoint"), r.formatType ? r : void 0
        }, _calculateNumberPower: function (n, t, r, u) {
            var f = Math.abs(n), e = 0;
            if (f > 1) while (f && f >= t && (u === i || e < u)) e++, f = f / t; else if (f > 0 && f < 1) while (f < 1 && (r === i || e > r)) e--, f = f * t;
            return e
        }, _getNumberByPower: function (n, t, i) {
            for (var r = n; t > 0;) r = r / i, t--;
            while (t < 0) r = r * i, t++;
            return r
        }, _formatNumber: function (n, i, r) {
            var u;
            return i.power === "auto" && (i.power = this._calculateNumberPower(n, 1e3, 0, f)), i.power && (n = this._getNumberByPower(n, i.power, 1e3)), u = t.LargeNumberFormatPostfixes[i.power] || "", this._formatNumberCore(n, i.formatType, r) + u
        }, _formatNumberExponential: function (n, t) {
            var r = this._calculateNumberPower(n, u), f = this._getNumberByPower(n, r, u), e;
            return t = t === i ? 1 : t, f.toFixed(t || 0) >= u && (r++, f = f / u), e = (r >= 0 ? "+" : "") + r.toString(), this._formatNumberCore(f, "fixedpoint", t) + "E" + e
        }, _formatNumberCore: function (n, i, u) {
            return i === "exponential" ? this._formatNumberExponential(n, u) : Globalize.format(n, t.NumericFormat[i] + (r.isNumber(u) ? u : 0))
        }, _formatDate: function (n, i) {
            var u = t.DateTimeFormat[i.toLowerCase()];
            return (i = i.toLowerCase(), i === "quarterandyear" && (u = this.getQuarterString(n, u) + " yyyy"), i === "quarter") ? this.getQuarterString(n, u) : i === "longdatelongtime" ? this._formatDate(n, "longdate") + " " + this._formatDate(n, "longtime") : i === "shortdateshorttime" ? this._formatDate(n, "shortDate") + " " + this._formatDate(n, "shortTime") : Globalize.format(n, u)
        }, format: function (n, t, i) {
            if (t && t.format) {
                if (t.dateType) return this._formatDateEx(n, t);
                if (r.isNumber(n) && isFinite(n)) return this._formatNumberEx(n, t)
            }
            return this._format(n, t, i)
        }, _format: function (n, t, i) {
            var u;
            return !r.isString(t) || t === "" || !r.isNumber(n) && !r.isDate(n) ? r.isDefined(n) ? n.toString() : "" : (u = this._parseNumberFormatString(t), r.isNumber(n) && u) ? this._formatNumber(n, u, i) : r.isDate(n) && this._isDateFormatContains(t) ? this._formatDate(n, t) : !u && !this._isDateFormatContains(t) ? this._formatCustomString(n, t) : void 0
        }, _formatNumberEx: function (n, i) {
            var a = this, v = t.NumericFormat[i.format.toLowerCase()], f = Globalize.culture().numberFormat,
                w = i.currencyCulture && Globalize.cultures[i.currencyCulture] ? Globalize.cultures[i.currencyCulture].numberFormat.currency : f.currency,
                b = f.percent, c = a._getUnitFormatSettings(n, i), k = c.unit, y = c.precision,
                nt = c.showTrailingZeros, tt = c.includeGroupSeparator, it = f[","], rt = f["."], r, l, o, u,
                d = /n|\$|-|%/g, e = "", s, p, g, h;
            n = a._applyUnitToValue(n, k), r = Math.abs(n), l = n < 0;
            switch (v) {
                case"D":
                    if (o = "n", r = Math[l ? "ceil" : "floor"](r), y > 0) {
                        for (s = "" + r, p = s.length; p < y; p += 1) s = "0" + s;
                        r = s
                    }
                    l && (r = "-" + r);
                    break;
                case"N":
                    u = f;
                case"C":
                    u = u || w;
                case"P":
                    u = u || b, o = l ? u.pattern[0] : u.pattern[1] || "n", r = Globalize.format(r * (v === "P" ? 100 : 1), "N" + y), nt || (r = a._excludeTrailingZeros(r, rt)), tt || (r = r.replace(new RegExp("\\" + it, "g"), ""));
                    break;
                default:
                    throw"Illegal numeric format: '" + v + "'";
            }
            for (; ;) if (g = d.lastIndex, h = d.exec(o), e += o.slice(g, h ? h.index : o.length), h) switch (h[0]) {
                case"-":
                    /[1-9]/.test(r) && (e += f["-"]);
                    break;
                case"$":
                    e += w.symbol;
                    break;
                case"%":
                    e += b.symbol;
                    break;
                case"n":
                    e += r + k
            } else break;
            return (i.plus && n > 0 ? "+" : "") + e
        }, _excludeTrailingZeros: function (n, t) {
            var u = n.indexOf(t), r, i;
            if (u < 0) return n;
            for (r = n.length, i = r - 1; i >= u && (n[i] === "0" || i === u); i--) r--;
            return n.substring(0, r)
        }, _getUnitFormatSettings: function (n, t) {
            var e = t.unit || "", u = t.precision || 0, h = t.includeGroupSeparator || !1,
                s = t.showTrailingZeros === i ? !0 : t.showTrailingZeros, f = t.significantDigits || 1, r, o;
            if (e.toLowerCase() === "auto") if (s = !1, r = Math.abs(n), f < 1 && (f = 1), r >= 1e9 ? (e = "B", r /= 1e9) : r >= 1e6 ? (e = "M", r /= 1e6) : r >= 1e3 ? (e = "K", r /= 1e3) : e = "", r == 0) u = 0; else if (r < 1) for (u = f, o = Math.pow(10, -f); r < o;) o /= 10, u++; else u = r >= 100 ? f - 3 : r >= 10 ? f - 2 : f - 1;
            return u < 0 && (u = 0), {unit: e, precision: u, showTrailingZeros: s, includeGroupSeparator: h}
        }, _applyUnitToValue: function (n, t) {
            return t == "B" ? n.toFixed(1) / 1e9 : t == "M" ? n / 1e6 : t == "K" ? n / 1e3 : n
        }, _formatDateEx: function (t, r) {
            var u = this, l = "Q", c = r.format, f = r.dateType, h = Globalize.culture().calendars.standard, o = i, s,
                e;
            if (c = c.toLowerCase(), f !== "num" || c === "dayofweek") switch (c) {
                case"monthyear":
                    return u._formatDate(t, "monthandyear");
                case"quarteryear":
                    return u.getQuarterString(t, "QQ") + " " + t.getFullYear();
                case"daymonthyear":
                    return u._formatDate(t, f + "Date");
                case"datehour":
                    return o = new Date(t.getTime()), o.setMinutes(0), e = u._formatDate(t, f + "Date"), e + " " + u._formatDate(o, "shorttime");
                case"datehourminute":
                    return e = u._formatDate(t, f + "Date"), e + " " + u._formatDate(t, "shorttime");
                case"datehourminutesecond":
                    return e = u._formatDate(t, f + "Date"), e + " " + u._formatDate(t, "longtime");
                case"year":
                    return e = t.toString(), f === "abbr" ? e.slice(2, 4) : e;
                case"quarter":
                    return l + t.toString();
                case"month":
                    return s = t - 1, f === "abbr" ? h.months.namesAbbr[s] : h.months.names[s];
                case"hour":
                    return f === "long" ? (o = new Date, o.setHours(t), o.setMinutes(0), u._formatDate(o, "shorttime")) : t.toString();
                case"dayofweek":
                    return s = n.inArray(t, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), f !== "num" ? f === "abbr" ? h.days.namesAbbr[s] : h.days.names[s] : ((s - h.firstDay + 1 + 7) % 8).toString();
                default:
                    return t.toString()
            } else return t.toString()
        }, getTimeFormat: function (n) {
            return n ? this._getDateTimeFormatPattern("longtime") : this._getDateTimeFormatPattern("shorttime")
        }, getDateFormatByDifferences: function (n) {
            var i = "";
            return (n.millisecond && (i = t.DateTimeFormat.millisecond), (n.hour || n.minute || n.second) && (i = this._addFormatSeparator(this.getTimeFormat(n.second), i)), n.year && n.month && n.day) ? this._addFormatSeparator(this._getDateTimeFormatPattern("shortdate"), i) : n.year && n.month ? t.DateTimeFormat.monthandyear : n.year ? t.DateTimeFormat.year : n.month && n.day ? this._addFormatSeparator(this._getDateTimeFormatPattern("monthandday"), i) : n.month ? t.DateTimeFormat.month : n.day ? this._addFormatSeparator("dddd, dd", i) : i
        }, getDateFormatByTicks: function (n) {
            var f, t, u, i, e;
            if (n.length > 1) for (t = r.getDatesDifferences(n[0], n[1]), i = 1; i < n.length - 1; i++) u = r.getDatesDifferences(n[i], n[i + 1]), t.count < u.count && (t = u); else t = {
                year: !0,
                month: !0,
                day: !0,
                hour: n[0].getHours() > 0,
                minute: n[0].getMinutes() > 0,
                second: n[0].getSeconds() > 0
            };
            return f = this.getDateFormatByDifferences(t)
        }, getDateFormatByTickInterval: function (n, t, i) {
            var e, u, f, s = {quarter: "month", week: "day"}, o = function (n, t, i) {
                switch (t) {
                    case"year":
                        n.month = i;
                    case"quarter":
                    case"month":
                        n.day = i;
                    case"week":
                    case"day":
                        n.hour = i;
                    case"hour":
                        n.minute = i;
                    case"minute":
                        n.second = i;
                    case"second":
                        n.millisecond = i
                }
            }, h = function (n, t, i) {
                !i.getMilliseconds() && i.getSeconds() ? i.getSeconds() - t.getSeconds() == 1 && (n.millisecond = !0, n.second = !1) : !i.getSeconds() && i.getMinutes() ? i.getMinutes() - t.getMinutes() == 1 && (n.second = !0, n.minute = !1) : !i.getMinutes() && i.getHours() ? i.getHours() - t.getHours() == 1 && (n.minute = !0, n.hour = !1) : !i.getHours() && i.getDate() > 1 ? i.getDate() - t.getDate() == 1 && (n.hour = !0, n.day = !1) : i.getDate() === 1 && i.getMonth() ? i.getMonth() - t.getMonth() == 1 && (n.day = !0, n.month = !1) : !i.getMonth() && i.getFullYear() && i.getFullYear() - t.getFullYear() == 1 && (n.month = !0, n.year = !1)
            };
            return i = r.isString(i) ? i.toLowerCase() : i, u = r.getDatesDifferences(n, t), n !== t && h(u, n > t ? t : n, n > t ? n : t), f = r.getDateUnitInterval(u), o(u, f, !0), f = r.getDateUnitInterval(i || "second"), o(u, f, !1), u[s[f] || f] = !0, e = this.getDateFormatByDifferences(u)
        }
    }
}(jQuery, DevExpress), function (n, t, i) {
    var o = !!window.ko, s = function (n) {
        return n.replace(/\[/g, ".").replace(/\]/g, "")
    }, u = function (n) {
        return o ? ko.utils.unwrapObservable(n) : n
    }, h = function (n) {
        return o && ko.isObservable(n)
    }, c = function (n, t, i) {
        var r = n[t];
        h(r) ? r(i) : n[t] = i
    }, f = function (t) {
        if (arguments.length > 1 && (t = n.makeArray(arguments)), !t || t === "this") return function (n) {
            return n
        };
        if (n.isFunction(t)) return t;
        if (n.isArray(t)) return a(t);
        t = s(t);
        var i = t.split(".");
        return function (t, r) {
            r = r || {};
            var f = u(t);
            return n.each(i, function () {
                if (!f) return !1;
                var t = u(f[this]);
                n.isFunction(t) && !r.functionsAsIs && (t = t.call(f)), f = t
            }), f
        }
    }, a = function (t) {
        var r = {};
        return n.each(t, function () {
            r[this] = f(this)
        }), function (t) {
            var u = {};
            return n.each(r, function (n) {
                var o = this(t), f, e, s, r;
                if (o !== i) {
                    for (f = u, e = n.split("."), s = e.length - 1, r = 0; r < s; r++) f = f[e[r]] = {};
                    f[e[r]] = o
                }
            }), u
        }
    }, v = function (t) {
        if (!t || t === "this") throw Error("Cannot assign to self");
        t = s(t);
        var e = t.lastIndexOf("."), o = f(t.substr(0, e)), r = t.substr(1 + e);
        return function (t, f, e) {
            e = e || {};
            var l = o(t, {functionsAsIs: e.functionsAsIs}), s = l[r];
            e.functionsAsIs || !n.isFunction(s) || h(s) ? (s = u(s), e.merge && n.isPlainObject(f) && (s === i || n.isPlainObject(s)) ? (s || c(l, r, {}), n.extend(!0, u(l[r]), f)) : c(l, r, f)) : l[r](f)
        }
    }, y = function (n) {
        return [n[0], n.length < 3 ? "=" : n[1].toLowerCase(), n.length < 2 ? !0 : n[n.length - 1]]
    }, p = function (t) {
        return n.isArray(t) || (t = [t]), n.map(t, function (t) {
            return {
                selector: n.isFunction(t) || typeof t == "string" ? t : t.field || t.selector,
                desc: !!(t.desc || String(t.dir).charAt(0).toLowerCase() === "d")
            }
        })
    }, l = t.Class.inherit({
        ctor: function (n) {
            n && (n = String(n)), this._value = this._normalize(n || this._generate())
        }, _normalize: function (n) {
            for (n = n.replace(/[^a-f0-9]/ig, "").toLowerCase(); n.length < 32;) n += "0";
            return [n.substr(0, 8), n.substr(8, 4), n.substr(12, 4), n.substr(16, 4), n.substr(20)].join("-")
        }, _generate: function () {
            for (var t = "", n = 0; n < 32; n++) t += Math.round(Math.random() * 16).toString(16);
            return t
        }, toString: function () {
            return this._value
        }, valueOf: function () {
            return this._value
        }, toJSON: function () {
            return this._value
        }
    }), r = function (n, t) {
        return n instanceof Date ? n.getTime() : n instanceof l ? n.valueOf() : !t && typeof n == "string" ? n.toLowerCase() : n
    }, w = function (t, i, u) {
        var e, o, f;
        if (n.isArray(t)) {
            for (e = n.map(i, function (n, t) {
                return t
            }), f = 0; f < e.length; f++) if (o = e[f], r(i[o], !0) != r(u[o], !0)) return !1;
            return !0
        }
        return r(i, !0) == r(u, !0)
    }, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", k = function (t) {
        var r, i;
        for (n.isArray(t) || (t = d(String(t))), r = "", i = 0; i < t.length; i += 3) {
            var e = t[i], u = t[i + 1], f = t[i + 2];
            r += n.map([e >> 2, (e & 3) << 4 | u >> 4, isNaN(u) ? 64 : (u & 15) << 2 | f >> 6, isNaN(f) ? 64 : f & 63], function (n) {
                return b.charAt(n)
            }).join("")
        }
        return r
    }, d = function (n) {
        for (var i = [], t, r = 0; r < n.length; r++) t = n.charCodeAt(r), t < 128 ? i.push(t) : t < 2048 ? i.push(192 + (t >> 6), 128 + (t & 63)) : t < 65536 ? i.push(224 + (t >> 12), 128 + (t >> 6 & 63), 128 + (t & 63)) : t < 2097152 && i.push(240 + (t >> 18), 128 + (t >> 12 & 63), 128 + (t >> 6 & 63), 128 + (t & 63));
        return i
    }, g = function () {
        var n = {
            timeout: "Network connection timeout",
            error: "Unspecified network error",
            parsererror: "Unexpected server response"
        }, t = function (t) {
            var i = n[t];
            return i ? i : t
        };
        return function (n, i) {
            return n.status < 400 ? t(i) : n.statusText
        }
    }(), e = t.data = {
        utils: {
            compileGetter: f,
            compileSetter: v,
            normalizeBinaryCriterion: y,
            normalizeSortingInfo: p,
            toComparable: r,
            keysEqual: w,
            errorMessageFromXhr: g
        }, Guid: l, base64_encode: k, queryImpl: {}, queryAdapters: {}, query: function () {
            var t = n.isArray(arguments[0]) ? "array" : "remote";
            return e.queryImpl[t].apply(this, arguments)
        }, errorHandler: null, _handleError: function (n) {
            e.errorHandler && e.errorHandler(n)
        }
    }
}(jQuery, DevExpress), function (n, t, i) {
    var a = t.Class, u = t.data, c = u.queryImpl, f = u.utils.compileGetter, r = u.utils.toComparable, e = a.inherit({
        toArray: function () {
            var n = [];
            for (this.reset(); this.next();) n.push(this.current());
            return n
        }, countable: function () {
            return !1
        }
    }), o = e.inherit({
        ctor: function (n) {
            this.array = n, this.index = -1
        }, next: function () {
            return this.index + 1 < this.array.length ? (this.index++, !0) : !1
        }, current: function () {
            return this.array[this.index]
        }, reset: function () {
            this.index = -1
        }, toArray: function () {
            return this.array.slice(0)
        }, countable: function () {
            return !0
        }, count: function () {
            return this.array.length
        }
    }), s = e.inherit({
        ctor: function (n) {
            this.iter = n
        }, next: function () {
            return this.iter.next()
        }, current: function () {
            return this.iter.current()
        }, reset: function () {
            return this.iter.reset()
        }
    }), h = e.inherit({
        ctor: function (n, t, i) {
            this.iter = n, this.rules = [{getter: t, desc: i}]
        }, thenBy: function (n, t) {
            var i = new h(this.sortedIter || this.iter, n, t);
            return this.sortedIter || (i.rules = this.rules.concat(i.rules)), i
        }, next: function () {
            return this._ensureSorted(), this.sortedIter.next()
        }, current: function () {
            return this._ensureSorted(), this.sortedIter.current()
        }, reset: function () {
            delete this.sortedIter
        }, countable: function () {
            return this.sortedIter || this.iter.countable()
        }, count: function () {
            return this.sortedIter ? this.sortedIter.count() : this.iter.count()
        }, _ensureSorted: function () {
            this.sortedIter || (n.each(this.rules, function () {
                this.getter = f(this.getter)
            }), this.sortedIter = new o(this.iter.toArray().sort(n.proxy(this._compare, this))))
        }, _compare: function (n, t) {
            var i, s;
            if (n === t) return 0;
            for (i = 0, s = this.rules.length; i < s; i++) {
                var e = this.rules[i], u = r(e.getter(n)), o = r(e.getter(t)), f = e.desc ? -1 : 1;
                if (u < o) return -f;
                if (u > o) return f;
                if (u !== o) return u ? f : -f
            }
            return 0
        }
    }), l = function () {
        var e = function (t) {
            var u = [], i = ["return function(d) { return "], f = 0, r = !1;
            return n.each(t, function () {
                n.isArray(this) || n.isFunction(this) ? (r && i.push(" && "), u.push(l(this)), i.push("op[", f, "](d)"), f++, r = !0) : (i.push(/and|&/i.test(this) ? " && " : " || "), r = !1)
            }), i.push(" }"), new Function("op", i.join(""))(u)
        }, i = function (n) {
            return t.utils.isDefined(n) ? n.toString() : ""
        }, o = function (n) {
            n = u.utils.normalizeBinaryCriterion(n);
            var e = f(n[0]), o = n[1], t = n[2];
            t = r(t);
            switch (o.toLowerCase()) {
                case"=":
                    return function (n) {
                        return r(e(n)) == t
                    };
                case"<>":
                    return function (n) {
                        return r(e(n)) != t
                    };
                case">":
                    return function (n) {
                        return r(e(n)) > t
                    };
                case"<":
                    return function (n) {
                        return r(e(n)) < t
                    };
                case">=":
                    return function (n) {
                        return r(e(n)) >= t
                    };
                case"<=":
                    return function (n) {
                        return r(e(n)) <= t
                    };
                case"startswith":
                    return function (n) {
                        return r(i(e(n))).indexOf(t) === 0
                    };
                case"endswith":
                    return function (n) {
                        var u = r(i(e(n)));
                        return u.lastIndexOf(t) === u.length - i(t).length
                    };
                case"contains":
                    return function (n) {
                        return r(i(e(n))).indexOf(t) > -1
                    };
                case"notcontains":
                    return function (n) {
                        return r(i(e(n))).indexOf(t) === -1
                    }
            }
        };
        return function (t) {
            return n.isFunction(t) ? t : n.isArray(t[0]) ? e(t) : o(t)
        }
    }(), v = s.inherit({
        ctor: function (n, t) {
            this.callBase(n), this.criteria = l(t)
        }, next: function () {
            while (this.iter.next()) if (this.criteria(this.current())) return !0;
            return !1
        }
    }), y = e.inherit({
        ctor: function (n, t) {
            this.iter = n, this.getter = t
        }, next: function () {
            return this._ensureGrouped(), this.groupedIter.next()
        }, current: function () {
            return this._ensureGrouped(), this.groupedIter.current()
        }, reset: function () {
            delete this.groupedIter
        }, countable: function () {
            return !!this.groupedIter
        }, count: function () {
            return this.groupedIter.count()
        }, _ensureGrouped: function () {
            var r, t;
            if (!this.groupedIter) {
                var i = {}, e = [], u = this.iter, s = f(this.getter);
                for (u.reset(); u.next();) r = u.current(), t = s(r), t in i ? i[t].push(r) : (i[t] = [r], e.push(t));
                this.groupedIter = new o(n.map(e, function (n) {
                    return {key: n, items: i[n]}
                }))
            }
        }
    }), p = s.inherit({
        ctor: function (n, t) {
            this.callBase(n), this.getter = f(t)
        }, current: function () {
            return this.getter(this.callBase())
        }, countable: function () {
            return this.iter.countable()
        }, count: function () {
            return this.iter.count()
        }
    }), w = s.inherit({
        ctor: function (n, t, i) {
            this.callBase(n), this.skip = Math.max(0, t), this.take = Math.max(0, i), this.pos = 0
        }, next: function () {
            if (this.pos >= this.skip + this.take) return !1;
            while (this.pos < this.skip && this.iter.next()) this.pos++;
            return this.pos++, this.iter.next()
        }, reset: function () {
            this.callBase(), this.pos = 0
        }, countable: function () {
            return this.iter.countable()
        }, count: function () {
            return Math.min(this.iter.count() - this.skip, this.take)
        }
    });
    c.array = function (t, r) {
        r = r || {}, t instanceof e || (t = new o(t));
        var b = function (n) {
            var t = r.errorHandler;
            t && t(n), u._handleError(n)
        }, s = function (r, u, f) {
            var o = n.Deferred().fail(b), e;
            try {
                for (t.reset(), arguments.length < 2 && (u = arguments[0], r = t.next() ? t.current() : i), e = r; t.next();) e = u(e, t.current());
                o.resolve(f ? f(e) : e)
            } catch (s) {
                o.reject(s)
            }
            return o.promise()
        }, k = function (i) {
            return n.isFunction(i) || n.isArray(i) || (i = n.makeArray(arguments)), l(new p(t, i))
        }, a = function (n) {
            return k(f(n))
        }, l = function (n) {
            return c.array(n, r)
        };
        return {
            toArray: function () {
                return t.toArray()
            }, enumerate: function () {
                var i = n.Deferred().fail(b);
                try {
                    i.resolve(t.toArray())
                } catch (r) {
                    i.reject(r)
                }
                return i.promise()
            }, sortBy: function (n, i) {
                return l(new h(t, n, i))
            }, thenBy: function (n, i) {
                if (t instanceof h) return l(t.thenBy(n, i));
                throw Error();
            }, filter: function (i) {
                return n.isArray(i) || (i = n.makeArray(arguments)), l(new v(t, i))
            }, slice: function (n, r) {
                return r === i && (r = Number.MAX_VALUE), l(new w(t, n, r))
            }, select: k, groupBy: function (n, i) {
                return l(new y(t, n, i))
            }, aggregate: s, count: function () {
                if (t.countable()) {
                    var i = n.Deferred().fail(b);
                    try {
                        i.resolve(t.count())
                    } catch (r) {
                        i.reject(r)
                    }
                    return i.promise()
                }
                return s(0, function (n) {
                    return 1 + n
                })
            }, sum: function (n) {
                return n ? a(n).sum() : s(0, function (n, t) {
                    return n + t
                })
            }, min: function (n) {
                return n ? a(n).min() : s(function (n, t) {
                    return t < n ? t : n
                })
            }, max: function (n) {
                return n ? a(n).max() : s(function (n, t) {
                    return t > n ? t : n
                })
            }, avg: function (n) {
                if (n) return a(n).avg();
                var t = 0;
                return s(0, function (n, i) {
                    return t++, n + i
                }, function (n) {
                    return t ? n / t : i
                })
            }
        }
    }
}(jQuery, DevExpress), function (n, t) {
    var r = t.data, u = r.queryImpl;
    u.remote = function (t, i, f) {
        f = f || [], i = i || {};
        var o = function (n, t) {
            return {name: n, args: t}
        }, s = function (e) {
            var o = n.Deferred(), h, c, s, l, a = function (n) {
                var t = i.errorHandler;
                t && t(n), r._handleError(n), o.reject(n)
            };
            try {
                for (h = i.adapter || "odata", n.isFunction(h) || (h = r.queryAdapters[h]), c = h(i), s = [].concat(f).concat(e); s.length;) {
                    if (l = s[0], String(l.name) !== "enumerate" && (!c[l.name] || c[l.name].apply(c, l.args) === !1)) break;
                    s.shift()
                }
                c.exec(t).done(function (t) {
                    if (s.length) {
                        var r = u.array(t, {errorHandler: i.errorHandler});
                        n.each(s, function () {
                            r = r[this.name].apply(r, this.args)
                        }), r.done(n.proxy(o.resolve, o)).fail(n.proxy(o.reject, o))
                    } else o.resolve(t)
                }).fail(a)
            } catch (v) {
                a(v)
            }
            return o.promise()
        }, e = {};
        return n.each(["sortBy", "thenBy", "filter", "slice", "select", "groupBy"], function () {
            var n = this;
            e[n] = function () {
                return u.remote(t, i, f.concat(o(n, arguments)))
            }
        }), n.each(["count", "min", "max", "sum", "avg", "aggregate", "enumerate"], function () {
            var n = this;
            e[n] = function () {
                return s.call(this, o(n, arguments))
            }
        }), e
    }
}(jQuery, DevExpress), function (n, t, i) {
    var u = t.data, o = u.Guid, h = "application/json;odata=verbose", l = function (t, i) {
        var u;
        t = n.extend({
            method: "get",
            url: "",
            params: {},
            payload: null,
            headers: {}
        }, t), i = i || {}, u = i.beforeSend, u && u(t);
        var o = (t.method || "get").toLowerCase(), r = o === "get", f = r && i.jsonp, s = n.extend({}, t.params),
            c = r ? s : JSON.stringify(t.payload), l = !r && n.param(s), e = t.url, a = !r && h;
        return l && (e += (e.indexOf("?") > -1 ? "&" : "?") + l), f && (c.$format = "json"), {
            url: e,
            data: c,
            dataType: f ? "jsonp" : "json",
            jsonp: f && "$callback",
            type: o,
            timeout: 3e4,
            headers: t.headers,
            contentType: a,
            accepts: {json: [h, "text/plain"].join()},
            xhrFields: {withCredentials: i.withCredentials}
        }
    }, s = function (t, i) {
        var r = n.Deferred();
        return n.ajax(l(t, i)).always(function (t, u) {
            var f = y(t, u), e = f.error, o = f.data, h = f.nextUrl;
            e ? r.reject(e) : i.countOnly ? r.resolve(f.count) : h ? s({url: h}, i).fail(n.proxy(r.reject, r)).done(function (n) {
                r.resolve(o.concat(n))
            }) : r.resolve(o)
        }), r.promise()
    }, a = function (n) {
        var t, i = n;
        for (("message" in n) && (t = n.message.value ? n.message.value : n.message); i = i.innererror || i.internalexception;) if (t = i.message, i.internalexception && t.indexOf("inner exception") === -1) break;
        return t
    }, v = function (t, i) {
        var o;
        if (i === "nocontent") return null;
        var r = 200, f = "Unknown error", s, e = t;
        if (i !== "success") {
            r = t.status, f = u.utils.errorMessageFromXhr(t, i);
            try {
                e = n.parseJSON(t.responseText)
            } catch (h) {
            }
        }
        return (o = e && e.error, o) ? (f = a(o) || f, r === 200 && (r = 500), e.error.code && (r = Number(e.error.code)), n.extend(Error(f), {
            httpStatus: r,
            errorDetails: o
        })) : r !== 200 ? n.extend(Error(f), {httpStatus: r}) : void 0
    }, y = function (t, i) {
        var u = v(t, i), r;
        return u ? {error: u} : n.isPlainObject(t) ? (r = t.d, !r) ? {error: Error("Malformed or unsupported JSON response received")} : (r = r.results || r, c(r), {
            data: r,
            nextUrl: t.d.__next,
            count: t.d.__count
        }) : {data: t}
    }, f = t.Class.inherit({
        ctor: function (n) {
            this._value = n
        }, valueOf: function () {
            return this._value
        }
    }), p = function () {
        var n = function (n) {
            return n = String(n), n.length < 2 && (n = "0" + n), n
        };
        return function (t) {
            var i = ["datetime'", t.getUTCFullYear(), "-", n(t.getUTCMonth() + 1), "-", n(t.getUTCDate())];
            return (t.getUTCHours() || t.getUTCMinutes() || t.getUTCSeconds() || t.getUTCMilliseconds()) && (i.push("T", n(t.getUTCHours()), ":", n(t.getUTCMinutes()), ":", n(t.getUTCSeconds())), t.getUTCMilliseconds() && i.push(".", t.getUTCMilliseconds())), i.push("'"), i.join("")
        }
    }(), r = function (n) {
        return n.replace(/\./g, "/")
    }, e = function (n) {
        return n instanceof Date ? p(n) : n instanceof o ? "guid'" + n + "'" : n instanceof f ? n.valueOf() : typeof n == "string" ? "'" + n.replace(/'/g, "''") + "'" : String(n)
    }, w = function (t) {
        if (n.isPlainObject(t)) {
            var i = [];
            return n.each(t, function (n, t) {
                i.push(r(n) + "=" + e(t))
            }), i.join()
        }
        return e(t)
    }, c = function (t) {
        n.each(t, function (n, i) {
            if (i !== null && typeof i == "object") c(i); else if (typeof i == "string") {
                var r = i.match(/^\/Date\((-?\d+)((\+|-)?(\d+)?)\)\/$/);
                r && (t[n] = new Date(Number(r[1]) + r[2] * 6e4))
            }
        })
    }, b = {
        String: function (n) {
            return n + ""
        }, Int32: function (n) {
            return ~~n
        }, Int64: function (n) {
            return n instanceof f ? n : new f(n + "L")
        }, Guid: function (n) {
            return n instanceof o ? n : new o(n)
        }
    }, k = function () {
        var t = function (n) {
            return function (t, i, r) {
                r.push(t, " ", n, " ", i)
            }
        }, i = function (n, t) {
            return function (i, r, u) {
                t ? u.push(n, "(", r, ",", i, ")") : u.push(n, "(", i, ",", r, ")")
            }
        }, o = {
            "=": t("eq"),
            "<>": t("ne"),
            ">": t("gt"),
            ">=": t("ge"),
            "<": t("lt"),
            "<=": t("le"),
            startswith: i("startswith"),
            endswith: i("endswith"),
            contains: i("substringof", !0),
            notcontains: i("not substringof", !0)
        }, s = function (n, t) {
            n = u.utils.normalizeBinaryCriterion(n), o[n[1]](r(n[0]), e(n[2]), t)
        }, h = function (t, i) {
            var r = !1;
            n.each(t, function () {
                n.isArray(this) ? (r && i.push(" and "), i.push("("), f(this, i), i.push(")"), r = !0) : (i.push(/and|&/i.test(this) ? " and " : " or "), r = !1)
            })
        }, f = function (t, i) {
            n.isArray(t[0]) ? h(t, i) : s(t, i)
        };
        return function (n) {
            var t = [];
            return f(n, t), t.join("")
        }
    }(), d = function (t) {
        var e = [], u = [], f, o, h, c, l = function () {
            return o || h !== i
        }, a = function (n, t, i) {
            if (l() || typeof n != "string") return !1;
            i && (e = []);
            var u = r(n);
            t && (u += " desc"), e.push(u)
        }, v = function () {
            var u = {};
            return t.expand && n.each(n.makeArray(t.expand), function () {
                u[r(this)] = 1
            }), f && n.each(f, function () {
                var n = this.split(".");
                n.length < 2 || (n.pop(), u[r(n.join("."))] = 1)
            }), n.map(u, function (n, t) {
                return t
            }).join() || i
        }, y = function () {
            var n = {};
            return c || (e.length && (n.$orderby = e.join(",")), o && (n.$skip = o), h !== i && (n.$top = h), f && (n.$select = r(f.join())), n.$expand = v()), u.length && (n.$filter = k(u.length < 2 ? u[0] : u)), c && (n.$inlinecount = "allpages", n.$top = 0), n
        };
        return {
            exec: function (i) {
                return s({url: i, params: n.extend(y(), t && t.params)}, {
                    beforeSend: t.beforeSend,
                    jsonp: t.jsonp,
                    withCredentials: t.withCredentials,
                    countOnly: c
                })
            }, sortBy: function (n, t) {
                return a(n, t, !0)
            }, thenBy: function (n, t) {
                return a(n, t, !1)
            }, slice: function (n, t) {
                if (l()) return !1;
                o = n, h = t
            }, filter: function (t) {
                if (l() || n.isFunction(t)) return !1;
                n.isArray(t) || (t = n.makeArray(arguments)), u.length && u.push("and"), u.push(t)
            }, select: function (t) {
                if (f || n.isFunction(t)) return !1;
                n.isArray(t) || (t = n.makeArray(arguments)), f = t
            }, count: function () {
                c = !0
            }
        }
    };
    n.extend(!0, u, {
        EdmLiteral: f,
        utils: {odata: {sendRequest: s, serializePropName: r, serializeValue: e, serializeKey: w, keyConverters: b}},
        queryAdapters: {odata: d}
    })
}(jQuery, DevExpress), function (n, t) {
    var o = t.Class, r = t.abstract, u = t.data, f = u.utils.normalizeSortingInfo,
        s = ["loading", "loaded", "modifying", "modified", "inserting", "inserted", "updating", "updated", "removing", "removed"],
        e = function (t, i) {
            return t = t.groupBy(i[0].selector), i.length > 1 && (t = t.select(function (t) {
                return n.extend({}, t, {items: e(u.query(t.items), i.slice(1)).toArray()})
            })), t
        };
    u.Store = o.inherit({
        ctor: function (t) {
            var i = this;
            t = t || {}, n.each(s, function () {
                var r = i[this] = n.Callbacks();
                this in t && r.add(t[this])
            }), this._key = t.key, this._keyGetter = u.utils.compileGetter(this._key), this._errorHandler = t.errorHandler
        }, customLoadOptions: function () {
            return null
        }, key: function () {
            return this._key
        }, keyOf: function (n) {
            return this._keyGetter(n)
        }, _requireKey: function () {
            if (!this._key) throw Error("Key expression is required for this operation");
        }, load: function (n) {
            var t = this;
            return n = n || {}, this.loading.fire(n), this._loadImpl(n).done(function (n) {
                t.loaded.fire(n)
            })
        }, _loadImpl: function (t) {
            var o = t.filter, u = t.sort, s = t.select, r = t.group, h = t.skip, c = t.take, i = this.createQuery(t);
            return o && (i = i.filter(o)), r && (r = f(r)), u && (u = f(u), r && (u = r.concat(u)), n.each(u, function (n) {
                i = i[n ? "thenBy" : "sortBy"](this.selector, this.desc)
            })), r && (i = e(i, r)), (c || h) && (i = i.slice(h || 0, c)), s && (i = i.select(s)), i.enumerate()
        }, createQuery: r, byKey: function (n, t) {
            return this._addFailHandlers(this._byKeyImpl(n, t))
        }, _byKeyImpl: r, insert: function (n) {
            var t = this;
            return t.modifying.fire(), t.inserting.fire(n), t._addFailHandlers(t._insertImpl(n).done(function (n, i) {
                t.inserted.fire(n, i), t.modified.fire()
            }))
        }, _insertImpl: r, update: function (n, t) {
            var i = this;
            return i.modifying.fire(), i.updating.fire(n, t), i._addFailHandlers(i._updateImpl(n, t).done(function (n, t) {
                i.updated.fire(n, t), i.modified.fire()
            }))
        }, _updateImpl: r, remove: function (n) {
            var t = this;
            return t.modifying.fire(), t.removing.fire(n), t._addFailHandlers(t._removeImpl(n).done(function (n) {
                t.removed.fire(n), t.modified.fire()
            }))
        }, _removeImpl: r, _addFailHandlers: function (n) {
            return n.fail(this._errorHandler, u._handleError)
        }
    })
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.data, e = r.Guid, u = function () {
        var i = n.Deferred();
        return i.resolve.apply(i, arguments).promise()
    }, f = function () {
        var i = n.Deferred();
        return i.reject.apply(i, arguments).promise()
    };
    r.ArrayStore = r.Store.inherit({
        ctor: function (t) {
            t = n.isArray(t) ? {data: t} : t || {}, this.callBase(t), this._array = t.data || []
        }, createQuery: function () {
            return r.query(this._array, {errorHandler: this._errorHandler})
        }, _byKeyImpl: function (n) {
            return u(this._array[this._indexByKey(n)])
        }, _insertImpl: function (t) {
            var s = this.key(), r, o = {};
            if (n.extend(o, t), s) {
                if (r = this.keyOf(o), r === i || typeof r == "object" && n.isEmptyObject(r)) {
                    if (n.isArray(s)) throw Error("Compound keys cannot be auto-generated");
                    r = o[s] = String(new e)
                } else if (this._array[this._indexByKey(r)] !== i) return f(Error("Attempt to insert an item with the duplicate key"))
            } else r = o;
            return this._array.push(o), u(t, r)
        }, _updateImpl: function (t, i) {
            var r, e;
            if (this.key()) {
                if (e = this._indexByKey(t), e < 0) return f(Error("Data item not found"));
                r = this._array[e]
            } else r = t;
            return n.extend(!0, r, i), u(t, i)
        }, _removeImpl: function (n) {
            var t = this._indexByKey(n);
            return t > -1 && this._array.splice(t, 1), u(n)
        }, _indexByKey: function (n) {
            for (var t = 0, i = this._array.length; t < i; t++) if (r.utils.keysEqual(this.key(), this._keyGetter(this._array[t]), n)) return t;
            return -1
        }
    })
}(jQuery, DevExpress), function (n, t) {
    var f = t.Class, r = t.abstract, u = t.data, e = f.inherit({
        ctor: function (t, i) {
            var u, f, r;
            if (this._store = t, this._dirty = !1, u = this._immediate = i.immediate, f = Math.max(100, i.flushInterval || 1e4), !u) {
                r = n.proxy(this.save, this), setInterval(r, f);
                n(window).on("beforeunload", r);
                window.cordova && document.addEventListener("pause", r, !1)
            }
        }, notifyChanged: function () {
            this._dirty = !0, this._immediate && this.save()
        }, load: function () {
            this._store._array = this._loadImpl(), this._dirty = !1
        }, save: function () {
            this._dirty && (this._saveImpl(this._store._array), this._dirty = !1)
        }, _loadImpl: r, _saveImpl: r
    }), o = e.inherit({
        ctor: function (n, t) {
            this.callBase(n, t);
            var i = t.name;
            if (!i) throw Error("Name is required");
            this._key = "dx-data-localStore-" + i
        }, _loadImpl: function () {
            var n = localStorage.getItem(this._key);
            return n ? JSON.parse(n) : []
        }, _saveImpl: function (n) {
            n.length ? localStorage.setItem(this._key, JSON.stringify(n)) : localStorage.removeItem(this._key)
        }
    }), s = {dom: o};
    u.LocalStore = u.ArrayStore.inherit({
        ctor: function (n) {
            n = typeof n == "string" ? {name: n} : n || {}, this.callBase(n), this._backend = new s[n.backend || "dom"](this, n), this._backend.load()
        }, clear: function () {
            this._array = [], this._backend.notifyChanged()
        }, _insertImpl: function (t) {
            var i = this._backend;
            return this.callBase(t).done(n.proxy(i.notifyChanged, i))
        }, _updateImpl: function (t, i) {
            var r = this._backend;
            return this.callBase(t, i).done(n.proxy(r.notifyChanged, r))
        }, _removeImpl: function (t) {
            var i = this._backend;
            return this.callBase(t).done(n.proxy(i.notifyChanged, i))
        }
    })
}(jQuery, DevExpress), function (n, t) {
    var h = t.Class, r = t.data, u = r.utils.odata, f = function (t) {
        if (!t) return t;
        var i = {};
        return n.each(t, function (n, t) {
            i[n] = u.serializeValue(t)
        }), i
    }, e = function (n, t) {
        var i = u.keyConverters[n];
        if (!i) throw Error("Unknown key type: " + n);
        return i(t)
    }, o = {
        _extractServiceOptions: function (n) {
            n = n || {}, this._url = String(n.url).replace(/\/+$/, ""), this._beforeSend = n.beforeSend, this._jsonp = n.jsonp, this._withCredentials = n.withCredentials
        }, _sendRequest: function (n, t, i, r) {
            return u.sendRequest({url: n, method: t, params: i || {}, payload: r}, {
                beforeSend: this._beforeSend,
                jsonp: this._jsonp,
                withCredentials: this._withCredentials
            })
        }
    }, s = r.Store.inherit({
        ctor: function (n) {
            this.callBase(n), this._extractServiceOptions(n), this._name = n.name, this._keyType = n.keyType
        }, customLoadOptions: function () {
            return ["expand", "customQueryParams"]
        }, _byKeyImpl: function (t, i) {
            var r = {};
            return i && i.expand && (r.$expand = n.map(n.makeArray(i.expand), u.serializePropName).join()), this._sendRequest(this._byKeyUrl(t), "GET", r)
        }, createQuery: function (n) {
            return n = n || {}, r.query(this._url, {
                beforeSend: this._beforeSend,
                errorHandler: this._errorHandler,
                jsonp: this._jsonp,
                withCredentials: this._withCredentials,
                params: f(n.customQueryParams),
                expand: n.expand
            })
        }, _insertImpl: function (t) {
            this._requireKey();
            var r = this, i = n.Deferred();
            return n.when(this._sendRequest(this._url, "POST", null, t)).done(function (n) {
                i.resolve(t, r._keyGetter(n))
            }).fail(n.proxy(i.reject, i)), i.promise()
        }, _updateImpl: function (t, i) {
            var r = n.Deferred();
            return n.when(this._sendRequest(this._byKeyUrl(t), "MERGE", null, i)).done(function () {
                r.resolve(t, i)
            }).fail(n.proxy(r.reject, r)), r.promise()
        }, _removeImpl: function (t) {
            var i = n.Deferred();
            return n.when(this._sendRequest(this._byKeyUrl(t), "DELETE")).done(function () {
                i.resolve(t)
            }).fail(n.proxy(i.reject, i)), i.promise()
        }, _byKeyUrl: function (t) {
            var i = this._keyType;
            return n.isPlainObject(i) ? n.each(i, function (n, i) {
                t[n] = e(i, t[n])
            }) : i && (t = e(i, t)), this._url + "(" + encodeURIComponent(u.serializeKey(t)) + ")"
        }
    }).include(o), c = h.inherit({
        ctor: function (t) {
            var i = this;
            i._extractServiceOptions(t), i._errorHandler = t.errorHandler, n.each(t.entities || [], function (r, u) {
                i[r] = new s(n.extend({}, t, {url: i._url + "/" + encodeURIComponent(u.name || r)}, u))
            })
        }, get: function (n, t) {
            return this.invoke(n, t, "GET")
        }, invoke: function (t, i, u) {
            u = u || "POST";
            var e = n.Deferred();
            return n.when(this._sendRequest(this._url + "/" + encodeURIComponent(t), u, f(i))).done(function (n) {
                n && t in n && (n = n[t]), e.resolve(n)
            }).fail([this._errorHandler, r._handleError, n.proxy(e.reject, e)]), e.promise()
        }, objectLink: function (n, t) {
            var i = this[n];
            if (!i) throw Error("Unknown entity name or alias: " + n);
            return {__metadata: {uri: i._byKeyUrl(t)}}
        }
    }).include(o);
    n.extend(r, {ODataStore: s, ODataContext: c})
}(jQuery, DevExpress), function (n, t) {
    function r(n) {
        return function (t, i) {
            t && t.getResponseHeader ? n.reject(Error(u.utils.errorMessageFromXhr(t, i))) : n.reject.apply(n, arguments)
        }
    }

    function f(n) {
        return "_customize" + t.inflector.camelize(n, !0)
    }

    function e(n) {
        return "_" + n + "Path"
    }

    var u = t.data;
    u.RestStore = u.Store.inherit({
        ctor: function (t) {
            var i = this;
            i.callBase(t), t = t || {}, i._url = String(t.url).replace(/\/+$/, ""), i._jsonp = t.jsonp, i._withCredentials = t.withCredentials, n.each(["Load", "Insert", "Update", "Remove", "ByKey", "Operation"], function () {
                var n = t["customize" + this];
                n && (i[f(this)] = n)
            }), n.each(["load", "insert", "update", "remove", "byKey"], function () {
                var n = t[this + "Path"];
                n && (i[e(this)] = n)
            })
        }, _loadImpl: function (t) {
            var i = n.Deferred(), u = {url: this._formatUrlNoKey("load"), type: "GET"};
            return n.when(this._createAjax(u, "load", t)).done(n.proxy(i.resolve, i)).fail(r(i)), this._addFailHandlers(i.promise())
        }, createQuery: function () {
            throw Error("Not supported");
        }, _insertImpl: function (t) {
            var i = n.Deferred(), u = this, f = {
                url: this._formatUrlNoKey("insert"),
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(t)
            };
            return n.when(this._createAjax(f, "insert")).done(function (n) {
                i.resolve(t, u.key() && u._keyGetter(n))
            }).fail(r(i)), i.promise()
        }, _updateImpl: function (t, i) {
            var u = n.Deferred(), f = {
                url: this._formatUrlWithKey("update", t),
                type: "PUT",
                contentType: "application/json",
                data: JSON.stringify(i)
            };
            return n.when(this._createAjax(f, "update")).done(function () {
                u.resolve(t, i)
            }).fail(r(u)), u.promise()
        }, _removeImpl: function (t) {
            var i = n.Deferred(), u = {url: this._formatUrlWithKey("remove", t), type: "DELETE"};
            return n.when(this._createAjax(u, "remove")).done(function () {
                i.resolve(t)
            }).fail(r(i)), i.promise()
        }, _byKeyImpl: function (t) {
            var i = n.Deferred(), u = {url: this._formatUrlWithKey("byKey", t), type: "GET"};
            return n.when(this._createAjax(u, "byKey")).done(function (n) {
                i.resolve(n)
            }).fail(r(i)), i.promise()
        }, _createAjax: function (t, i, r) {
            function o(n) {
                return "done" in n && "fail" in n
            }

            var e, u;
            if (this._jsonp && t.type === "GET" ? t.dataType = "jsonp" : n.extend(!0, t, {xhrFields: {withCredentials: this._withCredentials}}), e = this[f("operation")], e && (u = e(t, i, r), u)) {
                if (o(u)) return u;
                t = u
            }
            if (e = this[f(i)], e && (u = e(t, r), u)) {
                if (o(u)) return u;
                t = u
            }
            return n.ajax(t)
        }, _formatUrlNoKey: function (t) {
            var r = this._url, i = this[e(t)];
            return i ? n.isFunction(i) ? i(r) : r + "/" + i : r
        }, _formatUrlWithKey: function (t, i) {
            var u = this._url, r = this[e(t)];
            return r ? n.isFunction(r) ? r(u, i) : u + "/" + r + "/" + encodeURIComponent(i) : u + "/" + encodeURIComponent(i)
        }
    })
}(jQuery, DevExpress), function (n, t) {
    var r = t.data;
    r.SimpleStore = r.Store.inherit({
        ctor: function (n) {
            var t = this;
            t.callBase(n), n = n || {}, t.changed = n.changed, t.userLoadCallback = n.load, t.userLookupCallback = n.lookup
        }, _loadImpl: function (t) {
            var r, i;
            if (!this.userLoadCallback) throw new Error("Load callback was not defined");
            return r = {refresh: t.refresh}, r.searchString = t.searchString, i = this.userLoadCallback(r), i || (i = (new n.Deferred).resolve([])), n.isArray(i) && (i = (new n.Deferred).resolve(i)), i
        }, lookup: function (t, i, r) {
            if (!this.userLookupCallback) throw new Error("Lookup callback was not defined");
            var u = this.userLookupCallback(t, i, r);
            return n.isArray(u) && (u = u[0]), u || (u = (new n.Deferred).resolve([])), u.done || (u = (new n.Deferred).resolve(u)), u
        }
    })
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.data, c = t.Class, s = "__key__", l = n.Deferred().resolve([]).promise(), f = c.inherit({
        ctor: function (t) {
            t = t || {};
            var u = t.store;
            n.isArray(u) && (u = new r.ArrayStore(u)), this._store = u, this._storeLoadOptions = this._extractLoadOptions(t), this._mapFunc = t.map, this._postProcessFunc = t.postProcess, this._pageIndex = 0, this._pageSize = t.pageSize !== i ? t.pageSize : 20, this._items = [], this._updateMode = t.updateMode || "item", this._isLoaded = !1, this._preferSync = t._preferSync, this._paginate = t.paginate, this._paginate === i && (this._paginate = !this._isGrouped()), this._isLastPage = !this._paginate, this.changed = n.Callbacks(), this.loadError = n.Callbacks(), u.updated.add(this._storeUpdatedHandler = n.proxy(this._handleStoreUpdated, this)), u.inserted.add(this._storeInsertedHandler = n.proxy(this._handleStoreInserted, this)), u.removed.add(this._storeRemovedHandler = n.proxy(this._handleStoreRemoved, this)), this._customizeFilters = n.Callbacks()
        }, dispose: function () {
            this.changed.empty(), this.loadError.empty(), this._store.updated.remove(this._storeUpdatedHandler), delete this._storeUpdatedHandler, this._store.inserted.remove(this._storeInsertedHandler), delete this._storeInsertedHandler, this._store.removed.remove(this._storeRemovedHandler), delete this._storeRemovedHandler, delete this._store, this._disposed = !0
        }, _extractLoadOptions: function (t) {
            var r = {}, i = ["sort", "filter", "select", "group"], u = this._store.customLoadOptions();
            return u && (i = i.concat(u)), n.each(i, function () {
                r[this] = t[this]
            }), r
        }, loadOptions: function () {
            return this._storeLoadOptions
        }, _accessStoreLoadOption: function (n, t) {
            var i = this._storeLoadOptions;
            if (arguments.length < 2) return i[n];
            i[n] = t, this.reload()
        }, filter: function (t) {
            if (!arguments.length) return this._accessStoreLoadOption("filter");
            t && !n.isArray(t) && (t = n.makeArray(arguments)), this._accessStoreLoadOption("filter", t)
        }, clearFilter: function () {
            this.filter(null)
        }, sortBy: function (n) {
            arguments.length > 1 && (n = {
                selector: arguments[0],
                desc: arguments[1]
            }), this._accessStoreLoadOption("sort", n)
        }, clearSort: function () {
            this.sortBy(null)
        }, store: function () {
            return this._store
        }, key: function () {
            return this._store && this._store.key()
        }, _isGrouped: function () {
            return !!this._storeLoadOptions.group
        }, _assignPageIndex: function (n) {
            this._pageIndex !== n && (this._pageIndex = n, this.load())
        }, reload: function (n) {
            return this._pageIndex = 0, this._isLastPage = !this._paginate, this._loadCore(n)
        }, load: function (n) {
            return this._loadCore(n)
        }, isLoaded: function () {
            return this._isLoaded
        }, lookup: function (t) {
            var r = new n.Deferred, i = this, f = t.key, u;
            return t.lookupExpression = t.lookupExpression || i.key(), this._store.lookup ? this._store.lookup(f).done(function (n) {
                if (!i._disposed) {
                    var t = i._transformLoadedData(n);
                    r.resolve(t[0])
                }
            }) : t.lookupExpression && t.lookupExpression === i.key() ? this._loadSingleByKey(f).done(function (n) {
                r.resolve(n)
            }) : (u = i._store.toDataSource(), u.load({
                searchString: f,
                searchMethod: "=",
                searchField: t.lookupExpression,
                silent: !0
            }).done(function () {
                if (!i._disposed) {
                    var n = u.items(), t = i._transformLoadedData(n);
                    r.resolve(t[0])
                }
            }).always(function () {
                u.dispose()
            })), r
        }, nextPage: function (t) {
            if (t = t === i ? !0 : t, this._isLastPage) return l;
            this._pageIndex++;
            var r = {append: t};
            return n.extend(r, this._searchCondition), this._loadCore(r)
        }, _loadCore: function (r) {
            var h;
            r = r || {};
            var f = this, o = n.Deferred(), c = f.loadError, e = n.extend(!0, {}, f._storeLoadOptions), s;
            return !this.userDataSource && (r.searchField || e.searchFilter) && (e.filter && !n.isArray(e.filter[0]) && (e.filter = [e.filter]), e.filter = e.filter || [], s = r.searchField ? [r.searchField, r.searchMethod || "contains", r.searchString] : e.searchFilter, e.filter.push(s), f._storeLoadOptions.searchFilter = s), this._paginate && f._pageSize && n.extend(e, {
                skip: f._pageIndex * f._pageSize,
                take: f._pageSize
            }), n.extend(e, {
                refresh: !f._paginate || f._pageIndex === 0,
                searchString: r.searchString
            }), h = function () {
                return f._disposed ? i : n.when(f._store.load(e)).done(function (n) {
                    var i = function () {
                        if (!f._disposed) {
                            var t = f._items;
                            n = f._transformLoadedData(n), r.append || t.splice(0, t.length), t.push.apply(t, n), (!n.length || !f._paginate || f._pageSize && n.length < f._pageSize) && (f._isLastPage = !0), f._isLoaded = !0, r.silent || f.changed.fire(), o.resolve(n)
                        }
                    };
                    f._preferSync ? i() : t.utils.executeAsync(i)
                }).fail(n.proxy(o.reject, o))
            }, u.locked() ? u.addTask(h) : h(), o.promise().fail(n.proxy(c.fire, c))
        }, _loadSingleByKey: function (t) {
            var i = this, r = n.Deferred();
            return i._disposed || n.when(i._store.byKey(t)).done(function (n) {
                if (!i._disposed) {
                    var t = i._transformLoadedData(n);
                    r.resolve(t[0])
                }
            }), r.promise()
        }, _transformLoadedData: function (t) {
            var i = this, r;
            return r = n.map(n.makeArray(t), function (t, r) {
                var f = i._store.keyOf(t), u;
                return u = i._mapFunc ? i._mapFunc(t, r) : typeof t == "object" ? n.extend({}, t) : t, typeof t == "object" && (u[s] = f), u
            }), i._postProcessFunc && (r = i._postProcessFunc(r)), r
        }, _localIndexByKey: function (n) {
            for (var i = this._items, f = i.length, e = this._store.key(), u, t = 0; t < f; t++) if (u = i[t][s], r.utils.keysEqual(e, u, n)) return t;
            return -1
        }, _handleStoreUpdated: function (n) {
            var t = this, i;
            switch (t._updateMode) {
                case"full":
                    this.reload();
                    break;
                case"item":
                    if (t._isGrouped()) return;
                    if (i = this._localIndexByKey(n), i < 0) return;
                    t._loadSingleByKey(n).done(function (n) {
                        t._items.splice(i, 1, n), t.changed.fire()
                    })
            }
        }, _handleStoreInserted: function (n, t) {
            var i = this;
            switch (i._updateMode) {
                case"full":
                    i.reload();
                    break;
                case"item":
                    if (i._isGrouped()) return;
                    i._loadSingleByKey(t).done(function (n) {
                        i._items.push(n), i.changed.fire()
                    })
            }
        }, _handleStoreRemoved: function (n) {
            var t = this, i;
            switch (t._updateMode) {
                case"full":
                    t.reload();
                    break;
                case"item":
                    if (t._isGrouped()) return;
                    if (i = this._localIndexByKey(n), i < 0) return;
                    t._items.splice(i, 1), t.changed.fire()
            }
        }
    }), e = f.inherit({
        items: function () {
            return this._items
        }, pageIndex: function (n) {
            if (n === i) return this._pageIndex;
            this._assignPageIndex(n)
        }, isLastPage: function () {
            return this._isLastPage
        }
    }), o = f.inherit({
        ctor: function (n, t) {
            this.callBase(n, t);
            var i = ko.observable();
            this.changed.add(function () {
                i.notifySubscribers()
            }), this.items = ko.computed(function () {
                return i(), this._items
            }, this), this.pageIndex = ko.computed({
                read: function () {
                    return i(), this._pageIndex
                }, write: function (n) {
                    this._assignPageIndex(n)
                }
            }, this), this.isLastPage = ko.computed(function () {
                return i(), this._isLastPage
            }, this)
        }, dispose: function () {
            this.callBase(), this.items.dispose(), this.pageIndex.dispose(), this.isLastPage.dispose()
        }
    }), h, u;
    r.Store.redefine({
        toDataSource: function (t, i) {
            var r;
            if (t = n.extend({store: this}, t), n.isFunction(i)) r = new i(t); else switch (i) {
                case"simple":
                    r = new e(t);
                    break;
                default:
                    r = new o(t)
            }
            return r && this.changed && n.isFunction(this.changed.add) && this.changed.add(function () {
                r.reload()
            }), t.userDataSource && (r.userDataSource = t.userDataSource), r
        }
    }), h = function (n) {
        var i = window.ko ? o : e;
        return new t.data.SimpleStore(n).toDataSource({pageSize: null, userDataSource: !0}, i)
    }, u = new function () {
        var r = [], i = 0, u = function () {
            i++
        }, f = function () {
            i--, i < 1 && (n.each(r, function () {
                t.enqueue(this)
            }), r = [])
        };
        return {
            obtain: u, release: f, locked: function () {
                return i > 0
            }, addTask: function (n) {
                r.push(n)
            }
        }
    }, n.extend(!0, r, {
        DataSource: f,
        KoDataSource: o,
        SimpleDataSource: e,
        createDataSource: h,
        utils: {DataSourceLoadLock: u}
    })
}(jQuery, DevExpress), DevExpress.social = {}, function (n, t, i) {
    var ut = t.social, r = window.location, ft = window.navigator, p = window.encodeURIComponent,
        et = window.decodeURIComponent, o = ft.standalone, s = !1, y;
    if (window.cordova) n(document).on("deviceready", function () {
        s = !0
    });
    var w = "dx-facebook-access-token", h = "dx-facebook-step1", c = "dx-facebook-step2", u = null, b = null,
        k = n.Callbacks(), f, d = function () {
            return !!u
        }, ot = function () {
            return {accessToken: u, expiresIn: u ? b : 0}
        }, l = ut.Facebook = {
            loginRedirectUrl: "FacebookLoginCallback.html",
            connectionChanged: k,
            isConnected: d,
            getAccessTokenObject: ot,
            jsonp: !1
        }, st = function (n, t) {
            t = t || {}, f = s ? "https://www.facebook.com/connect/login_success.html" : ht();
            var u = (t.permissions || []).join(),
                i = "https://www.facebook.com/dialog/oauth?display=popup&client_id=" + n + "&redirect_uri=" + p(f) + "&scope=" + p(u) + "&response_type=token";
            o && e(h, r.href), s ? lt(i) : ct(i)
        }, ht = function () {
            var n = r.pathname.split(/\//g);
            return n.pop(), n.push(l.loginRedirectUrl), r.protocol + "//" + r.host + n.join("/")
        }, ct = function (n) {
            var t = 512, i = 320, r = (screen.width - t) / 2, u = (screen.height - i) / 2;
            window.open(n, null, "width=" + t + ",height=" + i + ",toolbar=0,scrollbars=0,status=0,resizable=0,menuBar=0,left=" + r + ",top=" + u)
        }, lt = function (n) {
            var t = window.open(n, "_blank");
            t.addEventListener("exit", function () {
                f = null
            }), t.addEventListener("loadstop", function (n) {
                var i = unescape(n.url);
                i.indexOf(f) === 0 && (t.close(), a(i))
            })
        }, at = function () {
            var n = window.opener;
            o ? (e(c, r.href), r.href = v(h)) : n && n.DevExpress && (n.DevExpress.social.Facebook._processLoginRedirectUrl(r.href), window.close())
        }, a = function (n) {
            var t = vt(n);
            b = t.expires_in, g(t.access_token), f = null
        }, vt = function (t) {
            var r = t.split("#")[1], u, i;
            return r ? (u = r.split(/&/g), i = {}, n.each(u, function () {
                var t = this.split("=");
                i[t[0]] = et(t[1])
            }), i) : {}
        }, yt = function () {
            g(null)
        }, g = function (n) {
            n !== u && (u = n, e(w, n), k.fire(!!n))
        }, nt = function (t, r, f) {
            if (!d()) throw Error("Not connected");
            typeof r != "string" && (f = r, r = i), r = (r || "get").toLowerCase();
            var e = n.Deferred(), o = arguments;
            return n.ajax({
                url: "https://graph.facebook.com/" + t,
                type: r,
                data: n.extend({access_token: u}, f),
                dataType: l.jsonp && r === "get" ? "jsonp" : "json"
            }).done(function (n) {
                n = n || tt(), n.error ? e.reject(n.error) : e.resolve(n)
            }).fail(function (i) {
                var u, s;
                try {
                    if (u = n.parseJSON(i.responseText), s = o[3] || 0, s++ < 3 && u.error.code == 190 && u.error.error_subcode == 466) {
                        setTimeout(function () {
                            nt(t, r, f, s).done(function (n) {
                                e.resolve(n)
                            }).fail(function (n) {
                                e.reject(n)
                            })
                        }, 500);
                        return
                    }
                } catch (h) {
                    u = tt()
                }
                e.reject(u.error)
            }), e.promise()
        }, tt = function () {
            return {error: {message: "Unknown error"}}
        }, it = function () {
            if (!rt()) throw Error("HTML5 sessionStorage or jQuery.cookie plugin is required");
        }, rt = function () {
            return !!(n.cookie || window.sessionStorage)
        }, e = function (t, i) {
            it(), i = JSON.stringify(i), window.sessionStorage ? i === null ? sess.removeItem(t) : sessionStorage.setItem(t, i) : n.cookie(t, i)
        }, v = function (t) {
            it();
            try {
                return JSON.parse(window.sessionStorage ? sessionStorage.getItem(t) : n.cookie(t))
            } catch (i) {
                return null
            }
        };
    rt() && (u = v(w)), o && (y = v(c), y && (a(y), e(h, null), e(c, null))), n.extend(l, {
        login: st,
        logout: yt,
        handleLoginRedirect: at,
        _processLoginRedirectUrl: a,
        api: nt
    })
}(jQuery, DevExpress), function (n, t) {
    var r = t.ui = {}, o = function (i) {
        var e, r;
        i = n.extend({}, i);
        var u = i.allowZoom, f = i.allowPan, o = "meta[name=viewport]";
        if (n(o).length || n("<meta />").attr("name", "viewport").appendTo("head"), e = ["width=device-width"], r = [], u ? r.push("pinch-zoom") : e.push("initial-scale=1.0", "maximum-scale=1.0"), f && r.push("pan-x", "pan-y"), f || u ? n("html").css("-ms-overflow-style", "-ms-autohiding-scrollbar") : n("html, body").css("overflow", "hidden"), n(o).attr("content", e.join()), n("html").css("-ms-touch-action", r.join(" ") || "none"), t.support.touch) n(document).on("touchmove", function (n) {
            var t = n.originalEvent.touches.length;
            (!f && t === 1 || !u && t > 1) && n.preventDefault()
        })
    }, f = t.devices.fromUA(), s = function () {
        var n = window.pageYOffset
    }, h = function () {
        var i = 60, r = f.phone, u = !navigator.standalone && /safari/i.test(navigator.userAgent), e = function () {
            window.scrollTo(0, 1)
        }, t = function (n) {
            return n.is(":input")
        };
        return function (f) {
            var o, h = n(f.target), s = n(document.activeElement), c = f.type === "touchstart";
            if (c) {
                if (t(h)) return;
                t(s) && s.blur()
            } else if (t(s)) return;
            r && u && (o = n(window).height() + i, n(document.body).height() !== o && n(document.body).height(o)), setTimeout(e, 0)
        }
    }(), e, u;
    if (f.ios) {
        n(window).on("load resize touchstart", h);
        n(function () {
            n(document.body).on("focusout", s)
        })
    }
    e = t.Class.inherit({
        getTemplateClass: function () {
            return u
        }, supportDefaultTemplate: function () {
            return !1
        }, getDefaultTemplate: function () {
            return null
        }
    }), u = t.Class.inherit({
        ctor: function (t) {
            this._template = this._element = n(t)
        }, render: function (n) {
            return n.append(this._template), this._template
        }
    }), t.registerActionExecutor({
        designMode: {
            validate: function (n) {
                !t.designMode || n.context instanceof r.dxScrollable || n.context instanceof r.dxScrollView || (n.canceled = !0)
            }
        }, gesture: {
            validate: function (t) {
                var f = t.args, i = t.context, e = f.length && f[0].component, u = r.gestureUtils.recentGestureOwner();
                !r.gestureUtils.hasRecent() || t.allowedForGesture || n.isFunction(i) && u instanceof i || u === i || u === e || (t.canceled = !0)
            }
        }, disabled: {
            validate: function (n) {
                if (n.args.length) {
                    var t = n.args[0].element;
                    t && t.is(".dx-state-disabled, .dx-state-disabled *") && (n.canceled = !0)
                }
            }
        }, disabledCollectionContainerWidgetItem: {
            validate: function (n) {
                if (n.args.length) {
                    var t = n.args[0].itemElement;
                    t && t.is(".dx-state-disabled *") && (n.canceled = !0)
                }
            }
        }
    }), n.extend(r, {TemplateProvider: e, Template: u, initViewport: o})
}(jQuery, DevExpress), function (n, t) {
    var u = t.ui, o = {
            text: "Ok", clickAction: function () {
                return !0
            }
        }, r = "dx-dialog", s = r + "-root", h = r + "-content", c = r + "-message", l = r + "-buttons", a = r + "-button",
        f = function (i) {
            var p, w, e, f, b, v, k, d, g, y;
            if (!u.dxPopup) throw new Error("DevExpress.ui.dxPopup required.");
            return p = this, e = n.Deferred(), i = n.extend(u.optionsByDevice(t.devices.current(), "dxDialog"), i), k = n(".dx-viewport"), d = n("<div/>").addClass(r).appendTo(k), g = n("<div/>").addClass(c).html(String(i.message)), y = n("<div/>").addClass(l), f = d.dxPopup({
                title: i.title || p.title,
                height: "auto",
                width: function () {
                    var r = n(window).height() > n(window).width(), t = (r ? "p" : "l") + "Width";
                    return i.hasOwnProperty(t) ? i[t] : i.width
                }
            }).data("dxPopup"), n.each(i.buttons || [o], function () {
                var i = n("<div/>").addClass(a).appendTo(y), r = new t.Action(this.clickAction, {context: f});
                i.dxButton(n.extend(this, {
                    clickAction: function () {
                        w = r.execute(arguments), v()
                    }
                }))
            }), f._element().addClass(s), f.content().addClass(h).append(g).append(y), b = function () {
                return f.show(), e.promise()
            }, v = function () {
                f.hide().done(function () {
                    f._element().remove()
                }), e.resolve(w)
            }, {show: b, hide: v}
        }, e = function (t, i) {
            var r, u = n.isPlainObject(t) ? t : {title: i, message: t};
            return r = f(u), r.show()
        }, v = function (t, i) {
            var r, u = n.isPlainObject(t) ? t : {
                title: i, message: t, buttons: [{
                    text: "Yes", clickAction: function () {
                        return !0
                    }
                }, {
                    text: "No", clickAction: function () {
                        return !1
                    }
                }]
            };
            return r = f(u), r.show()
        }, y = function (i, r, f) {
            var s, o = n.isPlainObject(i) ? i : {message: i};
            if (!u.dxToast) {
                e(o.message);
                return
            }
            r && (o.type = r), f && (o.displayTime = f), s = n("<div/>").appendTo(n(".dx-viewport")).dxToast(o).data("dxToast"), s.option("hiddenAction", function () {
                this._element().remove(), new t.Action(o.hiddenAction, {context: this}).execute(arguments)
            }), s.show()
        };
    n.extend(u, {notify: y, dialog: {custom: f, alert: e, confirm: v}})
}(jQuery, DevExpress), function (n, t, i) {
    var r = window.ko, h, g;
    if (r) {
        (function (n) {
            if (n = n.split("."), n[0] < 2 || n[0] == 2 && n[1] < 2) throw Error("Your version of KnockoutJS is too old. Please upgrade KnockoutJS to 2.2.0 or later.");
        })(r.version);
        var e = t.ui, y = t.inflector, o = "data-bind", p = "unknown", tt = "_", c = "dxKoLocks", l = "M2O", a = "O2M",
            w = "dxKoCreation", s = r.bindingProvider.instance, b = r.jsonExpressionRewriting.parseObjectLiteral,
            v = n("<div><\/div>"), it = function (n) {
                return n in e && e[n].subclassOf && e[n].subclassOf(e.Component)
            }, k = function (n) {
                return n.replace(/^['"]|['"]$/g, "")
            }, d = function (t) {
                var i;
                if (t = n(t), i = t.attr(o), i) {
                    var f = b(i), r = [], u = !1;
                    n.each(f, function () {
                        var n = k(this.key), i = "data-" + y.underscore(n);
                        it(n) && !t.attr(i) ? (u = !0, t.attr(i, this.value), r.push({
                            key: n,
                            value: "true"
                        })) : r.push(this)
                    }), u && t.attr(o, n.map(r, function (n) {
                        return n.key + ": " + n.value
                    }).join(", "))
                }
            }, rt = {
                _original: s, nodeHasBindings: function (n) {
                    return s.nodeHasBindings(n)
                }, getBindings: function (n, t) {
                    return d(n), s.getBindings(n, t)
                }
            }, ut = function () {
                var n = {}, t = function (t) {
                    return n[t] || 0
                };
                return {
                    obtain: function (i) {
                        n[i] = t(i) + 1
                    }, release: function (i) {
                        var r = t(i);
                        r === 1 ? delete n[i] : n[i] = r - 1
                    }, locked: function (n) {
                        return t(n) > 0
                    }
                }
            }, ft = function (t) {
                var i = function (i) {
                    var f = n.trim(i.attr("data-" + y.underscore(t))), r, u;
                    return f.charAt(0) === "{" ? (r = b(f), u = r[0], u && p in u && (r = n.trim(u[p]))) : r = f, r === "" && (r = []), r
                };
                r.bindingHandlers[t] = {
                    init: function (u) {
                        var f = n(u), y = i(f), h = {}, p = {}, b = function (n, t) {
                            v.attr(o, n + ":" + t);
                            try {
                                return s.getBindings(v[0], r.contextFor(u))[n]
                            } finally {
                                v.removeAttr(o)
                            }
                        }, d = function (n, i) {
                            var e = f.data(t), u = f.data(c), o = r.utils.unwrapObservable(i);
                            if (e) {
                                if (u.locked(a)) return;
                                u.obtain(l);
                                try {
                                    e.option(n, o)
                                } finally {
                                    u.release(l)
                                }
                            } else h[n] = o, r.isWriteableObservable(i) && (p[n] = i)
                        }, g = function (n, t) {
                            if (n in p) {
                                var r = this._$element, i = r.data(c);
                                if (!i.locked(l)) {
                                    i.obtain(a);
                                    try {
                                        p[n](t)
                                    } finally {
                                        i.release(a)
                                    }
                                }
                            }
                        };
                        return r.utils.domNodeDisposal.addDisposeCallback(u, function () {
                            n.each(f.data("dxComponents") || [], function (n, t) {
                                f.data(t)._dispose()
                            })
                        }), typeof y == "string" ? r.computed(function () {
                            var i = f.data(t);
                            i && i.beginUpdate(), n.each(r.utils.unwrapObservable(b(tt, y)), d), i && i.endUpdate()
                        }, null, {disposeWhenNodeIsRemoved: u}) : n.each(y, function () {
                            var t = k(n.trim(this.key)), i = n.trim(this.value);
                            r.computed(function () {
                                var n = b(t, i);
                                d(t, n)
                            }, null, {disposeWhenNodeIsRemoved: u})
                        }), h && (f.data(w, !0), f[t](h), h = null, f.data(c, new ut), f.data(t).optionChanged.add(g)), {controlsDescendantBindings: e[t].subclassOf(e.Widget)}
                    }
                }
            };
        r.bindingProvider.instance = rt, h = e.Template.inherit({
            ctor: function (t) {
                this.callBase.apply(this, arguments), this._template = n("<div />").append(t), this._cleanTemplateElement(), this._registerKoTemplate()
            }, _cleanTemplateElement: function () {
                this._element.each(function () {
                    r.cleanNode(this)
                })
            }, _registerKoTemplate: function () {
                var n = this._template.get(0);
                new r.templateSources.anonymousTemplate(n).nodes(n)
            }, render: function (t, u) {
                var e;
                u = u !== i ? u : r.dataFor(t.get(0)) || {};
                var o = r.contextFor(t[0]), s = o ? o.createChildContext(u) : u, f = n("<div />").appendTo(t);
                return r.renderTemplate(this._template.get(0), s, null, f.get(0)), e = f.contents(), t.append(e), f.remove(), e
            }
        }), g = e.TemplateProvider.inherit({
            getTemplateClass: function (n) {
                return this._createdWithKo(n) ? h : this.callBase(n)
            }, supportDefaultTemplate: function (n) {
                return this._createdWithKo(n) ? !0 : this.callBase(n)
            }, getDefaultTemplate: function (n) {
                if (this._createdWithKo(n)) return nt(n.NAME)
            }, _createdWithKo: function (n) {
                return !!n._element().data(w)
            }
        }), r.bindingHandlers.dxAction = {
            update: function (i, u, f, e) {
                var o = n(i), s = r.utils.unwrapObservable(u()), h = new t.Action(s, {context: i});
                o.off(".dxActionBinding").on("click.dxActionBinding", function () {
                    h.execute({
                        element: o, model: e, evaluate: function (n) {
                            var u = e, f;
                            return n.length > 0 && n[0] === "$" && (u = r.contextFor(i)), f = t.data.utils.compileGetter(n), f(u)
                        }
                    })
                })
            }
        };
        var nt = function () {
            var i = {};
            return function (r) {
                if (u[r] || (r = "base"), !i[r]) {
                    var e = u[r](), f = t.utils.createMarkupFromString(e);
                    f.each(function () {
                        d(n(this))
                    }), i[r] = new h(f)
                }
                return i[r]
            }
        }(), f = function (t, r, u) {
            u = u === i ? !0 : u;
            var f = n.map(r, function (n, t) {
                return t + ":" + n
            }).join(",");
            return "<" + t + ' data-bind="' + f + '">' + (u ? "<\/" + t + ">" : "")
        }, et = {
            visible: "$data.visible === undefined || $data.visible",
            css: "{ 'dx-state-disabled': $data.disabled }"
        }, u = {
            base: function () {
                var n = [f("div", et, !1)], t = f("div", {html: "html"}), i = f("div", {text: "text"}),
                    r = f("div", {html: "String($data)"});
                return n.push("<!-- ko if: $data.html -->", t, "<!-- /ko -->", "<!-- ko if: !$data.html && $data.text -->", i, "<!-- /ko -->", "<!-- ko ifnot: $.isPlainObject($data) -->", r, "<!-- /ko -->", "<\/div>"), n.join("")
            }
        };
        u.dxList = function () {
            var n = u.base(), t = f("div", {html: "key"});
            return n = [n.substring(0, n.length - 6), "<!-- ko if: $data.key -->" + t + "<!-- /ko -->", "<\/div>"], n.join("")
        }, u.dxToolbar = function () {
            var i = u.base();
            return i = [i.substring(0, i.length - 6), "<!-- ko if: $data.widget -->"], n.each(["button", "tabs", "dropDownMenu"], function () {
                var r = t.inflector.camelize(["dx", "-", this].join("")), n = {};
                n[r] = "$data.options", i.push("<!-- ko if: $data.widget === '", this, "' -->", f("div", n), "<!-- /ko -->")
            }), i.push("<!-- /ko -->"), i.join("")
        }, u.dxGallery = function () {
            var n = u.base(), t = f("div", {html: "String($data)"}), i = f("img", {attr: "{ src: String($data) }"}, !1);
            return n = n.replace(t, i)
        }, u.dxTabs = function () {
            var n = u.base(), t = f("div", {text: "text"}),
                i = f("span", {attr: "{ 'class': 'dx-icon-' + $data.icon }", css: "{ 'dx-icon': true }"}),
                r = f("img", {attr: "{ src: $data.iconSrc }", css: "{ 'dx-icon': true }"}, !1),
                e = "<!-- ko if: $data.icon -->" + i + "<!-- /ko --><!-- ko if: !$data.icon && $data.iconSrc -->" + r + '<!-- /ko --><span class="dx-tab-text" data-bind="text: $data.text"><\/span>';
            return n = n.replace("<!-- ko if: !$data.html && $data.text -->", "<!-- ko if: !$data.html && ($data.text || $data.icon || $data.iconSrc) -->").replace(t, e)
        }, u.dxActionSheet = function () {
            return f("div", {dxButton: "{ text: $data.text, clickAction: $data.clickAction, type: $data.type, disabled: !!$data.disabled }"})
        }, u.dxNavBar = u.dxTabs, n.extend(e, {
            registerComponentKoBinding: ft,
            TemplateProvider: g,
            Template: h,
            defaultTemplate: nt
        })
    }
}(jQuery, DevExpress), function (n, t, i) {
    var u = t.ui, f = t.support, r = f.touch, e = 400, o = function () {
        var u = null, o = n.Callbacks(), f, s = function (n) {
                f = n || this, clearTimeout(u), u = null, o.fire()
            }, h = function (n) {
                u || n && f !== n || (u = setTimeout(function () {
                    f = i, u = null
                }, e))
            }, c = function (n) {
                n && f !== n || (f = i, clearTimeout(u), u = null)
            }, l = function () {
                return f
            }, a = function () {
                return !!f
            }, v = /^4\.0/.test(t.devices.androidVersion()) && navigator.userAgent.indexOf("Chrome") === -1,
            y = function () {
                r && (v ? p() : document.activeElement && document.activeElement.blur())
            }, p = function () {
                var t = n("<input>").addClass("dx-hidden-input").appendTo("body");
                setTimeout(function () {
                    t.focus(), setTimeout(function () {
                        t.hide(), t.remove()
                    }, 100)
                }, 100)
            }, w = function (n) {
                r && n.preventDefault()
            }, b = function (t) {
                return n(t.target).is("input, textarea, select")
            };
        return {
            gestureStartCallbacks: o,
            preventHangingCursor: y,
            preventNativeElastic: w,
            needSkipEvent: b,
            notifyStart: s,
            notifyEnd: h,
            hasRecent: a,
            recentGestureOwner: l,
            forget: c
        }
    }();
    u.gestureUtils = o
}(jQuery, DevExpress), function (n, t) {
    var r = t.data, u = "_dataSourceOptions", e = "_handleDataSourceChanged", f = "_handleDataSourceLoadError";
    t.ui.DataHelperMixin = {
        ctor: function () {
            this.disposing.add(function () {
                this._disposeDataSource()
            })
        }, _initDataSource: function () {
            var i = this, o = i.option("dataSource"), s, h = u in this ? this[u]() : {},
                c = i._dataSourceType ? i._dataSourceType() : r.SimpleDataSource;
            if (i._disposeDataSource(), o) {
                if (n.isArray(o)) s = new r.ArrayStore(o).toDataSource(h, c); else if (n.isPlainObject(o)) if ("load" in o) s = r.createDataSource(o); else {
                    if (!o.store && !t.designMode) throw Error("Please specify 'load' function for the dataSource");
                    s = new c(n.extend(!0, {}, h, o))
                } else if (o instanceof r.DataSource) i._sharedDataSource = !0, s = o; else if (o instanceof r.Store) s = o.toDataSource(h, c); else throw Error("Invalid dataSource option");
                i._dataSource = s, s.changed.add(i._dataSourceChangedHandler = function () {
                    i._dataSourceLoading = !1, i[e](s.items())
                }), f in i && s.loadError.add(i._dataSourceLoadErrorHandler = n.proxy(i[f], i))
            }
        }, _loadDataSource: function () {
            var n = this._dataSource;
            n && (n.isLoaded() ? this._dataSourceChangedHandler() : (this._dataSourceLoading = !0, n.load()))
        }, _disposeDataSource: function () {
            this._dataSource && (this._sharedDataSource ? (delete this._sharedDataSource, this._dataSource.changed.remove(this._dataSourceChangedHandler), this._dataSource.loadError.remove(this._dataSourceLoadErrorHandler)) : this._dataSource.dispose(), delete this._dataSource, delete this._dataSourceChangedHandler, delete this._dataSourceLoadErrorHandler)
        }
    }
}(jQuery, DevExpress), function (n, t) {
    var o = t.ui, s = o.gestureUtils, r = t.Class.inherit({
        EVENT_SOURCES_REGEX: {mouse: /^mouse/i, touch: /^touch/i, keyboard: /^key/i},
        EVENTS: {
            click: "click",
            start: "touchstart mousedown",
            move: "touchmove mousemove",
            end: "touchend mouseup",
            cancel: "touchcancel",
            wheel: "mousewheel"
        },
        ctor: function (n) {
            this._namespace = n
        },
        eventSource: function (t) {
            var i = "other";
            return n.each(this.EVENT_SOURCES_REGEX, function (n) {
                if (this.test(t.type)) return i = n, !1
            }), i
        },
        isMouseEvent: function (n) {
            return this.eventSource(n) === "mouse"
        },
        isTouchEvent: function (n) {
            return this.eventSource(n) === "touch"
        },
        isKeyboardEvent: function () {
            return this.eventSource(e) === "keyboard"
        },
        eventName: function (t) {
            var r = this, i = this.EVENTS[t] || t;
            return i = i.split(/\s+/g), n.each(i, function (n, t) {
                i[n] = t + "." + r._namespace
            }), i.join(" ")
        },
        eventX: function (n) {
            return this.isMouseEvent(n) ? n.pageX : this.isTouchEvent(n) ? n.originalEvent.touches[0].pageX : void 0
        },
        eventY: function (n) {
            return this.isMouseEvent(n) ? n.pageY : this.isTouchEvent(n) ? n.originalEvent.touches[0].pageY : void 0
        },
        eventData: function (n) {
            if (this.isMouseEvent(n)) return {x: n.pageX, y: n.pageY, time: n.timeStamp};
            if (this.isTouchEvent(n)) {
                var t = (n.changedTouches || n.originalEvent.changedTouches)[0];
                return {x: t.pageX, y: t.pageY, time: n.timeStamp}
            }
        },
        eventDelta: function (n, t) {
            return {x: t.x - n.x, y: t.y - n.y, time: t.time - n.time || 1}
        },
        hasTouches: function (n) {
            return this.isMouseEvent(n) ? 0 : this.isTouchEvent(n) ? n.originalEvent.touches.length : void 0
        },
        needSkipEvent: function (n) {
            return this.isMouseEvent(n) ? s.needSkipEvent(n) || n.which > 1 : this.isTouchEvent(n) ? (n.changedTouches || n.originalEvent.changedTouches).length !== 1 : void 0
        }
    }), h = 400, u = !1, f = null;
    t.registerActionExecutor("ignoreMouseAfterTouch", {
        validate: function (t) {
            var i = t.args[0];
            (i && i.jQueryEvent && (i = i.jQueryEvent), i instanceof n.Event) && (r.prototype.isTouchEvent(i) ? (u = !0, clearTimeout(f), f = setTimeout(function () {
                u = !1
            }, h)) : r.prototype.isMouseEvent(i) && u && (t.canceled = !0))
        }
    }), t.ui.EventHelper = r
}(jQuery, DevExpress), function (n, t) {
    var e = "dxSpecialEvents", f = e + "HoldTimer", u = new t.ui.EventHelper(e), s = u.eventName("start"),
        h = u.eventName("end"), v = u.eventName("cancel"), c = n.event, l = c.special, y = l["dx:hold"] = {
            HOLD_TIMEOUT: 750, setup: function (t) {
                var r = this, i = n(r), u = function (u) {
                    i.data(f) || i.data(f, setTimeout(function () {
                        i.removeData(f), c.dispatch.call(r, n.Event("dx:hold", {target: u.target}))
                    }, t && "timeout" in t ? t.timeout : y.HOLD_TIMEOUT))
                }, e = function () {
                    clearTimeout(i.data(f)), i.removeData(f)
                };
                i.on(s + ".dxHold", u).on(h + ".dxHold", e)
            }, teardown: function () {
                var t = n(this);
                clearTimeout(t.data(f)), t.removeData(f).off(".dxHold")
            }
        }, p = 600, o = !1, a = null, r = l["dx:click"] = {
            TOUCH_BOUNDARY: 10,
            _trackingClick: !1,
            _skipNextClick: !1,
            _$target: null,
            _startX: 0,
            _startY: 0,
            _touchWasMoved: function (n) {
                var t = u.eventData(n), i = r.TOUCH_BOUNDARY;
                return Math.abs(t.x - r._startX) > i || Math.abs(t.y - r._startY) > i
            },
            _handleStart: function (t) {
                if (!u.isMouseEvent(t)) {
                    var i = t.originalEvent.targetTouches, f = i[0];
                    i.length > 1 || (r._trackingClick = !0, r._$target = n(t.target), r._startX = f.pageX, r._startY = f.pageY)
                }
            },
            _handleClick: function (t) {
                r._skipNextClick || (t.type = "dx:click", n(t.currentTarget).trigger(t)), r._skipNextClick = !1
            },
            _handleEnd: function (n) {
                (u.isTouchEvent(n) ? (o = !0, clearTimeout(a), a = setTimeout(function () {
                    o = !1
                }, p)) : u.isMouseEvent(n) && o && (r._skipNextClick = !0), u.isMouseEvent(n)) || (r._touchWasMoved(n) && (r._trackingClick = !1, r._$target = null), r._trackingClick) && (r._trackingClick = !1, r._$target.trigger("dx:click"))
            },
            _handleCancel: function () {
                r._trackingClick = !1, r._$target = null
            },
            setup: function () {
                n(this).on(["click", e, "dxClick"].join("."), n.proxy(r._handleClick, this)).on(s + ".dxClick", n.proxy(r._handleStart, this)).on(h + ".dxClick", n.proxy(r._handleEnd, this)).on(v + ".dxClick", n.proxy(r._handleCancel, this))
            },
            teardown: function () {
                n(this).off(".dxClick")
            }
        }
}(jQuery, DevExpress), function (n, t, i) {
    function o(t, i) {
        t.each(function () {
            var t = this.getElementsByTagName ? this.getElementsByTagName("*") : [], r, u;
            for (i && (t = jQuery.merge([this], t)), r = 0; (u = t[r]) != null; r++) n.each(y(u), function () {
                this._dispose()
            }), e && ko.cleanNode(u)
        })
    }

    var f = "dxComponents", e = !!window.ko, r = t.ui, u = t.data.utils, l = "dx-state-disabled", a = t.Class.inherit({
        NAME: null, _defaultOptions: function () {
            return {disabled: !1}
        }, ctor: function (i, u) {
            this._$element = n(i), this._element().data(this.NAME, this), this._element().data(f) || this._element().data(f, []), this._element().data(f).push(this.NAME), this._options = {}, this._updateLockCount = 0, this._requireRefresh = !1, this._eventHelper = new r.EventHelper(this.NAME), this.optionChanged = n.Callbacks(), this.disposing = n.Callbacks(), this.beginUpdate();
            try {
                var e = t.devices.current(), o = r.optionsByDevice(e, this.NAME) || {},
                    s = n.extend(this._defaultOptions(), o);
                this.option(s), this._initOptions(u || {})
            } finally {
                this.endUpdate()
            }
        }, _initOptions: function (n) {
            this.option(n)
        }, _optionValuesEqual: function (n, t, i) {
            return (t = u.toComparable(t, !0), i = u.toComparable(i, !0), t === null || typeof t != "object") ? t === i : !1
        }, _init: n.noop, _render: function () {
            this._renderDisabledState()
        }, _clean: n.noop, _invalidate: function () {
            this._requireRefresh = !0
        }, _refresh: function () {
            this._clean(), this._render()
        }, _dispose: function () {
            this._clean(), this.optionChanged.empty(), this.disposing.fireWith(this).empty()
        }, _renderDisabledState: function () {
            this._element().toggleClass(l, this.option("disabled"))
        }, _createAction: function (i, r) {
            var u = this, f, e, o;
            return r = n.extend({}, r), f = r.element || u._element(), e = u._modelByElement(f), r.context = e || u, r.component = u, o = new t.Action(i, r), function (t) {
                return n.isPlainObject(t) || (t = {actionValue: t}), o.execute.call(o, n.extend(t, {
                    component: u,
                    element: f,
                    model: e
                }))
            }
        }, _createActionByOption: function (n, t) {
            if (typeof n != "string") throw Error("Option name type is unexpected");
            return this._createAction(this.option(n), t)
        }, _modelByElement: function (n) {
            if (e && n.length) return ko.dataFor(n.get(0))
        }, _optionChanged: function (n) {
            n === "disabled" ? this._renderDisabledState() : this._invalidate()
        }, _element: function () {
            return this._$element
        }, instance: function () {
            return this
        }, beginUpdate: function () {
            this._updateLockCount++
        }, endUpdate: function () {
            if (this._updateLockCount--, !this._updateLockCount) if (this._initializing || this._initialized) this._requireRefresh && (this._requireRefresh = !1, this._refresh()); else {
                this._initializing = !0;
                try {
                    this._init()
                } finally {
                    this._initializing = !1, this._initialized = !0
                }
                this._render()
            }
        }, option: function (t) {
            var i = this, r = t, f = arguments[1];
            if (arguments.length < 2 && n.type(r) !== "object") return u.compileGetter(r)(i._options, {functionsAsIs: !0});
            typeof r == "string" && (t = {}, t[r] = f), i.beginUpdate();
            try {
                n.each(t, function (n, t) {
                    var r = u.compileGetter(n)(i._options, {functionsAsIs: !0}), f;
                    i._optionValuesEqual(n, r, t) || (u.compileSetter(n)(i._options, t, {
                        functionsAsIs: !0,
                        merge: !0
                    }), f = n.split(/[.\[]/)[0], i._initialized && (i.optionChanged.fireWith(i, [f, t, r]), i._optionChanged(f, t, r)))
                })
            } finally {
                i.endUpdate()
            }
        }
    }), v = function (t, u) {
        r[t] = u, u.prototype.NAME = t, n.fn[t] = function (r) {
            var s = typeof r == "string", f = this, e, o;
            return s ? (e = r, o = n.makeArray(arguments).slice(1), this.each(function () {
                var r = n(this).data(t), s, u;
                if (!r) throw Error("Component " + t + " has not been initialized on this element");
                return s = r[e], u = s.apply(r, o), u !== i ? (f = u, !1) : void 0
            })) : this.each(function () {
                var i = n(this).data(t);
                i ? i.option(r) : new u(this, r)
            }), f
        }, e && r.registerComponentKoBinding(t)
    }, y = function (t) {
        t = n(t);
        var i = t.data(f);
        return i ? n.map(i, function (n) {
            return t.data(n)
        }) : []
    }, p = n.fn.empty, s, h, c;
    n.fn.empty = function () {
        return o(this, !1), p.apply(this, arguments)
    }, s = n.fn.remove, n.fn.remove = function (n, t) {
        if (!t) {
            var i = this;
            n && (i = i.filter(n)), o(i, !0)
        }
        return s.call(this, n, t)
    }, h = n.fn.html, n.fn.html = function (n) {
        return typeof n == "string" && o(this, !1), h.apply(this, arguments)
    }, c = n.parseHTML, n.parseHTML = function () {
        return c.apply(this, arguments) || []
    }, n.extend(r, {registerComponent: v, Component: a})
}(jQuery, DevExpress), function (n, t, i) {
    var u = t.ui, l = "UIFeedback", f = "dx-feedback", h = "dx-state-active", a = "dx-state-disabled",
        v = "dx-state-invisible", y = 30, p = 400, r, e = new u.EventHelper(l), o = !1;
    u.feedback = {
        lock: function () {
            o = !0
        }, unlock: function () {
            window.setTimeout(function () {
                o = !1
            }, 0)
        }
    }, u.Widget = u.Component.inherit({
        _defaultOptions: function () {
            return n.extend(this.callBase(), {
                visible: !0,
                activeStateEnabled: !0,
                width: i,
                height: i,
                clickAction: null
            })
        }, _init: function () {
            this.callBase(), this._feedbackShowTimeout = y
        }, _render: function () {
            this.callBase(), this._element().addClass("dx-widget"), this._toggleVisibility(this.option("visible")), this._refreshFeedback(), this._renderDimensions(), this._renderClick()
        }, _dispose: function () {
            this._clearTimers(), r && r.closest(this._element()).length && (r = null), this.callBase()
        }, _clean: function () {
            this.callBase(), this._element().empty()
        }, _clearTimers: function () {
            clearTimeout(this._feedbackHideTimer), clearTimeout(this._feedbackShowTimer)
        }, _toggleVisibility: function (n) {
            this._element().toggleClass(v, !n)
        }, _renderDimensions: function () {
            var n = this.option("width"), t = this.option("height");
            this._element().width(n), this._element().height(t)
        }, _refreshFeedback: function () {
            this._feedbackDisabled() ? (this._feedbackOff(), this._element().removeClass(f)) : this._element().addClass(f)
        }, _renderClick: function () {
            var n = this._eventHelper.eventName("click");
            this._element().off(n).on(n, this._createActionByOption("clickAction"))
        }, _feedbackDisabled: function () {
            return !this.option("activeStateEnabled") || this.option("disabled")
        }, _feedbackOn: function (t, i) {
            this._feedbackDisabled() || o || (this._clearTimers(), i ? this._feedbackShow(t) : this._feedbackShowTimer = window.setTimeout(n.proxy(this._feedbackShow, this, t), this._feedbackShowTimeout), this._saveActiveElement())
        }, _feedbackShow: function (t) {
            var i = this._element();
            this._activeStateUnit && (i = n(t).closest(this._activeStateUnit)), i.hasClass(a) || i.addClass(h)
        }, _saveActiveElement: function () {
            r = this._element()
        }, _feedbackOff: function (t, i) {
            this._clearTimers(), i ? this._feedbackHide() : this._feedbackHideTimer = window.setTimeout(n.proxy(this._feedbackHide, this), p)
        }, _feedbackHide: function () {
            var n = this._element();
            this._activeStateUnit && (n = n.find(this._activeStateUnit)), n.removeClass(h), this._clearActiveElement()
        }, _clearActiveElement: function () {
            var i = this._element().get(0), t = r && r.get(0);
            t && (t === i || n.contains(i, t)) && (r = null)
        }, _optionChanged: function (n, t) {
            switch (n) {
                case"disabled":
                    this.callBase.apply(this, arguments);
                case"activeStateEnabled":
                    this._refreshFeedback();
                    break;
                case"visible":
                    this._toggleVisibility(t);
                    break;
                case"width":
                case"height":
                    this._renderDimensions();
                    break;
                case"clickAction":
                    this._renderClick();
                    break;
                default:
                    this.callBase.apply(this, arguments)
            }
        }
    });
    var w = function (t, i) {
        if (!e.needSkipEvent(t)) {
            r && s(r)._feedbackOff(!1, !0);
            var o = n(t.target).closest("." + f), u;
            o.length && (u = s(o), u._feedbackOn(t.target, i), i && u._feedbackOff())
        }
    }, c = function (n) {
        r && s(r)._feedbackOff(n)
    }, s = function (t) {
        var i;
        return n.each(t.data("dxComponents"), function (n, r) {
            if (u[r].subclassOf(u.Widget)) return i = t.data(r), !1
        }), i
    };
    n(function () {
        var i = new t.Action(w);
        n(document).on(e.eventName("start"), function (n) {
            i.execute(n)
        }).on(e.eventName("end") + " " + e.eventName("cancel"), function (u) {
            var e = r && n(u.target).closest("." + f).get(0) === r.get(0);
            !t.ui.gestureUtils.hasRecent() && e && i.execute(u, !0), c()
        });
        u.gestureUtils.gestureStartCallbacks.add(function () {
            c(!0)
        })
    })
}(jQuery, DevExpress), function (n, t) {
    var r = t.ui, u = "template", f = function (t) {
        var i = t.data("options");
        return n.trim(i).charAt(0) !== "{" && (i = "{" + i + "}"), new Function("return " + i)().dxTemplate
    }, e = r.Widget.inherit({
        _init: function () {
            this.callBase(), this._templateProvider = new r.TemplateProvider, this._initTemplates()
        }, _clean: n.noop, _initTemplates: function () {
            var t = {}, i = this._templateProvider.getTemplateClass(this),
                r = this._element().children("[data-options]");
            r.length ? r.each(function (r, u) {
                u = n(u);
                var e = f(u);
                if (!e.name) throw Error("Template name was not specified");
                t[e.name] = new i(u.get(0))
            }) : t[u] = new i(this._element().contents()), this._templates = t
        }, _getTemplate: function (n) {
            var t = this._aquireTemplate.apply(this, arguments);
            if (!t && this._templateProvider.supportDefaultTemplate(this) && (t = this._templateProvider.getDefaultTemplate(this), !t)) throw Error('Template "' + n + '" was not found and no default template specified!');
            return t
        }, _aquireTemplate: function (t) {
            return n.isFunction(t) && (t = t.apply(this, n.makeArray(arguments).slice(1))), this._templates[t]
        }
    });
    r.ContainerWidget = e
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.ui, u = r.ContainerWidget.inherit({
        _defaultOptions: function () {
            return n.extend(this.callBase(), {
                items: [],
                itemTemplate: "item",
                itemRender: null,
                itemClickAction: null,
                itemRenderedAction: null,
                noDataText: "No data to display",
                dataSource: null
            })
        }, _init: function () {
            this.callBase(), this._initDataSource(), this._loadDataSource()
        }, _optionChanged: function (n, t, i) {
            switch (n) {
                case"dataSource":
                    this._clean(), this._initDataSource(), this._loadDataSource();
                    return;
                case"noDataText":
                    this._renderEmptyMessage();
                    return;
                case"itemRenderedAction":
                    return;
                default:
                    this.callBase(n, t, i)
            }
        }, _clean: function () {
            this._itemContainer().empty()
        }, _handleDataSourceChanged: function (n) {
            this.option("items", n), this._renderEmptyMessage()
        }, _itemContainer: function () {
            return this._element()
        }, _itemClass: t.abstract, _itemSelector: function () {
            return "." + this._itemClass()
        }, _itemDataKey: t.abstract, _items: function () {
            return this._itemContainer().find(this._itemSelector())
        }, _render: function () {
            this.callBase(), this._attachClickEvent(), this._renderItems()
        }, _renderEmptyMessage: function () {
            var i = this.option("noDataText"), t = this._element().find(".dx-empty-message"), r = this.option("items"),
                u = r && r.length;
            !i || u || this._dataSourceLoading ? t.remove() : (t.length || (t = n("<div />").addClass("dx-empty-message").appendTo(this._itemContainer())), t.text(i))
        }, _attachClickEvent: function () {
            var t = this, i = t._itemSelector();
            t._itemContainer().off("." + t.NAME, i).on(t._eventHelper.eventName("click"), i, n.proxy(t._handleItemClick, t))
        }, _handleItemClick: function (n) {
            this._handleItemEvent(n, "itemClickAction")
        }, _renderItems: function () {
            var t = this.option("items") || [];
            t.length ? n.each(t, n.proxy(this._renderItem, this)) : this._renderEmptyMessage()
        }, _renderItem: function (n, t, i) {
            i = i || this._itemContainer();
            var f = this.option("itemRender"), o = this.option("itemTemplate"),
                e = this._getTemplate(t.template || o, n, t), r, u = {index: n, item: t, container: i};
            return r = f ? this._createItemByRenderer(f, u) : e ? this._createItemByTemplate(e, u) : this._createItemByRenderer(this._itemRenderDefault, u), r.addClass(this._itemClass()).data(this._itemDataKey(), t), this._createActionByOption("itemRenderedAction", {
                element: this._element(),
                allowedForGesture: !0
            })({itemElement: r, itemData: t}), r
        }, _createItemByRenderer: function (t, i) {
            var r = n("<div />").appendTo(i.container), u = t.call(this, i.item, i.index, r);
            return u && r[0] !== u[0] && r.append(u), r
        }, _createItemByTemplate: function (n, t) {
            return n.render(t.container, t.item)
        }, _itemRenderDefault: function (t, r, u) {
            n.isPlainObject(t) ? (t.visible === i || t.visible || u.hide(), t.disabled && u.addClass("dx-state-disabled"), t.text && u.text(t.text), t.html && u.html(t.html)) : u.html(String(t))
        }, _handleItemEvent: function (t, i, r) {
            var u = n(t.target).closest(this._itemSelector()),
                f = this._createActionByOption(i, {element: this._element()}),
                e = n.extend({itemElement: u, itemData: u.data(this._itemDataKey()), jQueryEvent: t}, r);
            return f(e)
        }
    }).include(r.DataHelperMixin);
    r.CollectionContainerWidget = u
}(jQuery, DevExpress), function (n, t) {
    t.ui.optionsByDevice = function (n, t) {
        var i, r, u;
        if (t === "dxScrollView") return (i = {}, navigator.appName === "Microsoft Internet Explorer" && (i.animationStrategy = "transition"), n.platform === "desktop") ? (i.scrollByContent = !1, i.showScrollbar = !1, i) : (n.platform === "win8" && (i.animationStrategy = "transition"), i);
        if (t === "dxScrollable") return (r = {}, navigator.appName === "Microsoft Internet Explorer" && (r.animationStrategy = "transition"), n.platform === "desktop") ? (r.scrollByContent = !1, r.showScrollbar = !1, r) : (n.platform === "win8" && (r.animationStrategy = "transition"), r);
        if (t === "dxList" && n.platform === "desktop") return {
            scrollingEnabled: !1,
            showScrollbar: !1,
            autoPagingEnabled: !1,
            showNextButton: !0
        };
        if (t === "dxPopup" && n.platform === "win8") return {width: "60%", height: "auto"};
        if (t === "dxDialog") {
            if (n.platform === "ios") return {width: 276};
            if (n.platform === "win8") return {width: "60%"};
            if (n.platform === "android") return {lWidth: "60%", pWidth: "80%"}
        }
        if (t === "dxLookup") {
            if (n.platform === "android") return {hideCancelButton: !0};
            if (n.platform === "win8") return u = {hideCancelButton: !0}, n.phone && (u.fullScreen = !0), u;
            if (n.platform === "ios" && n.phone) return {fullScreen: !0}
        }
    }
}(jQuery, DevExpress));
DevExpress.MOD_VIZ || (function (n) {
    n.viz = {}
}(DevExpress), function (n) {
    n.viz.core = {}
}(DevExpress), function (n, t, i) {
    var r = t.utils, u = t.viz.core, f = 2e3;
    u.outOfScreen = {x: -1e3, y: -1e3}, u.tickIntervalCalculator = {
        _defaultNumberMultipliers: [1, 2, 3, 5],
        _defaultGridSpacingFactor: 30,
        _getNumericTickInterval: function (n, t) {
            var u, f = 0, o, e = !1, i;
            if (n > 1) {
                for (u = 1; !e; u *= 10) for (i = 0; i < t.length; i++) if (f = t[i] * u, n <= f) {
                    e = !0;
                    break
                }
            } else if (n > 0) for (f = 1, u = .1; !e; u /= 10) for (i = t.length - 1; i >= 0; i--) {
                if (o = t[i] * u, n > o) {
                    e = !0;
                    break
                }
                f = o
            }
            return r.adjustValue(f)
        },
        _getDatetimeTickInterval: function (n, t) {
            var e = {
                millisecond: [1, 2, 5, 10, 25, 100, 250, 300, 500],
                second: [1, 2, 3, 5, 10, 15, 20, 30],
                minute: [1, 2, 3, 5, 10, 15, 20, 30],
                hour: [1, 2, 3, 4, 6, 8, 12],
                day: [1, 2, 3, 5, 7, 10, 14],
                month: [1, 2, 3, 6]
            }, h = {}, o, u, f, s, i;
            if (n < 1) return {milliseconds: 1};
            for (u in e) if (e.hasOwnProperty(u)) for (f = e[u], i = 0; i < f.length; i++) if (n <= r.convertDateUnitToMilliseconds(u, f[i])) return h[u + "s"] = f[i], h;
            for (o = 1; ; o *= 10) for (i = 0; i < t.length; i++) if (s = o * t[i], n <= r.convertDateUnitToMilliseconds("year", s)) return {years: s};
            return null
        },
        getTickInterval: function (n, t, i, r, u) {
            var f = this, r = r || f._defaultGridSpacingFactor, u = u || f._defaultNumberMultipliers,
                e = i > 0 ? r * t / i : 0;
            switch (n) {
                case"numeric":
                    return f._getNumericTickInterval(e, u);
                case"dateTime":
                    return f._getDatetimeTickInterval(e, u)
            }
            return null
        }
    }, u.minorTickIntervalCalculator = {
        _defaultNumberMultipliers: [2, 4, 5, 8, 10],
        _defaultGridSpacingFactor: 15,
        _getDatetimeTickInterval: function (n, t, i) {
            for (var f, u = i.length - 1; u >= 0; u--) if (f = Math.floor(n / i[u]), t <= f) return r.convertMillisecondsToDateUnits(f);
            return 0
        },
        _getNumericTickInterval: function (n, t, i) {
            for (var f, u = i.length - 1; u >= 0; u--) if (f = n / i[u], t <= f) return r.adjustValue(f);
            return 0
        },
        getTickInterval: function (n, t, i, u, f) {
            var e = this, u = r.isDefined(u) ? u : e._defaultGridSpacingFactor, f = f || e._defaultNumberMultipliers,
                o = u * t / i;
            switch (n) {
                case"numeric":
                    return e._getNumericTickInterval(t, o, f);
                case"dateTime":
                    return e._getDatetimeTickInterval(t, o, f)
            }
            return 0
        }
    }, u.tickProvider = {
        _areDisplayValuesValid: function (n, t, i) {
            var c = this, e = c._getTextFunc(i),
                o = i.renderer.drawText(e(n), u.outOfScreen.x + i.translator.translateX(n), u.outOfScreen.y, i.textOptions),
                s = i.renderer.drawText(e(t), u.outOfScreen.x + i.translator.translateX(t), u.outOfScreen.y, i.textOptions),
                r = o.getBBox(), f = s.getBBox(), h, l = i.translator.businessRange.invertX;
            return h = l ? f.x + f.width < r.x : r.x + r.width < f.x, o.remove(), s.remove(), h
        }, _removeInvalidDatesWithUnitBegining: function (n, t) {
            var i = this;
            n.length <= 1 || !t.setTicksAtUnitBeginning || !r.isDate(t.min) || i._areDisplayValuesValid(n[0], n[1], t) || n.splice(1, 1)
        }, _getMaxDisplayValue: function (n, t) {
            var e = this, i = null, f = e._getTextFunc(t), u, r;
            if (n.length > 0) for (i = f(n[0]), r = 1; r < n.length; r++) u = f(n[r]), i.length < u.length && (i = u);
            return i
        }, _getValueWidth: function (n, t) {
            var f = this, i, r;
            return n !== null ? (i = t.renderer.drawText(n, u.outOfScreen.x, u.outOfScreen.y, t.textOptions), r = i.getBBox().width, i.remove(), Math.ceil(r)) : 0
        }, _generateStartTick: function (n, t) {
            for (var e = this, s = 0, o = t.min - t.max < 0, i = t.min, u = r.isDate(t.min), f = u ? r.convertDateTickIntervalToMilliseconds(n) : n, i = Math.floor(t.min / f) * f, i = u ? new Date(i) : i; o === i - t.min < 0 && i !== t.min;) i = e._nextTick(i, n, t);
            return i
        }, _nextTick: function (n, t, i) {
            var u = r.addInterval(n, t, i.min > i.max);
            return r.isNumber(i.min) && (u = r.isExponential(u) ? r.adjustValue(u) : r.applyPrecisionByMinDelta(i.min, t, u)), r.isDate(i.min) && i.setTicksAtUnitBeginning && r.correctDateWithUnitBeginning(u, t), u
        }, _addMinorTicks: function (t, i, f, e, o) {
            var w = this, l, a = r.isDate(t) ? "dateTime" : "numeric", h, s = [], y = 0, v = e.minorTickCount + 1, p, c;
            for (e.min = t, e.max = i, r.isDefined(e.tickInterval) || (h = Math.abs(e.max - e.min), r.isDefined(e.minorTickCount) ? ((!f.majorTicks.autoArrangementStep || f.majorTicks.autoArrangementStep <= 1) && (p = e.minorTickCount + 1, y = a === "dateTime" ? r.convertDateTickIntervalToMilliseconds(f.majorTickInterval) : f.majorTickInterval, v = Math.round(h / y * p) || 1), c = a === "dateTime" ? r.convertMillisecondsToDateUnits(h / v) : h / v, n.isNumeric(c) && (c = r.adjustValue(c))) : r.isDate(t) && (c = u.minorTickIntervalCalculator.getTickInterval(a, h, h * e.deltaCoef, e.gridSpacingFactor, e.numberMultipliers))), e = n.extend(!0, {}, e, {tickInterval: c}), s = w.getTicks(e), o && s.reverse(), s.length > 0 && Math.ceil(Math.abs(i - s[s.length - 1]) * e.deltaCoef) < 2 && s.pop(), l = 0; l < s.length; l++) f.minorTicks.push(s[l]), f.fullTicks.push(s[l])
        }, _addLeftBoudedTicks: function (n, t, i) {
            r.isDefined(t) && n.majorTicks[0].valueOf() !== t.valueOf() && (i.addMinMax.max = !0, this._addMinorTicks(n.majorTicks[0], t, n, i, !0), i.addMinMax.max = !1, i.showCustomBoundaryTicks && (n.minorTicks.length > 0 && n.minorTicks[0].valueOf() === t.valueOf() && n.minorTicks.shift(t), n.customBoundaryTicks.push(t), n.fullTicks.unshift(t)))
        }, _addRightBoudedTicks: function (n, t, i) {
            var u = n.majorTicks[n.majorTicks.length - 1];
            n.fullTicks.push(u), r.isDefined(t) && u.valueOf() !== t.valueOf() && (i.addMinMax.min = !1, i.addMinMax.max = !0, this._addMinorTicks(u, t, n, i), i.showCustomBoundaryTicks && (n.minorTicks.length > 0 && n.minorTicks[n.minorTicks.length - 1].valueOf() === t.valueOf() && n.minorTicks.pop(t), n.customBoundaryTicks.push(t), n.fullTicks.push(t)))
        }, _correctBoundedTicks: function (t, i, r, u) {
            u = n.extend({}, {
                min: !0,
                max: !0
            }, u), r.length > 0 && (u.min || r[0].valueOf() !== t.valueOf() || r.shift(), u.max && r[r.length - 1].valueOf() === i.valueOf() || r.pop())
        }, _initializeMinorTicksOptions: function (t, f, e, o, s, h) {
            var a = this, c, l = r.isDefined(h.minorTickCount);
            n.extend(!0, h, {
                addMinMax: {min: !1, max: !1},
                deltaCoef: a._getDeltaCoef(o, f, e)
            }, h), h.numberMultipliers = l ? [h.minorTickCount + 1] : h.numberMultipliers, h.gridSpacingFactor = l ? 0 : h.gridSpacingFactor, !l && s.majorTicks.length > 1 && (c = Math.abs(s.majorTicks[0] - s.majorTicks[1]), a.needTickIntervalCalculation(c, s.minorTickInterval, h.incidentOccured) && (s.minorTickInterval = u.minorTickIntervalCalculator.getTickInterval(t, c, c * h.deltaCoef, h.gridSpacingFactor, h.numberMultipliers), h.tickInterval = r.isNumber(f) ? s.minorTickInterval : i))
        }, _getDataType: function (n) {
            return r.isDate(n) ? "dateTime" : "numeric"
        }, _getDeltaCoef: function (n, t, i) {
            return n / Math.abs(t - i)
        }, _initializeMajorTicksOptions: function (t, i, f, e, o, s) {
            var h;
            n.extend(!0, s, {
                min: i,
                max: f,
                screenDelta: e,
                isHorizontal: !0
            }), r.isDefined(i) && r.isDefined(f) && (h = Math.abs(f - i), this.needTickIntervalCalculation(h, o.majorTickInterval, s.incidentOccured) && (s.isStartTickGenerated = !0, o.majorTickInterval = u.tickIntervalCalculator.getTickInterval(t, h, e, s.gridSpacingFactor, s.numberMultipliers), s.tickInterval = o.majorTickInterval))
        }, _getTextFunc: function (n) {
            return n.getText || function (n) {
                return n.toString()
            }
        }, needTickIntervalCalculation: function (n, t, i) {
            var u;
            if (r.isDefined(t)) {
                if (!r.isNumber(t) && (u = new Date, t = r.addInterval(u, t) - u, !t)) return !0;
                if (r.isNumber(t)) if (t > 0 && n / t > f) i && i("Tick count is too big. So, the tick interval is specified automatically."); else return !1
            }
            return !0
        }, _getRealScreenDelta: function (n, t, i) {
            if (n.length < 1) return t.screenDelta;
            var o = t.renderer.drawText(i, u.outOfScreen.x + t.translator.translateX(n[0]), u.outOfScreen.y, t.textOptions),
                s = t.renderer.drawText(i, u.outOfScreen.x + t.translator.translateX(n[n.length - 1]), u.outOfScreen.y, t.textOptions),
                r = s.getBBox(), f = o.getBBox(), h = f.x > r.x, e;
            return e = f.isEmpty || r.isEmpty ? t.screenDelta : (h ? f.x + f.width - r.x : r.x + r.width - f.x) || t.screenDelta, o.remove(), s.remove(), Math.min(e, t.screenDelta)
        }, getAutoArrangementStep: function (n, t) {
            var e = this, i = this._getMaxDisplayValue(n, t), r = this._getValueWidth(i, t), u, f;
            return r > 0 ? (f = e._getRealScreenDelta(n, t, i), u = Math.floor((f + t.textSpacing) / (r + t.textSpacing)), Math.ceil(n.length / u)) : 1
        }, getAutoArrangementTicks: function (n, t, i) {
            var e = this, u = n, i = r.isNumber(i) ? i : e.getAutoArrangementStep(n, t), f;
            if (i > 1) for (u = [], f = 0; f < n.length; f += i) u.push(n[f]);
            return e._removeInvalidDatesWithUnitBegining(u, t), u.autoArrangementStep = i, u
        }, getTickIntervals: function (n, t, i, u, f) {
            var o = this, c, h, s = o._getDataType(n),
                e = {majorTickInterval: u.tickInterval, minorTickInterval: f.tickInterval, majorTicks: []};
            return o._initializeMajorTicksOptions(s, n, t, i, e, u), r.isDefined(n) && r.isDefined(t) && (e.majorTicks.push(n), e.majorTicks.push(o._nextTick(n, e.majorTickInterval, {
                min: n,
                max: t,
                setTicksAtUnitBeginning: u.setTicksAtUnitBeginning
            })), h = Math.abs(e.majorTicks[0] - e.majorTicks[1]), o._initializeMinorTicksOptions(s, n, t, i, e, f)), e
        }, getFullTicks: function (n, t, i, u, f) {
            var o = this, s, h = o._getDataType(n), e = {
                customBoundaryTicks: [],
                fullTicks: [],
                majorTickInterval: u.tickInterval,
                majorTicks: [],
                minorTickInterval: f.tickInterval,
                minorTicks: []
            };
            if (o._initializeMajorTicksOptions(h, n, t, i, e, u), e.majorTicks = o.getTicks(u), r.isDefined(n) && r.isDefined(t) && e.majorTicks.length > 0) {
                for (e.majorTicks.autoArrangementStep && e.majorTicks.autoArrangementStep > 1 && !r.isDefined(f.tickInterval) && !r.isDefined(f.minorTickCount) && (f.tickInterval = e.minorTickInterval = u.tickInterval), o._initializeMinorTicksOptions(h, n, t, i, e, f), o._addLeftBoudedTicks(e, n, f), s = 0; s < e.majorTicks.length - 1; s++) e.fullTicks.push(e.majorTicks[s]), o._addMinorTicks(e.majorTicks[s], e.majorTicks[s + 1], e, f);
                o._addRightBoudedTicks(e, t, f)
            }
            return e
        }, getTicks: function (t) {
            var s = this, f = [], e, c = t.max - t.min > 0, l, a, o, h = t.isStartTickGenerated, v,
                y = t.useTicksAutoArrangement;
            if (!r.isDefined(t.min) || !r.isDefined(t.max) || isNaN(t.min) || isNaN(t.max)) f = t.isHorizontal ? ["canvas_position_left", "canvas_position_center", "canvas_position_right"] : ["canvas_position_bottom", "canvas_position_middle", "canvas_position_top"], y = !1, f.hideLabels = !0; else if (o = n.isNumeric(t.min) && n.isNumeric(t.max) && !n.isNumeric(t.tickInterval) ? i : t.tickInterval, v = Math.abs(t.max - t.min), this.needTickIntervalCalculation(v, o, t.incidentOccured) && (h = r.isDefined(h) ? h : !0, o = u.tickIntervalCalculator.getTickInterval(r.isDate(t.min) ? "dateTime" : "numeric", Math.abs(t.max - t.min), t.screenDelta, t.gridSpacingFactor, t.numberMultipliers)), o.valueOf() !== 0 && t.min.valueOf() !== t.max.valueOf()) {
                e = h ? s._generateStartTick(o, t) : t.min;
                do f.push(e), e = s._nextTick(e, o, t), l = e - t.min > 0, a = t.max - e > 0; while (c === l && c === a);
                f.push(e), s._correctBoundedTicks(t.min, t.max, f, t.addMinMax)
            }
            return t.beforeTicksAutoArrangement && t.beforeTicksAutoArrangement(f), y ? s.getAutoArrangementTicks(f, t) : f
        }
    }
}(jQuery, DevExpress), function (n, t, i) {
    var f = t.Class, r = t.utils, u = Math;
    t.viz.core.LinearTranslator = f.inherit(function () {
        var f = function (n, t) {
            var i = this;
            i.canvas = t, i.updateBusinessRange(n)
        }, e = function () {
            var n = this, i = n.canvas, u = n.businessRange, f = n.businessRange.categoriesX,
                e = n.businessRange.categoriesY, o, s;
            n.width = i.width - i.left - i.right, n.height = i.height - i.top - i.bottom, f ? (n.categoriesXNumber = f.length, n.horizontalInterval = u.stickX ? n.width / (n.categoriesXNumber - 1) : n.width / n.categoriesXNumber, n.categoriesXToPoints = t(f, n.businessRange.invertX), n.translateX = b, n.getIntervalX = k) : (n.translateX = l, n.getIntervalX = nt, r.isNumber(u.minX) ? n.untranslateX = a : r.isDate(u.minX) && (n.untranslateX = v)), e ? (n.categoriesYNumber = e.length, n.verticalInterval = u.stickY ? n.height / (n.categoriesYNumber - 1) : n.height / n.categoriesYNumber, n.categoriesYToPoints = t(e, n.businessRange.invertY), n.translateY = d, n.getIntervalY = g) : (n.translateY = y, n.getIntervalY = tt, r.isNumber(u.minY) ? n.untranslateY = p : r.isDate(u.minY) && (n.untranslateY = w))
        }, o = function (n) {
            var t = this;
            t.businessRange = n, n.minVisibleX === i && (n.minVisibleX = n.minX), n.maxVisibleX === i && (n.maxVisibleX = n.maxX), n.minVisibleY === i && (n.minVisibleY = n.minY), n.maxVisibleY === i && (n.maxVisibleY = n.maxY), t.init()
        }, s = function () {
            return this.businessRange
        }, h = function (n, t) {
            var r = this, i = r.businessRange;
            i.minVisibleX = n, i.maxVisibleX = t, i.applyEqualLimitsMargins(), r.init()
        }, c = function (n, t) {
            var r = this, i = r.businessRange;
            i.minVisibleY = n, i.maxVisibleY = t, i.applyEqualLimitsMargins(), r.init()
        }, n = function (n, t, i) {
            var f = (t + "").match(/canvas_position_(.*)/), r = n.canvas, e, u = n.businessRange;
            if (f) {
                if (t = f[1], t === "default") return u["minVisible" + i] <= 0 && 0 <= u["maxVisible" + i] ? n["translate" + i](0) : i === "X" ? u.invertX ? r.left + n.width : r.left : u.invertY ? r.top : r.top + n.height;
                if (i === "X") {
                    if (t === "left") return r.left;
                    if (t === "center") return r.left + n.width / 2;
                    if (t === "right") return r.left + n.width
                } else {
                    if (t === "bottom") return r.top + n.height;
                    if (t === "middle") return r.top + n.height / 2;
                    if (t === "top") return r.top
                }
            }
            return null
        }, l = function (t) {
            var f = this, i = f.businessRange, o = f.canvas, e, s = n(f, t, "X");
            return r.isDefined(s) ? s : t < i.minX ? null : t > i.maxX ? null : (e = i.invertX ? o.left + (1 - (t - i.minVisibleX) / (i.maxVisibleX - i.minVisibleX)) * f.width : o.left + (t - i.minVisibleX) / (i.maxVisibleX - i.minVisibleX) * f.width, u.round(e))
        }, a = function (n) {
            var i = this, t = i.businessRange, r = i.canvas;
            return n < r.left ? null : n > r.left + i.width ? null : t.invertX ? t.minVisibleX + (i.width - (n - r.left)) * (t.maxVisibleX - t.minVisibleX) / i.width : t.minVisibleX + (n - r.left) * (t.maxVisibleX - t.minVisibleX) / i.width
        }, v = function (n) {
            var i = this, t = i.businessRange, r = i.canvas;
            return n < r.left ? null : n > r.left + i.width ? null : t.invertX ? new Date(t.minVisibleX.valueOf() + (i.width - (n - r.left)) * (t.maxVisibleX - t.minVisibleX) / i.width) : new Date(t.minVisibleX.valueOf() + (n - r.left) * (t.maxVisibleX - t.minVisibleX) / i.width)
        }, y = function (t) {
            var f = this, i = f.businessRange, e = f.canvas, o, s = n(f, t, "Y");
            return r.isDefined(s) ? s : t < i.minY ? null : t > i.maxY ? null : (o = i.invertY ? e.height - e.bottom - (1 - (t - i.minVisibleY) / (i.maxVisibleY - i.minVisibleY)) * f.height : e.height - e.bottom - (t - i.minVisibleY) / (i.maxVisibleY - i.minVisibleY) * f.height, u.round(o))
        }, p = function (n) {
            var i = this, t = i.businessRange, r = i.canvas;
            return n < r.top ? null : n > r.top + i.height ? null : t.invertY ? t.maxVisibleY - (i.height - (n - r.top)) * (t.maxVisibleY - t.minVisibleY) / i.height : t.maxVisibleY - (n - r.top) * (t.maxVisibleY - t.minVisibleY) / i.height
        }, w = function (n) {
            var i = this, t = i.businessRange, r = i.canvas;
            return n < r.top ? null : n > r.top + i.height ? null : t.invertY ? new Date(t.maxVisibleY.valueOf() - (i.height - (n - r.top)) * (t.maxVisibleY - t.minVisibleY) / i.height) : new Date(t.maxVisibleY.valueOf() - (n - r.top) * (t.maxVisibleY - t.minVisibleY) / i.height)
        }, b = function (t) {
            var i = this, o = i.canvas, f, h = i.businessRange.stickX, e = 0, s = n(i, t, "X");
            return r.isDefined(s) ? s : (f = i.categoriesXToPoints[t], f && (e = h ? o.left + i.horizontalInterval * f.index : o.left + i.horizontalInterval * (f.index + .5)), u.round(e))
        }, k = function () {
            var n = this;
            return n.horizontalInterval
        }, d = function (t) {
            var i = this, o = i.canvas, f, h = i.businessRange.stickY, e = 0, s = n(i, t, "Y");
            return r.isDefined(s) ? s : (f = i.categoriesYToPoints[t], f && (e = h ? o.top + i.verticalInterval * f.index : o.top + i.verticalInterval * (f.index + .5)), u.round(e))
        }, g = function () {
            var n = this;
            return n.verticalInterval
        }, nt = function () {
            var n = this, t = 0;
            return n.businessRange.intervalX !== i && (t = n.width * n.businessRange.intervalX / (n.businessRange.maxVisibleX - n.businessRange.minVisibleX)), Math.round(t)
        }, tt = function () {
            var n = this, t = 0;
            return n.businessRange.intervalY !== i && (t = n.height * n.businessRange.intervalY / (n.businessRange.maxVisibleY - n.businessRange.minVisibleY)), Math.round(t)
        }, it = function () {
            var i = this, t = i.businessRange, n = {};
            return n.minX = t.minVisibleX, n.maxX = t.maxVisibleX, n.minY = t.minVisibleY, n.maxY = t.maxVisibleY, t.categoriesX && (n.categoriesX = t.categoriesX, n.minCategoryXPos = 0, n.maxCategoryXPos = n.minCategoryXPos + n.categoriesX.length - 1), t.categoriesY && (n.categoriesY = t.categoriesY, n.minCategoryYPos = 0, n.maxCategoryYPos = n.minCategoryYPos + n.categoriesY.length - 1), n
        }, rt = function () {
            var i = this, r = i.businessRange, n = i.canvas, t = {};
            return t.minX = n.left, t.maxX = n.width - n.right, t.minY = n.top, t.maxY = n.height - n.bottom, t
        }, t = function (n, t) {
            var u = {}, r, i;
            if (t) for (i = n.length - 1; i >= 0; i--) r = n[n.length - 1 - i], u[r] = {
                name: r,
                index: i
            }; else for (i = 0; i < n.length; i++) r = n[i], u[r] = {name: r, index: i};
            return u
        };
        return {
            ctor: f,
            init: e,
            getCanvasVisibleArea: rt,
            getBusinessVisibleArea: it,
            updateBusinessRange: o,
            getBusinessRange: s,
            zoomX: h,
            zoomY: c
        }
    }())
}(jQuery, DevExpress), function (n) {
    var r = window.NaN, i = window.Number;
    n.viz.core.Translator1D = n.Class.inherit({
        ctor: function (n, t, r, u) {
            var f = this;
            f._domainStart = i(n), f._domainEnd = i(t), f._codomainStart = i(r), f._codomainEnd = i(u), f._domainDelta = f._domainEnd - f._domainStart, f._codomainDelta = f._codomainEnd - f._codomainStart
        }, getDomainStart: function () {
            return this._domainStart
        }, getDomainEnd: function () {
            return this._domainEnd
        }, getCodomainStart: function () {
            return this._codomainStart
        }, getCodomainEnd: function () {
            return this._codomainEnd
        }, getDomainRange: function () {
            return this._domainDelta
        }, getCodomainRange: function () {
            return this._codomainDelta
        }, translate: function (n) {
            var t = this, i = (n - t._domainStart) / t._domainDelta;
            return 0 <= i && i <= 1 ? t._codomainStart + i * t._codomainDelta : r
        }, adjust: function (n) {
            var t = this, u = (n - t._domainStart) / t._domainDelta, f = r;
            return u < 0 ? f = t._domainStart : u > 1 ? f = t._domainEnd : 0 <= u && u <= 1 && (f = i(n)), f
        }
    })
}(DevExpress), function (n) {
    var i = window.isFinite;
    n.viz.core.Rectangle = n.Class.inherit({
        ctor: function (n) {
            var t = this;
            n = n || {}, t.left = Number(n.left) || 0, t.right = Number(n.right) || 0, t.top = Number(n.top) || 0, t.bottom = Number(n.bottom) || 0
        }, width: function () {
            return this.right - this.left
        }, height: function () {
            return this.bottom - this.top
        }, horizontalMiddle: function () {
            return (this.left + this.right) / 2
        }, verticalMiddle: function () {
            return (this.top + this.bottom) / 2
        }, raw: function () {
            var n = this;
            return {left: n.left, top: n.top, right: n.right, bottom: n.bottom}
        }, clone: function () {
            return new this.constructor(this.raw())
        }, move: function (n, t) {
            var r = this.clone();
            return i(n) && i(t) && (r.left += Number(n), r.right += Number(n), r.top += Number(t), r.bottom += Number(t)), r
        }, inflate: function (n, t) {
            var r = this.clone();
            return i(n) && i(t) && (r.left -= Number(n), r.right += Number(n), r.top -= Number(t), r.bottom += Number(t)), r
        }, scale: function (n) {
            var t = this;
            return n > 0 ? t.inflate(t.width() * (n - 1) / 2, t.height() * (n - 1) / 2) : t.clone()
        }
    })
}(DevExpress), function (n, t) {
    var r = t.viz.core, u = t.viz;
    r.findTheme = function (n) {
        for (var r = u.themes, i, t = 0; t < r.length; t++) if (i = r[t], i.name === n) return i
    }, r.registerTheme = function (t, i) {
        var f, e;
        t && t.name && !r.findTheme(t.name) && (i ? (f = r.findTheme(i), f && (e = n.extend(!0, {}, f, t), u.themes.push(e))) : u.themes.push(t))
    }
}(jQuery, DevExpress), function (n, t) {
    function f(n) {
        var t = 0;
        this.next = function () {
            var i = n[t++];
            return t == n.length && this.reset(), i
        }, this.reset = function () {
            t = 0
        }
    }

    var r = t.viz.core, u = t.Class, e = t.utils;
    r.palettes = {
        "default": ["#5F8B95", "#BA4D51", "#AF8A53", "#955F71", "#859666", "#7E688C"],
        "Harmony Light": ["#FCB65E", "#679EC5", "#AD79CE", "#A6C567", "#E18E92", "#DDED6E", "#B7ABEA", "#A8E7E3"],
        "Soft Pastel": ["#7CBAB4", "#92C7E2", "#75B5D6", "#B78C9B", "#F2CA84", "#A7CA74"]
    }, r.findPalette = function (n) {
        return r.palettes[n]
    }, r.registerPalette = function (n, t) {
        return r.palettes[n] = t
    }, r.Palette = u.inherit({
        ctor: function (t, i) {
            var u = this;
            u.currentColor = 0, u.stepHighlight = i || 0, n.isArray(t) ? u.originalPalette = t : (u.originalPalette = r.findPalette(t), u.originalPalette || (u.originalPalette = r.palettes["default"])), u.palette = [], u.palette = u.originalPalette.slice(0), u.paletteActions = new f(["highlight", "highlight", "darken", "darken"])
        }, getNextColor: function () {
            var n = this, t = n.palette, u = t[n.currentColor], r, i;
            if (n.currentColor++, n.currentColor >= t.length && (n.currentColor = 0, n.stepHighlight)) for (r = n.paletteActions.next(), i = 0; i < t.length; i++) t[i] = new DevExpress.viz.charts.Color(t[i])[r](n.stepHighlight);
            return u
        }, reset: function () {
            this.currentColor = 0, this.palette = this.originalPalette.slice(0), this.paletteActions.reset()
        }
    })
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz, u = r.core, f = t.Class, e = function (n) {
        var t = u.findTheme(n);
        return t || (t = r.themes[0]), t
    };
    u.BaseThemeManager = f.inherit({
        ctor: function (t, i) {
            var u = this, f, r, o;
            t = t || {}, f = typeof t == "string" ? t : t.name, r = e(f), u.font = n.extend(!0, {}, r.font, t.font || {}), i && r && (o = i.split("."), n.each(o, function () {
                r = r[this]
            })), r = r || {}, u.theme = n.extend(!0, {}, r, typeof t == "string" ? {} : t)
        }, initializeFont: function (t) {
            var i = this, r = n.extend({}, t);
            n.extend(t, i.font, r)
        }, applyTheme: function (t, i) {
            return i = i || {}, n.extend(!0, {}, t, i)
        }, getTheme: function () {
            return this.theme
        }
    })
}(jQuery, DevExpress), function (n) {
    var i = Math.min;
    n.viz.core.TextCloud = n.Class.inherit(function () {
        var t = {horMargin: 8, verMargin: 4, tailLength: 10}, n = {};
        return n["right-bottom"] = n.rb = [0, -1, -1, 0, 0, 1, 1, 0], n["bottom-right"] = n.br = [-1, 0, 0, -1, 1, 0, 0, 1], n["left-bottom"] = n.lb = [0, -1, 1, 0, 0, 1, -1, 0], n["bottom-left"] = n.bl = [1, 0, 0, -1, -1, 0, 0, 1], n["left-top"] = n.lt = [0, 1, 1, 0, 0, -1, -1, 0], n["top-left"] = n.tl = [1, 0, 0, 1, -1, 0, 0, -1], n["right-top"] = n.rt = [0, 1, -1, 0, 0, -1, 1, 0], n["top-right"] = n.tr = [-1, 0, 0, 1, 1, 0, 0, -1], {
            setup: function (r) {
                var e = this, f = $.extend({}, t, r), h = f.x, c = f.y, u = n[f.type],
                    o = f.textWidth + 2 * f.horMargin, s = f.textHeight + 2 * f.verMargin, l = f.tailLength, a = l,
                    v = h, y = c;
                return u[0] & 1 ? a = i(a, s / 3) : l = i(l, o / 3), e._points = [h, c, h += u[0] * (o + l), c += u[1] * (s + a), h += u[2] * o, c += u[3] * s, h += u[4] * o, c += u[5] * s, h += u[6] * (o - l), c += u[7] * (s - a)], e._cx = v + u[0] * l + (u[0] + u[2]) * o / 2, e._cy = y + u[1] * a + (u[1] + u[3]) * s / 2, e._cloudWidth = o, e._cloudHeight = s, e._tailLength = f.tailLength, e
            }, points: function () {
                return this._points.slice(0)
            }, cx: function () {
                return this._cx
            }, cy: function () {
                return this._cy
            }, width: function () {
                return this._cloudWidth
            }, height: function () {
                return this._cloudHeight
            }, tailLength: function () {
                return this._tailLength
            }
        }
    }())
}(DevExpress), function (n, t) {
    var r = t.viz, u = r.core, f = t.Class, i = t.utils.isDefined, e = f.inherit({
        ctor: function (t) {
            t = t || {}, this._incidentOccured = n.isFunction(t.incidentOccured) ? t.incidentOccured : n.noop
        }, correctValueType: function (n) {
            return n === "numeric" || n === "datetime" || n === "string" ? n : ""
        }, _parsers: {
            string: function (n) {
                return i(n) ? "" + n : n
            }, numeric: function (n) {
                if (!i(n)) return n;
                var t = Number(n);
                return isNaN(t) && (t = undefined), t
            }, datetime: function (n) {
                if (!i(n)) return n;
                var t, r = Number(n);
                return t = isNaN(r) ? new Date(n) : new Date(r), isNaN(Number(t)) && (t = undefined), t
            }
        }, getParser: function (t, i) {
            var u = this, r, f = "valueType is unknown.";
            return i && (f = "The type specified as the valueType property of the " + i + " configuration object is unknown."), t = u.correctValueType(t), r = u._parsers[t], r || this._incidentOccured.call(null, f), r || n.noop
        }
    });
    u.ParseUtils = e
}(jQuery, DevExpress), function (n, t, i) {
    t.viz.themes = t.viz.themes || [], t.viz.themes.push({
        name: "default",
        font: {
            color: "#808080",
            opacity: .75,
            family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
            weight: 400,
            size: 12,
            cursor: "default"
        },
        chart: {
            containerBackgroundColor: "#FFFFFF",
            defaultPalette: "default",
            commonSeriesSettings: {
                border: {visible: !1, width: 2},
                hoverMode: "excludePoints",
                selectionMode: "includePoints",
                hoverStyle: {hatching: "none", border: {visible: !1, width: 3}},
                selectionStyle: {hatching: "right", border: {visible: !1, width: 3}},
                point: {
                    visible: !0,
                    symbol: "circle",
                    size: 6,
                    border: {visible: !1, width: 1},
                    hoverMode: "onlyPoint",
                    selectionMode: "onlyPoint",
                    hoverStyle: {border: {visible: !0, width: 4}, size: 6},
                    selectionStyle: {border: {visible: !0, width: 4}, size: 6}
                },
                label: {
                    font: {color: "#FFFFFF"},
                    border: {visible: !1, width: 1, color: "#808080", dashStyle: "solid"},
                    connector: {visible: !1, width: 1}
                },
                scatter: {},
                line: {width: 2, dashStyle: "solid", hoverStyle: {width: 3}, selectionStyle: {width: 3}},
                stackedline: {width: 2, dashStyle: "solid", hoverStyle: {width: 3}, selectionStyle: {width: 3}},
                fullstackedline: {width: 2, dashStyle: "solid", hoverStyle: {width: 3}, selectionStyle: {width: 3}},
                stepline: {width: 2, dashStyle: "solid", hoverStyle: {width: 3}, selectionStyle: {width: 3}},
                area: {point: {visible: !1}},
                stackedarea: {point: {visible: !1}},
                fullstackedarea: {point: {visible: !1}},
                steparea: {
                    border: {visible: !0, width: 2},
                    point: {visible: !1},
                    hoverStyle: {border: {visible: !0, width: 3}},
                    selectionStyle: {border: {visible: !0, width: 3}}
                },
                spline: {width: 2, hoverStyle: {width: 3}, selectionStyle: {width: 3}},
                splinearea: {point: {visible: !1}},
                bar: {cornerRadius: 0},
                stackedbar: {cornerRadius: 0},
                fullstackedbar: {cornerRadius: 0},
                rangebar: {cornerRadius: 0},
                rangearea: {point: {visible: !1}},
                rangesplinearea: {point: {visible: !1}},
                pie: {
                    border: {visible: !1, width: 2, color: "#FFFFFF"},
                    hoverStyle: {border: {visible: !0, width: 3, color: "#FFFFFF"}},
                    selectionStyle: {border: {visible: !0, width: 3, color: "#FFFFFF"}}
                },
                doughnut: {innerRadius: .5},
                candlestick: {
                    width: 2,
                    innerColor: "#ffffff",
                    reduction: {color: "#FF0000"},
                    hoverStyle: {width: 3},
                    selectionStyle: {width: 3}
                },
                stock: {width: 2, reduction: {color: "#FF0000"}, hoverStyle: {width: 3}, selectionStyle: {width: 3}}
            },
            legend: {
                verticalAlignment: "top",
                horizontalAlignment: "right",
                position: "outside",
                font: {color: "#808080"},
                visible: !0,
                customizeText: i,
                itemTextPosition: i,
                margin: 20,
                equalColumnWidth: !1,
                markerSize: 12,
                backgroundColor: i,
                border: {visible: !1, width: 1, color: "#808080", cornerRadius: 0, opacity: .35, dashStyle: "solid"},
                paddingLeftRight: 20,
                paddingTopBottom: 15,
                columnCount: 0,
                rowCount: 0,
                columnItemSpacing: 20,
                rowItemSpacing: 8
            },
            tooltip: {
                enabled: !1,
                font: {
                    family: "'SegoeUI-Light', 'Segoe UI Light', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                    weight: 200,
                    size: 26,
                    color: "#ffffff"
                },
                arrowLength: 10,
                paddingLeftRight: 22,
                paddingTopBottom: 6,
                format: "",
                argumentFormat: "",
                precision: 0,
                argumentPrecision: 0,
                percentPrecision: 0,
                customizeText: i
            },
            title: {
                font: {
                    family: "'SegoeUI-Light', 'Segoe UI Light', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                    weight: 200,
                    color: "#232323",
                    size: 28,
                    opacity: 1
                }
            },
            commonAxisSettings: {
                discreteAxisDivisionMode: "betweenLabels",
                visible: !1,
                color: "#808080",
                opacity: .35,
                width: 1,
                multipleAxesSpacing: 5,
                label: {
                    visible: !0,
                    staggered: !1,
                    staggeringSpacing: 5,
                    overlappingBehavior: {mode: "enlargeTickInterval", rotationAngle: 90, staggeringSpacing: 5},
                    precision: 0,
                    format: "",
                    customizeText: i,
                    indentFromAxis: 10
                },
                grid: {visible: !1, color: "#808080", opacity: .35, width: 1},
                tick: {visible: !1, color: "#808080", opacity: .35},
                title: {font: {size: 16}, margin: 10},
                stripStyle: {paddingLeftRight: 10, paddingTopBottom: 5}
            },
            horizontalAxis: {
                isHorizontal: !0,
                position: "bottom",
                axisDivisionFactor: 50,
                label: {alignment: "center"},
                stripStyle: {label: {horizontalAlignment: "center", verticalAlignment: "top"}}
            },
            verticalAxis: {
                isHorizontal: !1,
                position: "left",
                axisDivisionFactor: 30,
                label: {alignment: "right"},
                stripStyle: {label: {horizontalAlignment: "left", verticalAlignment: "center"}}
            },
            argumentAxisStyle: {},
            valueAxisStyle: {grid: {visible: !0}},
            commonPaneSettings: {border: {color: "#808080", opacity: .35, width: 1}}
        },
        gauge: {
            area: {radius: 120, fromAngle: 225, toAngle: 315, formatText: i},
            range: {type: "multicolor", sizes: {length: 5}, colors: ["#00FF00", "#FFFF00", "#FF0000"]},
            scale: {
                type: "TODO",
                tick: {sizes: {length: 5, width: 2}, color: "#BFBFBF"},
                text: {
                    indent: 10,
                    color: "#7F7F7F",
                    font: {
                        family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        weight: 400,
                        size: 12
                    }
                }
            },
            needle: {type: "line", sizes: {width: 3}, color: "#BFBFBF"},
            marker: {type: "triangle", sizes: {length: 12, width: 10}, color: "#679EC5"}
        },
        rangeSelector: {
            containerBackgroundColor: "white",
            scale: {
                label: {topIndent: 7, font: {size: 11}},
                tick: {width: 1, color: "black", opacity: .1},
                marker: {separatorHeight: 33, topIndent: 10, textLeftIndent: 7, textTopIndent: 11}
            },
            sliderMarker: {
                padding: 7,
                pointerSize: 6,
                color: "#9B9B9B",
                invalidRangeColor: "red",
                font: {color: "white", size: 11}
            },
            sliderHandles: {width: 1, color: "black", opacity: .1},
            shutter: {color: i, opacity: .75},
            background: {color: "#C0BAE1"},
            chart: {
                containerBackgroundColor: i,
                defaultPalette: "default",
                commonSeriesSettings: {
                    border: {visible: !1, width: 1},
                    hoverStyle: {border: {}},
                    selectionStyle: {border: {}},
                    point: {
                        visible: !1,
                        symbol: "circle",
                        border: {visible: !1, width: 1},
                        size: 6,
                        hoverStyle: {border: {}},
                        selectionStyle: {border: {}}
                    },
                    line: {width: 2},
                    stackedline: {width: 2},
                    fullstackedline: {width: 2},
                    area: {},
                    stackedarea: {},
                    fullstackedarea: {},
                    spline: {width: 2},
                    splinearea: {},
                    bar: {cornerRadius: 0},
                    stackedbar: {cornerRadius: 0},
                    fullstackedbar: {cornerRadius: 0},
                    rangebar: {cornerRadius: 0},
                    rangearea: {},
                    rangesplinearea: {},
                    pie: {},
                    candlestick: {width: 2, innerColor: "#ffffff", reduction: {color: "#FF0000"}},
                    stock: {width: 2, reduction: {color: "#FF0000"}}
                }
            }
        }
    })
}(jQuery, DevExpress), function (n) {
    n.viz.renderers = {}
}(DevExpress), function (n, t) {
    var c = t.viz.renderers, i = t.utils, l = t.Class, o = document, s, u = 1e10;
    (function () {
        var i = n.fx.step, f = n.fx.prototype, c = f.cur, e = i.d, o = i.rotate, h = i.translate, u;
        u = function (n, t, i, r, u) {
            var f = n.renderer.animOptions.easing;
            return s[f || "easeOutCubic"](t, i, r) + (u == "%" ? "%" : "")
        }, f.cur = function () {
            var i = this, t = i.prop;
            return i.elem instanceof r ? ((t === "svgheight" || t === "svgwidth") && (t = t.substr(3)), n(i.elem.element).attr(t)) : c.apply(i, arguments)
        }, n.each(["x", "y", "cx", "cy", "r", "rx", "ry", "strokeWidth"], function (n, f) {
            var e = t.inflector.camelize(f), s, o = i[e];
            i[e] = function (n) {
                var t = n.elem, i;
                if (!(t instanceof r)) {
                    o ? o.apply(this, arguments) : 0;
                    return
                }
                i = {sharpEdges: !1}, i[n.prop] = u(t, n.pos, n.start, n.end, n.unit), t.applySettings(i)
            }
        }), n.each(["width", "height"], function (n, t) {
            var r = "svg" + t, f;
            i[r] = function (n) {
                var i = n.elem, r = n.prop.substr(3), t;
                t = {sharpEdges: !1}, t[r] = u(i, n.pos, n.start || 0, n.end || 0, n.unit), i.applySettings(t)
            }
        }), i.d = function (t) {
            var s = t.elem, i, f, o, h, c;
            if (!(s instanceof r)) {
                e ? e.apply(this, arguments) : 0;
                return
            }
            t.initialized || (i = s.fromSegments || [], f = s.segments || [], i.length == 0 && (i = [].concat(f)), o = f.length - i.length, o > 0 ? (h = [].concat(i).splice(i.length - o, o), i = i.concat(h)) : o < 0 && (h = [].concat(f).splice(f.length + o, -o), f = f.concat(h)), t.start = i, t.end = f, t.initialized = !0), c = t.pos === 1 ? t.end : n.map(t.start, function (i, r) {
                var e = t.end[r], f;
                return f = n.map(i, function (i, r) {
                    var f;
                    return n.isNumeric(i) ? (f = e[r], u(s, t.pos, i, f)) : i
                }), [f]
            }), s.applySettings({
                d: n.map(c, function (n) {
                    return n.join(" ")
                }).join(" ")
            })
        }, i.rotate = function (n) {
            var t = n.elem, i, f, e;
            if (!(t instanceof r)) {
                o ? o.apply(this, arguments) : 0;
                return
            }
            n.initialized || (i = n.end, f = t.transformation || {}, n.start = f.rotateAngle || 0, n.end = i.angle || 0, n.x = i.x || 0, n.y = i.y || 0, n.initialized = !0), e = u(t, n.pos, n.start, n.end), t.applySettings({rotate: [e, n.x, n.y]})
        }, i.translate = function (n) {
            var t = n.elem, i, f, e, o;
            if (!(t instanceof r)) {
                h ? h.apply(this, arguments) : 0;
                return
            }
            n.initialized || (i = n.end, f = t.transformation || {}, n.startX = f.translateX || 0, n.startY = f.translateY || 0, n.endX = i.x || 0, n.endY = i.y || 0, n.initialized = !0), e = u(t, n.pos, n.startX, n.endX), o = u(t, n.pos, n.startY, n.endY), t.applySettings({
                translateX: e,
                translateY: o
            })
        }
    })(), s = {
        easeOutCubic: function (n, t, i) {
            return n === 1 ? i : (1 - Math.pow(1 - n, 3)) * (i - t) + +t
        }, linear: function (n, t, i) {
            return n === 1 ? i : n * (i - t) + +t
        }
    };
    var r = l.inherit({
        ctor: function (t, i, r) {
            var u;
            this.renderer = t, this.element = this.createElement(i), this.$element = n(this.element), u = n.extend({}, this.defaultSettings ? this.defaultSettings() : {}, r), this.applySettings(u)
        }, createElement: function (n) {
            return this._nodeName = n, o.createElementNS("http://www.w3.org/2000/svg", n)
        }, append: function (n) {
            var t = n || this.renderer.getRoot();
            return t.element.appendChild(this.element), this
        }, toBackground: function () {
            return this.element.parentNode && this.element.parentNode.insertBefore(this.element, this.element.parentNode.firstChild), this
        }, toForeground: function () {
            return this.element.parentNode && this.element.parentNode.appendChild(this.element), this
        }, addClass: function (t) {
            var i = this.$element.attr("class"), r, u;
            return t && (i ? (u = i.split(" "), r = n.inArray(t, u), r === -1 && (i += " " + t)) : i = t, this.$element.attr("class", i)), this.$element
        }, removeClass: function (t) {
            var f = this.$element.attr("class"), r, u, e = "", i;
            if (f && t && (r = f.split(" "), u = n.inArray(t, r), u !== -1)) {
                for (i = 0; i < r.length; i++) i !== u && (e += r[i] + " ");
                this.$element.attr("class", e.replace(/ $/, ""))
            }
            return this.$element
        }, applySettings: function (t) {
            var i;
            return this.settings = n.extend(this.settings || {}, t || {}), this.adjustSettings(), i = this._normalizeSettings(this.settings), this.applyStyle(this._style), this._applyAttributes(i), this
        }, _applyAttributes: function (n) {
            this.$element.attr(n)
        }, adjustSettings: function () {
        }, applyStyle: function (n) {
            return this.$element.css(n || {}), this
        }, trigger: function (n, t) {
            this.$element.trigger(n, t)
        }, on: function (n, t, i) {
            this.$element.on(n, t, i);
            return this
        }, data: function (n) {
            return this.$element.data(n), this
        }, off: function (n) {
            return this.$element.off(n), this
        }, getBBox: function () {
            function t(t) {
                var i = {};
                try {
                    if (n.isFunction(t.getBBox)) i = t.getBBox(); else throw{};
                } catch (r) {
                    i = {x: 0, y: 0, width: t.offsetWidth || 0, height: t.offsetHeight || 0}
                }
                return i
            }

            var h = this, t, it = this.element, s = h.transformation, c = s.rotateAngle || 0, f = s.rotateX || 0,
                e = s.rotateY || 0, o = Math.abs, l = Math.min;
            if (t = n.extend({}, t(it)), c) {
                var a = i.getCosAndSin(c), r = a.sin.toFixed(3), u = a.cos.toFixed(3), v = t.x - f, y = t.y - e,
                    p = t.x + t.width - f, w = t.y - e, b = t.x - f, k = t.y + t.height - e, d = t.x + t.width - f,
                    g = t.y + t.height - e, nt, tt;
                nt = o(t.height * r) + o(t.width * u), tt = o(t.height * u) + o(t.width * r), t.x = l(v * u - y * r + f, p * u - w * r + f, b * u - k * r + f, d * u - g * r + f), t.y = l(v * r + y * u + e, p * r + w * u + e, b * r + k * u + e, d * r + g * u + e), t.width = nt, t.height = tt
            }
            return h._normalizeBBox(t)
        }, _normalizeBBox: function (t) {
            var s = Math.ceil, h = Math.floor, o = n.isNumeric, i = h(t.x), r = h(t.y), c = s(t.width + t.x),
                l = s(t.height + t.y), f, e;
            return t.x = o(i) && i < u && i > -u ? i : 0, t.y = o(r) && r < u && r > -u ? r : 0, f = c - i, e = l - r, t.width = o(f) && f < u && f > -u ? f : 0, t.height = o(e) && e < u && e > -u ? e : 0, t.isEmpty = !t.x && !t.y && !t.width && !t.height, t
        }, clear: function () {
            this.$element.empty()
        }, detach: function () {
            this.$element.detach()
        }, animate: function (t, i, r) {
            this.renderer.animOptions.enabled ? (n.each(["height", "width"], function (n, i) {
                i in t && (t["svg" + i] = t[i], delete t[i])
            }), n(this).stop(), r && n.extend(i, {complete: r}), n(this).animate(t, n.extend({duration: this.renderer.animOptions.duration}, i))) : (t.translate && ("x" in t.translate && (t.translateX = t.translate.x), "y" in t.translate && (t.translateY = t.translate.y), delete t.translate), i && i.step ? (i.step.call(this, undefined, {pos: 1}), i.complete && i.complete.call(this)) : this.applySettings(t))
        }, show: function (n) {
            n && this.renderer.animOptions.enabled ? this.$element.show(this.renderer.animOptions.duration) : this.$element.show()
        }, hide: function (n) {
            n && this.renderer.animOptions.enabled ? this.$element.hide(this.renderer.animOptions.duration) : this.$element.hide()
        }, move: function (n, t, i, r) {
            n = n || 0, t = t || 0, i ? this.animate({translate: {x: n, y: t}}, r) : this.applySettings({
                translateX: n,
                translateY: t
            })
        }, rotate: function (n, t, i, r, u) {
            n = n || 0, t = t || 0, i = i || 0, r ? this.animate({
                rotate: {
                    angle: n,
                    x: t,
                    y: i
                }
            }, u) : this.applySettings({rotate: [n, t, i]})
        }, remove: function () {
            this.$element.remove()
        }, _normalizeSettings: function (i) {
            var o, s, e, f, r, u, h = {}, c;
            for (o in i) {
                if (r = o, u = i[r], r === "align") r = "text-anchor", u = {
                    left: "start",
                    center: "middle",
                    right: "end"
                }[u]; else if (r === "font") {
                    if (s = this._style = this._style || {}, !n.isPlainObject(u)) continue;
                    n.each(u, function (n) {
                        switch (n) {
                            case"color":
                                f = "fill";
                                break;
                            case"opacity":
                                f = "fillOpacity";
                                break;
                            case"cursor":
                                f = n;
                                break;
                            default:
                                e = n.charAt(0), f = "font" + n.replace(e, e.toUpperCase())
                        }
                        s[f] = u[n]
                    });
                    continue
                } else if (r === "dashStyle") r = "stroke-dasharray", u = u.toLowerCase(), u = u === "solid" ? "none" : u.replace(/longdash/g, "8,3,").replace(/dash/g, "4,3,").replace(/dot/g, "1,3,").replace(/,$/, "").split(","), u !== "none" && (u = n.map(u, function (n) {
                    return +n * (i.strokeWidth || 1)
                }).join(",")); else if (/^(linecap|linejoin)$/i.test(r)) r = "stroke-" + r; else if (/^(translateX|translateY|rotate)$/i.test(r)) {
                    this["_" + r] = u;
                    continue
                } else if (r === "clipId") r = "clip-path", u = "url(#" + u + ")"; else if (r === "style") {
                    this._style = this._style || {}, n.extend(!0, this._style, u);
                    continue
                } else if (r === "text") continue; else if (r === "segments") continue; else r = t.inflector.dasherize(r);
                h[r] = u
            }
            return this._applyTransformation(h)
        }, _applyTransformation: function (t) {
            this.transformation = {
                translateX: this._translateX,
                translateY: this._translateY,
                rotateAngle: 0,
                rotateX: 0,
                rotateY: 0
            };
            var r = this.transformation, u = this._rotate, f = [];
            return (i.isDefined(r.translateX) || i.isDefined(r.translateY)) && f.push("translate(" + (r.translateX || 0) + "," + (r.translateY || 0) + ")"), i.isDefined(u) && (i.isNumber(u) ? (r.rotateAngle = u, r.rotateX = t.x || 0, r.rotateY = t.y || 0) : n.isArray(u) ? (r.rotateAngle = u[0] || 0, r.rotateX = u[1] || 0, r.rotateY = u[2] || 0) : i.isObject(u) && (r.rotateAngle = u.angle || 0, r.rotateX = u.x || 0, r.rotateY = u.y || 0), f.push("rotate(" + r.rotateAngle + "," + r.rotateX + "," + r.rotateY + ")")), f.length && (t.transform = f.join(" ")), t
        }
    }), a = r.inherit({
        defaultSettings: function () {
            return {
                width: 0,
                height: 0,
                style: {"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"},
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                stroke: "none",
                strokeWidth: 0,
                fill: "none"
            }
        }, ctor: function (n, t) {
            this.callBase(n, "svg", t)
        }
    }), e = {
        defaultSettings: function () {
            return {x: 0, y: 0, width: 0, height: 0}
        }, adjustSettings: function () {
            (!i.isDefined(this.settings.sharpEdges) || this.settings.sharpEdges) && (this.sharpEdges(), delete this.settings.sharpEdges)
        }, prepareSettings: function (n) {
            var f = this.settings ? Number(this.settings.strokeWidth) || 0 : 0, t, u, r = !1;
            i.isDefined(n.width) && (this._realWidth = Number(n.width)), i.isDefined(n.height) && (this._realHeight = Number(n.height)), i.isDefined(n.x) && (this._realX = Number(n.x)), i.isDefined(n.y) && (this._realY = Number(n.y)), i.isDefined(n.strokeWidth) && (this._realStrokeWidth = Number(n.strokeWidth)), this._realStrokeWidth = this._realStrokeWidth || this.defaultSettings().strokeWidth || 0, u = ~~((this._realWidth < this._realHeight ? this._realWidth : this._realHeight) / 2), t = this._realStrokeWidth < u ? this._realStrokeWidth : u, t !== f && (r = !0, n.sharpEdges = !0, t > 0 && (n.strokeWidth = t)), (i.isDefined(n.x) || r) && (n.x = this._realX + t / 2), (i.isDefined(n.y) || r) && (n.y = this._realY + t / 2), (i.isDefined(n.width) || r) && (n.width = this._realWidth - t), (i.isDefined(n.height) || r) && (n.height = this._realHeight - t)
        }, applySettings: function (t) {
            var t = n.extend(!0, {}, t);
            this.prepareSettings(t), this.callBase(t)
        }, sharpEdges: function () {
            var t = Math.round(this.settings.strokeWidth || 0), n = t % 2 / 2;
            this.settings.x = Math.floor(this.settings.x - n || 0) + n, this.settings.y = Math.floor(this.settings.y - n || 0) + n, this.settings.width = Math.floor(this.settings.width || 0), this.settings.height = Math.floor(this.settings.height || 0), this.settings.strokeWidth > 0 && (this.settings.strokeWidth = t)
        }
    }, v = r.inherit(e).inherit({
        ctor: function (n, t, r, u) {
            var f = {
                full: "none",
                lefttop: "xMinYMin",
                leftcenter: "xMinYMid",
                leftbottom: "xMinYMax",
                centertop: "xMidYMin",
                center: "xMidYMid",
                centerbottom: "xMidYMax",
                righttop: "xMaxYMin",
                rightcenter: "xMaxYMid",
                rightbottom: "xMaxYMax"
            };
            this.href = i.isDefined(r) ? r : "", this.preserveAspectRatio = f[(u || "").toLowerCase()], this.preserveAspectRatio = this.preserveAspectRatio || "none", this.callBase(n, "image", t)
        }, adjustSettings: function () {
            this.callBase(), this.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.href), this.preserveAspectRatio && this.element.setAttribute("preserveAspectRatio", this.preserveAspectRatio)
        }
    }), y = r.inherit(e).inherit({
        defaultSettings: function () {
            return {x: 0, y: 0, width: 0, height: 0, rx: 0, ry: 0}
        }, ctor: function (n, t) {
            this.callBase(n, "rect", t)
        }
    }), f = r.inherit({
        defaultSettings: function () {
            return {points: {x: 0, y: 0}}
        }, getNodeName: function () {
            return "path"
        }, getPathAttributeName: function () {
            return "d"
        }, ctor: function (n, t) {
            this.callBase(n, this.getNodeName(), t)
        }, adjustSettings: function () {
            this.prepareSegments(this.settings)
        }, applySettings: function (n) {
            var n = n || {};
            this.settings && n.strokeWidth && this.settings.strokeWidth != n.strokeWidth && (n.sharpEdges = !0), this.callBase(n)
        }, prepareSegments: function (t) {
            if ("points" in t) {
                var u = t.points, e = u[0], o = this.closePath || t.closePath, f = [], r;
                if (i.isObject(e)) f = n.map(u, function (n, t) {
                    return t ? [["L", n.x, n.y]] : [["M", n.x, n.y]]
                }); else if (i.isNumber(e)) for (r = 0; r < u.length; r += 2) {
                    if (!r) {
                        f = [["M", u[r] || 0, u[r + 1] || 0]];
                        continue
                    }
                    f.push(["L", u[r] || 0, u[r + 1] || 0])
                } else f = [["M", 0, 0]];
                o && f.push(["Z"]), this.segments = f, delete t.points, delete t.closePath, t.sharpEdges = !0
            }
            t.sharpEdges && (this.sharpEdges(), this.combinePathParams(t), delete t.sharpEdges)
        }, customizeSegments: function (n) {
            return n
        }, combinePathParams: function (t) {
            var i;
            this.segments = this.customizeSegments(this.segments), this.segments && (i = n.map(this.segments, function (n) {
                return n.join(" ")
            }), i = i.join(" "), t[this.getPathAttributeName()] = i)
        }, animate: function (t, i) {
            var r = this.callBase;
            if (!("points" in t)) return this.callBase(t, i);
            this.fromSegments = this.segments, this.prepareSegments(t), this.renderer.animOptions.enabled && n.extend(t, {d: 1}), this.callBase = r, this.callBase(t, i)
        }, sharpEdges: function () {
            var o = this, v = o.segments.length, i = 0, n, t, s, h, l, a, r, u, f, e,
                y = Math.round(o.settings.strokeWidth || 0), c = y % 2 / 2;
            for (i; i < v - 1; i++) {
                n = o.segments[i], t = o.segments[i + 1], t[0] === "Z" && i && (t = o.segments[0]);
                switch (n[0]) {
                    case"M":
                    case"L":
                        r = 1, u = 2;
                        break;
                    case"C":
                        r = 5, u = 6;
                        break;
                    case"A":
                        r = 6, u = 7;
                        break;
                    case"Z":
                        continue
                }
                switch (t[0]) {
                    case"M":
                    case"L":
                        f = 1, e = 2;
                        break;
                    case"C":
                        f = 5, e = 6;
                        break;
                    case"A":
                        f = 6, e = 7;
                        break;
                    case"Z":
                        continue
                }
                s = Math.floor(n[r]), h = Math.floor(n[u]), l = t[f] = Math.floor(t[f]), a = t[e] = Math.floor(t[e]), n[r] = i == 0 ? s : n[r], n[u] = i == 0 ? h : n[u], s == l && (n[r] = s + c, t[f] = l + c), h == a && (n[u] = h + c, t[e] = a + c)
            }
        }
    }), p = f.inherit(e).inherit({
        defaultSettings: function () {
            return n.extend(!0, {}, this.callBase(), {segments: {top: !0, bottom: !0, left: !0, right: !0}})
        }, prepareSegments: function () {
            var h = this, t = h.settings, i = t.x, u = i + t.width, r = t.y, f = r + t.height, e = [], o, s = 0, c = 0,
                l = {
                    top: [["M", i, r], ["L", u, r]],
                    right: [["M", u, r], ["L", u, f]],
                    bottom: [["M", u, f], ["L", i, f]],
                    left: [["M", i, f], ["L", i, r]]
                };
            n.each(l, function (n) {
                var i = !!h.settings.segments[n];
                s = s * 2 + ~~i
            });
            switch (s) {
                case 13:
                case 9:
                    o = ["left", "top", "right", "bottom"];
                    break;
                case 11:
                    o = ["bottom", "left", "top", "right"];
                    break;
                default:
                    o = ["top", "right", "bottom", "left"]
            }
            n.each(o, function (t, i) {
                var r = !!h.settings.segments[i];
                r && n.each(l[i].slice(c), function (n, t) {
                    e.push(t)
                }), c = ~~r
            }), s == 15 && e.push(["Z"]), this.segments = e.length ? e : [["M", 0, 0], ["Z"]], this.combinePathParams(t)
        }, adjustSettings: function () {
            this.callBase(), this.prepareSegments()
        }, applySettings: function (t) {
            var i = this.settings && this.settings.segments || this.defaultSettings().segments;
            t.segments = n.extend(!0, {}, i || {}, t.segments), this.callBase(t)
        }
    }), w = f.inherit({
        defaultSettings: function () {
            return {points: {x: 0, y: 0}}
        }, ctor: function (n, t) {
            this.closePath = !0, this.callBase(n, t)
        }
    }), h = f.inherit({
        defaultSettings: function () {
            return {points: {x: 0, y: 0}}
        }, prepareSegments: function (n) {
            if ("points" in n) {
                var o = n.points, s = o[0], h = this.closePath || n.closePath, u = [], t = [], r, f, e, c = 0;
                if (i.isObject(s)) {
                    for (r = 0; r < o.length; r++) {
                        if (f = o[r].x, e = o[r].y, !r) {
                            u = [["M", f, e]];
                            continue
                        }
                        if ((r - 1) % 3 == 0) {
                            t.length > 0 && u.push(t), t = ["C", f, e];
                            continue
                        }
                        t.push(f), t.push(e)
                    }
                    t.length > 0 && u.push(t)
                } else if (i.isNumber(s)) {
                    for (r = 0; r < o.length; r += 2) {
                        if (f = o[r], e = o[r + 1], !r) {
                            u = [["M", f, e || 0]];
                            continue
                        }
                        if ((r - 2) % 6 == 0) {
                            t.length > 0 && u.push(t), t = ["C", f, e || 0];
                            continue
                        }
                        t.push(f), t.push(e || 0)
                    }
                    t.length > 0 && u.push(t)
                } else u = [["M", 0, 0]];
                h && u.push(["Z"]), this.segments = u, delete n.points, delete n.closePath, this.combinePathParams(n)
            }
        }
    }), b = h.inherit({
        defaultSettings: function () {
            return {points: {x: 0, y: 0}}
        }, ctor: function (n, t) {
            this.closePath = !0, this.callBase(n, t)
        }
    }), k = f.inherit({
        defaultSettings: function () {
            return {x: 0, y: 0, linejoin: "round"}
        }, createArcSegments: function (n, t, i, r, u, f) {
            var e = Math.abs(f - u) > Math.PI ? "1" : "0", o = n + r * Math.cos(u), s = t - r * Math.sin(u),
                h = n + r * Math.cos(f), c = t - r * Math.sin(f), l = n + i * Math.cos(f), a = t - i * Math.sin(f),
                v = n + i * Math.cos(u), y = t - i * Math.sin(u);
            return [["M", o, s], ["A", r, r, 0, e, 0, h, c], ["L", l, a], ["A", i, i, 0, e, 1, v, y], ["Z"]]
        }, prepareSegments: function (n) {
            var e;
            if ("x" in n || "y" in n || "outerRadius" in n || "innerRadius" in n || "startAngle" in n || "endAngle" in n) {
                var o = i.isNumber(n.x) ? Number(n.x) : 0, s = i.isNumber(n.y) ? Number(n.y) : 0,
                    u = i.isNumber(n.outerRadius) ? Number(n.outerRadius) : 0,
                    f = i.isNumber(n.innerRadius) ? Number(n.innerRadius) : 0,
                    t = i.isNumber(n.startAngle) ? Number(n.startAngle) : 0,
                    r = i.isNumber(n.endAngle) ? Number(n.endAngle) : 360;
                this.segments = [["M", 0, 0], ["Z"]], (u || f) && (e = Math.min(u, f), u = Math.max(u, f), f = e, Math.round(t) != Math.round(r) && (Math.abs(r - t) % 360 == 0 && (r -= .0001), t > 360 && (t = t % 360), r > 360 && (r = r % 360), t > r && (t -= 360), t = t * Math.PI / 180, r = r * Math.PI / 180, this.segments = this.createArcSegments(o, s, f, u, t, r))), delete n.x, delete n.y, delete n.outerRadius, delete n.innerRadius, delete n.startAngle, delete n.endAngle, this.combinePathParams(n)
            }
        }
    }), d = r.inherit({
        defaultSettings: function () {
            return {cx: 0, cy: 0, r: 0}
        }, ctor: function (n, t) {
            this.callBase(n, "circle", t)
        }
    }), g = r.inherit({
        defaultSettings: function () {
            return {x: 0, y: 0}
        }, ctor: function (n, t) {
            this.tspans = [], this.callBase(n, "text", t)
        }, updateText: function (n) {
            i.isDefined(n) || (n = ""), this.applySettings({text: n})
        }, adjustSettings: function () {
            if (!("text" in this.settings)) {
                this.changeX();
                return
            }
            this._createElementWithText(this.settings.text)
        }, changeX: function () {
            for (var n = 0; n < this.tspans.length; n++) this.tspans[n].settings.x != undefined && this.tspans[n].applySettings({x: this.settings.x})
        }, _createElementWithText: function (n) {
            var t, i;
            this.clear(), n = n.toString().replace(/\r/g, ""), n = n.replace(/\n/g, "<br/>"), t = o.createElement("div"), t.innerHTML = n, t.params = {style: {}}, this._orderText(t)
        }, clear: function () {
            this.callBase(), this.tspans = []
        }, _orderText: function (n) {
            var i = [], f = (this.settings.font ? this.settings.font.size : 12) || 12, u = function (n, t, i) {
                var r = {style: {}}, i = i || [], f, o, e;
                if (t.params = t.params || {}, t.parentNode && t.nodeName != "#text" && t.parentNode.params) for (f in t.parentNode.params) t.params[f] = t.parentNode.params[f];
                switch (t.tagName) {
                    case"B":
                        t.params.fontWeight = "bold";
                        break;
                    case"I":
                        t.params.fontStyle = "italic";
                        break;
                    case"U":
                        t.params.textDecoration = "underline";
                        break;
                    case"BR":
                        n++
                }
                for (t.style && (t.style.fontSize && (t.params.fontSize = t.style.fontSize.split("p")[0] || t.params.fontSize), t.params.fill = t.style.color || t.params.fill, t.params.fontStyle = t.style.fontStyle || t.params.fontStyle, t.params.fontWeight = t.style.fontWeight || t.params.fontWeight, t.params.textDecoration = t.style.textDecoration || t.params.textDecoration), o = t.childNodes.length, e = 0; e != o;) n = u(n, t.childNodes[e++], i);
                return t.wholeText != undefined && (r.fill = t.parentNode.params.fill, r.text = t.wholeText, t.parentNode.params.fontSize && (r.style.fontSize = t.parentNode.params.fontSize), t.parentNode.params.fontStyle && (r.style.fontStyle = t.parentNode.params.fontStyle), t.parentNode.params.fontWeight && (r.style.fontWeight = t.parentNode.params.fontWeight), t.parentNode.params.textDecoration && (r.style.textDecoration = t.parentNode.params.textDecoration), i.push({
                    params: r,
                    line: n
                })), n
            }, t, r;
            for (u(0, n, i), t = 0; t < i.length; t++) t != 0 ? i[t].line != i[t - 1].line ? (i[t].params.dy = i[t].params.fontSize || f, i[t].params.x = this.settings.x) : (i[t].params.dy = 0, i[t].params.dx = 0) : (i[t].params.x = this.settings.x, i[t].params.dy = 0), r = new nt(this.renderer, i[t].params), r.append(this), this.tspans.push(r)
        }
    }), nt = r.inherit({
        ctor: function (n, t) {
            var i = t.text || "";
            delete t.text, this.callBase(n, "tspan", t), this.element.appendChild(o.createTextNode(i))
        }
    }), tt = r.inherit({
        ctor: function (n, t) {
            this.callBase(n, "g", t)
        }
    }), it = l.inherit({
        ctor: function (n) {
            n = n || {};
            var t = n.width, i = n.height;
            this._setAnimationOptions(n.animation || {}), this.recreateCanvas(t, i)
        }, _setAnimationOptions: function (n) {
            this.animOptions = {
                enabled: !0,
                duration: 1e3,
                easing: "easeOutCubic"
            }, "enabled" in n && (this.animOptions.enabled = n.enabled), "duration" in n && (this.animOptions.duration = n.duration), "easing" in n && s[n.easing] && (this.animOptions.easing = n.easing)
        }, updateAnimationOptions: function (t) {
            this._setAnimationOptions(n.extend(this.animOptions || {}, t))
        }, killContainer: function () {
            var t = this, i = t.container && t.getRoot() && t.getRoot().element;
            i && (n(i).remove(), delete t.svgRoot), t.defsSvg && delete t.defsSvg
        }, recreateCanvas: function (n, t) {
            var i = this, r;
            i.killContainer(), n > 0 && t > 0 && (r = new a(i, {width: n, height: t}), i.svgRoot = r)
        }, resize: function (n, t) {
            var i = this.getRoot();
            i && n > 0 && t > 0 && i.applySettings({width: n, height: t})
        }, getRoot: function () {
            return this.svgRoot
        }, isInitialized: function () {
            return !!this.svgRoot
        }, draw: function (n) {
            if (n) {
                var t = this;
                t.container = n, n.appendChild(t.getRoot().element)
            }
        }, createRect: function (t, i, r, u, f, e) {
            e && e.inh && (e = {});
            var o = n.extend({}, e || {}, {x: t, y: i, width: r, height: u, rx: f, ry: f});
            return new y(this, o)
        }, createSegmentRect: function (t, i, r, u, f, e, o) {
            var s = n.extend({}, o || {}, {x: t, y: i, width: r, height: u, rx: f, ry: f, segments: e});
            return new p(this, s)
        }, drawRect: function (n, t, i, r, u, f) {
            return this.createRect(n, t, i, r, u, f).append()
        }, createClipRect: function (n, t, u, f) {
            var h = {fill: "none", stroke: "none", strokeWidth: 0}, o, e, s;
            return this.defsSvg || (this.defsSvg = new r(this, "defs"), this.defsSvg.append()), s = i.getNextClipId(), o = new r(this, "clipPath", {id: s}), o.append(this.defsSvg), e = this.createRect(n, t, u, f, 0, h), e.id = s, e.append(o), e
        }, createPattern: function (n, t) {
            var u, f, e;
            if (t === "none") return n;
            if (this.defsSvg || (this.defsSvg = new r(this, "defs"), this.defsSvg.append()), e = i.getNextPatternId(), u = new r(this, "pattern", {
                    id: e,
                    width: 6,
                    height: 6
                }), u.element.setAttribute("patternUnits", "userSpaceOnUse"), u.lines = [], u.append(this.defsSvg), t === "right") f = this.createLine(0, 0, 1, 1, {
                strokeWidth: 1,
                stroke: n,
                opacity: .8
            }), f.append(u), u.lines.push(f), f = this.createLine(5, 5, 6, 6, {
                strokeWidth: 1,
                stroke: n,
                opacity: .8
            }), f.append(u), u.lines.push(f), f = this.createLine(0, 6, 6, 0, {
                strokeWidth: 2,
                stroke: n
            }), f.append(u), u.lines.push(f); else if (t === "left") f = this.createLine(5, 1, 6, 0, {
                strokeWidth: 1,
                stroke: n,
                opacity: .8
            }), f.append(u), u.lines.push(f), f = this.createLine(0, 6, 1, 5, {
                strokeWidth: 1,
                stroke: n,
                opacity: .8
            }), f.append(u), u.lines.push(f), f = this.createLine(0, 0, 6, 6, {
                strokeWidth: 2,
                stroke: n
            }), f.append(u), u.lines.push(f); else return n;
            return u.id = "url(#" + e + ")", u
        }, createImage: function (t, i, r, u, f, e) {
            var o = n.extend({}, e || {}, {x: t, y: i, width: r, height: u});
            return new v(this, o, f, o.location)
        }, drawImage: function (n, t, i, r, u, f) {
            return this.createImage(n, t, i, r, u, f).append()
        }, createLine: function (t, i, r, u, e) {
            var o = {points: [t, i, r, u]}, s;
            return e && !e.inh && n.extend(o, e), s = new f(this, o)
        }, drawLine: function (n, t, i, r, u) {
            return this.createLine(n, t, i, r, u).append()
        }, createPath: function (t, i) {
            var r = {points: t}, u;
            return i && !i.inh && n.extend(r, i), u = new f(this, r)
        }, drawPath: function (n, t) {
            return this.createPath(n, t).append()
        }, createBezierPath: function (t, i) {
            var r = {points: t}, u;
            return i && !i.inh && n.extend(r, i), u = new h(this, r)
        }, drawBezierPath: function (n, t) {
            return this.createBezierPath(n, t).append()
        }, createArea: function (t, i) {
            var r = {points: t}, u;
            return i && !i.inh && n.extend(r, i), u = new w(this, r)
        }, drawArea: function (n, t) {
            return this.createArea(n, t).append()
        }, createBezierArea: function (t, i) {
            var r = {points: t}, u;
            return i && !i.inh && n.extend(r, i), u = new b(this, r)
        }, drawBezierArea: function (n, t) {
            return this.createBezierArea(n, t).append()
        }, createCircle: function (t, i, r, u) {
            var f = {cx: t, cy: i, r: r}, e;
            return u && !u.inh && n.extend(f, u), e = new d(this, f)
        }, drawCircle: function (n, t, i, r) {
            return this.createCircle(n, t, i, r).append()
        }, createArc: function (t, i, r, u, f, e, o) {
            var s = {x: t, y: i, outerRadius: r, innerRadius: u, startAngle: f, endAngle: e}, h;
            return o && !o.inh && n.extend(s, o), h = new k(this, s)
        }, drawArc: function (n, t, i, r, u, f, e) {
            return this.createArc(n, t, i, r, u, f, e).append()
        }, createText: function (t, i, r, u) {
            var f = {x: i, y: r, text: t}, e;
            return u && !u.inh && n.extend(f, u), e = new g(this, f)
        }, drawText: function (n, t, i, r) {
            return this.createText(n, t, i, r).append()
        }, createGroup: function (n) {
            return new tt(this, n)
        }, drawGroup: function (n) {
            return this.createGroup(n).append()
        }
    });
    c.SvgRenderer = it, c._svgRendererInternals = {
        BaseSvgElement: r,
        RootSvgElement: a,
        RectSvgElement: y,
        ImageSvgElement: v,
        PathSvgElement: f,
        AreaSvgElement: w,
        BezierSvgElement: h,
        BezierAreaSvgElement: b,
        CircleSvgElement: d,
        TextSvgElement: g,
        TspanSvgElement: nt,
        GroupSvgElement: tt,
        ArcSvgElement: k,
        RectSvgBaseElement: e,
        SegmentRectSvgElement: p
    }
}(jQuery, DevExpress), function (n, t) {
    var s = t.viz.renderers, u = t.utils, f = document, i = s._svgRendererInternals,
        y = {x: 0, y: 0, width: 1, height: 1, position: "absolute"}, e = function (t, i) {
            return n.extend(!0, i || {}, y, t)
        }, h = function (t, i, r) {
            var f;
            return u.isDefined(t) && (u.isNumber(t) ? f = {
                angle: t,
                x: i || 0,
                y: r || 0
            } : n.isArray(t) ? f = {
                angle: t[0] || 0,
                x: t[1] || 0,
                y: t[2] || 0
            } : u.isObject(t) && (f = {angle: t.angle || 0, x: t.x || 0, y: t.y || 0})), f
        }, p = function (n, t, i) {
            var e = n.element, r, u = t[i];
            (i === "opacity" || i === "fillOpacity") && (e.fill ? e.fill.opacity = u >= .002 ? u : .002 : (r = f.createElement("vml:fill"), e.appendChild(r), r.opacity = u >= .002 ? u : .002, r.className = "vml", t.fillcolor && (r.color = t.fillcolor))), i === "joinStyle" && (e.stroke ? e.stroke.joinStyle = u : (r = f.createElement("vml:stroke"), n.element.appendChild(r), r.className = "vml", r.joinStyle = u)), (i === "opacity" || i === "strokeOpacity") && (e.stroke ? e.stroke.opacity = u >= .002 ? u : .002 : (r = f.createElement("vml:stroke"), n.element.appendChild(r), r.className = "vml", r.opacity = u >= .002 ? u : .002, t.strokecolor && (r.color = t.strokecolor))), i === "dashstyle" && (e.stroke ? e.stroke.dashstyle = u : (r = f.createElement("vml:stroke"), n.element.appendChild(r), r.className = "vml", r.dashstyle = u))
        }, l = function (n) {
            var r, t, i, e = n.tagName.toLowerCase(), o, u, f;
            if (e === "div") {
                if (n.childNodes.length > 0) for (t = {}, r = 0; r < n.childNodes.length; r++) (i = l(n.childNodes[r]), i) && (t.left = t.left === undefined || i.left < t.left ? i.left : t.left, t.top = t.top === undefined || i.top < t.top ? i.top : t.top, t.right = t.right === undefined || i.right > t.right ? i.right : t.right, t.bottom = t.bottom === undefined || i.bottom > t.bottom ? i.bottom : t.bottom)
            } else if (e === "shape" || e === "vml:shape") {
                for (o = (n.path.value || n.path).match(/[-0-9]+/g), t = {}, i = n.getBoundingClientRect(), r = 0; r < o.length; r++) u = parseInt(o[r]), r % 2 ? (t.top = t.top === undefined || u < t.top ? u : t.top, t.bottom = t.bottom === undefined || u > t.bottom ? u : t.bottom) : (t.left = t.left === undefined || u < t.left ? u : t.left, t.right = t.right === undefined || u > t.right ? u : t.right);
                t.left = t.left || 0, t.top = t.top || 0, t.right = t.right || 0, t.bottom = t.bottom || 0, i.right - i.left <= 1 && i.top - i.bottom <= 1 ? (t.right = t.right + i.left, t.bottom = t.bottom + i.top, t.left = t.left + i.left, t.top = t.top + i.top) : (t.right = t.right - t.left + i.left, t.bottom = t.bottom - t.top + i.top, t.left = i.left, t.top = i.top), f = Math.ceil(parseFloat(n.strokeweight) / 2), f && f > 1 && (t.left -= f, t.top -= f, t.right += f, t.bottom += f)
            } else t = n.getBoundingClientRect();
            return t
        }, r = {
            isVml: function () {
                return !0
            }, defaultSettings: function (n) {
                var t = this.callBase ? this.callBase() : {};
                return e(n, t)
            }, createElement: function (n) {
                if (this._nodeName = n, this.childElements = [], this.isVml()) {
                    var t = f.createElement("vml:" + n);
                    return t.className = "vml", t
                }
                return f.createElement(n)
            }, clear: function () {
                this.callBase(), this.childElements = []
            }, _fillAttributesFromCurrentStyle: function (n) {
                var t = this.element, i, r = this.renderer.getRoot(), u = r && r.element.currentStyle.color;
                this.isVml() && t.style && t.currentStyle && (t.style.backgroundColor === "transparent" && (t.style.backgroundColor = ""), t.currentStyle.backgroundColor !== "transparent" && (i = t.currentStyle.backgroundColor, this instanceof a || (t.style.backgroundColor = "transparent"), n.filled = "t", n.fillcolor = i, t.currentStyle.opacity && (t.style.filter = "alpha(opacity=" + t.currentStyle.opacity * 100 + ")", delete n.opacity, delete n.fillOpacity)), u && t.currentStyle.color !== u && (n.stroked = "t", n.strokecolor = this.element.currentStyle.color, t.currentStyle.opacity && (n.strokeOpacity = t.currentStyle.opacity)))
            }, _applyAttributes: function (n) {
                var t, i;
                if (n && n.arcsize !== undefined) {
                    try {
                        this.element.setAttribute("arcsize", n.arcsize)
                    } catch (r) {
                    }
                    delete n.arcsize
                }
                if (this._isAppended) {
                    if (n = n || this._delayedAttributes, n) {
                        this._fillAttributesFromCurrentStyle(n);
                        for (t in n) i = n[t], t === "opacity" || t === "fillOpacity" || t === "strokeOpacity" || t === "dashstyle" || t === "joinStyle" ? p(this, n, t) : t === "class" ? this.element.className = this.isVml() ? "vml " + i : i : this.element[t] = i;
                        delete this._delayedAttributes
                    }
                } else this._delayedAttributes = n
            }, appendComplete: function () {
                var t = this;
                t._isAppended = !0, t._applyAttributes(), n.each(t.childElements, function () {
                    this.appendComplete()
                })
            }, append: function (n) {
                var i = this, r = i.renderer.getRoot(), t = n || r;
                return t && (t.element.appendChild(i.element), t.childElements.push(i)), (t === r || t._isAppended) && this.appendComplete(), i
            }, _normalizeSettings: function (t) {
                var c, u = {}, f = {}, e, o, r, i, s, h,
                    v = ["position", "display", "visibility", "filter", "margin", "marginTop", "marginLeft", "marginRight", "marginBottom", "whiteSpace", "clip"];
                for (c in t) if (r = c, i = t[r], r === "x" || r === "translateX") o = t.x || 0, t.translateX && (o += t.translateX), u.left = o + "px"; else if (r === "y" || r === "translateY") o = t.y || 0, t.translateY && (o += t.translateY), u.top = o + "px"; else if (r === "width") u.width = i + "px"; else if (r === "height") u.height = i + "px"; else if (r === "align") u.textAlign = i; else if (n.inArray(r, v) != -1) u[r] = i; else if (r === "fill") this.isVml() ? (f.filled = i === "none" ? "f" : "t", f.fillcolor = i) : u.color = i; else if (r === "opacity") f.opacity = i < .002 ? "99f" : i; else if (r === "stroke") f.stroked = i === "none" ? "f" : "t", f.strokecolor = i; else if (r === "strokeWidth") f.strokeweight = i + "px"; else if (r === "lineJoin") f.joinStyle = i; else if (r === "font") {
                    if (!n.isPlainObject(i)) continue;
                    n.each(i, function (n) {
                        switch (n) {
                            case"color":
                            case"cursor":
                                s = n;
                                break;
                            case"opacity":
                                s = "opacity";
                                break;
                            default:
                                h = n.charAt(0), s = "font" + n.replace(h, h.toUpperCase())
                        }
                        u[s] = i[n]
                    })
                } else if (r === "style") n.extend(!0, u, i); else if (r === "rotate") this._rotate = i; else if (r === "dashStyle") i = i.toLowerCase(), i !== "solid" && (f.dashstyle = i); else if (r === "clipId") {
                    if (e = this.renderer.getClipRect(i, this), e) {
                        var y = e.width, p = e.height, l = e.x, a = e.y, w = y + l, b = p + a;
                        u.width = e.cSize.width, u.height = e.cSize.height, u.clip = "rect(" + a + "px, " + w + "px, " + b + "px, " + l + "px)"
                    }
                } else if (r === "segments") continue; else f[r] = i;
                return this._style = u, f
            }, _getBBox: function () {
                var u, f, n, e, i = 0, r = 0, t = this.element;
                try {
                    n = l(t), u = n.right - n.left, f = n.bottom - n.top, e = this.renderer.getRoot().element.getBoundingClientRect(), i = n.left - e.left, r = n.top - e.top, t.tagName.toLowerCase() === "div" && (i = i - parseInt(t.style.left, 10), r = r - parseInt(t.style.top, 10))
                } catch (o) {
                    u = t.offsetWidth || 0, f = t.offsetHeight || 0
                }
                return {x: i, y: r, width: u, height: f}
            }, getBBox: function () {
                return this._getBBox()
            }, sharpEdges: function () {
            }
        }, w = function (n) {
            switch (n) {
                case"M":
                    return "m";
                case"L":
                    return "l";
                case"Z":
                    return "x e"
            }
            return n
        }, o = {
            defaultSettings: function () {
                return n.extend(this.callBase(), {coordsize: "1,1", fill: "none", strokecolor: "black", stroked: "t"})
            }, getNodeName: function () {
                return "shape"
            }, getPathAttributeName: function () {
                return "path"
            }, customizeSegments: function (t) {
                var i = t;
                return t && (i = n.map(t, function (n) {
                    var i, r = [], u = w(n[0]);
                    for (r.push(u), i = 1; i < n.length; i++) r.push(Math.floor(n[i]));
                    return [r]
                })), i
            }
        }, b = i.BaseSvgElement.inherit(r).inherit({
            isVml: function () {
                return !1
            }, defaultSettings: function () {
                return {width: 0, height: 0, position: "relative", display: "inline-block", overflow: "hidden"}
            }, ctor: function (n, t) {
                this.callBase(n, "div", t)
            }
        }), k = i.BaseSvgElement.inherit(i.RectSvgBaseElement).inherit(r).inherit({
            ctor: function (n, t) {
                this.callBase(n, "image", t)
            }, defaultSettings: function () {
                return n.extend(this.callBase(), {strokeWidth: 0})
            }, adjustSettings: function () {
                this.callBase(), this.settings.href && (this.settings.src = this.settings.href, delete this.settings.href)
            }
        }), a = i.BaseSvgElement.inherit(i.RectSvgBaseElement).inherit(r).inherit({
            defaultSettings: function () {
                return e({stroked: "f", strokeWidth: 0, rx: 0, ry: 0})
            }, recreateElement: function (t) {
                this._nodeName = t;
                var i = n(this.$element.parent());
                i ? (this.$element.remove(), this.element = this.createElement(t), this.$element = n(this.element), i.append(this.$element)) : (this.element = this.createElement(t), this.$element = n(this.element)), this.applySettings()
            }, _adjustArcSize: function () {
                var t = this.settings, f = t.rx || 0, e = t.ry || 0, o = t.width, s = t.height, r, u, i;
                (t.rx !== undefined || t.ry !== undefined) && (r = Math.max(f, e), u = Math.max(o, s) / 2, i = r / u, t.arcsize = i, n.isNumeric(i) && i != 0 ? this._nodeName !== "roundrect" && this.recreateElement("roundrect") : this._nodeName === "roundrect" && this.recreateElement("rect"), delete t.rx, delete t.ry)
            }, _adjustRotation: function () {
                var n = this.settings, v = this.settings.rotate, e, o, s, c, i, r, l, a, u, f, t;
                t = h(v, n.x, n.y), t && (e = t.angle, i = t.x, r = t.y, o = e * Math.PI / 180, s = Math.cos(o), c = Math.sin(o), u = n.x + (n.translateX || 0) + n.width / 2, f = n.y + (n.translateY || 0) + n.height / 2, a = (u - i) * s - (f - r) * c + i - u, l = (u - i) * c + (f - r) * s + r - f, this.settings.marginLeft = Math.round(a) + "px", this.settings.marginTop = Math.round(l) + "px", this.settings.rotation = e)
            }, adjustSettings: function () {
                this.callBase(), this._adjustArcSize(), this._adjustRotation()
            }, getBBox: function () {
                return this.callBase()
            }, ctor: function (n, t) {
                this.callBase(n, "rect", t)
            }
        }), c = i.PathSvgElement.inherit(r).inherit(o).inherit({
            prepareSegments: function (t) {
                var i = this, w = t.rotate, a, u, f, v, e, o, s, c, l, y, p, r;
                this.callBase(t), v = i.segments, r = h(w, t.x, t.y), r && (a = r.angle, u = r.x, f = r.y, i.segments && (e = a * Math.PI / 180, o = Math.cos(e), s = Math.sin(e), i.segments = n.map(i.segments, function (n) {
                    return n.length === 3 ? (c = n[1], l = n[2], y = (c - u) * o - (l - f) * s + u, p = (c - u) * s + (l - f) * o + f, [[n[0], Math.floor(y), Math.floor(p)]]) : [n]
                }), i.combinePathParams(t), i.segments = v))
            }
        }), d = c.inherit({
            defaultSettings: function () {
                var n = this.callBase();
                return e({points: {x: 0, y: 0}, fill: "black", stroke: "none"}, n)
            }, ctor: function (n, t) {
                this.closePath = !0, this.callBase(n, t)
            }
        }), g = i.SegmentRectSvgElement.inherit(r).inherit(o).inherit({
            defaultSettings: function () {
                var n = this.callBase();
                return n.lineJoin = "miter", delete n.fill, delete n.stroke, delete n.strokecolor, delete n.stroked, n
            }, prepareSegments: function () {
                this.callBase(), this.segments = this.customizeSegments(this.segments), this.settings.x = 0, this.settings.y = 0, this.settings.width = 1, this.settings.height = 1
            }, applySettings: function (n) {
                var t = n.x, i = n.y, r = n.width, u = n.height;
                this.callBase(n), this.settings.x = t, this.settings.y = i, this.settings.width = r, this.settings.height = u
            }
        }), v = i.BezierSvgElement.inherit(r).inherit(o), nt = v.inherit({
            defaultSettings: function () {
                var n = this.callBase();
                return e({points: {x: 0, y: 0}, fill: "black", stroke: "none"}, n)
            }, ctor: function (n, t) {
                this.closePath = !0, this.callBase(n, t)
            }
        }), tt = i.ArcSvgElement.inherit(r).inherit(o).inherit({
            createArcSegments: function (n, t, i, r, u, f) {
                var e = n + r * Math.cos(u), o = t - r * Math.sin(u), s = n + r * Math.cos(f), h = t - r * Math.sin(f),
                    c = n + i * Math.cos(f), l = t - i * Math.sin(f), a = n + i * Math.cos(u), v = t - i * Math.sin(u);
                return [["wr", n - i, t - i, n + i, t + i, c, l, a, v], ["at", n - r, t - r, n + r, t + r, e, o, s, h], ["x e"]]
            }
        }), it = i.BaseSvgElement.inherit(r).inherit({
            defaultSettings: function () {
                return e({cx: 0, cy: 0, r: 0})
            }, applySettings: function (n) {
                return n.cx = n.cx || n.x, n.cy = n.cy || n.y, this.callBase(n)
            }, adjustSettings: function () {
                var n, t, i;
                (this.settings.cx !== undefined || this.settings.cy !== undefined || this.settings.r !== undefined) && (n = "r" in this.settings ? this.settings.r : this.settings.width / 2, t = "cx" in this.settings ? this.settings.cx : this.settings.x + this.settings.width / 2, i = "cy" in this.settings ? this.settings.cy : this.settings.y + this.settings.width / 2, this.settings.x = t - n, this.settings.y = i - n, this.settings.width = this.settings.height = n * 2, delete this.settings.cx, delete this.settings.cy, delete this.settings.r)
            }, ctor: function (n, t) {
                this.callBase(n, "oval", t)
            }
        }), rt = i.BaseSvgElement.inherit(r).inherit({
            isVml: function () {
                return !1
            }, defaultSettings: function () {
                return {x: 0, y: 0, position: "absolute", whiteSpace: "nowrap"}
            }, ctor: function (n, t) {
                this.callBase(n, "span", t)
            }, adjustSettings: function () {
                var t;
                "text" in this.settings && (t = u.isDefined(this.settings.text) ? this.settings.text : "", t = t.toString().replace(/\r/g, ""), t = t.replace(/\n/g, "<br/>"), n(this.element).html(t), delete this.settings.text)
            }, updateText: function (n) {
                n = u.isDefined(n) ? n : "", this.applySettings({text: n})
            }, _applyAttributes: function (n) {
                this.callBase(n);
                var n = this.settings, d = this.settings.rotate, t = 0, v, y, i = 1, r = 0, p,
                    w = this.settings.y + (this.settings.translateY || 0),
                    b = this.settings.x + (this.settings.translateX || 0), g = this.settings.align, k = this.getBBox(),
                    c = this._style || {}, f = 0, e = 0, u, a, l, o = k.width, s = k.height;
                l = h(d, b, w), l && (t = l.angle, v = l.x, y = l.y, Math.abs(t) > 360 && (t = t % 360), t < 0 && (t = t + 360), t ? (p = t * Math.PI / 180, i = Math.cos(p), r = Math.sin(p), c.filter = 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11 = ' + i.toFixed(5) + ", M12 = " + (-r).toFixed(5) + ", M21 = " + r.toFixed(5) + ", M22 = " + i.toFixed(5) + ")") : c.filter = "", f = (b - v) * (i - 1) - (w - y) * r, e = (b - v) * r + (w - y) * (i - 1)), (s || o) && (u = s * (.55 + .45 / 2), t < 90 ? (e -= u * i, f -= (s - u) * r) : t < 180 ? (e += (s - u) * i, f += o * i - (s - u) * r) : t < 270 ? (e += (s - u) * i + o * r, f += o * i + u * r) : (e += o * r - u * i, f += u * r), a = {
                    center: .5,
                    right: 1
                }[g], a && (f -= o * a * i, e -= o * a * r), c.marginLeft = Math.round(f) + "px", c.marginTop = Math.round(e) + "px"), this.applyStyle(c)
            }
        }), ut = i.BaseSvgElement.inherit(r).inherit({
            isVml: function () {
                return !1
            }, defaultSettings: e, ctor: function (n, t) {
                this.callBase(n, "div", t)
            }, applySettings: function (t) {
                var r = this, f = this.callBase, i;
                return t = t || {}, i = t.rotate, i && (u.isNumber(i) && (i = [i, t.x || 0, t.y || 0]), n.each(r.childElements, function () {
                    this.applySettings({rotate: i})
                })), delete t.rotate, t.x = 0, t.y = 0, r.callBase = f, r.callBase(t)
            }, getBBox: function () {
                return this._getBBox()
            }
        }), ft = s.SvgRenderer.inherit({
            ctor: function (n) {
                n = n || {}, n.animation = {enabled: !1}, document.namespaces && !document.namespaces.vml && (document.namespaces.add("vml", "urn:schemas-microsoft-com:vml"), document.createStyleSheet().addRule(".vml", "behavior: url(#default#VML); display: inline-block;")), this._clipRects = {}, this.callBase(n)
            }, updateAnimationOptions: n.noop, recreateCanvas: function (n, t) {
                var i = this, r;
                i.killContainer(), n > 0 && t > 0 && (i._size = {width: n, height: t}, r = new b(i, {
                    width: n,
                    height: t
                }), i.svgRoot = r)
            }, _getSize: function () {
                return this._size || {}
            }, createRect: function (t, i, r, u, f, e) {
                var o = n.extend(!0, {}, e || {}, {x: t, y: i, width: r, height: u, rx: f, ry: f});
                return new a(this, o)
            }, createSegmentRect: function (t, i, r, u, f, e, o) {
                var s = n.extend({}, o || {}, {x: t, y: i, width: r, height: u, rx: f, ry: f, segments: e});
                return new g(this, s)
            }, createClipRect: function (t, i, r, f) {
                var h = this, e = u.getNextClipId(), o = [], s = {
                    id: e, x: t, y: i, width: r, height: f, cSize: h._getSize(), addElement: function (t) {
                        var i = !1;
                        n.each(o, function () {
                            if (this === t) return i = !0, !1
                        }), i || o.push(t)
                    }, applySettings: function (t) {
                        return "x" in t && (this.x = t.x), "y" in t && (this.y = t.y), "width" in t && (this.width = t.width), "height" in t && (this.height = t.height), n.each(o, function () {
                            this.applySettings({clipId: e})
                        }), this
                    }
                };
                return this._clipRects[e] = s, s
            }, getClipRect: function (n, t) {
                var i = this._clipRects[n];
                return i && t && i.addElement(t), this._clipRects[n]
            }, createImage: function (t, i, r, u, f, e) {
                var o = n.extend(!0, {}, e || {}, {x: t, y: i, width: r, height: u, href: f});
                return new k(this, o)
            }, createLine: function (t, i, r, u, f) {
                var e = n.extend(!0, {}, f || {}, {points: [t, i, r, u]});
                return new c(this, e)
            }, createPath: function (t, i) {
                var r = n.extend(!0, {}, i || {}, {points: t});
                return new c(this, r)
            }, createBezierPath: function (t, i) {
                var r = n.extend(!0, {}, i || {}, {points: t});
                return new v(this, r)
            }, createArea: function (t, i) {
                var r = n.extend(!0, {}, i || {}, {points: t});
                return new d(this, r)
            }, createBezierArea: function (t, i) {
                var r = n.extend(!0, {}, i || {}, {points: t});
                return new nt(this, r)
            }, createCircle: function (t, i, r, u) {
                var f = n.extend(!0, {}, u || {}, {cx: t, cy: i, r: r});
                return new it(this, f)
            }, createArc: function (t, i, r, u, f, e, o) {
                var s = n.extend(!0, {}, o || {}, {x: t, y: i, outerRadius: r, innerRadius: u, startAngle: f, endAngle: e});
                return new tt(this, s)
            }, createText: function (t, i, r, u) {
                var f = n.extend(!0, {}, u || {}, {x: i, y: r, text: t});
                return new rt(this, f)
            }, createGroup: function (n) {
                return new ut(this, n)
            }, createPattern: function (n) {
                return {id: n}
            }
        });
    s.VmlRenderer = ft
}(jQuery, DevExpress), function (n, t) {
    function r() {
        return !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    }

    function u() {
        var t = document.createElement("div"), n;
        return t.innerHTML = '<v:shape adj="1" />', n = t.firstChild, n ? (n.style.behavior = "url(#default#VML)", typeof n.adj == "object") : !1
    }

    var i = t.viz.renderers;
    i.Renderer = u() && !r() ? i.VmlRenderer : i.SvgRenderer
}(jQuery, DevExpress), function (n) {
    n.viz.charts = {series: {}}
}(DevExpress), function (n, t) {
    var r = t.Class, u = t.viz.charts;
    u.Color = r.inherit(function () {
        var f = function (n) {
            this.baseColor = n, this.decode()
        }, t = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dodgerblue: "1e90ff",
            feldspar: "d19275",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslateblue: "8470ff",
            lightslategray: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            violetred: "d02090",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        }, i = [{
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, process: function (n) {
                return [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)]
            }
        }, {
            re: /^(\w{2})(\w{2})(\w{2})$/, process: function (n) {
                return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
            }
        }, {
            re: /^(\w{1})(\w{1})(\w{1})$/, process: function (n) {
                return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
            }
        }], e = function () {
            var r = this.baseColor, f, u, s, o, e;
            r.charAt(0) === "#" && (r = r.substr(1, 6)), r = r.toLowerCase(), r = r.replace(/ /g, "");
            for (f in t) t.hasOwnProperty(f) && r === f && (r = t[f]);
            for (u = 0; u < i.length; u++) if (s = i[u].re, o = s.exec(r), o) {
                e = i[u].process(o), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0;
                break
            }
            this.r = n(this.r), this.g = n(this.g), this.b = n(this.b)
        }, n = function (n) {
            return n < 0 || isNaN(n) ? 0 : n > 255 ? 255 : n
        }, r = function (n) {
            var t = n.toString(16);
            return t.length === 1 ? "0" + t : t
        }, u = function (n, t, i) {
            return "#" + r(n) + r(t) + r(i)
        }, o = function () {
            return u(this.r, this.g, this.b)
        }, s = function (t) {
            return t = t || 10, u(n(this.r + t), n(this.g + t), n(this.b + t))
        }, h = function (t) {
            return t = t || 10, u(n(this.r - t), n(this.g - t), n(this.b - t))
        };
        return {ctor: f, highlight: s, darken: h, decode: e, toHex: o}
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var e = t.viz.charts, o = t.Class, r = t.utils, u = 1, f = 6e4;
    e.Range = o.inherit(function () {
        var y = function (t) {
            t && n.extend(this, t)
        }, e = function (n, t) {
            return t < n
        }, o = function (n, t) {
            return t > n
        }, t = function (n, t, r, u) {
            var e = n !== i, f = t !== i;
            e ? f && u(n, t) && r(t) : f && r(t)
        }, p = function (n) {
            var t = this;
            return h.call(t, n), s.call(t, n), t
        }, s = function (r) {
            var u = this, h = u.categoriesY, f = r.categoriesY, s, c = function (n) {
                var t = (u[n + "Priority"] || 0) - (r[n + "Priority"] || 0);
                ((u[n] || 0) < r[n] && t === 0 || t < 0) && (u[n] = r[n], u[n + "Priority"] = r[n + "Priority"])
            };
            if (u.invertY = u.invertY || r.invertY, u.stickY = u.stickY || r.stickY, u.keepValueMarginsY = u.keepValueMarginsY || r.keepValueMarginsY, t(u.minY, r.minY, function (n) {
                    u.minY = n
                }, e), t(u.intervalY, r.intervalY, function (n) {
                    u.intervalY = n
                }, e), t(u.maxY, r.maxY, function (n) {
                    u.maxY = n
                }, o), t(u.minVisibleY, r.minVisibleY, function (n) {
                    u.minVisibleY = n
                }, e), t(u.maxVisibleY, r.maxVisibleY, function (n) {
                    u.maxVisibleY = n
                }, o), c("minValueMarginY"), c("maxValueMarginY"), h === i) u.categoriesY = f; else if (f && f.length) for (s = 0; s < f.length; s++) n.inArray(f[s], h) === -1 && h.push(f[s]);
            return this
        }, h = function (r) {
            var u = this, h = u.categoriesX, f = r.categoriesX, s, c = function (n) {
                var t = (u[n + "Priority"] || 0) - (r[n + "Priority"] || 0);
                ((u[n] || 0) < r[n] && t === 0 || t < 0) && (u[n] = r[n], u[n + "Priority"] = r[n + "Priority"])
            };
            if (u.invertX = u.invertX || r.invertX, u.stickX = u.stickX || r.stickX, u.keepValueMarginsX = u.keepValueMarginsX || r.keepValueMarginsX, t(u.minX, r.minX, function (n) {
                    u.minX = n
                }, e), t(u.intervalX, r.intervalX, function (n) {
                    u.intervalX = n
                }, e), t(u.maxX, r.maxX, function (n) {
                    u.maxX = n
                }, o), t(u.minVisibleX, r.minVisibleX, function (n) {
                    u.minVisibleX = n
                }, e), t(u.maxVisibleX, r.maxVisibleX, function (n) {
                    u.maxVisibleX = n
                }, o), c("minValueMarginX"), c("maxValueMarginX"), h === i) u.categoriesX = f; else if (f && f.length) for (s = 0; s < f.length; s++) n.inArray(f[s], h) === -1 && h.push(f[s]);
            return this
        }, w = function () {
            return c.call(this) || l.call(this)
        }, c = function () {
            return r.isDefined(this.minX) && r.isDefined(this.maxX) || r.isDefined(this.categoriesX)
        }, l = function () {
            return r.isDefined(this.minY) && r.isDefined(this.maxY) || r.isDefined(this.categoriesY)
        }, b = function (n) {
            a.call(this, n), v.call(this, n)
        }, a = function (t) {
            var i = (new Date).getYear() - 1, r = t === "datetime" ? new Date(i, 0, 1) : 0,
                u = t === "datetime" ? new Date(i, 11, 31) : 10;
            n.extend(this, {minX: r, maxX: u, stubDataX: !0})
        }, v = function (t) {
            var i = (new Date).getYear() - 1, r = t === "datetime" ? new Date(i, 0, 1) : 0,
                u = t === "datetime" ? new Date(i, 11, 31) : 10;
            n.extend(this, {minY: r, maxY: u, stubDataY: !0})
        }, k = function (n) {
            var t, i, u = r.isDate(n.maxX) || r.isDate(n.minX), f = r.isDate(n.maxY) || r.isDate(n.minY);
            r.isDefined(n.maxX) && r.isDefined(n.minX) && (t = n.maxX - n.minX), r.isDefined(n.maxY) && r.isDefined(n.minY) && (i = n.maxY - n.minY), !i || f || n.keepValueMarginsY || (n.minY <= 0 && n.maxY <= 0 && n.maxValueMarginY && n.maxValueMarginY > n.maxY / (n.minY - n.maxY) && (n.maxValueMarginY = 0, n.maxY = 0), n.minY >= 0 && n.maxY >= 0 && n.minValueMarginY && n.minValueMarginY > n.minY / (n.maxY - n.minY) && (n.minValueMarginY = 0, n.minY = 0)), !t || u || n.keepValueMarginsX || (n.minX <= 0 && n.maxX <= 0 && n.maxValueMarginX && n.maxValueMarginX > n.maxX / (n.minX - n.maxX) && (n.maxValueMarginX = 0, n.maxX = 0), n.minX >= 0 && n.maxX >= 0 && n.minValueMarginX && n.minValueMarginX > n.minX / (n.maxX - n.minX) && (n.minValueMarginX = 0, n.minX = 0))
        }, d = function () {
            var n = this, t, i, u, f, e = r.isDate(n.maxX) || r.isDate(n.minX),
                o = r.isDate(n.maxY) || r.isDate(n.minY);
            k(n), r.isDefined(n.maxX) && r.isDefined(n.minX) && (t = n.maxX - n.minX), r.isDefined(n.maxY) && r.isDefined(n.minY) && (i = n.maxY - n.minY), (!r.isDefined(n.minVisibleX) || n.minVisibleX < n.minX || n.minVisibleX > n.maxX) && (n.minVisibleX = n.minX), (!r.isDefined(n.maxVisibleX) || n.maxVisibleX < n.minX || n.maxVisibleX > n.maxX) && (n.maxVisibleX = n.maxX), (!r.isDefined(n.minVisibleY) || n.minVisibleY < n.minY || n.minVisibleY > n.maxY) && (n.minVisibleY = n.minY), (!r.isDefined(n.maxVisibleY) || n.maxVisibleY < n.minY || n.maxVisibleY > n.maxY) && (n.maxVisibleY = n.maxY), u = n.maxVisibleX - n.minVisibleX, f = n.maxVisibleY - n.minVisibleY, r.isDefined(n.minX) && n.minValueMarginX && (e ? n.minX = new Date(n.minX.valueOf() - t * n.minValueMarginX) : n.minX -= t * n.minValueMarginX), r.isDefined(n.minVisibleX) && n.minValueMarginX && (e ? n.minVisibleX = new Date(n.minVisibleX.valueOf() - u * n.minValueMarginX) : n.minVisibleX -= u * n.minValueMarginX), r.isDefined(n.maxX) && n.maxValueMarginX && (e ? n.maxX = new Date(n.maxX.valueOf() + t * n.maxValueMarginX) : n.maxX += t * n.maxValueMarginX), r.isDefined(n.maxVisibleX) && n.maxValueMarginX && (e ? n.maxVisibleX = new Date(n.maxVisibleX.valueOf() + u * n.maxValueMarginX) : n.maxVisibleX += u * n.maxValueMarginX), r.isDefined(n.minY) && n.minValueMarginY && (o ? n.minY = new Date(n.minY.valueOf() - i * n.minValueMarginY) : n.minY -= i * n.minValueMarginY), r.isDefined(n.minVisibleY) && n.minValueMarginY && (o ? n.minVisibleY = new Date(n.minVisibleY.valueOf() - f * n.minValueMarginY) : n.minVisibleY -= f * n.minValueMarginY), r.isDefined(n.maxY) && n.maxValueMarginY && (o ? n.maxY = new Date(n.maxY.valueOf() + i * n.maxValueMarginY) : n.maxY += i * n.maxValueMarginY), r.isDefined(n.maxVisibleY) && n.maxValueMarginY && (o ? n.maxVisibleY = new Date(n.maxVisibleY.valueOf() + f * n.maxValueMarginY) : n.maxVisibleY += f * n.maxValueMarginY), n.applyEqualLimitsMargins()
        }, g = function () {
            var n = this, t = r.isDate(n.maxX) || r.isDate(n.minX), i = r.isDate(n.maxY) || r.isDate(n.minY);
            r.isDefined(n.minX) && r.isDefined(n.maxX) && n.minX.valueOf() === n.maxX.valueOf() && (t ? (n.minX = new Date(n.minX.valueOf() - f), n.maxX = new Date(n.maxX.valueOf() + f)) : (n.minX = n.minX - u, n.maxX = n.maxX + u)), r.isDefined(n.minVisibleX) && r.isDefined(n.maxVisibleX) && n.minVisibleX.valueOf() === n.maxVisibleX.valueOf() && (t ? (n.minVisibleX = n.minVisibleX.valueOf() - f < n.minX.valueOf() ? n.minX : new Date(n.minVisibleX.valueOf() - f), n.maxVisibleX = n.maxVisibleX.valueOf() + f > n.maxX.valueOf() ? n.maxX : new Date(n.maxVisibleX.valueOf() + f)) : (n.minVisibleX = n.minVisibleX - u < n.minX ? n.minX : n.minVisibleX - u, n.maxVisibleX = n.maxVisibleX + u > n.maxX ? n.maxX : n.maxVisibleX + u)), r.isDefined(n.minY) && r.isDefined(n.maxY) && n.minY.valueOf() === n.maxY.valueOf() && (i ? (n.minY = new Date(n.minY.valueOf() - f), n.maxY = new Date(n.maxY.valueOf() + f)) : (n.minY = n.minY - u, n.maxY = n.maxY + u)), r.isDefined(n.minVisibleY) && r.isDefined(n.maxVisibleY) && n.minVisibleY.valueOf() === n.maxVisibleY.valueOf() && (i ? (n.minVisibleY = n.minVisibleY.valueOf() - f < n.minY.valueOf() ? n.minY : new Date(n.minVisibleY.valueOf() - f), n.maxVisibleY = n.maxVisibleY.valueOf() + f > n.maxY.valueOf() ? n.maxY : new Date(n.maxVisibleY.valueOf() + f)) : (n.minVisibleY = n.minVisibleY - u < n.minY ? n.minY : n.minVisibleY - u, n.maxVisibleY = n.maxVisibleY + u > n.maxY ? n.maxY : n.maxVisibleY + u))
        };
        return {
            ctor: y,
            getBoundRange: p,
            getBoundRangeX: h,
            getBoundRangeY: s,
            isDefined: w,
            isDefinedX: c,
            isDefinedY: l,
            setStubData: b,
            setStubDataX: a,
            setStubDataY: v,
            applyValueMargins: d,
            applyEqualLimitsMargins: g
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.viz.charts, u = t.Class;
    r.Legend = u.inherit(function () {
        var t = function (t) {
            var r = t, f = {"class": "dxLegend"}, u, e = [];
            if (this.renderer = r.renderer, self.clipRectID && (f.clipId = self.clipRectID), this.legendGroup = this.renderer.createGroup(f), r.horizontalAlignment !== "center" && r.horizontalAlignment !== "right" && r.horizontalAlignment !== "left" && (r.horizontalAlignment = "right"), r.verticalAlignment || (r.horizontalAlignment === "center" && (r.verticalAlignment = "bottom"), (r.horizontalAlignment === "right" || r.horizontalAlignment === "left") && (r.verticalAlignment = "top")), r.verticalAlignment !== "top" && r.verticalAlignment !== "bottom" && (r.verticalAlignment = "top"), r.layout || (r.horizontalAlignment === "center" && (r.layout = "horizontal"), (r.horizontalAlignment === "right" || r.horizontalAlignment === "left") && (r.layout = "vertical")), r.position !== "outside" && r.position !== "inside" && (r.position = "outside"), r.hoverMode = (r.hoverMode || "").toLowerCase(), r.customizeText = n.isFunction(r.customizeText) ? r.customizeText : i, r.series) {
                for (u = 0; u < r.series.length; u++) r.series[u].options.showInLegend && e.push(r.series[u]);
                this.series = e
            }
            this.options = r
        }, r = function (n) {
            return n.customizeText ? n.customizeText.call(this, this) : this.seriesName
        }, u = function () {
            var u = this, l = u.renderer, n = u.options, r = u.series || {}, nt = 0, tt = 0, c = [], e, ot, b, rt, a,
                ut = n.markerSize, k = n.layout === "horizontal", s, v, t = n.columnCount, i = n.rowCount, h,
                d = u.legendGroup, f, g, st = n.equalColumnWidth, y = [], ft, p, o, it = !1, w = u.canvas,
                et = n.border.visible && n.border.width && n.border.color && n.border.color !== "none";
            if (n.visible && r && r.length) {
                for (d && d.clear(), d.append(), f = l.createGroup().append(d), (n.position === "inside" || n.backgroundColor || et) && (g = l.createRect(0, 0, 0, 0, 0, {
                    fill: n.backgroundColor || (n.position === "inside" ? n.containerBackgroundColor : "none"),
                    "class": "dx-legend-inner-rect"
                }).append(f)), e = 0; e < r.length; e++) a = l.createGroup({"class": "dxLegendSeries"}), a.append(f), y.push(l.createRect(0, 0, 0, 0, 0, {
                    stroke: "none",
                    fill: "grey",
                    opacity: .0001
                })), rt = l.createRect(nt, tt, ut, ut, 0, {
                    fill: r[e].styles.themeColor,
                    "class": r[e].className
                }).append(a), s = rt.getBBox(), h = n.itemTextPosition ? n.itemTextPosition === "right" : !k, u.labelFormatObject = {
                    seriesName: r[e].name,
                    seriesNumber: r[e].index,
                    seriesColor: r[e].styles.themeColor
                }, ft = u.formatLabel.call(u.labelFormatObject, n), b = l.createText(ft, h ? nt + s.width + 7 : nt, h ? tt : tt + s.height + 2, {
                    font: n.font,
                    align: h ? "left" : "center"
                }).append(a), v = b.getBBox(), h ? b.move(0, ~~(s.y + s.height / 2 - (v.y + v.height / 2))) : b.move(~~(s.x + s.width / 2 - (v.x + v.width / 2)), s.y + s.height + 2 - v.y), y[e].append(a), y[e].data({
                    series: r[e],
                    mode: n.hoverMode
                }), c.push(a);
                if (t && !i ? i = Math.ceil(r.length / t) : !t && i ? t = Math.ceil(r.length / i) : t && i ? k && t < Math.ceil(r.length / i) ? t = Math.ceil(r.length / i) : !k && i < Math.ceil(r.length / t) && (i = Math.ceil(r.length / t)) : (it = !0, k ? (i = 1, t = r.length) : (t = 1, i = r.length)), p = u.getDataRowsColumns(c, t, i), u.moveItems(p, c, f, h, y), it && i === 1) for (o = f.getBBox(); o.width > w.width - w.right - w.left && t > 1;) t = Math.ceil(t / 2), i = Math.ceil(r.length / t), p = u.getDataRowsColumns(c, t, i), u.moveItems(p, c, f, h, y), o = f.getBBox(); else if (it && t === 1) for (o = f.getBBox(); o.height > w.height - w.top - w.bottom && i > 1;) i = Math.ceil(i / 2), t = Math.ceil(r.length / i), p = u.getDataRowsColumns(c, t, i), u.moveItems(p, c, f, h, y), o = f.getBBox();
                g && (o = f.getBBox(), g.applySettings({
                    x: Math.round(o.x) - n.paddingLeftRight,
                    y: Math.round(o.y) - n.paddingTopBottom,
                    width: Math.round(o.width) + 2 * n.paddingLeftRight,
                    height: Math.round(o.height) + 2 * n.paddingTopBottom
                }), et && g.applySettings({
                    strokeWidth: n.border.width,
                    stroke: n.border.color,
                    strokeOpacity: n.border.opacity,
                    dashStyle: n.border.dashStyle,
                    rx: n.border.cornerRadius || 0,
                    ry: n.border.cornerRadius || 0
                })), u.seriesGroups = c, u.insideLegendGroup = f
            }
        }, f = function (n, t, i) {
            for (var c = this, u, l = c.options, a = l.equalColumnWidth, v = c.series || {}, e = [], s = 0, h = 0, o, f, r = 0; r < t; r++) e[r] = 0;
            for (r = 0; r < i; r++) for (u = 0; u < t; u++) {
                if (o = i < t ? n[r * t + u] : n[r + u * i], !o) break;
                f = o.getBBox(), h < f.height && (h = f.height), a ? s < f.width && (s = f.width) : e[u] < f.width && (e[u] = f.width)
            }
            return {rows: i, cols: t, maxWidthPerColumn: e, maxWidthColumn: s, maxHeightRow: h}
        }, e = function (n, t, i, r, u) {
            var d = this, s, e, y, p, h, c, f, l = 0, w = 0, o, k = d.options, a = k.columnItemSpacing,
                v = k.rowItemSpacing, tt = k.equalColumnWidth, it = d.renderer, g = [], nt = 0, b = 0;
            for (y = n.rows, p = n.cols, b = n.maxHeightRow, nt = n.maxWidthColumn, g = n.maxWidthPerColumn, s = 0; s < y; s++) {
                for (e = 0; e < p; e++) {
                    if (h = y < p ? s * p + e : s + e * y, c = t[h], !c) break;
                    f = c.getBBox(), o = tt ? nt : g[e], r ? (c.move(l - f.x, w), u[h].applySettings({
                        x: f.x - a / 2,
                        y: f.y - v / 2,
                        height: b + v,
                        width: o + a
                    })) : (c.move(l - f.x - f.width / 2 + o / 2, w), u[h].applySettings({
                        x: f.x + f.width / 2 - o / 2 - a / 2,
                        y: f.y - v / 2,
                        height: b + v,
                        width: o + a
                    })), l = l + o + a
                }
                w = w + b + v, l = 0
            }
        }, o = function () {
            return this.insideLegendGroup ? this.insideLegendGroup.getBBox() : {}
        }, s = function () {
            this.legendGroup && this.legendGroup.toForeground()
        }, h = function (n, t) {
            var r = this, i = {};
            n && (i.translateX = n), t && (i.translateY = t), r.insideLegendGroup.applySettings(i)
        };
        return {
            ctor: t,
            draw: u,
            getBoundingRect: o,
            shift: h,
            toForeground: s,
            formatLabel: r,
            getDataRowsColumns: f,
            moveItems: e
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var u = t.viz.charts, o = t.utils, f = t.Class, s = t.viz.core, r = t.formatHelper, e = f.inherit({
        ctor: function (n) {
            this.renderer = n.renderer, this.options = n, this.style = {visibility: "hidden"}, this.customColor = n.color, this.textStyle = {
                font: n.font,
                align: "center",
                visibility: "hidden"
            }, this.canvasWidth = n.canvasWidth
        }, formatValueTooltip: function (n) {
            return r.format(this.value, n.format, n.precision)
        }, formatTooltip: function (n) {
            return this.argumentText = r.format(this.argument, n.argumentFormat, n.argumentPrecision), this.percent !== i && (this.percentText = r.format(this.percent, "percent", n.percentPrecision)), n.customizeText ? n.customizeText.call(this, this) : this.valueText
        }, _getData: function (t, i, r) {
            var y = 4, l = t, a = i, h, v = "center", u = [], c = [], s = this.options,
                f = s.arrowLength > 0 ? s.arrowLength : 0, o = r.width + s.paddingLeftRight * 2,
                e = r.height + s.paddingTopBottom * 2;
            for (o / 2 > t ? (c = this._setArrowLeft(o, e, r, f, t, i), v = "left", l += s.paddingLeftRight) : t + o / 2 > this.canvasWidth ? (c = this._setArrowRight(o, e, r, f, t, i), v = "right", l -= s.paddingLeftRight) : c = this._setArrowCenter(o, e, r, f, t, i), e + f < i ? a -= f + e / 2 - r.height / 2 + this.tooltipOffset : a += f + e / 2 + r.height / 2 + this.tooltipOffset, n.extend(u, c), h = 1; h < u.length; h += 2) e + f < i ? u[h] += y : u[h] -= y;
            return f > 0 && (e + f < i ? u[1] += 2 : u[1] -= 2, o / 2 > t ? u[2] += 2 : t + o / 2 > this.canvasWidth ? u[u.length - 2] -= 2 : (u[2] += 2, u[u.length - 2] -= 2)), {
                points: c,
                text: {x: l, y: a, align: v},
                pointsOfShadow: u
            }
        }, _update: function () {
            var t, n;
            this.text.updateText(this.tooltipText), t = this.text.getBBox(), n = this._getData(this.x, this.y, t), this.shadow.applySettings({points: n.pointsOfShadow}), this.cloud.applySettings({
                points: n.points,
                fill: this.style.fill,
                "class": this.className
            }), this.text.applySettings({y: n.text.y}), t = this.text.getBBox(), this.text.applySettings({
                x: n.text.x,
                y: n.text.y - (t.y + t.height - n.text.y),
                align: n.text.align
            })
        }, draw: function () {
            var n, t, i;
            this.tooltipGroup = this.renderer.createGroup({"class": "dxTooltip"}), n = this.renderer.createPath({}, {
                fill: "#000000",
                stroke: "none",
                visibility: "hidden",
                opacity: .1
            }), n.append(this.tooltipGroup), this.shadow = n, t = this.renderer.createArea({}, this.style), t.append(this.tooltipGroup), this.cloud = t, i = this.renderer.createText("0", 0, 0, this.textStyle), i.append(this.tooltipGroup), this.text = i, this.tooltipGroup.append()
        }, show: function () {
            this.cloud.applySettings({visibility: "visible"}), this.text.applySettings({visibility: "visible"}), this.shadow.applySettings({visibility: "visible"})
        }, hide: function () {
            this.cloud.applySettings({visibility: "hidden"}), this.text.applySettings({visibility: "hidden"}), this.shadow.applySettings({visibility: "hidden"})
        }, move: function (n, t, i, r, u, f) {
            this.x = n, this.y = t, this.tooltipOffset = i, this.tooltipText = r, this.style.fill = this.customColor || u, this.className = f, this._update()
        }, _setArrowCenter: function (n, t, i, r, u, f) {
            var h = !1, s = [], o = u, e = f, c = 20;
            return t + r < f ? e -= this.tooltipOffset : (e += this.tooltipOffset, h = !0), s = [o, e], h ? e += r : e -= r, o += c / 2, s.push(o, e), o += n / 2 - c / 2, s.push(o, e), h ? e += t : e -= t, s.push(o, e), o -= n, s.push(o, e), h ? e -= t : e += t, s.push(o, e), o += n / 2 - c / 2, s.push(o, e), s
        }, _setArrowLeft: function (n, t, i, r, u, f) {
            var h = !1, s = [], o = u, e = f, c = 20;
            return t + r < f ? e -= this.tooltipOffset : (e += this.tooltipOffset, h = !0), s = [o, e], h ? e += r : e -= r, o += c, s.push(o, e), o += n - c, s.push(o, e), h ? e += t : e -= t, s.push(o, e), o -= n, s.push(o, e), h ? e -= t + r : e += t + r, s.push(o, e), s
        }, _setArrowRight: function (n, t, i, r, u, f) {
            var h = !1, s = [], o = u, e = f, c = 20;
            return t + r < f ? e -= this.tooltipOffset : (e += this.tooltipOffset, h = !0), s = [o, e], h ? e += r + t : e -= r + t, s.push(o, e), o -= n, s.push(o, e), h ? e -= t : e += t, s.push(o, e), o += n - c, s.push(o, e), h ? e -= r : e += r, o += c, s.push(o, e), s
        }
    });
    u.Tooltip = e
}(jQuery, DevExpress), function (n, t, i) {
    var f = t.viz.charts, e = t.Class, r = t.utils.isDefined, o = function (n, t) {
        return n.substr(n.length - t.length) === t
    }, u = function (n, t) {
        return n.indexOf(t) === 0
    };
    f.ChartTitle = e.inherit({
        ctor: function (n, t, i) {
            var r = this;
            r._parseAlignments(i), r.horizontalAlignment = i.horizontalAlignment, r.verticalAlignment = i.verticalAlignment, r.renderer = n, r.canvas = t, r.options = i, r.clipRect = r.createClipRect()
        }, _parseAlignments: function (n) {
            if (r(n.position) && !(r(n.verticalAlignment) && r(n.horizontalAlignment))) {
                n.position = n.position.toLowerCase(), n.verticalAlignment = o(n.position, "top") ? "top" : "bottom", n.horizontalAlignment = u(n.position, "left") ? "left" : u(n.position, "center") && "center" || "right";
                return
            }
            n.verticalAlignment = (n.verticalAlignment || "").toLowerCase(), n.horizontalAlignment = (n.horizontalAlignment || "").toLowerCase(), n.verticalAlignment !== "top" && n.verticalAlignment !== "bottom" && (n.verticalAlignment = "top"), n.horizontalAlignment !== "left" && n.horizontalAlignment !== "center" && n.horizontalAlignment !== "right" && (n.horizontalAlignment = "center")
        }, render: function () {
            var n = this, t = n.options, r = n.renderer, o = n.horizontalAlignment, f, u,
                s = n.clipRect ? n.clipRect.id : i, h = r.createGroup({"class": "dxChartTitle", clipId: s}).append(),
                e = r.createGroup().append(h);
            t.text && (f = {
                font: t.font,
                align: o,
                style: t.fontStyle
            }, u = r.createText(t.text, n.canvas.left, n.canvas.top, f), u.append(e), n.title = u, n.innerTitleGroup = e, n.title.text = t.text, n.correctTitleLength())
        }, correctTitleLength: function () {
            var n = this.canvas, t = this.title.text, i, r, u = n.width - n.right - n.left, f = this.getBoundingRect();
            u > f.width || t.indexOf("<br/>") != -1 || (r = t.length * u / f.width, i = t.substr(0, ~~r - 4) + "...", this.title.updateText(i), this.title.text = i)
        }, getBoundingRect: function () {
            var t = this.options, n;
            return this.innerTitleGroup ? (n = this.innerTitleGroup.getBBox(), r(t.placeholderSize) && (n.height = t.placeholderSize), n) : {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            }
        }, shift: function (n, t) {
            this.innerTitleGroup.move(n, t)
        }, createClipRect: function () {
            var n = this, i = n.renderer, t;
            if (r(n.options.placeholderSize)) return t = i.createClipRect(0, 0, 0, 0)
        }, setClipRectSettings: function () {
            var t = this, n = t.canvas, r = t.verticalAlignment, i = t.clipRect;
            i && (r === "top" ? i.applySettings({
                x: 0,
                y: 0,
                height: n.top,
                width: n.width
            }) : r === "bottom" && i.applySettings({x: 0, y: n.height - n.bottom, height: n.bottom, width: n.width}))
        }
    })
}(jQuery, DevExpress), function (n, t, i) {
    var a = t.viz.charts, w = t.viz.core, v = t.Class, r = t.utils, s = Math, c = 100, y = 5, p = 2, h = 4,
        l = "canvas_position_", u = "canvas_position_bottom", f = "canvas_position_top", e = "canvas_position_left",
        o = "canvas_position_right";
    a.Axis = v.inherit(function () {
        var k = function (n, t) {
            this.renderer = n, this.init(t)
        }, d = function (n) {
            var i = n.categories, t = n.label;
            n.hoverMode = n.hoverMode ? n.hoverMode.toLowerCase() : "none", this.hasLabelFormat = t.format !== "" && r.isDefined(t.format), this.options = n, this.staggered = t.staggered, t.minSpacing = r.isDefined(t.minSpacing) ? t.minSpacing : y, ft(n), i && (this.labelsNumber = i.length, this.ticksNumber = this.labelsNumber), n.range = {
                min: n.min,
                max: n.max,
                categories: n.categories && n.categories.slice(0)
            }, this.pane = n.pane, this.textOptions = {
                align: t.alignment,
                font: t.font,
                opacity: t.opacity,
                style: t.style
            }
        }, g = function (n) {
            var t, i, f = n.options, r = n.translator.getBusinessRange(), u;
            if (r && r.getBoundRange && !f.categories) for (i = n.getTickValues(), t = 0; t < i.length - 1; t++) u = Math.abs(i[t] - i[t + 1]), f.isHorizontal ? r.getBoundRange({intervalX: u}) : r.getBoundRange({intervalY: u})
        }, nt = function (n) {
            var u = n.options, i, t = u.label;
            if (u.isHorizontal && t && r.isDefined(t.overlappingBehavior)) {
                switch (t.overlappingBehavior.mode) {
                    case"enlargeTickInterval":
                    case"stagger":
                        i = null;
                        break;
                    case"rotate":
                        i = t.overlappingBehavior.rotationAngle;
                        break;
                    default:
                        i = t.rotationAngle
                }
                t.userAlignment || (n.textOptions.align = i ? "left" : "center"), n.textOptions.rotate = i
            }
        }, tt = function (n) {
            var n = this, t = n.options.label;
            return t ? !n.staggered && n.isStaggerOverlapping ? t.overlappingBehavior.staggeringSpacing : t.staggeringSpacing : 0
        }, it = function (n) {
            this.translator = n, this.needsLabelAdjustment = !1, this.resetTicks(), g(this)
        }, rt = function () {
            this._tickValues = this._tickPositions = null
        }, ut = function (n) {
            var i = this, t = i.options;
            t.isHorizontal ? (t.min = n.minVisibleX, t.max = n.maxVisibleX, t.categories = n.categoriesX, t.stubData = n.stubDataX) : (t.min = n.minVisibleY, t.max = n.maxVisibleY, t.categories = n.categoriesY, t.stubData = n.stubDataY), i.needsLabelAdjustment = !1, this.resetTicks()
        }, ft = function (n) {
            var t = n.label, i = "left", r = "right", u = "top", f = "bottom";
            n.isHorizontal ? n.position === f || n.position === u || (n.position = f) : n.position === i || n.position === r || (n.position = i), n.position === r && (t.indentFromAxis *= -1, t.userAlignment || (t.alignment = i)), n.position === u && (t.indentFromAxis *= -1), t.rotationAngle && n.isHorizontal && (t.userAlignment || (t.alignment = i))
        }, et = function (n) {
            var t = 0;
            return n.delta && (t = n.delta[n.options.position] || 0), n.translator.translateX(l + n.options.position) + t
        }, ot = function (n) {
            var t = 0;
            return n.delta && (t = n.delta[n.options.position] || 0), n.translator.translateY(l + n.options.position) + t
        }, st = function (n, t) {
            var i = n.translator, r = n.options, c = r,
                v = {strokeWidth: c.width, stroke: c.color, strokeOpacity: c.opacity}, a, l = n.axisPosition, s, h;
            c.visible && (n.options.isHorizontal ? (r.categories ? (s = i.translateX(e), h = i.translateX(o)) : (s = i.translateX(r.min), h = i.translateX(r.max)), a = n.renderer.createLine(s, l, h, l, v)) : (r.categories ? (s = i.translateY(f), h = i.translateY(u)) : (s = i.translateY(r.min), h = i.translateY(r.max)), a = n.renderer.createLine(l, s, l, h, v)), a.append(t))
        }, ht = function () {
            var i = this, u = i.options, o = u.tickProvider, a = i.translator, e = u.label, s = u.categories, h, f,
                c = u.isHorizontal ? e.overlappingBehavior : null,
                l = u.isHorizontal ? i.translator.translateX : i.translator.translateY;
            return (f = lt(i, u, l, s), i._tickValues || (i.textOptions.rotate = e.rotationAngle, i.textOptions.align = e.alignment, i._tickValues = n.isArray(s) ? s : o.getTicks(f), this._needProcessOverlapping = !0), i.options.stubData) ? i._tickValues : ((r.isDate(u.min) || r.isDate(s && s[0])) && !this.hasLabelFormat && (e.format = t.formatHelper.getDateFormatByTicks(i._tickValues)), this._needProcessOverlapping && c && c.mode !== "ignore" && (c.mode === "stagger" && (f.screenDelta *= p), h = o.getAutoArrangementStep(i._tickValues, f), h > 1 ? (i.staggered = !1, nt(i), h = o.getAutoArrangementStep(i._tickValues, f), i._tickValues = h > 1 ? o.getAutoArrangementTicks(i._tickValues, f, h) : i._tickValues) : (i.staggered = e.staggered, i.staggeringSpacing = e.staggeringSpacing), this._needProcessOverlapping = !1, o._removeInvalidDatesWithUnitBegining(i._tickValues, f)), i._tickValues)
        }, ct = function (n) {
            this.resetTicks(), this._tickValues = n, n && (this._needProcessOverlapping = !0)
        }, lt = function (n, t, i, s) {
            var a = t.isHorizontal ? [e, o] : [u, f],
                v = Math.abs(i.call(n.translator, a[1]) - i.call(n.translator, a[0])),
                y = r.getSignificantDigitPosition(Math.abs(t.max - t.min) / v), c, h = t.min, l = t.max;
            return r.isNumber(h) && (h = r.roundValue(t.min, y), h < t.min && (c = Math.pow(10, -y), h = r.applyPrecisionByMinDelta(h, c, h + c)), h > l && (h = t.min)), s && s.length > 0 && (h = s[0], l = s[s.length - 1]), {
                min: h,
                max: l,
                textOptions: n.textOptions,
                getText: function (n) {
                    return w(n, t.label)
                },
                renderer: n.renderer,
                textSpacing: n.options.label.minSpacing,
                translator: n.translator,
                tickInterval: n.options.stubData ? null : t.tickInterval,
                screenDelta: v,
                gridSpacingFactor: t.axisDivisionFactor,
                isHorizontal: t.isHorizontal,
                setTicksAtUnitBeginning: t.setTicksAtUnitBeginning,
                incidentOccured: t.incidentOccured
            }
        }, a = function (n) {
            var f = n.options, t, r = [], u, i;
            for (u = f.isHorizontal ? n.translator.translateX : n.translator.translateY, t = n.getTickValues(), (t.hideLabels || f.stubData) && (r.hideLabels = !0), i = 0; i < t.length; i++) r.push({
                text: t[i],
                pos: u.call(n.translator, t[i])
            });
            return r
        }, v = function (n) {
            var t, i = n.options, f = n.translator, u, r;
            if (!n._tickPositions) {
                if (t = a(n), i.categories && (i.discreteAxisDivisionMode !== "crossLabels" || !i.discreteAxisDivisionMode)) for (i.isHorizontal ? (u = f.getIntervalX() / 2, i.valueMarginsEnabled || (t = t.slice(0, t.length - 1))) : (u = -f.getIntervalY() / 2, i.valueMarginsEnabled || (t = t.slice(1, t.length))), r = 0; r < t.length; r++) t[r].pos = t[r].pos + u;
                n._tickPositions = t
            }
            return n._tickPositions
        }, at = function (n, t) {
            var h = n.renderer, o = n.options, s = o.tick, l = o.categories,
                a = o.discreteAxisDivisionMode === "crossLabels" ? 0 : .5, i, f = 8,
                c = {strokeWidth: 1, stroke: s.color, strokeOpacity: s.opacity}, y, e = n.axisPosition, p, w, r, u;
            if (s.visible) if (u = v(n), n.options.isHorizontal) for (i = 0; i < u.length; i++) r = u[i], h.createLine(r.pos, e - f / 2, r.pos, e + f / 2, c).append(t); else for (i = 0; i < u.length; i++) r = u[i], h.createLine(e - f / 2, r.pos, e + f / 2, r.pos, c).append(t)
        }, w = function (n, i) {
            var r = {value: n, valueText: t.formatHelper.format(n, i.format, i.precision) || ""};
            return i.customizeText ? i.customizeText.call(r, r) : r.valueText
        }, vt = function () {
            var n = this.options.label;
            n.format || (n.format = "percent")
        }, yt = function (n, t, i, r) {
            return this.createText(n, i, t, r)
        }, pt = function (n, t) {
            var u, f = n.options, k = f.categories, c = n.renderer, l = n.axisPosition, h = f.label,
                v = h.indentFromAxis, i, e, o, y = [], p = f.isHorizontal ? c.createText : yt,
                b = f.isHorizontal ? l + v : l - v, s;
            if (h.visible) {
                if (i = a(n), i.length === 0 || i.hideLabels) return !0;
                for (u = 0; u < i.length; u++) e = i[u], s = w(e.text, h), r.isDefined(s) && s !== "" && (o = p.call(c, s, e.pos, b, n.textOptions), y.push(o), o.append(t), o.data({argument: e.text}));
                n.labels = y
            }
        }, wt = function () {
            return this.options.multipleAxesSpacing || 0
        }, bt = function (n, t) {
            var s, o = n.options, f = n.renderer, e = n.axisPosition, i = o.title, h = i.margin, r,
                u = {font: i.font, opacity: i.opacity, align: "center", "class": "dx-chart-axis-title"};
            i.text && (n.options.isHorizontal ? r = n.options.position === "bottom" ? f.createText(i.text, n.translator.canvas.left + n.translator.width / 2, e, u) : f.createText(i.text, n.translator.canvas.left + n.translator.width / 2, e, u) : n.options.position === "left" ? (u.rotate = 270, r = f.createText(i.text, e, n.translator.canvas.top + n.translator.height / 2, u)) : (u.rotate = 90, r = f.createText(i.text, e, n.translator.canvas.top + n.translator.height / 2, u)), r.append(t), n.title = r)
        }, kt = function (n, t, r) {
            var nt = n.renderer, g = n.options, p = g.grid, it = g.categories, l = n.translator,
                rt = g.discreteAxisDivisionMode === "crossLabels" ? 0 : .5, y, a,
                tt = {strokeWidth: p.width, stroke: p.color, strokeOpacity: p.opacity}, ut, ft = n.axisPosition, w, b,
                c, k, d, r = r || {visible: !1};
            if (p.visible) if (y = v(n), n.options.isHorizontal) for (w = l.translateY(u), b = l.translateY(f), k = r.visible && r.left ? l.translateX(e) : i, d = r.visible && r.right ? l.translateX(o) : i, a = 0; a < y.length; a++) (c = y[a], s.abs(c.pos - k) < h || s.abs(c.pos - d) < h) || nt.createLine(c.pos, w, c.pos, b, tt).append(t); else for (w = l.translateX(e), b = l.translateX(o), k = r.visible && r.top ? l.translateY(f) : i, d = r.visible && r.bottom ? l.translateY(u) : i, a = 0; a < y.length; a++) (c = y[a], s.abs(c.pos - k) < h || s.abs(c.pos - d) < h) || nt.createLine(w, c.pos, b, c.pos, tt).append(t)
        }, dt = function (t, s) {
            var nt = t.renderer, tt = t.options, k = tt.strips, l = t.translator, a, y = [], d = [], v, h, p, w, c, g;
            if (!tt.stubData) {
                if (g = function (t, i, s, h) {
                        var p = s ? !!(h.minVisibleX || h.maxVisibleX) : !!(h.minVisibleY || h.maxVisibleY),
                            w = (s ? h.categoriesX : h.categoriesY) || [], c = s ? function (n) {
                                return l.translateX(n)
                            } : function (n) {
                                return l.translateY(n)
                            }, k = s ? !!h.invertX : h.invertY, a = s ? [e, o] : [u, f], d, v = c(t), y = c(i),
                            b = s ? h.minVisibleX : h.maxVisibleY, g = s ? h.maxVisibleX : h.maxVisibleY;
                        return (k && a.reverse(), !p && (n.inArray(t, w) === -1 || n.inArray(i, w) === -1)) ? {
                            stripFrom: 0,
                            stripTo: 0
                        } : (!r.isDefined(v) && p && (v = t < b ? c(a[0]) : c(a[1])), !r.isDefined(y) && p && (y = i < b ? c(a[0]) : c(a[1])), v < y ? {
                            stripFrom: v,
                            stripTo: y
                        } : {stripFrom: y, stripTo: v})
                    }, t.options.isHorizontal) {
                    for (p = l.translateY(u), w = l.translateY(f), a = 0; a < k.length; a++) if (h = k[a], h.startValue !== i && h.endValue !== i && h.color !== i) {
                        if (c = g(h.startValue, h.endValue, !0, l.businessRange), c.stripTo - c.stripFrom == 0) continue;
                        v = nt.createRect(c.stripFrom, w, c.stripTo - c.stripFrom, p - w, 0, {fill: h.color}), v.append(s), d.push(v), h.label && h.label.text ? y.push(b(t, h.label, c.stripFrom, c.stripTo, s)) : y.push(null)
                    }
                } else for (p = l.translateX(e), w = l.translateX(o), a = 0; a < k.length; a++) if (h = k[a], h.startValue !== i && h.endValue !== i && h.color !== i) {
                    if (c = g(h.startValue, h.endValue, !1, l.businessRange), c.stripTo - c.stripFrom == 0) continue;
                    v = nt.createRect(p, c.stripFrom, w - p, c.stripTo - c.stripFrom, 0, {fill: h.color}), v.append(s), d.push(v), h.label && h.label.text ? y.push(b(t, h.label, c.stripFrom, c.stripTo, s)) : y.push(null)
                }
                t.stripLabels = y, t.stripRects = d
            }
        }, b = function (n, t, i, r, u) {
            var c = n.renderer, l = t.text, f = n.translator.canvas,
                e = {align: n.options.isHorizontal ? "center" : "left", font: t.font || n.options.label.font}, h, o, s;
            return n.options.isHorizontal ? (t.horizontalAlignment === "center" ? (o = i + (r - i) / 2, e.align = "center") : t.horizontalAlignment === "left" ? (o = i, e.align = "left") : t.horizontalAlignment === "right" && (o = r, e.align = "right"), t.verticalAlignment === "top" ? s = f.top : t.verticalAlignment === "center" ? s = (f.height - f.top - f.bottom) / 2 + f.top : t.verticalAlignment === "bottom" && (s = f.height - f.bottom)) : (t.horizontalAlignment === "center" ? (o = (f.width - f.left - f.right) / 2 + f.left, e.align = "center") : t.horizontalAlignment === "left" ? (o = f.left, e.align = "left") : t.horizontalAlignment === "right" && (o = f.width - f.right, e.align = "right"), t.verticalAlignment === "top" ? s = i : t.verticalAlignment === "center" ? s = r + (i - r) / 2 : t.verticalAlignment === "bottom" && (s = r)), h = c.createText(l, o, s, e), h.append(u), h
        }, gt = function (n) {
            n.axisPosition = n.options.isHorizontal ? ot(n) : et(n)
        }, ni = function (n, t) {
            var i, r = n.options.label, u, e, o, s, f = !!n.staggered;
            if (t = n.options.inverted ? t.slice(0).reverse() : t, n.options.isHorizontal) {
                if (r.overlappingBehavior && r.overlappingBehavior.mode === "stagger") for (i = 1; i < t.length; i++) o = t[i - 1], s = t[i], u = o.getBBox(), e = s.getBBox(), e.x < u.x + u.width + r.minSpacing && (n.isStaggerOverlapping = !0, f = !0)
            } else f = !1;
            return n.needsLabelAdjustment = n.needsLabelAdjustment || f
        }, ti = function (n) {
            var r = n.options, u = n.labels, c = r.label, i, e, o, h, t, f;
            if (r.label.visible && u && u.length) {
                for (t = 0; t < u.length; t++) i = u[t], f = i.getBBox(), r.isHorizontal && r.position === "bottom" ? i.applySettings({y: 2 * i.settings.y - f.y}) : r.isHorizontal || r.position !== "left" && r.position !== "right" ? r.isHorizontal && r.position === "top" && i.applySettings({y: 2 * i.settings.y - f.y - f.height}) : i.applySettings({y: i.settings.y + ~~(i.settings.y - f.y - f.height / 2)});
                if (o = ni(n, u), o) {
                    for (e = 0, t = 0; t < u.length; t = t + 2) i = u[t], f = i.getBBox(), f.height > e && (e = f.height);
                    for (h = n.getStaggeringSpacing(n), e = s.round(e) + h, t = 1; t < u.length; t = t + 2) i = u[t], r.position === "bottom" ? i.move(0, e) : r.position === "top" && i.move(0, -e);
                    for (t = 0; t < u.length; t++) u[t].rotate(0)
                }
            }
        }, ii = function (n) {
            var v = n.options, t, c = n.stripLabels, l = n.stripRects, a, e, r, o, s, u, h, f;
            if (c !== i || l !== i) for (r = 0; r < c.length; r++) h = f = 0, u = v.strips[r], t = u.label, e = c[r], e !== null && (a = l[r], o = e.getBBox(), s = a.getBBox(), t.horizontalAlignment === "left" ? h += u.paddingLeftRight : t.horizontalAlignment === "right" && (h -= u.paddingLeftRight), t.verticalAlignment === "top" ? f += s.y - o.y + u.paddingTopBottom : t.verticalAlignment === "center" ? f += s.y + s.height / 2 - o.y - o.height / 2 : t.verticalAlignment === "bottom" && (f -= u.paddingTopBottom), e.move(h, f))
        }, ri = function (n, t) {
            var f = n.options, e = n.axisPosition, i, r, u = n.title;
            u && (r = u.getBBox(), i = t.getBBox(), n.options.isHorizontal ? n.options.position === "bottom" ? u.move(0, i.y + i.height - r.y + f.title.margin) : u.move(0, i.y - r.y - r.height - f.title.margin) : n.options.position === "left" ? u.move(i.x - r.x - r.width - f.title.margin, 0) : u.move(i.x + i.width - r.x + f.title.margin, 0))
        }, ui = function (n) {
            var t = this, s = t.options.isHorizontal ? "h-axis" : "v-axis",
                h = t.options.isHorizontal ? "h-strips" : "v-strips",
                c = t.clipRectID && t.options.placeholderSize ? t.clipRectID : i,
                r = t.axisGroup = t.axisGroup || t.renderer.createGroup({"class": s, clipId: c}),
                u = t.axisStripGroup = t.axisStripGroup || t.renderer.createGroup({"class": h}),
                o = t.renderer.createGroup({"class": "axis-grid"}),
                f = t.renderer.createGroup({"class": "axis-elements"}),
                e = t.renderer.createGroup({"class": "axis-line"});
            n = n || {}, r.clear(), u.clear(), r.detach(), u.detach(), gt(t), t._virtual || (st(t, e), at(t, e), pt(t, f), t.options.title.text && bt(t, f)), t.options.strips && dt(t, u), kt(t, o, n.borderOptions), f.append(r), o.append(r), e.append(r), u.append(t.stripsGroup), r.append(), ti(t), ii(t), ri(t, f), t.axisElementsGroup = f, t.axisGroup = r, t.axisLineGroup = e, t.axisStripGroup = u
        }, fi = function () {
            var n = this.axisElementsGroup.getBBox(), f = this.axisLineGroup.getBBox(),
                e = this.options.placeholderSize, t, u = this.options.isHorizontal, i = u && "y" || "x",
                r = u && "height" || "width", o = this.options.position === (u && "bottom" || "right");
            return n.x || n.y || n.width || n.height ? (t = f[i] || this.axisPosition, o ? (n[r] = e || n[r] - (t - n[i]), n[i] = t) : n[r] = e || f[r] + t - n[i], n) : n
        }, ei = function (n, t) {
            var r = this, i = {};
            n && (i.translateX = n), t && (i.translateY = t), r.axisGroup.applySettings(i)
        }, oi = function () {
            var u = this, n = u.options, t = {}, i = function (i, u) {
                n.valueMarginsEnabled ? r.isDefined(n[i]) && (t[i + u] = n[i], t[i + u + "Priority"] = c) : (t[i + u] = 0, t[i + u + "Priority"] = c)
            };
            return n.isHorizontal ? (t.minX = n.range.min, t.maxX = n.range.max, t.minVisibleX = n.range.min, t.maxVisibleX = n.range.max, i("minValueMargin", "X"), i("maxValueMargin", "X"), t.invertX = n.inverted, t.stickX = !n.valueMarginsEnabled, t.categoriesX = n.range.categories) : (t.minY = n.range.min, t.maxY = n.range.max, t.minVisibleY = n.range.min, t.maxVisibleY = n.range.max, t.invertY = n.inverted || n.type === "discrete" && n.oppositeDirectionYAxis, t.stickY = !n.valueMarginsEnabled, i("minValueMargin", "Y"), i("maxValueMargin", "Y"), t.categoriesY = n.range.categories), t
        }, si = function (t, i, r) {
            n(this).on(t, i, r);
            return this
        }, hi = function (t) {
            return n(this).off(t), this
        };
        return {
            ctor: k,
            init: d,
            resetTicks: rt,
            getStaggeringSpacing: tt,
            setTranslator: it,
            getTickValues: ht,
            setTickValues: ct,
            getRangeData: oi,
            getMultipleAxesSpacing: wt,
            setRange: ut,
            setPercentLabelFormat: vt,
            draw: ui,
            getBoundingRect: fi,
            shift: ei,
            on: si,
            off: hi
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var f = t.ui, e = f.Component, u = t.viz.charts, r = t.utils, s = 100, o = {animate: !1};
    u.BaseChart = e.inherit({
        _defaultOptions: function () {
            return {
                done: n.noop,
                drawn: n.noop,
                redrawOnResize: !0,
                incidentOccured: n.noop,
                margin: {left: 0, top: 0, right: 0, bottom: 0},
                size: {width: i, height: i},
                title: {text: null},
                legend: {hoverMode: "includePoints"},
                animation: {
                    enabled: !0,
                    duration: 1e3,
                    easing: "easeOutCubic",
                    maxPointCountSupported: 300,
                    asyncSeriesRendering: !0,
                    asyncTrackersRendering: !0,
                    trackerRenderingDelay: 1200
                },
                seriesSelectionMode: "single",
                pointSelectionMode: "single",
                seriesClick: n.noop,
                pointClick: n.noop,
                argumentAxisClick: n.noop,
                seriesHover: n.noop,
                pointHover: n.noop,
                seriesSelected: n.noop,
                pointSelected: n.noop
            }
        }, _init: function () {
            this._saveUserCanvas(), this._initRenderer(), this._reinit(), this._needHandleRenderComplete = !0
        }, _reinit: function () {
            var t = this;
            t.tooltip = {}, t.layoutManager = t._createLayoutManager(), t.option("redrawOnResize") && window && r.windowResizeCallbacks.add(t._resizeHandler()), n.isFunction(t.option("incidentOccured")) || t.option("incidentOccured", n.noop), t._reinitDataSource()
        }, destroy: function () {
            var t = this, i = t._element();
            t.destroyed || (t._dispose(), t._render = n.noop, i.data(t.NAME) && i.data(t.NAME, null), t.destroyed = !0)
        }, _clean: function () {
            var n = this._element();
            n.empty(), this._saveDirtyCanvas()
        }, dispose: function () {
            this._dispose()
        }, _initRenderer: function () {
            this.renderer = this.renderer || this.createRenderer()
        }, _initSeries: function () {
            this.series = this.series || this._populateSeries()
        }, _reinitDataSource: function () {
            this._initDataSource(), this._loadDataSource()
        }, _initOptions: function (n) {
            var t = this, i;
            n.commonSeriesSettings && n.commonSeriesSettings.type && !r.isString(n.commonSeriesSettings.type) && (n.commonSeriesSettings.type = ""), n.userCommonSeriesSettings = n.commonSeriesSettings, i = this._processTitleOption(n.title, this.option("title")), i && (n.title = i), this._processAxesOption(n), t.themeManager = t._createThemeManager(n), t.option(t.themeManager.applyChartTheme(n))
        }, _processTitleOption: function (n, t) {
            if (r.isString(n)) {
                var i = n;
                return n = t, n.text = i, n
            }
        }, _processAxesOption: function (t) {
            var u = n.isArray(t.argumentAxis) ? t.argumentAxis : [t.argumentAxis],
                f = n.isArray(t.valueAxis) ? t.valueAxis : [t.valueAxis], i = function (n) {
                    for (var t, u, i = 0, i = 0; i < n.length; i++) t = n[i], t && t.title && r.isString(t.title) && (u = t.title, t.title = {}, t.title.text = u), t && t.label && (t.label.alignment && (t.label.userAlignment = !0), r.isString(t.label.overlappingBehavior) && (t.label.overlappingBehavior = {mode: t.label.overlappingBehavior}), t.label.overlappingBehavior && t.label.overlappingBehavior.mode || (t.label.overlappingBehavior = t.label.overlappingBehavior || {}, t.label.rotationAngle && (t.label.overlappingBehavior.mode = "rotate", t.label.overlappingBehavior.rotationAngle || (t.label.overlappingBehavior.rotationAngle = t.label.rotationAngle)), t.label.staggered && (t.label.overlappingBehavior.mode = "stagger", t.label.overlappingBehavior.staggeringSpacing || (t.label.overlappingBehavior.staggeringSpacing = t.label.staggeringSpacing))))
                };
            t.userCommonAxisSettings = t.commonAxisSettings, i([t.commonAxisSettings]), i(u), i(f)
        }, _saveUserCanvas: function () {
            var n = this.option("size");
            n.width !== i && (n.userWidth = n.width), n.height !== i && (n.userHeight = n.height)
        }, _saveDirtyCanvas: function () {
            this.dirtyCanvas = this._calculateCanvas()
        }, _resizeHandler: function () {
            var n = this;
            return t.utils.createResizeHandler(function () {
                n._render(o)
            })
        }, createRenderer: function () {
            var n = this.option("animation");
            return n = n === !0 ? this._defaultOptions().animation : n, u.factory.createRenderer({animation: n})
        }, _createThemeManager: function (n) {
            return n = n || {}, u.factory.createThemeManager({theme: n.theme, palette: n.palette})
        }, _calculateCanvas: function () {
            var t = this.option("size"), i = this._element();
            return r.isDefined(t.userWidth) || (t.width = i.width(), t.width || (t.width = 400)), r.isDefined(t.userHeight) || (t.height = i.height(), t.height || (t.height = 400)), n.extend({}, t, this.option("margin"))
        }, _createLayoutManager: function () {
            return new u.factory.createChartLayoutManager(this)
        }, _processTracker: function () {
            var t = this._element(), i = this.option("events"), n = this.option("rotated");
            this.tracker = new u.Tracker({
                container: t,
                series: this.series,
                valueAxis: n ? this.horizontalAxes : this.verticalAxes,
                argumentAxis: n ? this.verticalAxes : this.horizontalAxes,
                seriesSelectionMode: this.option("seriesSelectionMode"),
                pointSelectionMode: this.option("pointSelectionMode"),
                markerTrackerGroup: this.markerTrackerGroup,
                seriesTrackerGroup: this.seriesTrackerGroup,
                legendGroup: this.legend.legendGroup,
                seriesGroup: this.seriesGroup,
                events: {
                    seriesClick: this.option("seriesClick"),
                    pointClick: this.option("pointClick"),
                    argumentAxisClick: this.option("argumentAxisClick"),
                    seriesHover: this.option("seriesHover"),
                    seriesSelected: this.option("seriesSelected"),
                    pointHover: this.option("pointHover"),
                    pointSelected: this.option("pointSelected")
                }
            })
        }, _render: function (n) {
            var t = this, r = t.renderer, f = t.translators, o = t.layoutManager, i = t.canvas, s = t._element(),
                e = t._calculateCanvas(), u = t.dirtyCanvas;
            if (n = n || {recreateCanvas: !0}, n.recreateCanvas = n.recreateCanvas || !r.isInitialized(), !n.force && u && u.width === e.width && u.height === e.height) {
                t.stopRedraw = !0;
                return
            }
            if (clearTimeout(t.delayedRedraw), n.recreateCanvas && (r.killContainer(), i = t._calculateCanvas()), i.width && i.height && s.is(":visible")) t.hiddenContainer = !1; else {
                t.option("incidentOccured")("Chart can not be drawn as container is not visible"), t.hiddenContainer = !0, t.stopRedraw = !0;
                return
            }
            n.recreateCanvas && (t.canvas = i, r.recreateCanvas(t.canvas.width, t.canvas.height), t.renderer.draw(t._element()[0]), t._createCanvasClipRect(), f && (f.length = 0)), o.init(), t.seriesGroup.clear(), t.seriesTrackerGroup.clear(), t.markerTrackerGroup.clear(), t.trackerGroup.clear(), t.seriesLabelsGroup.clear(), t._saveDirtyCanvas()
        }, _drawTitle: function () {
            var n = this, t = n.option("title"), i = n.renderer;
            n.chartTitle = new u.ChartTitle(i, n.canvas, t), n.chartTitle.render()
        }, _createTooltip: function () {
            var t = this, f = t.option("tooltip") || {};
            f.enabled && (f = n.extend(!0, {
                renderer: t.renderer,
                canvasWidth: t.canvas.width
            }, f), !n.isFunction(f.customizeText) && r.isDefined(f.customizeText) && (t.option("incidentOccured").call(null, "customizeText can not be applied as it is not a function"), f.customizeText = i), t.tooltip = u.factory.createTooltip(f), t.tooltip.draw(), t.tracker.tooltip = t.tooltip)
        }, _prepareDrawOptions: function (t) {
            var i = this.option("animation"), u;
            return i = i === !0 ? this._defaultOptions().animation : i, u = n.extend({}, {
                force: !1,
                adjustAxes: !0,
                drawLegend: !0,
                drawTitle: !0,
                adjustSeriesLabels: !0,
                animate: i.enabled,
                animationPointsLimit: i.maxPointCountSupported,
                asyncSeriesRendering: i.asyncSeriesRendering,
                asyncTrackersRendering: i.asyncTrackersRendering,
                trackerRenderingDelay: i.trackerRenderingDelay
            }, t), r.isDefined(u.recreateCanvas) || (u.recreateCanvas = !(!u.adjustAxes || !u.drawLegend || !u.drawTitle)), u
        }, _optionChanged: function (n, t, i) {
            var r;
            if (n === "dataSource") this._reinitDataSource(), this._needHandleRenderComplete = !0; else if (n === "series") this.series = this._populateSeries(), this._handleDataSourceChanged(), this._needHandleRenderComplete = !0; else if (n === "commonSeriesSettings") this.option("userCommonSeriesSettings", t), this.series = this._populateSeries(); else if (n === "commonAxisSettings") this.option("userCommonAxisSettings", t); else if (n === "palette" || n === "theme") this.themeManager = this._createThemeManager({
                palette: t,
                theme: this._options.theme
            }), this.option(this.themeManager.applyChartTheme(this._options)); else if (n === "animation") this.renderer.updateAnimationOptions(t); else if (n === "panes" || n === "valueAxis" || n === "argumentAxis") this._panesChanged = !0, this._needReinit = !0, this._needHandleRenderComplete = !0, this.callBase.apply(this, arguments); else if (n === "title") {
                if (r = this._processTitleOption(t, i), r) {
                    this.option("title", i);
                    return
                }
                this.callBase.apply(this, arguments)
            } else n === "size" ? (this._saveUserCanvas(), this._needReinit = !0, this.callBase.apply(this, arguments)) : (this._needReinit = !0, this.callBase.apply(this, arguments))
        }, _refresh: function () {
            this._needReinit && this._reinit(), this._needReinit = !1, this._clean(), this._render({force: !0})
        }, _dataSourceOptions: function () {
            return {paginate: !1, _preferSync: !0}
        }, _createCanvasClipRect: function () {
            var t = this, r = t.renderer, i, n = t.canvas;
            i = r.createClipRect(n.left, n.top, n.width - n.left - n.right, n.height - n.top - n.bottom), t.canvasClipRectID = i.id
        }, _getCanvasClipRectID: function () {
            return this.canvasClipRectID
        }, _handleDataSourceChanged: function () {
            this._dataSpecificInit(!0)
        }, _dataSpecificInit: function (n) {
            this._seriesInitializing = !0, this._initSeries(), this._repopulateSeries(n)
        }, _processSeriesTemplate: function () {
            var f = this, o = this.option("seriesTemplate"),
                y = r.isFunction(o.customizeSeries) ? o.customizeSeries : n.noop, s = o.nameField || "series",
                c = this._dataSource, e, v, u;
            if (c) {
                var h = {}, l = [], a = c.items(), i;
                for (e = 0, v = a.length; e < v; e++) u = a[e], i = h[u[s]], i || (i = h[u[s]] = {
                    name: u[s],
                    data: []
                }, l.push(i.name)), i.data.push(u);
                f._templatedSeries = n.map(l, function (t) {
                    var i = h[t], r = y.call(null, i.name);
                    return n.extend(i, r)
                }), f._populateSeries(), delete f._templatedSeries, f._handleSeriesPopulated(!1)
            }
        }, getAllSeries: function () {
            var t = [];
            return n.each(this.series, function (n, i) {
                t.push(i)
            }), t
        }, getSeriesByName: function (t) {
            var i = null;
            return n.each(this.series, function (n, r) {
                if (r.name === t) return i = r, !1
            }), i
        }, getSeriesByPos: function (n) {
            return this.series[n]
        }, _handleRenderComplete: function () {
            var t = this, r = t.option("done"), i = !0;
            t._needHandleRenderComplete && (n.each(t.series, function (n, t) {
                i = i && t.canRenderCompleteHandle()
            }), i && (n.isFunction(r) && r.call(t), t._needHandleRenderComplete = !1))
        }, getSelectedSeries: function () {
            return null
        }, clearSelection: function () {
            this.tracker.clearSelection()
        }
    }).include(f.DataHelperMixin)
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.viz.charts, u = t.utils, o = 5, e = "default", s = "defaultAxisName", f = .1;
    r.Chart = r.BaseChart.inherit({
        _defaultOptions: function () {
            return n.extend(!0, this.callBase(), {
                commonSeriesSettings: {
                    type: "line",
                    maxLabelCount: i,
                    pane: e,
                    stack: "default",
                    label: {
                        visible: !1,
                        alignment: "center",
                        rotationAngle: 0,
                        horizontalOffset: 0,
                        verticalOffset: 0,
                        radialOffset: 0,
                        format: "",
                        argumentFormat: "",
                        precision: 0,
                        argumentPrecision: 0,
                        percentPrecision: 0,
                        customizeText: i,
                        position: "outside",
                        connector: {visible: !1, width: 0}
                    }
                },
                defaultPane: e,
                adjustOnZoom: !0,
                rotated: !1,
                synchronizeMultiAxes: !0,
                equalBarWidth: !0,
                commonPaneSettings: {
                    backgroundColor: "none",
                    border: {visible: !1, top: !0, bottom: !0, left: !0, right: !0, dashStyle: "solid"}
                },
                panes: [{name: e, border: {}}],
                commonAxisSettings: {
                    tickInterval: i,
                    setTicksAtUnitBeginning: !0,
                    valueMarginsEnabled: !0,
                    placeholderSize: null
                }
            })
        }, _init: function () {
            this.paneAxis = {}, this._initRenderer(), this.callBase()
        }, _reinit: function () {
            this._panesChanged && (delete this.series, this.paneAxis = {}), delete this._panesChanges, this.translators = [], this.panes = this._createPanes(), this._populateAxes(), this.callBase(), delete this._seriesInitializing, this.series ? this._correctValueAxes() : this._dataSpecificInit()
        }, _correctBusinessRange: function (t, i, r, f) {
            var e = "min" + r, s = "max" + r, o, h;
            return !i || !u.isDefined(t[e]) || !u.isDefined(t[s]) ? !1 : (o = {}, h = i, i = n.isNumeric(i) ? i : u.convertDateTickIntervalToMilliseconds(i), i >= Math.abs(t[s] - t[e])) ? (u.isDate(t[e]) ? (n.isNumeric(h) ? (o[e] = new Date(t[e].valueOf() - i), o[s] = new Date(t[s].valueOf() + i)) : (o[e] = u.addInterval(t[e], h, !0), o[s] = u.addInterval(t[s], h, !1)), f && (u.correctDateWithUnitBeginning(o[s], h), u.correctDateWithUnitBeginning(o[e], h))) : (o[e] = t[e] - i, o[s] = t[s] + i), t.getBoundRange(o), !0) : !1
        }, _populateBusinessRange: function (t) {
            var u = this, tt = u.panes, a = [], ft, o, l = u.option("rotated"), v,
                c = l ? u.horizontalAxes : u.verticalAxes, p = l ? u.verticalAxes : u.horizontalAxes,
                y = l && "X" || "Y", h = l && "Y" || "X", w = "getBoundRange" + y, b = "getBoundRange" + h, et,
                it = n.map(tt, function (n) {
                    return n.name
                }), k = u.series, d, g, rt = function (t) {
                    var i = [], r;
                    if (n.each(c, function (n, r) {
                            r.pane === t && i.push(r)
                        }), i.length > 1) for (o = 1; o < i.length; o++) r = i[o].options.grid, r && r.visible && (r.visible = !1)
                }, s = u.paneAxis, e = new r.Range, ut = function (n, t) {
                    for (var r, i = 0; i < n.length; i++) if (n[i].pane === t) {
                        r = n[i].name;
                        break
                    }
                    return r || (r = c[0].name), r
                }, nt;
            n.each(k, function (n, t) {
                t.axis = t.axis || ut(c, t.pane), t.axis && (s[t.pane] = s[t.pane] || {}, s[t.pane][t.axis] = !0)
            }), n.each(c, function (t, i) {
                i.name && i.pane && n.inArray(i.pane, it) != -1 && (s[i.pane] = s[i.pane] || {}, s[i.pane][i.name] = !0)
            }), u._correctValueAxes(), n.each(s, function (u, s) {
                rt(u), n.each(s, function (s) {
                    var l = [], it = [], rt = [], nt = new r.Range({
                        pane: u,
                        axis: s,
                        minValueMarginX: f,
                        maxValueMarginX: f,
                        minValueMarginY: f,
                        maxValueMarginY: f
                    }), tt;
                    for (n.each(k, function (n, t) {
                        t.pane === u && t.axis === s && l.push(t)
                    }), n.each(p, function (n, t) {
                        rt.push(t)
                    }), n.each(c, function (n, t) {
                        t.pane === u && t.name === s && it.push(t)
                    }), n.each(rt, function (n, t) {
                        t.options.type = l && l.length ? l[0].options.argumentAxisType : null, e = e[b](t.getRangeData()), d = t.options.tickInterval, g = t.options.setTicksAtUnitBeginning
                    }), n.each(it, function (n, t) {
                        t.options.type = l && l.length ? l[0].options.valueAxisType : null;
                        var u = new r.Range(t.getRangeData());
                        u.applyEqualLimitsMargins(), tt = tt || t.options.valueType === "datetime" ? "datetime" : i, nt = nt[w](u)
                    }), o = 0; o < l.length; o++) v = l[o].getRangeData(t), nt = nt[w](v), e = e[b](v);
                    nt["isDefined" + y]() || nt["setStubData" + y](tt), a.push(nt)
                })
            }), e["isDefined" + h]() || e["setStubData" + h](p[0].options.argumentType), nt = u._correctBusinessRange(e, d, h, g), n.each(a, function (n, t) {
                t = t.getBoundRange(e), nt || t.applyValueMargins(), t["stubData" + h] = e["stubData" + h], t.isDefined() || t.setStubData()
            }), u.businessRanges = a
        }, _createPanes: function () {
            var i = this, t = i.option("panes"), r;
            return i.defaultPane = i.option("defaultPane"), t = n.isArray(t) ? t : t ? [t] : [], !i._doesPaneExists(t, i.defaultPane) && t.length > 0 && (r = t[t.length - 1].name, i.option("incidentOccured")('Pane "' + i.defaultPane + '" does not exist. Use pane "' + r + '" instead'), i.defaultPane = r), i.option("rotated") && (t = t.reverse()), t
        }, _doesPaneExists: function (t, i) {
            var r = !1;
            return n.each(t, function (n, t) {
                if (t.name === i) return r = !0, !1
            }), r
        }, _populateSeries: function () {
            var i = this, tt = !!i.option("seriesTemplate"), s = tt ? i._templatedSeries : i.option("series"),
                v = n.isArray(s) ? s : s ? [s] : [], h = i.option("argumentAxis"), f = i.option("valueAxis"),
                y = i.themeManager, l, t, p = i.option("commonSeriesSettings"),
                it = i.option("userCommonSeriesSettings"), e, w = i.renderer.createGroup({"class": "series-container"}),
                b = i.renderer.createGroup({"class": "labels-container"}),
                k = i.renderer.createGroup({"class": "tracker", opacity: .0001}),
                d = i.renderer.createGroup({"class": "seriesTracker"}),
                g = i.renderer.createGroup({"class": "markerTracker", stroke: "none", fill: "grey"}),
                rt = i.option("rotated"), nt = i.option("incidentOccured"), o, ut = n.map(i.panes, function (n) {
                    return n.name
                }), a, c;
            for (this.series = [], y.resetPalette(), p.containerBackgroundColor = i.option("containerBackgroundColor"), o = 0; o < v.length; o++) (t = v[o], t.type && !u.isString(t.type) && (t.type = ""), a = t.pane || i.defaultPane, n.inArray(a, ut) !== -1) && (l = t.data, t.data = null, t.seriesGroup = w, t.seriesLabelsGroup = b, t.trackerGroup = k, t.seriesTrackerGroup = d, t.markerTrackerGroup = g, h && (t.argumentCategories = h.categories, t.argumentAxisType = h.type, t.argumentType = h.argumentType), f && (u.isArray(f) ? n.each(f, function (n, i) {
                (t.axis || n) && t.axis !== i.name || (t.valueCategories = i.categories, t.valueAxisType = i.type, t.valueType = i.valueType)
            }) : (t.valueCategories = f.categories, t.valueAxisType = f.type, t.valueType = f.valueType)), t.rotated = rt, t.incidentOccured = nt, t.name || (t.name = "Series " + (o + 1).toString()), c = y.applyNextSeriesTheme(t, p, it), e = r.factory.createSeries(c.type, this.renderer, l, c), e ? (e.axis = t.axis, e.pane = a, e.index = o, i.series.push(e)) : nt.call(null, "Unknown series type requested: " + c.type), t.data = l);
            return i.seriesGroup = w, i.seriesLabelsGroup = b, i.trackerGroup = k, i.seriesTrackerGroup = d, i.markerTrackerGroup = g, i.series
        }, _createValueAxis: function (t, i, u) {
            var f = this, e;
            return t = n.extend({
                isHorizontal: i,
                tickProvider: u,
                incidentOccured: f.option("incidentOccured")
            }, t), t = n.extend(!0, {}, f.option("commonAxisSettings"), f.option(i ? "horizontalAxis" : "verticalAxis"), f.option("valueAxisStyle"), f.option("userCommonAxisSettings"), f.option("valueAxis"), t), t.strips && n.each(t.strips, function (i) {
                t.strips[i] = n.extend(!0, {}, t.stripStyle, t.strips[i])
            }), e = r.factory.createAxis(f.renderer, t), e.name = t.name, e.pane = e.pane || t.pane, e.priority = t.priority, e
        }, _populateAxes: function () {
            var t = this, o = [], h = [], u = t.panes, f = t.option("rotated"), tt = t.themeManager,
                c = t.option("valueAxis") || {}, l = t.option("argumentAxis") || {}, a = n.isArray(l) ? l : [l],
                w = n.isArray(c) ? c : [c], it, e, y = [], rt, p = r.factory.getAxisTickProvider(), v,
                b = function (i, u) {
                    i = n.extend(!0, {
                        isHorizontal: !f,
                        tickProvider: p,
                        pane: t.defaultPane,
                        incidentOccured: t.option("incidentOccured")
                    }, i), i = n.extend(!0, {}, t.option("commonAxisSettings"), t.option(f ? "verticalAxis" : "horizontalAxis"), t.option("argumentAxisStyle"), t.option("userCommonAxisSettings"), t.option("argumentAxis"), i), i.strips && n.each(i.strips, function (t) {
                        i.strips[t] = n.extend(!0, {}, i.stripStyle, i.strips[t])
                    }), e = r.factory.createAxis(t.renderer, i), e._virtual = u, i.isHorizontal ? o.push(e) : h.push(e)
                };
            v = f ? a[0].position === "right" ? u[u.length - 1].name : u[0].name : a[0].position === "top" ? u[0].name : u[u.length - 1].name, n.each(u, function (t, i) {
                var r = i.name, u = r != v, f = n.extend(!0, {}, {pane: r}, a[0]);
                b(f, u)
            });
            var k = function (n) {
                var i = t._createValueAxis(n, f, p);
                f ? o.push(i) : h.push(i)
            }, d = 0, g = function () {
                return s + d++
            }, nt = function (t) {
                for (var r = {}, u = t.length, i = 0; i < u; i++) r[t[i]] = !0;
                return n.map(r, function (n, t) {
                    return t
                })
            };
            n.each(w, function (r, u) {
                var f = [], e = u.name;
                if (e && n.inArray(e, y) != -1) {
                    t.option("incidentOccured").call(null, "The valueAxis configuration array contains axes with the same name.");
                    return
                }
                e && y.push(e), u.pane && f.push(u.pane), u.panes && u.panes.length && (f = f.concat(u.panes.slice(0))), f = nt(f), f.length || f.push(i), n.each(f, function (t, i) {
                    k(n.extend(!0, {}, u, {name: e || g(), pane: i, priority: r}))
                })
            }), t.horizontalAxes = o, t.verticalAxes = h
        }, _correctValueAxes: function () {
            var i = this, s = i.option("rotated"), b = i.themeManager, e = i.option("valueAxis") || {},
                h = n.isArray(e) ? e : [e], v = r.factory.getAxisTickProvider(),
                t = (s ? i.horizontalAxes : i.verticalAxes) || [], y = t[0].name, f = i.paneAxis || {}, o = i.panes, u,
                c = {}, p = function (t) {
                    var r;
                    return n.each(i.paneAxis, function (i, u) {
                        n.each(u, function (n) {
                            if (t == n) return r = i, !1
                        })
                    }), r
                }, w = n.map(t, function (n) {
                    return n.pane ? null : n
                }), l, a;
            for (n.each(w, function (n, t) {
                t.pane = p(t.name), t.pane || (t.pane = i.defaultPane, f[t.pane] = f[t.pane] || {}, f[t.pane][t.name] = !0), t.options.pane = t.pane
            }), u = 0; u < o.length; u++) f[o[u].name] || (f[o[u].name] = {}, f[o[u].name][y] = !0);
            l = function (n) {
                for (var u, r = 0; r < h.length; r++) if (h[r].name == n) {
                    u = e[r], u.priority = r;
                    break
                }
                if (!u) for (r = 0; r < t.length; r++) if (t[r].name == n) {
                    u = t[r].options, u.priority = t[r].priority;
                    break
                }
                return u || (i.option("incidentOccured").call(null, 'Value axis with name "' + n + '" does not exist. It was created.'), u = {
                    name: n,
                    priority: t.length
                }), u
            }, a = function (n, i) {
                var r;
                for (u = 0; u < t.length; u++) if (r = t[u], r.name === i && r.pane === n) return r
            }, n.each(i.paneAxis, function (r, u) {
                n.each(u, function (u) {
                    var o, e;
                    c[u + "-" + r] = !0, o = a(r, u), o || (e = l(u), e && t.push(i._createValueAxis(n.extend(!0, {}, e, {
                        pane: r,
                        name: u
                    }), s, v)))
                })
            }), t = n.grep(t, function (n) {
                return !!c[n.name + "-" + n.pane]
            }), t.sort(function (n, t) {
                return n.priority - t.priority
            }), s ? i.horizontalAxes = t : i.verticalAxes = t
        }, _processSeriesFamilies: function () {
            var t = this, i = [], f = [], u, e = t.option("rotated");
            n.each(t.series, function (t, r) {
                n.inArray(r.type, i) === -1 && i.push(r.type)
            }), n.each(t.panes, function (o, s) {
                u = [], n.each(t.series, function (n, t) {
                    t.pane === s.name && u.push(t)
                }), n.each(i, function (n, i) {
                    var o = new r.factory.createSeriesFamily({
                        type: i,
                        pane: s.name,
                        rotated: e,
                        equalBarWidth: t.option("equalBarWidth")
                    });
                    o.add(u), o.adjustSeriesValues(), f.push(o)
                })
            }), t.seriesFamilies = f
        }, _createLegend: function () {
            var i = this.themeManager, t = n.extend(!0, {
                renderer: this.renderer,
                series: this.series,
                containerBackgroundColor: this.option("commonSeriesSettings").containerBackgroundColor
            }, this.option("legend"));
            this.legend = r.factory.createLegend(t)
        }, _createTranslator: function (n, i) {
            return new t.viz.core.LinearTranslator(n, i)
        }, _createPanesBorderOptions: function () {
            var t = this, r = t.option("commonPaneSettings").border, i = {};
            return n.each(t.panes, function (t, u) {
                var f = n.extend(!0, {}, r, u.border);
                i[u.name] = f
            }), i
        }, _render: function (t) {
            if (this._seriesInitializing !== !0) {
                var i = this, b = i.renderer, e = i.translators, h = i.option("rotated"), u, f = i.layoutManager,
                    p = i.option("title"), c = 0, l, w = new r.MultiAxesSynchronizer, s = i._createPanesBorderOptions(),
                    a = i.stripsGroup = i.stripsGroup || i.renderer.createGroup({"class": "axis-strips"}),
                    v = function (n, t) {
                        var r, f, i, e;
                        for (u = 0; u < t.length; u++) i = t[u], l = i.pane, e = i.name, r = n._getTranslator(l, e), f = n._getBusinessRange(l, e), r && f && (r.init(), i.setRange(f), i.setTranslator(r))
                    }, y = function () {
                        var r, e;
                        for (i.delayedRedraw = null, n.each(i.seriesFamilies || [], function (n, t) {
                            t.adjustSeriesDimensions(i._getTranslator(t.pane))
                        }), i.seriesGroup.append(), i.seriesLabelsGroup.append(), u = 0; u < i.series.length; u++) r = i.series[u], r.elementsClipRectID = i._getElementsClipRectID(i.series[u]), r.markersClipRectID = i._getMarkersClipRectID(i.series[u]), r.adjustSeriesLabels = t.adjustSeriesLabels, r.draw(i._getTranslator(r.pane, r.axis)), t.animate && r.getPoints().length <= t.animationPointsLimit && r.animate();
                        t.drawLegend && i.legend && i.legend.options.position === "inside" ? (i.legend.clipRectID = i._getCanvasClipRectID(), i.legend.canvas = i.canvas, i.legend.draw(), f.applyLegendLayout()) : i.legend.options.position == "inside" && i.legend.toForeground(), i.option("drawn")(), e = function () {
                            for (i.delayedRedraw = null, u = 0; u < i.series.length; u++) i.series[u].drawTrackers();
                            i.tracker._prepare(), i._createTooltip(), i.seriesTrackerGroup.append(i.trackerGroup), i.markerTrackerGroup.append(i.trackerGroup), i.trackerGroup.append(), i._handleRenderComplete()
                        }, t.asyncTrackersRendering ? i.delayedRedraw = setTimeout(e, t.trackerRenderingDelay) : e()
                    };
                if (t = i._prepareDrawOptions(t), i.callBase(t), i.stopRedraw) {
                    i.stopRedraw = !1;
                    return
                }
                if (i._createPanesBackground(), p.text && t.drawTitle && (i._drawTitle(), f.applyTitleLayout()), t.drawLegend && i.legend && i.legend.options.position === "outside" && (i.legend.canvas = i.canvas, i.legend.clipRectID = i._getCanvasClipRectID(), i.legend.draw(), f.applyLegendLayout(), f.isCanvasExceeded(!1))) {
                    i.option("incidentOccured")("Container is too small to draw chart with current settings"), i._clean();
                    return
                }
                i._setPanesClipRectPadding(s, h), t.recreateCanvas ? (f.createPanesCanvases(), n.each(i.paneAxis, function (t, r) {
                    n.each(r, function (n) {
                        var u = i._createTranslator(i._getBusinessRange(t, n), i._getCanvasForPane(t));
                        u.pane = t, u.axis = n, e.push(u)
                    })
                })) : n.each(e, function (n, t) {
                    t.updateBusinessRange(i._getBusinessRange(t.pane, t.axis)), t.init()
                }), v(i, i.horizontalAxes), v(i, i.verticalAxes), a.append();
                do {
                    for (u = 0; u < i.horizontalAxes.length; u++) i.horizontalAxes[u].resetTicks();
                    for (u = 0; u < i.verticalAxes.length; u++) i.verticalAxes[u].resetTicks();
                    for (i.option("synchronizeMultiAxes") && w.synchronize(h ? i.horizontalAxes : i.verticalAxes, h), u = 0; u < i.horizontalAxes.length; u++) i.horizontalAxes[u].clipRectID = i._getCanvasClipRectID(), i.horizontalAxes[u].stripsGroup = a, i.horizontalAxes[u].draw({borderOptions: s[i.horizontalAxes[u].pane]});
                    for (f.requireAxesRedraw = !1, t.adjustAxes && (f.applyHorizontalAxesLayout(), n.each(e, function (n, t) {
                        t.init()
                    })), u = 0; u < i.verticalAxes.length; u++) i.verticalAxes[u].clipRectID = i._getCanvasClipRectID(), i.verticalAxes[u].stripsGroup = a, i.verticalAxes[u].draw({borderOptions: s[i.verticalAxes[u].pane]});
                    if (t.adjustAxes && (f.applyVerticalAxesLayout(), n.each(e, function (n, t) {
                            t.init()
                        })), c = c + 1, f.isCanvasExceeded(!0)) {
                        i.option("incidentOccured")("Container is too small to draw chart with current settings"), i._clean();
                        return
                    }
                } while (f.requireAxesRedraw && c < o);
                i.chartTitle && i.chartTitle.setClipRectSettings(), i._drawPanesBorders(s), i._createClipRectsForPanes(), i._fillPanesBackground(), t.asyncSeriesRendering ? i.delayedRedraw = setTimeout(y, 25) : y()
            }
        }, _isInBarTypes: function (n) {
            return n.slice(-3) === "bar" ? !0 : !1
        }, _findPanesClipRectPadding: function () {
            var i = this, t = 0;
            return n.each(this.series, function (n, r) {
                var u = r.userOptions, f;
                i._isInBarTypes(u.type) || (f = u.point.size || 0, t = Math.max(f, t))
            }), t
        }, _setPanesClipRectPadding: function (t, i) {
            var r = this, u = !0, o = t[r.panes[0].name].visible, s = t[r.panes[r.panes.length - 1].name].visible,
                f = "", e;
            r.paneClipRectPadding = r._findPanesClipRectPadding(), n.each(r.panes, function (n, i) {
                u = u && !!t[i.name].visible
            }), n.each(r.horizontalAxes, function (n, t) {
                f += t.options.position
            }), n.each(r.verticalAxes, function (n, t) {
                f += t.options.position
            }), e = function (n, t, i) {
                var f = "original" + t, u;
                (t = t.toLowerCase(), i) || n.indexOf(t) === -1 && (u = r.paneClipRectPadding - r.canvas[t], u > 0 && (r.canvas[f] += u, r.canvas[t] += u))
            }, e(f, "Bottom", i ? u : s), e(f, "Top", i ? u : o), e(f, "Left", i ? o : u), e(f, "Right", i ? s : u)
        }, _createPanesBackground: function () {
            for (var n = this, e = n.option("commonPaneSettings").backgroundColor, t, u, o = n.renderer, f, r = [], i = 0; i < n.panes.length; i++) {
                if (t = n.panes[i].backgroundColor || e, !t || t === "none") {
                    r.push(null);
                    continue
                }
                u = {fill: t, strokeWidth: 0}, f = o.createRect(0, 0, 0, 0, 0, u).append(), r.push(f)
            }
            n.panesBackground = r
        }, _fillPanesBackground: function () {
            var i = this, t;
            n.each(i.panes, function (n, r) {
                t = r.borderCoords, i.panesBackground[n] != null && i.panesBackground[n].applySettings({
                    x: t.left,
                    y: t.top,
                    width: t.width,
                    height: t.height
                })
            })
        }, _calcPaneBorderCoords: function (n) {
            var r = n.canvas, i = n.borderCoords = n.borderCoords || {};
            i.left = r.left, i.top = r.top, i.right = r.width - r.right, i.bottom = r.height - r.bottom, i.width = i.right - i.left, i.height = i.bottom - i.top
        }, _drawPanesBorders: function (t) {
            var i = this, f = i.option("rotated"), u = i.renderer,
                r = i.borderGroup = i.borderGroup || u.createGroup({"class": "dxBorder"});
            r.clear(), n.each(i.panes, function (n, e) {
                var s, o = t[e.name], h = {
                    fill: "none",
                    stroke: o.color,
                    strokeOpacity: o.opacity,
                    strokeWidth: o.width,
                    dashStyle: o.dashStyle
                };
                (i._calcPaneBorderCoords(e, f), o.visible) && (s = e.borderCoords, u.createSegmentRect(s.left, s.top, s.width, s.height, 0, o, h).append(r))
            }), r.append()
        }, _createClipRectsForPanes: function () {
            var t = this, i = t.renderer, r = t.option("commonPaneSettings").border;
            t.minClipRectID = [], t.maxClipRectID = [], n.each(t.panes, function (u, f) {
                var c = n.extend({}, r, f.border), e = f.borderCoords, s, h,
                    o = !c.visible && t.paneClipRectPadding || 0;
                s = i.createClipRect(e.left, e.top, e.width, e.height), h = i.createClipRect(e.left - o, e.top - o, e.width + 2 * o, e.height + 2 * o), t.minClipRectID.push(s.id), t.maxClipRectID.push(h.id)
            })
        }, _getElementsClipRectID: function (n) {
            for (var i = this, f = n.pane, u = n.type, r = i.panes, e = r.length, t = 0; t < e; t++) if (r[t].name === f) return i._isInBarTypes(u) || u.slice(-4) === "area" ? i.minClipRectID[t] : i.maxClipRectID[t]
        }, _getMarkersClipRectID: function (n) {
            for (var i = this, u = n.pane, e = n.type, r = i.panes, f = r.length, t = 0; t < f; t++) if (r[t].name === u) return i._isInBarTypes(e) ? i.minClipRectID[t] : i.maxClipRectID[t]
        }, _getTranslator: function (n, t) {
            for (var e = this, r = e.translators, f = r.length, u = null, i = 0; i < f; i++) if (r[i].pane === n && r[i].axis === t) {
                u = r[i];
                break
            }
            if (!u) for (i = 0; i < f; i++) if (r[i].pane === n) {
                u = r[i];
                break
            }
            return u
        }, _getCanvasForPane: function (n) {
            for (var i = this.panes, r = i.length, t = 0; t < r; t++) if (i[t].name === n) return i[t].canvas
        }, _getBusinessRange: function (n, t) {
            for (var r = this.businessRanges || [], f = r.length, u, i = 0; i < f; i++) if (r[i].pane === n && r[i].axis === t) {
                u = r[i];
                break
            }
            if (!u) for (i = 0; i < f; i++) if (r[i].pane === n) {
                u = r[i];
                break
            }
            return u
        }, _handleSeriesPopulated: function (n) {
            this._processSeriesFamilies(), this._createLegend(), this._populateBusinessRange(), this._processValueAxisFormat(), this._processTracker(), delete this._seriesInitializing, n && this._render({force: !0})
        }, _processValueAxisFormat: function () {
            var t = this, r = t.option("rotated"), u = t.series, f = r ? t.horizontalAxes : t.verticalAxes, i = [];
            n.each(u, function () {
                this.isFullStackedSeries() && n.inArray(this.axis, i) === -1 && i.push(this.axis)
            }), n.each(f, function () {
                var t = this.name;
                n.inArray(t, i) !== -1 && this.setPercentLabelFormat()
            })
        }, _repopulateSeries: function (t) {
            var i = this._dataSource && this._dataSource.items(), r = this.option("seriesTemplate");
            if (this._dataSource && r) {
                this._processSeriesTemplate(t);
                return
            }
            i && n.each(this.series, function (n, t) {
                t.reinitData(i)
            }), this._handleSeriesPopulated(t)
        }, zoomArgument: function (t, i) {
            var r = this;
            r.option("adjustOnZoom") && r._populateBusinessRange({
                minArg: t,
                maxArg: i
            }), n.each(r.paneAxis, function (u, f) {
                n.each(f, function (n) {
                    var e = r._getTranslator(u, n), o = r._getBusinessRange(u, n);
                    e.updateBusinessRange(o), (t || i) && (r._options.rotated ? e.zoomY(t, i) : e.zoomX(t, i), e.init())
                })
            }), this._render({
                force: !0,
                drawTitle: !1,
                drawLegend: !1,
                adjustAxes: !1,
                animate: !1,
                adjustSeriesLabels: !1,
                asyncSeriesRendering: !1
            })
        }
    })
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.viz.charts, e = t.Class, u = t.utils, f = 12;
    r.PieChart = r.BaseChart.inherit({
        _defaultOptions: function () {
            return n.extend(!0, this.callBase(), {
                commonSeriesSettings: {type: "pie", pie: {label: {percentPrecision: 0}}},
                legend: {hoverMode: "markPoint"}
            })
        }, _reinit: function () {
            this.callBase(), delete this._seriesInitializing, this.series || this._dataSpecificInit()
        }, _populateBusinessRange: function () {
            var i = this, u = [], e = i.series, t = e[0], n, f;
            t && (n = new r.Range({series: t}), f = t.getRangeData(), n = n.getBoundRange(f), n.isDefined() || n.setStubData(), u.push(n)), i.businessRanges = u
        }, _createTranslator: function (n) {
            return new DevExpress.viz.core.Translator1D(n.minY, n.maxY, 360 - .0001, 0)
        }, _populateSeries: function () {
            var t = this, d = !!t.option("seriesTemplate"), o = d ? t._templatedSeries : t.option("series"),
                l = n.isArray(o) ? o : o ? [o] : [], a = t.themeManager, h, f, e, s, c,
                g = t.option("commonSeriesSettings"), nt = t.option("userCommonSeriesSettings"),
                v = t.renderer.createGroup({"class": "series"}),
                y = t.renderer.createGroup({"class": "tracker", opacity: .0001}),
                p = t.renderer.createGroup({"class": "seriesTracker"}),
                w = t.renderer.createGroup({"class": "markerTracker", stroke: "none", fill: "grey"}),
                b = t.renderer.createGroup({"class": "labels"}), k = t.option("incidentOccured");
            return t.series = [], a.resetPalette(), l.length && (f = l[0], f.type && !u.isString(f.type) && (f.type = ""), h = f.data, f.data = null, f.incidentOccured = k, f.seriesGroup = v, f.trackerGroup = y, f.seriesTrackerGroup = p, f.markerTrackerGroup = w, f.seriesLabelsGroup = b, s = a.applyPieSeriesTheme(f, g, nt), c = s.type !== i ? s.type : t.option("commonSeriesSettings").type, e = r.factory.createSeries(c, t.renderer, h, s), e ? (t._processSingleSeries(e, e.userOptions), t.series.push(e)) : k.call(null, "Unknown series type requested: " + c), f.data = h), t.seriesGroup = v, t.trackerGroup = y, t.seriesTrackerGroup = p, t.markerTrackerGroup = w, t.seriesLabelsGroup = b, t.series
        }, _processSingleSeries: function (n, t) {
            var u = this, o = u.option("commonSeriesSettings"), r, i, f, e;
            for (n.arrangePoints(), r = n && n.getPoints() || [], i = 0; i < r.length; i++) f = u.themeManager.applyNextPieSegmentTheme(t, o), e = n.parseStyleOptions(f), r[i].setOptions(e.point), r[i].index = i
        }, _handleSeriesPopulated: function (n) {
            this._populateBusinessRange(), this._createLegend(), this._processTracker(), delete this._seriesInitializing, n && this._render({
                force: !0,
                recreateCanvas: !0
            })
        }, _repopulateSeries: function (t) {
            var i = this, r = i._dataSource && i._dataSource.items(), u = this.option("seriesTemplate");
            if (i.themeManager.resetPalette(), this._dataSource && u) {
                this._processSeriesTemplate(t);
                return
            }
            r && n.each(i.series, function (n, t) {
                t.reinitData(r), i._processSingleSeries(t, t.userOptions)
            }), this._handleSeriesPopulated(t)
        }, _createLegend: function () {
            var t = this, i = n.extend(!0, {
                renderer: t.renderer,
                series: n.map(t.series[0] ? t.series[0].getPoints() : [], function (n) {
                    return n.name = n.argument, n.options.showInLegend = !0, n.styles = {themeColor: n.options.attributes.fill}, n
                })
            }, t.option("legend"));
            i.position !== "outside" && (i.position = "outside"), this.legend = r.factory.createLegend(i)
        }, _setPaddings: function (n) {
            var t = this, u = "original" + n, r = n.toLowerCase(), i = f - t.canvas[r];
            i > 0 && (t.canvas[u] += i, t.canvas[r] += i)
        }, _render: function (n) {
            if (this._seriesInitializing !== !0) {
                var t = this, r = t.option("title"), i = t.layoutManager;
                if (n = t._prepareDrawOptions(n), this.callBase(n), t.stopRedraw) {
                    t.stopRedraw = !1;
                    return
                }
                if (r.text && n.drawTitle && (t._drawTitle(), i.applyTitleLayout()), n.drawLegend && t.legend && (t.legend.clipRectID = t._getCanvasClipRectID(), t.legend.canvas = t.canvas, t.legend.draw(), i.applyLegendLayout()), i.isCanvasExceeded(!1)) {
                    t.option("incidentOccured")("Container is too small to draw chart with current settings"), t._clean();
                    return
                }
                if (t.chartTitle && t.chartTitle.setClipRectSettings(), t._setPaddings("Bottom"), t._setPaddings("Top"), t._setPaddings("Left"), t._setPaddings("Right"), t.series && t.series[0]) {
                    if (!i.applyPieChartSeriesLayout()) {
                        t.option("incidentOccured")("Container is too small to draw chart with current settings"), t._clean();
                        return
                    }
                    t.seriesGroup.append(), t.seriesLabelsGroup.append(), t.series[0].canvas = t.canvas, t.series[0].draw(t._createTranslator(t.businessRanges[0], t.canvas)), t.series[0].redraw && (t.seriesGroup.clear(), t.seriesTrackerGroup.clear(), t.markerTrackerGroup.clear(), t.trackerGroup.clear(), t.seriesLabelsGroup.clear(), i.applyPieChartSeriesLayout(), t.series[0].draw(t._createTranslator(t.businessRanges[0], t.canvas))), t.series[0].animate(), t.series[0].drawTrackers(), t.tracker._prepare(), t._createTooltip(), t.trackerGroup.append(), t.seriesTrackerGroup.append(t.trackerGroup), t.markerTrackerGroup.append(t.trackerGroup)
                }
                t._handleRenderComplete()
            }
        }, getSeries: function () {
            return this.series && this.series[0]
        }
    })
}(jQuery, DevExpress), function (n, t) {
    var o = t.viz, u = o.core, r = t.viz.charts, s = t.Class, f = t.utils, h = 120, e = 20, c = 20, l = 20, a = 30,
        v = 20;
    r.ThemeManager = u.BaseThemeManager.inherit(function () {
        var t = function (n, t) {
            n = n || {}, this.callBase(n.theme, t || "chart"), this.palette = new u.Palette(n.palette || this.theme.defaultPalette, 50), this.init()
        }, i = function () {
            var n = this;
            n.theme.legend = n.theme.legend || {}, n.theme.legend.font = n.theme.legend.font || {}, n.initializeFont(n.theme.legend.font), o(n), s(n), n.theme.title = n.theme.title || {}, n.theme.title.font = n.theme.title.font || {}, n.initializeFont(n.theme.title.font), n.theme.tooltip = n.theme.tooltip || {}, n.theme.tooltip.font = n.theme.tooltip.font || {}, n.initializeFont(n.theme.tooltip.font)
        }, o = function (n) {
            var i = n.theme, t = i.commonSeriesSettings, r = i.font, u;
            t.point = t.point || {}, t.containerBackgroundColor = t.containerBackgroundColor || i.containerBackgroundColor, t.label = t.label || {}, n.initializeFont(t.label.font)
        }, s = function (n) {
            var i = n.theme, t = i.commonAxisSettings, r = i.font, u, f;
            t && (t.label = t.label || {}, t.grid = t.grid || {}, t.ticks = t.ticks || {}, t.line = t.line || {}, t.title = t.title || {}, t.label.font = t.label.font || {}, n.initializeFont(t.label.font), t.title.font = t.title.font || {}, n.initializeFont(t.title.font))
        }, h = function (t) {
            var u = this, r = {dataSource: t.dataSource, series: t.series}, i;
            return delete t.dataSource, delete t.series, (t.valueAxis && f.isArray(t.valueAxis) && !t.valueAxis.length || n.isEmptyObject(t.valueAxis)) && delete t.valueAxis, (t.panes && f.isArray(t.panes) && !t.panes.length || n.isEmptyObject(t.panes)) && delete t.panes, i = u.applyTheme(u.theme, t), i.dataSource = r.dataSource, i.series = r.series, t.series = r.series, i
        }, c = function (t, i, u) {
            var c = this, f = n.extend(!0, {}, i || c.theme.commonSeriesSettings), s = n.extend(!0, {}, u || {}),
                h = (t.type || f.type || "").toLowerCase(), l = ~h.indexOf("area") || ~h.indexOf("bar"), o;
            return s = n.extend(!0, s, s[h]), f = n.extend(!0, f, f[h], s), t = t || {}, o = new r.Color(t.color || s.color || c.palette.getNextColor()), f.color = o.toHex(), f.border.color = f.border.color || o.toHex(), f.hoverStyle.color = f.hoverStyle.color || l && o.highlight(e) || o.toHex(), f.hoverStyle.border.color = f.hoverStyle.border.color || o.toHex(), f.selectionStyle.color = f.selectionStyle.color || l && o.highlight(e) || o.toHex(), f.selectionStyle.border.color = f.selectionStyle.border.color || o.toHex(), f.point.color = f.point.color || o.toHex(), f.point.border.color = f.point.border.color || o.toHex(), f.point.hoverStyle.color = f.point.hoverStyle.color || f.containerBackgroundColor, f.point.hoverStyle.border.color = f.point.hoverStyle.border.color || o.toHex(), f.point.selectionStyle.color = f.point.selectionStyle.color || f.containerBackgroundColor, f.point.selectionStyle.border.color = f.point.selectionStyle.border.color || o.toHex(), c.applyTheme(f, t)
        }, l = function (t, i, r) {
            var e = this, u = i || e.theme.commonSeriesSettings || {}, f = (t.type || u.type || "").toLowerCase();
            return f && f !== "pie" && (u[f] = n.extend(!0, {}, u[f], u.pie)), t = t || {}, t = n.extend(!0, {}, u, u[f], r, t)
        }, a = function (t, i) {
            var e = this, o = i || e.theme.commonSeriesSettings || {}, u = n.extend(!0, {}, o.pie),
                s = t.type || u.type || "", f;
            return t = t || {}, f = new r.Color(t.color || e.palette.getNextColor()), u.color = f.toHex(), u.border.color = u.border.color || f.toHex(), u.hoverStyle.color = u.hoverStyle.color || f.highlight(20), u.hoverStyle.border.color = u.hoverStyle.border.color || f.toHex(), u.selectionStyle.color = u.selectionStyle.color || f.highlight(20), u.selectionStyle.border.color = u.selectionStyle.border.color || f.toHex(), e.applyTheme(u, t)
        }, v = function () {
            this.palette.reset()
        };
        return {
            ctor: t,
            init: i,
            applyChartTheme: h,
            applyNextSeriesTheme: c,
            applyPieSeriesTheme: l,
            applyNextPieSegmentTheme: a,
            resetPalette: v
        }
    }())
}(jQuery, DevExpress), function (n, t) {
    var e = t.viz.charts, o = t.Class, u = t.utils, f = Math, r = f.round;
    e.LayoutManager = o.inherit(function () {
        var v = function (n) {
            var t = this, i = n.canvas;
            t.chart = n, t.init()
        }, t = function (n) {
            var t = n.canvas;
            t && (t.originalTop = t.top, t.originalBottom = t.bottom, t.originalLeft = t.left, t.originalRight = t.right)
        }, y = function () {
            var n = this, i = n.chart;
            n.legend = i.legend, n.canvas = i.canvas, t(n)
        }, p = function () {
            for (var l = this, i = l.canvas, f = l.chart.panes, w = l.chart.option("rotated"), t, e = f.length, a = i.height - i.top - i.bottom, v = i.width - i.left - i.right, o = 0, y, p, s = f.padding || 10, h = 0, c = 0, u = 0; u < e; u++) t = f[u], t.weight = t.weight || 1, o = o + t.weight;
            if (y = (a - s * (e - 1)) / o, p = (v - s * (e - 1)) / o, w) for (u = 0; u < e; u++) t = f[u], t.calcWidth = r(t.weight * p), t.canvas = n.extend({}, i), t.canvas.left = t.canvas.originalLeft = i.left + c, t.canvas.right = t.canvas.originalRight = i.right + (v - t.calcWidth - c), c = c + t.calcWidth + s; else for (u = 0; u < e; u++) t = f[u], t.calcHeight = r(t.weight * y), t.canvas = n.extend({}, i), t.canvas.top = t.canvas.originalTop = i.top + h, t.canvas.bottom = t.canvas.originalBottom = i.bottom + (a - t.calcHeight - h), h = h + t.calcHeight + s
        }, w = function () {
            var e = this, n = e.canvas, u = e.chart.chartTitle, i, s = 15, h = 10, f, o;
            if (u) {
                i = u.getBoundingRect();
                switch (u.horizontalAlignment) {
                    case"left":
                        f = r(s + n.left);
                        break;
                    case"center":
                        f = r((n.width - n.left - n.right - i.width) / 2 + n.left) - i.x;
                        break;
                    case"right":
                        f = r(n.width - n.right - i.x - i.width - s)
                }
                u.verticalAlignment === "top" ? (o = r(n.top - i.y), n.top = n.top + i.height + h) : (o = r(n.height - n.bottom - i.height - i.y), n.bottom = n.bottom + i.height + h), u.shift(f, o), t(e)
            }
        }, b = function () {
            var f = this, n = f.canvas, e = 15, t = f.chart.chartTitle, i, u,
                o = t.innerTitleGroup.settings.translateY || 0;
            t.canvas = n, t.correctTitleLength(), i = t.getBoundingRect();
            switch (t.horizontalAlignment) {
                case"left":
                    u = r(e + n.left);
                    break;
                case"center":
                    u = r((n.width - n.right - n.left - i.width) / 2 + n.left - i.x);
                    break;
                case"right":
                    u = r(n.width - n.right - i.x - i.width - e)
            }
            t.shift(u, o)
        }, k = function () {
            var o = this, i = o.canvas, a = o.legend, e = o.legend.options, f = a.getBoundingRect(), c = 10, l = 10, s,
                h, v = o.chart.chartTitle;
            if (e.visible && u.isNumber(f.width) && u.isNumber(f.height)) if (e.position === "outside") {
                switch (e.horizontalAlignment) {
                    case"left":
                        s = r(i.left - f.x + l), i.left = i.left + f.width + e.margin + l, v && o.adjustTitleLayout();
                        break;
                    case"center":
                        s = r((i.width - i.left - i.right - f.width) / 2 + i.left - f.x);
                        break;
                    case"right":
                        s = r(i.width - i.right - f.width - f.x - l), i.right = i.right + f.width + e.margin + l, v && o.adjustTitleLayout()
                }
                switch (e.verticalAlignment) {
                    case"top":
                        h = r(c + i.top - f.y), e.horizontalAlignment === "center" && (i.top = i.top + f.height + e.margin + c);
                        break;
                    case"bottom":
                        h = r(i.height - f.height - i.bottom - c - f.y), e.horizontalAlignment === "center" && (i.bottom = i.bottom + f.height + e.margin + c)
                }
                a.shift(s, h), t(o)
            } else {
                i = n.extend(!0, {}, o.chart.panes[0].canvas), i.bottom = o.chart.panes[o.chart.panes.length - 1].canvas.bottom, i.right = o.chart.panes[o.chart.panes.length - 1].canvas.right;
                switch (e.horizontalAlignment) {
                    case"left":
                        s = r(i.left - f.x + e.margin);
                        break;
                    case"center":
                        s = r((i.width - i.left - i.right - f.width) / 2 + i.left - f.x);
                        break;
                    case"right":
                        s = r(i.width - i.right - f.width - f.x - e.margin)
                }
                switch (e.verticalAlignment) {
                    case"top":
                        h = r(i.top - f.y + e.margin);
                        break;
                    case"bottom":
                        h = r(i.height - f.height - i.bottom - e.margin - f.y)
                }
                a.shift(s, h)
            }
        }, d = function () {
            var s = this, i = s.canvas, c = s.chart.series, n = c[0] || {}, f = i.height - i.top - i.bottom,
                e = i.width - i.left - i.right, h = e < f ? e : f, o, l = n.outerRadius,
                t = n.type === "pie" ? 0 : n.innerRadius || 0;
            if (n && n.correctPosition) return (n.type !== "pie" && (u.isNumber(t) ? (t = Number(t), t < .2 && (t = .2), t > .8 && (t = .8)) : t = .5), h < n.labelSpace) ? !1 : (o = l || (h - n.labelSpace - n.hoverSpace) / 2, n.correctPosition({
                centerX: r(e / 2 + i.left),
                centerY: r(f / 2 + i.top),
                radiusInner: r(o * t),
                radiusOuter: r(o)
            }), !0)
        }, e = function (n) {
            return !!(n.x || n.y || n.width || n.height)
        }, o = function (t, r, u) {
            var s, e, h, o, c;
            return n.each(t, function (t, l) {
                s = i(r, l.name), e = r[s.row][s.col], h = e.canvas, n.each(u, function (n, t) {
                    o = "delta" + t, e[o] = f.max(e[o] - (h[t.toLowerCase()] - h["original" + t]), 0), e[o] > 0 && (c = !0)
                })
            }), c
        }, g = function () {
            for (var t = this, u = t.chart.verticalAxes, p, w, f, r, h, c, v, k, d = 0, a, b, y = s(t, t.chart.panes), n = 0; n < u.length; n++) (v = u[n], f = v.options.position || "left", v.delta = {}, h = v.getBoundingRect(), e(h)) && (w = i(y, u[n].pane), r = y[w.row][w.col], p = r.canvas, f == "right" ? (a = "deltaRight", b = 1) : (a = "deltaLeft", b = -1), k = h.width, !v.delta[f] && r[a] > 0 && (r[a] += u[n].getMultipleAxesSpacing()), u[n].delta[f] = u[n].delta[f] || 0, u[n].delta[f] += r[a] * b, r[a] += k, c = h.y + h.height - (p.height - p.originalBottom), c > 0 && (t.requireAxesRedraw = !0, r.deltaBottom += c), c = p.originalTop - h.y, c > 0 && (t.requireAxesRedraw = !0, r.deltaTop += c));
            t.requireAxesRedraw = o(t.chart.panes, y, ["Left", "Right"]) || t.requireAxesRedraw, l(y)
        }, nt = function () {
            for (var r = this, t = r.chart.horizontalAxes, y, p, u, f, h, w, k, c, b, a, v = s(r, r.chart.panes), n = t.length - 1; n >= 0; n--) (w = t[n], a = w.options.position || "bottom", t[n].delta = {}, f = t[n].getBoundingRect(), e(f)) && (p = i(v, t[n].pane), u = v[p.row][p.col], y = u.canvas, a == "top" ? (c = "deltaTop", b = -1) : (c = "deltaBottom", b = 1), k = f.height, !w.delta[a] && u[c] > 0 && (u[c] += t[n].getMultipleAxesSpacing()), t[n].delta[a] = t[n].delta[a] || 0, t[n].delta[a] += u[c] * b, u[c] += k, h = y.originalLeft - f.x, h > 0 && (r.requireAxesRedraw = !0, u.deltaLeft += h), h = f.x + f.width - (y.width - y.originalRight), h > 0 && (r.requireAxesRedraw = !0, u.deltaRight = h));
            r.requireAxesRedraw = o(r.chart.panes, v, ["Bottom", "Top"]) || r.requireAxesRedraw, l(v)
        }, s = function (n, t) {
            for (var e = t.length, o, u = [], r = [], f = n.chart.option("rotated"), i = 0; i < e; i++) f || (r = []), r.push({
                canvas: t[i].canvas,
                pane: t[i].name,
                deltaLeft: 0,
                deltaRight: 0,
                deltaTop: 0,
                deltaBottom: 0
            }), f || u.push(r);
            return f && u.push(r), u
        }, i = function (n, t) {
            for (var u, r = 0; r < n.length; r++) for (u = 0; u < n[r].length; u++) if (n[r][u].pane === t) return {
                row: r,
                col: u
            }
        }, h = function (n, t, i) {
            for (var r = 0; r < n[t].length; r++) i(n[t][r].canvas)
        }, c = function h(n, t, i) {
            for (var r = 0; r < n.length; r++) i(n[r][t].canvas)
        }, l = function (n) {
            for (var t, i, u = 0, f = 0, e = 0, o = 0, s = 0, r = 0; r < n.length; r++) {
                for (e = 0, o = 0, i = n[r], i.length > s && (s = i.length), t = 0; t < i.length; t++) i[t] && i[t].deltaTop > e && (e = i[t].deltaTop), i[t] && i[t].deltaBottom > o && (o = i[t].deltaBottom);
                e && h(n, r, function (n) {
                    n.top += e
                }), o && h(n, r, function (n) {
                    n.bottom += o
                })
            }
            for (t = 0; t < s; t++) {
                for (u = 0, f = 0, r = 0; r < n.length; r++) i = n[r], i[t] && i[t].deltaLeft > u && (u = i[t].deltaLeft), i[t] && i[t].deltaRight > f && (f = i[t].deltaRight);
                u && c(n, t, function (n) {
                    n.left += u
                }), f && c(n, t, function (n) {
                    n.right += f
                })
            }
        }, a = function (n) {
            if (n.left > n.width - n.right || n.right > n.width - n.left || n.top > n.height - n.bottom || n.bottom > n.height - n.top) return !0
        }, tt = function (t) {
            var i = this, u = i.canvas, f = i.chart && i.chart.panes, r = !1;
            return a(u) ? !0 : (t && n.each(f || {}, function (n, t) {
                if (t.canvas && a(t.canvas)) return r = !0, !1
            }), r)
        };
        return {
            ctor: v,
            createPanesCanvases: p,
            applyLegendLayout: k,
            applyTitleLayout: w,
            adjustTitleLayout: b,
            applyVerticalAxesLayout: g,
            applyHorizontalAxesLayout: nt,
            applyPieChartSeriesLayout: d,
            init: y,
            isCanvasExceeded: tt
        }
    }())
}(jQuery, DevExpress), function (n, t) {
    var u = t.viz.charts, r = t.utils;
    u.MultiAxesSynchronizer = t.Class.inherit(function () {
        var f = function (t) {
            var i = {};
            return n.each(t, function () {
                i[this.pane] || (i[this.pane] = []), i[this.pane].push(this)
            }), i
        }, e = function (n, t) {
            var i, r = "minVisible" + t, f = "maxVisible" + t, e, o;
            n.translator._originalBusinessRange ? (e = n.translator.businessRange[r], o = n.translator.businessRange[f], i = new u.Range(n.translator._originalBusinessRange), i[r] = e, i[f] = o, n.translator.updateBusinessRange(i), n.setRange(i)) : n.translator._originalBusinessRange = new u.Range(n.translator.getBusinessRange())
        }, o = function (t, i) {
            var u = [];
            return n.each(t, function () {
                var n, o, s, h, f, t, c = i && "stubDataX" || "stubDataY";
                e(this, i ? "Y" : "X"), n = this.getTickValues(), n && n.length > 0 && r.isNumber(n[0]) && (t = this.translator.getBusinessRange(), o = i ? t.minVisibleX : t.minVisibleY, s = i ? t.maxVisibleX : t.maxVisibleY, h = i ? t.invertX : t.invertY, f = {
                    axis: this,
                    tickValues: n,
                    minValue: o,
                    oldMinValue: o,
                    maxValue: s,
                    oldMaxValue: s,
                    inverted: h,
                    synchronizedValue: this.options.synchronizedValue
                }, t[c] && (f.stubData = !0, f.tickInterval = f.axis.options.tickInterval), !f.tickInterval && n.length > 1 && (f.tickInterval = n[1] - n[0]), u.push(f))
            }), u
        }, s = function (t) {
            var i = 0, u, f, e = 0;
            n.each(t, function () {
                i = Math.max(i, this.tickValues.length)
            }), n.each(t, function () {
                if (r.isDefined(this.synchronizedValue)) this.baseTickValue = this.synchronizedValue, this.invertedBaseTickValue = this.synchronizedValue, this.tickValues = [this.baseTickValue]; else {
                    if (this.tickValues.length > 1 && this.tickInterval) {
                        for (u = Math.floor((i + 1) / this.tickValues.length), f = u > 1 ? Math.floor((i + 1) / u) : i, e = Math.floor((f - this.tickValues.length) / 2); e > 0 && this.tickValues[0] !== 0;) this.tickValues.unshift(r.adjustValue(this.tickValues[0] - this.tickInterval)), e--;
                        while (this.tickValues.length < f) this.tickValues.push(r.adjustValue(this.tickValues[this.tickValues.length - 1] + this.tickInterval));
                        this.tickInterval = this.tickInterval / u
                    }
                    this.baseTickValue = this.tickValues[0], this.invertedBaseTickValue = this.tickValues[this.tickValues.length - 1]
                }
            })
        }, t = function (n) {
            return n.maxValue - n.minValue
        }, i = function (n) {
            for (var t = 0; t < n.length; t++) if (!n[t].stubData) return n[t];
            return null
        }, h = function (u) {
            var f = i(u);
            n.each(u, function () {
                var u, n, i;
                this !== f && (f.tickInterval && this.tickInterval && (this.stubData && r.isDefined(this.synchronizedValue) && (this.oldMinValue = this.minValue = this.baseTickValue - (f.baseTickValue - f.minValue) / f.tickInterval * this.tickInterval, this.oldMaxValue = this.maxValue = this.baseTickValue - (f.baseTickValue - f.maxValue) / f.tickInterval * this.tickInterval, this.stubData = !1), u = f.tickInterval / t(f) / this.tickInterval * t(this), this.maxValue = this.minValue + t(this) / u), i = f.inverted && !this.inverted || !f.inverted && this.inverted ? f.maxValue - f.invertedBaseTickValue : f.baseTickValue - f.minValue, n = (i / t(f) - (this.baseTickValue - this.minValue) / t(this)) * t(this), this.minValue -= n, this.maxValue -= n)
            })
        }, c = function (i) {
            var f, e, r = 0, u = 0;
            return n.each(i, function () {
                f = this.minValue > this.oldMinValue ? (this.minValue - this.oldMinValue) / t(this) : 0, e = this.maxValue < this.oldMaxValue ? (this.oldMaxValue - this.maxValue) / t(this) : 0, this.inverted ? (r = Math.max(r, e), u = Math.max(u, f)) : (r = Math.max(r, f), u = Math.max(u, e))
            }), {start: r, end: u}
        }, l = function (i, u) {
            var f;
            n.each(i, function () {
                f = t(this), this.inverted ? (this.minValue -= u.end * f, this.maxValue += u.start * f) : (this.minValue -= u.start * f, this.maxValue += u.end * f), this.minValue = Math.min(this.minValue, r.adjustValue(this.minValue)), this.maxValue = Math.max(this.maxValue, r.adjustValue(this.maxValue))
            })
        }, a = function (t) {
            var i = !1;
            n.each(t, function () {
                i = i || r.isDefined(this.synchronizedValue)
            }), n.each(t, function () {
                var n;
                if (i && this.tickInterval) {
                    while (this.tickValues[0] - this.tickInterval >= this.minValue) this.tickValues.unshift(r.adjustValue(this.tickValues[0] - this.tickInterval));
                    for (n = this.tickValues[this.tickValues.length - 1]; (n = n + this.tickInterval) <= this.maxValue;) this.tickValues.push(r.adjustValue(n))
                }
                while (this.tickValues[0] < this.minValue) this.tickValues.shift();
                while (this.tickValues[this.tickValues.length - 1] > this.maxValue) this.tickValues.pop()
            })
        }, v = function (t, i) {
            var f, u, e = i && "stubDataX" || "stubDataY";
            n.each(t, function () {
                f = this.axis, u = f.translator.getBusinessRange(), i ? (u.minX === u.minVisibleX && (u.minX = this.minValue), u.maxX === u.maxVisibleX && (u.maxX = this.maxValue), u.minVisibleX = this.minValue, u.maxVisibleX = this.maxValue) : (u.minY === u.minVisibleY && (u.minY = this.minValue), u.maxY === u.maxVisibleY && (u.maxY = this.maxValue), u.minVisibleY = this.minValue, u.maxVisibleY = this.maxValue), r.isDefined(this.stubData) && (u[e] = this.stubData), f.translator.updateBusinessRange(u), f.setRange(u), f.setTickValues(this.tickValues)
            })
        };
        return {
            synchronize: function (t, r) {
                var u;
                u = f(t), n.each(u, function (n, t) {
                    var u, f;
                    if (t.length > 1) {
                        if (u = o(t, r), u.length === 0 || !i(u)) return;
                        s(u), h(u), f = c(u), l(u, f), a(u), v(u, r)
                    }
                })
            }
        }
    }())
}(jQuery, DevExpress), function (n) {
    n.viz.charts.series.consts = {
        events: {
            mouseover: "mouseover",
            mouseout: "mouseout",
            mousemove: "mousemove",
            touchstart: "touchstart",
            touchmove: "touchmove",
            touchend: "touchend",
            MSPointerDown: "MSPointerDown",
            MSPointerMove: "MSPointerMove",
            MSPointerUp: "MSPointerUp",
            MSPointerOver: "MSPointerOver",
            MSPointerOut: "MSPointerOut",
            click: "click",
            selectSeries: "selectseries",
            deselectSeries: "deselectseries",
            selectPoint: "selectpoint",
            deselectPoint: "deselectpoint"
        },
        states: {hover: "hover", normal: "normal", selected: "selected", normalMark: 0, hoverMark: 1, selectedMark: 2}
    }
}(DevExpress), function (n, t) {
    var u = t.viz.charts.series, h = u.consts.events, i = u.consts.states, r = t.utils, o = t.Class, c = t.viz.core,
        f = t.formatHelper, e = "canvas_position_default", s = o.inherit({
            ctor: function (n) {
                this.LABEL_BACKGROUND_PADDING_X = 8, this.LABEL_BACKGROUND_PADDING_Y = 4, this.LABEL_OFFSET = 10, this.rotated = !!n.rotated, n.options.label && n.options.label.position && n.options.label.position !== "outside" && n.options.label.position !== "inside" && (n.options.label.position = "outside"), this.options = n.options, this.series = n.series, this.value = this.initialValue = n.value, this.argument = this.initialArgument = n.argument, this.originalValue = n.originalValue, this.originalArgument = n.originalArgument, this.minValue = this.series && this.series.options && this.series.options.valueAxisType !== "discrete" ? 0 : e, this.labelFormatObject = {
                    argument: this.initialArgument,
                    value: this.initialValue,
                    seriesName: this.options.seriesName,
                    originalValue: this.originalValue,
                    originalArgument: this.originalArgument
                }, this.tag = n.tag, this.pointClassName = n.pointClassName || ""
            }, formatLabel: function (n) {
                return this.valueText = f.format(this.value, n.format, n.precision), this.argumentText = f.format(this.argument, n.argumentFormat, n.argumentPrecision), this.percent !== undefined && (this.percentText = f.format(this.percent, "percent", n.percentPrecision)), n.customizeText ? n.customizeText.call(this, this) : this.valueText
            }, setOptions: function (n) {
                this.options = n
            }, translate: function (n) {
                (this.translator = n = n || this.translator, this.translator && this.hasValue()) && (this.rotated ? (this.y = n.translateY(this.argument), this.x = n.translateX(this.value), this.minX = n.translateX(this.minValue), this.defaultX = n.translateX(e)) : (this.y = n.translateY(this.value), this.minY = n.translateY(this.minValue), this.x = n.translateX(this.argument), this.defaultY = n.translateY(e)), this.prepareStatesOptions())
            }, correctValue: function (n) {
                this.value += n, r.isNumber(this.minValue) ? this.minValue += n : this.minValue = n, this.translate()
            }, normalizeValue: function (n) {
                this.value = this.value / n || 0, r.isNumber(this.minValue) ? (this.minValue = this.minValue / n || 0, this.labelFormatObject.percent = this.value - this.minValue) : this.labelFormatObject.percent = this.value, this.translate()
            }, getCoords: function (n) {
                return n ? this.rotated ? {x: this.minX, y: this.y} : {x: this.x, y: this.minY} : {x: this.x, y: this.y}
            }, getDefaultCoords: function () {
                return this.rotated ? {x: this.defaultX, y: this.y} : {x: this.x, y: this.defaultY}
            }, getTooltipCoords: function () {
                return this.graphic ? {x: this.x, y: this.y, offset: this.graphic.getBBox().height / 2} : {
                    x: this.x,
                    y: this.y,
                    offset: 0
                }
            }, isInVisibleArea: function (n, t, i, r) {
                if (this.translator && this.translator.getCanvasVisibleArea) {
                    var u = this.translator.getCanvasVisibleArea();
                    if (u.minX > n + i || u.maxX < n || u.minY > t + r || u.maxY < t) return !1
                }
                return !0
            }, drawMarker: function (n, t) {
                var h, c, r, u, f, e, o, s;
                if (this.hasValue()) {
                    h = this.options.attributes.r, c = this.options.states.normal, this.options.symbol === "circle" && (u = n.createCircle(this.x, this.y, h, this.options.attributes), u.append(t), this.graphic = u), this.options.symbol === "square" && (f = n.createArea(this.points, this.options.attributes), f.append(t), this.graphic = f), this.options.symbol === "polygon" && (e = n.createArea(this.points, this.options.attributes), e.append(t), this.graphic = e), this.options.symbol === "triangle" && (o = n.createArea(this.points, this.options.attributes), o.append(t), this.graphic = o), this.options.symbol === "cross" && (s = n.createArea(this.points, this.options.attributes), s.append(t), this.graphic = s, r = this.graphic.getBBox(), this.graphic.applySettings({
                        x: r.x + r.width / 2,
                        y: r.y + r.height / 2,
                        rotate: 45
                    }));
                    switch (this.state) {
                        case i.selected:
                            this.series.setPointSelectedState(this);
                            break;
                        case i.hover:
                            this.series.setPointHoverState(this);
                            break;
                        default:
                            this.state = i.normal, this.fullState = i.normalMark
                    }
                }
            }, _trackerAttrs: {stroke: "none", fill: "grey", opacity: .0001, inh: !0}, storeTrackerR: function () {
                var t = "ontouchstart" in window || window.navigator.msPointerEnabled, n = t ? 20 : 10;
                return this.options.trackerR = this.options.attributes.r < n ? n : this.options.attributes.r
            }, drawTrackerMarker: function (n, t) {
                if (this.hasValue()) {
                    var i = this, u = i.options,
                        r = n.createCircle(i.x, i.y, u.trackerR || i.storeTrackerR(), i._trackerAttrs);
                    r.append(t), r.data({point: i})
                }
            }, select: function () {
                this.series.selectPoint(this)
            }, clearSelection: function () {
                this.series.deselectPoint(this)
            }, _populatePointShape: function (n, t) {
                var i = this, r = Math.round(t / 2);
                i.options.symbol === "square" && (n.points = [{x: i.x - t, y: i.y - t}, {x: i.x + t, y: i.y - t}, {
                    x: i.x + t,
                    y: i.y + t
                }, {x: i.x - t, y: i.y + t}, {
                    x: i.x - t,
                    y: i.y - t
                }]), i.options.symbol === "polygon" && (n.points = [{x: i.x - t, y: i.y}, {x: i.x, y: i.y - t}, {
                    x: i.x + t,
                    y: i.y
                }, {x: i.x, y: i.y + t}, {x: i.x - t, y: i.y}]), i.options.symbol === "triangle" && (n.points = [{
                    x: i.x - t,
                    y: i.y - t
                }, {x: i.x + t, y: i.y - t}, {x: i.x, y: i.y + t}, {
                    x: i.x - t,
                    y: i.y - t
                }]), i.options.symbol === "cross" && (n.points = [{x: i.x - t, y: i.y - r}, {
                    x: i.x - r,
                    y: i.y - r
                }, {x: i.x - r, y: i.y - t}, {x: i.x + r, y: i.y - t}, {x: i.x + r, y: i.y - r}, {
                    x: i.x + t,
                    y: i.y - r
                }, {x: i.x + t, y: i.y + r}, {x: i.x + r, y: i.y + r}, {x: i.x + r, y: i.y + t}, {
                    x: i.x - r,
                    y: i.y + t
                }, {x: i.x - r, y: i.y + r}, {x: i.x - t, y: i.y + r}, {x: i.x - t, y: i.y - r}])
            }, prepareStatesOptions: function () {
                var n = this;
                n.options.states && n.options.states.normal && n._populatePointShape(n, n.options.states.normal.r)
            }, applyNormalStyle: function () {
                return this.graphic && (this._populatePointShape(this.options.states.normal, this.options.states.normal.r), this.graphic.applySettings(this.options.states.normal)), this
            }, applyHoverStyle: function () {
                return this.graphic && (this._populatePointShape(this.options.states.hover, this.options.states.hover.r), this.graphic.applySettings(this.options.states.hover), this.graphic.toForeground(), this.graphic.addClass("dx-chart-hovered-point")), this
            }, applySelectionStyle: function () {
                return this.graphic && (this._populatePointShape(this.options.states.selected, this.options.states.selected.r), this.graphic.applySettings(this.options.states.selected), this.graphic.addClass("dx-chart-selected-point")), this
            }, setHoverState: function () {
                this.series.setPointHoverState(this)
            }, releaseHoverState: function () {
                this.series.releasePointHoverState(this), this.graphic && (this.graphic.removeClass("dx-chart-hovered-point"), this.state !== "selected" && this.graphic.toBackground())
            }, setSelectedState: function () {
                this.series.setPointSelectedState(this)
            }, releaseSelectedState: function () {
                this.series.releasePointSelectedState(this), this.graphic && this.graphic.removeClass("dx-chart-selected-point")
            }, on: function (t, i, r) {
                n(this).on(t, i, r);
                return this
            }, off: function (t) {
                return n(this).off(t), this
            }, correctLabel: function () {
                this.correctBackgroundPosition(), this.rotateLabel(), this.correctLabelPosition()
            }, drawLabel: function (n, t) {
                if (this.hasValue() && r.isDefined(this.labelFormatObject.value)) {
                    var i = this.options.label, u = this.formatLabel.call(this.labelFormatObject, i);
                    r.isDefined(u) && (this.labelGroup = n.createGroup().append(t), this.options.label.connector && this.options.label.connector.strokeWidth && (this.connector = n.createPath([], i.connector).append(this.labelGroup)), this.insideLabelGroup = n.createGroup().append(this.labelGroup), i.background["class"] = this.pointClassName, (i.background.fill && i.background.fill !== "none" || i.background.strokeWidth && i.background.stroke && i.background.stroke !== "none") && (this.labelBackground = n.createRect(this.x, this.y, 0, 0, 0, i.background).append(this.insideLabelGroup)), this.label = n.createText(u, this.x, this.y, i.attributes).append(this.insideLabelGroup), this.correctLabel(), this.correctConnectorPosition())
                }
            }, rotateLabel: function () {
                var n = this.insideLabelGroup.getBBox(), t = this.options.label;
                this.insideLabelGroup.applySettings({x: n.x + n.width / 2, y: n.y + n.height / 2, rotate: t.rotationAngle})
            }, _hideLabel: function (n) {
                return
            }, _showLabel: function (n) {
                return
            }, getGraphicSettings: function () {
                return {
                    x: this.graphic.settings.x || 0,
                    y: this.graphic.settings.y || 0,
                    height: this.graphic.settings.height || 0,
                    width: this.graphic.settings.width || 0
                }
            }, correctLabelPosition: function () {
                var n = this.insideLabelGroup.getBBox(),
                    t = this.graphic ? this.graphic.getBBox() : {x: this.x, y: this.y, height: 0, width: 0}, r = 0, i = 0;
                t.isEmpty && (t = {
                    x: this.x,
                    y: this.y,
                    height: 0,
                    width: 0
                }), this.rotated ? (i += t.y - n.y - n.height / 2 + t.height / 2, r += this.initialValue > 0 || this.series.isFullStackedSeries() ? t.x + t.width - n.x + this.LABEL_OFFSET : t.x - n.x - n.width - this.LABEL_OFFSET) : i += this.initialValue > 0 || this.series.isFullStackedSeries() ? t.y - n.y - n.height - this.LABEL_OFFSET : t.y + t.height - n.y + this.LABEL_OFFSET, r += this.options.label.horizontalOffset, i += this.options.label.verticalOffset, this.checkLabelPosition({
                    x: n.x + r,
                    y: n.y + i,
                    height: n.height,
                    width: n.width
                }, r, i)
            }, checkLabelPosition: function (n, t, i) {
                var u = this.graphic ? this.graphic.getBBox() : {x: this.x, y: this.y, height: 0, width: 0},
                    r = this.translator.getCanvasVisibleArea();
                u.isEmpty && (u = {
                    x: this.x,
                    y: this.y,
                    height: 0,
                    width: 0
                }), this.rotated || r.minX < u.x + u.width && r.maxX > u.x && (r.minX > n.x && this.adjustSeriesLabels && (t += r.minX - n.x), r.maxX < n.x + n.width && this.adjustSeriesLabels && (t -= n.x + n.width - r.maxX), r.minY > n.y && (i += u.y + u.height - n.y + this.LABEL_OFFSET), r.maxY < n.y + n.height && (i -= n.y + n.height - u.y + this.LABEL_OFFSET)), this.rotated && r.minY < u.y + u.height && r.maxY > u.y && (r.minX > n.x && (t += u.x + u.width - n.x + this.LABEL_OFFSET), r.maxX < n.x + n.width && (t -= n.x + n.width - u.x + this.LABEL_OFFSET), r.minY > n.y && this.adjustSeriesLabels && (i += r.minY - n.y), r.maxY < n.y + n.height && this.adjustSeriesLabels && (i -= n.y + n.height - r.maxY)), this.insideLabelGroup.move(~~t, ~~i)
            }, correctBackgroundPosition: function () {
                if (this.labelBackground) {
                    var n = this.label.getBBox(), t = n.x - this.LABEL_BACKGROUND_PADDING_X,
                        i = n.y - this.LABEL_BACKGROUND_PADDING_Y, r = n.width + 2 * this.LABEL_BACKGROUND_PADDING_X,
                        u = n.height + 2 * this.LABEL_BACKGROUND_PADDING_Y;
                    this.labelBackground.applySettings({x: t, y: i, width: r, height: u})
                }
            }, correctConnectorPosition: function (n) {
                var t = this.insideLabelGroup.getBBox(),
                    n = n || (this.graphic ? this.graphic.getBBox() : {x: this.x, y: this.y, height: 0, width: 0}), i, u, r,
                    f, e, o;
                if (this.connector) {
                    if (n.isEmpty && (n = {
                            x: this.x,
                            y: this.y,
                            height: 0,
                            width: 0
                        }), t.x = t.x + (this.insideLabelGroup.settings.translateX || 0), t.y = t.y + (this.insideLabelGroup.settings.translateY || 0), e = this.labelBackground ? t.y + t.height / 2 : null, o = this.labelBackground ? t.x + t.width / 2 : null, this.rotated) {
                        if ((o || t.x) > n.x + n.width) i = o || t.x, u = n.x + n.width; else if ((o || t.x + t.width) < n.x) i = o || t.x + t.width, u = n.x; else return;
                        r = Math.round(t.y + t.height / 2), f = r > n.y + n.height ? n.y + n.height : r < n.y ? n.y : r
                    } else {
                        if ((e || t.y + t.height) < n.y) r = e || t.y + t.height, f = n.y; else if ((e || t.y) > n.y + n.height) r = e || t.y, f = n.y + n.height; else return;
                        i = Math.round(t.x + t.width / 2), u = i > n.x + n.width ? n.x + n.width : i < n.x ? n.x : i
                    }
                    this.connector.applySettings({points: [i, r, u, f]})
                }
            }, getColor: function () {
                return this.options.attributes.fill
            }, getTooltipFormatObject: function (t) {
                var i = t.formatValueTooltip.call({value: this.initialValue}, t.options);
                return n.extend({}, this.labelFormatObject, {point: this, valueText: i})
            }, animate: function () {
                var n = this, i = n.translator, t = n.graphic;
                t && i && (n._hideLabel(), n.rotated ? t.move(n.defaultX - n.x, 0) : t.move(0, n.defaultY - n.y), t.move(0, 0, !0, {
                    complete: function () {
                        n._showLabel(!0)
                    }
                }))
            }, hasValue: function () {
                return this.initialValue !== null
            }, getClassName: function () {
                return this.pointClassName
            }
        });
    u.BasePoint = s
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.charts.series, i = r.consts.states, f = r.BasePoint, u = "canvas_position_default", e = f.inherit({
        translate: function (n) {
            if (this.translator = n = n || this.translator, this.translator && this.hasValue()) if (this.rotated) {
                var i = n.translateX(this.minValue), r = n.translateY(this.argument), f = n.translateX(this.value);
                this.width = Math.abs(f - i), this.y = r + (this.yCorrection || 0), this.x = Math.min(i, f) + (this.xCorrection || 0), this.minX = i + (this.minXCorrection || 0), this.defaultX = n.translateX(u)
            } else {
                var t = n.translateY(this.minValue), r = n.translateY(this.value), f = n.translateX(this.argument);
                this.height = Math.abs(t - r), this.x = f + (this.xCorrection || 0), this.y = Math.min(r, t) + (this.yCorrection || 0), this.minY = t + (this.yCorrection || 0), this.defaultY = n.translateY(u)
            }
        }, getTooltipCoords: function () {
            var n = this.translator.getCanvasVisibleArea(), r, u, t, i;
            return this.rotated ? (t = n.minX > this.x ? n.minX : this.x, i = n.maxX < this.x + this.width ? n.maxX : this.x + this.width, u = this.y + this.height / 2, r = t + (i - t) / 2) : (t = n.minY > this.y ? n.minY : this.y, i = n.maxY < this.y + this.height ? n.maxY : this.y + this.height, r = this.x + this.width / 2, u = t + (i - t) / 2), {
                x: r,
                y: u,
                offset: 0
            }
        }, correctCoordinates: function (n) {
            var t = n.offset - Math.round(n.width / 2);
            this.rotated ? (this.height = n.width, this.yCorrection = t, this.minYCorrection = t) : (this.width = n.width, this.xCorrection = t, this.minXCorrection = t)
        }, drawMarker: function (n, t) {
            var r, u;
            if (this.hasValue()) {
                switch (this.state) {
                    case i.hover:
                        r = this.options.states.hover;
                        break;
                    case i.selected:
                        r = this.options.states.selected;
                        break;
                    default:
                        r = this.options.attributes, this.state = i.normal, this.fullState = i.normalMark
                }
                u = n.createRect(this.x, this.y, this.width, this.height, r.r, r), u.append(t), this.graphic = u
            }
        }, drawTrackerMarker: function (n, t) {
            var s, f;
            if (this.hasValue()) {
                var i = this, e = i.y, r = i.height, o = i.x, u = i.width;
                i.rotated ? u === 1 && (u = 9, o -= 4) : r === 1 && (r = 9, e -= 4), s = i.options, f = n.createRect(o, e, u, r, s.attributes.r, this._trackerAttrs), f.append(t), f.data({point: this})
            }
        }, correctConnectorPosition: function () {
            this.callBase(this.getBboxGraphic())
        }, drawLabel: function (n, t) {
            if (this.hasValue() && (this.options.label.showForZeroValues || this.labelFormatObject.value)) this.callBase(n, t); else return
        }, getBboxGraphic: function () {
            var n = this.graphic && this.graphic.getBBox(), t, i;
            return n.isEmpty && (n = this.getGraphicSettings()), t = n.x - this.x, i = n.y - this.y, n.x -= t, n.y -= i, n.width += 2 * t, n.height += 2 * i, n
        }, correctLabelPosition: function () {
            var n = this.insideLabelGroup.getBBox(), t = this.getBboxGraphic(), u = this.translator.getBusinessRange(),
                f = this.series.options.valueAxisType === "discrete",
                e = !f && (this.initialValue > 0 && !u.invertY || this.initialValue < 0 && u.invertY) || f && !u.invertY || this.series.isFullStackedSeries(),
                o = !f && (this.initialValue > 0 && !u.invertX || this.initialValue < 0 && u.invertX) || f && !u.invertX || this.series.isFullStackedSeries(),
                i = 0, r = 0;
            this.options.label.position === "outside" ? this.rotated ? (r += t.y - n.y - n.height / 2 + t.height / 2, i += o ? t.x + t.width - n.x + this.LABEL_OFFSET : t.x - n.x - n.width - this.LABEL_OFFSET) : (i += t.width / 2, r += e ? t.y - n.y - n.height - this.LABEL_OFFSET : t.y + t.height - n.y + this.LABEL_OFFSET) : this.options.label.position === "inside" && (this.rotated ? (r += t.y - n.y - n.height / 2 + t.height / 2, i += o ? t.x + t.width - n.x - n.width - this.LABEL_OFFSET : t.x - n.x + this.LABEL_OFFSET) : (i += t.width / 2, r += e ? t.y - n.y - n.height + this.LABEL_OFFSET + n.height : t.y + t.height - n.y - this.LABEL_OFFSET - n.height)), i += this.options.label.horizontalOffset, r += this.options.label.verticalOffset, this.checkLabelPosition({
                x: n.x + i,
                y: n.y + r,
                height: n.height,
                width: n.width
            }, i, r, t)
        }, checkLabelPosition: function (n, t, i, r) {
            var r = r || this.graphic.getBBox(), u = this.translator.getCanvasVisibleArea();
            r.isEmpty && (r = this.getGraphicSettings()), u.minX < r.x + r.width && u.maxX > r.x && u.minY < r.y + r.height && u.maxY > r.y && (this.rotated || (u.minX > n.x && this.adjustSeriesLabels && (t += u.minX - n.x), u.maxX < n.x + n.width && this.adjustSeriesLabels && (t -= n.x + n.width - u.maxX), u.minY > n.y && (i += u.minY - n.y), u.maxY < n.y + n.height && (i -= n.y + n.height - u.maxY)), this.rotated && (u.minX > n.x && (t += u.minX - n.x), u.maxX < n.x + n.width && (t -= n.x + n.width - u.maxX), u.minY > n.y && this.adjustSeriesLabels && (i += u.minY - n.y), u.maxY < n.y + n.height && this.adjustSeriesLabels && (i -= n.y + n.height - u.maxY))), this.insideLabelGroup.move(~~t, ~~i)
        }, animate: function () {
            var n = this, i = n.translator, t = n.graphic;
            if (t && i) if (n._hideLabel(), n.rotated) {
                var o = n.defaultX, s = 0, h = n.width, c = n.x;
                t.applySettings({width: s, x: o, sharpEdges: !1}), t.animate({width: h, x: c}, {
                    complete: function () {
                        n._showLabel(!0)
                    }
                })
            } else {
                var r = n.defaultY, u = 0, f = n.height, e = n.y;
                t.applySettings({height: u, y: r, sharpEdges: !1}), t.animate({
                    height: f,
                    y: e
                }, {
                    complete: function () {
                        n._showLabel(!0)
                    }
                })
            }
        }
    });
    r.BarPoint = e
}(jQuery, DevExpress), function (n, t) {
    var u = t.viz.charts.series, f = t.utils, s = t.viz.core, e = u.BasePoint, r = u.consts.states, i = t.formatHelper,
        o = e.inherit({
            ctor: function (n) {
                this.LABEL_BACKGROUND_PADDING_X = 8, this.LABEL_BACKGROUND_PADDING_Y = 4, this.LABEL_OFFSET = 10, this.argument = this.initialArgument = n.argument, this.openValue = n.openValue, this.highValue = n.highValue, this.lowValue = n.lowValue, this.closeValue = n.closeValue, this.initialValue = n.reductionValue, this.originalOpenValue = n.originalOpenValue, this.originalCloseValue = n.originalCloseValue, this.originalLowValue = n.originalLowValue, this.originalHighValue = n.originalHighValue, this.originalArgument = n.originalArgument, this.tag = n.tag, this.options = n.options, this.options.attributes && (this.options.attributes.inh = !1), this.series = n.series, this.rotated = !!(this.series && this.series.options && this.series.options.rotated || !1), this.labelFormatObject = {
                    openValue: this.openValue,
                    highValue: this.highValue,
                    lowValue: this.lowValue,
                    closeValue: this.closeValue,
                    reductionValue: this.initialValue,
                    argument: this.initialArgument,
                    value: this.initialValue,
                    seriesName: this.options.seriesName,
                    originalOpenValue: this.originalOpenValue,
                    originalCloseValue: this.originalCloseValue,
                    originalLowValue: this.originalLowValue,
                    originalHighValue: this.originalHighValue,
                    originalArgument: this.originalArgument
                }, this.pointClassName = n.pointClassName || ""
            }, formatLabel: function (n) {
                return this.openValueText = i.format(this.openValue, n.format, n.precision), this.highValueText = i.format(this.highValue, n.format, n.precision), this.lowValueText = i.format(this.lowValue, n.format, n.precision), this.closeValueText = i.format(this.closeValue, n.format, n.precision), this.reductionValueText = i.format(this.reductionValue, n.format, n.precision), this.valueText = i.format(this.value, n.format, n.precision), this.argumentText = i.format(this.argument, n.argumentFormat, n.argumentPrecision), n.customizeText ? n.customizeText.call(this, this) : this.valueText
            }, translate: function (n) {
                var i = this.rotated, r = i ? "translateY" : "translateX", t = i ? "translateX" : "translateY";
                if (this.translator = n = n || this.translator, this.translator && this.hasValue()) {
                    var u = n[t](this.openValue), f = n[t](this.highValue), e = n[t](this.lowValue),
                        o = n[t](this.closeValue), s = n[r](this.argument);
                    this.width = 10, this.x = s, this.openY = u, this.highY = f, this.lowY = e, this.closeY = o
                }
            }, isInVisibleArea: function () {
                var n = this, t = Math, i = t.abs(n.lowY - n.highY);
                return n.rotated ? this.callBase(t.min(n.lowY, n.highY), n.x - n.width / 2, i, n.width) : this.callBase(n.x - n.width / 2, t.min(n.lowY, n.highY), n.width, i)
            }, drawMarker: function (n, t) {
                if (this.hasValue()) {
                    var i = this, e, f, o = this.rotated, u = o ? function (n, t) {
                        return {x: t, y: n}
                    } : function (n, t) {
                        return {x: n, y: t}
                    };
                    switch (this.state) {
                        case r.selected:
                            f = this.options.states.selected;
                            break;
                        case r.hover:
                            f = this.options.states.hover;
                            break;
                        default:
                            f = this.options.attributes, this.state = r.normal, this.fullState = r.normalMark
                    }
                    i.openValue > i.closeValue ? e = n.createArea([u(i.x, i.highY), u(i.x, i.openY), u(i.x + i.width / 2, i.openY), u(i.x + i.width / 2, i.closeY), u(i.x, i.closeY), u(i.x, i.lowY), u(i.x, i.closeY), u(i.x - i.width / 2, i.closeY), u(i.x - i.width / 2, i.openY), u(i.x, i.openY)], f).append(t) : i.openValue < i.closeValue ? e = n.createArea([u(i.x, i.highY), u(i.x, i.closeY), u(i.x + i.width / 2, i.closeY), u(i.x + i.width / 2, i.openY), u(i.x, i.openY), u(i.x, i.lowY), u(i.x, i.openY), u(i.x - i.width / 2, i.openY), u(i.x - i.width / 2, i.closeY), u(i.x, i.closeY)], f).append(t) : i.openValue === i.closeValue && (e = n.createArea([u(i.x, i.highY), u(i.x, i.lowY), u(i.x, i.closeY), u(i.x - i.width / 2, i.closeY), u(i.x + i.width / 2, i.closeY), u(i.x, i.closeY)], f).append(t)), this.graphic = e
                }
            }, drawTrackerMarker: function (n, t) {
                if (this.hasValue()) {
                    var i = this, r = i.highY, u = i.lowY, e = this.rotated, o = Math, f, s;
                    r === u && (r = e ? r + 2 : r - 2, u = e ? u - 2 : u + 2), s = o.abs(u - r), f = e ? n.createRect(o.min(u, r), i.x - i.width / 2, s, i.width, 0, this._trackerAttrs) : n.createRect(i.x - i.width / 2, o.min(u, r), i.width, s, 0, this._trackerAttrs), f.append(t), f.data({point: this})
                }
            }, animate: function () {
            }, drawLabel: function (n, t) {
                if (this.hasValue() && f.isDefined(this.labelFormatObject.value)) {
                    var i = this.options.label, r = this.formatLabel.call(this.labelFormatObject, i), u = this.rotated;
                    f.isDefined(r) && (this.labelGroup = n.createGroup().append(t), this.insideLabelGroup = n.createGroup().append(this.labelGroup), i.background["class"] = this.pointClassName, (i.background.fill && i.background.fill !== "none" || i.background.strokeWidth && i.background.stroke && i.background.stroke !== "none") && (i.background.fill = this.options.attributes.stroke, this.labelBackground = u ? n.createRect(this.highY, this.x, 0, 0, 0, i.background).append(this.insideLabelGroup) : n.createRect(this.x, this.highY, 0, 0, 0, i.background).append(this.insideLabelGroup)), this.label = u ? n.createText(r, this.highY, this.x, i.attributes).append(this.insideLabelGroup) : n.createText(r, this.x, this.highY, i.attributes).append(this.insideLabelGroup), this.correctBackgroundPosition(), this.rotateLabel(), this.correctLabelPosition())
                }
            }, correctLabelPosition: function () {
                var n = this.insideLabelGroup.getBBox(), r = this.graphic.getBBox(), u = this.rotated, t = 0, i = 0;
                u ? t += r.x - n.x + r.width + this.LABEL_OFFSET : i += r.y - n.y - n.height - this.LABEL_OFFSET, t += this.options.label.horizontalOffset, i += this.options.label.verticalOffset, this.checkLabelPosition({
                    x: n.x + t,
                    y: n.y + i,
                    height: n.height,
                    width: n.width
                }, t, i)
            }, checkLabelPosition: function (n, t, i) {
                var r = this.translator.getCanvasVisibleArea(), u = this.graphic.getBBox();
                r.minX < u.x + u.width && r.maxX > u.x && (r.minX > n.x && this.adjustSeriesLabels && (t += r.minX - n.x), r.maxX < n.x + n.width && this.adjustSeriesLabels && (t -= n.x + n.width - r.maxX), r.minY > n.y && (i += r.minY - n.y), r.maxY < n.y + n.height && (i -= n.y + n.height - r.maxY)), this.insideLabelGroup.move(~~t, ~~i)
            }, getTooltipCoords: function () {
                var u, f, n, i, t = Math, e = t.min(this.lowY, this.highY), o = t.max(this.lowY, this.highY),
                    r = this.translator.getCanvasVisibleArea();
                if (this.graphic) return this.rotated ? (n = t.max(r.minX, e), i = t.min(r.maxX, o), f = this.x, u = n + (i - n) / 2) : (n = t.max(r.minY, e), i = t.min(r.maxY, o), u = this.x, f = n + (i - n) / 2), {
                    x: u,
                    y: f,
                    offset: 0
                }
            }, getTooltipFormatObject: function (t) {
                var i = t.formatValueTooltip.call({value: this.highValue}, t.options),
                    r = t.formatValueTooltip.call({value: this.openValue}, t.options),
                    u = t.formatValueTooltip.call({value: this.closeValue}, t.options),
                    f = t.formatValueTooltip.call({value: this.lowValue}, t.options);
                return n.extend({}, this.labelFormatObject, {
                    valueText: "h: " + i + " o: " + r + " c: " + u + " l: " + f,
                    highValueText: i,
                    openValueText: r,
                    closeValueText: u,
                    lowValueText: f,
                    point: this
                })
            }, getColor: function () {
                return this.options.attributes.stroke
            }, hasValue: function () {
                return this.openValue !== null && this.closeValue !== null && this.highValue !== null && this.lowValue !== null
            }
        });
    u.OhlcPoint = o
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.charts.series, i = r.consts.states, u = r.OhlcPoint, f = u.inherit({
        ctor: function (n) {
            this.callBase(n)
        }, drawMarker: function (n, t) {
            var r = this, e, f, o = this.rotated, u = o ? function (n, t) {
                return {x: t, y: n}
            } : function (n, t) {
                return {x: n, y: t}
            };
            if (r.hasValue()) {
                switch (this.state) {
                    case i.selected:
                        f = this.options.states.selected;
                        break;
                    case i.hover:
                        f = this.options.states.hover;
                        break;
                    default:
                        f = this.options.attributes, this.state = i.normal, this.fullState = i.normalMark
                }
                e = n.createPath([u(r.x, r.highY), u(r.x, r.openY), u(r.x - r.width / 2, r.openY), u(r.x, r.openY), u(r.x, r.closeY), u(r.x + r.width / 2, r.closeY), u(r.x, r.closeY), u(r.x, r.lowY)], f).append(t), this.graphic = e
            }
        }
    });
    r.StockPoint = f
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = t.utils, o = i.consts.events, u = i.consts.states, f = i.BasePoint, e = f.inherit({
        ctor: function (n) {
            this.callBase(n), this.minValue = this.initialMinValue = n.minValue !== undefined ? n.minValue : "default", this.originalMinValue = n.originalMinValue, this.minLabelFormatObject = {
                argument: this.initialArgument,
                value: this.initialMinValue,
                seriesName: this.options.seriesName,
                originalMinValue: this.originalMinValue,
                originalArgument: this.originalArgument
            }
        }, getTooltipCoords: function () {
            var u, f, i, r, n, t = this.translator.getCanvasVisibleArea();
            return this.rotated ? (n = Math.min(this.x, this.minX), f = this.y, i = t.minX > n ? t.minX : n, r = t.maxX < n + this.width ? t.maxX : n + this.width, u = i + (r - i) / 2) : (n = Math.min(this.y, this.minY), u = this.x, i = t.minY > n ? t.minY : n, r = t.maxY < n + this.height ? t.maxY : n + this.height, f = i + (r - i) / 2), {
                x: u,
                y: f,
                offset: 0
            }
        }, translate: function (n) {
            this.hasValue() && (this.callBase(n), this.rotated ? (this.width = Math.abs(this.x - this.minX), this.height = 0) : (this.height = Math.abs(this.minY - this.y), this.width = 0))
        }, drawMarker: function (n, t) {
            if (this.hasValue()) {
                var o = this.options.attributes.r, i, f, e, r;
                this.markerGroup = n.createGroup().append(t), this.options.symbol === "circle" && (this.rotated ? (f = Math.min(this.x, this.minX), e = this.y) : (f = this.x, e = Math.min(this.y, this.minY)), i = n.createCircle(f + this.width, e, o, this.options.attributes).append(this.markerGroup), r = n.createCircle(f, e + this.height, o, this.options.attributes).append(this.markerGroup)), this.options.symbol === "square" && (i = n.createArea(this.topPoints, this.options.attributes).append(this.markerGroup), r = n.createArea(this.bottomPoints, this.options.attributes).append(this.markerGroup)), this.options.symbol === "polygon" && (i = n.createArea(this.topPoints, this.options.attributes).append(this.markerGroup), r = n.createArea(this.bottomPoints, this.options.attributes).append(this.markerGroup)), this.options.symbol === "triangle" && (i = n.createArea(this.topPoints, this.options.attributes).append(this.markerGroup), r = n.createArea(this.bottomPoints, this.options.attributes).append(this.markerGroup)), this.options.symbol === "cross" && (i = n.createArea(this.topPoints, this.options.attributes).append(this.markerGroup), r = n.createArea(this.bottomPoints, this.options.attributes).append(this.markerGroup)), this.graphic = this.markerGroup, this.graphic.topMarker = i, this.graphic.bottomMarker = r;
                switch (this.state) {
                    case u.selected:
                        this.series.setPointSelectedState(this);
                        break;
                    case u.hover:
                        this.series.setPointHoverState(this);
                        break;
                    default:
                        this.state = u.normal, this.fullState = u.normalMark
                }
            }
        }, _populatePointShape: function (n, t) {
            var e = this, i, r, u, f;
            this.rotated ? (i = Math.max(e.x, e.minX), u = Math.min(e.x, e.minX), r = f = e.y) : (i = u = e.x, r = Math.min(e.y, e.minY), f = Math.max(e.y, e.minY)), e.options.symbol === "square" && (n.topPoints = [{
                x: i - t,
                y: r - t
            }, {x: i + t, y: r - t}, {x: i + t, y: r + t}, {x: i - t, y: r + t}, {
                x: i - t,
                y: r - t
            }], n.bottomPoints = [{x: u - t, y: f - t}, {x: u + t, y: f - t}, {x: u + t, y: f + t}, {
                x: u - t,
                y: f + t
            }, {x: u - t, y: f - t}]), e.options.symbol === "polygon" && (n.topPoints = [{x: i - t, y: r}, {
                x: i,
                y: r - t
            }, {x: i + t, y: r}, {x: i, y: r + t}, {x: i - t, y: r}], n.bottomPoints = [{x: u - t, y: f}, {
                x: u,
                y: f - t
            }, {x: u + t, y: f}, {x: u, y: f + t}, {
                x: u - t,
                y: f
            }]), e.options.symbol === "triangle" && (n.topPoints = [{x: i - t, y: r - t}, {x: i + t, y: r - t}, {
                x: i,
                y: r + t
            }, {x: i - t, y: r - t}], n.bottomPoints = [{x: u - t, y: f - t}, {x: u + t, y: f - t}, {
                x: u,
                y: f + t
            }, {x: u - t, y: f - t}]), e.options.symbol === "cross" && (n.topPoints = [{
                x: i - t,
                y: r - t / 2
            }, {x: i - t / 2, y: r - t}, {x: i, y: r - t / 2}, {x: i + t / 2, y: r - t}, {
                x: i + t,
                y: r - t / 2
            }, {x: i + t / 2, y: r}, {x: i + t, y: r + t / 2}, {x: i + t / 2, y: r + t}, {
                x: i,
                y: r + t / 2
            }, {x: i - t / 2, y: r + t}, {x: i - t, y: r + t / 2}, {x: i - t / 2, y: r}, {
                x: i - t,
                y: r - t / 2
            }], n.bottomPoints = [{x: u - t, y: f - t / 2}, {x: u - t / 2, y: f - t}, {
                x: u,
                y: f - t / 2
            }, {x: u + t / 2, y: f - t}, {x: u + t, y: f - t / 2}, {x: u + t / 2, y: f}, {
                x: u + t,
                y: f + t / 2
            }, {x: u + t / 2, y: f + t}, {x: u, y: f + t / 2}, {x: u - t / 2, y: f + t}, {
                x: u - t,
                y: f + t / 2
            }, {x: u - t / 2, y: f}, {x: u - t, y: f - t / 2}])
        }, drawTrackerMarker: function (n, t) {
            var e;
            if (this.hasValue()) {
                var r = this, o = r.options, i = o.trackerR || r.storeTrackerR(), u, f;
                this.rotated ? (u = Math.min(this.x, this.minX) - i, f = this.y - i) : (u = this.x - i, f = Math.min(this.y, this.minY) - i), e = n.createRect(u, f, r.width + 2 * i, r.height + 2 * i, 0, r._trackerAttrs), e.append(t), e.data({point: this})
            }
        }, applyNormalStyle: function () {
            var n = this.options.states.normal;
            return this.graphic && (this._populatePointShape(n, n.r), this.graphic.topMarker.applySettings(n.topPoints ? {
                points: n.topPoints,
                style: n
            } : n), this.graphic.bottomMarker.applySettings(n.bottomPoints ? {
                points: n.bottomPoints,
                style: n
            } : n)), this.callBase()
        }, applyHoverStyle: function () {
            var n = this.options.states.hover;
            return this.graphic && (this._populatePointShape(n, n.r), this.graphic.topMarker.applySettings(n.topPoints ? {
                points: n.topPoints,
                style: n
            } : n), this.graphic.bottomMarker.applySettings(n.bottomPoints ? {
                points: n.bottomPoints,
                style: n
            } : n)), this.callBase()
        }, applySelectionStyle: function () {
            var n = this.options.states.selected;
            return this.graphic && (this._populatePointShape(n, n.r), this.graphic.topMarker.applySettings(n.topPoints ? {
                points: n.topPoints,
                style: n
            } : n), this.graphic.bottomMarker.applySettings(n.bottomPoints ? {
                points: n.bottomPoints,
                style: n
            } : n)), this.callBase()
        }, drawLabel: function (n, t) {
            if (this.hasValue() && r.isDefined(this.labelFormatObject.value) && r.isDefined(this.minLabelFormatObject.value)) {
                var i = this.options.label, f = this.formatLabel.call(this.labelFormatObject, i),
                    e = this.formatLabel.call(this.minLabelFormatObject, i), u = this.translator.getBusinessRange(),
                    o = this.series.options.valueAxisType === "discrete",
                    s = o && (!u.invertY && !this.rotated || u.invertX && this.rotated) || !o && this.value > this.minValue && (!u.invertY && !this.rotated || !u.invertX && this.rotated);
                r.isDefined(f) && r.isDefined(e) && (this.labelGroup = n.createGroup().append(t), this.options.label.connector && this.options.label.connector.strokeWidth && (this.maxConnector = n.createLine(0, 0, 0, 0, this.options.label.connector).append(this.labelGroup), this.minConnector = n.createLine(0, 0, 0, 0, this.options.label.connector).append(this.labelGroup)), this.maxLabelGroup = n.createGroup().append(this.labelGroup), this.insideMaxLabelGroup = n.createGroup().append(this.maxLabelGroup), this.minLabelGroup = n.createGroup().append(this.labelGroup), this.insideMinLabelGroup = n.createGroup().append(this.minLabelGroup), (i.background.fill && i.background.fill !== "none" || i.background.strokeWidth && i.background.stroke && i.background.stroke !== "none") && (this.maxLabelBackground = n.createRect(this.x, this.y, 0, 0, 0, i.background).append(this.insideMaxLabelGroup), this.minLabelBackground = n.createRect(this.x, this.y, 0, 0, 0, i.background).append(this.insideMinLabelGroup)), this.maxLabel = n.createText(s ? f : e, this.x, this.y, i.attributes).append(this.insideMaxLabelGroup), this.minLabel = n.createText(s ? e : f, this.x, this.y, i.attributes).append(this.insideMinLabelGroup), this.correctLabel(), this.correctConnectorPosition(this.maxLabelGroup.getBBox(), this.maxConnector), this.correctConnectorPosition(this.minLabelGroup.getBBox(), this.minConnector))
            }
        }, rotateLabel: function () {
            var n = this.insideMaxLabelGroup.getBBox(), t = this.insideMinLabelGroup.getBBox(), i = this.options.label;
            this.insideMaxLabelGroup.applySettings({
                x: n.x + n.width / 2,
                y: n.y + n.height / 2,
                rotate: i.rotationAngle
            }), this.insideMinLabelGroup.applySettings({
                x: t.x + t.width / 2,
                y: t.y + t.height / 2,
                rotate: i.rotationAngle
            })
        }, correctLabelPosition: function () {
            var n = this.insideMaxLabelGroup.getBBox(), i = this.insideMinLabelGroup.getBBox(),
                t = this.graphic && this.graphic.topMarker ? this.graphic.topMarker.getBBox() : {
                    x: this.rotated ? Math.max(this.x, this.minX) : this.x,
                    y: this.rotated ? this.y : Math.min(this.y, this.minY),
                    height: 0,
                    width: 0
                }, r = this.graphic && this.graphic.bottomMarker ? this.graphic.bottomMarker.getBBox() : {
                    x: this.rotated ? Math.min(this.x, this.minX) : this.x,
                    y: this.rotated ? this.y : Math.max(this.y, this.minY),
                    height: 0,
                    width: 0
                }, e = 0, u = 0, o = 0, f = 0;
            this.options.label.position === "outside" ? this.rotated ? (u = f += t.y - n.y - n.height / 2 + t.height / 2, e += t.x + t.width - n.x + this.LABEL_OFFSET, o += r.x - i.x - i.width - this.LABEL_OFFSET) : (u += t.y - n.y - n.height - this.LABEL_OFFSET, f += r.y + r.height - i.y + this.LABEL_OFFSET) : this.options.label.position === "inside" && (this.rotated ? (u = f += t.y - n.y - n.height / 2 + t.height / 2, e += t.x - n.x - n.width - this.LABEL_OFFSET, o += r.x + r.width - i.x + this.LABEL_OFFSET) : (u += t.y + t.height - n.y + this.LABEL_OFFSET, f += r.y - i.y - i.height - this.LABEL_OFFSET)), e += this.options.label.horizontalOffset, u += this.options.label.verticalOffset, o += this.options.label.horizontalOffset, f += this.options.label.verticalOffset, this.checkLabelPosition(e, u, o, f)
        }, checkLabelPosition: function (n, t, i, r) {
            var f = this.insideMaxLabelGroup.getBBox(), e = this.insideMinLabelGroup.getBBox(), o = {}, s = {},
                v = this.graphic && this.graphic.topMarker ? this.graphic.topMarker.getBBox() : {
                    x: this.rotated ? Math.max(this.x, this.minX) : this.x,
                    y: this.rotated ? this.y : Math.min(this.y, this.minY),
                    height: 0,
                    width: 0
                }, y = this.graphic && this.graphic.bottomMarker ? this.graphic.bottomMarker.getBBox() : {
                    x: this.rotated ? Math.min(this.x, this.minX) : this.x,
                    y: this.rotated ? this.y : Math.max(this.y, this.minY),
                    height: 0,
                    width: 0
                }, h = f.x + n, c = f.y + t, l = e.x + i, a = e.y + r, u = this.translator.getCanvasVisibleArea();
            u.minX < v.x + v.width && u.maxX > v.x && u.minY < y.y + y.height && u.maxY > v.y && (this.rotated || (u.minX > h && this.adjustSeriesLabels && (n += u.minX - h), u.minX > l && this.adjustSeriesLabels && (i += u.minX - l), u.maxX < h + f.width && this.adjustSeriesLabels && (n -= h + f.width - u.maxX), u.maxX < l + e.width && this.adjustSeriesLabels && (i -= l + e.width - u.maxX), u.minY > c && (t += u.minY - c), u.maxY < a + e.height && (r -= a + e.height - u.maxY), o.y = f.y + t, s.y = e.y + r, o.y + f.height > s.y && (t -= (o.y + f.height - s.y) / 2, r += (o.y + f.height - s.y) / 2, o.y = f.y + t, s.y = e.y + r, u.minY > o.y ? (r += u.minY - o.y, t += u.minY - o.y) : u.maxY < s.y + e.height && (t -= s.y + e.height - u.maxY, r -= s.y + e.height - u.maxY))), this.rotated && (u.minX > l && (i += u.minX - l), u.maxX < h + f.width && (n -= h + f.width - u.maxX), u.minY > a && this.adjustSeriesLabels && (r += u.minY - a), u.minY > c && this.adjustSeriesLabels && (t += u.minY - c), u.maxY < a + e.height && this.adjustSeriesLabels && (r -= a + e.height - u.maxY), u.maxY < c + f.height && this.adjustSeriesLabels && (t -= c + f.height - u.maxY), o.x = f.x + n, s.x = e.x + i, o.x < s.x + e.width && (n += (s.x + e.width - o.x) / 2, i -= (s.x + e.width - o.x) / 2, o.x = f.x + n, s.x = e.x + i, u.minX > s.x ? (i += u.minX - s.x, n += u.minX - s.x) : u.maxX < o.x + f.width && (n -= o.x + f.width - u.maxX, i -= o.x + f.width - u.maxX)))), this.insideMaxLabelGroup.move(~~n, ~~t), this.insideMinLabelGroup.move(~~i, ~~r)
        }, correctBackgroundPosition: function () {
            if (this.maxLabelBackground && this.minLabelBackground) {
                var n = this.maxLabel.getBBox(), t = this.minLabel.getBBox(), i = n.x - this.LABEL_BACKGROUND_PADDING_X,
                    r = t.x - this.LABEL_BACKGROUND_PADDING_X, u = n.y - this.LABEL_BACKGROUND_PADDING_Y,
                    f = t.y - this.LABEL_BACKGROUND_PADDING_Y, e = n.width + 2 * this.LABEL_BACKGROUND_PADDING_X,
                    o = t.width + 2 * this.LABEL_BACKGROUND_PADDING_X,
                    s = n.height + 2 * this.LABEL_BACKGROUND_PADDING_Y,
                    h = t.height + 2 * this.LABEL_BACKGROUND_PADDING_Y;
                this.maxLabelBackground.applySettings({
                    x: i,
                    y: u,
                    width: e,
                    height: s
                }), this.minLabelBackground.applySettings({x: r, y: f, width: o, height: h})
            }
        }, correctConnectorPosition: function (n, t) {
            if (t) {
                var i = this.graphic ? this.graphic.getBBox() : {
                        x: this.rotated ? Math.min(this.x, this.minX) : this.x,
                        y: this.rotated ? this.y : Math.min(this.y, this.minY),
                        height: this.height,
                        width: this.width
                    }, o = this.maxLabelBackground || this.minLabelBackground ? n.y + n.height / 2 : null,
                    s = this.maxLabelBackground || this.minLabelBackground ? n.x + n.width / 2 : null, r, f, u, e;
                if (this.rotated) {
                    if ((s || n.x) > i.x + i.width) r = s || n.x, f = i.x + i.width; else if ((s || n.x + n.width) < i.x) r = s || n.x + n.width, f = i.x; else return !1;
                    u = Math.round(n.y + n.height / 2), e = u > i.y + i.height ? i.y + i.height : u < i.y ? i.y : u
                } else {
                    if ((o || n.y + n.height) < i.y) u = o || n.y + n.height, e = i.y; else if ((o || n.y) > i.y + i.height) u = o || n.y, e = i.y + i.height; else return !1;
                    r = Math.round(n.x + n.width / 2), f = r > i.x + i.width ? i.x + i.width : r < i.x ? i.x : r
                }
                t.applySettings({points: [r, u, f, e]})
            }
        }, getTooltipFormatObject: function (n) {
            var t = n.formatValueTooltip.call({value: this.initialMinValue}, n.options),
                i = n.formatValueTooltip.call({value: this.initialValue}, n.options);
            return {
                argument: this.initialArgument,
                valueText: t + " - " + i,
                rangeValue1Text: t,
                rangeValue2Text: i,
                rangeValue1: this.initialMinValue,
                rangeValue2: this.initialValue,
                seriesName: this.options.seriesName,
                point: this,
                originalMinValue: this.originalMinValue,
                originalValue: this.originalValue,
                originalArgument: this.originalArgument
            }
        }, animate: function () {
            var n = this, i = n.translator, t = n.graphic;
            t && i && (n._hideLabel(), n.rotated ? (t.topMarker.move(n.defaultX - Math.max(n.minX, n.x), 0), t.bottomMarker.move(n.defaultX - Math.min(n.minX, n.x), 0)) : (t.topMarker.move(0, n.defaultY - Math.min(n.minY, n.y)), t.bottomMarker.move(0, n.defaultY - Math.max(n.minY, n.y))), t.topMarker.move(0, 0, !0, {
                complete: function () {
                    n._showLabel(!0)
                }
            }), t.bottomMarker.move(0, 0, !0, {
                complete: function () {
                    n._showLabel(!0)
                }
            }))
        }, hasValue: function () {
            return this.initialValue !== null && this.initialMinValue !== null
        }
    });
    i.RangePoint = e
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.charts.series, u = r.BarPoint, i = t.utils, e = r.BasePoint, f = u.inherit({
        ctor: function (n) {
            this.callBase(n), this.minValue = this.initialMinValue = n.minValue !== undefined ? n.minValue : "default", this.originalMinValue = n.originalMinValue, this.minLabelFormatObject = {
                argument: this.initialArgument,
                value: this.initialMinValue,
                seriesName: this.options.seriesName,
                originalMinValue: this.originalMinValue,
                originalArgument: this.originalArgument
            }
        }, translate: function (n) {
            this.hasValue() && (this.callBase(n), this.rotated ? this.width = this.width || 1 : this.height = this.height || 1)
        }, drawLabel: function (n, t) {
            if (this.hasValue() || i.isDefined(this.labelFormatObject.value) && i.isDefined(this.minLabelFormatObject.value)) {
                var r = this.options.label, f = this.formatLabel.call(this.labelFormatObject, r),
                    e = this.formatLabel.call(this.minLabelFormatObject, r), u = this.translator.getBusinessRange(),
                    o = this.series.options.valueAxisType === "discrete",
                    s = o && (!u.invertY && !this.rotated || u.invertX && this.rotated) || !o && this.value > this.minValue && (!u.invertY && !this.rotated || !u.invertX && this.rotated);
                i.isDefined(f) && i.isDefined(e) && (this.labelGroup = n.createGroup().append(t), this.options.label.connector && this.options.label.connector.strokeWidth && (this.maxConnector = n.createLine(0, 0, 0, 0, this.options.label.connector).append(this.labelGroup), this.minConnector = n.createLine(0, 0, 0, 0, this.options.label.connector).append(this.labelGroup)), this.maxLabelGroup = n.createGroup().append(this.labelGroup), this.insideMaxLabelGroup = n.createGroup().append(this.maxLabelGroup), this.minLabelGroup = n.createGroup().append(this.labelGroup), this.insideMinLabelGroup = n.createGroup().append(this.minLabelGroup), (r.background.fill && r.background.fill !== "none" || r.background.strokeWidth && r.background.stroke && r.background.stroke !== "none") && (this.maxLabelBackground = n.createRect(this.x, this.y, 0, 0, 0, r.background).append(this.insideMaxLabelGroup), this.minLabelBackground = n.createRect(this.x, this.y, 0, 0, 0, r.background).append(this.insideMinLabelGroup)), this.maxLabel = n.createText(s ? f : e, this.x, this.y, r.attributes).append(this.insideMaxLabelGroup), this.minLabel = n.createText(s ? e : f, this.x, this.y, r.attributes).append(this.insideMinLabelGroup), this.correctLabel(), this.correctConnectorPosition(this.maxLabelGroup.getBBox(), this.maxConnector), this.correctConnectorPosition(this.minLabelGroup.getBBox(), this.minConnector))
            }
        }, rotateLabel: function () {
            var n = this.insideMaxLabelGroup.getBBox(), t = this.insideMinLabelGroup.getBBox(), i = this.options.label;
            this.insideMaxLabelGroup.applySettings({
                x: n.x + n.width / 2,
                y: n.y + n.height / 2,
                rotate: i.rotationAngle
            }), this.insideMinLabelGroup.applySettings({
                x: t.x + t.width / 2,
                y: t.y + t.height / 2,
                rotate: i.rotationAngle
            })
        }, _hideLabel: function (n) {
            return
        }, _showLabel: function (n) {
            return
        }, correctLabelPosition: function () {
            var t = this.insideMaxLabelGroup.getBBox(), i = this.insideMinLabelGroup.getBBox(),
                n = this.graphic.getBBox(), r = 0, u = 0, f = 0, e = 0;
            n.isEmpty && (n = this.getGraphicSettings()), this.options.label.position === "outside" ? this.rotated ? (u = e += n.y - t.y - t.height / 2 + n.height / 2, r += n.x + n.width - t.x + this.LABEL_OFFSET, f += n.x - i.x - i.width - this.LABEL_OFFSET) : (r = f += n.width / 2, u += n.y - t.y - t.height - this.LABEL_OFFSET, e += n.y + n.height - i.y + this.LABEL_OFFSET) : this.options.label.position === "inside" && (this.rotated ? (u = e += n.y - t.y - t.height / 2 + n.height / 2, r += n.x + n.width - t.x - t.width - this.LABEL_OFFSET, f += n.x - i.x + this.LABEL_OFFSET) : (r = f += n.width / 2, u += n.y - t.y + this.LABEL_OFFSET, e += n.y + n.height - i.y - i.height - this.LABEL_OFFSET)), r += this.options.label.horizontalOffset, u += this.options.label.verticalOffset, f += this.options.label.horizontalOffset, e += this.options.label.verticalOffset, this.checkLabelPosition(r, u, f, e)
        }, checkLabelPosition: function (n, t, i, r) {
            var f = this.insideMaxLabelGroup.getBBox(), e = this.insideMinLabelGroup.getBBox(), o = {}, s = {},
                h = this.graphic.getBBox(), c = f.x + n, l = f.y + t, a = e.x + i, v = e.y + r,
                u = this.translator.getCanvasVisibleArea();
            u.minX < h.x + h.width && u.maxX > h.x && u.minY < h.y + h.height && u.maxY > h.y && (this.rotated || (u.minX > c && this.adjustSeriesLabels && (n += u.minX - c), u.minX > a && this.adjustSeriesLabels && (i += u.minX - a), u.maxX < c + f.width && this.adjustSeriesLabels && (n -= c + f.width - u.maxX), u.maxX < a + e.width && this.adjustSeriesLabels && (i -= a + e.width - u.maxX), u.minY > l && (t += u.minY - l), u.maxY < v + e.height && (r -= v + e.height - u.maxY), o.y = f.y + t, s.y = e.y + r, o.y + f.height > s.y && (t -= (o.y + f.height - s.y) / 2, r += (o.y + f.height - s.y) / 2, o.y = f.y + t, s.y = e.y + r, u.minY > o.y ? (r += u.minY - o.y, t += u.minY - o.y) : u.maxY < s.y + e.height && (t -= s.y + e.height - u.maxY, r -= s.y + e.height - u.maxY))), this.rotated && (u.minX > a && (i += u.minX - a), u.maxX < c + f.width && (n -= c + f.width - u.maxX), u.minY > v && this.adjustSeriesLabels && (r += u.minY - v), u.minY > l && this.adjustSeriesLabels && (t += u.minY - l), u.maxY < v + e.height && this.adjustSeriesLabels && (r -= v + e.height - u.maxY), u.maxY < l + f.height && this.adjustSeriesLabels && (t -= l + f.height - u.maxY), o.x = f.x + n, s.x = e.x + i, o.x < s.x + e.width && (n += (s.x + e.width - o.x) / 2, i -= (s.x + e.width - o.x) / 2, o.x = f.x + n, s.x = e.x + i, u.minX > s.x ? (i += u.minX - s.x, n += u.minX - s.x) : u.maxX < o.x + f.width && (n -= o.x + f.width - u.maxX, i -= o.x + f.width - u.maxX)))), this.insideMaxLabelGroup.move(~~n, ~~t), this.insideMinLabelGroup.move(~~i, ~~r)
        }, correctBackgroundPosition: function () {
            if (this.maxLabelBackground && this.minLabelBackground) {
                var n = this.maxLabel.getBBox(), t = this.minLabel.getBBox(), i = n.x - this.LABEL_BACKGROUND_PADDING_X,
                    r = t.x - this.LABEL_BACKGROUND_PADDING_X, u = n.y - this.LABEL_BACKGROUND_PADDING_Y,
                    f = t.y - this.LABEL_BACKGROUND_PADDING_Y, e = n.width + 2 * this.LABEL_BACKGROUND_PADDING_X,
                    o = t.width + 2 * this.LABEL_BACKGROUND_PADDING_X,
                    s = n.height + 2 * this.LABEL_BACKGROUND_PADDING_Y,
                    h = t.height + 2 * this.LABEL_BACKGROUND_PADDING_Y;
                this.maxLabelBackground.applySettings({
                    x: i,
                    y: u,
                    width: e,
                    height: s
                }), this.minLabelBackground.applySettings({x: r, y: f, width: o, height: h})
            }
        }, correctConnectorPosition: function (n, t) {
            if (t) {
                var i = this.graphic.getBBox(), r, f, u, e,
                    o = this.maxLabelBackground || this.minLabelBackground ? n.y + n.height / 2 : null,
                    s = this.maxLabelBackground || this.minLabelBackground ? n.x + n.width / 2 : null;
                if (i.isEmpty && (i = this.getGraphicSettings()), this.rotated) {
                    if ((s || n.x) > i.x + i.width) r = s || n.x, f = i.x + i.width; else if ((s || n.x + n.width) < i.x) r = s || n.x + n.width, f = i.x; else return !1;
                    u = Math.round(n.y + n.height / 2), e = u > i.y + i.height ? i.y + i.height : u < i.y ? i.y : u
                } else {
                    if ((o || n.y + n.height) < i.y) u = o || n.y + n.height, e = i.y; else if ((o || n.y) > i.y + i.height) u = o || n.y, e = i.y + i.height; else return !1;
                    r = Math.round(n.x + n.width / 2), f = r > i.x + i.width ? i.x + i.width : r < i.x ? i.x : r
                }
                t.applySettings({points: [r, u, f, e]})
            }
        }, getTooltipFormatObject: function (n) {
            var t = n.formatValueTooltip.call({value: this.initialMinValue}, n.options),
                i = n.formatValueTooltip.call({value: this.initialValue}, n.options);
            return {
                argument: this.initialArgument,
                valueText: t + " - " + i,
                rangeValue1Text: t,
                rangeValue2Text: i,
                rangeValue1: this.initialMinValue,
                rangeValue2: this.initialValue,
                seriesName: this.options.seriesName,
                point: this,
                originalMinValue: this.originalMinValue,
                originalValue: this.originalValue,
                originalArgument: this.originalArgument
            }
        }, hasValue: function () {
            return this.initialValue !== null && this.initialMinValue !== null
        }
    });
    r.RangeBarPoint = f
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series;
    i.pointFactory = {
        createPoint: function (n, t) {
            n = (n || "").toLowerCase();
            switch (n) {
                case"line":
                    return new i.BasePoint(t);
                case"stackedline":
                    return new i.BasePoint(t);
                case"fullstackedline":
                    return new i.BasePoint(t);
                case"area":
                    return new i.BasePoint(t);
                case"stackedarea":
                    return new i.BasePoint(t);
                case"fullstackedarea":
                    return new i.BasePoint(t);
                case"bar":
                    return new i.BarPoint(t);
                case"stackedbar":
                    return new i.BarPoint(t);
                case"fullstackedbar":
                    return new i.BarPoint(t);
                case"spline":
                    return new i.BasePoint(t);
                case"splinearea":
                    return new i.BasePoint(t);
                case"scatter":
                    return new i.BasePoint(t);
                case"candlestick":
                    return new i.OhlcPoint(t);
                case"stock":
                    return new i.StockPoint(t);
                case"rangearea":
                    return new i.RangePoint(t);
                case"rangesplinearea":
                    return new i.RangePoint(t);
                case"rangebar":
                    return new i.RangeBarPoint(t);
                case"pie":
                    return new i.PiePoint(t);
                case"doughnut":
                    return new i.PiePoint(t);
                case"stepline":
                    return new i.BasePoint(t);
                case"steparea":
                    return new i.BasePoint(t);
                default:
                    return null
            }
        }
    }
}(jQuery, DevExpress), function (n, t) {
    var e = t.viz.charts.series, o = e.consts.events, i = e.consts.states, r = t.utils, v = t.Class,
        y = t.viz.core.ParseUtils, s = 20, h = 15, c = .3, f = "allseriespoints", u = "includepoints", l = 0, a = 1,
        p = 20, w = v.inherit({
            ctor: function (t, i, r, u) {
                this.type = r.specificType || "unknown", this.isRangeSeries = u, this.renderer = t, this._rawData = i || [], this._parseOptions(r), this._parsedUserOptions = n.extend(!0, {}, r), this._parseInputData(this._rawData), this.userOptions = r, this.tag = r.tag
            }, _checkValue: function (n) {
                if (!r.isDefined(n.value)) return this._validationResult.error = this._errorMessages.missingFieldMessage(n.field), this.options.incidentOccured.call(null, this._errorMessages.missingFieldMessage(n.field)), !1;
                if (r.isString(n.value)) n.axisType = "discrete", n.type = "string"; else if (r.isDate(n.value)) n.axisType = n.axisType || "continuous", n.type = "datetime"; else if (r.isNumber(n.value)) n.axisType = n.axisType || "continuous", n.type = "numeric"; else return this._validationResult.error = this._errorMessages.unsupportedFieldMessage(n.field), this.options.incidentOccured.call(null, this._errorMessages.unsupportedFieldMessage(n.field)), !1;
                return !0
            }, _correctAxisType: function (n, t) {
                return n && (n === "discrete" || n === "continuous") ? n : t && t.length ? "discrete" : ""
            }, reinitData: function (n) {
                this._parseInputData(n)
            }, _errorMessages: {
                missingFieldMessage: function (n) {
                    return "Data source does not contain the '" + n + "' field."
                }, unsupportedFieldMessage: function (n) {
                    return "The '" + n + "' field contains data of unsupported type."
                }, incorrectDataMessage: function () {
                    return "Data source contains unsupported data."
                }, incompatibleTypesDataMessage: function (n) {
                    return n === "argument" ? "The agrument type and argument axis type are incompatible." : "The value type and value axis type are incompatible."
                }, dataItemMissingMessage: function (n) {
                    return n === "argument" ? "An argument is missed in the specified data." : "A value is missed in the specified data."
                }, numericParsingMessage: function (n) {
                    return "A point's " + n + " cannot be parsed to a correct numeric value."
                }, dateParsingMessage: function (n) {
                    return "A point's " + n + " cannot be parsed to a correct date."
                }
            }, getRangeData: function (t) {
                function s(t) {
                    a ? n.inArray(t, i.visibleValCategories) === -1 && i.visibleValCategories.push(t) : ((t < i.minVisibleVal || !r.isDefined(i.minVisibleVal)) && (i.minVisibleVal = t), (t > i.maxVisibleVal || !r.isDefined(i.maxVisibleVal)) && (i.maxVisibleVal = t))
                }

                function y(t, i) {
                    var r = {};
                    return n.map(t, function (n) {
                        var t = n[i], u = r[t] ? null : t;
                        return r[t] = !0, u
                    })
                }

                var h, c;
                if (this._validationResult.error) return {};
                var f = this, e = f.options, p = e.argumentCategories, l = e.argumentAxisType === "discrete",
                    w = e.argumentType, b = e.valueCategories, a = e.valueAxisType === "discrete", k = e.valueType,
                    i = {visibleValCategories: [], categoriesVal: [], categoriesArg: []}, u = f.points, v = u && u.length,
                    o, d, g;
                return h = function (n, t) {
                    var u;
                    (n < i.minArg || !r.isDefined(i.minArg)) && (i.minArg = n), (n > i.maxArg || !r.isDefined(i.maxArg)) && (i.maxArg = n), r.isDefined(t) && (u = Math.abs(n - t)), r.isDefined(u) && (u < i.minIntervalArg || !r.isDefined(i.minIntervalArg)) && (i.minIntervalArg = u)
                }, c = function (n, t, u, e) {
                    var o;
                    (n < i.minVal || !r.isDefined(i.minVal)) && (i.minVal = n), (n > i.maxVal || !r.isDefined(i.maxVal)) && (i.maxVal = n), f.isRangeSeries && ((t < i.minVal || !r.isDefined(i.minVal)) && (i.minVal = t), (t > i.maxVal || !r.isDefined(i.maxVal)) && (i.maxVal = t)), r.isDefined(u) && (o = Math.abs(n - u)), f.isRangeSeries && r.isDefined(e) && (o = Math.min(o, Math.abs(t - e))), r.isDefined(o) && (o < i.minIntervalVal || !r.isDefined(i.minIntervalVal)) && (i.minIntervalVal = o)
                }, l && (i.categoriesArg = y(u, "argument"), h = n.noop), a && (i.categoriesVal = y(u, "value"), c = n.noop), v && (n.each(u, function (n, e) {
                    var a, w = e.value, b = e.minValue, v = e.argument, y, p, k;
                    (n !== 0 && (a = u[n - 1], y = a.value, p = a.minValue, k = a.argument), e.hasValue() && c(w, b, y, p), h(v, k), l || !t || v < t.minArg || v > t.maxArg) || (!r.isDefined(i.minVisibleVal) && n && a.hasValue() && (s(y), f.isRangeSeries && s(p)), e.hasValue() && (o = n, s(w), f.isRangeSeries && s(b)))
                }), r.isDefined(o) && o < v - 1 && u[o + 1].hasValue() && (s(u[o + 1].value), f.isRangeSeries && s(u[o + 1].minValue)), f.options.rotated ? (r.isDefined(i.minVal) && (i.minX = i.minVal, i.maxX = i.maxVal, i.intervalX = undefined), r.isDefined(i.minArg) && (i.minY = i.minArg, i.maxY = i.maxArg, i.intervalY = i.minIntervalArg), i.categoriesArg.length && (i.categoriesY = i.categoriesArg.slice(0)), i.categoriesVal.length && (i.categoriesX = i.categoriesVal.slice(0)), i.visibleValCategories.length && (i.visibleCategoriesX = i.visibleValCategories.slice(0)), i.minVisibleX = i.minVisibleVal, i.maxVisibleX = i.maxVisibleVal) : (r.isDefined(i.minVal) && (i.minY = i.minVal, i.maxY = i.maxVal, i.intervalY = undefined), r.isDefined(i.minArg) && (i.minX = i.minArg, i.maxX = i.maxArg, i.intervalX = i.minIntervalArg), i.categoriesArg.length && (i.categoriesX = i.categoriesArg.slice(0)), i.categoriesVal.length && (i.categoriesY = i.categoriesVal.slice(0)), i.visibleValCategories.length && (i.visibleCategoriesY = i.visibleValCategories.slice(0)), i.minVisibleY = i.minVisibleVal, i.maxVisibleY = i.maxVisibleVal)), delete i.minArg, delete i.maxArg, delete i.minVal, delete i.maxVal, delete i.minIntervalArg, delete i.minIntervalVal, delete i.minVisibleVal, delete i.maxVisibleVal, delete i.visibleValCategories, delete i.categoriesArg, delete i.categoriesVal, i = this.addLabelPaddingsToRange(i), i = this.processRangeForFullStackedSeries(i), this.rangeData = i, i = this.getRangeMinValue(i)
            }, getRangeMinValue: function (n) {
                if (this.type.slice(-3) === "bar" || this.type.slice(-4) === "area") {
                    if (!n || this.isRangeSeries) return n;
                    this.options.rotated ? n.keepValueMarginsY = !0 : n.keepValueMarginsX = !0, n.minY === undefined || this.options.rotated ? n.minX !== undefined && this.options.rotated && (n.minX = n.minX > 0 ? 0 : n.minX, this.setZeroPadding(n, n.minX, "minValueMarginX"), n.maxX = n.maxX < 0 ? 0 : n.maxX, (n.maxX === 0 || n.maxX > 0 && n.minX < 0) && (n.minValueMarginX = n.maxValueMarginX, n.minValueMarginXPriority = n.maxValueMarginXPriority), this.setZeroPadding(n, n.maxX, "maxValueMarginX")) : (n.minY = n.minY > 0 ? 0 : n.minY, this.setZeroPadding(n, n.minY, "minValueMarginY"), n.maxY = n.maxY < 0 ? 0 : n.maxY, (n.maxY === 0 || n.maxY > 0 && n.minY < 0) && (n.minValueMarginY = n.maxValueMarginY, n.minValueMarginYPriority = n.maxValueMarginYPriority), this.setZeroPadding(n, n.maxY, "maxValueMarginY"))
                }
                return n
            }, setZeroPadding: function (n, t, i) {
                t === 0 && this.setPadding(n, i, 0, p)
            }, setPadding: function (n, t, i, r) {
                n[t] = i, n[t + "Priority"] = r
            }, addLabelPaddingsToRange: function (n) {
                var t = this;
                return t.areLabelsVisible() && t.styles.point.label.position !== "inside" && (t.options.rotated ? (this.setPadding(n, "maxValueMarginX", c, s), t.isRangeSeries && this.setPadding(n, "minValueMarginX", c, s)) : (this.setPadding(n, "maxValueMarginY", c, s), t.isRangeSeries && this.setPadding(n, "minValueMarginY", c, s))), n
            }, isFullStackedSeries: function () {
                return this.type.indexOf("fullstacked") === 0
            }, isStackedSeries: function () {
                return this.type.indexOf("stacked") === 0
            }, processRangeForFullStackedSeries: function (t) {
                var i = this, u, r = n.isEmptyObject(t);
                return i.isFullStackedSeries() && (i.options.rotated ? (i.setPadding(t, "minValueMarginX", 0, h), i.setPadding(t, "maxValueMarginX", 0, h), r || (t.minX = 0)) : (i.setPadding(t, "minValueMarginY", 0, h), i.setPadding(t, "maxValueMarginY", 0, h), r || (t.minY = 0))), t
            }, draw: function (t) {
                var c = {"class": "series"}, u = {"class": "series-elements"},
                    f = n.extend({"class": "series-markers"}, this.styles.point.states.normal), e = {"class": "labels"}, r,
                    o, s, h;
                if (t) {
                    this.translator = t, this._translateCoors(), this.elementsClipRectID && this.markersClipRectID && (u.clipId = this.elementsClipRectID, f.clipId = this.markersClipRectID, e.clipId = this.elementsClipRectID), r = this.renderer.createGroup(c).append(this.options.seriesGroup), o = this.renderer.createGroup(u).append(r), s = this.renderer.createGroup(f).append(r), this.seriesGroup = r, h = this.renderer.createGroup(e).append(this.options.seriesLabelsGroup), this.hoverPatternColor || (this.hoverPatternColor = this.styles.states.hover.fill, this.selectedPatternColor = this.styles.states.selected.fill), this.hoverPatternId = this.createPattern(this.hoverPatternColor, this.styles.states.hover.hatching), this.selectedPatternId = this.createPattern(this.selectedPatternColor, this.styles.states.selected.hatching), this.drawSeriesData(o, s, h);
                    switch (this.state) {
                        case i.selected:
                            this.setSelectedState(this.lastSelectionMode);
                            break;
                        case i.hover:
                            this.setHoverState(this.lastHoverdMode);
                            break;
                        default:
                            this.state = i.normal, this.fullState = i.normalMark
                    }
                    return this
                }
            }, createPattern: function (n, t) {
                var i = this.renderer.createPattern(n, t);
                return i.id ? i.id : i
            }, drawSeriesData: function (n, t, i) {
                return this.hoverPatternId && (this.styles.states.hover.fill = this.hoverPatternId, this.styles.states.selected.fill = this.selectedPatternId), this.drawPoints(t, i), this
            }, drawPoints: function (t, i) {
                var r = this, u = r.styles.point.visible, f = r.areLabelsVisible();
                n.each(r.points, function (n, e) {
                    (e.adjustSeriesLabels = r.adjustSeriesLabels, e.isInVisibleArea(e.x, e.y, e.width || 0, e.height || 0)) && (u && e.drawMarker(r.renderer, t), f && e.drawLabel(r.renderer, i))
                })
            }, drawTrackers: function () {
                this.drawPointTrackers()
            }, drawPointTrackers: function () {
                var t = this, i = !t._suppressTrackers;
                n.each(t.points, function (n, r) {
                    r.isInVisibleArea(r.x, r.y, r.width || 0, r.height || 0) && i && r.drawTrackerMarker(t.renderer, t.options.markerTrackerGroup)
                })
            }, areLabelsVisible: function () {
                var n = this;
                return n.styles.point.label.visible && (!r.isDefined(n.styles.maxLabelCount) || n.points.length <= n.styles.maxLabelCount)
            }, getPoints: function () {
                return this.points
            }, select: function () {
                this.seriesGroup && this.seriesGroup.trigger(new n.Event(o.selectSeries, {target: this}), this.options.selectionMode), this.seriesGroup && this.seriesGroup.toForeground(), this.trackerElements && this.trackerElements.length && n.each(this.trackerElements, function (n, t) {
                    t.toBackground()
                })
            }, clearSelection: function () {
                this.seriesGroup && this.seriesGroup.trigger(new n.Event(o.deselectSeries, {target: this}), this.options.selectionMode)
            }, selectPoint: function (t) {
                this.seriesGroup && this.seriesGroup.trigger(new n.Event(o.selectPoint), t)
            }, deselectPoint: function (t) {
                this.seriesGroup && this.seriesGroup.trigger(new n.Event(o.deselectPoint), t)
            }, getAllPoints: function () {
                return this.points.slice()
            }, getPointByPos: function (n) {
                return this.points && this.points[n]
            }, getPointByArg: function (n) {
                return this.pointsByArgument[n.valueOf()] || null
            }, animate: function () {
                this.styles.point.visible && this.segments && n.each(this.segments, function (t, i) {
                    n.each(i, function (n, t) {
                        t.animate()
                    })
                })
            }, on: function (t, i, r) {
                n(this).on(t, i, r);
                return this
            }, off: function (t) {
                return n(this).off(t), this
            }, applyNormalStyle: function (t) {
                (t === f || t === u) && n.each(this.segments, function (t, r) {
                    n.each(r, function (n, t) {
                        t.fullState & i.selectedMark || t.applyNormalStyle()
                    })
                })
            }, applyHoverStyle: function (t) {
                (t === f || t === u) && n.each(this.segments, function (t, r) {
                    n.each(r, function (n, t) {
                        t.fullState & i.selectedMark || t.applyHoverStyle()
                    })
                })
            }, applySelectionStyle: function (t) {
                (t === f || t === u) && n.each(this.segments, function (t, r) {
                    n.each(r, function (n, t) {
                        t.fullState & i.selectedMark || t.applySelectionStyle()
                    })
                })
            }, setHoverState: function (n) {
                (this.fullState = this.fullState | i.hoverMark, n = n || this.options.hoverMode, this.lastHoverMode = n, this._checkBehavior(n, l)) && (this.state = i.hover, this.applyHoverStyle(n))
            }, releaseHoverState: function () {
                var n = this.lastHoverMode || this.options.hoverMode;
                (this.fullState = this.fullState & ~i.hoverMark, delete this.lastHoverMode, this._checkBehavior(n, l)) && (this.state = i.normal, this.applyNormalStyle(n))
            }, setSelectedState: function (n) {
                (this.state = i.selected, this.fullState = this.fullState | i.selectedMark, this.lastSelectionMode = n, this._checkBehavior(n, a)) && ((this.lastHoverMode === f || this.lastHoverMode === u) && this.applyNormalStyle(u), n = n || this.options.selectionMode, this.applySelectionStyle(n))
            }, releaseSelectedState: function () {
                var n = this.lastSelectionMode || this.options.selectionMode;
                (this.fullState = this.fullState & ~i.selectedMark, this._checkBehavior(n, a)) && (this.fullState & i.hoverMark ? (this.state = i.hover, (n === u || n === f) && (this.lastHoverMode !== u || this.lastHoverMode === f) && this.applyNormalStyle(n), this.applyHoverStyle(this.lastHoverMode)) : (this.state = i.normal, this.applyNormalStyle(n)), delete this.lastSelectionMode)
            }, _checkBehavior: function (n, t) {
                if (n === "none") return !1;
                switch (t) {
                    case l:
                        return !(this.fullState & i.selectedMark) || this.options.selectionMode === "none" ? !0 : !1;
                    case a:
                        return !0
                }
                return !1
            }, setPointHoverState: function (n) {
                n.fullState = n.fullState | i.hoverMark, this.fullState & i.selectedMark && (this.lastSelectionMode === f || this.lastSelectionMode === u) || n.fullState & i.selectedMark || (n.state = i.hover, n.applyHoverStyle())
            }, releasePointHoverState: function (n) {
                n.fullState = n.fullState & ~i.hoverMark, this.fullState & i.selectedMark && (this.lastSelectionMode === f || this.lastSelectionMode === u) || n.fullState & i.selectedMark || (n.state = i.normal, this.fullState & i.hoverMark && (this.lastSelectionMode === f || this.lastSelectionMode === u) || n.applyNormalStyle())
            }, setPointSelectedState: function (n) {
                n.state = i.selected, n.fullState = n.fullState | i.selectedMark, n.applySelectionStyle()
            }, releasePointSelectedState: function (n) {
                n.state = i.normal, n.fullState = n.fullState & ~i.selectedMark, this.fullState & i.hoverMark && (this.lastHoverMode === f || this.lastHoverMode === u) || n.fullState & i.hoverMark ? (n.applyHoverStyle(), n.fullState & i.hoverMark && (n.state = i.hover)) : this.fullState & i.selectedMark && (this.lastSelectionMode === f || this.lastSelectionMode === u) ? n.applySelectionStyle() : n.applyNormalStyle()
            }, _translateCoors: function () {
                var t = this, i = t.translator;
                n.each(t.points, function (n, t) {
                    t.translate(i)
                })
            }, _checkAndPrepareInputData: function (n, t, i) {
                return this._checkInputData(n, t, i), this._validationResult.error ? null : this._prepareInputData(n, t, i)
            }, _checkInputData: function (t, i, r) {
                this._validationResult = {error: null}, this._parseUtils = new y({incidentOccured: this.options.incidentOccured});
                var u = this, f = t.length, o, s, h, c, l, a, e = t[0], v = {};
                if (f) {
                    if (n.type(e) !== "object") {
                        u._validationResult.error = u._errorMessages.incorrectDataMessage(), u.options.incidentOccured.call(null, u._errorMessages.incorrectDataMessage());
                        return
                    }
                    (u._checkArgumentAxisParams(t, i), u._validationResult.error) || u._checkValueAxisParams(t, r)
                }
            }, _checkArgumentAxisParams: function (n, t) {
                var r = this, i = r.options, o = r._parsedUserOptions, l = o.argumentCategories,
                    u = r._correctAxisType(o.argumentAxisType, o.argumentCategories),
                    e = r._parseUtils.correctValueType(o.argumentType), s, c, h, f = {};
                t = t || i.argumentField || "arg", i.userArgumentType = e, i.userArgumentAxisType = u;
                switch (e.toLowerCase()) {
                    case"numeric":
                    case"datetime":
                        u ? (i.argumentAxisType = u, i.argumentType = e) : (i.argumentAxisType = u = "continuous", i.argumentType = e);
                        return;
                    case"string":
                        u && u !== "discrete" && (r._validationResult.error = r._errorMessages.incompatibleTypesDataMessage("argument"), r.options.incidentOccured.call(null, r._errorMessages.incompatibleTypesDataMessage("argument"))), i.argumentAxisType = u = "discrete", i.argumentType = e;
                        return
                }
                for (s = 0; s < n.length; s++) if (h = n[s], r._isTypeSupported(h[t])) {
                    c = h[t];
                    break
                }
                if (f.value = c, f.field = t, f.axisType = u, f.type = e, r._checkValue(f)) i.argumentAxisType = f.axisType, i.argumentType = f.type; else return
            }, _checkValueAxisParams: function (t, i) {
                var u = this, r = u.options, c = u._parsedUserOptions, y = r.valueField || "val",
                    p = r.rangeValue1Field || "val1", w = r.rangeValue2Field || "val2", b = c.valueCategories,
                    e = u._correctAxisType(c.valueAxisType, c.valueCategories),
                    s = u._parseUtils.correctValueType(c.valueType), f, h, l = {}, k, d, a, o = {}, g, v;
                i = i || [], i.length || (i = u.isRangeSeries ? [p, w] : [y]), r.userValueType = s, r.userValueAxisType = e;
                switch (s.toLowerCase()) {
                    case"numeric":
                    case"datetime":
                        e ? (r.valueAxisType = e, r.valueType = s) : (r.valueAxisType = e = "continuous", r.valueType = s);
                        return;
                    case"string":
                        e && e !== "discrete" && (u._validationResult.error = u._errorMessages.incompatibleTypesDataMessage("value"), u.options.incidentOccured.call(null, u._errorMessages.incompatibleTypesDataMessage("value"))), r.valueAxisType = e = "discrete", r.valueType = s;
                        return
                }
                for (o.axisType = e, o.type = s, f = 0; f < t.length; f++) {
                    for (v = !0, a = t[f], h = 0; h < i.length; h++) u._isTypeSupported(a[i[h]]) && (l[i[h]] = a[i[h]]);
                    if (n.each(i, function (n, t) {
                            return v = t in l
                        }), v) break
                }
                for (f = 0; f < i.length; f++) if (o.value = l[i[f]], o.field = i[f], !u._checkValue(o)) return;
                r.valueAxisType = o.axisType, r.valueType = o.type
            }, _prepareInputData: function (i, u, f) {
                function rt() {
                    for (var i = h.length, f = i, t = {}, n = 0; n < i; n++) t[h[n]] = n;
                    return function (n, i) {
                        var s = n[u], h = i[u], e = t[s], o = t[h];
                        return r.isDefined(e) || (e = f), r.isDefined(o) || (o = f), e - o
                    }
                }

                function ut(n, t) {
                    return n[u] - t[u]
                }

                var o = this, e = o.options, h = e.argumentCategories, l = e.argumentAxisType, y = e.argumentType,
                    c = o._errorMessages, a = o.options.incidentOccured, p = e.valueField || "val",
                    w = e.rangeValue1Field || "val1", b = e.rangeValue2Field || "val2", ot = e.valueCategories,
                    st = e.valueAxisType, k = e.userValueType, d = e.userArgumentType, g = e.userValueAxisType,
                    nt = e.userArgumentAxisType, tt = e.valueType, it = e.tagField || "tag", ht = t.data.query, ct = n.noop,
                    lt = n.noop, s = [];
                if (u = u || e.argumentField || "arg", f = f || [], f.length || (f = o.isRangeSeries ? [w, b] : [p]), !i.length) return s;
                var v = function (t, i, u) {
                    var e = o._parseUtils.getParser(i.toLowerCase(), t + "Axis"), f;
                    switch (i.toLowerCase()) {
                        case"numeric":
                            f = c.numericParsingMessage;
                            break;
                        case"datetime":
                            f = c.dateParsingMessage;
                            break;
                        default:
                            f = n.noop
                    }
                    return function (n) {
                        var i;
                        return u && !r.isDefined(n) || n === undefined ? (a.call(null, c.dataItemMissingMessage(t)), undefined) : n === null ? null : (i = e(n), r.isDefined(i) || a.call(null, f(t)), i)
                    }
                }, ft = v("argument", y, !0), et = v("value", tt);
                return s = n.map(i, function (n) {
                    var o = nt === "discrete" && !d ? n[u] : ft(n[u]), i = {tag: n[it]}, e, t;
                    if (!r.isDefined(o)) return null;
                    for (i[u] = o, i["original" + u] = n[u], t = 0; t < f.length; t++) {
                        if (e = g === "discrete" && !k ? n[f[t]] : et(n[f[t]]), e === undefined) return null;
                        i[f[t]] = e, i["original" + f[t]] = n[f[t]]
                    }
                    return i
                }), l === "discrete" && h && h.length ? s.sort(rt()) : l !== "discrete" && s.sort(ut), s
            }, _parseInputData: function (n) {
                var t = this, a = e.pointFactory.createPoint, v = t.options.rotated, y = t.styles.point, u, f = 0, i, r, h,
                    c, l, o = t.options, s = s || o.argumentField || "arg", p = o.tagField || "tag";
                if (n && n.length && (this._canRenderCompleteHandle = !0), t.points = [], t.pointsByArgument = {}, t.segments = [], u = t._checkAndPrepareInputData(n), u && !t._validationResult.error) {
                    if (t.isRangeSeries) for (c = o.rangeValue1Field || "val1", l = o.rangeValue2Field || "val2"; f < u.length; f++) i = u[f], r = a(t.type, {
                        minValue: i[c],
                        value: i[l],
                        argument: i[s],
                        originalMinValue: i["original" + c],
                        originalValue: i["original" + l],
                        originalArgument: i["original" + s],
                        rotated: v,
                        options: y,
                        tag: i.tag,
                        series: t
                    }), t.pointsByArgument[r.argument] = t.pointsByArgument[r.argument] || r, t.points.push(r); else for (h = o.valueField || "val"; f < u.length; f++) i = u[f], r = a(t.type, {
                        value: i[h],
                        argument: i[s],
                        originalValue: i["original" + h],
                        originalArgument: i["original" + s],
                        rotated: v,
                        options: y,
                        tag: i.tag,
                        series: t
                    }), t.points.push(r), t.pointsByArgument[r.argument.valueOf()] = t.pointsByArgument[r.argument.valueOf()] || r;
                    this._segmenting()
                }
            }, _segmenting: function () {
                var i = this, t = [];
                n.each(this.points, function (n, r) {
                    r.hasValue() ? t.push(r) : t.length !== 0 && (i.segments.push(t), t = [])
                }), t.length && this.segments.push(t)
            }, _parseOptions: function (t) {
                this.options = {
                    incidentOccured: t.incidentOccured,
                    rotated: !!t.rotated,
                    seriesGroup: t.seriesGroup,
                    seriesLabelsGroup: t.seriesLabelsGroup,
                    seriesTrackerGroup: t.seriesTrackerGroup,
                    markerTrackerGroup: t.markerTrackerGroup,
                    argumentCategories: t.argumentCategories,
                    argumentAxisType: t.argumentAxisType,
                    argumentType: t.argumentType,
                    argumentField: t.argumentField,
                    valueCategories: t.valueCategories,
                    valueAxisType: t.valueAxisType,
                    valueType: t.valueType,
                    valueField: t.valueField,
                    rangeValue1Field: t.rangeValue1Field,
                    rangeValue2Field: t.rangeValue2Field,
                    tagField: t.tagField,
                    selectionMode: (t.selectionMode || "").toLowerCase(),
                    hoverMode: (t.hoverMode || "").toLowerCase(),
                    showInLegend: t.showInLegend !== undefined ? t.showInLegend : !0
                }, n.isFunction(this.options.incidentOccured) || (this.options.incidentOccured = n.noop), this.name = t.name, this.styles = this.parseStyleOptions(t), this.adjustOptions && this.adjustOptions()
            }, parseStyleOptions: function (t) {
                var i = n.extend(!0, {}, this.getDefaultStyleOptions(), t), r = {
                    strokeWidth: i.border.visible ? i.border.width || 0 : 0,
                    stroke: i.border.visible && i.border.width ? i.border.color : "none",
                    fill: i.color,
                    dashStyle: i.dashStyle,
                    lineWidth: i.width,
                    r: i.cornerRadius
                }, o = {
                    strokeWidth: i.hoverStyle.border.visible ? i.hoverStyle.border.width || 0 : 0,
                    stroke: i.hoverStyle.border.visible && i.hoverStyle.border.width ? i.hoverStyle.border.color : "none",
                    fill: i.hoverStyle.color,
                    dashStyle: i.hoverStyle.dashStyle || i.dashStyle,
                    lineWidth: i.hoverStyle.width,
                    hatching: i.hoverStyle.hatching
                }, s = {
                    strokeWidth: i.selectionStyle.border.visible ? i.selectionStyle.border.width || 0 : 0,
                    stroke: i.selectionStyle.border.visible && i.selectionStyle.border.width ? i.selectionStyle.border.color : "none",
                    fill: i.selectionStyle.color,
                    dashStyle: i.selectionStyle.dashStyle || i.dashStyle,
                    lineWidth: i.selectionStyle.width,
                    hatching: i.selectionStyle.hatching
                }, u = {};
                n.each(["align", "translateX", "translateY", "rotate", "linejoin", "linecap", "opacity", "style"], function (n, t) {
                    i[t] && (u[t] = i[t])
                });
                var h = n.extend(!0, {}, r, u), f = {
                    strokeWidth: i.point.border.visible ? i.point.border.width || 0 : 0,
                    stroke: i.point.border.visible && i.point.border.width ? i.point.border.color : "none",
                    fill: i.point.color,
                    r: i.point.size + (i.point.border.visible && i.point.size !== 0 ? ~~(i.point.border.width / 2) || 0 : 0),
                    inh: !0
                }, c = {
                    strokeWidth: i.point.hoverStyle.border.visible ? i.point.hoverStyle.border.width || 0 : 0,
                    stroke: i.point.hoverStyle.border.visible && i.point.hoverStyle.border.width ? i.point.hoverStyle.border.color : "none",
                    fill: i.point.hoverStyle.color,
                    r: i.point.hoverStyle.size + (i.point.hoverStyle.border.visible && i.point.hoverStyle.size !== 0 ? ~~(i.point.hoverStyle.border.width / 2) || 0 : 0)
                }, l = {
                    strokeWidth: i.point.selectionStyle.border.visible ? i.point.selectionStyle.border.width || 0 : 0,
                    stroke: i.point.selectionStyle.border.visible && i.point.selectionStyle.border.width ? i.point.selectionStyle.border.color : "none",
                    fill: i.point.selectionStyle.color,
                    r: i.point.selectionStyle.size + (i.point.selectionStyle.border.visible && i.point.selectionStyle.size !== 0 ? ~~(i.point.selectionStyle.border.width / 2) || 0 : 0)
                }, e = {};
                n.each(["align", "translateX", "translateY", "rotate", "linejoin", "linecap", "style"], function (n, t) {
                    t in i.point && (e[t] = i.point[t])
                });
                var a = n.extend(!0, {}, f, e), v = {
                    align: i.label.alignment,
                    font: {
                        color: i.label.backgroundColor === "none" && i.label.font.color.toLowerCase() === "#ffffff" && i.label.position !== "inside" ? i.color : i.label.font.color,
                        family: i.label.font.family,
                        weight: i.label.font.weight,
                        size: i.label.font.size
                    },
                    style: i.label.style
                }, y = {
                    fill: i.label.backgroundColor || i.color,
                    strokeWidth: i.label.border.visible ? i.label.border.width || 0 : 0,
                    stroke: i.label.border.visible && i.label.border.width ? i.label.border.color : "none",
                    dashStyle: i.label.border.dashStyle
                }, p = {
                    stroke: i.label.connector.visible && i.label.connector.width ? i.label.connector.color || i.color : "none",
                    strokeWidth: i.label.connector.visible ? i.label.connector.width || 0 : 0
                };
                return {
                    themeColor: i.color,
                    attributes: h,
                    maxLabelCount: i.maxLabelCount,
                    reduction: {color: i.reduction.color, level: i.reduction.level, innerColor: i.innerColor},
                    states: {normal: r, hover: o, selected: s},
                    point: {
                        visible: i.point.visible,
                        symbol: i.point.symbol,
                        attributes: a,
                        seriesName: i.point.seriesName,
                        selectionMode: (i.point.selectionMode || "").toLowerCase(),
                        hoverMode: (i.point.hoverMode || "").toLowerCase(),
                        states: {normal: f, hover: c, selected: l},
                        label: {
                            format: i.label.format,
                            argumentFormat: i.label.argumentFormat,
                            precision: i.label.precision,
                            argumentPrecision: i.label.argumentPrecision,
                            percentPrecision: i.label.percentPrecision,
                            customizeText: n.isFunction(i.label.customizeText) ? i.label.customizeText : undefined,
                            attributes: v,
                            visible: i.label.font.size !== 0 ? i.label.visible : !1,
                            showForZeroValues: i.label.showForZeroValues,
                            horizontalOffset: i.label.horizontalOffset,
                            verticalOffset: i.label.verticalOffset,
                            radialOffset: i.label.radialOffset,
                            background: y,
                            position: i.label.position,
                            connector: p,
                            rotationAngle: i.label.rotationAngle
                        }
                    }
                }
            }, canRenderCompleteHandle: function () {
                var n = this._canRenderCompleteHandle;
                return delete this._canRenderCompleteHandle, !!n
            }, _isTypeSupported: function (n) {
                return r.isString(n) || r.isNumber(n) || r.isDate(n)
            }, getDefaultStyleOptions: function () {
                return {
                    color: "#000000",
                    border: {visible: !1, width: 1, color: "#000000"},
                    width: 2,
                    dashStyle: "solid",
                    cornerRadius: 0,
                    innerColor: "#ffffff",
                    reduction: {color: "#FF0000"},
                    maxLabelCount: undefined,
                    point: {
                        visible: !0,
                        symbol: "circle",
                        color: "#000000",
                        size: 6,
                        seriesName: this.name,
                        border: {visible: !1, width: 1, color: "#000000"},
                        hoverStyle: {color: "#000000", border: {visible: !0, width: 2, color: "#ffffff"}, size: 6},
                        selectionStyle: {color: "#000000", border: {visible: !0, width: 2, color: "#ffffff"}, size: 6}
                    },
                    label: {
                        visible: !1,
                        showForZeroValues: !0,
                        alignment: "center",
                        font: {
                            family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                            weight: 400,
                            color: "#ffffff",
                            size: 14
                        },
                        rotationAngle: 0,
                        horizontalOffset: 0,
                        verticalOffset: 0,
                        radialOffset: 0,
                        format: "",
                        argumentFormat: "",
                        precision: 0,
                        argumentPrecision: 0,
                        position: "outside",
                        connector: {visible: !1, width: 1},
                        border: {visible: !1, width: 1, color: "#808080", dashStyle: "solid"}
                    },
                    hoverStyle: {
                        hatching: "none",
                        color: "#000000",
                        border: {visible: !1, width: 1, color: "#000000"},
                        width: 3
                    },
                    selectionStyle: {
                        hatching: "right",
                        color: "#000000",
                        border: {visible: !1, width: 1, color: "#000000"},
                        width: 3
                    }
                }
            }
        });
    e.BaseSeries = w
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, f = i.consts.events, r = i.BaseSeries, u = r.inherit({
        ctor: function (n, t, i, r) {
            i.specificType = i.specificType || "line", this.callBase(n, t, i, r), this.paths = this.paths || []
        }, drawSegment: function (n, t) {
            return this.renderer.createPath(n, t)
        }, drawSeriesData: function (t, i, r) {
            var u = this;
            (u.preparedSegments = [], u.paths = [], u.points.length) && (n.each(this.segments, function (n) {
                u.prepareSegments(n)
            }), u.styles.attributes.strokeWidth > 0 && n.each(u.preparedSegments, function (n, i) {
                u.paths.push(u.drawSegment(i, u.styles.attributes).append(t))
            }), u.callBase(t, i, r))
        }, prepareSegments: function (n) {
            this.preparedSegments = this.preparedSegments || [], this.preparedSegments[n] = this.segments[n]
        }, drawTrackers: function () {
            var t = this, i = this.styles, r;
            if (t.callBase(), t.preparedSegments || (t.preparedSegments = [], n.each(t.segments, function (n) {
                    t.prepareSegments(n)
                })), !this._suppressTrackers) return r = i.attributes.strokeWidth < 20 ? 20 : i.attributes.strokeWidth, t.trackerElements = [], n.each(this.preparedSegments, function (n, i) {
                var u = t.drawSegment(i, {
                    strokeWidth: r,
                    stroke: "grey",
                    opacity: .0001
                }).append(t.options.seriesTrackerGroup);
                t.trackerElements.push(u), u.data({series: t})
            }), this
        }, applyNormalStyle: function (t) {
            var i = this;
            if (this.paths) return n.each(this.paths, function (n, t) {
                t.applySettings(i.styles.states.normal)
            }), i.callBase(t)
        }, applyHoverStyle: function (t) {
            var i = this;
            if (this.paths) return n.each(this.paths, function (n, t) {
                t.applySettings(i.styles.states.hover)
            }), i.callBase(t)
        }, applySelectionStyle: function (t) {
            var i = this;
            if (this.paths) return n.each(this.paths, function (n, t) {
                t && t.applySettings(i.styles.states.selected)
            }), i.callBase(t)
        }, animate: function () {
            this.callBase(), this.animatePath()
        }, animatePath: function () {
            var t = this, i = t.preparedSegments;
            i && i.length && t.paths && n.each(t.paths, function (n, r) {
                var u = t.getZeroPathPoints(n);
                r.applySettings({points: u}), r.animate({points: i[n]})
            })
        }, getZeroPathPoints: function (t) {
            return n.map(this.preparedSegments[t], function (n) {
                return n.getDefaultCoords()
            })
        }, adjustOptions: function () {
            var u = this.styles, n = u.attributes, t = u.states.hover, i = u.states.selected, r = u.states.normal;
            n.stroke = n.fill, n.fill = "none", n.strokeWidth = n.lineWidth, r.stroke = r.fill, r.fill = "none", r.strokeWidth = r.lineWidth, t.stroke = t.fill, t.fill = "none", t.strokeWidth = t.lineWidth, i.stroke = i.fill, i.fill = "none", i.strokeWidth = i.lineWidth
        }
    });
    i.LineSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.LineSeries, u = r.inherit({
        ctor: function (n, t, i, r) {
            this.type = i.specificType = i.specificType || "area", this.callBase(n, t, i, r), this.areas = this.areas || [], this.areaSegments = this.areaSegments || []
        }, drawSeriesData: function (t, i, r) {
            var u = this;
            if (u.resetLineColors(), (u.isStackedSeries() || u.isFullStackedSeries()) && u.seriesGroup.toBackground(), u.areas = [], u.points.length) return u.paths = [], n.each(this.segments, function (n) {
                u.prepareSegments(n)
            }), n.each(u.preparedSegments, function (n) {
                if (u.prepareAreaPoints(n), u.areaSegments[n].length === 2) {
                    var r = u.drawSegment(u.areaSegments[n], u.styles.stick).append(t);
                    r.stick = !0, u.areas.push(r);
                    return
                }
                u.areas.push(u.renderer.createArea(u.areaSegments[n], u.styles.area).append(t))
            }), (u.styles.attributes.strokeWidth > 0 || u.styles.states.hover.strokeWidth > 0 || u.styles.states.selected.strokeWidth > 0) && n.each(u.preparedSegments, function (n, i) {
                u.paths.push(u.drawSegment(i, u.styles.attributes).append(t))
            }), u.drawPoints(i, r), u.hoverPatternId && (u.styles.area.states.hover.fill = u.hoverPatternId, u.styles.area.states.selected.fill = u.selectedPatternId, u.styles.states.hover.fill = "none", u.styles.states.selected.fill = "none"), u
        }, resetLineColors: function () {
            var t = this.styles, i = t.attributes, n = t.states, r = n.hover, u = n.selected, f = n.normal;
            i.fill = "none", delete i.lineWidth, f.fill = "none", delete f.lineWidth, r.fill = "none", delete r.lineWidth, u.fill = "none", delete u.lineWidth
        }, drawTrackers: function () {
            var t = this;
            if (!this._suppressTrackers) return t.drawPointTrackers(), t.trackerElements = [], n.each(this.areaSegments, function (n, i) {
                var r;
                r = i.length === 2 ? t.drawSegment(i, {
                    strokeWidth: 20,
                    stroke: "grey",
                    opacity: .0001
                }).append(t.options.seriesTrackerGroup) : t.renderer.createArea(i, {
                    strokeWidth: 0,
                    fill: "grey",
                    opacity: .0001
                }).append(t.options.seriesTrackerGroup), t.trackerElements.push(r), r.data({series: t})
            }), i
        }, prepareAreaPoints: function (t) {
            var i = this.preparedSegments, r = n.map(i[t], function (n) {
                return n.getCoords()
            }), u = n.map(i[t].slice().reverse(), function (n) {
                return n.getCoords(!0)
            });
            this.areaSegments[t] = r.concat(u)
        }, applyStyle: function (t, i) {
            var r = this;
            this.areas && n.each(this.areas, function (n, t) {
                t.stick ? t.applySettings(r.styles.stick.states[i]) : t.applySettings(r.styles.area.states[i])
            })
        }, applyNormalStyle: function (n) {
            return this.applyStyle(n, "normal"), this.callBase(n)
        }, applyHoverStyle: function (n) {
            return this.applyStyle(n, "hover"), this.callBase(n)
        }, applySelectionStyle: function (n) {
            return this.applyStyle(n, "selected"), this.callBase(n)
        }, animate: function () {
            var t = this;
            this.callBase(), this.preparedSegments && this.preparedSegments.length && this.areas && n.each(this.areas, function (n, i) {
                var r = t.getZeroAreaPoints(n);
                i.applySettings({points: r}), i.animate({points: t.areaSegments[n]})
            })
        }, getZeroAreaPoints: function (t) {
            var i, r, u = this.preparedSegments;
            return i = n.map(u[t], function (n) {
                return n.getDefaultCoords()
            }), r = n.map(u[t].slice().reverse(), function (n) {
                return n.getDefaultCoords()
            }), i.concat(r)
        }, adjustOptions: function () {
            var t = this.styles, i = t.attributes, r = t.states, u = r.hover, f = r.selected, e = r.normal, o = {},
                s = {}, h = {}, c = {}, l = {}, a = {}, n;
            n = "opacity" in i ? i.opacity : .5, o = {
                fill: e.fill,
                stroke: "none",
                strokeWidth: 0,
                opacity: n
            }, s = {fill: u.fill, stroke: "none", strokeWidth: 0, opacity: n}, h = {
                fill: f.fill,
                stroke: "none",
                strokeWidth: 0,
                opacity: n
            }, c = {fill: "none", stroke: e.fill, strokeWidth: 1, opacity: n}, l = {
                fill: "none",
                stroke: u.fill,
                strokeWidth: 1,
                opacity: n
            }, a = {fill: "none", stroke: f.fill, strokeWidth: 1, opacity: n}, t.area = {
                fill: i.fill,
                stroke: "none",
                strokeWidth: 0,
                opacity: n,
                states: {normal: o, hover: s, selected: h}
            }, t.stick = {
                fill: "none",
                stroke: i.fill,
                strokeWidth: 1,
                opacity: n,
                states: {normal: c, hover: l, selected: a}
            }
        }
    });
    i.AreaSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.BaseSeries, u = r.inherit({
        ctor: function (n, t, i, r) {
            i.specificType = i.specificType || "bar", this.callBase(n, t, i, r), this.stackName = i.stack || "default", this.rects = []
        }, getStackName: function () {
            return this.type === "stackedbar" || this.type === "fullstackedbar" ? this.stackName : null
        }, drawSeriesData: function (n, t, i) {
            var r = this;
            return r.points.length && r.hoverPatternId && (r.styles.point.states.hover.fill = r.hoverPatternId, r.styles.point.states.selected.fill = r.selectedPatternId), this.callBase(n, t, i)
        }, adjustOptions: function () {
            var t = this.styles, i = this.options, c = t.attributes, l = t.states.hover, a = t.states.selected,
                v = t.states.normal, r = t.point.attributes, u = t.point.states.hover, f = t.point.states.selected,
                e = t.point.states.normal, o = i.hoverMode, s = i.selectionMode, h = function (n) {
                    if (!n) return !1;
                    switch (n.toLowerCase()) {
                        case"allseriespoints":
                        case"allargumentpoints":
                        case"none":
                            return !0
                    }
                };
            n.extend(!0, r, c), n.extend(!0, u, l), n.extend(!0, f, a), n.extend(!0, e, v), u.r = f.r = e.r = r.r, t.point.hoverMode = h(o) && o, t.point.selectionMode = h(s) && s, t.point.visible = !0
        }
    });
    i.BarSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = t.utils.isDefined, u = i.BaseSeries, f = u.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "candlestick", this.callBase(n, t, i)
        }, getRangeData: function () {
            var t = this, e = t.options, o = e.rotated, s = o ? "X" : "Y", f = o ? "Y" : "X", i = [], u = [],
                h = function (n, t) {
                    return n - t
                };
            return n.each(this.points, function (n, t) {
                r(t.argument) && u.push(t.argument), t.hasValue() && (i.push(t.highValue), i.push(t.lowValue))
            }), t.rangeData = {}, i.length && (i.sort(h), t.rangeData["max" + s] = i[i.length - 1], t.rangeData["min" + s] = i[0]), !u.length || e.argumentAxisType === "discrete" ? t.rangeData["categories" + f] = u : (u.sort(h), t.rangeData["min" + f] = u[0], t.rangeData["max" + f] = u[u.length - 1]), this.rangeData
        }, _parseInputData: function (t) {
            var o = this, r, y = i.pointFactory, c = this.options.argumentField || "date",
                f = this.options.openValueField || "open", s = this.options.highValueField || "high",
                h = this.options.lowValueField || "low", e = this.options.closeValueField || "close",
                b = this.options.tagField || "tag", p = this.styles.point, a = this.styles.reduction.color,
                w = this.styles.reduction.innerColor, v, l, u;
            if (this.points = [], this.segments = [], t.length) {
                v = o._checkAndPrepareInputData(t, c, [f, s, h, e]), o._validationResult = {
                    inputNotations: 0,
                    error: null
                };
                switch ((this.styles.reduction.level || "").toLowerCase()) {
                    case"open":
                        r = f;
                        break;
                    case"high":
                        r = s;
                        break;
                    case"low":
                        r = h;
                        break;
                    default:
                        r = e
                }
                this.points = n.map(v, function (t, i) {
                    var v = n.extend(!0, {}, p || {});
                    return u = "dx-candle-default", t[f] !== null && t[s] !== null && t[h] !== null & t[e] !== null && (i != 0 && l != null && t[r] < l && (v.attributes.fill = v.states.normal.fill = v.states.hover.fill = v.states.selected.fill = a, v.attributes.stroke = v.states.normal.stroke = v.states.hover.stroke = v.states.selected.stroke = a, u = "dx-candle-reduction"), l = t[r], t[f] < t[e] && (v.attributes.fill = v.states.normal.fill = v.states.hover.fill = v.states.selected.fill = w, u = (u ? u : "") + " dx-candle-positive")), v.attributes["class"] = u, o.className = "dx-candle-default", y.createPoint(o.type, {
                        openValue: t[f],
                        pointClassName: u,
                        highValue: t[s],
                        lowValue: t[h],
                        closeValue: t[e],
                        argument: t[c],
                        originalOpenValue: t["original" + f],
                        originalHighValue: t["original" + s],
                        originalLowValue: t["original" + h],
                        originalCloseValue: t["original" + e],
                        originalArgument: t["original" + c],
                        options: v,
                        tag: t.tag,
                        reductionValue: t[r],
                        series: o
                    })
                }), this._segmenting()
            }
        }, _parseOptions: function (t) {
            this.callBase(t), n.extend(!0, this.options, {
                openValueField: t.openValueField,
                closeValueField: t.closeValueField,
                highValueField: t.highValueField,
                lowValueField: t.lowValueField
            })
        }, drawSeriesData: function (t, i, r) {
            var u = this;
            return n.each(u.points, function (n, t) {
                var i = u.getPointSpecificPatternId(u.hoverPatternColor, u.styles.states.hover.hatching);
                i && (t.options.states.hover.fill = i), i = u.getPointSpecificPatternId(u.selectedPatternColor, u.styles.states.selected.hatching), i && (t.options.states.selected.fill = i)
            }), this.callBase(t, i, r), this
        }, createPattern: function () {
        }, getPointSpecificPatternId: function (n, t) {
            var i = this.renderer.createPattern(n, t);
            return i.id
        }, adjustOptions: function () {
            var t = this.styles, e = this.options, i = t.attributes, r = t.states.hover, u = t.states.selected,
                f = t.states.normal, o = t.point.attributes, s = t.point.states.hover, h = t.point.states.selected,
                c = t.point.states.normal, l = e.hoverMode, a = e.selectionMode, v = function (n) {
                    if (!n) return !1;
                    switch (n.toLowerCase()) {
                        case"allseriespoints":
                        case"allargumentpoints":
                        case"none":
                            return !0
                    }
                };
            i.stroke = i.fill, i.strokeWidth = i.lineWidth, f.stroke = f.fill, f.strokeWidth = f.lineWidth, r.stroke = r.fill, r.strokeWidth = r.lineWidth, u.stroke = u.fill, u.strokeWidth = u.lineWidth, n.extend(!0, o, i), n.extend(!0, s, r), n.extend(!0, h, u), n.extend(!0, c, f), s.r = h.r = c.r = o.r = 0, t.point.hoverMode = v(l) && l, t.point.selectionMode = v(a) && a, t.point.visible = !0
        }
    });
    i.CandleStickSeries = f
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.CandleStickSeries, u = r.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "stock", this.callBase(n, t, i)
        }
    });
    i.StockSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = t.utils, u = i.LineSeries, f = u.inherit({
        ctor: function (n, t, i, r) {
            i.specificType = i.specificType || "spline", this.callBase(n, t, i, r)
        }, drawSegment: function (n, t) {
            return this.renderer.createBezierPath(n, t)
        }, prepareSegments: function (t) {
            var i = this, u = [], f = i.segments[t], e, o;
            i.preparedSegments = i.preparedSegments || [], e = function (n, t, i) {
                return n > t && i > n || n < t && i < n ? n : i
            }, o = function (n, t, i) {
                var u = r.clone(n);
                return u.x = t, u.y = i, u
            }, f.length !== 1 ? n.each(f, function (n, t) {
                var a, v, y, p, h, c, r, s, b, k, d, g, st, l = .5, ft, et, ot, it, rt, ut, nt, tt, w;
                if (!n) {
                    u.push(t), u.push(t);
                    return
                }
                if (h = f[n - 1], n < f.length - 1) c = f[n + 1], r = t.x, s = t.y, b = h.x, k = c.x, d = h.y, g = c.y, ft = !!(!i.options.rotated && (s <= h.y && s <= c.y || s >= h.y && s >= c.y) || i.options.rotated && (r <= h.x && r <= c.x || r >= h.x && r >= c.x)), ft ? i.options.rotated ? (y = a = r, p = (s + c.y) / 2, v = (s + h.y) / 2) : (p = v = s, y = (r + c.x) / 2, a = (r + h.x) / 2) : (it = g - d, rt = b - k, ut = d * k - b * g, i.options.rotated ? (tt = s, nt = -1 * (rt * tt + ut) / it, w = nt - r || 0, b -= w, k -= w) : (nt = r, tt = -1 * (it * nt + ut) / rt, w = tt - s || 0, d -= w, g -= w), y = (r + l * k) / (1 + l), p = (s + l * g) / (1 + l), a = (r + l * b) / (1 + l), v = (s + l * d) / (1 + l)), i.options.rotated ? (a = e(h.x, r, a), y = e(c.x, r, y)) : (v = e(h.y, s, v), p = e(c.y, s, p)), et = o(t, a, v), ot = o(t, y, p), u.push(et, t, ot); else {
                    u.push(t, t);
                    return
                }
            }) : u.push(f[0]), i.preparedSegments[t] = u
        }
    });
    i.SplineSeries = f
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.SplineSeries, u = r.inherit({
        ctor: function (n, t, i, r) {
            i.specificType = i.specificType || "splinearea", this.callBase(n, t, i, r), this.areas = this.areas || [], this.areaSegments = this.areaSegments || []
        }, drawSeriesData: function (t, i, r) {
            if (this.points.length) {
                var u = this;
                if (this.points.length) return this.resetLineColors(), n.each(this.segments, function (n) {
                    u.prepareSegments(n)
                }), this.areas = [], n.each(u.preparedSegments, function (n) {
                    u.prepareBezierAreaPoints(n), u.areas.push(u.renderer.createBezierArea(u.areaSegments[n], u.styles.area).append(t))
                }), (u.styles.attributes.strokeWidth > 0 || u.styles.states.hover.strokeWidth > 0 || u.styles.states.selected.strokeWidth > 0) && n.each(u.preparedSegments, function (n, i) {
                    u.paths.push(u.drawSegment(i, u.styles.attributes).append(t))
                }), u.drawPoints(i, r), u.hoverPatternId && (u.styles.area.states.hover.fill = u.hoverPatternId, u.styles.area.states.selected.fill = u.selectedPatternId, u.styles.states.hover.fill = "none", u.styles.states.selected.fill = "none"), u
            }
        }, resetLineColors: function () {
            var t = this.styles, i = t.attributes, n = t.states, r = n.hover, u = n.selected, f = n.normal;
            i.fill = "none", delete i.lineWidth, f.fill = "none", delete f.lineWidth, r.fill = "none", delete r.lineWidth, u.fill = "none", delete u.lineWidth
        }, drawTrackers: function () {
            var t = this;
            if (!this._suppressTrackers) return t.drawPointTrackers(), n.each(this.areaSegments, function (n, i) {
                var r = t.renderer.createBezierArea(i, {
                    strokeWidth: 0,
                    fill: "grey",
                    opacity: .0001
                }).append(t.options.seriesTrackerGroup);
                r.data({series: t})
            }), i
        }, prepareBezierAreaPoints: function (t) {
            var r = this.preparedSegments, i = n.map(r[t], function (n) {
                return n.getCoords()
            }), u = n.map(r[t].slice().reverse(), function (n) {
                return n.getCoords(!0)
            }), f = i[i.length - 1], e = u[0];
            this.areaSegments[t] = i.concat({x: f.x, y: f.y}, {x: e.x, y: e.y}, u)
        }, applyNormalStyle: function (t) {
            var i = this;
            return this.areas && n.each(this.areas, function (n, t) {
                t.applySettings(i.styles.area.states.normal)
            }), this.callBase(t)
        }, applyHoverStyle: function (t) {
            var i = this;
            return this.areas && n.each(this.areas, function (n, t) {
                t.applySettings(i.styles.area.states.hover)
            }), this.callBase(t)
        }, applySelectionStyle: function (t) {
            var i = this;
            return this.areas && n.each(this.areas, function (n, t) {
                t.applySettings(i.styles.area.states.selected)
            }), this.callBase(t)
        }, animate: function () {
            var t = this;
            this.callBase(), this.preparedSegments && this.preparedSegments.length && this.areas && n.each(this.areas, function (n, i) {
                var r = t.getZeroAreaPoints(n);
                i.applySettings({points: r}), i.animate({points: t.areaSegments[n]})
            })
        }, getZeroAreaPoints: function (t) {
            var i = n.map(this.preparedSegments[t], function (n) {
                return n.getDefaultCoords()
            }), r = n.map(this.preparedSegments[t].slice().reverse(), function (n) {
                return n.getDefaultCoords()
            }), u = i[i.length - 1], f = r[0];
            return i.concat({x: u.x, y: u.y}, {x: f.x, y: f.y}, r)
        }, adjustOptions: function () {
            var t = this.styles, i = t.attributes, r = t.states, o = r.hover, s = r.selected, h = r.normal, u = {},
                f = {}, e = {}, n;
            n = "opacity" in i ? i.opacity : .5, u = {
                fill: h.fill,
                stroke: "none",
                strokeWidth: 0,
                opacity: n
            }, f = {fill: o.fill, stroke: "none", strokeWidth: 0, opacity: n}, e = {
                fill: s.fill,
                stroke: "none",
                strokeWidth: 0,
                opacity: n
            }, t.area = {
                fill: i.fill,
                stroke: "none",
                strokeWidth: 0,
                opacity: n,
                states: {normal: u, hover: f, selected: e}
            }
        }
    });
    i.SplineAreaSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.BaseSeries, u = r.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "scatter", this.callBase(n, t, i)
        }
    });
    i.ScatterSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.AreaSeries, u = r.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "rangearea", this.callBase(n, t, i, !0)
        }
    });
    i.RangeAreaSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.SplineAreaSeries, u = r.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "rangesplinearea", this.callBase(n, t, i, !0)
        }
    });
    i.RangeSplineAreaSeries = u
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.BarSeries, u = r.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "rangebar", this.callBase(n, t, i, !0)
        }
    });
    i.RangeBarSeries = u
}(jQuery, DevExpress), function (n, t) {
    var u = t.viz.charts.series, o = t.viz.core, r = u.consts.states, f = u.BasePoint, i = Math.round, e = f.inherit({
        ctor: function (t) {
            this.centerX = 300, this.centerY = 150, this.radiusOuter = 120, this.radiusInner = 0, this.INDENT_FROM_PIE = 30, this.CONNECTOR_LENGTH = 20, this.setLabelEllipsis = !1, this.callBase(t), this.minValue = 0, this.tag = t.tag, this._pieTrackerAttrs = n.extend({}, this._trackerAttrs, {
                inh: !1,
                fill: "grey"
            })
        }, translate: function (n) {
            var t = this;
            (t.translator = n = n || t.translator, t.translator) && (t.fromAngle = n.translate(t.minValue), t.toAngle = n.translate(t.value), t.middleAngle = n.translate((t.value - t.minValue) / 2 + t.minValue))
        }, correctValue: function (n, t) {
            var i = this;
            i.value += n, i.minValue += n, i.percent = t, i.labelFormatObject.percent = t
        }, getTooltipCoords: function () {
            var n = t.utils.getCosAndSin(this.middleAngle);
            return {
                x: this.centerX + (this.radiusInner + (this.radiusOuter - this.radiusInner) / 2) * n.cos,
                y: this.centerY - (this.radiusInner + (this.radiusOuter - this.radiusInner) / 2) * n.sin,
                offset: 0
            }
        }, correctPosition: function (n) {
            var t = this;
            t.radiusInner = n.radiusInner, t.radiusOuter = n.radiusOuter, t.centerX = n.centerX, t.centerY = n.centerY
        }, drawMarker: function (n, t) {
            this.options.attributes.inh = !1;
            var i = n.createArc(this.centerX, this.centerY, this.radiusOuter, this.radiusInner, this.toAngle, this.fromAngle, this.options.attributes);
            i.append(t), this.graphic = i;
            switch (this.state) {
                case r.selected:
                    this.series.setPointSelectedState(this);
                    break;
                case r.hover:
                    this.series.setPointHoverState(this);
                    break;
                default:
                    this.state = r.normal, this.fullState = r.normalMark
            }
        }, drawTrackerMarker: function (n, t) {
            var i = n.createArc(this.centerX, this.centerY, this.radiusOuter, this.radiusInner, this.toAngle, this.fromAngle, this._pieTrackerAttrs);
            i.append(t), i.data({point: this})
        }, correctLabel: function () {
            this.correctLabelPosition(), this.checkEllipsis(), this.correctBackgroundPosition(), this.rotateLabel(), this.checkLabelPosition()
        }, correctLabelPosition: function () {
            var e = this.label.getBBox(), o = this.options.label, n = t.utils.getCosAndSin(this.middleAngle),
                u = "center", r = this.radiusOuter + o.radialOffset, f, s;
            switch (o.position) {
                case"outside":
                    r += this.INDENT_FROM_PIE, n.cos > .1 ? u = "left" : n.cos < -.1 && (u = "right"), f = this.centerX + r * n.cos;
                    break;
                case"inside":
                    r -= this.INDENT_FROM_PIE, f = this.centerX + r * n.cos;
                    break;
                case"columns":
                    r += this.CONNECTOR_LENGTH, n.cos > 0 ? (u = "right", f = this.series.canvas.width - this.series.canvas.right) : n.cos < 0 && (u = "left", f = this.series.canvas.left)
            }
            s = i(this.label.settings.y + this.centerY - r * n.sin - e.y - e.height / 2), this.label.applySettings({
                x: f,
                y: s,
                align: u
            })
        }, correctConnectorPosition: function () {
            if (this.options.label.position !== "inside" && this.connector) {
                var r = t.utils.getCosAndSin(i(this.middleAngle)), s = this.series.styles.attributes,
                    c = this.series.userOptions.containerBackgroundColor === s.stroke ? ~~(s.strokeWidth / 2) : ~~(-s.strokeWidth / 2),
                    f = this.radiusOuter, l = i(this.centerX + (f - c) * r.cos), a = i(this.centerY - (f - c) * r.sin),
                    h, u, e, v, n, o = this.options.label, y;
                h = i(this.centerX + (f + o.radialOffset + this.CONNECTOR_LENGTH) * r.cos), o.position === "outside" && (u = i(this.centerY - (f + o.radialOffset + this.CONNECTOR_LENGTH) * r.sin), this.connector.applySettings({points: [l, a, h, u]})), o.position === "columns" && (n = this.insideLabelGroup.getBBox(), n.x = n.x + (this.insideLabelGroup.settings.translateX || 0), n.y = n.y + (this.insideLabelGroup.settings.translateY || 0), u = n.y + n.height / 2, this.labelBackground ? e = n.x + n.width / 2 : r.cos < 0 ? e = n.x + n.width : r.cos > 0 && (e = n.x), v = u, this.connector.applySettings({
                    points: [{
                        x: l,
                        y: a
                    }, {x: h, y: u}, {x: e, y: v}]
                }))
            }
        }, rotateLabel: function () {
            var i = this.options.label, f = this.radiusOuter + i.radialOffset,
                e = t.utils.getCosAndSin(this.middleAngle), r, u, n = this.insideLabelGroup.getBBox();
            switch (i.position) {
                case"outside":
                    r = this.centerX + (f + i.radialOffset + this.CONNECTOR_LENGTH) * e.cos, u = this.centerY - (f + i.radialOffset + this.CONNECTOR_LENGTH) * e.sin;
                    break;
                case"inside":
                    r = n.x + n.width / 2, u = n.y + n.height / 2;
                    break;
                case"columns":
                    r = n.x + n.width / 2, u = n.y + n.height / 2
            }
            this.insideLabelGroup.applySettings({x: r, y: u, rotate: i.rotationAngle})
        }, checkEllipsis: function () {
            var r = this, c, s = 10, i, a, b = 0, v = [], k = [], d, o, y, f, l, e,
                h = t.utils.getCosAndSin(r.options.label.rotationAngle), u = r.series.canvas, g = this.options.label,
                p = t.utils.getCosAndSin(this.middleAngle),
                w = this.centerX + (this.radiusOuter + this.CONNECTOR_LENGTH) * p.cos;
            if (r.label.tspans && r.setLabelEllipsis) {
                if (i = r.label.getBBox(), f = i.x + i.width < r.centerX ? i.x + i.width : i.x, l = i.y + i.height / 2, e = i.x + i.width < r.centerX ? -i.width : i.width, l + e * h.sin > u.height - u.bottom + s || l + e * h.sin < u.top - s || f + e * h.cos < u.left - s || f + e * h.cos > u.width - u.right + s || g.position === "columns" && (p.cos < 0 && w < f || p.cos > 0 && w > f)) for (c = 0; c < r.label.tspans.length; c++) b += r.label.tspans[c].element.getNumberOfChars(), (!r.label.tspans[c + 1] || r.label.tspans[c + 1].settings.dy > 0) && (v.push(b), k.push(c), b = 0);
                while (l + e * h.sin > u.height - u.bottom + s || l + e * h.sin < u.top - s || f + e * h.cos < u.left - s || f + e * h.cos > u.width - u.right + s || g.position === "columns" && (p.cos < 0 && w < f || p.cos > 0 && w > f)) {
                    if (d = Math.max.apply(null, v), d === 0) break;
                    y = n.inArray(d, v), o = k[y], r.label.tspans[o].element.textContent === "..." ? r.label.tspans[o].settings.dy > 0 || !r.label.tspans[o - 1] ? v[y] = 0 : r.label.tspans[o - 1] && (r.label.tspans[o].element.textContent = "", k[y] -= 1, r.label.tspans[o - 1].element.textContent += "...") : (a = r.label.tspans[o].element.textContent, a = a.substr(0, a.length - 4) + "...", r.label.tspans[o].element.textContent = a, v[y] -= 1), i = r.label.getBBox(), f = i.x + i.width < r.centerX ? i.x + i.width : i.x, l = i.y + i.height / 2, e = i.x + i.width < r.centerX ? -i.width : i.width
                }
            }
        }, checkLabelPosition: function () {
            var i = this, n = i.insideLabelGroup.getBBox(), t = i.series.canvas;
            n.y + n.height > t.height - t.bottom ? i.insideLabelGroup.move(0, t.height - n.y - n.height - t.bottom) : n.y < t.top && i.insideLabelGroup.move(0, t.top - n.y), n.x + n.width > t.width - t.right ? i.insideLabelGroup.move(t.width - t.right - n.x - n.width, 0) : n.x < t.left && i.insideLabelGroup.move(t.left - n.x, 0)
        }, animate: function () {
            var n = this;
            n._hideLabel(), n._showLabel(!0)
        }
    });
    u.PiePoint = e
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = i.BaseSeries, u = 20, f = 80, e = r.inherit({
        ctor: function (n, t, i) {
            i.specificType = i.specificType || "pie", this.callBase(n, t, i), this.labelSpace = this.styles.point.label.visible ? f : 0, this.hoverSpace = 0 && this.styles.point.states.enableHover ? u : 0, this.innerRadius = this.type === "pie" ? 0 : i.innerRadius, this.outerRadius = i.radius, this.redraw = !1
        }, arrangePoints: function () {
            var i = this, t, f, u = 0, h = this.translator, e = 0, o, r,
                s = i.options.segmentsDirection !== "anticlockwise";
            for (i.points = n.map(i.points, function (n) {
                return n.value === null || n.value === 0 || n.value < 0 ? null : n
            }), t = i.points, f = t.length, r = 0; r < f; r++) e += t[r].value;
            n.each(s ? t : t.concat([]).reverse(), function (n, t) {
                var i = t.value;
                o = i / e, t.correctValue(u, o), u = u + i
            })
        }, drawSeriesData: function (t, i, r) {
            var u = this, f, h, e, o, s;
            return n.each(u.points, function (n, t) {
                var i;
                t.hoverPatternColor || (t.hoverPatternColor = t.options.states.hover.fill, t.selectedPatternColor = t.options.states.selected.fill), i = u.getPointSpecificPatternId(t.hoverPatternColor, t.options.states.hover.hatching), i && (t.options.states.hover.fill = i), i = u.getPointSpecificPatternId(t.selectedPatternColor, t.options.states.selected.hatching), i && (t.options.states.selected.fill = i)
            }), this.callBase(t, i, r), u.styles.point.label.visible && (f = 0, u.styles.point.label.position === "columns" ? (n.each(u.points, function (n, t) {
                t.setLabelEllipsis = !0, h = t.insideLabelGroup.getBBox(), f = Math.max(h.width + t.INDENT_FROM_PIE + t.options.label.radialOffset, f)
            }), u.redraw = !0, e = u.canvas.height - u.canvas.top - u.canvas.bottom, o = u.canvas.width - u.canvas.left - u.canvas.right, s = o < e ? o : e, u.labelSpace = f > s / 2 - f ? s / 2 : 2 * f) : n.each(u.points, function (n, t) {
                t.setLabelEllipsis = !0, t.correctLabel()
            })), this
        }, createPattern: function () {
        }, getPointSpecificPatternId: function (n, t) {
            var i = this.renderer.createPattern(n, t);
            return i.id
        }, correctPosition: function (t) {
            n.each(this.points, function (n, i) {
                i.correctPosition(t)
            })
        }, getRangeData: function () {
            var n = this.callBase();
            return n ? (n.minY !== undefined && (n.minY = n.minY > 0 ? 0 : n.minY, n.maxY = n.maxY < 0 ? 0 : n.maxY), n) : n
        }, parseStyleOptions: function (n) {
            return n.label && n.label.position && n.label.position !== "outside" && n.label.position !== "inside" && n.label.position !== "columns" && (n.label.position = "outside"), n.label.position && n.label.position === "columns" && (n.label.connector.visible = !0), this.options.segmentsDirection = n.segmentsDirection || "clockwise", this.styles = this.callBase(n), this.adjustOptions(), this.styles
        }, adjustOptions: function () {
            var t = this.styles, i = this.options, c = t.attributes, l = t.states.hover, a = t.states.selected,
                v = t.states.normal, r = t.point.attributes, u = t.point.states.hover, f = t.point.states.selected,
                e = t.point.states.normal, o = i.hoverMode, s = i.selectionMode, h = function (n) {
                    if (!n) return !1;
                    switch (n.toLowerCase()) {
                        case"none":
                            return !0
                    }
                };
            n.extend(!0, r, c), n.extend(!0, u, l), n.extend(!0, f, a), n.extend(!0, e, v), u.r = f.r = e.r = r.r, t.point.hoverMode = h(o) && o, t.point.selectionMode = h(s) && s, t.point.visible = !0
        }
    });
    i.PieSeries = e
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = t.utils, u = i.LineSeries, f = u.inherit({
        ctor: function (n, t, i, r) {
            this.type = i.specificType = i.specificType || "stepline", this.callBase(n, t, i, r)
        }, prepareSegments: function (t) {
            var u = this, i = [];
            u.preparedSegments = u.preparedSegments || [], n.each(u.segments[t], function (n, t) {
                var u, f;
                if (!n) {
                    i.push(t);
                    return
                }
                u = i[i.length - 1].y, u !== t.y && (f = r.clone(t), f.y = u, i.push(f)), i.push(t)
            }), u.preparedSegments[t] = i
        }
    });
    i.StepLineSeries = f
}(jQuery, DevExpress), function (n, t) {
    var i = t.viz.charts.series, r = t.utils, u = i.AreaSeries, f = u.inherit({
        ctor: function (n, t, i, r) {
            this.type = i.specificType = i.specificType || "steparea", this.callBase(n, t, i, r)
        }, prepareSegments: function (t) {
            var u = this, i = [];
            u.preparedSegments = u.preparedSegments || [], n.each(u.segments[t], function (n, t) {
                var u, f;
                if (!n) {
                    i.push(t);
                    return
                }
                u = i[i.length - 1].y, u !== t.y && (f = r.clone(t), f.y = u, i.push(f)), i.push(t)
            }), u.preparedSegments[t] = i
        }
    });
    i.StepAreaSeries = f
}(jQuery, DevExpress), function (n, t) {
    var r = t.Class, u = t.viz.charts.series, f = t.utils;
    u.SeriesFamily = r.inherit(function () {
        var f = function (i) {
            var u = this, f = function () {
            };
            n.extend(u, i), u.type = u.type.toLowerCase(), u.series = [];
            switch (u.type) {
                case"bar":
                case"rangebar":
                    u.adjustSeriesDimensions = o, u.adjustSeriesValues = f;
                    break;
                case"fullstackedbar":
                    u.fullStacked = !0, u.adjustSeriesDimensions = r, u.adjustSeriesValues = t;
                    break;
                case"stackedbar":
                    u.adjustSeriesDimensions = r, u.adjustSeriesValues = t;
                    break;
                case"fullstackedarea":
                case"fullstackedline":
                    u.fullStacked = !0, u.adjustSeriesDimensions = f, u.adjustSeriesValues = t;
                    break;
                case"stackedarea":
                case"stackedline":
                    u.adjustSeriesDimensions = f, u.adjustSeriesValues = t;
                    break;
                default:
                    u.adjustSeriesDimensions = f, u.adjustSeriesValues = f
            }
        }, e = function (t) {
            var u = this, r, i;
            for (n.isArray(t) || (t = [t]), i = 0; i < t.length; i++) r = t[i], r.type.toLowerCase() === u.type && u.series.push(r)
        }, i = function (t, i, r, u, f) {
            var e, o, g, c, h, a, d, nt, p, l, w = {}, v = {}, b, y, s = Math.round, k;
            if (u) for (o = u.width && u.width < 0 ? 0 : u.width, e = u.spacing && u.spacing < 0 ? 0 : u.spacing, o && !e ? r > 1 ? (e = s((i * .7 - o * r) / (r - 1)), e < 1 && (e = 1)) : e = 0 : e && !o ? (o = s((i * .7 - e * (r - 1)) / r), o < 2 && (o = 2)) : e || o || (r > 1 ? (e = s(i * .7 / r * .2), e < 1 && (e = 1)) : e = 0, o = s((i * .7 - e * (r - 1)) / r), o < 2 && (o = 2)), o * r + e * (r - 1) > i && (e = s((i * .7 - o * r) / (r - 1)), e < 1 && (e = 1, g = s((i * .7 - e * (r - 1)) / r))), c = r / 2, a = 0; a < t.length; a++) h = f(a), nt = t[a].getPoints(), p = (h - c + .5) * (g || o) - (c - h - .5) * e, n.each(nt, function (n, t) {
                t.correctCoordinates({width: o, offset: p})
            }); else {
                n.each(t, function (n, t) {
                    l = t.getStackName && t.getStackName(), l = l || n.toString(), v[l] || (v[l] = []), v[l].push(t)
                }), n.each(t, function (t, i) {
                    n.each(i.getPoints(), function (n, t) {
                        var i = t.argument;
                        w.hasOwnProperty(i) || (w[i] = 1)
                    })
                });
                for (k in w) w.hasOwnProperty(k) && (b = [], n.each(v, function (t, i) {
                    n.each(i, function (n, i) {
                        return d = i.getPointByArg(k), d && d.value ? (b.push(t), !1) : void 0
                    })
                }), y = b.length, e = s(i * .7 / y * .2), e < 1 && (e = 1), o = s((i * .7 - e * (y - 1)) / y), o < 2 && (o = 2), c = y / 2, n.each(v, function (t, i) {
                    (h = n.inArray(t, b), h !== -1) && (p = (h - c + .5) * o - (c - h - .5) * e, n.each(i, function (n, t) {
                        var i = t.getPointByArg(k);
                        i && i.value && i.correctCoordinates({width: o, offset: p})
                    }))
                }))
            }
        }, o = function (n) {
            var t = this, r = t.series, e = t.equalBarWidth, f;
            t.translator = n, f = u(t), i(r, f, r.length, e, function (n) {
                return n
            })
        }, r = function (t) {
            var r = this, o, f = r.series, e = {}, s = 0, h = r.equalBarWidth;
            n.each(f, function () {
                var n = this.getStackName();
                e.hasOwnProperty(n) || (e[n] = s++)
            }), r.translator = t, o = u(r), i(f, o, s, h, function (n) {
                return e[f[n].getStackName()]
            })
        }, t = function () {
            var i = this, r = i.series, t = {positive: {}, negative: {}};
            n.each(r, function (i, r) {
                var u = r.getPoints();
                n.each(u, function (n, i) {
                    var o = i.value, e = i.argument, s = r.getStackName ? r.getStackName() : "default",
                        h = o >= 0 ? "positive" : "negative", f;
                    t[h][s] = t[h][s] || {}, f = t[h][s], f[e.valueOf()] ? (u[n].correctValue(f[e.valueOf()]), f[e.valueOf()] += o) : f[e.valueOf()] = o
                })
            }), i.fullStacked && s(r, t)
        }, s = function (t, i) {
            n.each(t, function (t, r) {
                var u = r.getPoints();
                n.each(u, function (n, t) {
                    var s = t.value, f = r.getStackName ? r.getStackName() : "default",
                        e = s >= 0 ? "positive" : "negative", o;
                    i[e][f] = i[e][f] || {}, o = i[e][f], u[n].normalizeValue(o[t.argument.valueOf()])
                })
            })
        }, u = function (n) {
            return n.interval = n.rotated ? n.translator.getIntervalY() : n.translator.getIntervalX()
        };
        return {ctor: f, add: e}
    }())
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.charts, i = r.series, u = t.viz.renderers;
    r.factory = function () {
        var n = function (n, t, r, u) {
            u = u || {}, u.specificType = null, n = (n || "").toLowerCase();
            switch (n.toLowerCase()) {
                case"line":
                    return new i.LineSeries(t, r, u);
                case"fullstackedline":
                    return u.specificType = "fullstackedline", new i.LineSeries(t, r, u);
                case"stackedline":
                    return u.specificType = "stackedline", new i.LineSeries(t, r, u);
                case"area":
                    return new i.AreaSeries(t, r, u);
                case"fullstackedarea":
                    return u.specificType = "fullstackedarea", new i.AreaSeries(t, r, u);
                case"stackedarea":
                    return u.specificType = "stackedarea", new i.AreaSeries(t, r, u);
                case"bar":
                    return new i.BarSeries(t, r, u);
                case"fullstackedbar":
                    return u.specificType = "fullstackedbar", new i.BarSeries(t, r, u);
                case"stackedbar":
                    return u.specificType = "stackedbar", new i.BarSeries(t, r, u);
                case"spline":
                    return new i.SplineSeries(t, r, u);
                case"splinearea":
                    return new i.SplineAreaSeries(t, r, u);
                case"scatter":
                    return new i.ScatterSeries(t, r, u);
                case"candlestick":
                    return new i.CandleStickSeries(t, r, u);
                case"stock":
                    return new i.StockSeries(t, r, u);
                case"rangearea":
                    return new i.RangeAreaSeries(t, r, u);
                case"rangebar":
                    return new i.RangeBarSeries(t, r, u);
                case"pie":
                    return new i.PieSeries(t, r, u);
                case"doughnut":
                case"donut":
                    return u.specificType = "doughnut", new i.PieSeries(t, r, u);
                case"stepline":
                    return new i.StepLineSeries(t, r, u);
                case"steparea":
                    return new i.StepAreaSeries(t, r, u);
                default:
                    return null
            }
        }, f = function (n) {
            return new i.SeriesFamily(n)
        }, e = function (n, t) {
            return new r.Axis(n, t)
        }, o = function (n) {
            return new u.Renderer(n)
        }, s = function (n, t) {
            return new r.ThemeManager(n, t)
        }, h = function (n) {
            return new r.Legend(n)
        }, c = function (n) {
            return new r.Tooltip(n)
        }, l = function (n) {
            return new r.LayoutManager(n)
        }, a = function () {
            return t.viz.core.tickProvider
        };
        return {
            createSeries: n,
            createSeriesFamily: f,
            createAxis: e,
            getAxisTickProvider: a,
            createRenderer: o,
            createThemeManager: s,
            createLegend: h,
            createTooltip: c,
            createChartLayoutManager: l
        }
    }()
}(jQuery, DevExpress), function (n, t) {
    var s = t.viz.charts, i = s.series.consts.events, h = t.utils, c = t.Class, u = "multiple", f = "single",
        r = "allargumentpoints", e = "allseriespoints",
        p = window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints, l = 1e3, a = 600, v = 400,
        o = "none", y = c.inherit({
            ctor: function (n) {
                n.events = n.events || {}, this.container = n.container, this.storedSeries = n.series || [], this.argumentAxis = n.argumentAxis || [], this.pointSelectionMode = this._prepareMode(n.pointSelectionMode), this.seriesSelectionMode = this._prepareMode(n.seriesSelectionMode), this.hoverStartDelay = 100, this.hoverHoldDelay = 200, this.sensitivity = 7, this.pointSelectionMode === u ? (this._releaseSelectedPoint = this._releaseSelectedPointMultiMode, this.selectedPoint = []) : this._releaseSelectedPoint = this._releaseSelectedPointSingleMode, this.seriesSelectionMode === u ? (this._releaseSelectedSeries = this._releaseSelectedSeriesMultiMode, this.selectedSeries = []) : this._releaseSelectedSeries = this._releaseSelectedSeriesSingleMode, this.seriesClick = n.events.seriesClick, this.pointClick = n.events.pointClick, this.argumentAxisClick = n.events.argumentAxisClick, this.seriesHover = n.events.seriesHover, this.seriesSelected = n.events.seriesSelected, this.pointHover = n.events.pointHover, this.pointSelected = n.events.pointSelected, this.markerTrackerGroup = n.markerTrackerGroup, this.seriesTrackerGroup = n.seriesTrackerGroup, this.seriesGroup = n.seriesGroup, this.legendGroup = n.legendGroup
            }, _prepare: function () {
                var t = this;
                n.each(t.argumentAxis, function (n, r) {
                    r.axisElementsGroup.on(i.mouseover, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisMouseOver);
                    r.axisElementsGroup.on(i.mouseout, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisMouseOut);
                    r.axisElementsGroup.on(i.mousemove, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._getCurCoords);
                    r.axisElementsGroup.on(i.touchstart, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisTouchStart);
                    r.axisElementsGroup.on(i.touchmove, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisTouchEnd);
                    r.axisElementsGroup.on(i.touchend, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisTouchEnd);
                    r.axisElementsGroup.on(i.MSPointerDown, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisTouchStart);
                    r.axisElementsGroup.on(i.MSPointerMove, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._getCurCoords);
                    r.axisElementsGroup.on(i.MSPointerUp, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisTouchEnd);
                    r.axisElementsGroup.on(i.MSPointerOver, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisMouseOver);
                    r.axisElementsGroup.on(i.MSPointerOut, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisMouseOut);
                    r.axisElementsGroup.on(i.click, {
                        tracker: t,
                        axis: r,
                        hoverMode: r.options.hoverMode
                    }, t._argumentAxisClick)
                }), t._eventHandler("seriesTrackerGroup", {tracker: t}, "series"), t._eventHandler("legendGroup", {tracker: t}, "series"), t._eventHandler("markerTrackerGroup", {tracker: t}, "point");
                t.seriesGroup.on(i.selectSeries, {tracker: t}, t._selectSeries);
                t.seriesGroup.on(i.deselectSeries, {tracker: t}, t._deselectSeries);
                t.seriesGroup.on(i.selectPoint, {tracker: t}, t._selectPoint);
                t.seriesGroup.on(i.deselectPoint, {tracker: t}, t._deselectPoint)
            }, _eventHandler: function (n, t, r) {
                var u = this;
                u[n].on(i.mouseover, t, u["_" + r + "MouseOver"]);
                u[n].on(i.mouseout, t, u["_" + r + "MouseOut"]);
                u[n].on(i.mousemove, t, u._getCurCoords);
                u[n].on(i.touchstart, t, u["_" + r + "TouchStart"]);
                u[n].on(i.touchmove, t, u["_" + r + "TouchEnd"]);
                u[n].on(i.touchend, t, u["_" + r + "TouchEnd"]);
                u[n].on(i.MSPointerDown, t, u["_" + r + "TouchStart"]);
                u[n].on(i.MSPointerMove, {tracker: u}, u._getCurCoords);
                u[n].on(i.MSPointerUp, t, u["_" + r + "TouchEnd"]);
                u[n].on(i.MSPointerOver, t, u["_" + r + "MouseOver"]);
                u[n].on(i.MSPointerOut, t, u["_" + r + "MouseOut"]);
                u[n].on(i.click, t, u["_" + r + "Click"])
            }, _setHover: function (n, t, i, r, u) {
                (t !== n.hoveredObject || (n.hoverHoldTimeOut = clearTimeout(n.hoverHoldTimeOut), r !== t.lastHoverMode)) && (n.mouseLocked || (n.hoverStartTimeOut = setTimeout(function () {
                    n._compareCoords(u, t, n, i)
                }, n.hoverStartDelay)))
            }, _releaseHover: function (n, t, r) {
                n.mouseLocked || (n.hoverStartTimeOut = clearTimeout(n.hoverStartTimeOut), t === n.hoveredObject && (n.hoverHoldTimeOut = setTimeout(function () {
                    t.off(i.mousemove), n.hoveredObject = null, r()
                }, n.hoverHoldDelay)))
            }, _prepareMode: function (n) {
                return n = (n || "").toLowerCase(), n = n !== f && n !== u ? f : n
            }, _seriesClick: function (t) {
                var i = t.data.tracker, r = n(t.target).data("series");
                i.lockClick && t.type === "click" || i.seriesClick && i.seriesClick.call && i.seriesClick.call(r, r)
            }, _pointClick: function (t) {
                var i = t.data.tracker, r = n(t.target).data("point"), u = r.series;
                if (!i.lockClick || t.type !== "click") {
                    if (i.pointClick && i.pointClick.call && i.pointClick != n.noop) {
                        i.pointClick.call(r, r);
                        return
                    }
                    i.seriesClick && i.seriesClick.call && i.seriesClick.call(u, u);
                    return
                }
            }, _argumentAxisClick: function (t) {
                var i = t.data.tracker, r, u = t.data.axis;
                (r = t.target.tagName === "tspan" ? n(t.target).parent().data("argument") : n(t.target).data("argument"), i.lockClick && t.type === "click") || i.argumentAxisClick && i.argumentAxisClick.call && i.argumentAxisClick.call(u, u, r)
            }, _argumentAxisMouseOver: function (t) {
                var i = t.data.tracker, u, e = t.data.hoverMode, f, s = t.data.axis, h;
                u = t.target.tagName === "tspan" ? n(t.target).parent().data("argument") : n(t.target).data("argument"), f = e === r ? e : o, h = function () {
                    i.mouseLocked || (i._clearHover(i), n.each(i.storedSeries, function (n, t) {
                        var i = t.getPointByArg(u);
                        i && t.setPointHoverState(i)
                    }), i.hoveredArgument = u, n(s).trigger("testmousehoveraxis"))
                }, i.hoveredArgument !== u && f === r && i._setHover(i, s, h, f, t)
            }, _argumentAxisMouseOut: function (t) {
                var u = t.data.tracker, f, o = t.data.hoverMode, e = t.data.axis;
                (f = t.target.tagName === "tspan" ? n(t.target).parent().data("argument") : n(t.target).data("argument"), u.mouseLocked) || (u.hoverStartTimeOut = clearTimeout(u.hoverStartTimeOut), o === r && u.hoveredObject === e) && (n.each(u.storedSeries, function (n, t) {
                    var i = t.getPointByArg(f);
                    i && t.releasePointHoverState(i)
                }), u.hoveredObject = null, u.hoveredArgument = null, e.off(i.mousemove))
            }, _argumentAxisTouchStart: function (n) {
                var t = n.data.tracker;
                t._mouseLock(t)
            }, _argumentAxisTouchEnd: function (t) {
                var i = t.data.tracker, r, u = t.data.axis;
                r = t.target.tagName === "tspan" ? n(t.target).parent().data("argument") : n(t.target).data("argument"), i._clearHover(i), i._argumentAxisClick(t, u, r), i._clickLock(i)
            }, _seriesMouseOver: function (t) {
                if (n(t.target).data("series")) {
                    var i = t.data.tracker, u = n(t.target).data("series"),
                        r = n(t.target).data("mode") || u.options.hoverMode, f = function (n, t) {
                            i.mouseLocked || i._setHoveredSeries(t, r)
                        };
                    r !== "none" && i._setHover(i, u, f, r, t)
                }
            }, _seriesMouseOut: function (t) {
                if (n(t.target).data("series")) {
                    var i = t.data.tracker, r = n(t.target).data("series"), f = r.options.hoverMode, u = function () {
                        i._clearHover(i)
                    };
                    i._releaseHover(i, r, u)
                }
            }, _seriesTouchStart: function (t) {
                if (n(t.target).data("series")) {
                    var i = t.data.tracker;
                    i._mouseLock(i)
                }
            }, _seriesTouchEnd: function (t) {
                if (n(t.target).data("series")) {
                    var i = t.data.tracker, r = n(t.target).data("series");
                    i._seriesClick(t, r), i._clearHover(i), i._clickLock(i)
                }
            }, _selectSeries: function (n, t) {
                var i = n.data.tracker, r = n.target;
                i._setSelectedSeries(r, t)
            }, _deselectSeries: function (n, t) {
                var i = n.data.tracker, r = n.target;
                i._releaseSelectedSeries(r, t)
            }, _selectPoint: function (n, t) {
                var i = n.data.tracker, r = n.target;
                i._setSelectedPoint(t)
            }, _deselectPoint: function (n, t) {
                var i = n.data.tracker, r = n.target;
                i._releaseSelectedPoint(t)
            }, _pointMouseOver: function (t) {
                var i = t.data.tracker, e = i && i.tooltip, u = n(t.target).data("point"), f = u.options.hoverMode, o;
                if (f === r && i.hoveredPoint && i.hoveredPoint.argument === u.argument) {
                    i.hoverHoldTimeOut = clearTimeout(i.hoverHoldTimeOut), i._setHoveredPoint(u), i.hoveredObject = u, e && e.hide(), i.tooltip && i._showTooltip(t, u);
                    return
                }
                o = function (n, t) {
                    i.mouseLocked || (f !== "none" && i._setHoveredPoint(t), i.tooltip && i._showTooltip(n, t))
                }, (i.tooltip || f !== "none") && i._setHover(i, u, o, f, t)
            }, _pointMouseOut: function (t) {
                var i = t.data.tracker, r = n(t.target).data("point"), u = function () {
                    i._clearHover(i)
                };
                i._releaseHover(i, r, u)
            }, _pointTouchStart: function (t) {
                var i = t.data.tracker, r = n(t.target).data("point");
                i.showHoldTooltip = !1, i._mouseLock(i), i.tooltip && (i.tooltipHoldTimeout = setTimeout(function () {
                    i.showHoldTooltip = !0, i._showTooltip(t, r)
                }, v))
            }, _pointTouchEnd: function (t) {
                var i = t.data.tracker, r = n(t.target).data("point"), u = i && i.tooltip;
                clearTimeout(i.tooltipHoldTimeout), i.showHoldTooltip || i._pointClick(t, r), i._clearHover(i), i._clickLock(i)
            }, _showTooltip: function (n, t) {
                var i = n.data.tracker.tooltip, f = t.getTooltipFormatObject(i), r, u;
                h.isDefined(f.valueText) && (r = t.getTooltipCoords(), u = i.formatTooltip.call(f, i.options), h.isDefined(u)) && (i.show(), i.move(~~r.x, ~~r.y, r.offset, u, t.getColor(), t.getClassName()))
            }, _setHoveredSeries: function (n, t) {
                var i = this;
                (i.hoveredSeries !== n || n.lastHoverMode !== t) && (i._clearHover(i), i.hoveredSeries = n, n.setHoverState(t), i.seriesHover && i.seriesHover.call && i.seriesHover.call(n, n))
            }, _setSelectedSeries: function (t, i) {
                var r = this, e = !1;
                this.seriesSelectionMode === u ? n.each(r.selectedSeries, function (n, i) {
                    if (i == t) return e = !0, !1
                }) : r.selectedSeries == t && (e = !0), e && t.lastSelectionMode === i || (r.seriesSelectionMode === f ? (this._releaseSelectedSeries(), r.selectedSeries = t) : r.selectedSeries.push(t), t.setSelectedState(i), r.seriesSelected && r.seriesSelected.call && r.seriesSelected.call(t, t))
            }, _setHoveredPoint: function (t) {
                var i = this;
                i.hoveredPoint !== t && (i._clearHover(i), i.hoveredPoint = t, t.series && t.options.hoverMode === e ? n.each(t.series.points, function (n, t) {
                    t.series.setPointHoverState(t)
                }) : t.options.hoverMode === r ? n.each(i.storedSeries, function (n, i) {
                    var r = i.getPointByArg(t.argument);
                    r && i.setPointHoverState(r)
                }) : t.setHoverState(), i.pointHover && i.pointHover.call && i.pointHover.call(t, t))
            }, _setSelectedPoint: function (t) {
                var i = this, f = !1;
                if (this.pointSelectionMode === u ? (n.each(i.selectedPoint, function (n, i) {
                        if (i == t) return f = !0, !1
                    }), f || i.selectedPoint.push(t)) : i.selectedPoint !== t ? (this._releaseSelectedPoint(), i.selectedPoint = t) : f = !0, !f) {
                    switch (t.options.selectionMode) {
                        case r:
                            n.each(i.storedSeries, function (n, i) {
                                var r = i.getPointByArg(t.argument);
                                r && i.setPointSelectedState(r)
                            });
                            break;
                        case e:
                            n.each(t.series.points, function (n, t) {
                                t.series.setPointSelectedState(t)
                            });
                            break;
                        case o:
                            break;
                        default:
                            t.setSelectedState()
                    }
                    i.pointSelected && i.pointSelected.call && i.pointSelected.call(t, t)
                }
            }, _releaseHoveredSeries: function () {
                this.hoveredSeries && (this.hoveredSeries.releaseHoverState(), this.hoveredSeries = null)
            }, _releaseSelectedSeriesMultiMode: function (t) {
                this.selectedSeries && (t.releaseSelectedState(), this.selectedSeries = n.map(this.selectedSeries, function (n) {
                    if (n !== t) return n
                }))
            }, _releaseSelectedSeriesSingleMode: function () {
                this.selectedSeries && (this.selectedSeries.releaseSelectedState(), this.selectedSeries = null)
            }, _releaseHoveredPoint: function () {
                var t = this, u = t && t.tooltip, i = t.hoveredPoint;
                (u && !t.showHoldTooltip && u.hide(), i) && (i.options.hoverMode === e ? n.each(i.series.points, function (n, t) {
                    t.series.releasePointHoverState(t)
                }) : i.options.hoverMode === r ? n.each(t.storedSeries, function (n, t) {
                    var r = t.getPointByArg(i.argument);
                    r && t.releasePointHoverState(r)
                }) : i.releaseHoverState(), t.hoveredPoint = null)
            }, _releaseSelectedPointMultiMode: function (t) {
                var i = this, u = i.selectedPoint;
                if (u) {
                    switch (t.options.selectionMode) {
                        case r:
                            n.each(i.storedSeries, function (n, i) {
                                var r = i.getPointByArg(t.argument);
                                r && i.releasePointSelectedState(r)
                            });
                            break;
                        case e:
                            n.each(t.series.points, function (n, t) {
                                t.series.releasePointSelectedState(t)
                            });
                            break;
                        case o:
                            break;
                        default:
                            t.releaseSelectedState()
                    }
                    this.selectedPoint = n.map(this.selectedPoint, function (n) {
                        if (n !== t) return n
                    })
                }
            }, _releaseSelectedPointSingleMode: function () {
                var i = this, t = i.selectedPoint;
                if (t) {
                    switch (t.options.selectionMode) {
                        case r:
                            n.each(i.storedSeries, function (n, i) {
                                var r = i.getPointByArg(t.argument);
                                r && i.releasePointSelectedState(r)
                            });
                            break;
                        case e:
                            n.each(t.series.points, function (n, t) {
                                t.series.releasePointSelectedState(t)
                            });
                            break;
                        case o:
                            break;
                        default:
                            t.releaseSelectedState()
                    }
                    this.selectedPoint = null
                }
            }, clearSelection: function () {
                var t = this;
                this.pointSelectionMode === f ? this._releaseSelectedPoint() : n.each(this.selectedPoint, function (n, i) {
                    t._releaseSelectedPoint(i)
                }), this.seriesSelectionMode === f ? this._releaseSelectedSeries() : n.each(this.selectedSeries, function (n, i) {
                    t._releaseSelectedSeries(i)
                })
            }, _compareCoords: function (n, t, i, r) {
                if (i.hoverStartTimeOut = clearTimeout(i.hoverStartTimeOut), Math.abs(i.pX - i.cX) + Math.abs(i.pY - i.cY) < i.sensitivity) {
                    if (i.hoverHoldTimeOut = clearTimeout(i.hoverHoldTimeOut), i.mouseLocked) return;
                    i.hoveredObject = t, r(n, t)
                } else i.pX = i.cX, i.pY = i.cY, i.hoverStartTimeOut = setTimeout(function () {
                    i._compareCoords(n, t, i, r)
                }, i.hoverStartDelay)
            }, _mouseLock: function (n) {
                n.unlockMouseTimer && clearTimeout(n.unlockMouseTimer), n.mouseLocked = !0, n.unlockMouseTimer = setTimeout(function () {
                    n.mouseLocked = !1
                }, l)
            }, _clickLock: function (n) {
                n.lockClick = !0, n.lockClickTimer && clearTimeout(n.lockClickTimer), n.lockClickTimer = setTimeout(function () {
                    n.lockClick = !1
                }, a)
            }, _getCurCoords: function (n) {
                var t = n.data.tracker;
                t.cX = n.pageX, t.cY = n.pageY
            }, _clearHover: function (n) {
                n._releaseHoveredSeries(), n._releaseHoveredPoint()
            }
        });
    s.Tracker = y
}(jQuery, DevExpress), function (n) {
    n.viz.gauges = {__internals: {circularNeedles: {}, circularMarkers: {}, linearNeedles: {}, linearMarkers: {}}}
}(DevExpress), function (n, t) {
    var e = n.viz.gauges, h = n.viz.renderers, i = e.__internals, u = i.circularNeedles, o = i.circularMarkers,
        f = i.linearNeedles, s = i.linearMarkers, r = n.utils.isString;
    e.__factory = {
        createTranslator: function (t, i, r, u) {
            return new n.viz.core.Translator1D(r, u, t, i)
        }, createRenderer: function (n) {
            return new h.Renderer(n)
        }, createCircularNeedle: function (n) {
            if (r(n)) switch (n.toLowerCase()) {
                case"rectangle":
                    return new u.RectangleNeedle;
                case"twocolorrectangle":
                    return new u.TwoColorRectangleNeedle;
                case"triangle":
                    return new u.TriangleNeedle
            }
            return t
        }, createLinearNeedle: function (n) {
            if (r(n)) switch (n.toLowerCase()) {
                case"rectangle":
                    return new f.RectangleNeedle;
                case"rhombus":
                    return new f.RhombusNeedle;
                case"circle":
                    return new f.CircleNeedle
            }
            return t
        }, createCircularMarker: function (n) {
            if (r(n)) switch (n.toLowerCase()) {
                case"triangle":
                    return new o.TriangleMarker;
                case"textcloud":
                    return new o.TextCloudMarker
            }
            return t
        }, createLinearMarker: function (n) {
            if (r(n)) switch (n.toLowerCase()) {
                case"triangle":
                    return new s.TriangleMarker;
                case"textcloud":
                    return new s.TextCloudMarker
            }
            return t
        }, createCircularRangeBar: function () {
            return new i.CircularRangeBar
        }, createLinearRangeBar: function () {
            return new i.LinearRangeBar
        }, createCircularScale: function () {
            return new i.CircularScale
        }, createLinearScale: function () {
            return new i.LinearScale
        }, createCircularRangeContainer: function () {
            return new i.CircularRangeContainer
        }, createLinearRangeContainer: function () {
            return new i.LinearRangeContainer
        }, createCircularSpindle: function () {
            return new i.CircularSpindle
        }, createTitle: function () {
            return new i.Title
        }, createIndicator: function () {
            return i.Indicator && new i.Indicator || null
        }, createTooltip: function () {
            return new i.Tooltip
        }, createLayoutManager: function () {
            return new i.LayoutManager
        }, createThemeManager: function (n) {
            return new i.ThemeManager(n)
        }, createPresetManager: function () {
            return new i.PresetManager
        }, createTracker: function () {
            return new i.Tracker
        }
    }
}(DevExpress), function (n, t) {
    var r = t.extend;
    n.viz.gauges.__internals.BaseGaugeItem = n.Class.inherit({
        ctor: function () {
            this._options = {}
        }, _getDefaultOptions: function () {
            return {}
        }, create: function (n) {
            var t = this;
            return t._renderer = n.renderer, t._rootElement = t._renderer.createGroup().append(n.ownerElement), r(!0, t._options, t._getDefaultOptions(), n), t._create(n), t
        }, update: function (n) {
            var t = this;
            return r(!0, t._options, n), t._update(n), t
        }, showTooltip: function (n, t, i) {
            n && n.$element && n.$element.trigger("showToolTip", [t, i])
        }, hideTooltip: function (n) {
            n && n.$element && n.$element.trigger("hideToolTip")
        }, destroy: function () {
            return this._rootElement.remove(), this
        }
    })
}(DevExpress, jQuery), function (n, t, i) {
    function h(n, t) {
        var i = 0, r = t.length - 1, e = t[i] - t[r] < 0, u, f = -1;
        for (t[i] === n && (f = i), t[r] === n && (f = r); f < 0 && i <= r;) u = ~~((i + r) / 2), t[u] === n ? f = u : t[u] - n < 0 === e ? i = u + 1 : r = u - 1;
        return f
    }

    function rt(n, t) {
        var i, r, f;
        return n > t && (f = t, t = n, n = f), i = 0 <= n && n <= 180 ? u(90 - n) : u(270 - n), i = n < 90 && 90 < t || n < 270 && 270 < t ? 0 : i, r = 0 < t && t < 180 ? u(90 - t) : u(270 - t), i < r ? i : r
    }

    var p = n.formatHelper, c = n.utils.getCosAndSin, l = n.utils.normalizeAngle,
        w = n.utils.convertAngleToRendererSpace, a = n.utils.isDefined, v = n.utils.isString, b = n.utils.isFunction,
        e = n.utils.isArray, k = window.isNaN, r = window.Number, d = window.String, o = Math.max, ut = Math.min,
        u = Math.abs, g = Math.atan, nt = Math.acos, y = Math.ceil, tt = t.extend, f = t.map, s = Math.PI,
        it = n.viz.core.tickProvider;
    n.viz.gauges.__internals.BaseScale = n.Class.inherit({
        setup: function (n) {
            var t = this;
            return t._renderer = n.renderer, t._owner = n.owner, t._incidentOccured = n.incidentOccured, t
        }, init: function (n) {
            var t = this;
            return t._options = tt(!0, t._options || {}, n), t._options.majorTick || (t._options.majorTick = {}), t._options.minorTick || (t._options.minorTick = {}), n && n.majorTick && a(n.majorTick.customTickValues) && (t._options.majorTick.customTickValues = e(n.majorTick.customTickValues) ? n.majorTick.customTickValues.slice(0) : null), n && n.minorTick && a(n.minorTick.customTickValues) && (t._options.minorTick.customTickValues = e(n.minorTick.customTickValues) ? n.minorTick.customTickValues.slice(0) : null), delete t._processed, t
        }, _getCustomValues: function (n, t) {
            var u = this._options.translator, i = [];
            return e(n) && (i = f(n, function (n) {
                return k(u.translate(n)) ? null : r(n)
            }).sort(t), i = f(i, function (n, t) {
                return n !== i[t - 1] ? n : null
            })), i
        }, _getTicks: function () {
            var u = this, n = u._options, s = n.translator, y = s.getDomainStart(), p = s.getDomainEnd(),
                l = y < p ? function (n, t) {
                    return n - t
                } : function (n, t) {
                    return t - n
                }, w = u._getGridSpacingFactor(), a, t, e, o, c, b, v = {};
            return a = it.getFullTicks(y, p, u._getScreenDelta(), {
                tickInterval: n.majorTick.tickInterval > 0 ? r(n.majorTick.tickInterval) : i,
                gridSpacingFactor: w.majorTicks,
                numberMultipliers: [1, 2, 5]
            }, {
                tickInterval: n.minorTick.tickInterval > 0 ? r(n.minorTick.tickInterval) : i,
                gridSpacingFactor: w.minorTicks,
                numberMultipliers: [1, 2, 5]
            }), n.majorTick.showCalculatedTicks ? (t = a.majorTicks, n.majorTick.useTicksAutoArrangement && (t = u._cutTicks(t))) : t = [], o = u._getCustomValues(n.majorTick.customTickValues, l), o = f(o, function (n) {
                return h(n, t) === -1 ? n : null
            }), e = n.minorTick.showCalculatedTicks ? a.minorTicks : [], e = f(e, function (n) {
                return h(n, o) === -1 ? n : null
            }), c = u._getCustomValues(n.minorTick.customTickValues, l), b = t.concat(e, o).sort(l), c = f(c, function (n) {
                return h(n, b) === -1 ? n : null
            }), v.major = f(t.concat(o), function (n) {
                return {value: n, position: s.translate(n)}
            }), v.minor = f(e.concat(c), function (n) {
                return {value: n, position: s.translate(n)}
            }), v
        }, _cutTicks: function (n) {
            for (var t = this, u = t._getCuttingFactor(n.length, {
                width: t._textWidth,
                height: t._textHeight
            }), r = [], i = 0, f = n.length; i < f; i += u) r.push(n[i]);
            return r
        }, _renderContent: function (n) {
            var t = this, r = t._options, i, u, e, f, o, h, c, l, s;
            if (t._majorTickLength && t._majorTickWidth) for (h = v(r.majorTick.color) ? r.majorTick.color : "none", f = t._getTickPoints(t._majorTickLength, t._majorTickWidth), i = 0, u = n.major.length, r.hideFirstTick === !0 && ++i, r.hideLastTick === !0 && --u; i < u; ++i) e = n.major[i], o = t._renderer.createArea(f, {
                "class": "dx-major-tick",
                fill: h,
                stroke: "none",
                strokeWidth: 0
            }), t._moveTick(o, e), o.append(t._majorTicks);
            if (t._minorTickLength && t._minorTickWidth) for (c = v(r.minorTick.color) ? r.minorTick.color : "none", f = t._getTickPoints(t._minorTickLength, t._minorTickWidth), i = 0, u = n.minor.length; i < u; ++i) e = n.minor[i], o = t._renderer.createArea(f, {
                "class": "dx-minor-tick",
                fill: c,
                stroke: "none",
                strokeWidth: 0
            }), t._moveTick(o, e), o.append(t._minorTicks);
            if (t._textIndent) for (l = t._getLabelPosition(t._majorTickLength || 0, t._textIndent), i = 0, u = n.major.length, r.hideFirstLabel === !0 && ++i, r.hideLastLabel === !0 && --u; i < u; ++i) e = n.major[i], s = t._formatValue(e.value), f = t._getLabelOptions(s, l, t._textIndent, e), t._renderer.createText(s, f.x, f.y + t._textVerticalOffset, {
                "class": "dx-gauge-scale-label",
                align: f.align,
                font: r.label.font
            }).append(t._labels)
        }, _processOptions: function () {
            var n = this, t = n._options;
            n._processed || (n._processed = !0, n._setupOrientation(), t.majorTick.visible && (t.majorTick.length > 0 ? n._majorTickLength = r(t.majorTick.length) : n._incidentOccured('Major ticks are not rendered because the value of "majorTick.length" option is not valid'), t.majorTick.width > 0 ? n._majorTickWidth = r(t.majorTick.width) : n._incidentOccured('Major ticks are not rendered because the value of "majorTick.width" option is not valid')), t.minorTick.visible && (t.minorTick.length > 0 ? n._minorTickLength = r(t.minorTick.length) : n._incidentOccured('Minor ticks are not rendered because the value of "minorTick.length" option is not valid'), t.minorTick.width > 0 ? n._minorTickWidth = r(t.minorTick.width) : n._incidentOccured('Minor ticks are not rendered because the value of "minorTick.width" option is not valid')), t.label.visible && (r(t.label.indentFromTick) !== 0 ? (n._textIndent = r(t.label.indentFromTick), n._measureText()) : n._incidentOccured('Labels are not rendered because the value of the "label.indentFromTick" option is not valid')))
        }, render: function () {
            var n = this, t;
            return n._rootElement || (n._rootElement = n._renderer.createGroup({"class": "scale"}), n._majorTicks = n._renderer.createGroup({"class": "dx-major-ticks"}).append(n._rootElement), n._minorTicks = n._renderer.createGroup({"class": "dx-minor-ticks"}).append(n._rootElement), n._labels = n._renderer.createGroup({"class": "labels"}).append(n._rootElement)), n._rootElement.append(n._owner), n._majorTicks.clear(), n._minorTicks.clear(), n._labels.clear(), n._processOptions(), n._isVisible() ? (t = n._getTicks(), n._renderContent(t)) : n._rootElement && (n._rootElement.remove(), delete n._rootElement, delete n._majorTicks, delete n._minorTicks, delete n._labels), n
        }, _formatValue: function (n) {
            var i = this._options.label, t = p.format(n, i.format, i.precision);
            return b(i.customizeText) && (t = {value: n, valueText: t}, t = d(i.customizeText.call(t, t))), t
        }, _getSampleText: function () {
            var n = this, t = n._formatValue(n._options.translator.getDomainStart()),
                i = n._formatValue(n._options.translator.getDomainEnd());
            return t.length >= i.length ? t : i
        }, _measureText: function () {
            var n = this, i = n._renderer.createGroup({"class": "scale"}).append(n._rootElement),
                u = n._renderer.createGroup({"class": "labels"}).append(i), r = n._getSampleText(),
                f = n._renderer.createText(r, 0, 0, {
                    "class": "dx-gauge-scale-label",
                    align: "center",
                    font: n._options.label.font
                }).append(u), t = f.getBBox();
            i.remove(), n._textVerticalOffset = -t.y - t.height / 2, n._textWidth = t.width, n._textHeight = t.height, n._textLength = r.length
        }
    }), n.viz.gauges.__internals.CircularScale = n.viz.gauges.__internals.BaseScale.inherit({
        _getGridSpacingFactor: function () {
            return {majorTicks: 17, minorTicks: 5}
        }, _getScreenDelta: function () {
            var n = this._options;
            return (n.translator.getCodomainStart() - n.translator.getCodomainEnd()) * n.radius * s / 180
        }, _getCuttingFactor: function (n, t) {
            var i = this, w = i._options, b = w.translator.getCodomainStart(), k = w.translator.getCodomainEnd(),
                f = i._getLabelPosition(i._majorTickLength || 0, i._textIndent), e = rt(l(b), l(k)), h = c(e),
                d = (b - k) / n, a, v, tt, p, r, it = 1;
            return tt = (h.sin * f + t.width) / (h.cos * f), v = u(e - g(tt) * 180 / s), r = h.cos - t.height / f, p = -1 > r || r > 1 ? 90 : u(e - nt(r) * 180 / s), a = v < p ? v : p, d < a && (it = y(a / d)), o(1, it)
        }, _setupOrientation: function () {
            var n = this, t = 0, i = 0;
            switch (n._options.orientation) {
                case"inside":
                    t = 1;
                    break;
                case"center":
                    t = i = .5;
                    break;
                default:
                    n._options.orientation !== "outside" && n._incidentOccured('The value of the "orientation" option is not valid'), i = 1
            }
            n._inner = t, n._outer = i
        }, _getTickPoints: function (n, t) {
            var i = this._options, r = i.x - t / 2, u = i.x + t / 2, f = i.y - i.radius - n * this._outer,
                e = i.y - i.radius + n * this._inner;
            return [r, f, u, f, u, e, r, e]
        }, _moveTick: function (n, t) {
            n.rotate(w(t.position), this._options.x, this._options.y)
        }, _getLabelPosition: function (n, t) {
            return this._options.radius + n * (t >= 0 ? this._outer : -this._inner) + t
        }, _getLabelOptions: function (n, t, i, r) {
            var u = this, s = u._options, f = c(r.position), e = s.x + f.cos * t, o = s.y - f.sin * t,
                h = f.cos * (n.length / u._textLength) * u._textWidth / 2, l = f.sin * u._textHeight / 2;
            return i > 0 ? (e += h, o -= l) : (e -= h, o += l), {x: e, y: o, align: "center"}
        }, _isVisible: function () {
            var n = this, t = n._majorTickLength || 0, i = n._options.radius, r = i - n._inner * t,
                u = i + n._outer * t;
            return r > 0 && u > r
        }, measure: function () {
            var n = this, i = n._options, t = {min: i.radius, max: i.radius};
            return n._processOptions(), n._majorTickLength && (t.min -= n._inner * n._majorTickLength, t.max += n._outer * n._majorTickLength), n._textIndent && (n._textIndent >= 0 ? (t.horizontalOffset = n._textIndent + n._textWidth, t.verticalOffset = n._textIndent + n._textHeight) : (t.horizontalOffset = 0, t.verticalOffset = 0, t.min += n._textIndent - o(n._textWidth, n._textHeight)), t.inverseHorizontalOffset = n._textWidth / 2, t.inverseVerticalOffset = n._textHeight / 2), t
        }
    }), n.viz.gauges.__internals.LinearScale = n.viz.gauges.__internals.BaseScale.inherit({
        _getGridSpacingFactor: function () {
            return {majorTicks: 25, minorTicks: 5}
        }, _getScreenDelta: function () {
            return u(this._options.translator.getCodomainEnd() - this._options.translator.getCodomainStart())
        }, _getCuttingFactor: function (n, t) {
            var i = this._options, r = this._vertical ? t.height : t.width,
                f = u(i.translator.getCodomainEnd() - i.translator.getCodomainStart());
            return o(1, y(n * r / (f + r)))
        }, _setupOrientation: function () {
            var n = this, t = 0, i = 0;
            if (n._vertical = n._options.orientation === "vertical", n._vertical) switch (n._options.horizontalOrientation) {
                case"left":
                    t = 1;
                    break;
                case"center":
                    t = i = .5;
                    break;
                default:
                    n._options.horizontalOrientation !== "right" && n._incidentOccured('The value of the "horizontalOrientation" option is not valid'), i = 1
            } else switch (n._options.verticalOrientation) {
                case"top":
                    t = 1;
                    break;
                case"middle":
                    t = i = .5;
                    break;
                default:
                    n._options.verticalOrientation !== "bottom" && n._incidentOccured('The value of the "verticalOrientation" option is not valid'), i = 1
            }
            n._inner = t, n._outer = i
        }, _getTickPoints: function (n, t) {
            var i = this._options, r, u, f, e;
            return this._vertical ? (r = i.x - n * this._inner, u = i.x + n * this._outer, f = -t / 2, e = t / 2) : (r = -t / 2, u = t / 2, f = i.y - n * this._inner, e = i.y + n * this._outer), [r, f, u, f, u, e, r, e]
        }, _moveTick: function (n, t) {
            var u = this._options, i = 0, r = 0;
            this._vertical ? r = t.position : i = t.position, n.move(i, r)
        }, _getLabelPosition: function (n, t) {
            var r = this._options, i = n * (t >= 0 ? this._outer : -this._inner) + t;
            return i += this._vertical ? r.x : r.y + (t >= 0 ? 1 : -1) * this._textVerticalOffset
        }, _getLabelOptions: function (n, t, i, r) {
            var u, f, e;
            return this._vertical ? (u = t, f = r.position, e = i > 0 ? "left" : "right") : (u = r.position, f = t, e = "center"), {
                x: u,
                y: f,
                align: e
            }
        }, _isVisible: function () {
            return !0
        }, measure: function () {
            var n = this, i = n._options, t;
            return n._processOptions(), n._vertical ? (t = {
                min: i.x,
                max: i.x
            }, n._majorTickLength && (t.min -= n._inner * n._majorTickLength, t.max += n._outer * n._majorTickLength), n._textIndent && (n._textIndent >= 0 ? t.max += n._textIndent + n._textWidth : t.min += n._textIndent - n._textWidth, t.indent = n._textHeight / 2)) : (t = {
                min: i.y,
                max: i.y
            }, n._majorTickLength && (t.min -= n._inner * n._majorTickLength, t.max += n._outer * n._majorTickLength), n._textIndent && (n._textIndent >= 0 ? t.max += n._textIndent + n._textHeight : t.min += n._textIndent - n._textHeight, t.indent = n._textWidth / 2)), t
        }
    })
}(DevExpress, jQuery), function (n, t, i) {
    var r = n.formatHelper, u = n.utils.isFunction, f = window.isFinite, s = window.Number, e = window.String,
        o = t.extend;
    n.viz.gauges.__internals.BaseIndicator = n.viz.gauges.__internals.BaseGaugeItem.inherit({
        setup: function (n) {
            var t = this;
            return t._renderer = n.renderer, t._owner = n.owner, t._trackerOwner = n.tracker, t._options = {}, t
        }, init: function (n) {
            return o(!0, this._options, n || {}), this
        }, render: function () {
            var n = this;
            return n._actualValue = n._currentValue = n._options.translator.adjust(n._options.currentValue), n._isCurrentValueLocked = !1, delete n._setCurrentValueNext, delete n._setCurrentValueHas, n._animateStep = n._animateStep || function (t, i) {
                var r = n;
                r._updateActualValue(r._animateStart + r._animateDelta * i.pos)
            }, n._animateComplete = n._animateComplete || function () {
                var t = n;
                t._setCurrentValueHas ? (t._runAnimation(t._actualValue, t._setCurrentValueNext), t._setCurrentValueHas = !1) : (t._isCurrentValueLocked = !1, delete t._animateStart, delete t._animateDelta), t._setCurrentValueNext = i
            }, n
        }, _formatValue: function (n) {
            var t = this._options.text, i = r.format(n, t.format, t.precision), f = {value: n, valueText: i};
            return u(t.customizeText) ? e(t.customizeText.call(f, f)) : i
        }, _getActualPosition: function () {
            return this._options.translator.translate(this._actualValue)
        }, _getSampleText: function () {
            var n = this, t = n._options, i, r, u;
            return t.text && (i = n._formatValue(t.translator.getDomainStart()), r = n._formatValue(t.translator.getDomainEnd()), u = i.length >= r.length ? i : r), u
        }, _updateActualValue: function (n) {
            this._actualValue = n, this._updateActiveElements()
        }, _runAnimation: function (n, t) {
            var i = this;
            i._isCurrentValueLocked = !0, i._animateStart = n, i._animateDelta = t - n, i._rootElement.animate({fake: !0}, {
                duration: i._options.animationDuration,
                step: i._animateStep,
                complete: i._animateComplete
            })
        }, getCurrentValue: function () {
            return this._currentValue
        }, setCurrentValue: function (n) {
            var t = this, i = t._options.translator.adjust(n);
            return t._currentValue !== i && f(i) && (t._currentValue = i, t._rootElement && (t._options.animationEnabled ? t._isCurrentValueLocked ? (t._setCurrentValueNext = i, t._setCurrentValueHas = !0) : t._runAnimation(t._actualValue, i) : t._updateActualValue(i))), t._currentValue
        }
    })
}(DevExpress, jQuery), function (n, t) {
    var u = t.extend, r = n.viz.core.TextCloud;
    n.viz.gauges.__internals.BaseTextCloudMarker = n.viz.gauges.__internals.BaseIndicator.inherit({
        _updateActiveElements: function () {
            var n = this, i, t = new r, u = n._getTextCloudOptions();
            n._text.applySettings({text: n._formatValue(n._actualValue)}), i = n._text.getBBox(), t.setup({
                x: u.x,
                y: u.y,
                textWidth: i.width,
                textHeight: i.height,
                horMargin: n._options.horizontalOffset,
                verMargin: n._options.verticalOffset,
                tailLength: n._options.arrowLength,
                type: u.type
            }), n._text.applySettings({
                x: t.cx(),
                y: t.cy() + n._textVerticalOffset
            }), n._cloud.applySettings({points: t.points()})
        }, _measureText: function () {
            var n = this, t;
            n._rootElement = n._rootElement || n._renderer.createGroup({"class": "marker"}), n._rootElement.append(n._owner), n._cloud = n._cloud || n._renderer.createArea().append(n._rootElement), n._text = n._text || n._renderer.createText().append(n._rootElement), n._text.applySettings({
                x: 0,
                y: 0,
                align: "center",
                font: n._options.text.font,
                text: n._getSampleText()
            }), t = n._text.getBBox(), n._textVerticalOffset = -t.y - t.height / 2, n._textWidth = t.width, n._textHeight = t.height, n._textFullWidth = n._textWidth + 2 * n._options.horizontalOffset, n._textFullHeight = n._textHeight + 2 * n._options.verticalOffset
        }, render: function () {
            var n = this;
            return n.callBase(), n._isVisible() ? (n._measureText(), n._cloud.applySettings({
                stroke: "none",
                strokeWidth: 0,
                fill: n._options.color
            }), n._updateActiveElements()) : n.clear(), n
        }, clear: function () {
            var n = this;
            n._rootElement && (n._rootElement.remove(), delete n._rootElement, delete n._cloud, delete n._text)
        }
    })
}(DevExpress, jQuery), function (n, t, i) {
    var r = t.extend;
    n.viz.gauges.__internals.BaseRangeBar = n.viz.gauges.__internals.BaseIndicator.inherit({
        _prepare: function () {
            var n = this, t;
            n._hasText = n._isTextVisible(), n._hasText && (n._rootElement = n._rootElement || n._renderer.createGroup({"class": "rangebar"}).append(n._owner), n._text = n._text || n._renderer.createText().append(n._rootElement), n._text.applySettings({
                x: 0,
                y: 0,
                align: n._getTextAlign(),
                font: n._getFontOptions(),
                text: n._getSampleText()
            }), t = n._text.getBBox(), n._textVerticalOffset = -t.y - t.height / 2, n._textWidth = t.width, n._textHeight = t.height)
        }, _updateActiveElements: function () {
            var n = this;
            n._updateBarItemsPositions(), n._hasText && (n._text.applySettings({text: n._formatValue(n._actualValue)}), n._updateTextPosition(), n._updateLinePosition())
        }, _updateBarItems: function () {
            var n = this, t = n._options, i, r;
            n._setBarSides(), n._startPosition = t.translator.translate(t.translator.getDomainStart()), n._endPosition = t.translator.translate(t.translator.getDomainEnd()), n._basePosition = t.translator.translate(t.baseValue), n._space = n._getSpace(), i = t.backgroundColor || "none", i !== "none" && n._space > 0 ? r = t.containerBackgroundColor || "none" : (n._space = 0, r = "none"), n._backItem1.applySettings({
                fill: i,
                stroke: "none",
                strokeWidth: 0
            }), n._backItem2.applySettings({fill: i, stroke: "none", strokeWidth: 0}), n._spaceItem1.applySettings({
                fill: r,
                stroke: "none",
                strokeWidth: 0
            }), n._spaceItem2.applySettings({
                fill: r,
                stroke: "none",
                strokeWidth: 0
            }), n._mainItem.applySettings({fill: t.color, stroke: "none", strokeWidth: 0})
        }, _getSpace: function () {
            return 0
        }, _updateTextItems: function () {
            var n = this, t = n._options;
            n._isTextVisible() ? (n._hasText = !0, n._createTextItems(), n._updateText(), n._updateLine(), n._setTextItemsSides()) : (delete n._hasText, n._destroyTextItems())
        }, _isTextVisible: function () {
            return !1
        }, _createTextItems: function () {
            var n = this;
            n._line || (n._line = n._renderer.createPath().append(n._rootElement)), n._text || (n._text = n._renderer.createText().append(n._rootElement))
        }, _destroyTextItems: function () {
            var n = this;
            n._line && n._line.remove() && delete n._line, n._text && n._text.remove() && delete n._text
        }, _updateText: function () {
            var n = this, t;
            n._text.applySettings({
                x: 0,
                y: 0,
                align: n._getTextAlign(),
                font: n._getFontOptions(),
                text: n._getSampleText()
            }), t = n._text.getBBox(), n._textVerticalOffset = -t.y - t.height / 2, n._textWidth = t.width, n._textHeight = t.height
        }, _getTextAlign: function () {
            return i
        }, _getFontOptions: function () {
            var t = this._options, n = t.text.font;
            return n && n.color || (n = r({}, n, {color: t.color})), n
        }, _updateLine: function () {
            var n = this;
            n._line.applySettings({fill: n._options.color, stroke: "none", strokeWidth: 0})
        }, _updateBarItemsPositions: function () {
            var n = this, t = n._getPositions();
            n._backItem1.applySettings(n._buildItemSettings(t.start, t.back1)), n._backItem2.applySettings(n._buildItemSettings(t.back2, t.end)), n._spaceItem1.applySettings(n._buildItemSettings(t.back1, t.main1)), n._spaceItem2.applySettings(n._buildItemSettings(t.main2, t.back2)), n._mainItem.applySettings(n._buildItemSettings(t.main1, t.main2))
        }, render: function () {
            var n = this;
            return n.callBase(), n._isVisible() ? (n._prepare(), n._rootElement = n._rootElement || n._renderer.createGroup({"class": "rangebar"}), n._rootElement.append(n._owner), n._backItem1 = n._backItem1 || n._createBarItem(), n._backItem2 = n._backItem2 || n._createBarItem(), n._spaceItem1 = n._spaceItem1 || n._createBarItem(), n._spaceItem2 = n._spaceItem2 || n._createBarItem(), n._mainItem = n._mainItem || n._createBarItem(), n._updateBarItems(), n._updateTextItems(), n._updateActiveElements()) : n.clear(), n
        }, clear: function () {
            var n = this;
            n._rootElement && (n._rootElement.remove(), delete n._rootElement, delete n._backItem1, delete n._backItem2, delete n._spaceItem1, delete n._spaceItem2, delete n._mainItem, delete n._hasText, n._destroyTextItems())
        }
    })
}(DevExpress, jQuery), function (n, t) {
    var r = n.viz.gauges.__internals.circularNeedles, u = n.utils.convertAngleToRendererSpace, f = t.extend;
    r.SimpleIndicator = n.viz.gauges.__internals.BaseIndicator.inherit({
        _updateActiveElements: function () {
            var n = this, t = n._options, r = n._getActualPosition(), i = u(r);
            n._rootElement.rotate(i, t.x, t.y), n._tracker.rotate(i, t.x, t.y)
        }, _isVisible: function () {
            var n = this._options;
            return n.width > 0 && n.indentFromCenter >= 0 && n.radius - n.indentFromCenter > 0
        }, _getClassName: function () {
            return "needle"
        }, _getTrackerPoints: function () {
            var n = this._options, i = n.y - n.radius, r = n.y - n.indentFromCenter || n.y,
                t = n.x - n.width / 2 || n.x, u = t + n.width || n.x;
            return [t, r, t, i, u, i, u, r]
        }, _destroy: function () {
            delete this._element
        }, render: function () {
            var n = this;
            return n.callBase(), n._isVisible() ? (n._rootElement = n._rootElement || n._renderer.createGroup({"class": n._getClassName()}), n._rootElement.append(n._owner), n._create(), n._tracker = n._tracker || n._renderer.createArea().append(n._trackerOwner), n._tracker.applySettings({
                points: n._getTrackerPoints(),
                stroke: "none",
                strokeWidth: 0,
                fill: "#000000",
                opacity: .0001
            }), n._updateActiveElements()) : n._rootElement && (n._rootElement.remove(), delete n._rootElement, n._destroy(), delete n._tracker), n
        }, measure: function () {
            var n = this._options, t = {max: n.radius};
            return n.indentFromCenter < 0 && (t.inverseHorizontalOffset = t.inverseVerticalOffset = -n.indentFromCenter), t
        }, getTrackingElement: function () {
            return this._tracker
        }, getTooltipParameters: function () {
            var t = this._options, i = n.utils.getCosAndSin(this._getActualPosition()),
                r = (t.radius + t.indentFromCenter) / 2;
            return {
                x: t.x + i.cos * r,
                y: t.y - i.sin * r,
                value: this._currentValue,
                color: t.color,
                offset: t.width / 2
            }
        }
    }), r.RectangleNeedle = r.SimpleIndicator.inherit({
        _create: function () {
            var t = this, n = t._options, r = n.y - n.radius, u = n.y - n.indentFromCenter || n.y,
                i = n.x - n.width / 2 || n.x, f = i + n.width || n.x;
            t._element = t._element || t._renderer.createArea().append(t._rootElement), t._element.applySettings({
                points: [i, u, i, r, f, r, f, u],
                stroke: "none",
                strokeWidth: 0,
                fill: n.color
            })
        }
    }), r.TriangleNeedle = r.SimpleIndicator.inherit({
        _create: function () {
            var t = this, n = t._options, r = n.y - n.radius, i = n.y - n.indentFromCenter || n.y,
                u = n.x - n.width / 2 || n.x, f = n.x + n.width / 2 || n.x;
            t._element = t._element || t._renderer.createArea().append(t._rootElement), t._element.applySettings({
                points: [u, i, n.x, r, f, i],
                stroke: "none",
                strokeWidth: 0,
                fill: n.color
            })
        }
    }), r.TwoColorRectangleNeedle = r.SimpleIndicator.inherit({
        _create: function () {
            var n = this, t = n._options, i = t.x - t.width / 2 || t.x, r = t.x + t.width / 2 || t.x,
                f = t.y - t.radius, o = t.y - t.indentFromCenter || t.y, u = f + (o - f) * t.secondFraction || f,
                e = u + t.space || u;
            n._firstElement = n._firstElement || n._renderer.createArea().append(n._rootElement), n._spaceElement = n._spaceElement || n._renderer.createArea().append(n._rootElement), n._secondElement = n._secondElement || n._renderer.createArea().append(n._rootElement), n._firstElement.applySettings({
                points: [i, o, i, e, r, e, r, o],
                "class": "dx-needle-part1",
                fill: t.color,
                stroke: "none",
                strokeWidth: 0
            }), n._spaceElement.applySettings({
                points: [i, e, i, u, r, u, r, e],
                "class": "dx-needle-hole",
                fill: t.containerBackgroundColor,
                stroke: "none",
                strokeWidth: 0
            }), n._secondElement.applySettings({
                points: [i, u, i, f, r, f, r, u],
                "class": "dx-needle-part2",
                fill: t.secondColor,
                stroke: "none",
                strokeWidth: 0
            })
        }, _destroy: function () {
            delete this._firstElement, delete this._secondElement, delete this._spaceElement
        }
    })
}(DevExpress, jQuery), function (n, t) {
    var r = n.viz.gauges.__internals.linearNeedles, u = t.extend;
    r.SimpleIndicator = n.viz.gauges.__internals.BaseIndicator.inherit({
        _updateActiveElements: function () {
            var n = this, t = n._getActualPosition() - n._zeroPosition;
            n._rootElement.move(n._vertical ? 0 : t, n._vertical ? t : 0), n._tracker.move(n._vertical ? 0 : t, n._vertical ? t : 0)
        }, _isVisible: function () {
            var n = this._options;
            return n.length > 0 && n.width > 0
        }, _getClassName: function () {
            return "needle"
        }, _getTrackerPoints: function () {
            var n = this._options, i, r, u, f, t = this._zeroPosition;
            return this._vertical ? (i = n.x - n.length / 2 || n.x, r = n.x + n.length / 2 || n.x, u = t + n.width / 2 || t, f = t - n.width / 2 || t) : (i = t - n.width / 2 || t, r = t + n.width / 2 || t, u = n.y + n.length / 2 || n.y, f = n.y - n.length / 2 || n.y), [i, u, i, f, r, f, r, u]
        }, _destroy: function () {
            delete this._element
        }, init: function (n) {
            var t = this;
            return t.callBase(n), t._vertical = t._options.orientation === "vertical", t
        }, render: function () {
            var n = this;
            return n.callBase(), n._isVisible() ? (n._zeroPosition = n._options.translator.getCodomainStart(), n._rootElement = n._rootElement || n._renderer.createGroup({"class": n._getClassName()}), n._rootElement.append(n._owner), n._create(), n._tracker = n._tracker || n._renderer.createArea().append(n._trackerOwner), n._tracker.applySettings({
                points: n._getTrackerPoints(),
                stroke: "none",
                strokeWidth: 0,
                fill: "#000000",
                opacity: .0001
            }), n._updateActiveElements()) : n._rootElement && (n._rootElement.remove(), delete n._rootElement, n._destroy(), delete n._tracker), n
        }, measure: function () {
            var n = this._options, t = this._vertical ? n.x : n.y;
            return {min: t - n.length / 2, max: t + n.length / 2}
        }, getTrackingElement: function () {
            return this._tracker
        }, getTooltipParameters: function () {
            var n = this, t = n._options, r = n._getActualPosition(),
                i = {x: r, y: r, value: n._currentValue, color: t.color, offset: t.width / 2};
            return n._vertical ? i.x = t.x : i.y = t.y, i
        }
    }), r.RectangleNeedle = r.SimpleIndicator.inherit({
        _create: function () {
            var t = this, n = t._options, i = t._zeroPosition, r, u, f, e;
            t._vertical ? (r = n.x - n.length / 2 || n.x, u = n.x + n.length / 2 || n.x, f = i + n.width / 2 || i, e = i - n.width / 2 || i) : (r = i - n.width / 2 || i, u = i + n.width / 2 || i, f = n.y + n.length / 2 || n.y, e = n.y - n.length / 2 || n.y), t._element = t._element || t._renderer.createArea().append(t._rootElement), t._element.applySettings({
                points: [r, f, r, e, u, e, u, f],
                stroke: "none",
                strokeWidth: 0,
                fill: n.color
            })
        }
    }), r.RhombusNeedle = r.SimpleIndicator.inherit({
        _create: function () {
            var n = this, t = n._options, i, r, u, f;
            n._vertical ? (i = t.x, r = n._zeroPosition, u = t.length / 2 || 0, f = t.width / 2 || 0) : (i = n._zeroPosition, r = t.y, u = t.width / 2 || 0, f = t.length / 2 || 0), n._element = n._element || n._renderer.createArea().append(n._rootElement), n._element.applySettings({
                points: [i - u, r, i, r - f, i + u, r, i, r + f],
                stroke: "none",
                strokeWidth: 0,
                fill: t.color
            })
        }
    }), r.CircleNeedle = r.SimpleIndicator.inherit({
        _create: function () {
            var n = this, t = n._options, i, r, u;
            n._vertical ? (i = t.x, r = n._zeroPosition) : (i = n._zeroPosition, r = t.y), u = t.length / 2 || 0, n._element = n._element || n._renderer.createCircle().append(n._rootElement), n._element.applySettings({
                cx: i,
                cy: r,
                r: u,
                stroke: "none",
                strokeWidth: 0,
                fill: t.color
            })
        }
    })
}(DevExpress, jQuery), function (n) {
    var i = n.viz.gauges.__internals.circularMarkers, r = n.utils.normalizeAngle,
        e = n.utils.convertAngleToRendererSpace, u = n.utils.getCosAndSin, f = Math.min;
    i.TriangleMarker = n.viz.gauges.__internals.circularNeedles.SimpleIndicator.inherit({
        _isVisible: function () {
            var n = this._options;
            return n.length > 0 && n.width > 0 && n.radius > 0
        }, _getClassName: function () {
            return "marker"
        }, _create: function () {
            var t = this, n = t._options, r = n.x, u = n.y - n.radius, e = n.width / 2 || 0, o = u - n.length || u, i;
            t._element = t._element || t._renderer.createArea([], {"class": "dx-marker-element"}).append(t._rootElement), i = {
                points: [r, u, r - e, o, r + e, o],
                stroke: "none",
                strokeWidth: 0,
                fill: n.color
            }, n.space > 0 && (i.strokeWidth = f(n.space, n.width / 4) || 0, i.stroke = i.strokeWidth > 0 ? n.containerBackgroundColor || "none" : "none"), t._element.applySettings(i)
        }, _getTrackerPoints: function () {
            var n = this._options, i = n.x - n.width / 2, r = n.x + n.width / 2, t = n.y - n.radius,
                u = t - n.length || t;
            return [i, t, i, u, r, u, r, t]
        }, measure: function () {
            var n = this._options;
            return {min: n.radius, max: n.radius + n.length || n.radius}
        }, getTooltipParameters: function () {
            var t = this._options, r = n.utils.getCosAndSin(this._getActualPosition()), u = t.radius + t.length / 2,
                i = this.callBase();
            return i.x = t.x + r.cos * u, i.y = t.y - r.sin * u, i.offset = t.length / 2, i
        }
    }), i.TextCloudMarker = n.viz.gauges.__internals.BaseTextCloudMarker.inherit({
        _isVisible: function () {
            return this._options.radius > 0
        }, _getTextCloudOptions: function () {
            var n = this, i = n._getActualPosition(), f = u(i), t = r(i);
            return {
                x: n._options.x + f.cos * n._options.radius,
                y: n._options.y - f.sin * n._options.radius,
                type: t > 270 ? "left-top" : t > 180 ? "top-right" : t > 90 ? "right-bottom" : "bottom-left"
            }
        }, measure: function () {
            var n = this;
            return n._measureText(), {
                min: n._options.radius,
                max: n._options.radius,
                horizontalOffset: n._textFullWidth + n._options.arrowLength,
                verticalOffset: n._textFullHeight + n._options.arrowLength
            }
        }
    })
}(DevExpress), function (n, t) {
    var r = n.viz.gauges.__internals.linearMarkers, u = Math.min, f = t.extend;
    r.TriangleMarker = n.viz.gauges.__internals.linearNeedles.SimpleIndicator.inherit({
        _getClassName: function () {
            return "marker"
        }, _create: function () {
            var t = this, n = t._options, i, e, r, o, f = {stroke: "none", strokeWidth: 0, fill: n.color};
            t._vertical ? (i = n.x, r = t._zeroPosition, e = i + (t._inverted ? n.length : -n.length), f.points = [i, r, e, r - n.width / 2, e, r + n.width / 2]) : (r = n.y, i = t._zeroPosition, o = r + (t._inverted ? n.length : -n.length), f.points = [i, r, i - n.width / 2, o, i + n.width / 2, o]), n.space > 0 && (f.strokeWidth = u(n.space, n.width / 4) || 0, f.stroke = f.strokeWidth > 0 ? n.containerBackgroundColor || "none" : "none"), t._element = t._element || t._renderer.createArea().append(t._rootElement), t._element.applySettings(f)
        }, _getTrackerPoints: function () {
            var t = this, n = t._options, o = Number(n.length) || 0, s = n.width / 2 || 0, i, r, u, f, e;
            return t._vertical ? (i = r = n.x, r = i + (t._inverted ? n.length : -n.length), u = t._zeroPosition + n.width / 2, f = t._zeroPosition - n.width / 2, e = [i, u, r, u, r, f, i, f]) : (u = n.y, f = u + (t._inverted ? n.length : -n.length), i = t._zeroPosition - n.width / 2, r = t._zeroPosition + n.width / 2, e = [i, u, i, f, r, f, r, u]), e
        }, init: function (n) {
            var t = this;
            return t.callBase(n), t._inverted = t._vertical ? t._options.horizontalOrientation === "right" : t._options.verticalOrientation === "bottom", t
        }, measure: function () {
            var r = this, i = r._options, n, t, u = i.width / 2 || 0;
            return r._vertical ? (n = t = i.x, r._inverted ? t = n + i.length || n : n = t - i.length || t) : (n = t = i.y, r._inverted ? t = n + i.length || n : n = t - i.length || t), {
                min: n,
                max: t,
                indent: u
            }
        }, getTooltipParameters: function () {
            var n = this, i = n._options, r = (n._inverted ? i.length : -i.length) / 2, t = n.callBase();
            return n._vertical ? t.x += r : t.y += r, t.offset = i.length / 2, t
        }
    }), r.TextCloudMarker = n.viz.gauges.__internals.BaseTextCloudMarker.inherit({
        _isVisible: function () {
            return !0
        }, _getTextCloudOptions: function () {
            var n = this, i = n._getActualPosition(), r = i, u = i, t;
            return n._vertical ? (r = n._options.x, t = n._inverted ? "top-left" : "top-right") : (u = n._options.y, t = n._inverted ? "right-top" : "right-bottom"), {
                x: r,
                y: u,
                type: t
            }
        }, init: function (n) {
            var t = this;
            return t.callBase(n), t._vertical = t._options.orientation === "vertical", t._inverted = t._vertical ? t._options.horizontalOrientation === "right" : t._options.verticalOrientation === "bottom", t
        }, measure: function () {
            var t = this, n = t._options, i, r, u;
            return t._measureText(), t._vertical ? (u = t._textFullHeight, t._inverted ? (i = n.x, r = n.x + n.arrowLength + t._textFullWidth) : (i = n.x - n.arrowLength - t._textFullWidth, r = n.x)) : (u = t._textFullWidth, t._inverted ? (i = n.y, r = n.y + n.arrowLength + t._textFullHeight) : (i = n.y - n.arrowLength - t._textFullHeight, r = n.y)), {
                min: i,
                max: r,
                indent: u
            }
        }
    })
}(DevExpress, jQuery), function (n) {
    var i = n.utils.getCosAndSin, r = n.utils.convertAngleToRendererSpace, u = Math.max, f = Math.min;
    n.viz.gauges.__internals.CircularRangeBar = n.viz.gauges.__internals.BaseRangeBar.inherit({
        _isVisible: function () {
            var n = this._options;
            return n.size > 0 && n.radius - n.size > 0
        }, _createBarItem: function () {
            return this._renderer.createArc().append(this._rootElement)
        }, _setBarSides: function () {
            var n = this, t = n._options;
            n._minSide = t.radius - t.size, n._maxSide = t.radius
        }, _getSpace: function () {
            var n = this._options;
            return n.space > 0 ? n.space * 180 / n.radius / Math.PI : 0
        }, _isTextVisible: function () {
            var n = this._options.text || {};
            return n.indent > 0
        }, _getTextAlign: function () {
            return "center"
        }, _setTextItemsSides: function () {
            var n = this, t = n._options;
            n._lineFrom = t.y - t.radius, n._lineTo = n._lineFrom - t.text.indent, n._textRadius = t.radius + t.text.indent
        }, _getPositions: function () {
            var n = this, r = n._basePosition, e = n._getActualPosition(), t, i, o = n._space;
            return r >= e ? (t = r, i = e) : (t = e, i = r), {
                start: n._startPosition,
                end: n._endPosition,
                main1: t,
                main2: i,
                back1: f(t + o, n._startPosition),
                back2: u(i - o, n._endPosition)
            }
        }, _buildItemSettings: function (n, t) {
            var i = this;
            return {
                x: i._options.x,
                y: i._options.y,
                innerRadius: i._minSide,
                outerRadius: i._maxSide,
                startAngle: t,
                endAngle: n
            }
        }, _updateTextPosition: function () {
            var n = this, t = i(n._getActualPosition()), r = n._options.x + n._textRadius * t.cos,
                u = n._options.y - n._textRadius * t.sin;
            r += t.cos * n._textWidth / 2, u -= t.sin * n._textHeight / 2, n._text.applySettings({
                x: r,
                y: u + n._textVerticalOffset
            })
        }, _updateLinePosition: function () {
            var n = this, e = r(n._getActualPosition()), f = n._getActualPosition(), t = n._options.x, i, u;
            n._basePosition > f ? (i = t - 2, u = t) : n._basePosition < f ? (i = t, u = t + 2) : (i = t - 1, u = t + 1), n._line.applySettings({points: [i, n._lineFrom, i, n._lineTo, u, n._lineTo, u, n._lineFrom]}), n._line.rotate(e, t, n._options.y)
        }, measure: function () {
            var n = this, t = n._options, i = {min: t.radius - t.size || t.radius, max: t.radius};
            return n._prepare(), n._hasText && (i.max += t.text.indent, i.horizontalOffset = n._textWidth, i.verticalOffset = n._textHeight), i
        }
    })
}(DevExpress), function (n) {
    n.viz.gauges.__internals.LinearRangeBar = n.viz.gauges.__internals.BaseRangeBar.inherit({
        _isVisible: function () {
            var n = this._options;
            return n.size > 0
        }, _prepare: function () {
            var n = this;
            n.callBase(), n._vertical = n._options.orientation === "vertical", n._inverted = n._vertical ? n._options.horizontalOrientation === "right" : n._options.verticalOrientation === "bottom"
        }, _createBarItem: function () {
            return this._renderer.createArea().append(this._rootElement)
        }, _setBarSides: function () {
            var t = this, n = t._options, i, r;
            t._vertical ? t._inverted ? (i = n.x, r = n.x + n.size) : (i = n.x - n.size, r = n.x) : t._inverted ? (i = n.y, r = n.y + n.size) : (i = n.y - n.size, r = n.y), t._minSide = i, t._maxSide = r, t._minBound = i, t._maxBound = r
        }, _getSpace: function () {
            var n = this._options;
            return n.space > 0 ? Number(n.space) : 0
        }, _isTextVisible: function () {
            var n = this._options.text || {};
            return n.indent > 0 || n.indent < 0
        }, _getTextAlign: function () {
            return this._vertical ? this._options.text.indent > 0 ? "left" : "right" : "center"
        }, _setTextItemsSides: function () {
            var n = this, t = Number(n._options.text.indent);
            t > 0 ? (n._lineStart = n._maxSide, n._lineEnd = n._maxSide + t, n._textPosition = n._lineEnd + (n._vertical ? 2 : n._textHeight / 2), n._maxBound = n._textPosition + (n._vertical ? n._textWidth : n._textHeight / 2)) : t < 0 && (n._lineStart = n._minSide, n._lineEnd = n._minSide + t, n._textPosition = n._lineEnd - (n._vertical ? 2 : n._textHeight / 2), n._minBound = n._textPosition - (n._vertical ? n._textWidth : n._textHeight / 2))
        }, _getPositions: function () {
            var i = this, c = i._options, s = i._startPosition, h = i._endPosition, f = i._space, r = i._basePosition,
                u = i._getActualPosition(), n, t, e, o;
            return s < h ? (r < u ? (n = r, t = u) : (n = u, t = r), e = n - f, o = t + f) : (r > u ? (n = r, t = u) : (n = u, t = r), e = n + f, o = t - f), {
                start: s,
                end: h,
                main1: n,
                main2: t,
                back1: e,
                back2: o
            }
        }, _buildItemSettings: function (n, t) {
            var u = this, i = u._minSide, r = u._maxSide,
                f = u._vertical ? [i, n, i, t, r, t, r, n] : [n, i, n, r, t, r, t, i];
            return {points: f}
        }, _updateTextPosition: function () {
            var n = this, i = n._options, t = n._getActualPosition();
            n._text.applySettings(n._vertical ? {x: n._textPosition, y: t + n._textVerticalOffset} : {
                x: t,
                y: n._textPosition + n._textVerticalOffset
            })
        }, _updateLinePosition: function () {
            var n = this, t = n._getActualPosition(), i, r, u;
            n._vertical ? (n._basePosition >= t ? (i = t, r = t + 2) : (i = t - 2, r = t), u = [n._lineStart, i, n._lineStart, r, n._lineEnd, r, n._lineEnd, i]) : (n._basePosition <= t ? (i = t - 2, r = t) : (i = t, r = t + 2), u = [i, n._lineStart, i, n._lineEnd, r, n._lineEnd, r, n._lineStart]), n._line.applySettings({points: u})
        }, measure: function () {
            var t = this, n = t._options, i, r, u;
            return t._prepare(), t._vertical ? (i = r = n.x, t._inverted ? r = r + n.size || r : i = i - n.size || i, t._hasText && (u = t._textHeight / 2, n.text.indent > 0 && (r += n.text.indent + t._textWidth), n.text.indent < 0 && (i += n.text.indent - t._textWidth))) : (i = r = n.y, t._inverted ? r = r + n.size || r : i = i - n.size || i, t._hasText && (u = t._textWidth / 2, n.text.indent > 0 && (r += n.text.indent + t._textHeight), n.text.indent < 0 && (i += n.text.indent - t._textHeight))), {
                min: i,
                max: r,
                indent: u
            }
        }
    })
}(DevExpress), function (n, t) {
    var r = Math.min, u = t.extend;
    n.viz.gauges.__internals.CircularSpindle = n.Class.inherit({
        setup: function (n) {
            return this._renderer = n.renderer, this._owner = n.owner, this
        }, init: function (n) {
            return this._options = u(!0, this._options || {}, n), this
        }, render: function () {
            var n = this, t = n._options;
            return t.visible !== !1 && t.size > 0 ? (n._rootElement = n._rootElement || n._renderer.createGroup({"class": "spindle"}), n._rootElement.append(n._owner), n._element = n._element || n._renderer.createCircle().append(n._rootElement), n._element.applySettings({
                "class": "dx-spindle-border",
                cx: t.x,
                cy: t.y,
                r: t.size / 2,
                fill: t.color || "none",
                stroke: "none",
                strokeWidth: 0
            }), t.gapSize > 0 ? (n._gapElement = n._gapElement || n._renderer.createCircle().append(n._rootElement), n._gapElement.applySettings({
                cx: t.x,
                cy: t.y,
                r: r(t.size, t.gapSize) / 2,
                "class": "dx-spindle-hole",
                fill: t.containerBackgroundColor || "none",
                stroke: "none",
                strokeWidth: 0
            })) : (n._gapElement && n._gapElement.remove(), delete n._gapElement)) : (n._rootElement && n._rootElement.remove(), delete n._rootElement, n._element && n._element.remove(), delete n._element, n._gapElement && n._gapElement.remove(), delete n._gapElement), n
        }, measure: function () {
            var n = this._options.size / 2 || 0;
            return {inverseHorizontalOffset: n, inverseVerticalOffset: n}
        }
    })
}(DevExpress, jQuery), function (n, t) {
    function v(n, t, i, r) {
        var u;
        return i > n && r < t ? u = [{start: n, end: i}, {start: r, end: t}] : i >= t || r <= n ? u = [{
            start: n,
            end: t
        }] : i <= n && r >= t ? u = [] : i > n ? u = [{start: n, end: i}] : r < t && (u = [{start: r, end: t}]), u
    }

    function y(n, t, i, r) {
        var u;
        return i < n && r > t ? u = [{start: n, end: i}, {start: r, end: t}] : i <= t || r >= n ? u = [{
            start: n,
            end: t
        }] : i >= n && r <= t ? u = [] : i < n ? u = [{start: n, end: i}] : r > t && (u = [{start: r, end: t}]), u
    }

    function p(n, t, i) {
        return t - n >= i
    }

    function w(n, t, i) {
        return n - t >= i
    }

    var h = n.utils.isDefined, e = n.utils.isString, o = n.utils.isArray, u = window.Number, s = window.isFinite,
        f = Math.max, c = Math.abs, r = t.each, l = t.map, a = t.extend;
    n.viz.gauges.__internals.BaseRangeContainer = n.Class.inherit({
        setup: function (n) {
            var t = this;
            return t._renderer = n.renderer, t._owner = n.owner, t._incidentOccured = n.incidentOccured, t
        }, init: function (n) {
            var t = this;
            return t._options = a(!0, t._options || {}, n), n && h(n.ranges) && (t._options.ranges = o(n.ranges) ? n.ranges.slice(0) : null), t
        }, _getRanges: function () {
            var n = this._options, t = n.translator, k = t.getDomainStart(), tt = t.getDomainEnd(), a = tt - k,
                et = a >= 0 ? p : w, it = a >= 0 ? v : y, d = [], i = [], g = [{start: k, end: tt}], ot = c(a) / 1e4,
                rt = o(n.palette) ? n.palette : [], ut, st = e(n.backgroundColor) ? n.backgroundColor : "none",
                h = n.width || {}, b = u(h > 0 ? h : h.start), nt = u(h > 0 ? h : h.end), ft = nt - b;
            return n.ranges ? b >= 0 && nt >= 0 && b + nt > 0 ? (d = l(n.ranges, function (n) {
                n = n || {};
                var i = t.adjust(n.startValue), r = t.adjust(n.endValue);
                return s(i) && s(r) && et(i, r, ot) ? {start: i, end: r, color: n.color} : null
            }), ut = f(0, rt.length - d.length), r(d, function (n, t) {
                var i = t.color;
                e(i) || (i = rt[n + ut]), e(i) || (i = "none"), t.color = i
            }), r(d, function (n, t) {
                for (var r, e, u, o = [], h = [], f = 0, s = i.length; f < s; ++f) u = i[f], e = it(u.start, u.end, t.start, t.end), (r = e[0]) && (r.color = u.color) && o.push(r), (r = e[1]) && (r.color = u.color) && o.push(r);
                for (o.push(t), i = o, f = 0, s = g.length; f < s; ++f) u = g[f], e = it(u.start, u.end, t.start, t.end), (r = e[0]) && h.push(r), (r = e[1]) && h.push(r);
                g = h
            }), r(g, function (n, t) {
                t.color = st, t["class"] = "dx-background-range", i.push(t)
            }), r(i, function (n, i) {
                i.startPosition = t.translate(i.start), i.endPosition = t.translate(i.end), i.startWidth = (i.start - k) / a * ft + b, i.endWidth = (i.end - k) / a * ft + b
            }), i) : (this._incidentOccured('The range container is not rendered because the value of the "width" option is not valid'), null) : (this._incidentOccured('The range container is not rendered because the value of the "ranges" option is not valid'), null)
        }, render: function () {
            var n = this, t;
            return n._rootElement = n._rootElement || n._renderer.createGroup({"class": "range-container"}), n._rootElement.append(n._owner).clear(), t = n._getRanges(), t && n._renderRanges(t) || (n._rootElement.remove(), delete n._rootElement), n
        }
    }), n.viz.gauges.__internals.CircularRangeContainer = n.viz.gauges.__internals.BaseRangeContainer.inherit({
        _renderRanges: function (n) {
            var e = this, t = e._options, h = t.x, c = t.y, o = t.radius, l = e._renderer, a = e._rootElement, i = 0,
                u = 0, s = t.width > 0 ? t.width : f(t.width.start, t.width.end);
            switch (t.orientation) {
                case"inside":
                    i = 1;
                    break;
                case"outside":
                    u = 1;
                    break;
                case"center":
                    i = u = .5;
                    break;
                default:
                    e._incidentOccured('The range container is not rendered because the value of the "orientation" option is not valid')
            }
            return (i || u) && o + u * s > 0 && o - i * s > 0 ? (r(n, function (n, t) {
                var r = (t.startWidth + t.endWidth) / 2,
                    f = l.createArc(h, c, o + u * r, o - i * r, t.endPosition, t.startPosition, {
                        stroke: "none",
                        strokeWidth: 0,
                        fill: t.color
                    }).append(a);
                "class" in t && f.applySettings({"class": t["class"]})
            }), !0) : !1
        }, measure: function () {
            var r = this._options, t = r.radius, n = r.width || {}, i = null;
            n = u(n) || f(n.start, n.end, 0) || 0;
            switch (r.orientation) {
                case"inside":
                    i = {min: t - n, max: t};
                    break;
                case"outside":
                    i = {min: t, max: t + n};
                    break;
                case"center":
                    i = {min: t - n / 2, max: t + n / 2}
            }
            return i
        }
    }), n.viz.gauges.__internals.LinearRangeContainer = n.viz.gauges.__internals.BaseRangeContainer.inherit({
        _renderRanges: function (n) {
            var f = this, e = f._options, o = f._renderer, s = f._rootElement, t = 0, i = 0, u;
            if (e.orientation === "vertical") {
                u = e.x;
                switch (e.horizontalOrientation) {
                    case"left":
                        t = 1;
                        break;
                    case"right":
                        i = 1;
                        break;
                    case"center":
                        t = i = .5;
                        break;
                    default:
                        f._incidentOccured('The range container is not rendered because the value of the "horizontalOrientation" option is not valid')
                }
                if (t || i) return r(n, function (n, r) {
                    var f = o.createArea([u - r.startWidth * t, r.startPosition, u - r.endWidth * t, r.endPosition, u + r.endWidth * i, r.endPosition, u + r.startWidth * i, r.startPosition], {
                        stroke: "none",
                        strokeWidth: 0,
                        fill: r.color
                    }).append(s);
                    "class" in r && f.applySettings({"class": r["class"]})
                }), !0
            } else {
                u = e.y;
                switch (e.verticalOrientation) {
                    case"top":
                        t = 1;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    case"middle":
                        t = i = .5;
                        break;
                    default:
                        f._incidentOccured('The range container is not rendered because the value of the "verticalOrientation" option is not valid')
                }
                if (t || i) return r(n, function (n, r) {
                    var f = o.createArea([r.startPosition, u + r.startWidth * i, r.startPosition, u - r.startWidth * t, r.endPosition, u - r.endWidth * t, r.endPosition, u + r.endWidth * i], {
                        stroke: "none",
                        strokeWidth: 0,
                        fill: r.color
                    }).append(s);
                    "class" in r && f.applySettings({"class": r["class"]})
                }), !0
            }
            return !1
        }, measure: function () {
            var i = this._options, n = i.width || {}, t = null;
            if (n = u(n) || f(n.start, n.end, 0) || 0, i.orientation === "vertical") {
                t = {min: i.x, max: i.x};
                switch (i.horizontalOrientation) {
                    case"left":
                        t.min -= n;
                        break;
                    case"right":
                        t.max += n;
                        break;
                    case"center":
                        t.min -= n / 2, t.max += n / 2
                }
            } else {
                t = {min: i.y, max: i.y};
                switch (i.verticalOrientation) {
                    case"top":
                        t.min -= n;
                        break;
                    case"bottom":
                        t.max += n;
                        break;
                    case"middle":
                        t.min -= n / 2, t.max += n / 2
                }
            }
            return t
        }
    })
}(DevExpress, jQuery), function (n, t) {
    var o = n.viz.core.Rectangle, u = n.utils.isString, s = n.utils.isDefined, h = Math.min, c = Math.max,
        f = Math.floor, r = Math.ceil, e = t.extend;
    n.viz.gauges.__internals.Title = n.Class.inherit({
        ctor: function () {
            this._options = {title: {}, subtitle: {}}
        }, _measureTexts: function () {
            var t = this, n = t._mainText ? t._mainText.getBBox() : null, i = t._subText ? t._subText.getBBox() : null,
                u;
            t._location = {
                x: 0,
                y: 0
            }, n && i ? (t._subText.applySettings({y: r(-i.y)}), t._rect = new o({
                left: f(h(n.x, i.x)),
                right: r(c(n.x + n.width, i.x + i.width)),
                top: f(n.y),
                bottom: r(i.height)
            })) : (n || i) && (n = n || i, t._rect = new o({
                left: f(n.x),
                right: r(n.x + n.width),
                top: f(n.y),
                bottom: r(n.y + n.height)
            }))
        }, render: function (n) {
            var t = this;
            return e(!0, t._options, n), t._root = t._root || t._renderer.createGroup().applySettings({"class": "dx-gauge-title"}).append(t._owner), u(t._options.title.text) ? (t._mainText = t._mainText || t._renderer.createText().append(t._root), t._mainText.applySettings({
                x: 0,
                y: 0,
                align: "center",
                font: t._options.title.font,
                text: t._options.title.text
            })) : (t._mainText && t._mainText.remove(), delete t._mainText), u(t._options.subtitle.text) ? (t._subText = t._subText || t._renderer.createText().append(t._root), t._subText.applySettings({
                x: 0,
                y: 0,
                align: "center",
                font: t._options.subtitle.font,
                text: t._options.subtitle.text
            })) : (t._subText && t._subText.remove(), delete t._subText), t._mainText || t._subText ? t._measureTexts() : (t._root && t._root.remove(), delete t._root), t
        }, processTitleOptions: function (n) {
            return u(n) ? {text: n} : s(n) ? (n = e({}, n), n.layout = e({}, n.layout, {position: n.position}), n) : {text: null}
        }, processSubtitleOptions: function (n) {
            return u(n) ? {text: n} : s(n) ? e({}, n) : {text: null}
        }, isVisible: function () {
            return !!(this._mainText || this._subText)
        }, getBoundingRect: function () {
            return this._rect.clone()
        }, getLayoutOptions: function () {
            return this._options.title.layout || {}
        }, move: function (n, t) {
            var i = this;
            return i._root.move(i._location.x += n, i._location.y += t), i._rect = i._rect.move(n, t), i
        }
    })
}(DevExpress, jQuery), function (n) {
    function f(n) {
        n = n || {};
        var t = (i(n) ? n : n.position || "").split("-");
        return {
            primary: i(t[0]) ? t[0].toLowerCase() : "",
            secondary: i(t[1]) ? t[1].toLowerCase() : "",
            overlay: n.overlay > 0 ? Number(n.overlay) : 0
        }
    }

    var r = Math.min, u = Math.max, i = n.utils.isString, e = n.viz.core.Rectangle;
    n.viz.gauges.__internals.LayoutManager = n.Class.inherit({
        setRect: function (n) {
            return this._rect = n.clone(), this
        }, getRect: function () {
            return this._rect.clone()
        }, applyLayout: function (n, t) {
            var h = 0, o = 0, i = this._rect, e = n.clone(), c = f(t), s = e.height() - c.overlay;
            switch (c.primary) {
                case"top":
                    s >= 0 ? (o = i.top - e.top, i.top = r(i.top + s, i.bottom)) : o = i.top - e.top - s;
                    break;
                case"bottom":
                    s >= 0 ? (o = i.bottom - e.bottom, i.bottom = u(i.bottom - s, i.top)) : o = i.bottom - e.bottom + s
            }
            switch (c.secondary) {
                case"":
                case"center":
                    h = i.horizontalMiddle() - e.horizontalMiddle();
                    break;
                case"left":
                    h = i.left - e.left;
                    break;
                case"right":
                    h = i.right - e.right
            }
            return e = e.move(h, o), {rect: e, dx: h, dy: o}
        }, selectRectByAspectRatio: function (n, t) {
            var i = this._rect.clone(), f, r = 0, u = 0;
            return t = t || {}, n > 0 && (i.left += t.left || 0, i.right -= t.right || 0, i.top += t.top || 0, i.bottom -= t.bottom || 0, i.width() > 0 && i.height() > 0 ? (f = i.height() / i.width(), f > 1 ? n < f ? r = i.width() : u = i.height() : n > f ? u = i.height() : r = i.width(), r > 0 || (r = u / n), u > 0 || (u = r * n), r = (i.width() - r) / 2, u = (i.height() - u) / 2, i.left += r, i.right -= r, i.top += u, i.bottom -= u) : (i.left = i.right = i.horizontalMiddle(), i.top = i.bottom = i.verticalMiddle())), i
        }, selectRectBySizes: function (n, t) {
            var i = this._rect.clone(), r;
            return t = t || {}, n && (i.left += t.left || 0, i.right -= t.right || 0, i.top += t.top || 0, i.bottom -= t.bottom || 0, n.width > 0 && (r = (i.width() - n.width) / 2, r > 0 && (i.left += r, i.right -= r)), n.height > 0 && (r = (i.height() - n.height) / 2, r > 0 && (i.top += r, i.bottom -= r))), i
        }
    })
}(DevExpress, jQuery), function (n, t) {
    var r = function (n) {
        return isString(n) ? n : isNumber(n) ? n.toString() : "N/A"
    };
    t.viz.gauges.__internals.ThemeManager = t.viz.core.BaseThemeManager.inherit(function () {
        var n = function (n) {
            this.callBase(n, "gauge"), this.theme.area.defaultFormatText = r
        }, t = function () {
            return this.theme.range || {}
        }, i = function () {
            return this.theme.scale || {}
        }, u = function () {
            return this.theme.needle || {}
        }, f = function () {
            return this.theme.marker || {}
        };
        return {ctor: n, getRangeTheme: t, getScaleTheme: i, getNeedleTheme: u, getMarkerTheme: f}
    }())
}(jQuery, DevExpress), function (n, t) {
    var f = n.viz.gauges.__internals, r = {
        preset1: {commonNeedleSettings: {type: "rectangle"}, commonMarkerSettings: {type: "textcloud"}},
        preset2: {
            commonNeedleSettings: {type: "twocolorrectangle"},
            commonMarkerSettings: {offset: 6, type: "triangle"}
        },
        preset3: {commonMarkerSettings: {offset: 6, type: "triangle"}, commonRangeBarSettings: {text: {indent: 70}}}
    }, u = {
        preset1: {commonNeedleSettings: {type: "rhombus"}, commonMarkerSettings: {type: "textcloud"}},
        preset2: {commonNeedleSettings: {type: "circle"}, commonMarkerSettings: {type: "triangle"}}
    };
    n.viz.gauges.__internals.PresetManager = n.Class.inherit({
        setup: function (n, t) {
            var i = this;
            return i._activePreset = {}, i._setPresetsCollection(i._selectPresets(n), "preset1"), i._setActivePreset(t)
        }, _selectPresets: function (n) {
            var t = {};
            switch (n) {
                case"circular":
                    t = r;
                    break;
                case"linear":
                    t = u
            }
            return t
        }, _setActivePreset: function (n) {
            var i = {}, t = !n || typeof n == "string";
            return this._presetName = t ? n : n.name, this._presetName !== "none" ? (t || this._updatePreset(n), this._activePreset = this._getCollectionElement(this._presetName)) : this._activePreset = t ? i : n, this._activePreset
        }, getNeedlePreset: function () {
            return this._activePreset.commonNeedleSettings || {}
        }, getMarkerPreset: function () {
            return this._activePreset.commonMarkerSettings || {}
        }, getRangeBarPreset: function () {
            return this._activePreset.commonRangeBarSettings || {}
        }, getScalePreset: function () {
            return this._activePreset.commonScaleSettings || {}
        }, getRangePreset: function () {
            return this._activePreset.commonRangeSettings || {}
        }, getTitlePreset: function () {
            return this._activePreset.title || {}
        }, getSubtitlePreset: function () {
            return this._activePreset.subtitle || {}
        }, getIndicatorPreset: function () {
            return this._activePreset.indicator || {}
        }, getSpindlePreset: function () {
            return this._activePreset.spindle || {}
        }, _updatePreset: function (n) {
            this._presetsCollection.hasOwnProperty(n.name) ? t.extend(!0, this._presetsCollection[n.name], n) : t.extend(!0, this._presetsCollection.defaultPreset, n)
        }, _getCollectionElement: function (n) {
            var t = {};
            return t = this._presetsCollection.hasOwnProperty(n) ? this._presetsCollection[n] : this._presetsCollection.defaultPreset
        }, _setPresetsCollection: function (n, i) {
            this._presetsCollection = t.extend(!0, {}, n || {}), this._presetsCollection.defaultPreset = i && this._presetsCollection.hasOwnProperty(i) ? t.extend({}, this._presetsCollection[i]) : {}
        }
    })
}(DevExpress, jQuery), function (n, t, i) {
    var u = n.viz.gauges.__factory, h = n.viz.core.Rectangle, o = n.utils.isNumber, c = n.utils.isString,
        l = n.utils.isFunction, s = window.isFinite, v = window.setTimeout, f = n.utils.windowResizeCallbacks,
        r = t.extend, e = t.each, y = 500, a = {
            size: {width: i, height: i},
            margin: {left: 0, top: 0, right: 0, bottom: 0},
            geometry: {},
            preset: "preset1",
            containerBackgroundColor: "#FFFFFF",
            animationEnabled: !0,
            animationDuration: 1e3,
            redrawOnResize: !0,
            incidentOccured: t.noop,
            scale: {
                startValue: 0,
                endValue: 100,
                majorTick: {
                    visible: !0,
                    type: "rectangle",
                    tickInterval: i,
                    customTickValues: [],
                    length: 5,
                    width: 2,
                    showCalculatedTicks: !0,
                    useTicksAutoArrangement: !0,
                    color: "#FFFFFF"
                },
                minorTick: {
                    visible: !1,
                    type: "rectangle",
                    tickInterval: i,
                    customTickValues: [],
                    length: 3,
                    width: 1,
                    showCalculatedTicks: !0,
                    color: "#FFFFFF"
                },
                label: {
                    visible: !0,
                    format: "",
                    precision: 2,
                    customizeText: i,
                    font: {
                        color: "#7F7F7F",
                        size: 12,
                        family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        weight: 400
                    }
                }
            },
            rangeContainer: {
                offset: 0,
                width: 5,
                backgroundColor: "#808080",
                palette: ["#AD79CE", "#639EC6", "#A5C763", "#FFB65A", "#E78E94"],
                ranges: []
            },
            commonNeedleSettings: {__info: "needle", color: "#C2C2C2"},
            commonMarkerSettings: {
                __info: "marker",
                color: "#679EC5",
                space: 2,
                length: 14,
                width: 13,
                arrowLength: 5,
                horizontalOffset: 6,
                verticalOffset: 3,
                text: {
                    customizeText: i,
                    font: {
                        color: "#FFFFFF",
                        size: 18,
                        family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        weight: 400
                    }
                }
            },
            commonRangeBarSettings: {
                baseValue: i,
                color: "#AD79CE",
                backgroundColor: "none",
                space: 2,
                size: 10,
                text: {
                    indent: 0,
                    customizeText: i,
                    font: {
                        size: 14,
                        family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        weight: 400
                    }
                }
            },
            title: {
                layout: {position: "top-center", overlay: 0},
                font: {
                    size: 18,
                    color: "#232323",
                    family: "'SegoeUI-Light', 'Segoe UI Light', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                    weight: 200
                }
            },
            subtitle: {
                font: {
                    size: 14,
                    color: "#232323",
                    family: "'SegoeUI-Light', 'Segoe UI Light', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                    weight: 200
                }
            },
            indicator: {
                hasPositiveMeaning: !0,
                text: {
                    format: "fixedPoint",
                    precision: 0,
                    customizeText: t.none,
                    useDefaultColor: !1,
                    font: {
                        color: "#7F7F7F",
                        size: 18,
                        family: "'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        weight: 400
                    }
                },
                layout: {position: "bottom-center", overlay: 0}
            },
            tooltip: {
                enabled: !1,
                format: i,
                precision: i,
                customizeText: i,
                font: {
                    color: "#FFFFFF",
                    size: 26,
                    family: "'SegoeUI-Light', 'Segoe UI Light', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'SegoeUI', 'Segoe UI', 'HelveticaNeue', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                    weight: 200
                },
                horizontalPadding: 22,
                verticalPadding: 6,
                arrowLength: 10
            },
            tracker: {tooltipDelay: 500}
        };
    n.viz.gauges.Gauge = n.ui.Component.inherit({
        _defaultOptions: function () {
            return r(!0, {}, a)
        }, _initOptions: function (n) {
            var t = this, i;
            t._presetManager = u.createPresetManager(), i = t._presetManager.setup(t._gaugeType(), n ? n.preset : {}), t.option(i), t.callBase(n)
        }, _getPresetName: function (n) {
            return n && c(n.preset) ? n.preset : this.option("preset")
        }, _init: function () {
            var n = this;
            n._initRenderer(), n._tracker = u.createTracker(), n._tracker.setup(n), n._layoutManager = u.createLayoutManager(), n._defaultOpts = n._defaultOptions(), n._creationOptions = n._getCreationOptions(), n._mainElements = [], n._externalElements = [], n._needles = [], n._markers = [], n._rangeBars = [], n._initResizeHandler()
        }, _dispose: function () {
            var n = this;
            n._disposeRenderer(), delete n._tracker, delete n._layoutManager, delete n._defaultOpts, delete n._creationOptions, delete n._mainElements, delete n._externalElements, delete n._needles, delete n._markers, delete n._rangeBars, n._disposeResizeHandler(), n.callBase()
        }, _initRenderer: function () {
            var n = this;
            n._canvas = {
                width: 1,
                height: 1,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0
            }, n._renderer = u.createRenderer({
                width: 1,
                height: 1
            }), n._rootElement = n._renderer.getRoot(), n._trackerGroup = n._renderer.createGroup({"class": "tracker"}).append(n._rootElement)
        }, _disposeRenderer: function () {
            var n = this;
            delete n._canvas, delete n._renderer, delete n._rootElement, delete n._trackerGroup
        }, _initResizeHandler: function () {
            var t = this;
            t._resizeHandler = n.utils.createResizeHandler(function () {
                t._renderCore()
            }), t._resizeHandler.dispose = function () {
                return t = null, this
            }
        }, _disposeResizeHandler: function () {
            f.remove(this._resizeHandler.stop().dispose()), delete this._resizeHandler
        }, _trackWindowResize: function () {
            var n = this;
            n.option("redrawOnResize") === !0 ? f.has(n._resizeHandler) || f.add(n._resizeHandler) : f.remove(n._resizeHandler)
        }, _getIncidentOccured: function () {
            var n = this.option("incidentOccured");
            return l(n) || (n = this._defaultOpts.incidentOccured), function () {
                n.apply(null, arguments)
            }
        }, _getCreationOptions: function () {
            return {renderer: this._renderer, ownerElement: this._rootElement, owner: this._rootElement}
        }, _getCommonOptions: function () {
            var n = this, t = n._getDefaultFormatOptions();
            return {
                translator: n._area.translator,
                animationEnabled: n.option("animationEnabled"),
                animationDuration: n.option("animationDuration"),
                containerBackgroundColor: n.option("containerBackgroundColor"),
                defaultTextFormat: t.format,
                defaultTextPrecision: t.precision
            }
        }, _getDefaultFormatOptions: function () {
            var t = this._area;
            return n.utils.getAppropriateFormat(t.startValue, t.endValue, this._getApproximateScreenRange())
        }, _getCommonNeedleSettings: function () {
            var n = this;
            return r(!0, {}, n._defaultOpts.commonNeedleSettings, n._presetManager.getNeedlePreset(), n.option("commonNeedleSettings"))
        }, _getCommonMarkerSettings: function () {
            var n = this;
            return r(!0, {}, n._defaultOpts.commonMarkerSettings, n._presetManager.getMarkerPreset(), n.option("commonMarkerSettings"))
        }, _getCommonRangeBarSettings: function () {
            var n = this;
            return r(!0, n._defaultOpts.commonRangeBarSettings, n._presetManager.getRangeBarPreset(), n.option("commonRangeBarSettings"))
        }, _hide: function () {
            !this._isHidden && (this._isHidden = !0) && this._renderer.getRoot().hide()
        }, _show: function () {
            this._isHidden && delete this._isHidden && this._renderer.getRoot().show()
        }, _getCanvas: function () {
            var i = this, t = i.option("size") || {}, n = i.option("margin") || {}, f = i._element(),
                e = i._getDefaultContainerSize(), r = t.width >= 0 ? Number(t.width) : f.width(),
                u = t.height >= 0 ? Number(t.height) : f.height();
            return r || Number(t.width) === 0 || (r = e.width), u || Number(t.height) === 0 || (u = e.height), {
                width: r,
                height: u,
                marginLeft: n.left > 0 ? Number(n.left) : 0,
                marginTop: n.top > 0 ? Number(n.top) : 0,
                marginRight: n.right > 0 ? Number(n.right) : 0,
                marginBottom: n.bottom > 0 ? Number(n.bottom) : 0
            }
        }, _updateVisibility: function (n) {
            var t = this;
            return n.width - n.marginLeft - n.marginRight >= 2 && n.height - n.marginTop - n.marginBottom >= 2 && t._element().is(":visible") ? (t._show(), !0) : (t._hide(), t._incidentOccured("Gauge cannot be rendered since container is too small or not visible"), !1)
        }, _getArea: function () {
            var i = this, t = i.option("scale") || {}, n = {};
            return n.startValue = o(t.startValue) ? Number(t.startValue) : 0, n.endValue = o(t.endValue) ? Number(t.endValue) : 100, n.baseValue = Math.min(n.startValue, n.endValue), i._setupArea(n), n.translator = u.createTranslator(n.startCoord, n.endCoord, n.startValue, n.endValue), n
        }, _renderTitle: function () {
            var n = this, t = n.option("title"), i = n.option("subtitle");
            n._title || (n._title = u.createTitle(), n._title._renderer = n._renderer, n._title._owner = n._rootElement), t = r(!0, {}, n._defaultOpts.title, n._presetManager.getTitlePreset(), n._title.processTitleOptions(t)), i = r(!0, {}, n._defaultOpts.subtitle, n._presetManager.getSubtitlePreset(), n._title.processSubtitleOptions(i)), n._title.render({
                title: t,
                subtitle: i
            }), n._title.isVisible() && n._externalElements.push(n._title)
        }, _renderDeltaIndicator: function () {
            var n = this, t = n.option("indicator");
            n._indicator || (n._indicator = u.createIndicator(), n._indicator && (n._indicator._renderer = n._renderer, n._indicator._owner = n._rootElement)), n._indicator && (t = r(!0, {}, n._defaultOpts.indicator, n._presetManager.getIndicatorPreset(), t), n._indicator.render(t), n._indicator.isVisible() && n._externalElements.push(n._indicator))
        }, _renderTooltip: function () {
            var n = this, t = r({}, n._defaultOpts.tooltip, n.option("tooltip"));
            n._tooltip || (n._tooltip = u.createTooltip(), n._tooltip.setup(n)), n._tooltip.init(r(!0, {}, n._defaultOpts.tooltip, n.option("tooltip"))), n._tooltip.render()
        }, _renderCore: function (n) {
            var t = this, r = t._canvas, i = t._getCanvas();
            t._updateVisibility(i) && (i.width !== r.width || i.height !== r.height || n) && (t._renderer.container || t._renderer.draw(t._element().get(0)), t._renderer.resize(i.width, i.height), t._canvas = i, t._rootRect = new h({
                left: i.marginLeft,
                top: i.marginTop,
                right: i.width - i.marginRight,
                bottom: i.height - i.marginBottom
            }), t._layoutManager.setRect(t._rootRect), t._mainRect = t._rootRect.clone(), t._area = t._getArea(), t._commonOptions = t._getCommonOptions(), t._mainElements.length = 0, t._externalElements.length = 0, t._renderTitle(), t._renderDeltaIndicator(), e(t._externalElements, function (n, i) {
                var r = t._layoutManager.applyLayout(i.getBoundingRect(), i.getLayoutOptions());
                i.move(r.dx, r.dy)
            }), t._mainRect = t._layoutManager.getRect(), t._prepareMainElements(), t._applyMainLayout(t._measureMainElements()), t._renderMainElements(), t._renderTooltip(), t._tracker.init(t.option("tracker")).activate())
        }, _render: function () {
            var n = this;
            n._incidentOccured = n._getIncidentOccured(), n._renderCore(!0), n._updateActiveElements(), n._trackWindowResize()
        }, _prepareMainElements: function () {
            var n = this;
            n._renderRangeContainer(), n._renderScale();
            var r = n.option("rangeBars"), t = n.option("needles"), u = n.option("markers");
            r === i && t === i && u === i && (t = [{value: n._area.baseValue}]), n._renderIndicators("_rangeBars", r || [], n._getCommonRangeBarSettings(), n._createRangeBar), n._renderIndicators("_needles", t || [], n._getCommonNeedleSettings(), n._createNeedle), n._renderIndicators("_markers", u || [], n._getCommonMarkerSettings(), n._createMarker)
        }, _updateActiveElements: function () {
            var n = this;
            e(n._mainElements, function (n, t) {
                t.setCurrentValue && t.setCurrentValue(t._options.value)
            })
        }, _renderScale: function () {
            var n = this, i = n._scale, r = n.option("scale"), t;
            i || (i = n._scale = n._createScale(), i.setup({
                renderer: n._renderer,
                owner: n._rootElement,
                incidentOccured: n._incidentOccured
            })), t = n._combineOptions(n._commonOptions, n._defaultOpts.commonScaleSettings, n._presetManager.getScalePreset(), r, {offset: 0}), t.majorTick.customTickValues = t.majorTick.customTickValues || [], t.minorTick.customTickValues = t.minorTick.customTickValues || [], i.init(t), n._mainElements.push(i)
        }, _renderRangeContainer: function () {
            var n = this, t = n._rangeContainer, r = n.option("rangeContainer"), i;
            t || (t = n._rangeContainer = n._createRangeContainer(), t.setup({
                renderer: n._renderer,
                owner: n._rootElement,
                incidentOccured: n._incidentOccured
            })), i = n._combineOptions(n._commonOptions, n._defaultOpts.commonRangeSettings, n._presetManager.getRangePreset(), r), i.ranges = i.ranges || [], t.init(i), n._mainElements.push(t)
        }, _renderIndicators: function (n, t, r, u) {
            for (var c = this, a = c[n], l = [], o, s, e, f = 0, h = a.length; f < h; ++f) s = a[f], o = t[f], o ? (e = c._renderIndicator(s, r, o, u), s !== e && s.destroy(), e && l.push(e)) : s.destroy();
            for (f = h, h = t.length; f < h; ++f) o = t[f], o && (e = c._renderIndicator(i, r, o, u), e && l.push(e));
            c[n] = l
        }, _renderIndicator: function (n, t, r, u) {
            var e = this, o = e._combineOptions(e._commonOptions, t, r), f = n;
            return e._updateIndicatorOptions(f, o), o.value !== i ? (f && f._options.type === o.type || (f = u.call(e, o.type), f ? f.setup({
                renderer: e._renderer,
                owner: e._rootElement,
                tracker: e._trackerGroup
            }) : e._incidentOccured("Cannot create " + o.__info + ': type "' + o.type + '" is unknown')), f && (f.init(o), e._mainElements.push(f))) : f = i, f
        }, _updateIndicatorOptions: function (n, t) {
            t.baseValue = s(t.translator.translate(t.baseValue)) ? t.baseValue : this._area.baseValue, n && (t.currentValue = n.getCurrentValue()), s(t.currentValue) || (t.currentValue = t.baseValue), t.value = t.translator.adjust(t.value), !t.text || t.text.format || t.text.precision || (t.text.format = this._commonOptions.defaultTextFormat, t.text.precision = this._commonOptions.defaultTextPrecision)
        }, _getTrackedElements: function () {
            var n = [];
            return e(this._needles, function (t, i) {
                n.push({target: i, info: {type: "needle", index: t}})
            }), e(this._markers, function (t, i) {
                n.push({target: i, info: {type: "marker", index: t}})
            }), n
        }, _accessIndicatorValue: function (n, t) {
            return t === i ? n ? n.getCurrentValue() : i : (n && n.setCurrentValue(t), this)
        }, needleValue: function (n, t) {
            return this._accessIndicatorValue(this._needles[n], t)
        }, markerValue: function (n, t) {
            return this._accessIndicatorValue(this._markers[n], t)
        }, rangeBarValue: function (n, t) {
            return this._accessIndicatorValue(this._rangeBars[n], t)
        }, indicatorValue: function (n) {
            var t = this;
            n !== i && t._indicator && t._indicator.update(n)
        }, _optionValuesEqual: function (n, t, i) {
            n === "rangeContainer" && t && i && i.ranges && (t.ranges = null), n === "scale" && (t && t.majorTick && i.majorTick && i.majorTick.customTickValues && (t.majorTick.customTickValues = null), t && t.minorTick && i.minorTick && i.minorTick.customTickValues && (t.minorTick.customTickValues = null)), this.callBase.apply(this, arguments)
        }
    })
}(DevExpress, jQuery), function (n, t, i) {
    function w(n, t) {
        var s = l(n), h = l(t), i = s.cos, u = s.sin, e = h.cos, o = h.sin;
        return {
            left: u <= 0 && o >= 0 || u <= 0 && o <= 0 && i <= e || u >= 0 && o >= 0 && i >= e ? -1 : f(i, e, 0),
            right: u >= 0 && o <= 0 || u >= 0 && o >= 0 && i >= e || u <= 0 && o <= 0 && i <= e ? 1 : r(i, e, 0),
            up: i <= 0 && e >= 0 || i <= 0 && e <= 0 && u >= o || i >= 0 && e >= 0 && u <= o ? -1 : -r(u, o, 0),
            down: i >= 0 && e <= 0 || i >= 0 && e >= 0 && u <= o || i <= 0 && e <= 0 && u >= o ? 1 : -f(u, o, 0)
        }
    }

    var u = n.viz.gauges.__factory, h = n.utils.isNumber, o = window.Number, c = n.utils.normalizeAngle,
        l = n.utils.getCosAndSin, r = Math.max, f = Math.min, e = Math.round, v = Array.prototype.slice, s = t.extend,
        a = t.each, y = Math.PI, p = {
            geometry: {startAngle: 225, endAngle: 315, totalRadius: i},
            scale: {orientation: "outside", label: {indentFromTick: 10}},
            rangeContainer: {orientation: "outside"},
            spindle: {visible: !0, size: 14, gapSize: 10, color: "#C2C2C2"},
            commonNeedleSettings: {
                offset: 20,
                type: "rectangle",
                indentFromCenter: 0,
                width: 2,
                space: 2,
                secondColor: "#E18E92",
                secondFraction: .4
            },
            commonMarkerSettings: {offset: -6, type: "textcloud"},
            commonRangeBarSettings: {offset: 30}
        };
    n.viz.gauges.CircularGauge = n.viz.gauges.Gauge.inherit({
        _gaugeType: function () {
            return "circular"
        }, _defaultOptions: function () {
            return s(!0, {}, this.callBase(), p)
        }, _setupArea: function (n) {
            var r = this, u = r.option("geometry"), i = u.startAngle, t = u.endAngle;
            i = h(i) ? c(i) : r._defaultOpts.geometry.startAngle, t = h(t) ? c(t) : r._defaultOpts.geometry.endAngle, i <= t && (t -= 360), n.x = 0, n.y = 0, n.radius = 100, n.startCoord = i, n.endCoord = t, n.totalRadius = u.totalRadius > 0 ? o(u.totalRadius) : r._defaultOpts.geometry.totalRadius, n.sides = w(i, t)
        }, _getCreationOptions: function () {
            var n = this.callBase();
            return n.type = "circular", n
        }, _getCommonOptions: function () {
            var n = this._area;
            return s(!0, this.callBase(), {x: n.x, y: n.y, areaRadius: n.radius, type: "circular"})
        }, _combineOptions: function () {
            var i = [!0, {}].concat(v.apply(arguments)), n = s.apply(t, i);
            return n.radius = e(n.areaRadius - o(n.offset) || n.areaRadius), n
        }, _measureMainElements: function () {
            var s = this, n = 0, u = Infinity, t = 0, i = 0, e = 0, o = 0;
            return a(s._mainElements, function (s, h) {
                var c = h.measure();
                c.min > 0 && (u = f(u, c.min)), c.max > 0 && (n = r(n, c.max)), c.horizontalOffset > 0 && (t = r(t, c.max + c.horizontalOffset)), c.verticalOffset > 0 && (i = r(i, c.max + c.verticalOffset)), c.inverseHorizontalOffset > 0 && (e = r(e, c.inverseHorizontalOffset)), c.inverseVerticalOffset > 0 && (o = r(o, c.inverseVerticalOffset))
            }), t = r(t - n, 0), i = r(i - n, 0), {
                minRadius: u,
                maxRadius: n,
                horizontalMargin: t,
                verticalMargin: i,
                inverseHorizontalMargin: e,
                inverseVerticalMargin: o
            }
        }, _applyMainLayout: function (n) {
            var s = this, r = s._area, t = r.sides, o = {
                    left: (t.left < -.1 ? n.horizontalMargin : n.inverseHorizontalMargin) || 0,
                    right: (t.right > .1 ? n.horizontalMargin : n.inverseHorizontalMargin) || 0,
                    top: (t.up < -.1 ? n.verticalMargin : n.inverseVerticalMargin) || 0,
                    bottom: (t.down > .1 ? n.verticalMargin : n.inverseVerticalMargin) || 0
                }, i = s._layoutManager.selectRectByAspectRatio((t.down - t.up) / (t.right - t.left), o),
                u = f(i.width() / (t.right - t.left), i.height() / (t.down - t.up)), h, c;
            u > r.totalRadius && (i = i.scale(r.totalRadius / u), u = r.totalRadius), u = u - n.maxRadius + r.radius, h = i.left - i.width() * t.left / (t.right - t.left), c = i.top - i.height() * t.up / (t.down - t.up), r.x = e(h), r.y = e(c), r.radius = u, i.left -= o.left, i.right += o.right, i.top -= o.top, i.bottom += o.bottom, s._layoutManager.setRect(i)
        }, _renderMainElements: function () {
            var n = this, i = n._area.x, r = n._area.y, t = n._area.radius;
            a(n._mainElements, function (n, u) {
                u.init({x: i, y: r, radius: e(t - o(u._options.offset) || t)}).render()
            })
        }, _createScale: function () {
            return u.createCircularScale()
        }, _createRangeContainer: function () {
            return u.createCircularRangeContainer()
        }, _createNeedle: function (n) {
            return u.createCircularNeedle(n)
        }, _createMarker: function (n) {
            return u.createCircularMarker(n)
        }, _createRangeBar: function () {
            return u.createCircularRangeBar()
        }, _createSpindle: function () {
            return u.createCircularSpindle()
        }, _prepareMainElements: function () {
            this.callBase(), this._renderSpindle()
        }, _renderSpindle: function () {
            var n = this;
            n._spindle || (n._spindle = n._createSpindle(), n._spindle.setup({
                renderer: n._renderer,
                owner: n._rootElement
            })), n._spindle.init(n._combineOptions(n._commonOptions, n._defaultOpts.spindle, n._presetManager.getSpindlePreset(), n.option("spindle"))), n._mainElements.push(n._spindle)
        }, _getApproximateScreenRange: function () {
            var i = this, n = i._area,
                t = f(i._mainRect.width() / (n.sides.right - n.sides.left), i._mainRect.height() / (n.sides.down - n.sides.up));
            return t > n.totalRadius && (t = n.totalRadius), t = .8 * t, -n.translator.getCodomainRange() * t * y / 180
        }, _getDefaultContainerSize: function () {
            return {width: 300, height: 300}
        }
    })
}(DevExpress, jQuery), function (n, t, i) {
    var r = n.viz.gauges.__factory, e = Math.max, s = Math.min, u = Math.round, h = Array.prototype.slice, f = t.extend,
        o = t.each, c = {
            geometry: {orientation: "horizontal", totalSize: i},
            scale: {horizontalOrientation: "right", verticalOrientation: "bottom", label: {indentFromTick: -10}},
            rangeContainer: {horizontalOrientation: "right", verticalOrientation: "bottom"},
            commonNeedleSettings: {offset: 2.5, type: "rhombus", length: 15, width: 15},
            commonMarkerSettings: {
                offset: -1,
                type: "textcloud",
                horizontalOrientation: "left",
                verticalOrientation: "top"
            },
            commonRangeBarSettings: {offset: 10, horizontalOrientation: "right", verticalOrientation: "bottom"}
        };
    n.viz.gauges.LinearGauge = n.viz.gauges.Gauge.inherit({
        _gaugeType: function () {
            return "linear"
        }, _defaultOptions: function () {
            return f(!0, this.callBase(), c)
        }, _setupArea: function (n) {
            var t = this.option("geometry");
            n.vertical = t.orientation === "vertical", n.x = 0, n.y = 0, n.startCoord = -100, n.endCoord = 100, n.totalSize = t.totalSize > 0 ? Number(t.totalSize) : i
        }, _getCreationOptions: function () {
            var n = this.callBase();
            return n.type = "linear", n
        }, _getCommonOptions: function () {
            var n = this._area;
            return f(!0, this.callBase(), {baseX: n.x, baseY: n.y, orientation: n.vertical ? "vertical" : "horizontal"})
        }, _combineOptions: function () {
            var i = [!0, {}].concat(h.apply(arguments)), n = f.apply(t, i);
            return n.x = u(n.baseX + Number(n.offset) || n.baseX), n.y = u(n.baseY + Number(n.offset) || n.baseY), n
        }, _measureMainElements: function () {
            var r = this, n = 1e3, t = 0, i = 0;
            return o(r._mainElements, function (r, u) {
                var f = u.measure();
                t = e(t, f.max), n = s(n, f.min), f.indent > 0 && (i = e(i, f.indent))
            }), {minBound: n, maxBound: t, indent: i}
        }, _applyMainLayout: function (n) {
            var f = this, t = f._area, i, e;
            t.vertical ? (i = f._layoutManager.selectRectBySizes({
                width: n.maxBound - n.minBound,
                height: t.totalSize
            }), e = i.horizontalMiddle() - (n.minBound + n.maxBound) / 2, t.startCoord = i.bottom - n.indent, t.endCoord = i.top + n.indent, t.x = u(t.x + e)) : (i = f._layoutManager.selectRectBySizes({
                height: n.maxBound - n.minBound,
                width: t.totalSize
            }), e = i.verticalMiddle() - (n.minBound + n.maxBound) / 2, t.startCoord = i.left + n.indent, t.endCoord = i.right - n.indent, t.y = u(t.y + e)), t.translator = r.createTranslator(t.startCoord, t.endCoord, t.startValue, t.endValue), f._layoutManager.setRect(i)
        }, _renderMainElements: function () {
            var n = this, t = n._area.x, i = n._area.y, r = n._area.translator;
            o(n._mainElements, function (n, f) {
                f.init({
                    x: u(t + Number(f._options.offset) || t),
                    y: u(i + Number(f._options.offset) || i),
                    translator: r
                }).render()
            })
        }, _createScale: function () {
            return r.createLinearScale()
        }, _createRangeContainer: function () {
            return r.createLinearRangeContainer()
        }, _createNeedle: function (n) {
            return r.createLinearNeedle(n)
        }, _createMarker: function (n) {
            return r.createLinearMarker(n)
        }, _createRangeBar: function () {
            return r.createLinearRangeBar()
        }, _getApproximateScreenRange: function () {
            var t = this, i = t._area, n = i.vertical ? t._mainRect.height() : t._mainRect.width();
            return n > i.totalSize && (n = i.totalSize), n = n * .8
        }, _getDefaultContainerSize: function () {
            var n = this.option("geometry");
            return n.orientation === "vertical" ? {width: 100, height: 300} : {width: 300, height: 100}
        }
    })
}(DevExpress, jQuery), function (n, t) {
    var s = n.formatHelper, f = window.Number, h = window.String, c = n.utils.isFunction, r = Math.round, e = t.extend,
        o = 4, u = {
            up: [-.5, -1, -1, 0, 0, -1, 1, 0, 0, 1, -1, 0, 0, 1],
            down: [.5, 1, 1, 0, 0, 1, -1, 0, 0, -1, 1, 0, 0, -1],
            left: [-1, .5, 0, 1, -1, 0, 0, -1, 1, 0, 0, 1, 1, 0],
            right: [1, -.5, 0, -1, 1, 0, 0, 1, -1, 0, 0, -1, -1, 0]
        };
    n.viz.gauges.__internals.Tooltip = n.Class.inherit({
        setup: function (n) {
            var t = this;
            return t._gauge = n, t._renderer = n._renderer, t._options = {}, t
        }, init: function (n) {
            var t = this;
            return e(!0, t._options, n), t
        }, render: function () {
            var n = this;
            return n._options.enabled ? (n._rootElement = n._rootElement || n._renderer.createGroup({"class": "tooltip"}), n._rootElement.append(n._gauge._rootElement), n._shadow = n._shadow || n._renderer.createArea().append(n._rootElement), n._cloud = n._cloud || n._renderer.createArea().append(n._rootElement), n._text = n._text || n._renderer.createText().append(n._rootElement), n._shadow.applySettings({
                stroke: "none",
                strokeWidth: 0,
                fill: "#000000",
                opacity: .1
            }), n._cloud.applySettings({stroke: "none", strokeWidth: 0}), n._text.applySettings({
                align: "center",
                font: n._options.font
            }), n._rootElement.applySettings({visibility: "hidden"}), n._visible = !1) : n.clear(), n
        }, clear: function () {
            var n = this;
            return n._rootElement && (n._rootElement.remove(), delete n._rootElement, delete n._shadow, delete n._cloud, delete n._text), n
        }, _formatValue: function (n, t) {
            var i = this._options, u = s.format(n, i.format, i.precision), r;
            return c(i.customizeText) ? (r = e(!0, t || {}, {
                value: n,
                valueText: u
            }), h(i.customizeText.call(r, r))) : u
        }, _selectMask: function (n, t, i, r, f) {
            var o = this._gauge._rootRect, e;
            return e = n + i / 2 > o.right ? u.left : n - i / 2 < o.left ? u.right : t - f - r < o.top ? u.down : u.up
        }, _getSettings: function (n, t, i, u, e) {
            var w = this._options, a = i + 2 * f(w.horizontalPadding), v = u + 2 * f(w.verticalPadding),
                l = f(w.arrowLength), s = this._selectMask(n, t, a, v, l), y, b, p, h, c;
            for (b = [h = r(n - s[12] * e), c = r(t - s[13] * e), h += r(s[0] * l), c += r(s[1] * l), h += r(s[2] * (a - l) / 2), c += r(s[3] * (v - l) / 2), h += r(s[4] * a), c += r(s[5] * v), h += r(s[6] * a), c += r(s[7] * v), h += r(s[8] * a), c += r(s[9] * v), h += r(s[10] * (a - l) / 2), c += r(s[11] * (v - l) / 2)], p = b.slice(0), h = r(s[12] * o), c = r(s[13] * o), y = 0; y < 14; y += 2) p[y] += h, p[y + 1] += c;
            return h = r(n - s[12] * (l + a / 2 + e)), c = r(t - s[13] * (l + v / 2 + e)) - 2, {
                x: h,
                y: c,
                cloudPoints: b,
                shadowPoints: p
            }
        }, show: function (n) {
            n = n || {};
            var t = this, f = t._formatValue(n.value, n.context), i, u;
            return t._text.applySettings({
                text: f,
                x: 0,
                y: 0
            }), i = t._text.getBBox(), u = t._getSettings(n.x, n.y, i.width, i.height, n.offset || 0), t._shadow.applySettings({points: u.shadowPoints}), t._cloud.applySettings({
                points: u.cloudPoints,
                fill: n.color
            }), t._text.applySettings({
                x: u.x,
                y: r(u.y - i.y - i.height / 2 + 2)
            }), !t._visible && t._rootElement.applySettings({visibility: "visible"}) && (t._visible = !0), t
        }, hide: function () {
            var n = this;
            return n._visible && n._rootElement.applySettings({visibility: "hidden"}) && (n._visible = !1), n
        }, enabled: function () {
            return !!this._rootElement
        }
    })
}(DevExpress, jQuery), function (n, t) {
    function a(n) {
        var t = n.data.tracker;
        t._context !== null && t._processLeave(), t._context = n.data, t._processEnter(n)
    }

    function v(n) {
        var t = n.data.tracker;
        t._context !== null && (t._processLeave(), t._context = null)
    }

    function y(n) {
        n.data.tracker._processMove(n)
    }

    var u = window.setTimeout, f = window.clearTimeout, l = window.Number, e = t.extend, o = t.each, s = Math.abs,
        h = 200, c = 3, p = {mouseover: a, mouseout: v}, r = {mousemove: y};
    n.viz.gauges.__internals.Tracker = n.Class.inherit({
        setup: function (n) {
            var t = this;
            return t._gauge = n, t._listeners = [], t._context = null, t._options = {}, t._waitHoverCallback = function () {
                t._context.element.off(r), t._context.hover = !0, t._processHoverOn()
            }, t
        }, init: function (n) {
            return e(!0, this._options, n), this
        }, activate: function () {
            var n = this;
            return n._detachListeners(), n._gauge._tooltip.enabled() && n._attachListeners(), n._gauge._trackerGroup.toForeground(), n._tooltipDelay = n._options.tooltipDelay >= 0 ? l(n._options.tooltipDelay) : 0, n
        }, _attachListeners: function () {
            var n = this;
            o(n._gauge._getTrackedElements(), function (t, i) {
                var r;
                if (i.target.getTrackingElement && (r = i.target.getTrackingElement(), r)) {
                    n._listeners.push(r);
                    r.on(p, {tracker: n, element: r, target: i.target, info: i.info})
                }
            })
        }, _detachListeners: function () {
            var n = this;
            o(n._listeners, function (n, t) {
                t.off()
            }), n._listeners.length = 0
        }, _processEnter: function (n) {
            var i = this, t = i._context;
            t.x = n.pageX, t.y = n.pageY;
            t.element.on(r, t);
            t.hoverTimeout = u(i._waitHoverCallback, h)
        }, _processLeave: function () {
            var n = this;
            n._context.element.off(r), f(n._context.hoverTimeout), n._context.hover && n._processHoverOff(), delete n._context.hover
        }, _processMove: function (n) {
            var i = this, t = i._context;
            (s(n.pageX - t.x) > c || s(n.pageY - t.y) > c) && (t.x = n.pageX, t.y = n.pageY, f(t.hoverTimeout), t.hoverTimeout = u(i._waitHoverCallback, h))
        }, _processHoverOn: function () {
            this._gauge._tooltip.show(e(!0, this._context.target.getTooltipParameters(), {context: this._context.info}))
        }, _processHoverOff: function () {
            this._gauge._tooltip.hide()
        }
    })
}(DevExpress, jQuery), function (n) {
    n.viz.rangeSelector = {utils: {}}
}(DevExpress), function (n) {
    DevExpress.viz.rangeSelector.BaseVisualElement = n.Class.inherit({
        ctor: function (n) {
            this._renderer = n, this._isDrawn = !1
        }, applyOptions: function (n) {
            this._options = n || {}, this._applyOptions(this._options)
        }, _applyOptions: function () {
        }, redraw: function (n) {
            var t = this;
            t._isDrawn ? t._update(n || t._group) : (t._isDrawn = !(t._draw(n || t._group) === !1), n && (t._group = n))
        }, isDrawn: function () {
            return !!this._isDrawn
        }, isInitialized: function () {
            return !!this._options
        }, _draw: function () {
        }, _update: function (n) {
            n.clear(), this._draw(n)
        }
    })
}(DevExpress), function (n, t, i) {
    var u = t.viz.rangeSelector, s = t.viz.core, r = t.utils, f = u.utils, o = t.viz.core.ParseUtils,
        e = t.formatHelper, h = 100;
    u.consts = {fontHeightRatio: .55, emptySliderMarkerText: ". . ."}, u.formatValue = function (n, t) {
        var i = {value: n, valueText: e.format(n, t.format, t.precision)};
        return String(t.customizeText ? t.customizeText.call(i, i) : i.valueText)
    }, u.RangeSelector = t.ui.Component.inherit(function () {
        var v = 5, y = {
            size: i,
            margin: {left: 0, top: 0, right: 0, bottom: 0},
            scale: {
                showCustomBoundaryTicks: !0,
                showMinorTicks: !0,
                startValue: i,
                endValue: i,
                minorTickCount: i,
                minorTickInterval: i,
                majorTickInterval: i,
                useTicksAutoArrangement: !0,
                setTicksAtUnitBeginning: !0,
                minRange: i,
                maxRange: i,
                placeholderHeight: i,
                valueType: i,
                label: {visible: !0, format: i, precision: i, customizeText: i},
                marker: {visible: !0, label: {format: i, precision: i, customizeText: i}}
            },
            selectedRange: i,
            sliderMarker: {visible: !0, format: i, precision: i, customizeText: i, placeholderSize: i},
            behavior: {
                snapToTicks: !0,
                animationEnabled: !0,
                moveSelectedRangeByClick: !0,
                manualRangeSelectionEnabled: !0,
                allowSlidersSwap: !0,
                callSelectedRangeChanged: "onMovingComplete"
            },
            background: {color: "#C0BAE1", visible: !0, image: {url: i, location: "full"}},
            chart: {
                commonSeriesSettings: {type: "area", label: {visible: !1}, hoverMode: "none"},
                equalBarWidth: !0,
                topIndent: .1,
                bottomIndent: 0,
                valueAxis: {min: i, max: i, inverted: !1},
                series: i
            },
            dataSource: i,
            dataSourceField: "arg",
            redrawOnResize: !0,
            theme: i,
            selectedRangeChanged: null,
            incidentOccured: n.noop
        }, s = function (n, t, r) {
            var o = t === i ? u.consts.emptySliderMarkerText : u.formatValue(t, r), e = f.getTextBBox(n, o, r.font);
            return {
                width: Math.ceil(e.width) + 2 * r.padding,
                height: Math.ceil(e.height * u.consts.fontHeightRatio) + 2 * r.padding + r.pointerSize
            }
        }, h = function (n, t, i) {
            var r = u.formatValue(t, i.label), e = f.getTextBBox(n, r, i.label.font);
            return Math.ceil(e.width / 2)
        }, p = function (n, t, i) {
            var r = {
                left: t.left + i.left,
                top: t.top + i.top,
                width: n.width - t.left - t.right - i.left - i.right,
                height: n.height - t.top - t.bottom - i.top - i.bottom
            };
            return r.width <= 0 && (r.width = 1), r
        }, w = function (n) {
            var t, i, u;
            return r.isNumber(n) ? t = i = u = n : n && (r.isNumber(n.height) && (u = n.height), r.isNumber(n.width) ? t = i = n.width : n.width && (r.isNumber(n.width.left) && (t = n.width.left), r.isNumber(n.width.right) && (i = n.width.right))), {
                widthLeft: t,
                widthRight: i,
                height: u
            }
        }, b = function (n, t, i, r) {
            var c, a, v, l, y, u = 0, f = 0, e = 0, o;
            return o = w(r.placeholderSize), u = o.widthLeft || 0, f = o.widthRight || 0, e = o.height || 0, r.visible && (c = s(n, i.startValue, r), u || (u = c.width), l = s(n, i.endValue, r), f || (f = l.width), e || (e = Math.max(c.height, l.height))), a = h(n, i.startValue, i), v = h(n, i.endValue, i), u = Math.max(u, a), f = Math.max(f, v), {
                left: u,
                right: f,
                top: e,
                bottom: 0
            }
        }, k = function (n) {
            n && n.empty()
        }, d = function (n) {
            return n._element()
        }, g = function (n) {
            return u.rangeSelectorFactory.createRangeContainer(n)
        }, nt = function (n, t) {
            return u.rangeSelectorFactory.createTranslator(n, t)
        }, tt = function (n, t, i) {
            return {
                left: t.left,
                top: t.top,
                right: n.width - t.width - t.left,
                bottom: n.height - t.height - t.top + i,
                width: n.width,
                height: n.height
            }
        }, it = function (n) {
            var t = n.option("renderer");
            return t ? t : t = u.rangeSelectorFactory.createRenderer()
        }, rt = function (n) {
            return u.rangeSelectorFactory.createThemeManager(n)
        }, c = function (t, i) {
            var r = [n.type(t), n.type(i)];
            return n.inArray(), n.inArray("date", r) != -1 ? "datetime" : n.inArray("number", r) != -1 ? "numeric" : ""
        }, ut = function (n) {
            var r, f = n._dataSource && n._dataSource.items(), t = n.option("scale"), i = t.valueType;
            return i || (i = c(t.startValue, t.endValue)), (f || n.option("chart").series) && (r = new u.SeriesDataSource({
                renderer: n.renderer,
                dataSource: f,
                valueType: (i || "").toLowerCase(),
                chart: n.option("chart"),
                dataSourceField: n.option("dataSourceField"),
                backgroundColor: n._userBackgroundColor,
                incidentOccured: n.option("incidentOccured")
            })), r
        }, ft = function (n, i, u) {
            var f, e, o, s = !1;
            return r.isDefined(u.startValue) && r.isDefined(u.endValue) ? (s = u.inverted = u.startValue > u.endValue, e = s ? u.endValue : u.startValue, o = s ? u.startValue : u.endValue) : (r.isDefined(u.startValue) || r.isDefined(u.endValue)) && (e = u.startValue, o = u.endValue), f = i ? i.getBoundRange() : new t.viz.charts.Range, e !== o && (f.invertX = s, f.getBoundRange({
                minX: e,
                maxX: o,
                minVisibleX: e,
                maxVisibleX: o
            })), f.isDefinedX() || f.setStubDataX(u.valueType), f
        }, et = function (n, t, i) {
            var r, u = t.label.visible;
            return t.placeholderHeight ? t.placeholderHeight : (r = f.getTextBBox(n, "0", t.label.font), (u ? t.label.topIndent + r.height : 0) + (i ? t.marker.topIndent + t.marker.separatorHeight : 0))
        }, ot = function (n, t, i, f) {
            var e = t.isEmpty, a = u.rangeSelectorFactory.getTickProvider(), o, s, h, c, l = i.getBusinessRange();
            return o = {
                tickInterval: e ? 0 : n.option("scale").minorTickInterval,
                showCustomBoundaryTicks: t.showCustomBoundaryTicks,
                minorTickCount: t.minorTickCount
            }, s = {
                textOptions: {align: "center", font: t.label.font},
                renderer: n.renderer,
                getText: function (n) {
                    return u.formatValue(n, t.label)
                },
                translator: i,
                isStartTickGenerated: !r.isDefined(n.option("scale").majorTickInterval),
                tickInterval: t.majorTickInterval,
                textSpacing: v,
                setTicksAtUnitBeginning: t.setTicksAtUnitBeginning,
                useTicksAutoArrangement: t.useTicksAutoArrangement,
                hideLabels: e
            }, h = e ? l.minX : t.startValue, c = e ? l.maxX : t.endValue, a.getFullTicks(h, c, f, s, o)
        }, st = function (n, t, i) {
            var f = u.rangeSelectorFactory.getTickProvider(), r = f.getTickIntervals(n.startValue, n.endValue, t, {
                tickInterval: n.majorTickInterval,
                incidentOccured: i
            }, {tickInterval: n.minorTickInterval, incidentOccured: i});
            n.minorTickInterval = r.minorTickInterval, n.majorTickInterval = r.majorTickInterval
        }, ht = function (n, t, u, f, o) {
            var s = r.isDefined(u.minVisibleX) ? u.minVisibleX : u.minX,
                h = r.isDefined(u.maxVisibleX) ? u.maxVisibleX : u.maxX;
            t && !t.isEmpty() && (o.startValue = o.inverted ? h : s, o.endValue = o.inverted ? s : h), o.isEmpty = !r.isDefined(o.startValue) || !r.isDefined(o.endValue) || o.startValue === o.endValue || o.valueType === "string", o.isEmpty ? o.startValue = o.endValue = i : (st(o, f, n.option("incidentOccured")), o.valueType !== "datetime" || r.isDefined(o.label.format) || (o.label.format = o.marker.visible ? r.getDateUnitInterval(o.majorTickInterval) : e.getDateFormatByTickInterval(o.startValue, o.endValue, o.majorTickInterval)))
        }, ct = function (t, i, u) {
            var f = n.extend(!0, {}, t.option("sliderMarker")), o;
            return f.format || (!t.option("behavior").snapToTicks && r.isNumber(i.startValue) && (o = Math.abs(i.endValue - i.startValue), f.format = "fixedPoint", f.precision = r.getSignificantDigitPosition(o / u)), i.valueType === "datetime" && (f.format = i.marker.visible ? r.getDateUnitInterval(r.isDefined(i.minorTickInterval) && i.minorTickInterval !== 0 ? i.minorTickInterval : i.majorTickInterval) : e.getDateFormatByTickInterval(i.startValue, i.endValue, i.minorTickInterval !== 0 ? i.minorTickInterval : i.majorTickInterval))), f
        }, lt = function (n) {
            return n.valueType == "datetime" && n.marker.visible
        }, at = function (n, t) {
            var i = t.minorTickInterval || t.majorTickInterval;
            n = n.getBoundRange({intervalX: i})
        }, vt = function (t, u) {
            var f = n.extend(!0, {}, t.option("scale")), h = t.option("incidentOccured"), e = 0,
                a = new o({incidentOccured: h}), s = a.correctValueType((f.valueType || "").toLowerCase()), l;
            return (u && (s = u.getCalculatedValueType() || s), s || (s = c(f.startValue, f.endValue) || "string"), f.valueType = s, f.valueType === "string") ? (h("The type of the argument values specified in the data source is unsupported."), f) : (l = a.getParser(s, "scale"), r.isDefined(f.startValue) && (e = l(f.startValue), r.isDefined(e) ? f.startValue = e : (f.startValue = i, h.call(null, "Cannot parse the value specified as the startValue property of the scale configuration object."))), r.isDefined(f.endValue) && (e = l(f.endValue), r.isDefined(e) ? f.endValue = e : (f.endValue = i, h.call(null, "Cannot parse the value specified as the endValue property of the scale configuration object."))), f.parser = l, f)
        }, yt = function (n, t, i) {
            var r = n.option("size") || {};
            t.height || r.height === 0 || (t.height = i.valueType === "datetime" && i.marker.visible !== !1 ? 160 : 120), t.width || r.width === 0 || (t.width = 400)
        }, pt = function (n) {
            var u, r, f, e, i, o, t, s, h, c = n.container, v;
            if (n._isUpdating = !0, i = a(n), n._actualSize = i, r = ut(n), t = vt(n, r), yt(n, i, t), i.width && i.height && c.is(":visible")) n.stopRedraw = !1; else {
                n.stopRedraw = !0, n.option("incidentOccured")("RangeSelector can not be drawn as container is not visible");
                return
            }
            wt(n, i), f = ft(n, r, t), ht(n, r, f, i.width, t), at(f, t), s = ct(n, t, i.width), h = kt(n, t), o = b(n.renderer, i, t, s), u = p(i, n.option("margin"), o), e = et(n.renderer, t, lt(t)), n.translator = nt(f, tt(i, u, e)), t.ticksInfo = ot(n, t, n.translator, u.width), r && r.adjustSeriesDimensions(n.translator), n.rangeContainer.applyOptions({
                canvas: u,
                scaleLabelsAreaHeight: e,
                sliderMarkerSpacing: o,
                translator: n.translator,
                selectedRange: h,
                scale: t,
                behavior: n.option("behavior"),
                background: n.option("background"),
                chart: n.option("chart"),
                seriesDataSource: r,
                sliderMarker: s,
                sliderHandles: n.option("sliderHandles"),
                shutter: n.option("shutter"),
                selectedRangeChanged: l(n),
                setSelectedRange: function (t) {
                    n.setSelectedRange(t)
                }
            }), n._isUpdating = !1
        }, l = function (n) {
            return function (t) {
                var i = n.option("selectedRangeChanged");
                n.option("selectedRange", t), i && i(t)
            }
        }, a = function (n) {
            var i = n.container, r = n.option("size") || {}, t = {width: r.width, height: r.height};
            return i && (t.width || (t.width = i.width()), t.height || (t.height = i.height())), t
        }, wt = function (n, t) {
            var i = n.renderer;
            i.isInitialized() ? i.getRoot().applySettings({
                width: t.width,
                height: t.height
            }) : (i.recreateCanvas(t.width, t.height), i.draw(n.container[0]))
        }, bt = function (n, t) {
            var i;
            !n.option("chart").theme && t && t.theme && (i = t.theme, i && (typeof i == "object" && (i = i.chart || {}, i.name = t.theme.name), n.option("chart").theme = i))
        }, kt = function (n, t) {
            var i = n.option("selectedRange"), f = t.parser || function () {
                return null
            }, u = function (i, u) {
                var e, o = t[u];
                return r.isDefined(i) && (e = f(i)), r.isDefined(e) ? o = e : n.option("incidentOccured").call(null, "Cannot parse the value specified as the " + u + " property of the selectedRange configuration object."), o
            };
            return i ? {
                startValue: u(i.startValue, "startValue"),
                endValue: u(i.endValue, "endValue")
            } : {startValue: t.startValue, endValue: t.endValue}
        }, dt = function (n) {
            var t = n._actualSize, i = a(n);
            return t && (t.width !== i.width || t.height !== i.height)
        }, gt = function (n) {
            return t.utils.createResizeHandler(function () {
                dt(n) && n._render(!0)
            })
        };
        return {
            _defaultOptions: function () {
                return y
            }, _dataSourceOptions: function () {
                return {paginate: !1}
            }, _init: function () {
                var t = this;
                t.container = d(t), k(t.container), t.renderer = it(t), t.rangeContainer = g(t.renderer), t.option("redrawOnResize") === !0 && r.windowResizeCallbacks.add(gt(t)), n.isFunction(t.option("incidentOccured")) || t.option("incidentOccured", n.noop), t._reinitDataSource()
            }, _reinitDataSource: function () {
                this._initDataSource(), this._loadDataSource()
            }, _initOptions: function (n) {
                var t = this, i;
                n = n || {}, i = rt(n.theme), i.setBackgroundColor(n.containerBackgroundColor), t.option(i.applyRangeSelectorTheme(n)), bt(t, n), n.background && (t._userBackgroundColor = n.background.color)
            }, _render: function (n) {
                var t = this, r, i;
                pt(t), t.stopRedraw || (n ? (i = t.option("behavior"), r = i.animationEnabled, i.animationEnabled = !1, t.rangeContainer.redraw(), i.animationEnabled = r) : t.rangeContainer.redraw())
            }, _optionChanged: function (n) {
                var t = this;
                n === "dataSource" ? (t._reinitDataSource(), t._invalidate()) : n === "selectedRange" ? t.setSelectedRange(t.option("selectedRange")) : n === "selectedRangeChanged" ? t.rangeContainer.slidersContainer.selectedRangeChanged = l(t) : t._invalidate()
            }, _handleDataSourceChanged: function () {
                var n = this;
                n.renderer.isInitialized() && n._render()
            }, getSelectedRange: function () {
                var t = this, n = t.rangeContainer.slidersContainer.getSelectedRange();
                return {startValue: n.startValue, endValue: n.endValue}
            }, setSelectedRange: function (n) {
                var i = this, t;
                !i._isUpdating && n && ((t = i.rangeContainer.slidersContainer.getSelectedRange(), t && t.startValue === n.startValue && t.endValue === n.endValue) || i.rangeContainer.slidersContainer.setSelectedRange(n))
            }
        }
    }()).include(t.ui.DataHelperMixin)
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.rangeSelector;
    r.RangeContainer = r.BaseVisualElement.inherit(function () {
        var t = function (n) {
            this.callBase(n), this.slidersContainer = u(n), this.rangeView = e(n), this.scale = f(n)
        }, i = function (n) {
            var t = this, i = n.scale.isEmpty, r = {
                left: n.canvas.left,
                top: n.canvas.top,
                width: n.canvas.width,
                height: n.canvas.height >= n.scaleLabelsAreaHeight ? n.canvas.height - n.scaleLabelsAreaHeight : 0
            };
            t._viewCanvas = r, t.slidersContainer.applyOptions({
                canvas: r,
                translator: n.translator,
                scale: n.scale,
                selectedRange: n.selectedRange,
                sliderMarker: n.sliderMarker,
                sliderHandles: n.sliderHandles,
                shutter: n.shutter,
                behavior: n.behavior,
                selectedRangeChanged: n.selectedRangeChanged,
                isEmpty: i
            }), t.rangeView.applyOptions({
                canvas: r,
                translator: n.translator,
                background: n.background,
                chart: n.chart,
                seriesDataSource: n.seriesDataSource,
                behavior: n.behavior,
                isEmpty: i
            }), t.scale.applyOptions({
                canvas: n.canvas,
                translator: n.translator,
                scale: n.scale,
                hideLabels: i,
                scaleLabelsAreaHeight: n.scaleLabelsAreaHeight,
                setSelectedRange: n.setSelectedRange
            })
        }, u = function (n) {
            return r.rangeSelectorFactory.createSlidersContainer(n)
        }, f = function (n) {
            return r.rangeSelectorFactory.createScale(n)
        }, e = function (n) {
            return r.rangeSelectorFactory.createRangeView(n)
        }, n = function (n, t) {
            return {
                left: n.left - t.left,
                top: n.top - t.top,
                width: n.width + t.right + t.left,
                height: n.height + t.bottom + t.top
            }
        }, o = function () {
            var t = this, i, e, o, s, r, h = t._options.size, u = n(t._options.canvas, t._options.sliderMarkerSpacing),
                f = t._viewCanvas;
            t._clipRect = t._renderer.createClipRect(u.left, u.top, u.width, u.height), i = t._renderer.drawGroup({
                "class": "rangeContainer",
                clipId: t._clipRect.id
            }), t._viewClipRect = t._renderer.createClipRect(f.left, f.top, f.width, f.height), e = t._renderer.createGroup({
                "class": "view",
                clipId: t._viewClipRect.id
            }), e.append(i), t.rangeView.redraw(e), o = t._renderer.createGroup({"class": "slidersContainer"}), o.append(i), t.slidersContainer.redraw(o), s = t._renderer.createGroup({"class": "scale"}), s.append(i), t.scale.redraw(s), r = t._renderer.createGroup({"class": "trackers"}), r.append(i), t._trackersGroup = r, t.slidersContainer.appendTrackers(r)
        }, s = function () {
            var t = this, i = n(t._options.canvas, t._options.sliderMarkerSpacing), r = t._viewCanvas;
            t._clipRect.applySettings({
                x: i.left,
                y: i.top,
                width: i.width,
                height: i.height
            }), t._viewClipRect.applySettings({
                x: r.left,
                y: r.top,
                width: r.width,
                height: r.height
            }), t.rangeView.redraw(), t.slidersContainer.redraw(), t.slidersContainer.appendTrackers(t._trackersGroup), t.scale.redraw()
        };
        return {ctor: t, _applyOptions: i, _draw: o, _update: s}
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.viz.rangeSelector, f = t.formatHelper, u = t.utils, e = 5;
    r.Scale = r.BaseVisualElement.inherit({
        _setupDateTickInterval: function (n) {
            this.dateUnitInterval = u.getDateUnitInterval(n), this._prepareTickIntervalObject(n, this.dateUnitInterval)
        }, _prepareTickIntervalObject: function (n, t) {
            if (u.isObject(n) && u.isString(t)) for (var i in n) i !== t + "s" && delete n[i]
        }, _prepareDatesDifferences: function (n, t) {
            var i = t;
            i === "week" && (i = "day"), i === "quarter" && (i = "month"), n[i] && (n[i] = !1, n.count--)
        }, _getMarkerDate: function (n, t) {
            var i = new Date(n.getTime()), r = 0;
            switch (t) {
                case"quarter":
                    r = f.getFirstQuarterMonth(n.getMonth());
                case"month":
                    i.setMonth(r);
                case"week":
                case"day":
                    i.setDate(1);
                case"hour":
                    i.setHours(0, 0, 0, 0);
                    break;
                case"millisecond":
                    i.setMilliseconds(0);
                    break;
                case"second":
                    i.setSeconds(0, 0);
                    break;
                case"minute":
                    i.setMinutes(0, 0, 0)
            }
            return i
        }, _drawDateMarker: function (n, t) {
            var r, u, f, i;
            t.x !== null && (i = this._options.scale, this.lineOptions["class"] = "dx-range-selector-date-marker", this._renderer.createLine(t.x, t.y, t.x, t.y + i.marker.separatorHeight, this.lineOptions).append(t.group), f = this._getLabel(n, t.label), r = t.x + i.tick.width + i.marker.textLeftIndent, u = t.y + i.marker.textTopIndent + i.label.font.size, this.textOptions.align = "left", this._renderer.createText(f, r, u, this.textOptions).append(t.group))
        }, _drawDateMarkers: function (n, t) {
            var h, i, r, e, o, s;
            if (this._options.scale.valueType === "datetime" && this.visibleMarkers && (s = [], n.length > 1)) {
                for (i = 1; i < n.length; i++) r = u.getDatesDifferences(n[i - 1], n[i]), this._prepareDatesDifferences(r, this.dateUnitInterval), r.count > 0 && (e = this._getMarkerDate(n[i], this.dateUnitInterval), o = this.translator.translateX(e), o !== null && s.push({
                    date: e,
                    posX: o
                }), this._drawDateMarker(e, {
                    group: t,
                    y: this._options.canvas.top + this._options.canvas.height - this.markersAreaHeight + this._options.scale.marker.topIndent,
                    x: o,
                    label: this._getLabelFormatOptions(f.getDateFormatByDifferences(r))
                }));
                this._initializeMarkersEvents(s, t)
            }
        }, _getLabelFormatOptions: function (t) {
            return u.isDefined(this._options.scale.marker.label.format) ? this._options.scale.marker.label : n.extend({}, this._options.scale.marker.label, {format: t})
        }, _calculateRangeByMarkerPosition: function (n, t, i) {
            var r = {}, f, u;
            for (f in t) u = t[f], i.inverted ? n < u.posX ? r.endValue = u.date : r.startValue || (r.startValue = u.date) : n >= u.posX ? r.startValue = u.date : r.endValue || (r.endValue = u.date);
            return r.startValue = r.startValue || i.startValue, r.endValue = r.endValue || i.endValue, r
        }, _initializeMarkersEvents: function (n, t) {
            var i = this,
                s = this._options.canvas.top + this._options.canvas.height - this.markersAreaHeight + this._options.scale.marker.topIndent,
                u, f, h, e, o;
            if (n.length > 0) {
                u = i._renderer.createRect(i._options.canvas.left, s, i._options.canvas.width, i._options.scale.marker.separatorHeight, 0, {
                    fill: "grey",
                    stroke: "grey",
                    opacity: .0001
                }), u.append(t);
                u.on(r.events.start, function (t) {
                    f = r.utils.getRootOffsetLeft(i._renderer), e = r.utils.getEventPageX(t) - f, o = i._calculateRangeByMarkerPosition(e, n, i._options.scale), i._options.setSelectedRange(o)
                });
                i._markersTracker = u
            }
        }, _getLabel: function (n, t) {
            var i = {value: n, valueText: f.format(n, t.format, t.precision)};
            return String(t.customizeText ? t.customizeText.call(i, i) : i.valueText)
        }, _drawLabel: function (n, t) {
            var i = this._options.canvas.top + this._options.canvas.height - this.markersAreaHeight,
                r = this._renderer.createText(this._getLabel(n, this._options.scale.label), this.translator.translateX(n), i, this.textOptions);
            r.append(t)
        }, _drawTick: function (n, t) {
            this.lineOptions["class"] = "dx-range-selector-tick";
            var r = this._options.canvas.top + this._options.canvas.height - this.scaleLabelsAreaHeight,
                i = this.translator.translateX(n),
                u = this._renderer.createLine(i, this._options.canvas.top, i, r, this.lineOptions).append(t)
        }, _redraw: function (n) {
            for (var r = this, u = r._options.scale, f = u.ticksInfo.majorTicks, e = u.ticksInfo.minorTicks, o = u.ticksInfo.customBoundaryTicks, s = r._options.hideLabels || f.hideLabels || !u.label.visible, i = 0; i < f.length; i++) s || r._drawLabel(f[i], n), r._drawTick(f[i], n);
            if (u.showMinorTicks) for (i = 0; i < e.length; i++) r._drawTick(e[i], n);
            for (i = 0; i < o.length; i++) r._drawTick(o[i], n);
            r._drawDateMarkers(f, n)
        }, _applyOptions: function (n) {
            var t = n.scale, r;
            this.textOptions = {
                align: "center",
                "class": "dx-range-selector-scale",
                font: t.label.font,
                style: {"-webkit-user-select": "none"}
            }, this.lineOptions = {
                strokeWidth: t.tick.width,
                stroke: t.tick.color,
                strokeOpacity: t.tick.opacity
            }, this._setupDateTickInterval(t.ticksInfo.majorTickInterval), this.visibleMarkers = t.marker.visible === i ? !0 : t.marker.visible, r = t.label.visible ? t.label.topIndent + t.label.font.size : 0, this.scaleLabelsAreaHeight = n.scaleLabelsAreaHeight, this.markersAreaHeight = this.scaleLabelsAreaHeight - r, this.translator = n.translator
        }, _draw: function (n) {
            var t = this._renderer.createGroup();
            this._redraw(t, !1), t.append(n)
        }, _update: function (n) {
            var t = this.callBase;
            this._markersTracker && this._markersTracker.off(r.events.start, "**"), this.callBase = t, this.callBase(n)
        }
    })
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.rangeSelector, u = t.viz.renderers;
    r.rangeSelectorFactory = function () {
        return {
            createRenderer: function (n) {
                return new u.Renderer(n)
            }, createTranslator: function (n, i) {
                return new t.viz.core.LinearTranslator(n, i)
            }, getTickProvider: function () {
                return t.viz.core.tickProvider
            }, createRangeContainer: function (n) {
                return new r.RangeContainer(n)
            }, createSlidersContainer: function (n) {
                return new r.SlidersContainer(n)
            }, createScale: function (n) {
                return new r.Scale(n)
            }, createSliderMarker: function (n) {
                return new r.SliderMarker(n)
            }, createRangeView: function (n) {
                return new r.RangeView(n)
            }, createThemeManager: function (n) {
                return new r.ThemeManager(n)
            }, createSlider: function (n, t) {
                return new r.Slider(n, t)
            }, createSlidersEventsManager: function (n, t, i) {
                return new r.SlidersEventsManager(n, t, i)
            }, createSlidersController: function (n) {
                return new r.SlidersController(n)
            }
        }
    }()
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.rangeSelector, h = t.utils, e = window.navigator.msPointerEnabled, u = t.utils.isNumber,
        f = t.utils.isDate, o = 0, s = 1;
    r.SlidersContainer = r.BaseVisualElement.inherit(function () {
        return {
            _drawAreaTracker: function (n) {
                var t = this, i, r;
                i = t._renderer.createRect(t._options.canvas.left, t._options.canvas.top, t._options.canvas.width, t._options.canvas.height, 0, {
                    fill: "grey",
                    stroke: "grey",
                    opacity: .0001
                }), i.append(n), r = t._renderer.createRect(t._options.canvas.left, t._options.canvas.top, t._options.canvas.width, t._options.canvas.height, 0, {
                    fill: "grey",
                    stroke: "grey",
                    opacity: .0001,
                    style: {cursor: "pointer"}
                }), r.append(n), t._controller.setAreaTrackers(i, r)
            }, _processSelectionChanged: function (n) {
                var t = this, r = function (n) {
                    return n && t._lastSelectedRange.startValue === n.startValue && t._lastSelectedRange.endValue === n.endValue
                }, i = t.getSelectedRange();
                n && (t._options.behavior.callSelectedRangeChanged || "").toLowerCase() !== "onmoving" || !t._options.selectedRangeChanged || r(i) || (t._updateLastSelectedRange(i), typeof t._options.selectedRangeChanged == "function" && t._options.selectedRangeChanged.call(null, i), n || r(i) || t.setSelectedRange(i))
            }, _updateLastSelectedRange: function (n) {
                n = n || this._options.selectedRange, this._lastSelectedRange = {
                    startValue: n.startValue,
                    endValue: n.endValue
                }
            }, _createSlider: function (n) {
                return r.rangeSelectorFactory.createSlider(this._renderer, n)
            }, _createSlidersController: function (n) {
                return r.rangeSelectorFactory.createSlidersController(n)
            }, _createSlidersEventsManager: function (n) {
                var t = this;
                return r.rangeSelectorFactory.createSlidersEventsManager(t._renderer, n, function (n) {
                    t._processSelectionChanged(n)
                })
            }, ctor: function (n) {
                var t = this, i;
                t.callBase(n), i = [t._createSlider(o), t._createSlider(s)], t._controller = t._createSlidersController(i), t._eventsManager = t._createSlidersEventsManager(t._controller), t._lastSelectedRange = {}
            }, getSelectedRange: function () {
                return this._controller.getSelectedRange()
            }, setSelectedRange: function (n) {
                var t = this, i = t._options.scale, r, e, o = t._options.selectedRange;
                n && (r = n.startValue, e = n.endValue), (u(i.startValue) && u(r) || f(i.startValue) && f(r)) && (o.startValue = r), (u(i.endValue) && u(e) || f(i.endValue) && f(e)) && (o.endValue = e), t._controller.applySelectedRange(o), t._controller.applyPosition(), t._processSelectionChanged(!1)
            }, appendTrackers: function (n) {
                this._controller.appendTrackers(n)
            }, _applyOptions: function (n) {
                var t = this;
                t._controller.applyOptions({
                    translator: n.translator,
                    canvas: n.canvas,
                    sliderMarker: n.sliderMarker,
                    sliderHandles: n.sliderHandles,
                    shutter: n.shutter,
                    scale: n.scale,
                    behavior: n.behavior
                }), t._eventsManager.applyOptions({behavior: n.behavior})
            }, _draw: function (n) {
                var t = this;
                e && (t._renderer.getRoot().element.style.msTouchAction = "none"), t._controller.redraw(n), t._drawAreaTracker(n), t._eventsManager.initialize(), t._update()
            }, _update: function () {
                var n = this, t = n._options.isEmpty;
                n._eventsManager.setEnabled(!t), n._controller.applySelectedRange(t ? {} : n._options.selectedRange), n._controller.applyPosition(n.isDrawn()), n._updateLastSelectedRange(), n._controller.redraw()
            }
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var f = t.viz.rangeSelector, e = t.utils, r = 0, u = 1;
    f.SlidersController = t.Class.inherit(function () {
        return {
            ctor: function (n) {
                this._sliders = n, n[r].setAnotherSlider(n[u]), n[u].setAnotherSlider(n[r])
            }, setAreaTrackers: function (n, t) {
                this._areaTracker = n, this._selectedAreaTracker = t
            }, applyOptions: function (n) {
                var i = this, t;
                i._options = n, i.getSlider(r).applyOptions(n), i.getSlider(u).applyOptions(n), n.behavior.snapToTicks && (t = n.scale.ticksInfo.fullTicks, t.length > 1 && t[0] > t[t.length - 1] && (t = t.reverse()), i.getSlider(r).setAvailableValues(t), i.getSlider(u).setAvailableValues(t))
            }, processDocking: function (n) {
                var t = this;
                n !== i ? t.getSlider(n).processDocking() : (t.getSlider(r).processDocking(), t.getSlider(u).processDocking()), t.setTrackersCursorStyle("default"), t.applyAreaTrackersPosition()
            }, getSelectedRangeInterval: function () {
                var n = this;
                return f.utils.getInterval(n.getSlider(r).getValue(), n.getSlider(u).getValue())
            }, moveSliders: function (n, t) {
                var i = this;
                i.getSlider(r).setPosition(i.getSlider(r).getPosition() + n, !1, t), i.applyPosition(!0)
            }, moveSlider: function (n, t, i, u, f, e) {
                var o = this, s = o.getSlider(n), h = s.getAnotherSlider(), l = h.getIndex(), c;
                s.canSwap() && (n === r ? i > h.getPosition() : i < h.getPosition()) && (c = t, t || Math.abs(u) >= Math.abs(f) && u * f < 0 && (c = !0, i += 2 * f, e(-f)), c && (o.swapSliders(), h.applyPosition(!0))), s.setPosition(i, !0), s.applyPosition(!0), o.applyAreaTrackersPosition(), o.setTrackersCursorStyle("w-resize")
            }, applySelectedAreaCenterPosition: function (n) {
                var t = this, i = (t.getSlider(u).getPosition() - t.getSlider(r).getPosition()) / 2,
                    f = t.getSelectedRangeInterval();
                t.getSlider(r).setPosition(n - i, !1, f), t.applyPosition(), t.processDocking()
            }, processManualSelection: function (n, t, i) {
                var e = this, o, f, s = [Math.min(n, t), Math.max(n, t)];
                o = n < t ? r : u, f = n < t ? u : r, e.getSlider(f).setPosition(s[f]), e.getSlider(o).setPosition(s[o]), e.getSlider(f).setPosition(s[f], !0), e.getSlider(f).startEventHandler(i), e.getSlider(o).processDocking(), e.getSlider(f).applyPosition(!0)
            }, applySelectedRange: function (n) {
                var t = this, i = t._options.scale.inverted;
                !i && n.startValue > n.endValue || i && n.startValue < n.endValue ? (t.getSlider(r).setValue(n.endValue), t.getSlider(u).setValue(n.startValue)) : (t.getSlider(r).setValue(n.startValue), t.getSlider(u).setValue(n.endValue))
            }, getSelectedRange: function () {
                var n = this;
                return {startValue: n.getSlider(r).getValue(), endValue: n.getSlider(u).getValue()}
            }, swapSliders: function () {
                var n = this;
                n._sliders.reverse(), n.getSlider(r).changeLocation(), n.getSlider(u).changeLocation()
            }, applyAreaTrackersPosition: function () {
                var n = this, t = n.getSelectedRange(), i = n._options.scale,
                    f = n.getSlider(u).getPosition() - n.getSlider(r).getPosition(), e = {
                        x: n.getSlider(r).getPosition(),
                        width: f < 0 ? 0 : f,
                        y: n._options.canvas.top,
                        height: n._options.canvas.height,
                        style: {cursor: i.endValue - i.startValue == t.endValue - t.startValue ? "default" : "pointer"}
                    };
                n._selectedAreaTracker.applySettings(e), n._areaTracker.applySettings({
                    x: n._options.canvas.left,
                    width: n._options.canvas.width,
                    y: n._options.canvas.top,
                    height: n._options.canvas.height
                })
            }, applyPosition: function (n) {
                var t = this;
                t.getSlider(r).applyPosition(n), t.getSlider(u).applyPosition(n), t.applyAreaTrackersPosition()
            }, redraw: function (n) {
                var t = this;
                t.getSlider(r).redraw(n), t.getSlider(u).redraw(n)
            }, appendTrackers: function (n) {
                var t = this;
                t._areaTracker && t._selectedAreaTracker && (t._areaTracker.append(n), t._selectedAreaTracker.append(n)), t.getSlider(r).appendTrackers(n), t.getSlider(u).appendTrackers(n)
            }, getSlider: function (n) {
                return this._sliders[n]
            }, getAreaTracker: function () {
                return this._areaTracker
            }, getSelectedAreaTracker: function () {
                return this._selectedAreaTracker
            }, setTrackersCursorStyle: function (n) {
                var t = this;
                t._selectedAreaTracker.applySettings({style: {cursor: n}}), t._areaTracker.applySettings({style: {cursor: n}})
            }
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var r = t.viz.rangeSelector, u = t.utils, f = "ontouchstart" in window, e = window.navigator.msPointerEnabled;
    r.events = {
        start: e ? "MSPointerDown" : f ? "touchstart mousedown" : "mousedown",
        move: e ? "MSPointerMove" : f ? "touchmove mousemove" : "mousemove",
        end: e ? "MSPointerUp MSPointerCancel" : f ? "touchend mouseup" : "mouseup"
    };
    var s = 10, o = 0, h = 1;
    r.SlidersEventsManager = t.Class.inherit(function () {
        var e = function (n) {
            return r.utils.getRootOffsetLeft(n._renderer)
        }, n = function (n) {
            return r.utils.getEventPageX(n)
        }, t = function (n) {
            var r = n || window.event, t = r.originalEvent, f = r.touches, u = t ? t.pointerType : !1,
                e = t ? t.touches : !1, o = r.which === i && r.button === 1, s = o || r.which === 1,
                h = t && u !== i && (u === t.MSPOINTER_TYPE_TOUCH || u === t.MSPOINTER_TYPE_MOUSE),
                c = f && f.length > 0 || e && e.length > 0;
            return s || h || c
        }, f = function (n) {
            return n && n.type && n.type.indexOf("touch") === 0
        }, c = function (i, o) {
            var p = i._renderer, v, c = i._slidersController, a = i._processSelectionChanged, s = c.getSlider(o),
                w = s.getAnotherSlider(), y, l, h;
            s.startEventHandler = function (r) {
                i._enabled && t(r) && !h && (y = this === s.getSliderTracker().element, h = !0, v = f(r), l = n(r) - s.getPosition() - e(i), r.stopPropagation(), r.preventDefault())
            };
            s.on(r.events.start, s.startEventHandler);
            u.subscribeEventToDocument(r.events.end, function () {
                h && (h = !1, c.processDocking(), a(!1))
            });
            p.getRoot().on(r.events.move, function (r) {
                var k, u, o, p = e(i), w, b = s.getIndex();
                v === f(r) && (!t(r, !0) && h ? (h = !1, c.processDocking(), a(!1)) : h && (r.preventDefault(), u = n(r), w = u - l - p, o = u - s.getPosition() - p, c.moveSlider(b, y, w, o, l, function (n) {
                    l = n
                }), a(!0)))
            })
        }, l = function (i) {
            var v = i._renderer, c, e = i._slidersController, h = i._processSelectionChanged,
                y = e.getSelectedAreaTracker(), s = !1, l, a;
            y.on(r.events.start, function (r) {
                i._enabled && t(r) && !s && (s = !0, c = f(r), l = n(r) - e.getSlider(o).getPosition(), a = e.getSelectedRangeInterval(), r.stopPropagation(), r.preventDefault())
            });
            u.subscribeEventToDocument(r.events.end, function () {
                s && (s = !1, e.processDocking(), h(!1))
            });
            v.getRoot().on(r.events.move, function (i) {
                var r, u;
                c === f(i) && (s && !t(i) && (s = !1, e.processDocking(), h(!1)), s && (i.preventDefault(), u = n(i), r = u - e.getSlider(o).getPosition() - l, e.moveSliders(r, a), h(!0)))
            })
        }, a = function (i) {
            var v = i._renderer, a, c = i._slidersController, l = i._processSelectionChanged, y = c.getAreaTracker(),
                o = !1, p = !1, h;
            y.on(r.events.start, function (r) {
                i._enabled && t(r) && !o && (o = !0, a = f(r), h = n(r))
            });
            u.subscribeEventToDocument(r.events.end, function (t) {
                var r;
                o && (r = n(t), i._options.behavior.moveSelectedRangeByClick && Math.abs(h - r) < s && c.applySelectedAreaCenterPosition(r - e(i)), o = !1, l(!1))
            });
            v.getRoot().on(r.events.move, function (r) {
                var u, v, y, p = e(i);
                a === f(r) && (o && !t(r) && (o = !1, l(!1)), o && (u = n(r), i._options.behavior.manualRangeSelectionEnabled && Math.abs(h - u) >= s && (v = h - p, y = u - p, c.processManualSelection(v, y, r), o = !1, l(!0))))
            })
        };
        return {
            ctor: function (n, t, i) {
                this._renderer = n, this._slidersController = t, this._processSelectionChanged = i, this._enabled = !0
            }, applyOptions: function (n) {
                this._options = n
            }, initialize: function () {
                var n = this;
                n._renderer.isInitialized() && (l(n), a(n), c(n, o), c(n, h))
            }, setEnabled: function (n) {
                this._enabled = n
            }
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var f = t.viz.rangeSelector, r = t.utils, s = "ontouchstart" in window, h = window.navigator.msPointerEnabled,
        o = {duration: 250}, c = 8, l = 20, u = 0, e = 1;
    f.Slider = f.BaseVisualElement.inherit(function () {
        return {
            _createSlider: function () {
                var n = this, i, t;
                return t = n._renderer.createGroup({"class": "slider"}), t.applySettings({
                    translateX: n._options.canvas.left,
                    translateY: n._options.canvas.top
                }), i = n._renderer.createLine(0, 0, 0, n._options.canvas.height, {
                    "class": "dx-range-selector-slider",
                    strokeWidth: n._options.sliderHandles.width,
                    stroke: n._options.sliderHandles.color,
                    strokeOpacity: n._options.sliderHandles.opacity
                }), i.append(t), t.setValid = function (t) {
                    i.applySettings({stroke: t ? n._options.sliderHandles.color : n._options.sliderMarker.invalidRangeColor})
                }, t.updateHeight = function () {
                    i.applySettings({points: [0, 0, 0, n._options.canvas.height]})
                }, t.applyOptions = function (n) {
                    i.applySettings(n)
                }, t
            }, _createSliderTracker: function () {
                var n = this, r = s || h ? l : c, i, t;
                return i = n._renderer.createRect(-r / 2, 0, r, n._options.canvas.height, 0, {
                    fill: "grey",
                    stroke: "grey",
                    opacity: .0001,
                    style: {cursor: "w-resize"}
                }), t = n._renderer.createGroup({"class": "sliderTracker"}), t.applySettings({
                    translateX: 0,
                    translateY: n._options.canvas.top
                }), i.append(t), t.updateHeight = function () {
                    i.applySettings({height: n._options.canvas.height})
                }, t
            }, _drawSliderTracker: function (n) {
                var i = this, t = i._createSliderTracker();
                t && (t.append(n), i._sliderTracker = t)
            }, _createSliderMarker: function (n) {
                return f.rangeSelectorFactory.createSliderMarker(n)
            }, _setPosition: function (n, t) {
                var i = this, r = i._correctPosition(n), u = i._options.translator.untranslateX(r);
                i.setValue(u, t), i._position = r
            }, _setPositionForBothSliders: function (n, t) {
                var i = this, e, u, f, o, s = i._options.scale.inverted;
                e = i.getAnotherSlider(), n = i._correctBounds(n), u = i._options.translator.untranslateX(n), f = r.addInterval(u, t), !s && f > i._options.scale.endValue || s && f < i._options.scale.endValue ? (f = i._options.scale.endValue, o = i._options.canvas.left + i._options.canvas.width, u = r.addInterval(f, t, !0), n = i._options.translator.translateX(u)) : o = i._options.translator.translateX(f), i._values && ((s ? u > i._values[i._values.length - 1] : u < i._values[0]) ? (u = i._correctBusinessValueByAvailableValues(u), f = r.addInterval(u, t)) : (f = i._correctBusinessValueByAvailableValues(f), u = r.addInterval(f, t, !0))), e.setValue(f), i.setValue(u), i._position = n, e._position = o
            }, _correctPosition: function (n) {
                var i = this, t = i._correctInversion(n);
                return t = i._correctBounds(t)
            }, _correctInversion: function (n) {
                var i = this, r = n, t = i.getAnotherSlider().getPosition(), f = i.getIndex() === u ? n > t : n < t;
                return f && (r = t), r
            }, _correctBounds: function (n) {
                var r = this, i = n, t = r._options.canvas;
                return n < t.left && (i = t.left), n > t.left + t.width && (i = t.left + t.width), i
            }, _correctBusinessValue: function (n, t) {
                var r = this, i = r._correctBusinessValueByAvailableValues(n);
                return t && (i = r._correctBusinessValueByMinMaxRangeFromAnotherSlider(i)), i = r._correctBusinessValueByMinRangeFromStartEndValues(i)
            }, _correctBusinessValueByAvailableValues: function (n) {
                var t = this._values;
                return t ? f.utils.findNearValue(t, n) : n
            }, _correctBusinessValueByMinMaxRangeFromAnotherSlider: function (n) {
                var h = this, c = n, t = h._options.scale, l = h._values, y = h.getIndex(),
                    a = h.getAnotherSlider().getValue(), v = !0, o, s;
                return !t.inverted && y === u || t.inverted && y === e ? (t.maxRange && (o = r.addInterval(a, t.maxRange, !0)), t.minRange && (s = r.addInterval(a, t.minRange, !0))) : (t.maxRange && (s = r.addInterval(a, t.maxRange)), t.minRange && (o = r.addInterval(a, t.minRange))), s !== i && c > s ? (c = l ? f.utils.findLessOrEqualValue(l, s) : s, v = !1) : o !== i && c < o && (c = l ? f.utils.findGreaterOrEqualValue(l, o) : o, v = !1), h._setValid(v), c
            }, _correctBusinessValueByMinRangeFromStartEndValues: function (n) {
                var f = this, h = f._values, o, s, c = !0, t = f._options.scale, i = n;
                return t.minRange && (f.getIndex() === e ? (o = r.addInterval(t.startValue, t.minRange, t.inverted), (!t.inverted && i < o || t.inverted && i > o) && (i = o)) : f.getIndex() === u && (s = r.addInterval(t.endValue, t.minRange, !t.inverted), (!t.inverted && i > s || t.inverted && i < s) && (i = s))), i
            }, _applySliderPosition: function (n, t) {
                var i = this, f = i._options.behavior.animationEnabled && !t, r = i._options.canvas.top, u = i._slider;
                f || u.inAnimation ? (u.inAnimation = !0, u.animate({
                    translate: {
                        x: n,
                        y: r
                    }
                }, f ? o : {duration: 0}, function () {
                    u.inAnimation = !1
                }), i._sliderTracker.animate({
                    translate: {
                        x: n,
                        y: r
                    }
                }, f ? o : {duration: 0})) : (i._slider.applySettings({
                    translateX: n,
                    translateY: r
                }), i._sliderTracker.applySettings({
                    translateX: n,
                    translateY: r
                })), i._sliderTracker.updateHeight(), i._slider.updateHeight()
            }, _applyShutterPosition: function (n, t) {
                var i = this, r, f = i._shutter, s = i._options.behavior.animationEnabled && !t, h = i.getIndex();
                h == u ? r = {
                    x: i._options.canvas.left,
                    y: i._options.canvas.top,
                    width: n - i._options.canvas.left,
                    height: i._options.canvas.height
                } : h == e && (r = {
                    x: n + 1,
                    y: i._options.canvas.top,
                    width: i._options.canvas.left + i._options.canvas.width - n,
                    height: i._options.canvas.height
                }), r && (s || f.inAnimation ? (f.inAnimation = !0, f.animate(r, s ? o : {duration: 0}, function () {
                    f.inAnimation = !1
                })) : f.applySettings(r))
            }, _setValid: function (n) {
                var t = this;
                t._marker && t._marker.setValid(n), t._slider.setValid(n)
            }, _setText: function (n) {
                var t = this;
                t._marker && t._marker.setText(n)
            }, ctor: function (n, t) {
                var i = this;
                i.callBase(n), i._index = t
            }, getIndex: function () {
                return this._index
            }, setAvailableValues: function (n) {
                this._values = n
            }, setAnotherSlider: function (n) {
                this._anotherSlider = n
            }, getAnotherSlider: function () {
                return this._anotherSlider
            }, appendTrackers: function (n) {
                var t = this;
                t._sliderTracker && t._sliderTracker.append(n)
            }, getSliderTracker: function () {
                return this._sliderTracker
            }, changeLocation: function () {
                var n = this;
                n._marker && n._marker.changeLocation(), n._index = this._index === u ? e : u, n._lastPosition = null
            }, setPosition: function (n, t, i) {
                var r = this, f;
                i ? (f = r.getIndex() === u ? r : r.getAnotherSlider(), f._setPositionForBothSliders(n, i)) : r._setPosition(n, t)
            }, getPosition: function () {
                return this._position
            }, _applyOptions: function () {
                this._lastPosition = null
            }, setValue: function (n, t) {
                var r = this;
                n === i ? (r._value = i, r._valuePosition = r._position = r.getIndex() === u ? r._options.canvas.left : r._options.canvas.left + r._options.canvas.width, r._setText(f.consts.emptySliderMarkerText)) : (r._value = r._correctBusinessValue(n, t), r._valuePosition = r._position = r._options.translator.translateX(r._value), r._setText(f.formatValue(r._value, r._options.sliderMarker)))
            }, getValue: function () {
                return this._value
            }, canSwap: function () {
                var i = this, n = i._options.scale, f, e, t;
                if (i._options.behavior.allowSlidersSwap) {
                    if (n.minRange) if (t = i.getAnotherSlider().getValue(), i.getIndex() === u) {
                        if (e = r.addInterval(n.endValue, n.minRange, !n.inverted), !n.inverted && t > e || n.inverted && t < e) return !1
                    } else if (f = r.addInterval(n.startValue, n.minRange, n.inverted), !n.inverted && t < f || n.inverted && t > f) return !1;
                    return !0
                }
                return !1
            }, processDocking: function () {
                var n = this;
                n._position = n._valuePosition, n.applyPosition(!1), n._setValid(!0)
            }, applyPosition: function (n) {
                var t = this, i = t.getPosition();
                t._lastPosition !== i && (t._applySliderPosition(i, n), t._applyShutterPosition(i, n), t._lastPosition = i)
            }, on: function (n, t) {
                var i = this;
                i._sliderTracker.on(n, t);
                if (i._marker) i._marker.getTracker().on(n, t)
            }, _update: function () {
                var n = this;
                n._marker && n._marker.applyOptions(n._options.sliderMarker), n._shutter && n._shutter.applySettings({
                    fill: n._options.shutter.color,
                    fillOpacity: n._options.shutter.opacity
                }), n._slider && n._slider.applyOptions({
                    strokeWidth: n._options.sliderHandles.width,
                    stroke: n._options.sliderHandles.color,
                    strokeOpacity: n._options.sliderHandles.opacity
                })
            }, _draw: function (n) {
                var t = this, i, o, f, r, h, c, s = t.getIndex();
                f = t._renderer.createGroup({"class": "sliderArea"}), f.append(n), s === u ? r = t._renderer.createRect(t._options.canvas.left, t._options.canvas.top, 0, t._options.canvas.height, 0) : s === e && (r = t._renderer.createRect(t._options.canvas.left, t._options.canvas.top, t._options.canvas.width, t._options.canvas.height, 0)), r && (r.append(f), i = t._createSlider(), i && i.append(f), t._options.sliderMarker.visible && (o = t._createSliderMarker({
                    renderer: t._renderer,
                    isLeftPointer: s === e,
                    sliderMarkerOptions: t._options.sliderMarker
                }), o.draw(i)), t._shutter = r, t._slider = i, t._marker = o), t._drawSliderTracker(n)
            }
        }
    }())
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.rangeSelector;
    r.SliderMarker = t.Class.inherit(function () {
        var u = function (n) {
            this._renderer = n.renderer, this._text = n.text, this._isLeftPointer = n.isLeftPointer, this._options = n.sliderMarkerOptions, this._isValid = !0, t(this, {
                width: 10,
                height: 10
            })
        }, f = function (n) {
            this._options = n, this.update()
        }, n = function (n, t) {
            return {
                width: Math.round(2 * n._options.padding + t.width),
                height: Math.round(2 * n._options.padding + t.height * r.consts.fontHeightRatio)
            }
        }, t = function (t, i) {
            var r = n(t, i);
            t._points = [], t._isLeftPointer ? (t._points.push({x: 0, y: 0}), t._points.push({
                x: r.width,
                y: 0
            }), t._points.push({x: r.width, y: r.height}), t._points.push({
                x: t._options.pointerSize,
                y: r.height
            }), t._points.push({x: 0, y: r.height + t._options.pointerSize})) : (t._points.push({
                x: 0,
                y: 0
            }), t._points.push({x: r.width, y: 0}), t._points.push({
                x: r.width,
                y: r.height + t._options.pointerSize
            }), t._points.push({x: r.width - t._options.pointerSize, y: r.height}), t._points.push({x: 0, y: r.height}))
        }, e = function (t, i) {
            var r = n(t, i);
            return t._isLeftPointer ? {x: 0, y: r.height + t._options.pointerSize} : {
                x: r.width - 1,
                y: r.height + t._options.pointerSize
            }
        }, o = function (n) {
            var t = this, i = t._options.padding;
            t._sliderMarkerGroup = t._renderer.createGroup({"class": "sliderMarker"}), t._sliderMarkerGroup.append(n), t._area = t._renderer.createArea(t.points, {fill: t._options.color}), t._area.append(t._sliderMarkerGroup), t._label = t._renderer.createText(t._text, i, i, {
                font: t._options.font,
                style: {"-webkit-user-select": "none"}
            }), t._label.append(t._sliderMarkerGroup), t._tracker = t._renderer.createRect(0, 0, 2 * i, 2 * i + t._options.pointerSize, 0, {
                fill: "grey",
                stroke: "grey",
                opacity: .0001,
                style: {cursor: "pointer"}
            }), t._tracker.append(t._sliderMarkerGroup), t._drawn = !0, t.update()
        }, s = function (n) {
            var t = n._label.getBBox();
            return !n._textHeight && isFinite(t.height) && (n._textHeight = t.height), {
                width: t.width,
                height: n._textHeight
            }
        }, i = function (r) {
            var u = this, f, o, h;
            (u._interval && clearInterval(u._interval), delete u._interval, u._drawn) && (u._label.updateText(u._text), f = s(u), r ? delete u._textSize : (u._textSize = u._textSize || f, u._textSize = f.width > u._textSize.width || f.height > u._textSize.height ? f : u._textSize, f = u._textSize, u._interval = setInterval(function () {
                i.call(u, [!0])
            }, 75)), o = n(u, f), h = e(u, f), u._sliderMarkerGroup.applySettings({
                translateX: -h.x,
                translateY: -h.y
            }), t(u, f), u._area.applySettings({
                points: u._points,
                fill: u._isValid ? u._options.color : u._options.invalidRangeColor
            }), u._tracker.applySettings({
                width: o.width,
                height: o.height + u._options.pointerSize
            }), u._label.applySettings({x: u._options.padding, y: o.height - u._options.padding}))
        }, h = function () {
            var n = this;
            return n._text
        }, c = function (n) {
            var t = this;
            t._text !== n && (t._text = n, t.update())
        }, l = function (n) {
            var t = this;
            t._isValid = n, t.update()
        }, a = function () {
            var n = this;
            n._isLeftPointer = !n._isLeftPointer, n.update()
        }, v = function () {
            var n = this;
            return n._tracker
        };
        return {
            ctor: u,
            draw: o,
            update: i,
            getText: h,
            setText: c,
            changeLocation: a,
            applyOptions: f,
            getTracker: v,
            setValid: l
        }
    }())
}(jQuery, DevExpress), function (n, t) {
    var r = t.viz.rangeSelector;
    r.RangeView = r.BaseVisualElement.inherit(function () {
        var n = function (n) {
            return t.viz.charts.factory.createThemeManager(n.chart.theme)
        };
        return {
            _draw: function (n) {
                var t = this, o, s, f, u, r, e, i, h = t._options.isEmpty;
                if (e = t._options.seriesDataSource && t._options.seriesDataSource.isShowChart() && !h, i = t._options.canvas, e ? f = t._options.seriesDataSource.getBackgroundColor() : !h && t._options.background.visible && (f = t._options.background.color), t._options.background.visible && f && (o = t._renderer.createRect(i.left, i.top, i.width + 1, i.height, 0, {
                        fill: f,
                        "class": "dx-range-selector-background"
                    }), o.append(n)), t._options.background.visible && t._options.background.image && t._options.background.image.url && (s = t._renderer.createImage(i.left, i.top, i.width + 1, i.height, t._options.background.image.url, {location: t._options.background.image.location}), s.append(n)), e) for (u = t._options.seriesDataSource.getSeries(), r = 0; r < u.length; r++) u[r].options.seriesGroup = n, u[r].options.seriesLabelsGroup = n, u[r].options.trackerGroup = n, u[r].draw(t._options.translator), t._options.behavior && t._options.behavior.animationEnabled && u[r].animate()
            }
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var u = t.viz.rangeSelector, r = t.viz.charts;
    u.SeriesDataSource = t.Class.inherit(function () {
        var u = function (n) {
            return r.factory.createThemeManager(n, "rangeSelector.chart")
        }, f = function (i) {
            return n.isArray(i) && i.length > 0 && (t.utils.isNumber(i[0]) || t.utils.isDate(i[0]))
        }, e = function (t) {
            return n.map(t, function (n, t) {
                return {arg: n, val: t}
            })
        }, o = function (t, o) {
            var w = [], h, b, l, v = u(o.chart), s = o.chart.series,
                k = o.chart.valueAxis && o.chart.valueAxis.valueType, y, c, a, p;
            for (o.dataSource && !s && (f(o.dataSource) && (o.dataSource = e(o.dataSource)), y = o.dataSourceField || "arg", s = {
                argumentField: y,
                valueField: y
            }, t._hideChart = !0), s = n.isArray(s) ? s : s ? [s] : [], c = v.applyTheme(v.getTheme(), o.chart), n.extend(c.commonSeriesSettings, {
                argumentType: o.valueType,
                valueType: k,
                incidentOccured: o.incidentOccured
            }), t._backgroundColor = o.backgroundColor !== i ? o.backgroundColor : c.backgroundColor, a = 0; a < s.length; a++) h = s[a], h.rotated = !1, l = h.data || o.dataSource, b = v.applyNextSeriesTheme(h, c.commonSeriesSettings), l && l.length > 0 && (p = r.factory.createSeries(h.type || c.commonSeriesSettings.type, o.renderer, l, b), p._suppressTrackers = !0, w.push(p));
            return w
        }, s = function (t, i) {
            var f = [], u = [];
            return n.each(t, function (t, i) {
                n.inArray(i.type, u) === -1 && u.push(i.type)
            }), n.each(u, function (n, u) {
                var e = new r.factory.createSeriesFamily({type: u, equalBarWidth: i});
                e.add(t), e.adjustSeriesValues(), f.push(e)
            }), f
        };
        return {
            ctor: function (n) {
                var t = this;
                t._indent = {
                    top: n.chart.topIndent >= 0 && n.chart.topIndent < 1 ? n.chart.topIndent : 0,
                    bottom: n.chart.bottomIndent >= 0 && n.chart.bottomIndent < 1 ? n.chart.bottomIndent : 0
                }, t._valueAxis = n.chart.valueAxis || {}, t._hideChart = !1, t._series = o(t, n), t._seriesFamilies = s(t._series, n.chart.equalBarWidth)
            }, adjustSeriesDimensions: function (t) {
                var i = this;
                n.each(i._seriesFamilies, function () {
                    this.adjustSeriesDimensions(t)
                })
            }, getBoundRange: function () {
                for (var u = this, l, c, r = new t.viz.charts.Range({
                    minY: u._valueAxis.min,
                    minVisibleY: u._valueAxis.min,
                    maxY: u._valueAxis.max,
                    maxVisibleY: u._valueAxis.max
                }), o, f, s, h, e = 0; e < u._series.length; e++) c = u._series[e].getRangeData(), r = r.getBoundRange(c);
                return r.isDefined() && (s = u._valueAxis.inverted ? u._indent.top : u._indent.bottom, h = u._valueAxis.inverted ? u._indent.bottom : u._indent.top, o = r.maxY - r.minY, f = (n.isNumeric(r.maxVisibleY) ? r.maxVisibleY : r.maxY) - (n.isNumeric(r.minVisibleY) ? r.minVisibleY : r.minY), r.minY -= o * s, r.maxY += o * h, n.isNumeric(f) && (r.maxVisibleY = r.maxVisibleY ? r.maxVisibleY + f * h : i, r.minVisibleY = r.minVisibleY ? r.minVisibleY - f * s : i), r.invertY = u._valueAxis.inverted), r
            }, getSeries: function () {
                var n = this;
                return n._series
            }, getBackgroundColor: function () {
                var n = this;
                return n._backgroundColor
            }, isEmpty: function () {
                var n = this;
                return n.getSeries().length === 0
            }, isShowChart: function () {
                var n = this;
                return !n.isEmpty() && !n._hideChart
            }, getCalculatedValueType: function () {
                var n = this, t;
                return n._series.length && (t = n._series[0].options.argumentType), t
            }
        }
    }())
}(jQuery, DevExpress), function (n, t, i) {
    var o = t.viz.rangeSelector, r = o.utils, f = t.utils, e = -1e3, u = function (n, t) {
        var u;
        if (!n || n.length === 0) return -1;
        for (var r = 0, i = n.length - 1, u = 0; i - r > 1;) u = r + i >> 1, n[u] > t ? i = u : r = u;
        return n[i] <= t ? i : r
    }, s = function (n, t) {
        var i = u(n, t);
        return n && i >= 0 && i < n.length ? n[i] : t
    }, h = function (n, t) {
        var i = u(n, t);
        return n && i >= 0 && i < n.length ? (i + 1 < n.length && (f.isDate(t) ? n[i + 1].getTime() - t.getTime() < t.getTime() - n[i].getTime() && i++ : n[i + 1] - t < t - n[i] && i++), n[i]) : t
    }, c = function (n, t) {
        var i = u(n, t);
        return n && i >= 0 && i < n.length ? (n[i] < t && i + 1 < n.length && i++, n[i]) : t
    }, l = function (n, t, i) {
        var r, u, e, o, s;
        return f.isDate(n) ? i === "year" || i === "quarter" || i === "month" ? {months: t.getFullYear() * 12 + t.getMonth() - n.getFullYear() * 12 - n.getMonth()} : {milliseconds: t.valueOf() - n.valueOf()} : t - n
    }, a = function (n) {
        var t, r = 0, u = n.getRoot();
        if (u) for (t = u.element.parentNode; t && t.offsetLeft !== i; t = t.offsetParent) r += t.offsetLeft;
        return r
    }, v = function (n) {
        var t = 0;
        return n.pageX ? t = n.pageX : n.originalEvent && n.originalEvent.pageX && (t = n.originalEvent.pageX), n.originalEvent && n.originalEvent.touches && (n.originalEvent.touches.length > 0 ? t = n.originalEvent.touches[0].pageX : n.originalEvent.changedTouches.length > 0 && (t = n.originalEvent.changedTouches[0].pageX)), t
    }, y = function (n, t, i) {
        var r = n.drawText(t, e, e, {font: i}), u = r.getBBox();
        return r.remove(), u
    };
    r.findLessOrEqualValue = s, r.findNearValue = h, r.findGreaterOrEqualValue = c, r.getInterval = l, r.getRootOffsetLeft = a, r.getEventPageX = v, r.getTextBBox = y
}(jQuery, DevExpress), function (n, t) {
    t.viz.rangeSelector = t.viz.rangeSelector, t.viz.rangeSelector.ThemeManager = t.viz.core.BaseThemeManager.inherit({
        ctor: function (n) {
            var t = this;
            t.callBase(n, "rangeSelector"), t.initializeFont(t.theme.scale.label.font), t.initializeFont(t.theme.sliderMarker.font)
        }, applyRangeSelectorTheme: function (n) {
            var i = this, r = {dataSource: n.dataSource}, t;
            return delete n.dataSource, t = i.applyTheme(i.theme, n), t.dataSource = r.dataSource, t
        }, setBackgroundColor: function (n) {
            var t = this.theme;
            n && (t.containerBackgroundColor = n), t.shutter.color = t.shutter.color || t.containerBackgroundColor
        }
    })
}(jQuery, DevExpress), function (n) {
    var t = n.viz;
    t.Chart = t.charts.Chart, t.PieChart = t.charts.PieChart, t.RangeSelector = t.rangeSelector.RangeSelector, t.CircularGauge = t.gauges.CircularGauge, t.LinearGauge = t.gauges.LinearGauge
}(DevExpress), function (n, t) {
    var r = t.ui, u = t.viz;
    r.registerComponent("dxChart", u.Chart)
}(jQuery, DevExpress), function (n, t) {
    var r = t.ui, u = t.viz;
    r.registerComponent("dxPieChart", u.PieChart)
}(jQuery, DevExpress), function (n) {
    n.ui.registerComponent("dxCircularGauge", n.viz.CircularGauge)
}(DevExpress), function (n) {
    n.ui.registerComponent("dxLinearGauge", n.viz.LinearGauge)
}(DevExpress), function (n, t) {
    var r = t.ui, u = t.viz;
    r.registerComponent("dxRangeSelector", u.RangeSelector)
}(jQuery, DevExpress),DevExpress.MOD_VIZ = !0);