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
var dm;
function w1() {
  if (dm) return ze;
  dm = 1;
  var O = Symbol.for("react.transitional.element"), fl = Symbol.for("react.fragment");
  function W(o, vl, ml) {
    var gl = null;
    if (ml !== void 0 && (gl = "" + ml), vl.key !== void 0 && (gl = "" + vl.key), "key" in vl) {
      ml = {};
      for (var Al in vl)
        Al !== "key" && (ml[Al] = vl[Al]);
    } else ml = vl;
    return vl = ml.ref, {
      $$typeof: O,
      type: o,
      key: gl,
      ref: vl !== void 0 ? vl : null,
      props: ml
    };
  }
  return ze.Fragment = fl, ze.jsx = W, ze.jsxs = W, ze;
}
var hm;
function W1() {
  return hm || (hm = 1, ni.exports = w1()), ni.exports;
}
var Dt = W1();
const $1 = ".react-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:#dceba2;box-shadow:inset 5px 0 #b1d629,0 1px 3px #0000001a,0 1px 2px #0000000f;color:#1e1e2e;box-sizing:border-box}.react-widget-title{margin:0 0 .75rem;font-size:1.25rem;font-weight:700;letter-spacing:-.015em}.country-status{margin:0;font-size:.875rem;opacity:.7}.country-error{color:#c0392b;opacity:1}.country-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem}.country-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem}.country-flag{width:1.5rem;height:1rem;object-fit:cover;border-radius:2px;flex-shrink:0}.country-name{font-weight:600;flex:1}.country-capital{opacity:.7}";
var fi = { exports: {} }, Te = {}, ci = { exports: {} }, ii = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var om;
function F1() {
  return om || (om = 1, (function(O) {
    function fl(b, _) {
      var q = b.length;
      b.push(_);
      l: for (; 0 < q; ) {
        var ll = q - 1 >>> 1, el = b[ll];
        if (0 < vl(el, _))
          b[ll] = _, b[q] = el, q = ll;
        else break l;
      }
    }
    function W(b) {
      return b.length === 0 ? null : b[0];
    }
    function o(b) {
      if (b.length === 0) return null;
      var _ = b[0], q = b.pop();
      if (q !== _) {
        b[0] = q;
        l: for (var ll = 0, el = b.length, v = el >>> 1; ll < v; ) {
          var E = 2 * (ll + 1) - 1, r = b[E], D = E + 1, Y = b[D];
          if (0 > vl(r, q))
            D < el && 0 > vl(Y, r) ? (b[ll] = Y, b[D] = q, ll = D) : (b[ll] = r, b[E] = q, ll = E);
          else if (D < el && 0 > vl(Y, q))
            b[ll] = Y, b[D] = q, ll = D;
          else break l;
        }
      }
      return _;
    }
    function vl(b, _) {
      var q = b.sortIndex - _.sortIndex;
      return q !== 0 ? q : b.id - _.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ml = performance;
      O.unstable_now = function() {
        return ml.now();
      };
    } else {
      var gl = Date, Al = gl.now();
      O.unstable_now = function() {
        return gl.now() - Al;
      };
    }
    var p = [], A = [], X = 1, H = null, k = 3, wl = !1, Bl = !1, ql = !1, Ut = !1, Wl = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Nl = typeof setImmediate < "u" ? setImmediate : null;
    function nt(b) {
      for (var _ = W(A); _ !== null; ) {
        if (_.callback === null) o(A);
        else if (_.startTime <= b)
          o(A), _.sortIndex = _.expirationTime, fl(p, _);
        else break;
        _ = W(A);
      }
    }
    function Tt(b) {
      if (ql = !1, nt(b), !Bl)
        if (W(p) !== null)
          Bl = !0, Gl || (Gl = !0, jl());
        else {
          var _ = W(A);
          _ !== null && St(Tt, _.startTime - b);
        }
    }
    var Gl = !1, L = -1, Xl = 5, Et = -1;
    function Qu() {
      return Ut ? !0 : !(O.unstable_now() - Et < Xl);
    }
    function At() {
      if (Ut = !1, Gl) {
        var b = O.unstable_now();
        Et = b;
        var _ = !0;
        try {
          l: {
            Bl = !1, ql && (ql = !1, Wt(L), L = -1), wl = !0;
            var q = k;
            try {
              t: {
                for (nt(b), H = W(p); H !== null && !(H.expirationTime > b && Qu()); ) {
                  var ll = H.callback;
                  if (typeof ll == "function") {
                    H.callback = null, k = H.priorityLevel;
                    var el = ll(
                      H.expirationTime <= b
                    );
                    if (b = O.unstable_now(), typeof el == "function") {
                      H.callback = el, nt(b), _ = !0;
                      break t;
                    }
                    H === W(p) && o(p), nt(b);
                  } else o(p);
                  H = W(p);
                }
                if (H !== null) _ = !0;
                else {
                  var v = W(A);
                  v !== null && St(
                    Tt,
                    v.startTime - b
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              H = null, k = q, wl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? jl() : Gl = !1;
        }
      }
    }
    var jl;
    if (typeof Nl == "function")
      jl = function() {
        Nl(At);
      };
    else if (typeof MessageChannel < "u") {
      var Tu = new MessageChannel(), pt = Tu.port2;
      Tu.port1.onmessage = At, jl = function() {
        pt.postMessage(null);
      };
    } else
      jl = function() {
        Wl(At, 0);
      };
    function St(b, _) {
      L = Wl(function() {
        b(O.unstable_now());
      }, _);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, O.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, O.unstable_next = function(b) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = k;
      }
      var q = k;
      k = _;
      try {
        return b();
      } finally {
        k = q;
      }
    }, O.unstable_requestPaint = function() {
      Ut = !0;
    }, O.unstable_runWithPriority = function(b, _) {
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
      var q = k;
      k = b;
      try {
        return _();
      } finally {
        k = q;
      }
    }, O.unstable_scheduleCallback = function(b, _, q) {
      var ll = O.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ll + q : ll) : q = ll, b) {
        case 1:
          var el = -1;
          break;
        case 2:
          el = 250;
          break;
        case 5:
          el = 1073741823;
          break;
        case 4:
          el = 1e4;
          break;
        default:
          el = 5e3;
      }
      return el = q + el, b = {
        id: X++,
        callback: _,
        priorityLevel: b,
        startTime: q,
        expirationTime: el,
        sortIndex: -1
      }, q > ll ? (b.sortIndex = q, fl(A, b), W(p) === null && b === W(A) && (ql ? (Wt(L), L = -1) : ql = !0, St(Tt, q - ll))) : (b.sortIndex = el, fl(p, b), Bl || wl || (Bl = !0, Gl || (Gl = !0, jl()))), b;
    }, O.unstable_shouldYield = Qu, O.unstable_wrapCallback = function(b) {
      var _ = k;
      return function() {
        var q = k;
        k = _;
        try {
          return b.apply(this, arguments);
        } finally {
          k = q;
        }
      };
    };
  })(ii)), ii;
}
var Sm;
function k1() {
  return Sm || (Sm = 1, ci.exports = F1()), ci.exports;
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
var gm;
function I1() {
  if (gm) return C;
  gm = 1;
  var O = Symbol.for("react.transitional.element"), fl = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), vl = Symbol.for("react.profiler"), ml = Symbol.for("react.consumer"), gl = Symbol.for("react.context"), Al = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), k = Symbol.iterator;
  function wl(v) {
    return v === null || typeof v != "object" ? null : (v = k && v[k] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var Bl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ql = Object.assign, Ut = {};
  function Wl(v, E, r) {
    this.props = v, this.context = E, this.refs = Ut, this.updater = r || Bl;
  }
  Wl.prototype.isReactComponent = {}, Wl.prototype.setState = function(v, E) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, E, "setState");
  }, Wl.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = Wl.prototype;
  function Nl(v, E, r) {
    this.props = v, this.context = E, this.refs = Ut, this.updater = r || Bl;
  }
  var nt = Nl.prototype = new Wt();
  nt.constructor = Nl, ql(nt, Wl.prototype), nt.isPureReactComponent = !0;
  var Tt = Array.isArray;
  function Gl() {
  }
  var L = { H: null, A: null, T: null, S: null }, Xl = Object.prototype.hasOwnProperty;
  function Et(v, E, r) {
    var D = r.ref;
    return {
      $$typeof: O,
      type: v,
      key: E,
      ref: D !== void 0 ? D : null,
      props: r
    };
  }
  function Qu(v, E) {
    return Et(v.type, E, v.props);
  }
  function At(v) {
    return typeof v == "object" && v !== null && v.$$typeof === O;
  }
  function jl(v) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(r) {
      return E[r];
    });
  }
  var Tu = /\/+/g;
  function pt(v, E) {
    return typeof v == "object" && v !== null && v.key != null ? jl("" + v.key) : E.toString(36);
  }
  function St(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(Gl, Gl) : (v.status = "pending", v.then(
          function(E) {
            v.status === "pending" && (v.status = "fulfilled", v.value = E);
          },
          function(E) {
            v.status === "pending" && (v.status = "rejected", v.reason = E);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function b(v, E, r, D, Y) {
    var j = typeof v;
    (j === "undefined" || j === "boolean") && (v = null);
    var F = !1;
    if (v === null) F = !0;
    else
      switch (j) {
        case "bigint":
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case O:
            case fl:
              F = !0;
              break;
            case X:
              return F = v._init, b(
                F(v._payload),
                E,
                r,
                D,
                Y
              );
          }
      }
    if (F)
      return Y = Y(v), F = D === "" ? "." + pt(v, 0) : D, Tt(Y) ? (r = "", F != null && (r = F.replace(Tu, "$&/") + "/"), b(Y, E, r, "", function(Ma) {
        return Ma;
      })) : Y != null && (At(Y) && (Y = Qu(
        Y,
        r + (Y.key == null || v && v.key === Y.key ? "" : ("" + Y.key).replace(
          Tu,
          "$&/"
        ) + "/") + F
      )), E.push(Y)), 1;
    F = 0;
    var Cl = D === "" ? "." : D + ":";
    if (Tt(v))
      for (var hl = 0; hl < v.length; hl++)
        D = v[hl], j = Cl + pt(D, hl), F += b(
          D,
          E,
          r,
          j,
          Y
        );
    else if (hl = wl(v), typeof hl == "function")
      for (v = hl.call(v), hl = 0; !(D = v.next()).done; )
        D = D.value, j = Cl + pt(D, hl++), F += b(
          D,
          E,
          r,
          j,
          Y
        );
    else if (j === "object") {
      if (typeof v.then == "function")
        return b(
          St(v),
          E,
          r,
          D,
          Y
        );
      throw E = String(v), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return F;
  }
  function _(v, E, r) {
    if (v == null) return v;
    var D = [], Y = 0;
    return b(v, D, "", "", function(j) {
      return E.call(r, j, Y++);
    }), D;
  }
  function q(v) {
    if (v._status === -1) {
      var E = v._result;
      E = E(), E.then(
        function(r) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = r);
        },
        function(r) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = r);
        }
      ), v._status === -1 && (v._status = 0, v._result = E);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ll = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, el = {
    map: _,
    forEach: function(v, E, r) {
      _(
        v,
        function() {
          E.apply(this, arguments);
        },
        r
      );
    },
    count: function(v) {
      var E = 0;
      return _(v, function() {
        E++;
      }), E;
    },
    toArray: function(v) {
      return _(v, function(E) {
        return E;
      }) || [];
    },
    only: function(v) {
      if (!At(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return C.Activity = H, C.Children = el, C.Component = Wl, C.Fragment = W, C.Profiler = vl, C.PureComponent = Nl, C.StrictMode = o, C.Suspense = p, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return L.H.useMemoCache(v);
    }
  }, C.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(v, E, r) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var D = ql({}, v.props), Y = v.key;
    if (E != null)
      for (j in E.key !== void 0 && (Y = "" + E.key), E)
        !Xl.call(E, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && E.ref === void 0 || (D[j] = E[j]);
    var j = arguments.length - 2;
    if (j === 1) D.children = r;
    else if (1 < j) {
      for (var F = Array(j), Cl = 0; Cl < j; Cl++)
        F[Cl] = arguments[Cl + 2];
      D.children = F;
    }
    return Et(v.type, Y, D);
  }, C.createContext = function(v) {
    return v = {
      $$typeof: gl,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: ml,
      _context: v
    }, v;
  }, C.createElement = function(v, E, r) {
    var D, Y = {}, j = null;
    if (E != null)
      for (D in E.key !== void 0 && (j = "" + E.key), E)
        Xl.call(E, D) && D !== "key" && D !== "__self" && D !== "__source" && (Y[D] = E[D]);
    var F = arguments.length - 2;
    if (F === 1) Y.children = r;
    else if (1 < F) {
      for (var Cl = Array(F), hl = 0; hl < F; hl++)
        Cl[hl] = arguments[hl + 2];
      Y.children = Cl;
    }
    if (v && v.defaultProps)
      for (D in F = v.defaultProps, F)
        Y[D] === void 0 && (Y[D] = F[D]);
    return Et(v, j, Y);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(v) {
    return { $$typeof: Al, render: v };
  }, C.isValidElement = At, C.lazy = function(v) {
    return {
      $$typeof: X,
      _payload: { _status: -1, _result: v },
      _init: q
    };
  }, C.memo = function(v, E) {
    return {
      $$typeof: A,
      type: v,
      compare: E === void 0 ? null : E
    };
  }, C.startTransition = function(v) {
    var E = L.T, r = {};
    L.T = r;
    try {
      var D = v(), Y = L.S;
      Y !== null && Y(r, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Gl, ll);
    } catch (j) {
      ll(j);
    } finally {
      E !== null && r.types !== null && (E.types = r.types), L.T = E;
    }
  }, C.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, C.use = function(v) {
    return L.H.use(v);
  }, C.useActionState = function(v, E, r) {
    return L.H.useActionState(v, E, r);
  }, C.useCallback = function(v, E) {
    return L.H.useCallback(v, E);
  }, C.useContext = function(v) {
    return L.H.useContext(v);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(v, E) {
    return L.H.useDeferredValue(v, E);
  }, C.useEffect = function(v, E) {
    return L.H.useEffect(v, E);
  }, C.useEffectEvent = function(v) {
    return L.H.useEffectEvent(v);
  }, C.useId = function() {
    return L.H.useId();
  }, C.useImperativeHandle = function(v, E, r) {
    return L.H.useImperativeHandle(v, E, r);
  }, C.useInsertionEffect = function(v, E) {
    return L.H.useInsertionEffect(v, E);
  }, C.useLayoutEffect = function(v, E) {
    return L.H.useLayoutEffect(v, E);
  }, C.useMemo = function(v, E) {
    return L.H.useMemo(v, E);
  }, C.useOptimistic = function(v, E) {
    return L.H.useOptimistic(v, E);
  }, C.useReducer = function(v, E, r) {
    return L.H.useReducer(v, E, r);
  }, C.useRef = function(v) {
    return L.H.useRef(v);
  }, C.useState = function(v) {
    return L.H.useState(v);
  }, C.useSyncExternalStore = function(v, E, r) {
    return L.H.useSyncExternalStore(
      v,
      E,
      r
    );
  }, C.useTransition = function() {
    return L.H.useTransition();
  }, C.version = "19.2.5", C;
}
var bm;
function mi() {
  return bm || (bm = 1, yi.exports = I1()), yi.exports;
}
var vi = { exports: {} }, Rl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;
function P1() {
  if (zm) return Rl;
  zm = 1;
  var O = mi();
  function fl(p) {
    var A = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++)
        A += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return "Minified React error #" + p + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function W() {
  }
  var o = {
    d: {
      f: W,
      r: function() {
        throw Error(fl(522));
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
  }, vl = Symbol.for("react.portal");
  function ml(p, A, X) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: vl,
      key: H == null ? null : "" + H,
      children: p,
      containerInfo: A,
      implementation: X
    };
  }
  var gl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Al(p, A) {
    if (p === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Rl.createPortal = function(p, A) {
    var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(fl(299));
    return ml(p, A, null, X);
  }, Rl.flushSync = function(p) {
    var A = gl.T, X = o.p;
    try {
      if (gl.T = null, o.p = 2, p) return p();
    } finally {
      gl.T = A, o.p = X, o.d.f();
    }
  }, Rl.preconnect = function(p, A) {
    typeof p == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, o.d.C(p, A));
  }, Rl.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, Rl.preinit = function(p, A) {
    if (typeof p == "string" && A && typeof A.as == "string") {
      var X = A.as, H = Al(X, A.crossOrigin), k = typeof A.integrity == "string" ? A.integrity : void 0, wl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      X === "style" ? o.d.S(
        p,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: H,
          integrity: k,
          fetchPriority: wl
        }
      ) : X === "script" && o.d.X(p, {
        crossOrigin: H,
        integrity: k,
        fetchPriority: wl,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Rl.preinitModule = function(p, A) {
    if (typeof p == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var X = Al(
            A.as,
            A.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: X,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && o.d.M(p);
  }, Rl.preload = function(p, A) {
    if (typeof p == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var X = A.as, H = Al(X, A.crossOrigin);
      o.d.L(p, X, {
        crossOrigin: H,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Rl.preloadModule = function(p, A) {
    if (typeof p == "string")
      if (A) {
        var X = Al(A.as, A.crossOrigin);
        o.d.m(p, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: X,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else o.d.m(p);
  }, Rl.requestFormReset = function(p) {
    o.d.r(p);
  }, Rl.unstable_batchedUpdates = function(p, A) {
    return p(A);
  }, Rl.useFormState = function(p, A, X) {
    return gl.H.useFormState(p, A, X);
  }, Rl.useFormStatus = function() {
    return gl.H.useHostTransitionStatus();
  }, Rl.version = "19.2.5", Rl;
}
var Tm;
function ld() {
  if (Tm) return vi.exports;
  Tm = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (fl) {
        console.error(fl);
      }
  }
  return O(), vi.exports = P1(), vi.exports;
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
var Em;
function td() {
  if (Em) return Te;
  Em = 1;
  var O = k1(), fl = mi(), W = ld();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function vl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ml(l) {
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
  function gl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Al(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(l) {
    if (ml(l) !== l)
      throw Error(o(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ml(l), t === null) throw Error(o(188));
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
          if (n === u) return p(e), l;
          if (n === a) return p(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
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
          if (!f) throw Error(o(189));
        }
      }
      if (u.alternate !== a) throw Error(o(190));
    }
    if (u.tag !== 3) throw Error(o(188));
    return u.stateNode.current === u ? l : t;
  }
  function X(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = X(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, k = Symbol.for("react.element"), wl = Symbol.for("react.transitional.element"), Bl = Symbol.for("react.portal"), ql = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), Wl = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), Nl = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), Et = Symbol.for("react.activity"), Qu = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function jl(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Tu = Symbol.for("react.client.reference");
  function pt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Tu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case Wl:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Bl:
          return "Portal";
        case Nl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case nt:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case L:
          return t = l.displayName || null, t !== null ? t : pt(l.type) || "Memo";
        case Xl:
          t = l._payload, l = l._init;
          try {
            return pt(l(t));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, b = fl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ll = [], el = -1;
  function v(l) {
    return { current: l };
  }
  function E(l) {
    0 > el || (l.current = ll[el], ll[el] = null, el--);
  }
  function r(l, t) {
    el++, ll[el] = l.current, l.current = t;
  }
  var D = v(null), Y = v(null), j = v(null), F = v(null);
  function Cl(l, t) {
    switch (r(j, t), r(Y, l), r(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Bv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Bv(t), l = Gv(t, l);
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
    E(D), r(D, l);
  }
  function hl() {
    E(D), E(Y), E(j);
  }
  function Ma(l) {
    l.memoizedState !== null && r(F, l);
    var t = D.current, u = Gv(t, l.type);
    t !== u && (r(Y, l), r(D, u));
  }
  function Ee(l) {
    Y.current === l && (E(D), E(Y)), F.current === l && (E(F), oe._currentValue = q);
  }
  var Qn, si;
  function Eu(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Qn = t && t[1] || "", si = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qn + l + si;
  }
  var Zn = !1;
  function xn(l, t) {
    if (!l || Zn) return "";
    Zn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (S) {
                  var h = S;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (S) {
                  h = S;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                h = S;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (S) {
            if (S && h && typeof S.stack == "string")
              return [S.stack, h.stack];
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
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Zn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Eu(u) : "";
  }
  function rm(l, t) {
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
        return xn(l.type, !1);
      case 11:
        return xn(l.type.render, !1);
      case 1:
        return xn(l.type, !0);
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
        t += rm(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = O.unstable_scheduleCallback, Kn = O.unstable_cancelCallback, Om = O.unstable_shouldYield, Mm = O.unstable_requestPaint, $l = O.unstable_now, Dm = O.unstable_getCurrentPriorityLevel, hi = O.unstable_ImmediatePriority, oi = O.unstable_UserBlockingPriority, Ae = O.unstable_NormalPriority, Um = O.unstable_LowPriority, Si = O.unstable_IdlePriority, pm = O.log, Hm = O.unstable_setDisableYieldValue, Da = null, Fl = null;
  function $t(l) {
    if (typeof pm == "function" && Hm(l), Fl && typeof Fl.setStrictMode == "function")
      try {
        Fl.setStrictMode(Da, l);
      } catch {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : qm, Nm = Math.log, Rm = Math.LN2;
  function qm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Nm(l) / Rm | 0) | 0;
  }
  var _e = 256, re = 262144, Oe = 4194304;
  function Au(l) {
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
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Au(a) : (f &= c, f !== 0 ? e = Au(f) : u || (u = c & ~l, u !== 0 && (e = Au(u))))) : (c = a & ~n, c !== 0 ? e = Au(c) : f !== 0 ? e = Au(f) : u || (u = a & ~l, u !== 0 && (e = Au(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ua(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Cm(l, t) {
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
  function gi() {
    var l = Oe;
    return Oe <<= 1, (Oe & 62914560) === 0 && (Oe = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function pa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ym(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - kl(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = d[g];
      if (h !== null)
        for (d[g] = null, g = 0; g < h.length; g++) {
          var S = h[g];
          S !== null && (S.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && bi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - kl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function zi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - kl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ti(l, t) {
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
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fm(l.type));
  }
  function Ai(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Ml = "__reactFiber$" + Ft, Ql = "__reactProps$" + Ft, Zu = "__reactContainer$" + Ft, $n = "__reactEvents$" + Ft, Bm = "__reactListeners$" + Ft, Gm = "__reactHandles$" + Ft, _i = "__reactResources$" + Ft, Ha = "__reactMarker$" + Ft;
  function Fn(l) {
    delete l[Ml], delete l[Ql], delete l[$n], delete l[Bm], delete l[Gm];
  }
  function xu(l) {
    var t = l[Ml];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Zu] || u[Ml]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Lv(l); l !== null; ) {
            if (u = l[Ml]) return u;
            l = Lv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Vu(l) {
    if (l = l[Ml] || l[Zu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Na(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Lu(l) {
    var t = l[_i];
    return t || (t = l[_i] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rl(l) {
    l[Ha] = !0;
  }
  var ri = /* @__PURE__ */ new Set(), Oi = {};
  function _u(l, t) {
    Ku(l, t), Ku(l + "Capture", t);
  }
  function Ku(l, t) {
    for (Oi[l] = t, l = 0; l < t.length; l++)
      ri.add(t[l]);
  }
  var Xm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mi = {}, Di = {};
  function jm(l) {
    return Vn.call(Di, l) ? !0 : Vn.call(Mi, l) ? !1 : Xm.test(l) ? Di[l] = !0 : (Mi[l] = !0, !1);
  }
  function De(l, t, u) {
    if (jm(t))
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
  function Ue(l, t, u) {
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
  function Ht(l, t, u, a) {
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
  function ft(l) {
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
  function Ui(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qm(l, t, u) {
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
  function kn(l) {
    if (!l._valueTracker) {
      var t = Ui(l) ? "checked" : "value";
      l._valueTracker = Qm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function pi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ui(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function pe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function ct(l) {
    return l.replace(
      Zm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, ft(t)) : u != null ? Pn(l, f, ft(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ft(c) : l.removeAttribute("name");
  }
  function Hi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kn(l);
        return;
      }
      u = u != null ? "" + ft(u) : "", t = t != null ? "" + ft(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), kn(l);
  }
  function Pn(l, t, u) {
    t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Ju(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ft(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ni(l, t, u) {
    if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ft(u) : "";
  }
  function Ri(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(o(92));
        if (St(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ft(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), kn(l);
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
  var xm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || xm.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Ci(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
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
  var Vm = /* @__PURE__ */ new Map([
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
  ]), Lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return Lm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nt() {
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
              'input[name="' + ct(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Ql] || null;
                if (!e) throw Error(o(90));
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
              a = u[t], a.form === l.form && pi(a);
          }
          break l;
        case "textarea":
          Ni(l, u.value, u.defaultValue);
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
        o(231, t, typeof u)
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
  var kt = null, nf = null, Ne = null;
  function Gi() {
    if (Ne) return Ne;
    var l, t = nf, u = t.length, a, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ne = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Xi() {
    return !1;
  }
  function Zl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Xi, this.isPropagationStopped = Xi, this;
    }
    return H(t.prototype, {
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
  var ru = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = Zl(ru), Ca = H({}, ru, { view: 0, detail: 0 }), Km = Zl(Ca), ff, cf, Ya, Ye = H({}, Ca, {
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
    getModifierState: vf,
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
  }), ji = Zl(Ye), Jm = H({}, Ye, { dataTransfer: 0 }), wm = Zl(Jm), Wm = H({}, Ca, { relatedTarget: 0 }), yf = Zl(Wm), $m = H({}, ru, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fm = Zl($m), km = H({}, ru, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Im = Zl(km), Pm = H({}, ru, { data: 0 }), Qi = Zl(Pm), ls = {
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
  }, ts = {
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
  }, us = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function as(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = us[l]) ? !!t[l] : !1;
  }
  function vf() {
    return as;
  }
  var es = H({}, Ca, {
    key: function(l) {
      if (l.key) {
        var t = ls[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ts[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ns = Zl(es), fs = H({}, Ye, {
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
  }), Zi = Zl(fs), cs = H({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vf
  }), is = Zl(cs), ys = H({}, ru, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vs = Zl(ys), ms = H({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ss = Zl(ms), ds = H({}, ru, {
    newState: 0,
    oldState: 0
  }), hs = Zl(ds), os = [9, 13, 27, 32], mf = Rt && "CompositionEvent" in window, Ba = null;
  Rt && "documentMode" in document && (Ba = document.documentMode);
  var Ss = Rt && "TextEvent" in window && !Ba, xi = Rt && (!mf || Ba && 8 < Ba && 11 >= Ba), Vi = " ", Li = !1;
  function Ki(l, t) {
    switch (l) {
      case "keyup":
        return os.indexOf(t.keyCode) !== -1;
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
  var Fu = !1;
  function gs(l, t) {
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
  function bs(l, t) {
    if (Fu)
      return l === "compositionend" || !mf && Ki(l, t) ? (l = Gi(), Ne = nf = kt = null, Fu = !1, l) : null;
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
        return xi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zs = {
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
    return t === "input" ? !!zs[l.type] : t === "textarea";
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
  var Ga = null, Xa = null;
  function Ts(l) {
    Hv(l, 0);
  }
  function Be(l) {
    var t = Na(l);
    if (pi(t)) return l;
  }
  function $i(l, t) {
    if (l === "change") return t;
  }
  var Fi = !1;
  if (Rt) {
    var sf;
    if (Rt) {
      var df = "oninput" in document;
      if (!df) {
        var ki = document.createElement("div");
        ki.setAttribute("oninput", "return;"), df = typeof ki.oninput == "function";
      }
      sf = df;
    } else sf = !1;
    Fi = sf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ii() {
    Ga && (Ga.detachEvent("onpropertychange", Pi), Xa = Ga = null);
  }
  function Pi(l) {
    if (l.propertyName === "value" && Be(Xa)) {
      var t = [];
      Wi(
        t,
        Xa,
        l,
        uf(l)
      ), Bi(Ts, t);
    }
  }
  function Es(l, t, u) {
    l === "focusin" ? (Ii(), Ga = t, Xa = u, Ga.attachEvent("onpropertychange", Pi)) : l === "focusout" && Ii();
  }
  function As(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Xa);
  }
  function _s(l, t) {
    if (l === "click") return Be(t);
  }
  function rs(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function Os(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Il = typeof Object.is == "function" ? Object.is : Os;
  function ja(l, t) {
    if (Il(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Vn.call(t, e) || !Il(l[e], t[e]))
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
    for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = pe(l.document);
    }
    return t;
  }
  function hf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Ms = Rt && "documentMode" in document && 11 >= document.documentMode, ku = null, of = null, Qa = null, Sf = !1;
  function e0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Sf || ku == null || ku !== pe(a) || (a = ku, "selectionStart" in a && hf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && ja(Qa, a) || (Qa = a, a = On(of, "onSelect"), 0 < a.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = ku)));
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
  }, gf = {}, n0 = {};
  Rt && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete Iu.animationend.animation, delete Iu.animationiteration.animation, delete Iu.animationstart.animation), "TransitionEvent" in window || delete Iu.transitionend.transition);
  function Mu(l) {
    if (gf[l]) return gf[l];
    if (!Iu[l]) return l;
    var t = Iu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in n0)
        return gf[l] = t[u];
    return l;
  }
  var f0 = Mu("animationend"), c0 = Mu("animationiteration"), i0 = Mu("animationstart"), Ds = Mu("transitionrun"), Us = Mu("transitionstart"), ps = Mu("transitioncancel"), y0 = Mu("transitionend"), v0 = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bf.push("scrollEnd");
  function gt(l, t) {
    v0.set(l, t), _u(t, [l]);
  }
  var Ge = typeof reportError == "function" ? reportError : function(l) {
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
  }, it = [], Pu = 0, zf = 0;
  function Xe() {
    for (var l = Pu, t = zf = Pu = 0; t < l; ) {
      var u = it[t];
      it[t++] = null;
      var a = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var n = it[t];
      if (it[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && m0(u, e, n);
    }
  }
  function je(l, t, u, a) {
    it[Pu++] = l, it[Pu++] = t, it[Pu++] = u, it[Pu++] = a, zf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Tf(l, t, u, a) {
    return je(l, t, u, a), Qe(l);
  }
  function Du(l, t) {
    return je(l, null, null, t), Qe(l);
  }
  function m0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - kl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, pc = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var la = {};
  function Hs(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pl(l, t, u, a) {
    return new Hs(l, t, u, a);
  }
  function Ef(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Pl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function s0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ze(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Ef(l) && (f = 1);
    else if (typeof l == "string")
      f = Y1(
        l,
        u,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Et:
          return l = Pl(31, u, t, e), l.elementType = Et, l.lanes = n, l;
        case ql:
          return Uu(u.children, e, n, t);
        case Ut:
          f = 8, e |= 24;
          break;
        case Wl:
          return l = Pl(12, u, t, e | 2), l.elementType = Wl, l.lanes = n, l;
        case Tt:
          return l = Pl(13, u, t, e), l.elementType = Tt, l.lanes = n, l;
        case Gl:
          return l = Pl(19, u, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Nl:
                f = 10;
                break l;
              case Wt:
                f = 9;
                break l;
              case nt:
                f = 11;
                break l;
              case L:
                f = 14;
                break l;
              case Xl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Pl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Uu(l, t, u, a) {
    return l = Pl(7, l, a, t), l.lanes = u, l;
  }
  function Af(l, t, u) {
    return l = Pl(6, l, null, t), l.lanes = u, l;
  }
  function d0(l) {
    var t = Pl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _f(l, t, u) {
    return t = Pl(
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
  var h0 = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = h0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: di(t)
      }, h0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: di(t)
    };
  }
  var ta = [], ua = 0, xe = null, Za = 0, vt = [], mt = 0, It = null, _t = 1, rt = "";
  function Ct(l, t) {
    ta[ua++] = Za, ta[ua++] = xe, xe = l, Za = t;
  }
  function o0(l, t, u) {
    vt[mt++] = _t, vt[mt++] = rt, vt[mt++] = It, It = l;
    var a = _t;
    l = rt;
    var e = 32 - kl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - kl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, _t = 1 << 32 - kl(t) + e | u << e | a, rt = n + l;
    } else
      _t = 1 << n | u << e | a, rt = l;
  }
  function rf(l) {
    l.return !== null && (Ct(l, 1), o0(l, 1, 0));
  }
  function Of(l) {
    for (; l === xe; )
      xe = ta[--ua], ta[ua] = null, Za = ta[--ua], ta[ua] = null;
    for (; l === It; )
      It = vt[--mt], vt[mt] = null, rt = vt[--mt], vt[mt] = null, _t = vt[--mt], vt[mt] = null;
  }
  function S0(l, t) {
    vt[mt++] = _t, vt[mt++] = rt, vt[mt++] = It, _t = t.id, rt = t.overflow, It = l;
  }
  var Dl = null, cl = null, K = !1, Pt = null, st = !1, Mf = Error(o(519));
  function lu(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xa(yt(t, l)), Mf;
  }
  function g0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Ml] = l, t[Ql] = a, u) {
      case "dialog":
        Z("cancel", t), Z("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Z("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ve.length; u++)
          Z(ve[u], t);
        break;
      case "source":
        Z("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Z("error", t), Z("load", t);
        break;
      case "details":
        Z("toggle", t);
        break;
      case "input":
        Z("invalid", t), Hi(
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
        Z("invalid", t);
        break;
      case "textarea":
        Z("invalid", t), Ri(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Cv(t.textContent, u) ? (a.popover != null && (Z("beforetoggle", t), Z("toggle", t)), a.onScroll != null && Z("scroll", t), a.onScrollEnd != null && Z("scrollend", t), a.onClick != null && (t.onclick = Nt), t = !0) : t = !1, t || lu(l, !0);
  }
  function b0(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          st = !1;
          return;
        case 27:
        case 3:
          st = !0;
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
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      cl = Vv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      cl = Vv(l);
    } else
      t === 27 ? (t = cl, hu(l.type) ? (l = $c, $c = null, cl = l) : cl = t) : cl = Dl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function pu() {
    cl = Dl = null, K = !1;
  }
  function Df() {
    var l = Pt;
    return l !== null && (Kl === null ? Kl = l : Kl.push.apply(
      Kl,
      l
    ), Pt = null), l;
  }
  function xa(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Uf = v(null), Hu = null, Yt = null;
  function tu(l, t, u) {
    r(Uf, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
    l._currentValue = Uf.current, E(Uf);
  }
  function pf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Hf(l, t, u, a) {
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
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), pf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(o(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), pf(f, u, l), f = null;
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
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Il(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === F.current) {
        if (f = e.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && Hf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Nu(l) {
    Hu = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return z0(Hu, l);
  }
  function Le(l, t) {
    return Hu === null && Nu(l), z0(l, t);
  }
  function z0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Yt === null) {
      if (l === null) throw Error(o(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return u;
  }
  var Ns = typeof AbortController < "u" ? AbortController : function() {
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
  }, Rs = O.unstable_scheduleCallback, qs = O.unstable_NormalPriority, bl = {
    $$typeof: Nl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Nf() {
    return {
      controller: new Ns(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && Rs(qs, function() {
      l.controller.abort();
    });
  }
  var La = null, Rf = 0, na = 0, fa = null;
  function Cs(l, t) {
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
    return Rf++, t.then(T0, T0), t;
  }
  function T0() {
    if (--Rf === 0 && La !== null) {
      fa !== null && (fa.status = "fulfilled");
      var l = La;
      La = null, na = 0, fa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ys(l, t) {
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
    ev = $l(), typeof t == "object" && t !== null && typeof t.then == "function" && Cs(l, t), E0 !== null && E0(l, t);
  };
  var Ru = v(null);
  function qf() {
    var l = Ru.current;
    return l !== null ? l : nl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? r(Ru, Ru.current) : r(Ru, t.pool);
  }
  function A0() {
    var l = qf();
    return l === null ? null : { parent: bl._currentValue, pool: l };
  }
  var ca = Error(o(460)), Cf = Error(o(474)), Je = Error(o(542)), we = { then: function() {
  } };
  function _0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function r0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Nt, Nt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, M0(l), l;
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (l = nl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
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
    if (Cu === null) throw Error(o(459));
    var l = Cu;
    return Cu = null, l;
  }
  function M0(l) {
    if (l === ca || l === Je)
      throw Error(o(483));
  }
  var ia = null, Ka = 0;
  function We(l) {
    var t = Ka;
    return Ka += 1, ia === null && (ia = []), r0(ia, l, t);
  }
  function Ja(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === k ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function D0(l) {
    function t(m, y) {
      if (l) {
        var s = m.deletions;
        s === null ? (m.deletions = [y], m.flags |= 16) : s.push(y);
      }
    }
    function u(m, y) {
      if (!l) return null;
      for (; y !== null; )
        t(m, y), y = y.sibling;
      return null;
    }
    function a(m) {
      for (var y = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
      return y;
    }
    function e(m, y) {
      return m = qt(m, y), m.index = 0, m.sibling = null, m;
    }
    function n(m, y, s) {
      return m.index = s, l ? (s = m.alternate, s !== null ? (s = s.index, s < y ? (m.flags |= 67108866, y) : s) : (m.flags |= 67108866, y)) : (m.flags |= 1048576, y);
    }
    function f(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, y, s, z) {
      return y === null || y.tag !== 6 ? (y = Af(s, m.mode, z), y.return = m, y) : (y = e(y, s), y.return = m, y);
    }
    function i(m, y, s, z) {
      var N = s.type;
      return N === ql ? g(
        m,
        y,
        s.props.children,
        z,
        s.key
      ) : y !== null && (y.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Xl && qu(N) === y.type) ? (y = e(y, s.props), Ja(y, s), y.return = m, y) : (y = Ze(
        s.type,
        s.key,
        s.props,
        null,
        m.mode,
        z
      ), Ja(y, s), y.return = m, y);
    }
    function d(m, y, s, z) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== s.containerInfo || y.stateNode.implementation !== s.implementation ? (y = _f(s, m.mode, z), y.return = m, y) : (y = e(y, s.children || []), y.return = m, y);
    }
    function g(m, y, s, z, N) {
      return y === null || y.tag !== 7 ? (y = Uu(
        s,
        m.mode,
        z,
        N
      ), y.return = m, y) : (y = e(y, s), y.return = m, y);
    }
    function T(m, y, s) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Af(
          "" + y,
          m.mode,
          s
        ), y.return = m, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case wl:
            return s = Ze(
              y.type,
              y.key,
              y.props,
              null,
              m.mode,
              s
            ), Ja(s, y), s.return = m, s;
          case Bl:
            return y = _f(
              y,
              m.mode,
              s
            ), y.return = m, y;
          case Xl:
            return y = qu(y), T(m, y, s);
        }
        if (St(y) || jl(y))
          return y = Uu(
            y,
            m.mode,
            s,
            null
          ), y.return = m, y;
        if (typeof y.then == "function")
          return T(m, We(y), s);
        if (y.$$typeof === Nl)
          return T(
            m,
            Le(m, y),
            s
          );
        $e(m, y);
      }
      return null;
    }
    function h(m, y, s, z) {
      var N = y !== null ? y.key : null;
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return N !== null ? null : c(m, y, "" + s, z);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case wl:
            return s.key === N ? i(m, y, s, z) : null;
          case Bl:
            return s.key === N ? d(m, y, s, z) : null;
          case Xl:
            return s = qu(s), h(m, y, s, z);
        }
        if (St(s) || jl(s))
          return N !== null ? null : g(m, y, s, z, null);
        if (typeof s.then == "function")
          return h(
            m,
            y,
            We(s),
            z
          );
        if (s.$$typeof === Nl)
          return h(
            m,
            y,
            Le(m, s),
            z
          );
        $e(m, s);
      }
      return null;
    }
    function S(m, y, s, z, N) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return m = m.get(s) || null, c(y, m, "" + z, N);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case wl:
            return m = m.get(
              z.key === null ? s : z.key
            ) || null, i(y, m, z, N);
          case Bl:
            return m = m.get(
              z.key === null ? s : z.key
            ) || null, d(y, m, z, N);
          case Xl:
            return z = qu(z), S(
              m,
              y,
              s,
              z,
              N
            );
        }
        if (St(z) || jl(z))
          return m = m.get(s) || null, g(y, m, z, N, null);
        if (typeof z.then == "function")
          return S(
            m,
            y,
            s,
            We(z),
            N
          );
        if (z.$$typeof === Nl)
          return S(
            m,
            y,
            s,
            Le(y, z),
            N
          );
        $e(y, z);
      }
      return null;
    }
    function M(m, y, s, z) {
      for (var N = null, J = null, U = y, G = y = 0, V = null; U !== null && G < s.length; G++) {
        U.index > G ? (V = U, U = null) : V = U.sibling;
        var w = h(
          m,
          U,
          s[G],
          z
        );
        if (w === null) {
          U === null && (U = V);
          break;
        }
        l && U && w.alternate === null && t(m, U), y = n(w, y, G), J === null ? N = w : J.sibling = w, J = w, U = V;
      }
      if (G === s.length)
        return u(m, U), K && Ct(m, G), N;
      if (U === null) {
        for (; G < s.length; G++)
          U = T(m, s[G], z), U !== null && (y = n(
            U,
            y,
            G
          ), J === null ? N = U : J.sibling = U, J = U);
        return K && Ct(m, G), N;
      }
      for (U = a(U); G < s.length; G++)
        V = S(
          U,
          m,
          G,
          s[G],
          z
        ), V !== null && (l && V.alternate !== null && U.delete(
          V.key === null ? G : V.key
        ), y = n(
          V,
          y,
          G
        ), J === null ? N = V : J.sibling = V, J = V);
      return l && U.forEach(function(zu) {
        return t(m, zu);
      }), K && Ct(m, G), N;
    }
    function R(m, y, s, z) {
      if (s == null) throw Error(o(151));
      for (var N = null, J = null, U = y, G = y = 0, V = null, w = s.next(); U !== null && !w.done; G++, w = s.next()) {
        U.index > G ? (V = U, U = null) : V = U.sibling;
        var zu = h(m, U, w.value, z);
        if (zu === null) {
          U === null && (U = V);
          break;
        }
        l && U && zu.alternate === null && t(m, U), y = n(zu, y, G), J === null ? N = zu : J.sibling = zu, J = zu, U = V;
      }
      if (w.done)
        return u(m, U), K && Ct(m, G), N;
      if (U === null) {
        for (; !w.done; G++, w = s.next())
          w = T(m, w.value, z), w !== null && (y = n(w, y, G), J === null ? N = w : J.sibling = w, J = w);
        return K && Ct(m, G), N;
      }
      for (U = a(U); !w.done; G++, w = s.next())
        w = S(U, m, G, w.value, z), w !== null && (l && w.alternate !== null && U.delete(w.key === null ? G : w.key), y = n(w, y, G), J === null ? N = w : J.sibling = w, J = w);
      return l && U.forEach(function(J1) {
        return t(m, J1);
      }), K && Ct(m, G), N;
    }
    function al(m, y, s, z) {
      if (typeof s == "object" && s !== null && s.type === ql && s.key === null && (s = s.props.children), typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case wl:
            l: {
              for (var N = s.key; y !== null; ) {
                if (y.key === N) {
                  if (N = s.type, N === ql) {
                    if (y.tag === 7) {
                      u(
                        m,
                        y.sibling
                      ), z = e(
                        y,
                        s.props.children
                      ), z.return = m, m = z;
                      break l;
                    }
                  } else if (y.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Xl && qu(N) === y.type) {
                    u(
                      m,
                      y.sibling
                    ), z = e(y, s.props), Ja(z, s), z.return = m, m = z;
                    break l;
                  }
                  u(m, y);
                  break;
                } else t(m, y);
                y = y.sibling;
              }
              s.type === ql ? (z = Uu(
                s.props.children,
                m.mode,
                z,
                s.key
              ), z.return = m, m = z) : (z = Ze(
                s.type,
                s.key,
                s.props,
                null,
                m.mode,
                z
              ), Ja(z, s), z.return = m, m = z);
            }
            return f(m);
          case Bl:
            l: {
              for (N = s.key; y !== null; ) {
                if (y.key === N)
                  if (y.tag === 4 && y.stateNode.containerInfo === s.containerInfo && y.stateNode.implementation === s.implementation) {
                    u(
                      m,
                      y.sibling
                    ), z = e(y, s.children || []), z.return = m, m = z;
                    break l;
                  } else {
                    u(m, y);
                    break;
                  }
                else t(m, y);
                y = y.sibling;
              }
              z = _f(s, m.mode, z), z.return = m, m = z;
            }
            return f(m);
          case Xl:
            return s = qu(s), al(
              m,
              y,
              s,
              z
            );
        }
        if (St(s))
          return M(
            m,
            y,
            s,
            z
          );
        if (jl(s)) {
          if (N = jl(s), typeof N != "function") throw Error(o(150));
          return s = N.call(s), R(
            m,
            y,
            s,
            z
          );
        }
        if (typeof s.then == "function")
          return al(
            m,
            y,
            We(s),
            z
          );
        if (s.$$typeof === Nl)
          return al(
            m,
            y,
            Le(m, s),
            z
          );
        $e(m, s);
      }
      return typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint" ? (s = "" + s, y !== null && y.tag === 6 ? (u(m, y.sibling), z = e(y, s), z.return = m, m = z) : (u(m, y), z = Af(s, m.mode, z), z.return = m, m = z), f(m)) : u(m, y);
    }
    return function(m, y, s, z) {
      try {
        Ka = 0;
        var N = al(
          m,
          y,
          s,
          z
        );
        return ia = null, N;
      } catch (U) {
        if (U === ca || U === Je) throw U;
        var J = Pl(29, U, null, m.mode);
        return J.lanes = z, J.return = m, J;
      } finally {
      }
    };
  }
  var Yu = D0(!0), U0 = D0(!1), uu = !1;
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
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Qe(l), m0(l, null, u), t;
    }
    return je(l, a, t, u), Qe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  function Gf(l, t) {
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
  var Xf = !1;
  function Wa() {
    if (Xf) {
      var l = fa;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    Xf = !1;
    var e = l.updateQueue;
    uu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = d : c.next = d, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = d = i = null, c = n;
      do {
        var h = c.lane & -536870913, S = h !== c.lane;
        if (S ? (x & h) === h : (a & h) === h) {
          h !== 0 && h === na && (Xf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, R = c;
            h = t;
            var al = u;
            switch (R.tag) {
              case 1:
                if (M = R.payload, typeof M == "function") {
                  T = M.call(al, T, h);
                  break l;
                }
                T = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = R.payload, h = typeof M == "function" ? M.call(al, T, h) : M, h == null) break l;
                T = H({}, T, h);
                break l;
              case 2:
                uu = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [h] : S.push(h));
        } else
          S = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (d = g = S, i = T) : g = g.next = S, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), yu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function p0(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function H0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        p0(u[l], t);
  }
  var ya = v(null), Fe = v(0);
  function N0(l, t) {
    l = Kt, r(Fe, l), r(ya, t), Kt = l | t.baseLanes;
  }
  function jf() {
    r(Fe, Kt), r(ya, ya.current);
  }
  function Qf() {
    Kt = Fe.current, E(ya), E(Fe);
  }
  var lt = v(null), dt = null;
  function nu(l) {
    var t = l.alternate;
    r(ol, ol.current & 1), r(lt, l), dt === null && (t === null || ya.current !== null || t.memoizedState !== null) && (dt = l);
  }
  function Zf(l) {
    r(ol, ol.current), r(lt, l), dt === null && (dt = l);
  }
  function R0(l) {
    l.tag === 22 ? (r(ol, ol.current), r(lt, l), dt === null && (dt = l)) : fu();
  }
  function fu() {
    r(ol, ol.current), r(lt, lt.current);
  }
  function tt(l) {
    E(lt), dt === l && (dt = null), E(ol);
  }
  var ol = v(0);
  function ke(l) {
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
  var Gt = 0, B = null, tl = null, zl = null, Ie = !1, va = !1, Bu = !1, Pe = 0, Fa = 0, ma = null, Bs = 0;
  function sl() {
    throw Error(o(321));
  }
  function xf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Il(l[u], t[u])) return !1;
    return !0;
  }
  function Vf(l, t, u, a, e, n) {
    return Gt = n, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? oy : ec, Bu = !1, n = u(a, e), Bu = !1, va && (n = C0(
      t,
      u,
      a,
      e
    )), q0(l), n;
  }
  function q0(l) {
    b.H = Pa;
    var t = tl !== null && tl.next !== null;
    if (Gt = 0, zl = tl = B = null, Ie = !1, Fa = 0, ma = null, t) throw Error(o(300));
    l === null || Tl || (l = l.dependencies, l !== null && Ve(l) && (Tl = !0));
  }
  function C0(l, t, u, a) {
    B = l;
    var e = 0;
    do {
      if (va && (ma = null), Fa = 0, va = !1, 25 <= e) throw Error(o(301));
      if (e += 1, zl = tl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = Sy, n = t(u, a);
    } while (va);
    return n;
  }
  function Gs() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (tl !== null ? tl.memoizedState : null) !== l && (B.flags |= 1024), t;
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
    Gt = 0, zl = tl = B = null, va = !1, Fa = Pe = 0, ma = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zl === null ? B.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function Sl() {
    if (tl === null) {
      var l = B.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = tl.next;
    var t = zl === null ? B.memoizedState : zl.next;
    if (t !== null)
      zl = t, tl = l;
    else {
      if (l === null)
        throw B.alternate === null ? Error(o(467)) : Error(o(310));
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
  function ka(l) {
    var t = Fa;
    return Fa += 1, ma === null && (ma = []), l = r0(ma, l, t), t = B, (zl === null ? t.memoizedState : zl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? oy : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ka(l);
      if (l.$$typeof === Nl) return Ul(l);
    }
    throw Error(o(438, String(l)));
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
        u[a] = Qu;
    return t.index++, u;
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = Sl();
    return Wf(t, tl, l);
  }
  function Wf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
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
      var c = f = null, i = null, d = t, g = !1;
      do {
        var T = d.lane & -536870913;
        if (T !== d.lane ? (x & T) === T : (Gt & T) === T) {
          var h = d.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), T === na && (g = !0);
          else if ((Gt & h) === h) {
            d = d.next, h === na && (g = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, B.lanes |= h, yu |= h;
          T = d.action, Bu && u(n, T), n = d.hasEagerState ? d.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, B.lanes |= T, yu |= T;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !Il(n, l.memoizedState) && (Tl = !0, g && (u = fa, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function $f(l) {
    var t = Sl(), u = t.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Il(n, t.memoizedState) || (Tl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Y0(l, t, u) {
    var a = B, e = Sl(), n = K;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var f = !Il(
      (tl || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Tl = !0), e = e.queue, If(X0.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || zl !== null && zl.memoizedState.tag & 1) {
      if (a.flags |= 2048, sa(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), nl === null) throw Error(o(349));
      n || (Gt & 127) !== 0 || B0(a, t, u);
    }
    return u;
  }
  function B0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = B.updateQueue, t === null ? (t = ln(), B.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function G0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, j0(t) && Q0(l);
  }
  function X0(l, t, u) {
    return u(function() {
      j0(t) && Q0(l);
    });
  }
  function j0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Il(l, u);
    } catch {
      return !0;
    }
  }
  function Q0(l) {
    var t = Du(l, 2);
    t !== null && Jl(t, l, 2);
  }
  function Ff(l) {
    var t = Yl();
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
      lastRenderedReducer: Xt,
      lastRenderedState: l
    }, t;
  }
  function Z0(l, t, u, a) {
    return l.baseState = u, Wf(
      l,
      tl,
      typeof a == "function" ? a : Xt
    );
  }
  function Xs(l, t, u, a, e) {
    if (nn(l)) throw Error(o(485));
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
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, x0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function x0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), V0(l, t, c);
      } catch (d) {
        kf(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), V0(l, t, n);
      } catch (d) {
        kf(l, t, d);
      }
  }
  function V0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        L0(l, t, a);
      },
      function(a) {
        return kf(l, t, a);
      }
    ) : L0(l, t, u);
  }
  function L0(l, t, u) {
    t.status = "fulfilled", t.value = u, K0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, x0(l, u)));
  }
  function kf(l, t, u) {
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
      var u = nl.formState;
      if (u !== null) {
        l: {
          var a = B;
          if (K) {
            if (cl) {
              t: {
                for (var e = cl, n = st; e.nodeType !== 8; ) {
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
    return u = Yl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: J0,
      lastRenderedState: t
    }, u.queue = a, u = sy.bind(
      null,
      B,
      a
    ), a.dispatch = u, a = Ff(!1), n = ac.bind(
      null,
      B,
      !1,
      a.queue
    ), a = Yl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Xs.bind(
      null,
      B,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function W0(l) {
    var t = Sl();
    return $0(t, tl, l);
  }
  function $0(l, t, u) {
    if (t = Wf(
      l,
      t,
      J0
    )[0], l = un(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ka(t);
      } catch (f) {
        throw f === ca ? Je : f;
      }
    else a = t;
    t = Sl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (B.flags |= 2048, sa(
      9,
      { destroy: void 0 },
      js.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function js(l, t) {
    l.action = t;
  }
  function F0(l) {
    var t = Sl(), u = tl;
    if (u !== null)
      return $0(t, u, l);
    Sl(), t = t.memoizedState, u = Sl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function sa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = B.updateQueue, t === null && (t = ln(), B.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function k0() {
    return Sl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = Yl();
    B.flags |= l, e.memoizedState = sa(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = Sl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    tl !== null && a !== null && xf(a, tl.memoizedState.deps) ? e.memoizedState = sa(t, n, u, a) : (B.flags |= l, e.memoizedState = sa(
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
  function Qs(l) {
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
    var t = Sl().memoizedState;
    return Qs({ ref: t, nextImpl: l }), function() {
      if (($ & 2) !== 0) throw Error(o(440));
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
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && xf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ny(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && xf(t, a[1]))
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
    return u === void 0 || (Gt & 1073741824) !== 0 && (x & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = fv(), B.lanes |= l, yu |= l, u);
  }
  function fy(l, t, u, a) {
    return Il(u, t) ? u : ya.current !== null ? (l = lc(l, u, a), Il(l, t) || (Tl = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (x & 261930) === 0 ? (Tl = !0, l.memoizedState = u) : (l = fv(), B.lanes |= l, yu |= l, t);
  }
  function cy(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, ac(l, !1, t, u);
    try {
      var i = e(), d = b.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Ys(
          i,
          a
        );
        Ia(
          l,
          t,
          g,
          et(l)
        );
      } else
        Ia(
          l,
          t,
          a,
          et(l)
        );
    } catch (T) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        et()
      );
    } finally {
      _.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function Zs() {
  }
  function tc(l, t, u, a) {
    if (l.tag !== 5) throw Error(o(476));
    var e = iy(l).queue;
    cy(
      l,
      e,
      t,
      q,
      u === null ? Zs : function() {
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
        lastRenderedReducer: Xt,
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
        lastRenderedReducer: Xt,
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
      et()
    );
  }
  function uc() {
    return Ul(oe);
  }
  function vy() {
    return Sl().memoizedState;
  }
  function my() {
    return Sl().memoizedState;
  }
  function xs(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = et();
          l = au(u);
          var a = eu(t, l, u);
          a !== null && (Jl(a, t, u), wa(a, t, u)), t = { cache: Nf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vs(l, t, u) {
    var a = et();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? dy(t, u) : (u = Tf(l, t, u, a), u !== null && (Jl(u, l, a), hy(u, t, a)));
  }
  function sy(l, t, u) {
    var a = et();
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
          if (e.hasEagerState = !0, e.eagerState = c, Il(c, f))
            return je(l, t, e, 0), nl === null && Xe(), !1;
        } catch {
        } finally {
        }
      if (u = Tf(l, t, e, a), u !== null)
        return Jl(u, l, a), hy(u, t, a), !0;
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
      if (t) throw Error(o(479));
    } else
      t = Tf(
        l,
        u,
        a,
        2
      ), t !== null && Jl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === B || t !== null && t === B;
  }
  function dy(l, t) {
    va = Ie = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function hy(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  var Pa = {
    readContext: Ul,
    use: tn,
    useCallback: sl,
    useContext: sl,
    useEffect: sl,
    useImperativeHandle: sl,
    useLayoutEffect: sl,
    useInsertionEffect: sl,
    useMemo: sl,
    useReducer: sl,
    useRef: sl,
    useState: sl,
    useDebugValue: sl,
    useDeferredValue: sl,
    useTransition: sl,
    useSyncExternalStore: sl,
    useId: sl,
    useHostTransitionStatus: sl,
    useFormState: sl,
    useActionState: sl,
    useOptimistic: sl,
    useMemoCache: sl,
    useCacheRefresh: sl
  };
  Pa.useEffectEvent = sl;
  var oy = {
    readContext: Ul,
    use: tn,
    useCallback: function(l, t) {
      return Yl().memoizedState = [
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
      var u = Yl();
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
      var a = Yl();
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
      }, a.queue = l, l = l.dispatch = Vs.bind(
        null,
        B,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Yl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ff(l);
      var t = l.queue, u = sy.bind(null, B, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = Yl();
      return lc(u, l, t);
    },
    useTransition: function() {
      var l = Ff(!1);
      return l = cy.bind(
        null,
        B,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = B, e = Yl();
      if (K) {
        if (u === void 0)
          throw Error(o(407));
        u = u();
      } else {
        if (u = t(), nl === null)
          throw Error(o(349));
        (x & 127) !== 0 || B0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, I0(X0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, sa(
        9,
        { destroy: void 0 },
        G0.bind(
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
      var l = Yl(), t = nl.identifierPrefix;
      if (K) {
        var u = rt, a = _t;
        u = (a & ~(1 << 32 - kl(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Bs++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: uc,
    useFormState: w0,
    useActionState: w0,
    useOptimistic: function(l) {
      var t = Yl();
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
      return Yl().memoizedState = xs.bind(
        null,
        B
      );
    },
    useEffectEvent: function(l) {
      var t = Yl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if (($ & 2) !== 0)
          throw Error(o(440));
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
    useRef: k0,
    useState: function() {
      return un(Xt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return fy(
        u,
        tl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(Xt)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Y0,
    useId: vy,
    useHostTransitionStatus: uc,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l, t) {
      var u = Sl();
      return Z0(u, tl, l, t);
    },
    useMemoCache: wf,
    useCacheRefresh: my
  };
  ec.useEffectEvent = P0;
  var Sy = {
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
    useRef: k0,
    useState: function() {
      return $f(Xt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return tl === null ? lc(u, l, t) : fy(
        u,
        tl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $f(Xt)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Y0,
    useId: vy,
    useHostTransitionStatus: uc,
    useFormState: F0,
    useActionState: F0,
    useOptimistic: function(l, t) {
      var u = Sl();
      return tl !== null ? Z0(u, tl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: wf,
    useCacheRefresh: my
  };
  Sy.useEffectEvent = P0;
  function nc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : H({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var fc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = et(), e = au(a);
      e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (Jl(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = et(), e = au(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (Jl(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = et(), a = au(u);
      a.tag = 2, t != null && (a.callback = t), t = eu(l, a, u), t !== null && (Jl(t, l, u), wa(t, l, u));
    }
  };
  function gy(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !ja(u, a) || !ja(e, n) : !0;
  }
  function by(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && fc.enqueueReplaceState(t, t.state, null);
  }
  function Gu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = H({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function zy(l) {
    Ge(l);
  }
  function Ty(l) {
    console.error(l);
  }
  function Ey(l) {
    Ge(l);
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
  function Ay(l, t, u) {
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
  function _y(l) {
    return l = au(l), l.tag = 3, l;
  }
  function ry(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Ay(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Ay(t, u, a), typeof e != "function" && (vu === null ? vu = /* @__PURE__ */ new Set([this]) : vu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Ls(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && ea(
        t,
        u,
        e,
        !0
      ), u = lt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return dt === null ? zn() : u.alternate === null && dl === 0 && (dl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Rc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Rc(l, a, e)), !1;
        }
        throw Error(o(435, u.tag));
      }
      return Rc(l, a, e), zn(), !1;
    }
    if (K)
      return t = lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Mf && (l = Error(o(422), { cause: a }), xa(yt(l, u)))) : (a !== Mf && (t = Error(o(423), {
        cause: a
      }), xa(
        yt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = yt(a, u), e = cc(
        l.stateNode,
        a,
        e
      ), Gf(l, e), dl !== 4 && (dl = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = yt(n, u), ce === null ? ce = [n] : ce.push(n), dl !== 4 && (dl = 2), t === null) return !0;
    a = yt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = cc(u.stateNode, a, l), Gf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (vu === null || !vu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = _y(e), ry(
              e,
              l,
              u,
              a
            ), Gf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ic = Error(o(461)), Tl = !1;
  function pl(l, t, u, a) {
    t.child = l === null ? U0(t, null, u, a) : Yu(
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
    return Nu(t), a = Vf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Lf(), l !== null && !Tl ? (Kf(l, t, e), jt(l, t, e)) : (K && c && rf(t), t.flags |= 1, pl(l, t, a, e), t.child);
  }
  function My(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ef(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Dy(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ze(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Sc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ja, u(f, a) && l.ref === t.ref)
        return jt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Dy(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (ja(n, a) && l.ref === t.ref)
        if (Tl = !1, t.pendingProps = a = n, Sc(l, e))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else
          return t.lanes = l.lanes, jt(l, t, e);
    }
    return yc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function Uy(l, t, u, a) {
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
        return py(
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
        ), n !== null ? N0(t, n) : jf(), R0(t);
      else
        return a = t.lanes = 536870912, py(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), N0(t, n), fu(), t.memoizedState = null) : (l !== null && Ke(t, null), jf(), fu());
    return pl(l, t, e, u), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function py(l, t, u, a, e) {
    var n = qf();
    return n = n === null ? null : { parent: bl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), jf(), R0(t), l !== null && ea(l, t, a, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = vn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Hy(l, t, u) {
    return Yu(t, l.child, null, u), l = cn(t, t.pendingProps), l.flags |= 2, tt(t), t.memoizedState = null, l;
  }
  function Ks(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (Zf(t), (l = cl) ? (l = xv(
          l,
          st
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: rt } : null,
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
      if (Zf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Hy(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Tl || ea(l, t, u, !1), e = (u & l.childLanes) !== 0, Tl || e) {
        if (a = nl, a !== null && (f = Ti(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Du(l, f), Jl(a, l, f), ic;
        zn(), t = Hy(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, cl = ht(f.nextSibling), Dl = t, K = !0, Pt = null, st = !1, l !== null && S0(t, l), t = cn(t, a), t.flags |= 4096;
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
        throw Error(o(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function yc(l, t, u, a, e) {
    return Nu(t), u = Vf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Lf(), l !== null && !Tl ? (Kf(l, t, e), jt(l, t, e)) : (K && a && rf(t), t.flags |= 1, pl(l, t, u, e), t.child);
  }
  function Ny(l, t, u, a, e, n) {
    return Nu(t), t.updateQueue = null, u = C0(
      t,
      a,
      u,
      e
    ), q0(l), a = Lf(), l !== null && !Tl ? (Kf(l, t, n), jt(l, t, n)) : (K && a && rf(t), t.flags |= 1, pl(l, t, u, n), t.child);
  }
  function Ry(l, t, u, a, e) {
    if (Nu(t), t.stateNode === null) {
      var n = la, f = u.contextType;
      typeof f == "object" && f !== null && (n = Ul(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Yf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Ul(f) : la, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (nc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fc.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Gu(u, c);
      n.props = i;
      var d = n.context, g = u.contextType;
      f = la, typeof g == "object" && g !== null && (f = Ul(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && by(
        t,
        n,
        a,
        f
      ), uu = !1;
      var h = t.memoizedState;
      n.state = h, $a(t, a, n, e), Wa(), d = t.memoizedState, c || h !== d || uu ? (typeof T == "function" && (nc(
        t,
        u,
        T,
        a
      ), d = t.memoizedState), (i = uu || gy(
        t,
        u,
        i,
        a,
        h,
        d,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Bf(l, t), f = t.memoizedProps, g = Gu(u, f), n.props = g, T = t.pendingProps, h = n.context, d = u.contextType, i = la, typeof d == "object" && d !== null && (i = Ul(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && by(
        t,
        n,
        a,
        i
      ), uu = !1, h = t.memoizedState, n.state = h, $a(t, a, n, e), Wa();
      var S = t.memoizedState;
      f !== T || h !== S || uu || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (nc(
        t,
        u,
        c,
        a
      ), S = t.memoizedState), (g = uu || gy(
        t,
        u,
        g,
        a,
        h,
        S,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        S,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), n.props = a, n.state = S, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
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
    )) : pl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = jt(
      l,
      t,
      e
    ), l;
  }
  function qy(l, t, u, a) {
    return pu(), t.flags |= 256, pl(l, t, u, a), t.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(l) {
    return { baseLanes: l, cachePool: A0() };
  }
  function sc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= at), l;
  }
  function Cy(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (ol.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? nu(t) : fu(), (l = cl) ? (l = xv(
          l,
          st
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = d0(l), u.return = t, t.child = u, Dl = t, cl = null)) : l = null, l === null) throw lu(t);
        return Wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (fu(), e = t.mode, c = vn(
        { mode: "hidden", children: c },
        e
      ), a = Uu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = mc(u), a.childLanes = sc(
        l,
        f,
        u
      ), t.memoizedState = vc, le(null, a)) : (nu(t), dc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (nu(t), t.flags &= -257, t = hc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (fu(), t.child = l.child, t.flags |= 128, t = null) : (fu(), c = a.fallback, e = t.mode, a = vn(
          { mode: "visible", children: a.children },
          e
        ), c = Uu(
          c,
          e,
          u,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Yu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = mc(u), a.childLanes = sc(
          l,
          f,
          u
        ), t.memoizedState = vc, t = le(null, a));
      else if (nu(t), Wc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, a = Error(o(419)), a.stack = "", a.digest = f, xa({ value: a, source: null, stack: null }), t = hc(
          l,
          t,
          u
        );
      } else if (Tl || ea(l, t, u, !1), f = (u & l.childLanes) !== 0, Tl || f) {
        if (f = nl, f !== null && (a = Ti(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Du(l, a), Jl(f, l, a), ic;
        wc(c) || zn(), t = hc(
          l,
          t,
          u
        );
      } else
        wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, cl = ht(
          c.nextSibling
        ), Dl = t, K = !0, Pt = null, st = !1, l !== null && S0(t, l), t = dc(
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
    ) : (c = Uu(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, le(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = mc(u) : (e = c.cachePool, e !== null ? (i = bl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = A0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = sc(
      l,
      f,
      u
    ), t.memoizedState = vc, le(l.child, a)) : (nu(t), u = l.child, l = u.sibling, u = qt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function dc(l, t) {
    return t = vn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function vn(l, t) {
    return l = Pl(22, l, null, t), l.lanes = 0, l;
  }
  function hc(l, t, u) {
    return Yu(t, l.child, null, u), l = dc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Yy(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), pf(l.return, t, u);
  }
  function oc(l, t, u, a, e, n) {
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
    var f = ol.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, r(ol, f), pl(l, t, a, u), a = K ? Za : 0, !c && l !== null && (l.flags & 128) !== 0)
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
          l = u.alternate, l !== null && ke(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), oc(
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
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        oc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        oc(
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
  function jt(l, t, u) {
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
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, u = qt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = qt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function Sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Js(l, t, u) {
    switch (t.tag) {
      case 3:
        Cl(t, t.stateNode.containerInfo), tu(t, bl, l.memoizedState.cache), pu();
        break;
      case 27:
      case 5:
        Ma(t);
        break;
      case 4:
        Cl(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Zf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (nu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Cy(l, t, u) : (nu(t), l = jt(
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
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), r(ol, ol.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Uy(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        tu(t, bl, l.memoizedState.cache);
    }
    return jt(l, t, u);
  }
  function Gy(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Tl = !0;
      else {
        if (!Sc(l, u) && (t.flags & 128) === 0)
          return Tl = !1, Js(
            l,
            t,
            u
          );
        Tl = (l.flags & 131072) !== 0;
      }
    else
      Tl = !1, K && (t.flags & 1048576) !== 0 && o0(t, Za, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qu(t.elementType), t.type = l, typeof l == "function")
            Ef(l) ? (a = Gu(l, a), t.tag = 1, t = Ry(
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
              if (e === nt) {
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
            throw t = pt(l) || l, Error(o(306, t, ""));
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
        return a = t.type, e = Gu(
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
          if (Cl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Bf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, tu(t, bl, a), a !== n.cache && Hf(
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
              e = yt(
                Error(o(424)),
                t
              ), xa(e), t = qy(
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
              for (cl = ht(l.firstChild), Dl = t, K = !0, Pt = null, st = !0, u = U0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (pu(), a === e) {
              t = jt(
                l,
                t,
                u
              );
              break l;
            }
            pl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yn(l, t), l === null ? (u = Wv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : K || (u = t.type, l = t.pendingProps, a = Mn(
          j.current
        ).createElement(u), a[Ml] = t, a[Ql] = l, Hl(a, u, l), rl(a), t.stateNode = a) : t.memoizedState = Wv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ma(t), l === null && K && (a = t.stateNode = Kv(
          t.type,
          t.pendingProps,
          j.current
        ), Dl = t, st = !0, e = cl, hu(t.type) ? ($c = e, cl = ht(a.firstChild)) : cl = e), pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), yn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = a = cl) && (a = A1(
          a,
          t.type,
          t.pendingProps,
          st
        ), a !== null ? (t.stateNode = a, Dl = t, cl = ht(a.firstChild), st = !1, e = !0) : e = !1), e || lu(t)), Ma(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Lc(e, n) ? a = null : f !== null && Lc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          Gs,
          null,
          null,
          u
        ), oe._currentValue = e), yn(l, t), pl(l, t, a, u), t.child;
      case 6:
        return l === null && K && ((l = u = cl) && (u = _1(
          u,
          t.pendingProps,
          st
        ), u !== null ? (t.stateNode = u, Dl = t, cl = null, l = !0) : l = !1), l || lu(t)), null;
      case 13:
        return Cy(l, t, u);
      case 4:
        return Cl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Yu(
          t,
          null,
          a,
          u
        ) : pl(l, t, a, u), t.child;
      case 11:
        return Oy(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return pl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, tu(t, t.type, a.value), pl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Nu(t), e = Ul(e), a = a(e), t.flags |= 1, pl(l, t, a, u), t.child;
      case 14:
        return My(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Dy(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return By(l, t, u);
      case 31:
        return Ks(l, t, u);
      case 22:
        return Uy(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Nu(t), a = Ul(bl), l === null ? (e = qf(), e === null && (e = nl, n = Nf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Yf(t), tu(t, bl, e)) : ((l.lanes & u) !== 0 && (Bf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), tu(t, bl, a)) : (a = n.cache, tu(t, bl, a), a !== e.cache && Hf(
          t,
          [bl],
          u,
          !0
        ))), pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function gc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (vv()) l.flags |= 8192;
        else
          throw Cu = we, Cf;
    } else l.flags &= -16777217;
  }
  function Xy(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Pv(t))
      if (vv()) l.flags |= 8192;
      else
        throw Cu = we, Cf;
  }
  function mn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? gi() : 536870912, l.lanes |= t, Sa |= t);
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
  function ws(l, t, u) {
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
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(bl), hl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (aa(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Df())), il(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (il(t), Xy(t, n)) : (il(t), gc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Qt(t), il(t), Xy(t, n)) : (il(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Qt(t), il(t), gc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ee(t), u = j.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return il(t), null;
          }
          l = D.current, aa(t) ? g0(t) : (l = Kv(e, a, u), t.stateNode = l, Qt(t));
        }
        return il(t), null;
      case 5:
        if (Ee(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return il(t), null;
          }
          if (n = D.current, aa(t))
            g0(t);
          else {
            var f = Mn(
              j.current
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
            n[Ml] = t, n[Ql] = a;
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
            a && Qt(t);
          }
        }
        return il(t), gc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = j.current, aa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Dl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Ml] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Cv(l.nodeValue, u)), l || lu(t, !0);
          } else
            l = Mn(l).createTextNode(
              a
            ), l[Ml] = t, t.stateNode = l;
        }
        return il(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = aa(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Ml] = t;
            } else
              pu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), l = !1;
          } else
            u = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (tt(t), t) : (tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return il(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = aa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
              e[Ml] = t;
            } else
              pu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), e = !1;
          } else
            e = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (tt(t), t) : (tt(t), null);
        }
        return tt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), mn(t, t.updateQueue), il(t), null);
      case 4:
        return hl(), l === null && jc(t.stateNode.containerInfo), il(t), null;
      case 10:
        return Bt(t.type), il(t), null;
      case 19:
        if (E(ol), a = t.memoizedState, a === null) return il(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (dl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, mn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    s0(u, l), u = u.sibling;
                  return r(
                    ol,
                    ol.current & 1 | 2
                  ), K && Ct(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && $l() > Sn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, mn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !K)
                return il(t), null;
            } else
              2 * $l() - a.renderingStartTime > Sn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = $l(), l.sibling = null, u = ol.current, r(
          ol,
          e ? u & 1 | 2 : u & 1
        ), K && Ct(t, a.treeForkCount), l) : (il(t), null);
      case 22:
      case 23:
        return tt(t), Qf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (il(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : il(t), u = t.updateQueue, u !== null && mn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && E(Ru), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(bl), il(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ws(l, t) {
    switch (Of(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(bl), hl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (tt(t), t.alternate === null)
            throw Error(o(340));
          pu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (tt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          pu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(ol), null;
      case 4:
        return hl(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return tt(t), Qf(), l !== null && E(Ru), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(bl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jy(l, t) {
    switch (Of(t), t.tag) {
      case 3:
        Bt(bl), hl();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        hl();
        break;
      case 31:
        t.memoizedState !== null && tt(t);
        break;
      case 13:
        tt(t);
        break;
      case 19:
        E(ol);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        tt(t), Qf(), l !== null && E(Ru);
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
              } catch (g) {
                P(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      P(t, t.return, g);
    }
  }
  function Qy(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        H0(t, u);
      } catch (a) {
        P(l, l.return, a);
      }
    }
  }
  function Zy(l, t, u) {
    u.props = Gu(
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
  function Ot(l, t) {
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
  function xy(l) {
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
      S1(a, l.type, u, t), a[Ql] = t;
    } catch (e) {
      P(l, l.return, e);
    }
  }
  function Vy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && hu(l.type) || l.tag === 4;
  }
  function zc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && hu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Nt));
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (Tc(l, t, u), l = l.sibling; l !== null; )
        Tc(l, t, u), l = l.sibling;
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, u), l = l.sibling; l !== null; )
        sn(l, t, u), l = l.sibling;
  }
  function Ly(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, a, u), t[Ml] = l, t[Ql] = u;
    } catch (n) {
      P(l, l.return, n);
    }
  }
  var Zt = !1, El = !1, Ec = !1, Ky = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function $s(l, t) {
    if (l = l.containerInfo, xc = qn, l = a0(l), hf(l)) {
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
            var f = 0, c = -1, i = -1, d = 0, g = 0, T = l, h = null;
            t: for (; ; ) {
              for (var S; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (S = T.firstChild) !== null; )
                h = T, T = S;
              for (; ; ) {
                if (T === l) break t;
                if (h === u && ++d === e && (c = f), h === n && ++g === a && (i = f), (S = T.nextSibling) !== null) break;
                T = h, h = T.parentNode;
              }
              T = S;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Vc = { focusedElem: l, selectionRange: u }, qn = !1, Ol = t; Ol !== null; )
      if (t = Ol, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (t = Ol, n = t.alternate, l = t.flags, t.tag) {
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
                  var M = Gu(
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
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ol = l;
            break;
          }
          Ol = t.return;
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
            var e = Gu(
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
        a & 64 && Qy(u), a & 512 && ae(u, u.return);
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
            H0(l, t);
          } catch (f) {
            P(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ly(u);
      case 26:
      case 5:
        Vt(l, u), t === null && a & 4 && xy(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Vt(l, u);
        break;
      case 31:
        Vt(l, u), a & 4 && $y(l, u);
        break;
      case 13:
        Vt(l, u), a & 4 && Fy(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = e1.bind(
          null,
          u
        ), r1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Zt, !a) {
          t = t !== null && t.memoizedState !== null || El, e = Zt;
          var n = El;
          Zt = a, (El = t) && !n ? Lt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Vt(l, u), Zt = e, El = n;
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
    t !== null && (l.alternate = null, wy(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, xl = !1;
  function xt(l, t, u) {
    for (u = u.child; u !== null; )
      Wy(l, t, u), u = u.sibling;
  }
  function Wy(l, t, u) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Da, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        El || Ot(u, t), xt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || Ot(u, t);
        var a = yl, e = xl;
        hu(u.type) && (yl = u.stateNode, xl = !1), xt(
          l,
          t,
          u
        ), se(u.stateNode), yl = a, xl = e;
        break;
      case 5:
        El || Ot(u, t);
      case 6:
        if (a = yl, e = xl, yl = null, xt(
          l,
          t,
          u
        ), yl = a, xl = e, yl !== null)
          if (xl)
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
        yl !== null && (xl ? (l = yl, Qv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ra(l)) : Qv(yl, u.stateNode));
        break;
      case 4:
        a = yl, e = xl, yl = u.stateNode.containerInfo, xl = !0, xt(
          l,
          t,
          u
        ), yl = a, xl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cu(2, u, t), El || cu(4, u, t), xt(
          l,
          t,
          u
        );
        break;
      case 1:
        El || (Ot(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Zy(
          u,
          t,
          a
        )), xt(
          l,
          t,
          u
        );
        break;
      case 21:
        xt(
          l,
          t,
          u
        );
        break;
      case 22:
        El = (a = El) || u.memoizedState !== null, xt(
          l,
          t,
          u
        ), El = a;
        break;
      default:
        xt(
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
        ra(l);
      } catch (u) {
        P(t, t.return, u);
      }
    }
  }
  function Fy(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ra(l);
      } catch (u) {
        P(t, t.return, u);
      }
  }
  function Fs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ky()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ky()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function dn(l, t) {
    var u = Fs(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = n1.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Vl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (hu(c.type)) {
                yl = c.stateNode, xl = !1;
                break l;
              }
              break;
            case 5:
              yl = c.stateNode, xl = !1;
              break l;
            case 3:
            case 4:
              yl = c.stateNode.containerInfo, xl = !0;
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(o(160));
        Wy(n, f, e), yl = null, xl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        ky(t, l), t = t.sibling;
  }
  var bt = null;
  function ky(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Vl(t, l), Ll(l), a & 4 && (cu(3, l, l.return), ue(3, l), cu(5, l, l.return));
        break;
      case 1:
        Vl(t, l), Ll(l), a & 512 && (El || u === null || Ot(u, u.return)), a & 64 && Zt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = bt;
        if (Vl(t, l), Ll(l), a & 512 && (El || u === null || Ot(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Ha] || n[Ml] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Hl(n, a, u), n[Ml] = l, rl(n), a = n;
                      break l;
                    case "link":
                      var f = kv(
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
                      if (f = kv(
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
                      throw Error(o(468, a));
                  }
                  n[Ml] = l, rl(n), a = n;
                }
                l.stateNode = a;
              } else
                Iv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Fv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Iv(
              e,
              l.type,
              l.stateNode
            ) : Fv(
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
        Vl(t, l), Ll(l), a & 512 && (El || u === null || Ot(u, u.return)), u !== null && a & 4 && bc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Vl(t, l), Ll(l), a & 512 && (El || u === null || Ot(u, u.return)), l.flags & 32) {
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
        if (Vl(t, l), Ll(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (M) {
            P(l, l.return, M);
          }
        }
        break;
      case 3:
        if (pn = null, e = bt, bt = Dn(t.containerInfo), Vl(t, l), bt = e, Ll(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ra(t.containerInfo);
          } catch (M) {
            P(l, l.return, M);
          }
        Ec && (Ec = !1, Iy(l));
        break;
      case 4:
        a = bt, bt = Dn(
          l.stateNode.containerInfo
        ), Vl(t, l), Ll(l), bt = a;
        break;
      case 12:
        Vl(t, l), Ll(l);
        break;
      case 31:
        Vl(t, l), Ll(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 13:
        Vl(t, l), Ll(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (on = $l()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, d = Zt, g = El;
        if (Zt = d || e, El = g || i, Vl(t, l), El = g, Zt = d, Ll(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Zt || El || Xu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
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
                  var S = i.stateNode;
                  e ? Zv(S, !0) : Zv(i.stateNode, !1);
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
        Vl(t, l), Ll(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Vl(t, l), Ll(l);
    }
  }
  function Ll(l) {
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
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = zc(l);
            sn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (wu(f, ""), u.flags &= -33);
            var c = zc(l);
            sn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, d = zc(l);
            Tc(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        P(l, l.return, g);
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
  function Xu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cu(4, t, t.return), Xu(t);
          break;
        case 1:
          Ot(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Zy(
            t,
            t.return,
            u
          ), Xu(t);
          break;
        case 27:
          se(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Xu(t);
          break;
        case 22:
          t.memoizedState === null && Xu(t);
          break;
        case 30:
          Xu(t);
          break;
        default:
          Xu(t);
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
                  p0(i[e], c);
            } catch (d) {
              P(a, a.return, d);
            }
          }
          u && f & 64 && Qy(n), ae(n, n.return);
          break;
        case 27:
          Ly(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            u
          ), u && a === null && f & 4 && xy(n), ae(n, n.return);
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
          ), u && f & 4 && Fy(e, n);
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
  function Ac(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function _c(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l));
  }
  function zt(l, t, u, a) {
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
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && ue(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
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
          zt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : ee(l, t) : n._visibility & 2 ? zt(
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
        )), e & 2048 && Ac(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && _c(t.alternate, t);
        break;
      default:
        zt(
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
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? da(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (g._visibility |= 2, da(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && Ac(
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
          ), e && d & 2048 && _c(f.alternate, f);
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
            ee(u, a), e & 2048 && Ac(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && _c(a.alternate, a);
            break;
          default:
            ee(u, a);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function ha(l, t, u) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        lv(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function lv(l, t, u) {
    switch (l.tag) {
      case 26:
        ha(
          l,
          t,
          u
        ), l.flags & ne && l.memoizedState !== null && B1(
          u,
          bt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ha(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = bt;
        bt = Dn(l.stateNode.containerInfo), ha(
          l,
          t,
          u
        ), bt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ne, ne = 16777216, ha(
          l,
          t,
          u
        ), ne = a) : ha(
          l,
          t,
          u
        ));
        break;
      default:
        ha(
          l,
          t,
          u
        );
    }
  }
  function tv(l) {
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
          Ol = a, av(
            a,
            l
          );
        }
      tv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        uv(l), l = l.sibling;
  }
  function uv(l) {
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
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, av(
            a,
            l
          );
        }
      tv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, t, t.return), hn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function av(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
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
      if (a = u.child, a !== null) a.return = u, Ol = a;
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling, n = a.return;
          if (wy(a), a === u) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ol = e;
            break l;
          }
          Ol = n;
        }
    }
  }
  var ks = {
    getCacheForType: function(l) {
      var t = Ul(bl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Ul(bl).controller.signal;
    }
  }, Is = typeof WeakMap == "function" ? WeakMap : Map, $ = 0, nl = null, Q = null, x = 0, I = 0, ut = null, iu = !1, oa = !1, rc = !1, Kt = 0, dl = 0, yu = 0, ju = 0, Oc = 0, at = 0, Sa = 0, ce = null, Kl = null, Mc = !1, on = 0, ev = 0, Sn = 1 / 0, gn = null, vu = null, _l = 0, mu = null, ga = null, Jt = 0, Dc = 0, Uc = null, nv = null, ie = 0, pc = null;
  function et() {
    return ($ & 2) !== 0 && x !== 0 ? x & -x : b.T !== null ? Yc() : Ei();
  }
  function fv() {
    if (at === 0)
      if ((x & 536870912) === 0 || K) {
        var l = re;
        re <<= 1, (re & 3932160) === 0 && (re = 262144), at = l;
      } else at = 536870912;
    return l = lt.current, l !== null && (l.flags |= 32), at;
  }
  function Jl(l, t, u) {
    (l === nl && (I === 2 || I === 9) || l.cancelPendingCommit !== null) && (ba(l, 0), su(
      l,
      x,
      at,
      !1
    )), pa(l, u), (($ & 2) === 0 || l !== nl) && (l === nl && (($ & 2) === 0 && (ju |= u), dl === 4 && su(
      l,
      x,
      at,
      !1
    )), Mt(l));
  }
  function cv(l, t, u) {
    if (($ & 6) !== 0) throw Error(o(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ua(l, t), e = a ? t1(l, t) : Nc(l, t, !0), n = a;
    do {
      if (e === 0) {
        oa && !a && su(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Ps(u)) {
          e = Nc(l, t, !1), n = !1;
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
              if (i && (ba(c, f).flags |= 256), f = Nc(
                c,
                f,
                !1
              ), f !== 2) {
                if (rc && !i) {
                  c.errorRecoveryDisabledLanes |= n, ju |= n, e = 4;
                  break l;
                }
                n = Kl, Kl = e, n !== null && (Kl === null ? Kl = n : Kl.push.apply(
                  Kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ba(l, 0), su(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              su(
                a,
                t,
                at,
                !iu
              );
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (e = on + 300 - $l(), 10 < e)) {
            if (su(
              a,
              t,
              at,
              !iu
            ), Me(a, 0, !0) !== 0) break l;
            Jt = t, a.timeoutHandle = Xv(
              iv.bind(
                null,
                a,
                u,
                Kl,
                gn,
                Mc,
                t,
                at,
                ju,
                Sa,
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
          iv(
            a,
            u,
            Kl,
            gn,
            Mc,
            t,
            at,
            ju,
            Sa,
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
    Mt(l);
  }
  function iv(l, t, u, a, e, n, f, c, i, d, g, T, h, S) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt
      }, lv(
        t,
        n,
        T
      );
      var M = (n & 62914560) === n ? on - $l() : (n & 4194048) === n ? ev - $l() : 0;
      if (M = G1(
        T,
        M
      ), M !== null) {
        Jt = n, l.cancelPendingCommit = M(
          Sv.bind(
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
            g,
            T,
            null,
            h,
            S
          )
        ), su(l, n, f, !d);
        return;
      }
    }
    Sv(
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
  function Ps(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Il(n(), e)) return !1;
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
  function su(l, t, u, a) {
    t &= ~Oc, t &= ~ju, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - kl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && bi(l, u, t);
  }
  function bn() {
    return ($ & 6) === 0 ? (ye(0), !1) : !0;
  }
  function Hc() {
    if (Q !== null) {
      if (I === 0)
        var l = Q.return;
      else
        l = Q, Yt = Hu = null, Jf(l), ia = null, Ka = 0, l = Q;
      for (; l !== null; )
        jy(l.alternate, l), l = l.return;
      Q = null;
    }
  }
  function ba(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, z1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Jt = 0, Hc(), nl = l, Q = u = qt(l.current, null), x = t, I = 0, ut = null, iu = !1, oa = Ua(l, t), rc = !1, Sa = at = Oc = ju = yu = dl = 0, Kl = ce = null, Mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - kl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Kt = t, Xe(), u;
  }
  function yv(l, t) {
    B = null, b.H = Pa, t === ca || t === Je ? (t = O0(), I = 3) : t === Cf ? (t = O0(), I = 4) : I = t === ic ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, Q === null && (dl = 1, fn(
      l,
      yt(t, l.current)
    ));
  }
  function vv() {
    var l = lt.current;
    return l === null ? !0 : (x & 4194048) === x ? dt === null : (x & 62914560) === x || (x & 536870912) !== 0 ? l === dt : !1;
  }
  function mv() {
    var l = b.H;
    return b.H = Pa, l === null ? Pa : l;
  }
  function sv() {
    var l = b.A;
    return b.A = ks, l;
  }
  function zn() {
    dl = 4, iu || (x & 4194048) !== x && lt.current !== null || (oa = !0), (yu & 134217727) === 0 && (ju & 134217727) === 0 || nl === null || su(
      nl,
      x,
      at,
      !1
    );
  }
  function Nc(l, t, u) {
    var a = $;
    $ |= 2;
    var e = mv(), n = sv();
    (nl !== l || x !== t) && (gn = null, ba(l, t)), t = !1;
    var f = dl;
    l: do
      try {
        if (I !== 0 && Q !== null) {
          var c = Q, i = ut;
          switch (I) {
            case 8:
              Hc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              lt.current === null && (t = !0);
              var d = I;
              if (I = 0, ut = null, za(l, c, i, d), u && oa) {
                f = 0;
                break l;
              }
              break;
            default:
              d = I, I = 0, ut = null, za(l, c, i, d);
          }
        }
        l1(), f = dl;
        break;
      } catch (g) {
        yv(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Hu = null, $ = a, b.H = e, b.A = n, Q === null && (nl = null, x = 0, Xe()), f;
  }
  function l1() {
    for (; Q !== null; ) dv(Q);
  }
  function t1(l, t) {
    var u = $;
    $ |= 2;
    var a = mv(), e = sv();
    nl !== l || x !== t ? (gn = null, Sn = $l() + 500, ba(l, t)) : oa = Ua(
      l,
      t
    );
    l: do
      try {
        if (I !== 0 && Q !== null) {
          t = Q;
          var n = ut;
          t: switch (I) {
            case 1:
              I = 0, ut = null, za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_0(n)) {
                I = 0, ut = null, hv(t);
                break;
              }
              t = function() {
                I !== 2 && I !== 9 || nl !== l || (I = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              I = 7;
              break l;
            case 4:
              I = 5;
              break l;
            case 7:
              _0(n) ? (I = 0, ut = null, hv(t)) : (I = 0, ut = null, za(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Q.tag) {
                case 26:
                  f = Q.memoizedState;
                case 5:
                case 27:
                  var c = Q;
                  if (f ? Pv(f) : c.stateNode.complete) {
                    I = 0, ut = null;
                    var i = c.sibling;
                    if (i !== null) Q = i;
                    else {
                      var d = c.return;
                      d !== null ? (Q = d, Tn(d)) : Q = null;
                    }
                    break t;
                  }
              }
              I = 0, ut = null, za(l, t, n, 5);
              break;
            case 6:
              I = 0, ut = null, za(l, t, n, 6);
              break;
            case 8:
              Hc(), dl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        u1();
        break;
      } catch (g) {
        yv(l, g);
      }
    while (!0);
    return Yt = Hu = null, b.H = a, b.A = e, $ = u, Q !== null ? 0 : (nl = null, x = 0, Xe(), dl);
  }
  function u1() {
    for (; Q !== null && !Om(); )
      dv(Q);
  }
  function dv(l) {
    var t = Gy(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : Q = t;
  }
  function hv(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ny(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          x
        );
        break;
      case 11:
        t = Ny(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          x
        );
        break;
      case 5:
        Jf(t);
      default:
        jy(u, t), t = Q = s0(t, Kt), t = Gy(u, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : Q = t;
  }
  function za(l, t, u, a) {
    Yt = Hu = null, Jf(t), ia = null, Ka = 0;
    var e = t.return;
    try {
      if (Ls(
        l,
        e,
        t,
        u,
        x
      )) {
        dl = 1, fn(
          l,
          yt(u, l.current)
        ), Q = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Q = e, n;
      dl = 1, fn(
        l,
        yt(u, l.current)
      ), Q = null;
      return;
    }
    t.flags & 32768 ? (K || a === 1 ? l = !0 : oa || (x & 536870912) !== 0 ? l = !1 : (iu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = lt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ov(t, l)) : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ov(
          t,
          iu
        );
        return;
      }
      l = t.return;
      var u = ws(
        t.alternate,
        t,
        Kt
      );
      if (u !== null) {
        Q = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        Q = t;
        return;
      }
      Q = t = l;
    } while (t !== null);
    dl === 0 && (dl = 5);
  }
  function ov(l, t) {
    do {
      var u = Ws(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Q = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        Q = l;
        return;
      }
      Q = l = u;
    } while (l !== null);
    dl = 6, Q = null;
  }
  function Sv(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      En();
    while (_l !== 0);
    if (($ & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= zf, Ym(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === nl && (Q = nl = null, x = 0), ga = t, mu = l, Jt = u, Dc = n, Uc = e, nv = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, f1(Ae, function() {
        return Ev(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = _.p, _.p = 2, f = $, $ |= 4;
        try {
          $s(l, t, u);
        } finally {
          $ = f, _.p = e, b.T = a;
        }
      }
      _l = 1, gv(), bv(), zv();
    }
  }
  function gv() {
    if (_l === 1) {
      _l = 0;
      var l = mu, t = ga, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var e = $;
        $ |= 4;
        try {
          ky(t, l);
          var n = Vc, f = a0(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && u0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && hf(c)) {
              var d = i.start, g = i.end;
              if (g === void 0 && (g = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var S = h.getSelection(), M = c.textContent.length, R = Math.min(i.start, M), al = i.end === void 0 ? R : Math.min(i.end, M);
                  !S.extend && R > al && (f = al, al = R, R = f);
                  var m = t0(
                    c,
                    R
                  ), y = t0(
                    c,
                    al
                  );
                  if (m && y && (S.rangeCount !== 1 || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== y.node || S.focusOffset !== y.offset)) {
                    var s = T.createRange();
                    s.setStart(m.node, m.offset), S.removeAllRanges(), R > al ? (S.addRange(s), S.extend(y.node, y.offset)) : (s.setEnd(y.node, y.offset), S.addRange(s));
                  }
                }
              }
            }
            for (T = [], S = c; S = S.parentNode; )
              S.nodeType === 1 && T.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var z = T[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qn = !!xc, Vc = xc = null;
        } finally {
          $ = e, _.p = a, b.T = u;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function bv() {
    if (_l === 2) {
      _l = 0;
      var l = mu, t = ga, u = (t.flags & 8772) !== 0;
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
      _l = 3;
    }
  }
  function zv() {
    if (_l === 4 || _l === 3) {
      _l = 0, Mm();
      var l = mu, t = ga, u = Jt, a = nv;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, ga = mu = null, Tv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (vu = null), Wn(u), t = t.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function")
        try {
          Fl.onCommitFiberRoot(
            Da,
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
      (Jt & 3) !== 0 && En(), Mt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === pc ? ie++ : (ie = 0, pc = l) : ie = 0, ye(0);
    }
  }
  function Tv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function En() {
    return gv(), bv(), zv(), Ev();
  }
  function Ev() {
    if (_l !== 5) return !1;
    var l = mu, t = Dc;
    Dc = 0;
    var u = Wn(Jt), a = b.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, b.T = null, u = Uc, Uc = null;
      var n = mu, f = Jt;
      if (_l = 0, ga = mu = null, Jt = 0, ($ & 6) !== 0) throw Error(o(331));
      var c = $;
      if ($ |= 4, uv(n.current), Py(
        n,
        n.current,
        f,
        u
      ), $ = c, ye(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function")
        try {
          Fl.onPostCommitFiberRoot(Da, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, b.T = a, Tv(l, t);
    }
  }
  function Av(l, t, u) {
    t = yt(u, t), t = cc(l.stateNode, t, 2), l = eu(l, t, 2), l !== null && (pa(l, 2), Mt(l));
  }
  function P(l, t, u) {
    if (l.tag === 3)
      Av(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Av(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vu === null || !vu.has(a))) {
            l = yt(u, l), u = _y(2), a = eu(t, u, 2), a !== null && (ry(
              u,
              a,
              t,
              l
            ), pa(a, 2), Mt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Is();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (rc = !0, e.add(u), l = a1.bind(null, l, t, u), t.then(l, l));
  }
  function a1(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, nl === l && (x & u) === u && (dl === 4 || dl === 3 && (x & 62914560) === x && 300 > $l() - on ? ($ & 2) === 0 && ba(l, 0) : Oc |= u, Sa === x && (Sa = 0)), Mt(l);
  }
  function _v(l, t) {
    t === 0 && (t = gi()), l = Du(l, t), l !== null && (pa(l, t), Mt(l));
  }
  function e1(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), _v(l, u);
  }
  function n1(l, t) {
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
        throw Error(o(314));
    }
    a !== null && a.delete(t), _v(l, u);
  }
  function f1(l, t) {
    return Ln(l, t);
  }
  var An = null, Ta = null, qc = !1, _n = !1, Cc = !1, du = 0;
  function Mt(l) {
    l !== Ta && l.next === null && (Ta === null ? An = Ta = l : Ta = Ta.next = l), _n = !0, qc || (qc = !0, i1());
  }
  function ye(l, t) {
    if (!Cc && _n) {
      Cc = !0;
      do
        for (var u = !1, a = An; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - kl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Dv(a, n));
          } else
            n = x, n = Me(
              a,
              a === nl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ua(a, n) || (u = !0, Dv(a, n));
          a = a.next;
        }
      while (u);
      Cc = !1;
    }
  }
  function c1() {
    rv();
  }
  function rv() {
    _n = qc = !1;
    var l = 0;
    du !== 0 && b1() && (l = du);
    for (var t = $l(), u = null, a = An; a !== null; ) {
      var e = a.next, n = Ov(a, t);
      n === 0 ? (a.next = null, u === null ? An = e : u.next = e, e === null && (Ta = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (_n = !0)), a = e;
    }
    _l !== 0 && _l !== 5 || ye(l), du !== 0 && (du = 0);
  }
  function Ov(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - kl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Cm(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = nl, u = x, u = Me(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (I === 2 || I === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Kn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ua(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Kn(a), Wn(u)) {
        case 2:
        case 8:
          u = oi;
          break;
        case 32:
          u = Ae;
          break;
        case 268435456:
          u = Si;
          break;
        default:
          u = Ae;
      }
      return a = Mv.bind(null, l), u = Ln(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Kn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Mv(l, t) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (En() && l.callbackNode !== u)
      return null;
    var a = x;
    return a = Me(
      l,
      l === nl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (cv(l, a, t), Ov(l, $l()), l.callbackNode != null && l.callbackNode === u ? Mv.bind(null, l) : null);
  }
  function Dv(l, t) {
    if (En()) return null;
    cv(l, t, !0);
  }
  function i1() {
    T1(function() {
      ($ & 6) !== 0 ? Ln(
        hi,
        c1
      ) : rv();
    });
  }
  function Yc() {
    if (du === 0) {
      var l = na;
      l === 0 && (l = _e, _e <<= 1, (_e & 261888) === 0 && (_e = 256)), du = l;
    }
    return du;
  }
  function Uv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function pv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function y1(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Uv(
        (e[Ql] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Ql] || null) ? Uv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
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
                  var i = f ? pv(e, f) : new FormData(e);
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
                typeof n == "function" && (c.preventDefault(), i = f ? pv(e, f) : new FormData(e), tc(
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
    var Gc = bf[Bc], v1 = Gc.toLowerCase(), m1 = Gc[0].toUpperCase() + Gc.slice(1);
    gt(
      v1,
      "on" + m1
    );
  }
  gt(f0, "onAnimationEnd"), gt(c0, "onAnimationIteration"), gt(i0, "onAnimationStart"), gt("dblclick", "onDoubleClick"), gt("focusin", "onFocus"), gt("focusout", "onBlur"), gt(Ds, "onTransitionRun"), gt(Us, "onTransitionStart"), gt(ps, "onTransitionCancel"), gt(y0, "onTransitionEnd"), Ku("onMouseEnter", ["mouseout", "mouseover"]), Ku("onMouseLeave", ["mouseout", "mouseover"]), Ku("onPointerEnter", ["pointerout", "pointerover"]), Ku("onPointerLeave", ["pointerout", "pointerover"]), _u(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _u(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _u("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _u(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _u(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _u(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ve = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), s1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ve)
  );
  function Hv(l, t) {
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
            } catch (g) {
              Ge(g);
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
            } catch (g) {
              Ge(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function Z(l, t) {
    var u = t[$n];
    u === void 0 && (u = t[$n] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Nv(t, l, 2, !1), u.add(a));
  }
  function Xc(l, t, u) {
    var a = 0;
    t && (a |= 4), Nv(
      u,
      l,
      a,
      t
    );
  }
  var rn = "_reactListening" + Math.random().toString(36).slice(2);
  function jc(l) {
    if (!l[rn]) {
      l[rn] = !0, ri.forEach(function(u) {
        u !== "selectionchange" && (s1.has(u) || Xc(u, !1, l), Xc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[rn] || (t[rn] = !0, Xc("selectionchange", !1, t));
    }
  }
  function Nv(l, t, u, a) {
    switch (fm(t)) {
      case 2:
        var e = Q1;
        break;
      case 8:
        e = Z1;
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
  function Qc(l, t, u, a, e) {
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
            if (f = xu(c), f === null) return;
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
      var d = n, g = uf(u), T = [];
      l: {
        var h = v0.get(l);
        if (h !== void 0) {
          var S = Ce, M = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              S = ns;
              break;
            case "focusin":
              M = "focus", S = yf;
              break;
            case "focusout":
              M = "blur", S = yf;
              break;
            case "beforeblur":
            case "afterblur":
              S = yf;
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
              S = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = is;
              break;
            case f0:
            case c0:
            case i0:
              S = Fm;
              break;
            case y0:
              S = vs;
              break;
            case "scroll":
            case "scrollend":
              S = Km;
              break;
            case "wheel":
              S = ss;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Im;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Zi;
              break;
            case "toggle":
            case "beforetoggle":
              S = hs;
          }
          var R = (t & 4) !== 0, al = !R && (l === "scroll" || l === "scrollend"), m = R ? h !== null ? h + "Capture" : null : h;
          R = [];
          for (var y = d, s; y !== null; ) {
            var z = y;
            if (s = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || s === null || m === null || (z = Ra(y, m), z != null && R.push(
              me(y, z, s)
            )), al) break;
            y = y.return;
          }
          0 < R.length && (h = new S(
            h,
            M,
            null,
            u,
            g
          ), T.push({ event: h, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", h && u !== tf && (M = u.relatedTarget || u.fromElement) && (xu(M) || M[Zu]))
            break l;
          if ((S || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (M = u.relatedTarget || u.toElement, S = d, M = M ? xu(M) : null, M !== null && (al = ml(M), R = M.tag, M !== al || R !== 5 && R !== 27 && R !== 6) && (M = null)) : (S = null, M = d), S !== M)) {
            if (R = ji, z = "onMouseLeave", m = "onMouseEnter", y = "mouse", (l === "pointerout" || l === "pointerover") && (R = Zi, z = "onPointerLeave", m = "onPointerEnter", y = "pointer"), al = S == null ? h : Na(S), s = M == null ? h : Na(M), h = new R(
              z,
              y + "leave",
              S,
              u,
              g
            ), h.target = al, h.relatedTarget = s, z = null, xu(g) === d && (R = new R(
              m,
              y + "enter",
              M,
              u,
              g
            ), R.target = s, R.relatedTarget = al, z = R), al = z, S && M)
              t: {
                for (R = d1, m = S, y = M, s = 0, z = m; z; z = R(z))
                  s++;
                z = 0;
                for (var N = y; N; N = R(N))
                  z++;
                for (; 0 < s - z; )
                  m = R(m), s--;
                for (; 0 < z - s; )
                  y = R(y), z--;
                for (; s--; ) {
                  if (m === y || y !== null && m === y.alternate) {
                    R = m;
                    break t;
                  }
                  m = R(m), y = R(y);
                }
                R = null;
              }
            else R = null;
            S !== null && Rv(
              T,
              h,
              S,
              R,
              !1
            ), M !== null && al !== null && Rv(
              T,
              al,
              M,
              R,
              !0
            );
          }
        }
        l: {
          if (h = d ? Na(d) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file")
            var J = $i;
          else if (wi(h))
            if (Fi)
              J = rs;
            else {
              J = As;
              var U = Es;
            }
          else
            S = h.nodeName, !S || S.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && lf(d.elementType) && (J = $i) : J = _s;
          if (J && (J = J(l, d))) {
            Wi(
              T,
              J,
              u,
              g
            );
            break l;
          }
          U && U(l, h, d), l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && Pn(h, "number", h.value);
        }
        switch (U = d ? Na(d) : window, l) {
          case "focusin":
            (wi(U) || U.contentEditable === "true") && (ku = U, of = d, Qa = null);
            break;
          case "focusout":
            Qa = of = ku = null;
            break;
          case "mousedown":
            Sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sf = !1, e0(T, u, g);
            break;
          case "selectionchange":
            if (Ms) break;
          case "keydown":
          case "keyup":
            e0(T, u, g);
        }
        var G;
        if (mf)
          l: {
            switch (l) {
              case "compositionstart":
                var V = "onCompositionStart";
                break l;
              case "compositionend":
                V = "onCompositionEnd";
                break l;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break l;
            }
            V = void 0;
          }
        else
          Fu ? Ki(l, u) && (V = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (V = "onCompositionStart");
        V && (xi && u.locale !== "ko" && (Fu || V !== "onCompositionStart" ? V === "onCompositionEnd" && Fu && (G = Gi()) : (kt = g, nf = "value" in kt ? kt.value : kt.textContent, Fu = !0)), U = On(d, V), 0 < U.length && (V = new Qi(
          V,
          l,
          null,
          u,
          g
        ), T.push({ event: V, listeners: U }), G ? V.data = G : (G = Ji(u), G !== null && (V.data = G)))), (G = Ss ? gs(l, u) : bs(l, u)) && (V = On(d, "onBeforeInput"), 0 < V.length && (U = new Qi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: U,
          listeners: V
        }), U.data = G)), y1(
          T,
          l,
          d,
          u,
          g
        );
      }
      Hv(T, t);
    });
  }
  function me(l, t, u) {
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
        me(l, e, n)
      ), e = Ra(l, t), e != null && a.push(
        me(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function d1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rv(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ra(u, n), d != null && f.unshift(
        me(u, d, i)
      )) : e || (d = Ra(u, n), d != null && f.push(
        me(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var h1 = /\r\n?/g, o1 = /\u0000|\uFFFD/g;
  function qv(l) {
    return (typeof l == "string" ? l : "" + l).replace(h1, `
`).replace(o1, "");
  }
  function Cv(l, t) {
    return t = qv(t), qv(l) === t;
  }
  function ul(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || wu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && wu(l, "" + a);
        break;
      case "className":
        Ue(l, "class", a);
        break;
      case "tabIndex":
        Ue(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, u, a);
        break;
      case "style":
        Ci(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", a);
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
        a = He("" + a), l.setAttribute(u, a);
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
        a = He("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Nt);
        break;
      case "onScroll":
        a != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        a != null && Z("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(o(60));
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
        u = He("" + a), l.setAttributeNS(
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
        Z("beforetoggle", l), Z("toggle", l), De(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        De(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Vm.get(u) || u, De(l, u, a));
    }
  }
  function Zc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Ci(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? wu(l, a) : (typeof a == "number" || typeof a == "bigint") && wu(l, "" + a);
        break;
      case "onScroll":
        a != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        a != null && Z("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Nt);
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
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : De(l, u, a);
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
        Z("error", l), Z("load", l);
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
                  throw Error(o(137, t));
                default:
                  ul(l, t, n, f, u, null);
              }
          }
        e && ul(l, t, "srcSet", u.srcSet, u, null), a && ul(l, t, "src", u.src, u, null);
        return;
      case "input":
        Z("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  d = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(o(137, t));
                  break;
                default:
                  ul(l, t, a, g, u, null);
              }
          }
        Hi(
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
        Z("invalid", l), a = f = n = null;
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
        Z("invalid", l), n = e = a = null;
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
                if (c != null) throw Error(o(91));
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
        Z("beforetoggle", l), Z("toggle", l), Z("cancel", l), Z("close", l);
        break;
      case "iframe":
      case "object":
        Z("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ve.length; a++)
          Z(ve[a], l);
        break;
      case "image":
        Z("error", l), Z("load", l);
        break;
      case "details":
        Z("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Z("error", l), Z("load", l);
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
                throw Error(o(137, t));
              default:
                ul(l, t, d, a, u, null);
            }
        return;
      default:
        if (lf(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && Zc(
              l,
              t,
              g,
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
  function S1(l, t, u, a) {
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
        var e = null, n = null, f = null, c = null, i = null, d = null, g = null;
        for (S in u) {
          var T = u[S];
          if (u.hasOwnProperty(S) && T != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(S) || ul(l, t, S, null, a, T);
            }
        }
        for (var h in a) {
          var S = a[h];
          if (T = u[h], a.hasOwnProperty(h) && (S != null || T != null))
            switch (h) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                d = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                S !== T && ul(
                  l,
                  t,
                  h,
                  S,
                  a,
                  T
                );
            }
        }
        In(
          l,
          f,
          c,
          i,
          d,
          g,
          n,
          e
        );
        return;
      case "select":
        S = f = c = h = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = i;
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
                h = n;
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
        t = c, u = f, a = S, h != null ? Ju(l, !!u, h, !1) : !!a != !!u && (t != null ? Ju(l, !!u, t, !0) : Ju(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        S = h = null;
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
                h = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && ul(l, t, f, e, a, n);
            }
        Ni(l, h, S);
        return;
      case "option":
        for (var M in u)
          if (h = u[M], u.hasOwnProperty(M) && h != null && !a.hasOwnProperty(M))
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
                  h
                );
            }
        for (i in a)
          if (h = a[i], S = u[i], a.hasOwnProperty(i) && h !== S && (h != null || S != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                ul(
                  l,
                  t,
                  i,
                  h,
                  a,
                  S
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
          h = u[R], u.hasOwnProperty(R) && h != null && !a.hasOwnProperty(R) && ul(l, t, R, null, a, h);
        for (d in a)
          if (h = a[d], S = u[d], a.hasOwnProperty(d) && h !== S && (h != null || S != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(o(137, t));
                break;
              default:
                ul(
                  l,
                  t,
                  d,
                  h,
                  a,
                  S
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var al in u)
            h = u[al], u.hasOwnProperty(al) && h !== void 0 && !a.hasOwnProperty(al) && Zc(
              l,
              t,
              al,
              void 0,
              a,
              h
            );
          for (g in a)
            h = a[g], S = u[g], !a.hasOwnProperty(g) || h === S || h === void 0 && S === void 0 || Zc(
              l,
              t,
              g,
              h,
              a,
              S
            );
          return;
        }
    }
    for (var m in u)
      h = u[m], u.hasOwnProperty(m) && h != null && !a.hasOwnProperty(m) && ul(l, t, m, null, a, h);
    for (T in a)
      h = a[T], S = u[T], !a.hasOwnProperty(T) || h === S || h == null && S == null || ul(l, t, T, h, a, S);
  }
  function Yv(l) {
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
  function g1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Yv(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], d = i.startTime;
            if (d > c) break;
            var g = i.transferSize, T = i.initiatorType;
            g && Yv(T) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var xc = null, Vc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Bv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gv(l, t) {
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
  function b1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Kc ? !1 : (Kc = l, !0) : (Kc = null, !1);
  }
  var Xv = typeof setTimeout == "function" ? setTimeout : void 0, z1 = typeof clearTimeout == "function" ? clearTimeout : void 0, jv = typeof Promise == "function" ? Promise : void 0, T1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jv < "u" ? function(l) {
    return jv.resolve(null).then(l).catch(E1);
  } : Xv;
  function E1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function hu(l) {
    return l === "head";
  }
  function Qv(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), ra(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          se(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, se(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Ha] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && se(l.ownerDocument.body);
      u = e;
    } while (u);
    ra(t);
  }
  function Zv(l, t) {
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
          Jc(u), Fn(u);
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
  function A1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ha])
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
  function _1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function xv(l, t) {
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
  function r1(l, t) {
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
  function Vv(l) {
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
  function Lv(l) {
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
  function Kv(l, t, u) {
    switch (t = Mn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function se(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var ot = /* @__PURE__ */ new Map(), Jv = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = _.d;
  _.d = {
    f: O1,
    r: M1,
    D: D1,
    C: U1,
    L: p1,
    m: H1,
    X: R1,
    S: N1,
    M: q1
  };
  function O1() {
    var l = wt.f(), t = bn();
    return l || t;
  }
  function M1(l) {
    var t = Vu(l);
    t !== null && t.tag === 5 && t.type === "form" ? yy(t) : wt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function wv(l, t, u) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var e = ct(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Jv.has(e) || (Jv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Hl(t, "link", l), rl(t), a.head.appendChild(t)));
    }
  }
  function D1(l) {
    wt.D(l), wv("dns-prefetch", l, null);
  }
  function U1(l, t) {
    wt.C(l, t), wv("preconnect", l, t);
  }
  function p1(l, t, u) {
    wt.L(l, t, u);
    var a = Ea;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + ct(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + ct(
        u.imageSizes
      ) + '"]')) : e += '[href="' + ct(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Aa(l);
          break;
        case "script":
          n = _a(l);
      }
      ot.has(n) || (l = H(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), ot.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(de(n)) || t === "script" && a.querySelector(he(n)) || (t = a.createElement("link"), Hl(t, "link", l), rl(t), a.head.appendChild(t)));
    }
  }
  function H1(l, t) {
    wt.m(l, t);
    var u = Ea;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ct(a) + '"][href="' + ct(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _a(l);
      }
      if (!ot.has(n) && (l = H({ rel: "modulepreload", href: l }, t), ot.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(he(n)))
              return;
        }
        a = u.createElement("link"), Hl(a, "link", l), rl(a), u.head.appendChild(a);
      }
    }
  }
  function N1(l, t, u) {
    wt.S(l, t, u);
    var a = Ea;
    if (a && l) {
      var e = Lu(a).hoistableStyles, n = Aa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          de(n)
        ))
          c.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = ot.get(n)) && Fc(l, u);
          var i = f = a.createElement("link");
          rl(i), Hl(i, "link", l), i._p = new Promise(function(d, g) {
            i.onload = d, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Un(f, t, a);
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
  function R1(l, t) {
    wt.X(l, t);
    var u = Ea;
    if (u && l) {
      var a = Lu(u).hoistableScripts, e = _a(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = H({ src: l, async: !0 }, t), (t = ot.get(e)) && kc(l, t), n = u.createElement("script"), rl(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function q1(l, t) {
    wt.M(l, t);
    var u = Ea;
    if (u && l) {
      var a = Lu(u).hoistableScripts, e = _a(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = H({ src: l, async: !0, type: "module" }, t), (t = ot.get(e)) && kc(l, t), n = u.createElement("script"), rl(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Wv(l, t, u, a) {
    var e = (e = j.current) ? Dn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Aa(u.href), u = Lu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Aa(u.href);
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
          )) && !n._p && (f.instance = n, f.state.loading = 5), ot.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ot.set(l, u), n || C1(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(u), u = Lu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function Aa(l) {
    return 'href="' + ct(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $v(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function C1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Hl(t, "link", u), rl(t), l.head.appendChild(t));
  }
  function _a(l) {
    return '[src="' + ct(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function Fv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ct(u.href) + '"]'
          );
          if (a)
            return t.instance = a, rl(a), a;
          var e = H({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), rl(a), Hl(a, "style", e), Un(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Aa(u.href);
          var n = l.querySelector(
            de(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, rl(n), n;
          a = $v(u), (e = ot.get(e)) && Fc(a, e), n = (l.ownerDocument || l).createElement("link"), rl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Hl(n, "link", a), t.state.loading |= 4, Un(n, u.precedence, l), t.instance = n;
        case "script":
          return n = _a(u.src), (e = l.querySelector(
            he(n)
          )) ? (t.instance = e, rl(e), e) : (a = u, (e = ot.get(n)) && (a = H({}, u), kc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), rl(e), Hl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Un(a, u.precedence, l));
    return t.instance;
  }
  function Un(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var pn = null;
  function kv(l, t, u) {
    if (pn === null) {
      var a = /* @__PURE__ */ new Map(), e = pn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = pn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Ha] || n[Ml] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Iv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Y1(l, t, u) {
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
  function Pv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function B1(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Aa(a.href), n = t.querySelector(
          de(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, rl(n);
          return;
        }
        n = t.ownerDocument || t, a = $v(a), (e = ot.get(e)) && Fc(a, e), n = n.createElement("link"), rl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Hl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Hn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Ic = 0;
  function G1(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Ic === 0 && (Ic = 62500 * g1());
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
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(X1, l), Nn = null, Hn.call(l));
  }
  function X1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Nn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Nn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Hn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Nl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function j1(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(l, t, u, a, e, n, f, c, i, d, g, T) {
    return l = new j1(
      l,
      t,
      u,
      f,
      i,
      d,
      g,
      T,
      c
    ), t = 1, n === !0 && (t |= 24), n = Pl(3, null, null, t), l.current = n, n.stateNode = l, t = Nf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Yf(n), l;
  }
  function tm(l) {
    return l ? (l = la, l) : la;
  }
  function um(l, t, u, a, e, n) {
    e = tm(e), a.context === null ? a.context = e : a.pendingContext = e, a = au(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = eu(l, a, t), u !== null && (Jl(u, l, t), wa(u, l, t));
  }
  function am(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Pc(l, t) {
    am(l, t), (l = l.alternate) && am(l, t);
  }
  function em(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Du(l, 67108864);
      t !== null && Jl(t, l, 67108864), Pc(l, 67108864);
    }
  }
  function nm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = et();
      t = wn(t);
      var u = Du(l, t);
      u !== null && Jl(u, l, t), Pc(l, t);
    }
  }
  var qn = !0;
  function Q1(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 2, li(l, t, u, a);
    } finally {
      _.p = n, b.T = e;
    }
  }
  function Z1(l, t, u, a) {
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
        Qc(
          l,
          t,
          a,
          Cn,
          u
        ), cm(l, a);
      else if (V1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (cm(l, a), t & 4 && -1 < x1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Vu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Au(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - kl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Mt(n), ($ & 6) === 0 && (Sn = $l() + 500, ye(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Du(n, 2), c !== null && Jl(c, n, 2), bn(), Pc(n, 2);
            }
          if (n = ti(a), n === null && Qc(
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
        Qc(
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
    if (Cn = null, l = xu(l), l !== null) {
      var t = ml(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = gl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Al(t), l !== null) return l;
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
  function fm(l) {
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
        switch (Dm()) {
          case hi:
            return 2;
          case oi:
            return 8;
          case Ae:
          case Um:
            return 32;
          case Si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ai = !1, ou = null, Su = null, gu = null, Se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), bu = [], x1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
        break;
      case "dragenter":
      case "dragleave":
        Su = null;
        break;
      case "mouseover":
      case "mouseout":
        gu = null;
        break;
      case "pointerover":
      case "pointerout":
        Se.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function be(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Vu(t), t !== null && em(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function V1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ou = be(
          ou,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Su = be(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return gu = be(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return Se.set(
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
      case "gotpointercapture":
        return n = e.pointerId, ge.set(
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
    }
    return !1;
  }
  function im(l) {
    var t = xu(l.target);
    if (t !== null) {
      var u = ml(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = gl(u), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              nm(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Al(u), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              nm(u);
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
        return t = Vu(u), t !== null && em(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function ym(l, t, u) {
    Yn(l) && u.delete(t);
  }
  function L1() {
    ai = !1, ou !== null && Yn(ou) && (ou = null), Su !== null && Yn(Su) && (Su = null), gu !== null && Yn(gu) && (gu = null), Se.forEach(ym), ge.forEach(ym);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ai || (ai = !0, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      L1
    )));
  }
  var Gn = null;
  function vm(l) {
    Gn !== l && (Gn = l, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      function() {
        Gn === l && (Gn = null);
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
  function ra(l) {
    function t(i) {
      return Bn(i, l);
    }
    ou !== null && Bn(ou, l), Su !== null && Bn(Su, l), gu !== null && Bn(gu, l), Se.forEach(t), ge.forEach(t);
    for (var u = 0; u < bu.length; u++) {
      var a = bu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < bu.length && (u = bu[0], u.blockedOn === null); )
      im(u), u.blockedOn === null && bu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Ql] || null;
        if (typeof n == "function")
          f || vm(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ql] || null)
              c = f.formAction;
            else if (ui(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), vm(u);
        }
      }
  }
  function mm() {
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
  Xn.prototype.render = ei.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var u = t.current, a = et();
    um(u, a, l, t, null, null);
  }, Xn.prototype.unmount = ei.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      um(l.current, 2, null, l, null, null), bn(), t[Zu] = null;
    }
  };
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ei();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < bu.length && t !== 0 && t < bu[u].priority; u++) ;
      bu.splice(u, 0, l), u === 0 && im(l);
    }
  };
  var sm = fl.version;
  if (sm !== "19.2.5")
    throw Error(
      o(
        527,
        sm,
        "19.2.5"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = A(t), l = l !== null ? X(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var K1 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jn.isDisabled && jn.supportsFiber)
      try {
        Da = jn.inject(
          K1
        ), Fl = jn;
      } catch {
      }
  }
  return Te.createRoot = function(l, t) {
    if (!vl(l)) throw Error(o(299));
    var u = !1, a = "", e = zy, n = Ty, f = Ey;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = lm(
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
      mm
    ), l[Zu] = t.current, jc(l), new ei(t);
  }, Te.hydrateRoot = function(l, t, u) {
    if (!vl(l)) throw Error(o(299));
    var a = !1, e = "", n = zy, f = Ty, c = Ey, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = lm(
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
      mm
    ), t.context = tm(null), u = t.current, a = et(), a = wn(a), e = au(a), e.callback = null, eu(u, e, a), u = a, t.current.lanes = u, pa(t, u), Mt(t), l[Zu] = t.current, jc(l), new Xn(t);
  }, Te.version = "19.2.5", Te;
}
var Am;
function ud() {
  if (Am) return fi.exports;
  Am = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (fl) {
        console.error(fl);
      }
  }
  return O(), fi.exports = td(), fi.exports;
}
var ad = ud(), Oa = mi();
function ed({ sdk: O }) {
  const [fl, W] = Oa.useState(O.getProps()), [o, vl] = Oa.useState([]), [ml, gl] = Oa.useState(!0), [Al, p] = Oa.useState(null);
  return Oa.useEffect(() => O.on("propsChanged", W), [O]), Oa.useEffect(() => {
    let A = !1;
    return new window.WidgetServiceSDK().connectors.execute({ permalink: "rest-countries", method: "GET" }).then((X) => {
      A || (vl(
        [...X].sort((H, k) => k.population - H.population).slice(0, 5).map((H) => {
          var k;
          return {
            name: H.name.common,
            capital: ((k = H.capital) == null ? void 0 : k[0]) ?? "N/A",
            population: H.population,
            flag: H.flags.png
          };
        })
      ), gl(!1));
    }).catch((X) => {
      A || (p(X instanceof Error ? X.message : "Failed to load"), gl(!1));
    }), () => {
      A = !0;
    };
  }, []), /* @__PURE__ */ Dt.jsxs("section", { className: "react-widget-section", children: [
    /* @__PURE__ */ Dt.jsx("h3", { className: "react-widget-title", children: fl.title }),
    ml && /* @__PURE__ */ Dt.jsx("p", { className: "country-status", children: "Loading…" }),
    Al && /* @__PURE__ */ Dt.jsx("p", { className: "country-status country-error", children: Al }),
    !ml && !Al && /* @__PURE__ */ Dt.jsx("ul", { className: "country-list", children: o.map((A) => /* @__PURE__ */ Dt.jsxs("li", { className: "country-item", children: [
      /* @__PURE__ */ Dt.jsx(
        "img",
        {
          src: A.flag,
          alt: "",
          className: "country-flag",
          onError: (X) => {
            X.currentTarget.style.display = "none";
          }
        }
      ),
      /* @__PURE__ */ Dt.jsx("span", { className: "country-name", children: A.name }),
      /* @__PURE__ */ Dt.jsx("span", { className: "country-capital", children: A.capital })
    ] }, A.name)) })
  ] });
}
let nd = $1;
const _m = /* @__PURE__ */ new Set();
async function fd(O) {
  await O.whenReady();
  const fl = document.createElement("style");
  fl.textContent = nd, _m.add(fl), O.shadowRoot.insertBefore(fl, O.shadowRoot.firstChild);
  const W = ad.createRoot(O.getContainer());
  W.render(/* @__PURE__ */ Dt.jsx(ed, { sdk: O })), O.on("destroy", () => {
    _m.delete(fl), fl.remove(), W.unmount();
  });
}
export {
  fd as init
};
