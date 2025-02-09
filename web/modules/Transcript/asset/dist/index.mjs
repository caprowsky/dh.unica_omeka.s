var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Qs(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Xs = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br = Symbol.for("react.element"), $p = Symbol.for("react.portal"), Kp = Symbol.for("react.fragment"), Yp = Symbol.for("react.strict_mode"), Qp = Symbol.for("react.profiler"), Xp = Symbol.for("react.provider"), qp = Symbol.for("react.context"), Gp = Symbol.for("react.forward_ref"), Zp = Symbol.for("react.suspense"), Jp = Symbol.for("react.memo"), ed = Symbol.for("react.lazy"), la = Symbol.iterator;
function td(e) {
  return e === null || typeof e != "object" ? null : (e = la && e[la] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gs = Object.assign, Zs = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || qs;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Js() {
}
Js.prototype = Hn.prototype;
function uu(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || qs;
}
var au = uu.prototype = new Js();
au.constructor = uu;
Gs(au, Hn.prototype);
au.isPureReactComponent = !0;
var ua = Array.isArray, ec = Object.prototype.hasOwnProperty, su = { current: null }, tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r, o = {}, i = null, u = null;
  if (t != null)
    for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      ec.call(t, r) && !tc.hasOwnProperty(r) && (o[r] = t[r]);
  var f = arguments.length - 2;
  if (f === 1)
    o.children = n;
  else if (1 < f) {
    for (var c = Array(f), y = 0; y < f; y++)
      c[y] = arguments[y + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in f = e.defaultProps, f)
      o[r] === void 0 && (o[r] = f[r]);
  return { $$typeof: Br, type: e, key: i, ref: u, props: o, _owner: su.current };
}
function nd(e, t) {
  return { $$typeof: Br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Br;
}
function rd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var aa = /\/+/g;
function gi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rd("" + e.key) : t.toString(36);
}
function yo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var u = !1;
  if (e === null)
    u = !0;
  else
    switch (i) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Br:
          case $p:
            u = !0;
        }
    }
  if (u)
    return u = e, o = o(u), e = r === "" ? "." + gi(u, 0) : r, ua(o) ? (n = "", e != null && (n = e.replace(aa, "$&/") + "/"), yo(o, t, n, "", function(y) {
      return y;
    })) : o != null && (cu(o) && (o = nd(o, n + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(aa, "$&/") + "/") + e)), t.push(o)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", ua(e))
    for (var f = 0; f < e.length; f++) {
      i = e[f];
      var c = r + gi(i, f);
      u += yo(i, t, n, c, o);
    }
  else if (c = td(e), typeof c == "function")
    for (e = c.call(e), f = 0; !(i = e.next()).done; )
      i = i.value, c = r + gi(i, f++), u += yo(i, t, n, c, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function qr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return yo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function od(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Ae = { current: null }, ho = { transition: null }, id = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: ho, ReactCurrentOwner: su };
Y.Children = { map: qr, forEach: function(e, t, n) {
  qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = Hn;
Y.Fragment = Kp;
Y.Profiler = Qp;
Y.PureComponent = uu;
Y.StrictMode = Yp;
Y.Suspense = Zp;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = id;
Y.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Gs({}, e.props), o = e.key, i = e.ref, u = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, u = su.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var f = e.type.defaultProps;
    for (c in t)
      ec.call(t, c) && !tc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && f !== void 0 ? f[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1)
    r.children = n;
  else if (1 < c) {
    f = Array(c);
    for (var y = 0; y < c; y++)
      f[y] = arguments[y + 2];
    r.children = f;
  }
  return { $$typeof: Br, type: e.type, key: o, ref: i, props: r, _owner: u };
};
Y.createContext = function(e) {
  return e = { $$typeof: qp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Xp, _context: e }, e.Consumer = e;
};
Y.createElement = nc;
Y.createFactory = function(e) {
  var t = nc.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: Gp, render: e };
};
Y.isValidElement = cu;
Y.lazy = function(e) {
  return { $$typeof: ed, _payload: { _status: -1, _result: e }, _init: od };
};
Y.memo = function(e, t) {
  return { $$typeof: Jp, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function(e) {
  var t = ho.transition;
  ho.transition = {};
  try {
    e();
  } finally {
    ho.transition = t;
  }
};
Y.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function(e, t) {
  return Ae.current.useCallback(e, t);
};
Y.useContext = function(e) {
  return Ae.current.useContext(e);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(e) {
  return Ae.current.useDeferredValue(e);
};
Y.useEffect = function(e, t) {
  return Ae.current.useEffect(e, t);
};
Y.useId = function() {
  return Ae.current.useId();
};
Y.useImperativeHandle = function(e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function(e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function(e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
Y.useMemo = function(e, t) {
  return Ae.current.useMemo(e, t);
};
Y.useReducer = function(e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
Y.useRef = function(e) {
  return Ae.current.useRef(e);
};
Y.useState = function(e) {
  return Ae.current.useState(e);
};
Y.useSyncExternalStore = function(e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function() {
  return Ae.current.useTransition();
};
Y.version = "18.2.0";
Xs.exports = Y;
var K = Xs.exports;
const H = /* @__PURE__ */ lu(K);
var sl = {}, rc = { exports: {} }, $e = {}, oc = { exports: {} }, ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(w, x) {
    var C = w.length;
    w.push(x);
    e:
      for (; 0 < C; ) {
        var R = C - 1 >>> 1, U = w[R];
        if (0 < o(U, x))
          w[R] = x, w[C] = U, C = R;
        else
          break e;
      }
  }
  function n(w) {
    return w.length === 0 ? null : w[0];
  }
  function r(w) {
    if (w.length === 0)
      return null;
    var x = w[0], C = w.pop();
    if (C !== x) {
      w[0] = C;
      e:
        for (var R = 0, U = w.length, W = U >>> 1; R < W; ) {
          var j = 2 * (R + 1) - 1, $ = w[j], X = j + 1, q = w[X];
          if (0 > o($, C))
            X < U && 0 > o(q, $) ? (w[R] = q, w[X] = C, R = X) : (w[R] = $, w[j] = C, R = j);
          else if (X < U && 0 > o(q, C))
            w[R] = q, w[X] = C, R = X;
          else
            break e;
        }
    }
    return x;
  }
  function o(w, x) {
    var C = w.sortIndex - x.sortIndex;
    return C !== 0 ? C : w.id - x.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var u = Date, f = u.now();
    e.unstable_now = function() {
      return u.now() - f;
    };
  }
  var c = [], y = [], P = 1, O = null, k = 3, L = !1, D = !1, A = !1, I = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(w) {
    for (var x = n(y); x !== null; ) {
      if (x.callback === null)
        r(y);
      else if (x.startTime <= w)
        r(y), x.sortIndex = x.expirationTime, t(c, x);
      else
        break;
      x = n(y);
    }
  }
  function N(w) {
    if (A = !1, v(w), !D)
      if (n(c) !== null)
        D = !0, z(g);
      else {
        var x = n(y);
        x !== null && M(N, x.startTime - w);
      }
  }
  function g(w, x) {
    D = !1, A && (A = !1, h(l), l = -1), L = !0;
    var C = k;
    try {
      for (v(x), O = n(c); O !== null && (!(O.expirationTime > x) || w && !d()); ) {
        var R = O.callback;
        if (typeof R == "function") {
          O.callback = null, k = O.priorityLevel;
          var U = R(O.expirationTime <= x);
          x = e.unstable_now(), typeof U == "function" ? O.callback = U : O === n(c) && r(c), v(x);
        } else
          r(c);
        O = n(c);
      }
      if (O !== null)
        var W = !0;
      else {
        var j = n(y);
        j !== null && M(N, j.startTime - x), W = !1;
      }
      return W;
    } finally {
      O = null, k = C, L = !1;
    }
  }
  var _ = !1, p = null, l = -1, s = 5, a = -1;
  function d() {
    return !(e.unstable_now() - a < s);
  }
  function E() {
    if (p !== null) {
      var w = e.unstable_now();
      a = w;
      var x = !0;
      try {
        x = p(!0, w);
      } finally {
        x ? T() : (_ = !1, p = null);
      }
    } else
      _ = !1;
  }
  var T;
  if (typeof m == "function")
    T = function() {
      m(E);
    };
  else if (typeof MessageChannel < "u") {
    var S = new MessageChannel(), b = S.port2;
    S.port1.onmessage = E, T = function() {
      b.postMessage(null);
    };
  } else
    T = function() {
      I(E, 0);
    };
  function z(w) {
    p = w, _ || (_ = !0, T());
  }
  function M(w, x) {
    l = I(function() {
      w(e.unstable_now());
    }, x);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(w) {
    w.callback = null;
  }, e.unstable_continueExecution = function() {
    D || L || (D = !0, z(g));
  }, e.unstable_forceFrameRate = function(w) {
    0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : s = 0 < w ? Math.floor(1e3 / w) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return k;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(w) {
    switch (k) {
      case 1:
      case 2:
      case 3:
        var x = 3;
        break;
      default:
        x = k;
    }
    var C = k;
    k = x;
    try {
      return w();
    } finally {
      k = C;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(w, x) {
    switch (w) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        w = 3;
    }
    var C = k;
    k = w;
    try {
      return x();
    } finally {
      k = C;
    }
  }, e.unstable_scheduleCallback = function(w, x, C) {
    var R = e.unstable_now();
    switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? R + C : R) : C = R, w) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = C + U, w = { id: P++, callback: x, priorityLevel: w, startTime: C, expirationTime: U, sortIndex: -1 }, C > R ? (w.sortIndex = C, t(y, w), n(c) === null && w === n(y) && (A ? (h(l), l = -1) : A = !0, M(N, C - R))) : (w.sortIndex = U, t(c, w), D || L || (D = !0, z(g))), w;
  }, e.unstable_shouldYield = d, e.unstable_wrapCallback = function(w) {
    var x = k;
    return function() {
      var C = k;
      k = x;
      try {
        return w.apply(this, arguments);
      } finally {
        k = C;
      }
    };
  };
})(ic);
oc.exports = ic;
var ld = oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lc = K, Be = ld;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var uc = /* @__PURE__ */ new Set(), Tr = {};
function sn(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++)
    uc.add(t[e]);
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cl = Object.prototype.hasOwnProperty, ud = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sa = {}, ca = {};
function ad(e) {
  return cl.call(ca, e) ? !0 : cl.call(sa, e) ? !1 : ud.test(e) ? ca[e] = !0 : (sa[e] = !0, !1);
}
function sd(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function cd(e, t, n, r) {
  if (t === null || typeof t > "u" || sd(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, i, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fu = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fu,
    pu
  );
  we[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fu, pu);
  we[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fu, pu);
  we[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cd(t, n, o, r) && (n = null), r || o === null ? ad(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gr = Symbol.for("react.element"), vn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), yu = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), ac = Symbol.for("react.provider"), sc = Symbol.for("react.context"), hu = Symbol.for("react.forward_ref"), pl = Symbol.for("react.suspense"), dl = Symbol.for("react.suspense_list"), mu = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), cc = Symbol.for("react.offscreen"), fa = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object" ? null : (e = fa && e[fa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var le = Object.assign, wi;
function ur(e) {
  if (wi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wi = t && t[1] || "";
    }
  return `
` + wi + e;
}
var Pi = !1;
function _i(e, t) {
  if (!e || Pi)
    return "";
  Pi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (y) {
          var r = y;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (y) {
          r = y;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (y) {
        r = y;
      }
      e();
    }
  } catch (y) {
    if (y && r && typeof y.stack == "string") {
      for (var o = y.stack.split(`
`), i = r.stack.split(`
`), u = o.length - 1, f = i.length - 1; 1 <= u && 0 <= f && o[u] !== i[f]; )
        f--;
      for (; 1 <= u && 0 <= f; u--, f--)
        if (o[u] !== i[f]) {
          if (u !== 1 || f !== 1)
            do
              if (u--, f--, 0 > f || o[u] !== i[f]) {
                var c = `
` + o[u].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
              }
            while (1 <= u && 0 <= f);
          break;
        }
    }
  } finally {
    Pi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function fd(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _i(e.type, !1), e;
    case 11:
      return e = _i(e.type.render, !1), e;
    case 1:
      return e = _i(e.type, !0), e;
    default:
      return "";
  }
}
function yl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case gn:
      return "Fragment";
    case vn:
      return "Portal";
    case fl:
      return "Profiler";
    case yu:
      return "StrictMode";
    case pl:
      return "Suspense";
    case dl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sc:
        return (e.displayName || "Context") + ".Consumer";
      case ac:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case mu:
        return t = e.displayName || null, t !== null ? t : yl(e.type) || "Memo";
      case Ct:
        t = e._payload, e = e._init;
        try {
          return yl(e(t));
        } catch {
        }
    }
  return null;
}
function pd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yl(t);
    case 8:
      return t === yu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function dd(e) {
  var t = fc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(u) {
      r = "" + u, i.call(this, u);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Zr(e) {
  e._valueTracker || (e._valueTracker = dd(e));
}
function pc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = fc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ro(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hl(e, t) {
  var n = t.checked;
  return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function dc(e, t) {
  t = t.checked, t != null && du(e, "checked", t, !1);
}
function ml(e, t) {
  dc(e, t);
  var n = Wt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && vl(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vl(e, t, n) {
  (t !== "number" || Ro(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function xn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function gl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(V(91));
  return le({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ya(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(V(92));
      if (ar(n)) {
        if (1 < n.length)
          throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function yc(e, t) {
  var n = Wt(t.value), r = Wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ha(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Jr, mc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, yd = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
  yd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
  });
});
function vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
}
function gc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = vc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var hd = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pl(e, t) {
  if (t) {
    if (hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(V(62));
  }
}
function _l(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Sl = null;
function vu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ol = null, Ln = null, Dn = null;
function ma(e) {
  if (e = Yr(e)) {
    if (typeof Ol != "function")
      throw Error(V(280));
    var t = e.stateNode;
    t && (t = oi(t), Ol(e.stateNode, e.type, t));
  }
}
function wc(e) {
  Ln ? Dn ? Dn.push(e) : Dn = [e] : Ln = e;
}
function Pc() {
  if (Ln) {
    var e = Ln, t = Dn;
    if (Dn = Ln = null, ma(e), t)
      for (e = 0; e < t.length; e++)
        ma(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function Sc() {
}
var Si = !1;
function Oc(e, t, n) {
  if (Si)
    return e(t, n);
  Si = !0;
  try {
    return _c(e, t, n);
  } finally {
    Si = !1, (Ln !== null || Dn !== null) && (Sc(), Pc());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = oi(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(V(231, t, typeof n));
  return n;
}
var El = !1;
if (Pt)
  try {
    var Gn = {};
    Object.defineProperty(Gn, "passive", { get: function() {
      El = !0;
    } }), window.addEventListener("test", Gn, Gn), window.removeEventListener("test", Gn, Gn);
  } catch {
    El = !1;
  }
function md(e, t, n, r, o, i, u, f, c) {
  var y = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, y);
  } catch (P) {
    this.onError(P);
  }
}
var mr = !1, Co = null, xo = !1, kl = null, vd = { onError: function(e) {
  mr = !0, Co = e;
} };
function gd(e, t, n, r, o, i, u, f, c) {
  mr = !1, Co = null, md.apply(vd, arguments);
}
function wd(e, t, n, r, o, i, u, f, c) {
  if (gd.apply(this, arguments), mr) {
    if (mr) {
      var y = Co;
      mr = !1, Co = null;
    } else
      throw Error(V(198));
    xo || (xo = !0, kl = y);
  }
}
function cn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ec(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function va(e) {
  if (cn(e) !== e)
    throw Error(V(188));
}
function Pd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cn(e), t === null)
      throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return va(o), e;
        if (i === r)
          return va(o), t;
        i = i.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var u = !1, f = o.child; f; ) {
        if (f === n) {
          u = !0, n = o, r = i;
          break;
        }
        if (f === r) {
          u = !0, r = o, n = i;
          break;
        }
        f = f.sibling;
      }
      if (!u) {
        for (f = i.child; f; ) {
          if (f === n) {
            u = !0, n = i, r = o;
            break;
          }
          if (f === r) {
            u = !0, r = i, n = o;
            break;
          }
          f = f.sibling;
        }
        if (!u)
          throw Error(V(189));
      }
    }
    if (n.alternate !== r)
      throw Error(V(190));
  }
  if (n.tag !== 3)
    throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function kc(e) {
  return e = Pd(e), e !== null ? Tc(e) : null;
}
function Tc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Tc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Rc = Be.unstable_scheduleCallback, ga = Be.unstable_cancelCallback, _d = Be.unstable_shouldYield, Sd = Be.unstable_requestPaint, se = Be.unstable_now, Od = Be.unstable_getCurrentPriorityLevel, gu = Be.unstable_ImmediatePriority, Cc = Be.unstable_UserBlockingPriority, Lo = Be.unstable_NormalPriority, Ed = Be.unstable_LowPriority, xc = Be.unstable_IdlePriority, ei = null, pt = null;
function kd(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function")
    try {
      pt.onCommitFiberRoot(ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var lt = Math.clz32 ? Math.clz32 : Cd, Td = Math.log, Rd = Math.LN2;
function Cd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Td(e) / Rd | 0) | 0;
}
var eo = 64, to = 4194304;
function sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Do(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, u = n & 268435455;
  if (u !== 0) {
    var f = u & ~o;
    f !== 0 ? r = sr(f) : (i &= u, i !== 0 && (r = sr(i)));
  } else
    u = n & ~o, u !== 0 ? r = sr(u) : i !== 0 && (r = sr(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - lt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function xd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ld(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var u = 31 - lt(i), f = 1 << u, c = o[u];
    c === -1 ? (!(f & n) || f & r) && (o[u] = xd(f, t)) : c <= t && (e.expiredLanes |= f), i &= ~f;
  }
}
function Tl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lc() {
  var e = eo;
  return eo <<= 1, !(eo & 4194240) && (eo = 64), e;
}
function Oi(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function $r(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function Dd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - lt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function wu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var G = 0;
function Dc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mc, Pu, Ac, Nc, Ic, Rl = !1, no = [], Nt = null, It = null, bt = null, xr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Lt = [], Md = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function Zn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Yr(t), t !== null && Pu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ad(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Nt = Zn(Nt, e, t, n, r, o), !0;
    case "dragenter":
      return It = Zn(It, e, t, n, r, o), !0;
    case "mouseover":
      return bt = Zn(bt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return xr.set(i, Zn(xr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Lr.set(i, Zn(Lr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function bc(e) {
  var t = qt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ec(n), t !== null) {
          e.blockedOn = t, Ic(e.priority, function() {
            Ac(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function mo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Sl = r, n.target.dispatchEvent(r), Sl = null;
    } else
      return t = Yr(n), t !== null && Pu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Pa(e, t, n) {
  mo(e) && n.delete(t);
}
function Nd() {
  Rl = !1, Nt !== null && mo(Nt) && (Nt = null), It !== null && mo(It) && (It = null), bt !== null && mo(bt) && (bt = null), xr.forEach(Pa), Lr.forEach(Pa);
}
function Jn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Rl || (Rl = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Nd)));
}
function Dr(e) {
  function t(o) {
    return Jn(o, e);
  }
  if (0 < no.length) {
    Jn(no[0], e);
    for (var n = 1; n < no.length; n++) {
      var r = no[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Nt !== null && Jn(Nt, e), It !== null && Jn(It, e), bt !== null && Jn(bt, e), xr.forEach(t), Lr.forEach(t), n = 0; n < Lt.length; n++)
    r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); )
    bc(n), n.blockedOn === null && Lt.shift();
}
var Mn = kt.ReactCurrentBatchConfig, Mo = !0;
function Id(e, t, n, r) {
  var o = G, i = Mn.transition;
  Mn.transition = null;
  try {
    G = 1, _u(e, t, n, r);
  } finally {
    G = o, Mn.transition = i;
  }
}
function bd(e, t, n, r) {
  var o = G, i = Mn.transition;
  Mn.transition = null;
  try {
    G = 4, _u(e, t, n, r);
  } finally {
    G = o, Mn.transition = i;
  }
}
function _u(e, t, n, r) {
  if (Mo) {
    var o = Cl(e, t, n, r);
    if (o === null)
      Ai(e, t, r, Ao, n), wa(e, r);
    else if (Ad(o, e, t, n, r))
      r.stopPropagation();
    else if (wa(e, r), t & 4 && -1 < Md.indexOf(e)) {
      for (; o !== null; ) {
        var i = Yr(o);
        if (i !== null && Mc(i), i = Cl(e, t, n, r), i === null && Ai(e, t, r, Ao, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Ai(e, t, r, null, n);
  }
}
var Ao = null;
function Cl(e, t, n, r) {
  if (Ao = null, e = vu(r), e = qt(e), e !== null)
    if (t = cn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ec(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ao = e, null;
}
function Uc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Od()) {
        case gu:
          return 1;
        case Cc:
          return 4;
        case Lo:
        case Ed:
          return 16;
        case xc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Su = null, vo = null;
function zc() {
  if (vo)
    return vo;
  var e, t = Su, n = t.length, r, o = "value" in Mt ? Mt.value : Mt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === o[i - r]; r++)
    ;
  return vo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function go(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ro() {
  return !0;
}
function _a() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, u) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
    for (var f in e)
      e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ro : _a, this.isPropagationStopped = _a, this;
  }
  return le(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ro);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ro);
  }, persist: function() {
  }, isPersistent: ro }), t;
}
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ou = Ke(Bn), Kr = le({}, Bn, { view: 0, detail: 0 }), Ud = Ke(Kr), Ei, ki, er, ti = le({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Eu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (Ei = e.screenX - er.screenX, ki = e.screenY - er.screenY) : ki = Ei = 0, er = e), Ei);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ki;
} }), Sa = Ke(ti), zd = le({}, ti, { dataTransfer: 0 }), Vd = Ke(zd), jd = le({}, Kr, { relatedTarget: 0 }), Ti = Ke(jd), Fd = le({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = Ke(Fd), Hd = le({}, Bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Bd = Ke(Hd), $d = le({}, Bn, { data: 0 }), Oa = Ke($d), Kd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Yd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Qd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qd[e]) ? !!t[e] : !1;
}
function Eu() {
  return Xd;
}
var qd = le({}, Kr, { key: function(e) {
  if (e.key) {
    var t = Kd[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = go(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Eu, charCode: function(e) {
  return e.type === "keypress" ? go(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Gd = Ke(qd), Zd = le({}, ti, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ea = Ke(Zd), Jd = le({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Eu }), ey = Ke(Jd), ty = le({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ny = Ke(ty), ry = le({}, ti, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), oy = Ke(ry), iy = [9, 13, 27, 32], ku = Pt && "CompositionEvent" in window, vr = null;
Pt && "documentMode" in document && (vr = document.documentMode);
var ly = Pt && "TextEvent" in window && !vr, Vc = Pt && (!ku || vr && 8 < vr && 11 >= vr), ka = String.fromCharCode(32), Ta = !1;
function jc(e, t) {
  switch (e) {
    case "keyup":
      return iy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function uy(e, t) {
  switch (e) {
    case "compositionend":
      return Fc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ta = !0, ka);
    case "textInput":
      return e = t.data, e === ka && Ta ? null : e;
    default:
      return null;
  }
}
function ay(e, t) {
  if (wn)
    return e === "compositionend" || !ku && jc(e, t) ? (e = zc(), vo = Su = Mt = null, wn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sy[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
  wc(r), t = No(t, "onChange"), 0 < t.length && (n = new Ou("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gr = null, Mr = null;
function cy(e) {
  Jc(e, 0);
}
function ni(e) {
  var t = Sn(e);
  if (pc(t))
    return e;
}
function fy(e, t) {
  if (e === "change")
    return t;
}
var Hc = !1;
if (Pt) {
  var Ri;
  if (Pt) {
    var Ci = "oninput" in document;
    if (!Ci) {
      var Ca = document.createElement("div");
      Ca.setAttribute("oninput", "return;"), Ci = typeof Ca.oninput == "function";
    }
    Ri = Ci;
  } else
    Ri = !1;
  Hc = Ri && (!document.documentMode || 9 < document.documentMode);
}
function xa() {
  gr && (gr.detachEvent("onpropertychange", Bc), Mr = gr = null);
}
function Bc(e) {
  if (e.propertyName === "value" && ni(Mr)) {
    var t = [];
    Wc(t, Mr, e, vu(e)), Oc(cy, t);
  }
}
function py(e, t, n) {
  e === "focusin" ? (xa(), gr = t, Mr = n, gr.attachEvent("onpropertychange", Bc)) : e === "focusout" && xa();
}
function dy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ni(Mr);
}
function yy(e, t) {
  if (e === "click")
    return ni(t);
}
function hy(e, t) {
  if (e === "input" || e === "change")
    return ni(t);
}
function my(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var at = typeof Object.is == "function" ? Object.is : my;
function Ar(e, t) {
  if (at(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!cl.call(t, o) || !at(e[o], t[o]))
      return !1;
  }
  return !0;
}
function La(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Da(e, t) {
  var n = La(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = La(n);
  }
}
function $c(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $c(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Kc() {
  for (var e = window, t = Ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ro(e.document);
  }
  return t;
}
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function vy(e) {
  var t = Kc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $c(n.ownerDocument.documentElement, n)) {
    if (r !== null && Tu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Da(n, i);
        var u = Da(
          n,
          r
        );
        o && u && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var gy = Pt && "documentMode" in document && 11 >= document.documentMode, Pn = null, xl = null, wr = null, Ll = !1;
function Ma(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ll || Pn == null || Pn !== Ro(r) || (r = Pn, "selectionStart" in r && Tu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wr && Ar(wr, r) || (wr = r, r = No(xl, "onSelect"), 0 < r.length && (t = new Ou("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pn)));
}
function oo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var _n = { animationend: oo("Animation", "AnimationEnd"), animationiteration: oo("Animation", "AnimationIteration"), animationstart: oo("Animation", "AnimationStart"), transitionend: oo("Transition", "TransitionEnd") }, xi = {}, Yc = {};
Pt && (Yc = document.createElement("div").style, "AnimationEvent" in window || (delete _n.animationend.animation, delete _n.animationiteration.animation, delete _n.animationstart.animation), "TransitionEvent" in window || delete _n.transitionend.transition);
function ri(e) {
  if (xi[e])
    return xi[e];
  if (!_n[e])
    return e;
  var t = _n[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Yc)
      return xi[e] = t[n];
  return e;
}
var Qc = ri("animationend"), Xc = ri("animationiteration"), qc = ri("animationstart"), Gc = ri("transitionend"), Zc = /* @__PURE__ */ new Map(), Aa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bt(e, t) {
  Zc.set(e, t), sn(t, [e]);
}
for (var Li = 0; Li < Aa.length; Li++) {
  var Di = Aa[Li], wy = Di.toLowerCase(), Py = Di[0].toUpperCase() + Di.slice(1);
  Bt(wy, "on" + Py);
}
Bt(Qc, "onAnimationEnd");
Bt(Xc, "onAnimationIteration");
Bt(qc, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(Gc, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _y = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function Na(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, wd(r, t, void 0, e), e.currentTarget = null;
}
function Jc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var f = r[u], c = f.instance, y = f.currentTarget;
          if (f = f.listener, c !== i && o.isPropagationStopped())
            break e;
          Na(o, f, y), i = c;
        }
      else
        for (u = 0; u < r.length; u++) {
          if (f = r[u], c = f.instance, y = f.currentTarget, f = f.listener, c !== i && o.isPropagationStopped())
            break e;
          Na(o, f, y), i = c;
        }
    }
  }
  if (xo)
    throw e = kl, xo = !1, kl = null, e;
}
function te(e, t) {
  var n = t[Il];
  n === void 0 && (n = t[Il] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ef(t, e, 2, !1), n.add(r));
}
function Mi(e, t, n) {
  var r = 0;
  t && (r |= 4), ef(n, e, r, t);
}
var io = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[io]) {
    e[io] = !0, uc.forEach(function(n) {
      n !== "selectionchange" && (_y.has(n) || Mi(n, !1, e), Mi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[io] || (t[io] = !0, Mi("selectionchange", !1, t));
  }
}
function ef(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var o = Id;
      break;
    case 4:
      o = bd;
      break;
    default:
      o = _u;
  }
  n = o.bind(null, t, n, e), o = void 0, !El || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ai(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var f = r.stateNode.containerInfo;
          if (f === o || f.nodeType === 8 && f.parentNode === o)
            break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var c = u.tag;
              if ((c === 3 || c === 4) && (c = u.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o))
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (u = qt(f), u === null)
              return;
            if (c = u.tag, c === 5 || c === 6) {
              r = i = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
  Oc(function() {
    var y = i, P = vu(n), O = [];
    e: {
      var k = Zc.get(e);
      if (k !== void 0) {
        var L = Ou, D = e;
        switch (e) {
          case "keypress":
            if (go(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            L = Gd;
            break;
          case "focusin":
            D = "focus", L = Ti;
            break;
          case "focusout":
            D = "blur", L = Ti;
            break;
          case "beforeblur":
          case "afterblur":
            L = Ti;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            L = Sa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            L = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            L = ey;
            break;
          case Qc:
          case Xc:
          case qc:
            L = Wd;
            break;
          case Gc:
            L = ny;
            break;
          case "scroll":
            L = Ud;
            break;
          case "wheel":
            L = oy;
            break;
          case "copy":
          case "cut":
          case "paste":
            L = Bd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            L = Ea;
        }
        var A = (t & 4) !== 0, I = !A && e === "scroll", h = A ? k !== null ? k + "Capture" : null : k;
        A = [];
        for (var m = y, v; m !== null; ) {
          v = m;
          var N = v.stateNode;
          if (v.tag === 5 && N !== null && (v = N, h !== null && (N = Cr(m, h), N != null && A.push(Ir(m, N, v)))), I)
            break;
          m = m.return;
        }
        0 < A.length && (k = new L(k, D, null, n, P), O.push({ event: k, listeners: A }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (k = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", k && n !== Sl && (D = n.relatedTarget || n.fromElement) && (qt(D) || D[_t]))
          break e;
        if ((L || k) && (k = P.window === P ? P : (k = P.ownerDocument) ? k.defaultView || k.parentWindow : window, L ? (D = n.relatedTarget || n.toElement, L = y, D = D ? qt(D) : null, D !== null && (I = cn(D), D !== I || D.tag !== 5 && D.tag !== 6) && (D = null)) : (L = null, D = y), L !== D)) {
          if (A = Sa, N = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (A = Ea, N = "onPointerLeave", h = "onPointerEnter", m = "pointer"), I = L == null ? k : Sn(L), v = D == null ? k : Sn(D), k = new A(N, m + "leave", L, n, P), k.target = I, k.relatedTarget = v, N = null, qt(P) === y && (A = new A(h, m + "enter", D, n, P), A.target = v, A.relatedTarget = I, N = A), I = N, L && D)
            t: {
              for (A = L, h = D, m = 0, v = A; v; v = yn(v))
                m++;
              for (v = 0, N = h; N; N = yn(N))
                v++;
              for (; 0 < m - v; )
                A = yn(A), m--;
              for (; 0 < v - m; )
                h = yn(h), v--;
              for (; m--; ) {
                if (A === h || h !== null && A === h.alternate)
                  break t;
                A = yn(A), h = yn(h);
              }
              A = null;
            }
          else
            A = null;
          L !== null && Ia(O, k, L, A, !1), D !== null && I !== null && Ia(O, I, D, A, !0);
        }
      }
      e: {
        if (k = y ? Sn(y) : window, L = k.nodeName && k.nodeName.toLowerCase(), L === "select" || L === "input" && k.type === "file")
          var g = fy;
        else if (Ra(k))
          if (Hc)
            g = hy;
          else {
            g = dy;
            var _ = py;
          }
        else
          (L = k.nodeName) && L.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (g = yy);
        if (g && (g = g(e, y))) {
          Wc(O, g, n, P);
          break e;
        }
        _ && _(e, k, y), e === "focusout" && (_ = k._wrapperState) && _.controlled && k.type === "number" && vl(k, "number", k.value);
      }
      switch (_ = y ? Sn(y) : window, e) {
        case "focusin":
          (Ra(_) || _.contentEditable === "true") && (Pn = _, xl = y, wr = null);
          break;
        case "focusout":
          wr = xl = Pn = null;
          break;
        case "mousedown":
          Ll = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ll = !1, Ma(O, n, P);
          break;
        case "selectionchange":
          if (gy)
            break;
        case "keydown":
        case "keyup":
          Ma(O, n, P);
      }
      var p;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var l = "onCompositionStart";
              break e;
            case "compositionend":
              l = "onCompositionEnd";
              break e;
            case "compositionupdate":
              l = "onCompositionUpdate";
              break e;
          }
          l = void 0;
        }
      else
        wn ? jc(e, n) && (l = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (l = "onCompositionStart");
      l && (Vc && n.locale !== "ko" && (wn || l !== "onCompositionStart" ? l === "onCompositionEnd" && wn && (p = zc()) : (Mt = P, Su = "value" in Mt ? Mt.value : Mt.textContent, wn = !0)), _ = No(y, l), 0 < _.length && (l = new Oa(l, e, null, n, P), O.push({ event: l, listeners: _ }), p ? l.data = p : (p = Fc(n), p !== null && (l.data = p)))), (p = ly ? uy(e, n) : ay(e, n)) && (y = No(y, "onBeforeInput"), 0 < y.length && (P = new Oa("onBeforeInput", "beforeinput", null, n, P), O.push({ event: P, listeners: y }), P.data = p));
    }
    Jc(O, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Cr(e, n), i != null && r.unshift(Ir(e, i, o)), i = Cr(e, t), i != null && r.push(Ir(e, i, o))), e = e.return;
  }
  return r;
}
function yn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ia(e, t, n, r, o) {
  for (var i = t._reactName, u = []; n !== null && n !== r; ) {
    var f = n, c = f.alternate, y = f.stateNode;
    if (c !== null && c === r)
      break;
    f.tag === 5 && y !== null && (f = y, o ? (c = Cr(n, i), c != null && u.unshift(Ir(n, c, f))) : o || (c = Cr(n, i), c != null && u.push(Ir(n, c, f)))), n = n.return;
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Sy = /\r\n?/g, Oy = /\u0000|\uFFFD/g;
function ba(e) {
  return (typeof e == "string" ? e : "" + e).replace(Sy, `
`).replace(Oy, "");
}
function lo(e, t, n) {
  if (t = ba(t), ba(e) !== t && n)
    throw Error(V(425));
}
function Io() {
}
var Dl = null, Ml = null;
function Al(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Nl = typeof setTimeout == "function" ? setTimeout : void 0, Ey = typeof clearTimeout == "function" ? clearTimeout : void 0, Ua = typeof Promise == "function" ? Promise : void 0, ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ua < "u" ? function(e) {
  return Ua.resolve(null).then(e).catch(Ty);
} : Nl;
function Ty(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ni(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Dr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Dr(t);
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function za(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $n = Math.random().toString(36).slice(2), ft = "__reactFiber$" + $n, br = "__reactProps$" + $n, _t = "__reactContainer$" + $n, Il = "__reactEvents$" + $n, Ry = "__reactListeners$" + $n, Cy = "__reactHandles$" + $n;
function qt(e) {
  var t = e[ft];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[_t] || n[ft]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = za(e); e !== null; ) {
          if (n = e[ft])
            return n;
          e = za(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Yr(e) {
  return e = e[ft] || e[_t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(V(33));
}
function oi(e) {
  return e[br] || null;
}
var bl = [], On = -1;
function $t(e) {
  return { current: e };
}
function ne(e) {
  0 > On || (e.current = bl[On], bl[On] = null, On--);
}
function ee(e, t) {
  On++, bl[On] = e.current, e.current = t;
}
var Ht = {}, ke = $t(Ht), Ue = $t(!1), nn = Ht;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ze(e) {
  return e = e.childContextTypes, e != null;
}
function bo() {
  ne(Ue), ne(ke);
}
function Va(e, t, n) {
  if (ke.current !== Ht)
    throw Error(V(168));
  ee(ke, t), ee(Ue, n);
}
function tf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(V(108, pd(e) || "Unknown", o));
  return le({}, n, r);
}
function Uo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, nn = ke.current, ee(ke, e), ee(Ue, Ue.current), !0;
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(V(169));
  n ? (e = tf(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, ne(Ue), ne(ke), ee(ke, e)) : ne(Ue), ee(Ue, n);
}
var ht = null, ii = !1, Ii = !1;
function nf(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function xy(e) {
  ii = !0, nf(e);
}
function Kt() {
  if (!Ii && ht !== null) {
    Ii = !0;
    var e = 0, t = G;
    try {
      var n = ht;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, ii = !1;
    } catch (o) {
      throw ht !== null && (ht = ht.slice(e + 1)), Rc(gu, Kt), o;
    } finally {
      G = t, Ii = !1;
    }
  }
  return null;
}
var En = [], kn = 0, zo = null, Vo = 0, qe = [], Ge = 0, rn = null, mt = 1, vt = "";
function Yt(e, t) {
  En[kn++] = Vo, En[kn++] = zo, zo = e, Vo = t;
}
function rf(e, t, n) {
  qe[Ge++] = mt, qe[Ge++] = vt, qe[Ge++] = rn, rn = e;
  var r = mt;
  e = vt;
  var o = 32 - lt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - lt(t) + o;
  if (30 < i) {
    var u = o - o % 5;
    i = (r & (1 << u) - 1).toString(32), r >>= u, o -= u, mt = 1 << 32 - lt(t) + o | n << o | r, vt = i + e;
  } else
    mt = 1 << i | n << o | r, vt = e;
}
function Ru(e) {
  e.return !== null && (Yt(e, 1), rf(e, 1, 0));
}
function Cu(e) {
  for (; e === zo; )
    zo = En[--kn], En[kn] = null, Vo = En[--kn], En[kn] = null;
  for (; e === rn; )
    rn = qe[--Ge], qe[Ge] = null, vt = qe[--Ge], qe[Ge] = null, mt = qe[--Ge], qe[Ge] = null;
}
var He = null, We = null, re = !1, it = null;
function of(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Fa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, He = e, We = Ut(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, He = e, We = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: mt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, He = e, We = null, !0) : !1;
    default:
      return !1;
  }
}
function Ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zl(e) {
  if (re) {
    var t = We;
    if (t) {
      var n = t;
      if (!Fa(e, t)) {
        if (Ul(e))
          throw Error(V(418));
        t = Ut(n.nextSibling);
        var r = He;
        t && Fa(e, t) ? of(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, He = e);
      }
    } else {
      if (Ul(e))
        throw Error(V(418));
      e.flags = e.flags & -4097 | 2, re = !1, He = e;
    }
  }
}
function Wa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function uo(e) {
  if (e !== He)
    return !1;
  if (!re)
    return Wa(e), re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps)), t && (t = We)) {
    if (Ul(e))
      throw lf(), Error(V(418));
    for (; t; )
      of(e, t), t = Ut(t.nextSibling);
  }
  if (Wa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else
    We = He ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function lf() {
  for (var e = We; e; )
    e = Ut(e.nextSibling);
}
function Un() {
  We = He = null, re = !1;
}
function xu(e) {
  it === null ? it = [e] : it.push(e);
}
var Ly = kt.ReactCurrentBatchConfig;
function rt(e, t) {
  if (e && e.defaultProps) {
    t = le({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var jo = $t(null), Fo = null, Tn = null, Lu = null;
function Du() {
  Lu = Tn = Fo = null;
}
function Mu(e) {
  var t = jo.current;
  ne(jo), e._currentValue = t;
}
function Vl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function An(e, t) {
  Fo = e, Lu = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), e.firstContext = null);
}
function et(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
      if (Fo === null)
        throw Error(V(308));
      Tn = e, Fo.dependencies = { lanes: 0, firstContext: e };
    } else
      Tn = Tn.next = e;
  return t;
}
var Gt = null;
function Au(e) {
  Gt === null ? Gt = [e] : Gt.push(e);
}
function uf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Au(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Nu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function af(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, Q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Au(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
}
function wo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
  }
}
function Ha(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = u : i = i.next = u, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Wo(e, t, n, r) {
  var o = e.updateQueue;
  xt = !1;
  var i = o.firstBaseUpdate, u = o.lastBaseUpdate, f = o.shared.pending;
  if (f !== null) {
    o.shared.pending = null;
    var c = f, y = c.next;
    c.next = null, u === null ? i = y : u.next = y, u = c;
    var P = e.alternate;
    P !== null && (P = P.updateQueue, f = P.lastBaseUpdate, f !== u && (f === null ? P.firstBaseUpdate = y : f.next = y, P.lastBaseUpdate = c));
  }
  if (i !== null) {
    var O = o.baseState;
    u = 0, P = y = c = null, f = i;
    do {
      var k = f.lane, L = f.eventTime;
      if ((r & k) === k) {
        P !== null && (P = P.next = {
          eventTime: L,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        e: {
          var D = e, A = f;
          switch (k = t, L = n, A.tag) {
            case 1:
              if (D = A.payload, typeof D == "function") {
                O = D.call(L, O, k);
                break e;
              }
              O = D;
              break e;
            case 3:
              D.flags = D.flags & -65537 | 128;
            case 0:
              if (D = A.payload, k = typeof D == "function" ? D.call(L, O, k) : D, k == null)
                break e;
              O = le({}, O, k);
              break e;
            case 2:
              xt = !0;
          }
        }
        f.callback !== null && f.lane !== 0 && (e.flags |= 64, k = o.effects, k === null ? o.effects = [f] : k.push(f));
      } else
        L = { eventTime: L, lane: k, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, P === null ? (y = P = L, c = O) : P = P.next = L, u |= k;
      if (f = f.next, f === null) {
        if (f = o.shared.pending, f === null)
          break;
        k = f, f = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
      }
    } while (1);
    if (P === null && (c = O), o.baseState = c, o.firstBaseUpdate = y, o.lastBaseUpdate = P, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        u |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    ln |= u, e.lanes = u, e.memoizedState = O;
  }
}
function Ba(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(V(191, o));
        o.call(r);
      }
    }
}
var sf = new lc.Component().refs;
function jl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var li = { isMounted: function(e) {
  return (e = e._reactInternals) ? cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), o = jt(e), i = gt(r, o);
  i.payload = t, n != null && (i.callback = n), t = zt(e, i, o), t !== null && (ut(t, e, o, r), wo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), o = jt(e), i = gt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = zt(e, i, o), t !== null && (ut(t, e, o, r), wo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Me(), r = jt(e), o = gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = zt(e, o, r), t !== null && (ut(t, e, r, n), wo(t, e, r));
} };
function $a(e, t, n, r, o, i, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(o, i) : !0;
}
function cf(e, t, n) {
  var r = !1, o = Ht, i = t.contextType;
  return typeof i == "object" && i !== null ? i = et(i) : (o = ze(t) ? nn : ke.current, r = t.contextTypes, i = (r = r != null) ? bn(e, o) : Ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = li, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ka(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && li.enqueueReplaceState(t, t.state, null);
}
function Fl(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = sf, Nu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = et(i) : (i = ze(t) ? nn : ke.current, o.context = bn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (jl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && li.enqueueReplaceState(o, o.state, null), Wo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(V(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
        var f = o.refs;
        f === sf && (f = o.refs = {}), u === null ? delete f[i] : f[i] = u;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(V(284));
    if (!n._owner)
      throw Error(V(290, e));
  }
  return e;
}
function ao(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ya(e) {
  var t = e._init;
  return t(e._payload);
}
function ff(e) {
  function t(h, m) {
    if (e) {
      var v = h.deletions;
      v === null ? (h.deletions = [m], h.flags |= 16) : v.push(m);
    }
  }
  function n(h, m) {
    if (!e)
      return null;
    for (; m !== null; )
      t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function o(h, m) {
    return h = Ft(h, m), h.index = 0, h.sibling = null, h;
  }
  function i(h, m, v) {
    return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < m ? (h.flags |= 2, m) : v) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function u(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function f(h, m, v, N) {
    return m === null || m.tag !== 6 ? (m = Wi(v, h.mode, N), m.return = h, m) : (m = o(m, v), m.return = h, m);
  }
  function c(h, m, v, N) {
    var g = v.type;
    return g === gn ? P(h, m, v.props.children, N, v.key) : m !== null && (m.elementType === g || typeof g == "object" && g !== null && g.$$typeof === Ct && Ya(g) === m.type) ? (N = o(m, v.props), N.ref = tr(h, m, v), N.return = h, N) : (N = ko(v.type, v.key, v.props, null, h.mode, N), N.ref = tr(h, m, v), N.return = h, N);
  }
  function y(h, m, v, N) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Hi(v, h.mode, N), m.return = h, m) : (m = o(m, v.children || []), m.return = h, m);
  }
  function P(h, m, v, N, g) {
    return m === null || m.tag !== 7 ? (m = tn(v, h.mode, N, g), m.return = h, m) : (m = o(m, v), m.return = h, m);
  }
  function O(h, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Wi("" + m, h.mode, v), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Gr:
          return v = ko(m.type, m.key, m.props, null, h.mode, v), v.ref = tr(h, null, m), v.return = h, v;
        case vn:
          return m = Hi(m, h.mode, v), m.return = h, m;
        case Ct:
          var N = m._init;
          return O(h, N(m._payload), v);
      }
      if (ar(m) || qn(m))
        return m = tn(m, h.mode, v, null), m.return = h, m;
      ao(h, m);
    }
    return null;
  }
  function k(h, m, v, N) {
    var g = m !== null ? m.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return g !== null ? null : f(h, m, "" + v, N);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Gr:
          return v.key === g ? c(h, m, v, N) : null;
        case vn:
          return v.key === g ? y(h, m, v, N) : null;
        case Ct:
          return g = v._init, k(
            h,
            m,
            g(v._payload),
            N
          );
      }
      if (ar(v) || qn(v))
        return g !== null ? null : P(h, m, v, N, null);
      ao(h, v);
    }
    return null;
  }
  function L(h, m, v, N, g) {
    if (typeof N == "string" && N !== "" || typeof N == "number")
      return h = h.get(v) || null, f(m, h, "" + N, g);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Gr:
          return h = h.get(N.key === null ? v : N.key) || null, c(m, h, N, g);
        case vn:
          return h = h.get(N.key === null ? v : N.key) || null, y(m, h, N, g);
        case Ct:
          var _ = N._init;
          return L(h, m, v, _(N._payload), g);
      }
      if (ar(N) || qn(N))
        return h = h.get(v) || null, P(m, h, N, g, null);
      ao(m, N);
    }
    return null;
  }
  function D(h, m, v, N) {
    for (var g = null, _ = null, p = m, l = m = 0, s = null; p !== null && l < v.length; l++) {
      p.index > l ? (s = p, p = null) : s = p.sibling;
      var a = k(h, p, v[l], N);
      if (a === null) {
        p === null && (p = s);
        break;
      }
      e && p && a.alternate === null && t(h, p), m = i(a, m, l), _ === null ? g = a : _.sibling = a, _ = a, p = s;
    }
    if (l === v.length)
      return n(h, p), re && Yt(h, l), g;
    if (p === null) {
      for (; l < v.length; l++)
        p = O(h, v[l], N), p !== null && (m = i(p, m, l), _ === null ? g = p : _.sibling = p, _ = p);
      return re && Yt(h, l), g;
    }
    for (p = r(h, p); l < v.length; l++)
      s = L(p, h, l, v[l], N), s !== null && (e && s.alternate !== null && p.delete(s.key === null ? l : s.key), m = i(s, m, l), _ === null ? g = s : _.sibling = s, _ = s);
    return e && p.forEach(function(d) {
      return t(h, d);
    }), re && Yt(h, l), g;
  }
  function A(h, m, v, N) {
    var g = qn(v);
    if (typeof g != "function")
      throw Error(V(150));
    if (v = g.call(v), v == null)
      throw Error(V(151));
    for (var _ = g = null, p = m, l = m = 0, s = null, a = v.next(); p !== null && !a.done; l++, a = v.next()) {
      p.index > l ? (s = p, p = null) : s = p.sibling;
      var d = k(h, p, a.value, N);
      if (d === null) {
        p === null && (p = s);
        break;
      }
      e && p && d.alternate === null && t(h, p), m = i(d, m, l), _ === null ? g = d : _.sibling = d, _ = d, p = s;
    }
    if (a.done)
      return n(
        h,
        p
      ), re && Yt(h, l), g;
    if (p === null) {
      for (; !a.done; l++, a = v.next())
        a = O(h, a.value, N), a !== null && (m = i(a, m, l), _ === null ? g = a : _.sibling = a, _ = a);
      return re && Yt(h, l), g;
    }
    for (p = r(h, p); !a.done; l++, a = v.next())
      a = L(p, h, l, a.value, N), a !== null && (e && a.alternate !== null && p.delete(a.key === null ? l : a.key), m = i(a, m, l), _ === null ? g = a : _.sibling = a, _ = a);
    return e && p.forEach(function(E) {
      return t(h, E);
    }), re && Yt(h, l), g;
  }
  function I(h, m, v, N) {
    if (typeof v == "object" && v !== null && v.type === gn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Gr:
          e: {
            for (var g = v.key, _ = m; _ !== null; ) {
              if (_.key === g) {
                if (g = v.type, g === gn) {
                  if (_.tag === 7) {
                    n(h, _.sibling), m = o(_, v.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (_.elementType === g || typeof g == "object" && g !== null && g.$$typeof === Ct && Ya(g) === _.type) {
                  n(h, _.sibling), m = o(_, v.props), m.ref = tr(h, _, v), m.return = h, h = m;
                  break e;
                }
                n(h, _);
                break;
              } else
                t(h, _);
              _ = _.sibling;
            }
            v.type === gn ? (m = tn(v.props.children, h.mode, N, v.key), m.return = h, h = m) : (N = ko(v.type, v.key, v.props, null, h.mode, N), N.ref = tr(h, m, v), N.return = h, h = N);
          }
          return u(h);
        case vn:
          e: {
            for (_ = v.key; m !== null; ) {
              if (m.key === _)
                if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                  n(h, m.sibling), m = o(m, v.children || []), m.return = h, h = m;
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else
                t(h, m);
              m = m.sibling;
            }
            m = Hi(v, h.mode, N), m.return = h, h = m;
          }
          return u(h);
        case Ct:
          return _ = v._init, I(h, m, _(v._payload), N);
      }
      if (ar(v))
        return D(h, m, v, N);
      if (qn(v))
        return A(h, m, v, N);
      ao(h, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, v), m.return = h, h = m) : (n(h, m), m = Wi(v, h.mode, N), m.return = h, h = m), u(h)) : n(h, m);
  }
  return I;
}
var zn = ff(!0), pf = ff(!1), Qr = {}, dt = $t(Qr), Ur = $t(Qr), zr = $t(Qr);
function Zt(e) {
  if (e === Qr)
    throw Error(V(174));
  return e;
}
function Iu(e, t) {
  switch (ee(zr, t), ee(Ur, e), ee(dt, Qr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wl(t, e);
  }
  ne(dt), ee(dt, t);
}
function Vn() {
  ne(dt), ne(Ur), ne(zr);
}
function df(e) {
  Zt(zr.current);
  var t = Zt(dt.current), n = wl(t, e.type);
  t !== n && (ee(Ur, e), ee(dt, n));
}
function bu(e) {
  Ur.current === e && (ne(dt), ne(Ur));
}
var oe = $t(0);
function Ho(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var bi = [];
function Uu() {
  for (var e = 0; e < bi.length; e++)
    bi[e]._workInProgressVersionPrimary = null;
  bi.length = 0;
}
var Po = kt.ReactCurrentDispatcher, Ui = kt.ReactCurrentBatchConfig, on = 0, ie = null, pe = null, ye = null, Bo = !1, Pr = !1, Vr = 0, Dy = 0;
function _e() {
  throw Error(V(321));
}
function zu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n]))
      return !1;
  return !0;
}
function Vu(e, t, n, r, o, i) {
  if (on = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Po.current = e === null || e.memoizedState === null ? Iy : by, e = n(r, o), Pr) {
    i = 0;
    do {
      if (Pr = !1, Vr = 0, 25 <= i)
        throw Error(V(301));
      i += 1, ye = pe = null, t.updateQueue = null, Po.current = Uy, e = n(r, o);
    } while (Pr);
  }
  if (Po.current = $o, t = pe !== null && pe.next !== null, on = 0, ye = pe = ie = null, Bo = !1, t)
    throw Error(V(300));
  return e;
}
function ju() {
  var e = Vr !== 0;
  return Vr = 0, e;
}
function ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? ie.memoizedState = ye = e : ye = ye.next = e, ye;
}
function tt() {
  if (pe === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = pe.next;
  var t = ye === null ? ie.memoizedState : ye.next;
  if (t !== null)
    ye = t, pe = e;
  else {
    if (e === null)
      throw Error(V(310));
    pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, ye === null ? ie.memoizedState = ye = e : ye = ye.next = e;
  }
  return ye;
}
function jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zi(e) {
  var t = tt(), n = t.queue;
  if (n === null)
    throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = pe, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var u = o.next;
      o.next = i.next, i.next = u;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var f = u = null, c = null, y = i;
    do {
      var P = y.lane;
      if ((on & P) === P)
        c !== null && (c = c.next = { lane: 0, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), r = y.hasEagerState ? y.eagerState : e(r, y.action);
      else {
        var O = {
          lane: P,
          action: y.action,
          hasEagerState: y.hasEagerState,
          eagerState: y.eagerState,
          next: null
        };
        c === null ? (f = c = O, u = r) : c = c.next = O, ie.lanes |= P, ln |= P;
      }
      y = y.next;
    } while (y !== null && y !== i);
    c === null ? u = r : c.next = f, at(r, t.memoizedState) || (be = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ie.lanes |= i, ln |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vi(e) {
  var t = tt(), n = t.queue;
  if (n === null)
    throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var u = o = o.next;
    do
      i = e(i, u.action), u = u.next;
    while (u !== o);
    at(i, t.memoizedState) || (be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function yf() {
}
function hf(e, t) {
  var n = ie, r = tt(), o = t(), i = !at(r.memoizedState, o);
  if (i && (r.memoizedState = o, be = !0), r = r.queue, Fu(gf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ye !== null && ye.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fr(9, vf.bind(null, n, r, o, t), void 0, null), he === null)
      throw Error(V(349));
    on & 30 || mf(n, t, o);
  }
  return o;
}
function mf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wf(t) && Pf(e);
}
function gf(e, t, n) {
  return n(function() {
    wf(t) && Pf(e);
  });
}
function wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Pf(e) {
  var t = St(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function Qa(e) {
  var t = ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ny.bind(null, ie, e), [t.memoizedState, e];
}
function Fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _f() {
  return tt().memoizedState;
}
function _o(e, t, n, r) {
  var o = ct();
  ie.flags |= e, o.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ui(e, t, n, r) {
  var o = tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var u = pe.memoizedState;
    if (i = u.destroy, r !== null && zu(r, u.deps)) {
      o.memoizedState = Fr(t, n, i, r);
      return;
    }
  }
  ie.flags |= e, o.memoizedState = Fr(1 | t, n, i, r);
}
function Xa(e, t) {
  return _o(8390656, 8, e, t);
}
function Fu(e, t) {
  return ui(2048, 8, e, t);
}
function Sf(e, t) {
  return ui(4, 2, e, t);
}
function Of(e, t) {
  return ui(4, 4, e, t);
}
function Ef(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function kf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ui(4, 4, Ef.bind(null, t, e), n);
}
function Wu() {
}
function Tf(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rf(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Cf(e, t, n) {
  return on & 21 ? (at(n, t) || (n = Lc(), ie.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n);
}
function My(e, t) {
  var n = G;
  G = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ui.transition;
  Ui.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, Ui.transition = r;
  }
}
function xf() {
  return tt().memoizedState;
}
function Ay(e, t, n) {
  var r = jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Lf(e))
    Df(t, n);
  else if (n = uf(e, t, n, r), n !== null) {
    var o = Me();
    ut(n, e, r, o), Mf(n, t, r);
  }
}
function Ny(e, t, n) {
  var r = jt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lf(e))
    Df(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var u = t.lastRenderedState, f = i(u, n);
        if (o.hasEagerState = !0, o.eagerState = f, at(f, u)) {
          var c = t.interleaved;
          c === null ? (o.next = o, Au(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = uf(e, t, o, r), n !== null && (o = Me(), ut(n, e, r, o), Mf(n, t, r));
  }
}
function Lf(e) {
  var t = e.alternate;
  return e === ie || t !== null && t === ie;
}
function Df(e, t) {
  Pr = Bo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
  }
}
var $o = { readContext: et, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, Iy = { readContext: et, useCallback: function(e, t) {
  return ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: et, useEffect: Xa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _o(
    4194308,
    4,
    Ef.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return _o(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return _o(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ay.bind(null, ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qa, useDebugValue: Wu, useDeferredValue: function(e) {
  return ct().memoizedState = e;
}, useTransition: function() {
  var e = Qa(!1), t = e[0];
  return e = My.bind(null, e[1]), ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ie, o = ct();
  if (re) {
    if (n === void 0)
      throw Error(V(407));
    n = n();
  } else {
    if (n = t(), he === null)
      throw Error(V(349));
    on & 30 || mf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Xa(gf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Fr(9, vf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ct(), t = he.identifierPrefix;
  if (re) {
    var n = vt, r = mt;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Dy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, by = {
  readContext: et,
  useCallback: Tf,
  useContext: et,
  useEffect: Fu,
  useImperativeHandle: kf,
  useInsertionEffect: Sf,
  useLayoutEffect: Of,
  useMemo: Rf,
  useReducer: zi,
  useRef: _f,
  useState: function() {
    return zi(jr);
  },
  useDebugValue: Wu,
  useDeferredValue: function(e) {
    var t = tt();
    return Cf(t, pe.memoizedState, e);
  },
  useTransition: function() {
    var e = zi(jr)[0], t = tt().memoizedState;
    return [e, t];
  },
  useMutableSource: yf,
  useSyncExternalStore: hf,
  useId: xf,
  unstable_isNewReconciler: !1
}, Uy = { readContext: et, useCallback: Tf, useContext: et, useEffect: Fu, useImperativeHandle: kf, useInsertionEffect: Sf, useLayoutEffect: Of, useMemo: Rf, useReducer: Vi, useRef: _f, useState: function() {
  return Vi(jr);
}, useDebugValue: Wu, useDeferredValue: function(e) {
  var t = tt();
  return pe === null ? t.memoizedState = e : Cf(t, pe.memoizedState, e);
}, useTransition: function() {
  var e = Vi(jr)[0], t = tt().memoizedState;
  return [e, t];
}, useMutableSource: yf, useSyncExternalStore: hf, useId: xf, unstable_isNewReconciler: !1 };
function jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += fd(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ji(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zy = typeof WeakMap == "function" ? WeakMap : Map;
function Af(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yo || (Yo = !0, Zl = r), Wl(e, t);
  }, n;
}
function Nf(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Wl(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Wl(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var u = t.stack;
    this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
  }), n;
}
function qa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zy();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Zy.bind(null, e, t, n), t.then(e, e));
}
function Ga(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Za(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e);
}
var Vy = kt.ReactCurrentOwner, be = !1;
function Le(e, t, n, r) {
  t.child = e === null ? pf(t, null, n, r) : zn(t, e.child, n, r);
}
function Ja(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return An(t, o), r = Vu(e, t, n, r, i, o), n = ju(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (re && n && Ru(t), t.flags |= 1, Le(e, t, r, o), t.child);
}
function es(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !qu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, If(e, t, i, r, o)) : (e = ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var u = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ar, n(u, r) && e.ref === t.ref)
      return Ot(e, t, o);
  }
  return t.flags |= 1, e = Ft(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function If(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ar(i, r) && e.ref === t.ref)
      if (be = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (be = !0);
      else
        return t.lanes = e.lanes, Ot(e, t, o);
  }
  return Hl(e, t, n, r, o);
}
function bf(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(Cn, je), je |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(Cn, je), je |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ee(Cn, je), je |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ee(Cn, je), je |= r;
  return Le(e, t, o, n), t.child;
}
function Uf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Hl(e, t, n, r, o) {
  var i = ze(n) ? nn : ke.current;
  return i = bn(t, i), An(t, o), n = Vu(e, t, n, r, i, o), r = ju(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (re && r && Ru(t), t.flags |= 1, Le(e, t, n, o), t.child);
}
function ts(e, t, n, r, o) {
  if (ze(n)) {
    var i = !0;
    Uo(t);
  } else
    i = !1;
  if (An(t, o), t.stateNode === null)
    So(e, t), cf(t, n, r), Fl(t, n, r, o), r = !0;
  else if (e === null) {
    var u = t.stateNode, f = t.memoizedProps;
    u.props = f;
    var c = u.context, y = n.contextType;
    typeof y == "object" && y !== null ? y = et(y) : (y = ze(n) ? nn : ke.current, y = bn(t, y));
    var P = n.getDerivedStateFromProps, O = typeof P == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== r || c !== y) && Ka(t, u, r, y), xt = !1;
    var k = t.memoizedState;
    u.state = k, Wo(t, r, u, o), c = t.memoizedState, f !== r || k !== c || Ue.current || xt ? (typeof P == "function" && (jl(t, n, P, r), c = t.memoizedState), (f = xt || $a(t, n, f, r, k, c, y)) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), u.props = r, u.state = c, u.context = y, r = f) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    u = t.stateNode, af(e, t), f = t.memoizedProps, y = t.type === t.elementType ? f : rt(t.type, f), u.props = y, O = t.pendingProps, k = u.context, c = n.contextType, typeof c == "object" && c !== null ? c = et(c) : (c = ze(n) ? nn : ke.current, c = bn(t, c));
    var L = n.getDerivedStateFromProps;
    (P = typeof L == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== O || k !== c) && Ka(t, u, r, c), xt = !1, k = t.memoizedState, u.state = k, Wo(t, r, u, o);
    var D = t.memoizedState;
    f !== O || k !== D || Ue.current || xt ? (typeof L == "function" && (jl(t, n, L, r), D = t.memoizedState), (y = xt || $a(t, n, y, r, k, D, c) || !1) ? (P || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, D, c), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, D, c)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = D), u.props = r, u.state = D, u.context = c, r = y) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bl(e, t, n, r, i, o);
}
function Bl(e, t, n, r, o, i) {
  Uf(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u)
    return o && ja(t, n, !1), Ot(e, t, i);
  r = t.stateNode, Vy.current = t;
  var f = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && u ? (t.child = zn(t, e.child, null, i), t.child = zn(t, null, f, i)) : Le(e, t, f, i), t.memoizedState = r.state, o && ja(t, n, !0), t.child;
}
function zf(e) {
  var t = e.stateNode;
  t.pendingContext ? Va(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Va(e, t.context, !1), Iu(e, t.containerInfo);
}
function ns(e, t, n, r, o) {
  return Un(), xu(o), t.flags |= 256, Le(e, t, n, r), t.child;
}
var $l = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vf(e, t, n) {
  var r = t.pendingProps, o = oe.current, i = !1, u = (t.flags & 128) !== 0, f;
  if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(oe, o & 1), e === null)
    return zl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, u = { mode: "hidden", children: u }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = ci(u, r, 0, null), e = tn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Kl(n), t.memoizedState = $l, e) : Hu(t, u));
  if (o = e.memoizedState, o !== null && (f = o.dehydrated, f !== null))
    return jy(e, t, u, r, f, o, n);
  if (i) {
    i = r.fallback, u = t.mode, o = e.child, f = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(u & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Ft(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), f !== null ? i = Ft(f, i) : (i = tn(i, u, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, u = e.child.memoizedState, u = u === null ? Kl(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = $l, r;
  }
  return i = e.child, e = i.sibling, r = Ft(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hu(e, t) {
  return t = ci({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function so(e, t, n, r) {
  return r !== null && xu(r), zn(t, e.child, null, n), e = Hu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function jy(e, t, n, r, o, i, u) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ji(Error(V(422))), so(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ci({ mode: "visible", children: r.children }, o, 0, null), i = tn(i, o, u, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && zn(t, e.child, null, u), t.child.memoizedState = Kl(u), t.memoizedState = $l, i);
  if (!(t.mode & 1))
    return so(e, t, u, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var f = r.dgst;
    return r = f, i = Error(V(419)), r = ji(i, r, void 0), so(e, t, u, r);
  }
  if (f = (u & e.childLanes) !== 0, be || f) {
    if (r = he, r !== null) {
      switch (u & -u) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | u) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, St(e, o), ut(r, e, o, -1));
    }
    return Xu(), r = ji(Error(V(421))), so(e, t, u, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, We = Ut(o.nextSibling), He = t, re = !0, it = null, e !== null && (qe[Ge++] = mt, qe[Ge++] = vt, qe[Ge++] = rn, mt = e.id, vt = e.overflow, rn = t), t = Hu(t, r.children), t.flags |= 4096, t);
}
function rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vl(e.return, t, n);
}
function Fi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function jf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Le(e, t, r.children, n), r = oe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && rs(e, n, t);
          else if (e.tag === 19)
            rs(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ee(oe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Ho(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Fi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ho(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Fi(t, !0, n, null, i);
        break;
      case "together":
        Fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function So(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Ft(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Fy(e, t, n) {
  switch (t.tag) {
    case 3:
      zf(t), Un();
      break;
    case 5:
      df(t);
      break;
    case 1:
      ze(t.type) && Uo(t);
      break;
    case 4:
      Iu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ee(jo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ee(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vf(e, t, n) : (ee(oe, oe.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
      ee(oe, oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return jf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(oe, oe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bf(e, t, n);
  }
  return Ot(e, t, n);
}
var Ff, Yl, Wf, Hf;
Ff = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Yl = function() {
};
Wf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Zt(dt.current);
    var i = null;
    switch (n) {
      case "input":
        o = hl(e, o), r = hl(e, r), i = [];
        break;
      case "select":
        o = le({}, o, { value: void 0 }), r = le({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = gl(e, o), r = gl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Io);
    }
    Pl(n, r);
    var u;
    n = null;
    for (y in o)
      if (!r.hasOwnProperty(y) && o.hasOwnProperty(y) && o[y] != null)
        if (y === "style") {
          var f = o[y];
          for (u in f)
            f.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
        } else
          y !== "dangerouslySetInnerHTML" && y !== "children" && y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (Tr.hasOwnProperty(y) ? i || (i = []) : (i = i || []).push(y, null));
    for (y in r) {
      var c = r[y];
      if (f = o != null ? o[y] : void 0, r.hasOwnProperty(y) && c !== f && (c != null || f != null))
        if (y === "style")
          if (f) {
            for (u in f)
              !f.hasOwnProperty(u) || c && c.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
            for (u in c)
              c.hasOwnProperty(u) && f[u] !== c[u] && (n || (n = {}), n[u] = c[u]);
          } else
            n || (i || (i = []), i.push(
              y,
              n
            )), n = c;
        else
          y === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, f = f ? f.__html : void 0, c != null && f !== c && (i = i || []).push(y, c)) : y === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(y, "" + c) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && (Tr.hasOwnProperty(y) ? (c != null && y === "onScroll" && te("scroll", e), i || f === c || (i = [])) : (i = i || []).push(y, c));
    }
    n && (i = i || []).push("style", n);
    var y = i;
    (t.updateQueue = y) && (t.flags |= 4);
  }
};
Hf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Wy(e, t, n) {
  var r = t.pendingProps;
  switch (Cu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return ze(t.type) && bo(), Se(t), null;
    case 3:
      return r = t.stateNode, Vn(), ne(Ue), ne(ke), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (uo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (tu(it), it = null))), Yl(e, t), Se(t), null;
    case 5:
      bu(t);
      var o = Zt(zr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Wf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(V(166));
          return Se(t), null;
        }
        if (e = Zt(dt.current), uo(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ft] = t, r[br] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < cr.length; o++)
                te(cr[o], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te(
                "error",
                r
              ), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              pa(r, i), te("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, te("invalid", r);
              break;
            case "textarea":
              ya(r, i), te("invalid", r);
          }
          Pl(n, i), o = null;
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var f = i[u];
              u === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && lo(r.textContent, f, e), o = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && lo(
                r.textContent,
                f,
                e
              ), o = ["children", "" + f]) : Tr.hasOwnProperty(u) && f != null && u === "onScroll" && te("scroll", r);
            }
          switch (n) {
            case "input":
              Zr(r), da(r, i, !0);
              break;
            case "textarea":
              Zr(r), ha(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Io);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          u = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[ft] = t, e[br] = r, Ff(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (u = _l(n, r), n) {
              case "dialog":
                te("cancel", e), te("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < cr.length; o++)
                  te(cr[o], e);
                o = r;
                break;
              case "source":
                te("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                te(
                  "error",
                  e
                ), te("load", e), o = r;
                break;
              case "details":
                te("toggle", e), o = r;
                break;
              case "input":
                pa(e, r), o = hl(e, r), te("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = le({}, r, { value: void 0 }), te("invalid", e);
                break;
              case "textarea":
                ya(e, r), o = gl(e, r), te("invalid", e);
                break;
              default:
                o = r;
            }
            Pl(n, o), f = o;
            for (i in f)
              if (f.hasOwnProperty(i)) {
                var c = f[i];
                i === "style" ? gc(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && mc(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Rr(e, c) : typeof c == "number" && Rr(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Tr.hasOwnProperty(i) ? c != null && i === "onScroll" && te("scroll", e) : c != null && du(e, i, c, u));
              }
            switch (n) {
              case "input":
                Zr(e), da(e, r, !1);
                break;
              case "textarea":
                Zr(e), ha(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? xn(e, !!r.multiple, i, !1) : r.defaultValue != null && xn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null)
        Hf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(V(166));
        if (n = Zt(zr.current), Zt(dt.current), uo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ft] = t, (i = r.nodeValue !== n) && (e = He, e !== null))
            switch (e.tag) {
              case 3:
                lo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && lo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ft] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (ne(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (re && We !== null && t.mode & 1 && !(t.flags & 128))
          lf(), Un(), t.flags |= 98560, i = !1;
        else if (i = uo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(V(317));
            i[ft] = t;
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), i = !1;
        } else
          it !== null && (tu(it), it = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || oe.current & 1 ? de === 0 && (de = 3) : Xu())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return Vn(), Yl(e, t), e === null && Nr(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return Mu(t.type._context), Se(t), null;
    case 17:
      return ze(t.type) && bo(), Se(t), null;
    case 19:
      if (ne(oe), i = t.memoizedState, i === null)
        return Se(t), null;
      if (r = (t.flags & 128) !== 0, u = i.rendering, u === null)
        if (r)
          nr(i, !1);
        else {
          if (de !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (u = Ho(e), u !== null) {
                for (t.flags |= 128, nr(i, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ee(oe, oe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && se() > Fn && (t.flags |= 128, r = !0, nr(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ho(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !re)
              return Se(t), null;
          } else
            2 * se() - i.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, nr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (u.sibling = t.child, t.child = u) : (n = i.last, n !== null ? n.sibling = u : t.child = u, i.last = u);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = se(), t.sibling = null, n = oe.current, ee(oe, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return Qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? je & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function Hy(e, t) {
  switch (Cu(t), t.tag) {
    case 1:
      return ze(t.type) && bo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vn(), ne(Ue), ne(ke), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return bu(t), null;
    case 13:
      if (ne(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(V(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ne(oe), null;
    case 4:
      return Vn(), null;
    case 10:
      return Mu(t.type._context), null;
    case 22:
    case 23:
      return Qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var co = !1, Ee = !1, By = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else
      n.current = null;
}
function Ql(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var os = !1;
function $y(e, t) {
  if (Dl = Mo, e = Kc(), Tu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, f = -1, c = -1, y = 0, P = 0, O = e, k = null;
          t:
            for (; ; ) {
              for (var L; O !== n || o !== 0 && O.nodeType !== 3 || (f = u + o), O !== i || r !== 0 && O.nodeType !== 3 || (c = u + r), O.nodeType === 3 && (u += O.nodeValue.length), (L = O.firstChild) !== null; )
                k = O, O = L;
              for (; ; ) {
                if (O === e)
                  break t;
                if (k === n && ++y === o && (f = u), k === i && ++P === r && (c = u), (L = O.nextSibling) !== null)
                  break;
                O = k, k = O.parentNode;
              }
              O = L;
            }
          n = f === -1 || c === -1 ? null : { start: f, end: c };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ml = { focusedElem: e, selectionRange: n }, Mo = !1, F = t; F !== null; )
    if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, F = e;
    else
      for (; F !== null; ) {
        t = F;
        try {
          var D = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (D !== null) {
                  var A = D.memoizedProps, I = D.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? A : rt(t.type, A), I);
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (N) {
          ae(t, t.return, N);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, F = e;
          break;
        }
        F = t.return;
      }
  return D = os, os = !1, D;
}
function _r(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Ql(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ai(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Bf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Bf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ft], delete t[br], delete t[Il], delete t[Ry], delete t[Cy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $f(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function is(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $f(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Io));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ql(e, t, n), e = e.sibling; e !== null; )
      ql(e, t, n), e = e.sibling;
}
function Gl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Gl(e, t, n), e = e.sibling; e !== null; )
      Gl(e, t, n), e = e.sibling;
}
var ve = null, ot = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; )
    Kf(e, t, n), n = n.sibling;
}
function Kf(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function")
    try {
      pt.onCommitFiberUnmount(ei, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ee || Rn(n, t);
    case 6:
      var r = ve, o = ot;
      ve = null, Rt(e, t, n), ve = r, ot = o, ve !== null && (ot ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (ot ? (e = ve, n = n.stateNode, e.nodeType === 8 ? Ni(e.parentNode, n) : e.nodeType === 1 && Ni(e, n), Dr(e)) : Ni(ve, n.stateNode));
      break;
    case 4:
      r = ve, o = ot, ve = n.stateNode.containerInfo, ot = !0, Rt(e, t, n), ve = r, ot = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, u = i.destroy;
          i = i.tag, u !== void 0 && (i & 2 || i & 4) && Ql(n, t, u), o = o.next;
        } while (o !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (!Ee && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          ae(n, t, f);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Rt(e, t, n), Ee = r) : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new By()), t.forEach(function(r) {
      var o = eh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, u = t, f = u;
        e:
          for (; f !== null; ) {
            switch (f.tag) {
              case 5:
                ve = f.stateNode, ot = !1;
                break e;
              case 3:
                ve = f.stateNode.containerInfo, ot = !0;
                break e;
              case 4:
                ve = f.stateNode.containerInfo, ot = !0;
                break e;
            }
            f = f.return;
          }
        if (ve === null)
          throw Error(V(160));
        Kf(i, u, o), ve = null, ot = !1;
        var c = o.alternate;
        c !== null && (c.return = null), o.return = null;
      } catch (y) {
        ae(o, t, y);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Yf(t, e), t = t.sibling;
}
function Yf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (nt(t, e), st(e), r & 4) {
        try {
          _r(3, e, e.return), ai(3, e);
        } catch (A) {
          ae(e, e.return, A);
        }
        try {
          _r(5, e, e.return);
        } catch (A) {
          ae(e, e.return, A);
        }
      }
      break;
    case 1:
      nt(t, e), st(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (nt(t, e), st(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Rr(o, "");
        } catch (A) {
          ae(e, e.return, A);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, u = n !== null ? n.memoizedProps : i, f = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null)
          try {
            f === "input" && i.type === "radio" && i.name != null && dc(o, i), _l(f, u);
            var y = _l(f, i);
            for (u = 0; u < c.length; u += 2) {
              var P = c[u], O = c[u + 1];
              P === "style" ? gc(o, O) : P === "dangerouslySetInnerHTML" ? mc(o, O) : P === "children" ? Rr(o, O) : du(o, P, O, y);
            }
            switch (f) {
              case "input":
                ml(o, i);
                break;
              case "textarea":
                yc(o, i);
                break;
              case "select":
                var k = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var L = i.value;
                L != null ? xn(o, !!i.multiple, L, !1) : k !== !!i.multiple && (i.defaultValue != null ? xn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : xn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[br] = i;
          } catch (A) {
            ae(e, e.return, A);
          }
      }
      break;
    case 6:
      if (nt(t, e), st(e), r & 4) {
        if (e.stateNode === null)
          throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (A) {
          ae(e, e.return, A);
        }
      }
      break;
    case 3:
      if (nt(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Dr(t.containerInfo);
        } catch (A) {
          ae(e, e.return, A);
        }
      break;
    case 4:
      nt(t, e), st(e);
      break;
    case 13:
      nt(t, e), st(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ku = se())), r & 4 && ls(e);
      break;
    case 22:
      if (P = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (y = Ee) || P, nt(t, e), Ee = y) : nt(t, e), st(e), r & 8192) {
        if (y = e.memoizedState !== null, (e.stateNode.isHidden = y) && !P && e.mode & 1)
          for (F = e, P = e.child; P !== null; ) {
            for (O = F = P; F !== null; ) {
              switch (k = F, L = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _r(4, k, k.return);
                  break;
                case 1:
                  Rn(k, k.return);
                  var D = k.stateNode;
                  if (typeof D.componentWillUnmount == "function") {
                    r = k, n = k.return;
                    try {
                      t = r, D.props = t.memoizedProps, D.state = t.memoizedState, D.componentWillUnmount();
                    } catch (A) {
                      ae(r, n, A);
                    }
                  }
                  break;
                case 5:
                  Rn(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    as(O);
                    continue;
                  }
              }
              L !== null ? (L.return = k, F = L) : as(O);
            }
            P = P.sibling;
          }
        e:
          for (P = null, O = e; ; ) {
            if (O.tag === 5) {
              if (P === null) {
                P = O;
                try {
                  o = O.stateNode, y ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = O.stateNode, c = O.memoizedProps.style, u = c != null && c.hasOwnProperty("display") ? c.display : null, f.style.display = vc("display", u));
                } catch (A) {
                  ae(e, e.return, A);
                }
              }
            } else if (O.tag === 6) {
              if (P === null)
                try {
                  O.stateNode.nodeValue = y ? "" : O.memoizedProps;
                } catch (A) {
                  ae(e, e.return, A);
                }
            } else if ((O.tag !== 22 && O.tag !== 23 || O.memoizedState === null || O === e) && O.child !== null) {
              O.child.return = O, O = O.child;
              continue;
            }
            if (O === e)
              break e;
            for (; O.sibling === null; ) {
              if (O.return === null || O.return === e)
                break e;
              P === O && (P = null), O = O.return;
            }
            P === O && (P = null), O.sibling.return = O.return, O = O.sibling;
          }
      }
      break;
    case 19:
      nt(t, e), st(e), r & 4 && ls(e);
      break;
    case 21:
      break;
    default:
      nt(
        t,
        e
      ), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($f(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Rr(o, ""), r.flags &= -33);
          var i = is(e);
          Gl(e, i, o);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, f = is(e);
          ql(e, f, u);
          break;
        default:
          throw Error(V(161));
      }
    } catch (c) {
      ae(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ky(e, t, n) {
  F = e, Qf(e);
}
function Qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, i = o.child;
    if (o.tag === 22 && r) {
      var u = o.memoizedState !== null || co;
      if (!u) {
        var f = o.alternate, c = f !== null && f.memoizedState !== null || Ee;
        f = co;
        var y = Ee;
        if (co = u, (Ee = c) && !y)
          for (F = o; F !== null; )
            u = F, c = u.child, u.tag === 22 && u.memoizedState !== null ? ss(o) : c !== null ? (c.return = u, F = c) : ss(o);
        for (; i !== null; )
          F = i, Qf(i), i = i.sibling;
        F = o, co = f, Ee = y;
      }
      us(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, F = i) : us(e);
  }
}
function us(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Ba(t, i, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ba(t, u, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var y = t.alternate;
                if (y !== null) {
                  var P = y.memoizedState;
                  if (P !== null) {
                    var O = P.dehydrated;
                    O !== null && Dr(O);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        Ee || t.flags & 512 && Xl(t);
      } catch (k) {
        ae(t, t.return, k);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function as(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function ss(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ai(4, t);
          } catch (c) {
            ae(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ae(t, o, c);
            }
          }
          var i = t.return;
          try {
            Xl(t);
          } catch (c) {
            ae(t, i, c);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Xl(t);
          } catch (c) {
            ae(t, u, c);
          }
      }
    } catch (c) {
      ae(t, t.return, c);
    }
    if (t === e) {
      F = null;
      break;
    }
    var f = t.sibling;
    if (f !== null) {
      f.return = t.return, F = f;
      break;
    }
    F = t.return;
  }
}
var Yy = Math.ceil, Ko = kt.ReactCurrentDispatcher, Bu = kt.ReactCurrentOwner, Je = kt.ReactCurrentBatchConfig, Q = 0, he = null, ce = null, ge = 0, je = 0, Cn = $t(0), de = 0, Wr = null, ln = 0, si = 0, $u = 0, Sr = null, Ie = null, Ku = 0, Fn = 1 / 0, yt = null, Yo = !1, Zl = null, Vt = null, fo = !1, At = null, Qo = 0, Or = 0, Jl = null, Oo = -1, Eo = 0;
function Me() {
  return Q & 6 ? se() : Oo !== -1 ? Oo : Oo = se();
}
function jt(e) {
  return e.mode & 1 ? Q & 2 && ge !== 0 ? ge & -ge : Ly.transition !== null ? (Eo === 0 && (Eo = Lc()), Eo) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uc(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < Or)
    throw Or = 0, Jl = null, Error(V(185));
  $r(e, n, r), (!(Q & 2) || e !== he) && (e === he && (!(Q & 2) && (si |= n), de === 4 && Dt(e, ge)), Ve(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (Fn = se() + 500, ii && Kt()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Ld(e, t);
  var r = Do(e, e === he ? ge : 0);
  if (r === 0)
    n !== null && ga(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ga(n), t === 1)
      e.tag === 0 ? xy(cs.bind(null, e)) : nf(cs.bind(null, e)), ky(function() {
        !(Q & 6) && Kt();
      }), n = null;
    else {
      switch (Dc(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = Cc;
          break;
        case 16:
          n = Lo;
          break;
        case 536870912:
          n = xc;
          break;
        default:
          n = Lo;
      }
      n = np(n, Xf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Xf(e, t) {
  if (Oo = -1, Eo = 0, Q & 6)
    throw Error(V(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n)
    return null;
  var r = Do(e, e === he ? ge : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Xo(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var i = Gf();
    (he !== e || ge !== t) && (yt = null, Fn = se() + 500, en(e, t));
    do
      try {
        qy();
        break;
      } catch (f) {
        qf(e, f);
      }
    while (1);
    Du(), Ko.current = i, Q = o, ce !== null ? t = 0 : (he = null, ge = 0, t = de);
  }
  if (t !== 0) {
    if (t === 2 && (o = Tl(e), o !== 0 && (r = o, t = eu(e, o))), t === 1)
      throw n = Wr, en(e, 0), Dt(e, r), Ve(e, se()), n;
    if (t === 6)
      Dt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Qy(o) && (t = Xo(e, r), t === 2 && (i = Tl(e), i !== 0 && (r = i, t = eu(e, i))), t === 1))
        throw n = Wr, en(e, 0), Dt(e, r), Ve(e, se()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          Qt(e, Ie, yt);
          break;
        case 3:
          if (Dt(e, r), (r & 130023424) === r && (t = Ku + 500 - se(), 10 < t)) {
            if (Do(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Me(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Nl(Qt.bind(null, e, Ie, yt), t);
            break;
          }
          Qt(e, Ie, yt);
          break;
        case 4:
          if (Dt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var u = 31 - lt(r);
            i = 1 << u, u = t[u], u > o && (o = u), r &= ~i;
          }
          if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Nl(Qt.bind(null, e, Ie, yt), r);
            break;
          }
          Qt(e, Ie, yt);
          break;
        case 5:
          Qt(e, Ie, yt);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return Ve(e, se()), e.callbackNode === n ? Xf.bind(null, e) : null;
}
function eu(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = Xo(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && tu(t)), e;
}
function tu(e) {
  Ie === null ? Ie = e : Ie.push.apply(Ie, e);
}
function Qy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!at(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Dt(e, t) {
  for (t &= ~$u, t &= ~si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function cs(e) {
  if (Q & 6)
    throw Error(V(327));
  Nn();
  var t = Do(e, 0);
  if (!(t & 1))
    return Ve(e, se()), null;
  var n = Xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tl(e);
    r !== 0 && (t = r, n = eu(e, r));
  }
  if (n === 1)
    throw n = Wr, en(e, 0), Dt(e, t), Ve(e, se()), n;
  if (n === 6)
    throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qt(e, Ie, yt), Ve(e, se()), null;
}
function Yu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (Fn = se() + 500, ii && Kt());
  }
}
function un(e) {
  At !== null && At.tag === 0 && !(Q & 6) && Nn();
  var t = Q;
  Q |= 1;
  var n = Je.transition, r = G;
  try {
    if (Je.transition = null, G = 1, e)
      return e();
  } finally {
    G = r, Je.transition = n, Q = t, !(Q & 6) && Kt();
  }
}
function Qu() {
  je = Cn.current, ne(Cn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ey(n)), ce !== null)
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch (Cu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && bo();
          break;
        case 3:
          Vn(), ne(Ue), ne(ke), Uu();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          Mu(r.type._context);
          break;
        case 22:
        case 23:
          Qu();
      }
      n = n.return;
    }
  if (he = e, ce = e = Ft(e.current, null), ge = je = t, de = 0, Wr = null, $u = si = ln = 0, Ie = Sr = null, Gt !== null) {
    for (t = 0; t < Gt.length; t++)
      if (n = Gt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var u = i.next;
          i.next = o, r.next = u;
        }
        n.pending = r;
      }
    Gt = null;
  }
  return e;
}
function qf(e, t) {
  do {
    var n = ce;
    try {
      if (Du(), Po.current = $o, Bo) {
        for (var r = ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Bo = !1;
      }
      if (on = 0, ye = pe = ie = null, Pr = !1, Vr = 0, Bu.current = null, n === null || n.return === null) {
        de = 1, Wr = t, ce = null;
        break;
      }
      e: {
        var i = e, u = n.return, f = n, c = t;
        if (t = ge, f.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var y = c, P = f, O = P.tag;
          if (!(P.mode & 1) && (O === 0 || O === 11 || O === 15)) {
            var k = P.alternate;
            k ? (P.updateQueue = k.updateQueue, P.memoizedState = k.memoizedState, P.lanes = k.lanes) : (P.updateQueue = null, P.memoizedState = null);
          }
          var L = Ga(u);
          if (L !== null) {
            L.flags &= -257, Za(L, u, f, i, t), L.mode & 1 && qa(i, y, t), t = L, c = y;
            var D = t.updateQueue;
            if (D === null) {
              var A = /* @__PURE__ */ new Set();
              A.add(c), t.updateQueue = A;
            } else
              D.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              qa(i, y, t), Xu();
              break e;
            }
            c = Error(V(426));
          }
        } else if (re && f.mode & 1) {
          var I = Ga(u);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Za(I, u, f, i, t), xu(jn(c, f));
            break e;
          }
        }
        i = c = jn(c, f), de !== 4 && (de = 2), Sr === null ? Sr = [i] : Sr.push(i), i = u;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = Af(i, c, t);
              Ha(i, h);
              break e;
            case 1:
              f = c;
              var m = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Vt === null || !Vt.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var N = Nf(i, f, t);
                Ha(i, N);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Jf(n);
    } catch (g) {
      t = g, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Gf() {
  var e = Ko.current;
  return Ko.current = $o, e === null ? $o : e;
}
function Xu() {
  (de === 0 || de === 3 || de === 2) && (de = 4), he === null || !(ln & 268435455) && !(si & 268435455) || Dt(he, ge);
}
function Xo(e, t) {
  var n = Q;
  Q |= 2;
  var r = Gf();
  (he !== e || ge !== t) && (yt = null, en(e, t));
  do
    try {
      Xy();
      break;
    } catch (o) {
      qf(e, o);
    }
  while (1);
  if (Du(), Q = n, Ko.current = r, ce !== null)
    throw Error(V(261));
  return he = null, ge = 0, de;
}
function Xy() {
  for (; ce !== null; )
    Zf(ce);
}
function qy() {
  for (; ce !== null && !_d(); )
    Zf(ce);
}
function Zf(e) {
  var t = tp(e.alternate, e, je);
  e.memoizedProps = e.pendingProps, t === null ? Jf(e) : ce = t, Bu.current = null;
}
function Jf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Hy(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        de = 6, ce = null;
        return;
      }
    } else if (n = Wy(n, t, je), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Qt(e, t, n) {
  var r = G, o = Je.transition;
  try {
    Je.transition = null, G = 1, Gy(e, t, n, r);
  } finally {
    Je.transition = o, G = r;
  }
  return null;
}
function Gy(e, t, n, r) {
  do
    Nn();
  while (At !== null);
  if (Q & 6)
    throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Dd(e, i), e === he && (ce = he = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fo || (fo = !0, np(Lo, function() {
    return Nn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Je.transition, Je.transition = null;
    var u = G;
    G = 1;
    var f = Q;
    Q |= 4, Bu.current = null, $y(e, n), Yf(n, e), vy(Ml), Mo = !!Dl, Ml = Dl = null, e.current = n, Ky(n), Sd(), Q = f, G = u, Je.transition = i;
  } else
    e.current = n;
  if (fo && (fo = !1, At = e, Qo = o), i = e.pendingLanes, i === 0 && (Vt = null), kd(n.stateNode), Ve(e, se()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yo)
    throw Yo = !1, e = Zl, Zl = null, e;
  return Qo & 1 && e.tag !== 0 && Nn(), i = e.pendingLanes, i & 1 ? e === Jl ? Or++ : (Or = 0, Jl = e) : Or = 0, Kt(), null;
}
function Nn() {
  if (At !== null) {
    var e = Dc(Qo), t = Je.transition, n = G;
    try {
      if (Je.transition = null, G = 16 > e ? 16 : e, At === null)
        var r = !1;
      else {
        if (e = At, At = null, Qo = 0, Q & 6)
          throw Error(V(331));
        var o = Q;
        for (Q |= 4, F = e.current; F !== null; ) {
          var i = F, u = i.child;
          if (F.flags & 16) {
            var f = i.deletions;
            if (f !== null) {
              for (var c = 0; c < f.length; c++) {
                var y = f[c];
                for (F = y; F !== null; ) {
                  var P = F;
                  switch (P.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(8, P, i);
                  }
                  var O = P.child;
                  if (O !== null)
                    O.return = P, F = O;
                  else
                    for (; F !== null; ) {
                      P = F;
                      var k = P.sibling, L = P.return;
                      if (Bf(P), P === y) {
                        F = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = L, F = k;
                        break;
                      }
                      F = L;
                    }
                }
              }
              var D = i.alternate;
              if (D !== null) {
                var A = D.child;
                if (A !== null) {
                  D.child = null;
                  do {
                    var I = A.sibling;
                    A.sibling = null, A = I;
                  } while (A !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null)
            u.return = i, F = u;
          else
            e:
              for (; F !== null; ) {
                if (i = F, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, F = h;
                  break e;
                }
                F = i.return;
              }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          u = F;
          var v = u.child;
          if (u.subtreeFlags & 2064 && v !== null)
            v.return = u, F = v;
          else
            e:
              for (u = m; F !== null; ) {
                if (f = F, f.flags & 2048)
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ai(9, f);
                    }
                  } catch (g) {
                    ae(f, f.return, g);
                  }
                if (f === u) {
                  F = null;
                  break e;
                }
                var N = f.sibling;
                if (N !== null) {
                  N.return = f.return, F = N;
                  break e;
                }
                F = f.return;
              }
        }
        if (Q = o, Kt(), pt && typeof pt.onPostCommitFiberRoot == "function")
          try {
            pt.onPostCommitFiberRoot(ei, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      G = n, Je.transition = t;
    }
  }
  return !1;
}
function fs(e, t, n) {
  t = jn(n, t), t = Af(e, t, 1), e = zt(e, t, 1), t = Me(), e !== null && ($r(e, 1, t), Ve(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3)
    fs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = jn(n, e), e = Nf(t, e, 1), t = zt(t, e, 1), e = Me(), t !== null && ($r(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ge & n) === n && (de === 4 || de === 3 && (ge & 130023424) === ge && 500 > se() - Ku ? en(e, 0) : $u |= n), Ve(e, t);
}
function ep(e, t) {
  t === 0 && (e.mode & 1 ? (t = to, to <<= 1, !(to & 130023424) && (to = 4194304)) : t = 1);
  var n = Me();
  e = St(e, t), e !== null && ($r(e, t, n), Ve(e, n));
}
function Jy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ep(e, n);
}
function eh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), ep(e, n);
}
var tp;
tp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current)
      be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return be = !1, Fy(e, t, n);
      be = !!(e.flags & 131072);
    }
  else
    be = !1, re && t.flags & 1048576 && rf(t, Vo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      So(e, t), e = t.pendingProps;
      var o = bn(t, ke.current);
      An(t, n), o = Vu(null, t, r, e, o, n);
      var i = ju();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (i = !0, Uo(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Nu(t), o.updater = li, t.stateNode = o, o._reactInternals = t, Fl(t, r, e, n), t = Bl(null, t, r, !0, i, n)) : (t.tag = 0, re && i && Ru(t), Le(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (So(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = nh(r), e = rt(r, e), o) {
          case 0:
            t = Hl(null, t, r, e, n);
            break e;
          case 1:
            t = ts(null, t, r, e, n);
            break e;
          case 11:
            t = Ja(null, t, r, e, n);
            break e;
          case 14:
            t = es(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(V(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), Hl(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), ts(e, t, r, o, n);
    case 3:
      e: {
        if (zf(t), e === null)
          throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, af(e, t), Wo(t, r, null, n);
        var u = t.memoizedState;
        if (r = u.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = jn(Error(V(423)), t), t = ns(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = jn(Error(V(424)), t), t = ns(e, t, r, n, o);
            break e;
          } else
            for (We = Ut(t.stateNode.containerInfo.firstChild), He = t, re = !0, it = null, n = pf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === o) {
            t = Ot(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return df(t), e === null && zl(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = o.children, Al(r, o) ? u = null : i !== null && Al(r, i) && (t.flags |= 32), Uf(e, t), Le(e, t, u, n), t.child;
    case 6:
      return e === null && zl(t), null;
    case 13:
      return Vf(e, t, n);
    case 4:
      return Iu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), Ja(e, t, r, o, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, u = o.value, ee(jo, r._currentValue), r._currentValue = u, i !== null)
          if (at(i.value, u)) {
            if (i.children === o.children && !Ue.current) {
              t = Ot(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var f = i.dependencies;
              if (f !== null) {
                u = i.child;
                for (var c = f.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      c = gt(-1, n & -n), c.tag = 2;
                      var y = i.updateQueue;
                      if (y !== null) {
                        y = y.shared;
                        var P = y.pending;
                        P === null ? c.next = c : (c.next = P.next, P.next = c), y.pending = c;
                      }
                    }
                    i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), Vl(
                      i.return,
                      n,
                      t
                    ), f.lanes |= n;
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10)
                u = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (u = i.return, u === null)
                  throw Error(V(341));
                u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), Vl(u, n, t), u = i.sibling;
              } else
                u = i.child;
              if (u !== null)
                u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (i = u.sibling, i !== null) {
                    i.return = u.return, u = i;
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        Le(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, An(t, n), o = et(o), r = r(o), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = rt(r, t.pendingProps), o = rt(r.type, o), es(e, t, r, o, n);
    case 15:
      return If(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), So(e, t), t.tag = 1, ze(r) ? (e = !0, Uo(t)) : e = !1, An(t, n), cf(t, r, o), Fl(t, r, o, n), Bl(null, t, r, !0, e, n);
    case 19:
      return jf(e, t, n);
    case 22:
      return bf(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function np(e, t) {
  return Rc(e, t);
}
function th(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(e, t, n, r) {
  return new th(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function nh(e) {
  if (typeof e == "function")
    return qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hu)
      return 11;
    if (e === mu)
      return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ko(e, t, n, r, o, i) {
  var u = 2;
  if (r = e, typeof e == "function")
    qu(e) && (u = 1);
  else if (typeof e == "string")
    u = 5;
  else
    e:
      switch (e) {
        case gn:
          return tn(n.children, o, i, t);
        case yu:
          u = 8, o |= 8;
          break;
        case fl:
          return e = Ze(12, n, t, o | 2), e.elementType = fl, e.lanes = i, e;
        case pl:
          return e = Ze(13, n, t, o), e.elementType = pl, e.lanes = i, e;
        case dl:
          return e = Ze(19, n, t, o), e.elementType = dl, e.lanes = i, e;
        case cc:
          return ci(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ac:
                u = 10;
                break e;
              case sc:
                u = 9;
                break e;
              case hu:
                u = 11;
                break e;
              case mu:
                u = 14;
                break e;
              case Ct:
                u = 16, r = null;
                break e;
            }
          throw Error(V(130, e == null ? e : typeof e, ""));
      }
  return t = Ze(u, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function tn(e, t, n, r) {
  return e = Ze(7, e, r, t), e.lanes = n, e;
}
function ci(e, t, n, r) {
  return e = Ze(22, e, r, t), e.elementType = cc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Wi(e, t, n) {
  return e = Ze(6, e, null, t), e.lanes = n, e;
}
function Hi(e, t, n) {
  return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function rh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oi(0), this.expirationTimes = Oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Gu(e, t, n, r, o, i, u, f, c) {
  return e = new rh(e, t, n, f, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ze(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nu(i), e;
}
function oh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rp(e) {
  if (!e)
    return Ht;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1)
      throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n))
      return tf(e, n, t);
  }
  return t;
}
function op(e, t, n, r, o, i, u, f, c) {
  return e = Gu(n, r, !0, e, o, i, u, f, c), e.context = rp(null), n = e.current, r = Me(), o = jt(n), i = gt(r, o), i.callback = t ?? null, zt(n, i, o), e.current.lanes = o, $r(e, o, r), Ve(e, r), e;
}
function fi(e, t, n, r) {
  var o = t.current, i = Me(), u = jt(o);
  return n = rp(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(i, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(o, t, u), e !== null && (ut(e, o, u, i), wo(e, o, u)), u;
}
function qo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ps(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  ps(e, t), (e = e.alternate) && ps(e, t);
}
function ih() {
  return null;
}
var ip = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ju(e) {
  this._internalRoot = e;
}
pi.prototype.render = Ju.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(V(409));
  fi(e, t, null, null);
};
pi.prototype.unmount = Ju.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      fi(null, e, null, null);
    }), t[_t] = null;
  }
};
function pi(e) {
  this._internalRoot = e;
}
pi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Nc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++)
      ;
    Lt.splice(n, 0, e), n === 0 && bc(e);
  }
};
function ea(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function di(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ds() {
}
function lh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var y = qo(u);
        i.call(y);
      };
    }
    var u = op(t, r, e, 0, null, !1, !1, "", ds);
    return e._reactRootContainer = u, e[_t] = u.current, Nr(e.nodeType === 8 ? e.parentNode : e), un(), u;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var f = r;
    r = function() {
      var y = qo(c);
      f.call(y);
    };
  }
  var c = Gu(e, 0, !1, null, null, !1, !1, "", ds);
  return e._reactRootContainer = c, e[_t] = c.current, Nr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    fi(t, c, n, r);
  }), c;
}
function yi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof o == "function") {
      var f = o;
      o = function() {
        var c = qo(u);
        f.call(c);
      };
    }
    fi(t, u, e, o);
  } else
    u = lh(n, t, e, o, r);
  return qo(u);
}
Mc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = sr(t.pendingLanes);
        n !== 0 && (wu(t, n | 1), Ve(t, se()), !(Q & 6) && (Fn = se() + 500, Kt()));
      }
      break;
    case 13:
      un(function() {
        var r = St(e, 1);
        if (r !== null) {
          var o = Me();
          ut(r, e, 1, o);
        }
      }), Zu(e, 1);
  }
};
Pu = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Me();
      ut(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
Ac = function(e) {
  if (e.tag === 13) {
    var t = jt(e), n = St(e, t);
    if (n !== null) {
      var r = Me();
      ut(n, e, t, r);
    }
    Zu(e, t);
  }
};
Nc = function() {
  return G;
};
Ic = function(e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
};
Ol = function(e, t, n) {
  switch (t) {
    case "input":
      if (ml(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = oi(r);
            if (!o)
              throw Error(V(90));
            pc(r), ml(r, o);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      t = n.value, t != null && xn(e, !!n.multiple, t, !1);
  }
};
_c = Yu;
Sc = un;
var uh = { usingClientEntryPoint: !1, Events: [Yr, Sn, oi, wc, Pc, Yu] }, rr = { findFiberByHostInstance: qt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, ah = { bundleType: rr.bundleType, version: rr.version, rendererPackageName: rr.rendererPackageName, rendererConfig: rr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = kc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: rr.findFiberByHostInstance || ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!po.isDisabled && po.supportsFiber)
    try {
      ei = po.inject(ah), pt = po;
    } catch {
    }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ea(t))
    throw Error(V(200));
  return oh(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!ea(e))
    throw Error(V(299));
  var n = !1, r = "", o = ip;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Gu(e, 1, !1, null, null, n, !1, r, o), e[_t] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new Ju(t);
};
$e.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = kc(t), e = e === null ? null : e.stateNode, e;
};
$e.flushSync = function(e) {
  return un(e);
};
$e.hydrate = function(e, t, n) {
  if (!di(t))
    throw Error(V(200));
  return yi(null, e, t, !0, n);
};
$e.hydrateRoot = function(e, t, n) {
  if (!ea(e))
    throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", u = ip;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = op(t, null, e, 1, n ?? null, o, !1, i, u), e[_t] = t.current, Nr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new pi(t);
};
$e.render = function(e, t, n) {
  if (!di(t))
    throw Error(V(200));
  return yi(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function(e) {
  if (!di(e))
    throw Error(V(40));
  return e._reactRootContainer ? (un(function() {
    yi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[_t] = null;
    });
  }), !0) : !1;
};
$e.unstable_batchedUpdates = Yu;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!di(n))
    throw Error(V(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(V(38));
  return yi(e, t, n, !1, r);
};
$e.version = "18.2.0-next-9e3b772b8-20220608";
function lp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp);
    } catch (e) {
      console.error(e);
    }
}
lp(), rc.exports = $e;
var sh = rc.exports, ys = sh;
sl.createRoot = ys.createRoot, sl.hydrateRoot = ys.hydrateRoot;
var up = {}, ap = {}, Z = {}, ch = function(t, n, r) {
  var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("script");
  typeof n == "function" && (r = n, n = {}), n = n || {}, r = r || function() {
  }, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = "async" in n ? !!n.async : !0, i.src = t, n.attrs && fh(i, n.attrs), n.text && (i.text = "" + n.text);
  var u = "onload" in i ? hs : ph;
  u(i, r), i.onload || hs(i, r), o.appendChild(i);
};
function fh(e, t) {
  for (var n in t)
    e.setAttribute(n, t[n]);
}
function hs(e, t) {
  e.onload = function() {
    this.onerror = this.onload = null, t(null, e);
  }, e.onerror = function() {
    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
  };
}
function ph(e, t) {
  e.onreadystatechange = function() {
    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e));
  };
}
var dh = function(t) {
  return yh(t) && !hh(t);
};
function yh(e) {
  return !!e && typeof e == "object";
}
function hh(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || gh(e);
}
var mh = typeof Symbol == "function" && Symbol.for, vh = mh ? Symbol.for("react.element") : 60103;
function gh(e) {
  return e.$$typeof === vh;
}
function wh(e) {
  return Array.isArray(e) ? [] : {};
}
function Hr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Wn(wh(e), e, t) : e;
}
function Ph(e, t, n) {
  return e.concat(t).map(function(r) {
    return Hr(r, n);
  });
}
function _h(e, t) {
  if (!t.customMerge)
    return Wn;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Wn;
}
function Sh(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ms(e) {
  return Object.keys(e).concat(Sh(e));
}
function sp(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Oh(e, t) {
  return sp(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Eh(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && ms(e).forEach(function(o) {
    r[o] = Hr(e[o], n);
  }), ms(t).forEach(function(o) {
    Oh(e, o) || (sp(e, o) && n.isMergeableObject(t[o]) ? r[o] = _h(o, n)(e[o], t[o], n) : r[o] = Hr(t[o], n));
  }), r;
}
function Wn(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Ph, n.isMergeableObject = n.isMergeableObject || dh, n.cloneUnlessOtherwiseSpecified = Hr;
  var r = Array.isArray(t), o = Array.isArray(e), i = r === o;
  return i ? r ? n.arrayMerge(e, t, n) : Eh(e, t, n) : Hr(t, n);
}
Wn.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, o) {
    return Wn(r, o, n);
  }, {});
};
var kh = Wn, cp = kh;
Object.defineProperty(Z, "__esModule", {
  value: !0
});
Z.parseStartTime = Uh;
Z.parseEndTime = zh;
Z.randomString = Vh;
Z.queryString = jh;
Z.getSDK = Fh;
Z.getConfig = Wh;
Z.omit = Hh;
Z.callPlayer = Bh;
Z.isMediaStream = $h;
Z.isBlobUrl = Kh;
Z.supportsWebKitPresentationMode = Yh;
var Th = fp(ch), Rh = fp(cp);
function fp(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ch(e, t) {
  return Mh(e) || Dh(e, t) || Lh(e, t) || xh();
}
function xh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lh(e, t) {
  if (e) {
    if (typeof e == "string")
      return vs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return vs(e, t);
  }
}
function vs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Dh(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [], r = !0, o = !1, i = void 0;
    try {
      for (var u = e[Symbol.iterator](), f; !(r = (f = u.next()).done) && (n.push(f.value), !(t && n.length === t)); r = !0)
        ;
    } catch (c) {
      o = !0, i = c;
    } finally {
      try {
        !r && u.return != null && u.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return n;
  }
}
function Mh(e) {
  if (Array.isArray(e))
    return e;
}
var Ah = /[?&#](?:start|t)=([0-9hms]+)/, Nh = /[?&#]end=([0-9hms]+)/, nu = /(\d+)(h|m|s)/g, Ih = /^\d+$/;
function pp(e, t) {
  if (!(e instanceof Array)) {
    var n = e.match(t);
    if (n) {
      var r = n[1];
      if (r.match(nu))
        return bh(r);
      if (Ih.test(r))
        return parseInt(r);
    }
  }
}
function bh(e) {
  for (var t = 0, n = nu.exec(e); n !== null; ) {
    var r = n, o = Ch(r, 3), i = o[1], u = o[2];
    u === "h" && (t += parseInt(i, 10) * 60 * 60), u === "m" && (t += parseInt(i, 10) * 60), u === "s" && (t += parseInt(i, 10)), n = nu.exec(e);
  }
  return t;
}
function Uh(e) {
  return pp(e, Ah);
}
function zh(e) {
  return pp(e, Nh);
}
function Vh() {
  return Math.random().toString(36).substr(2, 5);
}
function jh(e) {
  return Object.keys(e).map(function(t) {
    return "".concat(t, "=").concat(e[t]);
  }).join("&");
}
function Bi(e) {
  return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
}
var hn = {};
function Fh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
    return !0;
  }, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : Th.default, i = Bi(t);
  return i && r(i) ? Promise.resolve(i) : new Promise(function(u, f) {
    if (hn[e]) {
      hn[e].push({
        resolve: u,
        reject: f
      });
      return;
    }
    hn[e] = [{
      resolve: u,
      reject: f
    }];
    var c = function(O) {
      hn[e].forEach(function(k) {
        return k.resolve(O);
      });
    };
    if (n) {
      var y = window[n];
      window[n] = function() {
        y && y(), c(Bi(t));
      };
    }
    o(e, function(P) {
      P ? (hn[e].forEach(function(O) {
        return O.reject(P);
      }), hn[e] = null) : n || c(Bi(t));
    });
  });
}
function Wh(e, t) {
  return (0, Rh.default)(t.config, e.config);
}
function Hh(e) {
  for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  for (var i = (t = []).concat.apply(t, r), u = {}, f = Object.keys(e), c = 0, y = f; c < y.length; c++) {
    var P = y[c];
    i.indexOf(P) === -1 && (u[P] = e[P]);
  }
  return u;
}
function Bh(e) {
  var t;
  if (!this.player || !this.player[e]) {
    var n = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
    return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null;
  }
  for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    o[i - 1] = arguments[i];
  return (t = this.player)[e].apply(t, o);
}
function $h(e) {
  return typeof window < "u" && typeof window.MediaStream < "u" && e instanceof window.MediaStream;
}
function Kh(e) {
  return /^blob:/.test(e);
}
function Yh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("video"), t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t;
}
var B = {};
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.canPlay = B.FLV_EXTENSIONS = B.DASH_EXTENSIONS = B.HLS_EXTENSIONS = B.VIDEO_EXTENSIONS = B.AUDIO_EXTENSIONS = B.MATCH_URL_KALTURA = B.MATCH_URL_VIDYARD = B.MATCH_URL_MIXCLOUD = B.MATCH_URL_DAILYMOTION = B.MATCH_URL_TWITCH_CHANNEL = B.MATCH_URL_TWITCH_VIDEO = B.MATCH_URL_WISTIA = B.MATCH_URL_STREAMABLE = B.MATCH_URL_FACEBOOK_WATCH = B.MATCH_URL_FACEBOOK = B.MATCH_URL_VIMEO = B.MATCH_URL_SOUNDCLOUD = B.MATCH_URL_YOUTUBE = void 0;
var gs = Z;
function Qh(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Xh(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(y) {
        throw y;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, u = !1, f;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var y = n.next();
    return i = y.done, y;
  }, e: function(y) {
    u = !0, f = y;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (u)
        throw f;
    }
  } };
}
function Xh(e, t) {
  if (e) {
    if (typeof e == "string")
      return ws(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ws(e, t);
  }
}
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var ru = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
B.MATCH_URL_YOUTUBE = ru;
var dp = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
B.MATCH_URL_SOUNDCLOUD = dp;
var yp = /vimeo\.com\/(?!progressive_redirect).+/;
B.MATCH_URL_VIMEO = yp;
var hp = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
B.MATCH_URL_FACEBOOK = hp;
var mp = /^https?:\/\/fb\.watch\/.+$/;
B.MATCH_URL_FACEBOOK_WATCH = mp;
var vp = /streamable\.com\/([a-z0-9]+)$/;
B.MATCH_URL_STREAMABLE = vp;
var gp = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
B.MATCH_URL_WISTIA = gp;
var wp = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
B.MATCH_URL_TWITCH_VIDEO = wp;
var Pp = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
B.MATCH_URL_TWITCH_CHANNEL = Pp;
var _p = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
B.MATCH_URL_DAILYMOTION = _p;
var Sp = /mixcloud\.com\/([^/]+\/[^/]+)/;
B.MATCH_URL_MIXCLOUD = Sp;
var Op = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
B.MATCH_URL_VIDYARD = Op;
var Ep = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
B.MATCH_URL_KALTURA = Ep;
var ta = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
B.AUDIO_EXTENSIONS = ta;
var na = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
B.VIDEO_EXTENSIONS = na;
var ra = /\.(m3u8)($|\?)/i;
B.HLS_EXTENSIONS = ra;
var kp = /\.(mpd)($|\?)/i;
B.DASH_EXTENSIONS = kp;
var Tp = /\.(flv)($|\?)/i;
B.FLV_EXTENSIONS = Tp;
var qh = function e(t) {
  if (t instanceof Array) {
    var n = Qh(t), r;
    try {
      for (n.s(); !(r = n.n()).done; ) {
        var o = r.value;
        if (typeof o == "string" && e(o) || e(o.src))
          return !0;
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
    return !1;
  }
  return (0, gs.isMediaStream)(t) || (0, gs.isBlobUrl)(t) ? !0 : ta.test(t) || na.test(t) || ra.test(t) || kp.test(t) || Tp.test(t);
}, Gh = {
  youtube: function(t) {
    return t instanceof Array ? t.every(function(n) {
      return ru.test(n);
    }) : ru.test(t);
  },
  soundcloud: function(t) {
    return dp.test(t) && !ta.test(t);
  },
  vimeo: function(t) {
    return yp.test(t) && !na.test(t) && !ra.test(t);
  },
  facebook: function(t) {
    return hp.test(t) || mp.test(t);
  },
  streamable: function(t) {
    return vp.test(t);
  },
  wistia: function(t) {
    return gp.test(t);
  },
  twitch: function(t) {
    return wp.test(t) || Pp.test(t);
  },
  dailymotion: function(t) {
    return _p.test(t);
  },
  mixcloud: function(t) {
    return Sp.test(t);
  },
  vidyard: function(t) {
    return Op.test(t);
  },
  kaltura: function(t) {
    return Ep.test(t);
  },
  file: qh
};
B.canPlay = Gh;
var $i = {}, Ps;
function Zh() {
  return Ps || (Ps = 1, function(e) {
    function t(w) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(C) {
        return typeof C;
      } : t = function(C) {
        return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
      }, t(w);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var w = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return w;
      }, w;
    }
    function u(w) {
      if (w && w.__esModule)
        return w;
      if (w === null || t(w) !== "object" && typeof w != "function")
        return { default: w };
      var x = i();
      if (x && x.has(w))
        return x.get(w);
      var C = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var U in w)
        if (Object.prototype.hasOwnProperty.call(w, U)) {
          var W = R ? Object.getOwnPropertyDescriptor(w, U) : null;
          W && (W.get || W.set) ? Object.defineProperty(C, U, W) : C[U] = w[U];
        }
      return C.default = w, x && x.set(w, C), C;
    }
    function f(w, x) {
      var C = Object.keys(w);
      if (Object.getOwnPropertySymbols) {
        var R = Object.getOwnPropertySymbols(w);
        x && (R = R.filter(function(U) {
          return Object.getOwnPropertyDescriptor(w, U).enumerable;
        })), C.push.apply(C, R);
      }
      return C;
    }
    function c(w) {
      for (var x = 1; x < arguments.length; x++) {
        var C = arguments[x] != null ? arguments[x] : {};
        x % 2 ? f(Object(C), !0).forEach(function(R) {
          s(w, R, C[R]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(C)) : f(Object(C)).forEach(function(R) {
          Object.defineProperty(w, R, Object.getOwnPropertyDescriptor(C, R));
        });
      }
      return w;
    }
    function y(w, x) {
      return D(w) || L(w, x) || O(w, x) || P();
    }
    function P() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function O(w, x) {
      if (w) {
        if (typeof w == "string")
          return k(w, x);
        var C = Object.prototype.toString.call(w).slice(8, -1);
        if (C === "Object" && w.constructor && (C = w.constructor.name), C === "Map" || C === "Set")
          return Array.from(w);
        if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
          return k(w, x);
      }
    }
    function k(w, x) {
      (x == null || x > w.length) && (x = w.length);
      for (var C = 0, R = new Array(x); C < x; C++)
        R[C] = w[C];
      return R;
    }
    function L(w, x) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(w)))) {
        var C = [], R = !0, U = !1, W = void 0;
        try {
          for (var j = w[Symbol.iterator](), $; !(R = ($ = j.next()).done) && (C.push($.value), !(x && C.length === x)); R = !0)
            ;
        } catch (X) {
          U = !0, W = X;
        } finally {
          try {
            !R && j.return != null && j.return();
          } finally {
            if (U)
              throw W;
          }
        }
        return C;
      }
    }
    function D(w) {
      if (Array.isArray(w))
        return w;
    }
    function A(w, x) {
      if (!(w instanceof x))
        throw new TypeError("Cannot call a class as a function");
    }
    function I(w, x) {
      for (var C = 0; C < x.length; C++) {
        var R = x[C];
        R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(w, R.key, R);
      }
    }
    function h(w, x, C) {
      return x && I(w.prototype, x), C && I(w, C), w;
    }
    function m(w, x) {
      if (typeof x != "function" && x !== null)
        throw new TypeError("Super expression must either be null or a function");
      w.prototype = Object.create(x && x.prototype, { constructor: { value: w, writable: !0, configurable: !0 } }), x && v(w, x);
    }
    function v(w, x) {
      return v = Object.setPrototypeOf || function(R, U) {
        return R.__proto__ = U, R;
      }, v(w, x);
    }
    function N(w) {
      var x = p();
      return function() {
        var R = l(w), U;
        if (x) {
          var W = l(this).constructor;
          U = Reflect.construct(R, arguments, W);
        } else
          U = R.apply(this, arguments);
        return g(this, U);
      };
    }
    function g(w, x) {
      return x && (t(x) === "object" || typeof x == "function") ? x : _(w);
    }
    function _(w) {
      if (w === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return w;
    }
    function p() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function l(w) {
      return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
        return C.__proto__ || Object.getPrototypeOf(C);
      }, l(w);
    }
    function s(w, x, C) {
      return x in w ? Object.defineProperty(w, x, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : w[x] = C, w;
    }
    var a = "https://www.youtube.com/iframe_api", d = "YT", E = "onYouTubeIframeAPIReady", T = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/, S = /user\/([a-zA-Z0-9_-]+)\/?/, b = /youtube-nocookie\.com/, z = "https://www.youtube-nocookie.com", M = /* @__PURE__ */ function(w) {
      m(C, w);
      var x = N(C);
      function C() {
        var R;
        A(this, C);
        for (var U = arguments.length, W = new Array(U), j = 0; j < U; j++)
          W[j] = arguments[j];
        return R = x.call.apply(x, [this].concat(W)), s(_(R), "callPlayer", r.callPlayer), s(_(R), "parsePlaylist", function($) {
          if ($ instanceof Array)
            return {
              listType: "playlist",
              playlist: $.map(R.getID).join(",")
            };
          if (T.test($)) {
            var X = $.match(T), q = y(X, 2), J = q[1];
            return {
              listType: "playlist",
              list: J.replace(/^UC/, "UU")
            };
          }
          if (S.test($)) {
            var Pe = $.match(S), Te = y(Pe, 2), Ye = Te[1];
            return {
              listType: "user_uploads",
              list: Ye
            };
          }
          return {};
        }), s(_(R), "onStateChange", function($) {
          var X = $.data, q = R.props, J = q.onPlay, Pe = q.onPause, Te = q.onBuffer, Ye = q.onBufferEnd, pn = q.onEnded, Yn = q.onReady, Xr = q.loop, Qn = q.config, dn = Qn.playerVars, Xn = Qn.onUnstarted, Qe = window[d].PlayerState, zp = Qe.UNSTARTED, Vp = Qe.PLAYING, jp = Qe.PAUSED, Fp = Qe.BUFFERING, Wp = Qe.ENDED, Hp = Qe.CUED;
          if (X === zp && Xn(), X === Vp && (J(), Ye()), X === jp && Pe(), X === Fp && Te(), X === Wp) {
            var Bp = !!R.callPlayer("getPlaylist");
            Xr && !Bp && (dn.start ? R.seekTo(dn.start) : R.play()), pn();
          }
          X === Hp && Yn();
        }), s(_(R), "mute", function() {
          R.callPlayer("mute");
        }), s(_(R), "unmute", function() {
          R.callPlayer("unMute");
        }), s(_(R), "ref", function($) {
          R.container = $;
        }), R;
      }
      return h(C, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "getID",
        value: function(U) {
          return !U || U instanceof Array || T.test(U) ? null : U.match(o.MATCH_URL_YOUTUBE)[1];
        }
      }, {
        key: "load",
        value: function(U, W) {
          var j = this, $ = this.props, X = $.playing, q = $.muted, J = $.playsinline, Pe = $.controls, Te = $.loop, Ye = $.config, pn = $.onError, Yn = Ye.playerVars, Xr = Ye.embedOptions, Qn = this.getID(U);
          if (W) {
            if (T.test(U) || S.test(U) || U instanceof Array) {
              this.player.loadPlaylist(this.parsePlaylist(U));
              return;
            }
            this.player.cueVideoById({
              videoId: Qn,
              startSeconds: (0, r.parseStartTime)(U) || Yn.start,
              endSeconds: (0, r.parseEndTime)(U) || Yn.end
            });
            return;
          }
          (0, r.getSDK)(a, d, E, function(dn) {
            return dn.loaded;
          }).then(function(dn) {
            j.container && (j.player = new dn.Player(j.container, c({
              width: "100%",
              height: "100%",
              videoId: Qn,
              playerVars: c(c({
                autoplay: X ? 1 : 0,
                mute: q ? 1 : 0,
                controls: Pe ? 1 : 0,
                start: (0, r.parseStartTime)(U),
                end: (0, r.parseEndTime)(U),
                origin: window.location.origin,
                playsinline: J ? 1 : 0
              }, j.parsePlaylist(U)), Yn),
              events: {
                onReady: function() {
                  Te && j.player.setLoop(!0), j.props.onReady();
                },
                onPlaybackRateChange: function(Qe) {
                  return j.props.onPlaybackRateChange(Qe.data);
                },
                onPlaybackQualityChange: function(Qe) {
                  return j.props.onPlaybackQualityChange(Qe);
                },
                onStateChange: j.onStateChange,
                onError: function(Qe) {
                  return pn(Qe.data);
                }
              },
              host: b.test(U) ? z : void 0
            }, Xr)));
          }, pn), Xr.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause");
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("playVideo");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pauseVideo");
        }
      }, {
        key: "stop",
        value: function() {
          document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
        }
      }, {
        key: "seekTo",
        value: function(U) {
          var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          this.callPlayer("seekTo", U), !W && !this.props.playing && this.pause();
        }
      }, {
        key: "setVolume",
        value: function(U) {
          this.callPlayer("setVolume", U * 100);
        }
      }, {
        key: "setPlaybackRate",
        value: function(U) {
          this.callPlayer("setPlaybackRate", U);
        }
      }, {
        key: "setLoop",
        value: function(U) {
          this.callPlayer("setLoop", U);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("getCurrentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
        }
      }, {
        key: "render",
        value: function() {
          var U = this.props.display, W = {
            width: "100%",
            height: "100%",
            display: U
          };
          return /* @__PURE__ */ n.default.createElement("div", {
            style: W
          }, /* @__PURE__ */ n.default.createElement("div", {
            ref: this.ref
          }));
        }
      }]), C;
    }(n.Component);
    e.default = M, s(M, "displayName", "YouTube"), s(M, "canPlay", o.canPlay.youtube);
  }($i)), $i;
}
var Ki = {}, _s;
function Jh() {
  return _s || (_s = 1, function(e) {
    function t(p) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(s) {
        return typeof s;
      } : t = function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      }, t(p);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var p = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return p;
      }, p;
    }
    function u(p) {
      if (p && p.__esModule)
        return p;
      if (p === null || t(p) !== "object" && typeof p != "function")
        return { default: p };
      var l = i();
      if (l && l.has(p))
        return l.get(p);
      var s = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var d in p)
        if (Object.prototype.hasOwnProperty.call(p, d)) {
          var E = a ? Object.getOwnPropertyDescriptor(p, d) : null;
          E && (E.get || E.set) ? Object.defineProperty(s, d, E) : s[d] = p[d];
        }
      return s.default = p, l && l.set(p, s), s;
    }
    function f(p, l) {
      var s = Object.keys(p);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(p);
        l && (a = a.filter(function(d) {
          return Object.getOwnPropertyDescriptor(p, d).enumerable;
        })), s.push.apply(s, a);
      }
      return s;
    }
    function c(p) {
      for (var l = 1; l < arguments.length; l++) {
        var s = arguments[l] != null ? arguments[l] : {};
        l % 2 ? f(Object(s), !0).forEach(function(a) {
          v(p, a, s[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(s)) : f(Object(s)).forEach(function(a) {
          Object.defineProperty(p, a, Object.getOwnPropertyDescriptor(s, a));
        });
      }
      return p;
    }
    function y(p, l) {
      if (!(p instanceof l))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(p, l) {
      for (var s = 0; s < l.length; s++) {
        var a = l[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(p, a.key, a);
      }
    }
    function O(p, l, s) {
      return l && P(p.prototype, l), s && P(p, s), p;
    }
    function k(p, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Super expression must either be null or a function");
      p.prototype = Object.create(l && l.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), l && L(p, l);
    }
    function L(p, l) {
      return L = Object.setPrototypeOf || function(a, d) {
        return a.__proto__ = d, a;
      }, L(p, l);
    }
    function D(p) {
      var l = h();
      return function() {
        var a = m(p), d;
        if (l) {
          var E = m(this).constructor;
          d = Reflect.construct(a, arguments, E);
        } else
          d = a.apply(this, arguments);
        return A(this, d);
      };
    }
    function A(p, l) {
      return l && (t(l) === "object" || typeof l == "function") ? l : I(p);
    }
    function I(p) {
      if (p === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return p;
    }
    function h() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m(p) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
        return s.__proto__ || Object.getPrototypeOf(s);
      }, m(p);
    }
    function v(p, l, s) {
      return l in p ? Object.defineProperty(p, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : p[l] = s, p;
    }
    var N = "https://w.soundcloud.com/player/api.js", g = "SC", _ = /* @__PURE__ */ function(p) {
      k(s, p);
      var l = D(s);
      function s() {
        var a;
        y(this, s);
        for (var d = arguments.length, E = new Array(d), T = 0; T < d; T++)
          E[T] = arguments[T];
        return a = l.call.apply(l, [this].concat(E)), v(I(a), "callPlayer", r.callPlayer), v(I(a), "duration", null), v(I(a), "currentTime", null), v(I(a), "fractionLoaded", null), v(I(a), "mute", function() {
          a.setVolume(0);
        }), v(I(a), "unmute", function() {
          a.props.volume !== null && a.setVolume(a.props.volume);
        }), v(I(a), "ref", function(S) {
          a.iframe = S;
        }), a;
      }
      return O(s, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(d, E) {
          var T = this;
          (0, r.getSDK)(N, g).then(function(S) {
            if (T.iframe) {
              var b = S.Widget.Events, z = b.PLAY, M = b.PLAY_PROGRESS, w = b.PAUSE, x = b.FINISH, C = b.ERROR;
              E || (T.player = S.Widget(T.iframe), T.player.bind(z, T.props.onPlay), T.player.bind(w, function() {
                var R = T.duration - T.currentTime;
                R < 0.05 || T.props.onPause();
              }), T.player.bind(M, function(R) {
                T.currentTime = R.currentPosition / 1e3, T.fractionLoaded = R.loadedProgress;
              }), T.player.bind(x, function() {
                return T.props.onEnded();
              }), T.player.bind(C, function(R) {
                return T.props.onError(R);
              })), T.player.load(d, c(c({}, T.props.config.options), {}, {
                callback: function() {
                  T.player.getDuration(function(U) {
                    T.duration = U / 1e3, T.props.onReady();
                  });
                }
              }));
            }
          });
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(d) {
          var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seekTo", d * 1e3), E || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(d) {
          this.callPlayer("setVolume", d * 100);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.fractionLoaded * this.duration;
        }
      }, {
        key: "render",
        value: function() {
          var d = this.props.display, E = {
            width: "100%",
            height: "100%",
            display: d
          };
          return /* @__PURE__ */ n.default.createElement("iframe", {
            ref: this.ref,
            src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
            style: E,
            frameBorder: 0,
            allow: "autoplay"
          });
        }
      }]), s;
    }(n.Component);
    e.default = _, v(_, "displayName", "SoundCloud"), v(_, "canPlay", o.canPlay.soundcloud), v(_, "loopOnEnded", !0);
  }(Ki)), Ki;
}
var Yi = {}, Ss;
function em() {
  return Ss || (Ss = 1, function(e) {
    function t(l) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(a) {
        return typeof a;
      } : t = function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, t(l);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var l = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return l;
      }, l;
    }
    function u(l) {
      if (l && l.__esModule)
        return l;
      if (l === null || t(l) !== "object" && typeof l != "function")
        return { default: l };
      var s = i();
      if (s && s.has(l))
        return s.get(l);
      var a = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var E in l)
        if (Object.prototype.hasOwnProperty.call(l, E)) {
          var T = d ? Object.getOwnPropertyDescriptor(l, E) : null;
          T && (T.get || T.set) ? Object.defineProperty(a, E, T) : a[E] = l[E];
        }
      return a.default = l, s && s.set(l, a), a;
    }
    function f(l, s) {
      var a = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(l);
        s && (d = d.filter(function(E) {
          return Object.getOwnPropertyDescriptor(l, E).enumerable;
        })), a.push.apply(a, d);
      }
      return a;
    }
    function c(l) {
      for (var s = 1; s < arguments.length; s++) {
        var a = arguments[s] != null ? arguments[s] : {};
        s % 2 ? f(Object(a), !0).forEach(function(d) {
          v(l, d, a[d]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach(function(d) {
          Object.defineProperty(l, d, Object.getOwnPropertyDescriptor(a, d));
        });
      }
      return l;
    }
    function y(l, s) {
      if (!(l instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(l, s) {
      for (var a = 0; a < s.length; a++) {
        var d = s[a];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(l, d.key, d);
      }
    }
    function O(l, s, a) {
      return s && P(l.prototype, s), a && P(l, a), l;
    }
    function k(l, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(s && s.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), s && L(l, s);
    }
    function L(l, s) {
      return L = Object.setPrototypeOf || function(d, E) {
        return d.__proto__ = E, d;
      }, L(l, s);
    }
    function D(l) {
      var s = h();
      return function() {
        var d = m(l), E;
        if (s) {
          var T = m(this).constructor;
          E = Reflect.construct(d, arguments, T);
        } else
          E = d.apply(this, arguments);
        return A(this, E);
      };
    }
    function A(l, s) {
      return s && (t(s) === "object" || typeof s == "function") ? s : I(l);
    }
    function I(l) {
      if (l === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function h() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m(l) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, m(l);
    }
    function v(l, s, a) {
      return s in l ? Object.defineProperty(l, s, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : l[s] = a, l;
    }
    var N = "https://player.vimeo.com/api/player.js", g = "Vimeo", _ = function(s) {
      return s.replace("/manage/videos", "");
    }, p = /* @__PURE__ */ function(l) {
      k(a, l);
      var s = D(a);
      function a() {
        var d;
        y(this, a);
        for (var E = arguments.length, T = new Array(E), S = 0; S < E; S++)
          T[S] = arguments[S];
        return d = s.call.apply(s, [this].concat(T)), v(I(d), "callPlayer", r.callPlayer), v(I(d), "duration", null), v(I(d), "currentTime", null), v(I(d), "secondsLoaded", null), v(I(d), "mute", function() {
          d.setMuted(!0);
        }), v(I(d), "unmute", function() {
          d.setMuted(!1);
        }), v(I(d), "ref", function(b) {
          d.container = b;
        }), d;
      }
      return O(a, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(E) {
          var T = this;
          this.duration = null, (0, r.getSDK)(N, g).then(function(S) {
            if (T.container) {
              var b = T.props.config, z = b.playerOptions, M = b.title;
              T.player = new S.Player(T.container, c({
                url: _(E),
                autoplay: T.props.playing,
                muted: T.props.muted,
                loop: T.props.loop,
                playsinline: T.props.playsinline,
                controls: T.props.controls
              }, z)), T.player.ready().then(function() {
                var w = T.container.querySelector("iframe");
                w.style.width = "100%", w.style.height = "100%", M && (w.title = M);
              }).catch(T.props.onError), T.player.on("loaded", function() {
                T.props.onReady(), T.refreshDuration();
              }), T.player.on("play", function() {
                T.props.onPlay(), T.refreshDuration();
              }), T.player.on("pause", T.props.onPause), T.player.on("seeked", function(w) {
                return T.props.onSeek(w.seconds);
              }), T.player.on("ended", T.props.onEnded), T.player.on("error", T.props.onError), T.player.on("timeupdate", function(w) {
                var x = w.seconds;
                T.currentTime = x;
              }), T.player.on("progress", function(w) {
                var x = w.seconds;
                T.secondsLoaded = x;
              }), T.player.on("bufferstart", T.props.onBuffer), T.player.on("bufferend", T.props.onBufferEnd), T.player.on("playbackratechange", function(w) {
                return T.props.onPlaybackRateChange(w.playbackRate);
              });
            }
          }, this.props.onError);
        }
      }, {
        key: "refreshDuration",
        value: function() {
          var E = this;
          this.player.getDuration().then(function(T) {
            E.duration = T;
          });
        }
      }, {
        key: "play",
        value: function() {
          var E = this.callPlayer("play");
          E && E.catch(this.props.onError);
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          this.callPlayer("unload");
        }
      }, {
        key: "seekTo",
        value: function(E) {
          var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("setCurrentTime", E), T || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(E) {
          this.callPlayer("setVolume", E);
        }
      }, {
        key: "setMuted",
        value: function(E) {
          this.callPlayer("setMuted", E);
        }
      }, {
        key: "setLoop",
        value: function(E) {
          this.callPlayer("setLoop", E);
        }
      }, {
        key: "setPlaybackRate",
        value: function(E) {
          this.callPlayer("setPlaybackRate", E);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function() {
          var E = this.props.display, T = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: E
          };
          return /* @__PURE__ */ n.default.createElement("div", {
            key: this.props.url,
            ref: this.ref,
            style: T
          });
        }
      }]), a;
    }(n.Component);
    e.default = p, v(p, "displayName", "Vimeo"), v(p, "canPlay", o.canPlay.vimeo), v(p, "forceLoad", !0);
  }(Yi)), Yi;
}
var Qi = {}, Os;
function tm() {
  return Os || (Os = 1, function(e) {
    function t(l) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(a) {
        return typeof a;
      } : t = function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, t(l);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var l = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return l;
      }, l;
    }
    function u(l) {
      if (l && l.__esModule)
        return l;
      if (l === null || t(l) !== "object" && typeof l != "function")
        return { default: l };
      var s = i();
      if (s && s.has(l))
        return s.get(l);
      var a = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var E in l)
        if (Object.prototype.hasOwnProperty.call(l, E)) {
          var T = d ? Object.getOwnPropertyDescriptor(l, E) : null;
          T && (T.get || T.set) ? Object.defineProperty(a, E, T) : a[E] = l[E];
        }
      return a.default = l, s && s.set(l, a), a;
    }
    function f() {
      return f = Object.assign || function(l) {
        for (var s = 1; s < arguments.length; s++) {
          var a = arguments[s];
          for (var d in a)
            Object.prototype.hasOwnProperty.call(a, d) && (l[d] = a[d]);
        }
        return l;
      }, f.apply(this, arguments);
    }
    function c(l, s) {
      if (!(l instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    function y(l, s) {
      for (var a = 0; a < s.length; a++) {
        var d = s[a];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(l, d.key, d);
      }
    }
    function P(l, s, a) {
      return s && y(l.prototype, s), a && y(l, a), l;
    }
    function O(l, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(s && s.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), s && k(l, s);
    }
    function k(l, s) {
      return k = Object.setPrototypeOf || function(d, E) {
        return d.__proto__ = E, d;
      }, k(l, s);
    }
    function L(l) {
      var s = I();
      return function() {
        var d = h(l), E;
        if (s) {
          var T = h(this).constructor;
          E = Reflect.construct(d, arguments, T);
        } else
          E = d.apply(this, arguments);
        return D(this, E);
      };
    }
    function D(l, s) {
      return s && (t(s) === "object" || typeof s == "function") ? s : A(l);
    }
    function A(l) {
      if (l === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function I() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function h(l) {
      return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, h(l);
    }
    function m(l, s, a) {
      return s in l ? Object.defineProperty(l, s, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : l[s] = a, l;
    }
    var v = "https://connect.facebook.net/en_US/sdk.js", N = "FB", g = "fbAsyncInit", _ = "facebook-player-", p = /* @__PURE__ */ function(l) {
      O(a, l);
      var s = L(a);
      function a() {
        var d;
        c(this, a);
        for (var E = arguments.length, T = new Array(E), S = 0; S < E; S++)
          T[S] = arguments[S];
        return d = s.call.apply(s, [this].concat(T)), m(A(d), "callPlayer", r.callPlayer), m(A(d), "playerID", d.props.config.playerId || "".concat(_).concat((0, r.randomString)())), m(A(d), "mute", function() {
          d.callPlayer("mute");
        }), m(A(d), "unmute", function() {
          d.callPlayer("unmute");
        }), d;
      }
      return P(a, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(E, T) {
          var S = this;
          if (T) {
            (0, r.getSDK)(v, N, g).then(function(b) {
              return b.XFBML.parse();
            });
            return;
          }
          (0, r.getSDK)(v, N, g).then(function(b) {
            b.init({
              appId: S.props.config.appId,
              xfbml: !0,
              version: S.props.config.version
            }), b.Event.subscribe("xfbml.render", function(z) {
              S.props.onLoaded();
            }), b.Event.subscribe("xfbml.ready", function(z) {
              z.type === "video" && z.id === S.playerID && (S.player = z.instance, S.player.subscribe("startedPlaying", S.props.onPlay), S.player.subscribe("paused", S.props.onPause), S.player.subscribe("finishedPlaying", S.props.onEnded), S.player.subscribe("startedBuffering", S.props.onBuffer), S.player.subscribe("finishedBuffering", S.props.onBufferEnd), S.player.subscribe("error", S.props.onError), S.props.muted ? S.callPlayer("mute") : S.callPlayer("unmute"), S.props.onReady(), document.getElementById(S.playerID).querySelector("iframe").style.visibility = "visible");
            });
          });
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(E) {
          var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", E), T || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(E) {
          this.callPlayer("setVolume", E);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("getCurrentPosition");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var E = this.props.config.attributes, T = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ n.default.createElement("div", f({
            style: T,
            id: this.playerID,
            className: "fb-video",
            "data-href": this.props.url,
            "data-autoplay": this.props.playing ? "true" : "false",
            "data-allowfullscreen": "true",
            "data-controls": this.props.controls ? "true" : "false"
          }, E));
        }
      }]), a;
    }(n.Component);
    e.default = p, m(p, "displayName", "Facebook"), m(p, "canPlay", o.canPlay.facebook), m(p, "loopOnEnded", !0);
  }(Qi)), Qi;
}
var Xi = {}, Es;
function nm() {
  return Es || (Es = 1, function(e) {
    function t(g) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(g);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var g = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return g;
      }, g;
    }
    function u(g) {
      if (g && g.__esModule)
        return g;
      if (g === null || t(g) !== "object" && typeof g != "function")
        return { default: g };
      var _ = i();
      if (_ && _.has(g))
        return _.get(g);
      var p = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in g)
        if (Object.prototype.hasOwnProperty.call(g, s)) {
          var a = l ? Object.getOwnPropertyDescriptor(g, s) : null;
          a && (a.get || a.set) ? Object.defineProperty(p, s, a) : p[s] = g[s];
        }
      return p.default = g, _ && _.set(g, p), p;
    }
    function f(g, _) {
      if (!(g instanceof _))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(g, _) {
      for (var p = 0; p < _.length; p++) {
        var l = _[p];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(g, l.key, l);
      }
    }
    function y(g, _, p) {
      return _ && c(g.prototype, _), p && c(g, p), g;
    }
    function P(g, _) {
      if (typeof _ != "function" && _ !== null)
        throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(_ && _.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), _ && O(g, _);
    }
    function O(g, _) {
      return O = Object.setPrototypeOf || function(l, s) {
        return l.__proto__ = s, l;
      }, O(g, _);
    }
    function k(g) {
      var _ = A();
      return function() {
        var l = I(g), s;
        if (_) {
          var a = I(this).constructor;
          s = Reflect.construct(l, arguments, a);
        } else
          s = l.apply(this, arguments);
        return L(this, s);
      };
    }
    function L(g, _) {
      return _ && (t(_) === "object" || typeof _ == "function") ? _ : D(g);
    }
    function D(g) {
      if (g === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return g;
    }
    function A() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function I(g) {
      return I = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, I(g);
    }
    function h(g, _, p) {
      return _ in g ? Object.defineProperty(g, _, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = p, g;
    }
    var m = "https://cdn.embed.ly/player-0.1.0.min.js", v = "playerjs", N = /* @__PURE__ */ function(g) {
      P(p, g);
      var _ = k(p);
      function p() {
        var l;
        f(this, p);
        for (var s = arguments.length, a = new Array(s), d = 0; d < s; d++)
          a[d] = arguments[d];
        return l = _.call.apply(_, [this].concat(a)), h(D(l), "callPlayer", r.callPlayer), h(D(l), "duration", null), h(D(l), "currentTime", null), h(D(l), "secondsLoaded", null), h(D(l), "mute", function() {
          l.callPlayer("mute");
        }), h(D(l), "unmute", function() {
          l.callPlayer("unmute");
        }), h(D(l), "ref", function(E) {
          l.iframe = E;
        }), l;
      }
      return y(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(s) {
          var a = this;
          (0, r.getSDK)(m, v).then(function(d) {
            a.iframe && (a.player = new d.Player(a.iframe), a.player.setLoop(a.props.loop), a.player.on("ready", a.props.onReady), a.player.on("play", a.props.onPlay), a.player.on("pause", a.props.onPause), a.player.on("seeked", a.props.onSeek), a.player.on("ended", a.props.onEnded), a.player.on("error", a.props.onError), a.player.on("timeupdate", function(E) {
              var T = E.duration, S = E.seconds;
              a.duration = T, a.currentTime = S;
            }), a.player.on("buffered", function(E) {
              var T = E.percent;
              a.duration && (a.secondsLoaded = a.duration * T);
            }), a.props.muted && a.player.mute());
          }, this.props.onError);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(s) {
          var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("setCurrentTime", s), a || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(s) {
          this.callPlayer("setVolume", s * 100);
        }
      }, {
        key: "setLoop",
        value: function(s) {
          this.callPlayer("setLoop", s);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function() {
          var s = this.props.url.match(o.MATCH_URL_STREAMABLE)[1], a = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ n.default.createElement("iframe", {
            ref: this.ref,
            src: "https://streamable.com/o/".concat(s),
            frameBorder: "0",
            scrolling: "no",
            style: a,
            allow: "encrypted-media; autoplay; fullscreen;"
          });
        }
      }]), p;
    }(n.Component);
    e.default = N, h(N, "displayName", "Streamable"), h(N, "canPlay", o.canPlay.streamable);
  }(Xi)), Xi;
}
var qi = {}, ks;
function rm() {
  return ks || (ks = 1, function(e) {
    function t(l) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(a) {
        return typeof a;
      } : t = function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, t(l);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var l = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return l;
      }, l;
    }
    function u(l) {
      if (l && l.__esModule)
        return l;
      if (l === null || t(l) !== "object" && typeof l != "function")
        return { default: l };
      var s = i();
      if (s && s.has(l))
        return s.get(l);
      var a = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var E in l)
        if (Object.prototype.hasOwnProperty.call(l, E)) {
          var T = d ? Object.getOwnPropertyDescriptor(l, E) : null;
          T && (T.get || T.set) ? Object.defineProperty(a, E, T) : a[E] = l[E];
        }
      return a.default = l, s && s.set(l, a), a;
    }
    function f(l, s) {
      var a = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(l);
        s && (d = d.filter(function(E) {
          return Object.getOwnPropertyDescriptor(l, E).enumerable;
        })), a.push.apply(a, d);
      }
      return a;
    }
    function c(l) {
      for (var s = 1; s < arguments.length; s++) {
        var a = arguments[s] != null ? arguments[s] : {};
        s % 2 ? f(Object(a), !0).forEach(function(d) {
          v(l, d, a[d]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach(function(d) {
          Object.defineProperty(l, d, Object.getOwnPropertyDescriptor(a, d));
        });
      }
      return l;
    }
    function y(l, s) {
      if (!(l instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(l, s) {
      for (var a = 0; a < s.length; a++) {
        var d = s[a];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(l, d.key, d);
      }
    }
    function O(l, s, a) {
      return s && P(l.prototype, s), a && P(l, a), l;
    }
    function k(l, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(s && s.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), s && L(l, s);
    }
    function L(l, s) {
      return L = Object.setPrototypeOf || function(d, E) {
        return d.__proto__ = E, d;
      }, L(l, s);
    }
    function D(l) {
      var s = h();
      return function() {
        var d = m(l), E;
        if (s) {
          var T = m(this).constructor;
          E = Reflect.construct(d, arguments, T);
        } else
          E = d.apply(this, arguments);
        return A(this, E);
      };
    }
    function A(l, s) {
      return s && (t(s) === "object" || typeof s == "function") ? s : I(l);
    }
    function I(l) {
      if (l === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function h() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m(l) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, m(l);
    }
    function v(l, s, a) {
      return s in l ? Object.defineProperty(l, s, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : l[s] = a, l;
    }
    var N = "https://fast.wistia.com/assets/external/E-v1.js", g = "Wistia", _ = "wistia-player-", p = /* @__PURE__ */ function(l) {
      k(a, l);
      var s = D(a);
      function a() {
        var d;
        y(this, a);
        for (var E = arguments.length, T = new Array(E), S = 0; S < E; S++)
          T[S] = arguments[S];
        return d = s.call.apply(s, [this].concat(T)), v(I(d), "callPlayer", r.callPlayer), v(I(d), "playerID", d.props.config.playerId || "".concat(_).concat((0, r.randomString)())), v(I(d), "onPlay", function() {
          var b;
          return (b = d.props).onPlay.apply(b, arguments);
        }), v(I(d), "onPause", function() {
          var b;
          return (b = d.props).onPause.apply(b, arguments);
        }), v(I(d), "onSeek", function() {
          var b;
          return (b = d.props).onSeek.apply(b, arguments);
        }), v(I(d), "onEnded", function() {
          var b;
          return (b = d.props).onEnded.apply(b, arguments);
        }), v(I(d), "onPlaybackRateChange", function() {
          var b;
          return (b = d.props).onPlaybackRateChange.apply(b, arguments);
        }), v(I(d), "mute", function() {
          d.callPlayer("mute");
        }), v(I(d), "unmute", function() {
          d.callPlayer("unmute");
        }), d;
      }
      return O(a, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(E) {
          var T = this, S = this.props, b = S.playing, z = S.muted, M = S.controls, w = S.onReady, x = S.config, C = S.onError;
          (0, r.getSDK)(N, g).then(function(R) {
            x.customControls && x.customControls.forEach(function(U) {
              return R.defineControl(U);
            }), window._wq = window._wq || [], window._wq.push({
              id: T.playerID,
              options: c({
                autoPlay: b,
                silentAutoPlay: "allow",
                muted: z,
                controlsVisibleOnLoad: M,
                fullscreenButton: M,
                playbar: M,
                playbackRateControl: M,
                qualityControl: M,
                volumeControl: M,
                settingsControl: M,
                smallPlayButton: M
              }, x.options),
              onReady: function(W) {
                T.player = W, T.unbind(), T.player.bind("play", T.onPlay), T.player.bind("pause", T.onPause), T.player.bind("seek", T.onSeek), T.player.bind("end", T.onEnded), T.player.bind("playbackratechange", T.onPlaybackRateChange), w();
              }
            });
          }, C);
        }
      }, {
        key: "unbind",
        value: function() {
          this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded), this.player.unbind("playbackratechange", this.onPlaybackRateChange);
        }
        // Proxy methods to prevent listener leaks
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          this.unbind(), this.callPlayer("remove");
        }
      }, {
        key: "seekTo",
        value: function(E) {
          var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("time", E), T || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(E) {
          this.callPlayer("volume", E);
        }
      }, {
        key: "setPlaybackRate",
        value: function(E) {
          this.callPlayer("playbackRate", E);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("duration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("time");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var E = this.props.url, T = E && E.match(o.MATCH_URL_WISTIA)[1], S = "wistia_embed wistia_async_".concat(T), b = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ n.default.createElement("div", {
            id: this.playerID,
            key: T,
            className: S,
            style: b
          });
        }
      }]), a;
    }(n.Component);
    e.default = p, v(p, "displayName", "Wistia"), v(p, "canPlay", o.canPlay.wistia), v(p, "loopOnEnded", !0);
  }(qi)), qi;
}
var Gi = {}, Ts;
function om() {
  return Ts || (Ts = 1, function(e) {
    function t(l) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(a) {
        return typeof a;
      } : t = function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, t(l);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var l = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return l;
      }, l;
    }
    function u(l) {
      if (l && l.__esModule)
        return l;
      if (l === null || t(l) !== "object" && typeof l != "function")
        return { default: l };
      var s = i();
      if (s && s.has(l))
        return s.get(l);
      var a = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var E in l)
        if (Object.prototype.hasOwnProperty.call(l, E)) {
          var T = d ? Object.getOwnPropertyDescriptor(l, E) : null;
          T && (T.get || T.set) ? Object.defineProperty(a, E, T) : a[E] = l[E];
        }
      return a.default = l, s && s.set(l, a), a;
    }
    function f(l, s) {
      var a = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(l);
        s && (d = d.filter(function(E) {
          return Object.getOwnPropertyDescriptor(l, E).enumerable;
        })), a.push.apply(a, d);
      }
      return a;
    }
    function c(l) {
      for (var s = 1; s < arguments.length; s++) {
        var a = arguments[s] != null ? arguments[s] : {};
        s % 2 ? f(Object(a), !0).forEach(function(d) {
          v(l, d, a[d]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach(function(d) {
          Object.defineProperty(l, d, Object.getOwnPropertyDescriptor(a, d));
        });
      }
      return l;
    }
    function y(l, s) {
      if (!(l instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(l, s) {
      for (var a = 0; a < s.length; a++) {
        var d = s[a];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(l, d.key, d);
      }
    }
    function O(l, s, a) {
      return s && P(l.prototype, s), a && P(l, a), l;
    }
    function k(l, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(s && s.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), s && L(l, s);
    }
    function L(l, s) {
      return L = Object.setPrototypeOf || function(d, E) {
        return d.__proto__ = E, d;
      }, L(l, s);
    }
    function D(l) {
      var s = h();
      return function() {
        var d = m(l), E;
        if (s) {
          var T = m(this).constructor;
          E = Reflect.construct(d, arguments, T);
        } else
          E = d.apply(this, arguments);
        return A(this, E);
      };
    }
    function A(l, s) {
      return s && (t(s) === "object" || typeof s == "function") ? s : I(l);
    }
    function I(l) {
      if (l === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function h() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m(l) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, m(l);
    }
    function v(l, s, a) {
      return s in l ? Object.defineProperty(l, s, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : l[s] = a, l;
    }
    var N = "https://player.twitch.tv/js/embed/v1.js", g = "Twitch", _ = "twitch-player-", p = /* @__PURE__ */ function(l) {
      k(a, l);
      var s = D(a);
      function a() {
        var d;
        y(this, a);
        for (var E = arguments.length, T = new Array(E), S = 0; S < E; S++)
          T[S] = arguments[S];
        return d = s.call.apply(s, [this].concat(T)), v(I(d), "callPlayer", r.callPlayer), v(I(d), "playerID", d.props.config.playerId || "".concat(_).concat((0, r.randomString)())), v(I(d), "mute", function() {
          d.callPlayer("setMuted", !0);
        }), v(I(d), "unmute", function() {
          d.callPlayer("setMuted", !1);
        }), d;
      }
      return O(a, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(E, T) {
          var S = this, b = this.props, z = b.playsinline, M = b.onError, w = b.config, x = b.controls, C = o.MATCH_URL_TWITCH_CHANNEL.test(E), R = C ? E.match(o.MATCH_URL_TWITCH_CHANNEL)[1] : E.match(o.MATCH_URL_TWITCH_VIDEO)[1];
          if (T) {
            C ? this.player.setChannel(R) : this.player.setVideo("v" + R);
            return;
          }
          (0, r.getSDK)(N, g).then(function(U) {
            S.player = new U.Player(S.playerID, c({
              video: C ? "" : R,
              channel: C ? R : "",
              height: "100%",
              width: "100%",
              playsinline: z,
              autoplay: S.props.playing,
              muted: S.props.muted,
              // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
              controls: C ? !0 : x,
              time: (0, r.parseStartTime)(E)
            }, w.options));
            var W = U.Player, j = W.READY, $ = W.PLAYING, X = W.PAUSE, q = W.ENDED, J = W.ONLINE, Pe = W.OFFLINE, Te = W.SEEK;
            S.player.addEventListener(j, S.props.onReady), S.player.addEventListener($, S.props.onPlay), S.player.addEventListener(X, S.props.onPause), S.player.addEventListener(q, S.props.onEnded), S.player.addEventListener(Te, S.props.onSeek), S.player.addEventListener(J, S.props.onLoaded), S.player.addEventListener(Pe, S.props.onLoaded);
          }, M);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "seekTo",
        value: function(E) {
          var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", E), T || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(E) {
          this.callPlayer("setVolume", E);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("getCurrentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var E = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ n.default.createElement("div", {
            style: E,
            id: this.playerID
          });
        }
      }]), a;
    }(n.Component);
    e.default = p, v(p, "displayName", "Twitch"), v(p, "canPlay", o.canPlay.twitch), v(p, "loopOnEnded", !0);
  }(Gi)), Gi;
}
var Zi = {}, Rs;
function im() {
  return Rs || (Rs = 1, function(e) {
    function t(S) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(z) {
        return typeof z;
      } : t = function(z) {
        return z && typeof Symbol == "function" && z.constructor === Symbol && z !== Symbol.prototype ? "symbol" : typeof z;
      }, t(S);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var S = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return S;
      }, S;
    }
    function u(S) {
      if (S && S.__esModule)
        return S;
      if (S === null || t(S) !== "object" && typeof S != "function")
        return { default: S };
      var b = i();
      if (b && b.has(S))
        return b.get(S);
      var z = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var w in S)
        if (Object.prototype.hasOwnProperty.call(S, w)) {
          var x = M ? Object.getOwnPropertyDescriptor(S, w) : null;
          x && (x.get || x.set) ? Object.defineProperty(z, w, x) : z[w] = S[w];
        }
      return z.default = S, b && b.set(S, z), z;
    }
    function f(S, b) {
      var z = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var M = Object.getOwnPropertySymbols(S);
        b && (M = M.filter(function(w) {
          return Object.getOwnPropertyDescriptor(S, w).enumerable;
        })), z.push.apply(z, M);
      }
      return z;
    }
    function c(S) {
      for (var b = 1; b < arguments.length; b++) {
        var z = arguments[b] != null ? arguments[b] : {};
        b % 2 ? f(Object(z), !0).forEach(function(M) {
          s(S, M, z[M]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(z)) : f(Object(z)).forEach(function(M) {
          Object.defineProperty(S, M, Object.getOwnPropertyDescriptor(z, M));
        });
      }
      return S;
    }
    function y(S, b) {
      return D(S) || L(S, b) || O(S, b) || P();
    }
    function P() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function O(S, b) {
      if (S) {
        if (typeof S == "string")
          return k(S, b);
        var z = Object.prototype.toString.call(S).slice(8, -1);
        if (z === "Object" && S.constructor && (z = S.constructor.name), z === "Map" || z === "Set")
          return Array.from(S);
        if (z === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))
          return k(S, b);
      }
    }
    function k(S, b) {
      (b == null || b > S.length) && (b = S.length);
      for (var z = 0, M = new Array(b); z < b; z++)
        M[z] = S[z];
      return M;
    }
    function L(S, b) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(S)))) {
        var z = [], M = !0, w = !1, x = void 0;
        try {
          for (var C = S[Symbol.iterator](), R; !(M = (R = C.next()).done) && (z.push(R.value), !(b && z.length === b)); M = !0)
            ;
        } catch (U) {
          w = !0, x = U;
        } finally {
          try {
            !M && C.return != null && C.return();
          } finally {
            if (w)
              throw x;
          }
        }
        return z;
      }
    }
    function D(S) {
      if (Array.isArray(S))
        return S;
    }
    function A(S, b) {
      if (!(S instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function I(S, b) {
      for (var z = 0; z < b.length; z++) {
        var M = b[z];
        M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(S, M.key, M);
      }
    }
    function h(S, b, z) {
      return b && I(S.prototype, b), z && I(S, z), S;
    }
    function m(S, b) {
      if (typeof b != "function" && b !== null)
        throw new TypeError("Super expression must either be null or a function");
      S.prototype = Object.create(b && b.prototype, { constructor: { value: S, writable: !0, configurable: !0 } }), b && v(S, b);
    }
    function v(S, b) {
      return v = Object.setPrototypeOf || function(M, w) {
        return M.__proto__ = w, M;
      }, v(S, b);
    }
    function N(S) {
      var b = p();
      return function() {
        var M = l(S), w;
        if (b) {
          var x = l(this).constructor;
          w = Reflect.construct(M, arguments, x);
        } else
          w = M.apply(this, arguments);
        return g(this, w);
      };
    }
    function g(S, b) {
      return b && (t(b) === "object" || typeof b == "function") ? b : _(S);
    }
    function _(S) {
      if (S === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return S;
    }
    function p() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function l(S) {
      return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(z) {
        return z.__proto__ || Object.getPrototypeOf(z);
      }, l(S);
    }
    function s(S, b, z) {
      return b in S ? Object.defineProperty(S, b, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : S[b] = z, S;
    }
    var a = "https://api.dmcdn.net/all.js", d = "DM", E = "dmAsyncInit", T = /* @__PURE__ */ function(S) {
      m(z, S);
      var b = N(z);
      function z() {
        var M;
        A(this, z);
        for (var w = arguments.length, x = new Array(w), C = 0; C < w; C++)
          x[C] = arguments[C];
        return M = b.call.apply(b, [this].concat(x)), s(_(M), "callPlayer", r.callPlayer), s(_(M), "onDurationChange", function() {
          var R = M.getDuration();
          M.props.onDuration(R);
        }), s(_(M), "mute", function() {
          M.callPlayer("setMuted", !0);
        }), s(_(M), "unmute", function() {
          M.callPlayer("setMuted", !1);
        }), s(_(M), "ref", function(R) {
          M.container = R;
        }), M;
      }
      return h(z, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(w) {
          var x = this, C = this.props, R = C.controls, U = C.config, W = C.onError, j = C.playing, $ = w.match(o.MATCH_URL_DAILYMOTION), X = y($, 2), q = X[1];
          if (this.player) {
            this.player.load(q, {
              start: (0, r.parseStartTime)(w),
              autoplay: j
            });
            return;
          }
          (0, r.getSDK)(a, d, E, function(J) {
            return J.player;
          }).then(function(J) {
            if (x.container) {
              var Pe = J.player;
              x.player = new Pe(x.container, {
                width: "100%",
                height: "100%",
                video: q,
                params: c({
                  controls: R,
                  autoplay: x.props.playing,
                  mute: x.props.muted,
                  start: (0, r.parseStartTime)(w),
                  origin: window.location.origin
                }, U.params),
                events: {
                  apiready: x.props.onReady,
                  seeked: function() {
                    return x.props.onSeek(x.player.currentTime);
                  },
                  video_end: x.props.onEnded,
                  durationchange: x.onDurationChange,
                  pause: x.props.onPause,
                  playing: x.props.onPlay,
                  waiting: x.props.onBuffer,
                  error: function(Ye) {
                    return W(Ye);
                  }
                }
              });
            }
          }, W);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(w) {
          var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", w), x || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(w) {
          this.callPlayer("setVolume", w);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.player.duration || null;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.player.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.player.bufferedTime;
        }
      }, {
        key: "render",
        value: function() {
          var w = this.props.display, x = {
            width: "100%",
            height: "100%",
            display: w
          };
          return /* @__PURE__ */ n.default.createElement("div", {
            style: x
          }, /* @__PURE__ */ n.default.createElement("div", {
            ref: this.ref
          }));
        }
      }]), z;
    }(n.Component);
    e.default = T, s(T, "displayName", "DailyMotion"), s(T, "canPlay", o.canPlay.dailymotion), s(T, "loopOnEnded", !0);
  }(Zi)), Zi;
}
var Ji = {}, Cs;
function lm() {
  return Cs || (Cs = 1, function(e) {
    function t(p) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(s) {
        return typeof s;
      } : t = function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      }, t(p);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var p = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return p;
      }, p;
    }
    function u(p) {
      if (p && p.__esModule)
        return p;
      if (p === null || t(p) !== "object" && typeof p != "function")
        return { default: p };
      var l = i();
      if (l && l.has(p))
        return l.get(p);
      var s = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var d in p)
        if (Object.prototype.hasOwnProperty.call(p, d)) {
          var E = a ? Object.getOwnPropertyDescriptor(p, d) : null;
          E && (E.get || E.set) ? Object.defineProperty(s, d, E) : s[d] = p[d];
        }
      return s.default = p, l && l.set(p, s), s;
    }
    function f(p, l) {
      var s = Object.keys(p);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(p);
        l && (a = a.filter(function(d) {
          return Object.getOwnPropertyDescriptor(p, d).enumerable;
        })), s.push.apply(s, a);
      }
      return s;
    }
    function c(p) {
      for (var l = 1; l < arguments.length; l++) {
        var s = arguments[l] != null ? arguments[l] : {};
        l % 2 ? f(Object(s), !0).forEach(function(a) {
          v(p, a, s[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(s)) : f(Object(s)).forEach(function(a) {
          Object.defineProperty(p, a, Object.getOwnPropertyDescriptor(s, a));
        });
      }
      return p;
    }
    function y(p, l) {
      if (!(p instanceof l))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(p, l) {
      for (var s = 0; s < l.length; s++) {
        var a = l[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(p, a.key, a);
      }
    }
    function O(p, l, s) {
      return l && P(p.prototype, l), s && P(p, s), p;
    }
    function k(p, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Super expression must either be null or a function");
      p.prototype = Object.create(l && l.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), l && L(p, l);
    }
    function L(p, l) {
      return L = Object.setPrototypeOf || function(a, d) {
        return a.__proto__ = d, a;
      }, L(p, l);
    }
    function D(p) {
      var l = h();
      return function() {
        var a = m(p), d;
        if (l) {
          var E = m(this).constructor;
          d = Reflect.construct(a, arguments, E);
        } else
          d = a.apply(this, arguments);
        return A(this, d);
      };
    }
    function A(p, l) {
      return l && (t(l) === "object" || typeof l == "function") ? l : I(p);
    }
    function I(p) {
      if (p === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return p;
    }
    function h() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m(p) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
        return s.__proto__ || Object.getPrototypeOf(s);
      }, m(p);
    }
    function v(p, l, s) {
      return l in p ? Object.defineProperty(p, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : p[l] = s, p;
    }
    var N = "https://widget.mixcloud.com/media/js/widgetApi.js", g = "Mixcloud", _ = /* @__PURE__ */ function(p) {
      k(s, p);
      var l = D(s);
      function s() {
        var a;
        y(this, s);
        for (var d = arguments.length, E = new Array(d), T = 0; T < d; T++)
          E[T] = arguments[T];
        return a = l.call.apply(l, [this].concat(E)), v(I(a), "callPlayer", r.callPlayer), v(I(a), "duration", null), v(I(a), "currentTime", null), v(I(a), "secondsLoaded", null), v(I(a), "mute", function() {
        }), v(I(a), "unmute", function() {
        }), v(I(a), "ref", function(S) {
          a.iframe = S;
        }), a;
      }
      return O(s, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(d) {
          var E = this;
          (0, r.getSDK)(N, g).then(function(T) {
            E.player = T.PlayerWidget(E.iframe), E.player.ready.then(function() {
              E.player.events.play.on(E.props.onPlay), E.player.events.pause.on(E.props.onPause), E.player.events.ended.on(E.props.onEnded), E.player.events.error.on(E.props.error), E.player.events.progress.on(function(S, b) {
                E.currentTime = S, E.duration = b;
              }), E.props.onReady();
            });
          }, this.props.onError);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(d) {
          var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", d), E || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(d) {
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var d = this.props, E = d.url, T = d.config, S = E.match(o.MATCH_URL_MIXCLOUD)[1], b = {
            width: "100%",
            height: "100%"
          }, z = (0, r.queryString)(c(c({}, T.options), {}, {
            feed: "/".concat(S, "/")
          }));
          return /* @__PURE__ */ n.default.createElement("iframe", {
            key: S,
            ref: this.ref,
            style: b,
            src: "https://www.mixcloud.com/widget/iframe/?".concat(z),
            frameBorder: "0",
            allow: "autoplay"
          });
        }
      }]), s;
    }(n.Component);
    e.default = _, v(_, "displayName", "Mixcloud"), v(_, "canPlay", o.canPlay.mixcloud), v(_, "loopOnEnded", !0);
  }(Ji)), Ji;
}
var el = {}, xs;
function um() {
  return xs || (xs = 1, function(e) {
    function t(l) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(a) {
        return typeof a;
      } : t = function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, t(l);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var l = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return l;
      }, l;
    }
    function u(l) {
      if (l && l.__esModule)
        return l;
      if (l === null || t(l) !== "object" && typeof l != "function")
        return { default: l };
      var s = i();
      if (s && s.has(l))
        return s.get(l);
      var a = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var E in l)
        if (Object.prototype.hasOwnProperty.call(l, E)) {
          var T = d ? Object.getOwnPropertyDescriptor(l, E) : null;
          T && (T.get || T.set) ? Object.defineProperty(a, E, T) : a[E] = l[E];
        }
      return a.default = l, s && s.set(l, a), a;
    }
    function f(l, s) {
      var a = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(l);
        s && (d = d.filter(function(E) {
          return Object.getOwnPropertyDescriptor(l, E).enumerable;
        })), a.push.apply(a, d);
      }
      return a;
    }
    function c(l) {
      for (var s = 1; s < arguments.length; s++) {
        var a = arguments[s] != null ? arguments[s] : {};
        s % 2 ? f(Object(a), !0).forEach(function(d) {
          v(l, d, a[d]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach(function(d) {
          Object.defineProperty(l, d, Object.getOwnPropertyDescriptor(a, d));
        });
      }
      return l;
    }
    function y(l, s) {
      if (!(l instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(l, s) {
      for (var a = 0; a < s.length; a++) {
        var d = s[a];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(l, d.key, d);
      }
    }
    function O(l, s, a) {
      return s && P(l.prototype, s), a && P(l, a), l;
    }
    function k(l, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(s && s.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), s && L(l, s);
    }
    function L(l, s) {
      return L = Object.setPrototypeOf || function(d, E) {
        return d.__proto__ = E, d;
      }, L(l, s);
    }
    function D(l) {
      var s = h();
      return function() {
        var d = m(l), E;
        if (s) {
          var T = m(this).constructor;
          E = Reflect.construct(d, arguments, T);
        } else
          E = d.apply(this, arguments);
        return A(this, E);
      };
    }
    function A(l, s) {
      return s && (t(s) === "object" || typeof s == "function") ? s : I(l);
    }
    function I(l) {
      if (l === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function h() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m(l) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, m(l);
    }
    function v(l, s, a) {
      return s in l ? Object.defineProperty(l, s, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : l[s] = a, l;
    }
    var N = "https://play.vidyard.com/embed/v4.js", g = "VidyardV4", _ = "onVidyardAPI", p = /* @__PURE__ */ function(l) {
      k(a, l);
      var s = D(a);
      function a() {
        var d;
        y(this, a);
        for (var E = arguments.length, T = new Array(E), S = 0; S < E; S++)
          T[S] = arguments[S];
        return d = s.call.apply(s, [this].concat(T)), v(I(d), "callPlayer", r.callPlayer), v(I(d), "mute", function() {
          d.setVolume(0);
        }), v(I(d), "unmute", function() {
          d.props.volume !== null && d.setVolume(d.props.volume);
        }), v(I(d), "ref", function(b) {
          d.container = b;
        }), d;
      }
      return O(a, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(E) {
          var T = this, S = this.props, b = S.playing, z = S.config, M = S.onError, w = S.onDuration, x = E && E.match(o.MATCH_URL_VIDYARD)[1];
          this.player && this.stop(), (0, r.getSDK)(N, g, _).then(function(C) {
            T.container && (C.api.addReadyListener(function(R, U) {
              T.player || (T.player = U, T.player.on("ready", T.props.onReady), T.player.on("play", T.props.onPlay), T.player.on("pause", T.props.onPause), T.player.on("seek", T.props.onSeek), T.player.on("playerComplete", T.props.onEnded));
            }, x), C.api.renderPlayer(c({
              uuid: x,
              container: T.container,
              autoplay: b ? 1 : 0
            }, z.options)), C.api.getPlayerMetadata(x).then(function(R) {
              T.duration = R.length_in_seconds, w(R.length_in_seconds);
            }));
          }, M);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          window.VidyardV4.api.destroyPlayer(this.player);
        }
      }, {
        key: "seekTo",
        value: function(E) {
          var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", E), T || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(E) {
          this.callPlayer("setVolume", E);
        }
      }, {
        key: "setPlaybackRate",
        value: function(E) {
          this.callPlayer("setPlaybackSpeed", E);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("currentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var E = this.props.display, T = {
            width: "100%",
            height: "100%",
            display: E
          };
          return /* @__PURE__ */ n.default.createElement("div", {
            style: T
          }, /* @__PURE__ */ n.default.createElement("div", {
            ref: this.ref
          }));
        }
      }]), a;
    }(n.Component);
    e.default = p, v(p, "displayName", "Vidyard"), v(p, "canPlay", o.canPlay.vidyard);
  }(el)), el;
}
var tl = {}, Ls;
function am() {
  return Ls || (Ls = 1, function(e) {
    function t(g) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(g);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var g = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return g;
      }, g;
    }
    function u(g) {
      if (g && g.__esModule)
        return g;
      if (g === null || t(g) !== "object" && typeof g != "function")
        return { default: g };
      var _ = i();
      if (_ && _.has(g))
        return _.get(g);
      var p = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in g)
        if (Object.prototype.hasOwnProperty.call(g, s)) {
          var a = l ? Object.getOwnPropertyDescriptor(g, s) : null;
          a && (a.get || a.set) ? Object.defineProperty(p, s, a) : p[s] = g[s];
        }
      return p.default = g, _ && _.set(g, p), p;
    }
    function f(g, _) {
      if (!(g instanceof _))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(g, _) {
      for (var p = 0; p < _.length; p++) {
        var l = _[p];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(g, l.key, l);
      }
    }
    function y(g, _, p) {
      return _ && c(g.prototype, _), p && c(g, p), g;
    }
    function P(g, _) {
      if (typeof _ != "function" && _ !== null)
        throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(_ && _.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), _ && O(g, _);
    }
    function O(g, _) {
      return O = Object.setPrototypeOf || function(l, s) {
        return l.__proto__ = s, l;
      }, O(g, _);
    }
    function k(g) {
      var _ = A();
      return function() {
        var l = I(g), s;
        if (_) {
          var a = I(this).constructor;
          s = Reflect.construct(l, arguments, a);
        } else
          s = l.apply(this, arguments);
        return L(this, s);
      };
    }
    function L(g, _) {
      return _ && (t(_) === "object" || typeof _ == "function") ? _ : D(g);
    }
    function D(g) {
      if (g === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return g;
    }
    function A() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function I(g) {
      return I = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, I(g);
    }
    function h(g, _, p) {
      return _ in g ? Object.defineProperty(g, _, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = p, g;
    }
    var m = "https://cdn.embed.ly/player-0.1.0.min.js", v = "playerjs", N = /* @__PURE__ */ function(g) {
      P(p, g);
      var _ = k(p);
      function p() {
        var l;
        f(this, p);
        for (var s = arguments.length, a = new Array(s), d = 0; d < s; d++)
          a[d] = arguments[d];
        return l = _.call.apply(_, [this].concat(a)), h(D(l), "callPlayer", r.callPlayer), h(D(l), "duration", null), h(D(l), "currentTime", null), h(D(l), "secondsLoaded", null), h(D(l), "mute", function() {
          l.callPlayer("mute");
        }), h(D(l), "unmute", function() {
          l.callPlayer("unmute");
        }), h(D(l), "ref", function(E) {
          l.iframe = E;
        }), l;
      }
      return y(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(s) {
          var a = this;
          (0, r.getSDK)(m, v).then(function(d) {
            a.iframe && (a.player = new d.Player(a.iframe), a.player.on("ready", function() {
              setTimeout(function() {
                a.player.isReady = !0, a.player.setLoop(a.props.loop), a.props.muted && a.player.mute(), a.addListeners(a.player, a.props), a.props.onReady();
              }, 500);
            }));
          }, this.props.onError);
        }
      }, {
        key: "addListeners",
        value: function(s, a) {
          var d = this;
          s.on("play", a.onPlay), s.on("pause", a.onPause), s.on("ended", a.onEnded), s.on("error", a.onError), s.on("timeupdate", function(E) {
            var T = E.duration, S = E.seconds;
            d.duration = T, d.currentTime = S;
          });
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(s) {
          var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("setCurrentTime", s), a || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(s) {
          this.callPlayer("setVolume", s);
        }
      }, {
        key: "setLoop",
        value: function(s) {
          this.callPlayer("setLoop", s);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function() {
          var s = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ n.default.createElement("iframe", {
            ref: this.ref,
            src: this.props.url,
            frameBorder: "0",
            scrolling: "no",
            style: s,
            allow: "encrypted-media; autoplay; fullscreen;",
            referrerPolicy: "no-referrer-when-downgrade"
          });
        }
      }]), p;
    }(n.Component);
    e.default = N, h(N, "displayName", "Kaltura"), h(N, "canPlay", o.canPlay.kaltura);
  }(tl)), tl;
}
var nl = {}, Ds;
function sm() {
  return Ds || (Ds = 1, function(e) {
    function t(M) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(x) {
        return typeof x;
      } : t = function(x) {
        return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
      }, t(M);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = u(K), r = Z, o = B;
    function i() {
      if (typeof WeakMap != "function")
        return null;
      var M = /* @__PURE__ */ new WeakMap();
      return i = function() {
        return M;
      }, M;
    }
    function u(M) {
      if (M && M.__esModule)
        return M;
      if (M === null || t(M) !== "object" && typeof M != "function")
        return { default: M };
      var w = i();
      if (w && w.has(M))
        return w.get(M);
      var x = {}, C = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var R in M)
        if (Object.prototype.hasOwnProperty.call(M, R)) {
          var U = C ? Object.getOwnPropertyDescriptor(M, R) : null;
          U && (U.get || U.set) ? Object.defineProperty(x, R, U) : x[R] = M[R];
        }
      return x.default = M, w && w.set(M, x), x;
    }
    function f() {
      return f = Object.assign || function(M) {
        for (var w = 1; w < arguments.length; w++) {
          var x = arguments[w];
          for (var C in x)
            Object.prototype.hasOwnProperty.call(x, C) && (M[C] = x[C]);
        }
        return M;
      }, f.apply(this, arguments);
    }
    function c(M, w) {
      if (!(M instanceof w))
        throw new TypeError("Cannot call a class as a function");
    }
    function y(M, w) {
      for (var x = 0; x < w.length; x++) {
        var C = w[x];
        C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(M, C.key, C);
      }
    }
    function P(M, w, x) {
      return w && y(M.prototype, w), x && y(M, x), M;
    }
    function O(M, w) {
      if (typeof w != "function" && w !== null)
        throw new TypeError("Super expression must either be null or a function");
      M.prototype = Object.create(w && w.prototype, { constructor: { value: M, writable: !0, configurable: !0 } }), w && k(M, w);
    }
    function k(M, w) {
      return k = Object.setPrototypeOf || function(C, R) {
        return C.__proto__ = R, C;
      }, k(M, w);
    }
    function L(M) {
      var w = I();
      return function() {
        var C = h(M), R;
        if (w) {
          var U = h(this).constructor;
          R = Reflect.construct(C, arguments, U);
        } else
          R = C.apply(this, arguments);
        return D(this, R);
      };
    }
    function D(M, w) {
      return w && (t(w) === "object" || typeof w == "function") ? w : A(M);
    }
    function A(M) {
      if (M === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return M;
    }
    function I() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function h(M) {
      return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
        return x.__proto__ || Object.getPrototypeOf(x);
      }, h(M);
    }
    function m(M, w, x) {
      return w in M ? Object.defineProperty(M, w, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : M[w] = x, M;
    }
    var v = typeof navigator < "u", N = v && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, g = v && (/iPad|iPhone|iPod/.test(navigator.userAgent) || N) && !window.MSStream, _ = v && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream, p = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js", l = "Hls", s = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js", a = "dashjs", d = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js", E = "flvjs", T = /www\.dropbox\.com\/.+/, S = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/, b = "https://videodelivery.net/{id}/manifest/video.m3u8", z = /* @__PURE__ */ function(M) {
      O(x, M);
      var w = L(x);
      function x() {
        var C;
        c(this, x);
        for (var R = arguments.length, U = new Array(R), W = 0; W < R; W++)
          U[W] = arguments[W];
        return C = w.call.apply(w, [this].concat(U)), m(A(C), "onReady", function() {
          var j;
          return (j = C.props).onReady.apply(j, arguments);
        }), m(A(C), "onPlay", function() {
          var j;
          return (j = C.props).onPlay.apply(j, arguments);
        }), m(A(C), "onBuffer", function() {
          var j;
          return (j = C.props).onBuffer.apply(j, arguments);
        }), m(A(C), "onBufferEnd", function() {
          var j;
          return (j = C.props).onBufferEnd.apply(j, arguments);
        }), m(A(C), "onPause", function() {
          var j;
          return (j = C.props).onPause.apply(j, arguments);
        }), m(A(C), "onEnded", function() {
          var j;
          return (j = C.props).onEnded.apply(j, arguments);
        }), m(A(C), "onError", function() {
          var j;
          return (j = C.props).onError.apply(j, arguments);
        }), m(A(C), "onPlayBackRateChange", function(j) {
          return C.props.onPlaybackRateChange(j.target.playbackRate);
        }), m(A(C), "onEnablePIP", function() {
          var j;
          return (j = C.props).onEnablePIP.apply(j, arguments);
        }), m(A(C), "onDisablePIP", function(j) {
          var $ = C.props, X = $.onDisablePIP, q = $.playing;
          X(j), q && C.play();
        }), m(A(C), "onPresentationModeChange", function(j) {
          if (C.player && (0, r.supportsWebKitPresentationMode)(C.player)) {
            var $ = C.player.webkitPresentationMode;
            $ === "picture-in-picture" ? C.onEnablePIP(j) : $ === "inline" && C.onDisablePIP(j);
          }
        }), m(A(C), "onSeek", function(j) {
          C.props.onSeek(j.target.currentTime);
        }), m(A(C), "mute", function() {
          C.player.muted = !0;
        }), m(A(C), "unmute", function() {
          C.player.muted = !1;
        }), m(A(C), "renderSourceElement", function(j, $) {
          return typeof j == "string" ? /* @__PURE__ */ n.default.createElement("source", {
            key: $,
            src: j
          }) : /* @__PURE__ */ n.default.createElement("source", f({
            key: $
          }, j));
        }), m(A(C), "renderTrack", function(j, $) {
          return /* @__PURE__ */ n.default.createElement("track", f({
            key: $
          }, j));
        }), m(A(C), "ref", function(j) {
          C.player && (C.prevPlayer = C.player), C.player = j;
        }), C;
      }
      return P(x, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
          var R = this.getSource(this.props.url);
          R && (this.player.src = R), (g || this.props.config.forceDisableHls) && this.player.load();
        }
      }, {
        key: "componentDidUpdate",
        value: function(R) {
          this.shouldUseAudio(this.props) !== this.shouldUseAudio(R) && (this.removeListeners(this.prevPlayer, R.url), this.addListeners(this.player)), this.props.url !== R.url && !(0, r.isMediaStream)(this.props.url) && !(this.props.url instanceof Array) && (this.player.srcObject = null);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.player.removeAttribute("src"), this.removeListeners(this.player), this.hls && this.hls.destroy();
        }
      }, {
        key: "addListeners",
        value: function(R) {
          var U = this.props, W = U.url, j = U.playsinline;
          R.addEventListener("play", this.onPlay), R.addEventListener("waiting", this.onBuffer), R.addEventListener("playing", this.onBufferEnd), R.addEventListener("pause", this.onPause), R.addEventListener("seeked", this.onSeek), R.addEventListener("ended", this.onEnded), R.addEventListener("error", this.onError), R.addEventListener("ratechange", this.onPlayBackRateChange), R.addEventListener("enterpictureinpicture", this.onEnablePIP), R.addEventListener("leavepictureinpicture", this.onDisablePIP), R.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(W) || R.addEventListener("canplay", this.onReady), j && (R.setAttribute("playsinline", ""), R.setAttribute("webkit-playsinline", ""), R.setAttribute("x5-playsinline", ""));
        }
      }, {
        key: "removeListeners",
        value: function(R, U) {
          R.removeEventListener("canplay", this.onReady), R.removeEventListener("play", this.onPlay), R.removeEventListener("waiting", this.onBuffer), R.removeEventListener("playing", this.onBufferEnd), R.removeEventListener("pause", this.onPause), R.removeEventListener("seeked", this.onSeek), R.removeEventListener("ended", this.onEnded), R.removeEventListener("error", this.onError), R.removeEventListener("ratechange", this.onPlayBackRateChange), R.removeEventListener("enterpictureinpicture", this.onEnablePIP), R.removeEventListener("leavepictureinpicture", this.onDisablePIP), R.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(U) || R.removeEventListener("canplay", this.onReady);
        }
        // Proxy methods to prevent listener leaks
      }, {
        key: "shouldUseAudio",
        value: function(R) {
          return R.config.forceVideo || R.config.attributes.poster ? !1 : o.AUDIO_EXTENSIONS.test(R.url) || R.config.forceAudio;
        }
      }, {
        key: "shouldUseHLS",
        value: function(R) {
          return _ && this.props.config.forceSafariHLS || this.props.config.forceHLS ? !0 : g || this.props.config.forceDisableHls ? !1 : o.HLS_EXTENSIONS.test(R) || S.test(R);
        }
      }, {
        key: "shouldUseDASH",
        value: function(R) {
          return o.DASH_EXTENSIONS.test(R) || this.props.config.forceDASH;
        }
      }, {
        key: "shouldUseFLV",
        value: function(R) {
          return o.FLV_EXTENSIONS.test(R) || this.props.config.forceFLV;
        }
      }, {
        key: "load",
        value: function(R) {
          var U = this, W = this.props.config, j = W.hlsVersion, $ = W.hlsOptions, X = W.dashVersion, q = W.flvVersion;
          if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(R) && (0, r.getSDK)(p.replace("VERSION", j), l).then(function(J) {
            if (U.hls = new J($), U.hls.on(J.Events.MANIFEST_PARSED, function() {
              U.props.onReady();
            }), U.hls.on(J.Events.ERROR, function(Te, Ye) {
              U.props.onError(Te, Ye, U.hls, J);
            }), S.test(R)) {
              var Pe = R.match(S)[1];
              U.hls.loadSource(b.replace("{id}", Pe));
            } else
              U.hls.loadSource(R);
            U.hls.attachMedia(U.player), U.props.onLoaded();
          }), this.shouldUseDASH(R) && (0, r.getSDK)(s.replace("VERSION", X), a).then(function(J) {
            U.dash = J.MediaPlayer().create(), U.dash.initialize(U.player, R, U.props.playing), U.dash.on("error", U.props.onError), parseInt(X) < 3 ? U.dash.getDebug().setLogToBrowserConsole(!1) : U.dash.updateSettings({
              debug: {
                logLevel: J.Debug.LOG_LEVEL_NONE
              }
            }), U.props.onLoaded();
          }), this.shouldUseFLV(R) && (0, r.getSDK)(d.replace("VERSION", q), E).then(function(J) {
            U.flv = J.createPlayer({
              type: "flv",
              url: R
            }), U.flv.attachMediaElement(U.player), U.flv.on(J.Events.ERROR, function(Pe, Te) {
              U.props.onError(Pe, Te, U.flv, J);
            }), U.flv.load(), U.props.onLoaded();
          }), R instanceof Array)
            this.player.load();
          else if ((0, r.isMediaStream)(R))
            try {
              this.player.srcObject = R;
            } catch {
              this.player.src = window.URL.createObjectURL(R);
            }
        }
      }, {
        key: "play",
        value: function() {
          var R = this.player.play();
          R && R.catch(this.props.onError);
        }
      }, {
        key: "pause",
        value: function() {
          this.player.pause();
        }
      }, {
        key: "stop",
        value: function() {
          this.player.removeAttribute("src"), this.dash && this.dash.reset();
        }
      }, {
        key: "seekTo",
        value: function(R) {
          var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.player.currentTime = R, U || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(R) {
          this.player.volume = R;
        }
      }, {
        key: "enablePIP",
        value: function() {
          this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, r.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture" && this.player.webkitSetPresentationMode("picture-in-picture");
        }
      }, {
        key: "disablePIP",
        value: function() {
          document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, r.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline" && this.player.webkitSetPresentationMode("inline");
        }
      }, {
        key: "setPlaybackRate",
        value: function(R) {
          try {
            this.player.playbackRate = R;
          } catch (U) {
            this.props.onError(U);
          }
        }
      }, {
        key: "getDuration",
        value: function() {
          if (!this.player)
            return null;
          var R = this.player, U = R.duration, W = R.seekable;
          return U === 1 / 0 && W.length > 0 ? W.end(W.length - 1) : U;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.player ? this.player.currentTime : null;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          if (!this.player)
            return null;
          var R = this.player.buffered;
          if (R.length === 0)
            return 0;
          var U = R.end(R.length - 1), W = this.getDuration();
          return U > W ? W : U;
        }
      }, {
        key: "getSource",
        value: function(R) {
          var U = this.shouldUseHLS(R), W = this.shouldUseDASH(R), j = this.shouldUseFLV(R);
          if (!(R instanceof Array || (0, r.isMediaStream)(R) || U || W || j))
            return T.test(R) ? R.replace("www.dropbox.com", "dl.dropboxusercontent.com") : R;
        }
      }, {
        key: "render",
        value: function() {
          var R = this.props, U = R.url, W = R.playing, j = R.loop, $ = R.controls, X = R.muted, q = R.config, J = R.width, Pe = R.height, Te = this.shouldUseAudio(this.props), Ye = Te ? "audio" : "video", pn = {
            width: J === "auto" ? J : "100%",
            height: Pe === "auto" ? Pe : "100%"
          };
          return /* @__PURE__ */ n.default.createElement(Ye, f({
            ref: this.ref,
            src: this.getSource(U),
            style: pn,
            preload: "auto",
            autoPlay: W || void 0,
            controls: $,
            muted: X,
            loop: j
          }, q.attributes), U instanceof Array && U.map(this.renderSourceElement), q.tracks.map(this.renderTrack));
        }
      }]), x;
    }(n.Component);
    e.default = z, m(z, "displayName", "FilePlayer"), m(z, "canPlay", o.canPlay.file);
  }(nl)), nl;
}
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = K, n = Z, r = B;
  function o(c) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? o = function(P) {
      return typeof P;
    } : o = function(P) {
      return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
    }, o(c);
  }
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var c = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return c;
    }, c;
  }
  function u(c) {
    if (c && c.__esModule)
      return c;
    if (c === null || o(c) !== "object" && typeof c != "function")
      return { default: c };
    var y = i();
    if (y && y.has(c))
      return y.get(c);
    var P = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in c)
      if (Object.prototype.hasOwnProperty.call(c, k)) {
        var L = O ? Object.getOwnPropertyDescriptor(c, k) : null;
        L && (L.get || L.set) ? Object.defineProperty(P, k, L) : P[k] = c[k];
      }
    return P.default = c, y && y.set(c, P), P;
  }
  var f = [{
    key: "youtube",
    name: "YouTube",
    canPlay: r.canPlay.youtube,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(Zh());
      });
    })
  }, {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: r.canPlay.soundcloud,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(Jh());
      });
    })
  }, {
    key: "vimeo",
    name: "Vimeo",
    canPlay: r.canPlay.vimeo,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(em());
      });
    })
  }, {
    key: "facebook",
    name: "Facebook",
    canPlay: r.canPlay.facebook,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(tm());
      });
    })
  }, {
    key: "streamable",
    name: "Streamable",
    canPlay: r.canPlay.streamable,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(nm());
      });
    })
  }, {
    key: "wistia",
    name: "Wistia",
    canPlay: r.canPlay.wistia,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(rm());
      });
    })
  }, {
    key: "twitch",
    name: "Twitch",
    canPlay: r.canPlay.twitch,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(om());
      });
    })
  }, {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: r.canPlay.dailymotion,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(im());
      });
    })
  }, {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: r.canPlay.mixcloud,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(lm());
      });
    })
  }, {
    key: "vidyard",
    name: "Vidyard",
    canPlay: r.canPlay.vidyard,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(um());
      });
    })
  }, {
    key: "kaltura",
    name: "Kaltura",
    canPlay: r.canPlay.kaltura,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(am());
      });
    })
  }, {
    key: "file",
    name: "FilePlayer",
    canPlay: r.canPlay.file,
    canEnablePIP: function(y) {
      return r.canPlay.file(y) && (document.pictureInPictureEnabled || (0, n.supportsWebKitPresentationMode)()) && !r.AUDIO_EXTENSIONS.test(y);
    },
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return u(sm());
      });
    })
  }];
  e.default = f;
})(ap);
var hi = {}, Ms = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function cm(e, t) {
  return !!(e === t || Ms(e) && Ms(t));
}
function fm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!cm(e[n], t[n]))
      return !1;
  return !0;
}
function pm(e, t) {
  t === void 0 && (t = fm);
  var n, r = [], o, i = !1;
  function u() {
    for (var f = [], c = 0; c < arguments.length; c++)
      f[c] = arguments[c];
    return i && n === this && t(f, r) || (o = e.apply(this, f), i = !0, n = this, r = f), o;
  }
  return u;
}
const dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pm
}, Symbol.toStringTag, { value: "Module" })), ym = /* @__PURE__ */ Qs(dm);
var hm = typeof Element < "u", mm = typeof Map == "function", vm = typeof Set == "function", gm = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function To(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!To(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (mm && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!To(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (vm && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (gm && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    if (hm && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !To(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Rp = function(t, n) {
  try {
    return To(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, an = {}, Cp = { exports: {} }, wm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Pm = wm, _m = Pm;
function xp() {
}
function Lp() {
}
Lp.resetWarningCache = xp;
var Sm = function() {
  function e(r, o, i, u, f, c) {
    if (c !== _m) {
      var y = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw y.name = "Invariant Violation", y;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Lp,
    resetWarningCache: xp
  };
  return n.PropTypes = n, n;
};
Cp.exports = Sm();
var Om = Cp.exports;
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.defaultProps = an.propTypes = void 0;
var Tt = Em(Om);
function Em(e) {
  return e && e.__esModule ? e : { default: e };
}
var Re = Tt.default.string, Ce = Tt.default.bool, mn = Tt.default.number, rl = Tt.default.array, or = Tt.default.oneOfType, Xe = Tt.default.shape, xe = Tt.default.object, fe = Tt.default.func, As = Tt.default.node, km = {
  url: or([Re, rl, xe]),
  playing: Ce,
  loop: Ce,
  controls: Ce,
  volume: mn,
  muted: Ce,
  playbackRate: mn,
  width: or([Re, mn]),
  height: or([Re, mn]),
  style: xe,
  progressInterval: mn,
  playsinline: Ce,
  pip: Ce,
  stopOnUnmount: Ce,
  light: or([Ce, Re, xe]),
  playIcon: As,
  previewTabIndex: mn,
  fallback: As,
  oEmbedUrl: Re,
  wrapper: or([Re, fe, Xe({
    render: fe.isRequired
  })]),
  config: Xe({
    soundcloud: Xe({
      options: xe
    }),
    youtube: Xe({
      playerVars: xe,
      embedOptions: xe,
      onUnstarted: fe
    }),
    facebook: Xe({
      appId: Re,
      version: Re,
      playerId: Re,
      attributes: xe
    }),
    dailymotion: Xe({
      params: xe
    }),
    vimeo: Xe({
      playerOptions: xe,
      title: Re
    }),
    file: Xe({
      attributes: xe,
      tracks: rl,
      forceVideo: Ce,
      forceAudio: Ce,
      forceHLS: Ce,
      forceSafariHLS: Ce,
      forceDisableHls: Ce,
      forceDASH: Ce,
      forceFLV: Ce,
      hlsOptions: xe,
      hlsVersion: Re,
      dashVersion: Re,
      flvVersion: Re
    }),
    wistia: Xe({
      options: xe,
      playerId: Re,
      customControls: rl
    }),
    mixcloud: Xe({
      options: xe
    }),
    twitch: Xe({
      options: xe,
      playerId: Re
    }),
    vidyard: Xe({
      options: xe
    })
  }),
  onReady: fe,
  onStart: fe,
  onPlay: fe,
  onPause: fe,
  onBuffer: fe,
  onBufferEnd: fe,
  onEnded: fe,
  onError: fe,
  onDuration: fe,
  onSeek: fe,
  onPlaybackRateChange: fe,
  onPlaybackQualityChange: fe,
  onProgress: fe,
  onClickPreview: fe,
  onEnablePIP: fe,
  onDisablePIP: fe
};
an.propTypes = km;
var me = function() {
}, Tm = {
  playing: !1,
  loop: !1,
  controls: !1,
  volume: null,
  muted: !1,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: !1,
  pip: !1,
  stopOnUnmount: !0,
  light: !1,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: !0,
        // Undocumented, but makes player fill container and look better
        buying: !1,
        liking: !1,
        download: !1,
        sharing: !1,
        show_comments: !1,
        show_playcount: !1
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: me
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": !1
      }
    },
    vimeo: {
      playerOptions: {
        autopause: !1,
        byline: !1,
        portrait: !1,
        title: !1
      },
      title: null
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: !1,
      forceAudio: !1,
      forceHLS: !1,
      forceDASH: !1,
      forceFLV: !1,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: !1
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: me,
  onStart: me,
  onPlay: me,
  onPause: me,
  onBuffer: me,
  onBufferEnd: me,
  onEnded: me,
  onError: me,
  onDuration: me,
  onSeek: me,
  onPlaybackRateChange: me,
  onPlaybackQualityChange: me,
  onProgress: me,
  onClickPreview: me,
  onEnablePIP: me,
  onDisablePIP: me
};
an.defaultProps = Tm;
var Dp = {};
(function(e) {
  function t(p) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(s) {
      return typeof s;
    } : t = function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, t(p);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var n = c(K), r = u(Rp), o = an, i = Z;
  function u(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function f() {
    if (typeof WeakMap != "function")
      return null;
    var p = /* @__PURE__ */ new WeakMap();
    return f = function() {
      return p;
    }, p;
  }
  function c(p) {
    if (p && p.__esModule)
      return p;
    if (p === null || t(p) !== "object" && typeof p != "function")
      return { default: p };
    var l = f();
    if (l && l.has(p))
      return l.get(p);
    var s = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in p)
      if (Object.prototype.hasOwnProperty.call(p, d)) {
        var E = a ? Object.getOwnPropertyDescriptor(p, d) : null;
        E && (E.get || E.set) ? Object.defineProperty(s, d, E) : s[d] = p[d];
      }
    return s.default = p, l && l.set(p, s), s;
  }
  function y() {
    return y = Object.assign || function(p) {
      for (var l = 1; l < arguments.length; l++) {
        var s = arguments[l];
        for (var a in s)
          Object.prototype.hasOwnProperty.call(s, a) && (p[a] = s[a]);
      }
      return p;
    }, y.apply(this, arguments);
  }
  function P(p, l) {
    if (!(p instanceof l))
      throw new TypeError("Cannot call a class as a function");
  }
  function O(p, l) {
    for (var s = 0; s < l.length; s++) {
      var a = l[s];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(p, a.key, a);
    }
  }
  function k(p, l, s) {
    return l && O(p.prototype, l), s && O(p, s), p;
  }
  function L(p, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Super expression must either be null or a function");
    p.prototype = Object.create(l && l.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), l && D(p, l);
  }
  function D(p, l) {
    return D = Object.setPrototypeOf || function(a, d) {
      return a.__proto__ = d, a;
    }, D(p, l);
  }
  function A(p) {
    var l = m();
    return function() {
      var a = v(p), d;
      if (l) {
        var E = v(this).constructor;
        d = Reflect.construct(a, arguments, E);
      } else
        d = a.apply(this, arguments);
      return I(this, d);
    };
  }
  function I(p, l) {
    return l && (t(l) === "object" || typeof l == "function") ? l : h(p);
  }
  function h(p) {
    if (p === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return p;
  }
  function m() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function v(p) {
    return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, v(p);
  }
  function N(p, l, s) {
    return l in p ? Object.defineProperty(p, l, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : p[l] = s, p;
  }
  var g = 5e3, _ = /* @__PURE__ */ function(p) {
    L(s, p);
    var l = A(s);
    function s() {
      var a;
      P(this, s);
      for (var d = arguments.length, E = new Array(d), T = 0; T < d; T++)
        E[T] = arguments[T];
      return a = l.call.apply(l, [this].concat(E)), N(h(a), "mounted", !1), N(h(a), "isReady", !1), N(h(a), "isPlaying", !1), N(h(a), "isLoading", !0), N(h(a), "loadOnReady", null), N(h(a), "startOnPlay", !0), N(h(a), "seekOnPlay", null), N(h(a), "onDurationCalled", !1), N(h(a), "handlePlayerMount", function(S) {
        if (a.player) {
          a.progress();
          return;
        }
        a.player = S, a.player.load(a.props.url), a.progress();
      }), N(h(a), "getInternalPlayer", function(S) {
        return a.player ? a.player[S] : null;
      }), N(h(a), "progress", function() {
        if (a.props.url && a.player && a.isReady) {
          var S = a.getCurrentTime() || 0, b = a.getSecondsLoaded(), z = a.getDuration();
          if (z) {
            var M = {
              playedSeconds: S,
              played: S / z
            };
            b !== null && (M.loadedSeconds = b, M.loaded = b / z), (M.playedSeconds !== a.prevPlayed || M.loadedSeconds !== a.prevLoaded) && a.props.onProgress(M), a.prevPlayed = M.playedSeconds, a.prevLoaded = M.loadedSeconds;
          }
        }
        a.progressTimeout = setTimeout(a.progress, a.props.progressFrequency || a.props.progressInterval);
      }), N(h(a), "handleReady", function() {
        if (a.mounted) {
          a.isReady = !0, a.isLoading = !1;
          var S = a.props, b = S.onReady, z = S.playing, M = S.volume, w = S.muted;
          b(), !w && M !== null && a.player.setVolume(M), a.loadOnReady ? (a.player.load(a.loadOnReady, !0), a.loadOnReady = null) : z && a.player.play(), a.handleDurationCheck();
        }
      }), N(h(a), "handlePlay", function() {
        a.isPlaying = !0, a.isLoading = !1;
        var S = a.props, b = S.onStart, z = S.onPlay, M = S.playbackRate;
        a.startOnPlay && (a.player.setPlaybackRate && M !== 1 && a.player.setPlaybackRate(M), b(), a.startOnPlay = !1), z(), a.seekOnPlay && (a.seekTo(a.seekOnPlay), a.seekOnPlay = null), a.handleDurationCheck();
      }), N(h(a), "handlePause", function(S) {
        a.isPlaying = !1, a.isLoading || a.props.onPause(S);
      }), N(h(a), "handleEnded", function() {
        var S = a.props, b = S.activePlayer, z = S.loop, M = S.onEnded;
        b.loopOnEnded && z && a.seekTo(0), z || (a.isPlaying = !1, M());
      }), N(h(a), "handleError", function() {
        var S;
        a.isLoading = !1, (S = a.props).onError.apply(S, arguments);
      }), N(h(a), "handleDurationCheck", function() {
        clearTimeout(a.durationCheckTimeout);
        var S = a.getDuration();
        S ? a.onDurationCalled || (a.props.onDuration(S), a.onDurationCalled = !0) : a.durationCheckTimeout = setTimeout(a.handleDurationCheck, 100);
      }), N(h(a), "handleLoaded", function() {
        a.isLoading = !1;
      }), a;
    }
    return k(s, [{
      key: "componentDidMount",
      value: function() {
        this.mounted = !0;
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1;
      }
    }, {
      key: "componentDidUpdate",
      value: function(d) {
        var E = this;
        if (this.player) {
          var T = this.props, S = T.url, b = T.playing, z = T.volume, M = T.muted, w = T.playbackRate, x = T.pip, C = T.loop, R = T.activePlayer, U = T.disableDeferredLoading;
          if (!(0, r.default)(d.url, S)) {
            if (this.isLoading && !R.forceLoad && !U && !(0, i.isMediaStream)(S)) {
              console.warn("ReactPlayer: the attempt to load ".concat(S, " is being deferred until the player has loaded")), this.loadOnReady = S;
              return;
            }
            this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(S, this.isReady);
          }
          !d.playing && b && !this.isPlaying && this.player.play(), d.playing && !b && this.isPlaying && this.player.pause(), !d.pip && x && this.player.enablePIP && this.player.enablePIP(), d.pip && !x && this.player.disablePIP && this.player.disablePIP(), d.volume !== z && z !== null && this.player.setVolume(z), d.muted !== M && (M ? this.player.mute() : (this.player.unmute(), z !== null && setTimeout(function() {
            return E.player.setVolume(z);
          }))), d.playbackRate !== w && this.player.setPlaybackRate && this.player.setPlaybackRate(w), d.loop !== C && this.player.setLoop && this.player.setLoop(C);
        }
      }
    }, {
      key: "getDuration",
      value: function() {
        return this.isReady ? this.player.getDuration() : null;
      }
    }, {
      key: "getCurrentTime",
      value: function() {
        return this.isReady ? this.player.getCurrentTime() : null;
      }
    }, {
      key: "getSecondsLoaded",
      value: function() {
        return this.isReady ? this.player.getSecondsLoaded() : null;
      }
    }, {
      key: "seekTo",
      value: function(d, E, T) {
        var S = this;
        if (!this.isReady) {
          d !== 0 && (this.seekOnPlay = d, setTimeout(function() {
            S.seekOnPlay = null;
          }, g));
          return;
        }
        var b = E ? E === "fraction" : d > 0 && d < 1;
        if (b) {
          var z = this.player.getDuration();
          if (!z) {
            console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
            return;
          }
          this.player.seekTo(z * d, T);
          return;
        }
        this.player.seekTo(d, T);
      }
    }, {
      key: "render",
      value: function() {
        var d = this.props.activePlayer;
        return d ? /* @__PURE__ */ n.default.createElement(d, y({}, this.props, {
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError
        })) : null;
      }
    }]), s;
  }(n.Component);
  e.default = _, N(_, "displayName", "Player"), N(_, "propTypes", o.propTypes), N(_, "defaultProps", o.defaultProps);
})(Dp);
var ol = {}, Ns;
function Rm() {
  return Ns || (Ns = 1, function(e) {
    function t(g) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(g);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = o(K);
    function r() {
      if (typeof WeakMap != "function")
        return null;
      var g = /* @__PURE__ */ new WeakMap();
      return r = function() {
        return g;
      }, g;
    }
    function o(g) {
      if (g && g.__esModule)
        return g;
      if (g === null || t(g) !== "object" && typeof g != "function")
        return { default: g };
      var _ = r();
      if (_ && _.has(g))
        return _.get(g);
      var p = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in g)
        if (Object.prototype.hasOwnProperty.call(g, s)) {
          var a = l ? Object.getOwnPropertyDescriptor(g, s) : null;
          a && (a.get || a.set) ? Object.defineProperty(p, s, a) : p[s] = g[s];
        }
      return p.default = g, _ && _.set(g, p), p;
    }
    function i(g, _) {
      var p = Object.keys(g);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(g);
        _ && (l = l.filter(function(s) {
          return Object.getOwnPropertyDescriptor(g, s).enumerable;
        })), p.push.apply(p, l);
      }
      return p;
    }
    function u(g) {
      for (var _ = 1; _ < arguments.length; _++) {
        var p = arguments[_] != null ? arguments[_] : {};
        _ % 2 ? i(Object(p), !0).forEach(function(l) {
          h(g, l, p[l]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(p)) : i(Object(p)).forEach(function(l) {
          Object.defineProperty(g, l, Object.getOwnPropertyDescriptor(p, l));
        });
      }
      return g;
    }
    function f(g, _) {
      if (!(g instanceof _))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(g, _) {
      for (var p = 0; p < _.length; p++) {
        var l = _[p];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(g, l.key, l);
      }
    }
    function y(g, _, p) {
      return _ && c(g.prototype, _), p && c(g, p), g;
    }
    function P(g, _) {
      if (typeof _ != "function" && _ !== null)
        throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(_ && _.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), _ && O(g, _);
    }
    function O(g, _) {
      return O = Object.setPrototypeOf || function(l, s) {
        return l.__proto__ = s, l;
      }, O(g, _);
    }
    function k(g) {
      var _ = A();
      return function() {
        var l = I(g), s;
        if (_) {
          var a = I(this).constructor;
          s = Reflect.construct(l, arguments, a);
        } else
          s = l.apply(this, arguments);
        return L(this, s);
      };
    }
    function L(g, _) {
      return _ && (t(_) === "object" || typeof _ == "function") ? _ : D(g);
    }
    function D(g) {
      if (g === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return g;
    }
    function A() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function I(g) {
      return I = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, I(g);
    }
    function h(g, _, p) {
      return _ in g ? Object.defineProperty(g, _, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = p, g;
    }
    var m = "64px", v = {}, N = /* @__PURE__ */ function(g) {
      P(p, g);
      var _ = k(p);
      function p() {
        var l;
        f(this, p);
        for (var s = arguments.length, a = new Array(s), d = 0; d < s; d++)
          a[d] = arguments[d];
        return l = _.call.apply(_, [this].concat(a)), h(D(l), "mounted", !1), h(D(l), "state", {
          image: null
        }), h(D(l), "handleKeyPress", function(E) {
          (E.key === "Enter" || E.key === " ") && l.props.onClick();
        }), l;
      }
      return y(p, [{
        key: "componentDidMount",
        value: function() {
          this.mounted = !0, this.fetchImage(this.props);
        }
      }, {
        key: "componentDidUpdate",
        value: function(s) {
          var a = this.props, d = a.url, E = a.light;
          (s.url !== d || s.light !== E) && this.fetchImage(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
        }
      }, {
        key: "fetchImage",
        value: function(s) {
          var a = this, d = s.url, E = s.light, T = s.oEmbedUrl;
          if (!/* @__PURE__ */ n.default.isValidElement(E)) {
            if (typeof E == "string") {
              this.setState({
                image: E
              });
              return;
            }
            if (v[d]) {
              this.setState({
                image: v[d]
              });
              return;
            }
            return this.setState({
              image: null
            }), window.fetch(T.replace("{url}", d)).then(function(S) {
              return S.json();
            }).then(function(S) {
              if (S.thumbnail_url && a.mounted) {
                var b = S.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
                a.setState({
                  image: b
                }), v[d] = b;
              }
            });
          }
        }
      }, {
        key: "render",
        value: function() {
          var s = this.props, a = s.light, d = s.onClick, E = s.playIcon, T = s.previewTabIndex, S = this.state.image, b = /* @__PURE__ */ n.default.isValidElement(a), z = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, M = {
            preview: u({
              width: "100%",
              height: "100%",
              backgroundImage: S && !b ? "url(".concat(S, ")") : void 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer"
            }, z),
            shadow: u({
              background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
              borderRadius: m,
              width: m,
              height: m,
              position: b ? "absolute" : void 0
            }, z),
            playIcon: {
              borderStyle: "solid",
              borderWidth: "16px 0 16px 26px",
              borderColor: "transparent transparent transparent white",
              marginLeft: "7px"
            }
          }, w = /* @__PURE__ */ n.default.createElement("div", {
            style: M.shadow,
            className: "react-player__shadow"
          }, /* @__PURE__ */ n.default.createElement("div", {
            style: M.playIcon,
            className: "react-player__play-icon"
          }));
          return /* @__PURE__ */ n.default.createElement("div", {
            style: M.preview,
            className: "react-player__preview",
            onClick: d,
            tabIndex: T,
            onKeyPress: this.handleKeyPress
          }, b ? a : null, E || w);
        }
      }]), p;
    }(n.Component);
    e.default = N;
  }(ol)), ol;
}
Object.defineProperty(hi, "__esModule", {
  value: !0
});
hi.createReactPlayer = void 0;
var Xt = Ap(K), Cm = mi(cp), il = mi(ym), Is = mi(Rp), fr = an, xm = Z, Lm = mi(Dp);
function mi(e) {
  return e && e.__esModule ? e : { default: e };
}
function Er(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Er = function(n) {
    return typeof n;
  } : Er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Er(e);
}
function bs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bs(Object(n), !0).forEach(function(r) {
      ue(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Go() {
  return Go = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Go.apply(this, arguments);
}
function ll(e) {
  return Nm(e) || Am(e) || Mm(e) || Dm();
}
function Dm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mm(e, t) {
  if (e) {
    if (typeof e == "string")
      return ou(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ou(e, t);
  }
}
function Am(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Nm(e) {
  if (Array.isArray(e))
    return ou(e);
}
function ou(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Im(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bm(e, t, n) {
  return t && zs(e.prototype, t), n && zs(e, n), e;
}
function Um(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && iu(e, t);
}
function iu(e, t) {
  return iu = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, iu(e, t);
}
function zm(e) {
  var t = jm();
  return function() {
    var r = Zo(e), o;
    if (t) {
      var i = Zo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Vm(this, o);
  };
}
function Vm(e, t) {
  return t && (Er(t) === "object" || typeof t == "function") ? t : Oe(e);
}
function Oe(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Zo(e) {
  return Zo = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Zo(e);
}
function ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mp() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return Mp = function() {
    return e;
  }, e;
}
function Ap(e) {
  if (e && e.__esModule)
    return e;
  if (e === null || Er(e) !== "object" && typeof e != "function")
    return { default: e };
  var t = Mp();
  if (t && t.has(e))
    return t.get(e);
  var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o];
    }
  return n.default = e, t && t.set(e, n), n;
}
var Fm = /* @__PURE__ */ (0, Xt.lazy)(function() {
  return Promise.resolve().then(function() {
    return Ap(Rm());
  });
}), Wm = typeof window < "u" && window.document, Hm = typeof Jt < "u" && Jt.window && Jt.window.document, Bm = Object.keys(fr.propTypes), $m = Wm || Hm ? Xt.Suspense : function() {
  return null;
}, ir = [], Km = function(t, n) {
  var r, o;
  return o = r = /* @__PURE__ */ function(i) {
    Um(f, i);
    var u = zm(f);
    function f() {
      var c;
      Im(this, f);
      for (var y = arguments.length, P = new Array(y), O = 0; O < y; O++)
        P[O] = arguments[O];
      return c = u.call.apply(u, [this].concat(P)), ue(Oe(c), "state", {
        showPreview: !!c.props.light
      }), ue(Oe(c), "references", {
        wrapper: function(L) {
          c.wrapper = L;
        },
        player: function(L) {
          c.player = L;
        }
      }), ue(Oe(c), "handleClickPreview", function(k) {
        c.setState({
          showPreview: !1
        }), c.props.onClickPreview(k);
      }), ue(Oe(c), "showPreview", function() {
        c.setState({
          showPreview: !0
        });
      }), ue(Oe(c), "getDuration", function() {
        return c.player ? c.player.getDuration() : null;
      }), ue(Oe(c), "getCurrentTime", function() {
        return c.player ? c.player.getCurrentTime() : null;
      }), ue(Oe(c), "getSecondsLoaded", function() {
        return c.player ? c.player.getSecondsLoaded() : null;
      }), ue(Oe(c), "getInternalPlayer", function() {
        var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "player";
        return c.player ? c.player.getInternalPlayer(k) : null;
      }), ue(Oe(c), "seekTo", function(k, L, D) {
        if (!c.player)
          return null;
        c.player.seekTo(k, L, D);
      }), ue(Oe(c), "handleReady", function() {
        c.props.onReady(Oe(c));
      }), ue(Oe(c), "getActivePlayer", (0, il.default)(function(k) {
        for (var L = 0, D = [].concat(ir, ll(t)); L < D.length; L++) {
          var A = D[L];
          if (A.canPlay(k))
            return A;
        }
        return n || null;
      })), ue(Oe(c), "getConfig", (0, il.default)(function(k, L) {
        var D = c.props.config;
        return Cm.default.all([fr.defaultProps.config, fr.defaultProps.config[L] || {}, D, D[L] || {}]);
      })), ue(Oe(c), "getAttributes", (0, il.default)(function(k) {
        return (0, xm.omit)(c.props, Bm);
      })), ue(Oe(c), "renderActivePlayer", function(k) {
        if (!k)
          return null;
        var L = c.getActivePlayer(k);
        if (!L)
          return null;
        var D = c.getConfig(k, L.key);
        return /* @__PURE__ */ Xt.default.createElement(Lm.default, Go({}, c.props, {
          key: L.key,
          ref: c.references.player,
          config: D,
          activePlayer: L.lazyPlayer || L,
          onReady: c.handleReady
        }));
      }), c;
    }
    return bm(f, [{
      key: "shouldComponentUpdate",
      value: function(y, P) {
        return !(0, Is.default)(this.props, y) || !(0, Is.default)(this.state, P);
      }
    }, {
      key: "componentDidUpdate",
      value: function(y) {
        var P = this.props.light;
        !y.light && P && this.setState({
          showPreview: !0
        }), y.light && !P && this.setState({
          showPreview: !1
        });
      }
    }, {
      key: "renderPreview",
      value: function(y) {
        if (!y)
          return null;
        var P = this.props, O = P.light, k = P.playIcon, L = P.previewTabIndex, D = P.oEmbedUrl;
        return /* @__PURE__ */ Xt.default.createElement(Fm, {
          url: y,
          light: O,
          playIcon: k,
          previewTabIndex: L,
          oEmbedUrl: D,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function() {
        var y = this.props, P = y.url, O = y.style, k = y.width, L = y.height, D = y.fallback, A = y.wrapper, I = this.state.showPreview, h = this.getAttributes(P), m = typeof A == "string" ? this.references.wrapper : void 0;
        return /* @__PURE__ */ Xt.default.createElement(A, Go({
          ref: m,
          style: Us(Us({}, O), {}, {
            width: k,
            height: L
          })
        }, h), /* @__PURE__ */ Xt.default.createElement($m, {
          fallback: D
        }, I ? this.renderPreview(P) : this.renderActivePlayer(P)));
      }
    }]), f;
  }(Xt.Component), ue(r, "displayName", "ReactPlayer"), ue(r, "propTypes", fr.propTypes), ue(r, "defaultProps", fr.defaultProps), ue(r, "addCustomPlayer", function(i) {
    ir.push(i);
  }), ue(r, "removeCustomPlayers", function() {
    ir.length = 0;
  }), ue(r, "canPlay", function(i) {
    for (var u = 0, f = [].concat(ir, ll(t)); u < f.length; u++) {
      var c = f[u];
      if (c.canPlay(i))
        return !0;
    }
    return !1;
  }), ue(r, "canEnablePIP", function(i) {
    for (var u = 0, f = [].concat(ir, ll(t)); u < f.length; u++) {
      var c = f[u];
      if (c.canEnablePIP && c.canEnablePIP(i))
        return !0;
    }
    return !1;
  }), o;
};
hi.createReactPlayer = Km;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = r(ap), n = hi;
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var o = t.default[t.default.length - 1], i = (0, n.createReactPlayer)(t.default, o);
  e.default = i;
})(up);
const Vs = /* @__PURE__ */ lu(up);
var Np = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var u = typeof i;
          if (u === "string" || u === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var f = n.apply(null, i);
              f && r.push(f);
            }
          } else if (u === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && r.push(c);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Np);
var Ym = Np.exports;
const wt = /* @__PURE__ */ lu(Ym);
var Ip = { exports: {} }, pr;
typeof window < "u" ? pr = window : typeof Jt < "u" ? pr = Jt : typeof self < "u" ? pr = self : pr = {};
var Qm = pr;
const Xm = {}, qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xm
}, Symbol.toStringTag, { value: "Module" })), Gm = /* @__PURE__ */ Qs(qm);
var js = typeof Jt < "u" ? Jt : typeof window < "u" ? window : {}, Zm = Gm, dr;
typeof document < "u" ? dr = document : (dr = js["__GLOBAL_DOCUMENT_CACHE@4"], dr || (dr = js["__GLOBAL_DOCUMENT_CACHE@4"] = Zm));
var Jm = dr, Fs = Jm, oa = Object.create || function() {
  function e() {
  }
  return function(t) {
    if (arguments.length !== 1)
      throw new Error("Object.create shim only accepts one parameter.");
    return e.prototype = t, new e();
  };
}();
function Fe(e, t) {
  this.name = "ParsingError", this.code = e.code, this.message = t || e.message;
}
Fe.prototype = oa(Error.prototype);
Fe.prototype.constructor = Fe;
Fe.Errors = {
  BadSignature: {
    code: 0,
    message: "Malformed WebVTT signature."
  },
  BadTimeStamp: {
    code: 1,
    message: "Malformed time stamp."
  }
};
function ia(e) {
  function t(r, o, i, u) {
    return (r | 0) * 3600 + (o | 0) * 60 + (i | 0) + (u | 0) / 1e3;
  }
  var n = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
  return n ? n[3] ? t(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? t(n[1], n[2], 0, n[4]) : t(0, n[1], n[2], n[4]) : null;
}
function kr() {
  this.values = oa(null);
}
kr.prototype = {
  // Only accept the first assignment to any key.
  set: function(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  },
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get: function(e, t, n) {
    return n ? this.has(e) ? this.values[e] : t[n] : this.has(e) ? this.values[e] : t;
  },
  // Check whether we have a value for a key.
  has: function(e) {
    return e in this.values;
  },
  // Accept a setting if its one of the given alternatives.
  alt: function(e, t, n) {
    for (var r = 0; r < n.length; ++r)
      if (t === n[r]) {
        this.set(e, t);
        break;
      }
  },
  // Accept a setting if its a valid (signed) integer.
  integer: function(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  },
  // Accept a setting if its a valid percentage.
  percent: function(e, t) {
    return t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t), t >= 0 && t <= 100) ? (this.set(e, t), !0) : !1;
  }
};
function yr(e, t, n, r) {
  var o = r ? e.split(r) : [e];
  for (var i in o)
    if (typeof o[i] == "string") {
      var u = o[i].split(n);
      if (u.length === 2) {
        var f = u[0].trim(), c = u[1].trim();
        t(f, c);
      }
    }
}
function ev(e, t, n) {
  var r = e;
  function o() {
    var f = ia(e);
    if (f === null)
      throw new Fe(
        Fe.Errors.BadTimeStamp,
        "Malformed timestamp: " + r
      );
    return e = e.replace(/^[^\sa-zA-Z-]+/, ""), f;
  }
  function i(f, c) {
    var y = new kr();
    yr(f, function(P, O) {
      switch (P) {
        case "region":
          for (var k = n.length - 1; k >= 0; k--)
            if (n[k].id === O) {
              y.set(P, n[k].region);
              break;
            }
          break;
        case "vertical":
          y.alt(P, O, ["rl", "lr"]);
          break;
        case "line":
          var L = O.split(","), D = L[0];
          y.integer(P, D), y.percent(P, D) && y.set("snapToLines", !1), y.alt(P, D, ["auto"]), L.length === 2 && y.alt("lineAlign", L[1], ["start", "center", "end"]);
          break;
        case "position":
          L = O.split(","), y.percent(P, L[0]), L.length === 2 && y.alt("positionAlign", L[1], ["start", "center", "end"]);
          break;
        case "size":
          y.percent(P, O);
          break;
        case "align":
          y.alt(P, O, ["start", "center", "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), c.region = y.get("region", null), c.vertical = y.get("vertical", "");
    try {
      c.line = y.get("line", "auto");
    } catch {
    }
    c.lineAlign = y.get("lineAlign", "start"), c.snapToLines = y.get("snapToLines", !0), c.size = y.get("size", 100);
    try {
      c.align = y.get("align", "center");
    } catch {
      c.align = y.get("align", "middle");
    }
    try {
      c.position = y.get("position", "auto");
    } catch {
      c.position = y.get("position", {
        start: 0,
        left: 0,
        center: 50,
        middle: 50,
        end: 100,
        right: 100
      }, c.align);
    }
    c.positionAlign = y.get("positionAlign", {
      start: "start",
      left: "start",
      center: "center",
      middle: "center",
      end: "end",
      right: "end"
    }, c.align);
  }
  function u() {
    e = e.replace(/^\s+/, "");
  }
  if (u(), t.startTime = o(), u(), e.substr(0, 3) !== "-->")
    throw new Fe(
      Fe.Errors.BadTimeStamp,
      "Malformed time stamp (time stamps must be separated by '-->'): " + r
    );
  e = e.substr(3), u(), t.endTime = o(), u(), i(e, t);
}
var ul = Fs.createElement && Fs.createElement("textarea"), tv = {
  c: "span",
  i: "i",
  b: "b",
  u: "u",
  ruby: "ruby",
  rt: "rt",
  v: "span",
  lang: "span"
}, Ws = {
  white: "rgba(255,255,255,1)",
  lime: "rgba(0,255,0,1)",
  cyan: "rgba(0,255,255,1)",
  red: "rgba(255,0,0,1)",
  yellow: "rgba(255,255,0,1)",
  magenta: "rgba(255,0,255,1)",
  blue: "rgba(0,0,255,1)",
  black: "rgba(0,0,0,1)"
}, nv = {
  v: "title",
  lang: "lang"
}, Hs = {
  rt: "ruby"
};
function bp(e, t) {
  function n() {
    if (!t)
      return null;
    function D(I) {
      return t = t.substr(I.length), I;
    }
    var A = t.match(/^([^<]*)(<[^>]*>?)?/);
    return D(A[1] ? A[1] : A[2]);
  }
  function r(D) {
    return ul.innerHTML = D, D = ul.textContent, ul.textContent = "", D;
  }
  function o(D, A) {
    return !Hs[A.localName] || Hs[A.localName] === D.localName;
  }
  function i(D, A) {
    var I = tv[D];
    if (!I)
      return null;
    var h = e.document.createElement(I), m = nv[D];
    return m && A && (h[m] = A.trim()), h;
  }
  for (var u = e.document.createElement("div"), f = u, c, y = []; (c = n()) !== null; ) {
    if (c[0] === "<") {
      if (c[1] === "/") {
        y.length && y[y.length - 1] === c.substr(2).replace(">", "") && (y.pop(), f = f.parentNode);
        continue;
      }
      var P = ia(c.substr(1, c.length - 2)), O;
      if (P) {
        O = e.document.createProcessingInstruction("timestamp", P), f.appendChild(O);
        continue;
      }
      var k = c.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
      if (!k || (O = i(k[1], k[3]), !O) || !o(f, O))
        continue;
      if (k[2]) {
        var L = k[2].split(".");
        L.forEach(function(D) {
          var A = /^bg_/.test(D), I = A ? D.slice(3) : D;
          if (Ws.hasOwnProperty(I)) {
            var h = A ? "background-color" : "color", m = Ws[I];
            O.style[h] = m;
          }
        }), O.className = L.join(" ");
      }
      y.push(k[1]), f.appendChild(O), f = O;
      continue;
    }
    f.appendChild(e.document.createTextNode(r(c)));
  }
  return u;
}
var Bs = [
  [1470, 1470],
  [1472, 1472],
  [1475, 1475],
  [1478, 1478],
  [1488, 1514],
  [1520, 1524],
  [1544, 1544],
  [1547, 1547],
  [1549, 1549],
  [1563, 1563],
  [1566, 1610],
  [1645, 1647],
  [1649, 1749],
  [1765, 1766],
  [1774, 1775],
  [1786, 1805],
  [1807, 1808],
  [1810, 1839],
  [1869, 1957],
  [1969, 1969],
  [1984, 2026],
  [2036, 2037],
  [2042, 2042],
  [2048, 2069],
  [2074, 2074],
  [2084, 2084],
  [2088, 2088],
  [2096, 2110],
  [2112, 2136],
  [2142, 2142],
  [2208, 2208],
  [2210, 2220],
  [8207, 8207],
  [64285, 64285],
  [64287, 64296],
  [64298, 64310],
  [64312, 64316],
  [64318, 64318],
  [64320, 64321],
  [64323, 64324],
  [64326, 64449],
  [64467, 64829],
  [64848, 64911],
  [64914, 64967],
  [65008, 65020],
  [65136, 65140],
  [65142, 65276],
  [67584, 67589],
  [67592, 67592],
  [67594, 67637],
  [67639, 67640],
  [67644, 67644],
  [67647, 67669],
  [67671, 67679],
  [67840, 67867],
  [67872, 67897],
  [67903, 67903],
  [67968, 68023],
  [68030, 68031],
  [68096, 68096],
  [68112, 68115],
  [68117, 68119],
  [68121, 68147],
  [68160, 68167],
  [68176, 68184],
  [68192, 68223],
  [68352, 68405],
  [68416, 68437],
  [68440, 68466],
  [68472, 68479],
  [68608, 68680],
  [126464, 126467],
  [126469, 126495],
  [126497, 126498],
  [126500, 126500],
  [126503, 126503],
  [126505, 126514],
  [126516, 126519],
  [126521, 126521],
  [126523, 126523],
  [126530, 126530],
  [126535, 126535],
  [126537, 126537],
  [126539, 126539],
  [126541, 126543],
  [126545, 126546],
  [126548, 126548],
  [126551, 126551],
  [126553, 126553],
  [126555, 126555],
  [126557, 126557],
  [126559, 126559],
  [126561, 126562],
  [126564, 126564],
  [126567, 126570],
  [126572, 126578],
  [126580, 126583],
  [126585, 126588],
  [126590, 126590],
  [126592, 126601],
  [126603, 126619],
  [126625, 126627],
  [126629, 126633],
  [126635, 126651],
  [1114109, 1114109]
];
function rv(e) {
  for (var t = 0; t < Bs.length; t++) {
    var n = Bs[t];
    if (e >= n[0] && e <= n[1])
      return !0;
  }
  return !1;
}
function ov(e) {
  var t = [], n = "", r;
  if (!e || !e.childNodes)
    return "ltr";
  function o(f, c) {
    for (var y = c.childNodes.length - 1; y >= 0; y--)
      f.push(c.childNodes[y]);
  }
  function i(f) {
    if (!f || !f.length)
      return null;
    var c = f.pop(), y = c.textContent || c.innerText;
    if (y) {
      var P = y.match(/^.*(\n|\r)/);
      return P ? (f.length = 0, P[0]) : y;
    }
    if (c.tagName === "ruby")
      return i(f);
    if (c.childNodes)
      return o(f, c), i(f);
  }
  for (o(t, e); n = i(t); )
    for (var u = 0; u < n.length; u++)
      if (r = n.charCodeAt(u), rv(r))
        return "rtl";
  return "ltr";
}
function iv(e) {
  if (typeof e.line == "number" && (e.snapToLines || e.line >= 0 && e.line <= 100))
    return e.line;
  if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement)
    return -1;
  for (var t = e.track, n = t.textTrackList, r = 0, o = 0; o < n.length && n[o] !== t; o++)
    n[o].mode === "showing" && r++;
  return ++r * -1;
}
function vi() {
}
vi.prototype.applyStyles = function(e, t) {
  t = t || this.div;
  for (var n in e)
    e.hasOwnProperty(n) && (t.style[n] = e[n]);
};
vi.prototype.formatStyle = function(e, t) {
  return e === 0 ? 0 : e + t;
};
function Jo(e, t, n) {
  vi.call(this), this.cue = t, this.cueDiv = bp(e, t.text);
  var r = {
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "inline",
    writingMode: t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl",
    unicodeBidi: "plaintext"
  };
  this.applyStyles(r, this.cueDiv), this.div = e.document.createElement("div"), r = {
    direction: ov(this.cueDiv),
    writingMode: t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl",
    unicodeBidi: "plaintext",
    textAlign: t.align === "middle" ? "center" : t.align,
    font: n.font,
    whiteSpace: "pre-line",
    position: "absolute"
  }, this.applyStyles(r), this.div.appendChild(this.cueDiv);
  var o = 0;
  switch (t.positionAlign) {
    case "start":
    case "line-left":
      o = t.position;
      break;
    case "center":
      o = t.position - t.size / 2;
      break;
    case "end":
    case "line-right":
      o = t.position - t.size;
      break;
  }
  t.vertical === "" ? this.applyStyles({
    left: this.formatStyle(o, "%"),
    width: this.formatStyle(t.size, "%")
  }) : this.applyStyles({
    top: this.formatStyle(o, "%"),
    height: this.formatStyle(t.size, "%")
  }), this.move = function(i) {
    this.applyStyles({
      top: this.formatStyle(i.top, "px"),
      bottom: this.formatStyle(i.bottom, "px"),
      left: this.formatStyle(i.left, "px"),
      right: this.formatStyle(i.right, "px"),
      height: this.formatStyle(i.height, "px"),
      width: this.formatStyle(i.width, "px")
    });
  };
}
Jo.prototype = oa(vi.prototype);
Jo.prototype.constructor = Jo;
function De(e) {
  var t, n, r, o;
  if (e.div) {
    n = e.div.offsetHeight, r = e.div.offsetWidth, o = e.div.offsetTop;
    var i = (i = e.div.childNodes) && (i = i[0]) && i.getClientRects && i.getClientRects();
    e = e.div.getBoundingClientRect(), t = i ? Math.max(i[0] && i[0].height || 0, e.height / i.length) : 0;
  }
  this.left = e.left, this.right = e.right, this.top = e.top || o, this.height = e.height || n, this.bottom = e.bottom || o + (e.height || n), this.width = e.width || r, this.lineHeight = t !== void 0 ? t : e.lineHeight;
}
De.prototype.move = function(e, t) {
  switch (t = t !== void 0 ? t : this.lineHeight, e) {
    case "+x":
      this.left += t, this.right += t;
      break;
    case "-x":
      this.left -= t, this.right -= t;
      break;
    case "+y":
      this.top += t, this.bottom += t;
      break;
    case "-y":
      this.top -= t, this.bottom -= t;
      break;
  }
};
De.prototype.overlaps = function(e) {
  return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top;
};
De.prototype.overlapsAny = function(e) {
  for (var t = 0; t < e.length; t++)
    if (this.overlaps(e[t]))
      return !0;
  return !1;
};
De.prototype.within = function(e) {
  return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right;
};
De.prototype.overlapsOppositeAxis = function(e, t) {
  switch (t) {
    case "+x":
      return this.left < e.left;
    case "-x":
      return this.right > e.right;
    case "+y":
      return this.top < e.top;
    case "-y":
      return this.bottom > e.bottom;
  }
};
De.prototype.intersectPercentage = function(e) {
  var t = Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)), n = Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)), r = t * n;
  return r / (this.height * this.width);
};
De.prototype.toCSSCompatValues = function(e) {
  return {
    top: this.top - e.top,
    bottom: e.bottom - this.bottom,
    left: this.left - e.left,
    right: e.right - this.right,
    height: this.height,
    width: this.width
  };
};
De.getSimpleBoxPosition = function(e) {
  var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0, n = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0, r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
  e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e;
  var o = {
    left: e.left,
    right: e.right,
    top: e.top || r,
    height: e.height || t,
    bottom: e.bottom || r + (e.height || t),
    width: e.width || n
  };
  return o;
};
function lv(e, t, n, r) {
  function o(I, h) {
    for (var m, v = new De(I), N = 1, g = 0; g < h.length; g++) {
      for (; I.overlapsOppositeAxis(n, h[g]) || I.within(n) && I.overlapsAny(r); )
        I.move(h[g]);
      if (I.within(n))
        return I;
      var _ = I.intersectPercentage(n);
      N > _ && (m = new De(I), N = _), I = new De(v);
    }
    return m || v;
  }
  var i = new De(t), u = t.cue, f = iv(u), c = [];
  if (u.snapToLines) {
    var y;
    switch (u.vertical) {
      case "":
        c = ["+y", "-y"], y = "height";
        break;
      case "rl":
        c = ["+x", "-x"], y = "width";
        break;
      case "lr":
        c = ["-x", "+x"], y = "width";
        break;
    }
    var P = i.lineHeight, O = P * Math.round(f), k = n[y] + P, L = c[0];
    Math.abs(O) > k && (O = O < 0 ? -1 : 1, O *= Math.ceil(k / P) * P), f < 0 && (O += u.vertical === "" ? n.height : n.width, c = c.reverse()), i.move(L, O);
  } else {
    var D = i.lineHeight / n.height * 100;
    switch (u.lineAlign) {
      case "center":
        f -= D / 2;
        break;
      case "end":
        f -= D;
        break;
    }
    switch (u.vertical) {
      case "":
        t.applyStyles({
          top: t.formatStyle(f, "%")
        });
        break;
      case "rl":
        t.applyStyles({
          left: t.formatStyle(f, "%")
        });
        break;
      case "lr":
        t.applyStyles({
          right: t.formatStyle(f, "%")
        });
        break;
    }
    c = ["+y", "-x", "+x", "-y"], i = new De(t);
  }
  var A = o(i, c);
  t.move(A.toCSSCompatValues(n));
}
function Kn() {
}
Kn.StringDecoder = function() {
  return {
    decode: function(e) {
      if (!e)
        return "";
      if (typeof e != "string")
        throw new Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(e));
    }
  };
};
Kn.convertCueToDOMTree = function(e, t) {
  return !e || !t ? null : bp(e, t);
};
var uv = 0.05, av = "sans-serif", sv = "1.5%";
Kn.processCues = function(e, t, n) {
  if (!e || !t || !n)
    return null;
  for (; n.firstChild; )
    n.removeChild(n.firstChild);
  var r = e.document.createElement("div");
  r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = sv, n.appendChild(r);
  function o(P) {
    for (var O = 0; O < P.length; O++)
      if (P[O].hasBeenReset || !P[O].displayState)
        return !0;
    return !1;
  }
  if (!o(t)) {
    for (var i = 0; i < t.length; i++)
      r.appendChild(t[i].displayState);
    return;
  }
  var u = [], f = De.getSimpleBoxPosition(r), c = Math.round(f.height * uv * 100) / 100, y = {
    font: c + "px " + av
  };
  (function() {
    for (var P, O, k = 0; k < t.length; k++)
      O = t[k], P = new Jo(e, O, y), r.appendChild(P.div), lv(e, P, f, u), O.displayState = P.div, u.push(De.getSimpleBoxPosition(P));
  })();
};
Kn.Parser = function(e, t, n) {
  n || (n = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = [];
};
Kn.Parser.prototype = {
  // If the error is a ParsingError then report it to the consumer if
  // possible. If it's not a ParsingError then throw it like normal.
  reportOrThrowError: function(e) {
    if (e instanceof Fe)
      this.onparsingerror && this.onparsingerror(e);
    else
      throw e;
  },
  parse: function(e) {
    var t = this;
    e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
    function n() {
      for (var P = t.buffer, O = 0; O < P.length && P[O] !== "\r" && P[O] !== `
`; )
        ++O;
      var k = P.substr(0, O);
      return P[O] === "\r" && ++O, P[O] === `
` && ++O, t.buffer = P.substr(O), k;
    }
    function r(P) {
      var O = new kr();
      if (yr(P, function(L, D) {
        switch (L) {
          case "id":
            O.set(L, D);
            break;
          case "width":
            O.percent(L, D);
            break;
          case "lines":
            O.integer(L, D);
            break;
          case "regionanchor":
          case "viewportanchor":
            var A = D.split(",");
            if (A.length !== 2)
              break;
            var I = new kr();
            if (I.percent("x", A[0]), I.percent("y", A[1]), !I.has("x") || !I.has("y"))
              break;
            O.set(L + "X", I.get("x")), O.set(L + "Y", I.get("y"));
            break;
          case "scroll":
            O.alt(L, D, ["up"]);
            break;
        }
      }, /=/, /\s/), O.has("id")) {
        var k = new (t.vttjs.VTTRegion || t.window.VTTRegion)();
        k.width = O.get("width", 100), k.lines = O.get("lines", 3), k.regionAnchorX = O.get("regionanchorX", 0), k.regionAnchorY = O.get("regionanchorY", 100), k.viewportAnchorX = O.get("viewportanchorX", 0), k.viewportAnchorY = O.get("viewportanchorY", 100), k.scroll = O.get("scroll", ""), t.onregion && t.onregion(k), t.regionList.push({
          id: O.get("id"),
          region: k
        });
      }
    }
    function o(P) {
      var O = new kr();
      yr(P, function(k, L) {
        switch (k) {
          case "MPEGT":
            O.integer(k + "S", L);
            break;
          case "LOCA":
            O.set(k + "L", ia(L));
            break;
        }
      }, /[^\d]:/, /,/), t.ontimestampmap && t.ontimestampmap({
        MPEGTS: O.get("MPEGTS"),
        LOCAL: O.get("LOCAL")
      });
    }
    function i(P) {
      P.match(/X-TIMESTAMP-MAP/) ? yr(P, function(O, k) {
        switch (O) {
          case "X-TIMESTAMP-MAP":
            o(k);
            break;
        }
      }, /=/) : yr(P, function(O, k) {
        switch (O) {
          case "Region":
            r(k);
            break;
        }
      }, /:/);
    }
    try {
      var u;
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        u = n();
        var f = u.match(/^WEBVTT([ \t].*)?$/);
        if (!f || !f[0])
          throw new Fe(Fe.Errors.BadSignature);
        t.state = "HEADER";
      }
      for (var c = !1; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (c ? c = !1 : u = n(), t.state) {
          case "HEADER":
            /:/.test(u) ? i(u) : u || (t.state = "ID");
            continue;
          case "NOTE":
            u || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(u)) {
              t.state = "NOTE";
              break;
            }
            if (!u)
              continue;
            t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0, 0, "");
            try {
              t.cue.align = "center";
            } catch {
              t.cue.align = "middle";
            }
            if (t.state = "CUE", u.indexOf("-->") === -1) {
              t.cue.id = u;
              continue;
            }
          case "CUE":
            try {
              ev(u, t.cue, t.regionList);
            } catch (P) {
              t.reportOrThrowError(P), t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            var y = u.indexOf("-->") !== -1;
            if (!u || y && (c = !0)) {
              t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
              continue;
            }
            t.cue.text && (t.cue.text += `
`), t.cue.text += u.replace(/\u2028/g, `
`).replace(/u2029/g, `
`);
            continue;
          case "BADCUE":
            u || (t.state = "ID");
            continue;
        }
      }
    } catch (P) {
      t.reportOrThrowError(P), t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  },
  flush: function() {
    var e = this;
    try {
      if (e.buffer += e.decoder.decode(), (e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL")
        throw new Fe(Fe.Errors.BadSignature);
    } catch (t) {
      e.reportOrThrowError(t);
    }
    return e.onflush && e.onflush(), this;
  }
};
var cv = Kn, fv = "auto", pv = {
  "": 1,
  lr: 1,
  rl: 1
}, dv = {
  start: 1,
  center: 1,
  end: 1,
  left: 1,
  right: 1,
  auto: 1,
  "line-left": 1,
  "line-right": 1
};
function yv(e) {
  if (typeof e != "string")
    return !1;
  var t = pv[e.toLowerCase()];
  return t ? e.toLowerCase() : !1;
}
function al(e) {
  if (typeof e != "string")
    return !1;
  var t = dv[e.toLowerCase()];
  return t ? e.toLowerCase() : !1;
}
function Up(e, t, n) {
  this.hasBeenReset = !1;
  var r = "", o = !1, i = e, u = t, f = n, c = null, y = "", P = !0, O = "auto", k = "start", L = "auto", D = "auto", A = 100, I = "center";
  Object.defineProperties(this, {
    id: {
      enumerable: !0,
      get: function() {
        return r;
      },
      set: function(h) {
        r = "" + h;
      }
    },
    pauseOnExit: {
      enumerable: !0,
      get: function() {
        return o;
      },
      set: function(h) {
        o = !!h;
      }
    },
    startTime: {
      enumerable: !0,
      get: function() {
        return i;
      },
      set: function(h) {
        if (typeof h != "number")
          throw new TypeError("Start time must be set to a number.");
        i = h, this.hasBeenReset = !0;
      }
    },
    endTime: {
      enumerable: !0,
      get: function() {
        return u;
      },
      set: function(h) {
        if (typeof h != "number")
          throw new TypeError("End time must be set to a number.");
        u = h, this.hasBeenReset = !0;
      }
    },
    text: {
      enumerable: !0,
      get: function() {
        return f;
      },
      set: function(h) {
        f = "" + h, this.hasBeenReset = !0;
      }
    },
    region: {
      enumerable: !0,
      get: function() {
        return c;
      },
      set: function(h) {
        c = h, this.hasBeenReset = !0;
      }
    },
    vertical: {
      enumerable: !0,
      get: function() {
        return y;
      },
      set: function(h) {
        var m = yv(h);
        if (m === !1)
          throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
        y = m, this.hasBeenReset = !0;
      }
    },
    snapToLines: {
      enumerable: !0,
      get: function() {
        return P;
      },
      set: function(h) {
        P = !!h, this.hasBeenReset = !0;
      }
    },
    line: {
      enumerable: !0,
      get: function() {
        return O;
      },
      set: function(h) {
        if (typeof h != "number" && h !== fv)
          throw new SyntaxError("Line: an invalid number or illegal string was specified.");
        O = h, this.hasBeenReset = !0;
      }
    },
    lineAlign: {
      enumerable: !0,
      get: function() {
        return k;
      },
      set: function(h) {
        var m = al(h);
        m ? (k = m, this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.");
      }
    },
    position: {
      enumerable: !0,
      get: function() {
        return L;
      },
      set: function(h) {
        if (h < 0 || h > 100)
          throw new Error("Position must be between 0 and 100.");
        L = h, this.hasBeenReset = !0;
      }
    },
    positionAlign: {
      enumerable: !0,
      get: function() {
        return D;
      },
      set: function(h) {
        var m = al(h);
        m ? (D = m, this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.");
      }
    },
    size: {
      enumerable: !0,
      get: function() {
        return A;
      },
      set: function(h) {
        if (h < 0 || h > 100)
          throw new Error("Size must be between 0 and 100.");
        A = h, this.hasBeenReset = !0;
      }
    },
    align: {
      enumerable: !0,
      get: function() {
        return I;
      },
      set: function(h) {
        var m = al(h);
        if (!m)
          throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
        I = m, this.hasBeenReset = !0;
      }
    }
  }), this.displayState = void 0;
}
Up.prototype.getCueAsHTML = function() {
  return WebVTT.convertCueToDOMTree(window, this.text);
};
var hv = Up, mv = {
  "": !0,
  up: !0
};
function vv(e) {
  if (typeof e != "string")
    return !1;
  var t = mv[e.toLowerCase()];
  return t ? e.toLowerCase() : !1;
}
function lr(e) {
  return typeof e == "number" && e >= 0 && e <= 100;
}
function gv() {
  var e = 100, t = 3, n = 0, r = 100, o = 0, i = 100, u = "";
  Object.defineProperties(this, {
    width: {
      enumerable: !0,
      get: function() {
        return e;
      },
      set: function(f) {
        if (!lr(f))
          throw new Error("Width must be between 0 and 100.");
        e = f;
      }
    },
    lines: {
      enumerable: !0,
      get: function() {
        return t;
      },
      set: function(f) {
        if (typeof f != "number")
          throw new TypeError("Lines must be set to a number.");
        t = f;
      }
    },
    regionAnchorY: {
      enumerable: !0,
      get: function() {
        return r;
      },
      set: function(f) {
        if (!lr(f))
          throw new Error("RegionAnchorX must be between 0 and 100.");
        r = f;
      }
    },
    regionAnchorX: {
      enumerable: !0,
      get: function() {
        return n;
      },
      set: function(f) {
        if (!lr(f))
          throw new Error("RegionAnchorY must be between 0 and 100.");
        n = f;
      }
    },
    viewportAnchorY: {
      enumerable: !0,
      get: function() {
        return i;
      },
      set: function(f) {
        if (!lr(f))
          throw new Error("ViewportAnchorY must be between 0 and 100.");
        i = f;
      }
    },
    viewportAnchorX: {
      enumerable: !0,
      get: function() {
        return o;
      },
      set: function(f) {
        if (!lr(f))
          throw new Error("ViewportAnchorX must be between 0 and 100.");
        o = f;
      }
    },
    scroll: {
      enumerable: !0,
      get: function() {
        return u;
      },
      set: function(f) {
        var c = vv(f);
        c === !1 ? console.warn("Scroll: an invalid or illegal string was specified.") : u = c;
      }
    }
  });
}
var wv = gv, Et = Qm, fn = Ip.exports = {
  WebVTT: cv,
  VTTCue: hv,
  VTTRegion: wv
};
Et.vttjs = fn;
Et.WebVTT = fn.WebVTT;
var Pv = fn.VTTCue, _v = fn.VTTRegion, Sv = Et.VTTCue, Ov = Et.VTTRegion;
fn.shim = function() {
  Et.VTTCue = Pv, Et.VTTRegion = _v;
};
fn.restore = function() {
  Et.VTTCue = Sv, Et.VTTRegion = Ov;
};
Et.VTTCue || fn.shim();
var $s = Ip.exports;
const Ev = (e) => {
  const { textTracks: t, defaultTrack: n, playheadTime: r, onSeek: o } = e, i = K.useRef(), u = K.useRef(), [f, c] = K.useState(n), [y, P] = K.useState([]), [O, k] = K.useState(!1), [L, D] = K.useState(!1);
  K.useEffect(() => {
    (async () => {
      const m = t.find((p) => p.language == f).storage, N = await (await fetch(m)).text();
      let g = [];
      const _ = new $s.WebVTT.Parser(window, $s.WebVTT.StringDecoder());
      _.oncue = (p) => g.push(p), _.parse(N), _.flush(), P(g);
    })();
  }, [t, f]), K.useEffect(() => {
    if (!(i != null && i.current) || !(u != null && u.current))
      return;
    const h = (v) => {
      k(!v[0].isIntersecting);
    }, m = new IntersectionObserver(h, {
      root: u.current,
      threshold: 0.75
    });
    return m.observe(i.current), () => m.unobserve(i.current);
  }, [y]);
  let A = !1;
  const I = K.useCallback((h) => {
    h && u.current.scroll({
      top: h.offsetTop - 15,
      behavior: "smooth"
    });
  }, []);
  return L ? null : /* @__PURE__ */ H.createElement("div", { className: "player-sidebar" }, /* @__PURE__ */ H.createElement("div", { className: wt(
    "player-header",
    { scrolled: O }
  ) }, /* @__PURE__ */ H.createElement(
    "select",
    {
      value: f,
      onChange: (h) => c(h.target.value),
      "aria-label": Omeka.jsTranslate("Transcript language")
    },
    t.map((h) => /* @__PURE__ */ H.createElement(
      "option",
      {
        value: h.language,
        key: h.language
      },
      h["language-label"]
    ))
  ), /* @__PURE__ */ H.createElement(
    "button",
    {
      className: "player-close fas fa-times",
      "aria-label": Omeka.jsTranslate("Close transcript"),
      onClick: () => D(!0)
    }
  )), /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: u,
      className: "player-track-container"
    },
    /* @__PURE__ */ H.createElement(
      "div",
      {
        className: "player-track",
        lang: f
      },
      y.map((h, m) => {
        const v = h.startTime <= r && h.endTime >= r;
        let N;
        return m === 0 ? N = i : v && !A && (N = I), /* @__PURE__ */ H.createElement(
          "p",
          {
            ref: N,
            className: v ? "active" : "",
            onClick: () => o(h.startTime + 0.1),
            key: h.text
          },
          h.text
        );
      })
    )
  ));
}, kv = (e) => {
  const { playing: t, bigControl: n = !1, onPlayPause: r } = e;
  return /* @__PURE__ */ H.createElement(
    "button",
    {
      className: wt(
        "player-playpause",
        { "player-control-big": n },
        "fa",
        t ? "fa-pause" : "fa-play"
      ),
      "aria-label": Omeka.jsTranslate(t ? "Pause" : "Play"),
      onClick: r
    }
  );
}, Ks = (e) => {
  const { forwards: t = !0, onJump: n } = e;
  return /* @__PURE__ */ H.createElement(
    "button",
    {
      className: t ? "player-skip-forward" : "player-skip-backward",
      title: Omeka.jsTranslate(
        t ? "Skip forwards 15 seconds" : "Skip backwards 15 seconds"
      ),
      onClick: () => n(t ? 15 : -15)
    }
  );
}, Tv = (e) => {
  const { playheadTime: t, bufferTime: n, duration: r, timecodeLabel: o, onSeek: i } = e, u = Math.round(t / r * 100) + "%", [f, c] = K.useState("0px"), [y, P] = K.useState("0:00"), O = (L) => {
    const D = L.target.offsetWidth, A = D / 2, I = 7, h = (L.nativeEvent.offsetX - A) * I / A, v = Math.max(0, Math.min(1, (L.nativeEvent.offsetX + h) / D)) * r;
    c(L.nativeEvent.offsetX + "px"), P(k(v));
  }, k = (L) => {
    L = Math.round(L);
    const D = Math.floor(L / 3600), A = Math.floor(L % 3600 / 60), I = Math.round(L % 60);
    return [
      D,
      A > 9 ? A : D ? "0" + A : A || "0",
      I > 9 ? I : "0" + I
    ].filter(Boolean).join(":");
  };
  return /* @__PURE__ */ H.createElement(H.Fragment, null, o && /* @__PURE__ */ H.createElement(
    "span",
    {
      className: "player-timecode-label",
      "aria-hidden": "true"
    },
    k(t)
  ), /* @__PURE__ */ H.createElement("div", { className: "player-timecode-container" }, /* @__PURE__ */ H.createElement(
    "input",
    {
      className: "player-timecode",
      type: "range",
      min: "0",
      value: t,
      max: r,
      step: 0.1,
      "aria-label": Omeka.jsTranslate("Timecode"),
      "aria-valuetext": k(t),
      style: { "--value": u },
      onChange: (L) => i(L.target.value),
      onMouseMove: O
    }
  ), /* @__PURE__ */ H.createElement(
    "span",
    {
      className: "player-timecode-tooltip",
      "aria-hidden": "true",
      style: { "--mouseX": f }
    },
    y
  ), /* @__PURE__ */ H.createElement(
    "progress",
    {
      className: "player-buffer",
      value: n,
      max: r,
      "aria-hidden": "true"
    }
  )), /* @__PURE__ */ H.createElement(
    "span",
    {
      className: "player-duration",
      "aria-label": Omeka.jsTranslate("Duration")
    },
    k(r)
  ));
}, Rv = (e) => {
  const { volume: t, onVolume: n, muted: r, onMuteToggle: o } = e, i = Math.floor(t * 100) + "%", u = r ? "fa-volume-mute" : t == 0 ? "fa-volume-off" : t <= 0.5 ? "fa-volume-down" : "fa-volume-up";
  return /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(
    "button",
    {
      className: wt(
        "player-mute",
        "fa",
        u
      ),
      "aria-label": Omeka.jsTranslate(r ? "Unmute" : "Mute"),
      onClick: o
    }
  ), /* @__PURE__ */ H.createElement(
    "input",
    {
      className: "player-volume",
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: t,
      "aria-label": Omeka.jsTranslate("Volume"),
      "aria-valuetext": i,
      style: { "--value": i },
      onChange: (f) => n(f.target.value)
    }
  ));
}, Cv = (e) => {
  const { links: t, activeSource: n, onSourceChange: r } = e, [o, i] = K.useState(!1);
  return t.length <= 1 ? null : /* @__PURE__ */ H.createElement("div", { className: "player-settings-container" }, /* @__PURE__ */ H.createElement(
    "button",
    {
      className: wt(
        "player-settings",
        "fa",
        "fa-cog",
        { opened: o }
      ),
      "aria-label": Omeka.jsTranslate("Settings"),
      "aria-haspopup": "true",
      "aria-expanded": "false",
      onClick: () => i(!o)
    }
  ), o && /* @__PURE__ */ H.createElement("ul", { className: "player-settings-list", role: "menu" }, t.map((u) => /* @__PURE__ */ H.createElement("li", { key: u.link }, /* @__PURE__ */ H.createElement(
    "a",
    {
      className: wt(
        "radio",
        { checked: u == n }
      ),
      role: "menuitemradio",
      "aria-checked": u == n,
      onClick: () => r(u)
    },
    u.rendition == "adaptive" ? "Auto" : u.rendition
  )))));
}, xv = (e) => {
  const { containerRef: t, pipSupported: n, onPIPToggle: r } = e, o = document.fullscreenEnabled, [i, u] = K.useState(!1), f = () => {
    var y;
    i ? document.exitFullscreen() : (y = t.current) == null || y.requestFullscreen();
  }, c = (y) => {
    u(document.fullscreenElement !== null);
  };
  return K.useEffect(() => (document.addEventListener("fullscreenchange", c), () => {
    document.removeEventListener("fullscreenchange", c);
  }), []), /* @__PURE__ */ H.createElement(H.Fragment, null, n && /* @__PURE__ */ H.createElement(
    "button",
    {
      className: "player-pip fa fa-external-link-square-alt",
      "aria-label": Omeka.jsTranslate("Picture in picture"),
      onClick: r
    }
  ), o && /* @__PURE__ */ H.createElement(
    "button",
    {
      className: wt(
        "player-fullscreen",
        "fa",
        i ? "fa-compress" : "fa-expand"
      ),
      "aria-label": Omeka.jsTranslate(
        i ? "Exit fullscreen" : "Fullscreen"
      ),
      onClick: f
    }
  ));
}, Ys = (e) => {
  const { compact: t, children: n } = e;
  return t ? /* @__PURE__ */ H.createElement(H.Fragment, null, n) : /* @__PURE__ */ H.createElement("div", { className: "player-controlset" }, n);
};
const Lv = (e) => {
  const { type: t, links: n, textTracks: r, defaultTrack: o, poster: i, color: u, compactMode: f, hideTranscript: c } = e, y = t == "video", P = K.useRef(), O = K.useRef(), [k, L] = K.useState(n[0]), [D, A] = K.useState(!1), [I, h] = K.useState(1), [m, v] = K.useState(!1), [N, g] = K.useState(0), [_, p] = K.useState(0), [l, s] = K.useState(0), [a, d] = K.useState(!1), [E, T] = K.useState(
    Vs.canEnablePIP(n[0].link)
  ), S = K.useCallback(({ children: x }) => /* @__PURE__ */ H.createElement(H.Fragment, null, x), []), b = {
    forceVideo: y,
    forceAudio: !y,
    attributes: {
      playsInline: !0
    }
  }, z = (x) => {
    g(x.playedSeconds), p(x.loadedSeconds);
  }, M = (x) => {
    var C;
    return (C = P.current) == null ? void 0 : C.seekTo(x, "seconds");
  }, w = (x) => M(N + x);
  return /* @__PURE__ */ H.createElement(
    "div",
    {
      className: wt(
        "player-container",
        y ? "player-video" : "player-audio",
        { "player-compact": f }
      ),
      role: "region",
      "aria-label": Omeka.jsTranslate(y ? "Video player" : "Audio player"),
      style: { "--player-color": u }
    },
    /* @__PURE__ */ H.createElement(
      "div",
      {
        className: wt(
          "player-aspect",
          { paused: !D }
        ),
        ref: O
      },
      i && /* @__PURE__ */ H.createElement(
        "img",
        {
          className: wt(
            "player-poster",
            { front: !D && N === 0 }
          ),
          src: i,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ H.createElement(
        Vs,
        {
          ref: P,
          url: k.link,
          wrapper: S,
          config: b,
          playing: D,
          onPlay: () => A(!0),
          onPause: () => A(!1),
          volume: I,
          muted: m,
          onProgress: z,
          onSeek: (x) => g(x),
          onDuration: (x) => s(x),
          pip: a,
          onEnablePIP: () => T(!0),
          onDisablePIP: () => T(!1)
        }
      ),
      y && /* @__PURE__ */ H.createElement(
        "div",
        {
          className: "player-cellophane",
          onClick: () => A(!D)
        }
      ),
      /* @__PURE__ */ H.createElement("div", { className: "player-controls" }, /* @__PURE__ */ H.createElement(Ys, { compact: y }, !y && /* @__PURE__ */ H.createElement(
        Ks,
        {
          forwards: !1,
          onJump: w
        }
      ), /* @__PURE__ */ H.createElement(
        kv,
        {
          playing: D,
          onPlayPause: () => A(!D),
          bigControl: !y
        }
      ), !y && /* @__PURE__ */ H.createElement(
        Ks,
        {
          forwards: !0,
          onJump: w
        }
      )), /* @__PURE__ */ H.createElement(Ys, { compact: y }, /* @__PURE__ */ H.createElement(
        Tv,
        {
          playheadTime: N,
          bufferTime: _,
          duration: l,
          timecodeLabel: !y,
          onSeek: M
        }
      ), y && /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(
        Rv,
        {
          volume: I,
          onVolume: (x) => h(x),
          muted: m,
          onMuteToggle: () => v(!m)
        }
      ), /* @__PURE__ */ H.createElement(
        Cv,
        {
          links: n,
          activeSource: k,
          onSourceChange: (x) => L(x)
        }
      ), /* @__PURE__ */ H.createElement(
        xv,
        {
          containerRef: O,
          pipSupported: E,
          onPIPToggle: () => d(!a)
        }
      ))))
    ),
    !!(!c && r.length) && /* @__PURE__ */ H.createElement(
      Ev,
      {
        textTracks: r,
        defaultTrack: o,
        playheadTime: N,
        onSeek: M
      }
    )
  );
}, Dv = document.querySelectorAll(".player-root");
Dv.forEach((e) => {
  const t = sl.createRoot(e), n = JSON.parse(e.getAttribute("data-props"));
  e.removeAttribute("data-props"), t.render(
    /* @__PURE__ */ H.createElement(H.StrictMode, null, /* @__PURE__ */ H.createElement(Lv, { ...n }))
  );
});
//# sourceMappingURL=index.mjs.map
