var ni = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dv;
function Wd() {
  if (dv) return ze;
  dv = 1;
  var A = Symbol.for("react.transitional.element"), el = Symbol.for("react.fragment");
  function W(h, sl, vl) {
    var Sl = null;
    if (vl !== void 0 && (Sl = "" + vl), sl.key !== void 0 && (Sl = "" + sl.key), "key" in sl) {
      vl = {};
      for (var Tl in sl)
        Tl !== "key" && (vl[Tl] = sl[Tl]);
    } else vl = sl;
    return sl = vl.ref, {
      $$typeof: A,
      type: h,
      key: Sl,
      ref: sl !== void 0 ? sl : null,
      props: vl
    };
  }
  return ze.Fragment = el, ze.jsx = W, ze.jsxs = W, ze;
}
var ov;
function $d() {
  return ov || (ov = 1, ni.exports = Wd()), ni.exports;
}
var _l = $d();
const kd = ".react-widget-section{padding:16px;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:#fbdde0;box-shadow:inset 5px 0 #ed5564,0 1px 3px #0000001a,0 1px 2px #0000000f;color:#1e1e2e;box-sizing:border-box;max-width:480px;margin:24px 0 24px 24px}.country-list{list-style:none;margin:0;padding:0}.country-item{display:flex;align-items:center;gap:10px;padding:7px 0;list-style:none}.country-item+.country-item{border-top:1px solid rgba(0,0,0,.07)}.country-flag{width:36px;height:24px;object-fit:cover;object-position:center;flex-shrink:0;border-radius:3px;border:1px solid rgba(0,0,0,.08)}.country-details{display:flex;flex-direction:column;gap:2px;min-width:0}.country-name{font-size:.8125rem;font-weight:600;color:#1e1e2e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:1.3}.country-meta{font-size:.6875rem;color:#5a5a72;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.country-flag--skeleton{width:36px;height:24px;flex-shrink:0;border-radius:3px;background-color:#e5e7eb;animation:skeleton-pulse 1.4s ease-in-out infinite}.country-skeleton-line{height:10px;border-radius:3px;background:linear-gradient(90deg,#e5e7eb 25%,#f3f4f6,#e5e7eb 75%);background-size:200% 100%;animation:shimmer 1.4s infinite}.country-skeleton-line--name{width:55%;height:12px}.country-skeleton-line--meta{width:80%}.country-item--skeleton:nth-child(2) .country-flag--skeleton,.country-item--skeleton:nth-child(2) .country-skeleton-line{animation-delay:.1s}.country-item--skeleton:nth-child(3) .country-flag--skeleton,.country-item--skeleton:nth-child(3) .country-skeleton-line{animation-delay:.2s}.country-item--skeleton:nth-child(4) .country-flag--skeleton,.country-item--skeleton:nth-child(4) .country-skeleton-line{animation-delay:.3s}.country-item--skeleton:nth-child(5) .country-flag--skeleton,.country-item--skeleton:nth-child(5) .country-skeleton-line{animation-delay:.4s}@keyframes shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes skeleton-pulse{0%,to{background-color:#e5e7eb}50%{background-color:#d1d5db}}@media(prefers-reduced-motion:reduce){.country-flag--skeleton,.country-skeleton-line{animation:none;background:#e5e7eb}}.country-error{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:6px;background:#b91c1c14;border:1px solid rgba(185,28,28,.2);font-size:.8125rem;color:#b91c1c;line-height:1.4}.country-error p{margin:0}.widget-framework-header{margin:0 0 10px;font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#444458;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";
var fi = { exports: {} }, re = {}, ci = { exports: {} }, ii = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function Fd() {
  return hv || (hv = 1, (function(A) {
    function el(b, _) {
      var q = b.length;
      b.push(_);
      l: for (; 0 < q; ) {
        var ll = q - 1 >>> 1, nl = b[ll];
        if (0 < sl(nl, _))
          b[ll] = _, b[q] = nl, q = ll;
        else break l;
      }
    }
    function W(b) {
      return b.length === 0 ? null : b[0];
    }
    function h(b) {
      if (b.length === 0) return null;
      var _ = b[0], q = b.pop();
      if (q !== _) {
        b[0] = q;
        l: for (var ll = 0, nl = b.length, s = nl >>> 1; ll < s; ) {
          var E = 2 * (ll + 1) - 1, O = b[E], p = E + 1, Y = b[p];
          if (0 > sl(O, q))
            p < nl && 0 > sl(Y, O) ? (b[ll] = Y, b[p] = q, ll = p) : (b[ll] = O, b[E] = q, ll = E);
          else if (p < nl && 0 > sl(Y, q))
            b[ll] = Y, b[p] = q, ll = p;
          else break l;
        }
      }
      return _;
    }
    function sl(b, _) {
      var q = b.sortIndex - _.sortIndex;
      return q !== 0 ? q : b.id - _.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var vl = performance;
      A.unstable_now = function() {
        return vl.now();
      };
    } else {
      var Sl = Date, Tl = Sl.now();
      A.unstable_now = function() {
        return Sl.now() - Tl;
      };
    }
    var N = [], T = [], V = 1, U = null, F = 3, Wl = !1, jl = !1, Cl = !1, Dt = !1, $l = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
    function ft(b) {
      for (var _ = W(T); _ !== null; ) {
        if (_.callback === null) h(T);
        else if (_.startTime <= b)
          h(T), _.sortIndex = _.expirationTime, el(N, _);
        else break;
        _ = W(T);
      }
    }
    function Et(b) {
      if (Cl = !1, ft(b), !jl)
        if (W(N) !== null)
          jl = !0, Gl || (Gl = !0, Xl());
        else {
          var _ = W(T);
          _ !== null && St(Et, _.startTime - b);
        }
    }
    var Gl = !1, L = -1, xl = 5, Tt = -1;
    function Xu() {
      return Dt ? !0 : !(A.unstable_now() - Tt < xl);
    }
    function At() {
      if (Dt = !1, Gl) {
        var b = A.unstable_now();
        Tt = b;
        var _ = !0;
        try {
          l: {
            jl = !1, Cl && (Cl = !1, Wt(L), L = -1), Wl = !0;
            var q = F;
            try {
              t: {
                for (ft(b), U = W(N); U !== null && !(U.expirationTime > b && Xu()); ) {
                  var ll = U.callback;
                  if (typeof ll == "function") {
                    U.callback = null, F = U.priorityLevel;
                    var nl = ll(
                      U.expirationTime <= b
                    );
                    if (b = A.unstable_now(), typeof nl == "function") {
                      U.callback = nl, ft(b), _ = !0;
                      break t;
                    }
                    U === W(N) && h(N), ft(b);
                  } else h(N);
                  U = W(N);
                }
                if (U !== null) _ = !0;
                else {
                  var s = W(T);
                  s !== null && St(
                    Et,
                    s.startTime - b
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              U = null, F = q, Wl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Xl() : Gl = !1;
        }
      }
    }
    var Xl;
    if (typeof Rl == "function")
      Xl = function() {
        Rl(At);
      };
    else if (typeof MessageChannel < "u") {
      var ru = new MessageChannel(), Ut = ru.port2;
      ru.port1.onmessage = At, Xl = function() {
        Ut.postMessage(null);
      };
    } else
      Xl = function() {
        $l(At, 0);
      };
    function St(b, _) {
      L = $l(function() {
        b(A.unstable_now());
      }, _);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, A.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : xl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, A.unstable_next = function(b) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = F;
      }
      var q = F;
      F = _;
      try {
        return b();
      } finally {
        F = q;
      }
    }, A.unstable_requestPaint = function() {
      Dt = !0;
    }, A.unstable_runWithPriority = function(b, _) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var q = F;
      F = b;
      try {
        return _();
      } finally {
        F = q;
      }
    }, A.unstable_scheduleCallback = function(b, _, q) {
      var ll = A.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ll + q : ll) : q = ll, b) {
        case 1:
          var nl = -1;
          break;
        case 2:
          nl = 250;
          break;
        case 5:
          nl = 1073741823;
          break;
        case 4:
          nl = 1e4;
          break;
        default:
          nl = 5e3;
      }
      return nl = q + nl, b = {
        id: V++,
        callback: _,
        priorityLevel: b,
        startTime: q,
        expirationTime: nl,
        sortIndex: -1
      }, q > ll ? (b.sortIndex = q, el(T, b), W(N) === null && b === W(T) && (Cl ? (Wt(L), L = -1) : Cl = !0, St(Et, q - ll))) : (b.sortIndex = nl, el(N, b), jl || Wl || (jl = !0, Gl || (Gl = !0, Xl()))), b;
    }, A.unstable_shouldYield = Xu, A.unstable_wrapCallback = function(b) {
      var _ = F;
      return function() {
        var q = F;
        F = _;
        try {
          return b.apply(this, arguments);
        } finally {
          F = q;
        }
      };
    };
  })(ii)), ii;
}
var gv;
function Id() {
  return gv || (gv = 1, ci.exports = Fd()), ci.exports;
}
var yi = { exports: {} }, C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function Pd() {
  if (Sv) return C;
  Sv = 1;
  var A = Symbol.for("react.transitional.element"), el = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), sl = Symbol.for("react.profiler"), vl = Symbol.for("react.consumer"), Sl = Symbol.for("react.context"), Tl = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), F = Symbol.iterator;
  function Wl(s) {
    return s === null || typeof s != "object" ? null : (s = F && s[F] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var jl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Cl = Object.assign, Dt = {};
  function $l(s, E, O) {
    this.props = s, this.context = E, this.refs = Dt, this.updater = O || jl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(s, E) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, E, "setState");
  }, $l.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = $l.prototype;
  function Rl(s, E, O) {
    this.props = s, this.context = E, this.refs = Dt, this.updater = O || jl;
  }
  var ft = Rl.prototype = new Wt();
  ft.constructor = Rl, Cl(ft, $l.prototype), ft.isPureReactComponent = !0;
  var Et = Array.isArray;
  function Gl() {
  }
  var L = { H: null, A: null, T: null, S: null }, xl = Object.prototype.hasOwnProperty;
  function Tt(s, E, O) {
    var p = O.ref;
    return {
      $$typeof: A,
      type: s,
      key: E,
      ref: p !== void 0 ? p : null,
      props: O
    };
  }
  function Xu(s, E) {
    return Tt(s.type, E, s.props);
  }
  function At(s) {
    return typeof s == "object" && s !== null && s.$$typeof === A;
  }
  function Xl(s) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(O) {
      return E[O];
    });
  }
  var ru = /\/+/g;
  function Ut(s, E) {
    return typeof s == "object" && s !== null && s.key != null ? Xl("" + s.key) : E.toString(36);
  }
  function St(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Gl, Gl) : (s.status = "pending", s.then(
          function(E) {
            s.status === "pending" && (s.status = "fulfilled", s.value = E);
          },
          function(E) {
            s.status === "pending" && (s.status = "rejected", s.reason = E);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function b(s, E, O, p, Y) {
    var G = typeof s;
    (G === "undefined" || G === "boolean") && (s = null);
    var k = !1;
    if (s === null) k = !0;
    else
      switch (G) {
        case "bigint":
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case A:
            case el:
              k = !0;
              break;
            case V:
              return k = s._init, b(
                k(s._payload),
                E,
                O,
                p,
                Y
              );
          }
      }
    if (k)
      return Y = Y(s), k = p === "" ? "." + Ut(s, 0) : p, Et(Y) ? (O = "", k != null && (O = k.replace(ru, "$&/") + "/"), b(Y, E, O, "", function(Ma) {
        return Ma;
      })) : Y != null && (At(Y) && (Y = Xu(
        Y,
        O + (Y.key == null || s && s.key === Y.key ? "" : ("" + Y.key).replace(
          ru,
          "$&/"
        ) + "/") + k
      )), E.push(Y)), 1;
    k = 0;
    var Yl = p === "" ? "." : p + ":";
    if (Et(s))
      for (var ol = 0; ol < s.length; ol++)
        p = s[ol], G = Yl + Ut(p, ol), k += b(
          p,
          E,
          O,
          G,
          Y
        );
    else if (ol = Wl(s), typeof ol == "function")
      for (s = ol.call(s), ol = 0; !(p = s.next()).done; )
        p = p.value, G = Yl + Ut(p, ol++), k += b(
          p,
          E,
          O,
          G,
          Y
        );
    else if (G === "object") {
      if (typeof s.then == "function")
        return b(
          St(s),
          E,
          O,
          p,
          Y
        );
      throw E = String(s), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return k;
  }
  function _(s, E, O) {
    if (s == null) return s;
    var p = [], Y = 0;
    return b(s, p, "", "", function(G) {
      return E.call(O, G, Y++);
    }), p;
  }
  function q(s) {
    if (s._status === -1) {
      var E = s._result;
      E = E(), E.then(
        function(O) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = O);
        },
        function(O) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = O);
        }
      ), s._status === -1 && (s._status = 0, s._result = E);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var ll = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, nl = {
    map: _,
    forEach: function(s, E, O) {
      _(
        s,
        function() {
          E.apply(this, arguments);
        },
        O
      );
    },
    count: function(s) {
      var E = 0;
      return _(s, function() {
        E++;
      }), E;
    },
    toArray: function(s) {
      return _(s, function(E) {
        return E;
      }) || [];
    },
    only: function(s) {
      if (!At(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return C.Activity = U, C.Children = nl, C.Component = $l, C.Fragment = W, C.Profiler = sl, C.PureComponent = Rl, C.StrictMode = h, C.Suspense = N, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return L.H.useMemoCache(s);
    }
  }, C.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(s, E, O) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var p = Cl({}, s.props), Y = s.key;
    if (E != null)
      for (G in E.key !== void 0 && (Y = "" + E.key), E)
        !xl.call(E, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && E.ref === void 0 || (p[G] = E[G]);
    var G = arguments.length - 2;
    if (G === 1) p.children = O;
    else if (1 < G) {
      for (var k = Array(G), Yl = 0; Yl < G; Yl++)
        k[Yl] = arguments[Yl + 2];
      p.children = k;
    }
    return Tt(s.type, Y, p);
  }, C.createContext = function(s) {
    return s = {
      $$typeof: Sl,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: vl,
      _context: s
    }, s;
  }, C.createElement = function(s, E, O) {
    var p, Y = {}, G = null;
    if (E != null)
      for (p in E.key !== void 0 && (G = "" + E.key), E)
        xl.call(E, p) && p !== "key" && p !== "__self" && p !== "__source" && (Y[p] = E[p]);
    var k = arguments.length - 2;
    if (k === 1) Y.children = O;
    else if (1 < k) {
      for (var Yl = Array(k), ol = 0; ol < k; ol++)
        Yl[ol] = arguments[ol + 2];
      Y.children = Yl;
    }
    if (s && s.defaultProps)
      for (p in k = s.defaultProps, k)
        Y[p] === void 0 && (Y[p] = k[p]);
    return Tt(s, G, Y);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(s) {
    return { $$typeof: Tl, render: s };
  }, C.isValidElement = At, C.lazy = function(s) {
    return {
      $$typeof: V,
      _payload: { _status: -1, _result: s },
      _init: q
    };
  }, C.memo = function(s, E) {
    return {
      $$typeof: T,
      type: s,
      compare: E === void 0 ? null : E
    };
  }, C.startTransition = function(s) {
    var E = L.T, O = {};
    L.T = O;
    try {
      var p = s(), Y = L.S;
      Y !== null && Y(O, p), typeof p == "object" && p !== null && typeof p.then == "function" && p.then(Gl, ll);
    } catch (G) {
      ll(G);
    } finally {
      E !== null && O.types !== null && (E.types = O.types), L.T = E;
    }
  }, C.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, C.use = function(s) {
    return L.H.use(s);
  }, C.useActionState = function(s, E, O) {
    return L.H.useActionState(s, E, O);
  }, C.useCallback = function(s, E) {
    return L.H.useCallback(s, E);
  }, C.useContext = function(s) {
    return L.H.useContext(s);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(s, E) {
    return L.H.useDeferredValue(s, E);
  }, C.useEffect = function(s, E) {
    return L.H.useEffect(s, E);
  }, C.useEffectEvent = function(s) {
    return L.H.useEffectEvent(s);
  }, C.useId = function() {
    return L.H.useId();
  }, C.useImperativeHandle = function(s, E, O) {
    return L.H.useImperativeHandle(s, E, O);
  }, C.useInsertionEffect = function(s, E) {
    return L.H.useInsertionEffect(s, E);
  }, C.useLayoutEffect = function(s, E) {
    return L.H.useLayoutEffect(s, E);
  }, C.useMemo = function(s, E) {
    return L.H.useMemo(s, E);
  }, C.useOptimistic = function(s, E) {
    return L.H.useOptimistic(s, E);
  }, C.useReducer = function(s, E, O) {
    return L.H.useReducer(s, E, O);
  }, C.useRef = function(s) {
    return L.H.useRef(s);
  }, C.useState = function(s) {
    return L.H.useState(s);
  }, C.useSyncExternalStore = function(s, E, O) {
    return L.H.useSyncExternalStore(
      s,
      E,
      O
    );
  }, C.useTransition = function() {
    return L.H.useTransition();
  }, C.version = "19.2.5", C;
}
var bv;
function vi() {
  return bv || (bv = 1, yi.exports = Pd()), yi.exports;
}
var si = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zv;
function lo() {
  if (zv) return ql;
  zv = 1;
  var A = vi();
  function el(N) {
    var T = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++)
        T += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return "Minified React error #" + N + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function W() {
  }
  var h = {
    d: {
      f: W,
      r: function() {
        throw Error(el(522));
      },
      D: W,
      C: W,
      L: W,
      m: W,
      X: W,
      S: W,
      M: W
    },
    p: 0,
    findDOMNode: null
  }, sl = Symbol.for("react.portal");
  function vl(N, T, V) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: sl,
      key: U == null ? null : "" + U,
      children: N,
      containerInfo: T,
      implementation: V
    };
  }
  var Sl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Tl(N, T) {
    if (N === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, ql.createPortal = function(N, T) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(el(299));
    return vl(N, T, null, V);
  }, ql.flushSync = function(N) {
    var T = Sl.T, V = h.p;
    try {
      if (Sl.T = null, h.p = 2, N) return N();
    } finally {
      Sl.T = T, h.p = V, h.d.f();
    }
  }, ql.preconnect = function(N, T) {
    typeof N == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, h.d.C(N, T));
  }, ql.prefetchDNS = function(N) {
    typeof N == "string" && h.d.D(N);
  }, ql.preinit = function(N, T) {
    if (typeof N == "string" && T && typeof T.as == "string") {
      var V = T.as, U = Tl(V, T.crossOrigin), F = typeof T.integrity == "string" ? T.integrity : void 0, Wl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      V === "style" ? h.d.S(
        N,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: U,
          integrity: F,
          fetchPriority: Wl
        }
      ) : V === "script" && h.d.X(N, {
        crossOrigin: U,
        integrity: F,
        fetchPriority: Wl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, ql.preinitModule = function(N, T) {
    if (typeof N == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var V = Tl(
            T.as,
            T.crossOrigin
          );
          h.d.M(N, {
            crossOrigin: V,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && h.d.M(N);
  }, ql.preload = function(N, T) {
    if (typeof N == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var V = T.as, U = Tl(V, T.crossOrigin);
      h.d.L(N, V, {
        crossOrigin: U,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, ql.preloadModule = function(N, T) {
    if (typeof N == "string")
      if (T) {
        var V = Tl(T.as, T.crossOrigin);
        h.d.m(N, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: V,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else h.d.m(N);
  }, ql.requestFormReset = function(N) {
    h.d.r(N);
  }, ql.unstable_batchedUpdates = function(N, T) {
    return N(T);
  }, ql.useFormState = function(N, T, V) {
    return Sl.H.useFormState(N, T, V);
  }, ql.useFormStatus = function() {
    return Sl.H.useHostTransitionStatus();
  }, ql.version = "19.2.5", ql;
}
var rv;
function to() {
  if (rv) return si.exports;
  rv = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (el) {
        console.error(el);
      }
  }
  return A(), si.exports = lo(), si.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function uo() {
  if (Ev) return re;
  Ev = 1;
  var A = Id(), el = vi(), W = to();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function sl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function vl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function Sl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Tl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(l) {
    if (vl(l) !== l)
      throw Error(h(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = vl(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return N(e), l;
          if (n === a) return N(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function V(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = V(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign, F = Symbol.for("react.element"), Wl = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Cl = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), Rl = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), xl = Symbol.for("react.lazy"), Tt = Symbol.for("react.activity"), Xu = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ru = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ru ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case L:
          return t = l.displayName || null, t !== null ? t : Ut(l.type) || "Memo";
        case xl:
          t = l._payload, l = l._init;
          try {
            return Ut(l(t));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, b = el.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ll = [], nl = -1;
  function s(l) {
    return { current: l };
  }
  function E(l) {
    0 > nl || (l.current = ll[nl], ll[nl] = null, nl--);
  }
  function O(l, t) {
    nl++, ll[nl] = l.current, l.current = t;
  }
  var p = s(null), Y = s(null), G = s(null), k = s(null);
  function Yl(l, t) {
    switch (O(G, t), O(Y, l), O(p, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Bs(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Bs(t), l = js(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    E(p), O(p, l);
  }
  function ol() {
    E(p), E(Y), E(G);
  }
  function Ma(l) {
    l.memoizedState !== null && O(k, l);
    var t = p.current, u = js(t, l.type);
    t !== u && (O(Y, l), O(p, u));
  }
  function Ee(l) {
    Y.current === l && (E(p), E(Y)), k.current === l && (E(k), he._currentValue = q);
  }
  var Xn, mi;
  function Eu(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Xn = t && t[1] || "", mi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xn + l + mi;
  }
  var Qn = !1;
  function Zn(l, t) {
    if (!l || Qn) return "";
    Qn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var r = function() {
                throw Error();
              };
              if (Object.defineProperty(r.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(r, []);
                } catch (g) {
                  var o = g;
                }
                Reflect.construct(l, [], r);
              } else {
                try {
                  r.call();
                } catch (g) {
                  o = g;
                }
                l.call(r.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                o = g;
              }
              (r = l()) && typeof r.catch == "function" && r.catch(function() {
              });
            }
          } catch (g) {
            if (g && o && typeof g.stack == "string")
              return [g.stack, o.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === d.length)
          for (a = i.length - 1, e = d.length - 1; 1 <= a && 0 <= e && i[a] !== d[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== d[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== d[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Qn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Eu(u) : "";
  }
  function Ov(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Eu(l.type);
      case 16:
        return Eu("Lazy");
      case 13:
        return l.child !== t && t !== null ? Eu("Suspense Fallback") : Eu("Suspense");
      case 19:
        return Eu("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return Eu("Activity");
      default:
        return "";
    }
  }
  function di(l) {
    try {
      var t = "", u = null;
      do
        t += Ov(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = A.unstable_scheduleCallback, Kn = A.unstable_cancelCallback, Mv = A.unstable_shouldYield, pv = A.unstable_requestPaint, kl = A.unstable_now, Dv = A.unstable_getCurrentPriorityLevel, oi = A.unstable_ImmediatePriority, hi = A.unstable_UserBlockingPriority, Te = A.unstable_NormalPriority, Uv = A.unstable_LowPriority, gi = A.unstable_IdlePriority, Nv = A.log, Hv = A.unstable_setDisableYieldValue, pa = null, Fl = null;
  function $t(l) {
    if (typeof Nv == "function" && Hv(l), Fl && typeof Fl.setStrictMode == "function")
      try {
        Fl.setStrictMode(pa, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : Cv, Rv = Math.log, qv = Math.LN2;
  function Cv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Rv(l) / qv | 0) | 0;
  }
  var Ae = 256, _e = 262144, Oe = 4194304;
  function Tu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Me(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Tu(a) : (f &= c, f !== 0 ? e = Tu(f) : u || (u = c & ~l, u !== 0 && (e = Tu(u))))) : (c = a & ~n, c !== 0 ? e = Tu(c) : f !== 0 ? e = Tu(f) : u || (u = a & ~l, u !== 0 && (e = Tu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Da(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Yv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Si() {
    var l = Oe;
    return Oe <<= 1, (Oe & 62914560) === 0 && (Oe = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Bv(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - Il(u), r = 1 << S;
      c[S] = 0, i[S] = -1;
      var o = d[S];
      if (o !== null)
        for (d[S] = null, S = 0; S < o.length; S++) {
          var g = o[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~r;
    }
    a !== 0 && bi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function zi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Il(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function ri(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : wn(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ei() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fv(l.type));
  }
  function Ti(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var kt = Math.random().toString(36).slice(2), pl = "__reactFiber$" + kt, Ql = "__reactProps$" + kt, Qu = "__reactContainer$" + kt, $n = "__reactEvents$" + kt, jv = "__reactListeners$" + kt, Gv = "__reactHandles$" + kt, Ai = "__reactResources$" + kt, Na = "__reactMarker$" + kt;
  function kn(l) {
    delete l[pl], delete l[Ql], delete l[$n], delete l[jv], delete l[Gv];
  }
  function Zu(l) {
    var t = l[pl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Qu] || u[pl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Ls(l); l !== null; ) {
            if (u = l[pl]) return u;
            l = Ls(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Vu(l) {
    if (l = l[pl] || l[Qu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Lu(l) {
    var t = l[Ai];
    return t || (t = l[Ai] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ol(l) {
    l[Na] = !0;
  }
  var _i = /* @__PURE__ */ new Set(), Oi = {};
  function Au(l, t) {
    Ku(l, t), Ku(l + "Capture", t);
  }
  function Ku(l, t) {
    for (Oi[l] = t, l = 0; l < t.length; l++)
      _i.add(t[l]);
  }
  var xv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mi = {}, pi = {};
  function Xv(l) {
    return Vn.call(pi, l) ? !0 : Vn.call(Mi, l) ? !1 : xv.test(l) ? pi[l] = !0 : (Mi[l] = !0, !1);
  }
  function pe(l, t, u) {
    if (Xv(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function De(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Nt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Di(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qv(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Di(l) ? "checked" : "value";
      l._valueTracker = Qv(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Ui(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Di(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zv = /[\n"\\]/g;
  function it(l) {
    return l.replace(
      Zv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, ct(t)) : u != null ? Pn(l, f, ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Ni(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Fn(l);
        return;
      }
      u = u != null ? "" + ct(u) : "", t = t != null ? "" + ct(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Fn(l);
  }
  function Pn(l, t, u) {
    t === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Ju(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ct(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hi(l, t, u) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ct(u) : "";
  }
  function Ri(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (St(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), Fn(l);
  }
  function wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Vv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Vv.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Ci(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && qi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qi(l, n, t[n]);
  }
  function lf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Lv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Kv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return Kv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var tf = null;
  function uf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wu = null, $u = null;
  function Yi(l) {
    var t = Vu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Ql] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + it(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Ql] || null;
                if (!e) throw Error(h(90));
                In(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Ui(a);
          }
          break l;
        case "textarea":
          Hi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Ju(l, !!u.multiple, t, !1);
      }
    }
  }
  var af = !1;
  function Bi(l, t, u) {
    if (af) return l(t, u);
    af = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (af = !1, (Wu !== null || $u !== null) && (bn(), Wu && (t = Wu, l = $u, $u = Wu = null, Yi(t), l)))
        for (t = 0; t < l.length; t++) Yi(l[t]);
    }
  }
  function Ra(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Ql] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        h(231, t, typeof u)
      );
    return u;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = !1;
  if (Rt)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          ef = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      ef = !1;
    }
  var Ft = null, nf = null, He = null;
  function ji() {
    if (He) return He;
    var l, t = nf, u = t.length, a, e = "value" in Ft ? Ft.value : Ft.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return He = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Gi() {
    return !1;
  }
  function Zl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Gi, this.isPropagationStopped = Gi, this;
    }
    return U(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var _u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = Zl(_u), Ca = U({}, _u, { view: 0, detail: 0 }), Jv = Zl(Ca), ff, cf, Ya, Ye = U({}, Ca, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ya && (Ya && l.type === "mousemove" ? (ff = l.screenX - Ya.screenX, cf = l.screenY - Ya.screenY) : cf = ff = 0, Ya = l), ff);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cf;
    }
  }), xi = Zl(Ye), wv = U({}, Ye, { dataTransfer: 0 }), Wv = Zl(wv), $v = U({}, Ca, { relatedTarget: 0 }), yf = Zl($v), kv = U({}, _u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fv = Zl(kv), Iv = U({}, _u, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Pv = Zl(Iv), lm = U({}, _u, { data: 0 }), Xi = Zl(lm), tm = {
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
  }, um = {
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
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function em(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = am[l]) ? !!t[l] : !1;
  }
  function sf() {
    return em;
  }
  var nm = U({}, Ca, {
    key: function(l) {
      if (l.key) {
        var t = tm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? um[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), fm = Zl(nm), cm = U({}, Ye, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Qi = Zl(cm), im = U({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sf
  }), ym = Zl(im), sm = U({}, _u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vm = Zl(sm), mm = U({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dm = Zl(mm), om = U({}, _u, {
    newState: 0,
    oldState: 0
  }), hm = Zl(om), gm = [9, 13, 27, 32], vf = Rt && "CompositionEvent" in window, Ba = null;
  Rt && "documentMode" in document && (Ba = document.documentMode);
  var Sm = Rt && "TextEvent" in window && !Ba, Zi = Rt && (!vf || Ba && 8 < Ba && 11 >= Ba), Vi = " ", Li = !1;
  function Ki(l, t) {
    switch (l) {
      case "keyup":
        return gm.indexOf(t.keyCode) !== -1;
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
  function Ji(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function bm(l, t) {
    switch (l) {
      case "compositionend":
        return Ji(t);
      case "keypress":
        return t.which !== 32 ? null : (Li = !0, Vi);
      case "textInput":
        return l = t.data, l === Vi && Li ? null : l;
      default:
        return null;
    }
  }
  function zm(l, t) {
    if (ku)
      return l === "compositionend" || !vf && Ki(l, t) ? (l = ji(), He = nf = Ft = null, ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!rm[l.type] : t === "textarea";
  }
  function Wi(l, t, u, a) {
    Wu ? $u ? $u.push(a) : $u = [a] : Wu = a, t = On(t, "onChange"), 0 < t.length && (u = new Ce(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var ja = null, Ga = null;
  function Em(l) {
    Ns(l, 0);
  }
  function Be(l) {
    var t = Ha(l);
    if (Ui(t)) return l;
  }
  function $i(l, t) {
    if (l === "change") return t;
  }
  var ki = !1;
  if (Rt) {
    var mf;
    if (Rt) {
      var df = "oninput" in document;
      if (!df) {
        var Fi = document.createElement("div");
        Fi.setAttribute("oninput", "return;"), df = typeof Fi.oninput == "function";
      }
      mf = df;
    } else mf = !1;
    ki = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ii() {
    ja && (ja.detachEvent("onpropertychange", Pi), Ga = ja = null);
  }
  function Pi(l) {
    if (l.propertyName === "value" && Be(Ga)) {
      var t = [];
      Wi(
        t,
        Ga,
        l,
        uf(l)
      ), Bi(Em, t);
    }
  }
  function Tm(l, t, u) {
    l === "focusin" ? (Ii(), ja = t, Ga = u, ja.attachEvent("onpropertychange", Pi)) : l === "focusout" && Ii();
  }
  function Am(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Ga);
  }
  function _m(l, t) {
    if (l === "click") return Be(t);
  }
  function Om(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function Mm(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Mm;
  function xa(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Vn.call(t, e) || !Pl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function l0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function t0(l, t) {
    var u = l0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = l0(u);
    }
  }
  function u0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? u0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function a0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var pm = Rt && "documentMode" in document && 11 >= document.documentMode, Fu = null, hf = null, Xa = null, gf = !1;
  function e0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gf || Fu == null || Fu !== Ue(a) || (a = Fu, "selectionStart" in a && of(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Xa && xa(Xa, a) || (Xa = a, a = On(hf, "onSelect"), 0 < a.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Fu)));
  }
  function Ou(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Iu = {
    animationend: Ou("Animation", "AnimationEnd"),
    animationiteration: Ou("Animation", "AnimationIteration"),
    animationstart: Ou("Animation", "AnimationStart"),
    transitionrun: Ou("Transition", "TransitionRun"),
    transitionstart: Ou("Transition", "TransitionStart"),
    transitioncancel: Ou("Transition", "TransitionCancel"),
    transitionend: Ou("Transition", "TransitionEnd")
  }, Sf = {}, n0 = {};
  Rt && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete Iu.animationend.animation, delete Iu.animationiteration.animation, delete Iu.animationstart.animation), "TransitionEvent" in window || delete Iu.transitionend.transition);
  function Mu(l) {
    if (Sf[l]) return Sf[l];
    if (!Iu[l]) return l;
    var t = Iu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in n0)
        return Sf[l] = t[u];
    return l;
  }
  var f0 = Mu("animationend"), c0 = Mu("animationiteration"), i0 = Mu("animationstart"), Dm = Mu("transitionrun"), Um = Mu("transitionstart"), Nm = Mu("transitioncancel"), y0 = Mu("transitionend"), s0 = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bf.push("scrollEnd");
  function bt(l, t) {
    s0.set(l, t), Au(t, [l]);
  }
  var je = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, yt = [], Pu = 0, zf = 0;
  function Ge() {
    for (var l = Pu, t = zf = Pu = 0; t < l; ) {
      var u = yt[t];
      yt[t++] = null;
      var a = yt[t];
      yt[t++] = null;
      var e = yt[t];
      yt[t++] = null;
      var n = yt[t];
      if (yt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && v0(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    yt[Pu++] = l, yt[Pu++] = t, yt[Pu++] = u, yt[Pu++] = a, zf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function rf(l, t, u, a) {
    return xe(l, t, u, a), Xe(l);
  }
  function pu(l, t) {
    return xe(l, null, null, t), Xe(l);
  }
  function v0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Xe(l) {
    if (50 < ie)
      throw ie = 0, Uc = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var la = {};
  function Hm(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, u, a) {
    return new Hm(l, t, u, a);
  }
  function Ef(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var u = l.alternate;
    return u === null ? (u = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function m0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Qe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Ef(l) && (f = 1);
    else if (typeof l == "string")
      f = Bd(
        l,
        u,
        p.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Tt:
          return l = lt(31, u, t, e), l.elementType = Tt, l.lanes = n, l;
        case Cl:
          return Du(u.children, e, n, t);
        case Dt:
          f = 8, e |= 24;
          break;
        case $l:
          return l = lt(12, u, t, e | 2), l.elementType = $l, l.lanes = n, l;
        case Et:
          return l = lt(13, u, t, e), l.elementType = Et, l.lanes = n, l;
        case Gl:
          return l = lt(19, u, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Rl:
                f = 10;
                break l;
              case Wt:
                f = 9;
                break l;
              case ft:
                f = 11;
                break l;
              case L:
                f = 14;
                break l;
              case xl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = lt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Du(l, t, u, a) {
    return l = lt(7, l, a, t), l.lanes = u, l;
  }
  function Tf(l, t, u) {
    return l = lt(6, l, null, t), l.lanes = u, l;
  }
  function d0(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Af(l, t, u) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var o0 = /* @__PURE__ */ new WeakMap();
  function st(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = o0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: di(t)
      }, o0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: di(t)
    };
  }
  var ta = [], ua = 0, Ze = null, Qa = 0, vt = [], mt = 0, It = null, _t = 1, Ot = "";
  function Ct(l, t) {
    ta[ua++] = Qa, ta[ua++] = Ze, Ze = l, Qa = t;
  }
  function h0(l, t, u) {
    vt[mt++] = _t, vt[mt++] = Ot, vt[mt++] = It, It = l;
    var a = _t;
    l = Ot;
    var e = 32 - Il(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, _t = 1 << 32 - Il(t) + e | u << e | a, Ot = n + l;
    } else
      _t = 1 << n | u << e | a, Ot = l;
  }
  function _f(l) {
    l.return !== null && (Ct(l, 1), h0(l, 1, 0));
  }
  function Of(l) {
    for (; l === Ze; )
      Ze = ta[--ua], ta[ua] = null, Qa = ta[--ua], ta[ua] = null;
    for (; l === It; )
      It = vt[--mt], vt[mt] = null, Ot = vt[--mt], vt[mt] = null, _t = vt[--mt], vt[mt] = null;
  }
  function g0(l, t) {
    vt[mt++] = _t, vt[mt++] = Ot, vt[mt++] = It, _t = t.id, Ot = t.overflow, It = l;
  }
  var Dl = null, cl = null, K = !1, Pt = null, dt = !1, Mf = Error(h(519));
  function lu(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Za(st(t, l)), Mf;
  }
  function S0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[pl] = l, t[Ql] = a, u) {
      case "dialog":
        X("cancel", t), X("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        X("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < se.length; u++)
          X(se[u], t);
        break;
      case "source":
        X("error", t);
        break;
      case "img":
      case "image":
      case "link":
        X("error", t), X("load", t);
        break;
      case "details":
        X("toggle", t);
        break;
      case "input":
        X("invalid", t), Ni(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        X("invalid", t);
        break;
      case "textarea":
        X("invalid", t), Ri(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Cs(t.textContent, u) ? (a.popover != null && (X("beforetoggle", t), X("toggle", t)), a.onScroll != null && X("scroll", t), a.onScrollEnd != null && X("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || lu(l, !0);
  }
  function b0(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          dt = !1;
          return;
        case 27:
        case 3:
          dt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function aa(l) {
    if (l !== Dl) return !1;
    if (!K) return b0(l), K = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Lc(l.type, l.memoizedProps)), u = !u), u && cl && lu(l), b0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      cl = Vs(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      cl = Vs(l);
    } else
      t === 27 ? (t = cl, ou(l.type) ? (l = $c, $c = null, cl = l) : cl = t) : cl = Dl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Uu() {
    cl = Dl = null, K = !1;
  }
  function pf() {
    var l = Pt;
    return l !== null && (Jl === null ? Jl = l : Jl.push.apply(
      Jl,
      l
    ), Pt = null), l;
  }
  function Za(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Df = s(null), Nu = null, Yt = null;
  function tu(l, t, u) {
    O(Df, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
    l._currentValue = Df.current, E(Df);
  }
  function Uf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Nf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Uf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Uf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function ea(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Pl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === k.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Nf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Hu(l) {
    Nu = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return z0(Nu, l);
  }
  function Le(l, t) {
    return Nu === null && Hu(l), z0(l, t);
  }
  function z0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Yt === null) {
      if (l === null) throw Error(h(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return u;
  }
  var Rm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, qm = A.unstable_scheduleCallback, Cm = A.unstable_NormalPriority, bl = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hf() {
    return {
      controller: new Rm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && qm(Cm, function() {
      l.controller.abort();
    });
  }
  var La = null, Rf = 0, na = 0, fa = null;
  function Ym(l, t) {
    if (La === null) {
      var u = La = [];
      Rf = 0, na = Yc(), fa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Rf++, t.then(r0, r0), t;
  }
  function r0() {
    if (--Rf === 0 && La !== null) {
      fa !== null && (fa.status = "fulfilled");
      var l = La;
      La = null, na = 0, fa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Bm(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var E0 = b.S;
  b.S = function(l, t) {
    es = kl(), typeof t == "object" && t !== null && typeof t.then == "function" && Ym(l, t), E0 !== null && E0(l, t);
  };
  var Ru = s(null);
  function qf() {
    var l = Ru.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? O(Ru, Ru.current) : O(Ru, t.pool);
  }
  function T0() {
    var l = qf();
    return l === null ? null : { parent: bl._currentValue, pool: l };
  }
  var ca = Error(h(460)), Cf = Error(h(474)), Je = Error(h(542)), we = { then: function() {
  } };
  function A0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ht, Ht), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, M0(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, M0(l), l;
        }
        throw Cu = t, ca;
    }
  }
  function qu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Cu = u, ca) : u;
    }
  }
  var Cu = null;
  function O0() {
    if (Cu === null) throw Error(h(459));
    var l = Cu;
    return Cu = null, l;
  }
  function M0(l) {
    if (l === ca || l === Je)
      throw Error(h(483));
  }
  var ia = null, Ka = 0;
  function We(l) {
    var t = Ka;
    return Ka += 1, ia === null && (ia = []), _0(ia, l, t);
  }
  function Ja(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === F ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function p0(l) {
    function t(v, y) {
      if (l) {
        var m = v.deletions;
        m === null ? (v.deletions = [y], v.flags |= 16) : m.push(y);
      }
    }
    function u(v, y) {
      if (!l) return null;
      for (; y !== null; )
        t(v, y), y = y.sibling;
      return null;
    }
    function a(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function e(v, y) {
      return v = qt(v, y), v.index = 0, v.sibling = null, v;
    }
    function n(v, y, m) {
      return v.index = m, l ? (m = v.alternate, m !== null ? (m = m.index, m < y ? (v.flags |= 67108866, y) : m) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, y, m, z) {
      return y === null || y.tag !== 6 ? (y = Tf(m, v.mode, z), y.return = v, y) : (y = e(y, m), y.return = v, y);
    }
    function i(v, y, m, z) {
      var H = m.type;
      return H === Cl ? S(
        v,
        y,
        m.props.children,
        z,
        m.key
      ) : y !== null && (y.elementType === H || typeof H == "object" && H !== null && H.$$typeof === xl && qu(H) === y.type) ? (y = e(y, m.props), Ja(y, m), y.return = v, y) : (y = Qe(
        m.type,
        m.key,
        m.props,
        null,
        v.mode,
        z
      ), Ja(y, m), y.return = v, y);
    }
    function d(v, y, m, z) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== m.containerInfo || y.stateNode.implementation !== m.implementation ? (y = Af(m, v.mode, z), y.return = v, y) : (y = e(y, m.children || []), y.return = v, y);
    }
    function S(v, y, m, z, H) {
      return y === null || y.tag !== 7 ? (y = Du(
        m,
        v.mode,
        z,
        H
      ), y.return = v, y) : (y = e(y, m), y.return = v, y);
    }
    function r(v, y, m) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Tf(
          "" + y,
          v.mode,
          m
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Wl:
            return m = Qe(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              m
            ), Ja(m, y), m.return = v, m;
          case jl:
            return y = Af(
              y,
              v.mode,
              m
            ), y.return = v, y;
          case xl:
            return y = qu(y), r(v, y, m);
        }
        if (St(y) || Xl(y))
          return y = Du(
            y,
            v.mode,
            m,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return r(v, We(y), m);
        if (y.$$typeof === Rl)
          return r(
            v,
            Le(v, y),
            m
          );
        $e(v, y);
      }
      return null;
    }
    function o(v, y, m, z) {
      var H = y !== null ? y.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return H !== null ? null : c(v, y, "" + m, z);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            return m.key === H ? i(v, y, m, z) : null;
          case jl:
            return m.key === H ? d(v, y, m, z) : null;
          case xl:
            return m = qu(m), o(v, y, m, z);
        }
        if (St(m) || Xl(m))
          return H !== null ? null : S(v, y, m, z, null);
        if (typeof m.then == "function")
          return o(
            v,
            y,
            We(m),
            z
          );
        if (m.$$typeof === Rl)
          return o(
            v,
            y,
            Le(v, m),
            z
          );
        $e(v, m);
      }
      return null;
    }
    function g(v, y, m, z, H) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(m) || null, c(y, v, "" + z, H);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Wl:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, i(y, v, z, H);
          case jl:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, d(y, v, z, H);
          case xl:
            return z = qu(z), g(
              v,
              y,
              m,
              z,
              H
            );
        }
        if (St(z) || Xl(z))
          return v = v.get(m) || null, S(y, v, z, H, null);
        if (typeof z.then == "function")
          return g(
            v,
            y,
            m,
            We(z),
            H
          );
        if (z.$$typeof === Rl)
          return g(
            v,
            y,
            m,
            Le(y, z),
            H
          );
        $e(y, z);
      }
      return null;
    }
    function M(v, y, m, z) {
      for (var H = null, J = null, D = y, j = y = 0, Z = null; D !== null && j < m.length; j++) {
        D.index > j ? (Z = D, D = null) : Z = D.sibling;
        var w = o(
          v,
          D,
          m[j],
          z
        );
        if (w === null) {
          D === null && (D = Z);
          break;
        }
        l && D && w.alternate === null && t(v, D), y = n(w, y, j), J === null ? H = w : J.sibling = w, J = w, D = Z;
      }
      if (j === m.length)
        return u(v, D), K && Ct(v, j), H;
      if (D === null) {
        for (; j < m.length; j++)
          D = r(v, m[j], z), D !== null && (y = n(
            D,
            y,
            j
          ), J === null ? H = D : J.sibling = D, J = D);
        return K && Ct(v, j), H;
      }
      for (D = a(D); j < m.length; j++)
        Z = g(
          D,
          v,
          j,
          m[j],
          z
        ), Z !== null && (l && Z.alternate !== null && D.delete(
          Z.key === null ? j : Z.key
        ), y = n(
          Z,
          y,
          j
        ), J === null ? H = Z : J.sibling = Z, J = Z);
      return l && D.forEach(function(zu) {
        return t(v, zu);
      }), K && Ct(v, j), H;
    }
    function R(v, y, m, z) {
      if (m == null) throw Error(h(151));
      for (var H = null, J = null, D = y, j = y = 0, Z = null, w = m.next(); D !== null && !w.done; j++, w = m.next()) {
        D.index > j ? (Z = D, D = null) : Z = D.sibling;
        var zu = o(v, D, w.value, z);
        if (zu === null) {
          D === null && (D = Z);
          break;
        }
        l && D && zu.alternate === null && t(v, D), y = n(zu, y, j), J === null ? H = zu : J.sibling = zu, J = zu, D = Z;
      }
      if (w.done)
        return u(v, D), K && Ct(v, j), H;
      if (D === null) {
        for (; !w.done; j++, w = m.next())
          w = r(v, w.value, z), w !== null && (y = n(w, y, j), J === null ? H = w : J.sibling = w, J = w);
        return K && Ct(v, j), H;
      }
      for (D = a(D); !w.done; j++, w = m.next())
        w = g(D, v, j, w.value, z), w !== null && (l && w.alternate !== null && D.delete(w.key === null ? j : w.key), y = n(w, y, j), J === null ? H = w : J.sibling = w, J = w);
      return l && D.forEach(function(wd) {
        return t(v, wd);
      }), K && Ct(v, j), H;
    }
    function al(v, y, m, z) {
      if (typeof m == "object" && m !== null && m.type === Cl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            l: {
              for (var H = m.key; y !== null; ) {
                if (y.key === H) {
                  if (H = m.type, H === Cl) {
                    if (y.tag === 7) {
                      u(
                        v,
                        y.sibling
                      ), z = e(
                        y,
                        m.props.children
                      ), z.return = v, v = z;
                      break l;
                    }
                  } else if (y.elementType === H || typeof H == "object" && H !== null && H.$$typeof === xl && qu(H) === y.type) {
                    u(
                      v,
                      y.sibling
                    ), z = e(y, m.props), Ja(z, m), z.return = v, v = z;
                    break l;
                  }
                  u(v, y);
                  break;
                } else t(v, y);
                y = y.sibling;
              }
              m.type === Cl ? (z = Du(
                m.props.children,
                v.mode,
                z,
                m.key
              ), z.return = v, v = z) : (z = Qe(
                m.type,
                m.key,
                m.props,
                null,
                v.mode,
                z
              ), Ja(z, m), z.return = v, v = z);
            }
            return f(v);
          case jl:
            l: {
              for (H = m.key; y !== null; ) {
                if (y.key === H)
                  if (y.tag === 4 && y.stateNode.containerInfo === m.containerInfo && y.stateNode.implementation === m.implementation) {
                    u(
                      v,
                      y.sibling
                    ), z = e(y, m.children || []), z.return = v, v = z;
                    break l;
                  } else {
                    u(v, y);
                    break;
                  }
                else t(v, y);
                y = y.sibling;
              }
              z = Af(m, v.mode, z), z.return = v, v = z;
            }
            return f(v);
          case xl:
            return m = qu(m), al(
              v,
              y,
              m,
              z
            );
        }
        if (St(m))
          return M(
            v,
            y,
            m,
            z
          );
        if (Xl(m)) {
          if (H = Xl(m), typeof H != "function") throw Error(h(150));
          return m = H.call(m), R(
            v,
            y,
            m,
            z
          );
        }
        if (typeof m.then == "function")
          return al(
            v,
            y,
            We(m),
            z
          );
        if (m.$$typeof === Rl)
          return al(
            v,
            y,
            Le(v, m),
            z
          );
        $e(v, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, y !== null && y.tag === 6 ? (u(v, y.sibling), z = e(y, m), z.return = v, v = z) : (u(v, y), z = Tf(m, v.mode, z), z.return = v, v = z), f(v)) : u(v, y);
    }
    return function(v, y, m, z) {
      try {
        Ka = 0;
        var H = al(
          v,
          y,
          m,
          z
        );
        return ia = null, H;
      } catch (D) {
        if (D === ca || D === Je) throw D;
        var J = lt(29, D, null, v.mode);
        return J.lanes = z, J.return = v, J;
      } finally {
      }
    };
  }
  var Yu = p0(!0), D0 = p0(!1), uu = !1;
  function Yf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function au(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function eu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, ($ & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Xe(l), v0(l, null, u), t;
    }
    return xe(l, a, t, u), Xe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  function jf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Gf = !1;
  function Wa() {
    if (Gf) {
      var l = fa;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    Gf = !1;
    var e = l.updateQueue;
    uu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = d : c.next = d, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var r = e.baseState;
      f = 0, S = d = i = null, c = n;
      do {
        var o = c.lane & -536870913, g = o !== c.lane;
        if (g ? (Q & o) === o : (a & o) === o) {
          o !== 0 && o === na && (Gf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, R = c;
            o = t;
            var al = u;
            switch (R.tag) {
              case 1:
                if (M = R.payload, typeof M == "function") {
                  r = M.call(al, r, o);
                  break l;
                }
                r = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = R.payload, o = typeof M == "function" ? M.call(al, r, o) : M, o == null) break l;
                r = U({}, r, o);
                break l;
              case 2:
                uu = !0;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [o] : g.push(o));
        } else
          g = {
            lane: o,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (d = S = g, i = r) : S = S.next = g, f |= o;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = r), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), yu |= f, l.lanes = f, l.memoizedState = r;
    }
  }
  function U0(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function N0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        U0(u[l], t);
  }
  var ya = s(null), ke = s(0);
  function H0(l, t) {
    l = Kt, O(ke, l), O(ya, t), Kt = l | t.baseLanes;
  }
  function xf() {
    O(ke, Kt), O(ya, ya.current);
  }
  function Xf() {
    Kt = ke.current, E(ya), E(ke);
  }
  var tt = s(null), ot = null;
  function nu(l) {
    var t = l.alternate;
    O(hl, hl.current & 1), O(tt, l), ot === null && (t === null || ya.current !== null || t.memoizedState !== null) && (ot = l);
  }
  function Qf(l) {
    O(hl, hl.current), O(tt, l), ot === null && (ot = l);
  }
  function R0(l) {
    l.tag === 22 ? (O(hl, hl.current), O(tt, l), ot === null && (ot = l)) : fu();
  }
  function fu() {
    O(hl, hl.current), O(tt, tt.current);
  }
  function ut(l) {
    E(tt), ot === l && (ot = null), E(hl);
  }
  var hl = s(0);
  function Fe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || wc(u) || Wc(u)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var jt = 0, B = null, tl = null, zl = null, Ie = !1, sa = !1, Bu = !1, Pe = 0, ka = 0, va = null, jm = 0;
  function ml() {
    throw Error(h(321));
  }
  function Zf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Pl(l[u], t[u])) return !1;
    return !0;
  }
  function Vf(l, t, u, a, e, n) {
    return jt = n, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? hy : ec, Bu = !1, n = u(a, e), Bu = !1, sa && (n = C0(
      t,
      u,
      a,
      e
    )), q0(l), n;
  }
  function q0(l) {
    b.H = Pa;
    var t = tl !== null && tl.next !== null;
    if (jt = 0, zl = tl = B = null, Ie = !1, ka = 0, va = null, t) throw Error(h(300));
    l === null || rl || (l = l.dependencies, l !== null && Ve(l) && (rl = !0));
  }
  function C0(l, t, u, a) {
    B = l;
    var e = 0;
    do {
      if (sa && (va = null), ka = 0, sa = !1, 25 <= e) throw Error(h(301));
      if (e += 1, zl = tl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = gy, n = t(u, a);
    } while (sa);
    return n;
  }
  function Gm() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fa(t) : t, l = l.useState()[0], (tl !== null ? tl.memoizedState : null) !== l && (B.flags |= 1024), t;
  }
  function Lf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Kf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Jf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    jt = 0, zl = tl = B = null, sa = !1, ka = Pe = 0, va = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zl === null ? B.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function gl() {
    if (tl === null) {
      var l = B.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = tl.next;
    var t = zl === null ? B.memoizedState : zl.next;
    if (t !== null)
      zl = t, tl = l;
    else {
      if (l === null)
        throw B.alternate === null ? Error(h(467)) : Error(h(310));
      tl = l, l = {
        memoizedState: tl.memoizedState,
        baseState: tl.baseState,
        baseQueue: tl.baseQueue,
        queue: tl.queue,
        next: null
      }, zl === null ? B.memoizedState = zl = l : zl = zl.next = l;
    }
    return zl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(l) {
    var t = ka;
    return ka += 1, va === null && (va = []), l = _0(va, l, t), t = B, (zl === null ? t.memoizedState : zl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? hy : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fa(l);
      if (l.$$typeof === Rl) return Ul(l);
    }
    throw Error(h(438, String(l)));
  }
  function wf(l) {
    var t = null, u = B.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = B.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = ln(), B.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Xu;
    return t.index++, u;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = gl();
    return Wf(t, tl, l);
  }
  function Wf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, d = t, S = !1;
      do {
        var r = d.lane & -536870913;
        if (r !== d.lane ? (Q & r) === r : (jt & r) === r) {
          var o = d.revertLane;
          if (o === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), r === na && (S = !0);
          else if ((jt & o) === o) {
            d = d.next, o === na && (S = !0);
            continue;
          } else
            r = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = r, f = n) : i = i.next = r, B.lanes |= o, yu |= o;
          r = d.action, Bu && u(n, r), n = d.hasEagerState ? d.eagerState : u(n, r);
        } else
          o = {
            lane: r,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = o, f = n) : i = i.next = o, B.lanes |= r, yu |= r;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !Pl(n, l.memoizedState) && (rl = !0, S && (u = fa, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function $f(l) {
    var t = gl(), u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Pl(n, t.memoizedState) || (rl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Y0(l, t, u) {
    var a = B, e = gl(), n = K;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !Pl(
      (tl || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, rl = !0), e = e.queue, If(G0.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || zl !== null && zl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ma(
        9,
        { destroy: void 0 },
        j0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), fl === null) throw Error(h(349));
      n || (jt & 127) !== 0 || B0(a, t, u);
    }
    return u;
  }
  function B0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = B.updateQueue, t === null ? (t = ln(), B.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function j0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, x0(t) && X0(l);
  }
  function G0(l, t, u) {
    return u(function() {
      x0(t) && X0(l);
    });
  }
  function x0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Pl(l, u);
    } catch {
      return !0;
    }
  }
  function X0(l) {
    var t = pu(l, 2);
    t !== null && wl(t, l, 2);
  }
  function kf(l) {
    var t = Bl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Bu) {
        $t(!0);
        try {
          u();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function Q0(l, t, u, a) {
    return l.baseState = u, Wf(
      l,
      tl,
      typeof a == "function" ? a : Gt
    );
  }
  function xm(l, t, u, a, e) {
    if (nn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Z0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Z0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), V0(l, t, c);
      } catch (d) {
        Ff(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), V0(l, t, n);
      } catch (d) {
        Ff(l, t, d);
      }
  }
  function V0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        L0(l, t, a);
      },
      function(a) {
        return Ff(l, t, a);
      }
    ) : L0(l, t, u);
  }
  function L0(l, t, u) {
    t.status = "fulfilled", t.value = u, K0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Z0(l, u)));
  }
  function Ff(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, K0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function K0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function J0(l, t) {
    return t;
  }
  function w0(l, t) {
    if (K) {
      var u = fl.formState;
      if (u !== null) {
        l: {
          var a = B;
          if (K) {
            if (cl) {
              t: {
                for (var e = cl, n = dt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                cl = ht(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            lu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Bl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: J0,
      lastRenderedState: t
    }, u.queue = a, u = my.bind(
      null,
      B,
      a
    ), a.dispatch = u, a = kf(!1), n = ac.bind(
      null,
      B,
      !1,
      a.queue
    ), a = Bl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = xm.bind(
      null,
      B,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function W0(l) {
    var t = gl();
    return $0(t, tl, l);
  }
  function $0(l, t, u) {
    if (t = Wf(
      l,
      t,
      J0
    )[0], l = un(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Fa(t);
      } catch (f) {
        throw f === ca ? Je : f;
      }
    else a = t;
    t = gl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (B.flags |= 2048, ma(
      9,
      { destroy: void 0 },
      Xm.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Xm(l, t) {
    l.action = t;
  }
  function k0(l) {
    var t = gl(), u = tl;
    if (u !== null)
      return $0(t, u, l);
    gl(), t = t.memoizedState, u = gl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ma(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = B.updateQueue, t === null && (t = ln(), B.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function F0() {
    return gl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = Bl();
    B.flags |= l, e.memoizedState = ma(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = gl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    tl !== null && a !== null && Zf(a, tl.memoizedState.deps) ? e.memoizedState = ma(t, n, u, a) : (B.flags |= l, e.memoizedState = ma(
      1 | t,
      n,
      u,
      a
    ));
  }
  function I0(l, t) {
    an(8390656, 8, l, t);
  }
  function If(l, t) {
    en(2048, 8, l, t);
  }
  function Qm(l) {
    B.flags |= 4;
    var t = B.updateQueue;
    if (t === null)
      t = ln(), B.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function P0(l) {
    var t = gl().memoizedState;
    return Qm({ ref: t, nextImpl: l }), function() {
      if (($ & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ly(l, t) {
    return en(4, 2, l, t);
  }
  function ty(l, t) {
    return en(4, 4, l, t);
  }
  function uy(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function ay(l, t, u) {
    u = u != null ? u.concat([l]) : null, en(4, 4, uy.bind(null, t, l), u);
  }
  function Pf() {
  }
  function ey(l, t) {
    var u = gl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Zf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ny(l, t) {
    var u = gl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Zf(t, a[1]))
      return a[0];
    if (a = l(), Bu) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function lc(l, t, u) {
    return u === void 0 || (jt & 1073741824) !== 0 && (Q & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = fs(), B.lanes |= l, yu |= l, u);
  }
  function fy(l, t, u, a) {
    return Pl(u, t) ? u : ya.current !== null ? (l = lc(l, u, a), Pl(l, t) || (rl = !0), l) : (jt & 42) === 0 || (jt & 1073741824) !== 0 && (Q & 261930) === 0 ? (rl = !0, l.memoizedState = u) : (l = fs(), B.lanes |= l, yu |= l, t);
  }
  function cy(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, ac(l, !1, t, u);
    try {
      var i = e(), d = b.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = Bm(
          i,
          a
        );
        Ia(
          l,
          t,
          S,
          nt(l)
        );
      } else
        Ia(
          l,
          t,
          a,
          nt(l)
        );
    } catch (r) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: r },
        nt()
      );
    } finally {
      _.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function Zm() {
  }
  function tc(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = iy(l).queue;
    cy(
      l,
      e,
      t,
      q,
      u === null ? Zm : function() {
        return yy(l), u(a);
      }
    );
  }
  function iy(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: q
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function yy(l) {
    var t = iy(l);
    t.next === null && (t = l.alternate.memoizedState), Ia(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function uc() {
    return Ul(he);
  }
  function sy() {
    return gl().memoizedState;
  }
  function vy() {
    return gl().memoizedState;
  }
  function Vm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = au(u);
          var a = eu(t, l, u);
          a !== null && (wl(a, t, u), wa(a, t, u)), t = { cache: Hf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Lm(l, t, u) {
    var a = nt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? dy(t, u) : (u = rf(l, t, u, a), u !== null && (wl(u, l, a), oy(u, t, a)));
  }
  function my(l, t, u) {
    var a = nt();
    Ia(l, t, u, a);
  }
  function Ia(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) dy(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Pl(c, f))
            return xe(l, t, e, 0), fl === null && Ge(), !1;
        } catch {
        } finally {
        }
      if (u = rf(l, t, e, a), u !== null)
        return wl(u, l, a), oy(u, t, a), !0;
    }
    return !1;
  }
  function ac(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Yc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(h(479));
    } else
      t = rf(
        l,
        u,
        a,
        2
      ), t !== null && wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === B || t !== null && t === B;
  }
  function dy(l, t) {
    sa = Ie = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function oy(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  var Pa = {
    readContext: Ul,
    use: tn,
    useCallback: ml,
    useContext: ml,
    useEffect: ml,
    useImperativeHandle: ml,
    useLayoutEffect: ml,
    useInsertionEffect: ml,
    useMemo: ml,
    useReducer: ml,
    useRef: ml,
    useState: ml,
    useDebugValue: ml,
    useDeferredValue: ml,
    useTransition: ml,
    useSyncExternalStore: ml,
    useId: ml,
    useHostTransitionStatus: ml,
    useFormState: ml,
    useActionState: ml,
    useOptimistic: ml,
    useMemoCache: ml,
    useCacheRefresh: ml
  };
  Pa.useEffectEvent = ml;
  var hy = {
    readContext: Ul,
    use: tn,
    useCallback: function(l, t) {
      return Bl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ul,
    useEffect: I0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, an(
        4194308,
        4,
        uy.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return an(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      an(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Bl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Bu) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Bl();
      if (u !== void 0) {
        var e = u(t);
        if (Bu) {
          $t(!0);
          try {
            u(t);
          } finally {
            $t(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Lm.bind(
        null,
        B,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, u = my.bind(null, B, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = Bl();
      return lc(u, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = cy.bind(
        null,
        B,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = B, e = Bl();
      if (K) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), fl === null)
          throw Error(h(349));
        (Q & 127) !== 0 || B0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, I0(G0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ma(
        9,
        { destroy: void 0 },
        j0.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Bl(), t = fl.identifierPrefix;
      if (K) {
        var u = Ot, a = _t;
        u = (a & ~(1 << 32 - Il(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = jm++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: uc,
    useFormState: w0,
    useActionState: w0,
    useOptimistic: function(l) {
      var t = Bl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ac.bind(
        null,
        B,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: wf,
    useCacheRefresh: function() {
      return Bl().memoizedState = Vm.bind(
        null,
        B
      );
    },
    useEffectEvent: function(l) {
      var t = Bl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if (($ & 2) !== 0)
          throw Error(h(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: Ul,
    use: tn,
    useCallback: ey,
    useContext: Ul,
    useEffect: If,
    useImperativeHandle: ay,
    useInsertionEffect: ly,
    useLayoutEffect: ty,
    useMemo: ny,
    useReducer: un,
    useRef: F0,
    useState: function() {
      return un(Gt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = gl();
      return fy(
        u,
        tl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(Gt)[0], t = gl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fa(l),
        t
      ];
    },
    useSyncExternalStore: Y0,
    useId: sy,
    useHostTransitionStatus: uc,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l, t) {
      var u = gl();
      return Q0(u, tl, l, t);
    },
    useMemoCache: wf,
    useCacheRefresh: vy
  };
  ec.useEffectEvent = P0;
  var gy = {
    readContext: Ul,
    use: tn,
    useCallback: ey,
    useContext: Ul,
    useEffect: If,
    useImperativeHandle: ay,
    useInsertionEffect: ly,
    useLayoutEffect: ty,
    useMemo: ny,
    useReducer: $f,
    useRef: F0,
    useState: function() {
      return $f(Gt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = gl();
      return tl === null ? lc(u, l, t) : fy(
        u,
        tl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $f(Gt)[0], t = gl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fa(l),
        t
      ];
    },
    useSyncExternalStore: Y0,
    useId: sy,
    useHostTransitionStatus: uc,
    useFormState: k0,
    useActionState: k0,
    useOptimistic: function(l, t) {
      var u = gl();
      return tl !== null ? Q0(u, tl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: wf,
    useCacheRefresh: vy
  };
  gy.useEffectEvent = P0;
  function nc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : U({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var fc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = au(a);
      e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (wl(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = au(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (wl(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = nt(), a = au(u);
      a.tag = 2, t != null && (a.callback = t), t = eu(l, a, u), t !== null && (wl(t, l, u), wa(t, l, u));
    }
  };
  function Sy(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !xa(u, a) || !xa(e, n) : !0;
  }
  function by(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && fc.enqueueReplaceState(t, t.state, null);
  }
  function ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = U({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function zy(l) {
    je(l);
  }
  function ry(l) {
    console.error(l);
  }
  function Ey(l) {
    je(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ty(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function cc(l, t, u) {
    return u = au(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      fn(l, t);
    }, u;
  }
  function Ay(l) {
    return l = au(l), l.tag = 3, l;
  }
  function _y(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Ty(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Ty(t, u, a), typeof e != "function" && (su === null ? su = /* @__PURE__ */ new Set([this]) : su.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Km(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && ea(
        t,
        u,
        e,
        !0
      ), u = tt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return ot === null ? zn() : u.alternate === null && dl === 0 && (dl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Rc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Rc(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return Rc(l, a, e), zn(), !1;
    }
    if (K)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Mf && (l = Error(h(422), { cause: a }), Za(st(l, u)))) : (a !== Mf && (t = Error(h(423), {
        cause: a
      }), Za(
        st(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = st(a, u), e = cc(
        l.stateNode,
        a,
        e
      ), jf(l, e), dl !== 4 && (dl = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = st(n, u), ce === null ? ce = [n] : ce.push(n), dl !== 4 && (dl = 2), t === null) return !0;
    a = st(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = cc(u.stateNode, a, l), jf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (su === null || !su.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Ay(e), _y(
              e,
              l,
              u,
              a
            ), jf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ic = Error(h(461)), rl = !1;
  function Nl(l, t, u, a) {
    t.child = l === null ? D0(t, null, u, a) : Yu(
      t,
      l.child,
      u,
      a
    );
  }
  function Oy(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Hu(t), a = Vf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Lf(), l !== null && !rl ? (Kf(l, t, e), xt(l, t, e)) : (K && c && _f(t), t.flags |= 1, Nl(l, t, a, e), t.child);
  }
  function My(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ef(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, py(
        l,
        t,
        n,
        a,
        e
      )) : (l = Qe(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : xa, u(f, a) && l.ref === t.ref)
        return xt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function py(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (xa(n, a) && l.ref === t.ref)
        if (rl = !1, t.pendingProps = a = n, gc(l, e))
          (l.flags & 131072) !== 0 && (rl = !0);
        else
          return t.lanes = l.lanes, xt(l, t, e);
    }
    return yc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function Dy(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return Uy(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? H0(t, n) : xf(), R0(t);
      else
        return a = t.lanes = 536870912, Uy(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), H0(t, n), fu(), t.memoizedState = null) : (l !== null && Ke(t, null), xf(), fu());
    return Nl(l, t, e, u), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Uy(l, t, u, a, e) {
    var n = qf();
    return n = n === null ? null : { parent: bl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), xf(), R0(t), l !== null && ea(l, t, a, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = sn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ny(l, t, u) {
    return Yu(t, l.child, null, u), l = cn(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function Jm(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (Qf(t), (l = cl) ? (l = Zs(
          l,
          dt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: Ot } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = d0(l), u.return = t, t.child = u, Dl = t, cl = null)) : l = null, l === null) throw lu(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Qf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Ny(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (rl || ea(l, t, u, !1), e = (u & l.childLanes) !== 0, rl || e) {
        if (a = fl, a !== null && (f = ri(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, pu(l, f), wl(a, l, f), ic;
        zn(), t = Ny(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, cl = ht(f.nextSibling), Dl = t, K = !0, Pt = null, dt = !1, l !== null && g0(t, l), t = cn(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function yn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function yc(l, t, u, a, e) {
    return Hu(t), u = Vf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Lf(), l !== null && !rl ? (Kf(l, t, e), xt(l, t, e)) : (K && a && _f(t), t.flags |= 1, Nl(l, t, u, e), t.child);
  }
  function Hy(l, t, u, a, e, n) {
    return Hu(t), t.updateQueue = null, u = C0(
      t,
      a,
      u,
      e
    ), q0(l), a = Lf(), l !== null && !rl ? (Kf(l, t, n), xt(l, t, n)) : (K && a && _f(t), t.flags |= 1, Nl(l, t, u, n), t.child);
  }
  function Ry(l, t, u, a, e) {
    if (Hu(t), t.stateNode === null) {
      var n = la, f = u.contextType;
      typeof f == "object" && f !== null && (n = Ul(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Yf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Ul(f) : la, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (nc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fc.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = ju(u, c);
      n.props = i;
      var d = n.context, S = u.contextType;
      f = la, typeof S == "object" && S !== null && (f = Ul(S));
      var r = u.getDerivedStateFromProps;
      S = typeof r == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && by(
        t,
        n,
        a,
        f
      ), uu = !1;
      var o = t.memoizedState;
      n.state = o, $a(t, a, n, e), Wa(), d = t.memoizedState, c || o !== d || uu ? (typeof r == "function" && (nc(
        t,
        u,
        r,
        a
      ), d = t.memoizedState), (i = uu || Sy(
        t,
        u,
        i,
        a,
        o,
        d,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Bf(l, t), f = t.memoizedProps, S = ju(u, f), n.props = S, r = t.pendingProps, o = n.context, d = u.contextType, i = la, typeof d == "object" && d !== null && (i = Ul(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== r || o !== i) && by(
        t,
        n,
        a,
        i
      ), uu = !1, o = t.memoizedState, n.state = o, $a(t, a, n, e), Wa();
      var g = t.memoizedState;
      f !== r || o !== g || uu || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (nc(
        t,
        u,
        c,
        a
      ), g = t.memoizedState), (S = uu || Sy(
        t,
        u,
        S,
        a,
        o,
        g,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, yn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Yu(
      t,
      l.child,
      null,
      e
    ), t.child = Yu(
      t,
      null,
      u,
      e
    )) : Nl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = xt(
      l,
      t,
      e
    ), l;
  }
  function qy(l, t, u, a) {
    return Uu(), t.flags |= 256, Nl(l, t, u, a), t.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vc(l) {
    return { baseLanes: l, cachePool: T0() };
  }
  function mc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= et), l;
  }
  function Cy(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (hl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? nu(t) : fu(), (l = cl) ? (l = Zs(
          l,
          dt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: Ot } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = d0(l), u.return = t, t.child = u, Dl = t, cl = null)) : l = null, l === null) throw lu(t);
        return Wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (fu(), e = t.mode, c = sn(
        { mode: "hidden", children: c },
        e
      ), a = Du(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = vc(u), a.childLanes = mc(
        l,
        f,
        u
      ), t.memoizedState = sc, le(null, a)) : (nu(t), dc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (nu(t), t.flags &= -257, t = oc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (fu(), t.child = l.child, t.flags |= 128, t = null) : (fu(), c = a.fallback, e = t.mode, a = sn(
          { mode: "visible", children: a.children },
          e
        ), c = Du(
          c,
          e,
          u,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Yu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = vc(u), a.childLanes = mc(
          l,
          f,
          u
        ), t.memoizedState = sc, t = le(null, a));
      else if (nu(t), Wc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, a = Error(h(419)), a.stack = "", a.digest = f, Za({ value: a, source: null, stack: null }), t = oc(
          l,
          t,
          u
        );
      } else if (rl || ea(l, t, u, !1), f = (u & l.childLanes) !== 0, rl || f) {
        if (f = fl, f !== null && (a = ri(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, pu(l, a), wl(f, l, a), ic;
        wc(c) || zn(), t = oc(
          l,
          t,
          u
        );
      } else
        wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, cl = ht(
          c.nextSibling
        ), Dl = t, K = !0, Pt = null, dt = !1, l !== null && g0(t, l), t = dc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (fu(), c = a.fallback, e = t.mode, i = l.child, d = i.sibling, a = qt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? c = qt(
      d,
      c
    ) : (c = Du(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, le(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = vc(u) : (e = c.cachePool, e !== null ? (i = bl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = T0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = mc(
      l,
      f,
      u
    ), t.memoizedState = sc, le(l.child, a)) : (nu(t), u = l.child, l = u.sibling, u = qt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function dc(l, t) {
    return t = sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function sn(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function oc(l, t, u) {
    return Yu(t, l.child, null, u), l = dc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Yy(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Uf(l.return, t, u);
  }
  function hc(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function By(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = hl.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, O(hl, f), Nl(l, t, a, u), a = K ? Qa : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Yy(l, u, t);
        else if (l.tag === 19)
          Yy(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && Fe(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), hc(
          t,
          !1,
          e,
          u,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Fe(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        hc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        hc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), yu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ea(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, u = qt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = qt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function wm(l, t, u) {
    switch (t.tag) {
      case 3:
        Yl(t, t.stateNode.containerInfo), tu(t, bl, l.memoizedState.cache), Uu();
        break;
      case 27:
      case 5:
        Ma(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        tu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Qf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (nu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Cy(l, t, u) : (nu(t), l = xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        nu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (ea(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return By(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(hl, hl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Dy(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        tu(t, bl, l.memoizedState.cache);
    }
    return xt(l, t, u);
  }
  function jy(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        rl = !0;
      else {
        if (!gc(l, u) && (t.flags & 128) === 0)
          return rl = !1, wm(
            l,
            t,
            u
          );
        rl = (l.flags & 131072) !== 0;
      }
    else
      rl = !1, K && (t.flags & 1048576) !== 0 && h0(t, Qa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qu(t.elementType), t.type = l, typeof l == "function")
            Ef(l) ? (a = ju(l, a), t.tag = 1, t = Ry(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = yc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === ft) {
                t.tag = 11, t = Oy(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === L) {
                t.tag = 14, t = My(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              }
            }
            throw t = Ut(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return yc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = ju(
          a,
          t.pendingProps
        ), Ry(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Bf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, tu(t, bl, a), a !== n.cache && Nf(
            t,
            [bl],
            u,
            !0
          ), Wa(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = qy(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = st(
                Error(h(424)),
                t
              ), Za(e), t = qy(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (cl = ht(l.firstChild), Dl = t, K = !0, Pt = null, dt = !0, u = D0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Uu(), a === e) {
              t = xt(
                l,
                t,
                u
              );
              break l;
            }
            Nl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yn(l, t), l === null ? (u = Ws(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : K || (u = t.type, l = t.pendingProps, a = Mn(
          G.current
        ).createElement(u), a[pl] = t, a[Ql] = l, Hl(a, u, l), Ol(a), t.stateNode = a) : t.memoizedState = Ws(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ma(t), l === null && K && (a = t.stateNode = Ks(
          t.type,
          t.pendingProps,
          G.current
        ), Dl = t, dt = !0, e = cl, ou(t.type) ? ($c = e, cl = ht(a.firstChild)) : cl = e), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), yn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = a = cl) && (a = Ad(
          a,
          t.type,
          t.pendingProps,
          dt
        ), a !== null ? (t.stateNode = a, Dl = t, cl = ht(a.firstChild), dt = !1, e = !0) : e = !1), e || lu(t)), Ma(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Lc(e, n) ? a = null : f !== null && Lc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          Gm,
          null,
          null,
          u
        ), he._currentValue = e), yn(l, t), Nl(l, t, a, u), t.child;
      case 6:
        return l === null && K && ((l = u = cl) && (u = _d(
          u,
          t.pendingProps,
          dt
        ), u !== null ? (t.stateNode = u, Dl = t, cl = null, l = !0) : l = !1), l || lu(t)), null;
      case 13:
        return Cy(l, t, u);
      case 4:
        return Yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Yu(
          t,
          null,
          a,
          u
        ) : Nl(l, t, a, u), t.child;
      case 11:
        return Oy(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Nl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, tu(t, t.type, a.value), Nl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Hu(t), e = Ul(e), a = a(e), t.flags |= 1, Nl(l, t, a, u), t.child;
      case 14:
        return My(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return py(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return By(l, t, u);
      case 31:
        return Jm(l, t, u);
      case 22:
        return Dy(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Hu(t), a = Ul(bl), l === null ? (e = qf(), e === null && (e = fl, n = Hf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Yf(t), tu(t, bl, e)) : ((l.lanes & u) !== 0 && (Bf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), tu(t, bl, a)) : (a = n.cache, tu(t, bl, a), a !== e.cache && Nf(
          t,
          [bl],
          u,
          !0
        ))), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function Sc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (ss()) l.flags |= 8192;
        else
          throw Cu = we, Cf;
    } else l.flags &= -16777217;
  }
  function Gy(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Ps(t))
      if (ss()) l.flags |= 8192;
      else
        throw Cu = we, Cf;
  }
  function vn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Si() : 536870912, l.lanes |= t, ga |= t);
  }
  function te(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function il(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Wm(l, t, u) {
    var a = t.pendingProps;
    switch (Of(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return il(t), null;
      case 1:
        return il(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(bl), ol(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (aa(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pf())), il(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Xt(t), n !== null ? (il(t), Gy(t, n)) : (il(t), Sc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Xt(t), il(t), Gy(t, n)) : (il(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Xt(t), il(t), Sc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ee(t), u = G.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return il(t), null;
          }
          l = p.current, aa(t) ? S0(t) : (l = Ks(e, a, u), t.stateNode = l, Xt(t));
        }
        return il(t), null;
      case 5:
        if (Ee(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return il(t), null;
          }
          if (n = p.current, aa(t))
            S0(t);
          else {
            var f = Mn(
              G.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[pl] = t, n[Ql] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Hl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Xt(t);
          }
        }
        return il(t), Sc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Xt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = G.current, aa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Dl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[pl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Cs(l.nodeValue, u)), l || lu(t, !0);
          } else
            l = Mn(l).createTextNode(
              a
            ), l[pl] = t, t.stateNode = l;
        }
        return il(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = aa(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[pl] = t;
            } else
              Uu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), l = !1;
          } else
            u = pf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return il(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = aa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[pl] = t;
            } else
              Uu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), e = !1;
          } else
            e = pf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), vn(t, t.updateQueue), il(t), null);
      case 4:
        return ol(), l === null && xc(t.stateNode.containerInfo), il(t), null;
      case 10:
        return Bt(t.type), il(t), null;
      case 19:
        if (E(hl), a = t.memoizedState, a === null) return il(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (dl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Fe(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, vn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    m0(u, l), u = u.sibling;
                  return O(
                    hl,
                    hl.current & 1 | 2
                  ), K && Ct(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && kl() > gn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Fe(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, vn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !K)
                return il(t), null;
            } else
              2 * kl() - a.renderingStartTime > gn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = kl(), l.sibling = null, u = hl.current, O(
          hl,
          e ? u & 1 | 2 : u & 1
        ), K && Ct(t, a.treeForkCount), l) : (il(t), null);
      case 22:
      case 23:
        return ut(t), Xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (il(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : il(t), u = t.updateQueue, u !== null && vn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && E(Ru), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(bl), il(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function $m(l, t) {
    switch (Of(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(bl), ol(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null)
            throw Error(h(340));
          Uu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Uu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(hl), null;
      case 4:
        return ol(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return ut(t), Xf(), l !== null && E(Ru), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(bl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xy(l, t) {
    switch (Of(t), t.tag) {
      case 3:
        Bt(bl), ol();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        ol();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        E(hl);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Xf(), l !== null && E(Ru);
        break;
      case 24:
        Bt(bl);
    }
  }
  function ue(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      P(t, t.return, c);
    }
  }
  function cu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, d = c;
              try {
                d();
              } catch (S) {
                P(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      P(t, t.return, S);
    }
  }
  function Xy(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        N0(t, u);
      } catch (a) {
        P(l, l.return, a);
      }
    }
  }
  function Qy(l, t, u) {
    u.props = ju(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      P(l, t, a);
    }
  }
  function ae(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      P(l, t, e);
    }
  }
  function Mt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          P(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          P(l, t, e);
        }
      else u.current = null;
  }
  function Zy(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      P(l, l.return, e);
    }
  }
  function bc(l, t, u) {
    try {
      var a = l.stateNode;
      Sd(a, l.type, u, t), a[Ql] = t;
    } catch (e) {
      P(l, l.return, e);
    }
  }
  function Vy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ou(l.type) || l.tag === 4;
  }
  function zc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ou(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function rc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Ht));
    else if (a !== 4 && (a === 27 && ou(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (rc(l, t, u), l = l.sibling; l !== null; )
        rc(l, t, u), l = l.sibling;
  }
  function mn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && ou(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (mn(l, t, u), l = l.sibling; l !== null; )
        mn(l, t, u), l = l.sibling;
  }
  function Ly(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, a, u), t[pl] = l, t[Ql] = u;
    } catch (n) {
      P(l, l.return, n);
    }
  }
  var Qt = !1, El = !1, Ec = !1, Ky = typeof WeakSet == "function" ? WeakSet : Set, Ml = null;
  function km(l, t) {
    if (l = l.containerInfo, Zc = qn, l = a0(l), of(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, S = 0, r = l, o = null;
            t: for (; ; ) {
              for (var g; r !== u || e !== 0 && r.nodeType !== 3 || (c = f + e), r !== n || a !== 0 && r.nodeType !== 3 || (i = f + a), r.nodeType === 3 && (f += r.nodeValue.length), (g = r.firstChild) !== null; )
                o = r, r = g;
              for (; ; ) {
                if (r === l) break t;
                if (o === u && ++d === e && (c = f), o === n && ++S === a && (i = f), (g = r.nextSibling) !== null) break;
                r = o, o = r.parentNode;
              }
              r = g;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Vc = { focusedElem: l, selectionRange: u }, qn = !1, Ml = t; Ml !== null; )
      if (t = Ml, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ml = l;
      else
        for (; Ml !== null; ) {
          switch (t = Ml, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  e = l[u], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var M = ju(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  P(
                    u,
                    u.return,
                    R
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Jc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ml = l;
            break;
          }
          Ml = t.return;
        }
  }
  function Jy(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, u), a & 4 && ue(5, u);
        break;
      case 1:
        if (Vt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              P(u, u.return, f);
            }
          else {
            var e = ju(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              P(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Xy(u), a & 512 && ae(u, u.return);
        break;
      case 3:
        if (Vt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            N0(l, t);
          } catch (f) {
            P(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ly(u);
      case 26:
      case 5:
        Vt(l, u), t === null && a & 4 && Zy(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Vt(l, u);
        break;
      case 31:
        Vt(l, u), a & 4 && $y(l, u);
        break;
      case 13:
        Vt(l, u), a & 4 && ky(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = nd.bind(
          null,
          u
        ), Od(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Qt, !a) {
          t = t !== null && t.memoizedState !== null || El, e = Qt;
          var n = El;
          Qt = a, (El = t) && !n ? Lt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Vt(l, u), Qt = e, El = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, u);
    }
  }
  function wy(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, wy(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, Vl = !1;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; )
      Wy(l, t, u), u = u.sibling;
  }
  function Wy(l, t, u) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(pa, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        El || Mt(u, t), Zt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || Mt(u, t);
        var a = yl, e = Vl;
        ou(u.type) && (yl = u.stateNode, Vl = !1), Zt(
          l,
          t,
          u
        ), me(u.stateNode), yl = a, Vl = e;
        break;
      case 5:
        El || Mt(u, t);
      case 6:
        if (a = yl, e = Vl, yl = null, Zt(
          l,
          t,
          u
        ), yl = a, Vl = e, yl !== null)
          if (Vl)
            try {
              (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(u.stateNode);
            } catch (n) {
              P(
                u,
                t,
                n
              );
            }
          else
            try {
              yl.removeChild(u.stateNode);
            } catch (n) {
              P(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        yl !== null && (Vl ? (l = yl, Xs(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), _a(l)) : Xs(yl, u.stateNode));
        break;
      case 4:
        a = yl, e = Vl, yl = u.stateNode.containerInfo, Vl = !0, Zt(
          l,
          t,
          u
        ), yl = a, Vl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cu(2, u, t), El || cu(4, u, t), Zt(
          l,
          t,
          u
        );
        break;
      case 1:
        El || (Mt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Qy(
          u,
          t,
          a
        )), Zt(
          l,
          t,
          u
        );
        break;
      case 21:
        Zt(
          l,
          t,
          u
        );
        break;
      case 22:
        El = (a = El) || u.memoizedState !== null, Zt(
          l,
          t,
          u
        ), El = a;
        break;
      default:
        Zt(
          l,
          t,
          u
        );
    }
  }
  function $y(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        _a(l);
      } catch (u) {
        P(t, t.return, u);
      }
    }
  }
  function ky(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _a(l);
      } catch (u) {
        P(t, t.return, u);
      }
  }
  function Fm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ky()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ky()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function dn(l, t) {
    var u = Fm(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = fd.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Ll(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ou(c.type)) {
                yl = c.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              yl = c.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              yl = c.stateNode.containerInfo, Vl = !0;
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(h(160));
        Wy(n, f, e), yl = null, Vl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Fy(t, l), t = t.sibling;
  }
  var zt = null;
  function Fy(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(t, l), Kl(l), a & 4 && (cu(3, l, l.return), ue(3, l), cu(5, l, l.return));
        break;
      case 1:
        Ll(t, l), Kl(l), a & 512 && (El || u === null || Mt(u, u.return)), a & 64 && Qt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = zt;
        if (Ll(t, l), Kl(l), a & 512 && (El || u === null || Mt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Na] || n[pl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Hl(n, a, u), n[pl] = l, Ol(n), a = n;
                      break l;
                    case "link":
                      var f = Fs(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Fs(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  n[pl] = l, Ol(n), a = n;
                }
                l.stateNode = a;
              } else
                Is(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ks(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Is(
              e,
              l.type,
              l.stateNode
            ) : ks(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && bc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ll(t, l), Kl(l), a & 512 && (El || u === null || Mt(u, u.return)), u !== null && a & 4 && bc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ll(t, l), Kl(l), a & 512 && (El || u === null || Mt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            wu(e, "");
          } catch (M) {
            P(l, l.return, M);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, bc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (Ec = !0);
        break;
      case 6:
        if (Ll(t, l), Kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (M) {
            P(l, l.return, M);
          }
        }
        break;
      case 3:
        if (Un = null, e = zt, zt = pn(t.containerInfo), Ll(t, l), zt = e, Kl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _a(t.containerInfo);
          } catch (M) {
            P(l, l.return, M);
          }
        Ec && (Ec = !1, Iy(l));
        break;
      case 4:
        a = zt, zt = pn(
          l.stateNode.containerInfo
        ), Ll(t, l), Kl(l), zt = a;
        break;
      case 12:
        Ll(t, l), Kl(l);
        break;
      case 31:
        Ll(t, l), Kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 13:
        Ll(t, l), Kl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (hn = kl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, d = Qt, S = El;
        if (Qt = d || e, El = S || i, Ll(t, l), El = S, Qt = d, Kl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Qt || El || Gu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var r = i.memoizedProps.style, o = r != null && r.hasOwnProperty("display") ? r.display : null;
                    c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                  }
                } catch (M) {
                  P(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (M) {
                  P(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                i = t;
                try {
                  var g = i.stateNode;
                  e ? Qs(g, !0) : Qs(i.stateNode, !1);
                } catch (M) {
                  P(i, i.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, dn(l, u))));
        break;
      case 19:
        Ll(t, l), Kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ll(t, l), Kl(l);
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Vy(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = zc(l);
            mn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (wu(f, ""), u.flags &= -33);
            var c = zc(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, d = zc(l);
            rc(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        P(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Iy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Iy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Jy(l, t.alternate, t), t = t.sibling;
  }
  function Gu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cu(4, t, t.return), Gu(t);
          break;
        case 1:
          Mt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Qy(
            t,
            t.return,
            u
          ), Gu(t);
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          Mt(t, t.return), Gu(t);
          break;
        case 22:
          t.memoizedState === null && Gu(t);
          break;
        case 30:
          Gu(t);
          break;
        default:
          Gu(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            u
          ), ue(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              P(a, a.return, d);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  U0(i[e], c);
            } catch (d) {
              P(a, a.return, d);
            }
          }
          u && f & 64 && Xy(n), ae(n, n.return);
          break;
        case 27:
          Ly(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            u
          ), u && a === null && f & 4 && Zy(n), ae(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            u
          );
          break;
        case 31:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && $y(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && ky(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            u
          ), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Tc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function Ac(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l));
  }
  function rt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Py(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function Py(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rt(
          l,
          t,
          u,
          a
        ), e & 2048 && ue(9, t);
        break;
      case 1:
        rt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        rt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          rt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            P(t, t.return, i);
          }
        } else
          rt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        rt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        rt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? rt(
          l,
          t,
          u,
          a
        ) : ee(l, t) : n._visibility & 2 ? rt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, da(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Tc(f, t);
        break;
      case 24:
        rt(
          l,
          t,
          u,
          a
        ), e & 2048 && Ac(t.alternate, t);
        break;
      default:
        rt(
          l,
          t,
          u,
          a
        );
    }
  }
  function da(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          da(
            n,
            f,
            c,
            i,
            e
          ), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? da(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (S._visibility |= 2, da(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && Tc(
            f.alternate,
            f
          );
          break;
        case 24:
          da(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && Ac(f.alternate, f);
          break;
        default:
          da(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            ee(u, a), e & 2048 && Tc(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && Ac(a.alternate, a);
            break;
          default:
            ee(u, a);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function oa(l, t, u) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ls(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function ls(l, t, u) {
    switch (l.tag) {
      case 26:
        oa(
          l,
          t,
          u
        ), l.flags & ne && l.memoizedState !== null && jd(
          u,
          zt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        oa(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = zt;
        zt = pn(l.stateNode.containerInfo), oa(
          l,
          t,
          u
        ), zt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ne, ne = 16777216, oa(
          l,
          t,
          u
        ), ne = a) : oa(
          l,
          t,
          u
        ));
        break;
      default:
        oa(
          l,
          t,
          u
        );
    }
  }
  function ts(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ml = a, as(
            a,
            l
          );
        }
      ts(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        us(l), l = l.sibling;
  }
  function us(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && cu(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, on(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ml = a, as(
            a,
            l
          );
        }
      ts(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, t, t.return), on(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function as(l, t) {
    for (; Ml !== null; ) {
      var u = Ml;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ml = a;
      else
        l: for (u = l; Ml !== null; ) {
          a = Ml;
          var e = a.sibling, n = a.return;
          if (wy(a), a === u) {
            Ml = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ml = e;
            break l;
          }
          Ml = n;
        }
    }
  }
  var Im = {
    getCacheForType: function(l) {
      var t = Ul(bl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Ul(bl).controller.signal;
    }
  }, Pm = typeof WeakMap == "function" ? WeakMap : Map, $ = 0, fl = null, x = null, Q = 0, I = 0, at = null, iu = !1, ha = !1, _c = !1, Kt = 0, dl = 0, yu = 0, xu = 0, Oc = 0, et = 0, ga = 0, ce = null, Jl = null, Mc = !1, hn = 0, es = 0, gn = 1 / 0, Sn = null, su = null, Al = 0, vu = null, Sa = null, Jt = 0, pc = 0, Dc = null, ns = null, ie = 0, Uc = null;
  function nt() {
    return ($ & 2) !== 0 && Q !== 0 ? Q & -Q : b.T !== null ? Yc() : Ei();
  }
  function fs() {
    if (et === 0)
      if ((Q & 536870912) === 0 || K) {
        var l = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function wl(l, t, u) {
    (l === fl && (I === 2 || I === 9) || l.cancelPendingCommit !== null) && (ba(l, 0), mu(
      l,
      Q,
      et,
      !1
    )), Ua(l, u), (($ & 2) === 0 || l !== fl) && (l === fl && (($ & 2) === 0 && (xu |= u), dl === 4 && mu(
      l,
      Q,
      et,
      !1
    )), pt(l));
  }
  function cs(l, t, u) {
    if (($ & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Da(l, t), e = a ? ud(l, t) : Hc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ha && !a && mu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !ld(u)) {
          e = Hc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ce;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ba(c, f).flags |= 256), f = Hc(
                c,
                f,
                !1
              ), f !== 2) {
                if (_c && !i) {
                  c.errorRecoveryDisabledLanes |= n, xu |= n, e = 4;
                  break l;
                }
                n = Jl, Jl = e, n !== null && (Jl === null ? Jl = n : Jl.push.apply(
                  Jl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ba(l, 0), mu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              mu(
                a,
                t,
                et,
                !iu
              );
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = hn + 300 - kl(), 10 < e)) {
            if (mu(
              a,
              t,
              et,
              !iu
            ), Me(a, 0, !0) !== 0) break l;
            Jt = t, a.timeoutHandle = Gs(
              is.bind(
                null,
                a,
                u,
                Jl,
                Sn,
                Mc,
                t,
                et,
                xu,
                ga,
                iu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          is(
            a,
            u,
            Jl,
            Sn,
            Mc,
            t,
            et,
            xu,
            ga,
            iu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    pt(l);
  }
  function is(l, t, u, a, e, n, f, c, i, d, S, r, o, g) {
    if (l.timeoutHandle = -1, r = t.subtreeFlags, r & 8192 || (r & 16785408) === 16785408) {
      r = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, ls(
        t,
        n,
        r
      );
      var M = (n & 62914560) === n ? hn - kl() : (n & 4194048) === n ? es - kl() : 0;
      if (M = Gd(
        r,
        M
      ), M !== null) {
        Jt = n, l.cancelPendingCommit = M(
          gs.bind(
            null,
            l,
            t,
            n,
            u,
            a,
            e,
            f,
            c,
            i,
            S,
            r,
            null,
            o,
            g
          )
        ), mu(l, n, f, !d);
        return;
      }
    }
    gs(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function ld(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function mu(l, t, u, a) {
    t &= ~Oc, t &= ~xu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && bi(l, u, t);
  }
  function bn() {
    return ($ & 6) === 0 ? (ye(0), !1) : !0;
  }
  function Nc() {
    if (x !== null) {
      if (I === 0)
        var l = x.return;
      else
        l = x, Yt = Nu = null, Jf(l), ia = null, Ka = 0, l = x;
      for (; l !== null; )
        xy(l.alternate, l), l = l.return;
      x = null;
    }
  }
  function ba(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, rd(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Jt = 0, Nc(), fl = l, x = u = qt(l.current, null), Q = t, I = 0, at = null, iu = !1, ha = Da(l, t), _c = !1, ga = et = Oc = xu = yu = dl = 0, Jl = ce = null, Mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Il(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Kt = t, Ge(), u;
  }
  function ys(l, t) {
    B = null, b.H = Pa, t === ca || t === Je ? (t = O0(), I = 3) : t === Cf ? (t = O0(), I = 4) : I = t === ic ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, at = t, x === null && (dl = 1, fn(
      l,
      st(t, l.current)
    ));
  }
  function ss() {
    var l = tt.current;
    return l === null ? !0 : (Q & 4194048) === Q ? ot === null : (Q & 62914560) === Q || (Q & 536870912) !== 0 ? l === ot : !1;
  }
  function vs() {
    var l = b.H;
    return b.H = Pa, l === null ? Pa : l;
  }
  function ms() {
    var l = b.A;
    return b.A = Im, l;
  }
  function zn() {
    dl = 4, iu || (Q & 4194048) !== Q && tt.current !== null || (ha = !0), (yu & 134217727) === 0 && (xu & 134217727) === 0 || fl === null || mu(
      fl,
      Q,
      et,
      !1
    );
  }
  function Hc(l, t, u) {
    var a = $;
    $ |= 2;
    var e = vs(), n = ms();
    (fl !== l || Q !== t) && (Sn = null, ba(l, t)), t = !1;
    var f = dl;
    l: do
      try {
        if (I !== 0 && x !== null) {
          var c = x, i = at;
          switch (I) {
            case 8:
              Nc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var d = I;
              if (I = 0, at = null, za(l, c, i, d), u && ha) {
                f = 0;
                break l;
              }
              break;
            default:
              d = I, I = 0, at = null, za(l, c, i, d);
          }
        }
        td(), f = dl;
        break;
      } catch (S) {
        ys(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Nu = null, $ = a, b.H = e, b.A = n, x === null && (fl = null, Q = 0, Ge()), f;
  }
  function td() {
    for (; x !== null; ) ds(x);
  }
  function ud(l, t) {
    var u = $;
    $ |= 2;
    var a = vs(), e = ms();
    fl !== l || Q !== t ? (Sn = null, gn = kl() + 500, ba(l, t)) : ha = Da(
      l,
      t
    );
    l: do
      try {
        if (I !== 0 && x !== null) {
          t = x;
          var n = at;
          t: switch (I) {
            case 1:
              I = 0, at = null, za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (A0(n)) {
                I = 0, at = null, os(t);
                break;
              }
              t = function() {
                I !== 2 && I !== 9 || fl !== l || (I = 7), pt(l);
              }, n.then(t, t);
              break l;
            case 3:
              I = 7;
              break l;
            case 4:
              I = 5;
              break l;
            case 7:
              A0(n) ? (I = 0, at = null, os(t)) : (I = 0, at = null, za(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (x.tag) {
                case 26:
                  f = x.memoizedState;
                case 5:
                case 27:
                  var c = x;
                  if (f ? Ps(f) : c.stateNode.complete) {
                    I = 0, at = null;
                    var i = c.sibling;
                    if (i !== null) x = i;
                    else {
                      var d = c.return;
                      d !== null ? (x = d, rn(d)) : x = null;
                    }
                    break t;
                  }
              }
              I = 0, at = null, za(l, t, n, 5);
              break;
            case 6:
              I = 0, at = null, za(l, t, n, 6);
              break;
            case 8:
              Nc(), dl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        ad();
        break;
      } catch (S) {
        ys(l, S);
      }
    while (!0);
    return Yt = Nu = null, b.H = a, b.A = e, $ = u, x !== null ? 0 : (fl = null, Q = 0, Ge(), dl);
  }
  function ad() {
    for (; x !== null && !Mv(); )
      ds(x);
  }
  function ds(l) {
    var t = jy(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : x = t;
  }
  function os(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hy(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Q
        );
        break;
      case 11:
        t = Hy(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Q
        );
        break;
      case 5:
        Jf(t);
      default:
        xy(u, t), t = x = m0(t, Kt), t = jy(u, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : x = t;
  }
  function za(l, t, u, a) {
    Yt = Nu = null, Jf(t), ia = null, Ka = 0;
    var e = t.return;
    try {
      if (Km(
        l,
        e,
        t,
        u,
        Q
      )) {
        dl = 1, fn(
          l,
          st(u, l.current)
        ), x = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw x = e, n;
      dl = 1, fn(
        l,
        st(u, l.current)
      ), x = null;
      return;
    }
    t.flags & 32768 ? (K || a === 1 ? l = !0 : ha || (Q & 536870912) !== 0 ? l = !1 : (iu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = tt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), hs(t, l)) : rn(t);
  }
  function rn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        hs(
          t,
          iu
        );
        return;
      }
      l = t.return;
      var u = Wm(
        t.alternate,
        t,
        Kt
      );
      if (u !== null) {
        x = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        x = t;
        return;
      }
      x = t = l;
    } while (t !== null);
    dl === 0 && (dl = 5);
  }
  function hs(l, t) {
    do {
      var u = $m(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, x = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        x = l;
        return;
      }
      x = l = u;
    } while (l !== null);
    dl = 6, x = null;
  }
  function gs(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      En();
    while (Al !== 0);
    if (($ & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= zf, Bv(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === fl && (x = fl = null, Q = 0), Sa = t, vu = l, Jt = u, pc = n, Dc = e, ns = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, cd(Te, function() {
        return Es(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = _.p, _.p = 2, f = $, $ |= 4;
        try {
          km(l, t, u);
        } finally {
          $ = f, _.p = e, b.T = a;
        }
      }
      Al = 1, Ss(), bs(), zs();
    }
  }
  function Ss() {
    if (Al === 1) {
      Al = 0;
      var l = vu, t = Sa, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var e = $;
        $ |= 4;
        try {
          Fy(t, l);
          var n = Vc, f = a0(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && u0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && of(c)) {
              var d = i.start, S = i.end;
              if (S === void 0 && (S = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var r = c.ownerDocument || document, o = r && r.defaultView || window;
                if (o.getSelection) {
                  var g = o.getSelection(), M = c.textContent.length, R = Math.min(i.start, M), al = i.end === void 0 ? R : Math.min(i.end, M);
                  !g.extend && R > al && (f = al, al = R, R = f);
                  var v = t0(
                    c,
                    R
                  ), y = t0(
                    c,
                    al
                  );
                  if (v && y && (g.rangeCount !== 1 || g.anchorNode !== v.node || g.anchorOffset !== v.offset || g.focusNode !== y.node || g.focusOffset !== y.offset)) {
                    var m = r.createRange();
                    m.setStart(v.node, v.offset), g.removeAllRanges(), R > al ? (g.addRange(m), g.extend(y.node, y.offset)) : (m.setEnd(y.node, y.offset), g.addRange(m));
                  }
                }
              }
            }
            for (r = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && r.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < r.length; c++) {
              var z = r[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qn = !!Zc, Vc = Zc = null;
        } finally {
          $ = e, _.p = a, b.T = u;
        }
      }
      l.current = t, Al = 2;
    }
  }
  function bs() {
    if (Al === 2) {
      Al = 0;
      var l = vu, t = Sa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var e = $;
        $ |= 4;
        try {
          Jy(l, t.alternate, t);
        } finally {
          $ = e, _.p = a, b.T = u;
        }
      }
      Al = 3;
    }
  }
  function zs() {
    if (Al === 4 || Al === 3) {
      Al = 0, pv();
      var l = vu, t = Sa, u = Jt, a = ns;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Al = 5 : (Al = 0, Sa = vu = null, rs(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (su = null), Wn(u), t = t.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function")
        try {
          Fl.onCommitFiberRoot(
            pa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, e = _.p, _.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, _.p = e;
        }
      }
      (Jt & 3) !== 0 && En(), pt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Uc ? ie++ : (ie = 0, Uc = l) : ie = 0, ye(0);
    }
  }
  function rs(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function En() {
    return Ss(), bs(), zs(), Es();
  }
  function Es() {
    if (Al !== 5) return !1;
    var l = vu, t = pc;
    pc = 0;
    var u = Wn(Jt), a = b.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, b.T = null, u = Dc, Dc = null;
      var n = vu, f = Jt;
      if (Al = 0, Sa = vu = null, Jt = 0, ($ & 6) !== 0) throw Error(h(331));
      var c = $;
      if ($ |= 4, us(n.current), Py(
        n,
        n.current,
        f,
        u
      ), $ = c, ye(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function")
        try {
          Fl.onPostCommitFiberRoot(pa, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, b.T = a, rs(l, t);
    }
  }
  function Ts(l, t, u) {
    t = st(u, t), t = cc(l.stateNode, t, 2), l = eu(l, t, 2), l !== null && (Ua(l, 2), pt(l));
  }
  function P(l, t, u) {
    if (l.tag === 3)
      Ts(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ts(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (su === null || !su.has(a))) {
            l = st(u, l), u = Ay(2), a = eu(t, u, 2), a !== null && (_y(
              u,
              a,
              t,
              l
            ), Ua(a, 2), pt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Pm();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (_c = !0, e.add(u), l = ed.bind(null, l, t, u), t.then(l, l));
  }
  function ed(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, fl === l && (Q & u) === u && (dl === 4 || dl === 3 && (Q & 62914560) === Q && 300 > kl() - hn ? ($ & 2) === 0 && ba(l, 0) : Oc |= u, ga === Q && (ga = 0)), pt(l);
  }
  function As(l, t) {
    t === 0 && (t = Si()), l = pu(l, t), l !== null && (Ua(l, t), pt(l));
  }
  function nd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), As(l, u);
  }
  function fd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), As(l, u);
  }
  function cd(l, t) {
    return Ln(l, t);
  }
  var Tn = null, ra = null, qc = !1, An = !1, Cc = !1, du = 0;
  function pt(l) {
    l !== ra && l.next === null && (ra === null ? Tn = ra = l : ra = ra.next = l), An = !0, qc || (qc = !0, yd());
  }
  function ye(l, t) {
    if (!Cc && An) {
      Cc = !0;
      do
        for (var u = !1, a = Tn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, ps(a, n));
          } else
            n = Q, n = Me(
              a,
              a === fl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Da(a, n) || (u = !0, ps(a, n));
          a = a.next;
        }
      while (u);
      Cc = !1;
    }
  }
  function id() {
    _s();
  }
  function _s() {
    An = qc = !1;
    var l = 0;
    du !== 0 && zd() && (l = du);
    for (var t = kl(), u = null, a = Tn; a !== null; ) {
      var e = a.next, n = Os(a, t);
      n === 0 ? (a.next = null, u === null ? Tn = e : u.next = e, e === null && (ra = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (An = !0)), a = e;
    }
    Al !== 0 && Al !== 5 || ye(l), du !== 0 && (du = 0);
  }
  function Os(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Il(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Yv(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, u = Q, u = Me(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (I === 2 || I === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Kn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Da(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Kn(a), Wn(u)) {
        case 2:
        case 8:
          u = hi;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = gi;
          break;
        default:
          u = Te;
      }
      return a = Ms.bind(null, l), u = Ln(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Kn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ms(l, t) {
    if (Al !== 0 && Al !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (En() && l.callbackNode !== u)
      return null;
    var a = Q;
    return a = Me(
      l,
      l === fl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (cs(l, a, t), Os(l, kl()), l.callbackNode != null && l.callbackNode === u ? Ms.bind(null, l) : null);
  }
  function ps(l, t) {
    if (En()) return null;
    cs(l, t, !0);
  }
  function yd() {
    Ed(function() {
      ($ & 6) !== 0 ? Ln(
        oi,
        id
      ) : _s();
    });
  }
  function Yc() {
    if (du === 0) {
      var l = na;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), du = l;
    }
    return du;
  }
  function Ds(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ne("" + l);
  }
  function Us(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function sd(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Ds(
        (e[Ql] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Ql] || null) ? Ds(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ce(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (du !== 0) {
                  var i = f ? Us(e, f) : new FormData(e);
                  tc(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Us(e, f) : new FormData(e), tc(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Bc = 0; Bc < bf.length; Bc++) {
    var jc = bf[Bc], vd = jc.toLowerCase(), md = jc[0].toUpperCase() + jc.slice(1);
    bt(
      vd,
      "on" + md
    );
  }
  bt(f0, "onAnimationEnd"), bt(c0, "onAnimationIteration"), bt(i0, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(Dm, "onTransitionRun"), bt(Um, "onTransitionStart"), bt(Nm, "onTransitionCancel"), bt(y0, "onTransitionEnd"), Ku("onMouseEnter", ["mouseout", "mouseover"]), Ku("onMouseLeave", ["mouseout", "mouseover"]), Ku("onPointerEnter", ["pointerout", "pointerover"]), Ku("onPointerLeave", ["pointerout", "pointerover"]), Au(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Au(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Au("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Au(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Au(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Au(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var se = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), dd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(se)
  );
  function Ns(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              je(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              je(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function X(l, t) {
    var u = t[$n];
    u === void 0 && (u = t[$n] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Hs(t, l, 2, !1), u.add(a));
  }
  function Gc(l, t, u) {
    var a = 0;
    t && (a |= 4), Hs(
      u,
      l,
      a,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function xc(l) {
    if (!l[_n]) {
      l[_n] = !0, _i.forEach(function(u) {
        u !== "selectionchange" && (dd.has(u) || Gc(u, !1, l), Gc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, Gc("selectionchange", !1, t));
    }
  }
  function Hs(l, t, u, a) {
    switch (fv(t)) {
      case 2:
        var e = Qd;
        break;
      case 8:
        e = Zd;
        break;
      default:
        e = li;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Xc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Zu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Bi(function() {
      var d = n, S = uf(u), r = [];
      l: {
        var o = s0.get(l);
        if (o !== void 0) {
          var g = Ce, M = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = fm;
              break;
            case "focusin":
              M = "focus", g = yf;
              break;
            case "focusout":
              M = "blur", g = yf;
              break;
            case "beforeblur":
            case "afterblur":
              g = yf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = xi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Wv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ym;
              break;
            case f0:
            case c0:
            case i0:
              g = Fv;
              break;
            case y0:
              g = vm;
              break;
            case "scroll":
            case "scrollend":
              g = Jv;
              break;
            case "wheel":
              g = dm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Pv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Qi;
              break;
            case "toggle":
            case "beforetoggle":
              g = hm;
          }
          var R = (t & 4) !== 0, al = !R && (l === "scroll" || l === "scrollend"), v = R ? o !== null ? o + "Capture" : null : o;
          R = [];
          for (var y = d, m; y !== null; ) {
            var z = y;
            if (m = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || m === null || v === null || (z = Ra(y, v), z != null && R.push(
              ve(y, z, m)
            )), al) break;
            y = y.return;
          }
          0 < R.length && (o = new g(
            o,
            M,
            null,
            u,
            S
          ), r.push({ event: o, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", o && u !== tf && (M = u.relatedTarget || u.fromElement) && (Zu(M) || M[Qu]))
            break l;
          if ((g || o) && (o = S.window === S ? S : (o = S.ownerDocument) ? o.defaultView || o.parentWindow : window, g ? (M = u.relatedTarget || u.toElement, g = d, M = M ? Zu(M) : null, M !== null && (al = vl(M), R = M.tag, M !== al || R !== 5 && R !== 27 && R !== 6) && (M = null)) : (g = null, M = d), g !== M)) {
            if (R = xi, z = "onMouseLeave", v = "onMouseEnter", y = "mouse", (l === "pointerout" || l === "pointerover") && (R = Qi, z = "onPointerLeave", v = "onPointerEnter", y = "pointer"), al = g == null ? o : Ha(g), m = M == null ? o : Ha(M), o = new R(
              z,
              y + "leave",
              g,
              u,
              S
            ), o.target = al, o.relatedTarget = m, z = null, Zu(S) === d && (R = new R(
              v,
              y + "enter",
              M,
              u,
              S
            ), R.target = m, R.relatedTarget = al, z = R), al = z, g && M)
              t: {
                for (R = od, v = g, y = M, m = 0, z = v; z; z = R(z))
                  m++;
                z = 0;
                for (var H = y; H; H = R(H))
                  z++;
                for (; 0 < m - z; )
                  v = R(v), m--;
                for (; 0 < z - m; )
                  y = R(y), z--;
                for (; m--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    R = v;
                    break t;
                  }
                  v = R(v), y = R(y);
                }
                R = null;
              }
            else R = null;
            g !== null && Rs(
              r,
              o,
              g,
              R,
              !1
            ), M !== null && al !== null && Rs(
              r,
              al,
              M,
              R,
              !0
            );
          }
        }
        l: {
          if (o = d ? Ha(d) : window, g = o.nodeName && o.nodeName.toLowerCase(), g === "select" || g === "input" && o.type === "file")
            var J = $i;
          else if (wi(o))
            if (ki)
              J = Om;
            else {
              J = Am;
              var D = Tm;
            }
          else
            g = o.nodeName, !g || g.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? d && lf(d.elementType) && (J = $i) : J = _m;
          if (J && (J = J(l, d))) {
            Wi(
              r,
              J,
              u,
              S
            );
            break l;
          }
          D && D(l, o, d), l === "focusout" && d && o.type === "number" && d.memoizedProps.value != null && Pn(o, "number", o.value);
        }
        switch (D = d ? Ha(d) : window, l) {
          case "focusin":
            (wi(D) || D.contentEditable === "true") && (Fu = D, hf = d, Xa = null);
            break;
          case "focusout":
            Xa = hf = Fu = null;
            break;
          case "mousedown":
            gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gf = !1, e0(r, u, S);
            break;
          case "selectionchange":
            if (pm) break;
          case "keydown":
          case "keyup":
            e0(r, u, S);
        }
        var j;
        if (vf)
          l: {
            switch (l) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break l;
              case "compositionend":
                Z = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break l;
            }
            Z = void 0;
          }
        else
          ku ? Ki(l, u) && (Z = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Z = "onCompositionStart");
        Z && (Zi && u.locale !== "ko" && (ku || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && ku && (j = ji()) : (Ft = S, nf = "value" in Ft ? Ft.value : Ft.textContent, ku = !0)), D = On(d, Z), 0 < D.length && (Z = new Xi(
          Z,
          l,
          null,
          u,
          S
        ), r.push({ event: Z, listeners: D }), j ? Z.data = j : (j = Ji(u), j !== null && (Z.data = j)))), (j = Sm ? bm(l, u) : zm(l, u)) && (Z = On(d, "onBeforeInput"), 0 < Z.length && (D = new Xi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), r.push({
          event: D,
          listeners: Z
        }), D.data = j)), sd(
          r,
          l,
          d,
          u,
          S
        );
      }
      Ns(r, t);
    });
  }
  function ve(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function On(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ra(l, u), e != null && a.unshift(
        ve(l, e, n)
      ), e = Ra(l, t), e != null && a.push(
        ve(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function od(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rs(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ra(u, n), d != null && f.unshift(
        ve(u, d, i)
      )) : e || (d = Ra(u, n), d != null && f.push(
        ve(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var hd = /\r\n?/g, gd = /\u0000|\uFFFD/g;
  function qs(l) {
    return (typeof l == "string" ? l : "" + l).replace(hd, `
`).replace(gd, "");
  }
  function Cs(l, t) {
    return t = qs(t), qs(l) === t;
  }
  function ul(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || wu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && wu(l, "" + a);
        break;
      case "className":
        De(l, "class", a);
        break;
      case "tabIndex":
        De(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, u, a);
        break;
      case "style":
        Ci(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && ul(l, t, "name", e.name, e, null), ul(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), ul(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), ul(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (ul(l, t, "encType", e.encType, e, null), ul(l, t, "method", e.method, e, null), ul(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "onScroll":
        a != null && X("scroll", l);
        break;
      case "onScrollEnd":
        a != null && X("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ne("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        X("beforetoggle", l), X("toggle", l), pe(l, "popover", a);
        break;
      case "xlinkActuate":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        pe(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Lv.get(u) || u, pe(l, u, a));
    }
  }
  function Qc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Ci(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? wu(l, a) : (typeof a == "number" || typeof a == "bigint") && wu(l, "" + a);
        break;
      case "onScroll":
        a != null && X("scroll", l);
        break;
      case "onScrollEnd":
        a != null && X("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Oi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Ql] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : pe(l, u, a);
          }
    }
  }
  function Hl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        X("error", l), X("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  ul(l, t, n, f, u, null);
              }
          }
        e && ul(l, t, "srcSet", u.srcSet, u, null), a && ul(l, t, "src", u.src, u, null);
        return;
      case "input":
        X("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  d = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(h(137, t));
                  break;
                default:
                  ul(l, t, a, S, u, null);
              }
          }
        Ni(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        X("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                ul(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Ju(l, !!a, t, !1) : u != null && Ju(l, !!a, u, !0);
        return;
      case "textarea":
        X("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                ul(l, t, f, c, u, null);
            }
        Ri(l, a, e, n);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ul(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        X("beforetoggle", l), X("toggle", l), X("cancel", l), X("close", l);
        break;
      case "iframe":
      case "object":
        X("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < se.length; a++)
          X(se[a], l);
        break;
      case "image":
        X("error", l), X("load", l);
        break;
      case "details":
        X("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        X("error", l), X("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                ul(l, t, d, a, u, null);
            }
        return;
      default:
        if (lf(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Qc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && ul(l, t, c, a, u, null));
  }
  function Sd(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, S = null;
        for (g in u) {
          var r = u[g];
          if (u.hasOwnProperty(g) && r != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = r;
              default:
                a.hasOwnProperty(g) || ul(l, t, g, null, a, r);
            }
        }
        for (var o in a) {
          var g = a[o];
          if (r = u[o], a.hasOwnProperty(o) && (g != null || r != null))
            switch (o) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                d = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                f = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(h(137, t));
                break;
              default:
                g !== r && ul(
                  l,
                  t,
                  o,
                  g,
                  a,
                  r
                );
            }
        }
        In(
          l,
          f,
          c,
          i,
          d,
          S,
          n,
          e
        );
        return;
      case "select":
        g = f = c = o = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                a.hasOwnProperty(n) || ul(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                o = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && ul(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = g, o != null ? Ju(l, !!u, o, !1) : !!a != !!u && (t != null ? Ju(l, !!u, t, !0) : Ju(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = o = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                o = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && ul(l, t, f, e, a, n);
            }
        Hi(l, o, g);
        return;
      case "option":
        for (var M in u)
          if (o = u[M], u.hasOwnProperty(M) && o != null && !a.hasOwnProperty(M))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(
                  l,
                  t,
                  M,
                  null,
                  a,
                  o
                );
            }
        for (i in a)
          if (o = a[i], g = u[i], a.hasOwnProperty(i) && o !== g && (o != null || g != null))
            switch (i) {
              case "selected":
                l.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ul(
                  l,
                  t,
                  i,
                  o,
                  a,
                  g
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in u)
          o = u[R], u.hasOwnProperty(R) && o != null && !a.hasOwnProperty(R) && ul(l, t, R, null, a, o);
        for (d in a)
          if (o = a[d], g = u[d], a.hasOwnProperty(d) && o !== g && (o != null || g != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(h(137, t));
                break;
              default:
                ul(
                  l,
                  t,
                  d,
                  o,
                  a,
                  g
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var al in u)
            o = u[al], u.hasOwnProperty(al) && o !== void 0 && !a.hasOwnProperty(al) && Qc(
              l,
              t,
              al,
              void 0,
              a,
              o
            );
          for (S in a)
            o = a[S], g = u[S], !a.hasOwnProperty(S) || o === g || o === void 0 && g === void 0 || Qc(
              l,
              t,
              S,
              o,
              a,
              g
            );
          return;
        }
    }
    for (var v in u)
      o = u[v], u.hasOwnProperty(v) && o != null && !a.hasOwnProperty(v) && ul(l, t, v, null, a, o);
    for (r in a)
      o = a[r], g = u[r], !a.hasOwnProperty(r) || o === g || o == null && g == null || ul(l, t, r, o, a, g);
  }
  function Ys(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Ys(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], d = i.startTime;
            if (d > c) break;
            var S = i.transferSize, r = i.initiatorType;
            S && Ys(r) && (i = i.responseEnd, f += S * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Zc = null, Vc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Bs(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function js(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Lc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function zd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Kc ? !1 : (Kc = l, !0) : (Kc = null, !1);
  }
  var Gs = typeof setTimeout == "function" ? setTimeout : void 0, rd = typeof clearTimeout == "function" ? clearTimeout : void 0, xs = typeof Promise == "function" ? Promise : void 0, Ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof xs < "u" ? function(l) {
    return xs.resolve(null).then(l).catch(Td);
  } : Gs;
  function Td(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ou(l) {
    return l === "head";
  }
  function Xs(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), _a(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          me(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, me(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Na] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && me(l.ownerDocument.body);
      u = e;
    } while (u);
    _a(t);
  }
  function Qs(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Jc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(u), kn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Ad(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Na])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function _d(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zs(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Od(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var $c = null;
  function Vs(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return ht(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ls(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Ks(l, t, u) {
    switch (t = Mn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var gt = /* @__PURE__ */ new Map(), Js = /* @__PURE__ */ new Set();
  function pn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = _.d;
  _.d = {
    f: Md,
    r: pd,
    D: Dd,
    C: Ud,
    L: Nd,
    m: Hd,
    X: qd,
    S: Rd,
    M: Cd
  };
  function Md() {
    var l = wt.f(), t = bn();
    return l || t;
  }
  function pd(l) {
    var t = Vu(l);
    t !== null && t.tag === 5 && t.type === "form" ? yy(t) : wt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function ws(l, t, u) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var e = it(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Js.has(e) || (Js.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Hl(t, "link", l), Ol(t), a.head.appendChild(t)));
    }
  }
  function Dd(l) {
    wt.D(l), ws("dns-prefetch", l, null);
  }
  function Ud(l, t) {
    wt.C(l, t), ws("preconnect", l, t);
  }
  function Nd(l, t, u) {
    wt.L(l, t, u);
    var a = Ea;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + it(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + it(
        u.imageSizes
      ) + '"]')) : e += '[href="' + it(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Ta(l);
          break;
        case "script":
          n = Aa(l);
      }
      gt.has(n) || (l = U(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), gt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(de(n)) || t === "script" && a.querySelector(oe(n)) || (t = a.createElement("link"), Hl(t, "link", l), Ol(t), a.head.appendChild(t)));
    }
  }
  function Hd(l, t) {
    wt.m(l, t);
    var u = Ea;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + it(a) + '"][href="' + it(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Aa(l);
      }
      if (!gt.has(n) && (l = U({ rel: "modulepreload", href: l }, t), gt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(oe(n)))
              return;
        }
        a = u.createElement("link"), Hl(a, "link", l), Ol(a), u.head.appendChild(a);
      }
    }
  }
  function Rd(l, t, u) {
    wt.S(l, t, u);
    var a = Ea;
    if (a && l) {
      var e = Lu(a).hoistableStyles, n = Ta(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          de(n)
        ))
          c.loading = 5;
        else {
          l = U(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = gt.get(n)) && kc(l, u);
          var i = f = a.createElement("link");
          Ol(i), Hl(i, "link", l), i._p = new Promise(function(d, S) {
            i.onload = d, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Dn(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function qd(l, t) {
    wt.X(l, t);
    var u = Ea;
    if (u && l) {
      var a = Lu(u).hoistableScripts, e = Aa(l), n = a.get(e);
      n || (n = u.querySelector(oe(e)), n || (l = U({ src: l, async: !0 }, t), (t = gt.get(e)) && Fc(l, t), n = u.createElement("script"), Ol(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Cd(l, t) {
    wt.M(l, t);
    var u = Ea;
    if (u && l) {
      var a = Lu(u).hoistableScripts, e = Aa(l), n = a.get(e);
      n || (n = u.querySelector(oe(e)), n || (l = U({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && Fc(l, t), n = u.createElement("script"), Ol(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ws(l, t, u, a) {
    var e = (e = G.current) ? pn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Ta(u.href), u = Lu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Ta(u.href);
          var n = Lu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            de(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), gt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, gt.set(l, u), n || Yd(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Aa(u), u = Lu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Ta(l) {
    return 'href="' + it(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $s(l) {
    return U({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Yd(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Hl(t, "link", u), Ol(t), l.head.appendChild(t));
  }
  function Aa(l) {
    return '[src="' + it(l) + '"]';
  }
  function oe(l) {
    return "script[async]" + l;
  }
  function ks(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + it(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Ol(a), a;
          var e = U({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Ol(a), Hl(a, "style", e), Dn(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Ta(u.href);
          var n = l.querySelector(
            de(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Ol(n), n;
          a = $s(u), (e = gt.get(e)) && kc(a, e), n = (l.ownerDocument || l).createElement("link"), Ol(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Hl(n, "link", a), t.state.loading |= 4, Dn(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Aa(u.src), (e = l.querySelector(
            oe(n)
          )) ? (t.instance = e, Ol(e), e) : (a = u, (e = gt.get(n)) && (a = U({}, u), Fc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ol(e), Hl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Dn(a, u.precedence, l));
    return t.instance;
  }
  function Dn(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function Fs(l, t, u) {
    if (Un === null) {
      var a = /* @__PURE__ */ new Map(), e = Un = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Un, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Na] || n[pl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Is(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Bd(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ps(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function jd(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Ta(a.href), n = t.querySelector(
          de(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Ol(n);
          return;
        }
        n = t.ownerDocument || t, a = $s(a), (e = gt.get(e)) && kc(a, e), n = n.createElement("link"), Ol(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Hl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Nn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Ic = 0;
  function Gd(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Ic === 0 && (Ic = 62500 * bd());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Ic ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(xd, l), Hn = null, Nn.call(l));
  }
  function xd(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Hn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Nn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Xd(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lv(l, t, u, a, e, n, f, c, i, d, S, r) {
    return l = new Xd(
      l,
      t,
      u,
      f,
      i,
      d,
      S,
      r,
      c
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Hf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Yf(n), l;
  }
  function tv(l) {
    return l ? (l = la, l) : la;
  }
  function uv(l, t, u, a, e, n) {
    e = tv(e), a.context === null ? a.context = e : a.pendingContext = e, a = au(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = eu(l, a, t), u !== null && (wl(u, l, t), wa(u, l, t));
  }
  function av(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Pc(l, t) {
    av(l, t), (l = l.alternate) && av(l, t);
  }
  function ev(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = pu(l, 67108864);
      t !== null && wl(t, l, 67108864), Pc(l, 67108864);
    }
  }
  function nv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var u = pu(l, t);
      u !== null && wl(u, l, t), Pc(l, t);
    }
  }
  var qn = !0;
  function Qd(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 2, li(l, t, u, a);
    } finally {
      _.p = n, b.T = e;
    }
  }
  function Zd(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 8, li(l, t, u, a);
    } finally {
      _.p = n, b.T = e;
    }
  }
  function li(l, t, u, a) {
    if (qn) {
      var e = ti(a);
      if (e === null)
        Xc(
          l,
          t,
          a,
          Cn,
          u
        ), cv(l, a);
      else if (Ld(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (cv(l, a), t & 4 && -1 < Vd.indexOf(l)) {
        for (; e !== null; ) {
          var n = Vu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Tu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Il(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    pt(n), ($ & 6) === 0 && (gn = kl() + 500, ye(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = pu(n, 2), c !== null && wl(c, n, 2), bn(), Pc(n, 2);
            }
          if (n = ti(a), n === null && Xc(
            l,
            t,
            a,
            Cn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Xc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function ti(l) {
    return l = uf(l), ui(l);
  }
  var Cn = null;
  function ui(l) {
    if (Cn = null, l = Zu(l), l !== null) {
      var t = vl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Sl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Tl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function fv(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dv()) {
          case oi:
            return 2;
          case hi:
            return 8;
          case Te:
          case Uv:
            return 32;
          case gi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ai = !1, hu = null, gu = null, Su = null, ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), bu = [], Vd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        hu = null;
        break;
      case "dragenter":
      case "dragleave":
        gu = null;
        break;
      case "mouseover":
      case "mouseout":
        Su = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function be(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Vu(t), t !== null && ev(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Ld(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return hu = be(
          hu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return gu = be(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return Su = be(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(
          n,
          be(
            ge.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, Se.set(
          n,
          be(
            Se.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function iv(l) {
    var t = Zu(l.target);
    if (t !== null) {
      var u = vl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Sl(u), t !== null) {
            l.blockedOn = t, Ti(l.priority, function() {
              nv(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Tl(u), t !== null) {
            l.blockedOn = t, Ti(l.priority, function() {
              nv(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = ti(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        tf = a, u.target.dispatchEvent(a), tf = null;
      } else
        return t = Vu(u), t !== null && ev(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function yv(l, t, u) {
    Yn(l) && u.delete(t);
  }
  function Kd() {
    ai = !1, hu !== null && Yn(hu) && (hu = null), gu !== null && Yn(gu) && (gu = null), Su !== null && Yn(Su) && (Su = null), ge.forEach(yv), Se.forEach(yv);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ai || (ai = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      Kd
    )));
  }
  var jn = null;
  function sv(l) {
    jn !== l && (jn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        jn === l && (jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ui(a || u) === null)
              continue;
            break;
          }
          var n = Vu(u);
          n !== null && (l.splice(t, 3), t -= 3, tc(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function _a(l) {
    function t(i) {
      return Bn(i, l);
    }
    hu !== null && Bn(hu, l), gu !== null && Bn(gu, l), Su !== null && Bn(Su, l), ge.forEach(t), Se.forEach(t);
    for (var u = 0; u < bu.length; u++) {
      var a = bu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < bu.length && (u = bu[0], u.blockedOn === null); )
      iv(u), u.blockedOn === null && bu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Ql] || null;
        if (typeof n == "function")
          f || sv(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ql] || null)
              c = f.formAction;
            else if (ui(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), sv(u);
        }
      }
  }
  function vv() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ei(l) {
    this._internalRoot = l;
  }
  Gn.prototype.render = ei.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = nt();
    uv(u, a, l, t, null, null);
  }, Gn.prototype.unmount = ei.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      uv(l.current, 2, null, l, null, null), bn(), t[Qu] = null;
    }
  };
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ei();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < bu.length && t !== 0 && t < bu[u].priority; u++) ;
      bu.splice(u, 0, l), u === 0 && iv(l);
    }
  };
  var mv = el.version;
  if (mv !== "19.2.5")
    throw Error(
      h(
        527,
        mv,
        "19.2.5"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = T(t), l = l !== null ? V(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jd = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xn.isDisabled && xn.supportsFiber)
      try {
        pa = xn.inject(
          Jd
        ), Fl = xn;
      } catch {
      }
  }
  return re.createRoot = function(l, t) {
    if (!sl(l)) throw Error(h(299));
    var u = !1, a = "", e = zy, n = ry, f = Ey;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = lv(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      vv
    ), l[Qu] = t.current, xc(l), new ei(t);
  }, re.hydrateRoot = function(l, t, u) {
    if (!sl(l)) throw Error(h(299));
    var a = !1, e = "", n = zy, f = ry, c = Ey, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = lv(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      i,
      n,
      f,
      c,
      vv
    ), t.context = tv(null), u = t.current, a = nt(), a = wn(a), e = au(a), e.callback = null, eu(u, e, a), u = a, t.current.lanes = u, Ua(t, u), pt(t), l[Qu] = t.current, xc(l), new Gn(t);
  }, re.version = "19.2.5", re;
}
var Tv;
function ao() {
  if (Tv) return fi.exports;
  Tv = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (el) {
        console.error(el);
      }
  }
  return A(), fi.exports = uo(), fi.exports;
}
var eo = ao(), Oa = vi();
const no = (A) => {
  A.currentTarget.style.opacity = "0";
}, fo = ({ country: A }) => /* @__PURE__ */ _l.jsxs("li", { className: "country-item", children: [
  /* @__PURE__ */ _l.jsx(
    "img",
    {
      className: "country-flag",
      src: A.flag,
      alt: `Flag of ${A.name}`,
      onError: no
    }
  ),
  /* @__PURE__ */ _l.jsxs("div", { className: "country-details", children: [
    /* @__PURE__ */ _l.jsx("span", { className: "country-name", children: A.name }),
    /* @__PURE__ */ _l.jsxs("span", { className: "country-meta", children: [
      A.capital,
      " · ",
      A.population.toLocaleString("en-US"),
      " · ",
      A.region
    ] })
  ] })
] }), _v = 5, co = Array.from({ length: _v }, (A, el) => el);
function io({ sdk: A }) {
  const [el, W] = Oa.useState(A.getProps()), [h, sl] = Oa.useState([]), [vl, Sl] = Oa.useState(!0), [Tl, N] = Oa.useState(null);
  return Oa.useEffect(() => A.on("propsChanged", W), [A]), Oa.useEffect(() => {
    let T = !1;
    return new window.WidgetServiceSDK().connectors.execute({ permalink: "rest-countries", method: "GET" }).then((V) => {
      T || (sl(
        [...V].sort((U, F) => F.population - U.population).slice(0, _v).map((U) => {
          var F;
          return {
            name: U.name.common,
            capital: ((F = U.capital) == null ? void 0 : F[0]) ?? "N/A",
            population: U.population,
            flag: U.flags.png,
            region: U.region
          };
        })
      ), Sl(!1));
    }).catch((V) => {
      T || (N(V instanceof Error ? V.message : "Failed to load"), Sl(!1));
    }), () => {
      T = !0;
    };
  }, []), /* @__PURE__ */ _l.jsxs("section", { className: "react-widget-section", children: [
    /* @__PURE__ */ _l.jsx("p", { className: "widget-framework-header", children: el.title ?? "" }),
    vl && /* @__PURE__ */ _l.jsx("div", { role: "status", "aria-label": "Loading country data", children: /* @__PURE__ */ _l.jsx("ul", { className: "country-list", children: co.map((T) => /* @__PURE__ */ _l.jsxs("li", { "aria-hidden": "true", className: "country-item country-item--skeleton", children: [
      /* @__PURE__ */ _l.jsx("div", { className: "country-flag country-flag--skeleton" }),
      /* @__PURE__ */ _l.jsxs("div", { className: "country-details", children: [
        /* @__PURE__ */ _l.jsx("div", { className: "country-skeleton-line country-skeleton-line--name" }),
        /* @__PURE__ */ _l.jsx("div", { className: "country-skeleton-line country-skeleton-line--meta" })
      ] })
    ] }, T)) }) }),
    !vl && Tl && /* @__PURE__ */ _l.jsx("div", { role: "alert", className: "country-error", children: /* @__PURE__ */ _l.jsx("p", { children: Tl }) }),
    !vl && !Tl && /* @__PURE__ */ _l.jsx("ul", { className: "country-list", children: h.map((T) => /* @__PURE__ */ _l.jsx(fo, { country: T }, T.name)) })
  ] });
}
let yo = kd;
const Av = /* @__PURE__ */ new Set();
async function so(A) {
  await A.whenReady();
  const el = document.createElement("style");
  el.textContent = yo, Av.add(el), A.shadowRoot.insertBefore(el, A.shadowRoot.firstChild);
  const W = eo.createRoot(A.getContainer());
  W.render(/* @__PURE__ */ _l.jsx(io, { sdk: A })), A.on("destroy", () => {
    Av.delete(el), el.remove(), W.unmount();
  });
}
export {
  so as init
};
